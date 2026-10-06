# Trickster

Trickster is a project-local workflow for building native iOS apps with AI roles. It turns a product idea into an approved product definition, a running design, a complete implementation, and final publication materials.

[Русская версия](README.ru.md)

## Versions

| Version | Edition | Status | Difference |
|---|---|---|---|
| `1.0.2` | Complex | Published on npm | The detailed workflow: five specialist roles and separate documents for scope, assets, app icon, store screenshots, implementation, verification, acceptance, and delivery. |
| `1.1.0` | Lite | Available as a local Codex plugin; not published to npm | The streamlined workflow: four roles, six stages, fewer handoffs, and one Designer responsible for references, the running MVP, graphics, and publication materials. |

Install the published Complex edition from an existing Git or Xcode project:

```sh
npx @sgx22/trickster@1.0.2 init
```

After `1.1.0` is published, the Lite edition will be available with:

```sh
npx @sgx22/trickster@1.1.0 init
```

Trickster does not support global installation. Run `trickster doctor` after initialization to check the local setup.

## Codex plugin

Clone this repository, open it in a terminal, and install the local marketplace plugin:

```sh
codex plugin marketplace add .
codex plugin add trickster@trickster-local
```

Restart Codex, open the target app project, and ask it to use `$trickster-ios`. If the target is a new empty directory, run `git init` there first. The skill installs a versioned Trickster snapshot into the app repository; later plugin updates do not silently change an active project.

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
