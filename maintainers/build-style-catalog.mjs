import { existsSync } from "node:fs";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stylesRoot = resolve(repositoryRoot, "styles");
const catalogPath = resolve(stylesRoot, "catalog.json");

const canonicalCategories = [
  "AI",
  "Communication",
  "Education",
  "Entertainment",
  "Finance",
  "Food and Drinks",
  "Job & Recruitment",
  "Lifestyle",
  "Maps & Navigation",
  "Medical",
  "Music & Audio",
  "News & Media",
  "Productivity",
  "Shopping, Listings & Marketplaces",
  "Social Networking",
  "Telecom & Connectivity",
  "Travel & Transportation",
  "Utilities",
  "Weather",
];

function compact(value) {
  return value.replace(/\s+/g, " ").trim();
}

function requiredMatch(value, expression, label, appId) {
  const match = value.match(expression);
  if (!match) throw new Error(`${appId}: missing ${label}`);
  return compact(match[1] ?? match[2] ?? match[3] ?? "");
}

function rawSection(markdown, title, appId) {
  const expression = new RegExp(`^# ${title}\\s*$`, "m");
  const match = expression.exec(markdown);
  if (!match) throw new Error(`${appId}: missing # ${title}`);
  const bodyStart = match.index + match[0].length;
  const remainder = markdown.slice(bodyStart);
  const nextSection = remainder.search(/^# /m);
  return nextSection >= 0 ? remainder.slice(0, nextSection) : remainder;
}

function section(markdown, title, appId) {
  return compact(rawSection(markdown, title, appId));
}

function illustrationOverview(markdown, appId) {
  if (/^# Overview\s*$/m.test(markdown)) return section(markdown, "Overview", appId);
  const heading = /^# .+$/m.exec(markdown);
  if (!heading) throw new Error(`${appId}: illustration document has no top-level heading`);
  const remainder = markdown.slice(heading.index + heading[0].length);
  const nextSection = remainder.search(/^# /m);
  const summary = compact(nextSection >= 0 ? remainder.slice(0, nextSection) : remainder);
  if (!summary) throw new Error(`${appId}: illustration overview is empty`);
  return summary;
}

function normalizeCategories(category, appId) {
  const normalized = canonicalCategories.filter((candidate) =>
    category.toLocaleLowerCase("en-US").includes(candidate.toLocaleLowerCase("en-US")),
  );
  if (normalized.length === 0) throw new Error(`${appId}: unsupported category ${category}`);
  return normalized;
}

async function buildCatalog() {
  const existing = JSON.parse(await readFile(catalogPath, "utf8"));
  const catalogById = new Map(existing.map((entry) => [entry.appId, entry]));
  const directories = (await readdir(stylesRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();

  const catalog = [];
  for (const appId of directories) {
    const current = catalogById.get(appId);
    if (!current?.name) {
      throw new Error(`${appId}: add appId, name, url, and category to catalog.json first`);
    }

    const packageRoot = resolve(stylesRoot, appId);
    const source = JSON.parse(await readFile(resolve(packageRoot, "source.json"), "utf8"));
    const ui = await readFile(resolve(packageRoot, "ui.md"), "utf8");
    const illustrationsPath = resolve(packageRoot, "illustrations.md");
    const illustrationSummary = existsSync(illustrationsPath)
      ? illustrationOverview(await readFile(illustrationsPath, "utf8"), appId)
      : null;

    if (source.url !== current.url || source.category !== current.category) {
      throw new Error(`${appId}: catalog URL or category does not match source.json`);
    }

    const uiSummary = requiredMatch(
      ui,
      /^description:\s*(?:"([^"]+)"|'([^']+)'|(.+))$/m,
      "UI description",
      appId,
    );

    catalog.push({
      appId,
      name: current.name,
      url: source.url,
      category: source.category,
      categories: normalizeCategories(source.category, appId),
      uiSummary,
      illustrationSummary,
    });
  }

  if (catalogById.size !== catalog.length) {
    const stale = [...catalogById.keys()].filter((appId) => !directories.includes(appId));
    throw new Error(`catalog contains missing package directories: ${stale.join(", ")}`);
  }

  return `${JSON.stringify(catalog, null, 2)}\n`;
}

const nextCatalog = await buildCatalog();
if (process.argv.includes("--check")) {
  const currentCatalog = await readFile(catalogPath, "utf8");
  if (currentCatalog !== nextCatalog) {
    throw new Error("styles/catalog.json is stale; run node maintainers/build-style-catalog.mjs");
  }
} else {
  await writeFile(catalogPath, nextCatalog, "utf8");
  const count = JSON.parse(nextCatalog).length;
  console.log(`Updated styles/catalog.json with ${count} enriched entries`);
}
