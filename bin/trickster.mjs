#!/usr/bin/env node

import { fileURLToPath } from "node:url";

import { isGlobalPackagePath, runCli } from "../installer/init.mjs";

if (isGlobalPackagePath(fileURLToPath(import.meta.url))) {
  console.error(`Trickster cannot run from a global npm installation.

Remove the global copy and run this from an existing project root instead:

  npx @sgx22/trickster init`);
  process.exit(1);
}

runCli(process.argv.slice(2)).catch((error) => {
  console.error(`Trickster failed: ${error.message}`);
  process.exitCode = 1;
});
