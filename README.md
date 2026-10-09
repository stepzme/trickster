# Trickster

Trickster is a project-local workflow for building native iOS apps with AI roles. It turns a product idea into an approved product definition, a running design, a complete implementation, and final publication materials.

[Русская версия](README.ru.md)

## Versions

| Version | Edition | Status | Difference |
|---|---|---|---|
| `1.0.2` | Complex | Published on npm | The detailed workflow: five specialist roles and separate documents for scope, assets, app icon, store screenshots, implementation, verification, acceptance, and delivery. |
| `1.1.0` | Lite | Published on npm | The streamlined workflow: four roles, six stages, fewer handoffs, and one Designer responsible for references, the running MVP, graphics, and publication materials. |
| `1.2.0` | Lite, multi-harness | Current repository version; npm release pending | Adds the experimental Claude Code adapter alongside Codex and generic harness support. The Claude Code integration has been checked against official documentation but has not completed an end-to-end run in a real session. |

Install the published Lite edition from an existing Git or Xcode project:

```sh
npx @sgx22/trickster@1.1.0 init
```

After `1.2.0` is published, select a harness explicitly when needed:

```sh
npx @sgx22/trickster@1.2.0 init --harness codex
npx @sgx22/trickster@1.2.0 init --harness claude-code
npx @sgx22/trickster@1.2.0 init --harness generic
```

The Claude Code option requires `claude` on `PATH` and writes a managed import to the project's `CLAUDE.md` without replacing user instructions. Start a new Claude Code session after installation and run `/context` to confirm that `trickster/AGENTS.md` loaded. Support remains experimental until the future real-session checklist is completed.

Trickster does not support global installation. Run `trickster doctor --harness <name>` after initialization. Doctor reports installation checks and local tools separately from capabilities that still require `VERIFY` inside the agent session; Markdown files alone do not prove the iOS pipeline is operational.

## Codex plugin

Clone this repository, open it in a terminal, and install the local marketplace plugin:

```sh
codex plugin marketplace add .
codex plugin add trickster@trickster-local
```

Restart Codex, open the target app project, and ask it to use `$trickster-ios`. If the target is a new empty directory, run `git init` there first. The skill installs its own versioned Trickster snapshot into the app repository; the 1.2.0 npm installer and experimental Claude Code adapter do not update that plugin snapshot.

## Lite workflow

`Research → Planning → Design → Dev → Polish → Publish`

- **Research:** define the complete product and decide all eleven iOS capabilities.
- **Planning:** split the approved product into a design MVP and ordered Full Scope blocks.
- **Design:** approve references, build the MVP in Xcode, and approve the running app in Simulator.
- **Dev:** extend that same build to Full Scope, one approved block at a time.
- **Polish:** independently review the completed app and run focused correction cycles.
- **Publish:** prepare the final app icon, store screenshots, and publication exports.

The product behavior comes from approved Research and Planning. The visual direction comes from one approved `ui.md` and, when needed, one `illustrations.md` selected from the design catalog. A successful build alone is not design approval—the user approves the real running app.

## Installed into the project

```text
trickster/
├── AGENTS.md
├── HARNESS
├── VERSION
├── adapters/
├── roles/
├── workflow/
├── templates/
├── design/
└── artifacts/
```

The full design catalog is not included in the npm package. Only documents selected for the current project are downloaded. Re-initialization updates managed workflow files while preserving `design/` and `artifacts/`.

Requirements: macOS, Xcode, Node.js 20+, a suitable iOS Simulator runtime, and an agent harness that can use the installed instructions. Some final checks require a physical iPhone.

License: MIT.
