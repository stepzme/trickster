# Trixter

Trixter is your project-local AI crew for native iOS development. Its four roles take an app from product definition to a running design, complete implementation, independent review, and release materials.

[Русская версия](README.ru.md)

## Versions

| Version | Edition | Status | Difference |
|---|---|---|---|
| `1.0.2` | Trickster Complex | Published as `@sgx22/trickster` | The detailed workflow with five specialist roles and separate delivery documents. |
| `1.1.0` | Trickster Lite | Published as `@sgx22/trickster` | Four roles, six stages, and fewer handoffs. |
| `2.0.0` | Trixter | Current repository version; npm release pending | Renames the product and technical identifiers, adds multi-harness support, and migrates existing `trickster/` installations without losing design sources or artifacts. |

Until 2.0 is published, install the existing Lite edition from an existing Git or Xcode project:

```sh
npx @sgx22/trickster@1.1.0 init
```

For Trixter 2.0, select a harness explicitly when needed:

```sh
npx @sgx22/trixter@2.0.0 init --harness codex
npx @sgx22/trixter@2.0.0 init --harness claude-code
npx @sgx22/trixter@2.0.0 init --harness generic
```

The Claude Code option requires `claude` on `PATH` and writes a managed import to the project's `CLAUDE.md` without replacing user instructions. Start a new Claude Code session after installation and run `/context` to confirm that `trixter/AGENTS.md` loaded. Support remains experimental until the future real-session checklist is completed.

Trixter does not support global installation. Run `trixter doctor --harness <name>` after initialization. Doctor reports installation checks and local tools separately from capabilities that still require `VERIFY` inside the agent session; Markdown files alone do not prove the iOS pipeline is operational.

## Codex plugin

Clone this repository, open it in a terminal, and install the local marketplace plugin:

```sh
codex plugin marketplace add .
codex plugin add trixter@trixter-local
```

Restart Codex, open the target app project, and ask it to use `$trixter-ios`. If the target is a new empty directory, run `git init` there first. The skill installs its own versioned Trixter snapshot into the app repository; the npm installer and plugin snapshot are versioned independently.

## Rename compatibility

Trixter 2.0 recognizes an existing `trickster/` installation and moves it to `trixter/` before refreshing managed workflow files. User-owned `design/` and `artifacts/` remain intact. If both directories already exist, initialization stops instead of guessing which data to keep. The repository also contains the deprecated `@sgx22/trickster` compatibility package source, ready to forward the old command to `@sgx22/trixter` when 2.0 is published.

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
trixter/
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
