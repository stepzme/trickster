#!/usr/bin/env node

import { access, readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { constants } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const runtimeDirectory = dirname(fileURLToPath(import.meta.url));
const tricksterDirectory = resolve(runtimeDirectory, "..");
const keyPath = resolve(tricksterDirectory, ".secrets", "designmd-api-key");
const serverPath = resolve(
  runtimeDirectory,
  "node_modules",
  "designmd-mcp",
  "dist",
  "index.js",
);

try {
  await access(serverPath, constants.R_OK);
} catch {
  console.error(
    "DesignMD MCP is not installed. Run `npm install --prefix trickster/runtime --omit=dev --ignore-scripts` from the project root.",
  );
  process.exit(1);
}

let apiKey;
try {
  apiKey = (await readFile(keyPath, "utf8")).trim();
} catch {
  console.error(
    "DesignMD API key is missing. Run `npx @sgx22/trickster@pilot init` again and enter the key.",
  );
  process.exit(1);
}

if (!apiKey) {
  console.error("DesignMD API key file is empty.");
  process.exit(1);
}

const child = spawn(process.execPath, [serverPath], {
  env: { ...process.env, DESIGNMD_API_KEY: apiKey },
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("error", (error) => {
  console.error(`Unable to start DesignMD MCP: ${error.message}`);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
