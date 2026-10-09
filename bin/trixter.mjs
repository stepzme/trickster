#!/usr/bin/env node

import { fileURLToPath } from "node:url";

import { isGlobalPackagePath, runCli } from "../installer/init.mjs";
import { createTerminalStyle } from "../installer/terminal-style.mjs";

const errorStyle = createTerminalStyle(process.stderr);

if (isGlobalPackagePath(fileURLToPath(import.meta.url))) {
  console.error(`${errorStyle.error("Trixter cannot run from a global npm installation.")}

Remove the global copy and run this from an existing project root instead:

  npx @sgx22/trixter init`);
  process.exit(1);
}

runCli(process.argv.slice(2)).catch((error) => {
  console.error(`${errorStyle.error("Trixter failed:")} ${error.message}`);
  process.exitCode = 1;
});
