#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = resolve(skillRoot, "..", "..");
const plugin = JSON.parse(await readFile(resolve(pluginRoot, "plugin.json"), "utf8"));

function parseTarget(argv) {
  if (argv.length === 0) return process.cwd();
  if (argv.length === 2 && argv[0] === "--target") return resolve(argv[1]);
  throw new Error("Usage: node doctor.mjs [--target <path>]");
}

async function doctor(target) {
  const toolkit = resolve(target, "trickster");
  const version = await readFile(resolve(toolkit, "VERSION"), "utf8").then((value) => value.trim(), () => "");
  const checks = [
    ["Plugin version", version === plugin.version],
    ["Trickster instructions", existsSync(resolve(toolkit, "AGENTS.md"))],
    ["Codex adapter", existsSync(resolve(toolkit, "adapters", "codex.md"))],
    ["Capability contract", existsSync(resolve(toolkit, "roles", "product-researcher.md"))],
    ...["research", "planning", "design", "dev", "polish", "publish"].map((stage) => [
      `${stage[0].toUpperCase()}${stage.slice(1)} workflow`,
      existsSync(resolve(toolkit, "workflow", `${stage}.md`)),
    ]),
  ];

  for (const [name, passed] of checks) console.log(`${passed ? "PASS" : "MISSING"}  ${name}`);
  if (!checks.every(([, passed]) => passed)) process.exitCode = 1;
}

await doctor(parseTarget(process.argv.slice(2)));
