import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
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

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function createProject() {
  const project = await mkdtemp(join(tmpdir(), "trickster-test-"));
  await mkdir(join(project, ".git"));
  await writeFile(join(project, "AGENTS.md"), "# Existing instructions\n", "utf8");
  await writeFile(join(project, ".gitignore"), "build/\n", "utf8");
  return project;
}

test("installs one project-local Trickster folder, style library, and Codex integration", async () => {
  const project = await createProject();
  await initializeProject({ target: project, yes: true, skipScrnLogin: true, quiet: true });

  assert.match(await readFile(join(project, "AGENTS.md"), "utf8"), /trickster\/AGENTS\.md/);
  assert.equal(await readFile(join(project, ".gitignore"), "utf8"), "build/\n");
  assert.equal(await readFile(join(project, "trickster", "VERSION"), "utf8"), "0.6.1\n");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "codex\n");
  assert.match(
    await readFile(join(project, "trickster", "workflow", "master-prompt.md"), "utf8"),
    /Выбор пакета стиля/,
  );
  assert.match(
    await readFile(join(project, "trickster", "workflow", "style-reference.md"), "utf8"),
    /trickster\/styles/,
  );
  assert.match(
    await readFile(join(project, "trickster", "styles", "AGENTS.md"), "utf8"),
    /Инструкция по сборке базы стилей/,
  );
  const styleSource = JSON.parse(
    await readFile(
      join(project, "trickster", "styles", "69c4451a481d517ba935ab0b", "source.json"),
      "utf8",
    ),
  );
  assert.deepEqual(Object.keys(styleSource), ["appId", "url", "category"]);
  assert.equal(
    await readFile(join(project, "trickster", "runtime", "designmd-mcp.mjs"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readFile(join(project, "trickster", ".secrets", "designmd-api-key"), "utf8").catch(() => ""),
    "",
  );

  const codexConfig = await readFile(join(project, ".codex", "config.toml"), "utf8");
  assert.match(codexConfig, /\[mcp_servers\.screen_gallery\]/);
  assert.doesNotMatch(codexConfig, /designmd/i);
});

test("re-running init updates managed files and preserves the selected style and artifacts", async () => {
  const project = await createProject();
  const options = { target: project, yes: true, skipScrnLogin: true, quiet: true };

  await initializeProject(options);
  await writeFile(join(project, "trickster", "design", "source.json"), "{\"appId\":\"keep\"}\n", "utf8");
  await writeFile(join(project, "trickster", "design", "ui.md"), "# Keep UI\n", "utf8");
  await writeFile(join(project, "trickster", "design", "ux.md"), "# Keep UX\n", "utf8");
  await writeFile(join(project, "trickster", "design", "illustrations.md"), "# Keep art\n", "utf8");
  await mkdir(join(project, "trickster", "artifacts", "run-1"), { recursive: true });
  await writeFile(join(project, "trickster", "artifacts", "run-1", "review.md"), "# Keep review\n", "utf8");

  await initializeProject(options);

  const agents = await readFile(join(project, "AGENTS.md"), "utf8");
  assert.equal(agents.match(/>>> trickster managed instructions/g)?.length, 1);
  assert.equal(await readFile(join(project, "trickster", "design", "ui.md"), "utf8"), "# Keep UI\n");
  assert.equal(await readFile(join(project, "trickster", "design", "ux.md"), "utf8"), "# Keep UX\n");
  assert.equal(
    await readFile(join(project, "trickster", "design", "illustrations.md"), "utf8"),
    "# Keep art\n",
  );
  assert.equal(
    await readFile(join(project, "trickster", "artifacts", "run-1", "review.md"), "utf8"),
    "# Keep review\n",
  );
});

test("doctor validates the installed style library while selection stays task-scoped", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
    skipScrnLogin: true,
    quiet: true,
  });

  const result = await doctorProject(project, { quiet: true });
  assert.equal(result.ready, true);
  assert.equal(
    await readFile(join(project, "trickster", "design", "ui.md"), "utf8").catch(() => ""),
    "",
  );

  const cliResult = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "doctor", "--target", project, "--harness", "generic"],
    { encoding: "utf8" },
  );
  assert.equal(cliResult.status, 0);
  assert.match(cliResult.stdout, /verify SCRN before using the pipeline/i);
  assert.match(cliResult.stdout, /local style package is selected and confirmed/i);
});

test("doctor rejects a style library without a complete real app package", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
    skipScrnLogin: true,
    quiet: true,
  });
  await writeFile(
    join(project, "trickster", "styles", "69c4451a481d517ba935ab0b", "source.json"),
    "{}\n",
    "utf8",
  );

  const result = await doctorProject(project, { quiet: true });
  assert.equal(result.ready, false);
  assert.deepEqual(
    result.checks.find(([name]) => name === "Complete reference style package"),
    ["Complete reference style package", false],
  );
});

test("generic harness installs the portable kit without Codex project files", async () => {
  const project = await createProject();
  const result = await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
    skipScrnLogin: true,
    quiet: true,
  });

  assert.equal(result.harness, "generic");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "generic\n");
  assert.equal(await readFile(join(project, "AGENTS.md"), "utf8"), "# Existing instructions\n");
  assert.equal(
    await readFile(join(project, ".codex", "config.toml"), "utf8").catch(() => ""),
    "",
  );
  assert.match(
    await readFile(join(project, "trickster", "adapters", "generic.md"), "utf8"),
    /sequential fallback/,
  );
  assert.equal((await doctorProject(project, { quiet: true })).ready, true);
});

test("switching to generic removes only Trickster-owned Codex integration", async () => {
  const project = await createProject();
  const baseOptions = { target: project, yes: true, skipScrnLogin: true, quiet: true };

  await initializeProject({ ...baseOptions, harness: "codex" });
  await writeFile(
    join(project, ".codex", "config.toml"),
    `${await readFile(join(project, ".codex", "config.toml"), "utf8")}\nmodel = "keep-me"\n`,
    "utf8",
  );
  await mkdir(join(project, "trickster", "agents"));
  await writeFile(join(project, "trickster", "agents", "legacy.md"), "legacy", "utf8");
  await writeFile(join(project, "trickster", "workflow", "delegation.md"), "legacy", "utf8");

  await initializeProject({ ...baseOptions, harness: "generic" });

  assert.equal(await readFile(join(project, "AGENTS.md"), "utf8"), "# Existing instructions\n");
  assert.equal(await readFile(join(project, ".codex", "config.toml"), "utf8"), 'model = "keep-me"\n');
  assert.equal(
    await readFile(join(project, "trickster", "agents", "legacy.md"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readFile(join(project, "trickster", "workflow", "delegation.md"), "utf8").catch(() => ""),
    "",
  );
});

test("init removes obsolete DesignMD runtime and key without deleting unrelated secrets", async () => {
  const project = await createProject();
  await mkdir(join(project, "trickster", "runtime"), { recursive: true });
  await writeFile(join(project, "trickster", "runtime", "legacy.js"), "legacy", "utf8");
  await mkdir(join(project, "trickster", ".secrets"), { recursive: true });
  await writeFile(join(project, "trickster", ".secrets", "designmd-api-key"), "old-key", "utf8");
  await writeFile(join(project, "trickster", ".secrets", "keep-me"), "keep", "utf8");

  await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
    skipScrnLogin: true,
    quiet: true,
  });

  assert.equal(
    await readFile(join(project, "trickster", "runtime", "legacy.js"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readFile(join(project, "trickster", ".secrets", "designmd-api-key"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(await readFile(join(project, "trickster", ".secrets", "keep-me"), "utf8"), "keep");
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
  assert.match(result.stderr, /npx @sgx22\/trickster init/);
  assert.equal(isGlobalPackagePath("/opt/homebrew/lib/node_modules/@sgx22/trickster/bin/trickster.mjs"), true);
  assert.equal(
    isGlobalPackagePath("C:\\Users\\stepz\\AppData\\Roaming\\npm\\node_modules\\@sgx22\\trickster\\bin\\trickster.mjs"),
    true,
  );
  assert.equal(isGlobalPackagePath("/project/node_modules/@sgx22/trickster/bin/trickster.mjs"), false);
});

test("prints help as a top-level option", () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "--help"],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 0);
  assert.match(result.stdout, /trickster init/);
  assert.match(result.stdout, /--harness codex\|generic/);
  assert.doesNotMatch(result.stdout, /runtime-install/);
});

test("rejects an unsupported harness", () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "init", "--harness", "unknown"],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Unsupported harness/);
});
