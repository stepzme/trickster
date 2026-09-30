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

const russianCapabilityNames = [
  "Bluetooth",
  "Скачивание фото",
  "Добавление фото",
  "Использование камеры",
  "Face ID",
  "Доступ к микрофону",
  "Доступ к распознаванию речи",
  "Доступ к контактам",
  "Доступ к календарю",
  "Доступ к геолокации",
  "CallKit",
];

function assertAppearsInOrder(content, values) {
  let cursor = -1;
  for (const value of values) {
    const next = content.indexOf(value, cursor + 1);
    assert.ok(next > cursor, `Expected ${JSON.stringify(value)} after offset ${cursor}`);
    cursor = next;
  }
}

function extractCapabilityTemplateRows(markdown) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("| `"))
    .map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      return [cells[1].replaceAll("`", ""), cells[2]];
    });
}

function extractCapabilityRegistryRows(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^\| \d+ \| `/.test(line))
    .map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      return [cells[2].replaceAll("`", ""), cells[3]];
    });
}

test("uses Trickster colors only in supported terminals", () => {
  const terminal = { isTTY: true };
  const styled = createTerminalStyle(terminal, {});

  assert.equal(supportsColor(terminal, {}), true);
  assert.equal(
    styled.accent("Trickster"),
    "\u001B[1;38;2;25;185;158mTrickster\u001B[0m",
  );
  assert.equal(
    styled.error("Failed"),
    "\u001B[1;38;2;226;69;28mFailed\u001B[0m",
  );
  assert.equal(
    styled.warning("Verify"),
    "\u001B[1;38;2;217;154;43mVerify\u001B[0m",
  );

  assert.equal(
    createTerminalStyle(terminal, { NO_COLOR: "" }).accent("Trickster"),
    "Trickster",
  );
  assert.equal(createTerminalStyle({ isTTY: false }, {}).error("Failed"), "Failed");
  assert.equal(createTerminalStyle(terminal, { CI: "true" }).warning("Verify"), "Verify");
});

async function createProject() {
  const project = await mkdtemp(join(tmpdir(), "trickster-test-"));
  await mkdir(join(project, ".git"));
  await writeFile(join(project, "AGENTS.md"), "# Existing instructions\n", "utf8");
  await writeFile(join(project, ".gitignore"), "build/\n", "utf8");
  return project;
}

test("installs one project-local Trickster folder without the remote style library", async () => {
  const project = await createProject();
  await initializeProject({ target: project, yes: true, quiet: true });

  assert.match(await readFile(join(project, "AGENTS.md"), "utf8"), /trickster\/AGENTS\.md/);
  assert.equal(await readFile(join(project, ".gitignore"), "utf8"), "build/\n");
  assert.equal(await readFile(join(project, "trickster", "VERSION"), "utf8"), "1.0.3\n");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "codex\n");
  assert.notEqual(
    await readFile(join(project, "trickster", "workflow", "master-prompt.md"), "utf8"),
    "",
  );
  assert.match(
    await readFile(join(project, "trickster", "workflow", "style-reference.md"), "utf8"),
    /raw\.githubusercontent\.com\/stepzme\/trickster\/main\/styles\/catalog\.json/,
  );
  assert.deepEqual(
    extractCapabilityRegistryRows(
      await readFile(join(project, "trickster", "workflow", "ios-capabilities.md"), "utf8"),
    ),
    canonicalCapabilities,
  );
  assert.equal(
    await readdir(join(project, "trickster", "styles")).then(() => true, () => false),
    false,
  );

  assert.equal(
    await readFile(join(project, ".codex", "config.toml"), "utf8").catch(() => ""),
    "",
  );
  assert.equal(
    await readFile(join(project, "trickster", "templates", "references.md"), "utf8").catch(() => ""),
    "",
  );
});

test("re-running init updates managed files and preserves the approved design composition and artifacts", async () => {
  const project = await createProject();
  const options = { target: project, yes: true, quiet: true };

  await initializeProject(options);
  await writeFile(join(project, "trickster", "design", "provenance.json"), "{\"ui\":\"keep\",\"ux\":\"keep\"}\n", "utf8");
  await writeFile(join(project, "trickster", "design", "composition.md"), "# Keep composition\n", "utf8");
  await writeFile(join(project, "trickster", "design", "source.json"), "{\"appId\":\"keep\"}\n", "utf8");
  await writeFile(join(project, "trickster", "design", "ui.md"), "# Keep UI\n", "utf8");
  await writeFile(join(project, "trickster", "design", "ux.md"), "# Keep UX\n", "utf8");
  await writeFile(join(project, "trickster", "design", "illustrations.md"), "# Keep art\n", "utf8");
  await mkdir(join(project, "trickster", "artifacts", "run-1"), { recursive: true });
  await writeFile(join(project, "trickster", "artifacts", "run-1", "review.md"), "# Keep review\n", "utf8");
  await writeFile(join(project, "trickster", "workflow", "obsolete.md"), "obsolete\n", "utf8");

  await initializeProject(options);

  const agents = await readFile(join(project, "AGENTS.md"), "utf8");
  assert.equal(agents.match(/>>> trickster managed instructions/g)?.length, 1);
  assert.equal(
    await readFile(join(project, "trickster", "design", "provenance.json"), "utf8"),
    '{"ui":"keep","ux":"keep"}\n',
  );
  assert.equal(
    await readFile(join(project, "trickster", "design", "composition.md"), "utf8"),
    "# Keep composition\n",
  );
  assert.equal(
    await readFile(join(project, "trickster", "design", "source.json"), "utf8"),
    '{"appId":"keep"}\n',
  );
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
  assert.equal(
    await readFile(join(project, "trickster", "workflow", "obsolete.md"), "utf8").catch(() => ""),
    "",
  );
});

test("doctor validates the installed feedback-gated workflow before reference composition", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
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
  assert.match(cliResult.stdout, /local installation is ready to use/i);
  assert.match(cliResult.stdout, /reconciles core scope with all eleven mandatory iOS capabilities/i);
  assert.match(cliResult.stdout, /composes approved UI, UX and optional illustration sources/i);
});

test("doctor rejects an installation without the mandatory capability workflow", async () => {
  const project = await createProject();
  await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
    quiet: true,
  });

  await rm(join(project, "trickster", "workflow", "ios-capabilities.md"));
  const result = await doctorProject(project, { quiet: true });

  assert.equal(result.ready, false);
  assert.deepEqual(
    result.checks.find(([name]) => name === "iOS capability workflow"),
    ["iOS capability workflow", false],
  );
});

test("re-running init does not remove an existing project style library", async () => {
  const project = await createProject();
  const packageDirectory = join(project, "trickster", "styles", "custom-package");
  await mkdir(packageDirectory, { recursive: true });
  await writeFile(join(packageDirectory, "ui.md"), "# Keep custom package\n", "utf8");

  await initializeProject({ target: project, harness: "generic", yes: true, quiet: true });

  assert.equal(
    await readFile(join(packageDirectory, "ui.md"), "utf8"),
    "# Keep custom package\n",
  );
});

test("generic harness installs the portable kit without Codex project files", async () => {
  const project = await createProject();
  const result = await initializeProject({
    target: project,
    harness: "generic",
    yes: true,
    quiet: true,
  });

  assert.equal(result.harness, "generic");
  assert.equal(await readFile(join(project, "trickster", "HARNESS"), "utf8"), "generic\n");
  assert.equal(await readFile(join(project, "AGENTS.md"), "utf8"), "# Existing instructions\n");
  assert.equal(
    await readFile(join(project, ".codex", "config.toml"), "utf8").catch(() => ""),
    "",
  );
  assert.notEqual(
    await readFile(join(project, "trickster", "adapters", "generic.md"), "utf8"),
    "",
  );
  assert.equal((await doctorProject(project, { quiet: true })).ready, true);
});

test("switching to generic removes only Trickster-owned Codex integration", async () => {
  const project = await createProject();
  const baseOptions = { target: project, yes: true, quiet: true };

  await initializeProject({ ...baseOptions, harness: "codex" });
  await mkdir(join(project, ".codex"), { recursive: true });
  await writeFile(
    join(project, ".codex", "config.toml"),
    `# >>> trickster managed MCP servers >>>
legacy = true
# <<< trickster managed MCP servers <<<

model = "keep-me"
`,
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

test("prints an English starter brief after init", async () => {
  const project = await createProject();
  const result = spawnSync(
    process.execPath,
    [
      resolve(repositoryRoot, "bin", "trickster.mjs"),
      "init",
      "--target",
      project,
      "--harness",
      "generic",
      "--yes",
    ],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 0);
  assert.match(result.stdout, /Start a new task in your agent and paste a brief like this:/);
  assert.doesNotMatch(result.stdout, /Style catalog:/);
  assert.match(result.stdout, /Use Trickster to create or substantially change a native iOS app\./);
  assert.match(result.stdout, /Primary task:\nRequired features:\nOut of scope:\nConstraints:/);
  assert.match(result.stdout, /A short description is enough\. Trickster will reconcile all eleven mandatory iOS capabilities/);
  assert.doesNotMatch(result.stdout, /product-defining gap|style package before UI work/);
});

test("keeps the canonical eleven-capability tables identical", async () => {
  const registry = await readFile(join(repositoryRoot, "workflow", "ios-capabilities.md"), "utf8");
  const product = await readFile(join(repositoryRoot, "templates", "product.md"), "utf8");
  const review = await readFile(join(repositoryRoot, "templates", "review.md"), "utf8");
  const russianReadme = await readFile(join(repositoryRoot, "README.ru.md"), "utf8");

  assert.deepEqual(extractCapabilityRegistryRows(registry), canonicalCapabilities);
  assert.deepEqual(extractCapabilityTemplateRows(product), canonicalCapabilities);
  assert.deepEqual(extractCapabilityTemplateRows(review), canonicalCapabilities);
  assertAppearsInOrder(russianReadme, russianCapabilityNames);
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

test("npm package excludes repository-only assets", async () => {
  const npmCache = await mkdtemp(join(tmpdir(), "trickster-npm-cache-"));
  const result = spawnSync("npm", ["pack", "--dry-run", "--json"], {
    cwd: repositoryRoot,
    encoding: "utf8",
    env: { ...process.env, npm_config_cache: npmCache },
  });

  assert.equal(result.status, 0, result.stderr);
  const packResult = JSON.parse(result.stdout);
  const { files } = Array.isArray(packResult)
    ? packResult[0]
    : Object.values(packResult)[0];
  assert.equal(files.some(({ path }) => path.startsWith("styles/")), false);
  assert.equal(files.some(({ path }) => path.startsWith("site/")), false);
  assert.equal(files.some(({ path }) => path.startsWith(".github/")), false);
  assert.equal(files.some(({ path }) => path === "workflow/ios-capabilities.md"), true);
  assert.equal(files.some(({ path }) => path === "workflow/style-reference.md"), true);
  assert.equal(files.some(({ path }) => path === "workflow/implementation-core.md"), true);
  assert.equal(files.some(({ path }) => path === "workflow/implementation-full.md"), true);
  assert.equal(files.some(({ path }) => path === "workflow/implementation-hardening.md"), true);

  const internalDocPrefixes = ["adapters/", "installer/assets/", "roles/", "templates/", "workflow/"];
  const internalDocs = files
    .map(({ path }) => path)
    .filter((path) => path.endsWith(".md"))
    .filter((path) => internalDocPrefixes.some((prefix) => path.startsWith(prefix)));

  for (const path of internalDocs) {
    assert.doesNotMatch(await readFile(join(repositoryRoot, path), "utf8"), /[А-Яа-яЁё]/, path);
  }
});

test("style catalog indexes every repository package with required documents", async () => {
  const catalogCheck = spawnSync(
    process.execPath,
    [resolve(repositoryRoot, "maintainers", "build-style-catalog.mjs"), "--check"],
    { cwd: repositoryRoot, encoding: "utf8" },
  );
  assert.equal(catalogCheck.status, 0, catalogCheck.stderr);

  const catalog = JSON.parse(
    await readFile(join(repositoryRoot, "styles", "catalog.json"), "utf8"),
  );
  const directories = await readdir(
    join(repositoryRoot, "styles"),
    { withFileTypes: true },
  );
  const packageIds = directories
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();

  assert.equal(catalog.length, packageIds.length);
  assert.deepEqual(catalog.map(({ appId }) => appId).sort(), packageIds);
  assert.equal(new Set(catalog.map(({ appId }) => appId)).size, catalog.length);

  for (const entry of catalog) {
    assert.deepEqual(Object.keys(entry), [
      "appId",
      "name",
      "url",
      "category",
      "categories",
      "uiSummary",
      "uxSummary",
      "navigationSummary",
      "coreFlows",
      "illustrationSummary",
    ]);
    for (const key of ["appId", "name", "url", "category", "uiSummary", "uxSummary", "navigationSummary"]) {
      assert.equal(typeof entry[key] === "string" && entry[key].trim().length > 0, true);
    }
    assert.equal(Array.isArray(entry.categories) && entry.categories.length > 0, true);
    assert.equal(entry.categories.every((value) => typeof value === "string" && value.trim()), true);
    assert.equal(Array.isArray(entry.coreFlows) && entry.coreFlows.length > 0, true);
    assert.equal(entry.coreFlows.every((value) => typeof value === "string" && value.trim()), true);
    assert.equal(
      entry.illustrationSummary === null ||
        (typeof entry.illustrationSummary === "string" && entry.illustrationSummary.trim().length > 0),
      true,
    );
    const source = JSON.parse(
      await readFile(join(repositoryRoot, "styles", entry.appId, "source.json"), "utf8"),
    );
    assert.equal(entry.url, source.url);
    assert.equal(entry.category, source.category);
    assert.notEqual(
      await readFile(join(repositoryRoot, "styles", entry.appId, "ui.md"), "utf8"),
      "",
    );
    assert.notEqual(
      await readFile(join(repositoryRoot, "styles", entry.appId, "ux.md"), "utf8"),
      "",
    );
    assert.equal(
      entry.illustrationSummary !== null,
      await readFile(join(repositoryRoot, "styles", entry.appId, "illustrations.md"), "utf8")
        .then(() => true, () => false),
    );
  }
});
