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

function usage() {
  return `Usage:
  trickster init [--target <path>] [--harness codex|generic] [--yes]
  trickster doctor [--target <path>] [--harness codex|generic]

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
      if (!value) throw new Error("--harness requires codex or generic");
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
  if (value !== "codex" && value !== "generic") {
    throw new Error(`Unsupported harness: ${value}. Expected codex or generic`);
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

async function replaceManagedBlock(path, block, body) {
  const existing = await readOrEmpty(path);
  const replacement = `${block.start}\n${body.trim()}\n${block.end}`;
  const startIndex = existing.indexOf(block.start);
  const endIndex = existing.indexOf(block.end);
  let next;

  if (startIndex >= 0 && endIndex >= startIndex) {
    const afterEnd = endIndex + block.end.length;
    next = `${existing.slice(0, startIndex)}${replacement}${existing.slice(afterEnd)}`;
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
The workflow, approved design composition, artifacts, and acceptance evidence are under \`trickster/\`.`;
}

async function copyKit(target, harness) {
  const destination = resolve(target, "trickster");
  await mkdir(destination, { recursive: true });
  for (const managedDirectory of ["roles", "adapters", "workflow", "templates"]) {
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
} = {}) {
  const project = await assertSafeProject(target ?? process.cwd());
  const selectedHarness = validateHarness(harness);
  if (selectedHarness === "codex" && !commandExists("codex")) {
    throw new Error("Codex CLI was not found on PATH");
  }

  await copyKit(project, selectedHarness);

  await removeManagedBlock(resolve(project, ".gitignore"), BLOCKS.gitignore);
  await removeManagedBlock(resolve(project, ".codex", "config.toml"), BLOCKS.codex);
  if (selectedHarness === "codex") {
    await replaceManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.agents, agentsBlock());
  } else {
    await removeManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.agents);
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
      console.log("2. Start the task; the pipeline will reconcile the local-first product scope with all eleven mandatory iOS capabilities, then compose approved UI, UX, and optional illustration references before feedback-gated implementation.");
    } else {
      console.log("1. Read trickster/adapters/generic.md and map the orchestration operations to your harness.");
      console.log("2. Verify shell, Xcode, Simulator, physical-device access, UI interaction and image viewing.");
      console.log("3. Start the task; unsupported delegation will use the sequential fallback.");
    }
    console.log(`\n${outputStyle.accent("Start a new task in your agent and paste a brief like this:")}\n`);
    console.log(STARTER_BRIEF);
    console.log(
      `\n${outputStyle.muted("A short description is enough. Trickster will reconcile all eleven mandatory iOS capabilities into a local-first product, guide design composition, request implementation feedback, and enforce the delivery gates.")}`,
    );
  }

  return result;
}

export async function doctorProject(target = process.cwd(), { quiet = false, harness } = {}) {
  const project = await assertSafeProject(target);
  const configuredHarness = (await readOrEmpty(resolve(project, "trickster", "HARNESS"))).trim();
  const selectedHarness = validateHarness((harness ?? configuredHarness) || "codex");
  const checks = [
    ["Trickster instructions", existsSync(resolve(project, "trickster", "AGENTS.md"))],
    ["Role contracts", existsSync(resolve(project, "trickster", "roles", "acceptance-reviewer.md"))],
    ["Harness adapter", existsSync(resolve(project, "trickster", "adapters", `${selectedHarness}.md`))],
    ["iOS capability workflow", existsSync(resolve(project, "trickster", "workflow", "ios-capabilities.md"))],
    ["Reference composition workflow", existsSync(resolve(project, "trickster", "workflow", "style-reference.md"))],
    ["Core implementation workflow", existsSync(resolve(project, "trickster", "workflow", "implementation-core.md"))],
    ["Full implementation workflow", existsSync(resolve(project, "trickster", "workflow", "implementation-full.md"))],
    ["Hardening workflow", existsSync(resolve(project, "trickster", "workflow", "implementation-hardening.md"))],
    ["Launch-screen workflow", existsSync(resolve(project, "trickster", "workflow", "launch-screen.md"))],
  ];
  if (selectedHarness === "codex") {
    checks.unshift(["Codex CLI", commandExists("codex")]);
  }
  const ready = checks.every(([, passed]) => passed);

  if (!quiet) {
    console.log(`${outputStyle.muted("HARNESS")}  ${outputStyle.strong(selectedHarness)}`);
    for (const [name, passed] of checks) {
      const status = passed
        ? outputStyle.accent("PASS")
        : outputStyle.error("MISSING");
      console.log(`${status}  ${name}`);
    }
    if (selectedHarness === "codex") {
      console.log(
        `${outputStyle.warning("VERIFY")}   Codex role delegation or the sequential fallback in the task session`,
      );
    } else {
      console.log(
        `${outputStyle.warning("VERIFY")}   The selected harness loads Trickster instructions`,
      );
      console.log(
        `${outputStyle.warning("VERIFY")}   Shell, Xcode, Simulator, physical-device access, image viewing and role delegation or sequential fallback`,
      );
    }
    console.log(
      `${outputStyle.accent("PRODUCT")} The task reconciles core scope with all eleven mandatory iOS capabilities inside the local-first boundary before reference research`,
    );
    console.log(
      `${outputStyle.accent("DESIGN")}  The task composes approved UI, UX and optional illustration sources into one coherent local direction`,
    );
    const conclusion = ready
      ? outputStyle.accent("Local installation is ready to use.")
      : outputStyle.error("Trickster is not ready.");
    console.log(`\n${conclusion}`);
  }

  return { project, harness: selectedHarness, checks, ready };
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
