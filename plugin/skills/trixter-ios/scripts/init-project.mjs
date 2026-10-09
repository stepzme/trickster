#!/usr/bin/env node

import { cp, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, parse, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = resolve(skillRoot, "..", "..");
const referencesRoot = resolve(skillRoot, "references");
const plugin = JSON.parse(await readFile(resolve(pluginRoot, "plugin.json"), "utf8"));

const BLOCKS = {
  agents: {
    start: "<!-- >>> trixter managed instructions >>> -->",
    end: "<!-- <<< trixter managed instructions <<< -->",
  },
  gitignore: {
    start: "# >>> trixter managed ignores >>>",
    end: "# <<< trixter managed ignores <<<",
  },
  codex: {
    start: "# >>> trixter managed MCP servers >>>",
    end: "# <<< trixter managed MCP servers <<<",
  },
};

const LEGACY_BLOCKS = {
  agents: {
    start: "<!-- >>> trickster managed instructions >>> -->",
    end: "<!-- <<< trickster managed instructions <<< -->",
  },
  gitignore: {
    start: "# >>> trickster managed ignores >>>",
    end: "# <<< trickster managed ignores <<<",
  },
  codex: {
    start: "# >>> trickster managed MCP servers >>>",
    end: "# <<< trickster managed MCP servers <<<",
  },
};

function parseTarget(argv) {
  let target = process.cwd();
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] !== "--target" || !argv[index + 1]) {
      throw new Error("Usage: node init-project.mjs [--target <path>]");
    }
    target = resolve(argv[index + 1]);
    index += 1;
  }
  return target;
}

async function readOrEmpty(path) {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return "";
    throw error;
  }
}

async function replaceManagedBlock(path, block, body) {
  const existing = await readOrEmpty(path);
  const replacement = `${block.start}\n${body.trim()}\n${block.end}`;
  const startIndex = existing.indexOf(block.start);
  const endIndex = existing.indexOf(block.end);
  let next;

  if (startIndex >= 0 && endIndex >= startIndex) {
    next = `${existing.slice(0, startIndex)}${replacement}${existing.slice(endIndex + block.end.length)}`;
  } else {
    const separator = existing.length > 0 && !existing.endsWith("\n\n") ? "\n\n" : "";
    next = `${existing}${separator}${replacement}\n`;
  }

  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, next, "utf8");
}

async function removeManagedBlock(path, block) {
  const existing = await readOrEmpty(path);
  const startIndex = existing.indexOf(block.start);
  const endIndex = existing.indexOf(block.end);
  if (startIndex < 0 || endIndex < startIndex) return;

  const before = existing.slice(0, startIndex).replace(/\n+$/, "");
  const after = existing.slice(endIndex + block.end.length).replace(/^\n+/, "");
  const next = [before, after].filter(Boolean).join("\n\n");
  if (next.trim()) {
    await writeFile(path, `${next.replace(/\n+$/, "")}\n`, "utf8");
  } else {
    await rm(path, { force: true });
  }
}

async function assertSafeProject(target) {
  const root = parse(target).root;
  if (target === root || target === resolve(homedir())) {
    throw new Error("Refusing to initialize Trixter in a filesystem or home root");
  }

  let targetStat;
  try {
    targetStat = await stat(target);
  } catch {
    throw new Error(`Project directory does not exist: ${target}`);
  }
  if (!targetStat.isDirectory()) throw new Error(`Not a project directory: ${target}`);

  const entries = await readdir(target, { withFileTypes: true });
  const hasMarker = entries.some((entry) =>
    entry.name === ".git" ||
    entry.name === "Package.swift" ||
    entry.name === "project.yml" ||
    entry.name.endsWith(".xcodeproj") ||
    entry.name.endsWith(".xcworkspace")
  );
  if (!hasMarker) {
    throw new Error("Run Trixter from an existing Git, Xcode, Swift Package, or XcodeGen project root");
  }
}

function agentsBlock() {
  return `## Trixter iOS pipeline

Before creating or substantially changing the iOS app, read and follow \`trixter/AGENTS.md\`.
The six-stage workflow, approved design sources, product artifacts, Polish review, and publication materials are under \`trixter/\`.`;
}

async function initialize(target) {
  await assertSafeProject(target);
  const destination = resolve(target, "trixter");
  const legacy = resolve(target, "trickster");
  if (existsSync(legacy) && existsSync(destination)) {
    throw new Error(
      "Both trixter/ and legacy trickster/ exist. Merge or remove one before installing so design and artifacts cannot be overwritten.",
    );
  }
  if (existsSync(legacy)) await rename(legacy, destination);
  await mkdir(destination, { recursive: true });

  for (const directory of ["roles", "adapters", "workflow", "templates", "scripts"]) {
    await rm(resolve(destination, directory), { recursive: true, force: true });
  }
  for (const directory of ["roles", "adapters", "workflow", "templates"]) {
    await cp(resolve(referencesRoot, directory), resolve(destination, directory), {
      recursive: true,
      force: true,
    });
  }

  await cp(resolve(referencesRoot, "project", "AGENTS.md"), resolve(destination, "AGENTS.md"));
  await cp(resolve(referencesRoot, "project", "README.md"), resolve(destination, "README.md"));
  await mkdir(resolve(destination, "design"), { recursive: true });
  await mkdir(resolve(destination, "artifacts"), { recursive: true });
  await writeFile(resolve(destination, "HARNESS"), "codex\n", "utf8");
  await writeFile(resolve(destination, "VERSION"), `${plugin.version}\n`, "utf8");

  await removeManagedBlock(resolve(target, ".gitignore"), BLOCKS.gitignore);
  await removeManagedBlock(resolve(target, ".codex", "config.toml"), BLOCKS.codex);
  await removeManagedBlock(resolve(target, ".gitignore"), LEGACY_BLOCKS.gitignore);
  await removeManagedBlock(resolve(target, ".codex", "config.toml"), LEGACY_BLOCKS.codex);
  await removeManagedBlock(resolve(target, "AGENTS.md"), LEGACY_BLOCKS.agents);
  await replaceManagedBlock(resolve(target, "AGENTS.md"), BLOCKS.agents, agentsBlock());

  console.log(`Trixter ${plugin.version} installed in ${destination}`);
}

await initialize(parseTarget(process.argv.slice(2)));
