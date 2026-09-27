const globalInstall =
  process.env.npm_config_global === "true" ||
  process.env.npm_config_location === "global";

if (globalInstall) {
  console.error(`
Trickster is project-scoped and cannot be installed globally.

Run this command from the root of an existing project:

  npx @sgx22/trickster init
`);
  process.exit(1);
}
