[Website](https://stepzme.github.io/trickster/) · English · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · [Español](https://github.com/stepzme/trickster/blob/main/README.es.md) · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

<p align="center">
  <img src="docs/assets/trickster-logo.svg" alt="Trickster — native iOS, orchestrated" width="100%">
</p>

### An AI app factory for native iOS.

Turn an app idea into a native iOS product shaped by a curated design library — scoped, extended with a fixed set of iOS capabilities, designed, built, verified, and completed with an original app icon and ASO screenshots.

Trickster orchestrates specialized AI roles inside your repository. It reads a small GitHub catalog, downloads documents for up to three relevant styles, requires you to select exactly one, saves that package in the project, and independently checks the implemented result.

## What you get

- a functional Xcode project and native iOS app;
- a product scope grounded in your brief and existing project;
- one product-relevant feature for each of eleven mandatory iOS capabilities;
- one confirmed visual language saved locally after selection from the GitHub catalog;
- custom-styled controls that preserve native iOS behavior and accessibility;
- build, Simulator, interaction, and visual verification artifacts;
- one original app icon informed by reviewed Logoinspo references;
- one ASO screenshot set made from the accepted build.

## The pipeline

![Trickster four-phase pipeline: define the product, confirm one style, build the native app, then independently verify and deliver it](docs/assets/trickster-pipeline.svg)

1. **Define the product.** Establish the requested scope, boundaries, and any decision that genuinely needs user input.
2. **Adapt mandatory iOS capabilities.** Invent one coherent product feature for every capability in the fixed eleven-item list, regardless of the prompt scope.
3. **Compare relevant styles.** Read the GitHub catalog, choose up to three candidates by metadata, and download documents only for those candidates.
4. **Select one direction.** Require exactly one package before UI work. Packages cannot be merged or split across screens.
5. **Create the contract.** Define capability-backed screens, states, scenarios, assets, and acceptance checks.
6. **Build the app.** Implement one vertical flow first, visually inspect it, then complete the agreed scope and all eleven capability features.
7. **Verify independently.** Build, install, run, interact with, and inspect the final app in Simulator and on a physical iPhone where required. Missing evidence remains `UNVERIFIED`.
8. **Finish the store package.** Produce an original app icon and, after acceptance, ASO screenshots from the real build.

Trickster uses multiple focused roles when the active agent harness supports delegation and follows the same contracts sequentially when it does not.

## The agent team

![Trickster agent team: one master coordinates five roles with separate responsibilities](docs/assets/trickster-agents.svg)

The **master** owns the run end to end: it speaks with the user, enforces gates, assigns file and Simulator ownership, validates handoffs, and makes the final decision. The five role contracts keep research, design, implementation, visual production, and acceptance focused and independently reviewable. In a harness without delegation, the master executes the same contracts sequentially.

## Quick start

Run from an existing Git, Xcode, Swift Package, or XcodeGen project root:

```sh
npx @sgx22/trickster init
```

Codex is the default adapter. Check the local installation:

```sh
npx @sgx22/trickster doctor
```

Then start a new task in your agent and paste a brief like this:

```text
Use Trickster to create or substantially change a native iOS app.

Idea:
User:
Primary task:
Required features:
Out of scope:
Constraints:
```

Keep it short if you prefer. You do not need to list platform capabilities: Trickster automatically adapts the fixed eleven-item set to the product, clarifies one product-defining gap if needed, and asks you to select one style package before UI work. The installed project instructions activate the pipeline and enforce its capability, design, and acceptance gates.

## Mandatory iOS capabilities

Every new app and substantial app change must contain a coherent product feature for each capability in this exact order:

1. Bluetooth
2. Downloading Photos
3. Adding Photos
4. Using the Camera
5. Face ID
6. Microphone Access
7. Speech Recognition Access
8. Contacts Access
9. Calendar Access
10. Location Access
11. CallKit

The agent cannot omit, merge, rename, reorder, replace, or mark an item `N/A`. A permission-only button, fake device, or fake call does not count: every feature needs a contextual entry point, a useful result, denial or unavailable behavior, and reproducible evidence. System pickers and capabilities without a normal permission prompt remain in the list and must use the correct iOS mechanism.

For another agent harness:

```sh
npx @sgx22/trickster init --harness generic
```

Follow `trickster/adapters/generic.md` to map the orchestration operations to that environment.

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
├── design/
└── artifacts/
```

- `design/` contains the only style package confirmed for the current product.
- `artifacts/<run-id>/` contains contracts, evidence, screenshots, and review results.
- `roles/` and `workflow/` define the factory stages independently of a specific agent harness.
- `adapters/` map those stages to Codex or another environment.

Re-running `init` updates managed workflow files while preserving the selected design and run artifacts.

## Design sources

- **The GitHub style catalog** lists the available reference apps. Trickster downloads documents only for the shortlisted packages, then stores the selected `source.json`, `ui.md`, `ux.md`, and optional `illustrations.md` in `trickster/design/`.
- **Logoinspo App Icons** supplies references for the original app-icon direction.

The style package is not a skin. Native controls may provide behavior, accessibility, focus, and keyboard integration, but their visual appearance must explicitly inherit `ui.md` when the reference defines a distinct language.

## Detailed stages

| Stage | Owner | Required result |
|---|---|---|
| 1. Scope | product-researcher | Explicit scope status and missing decisions |
| 2. Mandatory iOS capabilities | product-researcher + master gate | Eleven product-specific features in the fixed canonical matrix |
| 3. Style selection | design-planner + user gate | Up to three GitHub candidates and exactly one locally saved package |
| 4. Product contract | design-planner | Screens, states, scenarios, assets, and verification plan |
| 5. Product assets | visual-producer when needed | Verified imagery or a justified `N/A` |
| 6. Implementation | implementation-owner | Vertical flow followed by the complete agreed scope and capabilities |
| 7. App icon | visual-producer | One original concept installed in the app |
| 8. Acceptance | acceptance-reviewer + master | Independently verified final build and eleven-row capability matrix |
| 9. ASO screenshots | visual-producer | One set based on real screens from the accepted build |
| 10. Finalization | master + user gate | Explicit user confirmation and cleanup of temporary files |
| 11. Delivery | master | Reproducible evidence and final status |

See [the master process](workflow/master-prompt.md) and [orchestration contract](workflow/orchestration.md) for the exact execution rules.

## Core guarantees

- The style shortlist contains no more than three packages selected from catalog metadata; only their documents are downloaded.
- All eleven canonical iOS capabilities are contracted and implemented regardless of the prompt scope; none can be `N/A`.
- UI implementation stops until the user selects exactly one package.
- Packages cannot be merged; the selected package is the only design context.
- Native control behavior is preserved while appearance follows the selected visual language.
- An implementation agent cannot accept its own work.
- Build success alone is not acceptance.
- Unavailable tools or evidence are reported as `UNVERIFIED`, never invented.

## Requirements and boundaries

Trickster requires macOS, Xcode, an appropriate iOS Simulator runtime, a suitable physical iPhone and peripherals for mandatory hardware-dependent capability verification, Node.js 20 or later, and an agent environment capable of reading the installed instructions and using project tools. A new style selection requires access to the raw files in the Trickster GitHub repository; an existing project continues to use its locally saved package.

Signing for physical-device capability verification is part of acceptance. Release archives, App Store submission, and production deployment remain separate release tasks. Real external services required by a contracted capability must be connected or reported `UNVERIFIED`.

Global installation is intentionally rejected. Use `npx` as a temporary launcher inside the target project.

## Project documentation

- [Master process](workflow/master-prompt.md)
- [Role orchestration](workflow/orchestration.md)
- [Mandatory iOS capabilities](workflow/ios-capabilities.md)
- [Style selection](workflow/style-reference.md)
- [Implementation](workflow/implementation.md)
- [Acceptance](workflow/acceptance.md)
- [End-to-end verification](workflow/verification.md)

External documentation:

- [Apple: Running your app in Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: Screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
