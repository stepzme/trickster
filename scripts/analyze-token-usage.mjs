import { createReadStream } from "node:fs";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { createInterface } from "node:readline";
import { pathToFileURL } from "node:url";

import { validateRunState } from "./validate-run-artifacts.mjs";

function zeroUsage() {
  return {
    input_tokens: 0,
    cached_input_tokens: 0,
    cache_write_input_tokens: 0,
    output_tokens: 0,
    reasoning_output_tokens: 0,
    total_tokens: 0,
  };
}

function addUsage(target, usage = {}) {
  for (const key of Object.keys(target)) target[key] += usage[key] ?? 0;
  return target;
}

function summarize(grouped) {
  return [...grouped.entries()]
    .map(([name, value]) => ({ name, ...value }))
    .sort((left, right) => right.total_tokens - left.total_tokens);
}

function findAssignment(record, recordsById, assignmentsById) {
  let current = record;
  const visited = new Set();
  while (current && !visited.has(current.id)) {
    visited.add(current.id);
    if (assignmentsById.has(current.id)) return assignmentsById.get(current.id);
    current = recordsById.get(current.parentThreadId);
  }
  return null;
}

export function createUsageReport(runState, sessionRecords) {
  const assignmentsById = new Map(
    runState.sessions.map((session) => [session.threadId, session]),
  );
  const recordsById = new Map();
  for (const record of sessionRecords) {
    const existing = recordsById.get(record.id);
    if (!existing || (!existing.usage && record.usage)) recordsById.set(record.id, record);
  }
  const included = [];

  for (const record of recordsById.values()) {
    const assignment = findAssignment(record, recordsById, assignmentsById);
    if (assignment && record.usage) included.push({ record, assignment });
  }

  const totals = zeroUsage();
  const byPhase = new Map();
  const byRole = new Map();
  const bySource = new Map();
  const accumulate = (map, key, usage) => {
    if (!map.has(key)) map.set(key, zeroUsage());
    addUsage(map.get(key), usage);
  };

  for (const { record, assignment } of included) {
    addUsage(totals, record.usage);
    accumulate(byPhase, assignment.phase, record.usage);
    accumulate(byRole, assignment.role, record.usage);
    accumulate(bySource, record.source ?? "unknown", record.usage);
  }

  const uncachedInput = totals.input_tokens - totals.cached_input_tokens - totals.cache_write_input_tokens;
  const newLoad = uncachedInput + totals.output_tokens;
  const missingThreadIds = runState.sessions
    .map((session) => session.threadId)
    .filter((threadId) => !recordsById.has(threadId));
  const sessionsWithoutUsage = runState.sessions
    .map((session) => session.threadId)
    .filter((threadId) => recordsById.has(threadId) && !recordsById.get(threadId).usage);

  return {
    schemaVersion: 1,
    runId: runState.runId,
    generatedAt: new Date().toISOString(),
    sessionCount: included.length,
    totals,
    derived: {
      uncachedInput,
      uncachedInputPlusOutput: newLoad,
      cacheHitPercent: totals.input_tokens === 0
        ? 0
        : (100 * totals.cached_input_tokens) / totals.input_tokens,
      contextAmplification: newLoad === 0 ? 0 : totals.total_tokens / newLoad,
    },
    byPhase: summarize(byPhase),
    byRole: summarize(byRole),
    bySource: summarize(bySource),
    missingThreadIds,
    sessionsWithoutUsage,
  };
}

async function collectJsonlFiles(root) {
  const files = [];
  let entries;
  try {
    entries = await readdir(root, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return files;
    throw error;
  }
  for (const entry of entries) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) files.push(...await collectJsonlFiles(path));
    else if (entry.isFile() && entry.name.endsWith(".jsonl")) files.push(path);
  }
  return files;
}

async function readSessionMetadata(path) {
  const lines = createInterface({
    input: createReadStream(path, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  for await (const line of lines) {
    let item;
    try {
      item = JSON.parse(line);
    } catch {
      continue;
    }
    if (item.type !== "session_meta" || !item.payload?.id) continue;
    lines.close();
    return {
      id: item.payload.id,
      parentThreadId: item.payload.parent_thread_id ?? null,
      source: item.payload.thread_source ?? "unknown",
      path,
      usage: null,
    };
  }
  return null;
}

async function readSessionUsage(path) {
  const lines = createInterface({
    input: createReadStream(path, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  let usage = null;
  for await (const line of lines) {
    let item;
    try {
      item = JSON.parse(line);
    } catch {
      continue;
    }
    if (item.type === "event_msg" && item.payload?.type === "token_count") {
      usage = item.payload.info?.total_token_usage ?? usage;
    }
  }
  return usage;
}

function parseArgs(argv) {
  const options = { roots: [], output: null, runState: null };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--run-state") options.runState = argv[++index];
    else if (argument === "--sessions-root") options.roots.push(argv[++index]);
    else if (argument === "--output") options.output = argv[++index];
    else throw new Error(`Unknown argument: ${argument}`);
  }
  if (!options.runState) throw new Error("--run-state is required");
  if (options.roots.some((root) => !root)) throw new Error("--sessions-root requires a path");
  if (options.roots.length === 0) {
    const codexRoot = process.env.CODEX_HOME
      ? resolve(process.env.CODEX_HOME)
      : resolve(homedir(), ".codex");
    options.roots.push(join(codexRoot, "sessions"), join(codexRoot, "archived_sessions"));
  }
  return options;
}

async function runCli(argv) {
  const options = parseArgs(argv);
  const runState = JSON.parse(await readFile(options.runState, "utf8"));
  const validation = validateRunState(runState);
  if (!validation.valid) throw new Error(`invalid run state: ${validation.errors.join("; ")}`);
  const files = (await Promise.all(options.roots.map(collectJsonlFiles))).flat();
  const metadataById = new Map();
  for (const file of files) {
    const metadata = await readSessionMetadata(file);
    if (metadata) metadataById.set(metadata.id, metadata);
  }
  const assignmentsById = new Map(
    runState.sessions.map((session) => [session.threadId, session]),
  );
  for (const metadata of metadataById.values()) {
    if (findAssignment(metadata, metadataById, assignmentsById)) {
      metadata.usage = await readSessionUsage(metadata.path);
    }
  }
  const records = [...metadataById.values()];
  const report = createUsageReport(runState, records);
  const serialized = `${JSON.stringify(report, null, 2)}\n`;
  if (options.output) {
    await writeFile(options.output, serialized, "utf8");
    console.log(`Wrote ${options.output}`);
  } else {
    process.stdout.write(serialized);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  try {
    await runCli(process.argv.slice(2));
  } catch (error) {
    console.error(`Usage analysis failed: ${error.message}`);
    process.exitCode = 1;
  }
}
