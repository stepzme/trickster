import { copyFile, mkdir, readFile, readdir, rm } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = resolve(repositoryRoot, "plugin");
const referencesRoot = resolve(pluginRoot, "skills", "trickster-ios", "references");
const checking = process.argv.includes("--check");

const directoryMappings = ["adapters", "roles", "workflow", "templates"];
const fileMappings = [
  ["installer/assets/AGENTS.md", "skills/trickster-ios/references/project/AGENTS.md"],
  ["installer/assets/README.md", "skills/trickster-ios/references/project/README.md"],
  ["LICENSE", "LICENSE"],
];

async function listFiles(root) {
  const files = [];
  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
      if (entry.name.startsWith(".")) continue;
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) await visit(path);
      else if (entry.isFile()) files.push(relative(root, path));
    }
  }
  await visit(root);
  return files;
}

async function copyDirectory(source, destination) {
  await rm(destination, { recursive: true, force: true });
  for (const file of await listFiles(source)) {
    const output = resolve(destination, file);
    await mkdir(dirname(output), { recursive: true });
    await copyFile(resolve(source, file), output);
  }
}

async function assertSameFile(source, destination) {
  const [left, right] = await Promise.all([readFile(source), readFile(destination)]);
  if (!left.equals(right)) throw new Error(`${relative(repositoryRoot, destination)} is stale`);
}

async function assertSameDirectory(source, destination) {
  const [sourceFiles, destinationFiles] = await Promise.all([listFiles(source), listFiles(destination)]);
  if (JSON.stringify(sourceFiles) !== JSON.stringify(destinationFiles)) {
    throw new Error(`${relative(repositoryRoot, destination)} has a stale file list`);
  }
  for (const file of sourceFiles) {
    await assertSameFile(resolve(source, file), resolve(destination, file));
  }
}

const packageJson = JSON.parse(await readFile(resolve(repositoryRoot, "package.json"), "utf8"));
const pluginJson = JSON.parse(await readFile(resolve(pluginRoot, "plugin.json"), "utf8"));
const codexPluginJson = JSON.parse(
  await readFile(resolve(pluginRoot, ".codex-plugin", "plugin.json"), "utf8"),
);
if (packageJson.version !== pluginJson.version) {
  throw new Error(`Plugin version ${pluginJson.version} does not match package version ${packageJson.version}`);
}
if (pluginJson.name !== codexPluginJson.name || pluginJson.version !== codexPluginJson.version) {
  throw new Error("Portable and Codex compatibility manifests must have the same name and version");
}

if (checking) {
  for (const directory of directoryMappings) {
    await assertSameDirectory(resolve(repositoryRoot, directory), resolve(referencesRoot, directory));
  }
  for (const [source, destination] of fileMappings) {
    await assertSameFile(resolve(repositoryRoot, source), resolve(pluginRoot, destination));
  }
  console.log("Plugin bundle matches the canonical Trickster files");
} else {
  for (const directory of directoryMappings) {
    await copyDirectory(resolve(repositoryRoot, directory), resolve(referencesRoot, directory));
  }
  for (const [source, destination] of fileMappings) {
    const output = resolve(pluginRoot, destination);
    await mkdir(dirname(output), { recursive: true });
    await copyFile(resolve(repositoryRoot, source), output);
  }
  console.log("Plugin bundle built from the canonical Trickster files");
}
