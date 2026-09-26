import { spawn, spawnSync } from "node:child_process";
import { chmod, cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, parse, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline/promises";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await readFile(resolve(packageRoot, "package.json"), "utf8"),
);
const VERSION = packageJson.version;

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
  trickster init [--target <path>] [--harness codex|generic] [--yes] [--skip-runtime-install] [--skip-scrn-login]
  trickster doctor [--target <path>] [--harness codex|generic]

Trickster is project-scoped. Run it from the root of an existing project.`;
}

function parseArgs(argv) {
  if (argv[0] === "--help" || argv[0] === "-h") {
    return {
      command: "help",
      target: process.cwd(),
      yes: false,
      skipRuntimeInstall: false,
      skipScrnLogin: false,
      harness: undefined,
    };
  }
  const [command = "help", ...rest] = argv;
  const options = {
    command,
    target: process.cwd(),
    yes: false,
    skipRuntimeInstall: false,
    skipScrnLogin: false,
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
    } else if (argument === "--skip-runtime-install") {
      options.skipRuntimeInstall = true;
    } else if (argument === "--skip-scrn-login") {
      options.skipScrnLogin = true;
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

function tomlString(value) {
  return `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

async function readOrEmpty(path) {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return "";
    throw error;
  }
}

async function hasNonEmptyFile(path) {
  return (await readOrEmpty(path)).trim().length > 0;
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

async function askYesNo(question, defaultValue = true) {
  if (!process.stdin.isTTY) return defaultValue;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const suffix = defaultValue ? " [Y/n] " : " [y/N] ";
  const answer = (await rl.question(`${question}${suffix}`)).trim().toLowerCase();
  rl.close();
  if (!answer) return defaultValue;
  return answer === "y" || answer === "yes";
}

async function readSecret(question) {
  if (!process.stdin.isTTY || !process.stdin.setRawMode) return "";

  process.stdout.write(question);
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  return await new Promise((resolvePromise, rejectPromise) => {
    let value = "";
    const finish = () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdout.write("\n");
      process.stdin.off("data", onData);
      resolvePromise(value);
    };
    const onData = (chunk) => {
      for (const character of chunk) {
        if (character === "\u0003") {
          process.stdin.setRawMode(false);
          process.stdin.pause();
          process.stdout.write("\n");
          process.stdin.off("data", onData);
          rejectPromise(new Error("Cancelled"));
          return;
        }
        if (character === "\r" || character === "\n") {
          finish();
          return;
        }
        if (character === "\u007f" || character === "\b") {
          if (value.length > 0) {
            value = value.slice(0, -1);
            process.stdout.write("\b \b");
          }
          continue;
        }
        if (character >= " ") {
          value += character;
          process.stdout.write("•");
        }
      }
    };
    process.stdin.on("data", onData);
  });
}

function openUrl(url) {
  if (process.platform !== "darwin") return false;
  const child = spawn("open", [url], { detached: true, stdio: "ignore" });
  child.unref();
  return true;
}

async function resolveDesignmdKey({ yes, providedKey }) {
  if (providedKey?.trim()) return providedKey.trim();
  if (process.env.DESIGNMD_API_KEY?.trim()) {
    return process.env.DESIGNMD_API_KEY.trim();
  }
  if (yes || !process.stdin.isTTY) return "";

  const shouldOpen = await askYesNo(
    "Open https://designmd.ai/api-keys to create or copy a DesignMD API key?",
  );
  if (shouldOpen) openUrl("https://designmd.ai/api-keys");
  return (await readSecret("Paste DESIGNMD_API_KEY (input hidden): ")).trim();
}

function agentsBlock() {
  return `## Trickster iOS pipeline

Before creating or substantially changing the iOS app, read and follow \`trickster/AGENTS.md\`.
The workflow, selected DESIGN.md, reference research, artifacts, and acceptance evidence are project-local under \`trickster/\`.`;
}

function gitignoreBlock() {
  return `/trickster/.secrets/
/trickster/runtime/node_modules/`;
}

function codexBlock(target, nodePath) {
  const launcher = resolve(target, "trickster", "runtime", "designmd-mcp.mjs");
  return `[mcp_servers.designmd]
command = ${tomlString(nodePath)}
args = [${tomlString(launcher)}]
cwd = ${tomlString(target)}
enabled = true
required = false
enabled_tools = ["search_design_kits", "get_design_kit", "download_design_kit", "list_popular_kits", "list_tags"]
default_tools_approval_mode = "writes"

[mcp_servers.screen_gallery]
url = "https://scrn.gallery/mcp"
auth = "oauth"
enabled = true
required = false
default_tools_approval_mode = "auto"`;
}

async function copyKit(target, harness) {
  const destination = resolve(target, "trickster");
  await mkdir(destination, { recursive: true });
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
  await cp(resolve(packageRoot, "installer", "assets", "runtime"), resolve(destination, "runtime"), {
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
  await mkdir(resolve(destination, ".secrets"), { recursive: true, mode: 0o700 });
  await writeFile(resolve(destination, "HARNESS"), `${harness}\n`, "utf8");
  await writeFile(resolve(destination, "VERSION"), `${VERSION}\n`, "utf8");
}

function installRuntime(target) {
  const runtime = resolve(target, "trickster", "runtime");
  const result = spawnSync(
    "npm",
    ["install", "--omit=dev", "--ignore-scripts", "--no-audit", "--no-fund"],
    { cwd: runtime, stdio: "inherit" },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error("Unable to install the project-local DesignMD MCP runtime");
  }
}

export async function initializeProject({
  target,
  yes = false,
  skipRuntimeInstall = false,
  skipScrnLogin = false,
  harness = "codex",
  providedKey,
  quiet = false,
} = {}) {
  const project = await assertSafeProject(target ?? process.cwd());
  const selectedHarness = validateHarness(harness);
  if (selectedHarness === "codex" && !commandExists("codex")) {
    throw new Error("Codex CLI was not found on PATH");
  }

  const key = await resolveDesignmdKey({ yes, providedKey });
  await copyKit(project, selectedHarness);
  const secretPath = resolve(project, "trickster", ".secrets", "designmd-api-key");

  if (key) {
    await writeFile(secretPath, `${key}\n`, { mode: 0o600 });
    await chmod(secretPath, 0o600);
  }
  const keyStored = await hasNonEmptyFile(secretPath);

  await replaceManagedBlock(resolve(project, ".gitignore"), BLOCKS.gitignore, gitignoreBlock());
  if (selectedHarness === "codex") {
    await replaceManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.agents, agentsBlock());
    await replaceManagedBlock(
      resolve(project, ".codex", "config.toml"),
      BLOCKS.codex,
      codexBlock(project, process.execPath),
    );
  } else {
    await removeManagedBlock(resolve(project, "AGENTS.md"), BLOCKS.agents);
    await removeManagedBlock(resolve(project, ".codex", "config.toml"), BLOCKS.codex);
  }

  if (!skipRuntimeInstall) installRuntime(project);

  let loginAttempted = false;
  if (selectedHarness === "codex" && !skipScrnLogin && !yes && process.stdin.isTTY) {
    const shouldLogin = await askYesNo("Authenticate SCRN for this Codex project now?");
    if (shouldLogin) {
      loginAttempted = true;
      const login = spawnSync("codex", ["mcp", "login", "screen_gallery"], {
        cwd: project,
        stdio: "inherit",
      });
      if (login.status !== 0 && !quiet) {
        console.warn("SCRN login did not complete. You can retry it later from the project root.");
      }
    }
  }

  const result = {
    project,
    harness: selectedHarness,
    keyStored,
    runtimeInstalled: !skipRuntimeInstall,
    loginAttempted,
  };

  if (!quiet) {
    console.log(`\nTrickster ${VERSION} installed in ${resolve(project, "trickster")}`);
    console.log(`Harness: ${selectedHarness}`);
    if (selectedHarness === "codex") {
      console.log("Codex project configuration: .codex/config.toml");
    }
    console.log(`DesignMD key: ${keyStored ? "stored locally" : "missing"}`);
    console.log(selectedHarness === "codex"
      ? "SCRN: configured; OAuth login must succeed before the pilot"
      : "MCP: configure DesignMD and SCRN in the selected harness before the pilot");
    console.log("\nNext:");
    if (!keyStored) console.log("1. Re-run init and enter DESIGNMD_API_KEY.");
    const start = keyStored ? 1 : 2;
    if (selectedHarness === "codex") {
      console.log(`${start}. Restart Codex and trust this project so .codex/config.toml is loaded.`);
      console.log(`${start + 1}. If needed, run: codex mcp login screen_gallery`);
      console.log(`${start + 2}. Start the task; the pipeline will research SCRN and ask you to confirm one DESIGN.md before UI work.`);
    } else {
      console.log(`${start}. Read trickster/adapters/generic.md and connect both MCP servers in your harness.`);
      console.log(`${start + 1}. Verify DesignMD, an image-returning SCRN query, shell, Xcode, Simulator and image viewing.`);
      console.log(`${start + 2}. Start the task; unsupported delegation will use the sequential fallback.`);
    }
  }

  return result;
}

export async function doctorProject(target = process.cwd(), { quiet = false, harness } = {}) {
  const project = await assertSafeProject(target);
  const configuredHarness = (await readOrEmpty(resolve(project, "trickster", "HARNESS"))).trim();
  const selectedHarness = validateHarness((harness ?? configuredHarness) || "codex");
  const hasDesignmdKey = await hasNonEmptyFile(
    resolve(project, "trickster", ".secrets", "designmd-api-key"),
  );
  const checks = [
    ["Trickster instructions", existsSync(resolve(project, "trickster", "AGENTS.md"))],
    ["Role contracts", existsSync(resolve(project, "trickster", "roles", "acceptance-reviewer.md"))],
    ["Harness adapter", existsSync(resolve(project, "trickster", "adapters", `${selectedHarness}.md`))],
    ["DesignMD key", hasDesignmdKey],
    ["DesignMD runtime", existsSync(resolve(project, "trickster", "runtime", "node_modules", "designmd-mcp", "dist", "index.js"))],
  ];
  if (selectedHarness === "codex") {
    checks.unshift(["Project Codex config", existsSync(resolve(project, ".codex", "config.toml"))]);
    checks.unshift(["Codex CLI", commandExists("codex")]);
  }
  const ready = checks.every(([, passed]) => passed);

  if (!quiet) {
    console.log(`HARNESS  ${selectedHarness}`);
    for (const [name, passed] of checks) {
      console.log(`${passed ? "PASS" : "MISSING"}  ${name}`);
    }
    if (selectedHarness === "codex") {
      console.log("VERIFY   SCRN OAuth and an image-returning reference query in a fresh Codex session");
      console.log("VERIFY   Codex role delegation or the sequential fallback in the task session");
    } else {
      console.log("VERIFY   The selected harness loads Trickster instructions and both MCP servers");
      console.log("VERIFY   SCRN image viewing, shell, Xcode, Simulator and role delegation or sequential fallback");
    }
    console.log("RUNTIME  DESIGN.md is selected and confirmed after SCRN research, not during doctor");
    console.log(`\n${ready ? "Local installation is ready; verify SCRN before the pilot." : "Trickster is not ready for the pilot."}`);
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
