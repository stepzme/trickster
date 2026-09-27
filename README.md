English · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · [Español](https://github.com/stepzme/trickster/blob/main/README.es.md) · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

# Trickster

### An AI app factory for native iOS.

Turn an app idea into a reference-driven native iOS app — researched, designed, built, verified in Simulator, and completed with an original app icon and ASO screenshots.

Trickster orchestrates specialized AI roles inside your repository. It studies real products before design, asks you to approve one visual direction, implements the app, and independently checks the result instead of treating generated code as finished work.

## What you get

- a functional Xcode project and native iOS app;
- a product scope grounded in real apps from the same category;
- one confirmed visual language from a local Screen Gallery style library;
- custom-styled controls that preserve native iOS behavior and accessibility;
- build, Simulator, interaction, and visual verification artifacts;
- one original app icon informed by reviewed Logoinspo references;
- one ASO screenshot set made from the accepted build.

## The pipeline

```text
App idea
→ product scope
→ real UI references
→ style approval
→ native implementation
→ Simulator acceptance
→ app icon and ASO screenshots
```

1. **Research the product.** Establish the requested scope and recover a sensible category baseline when the brief is incomplete.
2. **Study real interfaces.** Inspect relevant Screen Gallery screens and complete flows instead of designing from memory.
3. **Approve one direction.** Select one local style package and stop for explicit user confirmation before UI implementation.
4. **Create the contract.** Define screens, states, scenarios, assets, and acceptance checks.
5. **Build the app.** Implement one vertical flow first, visually inspect it, then complete the agreed scope.
6. **Verify independently.** Build, install, run, interact with, and inspect the final app in Simulator. Missing evidence remains `UNVERIFIED`.
7. **Finish the store package.** Produce an original app icon and, after acceptance, ASO screenshots from the real build.

Trickster uses multiple focused roles when the active agent harness supports delegation and follows the same contracts sequentially when it does not.

## Quick start

Run from an existing Git, Xcode, Swift Package, or XcodeGen project root:

```sh
npx @sgx22/trickster init
```

Codex is the default adapter. Authenticate Screen Gallery when needed:

```sh
codex mcp login screen_gallery
```

Check the local installation:

```sh
npx @sgx22/trickster doctor
```

Then ask your agent to create or substantially change an iOS app using Trickster. The installed project instructions activate the pipeline and enforce its design and acceptance gates.

For another agent harness:

```sh
npx @sgx22/trickster init --harness generic
```

Follow `trickster/adapters/generic.md` to connect Screen Gallery and map the orchestration operations to that environment.

## How it is installed

Trickster is installed into the current project, not globally:

```text
trickster/
├── AGENTS.md
├── HARNESS
├── roles/
├── adapters/
├── workflow/
├── templates/
├── styles/
├── design/
└── artifacts/
```

- `styles/` contains reusable Screen Gallery reference packages.
- `design/` contains the style package confirmed for the current product.
- `artifacts/<run-id>/` contains immutable inputs, contracts, evidence, screenshots, and review results.
- `roles/` and `workflow/` define the factory stages independently of a specific agent harness.
- `adapters/` map those stages to Codex or another environment.

Re-running `init` updates managed workflow files and the supplied style library while preserving the selected design and run artifacts.

## Design sources

- **Screen Gallery MCP** supplies real screens and flows for product and UX research.
- **The local style library** supplies `source.json`, `ui.md`, `ux.md`, and an optional `illustrations.md` for each reference app.
- **Logoinspo App Icons** supplies references for the original app-icon direction.

The style package is not a skin. Native controls may provide behavior, accessibility, focus, and keyboard integration, but their visual appearance must explicitly inherit `ui.md` when the reference defines a distinct language.

## Detailed stages

| Stage | Owner | Required result |
|---|---|---|
| 1. Scope | product-researcher | Explicit scope status and missing decisions |
| 2. Screen research | product-researcher | Reviewed images, relevant category, and baseline when needed |
| 3. Style reference | design-planner + user gate | One local package and explicit user approval |
| 4. Product contract | design-planner | Screens, states, scenarios, assets, and verification plan |
| 5. Product assets | visual-producer when needed | Verified imagery or a justified `N/A` |
| 6. Implementation | implementation-owner | Vertical flow followed by the complete agreed scope |
| 7. App icon | visual-producer | One original concept installed in the app |
| 8. Acceptance | acceptance-reviewer + master | Independently verified final build |
| 9. ASO screenshots | visual-producer | One set based on real screens from the accepted build |
| 10. Delivery | master | Reproducible evidence and final status |

See [the master process](workflow/master-prompt.md) and [orchestration contract](workflow/orchestration.md) for the exact execution rules.

## Core guarantees

- Real reference images are required for visual claims.
- UI implementation stops until the user confirms one style direction.
- The pipeline creates one coherent solution, not a gallery of alternatives.
- Native control behavior is preserved while appearance follows the selected visual language.
- An implementation agent cannot accept its own work.
- Build success alone is not acceptance.
- Unavailable tools or evidence are reported as `UNVERIFIED`, never invented.

## Requirements and boundaries

Trickster requires macOS, Xcode, an appropriate iOS Simulator runtime, Node.js 20 or later, and an agent environment capable of reading the installed instructions and using project tools. Screen Gallery access is required for reference research.

Signing, release archives, physical-device validation, App Store submission, and external production infrastructure are separate release tasks unless explicitly included in the product scope.

Global installation is intentionally rejected. Use `npx` as a temporary launcher inside the target project.

## Project documentation

- [Master process](workflow/master-prompt.md)
- [Role orchestration](workflow/orchestration.md)
- [Style selection](workflow/style-reference.md)
- [Implementation](workflow/implementation.md)
- [Acceptance](workflow/acceptance.md)
- [End-to-end verification](workflow/verification.md)

External documentation:

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Apple: Running your app in Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: Screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
