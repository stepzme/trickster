import { readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stylesRoot = resolve(repositoryRoot, "styles");

const UI_HEADINGS = [
  "Overview",
  "Non-negotiable visual invariants",
  "Color and surfaces",
  "Typography",
  "Screen composition",
  "Navigation appearance",
  "Components",
  "Imagery and icons",
  "States",
  "iOS adaptation",
  "Anti-generic checklist",
];

const UX_HEADINGS = [
  "Overview",
  "Navigation",
  "Core Flows",
  "Interaction Patterns",
];

const ILLUSTRATION_HEADINGS = [
  "Overview",
  "Visual Style",
  "Composition",
  "Color and Materials",
  "Variants and States",
  "Avoid",
];

function topLevelHeadings(markdown) {
  return [...markdown.matchAll(/^# ([^#].*)$/gm)].map(([, heading]) => heading.trim());
}

function section(markdown, heading) {
  const start = markdown.indexOf(`# ${heading}\n`);
  if (start < 0) return "";
  const bodyStart = start + heading.length + 3;
  const next = markdown.indexOf("\n# ", bodyStart);
  return markdown.slice(bodyStart, next < 0 ? undefined : next);
}

function assertEqualHeadings(appId, file, actual, expected, errors) {
  if (actual.length !== expected.length || actual.some((heading, index) => heading !== expected[index])) {
    errors.push(`${appId}/${file}: expected headings ${expected.join(" | ")}; found ${actual.join(" | ")}`);
  }
}

function assertNonEmptySections(appId, file, markdown, headings, errors) {
  for (const heading of headings) {
    if (!section(markdown, heading).trim()) {
      errors.push(`${appId}/${file}: ${heading} must not be empty`);
    }
  }
}

function validateUi(appId, markdown, errors) {
  assertEqualHeadings(appId, "ui.md", topLevelHeadings(markdown), UI_HEADINGS, errors);
  assertNonEmptySections(appId, "ui.md", markdown, UI_HEADINGS, errors);
  if (!/^version:\s*1\s*$/m.test(markdown)) {
    errors.push(`${appId}/ui.md: frontmatter must use version 1`);
  }
  if (!/^platform:\s*iOS\s*$/m.test(markdown)) {
    errors.push(`${appId}/ui.md: frontmatter must declare platform iOS`);
  }
  const frontmatter = markdown.split("---").slice(1, 2).join("");
  for (const key of ["name", "description", "colors", "typography", "spacing", "rounded", "components"]) {
    if (!new RegExp(`^${key}:`, "m").test(frontmatter)) {
      errors.push(`${appId}/ui.md: frontmatter is missing ${key}`);
    }
  }
  if (!/^description:\s*".+"\s*$/m.test(frontmatter)) {
    errors.push(`${appId}/ui.md: description must be a non-empty quoted single-line value`);
  }
  if (/^[ \t]*[^:\n]*(?:hover|breakpoint)[^:\n]*:/mi.test(frontmatter)) {
    errors.push(`${appId}/ui.md: frontmatter contains web-only hover or breakpoint tokens`);
  }
  if (/\d(?:px|pt)\b/.test(frontmatter)) {
    errors.push(`${appId}/ui.md: iOS frontmatter must use numeric point values without px or pt units`);
  }
  if (/^\s*top-nav:/m.test(frontmatter)) {
    errors.push(`${appId}/ui.md: frontmatter contains a web-style top-nav component`);
  }
  if (/^### (?:Pricing Tabs|Footer|Breakpoints)\s*$/m.test(markdown)) {
    errors.push(`${appId}/ui.md: legacy web-oriented subsection remains`);
  }
  if (/\dpx\b/.test(markdown)) {
    errors.push(`${appId}/ui.md: document still contains web pixel units`);
  }
  if (/padding:\s*\d+\s+\d+\s*$/m.test(frontmatter)) {
    errors.push(`${appId}/ui.md: multi-value padding must use an explicit numeric array`);
  }
  for (const [index, line] of frontmatter.split("\n").entries()) {
    const openingBraces = line.match(/\{/g)?.length ?? 0;
    const closingBraces = line.match(/\}/g)?.length ?? 0;
    if (openingBraces !== closingBraces) {
      errors.push(`${appId}/ui.md: malformed inline mapping on frontmatter line ${index + 1}`);
    }
  }
  const invariantItems = section(markdown, "Non-negotiable visual invariants")
    .split("\n")
    .filter((line) => line.startsWith("- "));
  if (invariantItems.length < 5 || invariantItems.length > 8) {
    errors.push(`${appId}/ui.md: expected 5-8 non-negotiable visual invariants; found ${invariantItems.length}`);
  }
  const genericInvariant = /(?:remains part of the defining visual language|the visual language consistently uses|the reference keeps .* as a recurring visual element|preserve this observed visual)/i;
  for (const item of invariantItems) {
    if (item.length > 240 || item.includes("|") || genericInvariant.test(item)) {
      errors.push(`${appId}/ui.md: invariant must be a concise source-specific observable statement: ${item}`);
    }
  }
  const antiGenericItems = section(markdown, "Anti-generic checklist").match(/^- /gm)?.length ?? 0;
  if (antiGenericItems < 3) {
    errors.push(`${appId}/ui.md: anti-generic checklist must contain at least 3 items`);
  }
}

function validateUx(appId, markdown, errors) {
  assertEqualHeadings(appId, "ux.md", topLevelHeadings(markdown), UX_HEADINGS, errors);
  assertNonEmptySections(appId, "ux.md", markdown, UX_HEADINGS, errors);
  const coreFlows = section(markdown, "Core Flows");
  const flows = coreFlows.split(/^## /m).slice(1);
  if (flows.length < 1) {
    errors.push(`${appId}/ux.md: Core Flows must contain at least one observed flow`);
  }
  for (const flow of flows) {
    const [heading, ...body] = flow.split("\n");
    if (!body.join("\n").match(/^1\. /m)) {
      errors.push(`${appId}/ux.md: flow ${heading.trim()} must contain numbered steps on separate lines`);
    }
  }
}

function validateIllustrations(appId, markdown, errors) {
  assertEqualHeadings(
    appId,
    "illustrations.md",
    topLevelHeadings(markdown),
    ILLUSTRATION_HEADINGS,
    errors,
  );
  assertNonEmptySections(appId, "illustrations.md", markdown, ILLUSTRATION_HEADINGS, errors);
}

export async function validateStylePackages() {
  const entries = await readdir(stylesRoot, { withFileTypes: true });
  const appIds = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();
  const errors = [];

  for (const appId of appIds) {
    const packageRoot = resolve(stylesRoot, appId);
    const ui = await readFile(resolve(packageRoot, "ui.md"), "utf8");
    const ux = await readFile(resolve(packageRoot, "ux.md"), "utf8");
    validateUi(appId, ui, errors);
    validateUx(appId, ux, errors);

    try {
      const illustrations = await readFile(resolve(packageRoot, "illustrations.md"), "utf8");
      validateIllustrations(appId, illustrations, errors);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }

  return { count: appIds.length, errors };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = await validateStylePackages();
  if (result.errors.length > 0) {
    console.error(result.errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`Validated ${result.count} style packages`);
  }
}
