import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  assertSafeProject,
  doctorProject,
  initializeProject,
  isGlobalPackagePath,
} from "../installer/init.mjs";
import { createTerminalStyle, supportsColor } from "../installer/terminal-style.mjs";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const canonicalCapabilities = [
  ["bluetooth", "Bluetooth"],
  ["downloading-photos", "Downloading Photos"],
  ["adding-photos", "Adding Photos"],
  ["camera", "Using the Camera"],
  ["face-id", "Face ID"],
  ["microphone", "Microphone Access"],
  ["speech-recognition", "Speech Recognition Access"],
  ["contacts", "Contacts Access"],
  ["calendar", "Calendar Access"],
  ["location", "Location Access"],
  ["callkit", "CallKit"],
];

function capabilityRows(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^\| \d+ \| `/.test(line))
    .map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      return [cells[2].replaceAll("`", ""), cells[3]];
    });
}

async function createProject() {
  const project = await mkdtemp(join(tmpdir(), "trickster-test-"));
  await mkdir(join(project, ".git"));
  await writeFile(join(project, "AGENTS.md"), "# Existing instructions\n", "utf8");
  await writeFile(join(project, ".gitignore"), "build/\n", "utf8");
  return project;
}

function commandAvailable() {
  return true;
}

function countOccurrences(content, fragment) {
  return content.split(fragment).length - 1;
}

async function fileExists(path) {
  return readFile(path).then(() => true, () => false);
}

test("uses Trickster colors only in supported terminals", () => {
  const terminal = { isTTY: true };
  const styled = createTerminalStyle(terminal, {});
  assert.equal(supportsColor(terminal, {}), true);
  assert.match(styled.accent("Trickster"), /Trickster/);
  assert.equal(createTerminalStyle(terminal, { NO_COLOR: "" }).accent("Trickster"), "Trickster");
  assert.equal(createTerminalStyle({ isTTY: false }, {}).error("Failed"), "Failed");
});

test("installs the six-stage project-local toolkit", async () => {
  const project = await createProject();
  await initializeProject({ target: project, yes: true, quiet: true, commandCheck: commandAvailable });

  assert.match(await readFile(join(project, "AGENTS.md"), "utf8"), /trickster\/AGENTS\.md/);
  assert.equal(await readFile(join(project, "trickster", "VERSION"), "utf8"), "1.2.0\n");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "codex\n");

  for (const stage of ["research", "planning", "design", "dev", "polish", "publish"]) {
    assert.notEqual(
      await readFile(join(project, "trickster", "workflow", `${stage}.md`), "utf8"),
      "",
    );
  }
  for (const role of ["product-researcher", "designer", "implementation-owner", "acceptance-reviewer"]) {
    assert.notEqual(
      await readFile(join(project, "trickster", "roles", `${role}.md`), "utf8"),
      "",
    );
  }

  assert.equal(
    await readFile(join(project, "trickster", "roles", "visual-producer.md"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readFile(join(project, "trickster", "workflow", "implementation-core.md"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readFile(join(project, "trickster", "workflow", "launch-screen.md"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readdir(join(project, "trickster", "styles")).then(() => true, () => false),
    false,
  );
});

test("re-running init updates managed workflow and preserves project artifacts", async () => {
  const project = await createProject();
  const options = { target: project, harness: "generic", yes: true, quiet: true };
  await initializeProject(options);
  await writeFile(join(project, "trickster", "design", "ui.md"), "# Keep UI\n", "utf8");
  await mkdir(join(project, "trickster", "artifacts", "run-1"), { recursive: true });
  await writeFile(join(project, "trickster", "artifacts", "run-1", "research.md"), "# Keep research\n", "utf8");
  await writeFile(join(project, "trickster", "workflow", "obsolete.md"), "obsolete\n", "utf8");

  await initializeProject(options);

  assert.equal(await readFile(join(project, "trickster", "design", "ui.md"), "utf8"), "# Keep UI\n");
  assert.equal(
    await readFile(join(project, "trickster", "artifacts", "run-1", "research.md"), "utf8"),
    "# Keep research\n",
  );
  assert.equal(
    await readFile(join(project, "trickster", "workflow", "obsolete.md"), "utf8").catch(() => ""),
    "",
  );
});

test("doctor checks the simplified workflow", async () => {
  const project = await createProject();
  await initializeProject({ target: project, harness: "generic", yes: true, quiet: true });
  assert.equal((await doctorProject(project, { quiet: true })).ready, true);

  await rm(join(project, "trickster", "workflow", "polish.md"));
  const result = await doctorProject(project, { quiet: true });
  assert.equal(result.ready, false);
  assert.deepEqual(result.checks.find(([name]) => name === "Polish workflow"), ["Polish workflow", false]);
});

test("Claude Code harness creates CLAUDE.md and installs its adapter", async () => {
  const project = await createProject();
  const result = await initializeProject({
    target: project,
    harness: "claude-code",
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  });

  assert.equal(result.harness, "claude-code");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "claude-code\n");
  assert.equal(await fileExists(join(project, "trickster", "adapters", "claude-code.md")), true);
  const instructions = await readFile(join(project, "CLAUDE.md"), "utf8");
  assert.match(instructions, /^<!-- >>> trickster managed instructions >>> -->/);
  assert.match(instructions, /^@trickster\/AGENTS\.md$/m);
  assert.equal(
    (await doctorProject(project, { quiet: true, commandCheck: commandAvailable })).ready,
    true,
  );
});

test("Claude Code harness preserves existing instructions and is idempotent", async () => {
  const project = await createProject();
  await writeFile(join(project, "CLAUDE.md"), "# Team instructions\n\nKeep this text.\n", "utf8");
  const options = {
    target: project,
    harness: "claude-code",
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  };

  await initializeProject(options);
  await initializeProject(options);

  const instructions = await readFile(join(project, "CLAUDE.md"), "utf8");
  assert.match(instructions, /# Team instructions/);
  assert.match(instructions, /Keep this text\./);
  assert.equal(countOccurrences(instructions, "<!-- >>> trickster managed instructions >>> -->"), 1);
  assert.equal(countOccurrences(instructions, "@trickster/AGENTS.md"), 1);
});

test("Claude Code re-install preserves design sources and artifacts", async () => {
  const project = await createProject();
  const options = {
    target: project,
    harness: "claude-code",
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  };
  await initializeProject(options);
  await writeFile(join(project, "trickster", "design", "ui.md"), "# Selected UI\n", "utf8");
  await mkdir(join(project, "trickster", "artifacts", "run-1"), { recursive: true });
  await writeFile(join(project, "trickster", "artifacts", "run-1", "plan.md"), "# Plan\n", "utf8");

  await initializeProject(options);

  assert.equal(await readFile(join(project, "trickster", "design", "ui.md"), "utf8"), "# Selected UI\n");
  assert.equal(
    await readFile(join(project, "trickster", "artifacts", "run-1", "plan.md"), "utf8"),
    "# Plan\n",
  );
});

test("harness switching maintains only the selected managed entry point", async () => {
  const project = await createProject();
  const install = (harness) => initializeProject({
    target: project,
    harness,
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  });

  await install("codex");
  assert.match(await readFile(join(project, "AGENTS.md"), "utf8"), /trickster\/AGENTS\.md/);
  assert.equal(await fileExists(join(project, "CLAUDE.md")), false);

  await install("claude-code");
  assert.equal((await readFile(join(project, "AGENTS.md"), "utf8")), "# Existing instructions\n");
  assert.match(await readFile(join(project, "CLAUDE.md"), "utf8"), /@trickster\/AGENTS\.md/);

  await install("generic");
  assert.equal((await readFile(join(project, "AGENTS.md"), "utf8")), "# Existing instructions\n");
  assert.equal(await fileExists(join(project, "CLAUDE.md")), false);

  await install("claude-code");
  const claude = await readFile(join(project, "CLAUDE.md"), "utf8");
  assert.equal(countOccurrences(claude, "<!-- >>> trickster managed instructions >>> -->"), 1);
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "claude-code\n");
});

test("switching harnesses preserves user-owned CLAUDE.md content", async () => {
  const project = await createProject();
  await writeFile(join(project, "CLAUDE.md"), "# User-owned Claude rules\n", "utf8");
  for (const harness of ["claude-code", "codex", "generic", "claude-code"]) {
    await initializeProject({
      target: project,
      harness,
      yes: true,
      quiet: true,
      commandCheck: commandAvailable,
    });
  }
  const claude = await readFile(join(project, "CLAUDE.md"), "utf8");
  assert.match(claude, /# User-owned Claude rules/);
  assert.equal(countOccurrences(claude, "@trickster/AGENTS.md"), 1);
});

test("Claude Code init fails before writing when Claude CLI is absent", async () => {
  const project = await createProject();
  const beforeAgents = await readFile(join(project, "AGENTS.md"), "utf8");

  await assert.rejects(
    () => initializeProject({
      target: project,
      harness: "claude-code",
      yes: true,
      quiet: true,
      commandCheck: () => false,
    }),
    /Claude CLI was not found on PATH/,
  );

  assert.equal(await readFile(join(project, "AGENTS.md"), "utf8"), beforeAgents);
  assert.equal(await fileExists(join(project, "CLAUDE.md")), false);
  assert.equal(await fileExists(join(project, "trickster", "HARNESS")), false);
});

test("doctor reports a missing Claude CLI as a failed local check", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    harness: "claude-code",
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  });

  const result = await doctorProject(project, { quiet: true, commandCheck: () => false });
  assert.equal(result.ready, false);
  assert.deepEqual(result.localChecks.find(([name]) => name === "Claude CLI"), ["Claude CLI", false]);
  assert.ok(result.sessionChecks.every((check) => typeof check === "string"));

  const cliResult = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "doctor", "--target", project],
    { cwd: repositoryRoot, encoding: "utf8", env: { ...process.env, PATH: "" } },
  );
  assert.equal(cliResult.status, 1);
  assert.match(cliResult.stdout, /MISSING  Claude CLI/);
  assert.match(cliResult.stdout, /SESSION CHECKS/);
  assert.match(cliResult.stdout, /VERIFY  The selected harness loads Trickster instructions/);
});

test("doctor detects a missing Claude adapter and entry point", async () => {
  const project = await createProject();
  const options = {
    target: project,
    harness: "claude-code",
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  };
  await initializeProject(options);
  await rm(join(project, "trickster", "adapters", "claude-code.md"));
  let result = await doctorProject(project, { quiet: true, commandCheck: commandAvailable });
  assert.deepEqual(result.installationChecks.find(([name]) => name === "Harness adapter"), ["Harness adapter", false]);
  assert.equal(result.ready, false);

  await initializeProject(options);
  await rm(join(project, "CLAUDE.md"));
  result = await doctorProject(project, { quiet: true, commandCheck: commandAvailable });
  assert.deepEqual(result.installationChecks.find(([name]) => name === "Harness entry point"), ["Harness entry point", false]);
  assert.equal(result.ready, false);
});

test("Claude Code init repairs partial managed blocks without losing user text", async () => {
  const project = await createProject();
  const options = {
    target: project,
    harness: "claude-code",
    yes: true,
    quiet: true,
    commandCheck: commandAvailable,
  };
  await initializeProject(options);
  const complete = await readFile(join(project, "CLAUDE.md"), "utf8");
  const missingEnd = `${complete.replace("<!-- <<< trickster managed instructions <<< -->\n", "")}\n# User footer\n`;
  await writeFile(join(project, "CLAUDE.md"), missingEnd, "utf8");

  await initializeProject(options);
  let repaired = await readFile(join(project, "CLAUDE.md"), "utf8");
  assert.match(repaired, /# User footer/);
  assert.equal(countOccurrences(repaired, "<!-- >>> trickster managed instructions >>> -->"), 1);
  assert.equal(countOccurrences(repaired, "<!-- <<< trickster managed instructions <<< -->"), 1);
  assert.equal(countOccurrences(repaired, "@trickster/AGENTS.md"), 1);

  repaired = repaired.replace("<!-- >>> trickster managed instructions >>> -->\n", "");
  await writeFile(join(project, "CLAUDE.md"), repaired, "utf8");
  await initializeProject(options);
  repaired = await readFile(join(project, "CLAUDE.md"), "utf8");
  assert.match(repaired, /# User footer/);
  assert.equal(countOccurrences(repaired, "<!-- >>> trickster managed instructions >>> -->"), 1);
  assert.equal(countOccurrences(repaired, "<!-- <<< trickster managed instructions <<< -->"), 1);
  assert.equal(countOccurrences(repaired, "@trickster/AGENTS.md"), 1);
});

test("generic harness installs without Codex project files", async () => {
  const project = await createProject();
  const result = await initializeProject({ target: project, harness: "generic", yes: true, quiet: true });
  assert.equal(result.harness, "generic");
  assert.equal(await readFile(join(project, "AGENTS.md"), "utf8"), "# Existing instructions\n");
  assert.equal((await doctorProject(project, { quiet: true })).ready, true);
});

test("CLI help lists all supported harnesses", () => {
  const result = spawnSync(process.execPath, [resolve(repositoryRoot, "bin", "trickster.mjs"), "--help"], {
    cwd: repositoryRoot,
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /codex\|claude-code\|generic/);
});

test("refuses broad non-project targets", async () => {
  await assert.rejects(() => assertSafeProject(tmpdir()), /existing Git, Xcode/);
});

test("rejects global npm installation", () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "scripts", "reject-global-install.mjs")],
    { encoding: "utf8", env: { ...process.env, npm_config_global: "true" } },
  );
  assert.equal(result.status, 1);
  assert.match(result.stderr, /cannot be installed globally/);
  assert.equal(isGlobalPackagePath("/opt/homebrew/lib/node_modules/@sgx22/trickster/bin/trickster.mjs"), true);
  assert.equal(isGlobalPackagePath("/project/node_modules/@sgx22/trickster/bin/trickster.mjs"), false);
});

test("keeps the canonical capability contract in the Product Researcher role", async () => {
  const researcher = await readFile(join(repositoryRoot, "roles", "product-researcher.md"), "utf8");
  assert.deepEqual(capabilityRows(researcher), canonicalCapabilities);
});

test("npm package contains the simplified workflow and excludes repository-only assets", async () => {
  const npmCache = await mkdtemp(join(tmpdir(), "trickster-npm-cache-"));
  const result = spawnSync("npm", ["pack", "--dry-run", "--json"], {
    cwd: repositoryRoot,
    encoding: "utf8",
    env: { ...process.env, npm_config_cache: npmCache },
  });
  assert.equal(result.status, 0, result.stderr);
  const packResult = JSON.parse(result.stdout);
  const { files } = Array.isArray(packResult) ? packResult[0] : Object.values(packResult)[0];
  const paths = files.map(({ path }) => path);

  assert.equal(paths.some((path) => path.startsWith("styles/")), false);
  assert.equal(paths.some((path) => path.startsWith("site/")), false);
  assert.equal(paths.some((path) => path.startsWith("plugin/")), false);
  assert.equal(paths.some((path) => path.startsWith(".agents/")), false);
  assert.equal(paths.includes("README.md"), true);
  assert.equal(paths.includes("README.ru.md"), true);
  assert.equal(paths.includes("README.es.md"), false);
  assert.equal(paths.includes("README.zh-CN.md"), false);
  for (const path of [
    "adapters/claude-code.md",
    "roles/designer.md",
    "roles/product-researcher.md",
    "workflow/research.md",
    "workflow/planning.md",
    "workflow/design.md",
    "workflow/dev.md",
    "workflow/polish.md",
    "workflow/publish.md",
    "templates/research.md",
    "templates/plan.md",
    "templates/publish.md",
    "templates/review.md",
  ]) {
    assert.equal(paths.includes(path), true, path);
  }
  for (const path of [
    "roles/visual-producer.md",
    "roles/design-planner.md",
    "workflow/launch-screen.md",
    "workflow/implementation-core.md",
    "templates/run-state.json",
    "scripts/analyze-token-usage.mjs",
  ]) {
    assert.equal(paths.includes(path), false, path);
  }
});

test("frozen Codex plugin snapshot still installs and checks its own toolkit", async () => {
  const project = await createProject();
  const skillRoot = resolve(repositoryRoot, "plugin", "skills", "trickster-ios");
  const initResult = spawnSync(
    process.execPath,
    [resolve(skillRoot, "scripts", "init-project.mjs"), "--target", project],
    { cwd: repositoryRoot, encoding: "utf8" },
  );
  assert.equal(initResult.status, 0, initResult.stderr);
  assert.equal(await readFile(join(project, "trickster", "VERSION"), "utf8"), "1.1.0\n");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "codex\n");

  await writeFile(join(project, "trickster", "design", "ui.md"), "# Keep plugin UI\n", "utf8");
  const reinstallResult = spawnSync(
    process.execPath,
    [resolve(skillRoot, "scripts", "init-project.mjs"), "--target", project],
    { cwd: repositoryRoot, encoding: "utf8" },
  );
  assert.equal(reinstallResult.status, 0, reinstallResult.stderr);
  assert.equal(
    await readFile(join(project, "trickster", "design", "ui.md"), "utf8"),
    "# Keep plugin UI\n",
  );

  const doctorResult = spawnSync(
    process.execPath,
    [resolve(skillRoot, "scripts", "doctor.mjs"), "--target", project],
    { cwd: repositoryRoot, encoding: "utf8" },
  );
  assert.equal(doctorResult.status, 0, doctorResult.stderr);
  assert.match(doctorResult.stdout, /PASS  Publish workflow/);
});

test("style catalog indexes every repository package", async () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "maintainers", "build-style-catalog.mjs"), "--check"],
    { cwd: repositoryRoot, encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);

  const catalog = JSON.parse(await readFile(join(repositoryRoot, "styles", "catalog.json"), "utf8"));
  const directories = await readdir(join(repositoryRoot, "styles"), { withFileTypes: true });
  const packageIds = directories
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();
  assert.equal(catalog.length, packageIds.length);
  assert.deepEqual(catalog.map(({ appId }) => appId).sort(), packageIds);
  for (const entry of catalog) {
    assert.deepEqual(Object.keys(entry), [
      "appId",
      "name",
      "url",
      "category",
      "categories",
      "uiSummary",
      "illustrationSummary",
    ]);
  }
});

test("style packages follow the current iOS document structure", () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "maintainers", "validate-style-packages.mjs")],
    { cwd: repositoryRoot, encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Validated 277 style packages/);
});
