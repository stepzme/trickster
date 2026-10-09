import { spawnSync } from "node:child_process";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, parse, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { createTerminalStyle } from "./terminal-style.mjs";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, "package.json"), "utf8"),
);
const VERSION = packageJson.version;
const outputStyle = createTerminalStyle(process.stdout);

const BLOCKS = {
  instructions: {
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

function usage() {
  return `Usage:
  trickster init [--target <path>] [--harness codex|claude-code|generic] [--yes]
  trickster doctor [--target <path>] [--harness codex|claude-code|generic]

Trickster is project-scoped. Run it from the root of an existing project.`;
}

const STARTER_BRIEF = `Use Trickster to create or substantially change a native iOS app.

Idea:
User:
Primary task:
Required features:
Out of scope:
Constraints:`;

function parseArgs(argv) {
  if (argv[0] === "--help" || argv[0] === "-h") {
    return {
      command: "help",
      target: process.cwd(),
      yes: false,
      harness: undefined,
    };
  }
  const [command = "help", ...rest] = argv;
  const options = {
    command,
    target: process.cwd(),
    yes: false,
    harness: undefined,
  };

  for (let index = 0; index < rest.length; index += 1) {
    const argument = rest[index];
    if (argument === "--target") {
      const value = rest[index + 1];
      if (!value) throw new Error("--target requires a path");
      options.target = resolve(value);
      index += 1;
    } else if (argument === "--yes" || argument === "-y") {
      options.yes = true;
    } else if (argument === "--harness") {
      const value = rest[index + 1];
      if (!value) throw new Error("--harness requires codex, claude-code, or generic");
      options.harness = validateHarness(value);
      index += 1;
    } else if (argument === "--help" || argument === "-h") {
      options.command = "help";
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }

  return options;
}

function validateHarness(value) {
  if (value !== "codex" && value !== "claude-code" && value !== "generic") {
    throw new Error(`Unsupported harness: ${value}. Expected codex, claude-code, or generic`);
  }
  return value;
}

async function readOrEmpty(path) {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return "";
    throw error;
  }
}

function stripManagedBlock(existing, block, body) {
  let next = existing;
  const normalizedBody = body?.trim();
  const exactFragments = normalizedBody
    ? [
        `${block.start}\n${normalizedBody}\n${block.end}`,
        `${block.start}\n${normalizedBody}`,
        `${normalizedBody}\n${block.end}`,
      ]
    : [];

  for (const fragment of exactFragments) {
    next = next.replaceAll(fragment, "");
  }

  while (true) {
    const startIndex = next.indexOf(block.start);
    if (startIndex < 0) break;
    const endIndex = next.indexOf(block.end, startIndex + block.start.length);
    if (endIndex < 0) break;
    next = `${next.slice(0, startIndex)}${next.slice(endIndex + block.end.length)}`;
  }

  next = next
    .split("\n")
    .filter((line) => line.trim() !== block.start && line.trim() !== block.end)
    .join("\n")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "")
    .replace(/\n{3,}/g, "\n\n");

  return next;
}

async function replaceManagedBlock(path, block, body) {
  const existing = stripManagedBlock(await readOrEmpty(path), block, body);
  const replacement = `${block.start}\n${body.trim()}\n${block.end}`;
  const next = existing ? `${existing}\n\n${replacement}\n` : `${replacement}\n`;

  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, next, "utf8");
}

async function removeManagedBlock(path, block, body) {
  const existing = await readOrEmpty(path);
  const next = stripManagedBlock(existing, block, body);
  if (next === existing.replace(/\n+$/, "")) return;

  if (next.trim()) {
    await writeFile(path, `${next.replace(/\n+$/, "")}\n`, "utf8");
  } else {
    await rm(path, { force: true });
  }
}

async function hasProjectMarker(target) {
  const entries = await readdir(target, { withFileTypes: true });
  return entries.some((entry) =>
    entry.name === ".git" ||
    entry.name === "Package.swift" ||
    entry.name === "project.yml" ||
    entry.name.endsWith(".xcodeproj") ||
    entry.name.endsWith(".xcworkspace")
  );
}

export async function assertSafeProject(target) {
  const resolvedTarget = resolve(target);
  const root = parse(resolvedTarget).root;

  if (resolvedTarget === root || resolvedTarget === resolve(homedir())) {
    throw new Error("Refusing to initialize Trickster in a filesystem or home root");
  }

  let targetStat;
  try {
    targetStat = await stat(resolvedTarget);
  } catch {
    throw new Error(`Project directory does not exist: ${resolvedTarget}`);
  }

  if (!targetStat.isDirectory() || !(await hasProjectMarker(resolvedTarget))) {
    throw new Error(
      "Run Trickster from an existing Git, Xcode, Swift Package, or XcodeGen project root",
    );
  }

  return resolvedTarget;
}

export function isGlobalPackagePath(modulePath) {
  const normalized = modulePath.replaceAll("\\", "/").toLowerCase();
  return normalized.includes("/lib/node_modules/@sgx22/trickster/") ||
    normalized.includes("/npm/node_modules/@sgx22/trickster/");
}

function commandExists(command) {
  return spawnSync("/usr/bin/env", ["which", command], {
    stdio: "ignore",
  }).status === 0;
}

function agentsBlock() {
  return `## Trickster iOS pipeline

Before creating or substantially changing the iOS app, read and follow \`trickster/AGENTS.md\`.
The six-stage workflow, approved design sources, product artifacts, Polish review, and publication materials are under \`trickster/\`.`;
}

function claudeBlock() {
  return `@trickster/AGENTS.md

## Trickster orchestration

The main agent manages the workflow, communicates with the user, records approvals, and authorizes stage transitions. Subagents perform only the assigned role and stage.`;
}

async function hasManagedBlock(path, block, body) {
  const content = await readOrEmpty(path);
  const expected = `${block.start}\n${body.trim()}\n${block.end}`;
  return content.includes(expected) &&
    content.indexOf(block.start) === content.lastIndexOf(block.start) &&
    content.indexOf(block.end) === content.lastIndexOf(block.end);
}

async function hasNoManagedMarkers(path, block) {
  const content = await readOrEmpty(path);
  return !content.includes(block.start) && !content.includes(block.end);
}

async function copyKit(target, harness) {
  const destination = resolve(target, "trickster");
  await mkdir(destination, { recursive: true });
  for (const managedDirectory of ["roles", "adapters", "workflow", "templates", "scripts"]) {
    await rm(resolve(destination, managedDirectory), { recursive: true, force: true });
  }
  await cp(resolve(packageRoot, "roles"), resolve(destination, "roles"), {
    recursive: true,
    force: true,
  });
  await cp(resolve(packageRoot, "adapters"), resolve(destination, "adapters"), {
    recursive: true,
    force: true,
  });
  await cp(resolve(packageRoot, "workflow"), resolve(destination, "workflow"), {
    recursive: true,
    force: true,
  });
  await rm(resolve(destination, "agents"), { recursive: true, force: true });
  await rm(resolve(destination, "workflow", "delegation.md"), { force: true });
  await cp(resolve(packageRoot, "templates"), resolve(destination, "templates"), {
    recursive: true,
    force: true,
  });
  await cp(resolve(packageRoot, "installer", "assets", "AGENTS.md"), resolve(destination, "AGENTS.md"), {
    force: true,
  });
  await cp(resolve(packageRoot, "installer", "assets", "README.md"), resolve(destination, "README.md"), {
    force: true,
  });
  await mkdir(resolve(destination, "design"), { recursive: true });
  await mkdir(resolve(destination, "artifacts"), { recursive: true });
  await writeFile(resolve(destination, "HARNESS"), `${harness}\n`, "utf8");
  await writeFile(resolve(destination, "VERSION"), `${VERSION}\n`, "utf8");
}

export async function initializeProject({
  target,
  yes = false,
  harness = "codex",
  quiet = false,
  commandCheck = commandExists,
} = {}) {
  const project = await assertSafeProject(target ?? process.cwd());
  const selectedHarness = validateHarness(harness);
  if (selectedHarness === "codex" && !commandCheck("codex")) {
    throw new Error("Codex CLI was not found on PATH");
  }
  if (selectedHarness === "claude-code" && !commandCheck("claude")) {
    throw new Error("Claude CLI was not found on PATH");
  }

  await copyKit(project, selectedHarness);

  await removeManagedBlock(resolve(project, ".gitignore"), BLOCKS.gitignore);
  await removeManagedBlock(resolve(project, ".codex", "config.toml"), BLOCKS.codex);
  await removeManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.instructions, agentsBlock());
  await removeManagedBlock(resolve(project, "CLAUDE.md"), BLOCKS.instructions, claudeBlock());
  if (selectedHarness === "codex") {
    await replaceManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.instructions, agentsBlock());
  } else if (selectedHarness === "claude-code") {
    await replaceManagedBlock(resolve(project, "CLAUDE.md"), BLOCKS.instructions, claudeBlock());
  }

  const result = {
    project,
    harness: selectedHarness,
  };

  if (!quiet) {
    console.log(
      `\n${outputStyle.accent(`✦ trickster ${VERSION}`)} ${outputStyle.strong("installed")} in ${resolve(project, "trickster")}`,
    );
    console.log(`${outputStyle.muted("Harness:")} ${selectedHarness}`);
    console.log(`\n${outputStyle.accent("Next:")}`);
    if (selectedHarness === "codex") {
      console.log("1. Restart Codex if project instructions were already loaded in the current session.");
      console.log("2. Start the task; Trickster will define the complete product, prove the design in Simulator, build it in approved blocks, polish the app, and create publication materials.");
    } else if (selectedHarness === "claude-code") {
      console.log("1. Start a new Claude Code session so the project instructions are loaded.");
      console.log("2. Run /context and confirm that CLAUDE.md imports trickster/AGENTS.md.");
      console.log("3. Start the task; Claude Code support is experimental and still requires a full real-session validation.");
    } else {
      console.log("1. Read trickster/adapters/generic.md and map the orchestration operations to your harness.");
      console.log("2. Verify shell, Xcode, Simulator, physical-device access, UI interaction and image viewing.");
      console.log("3. Start the task; unsupported delegation will use the sequential fallback.");
    }
    console.log(`\n${outputStyle.accent("Start a new task in your agent and paste a brief like this:")}\n`);
    console.log(STARTER_BRIEF);
    console.log(
      `\n${outputStyle.muted("A short description is enough. Trickster will include all eleven mandatory iOS capabilities and ask for explicit approval at each product, design, and development boundary.")}`,
    );
  }

  return result;
}

export async function doctorProject(
  target = process.cwd(),
  { quiet = false, harness, commandCheck = commandExists } = {},
) {
  const project = await assertSafeProject(target);
  const configuredHarness = (await readOrEmpty(resolve(project, "trickster", "HARNESS"))).trim();
  const selectedHarness = validateHarness((harness ?? configuredHarness) || "codex");
  const entryPointReady = selectedHarness === "codex"
    ? await hasManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.instructions, agentsBlock())
    : selectedHarness === "claude-code"
      ? await hasManagedBlock(resolve(project, "CLAUDE.md"), BLOCKS.instructions, claudeBlock())
      : await hasNoManagedMarkers(resolve(project, "AGENTS.md"), BLOCKS.instructions) &&
        await hasNoManagedMarkers(resolve(project, "CLAUDE.md"), BLOCKS.instructions);
  const installationChecks = [
    ["Trickster instructions", existsSync(resolve(project, "trickster", "AGENTS.md"))],
    ["Role contracts", existsSync(resolve(project, "trickster", "roles", "designer.md")) && existsSync(resolve(project, "trickster", "roles", "acceptance-reviewer.md"))],
    ["Harness adapter", existsSync(resolve(project, "trickster", "adapters", `${selectedHarness}.md`))],
    ["Harness entry point", entryPointReady],
    ["Researcher capability contract", existsSync(resolve(project, "trickster", "roles", "product-researcher.md"))],
    ["Research workflow", existsSync(resolve(project, "trickster", "workflow", "research.md"))],
    ["Planning workflow", existsSync(resolve(project, "trickster", "workflow", "planning.md"))],
    ["Design workflow", existsSync(resolve(project, "trickster", "workflow", "design.md"))],
    ["Dev workflow", existsSync(resolve(project, "trickster", "workflow", "dev.md"))],
    ["Polish workflow", existsSync(resolve(project, "trickster", "workflow", "polish.md"))],
    ["Publish workflow", existsSync(resolve(project, "trickster", "workflow", "publish.md"))],
  ];
  const localChecks = [
    ["Node.js 20+", Number.parseInt(process.versions.node, 10) >= 20],
  ];
  if (selectedHarness === "codex") {
    localChecks.push(["Codex CLI", commandCheck("codex")]);
  } else if (selectedHarness === "claude-code") {
    localChecks.push(["Claude CLI", commandCheck("claude")]);
  }
  const sessionChecks = [
    "The selected harness loads Trickster instructions",
    "Shell commands run in the project",
    "Xcode and a suitable Simulator runtime are available",
    "The app can launch and its Simulator UI can be controlled",
    "Current Simulator screenshots can be viewed",
    "The design catalog is reachable",
    "Role delegation or the sequential fallback works",
  ];
  const checks = [...installationChecks, ...localChecks];
  const ready = checks.every(([, passed]) => passed);

  if (!quiet) {
    console.log(`${outputStyle.muted("HARNESS")}  ${outputStyle.strong(selectedHarness)}`);
    console.log(`\n${outputStyle.muted("INSTALLATION")}`);
    for (const [name, passed] of installationChecks) {
      const status = passed
        ? outputStyle.accent("PASS")
        : outputStyle.error("MISSING");
      console.log(`${status}  ${name}`);
    }
    console.log(`\n${outputStyle.muted("LOCAL TOOLS")}`);
    for (const [name, passed] of localChecks) {
      const status = passed
        ? outputStyle.accent("PASS")
        : outputStyle.error("MISSING");
      console.log(`${status}  ${name}`);
    }
    console.log(`\n${outputStyle.muted("SESSION CHECKS")}`);
    for (const name of sessionChecks) {
      console.log(`${outputStyle.warning("VERIFY")}  ${name}`);
    }
    console.log(
      `${outputStyle.accent("PRODUCT")} Research defines the complete product and all eleven mandatory iOS capabilities before Planning or Design`,
    );
    console.log(
      `${outputStyle.accent("DESIGN")}  The Designer proves the approved source direction in a running Simulator MVP before Dev begins`,
    );
    console.log(
      `${outputStyle.accent("FINISH")}  Polish verifies the completed app before Publish creates the final icon and store screenshots`,
    );
    const conclusion = ready
      ? outputStyle.accent("Local installation is ready to use.")
      : outputStyle.error("Trickster is not ready.");
    console.log(`\n${conclusion}`);
  }

  return {
    project,
    harness: selectedHarness,
    installationChecks,
    localChecks,
    sessionChecks,
    checks,
    ready,
  };
}

export async function runCli(argv) {
  const options = parseArgs(argv);
  if (options.command === "help") {
    console.log(usage());
    return;
  }
  if (options.command === "init") {
    await initializeProject(options);
    return;
  }
  if (options.command === "doctor") {
    const result = await doctorProject(options.target, { harness: options.harness });
    if (!result.ready) process.exitCode = 1;
    return;
  }
  throw new Error(`Unknown command: ${options.command}\n\n${usage()}`);
}
