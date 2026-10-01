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

function registryRows(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^\| \d+ \| `/.test(line))
    .map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      return [cells[2].replaceAll("`", ""), cells[3]];
    });
}

function templateRows(markdown) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("| `"))
    .map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      return [cells[1].replaceAll("`", ""), cells[2]];
    });
}

async function createProject() {
  const project = await mkdtemp(join(tmpdir(), "trickster-test-"));
  await mkdir(join(project, ".git"));
  await writeFile(join(project, "AGENTS.md"), "# Existing instructions\n", "utf8");
  await writeFile(join(project, ".gitignore"), "build/\n", "utf8");
  return project;
}

test("uses Trickster colors only in supported terminals", () => {
  const terminal = { isTTY: true };
  const styled = createTerminalStyle(terminal, {});
  assert.equal(supportsColor(terminal, {}), true);
  assert.match(styled.accent("Trickster"), /Trickster/);
  assert.equal(createTerminalStyle(terminal, { NO_COLOR: "" }).accent("Trickster"), "Trickster");
  assert.equal(createTerminalStyle({ isTTY: false }, {}).error("Failed"), "Failed");
});

test("installs the five-stage project-local toolkit", async () => {
  const project = await createProject();
  await initializeProject({ target: project, yes: true, quiet: true });

  assert.match(await readFile(join(project, "AGENTS.md"), "utf8"), /trickster\/AGENTS\.md/);
  assert.equal(await readFile(join(project, "trickster", "VERSION"), "utf8"), "1.1.0\n");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "codex\n");

  for (const stage of ["research", "planning", "design", "dev", "publish"]) {
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

  await rm(join(project, "trickster", "workflow", "design.md"));
  const result = await doctorProject(project, { quiet: true });
  assert.equal(result.ready, false);
  assert.deepEqual(result.checks.find(([name]) => name === "Design workflow"), ["Design workflow", false]);
});

test("generic harness installs without Codex project files", async () => {
  const project = await createProject();
  const result = await initializeProject({ target: project, harness: "generic", yes: true, quiet: true });
  assert.equal(result.harness, "generic");
  assert.equal(await readFile(join(project, "AGENTS.md"), "utf8"), "# Existing instructions\n");
  assert.equal((await doctorProject(project, { quiet: true })).ready, true);
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

test("keeps canonical capability tables identical", async () => {
  const registry = await readFile(join(repositoryRoot, "workflow", "ios-capabilities.md"), "utf8");
  const research = await readFile(join(repositoryRoot, "templates", "research.md"), "utf8");
  const review = await readFile(join(repositoryRoot, "templates", "review.md"), "utf8");
  assert.deepEqual(registryRows(registry), canonicalCapabilities);
  assert.deepEqual(templateRows(research), canonicalCapabilities);
  assert.deepEqual(templateRows(review), canonicalCapabilities);
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
  for (const path of [
    "roles/designer.md",
    "workflow/research.md",
    "workflow/planning.md",
    "workflow/design.md",
    "workflow/dev.md",
    "workflow/publish.md",
    "workflow/ios-capabilities.md",
    "templates/research.md",
    "templates/plan.md",
    "templates/review.md",
  ]) {
    assert.equal(paths.includes(path), true, path);
  }
  for (const path of [
    "roles/visual-producer.md",
    "roles/design-planner.md",
    "workflow/implementation-core.md",
    "templates/run-state.json",
    "scripts/analyze-token-usage.mjs",
  ]) {
    assert.equal(paths.includes(path), false, path);
  }
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
});
