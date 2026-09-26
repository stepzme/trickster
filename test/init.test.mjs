import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, stat, writeFile } from "node:fs/promises";
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

test("installs one project-local Trickster folder and Codex integration", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    yes: true,
    skipRuntimeInstall: true,
    skipScrnLogin: true,
    providedKey: "dk_test_key",
    quiet: true,
  });

  assert.match(await readFile(join(project, "AGENTS.md"), "utf8"), /trickster\/AGENTS\.md/);
  assert.match(await readFile(join(project, ".gitignore"), "utf8"), /trickster\/\.secrets/);
  assert.equal(await readFile(join(project, "trickster", "VERSION"), "utf8"), "0.4.0\n");
  assert.equal(
    await readFile(join(project, "trickster", ".secrets", "designmd-api-key"), "utf8"),
    "dk_test_key\n",
  );
  assert.match(
    await readFile(join(project, "trickster", "workflow", "master-prompt.md"), "utf8"),
    /Исследование SCRN/,
  );
  assert.match(
    await readFile(join(project, "trickster", "workflow", "scrn-categories.md"), "utf8"),
    /Продуктивность/,
  );
  assert.match(
    await readFile(join(project, "trickster", "workflow", "app-icon.md"), "utf8"),
    /Logoinspo/,
  );
  assert.match(
    await readFile(join(project, "trickster", "workflow", "delegation.md"), "utf8"),
    /product-researcher/,
  );
  assert.match(
    await readFile(join(project, "trickster", "agents", "acceptance-reviewer.md"), "utf8"),
    /Независимо проверить/,
  );
  assert.match(
    await readFile(join(project, "trickster", "templates", "references.md"), "utf8"),
    /SCRN-исследование/,
  );
  assert.equal(
    JSON.parse(
      await readFile(join(project, "trickster", "runtime", "package.json"), "utf8"),
    ).version,
    "0.4.0",
  );

  const secretMode = (await stat(join(project, "trickster", ".secrets", "designmd-api-key"))).mode & 0o777;
  assert.equal(secretMode, 0o600);

  const codexConfig = await readFile(join(project, ".codex", "config.toml"), "utf8");
  assert.match(codexConfig, /\[mcp_servers\.designmd\]/);
  assert.match(codexConfig, /\[mcp_servers\.screen_gallery\]/);
  assert.doesNotMatch(codexConfig, /dk_test_key/);
});

test("re-running init updates managed blocks without duplicating them", async () => {
  const project = await createProject();
  const options = {
    target: project,
    yes: true,
    skipRuntimeInstall: true,
    skipScrnLogin: true,
    providedKey: "dk_test_key",
    quiet: true,
  };

  await initializeProject(options);
  await writeFile(join(project, "trickster", "design", "DESIGN.md"), "# Keep me\n", "utf8");
  const secondRun = await initializeProject({ ...options, providedKey: undefined });

  const agents = await readFile(join(project, "AGENTS.md"), "utf8");
  assert.equal(agents.match(/>>> trickster managed instructions/g)?.length, 1);
  assert.equal(await readFile(join(project, "trickster", "design", "DESIGN.md"), "utf8"), "# Keep me\n");
  assert.equal(secondRun.keyStored, true);
});

test("doctor requires runtime but selects DESIGN.md during the task", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    yes: true,
    skipRuntimeInstall: true,
    skipScrnLogin: true,
    providedKey: "dk_test_key",
    quiet: true,
  });

  const result = await doctorProject(project, { quiet: true });
  assert.equal(result.ready, false);

  const cliResult = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "doctor", "--target", project],
    { encoding: "utf8" },
  );
  assert.equal(cliResult.status, 1);
  assert.match(cliResult.stdout, /not ready for the pilot/);

  const runtimeEntry = join(
    project,
    "trickster",
    "runtime",
    "node_modules",
    "designmd-mcp",
    "dist",
  );
  await mkdir(runtimeEntry, { recursive: true });
  await writeFile(join(runtimeEntry, "index.js"), "", "utf8");
  const readyResult = await doctorProject(project, { quiet: true });
  assert.equal(readyResult.ready, true);
  assert.equal(
    await readFile(join(project, "trickster", "design", "DESIGN.md"), "utf8").catch(() => ""),
    "",
  );

  const readyCliResult = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "doctor", "--target", project],
    { encoding: "utf8" },
  );
  assert.equal(readyCliResult.status, 0);
  assert.match(readyCliResult.stdout, /verify SCRN before the pilot/);
  assert.match(readyCliResult.stdout, /collaboration tools for phase subagents/);
  assert.match(readyCliResult.stdout, /DESIGN\.md is selected and confirmed after SCRN research/);
});

test("refuses broad non-project targets", async () => {
  await assert.rejects(() => assertSafeProject(tmpdir()), /existing Git, Xcode/);
});

test("rejects global npm installation", () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "scripts", "reject-global-install.mjs")],
    {
      encoding: "utf8",
      env: { ...process.env, npm_config_global: "true" },
    },
  );

  assert.equal(result.status, 1);
  assert.match(result.stderr, /cannot be installed globally/);
  assert.match(result.stderr, /npx @sgx22\/trickster@pilot init/);

  assert.equal(
    isGlobalPackagePath("/opt/homebrew/lib/node_modules/@sgx22/trickster/bin/trickster.mjs"),
    true,
  );
  assert.equal(
    isGlobalPackagePath("C:\\Users\\stepz\\AppData\\Roaming\\npm\\node_modules\\@sgx22\\trickster\\bin\\trickster.mjs"),
    true,
  );
  assert.equal(
    isGlobalPackagePath("/project/node_modules/@sgx22/trickster/bin/trickster.mjs"),
    false,
  );
});

test("prints help as a top-level option", () => {
  const result = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "bin", "trickster.mjs"), "--help"],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 0);
  assert.match(result.stdout, /trickster init/);
});
