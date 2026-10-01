[Website](https://stepzme.github.io/trickster/) · English · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · [Español](https://github.com/stepzme/trickster/blob/main/README.es.md) · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

<p align="center">
  <img src="docs/assets/trickster-logo.svg" alt="Trickster — native iOS, orchestrated" width="100%">
</p>

### An AI app factory for native iOS.

Turn an app idea into a native iOS product shaped by a curated design library — defined together with a fixed set of iOS capabilities, designed, built through feedback-gated phases, verified, and completed with an original app icon and store screenshots.

Trickster orchestrates specialized AI roles inside your repository. It reads an enriched GitHub catalog with normalized categories plus UI, UX, navigation, core-flow, and illustration summaries, downloads documents for up to three relevant apps, and lets you choose separate UI, UX, and optional illustration references. It synthesizes them into one coherent local design direction and independently checks the implemented result.

## What you get

- a functional Xcode project and native iOS app;
- a product scope grounded in your brief and existing project;
- a production-real local-first data path using SwiftData, files, and automatic local identity without a proprietary backend;
- one product-relevant feature for each of eleven mandatory iOS capabilities;
- one coherent design direction with explicit UI, UX, and optional illustration provenance;
- custom-styled controls that preserve native iOS behavior and accessibility;
- a system launch screen and coherent transition to the first real frame, plus a product-justified splash when needed;
- build, Simulator, interaction, and visual verification artifacts;
- one original app icon informed by reviewed Logoinspo references;
- one feedback-approved store screenshot set made from the accepted build.

## The pipeline

![Trickster pipeline: define the product, compose references, build through feedback gates, then independently verify and deliver](docs/assets/trickster-pipeline.svg)

1. **Define the product.** Establish the core scope, local data architecture, and one coherent product feature for each of the eleven mandatory iOS capabilities, then reconcile them into the final scope.
2. **Compose references.** Compare up to three catalog apps and choose one UI source, one UX source, and optionally one illustration source. Synthesize them into one coherent direction and approve it.
3. **Create the contract.** Define screens, launch and optional splash behavior, states, phase boundaries, asset requirements, capability scenarios, and acceptance checks.
4. **Validate the Core.** Implement and show the real cold launch through the first interactive frame together with the main sections, then iterate with the user until `CORE UI APPROVED`.
5. **Complete Full implementation.** Implement the remaining scope and capabilities, replace runtime mocks with SwiftData, files, or real system APIs, and reach `LOCAL DATA READY`. Simulator previews remain available on request.
6. **Produce and integrate visuals.** Run app-icon creation in parallel, then produce product assets after Full reaches `LOCAL DATA READY` and integrate only approved visuals.
7. **Harden the final UI.** Finish failure, denial, unavailable, accessibility, persistence, compact-layout, locale, and final-asset regression states.
8. **Verify independently.** Build, install, run, interact with, and inspect the final app in Simulator and on a physical iPhone where required. Missing evidence remains `UNVERIFIED`.
9. **Finish the store package.** Approve a storyboard, then generate and review store screenshots one frame at a time from the accepted build.

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

Keep it short if you prefer. You do not need to list platform capabilities: Trickster reconciles the fixed eleven-item set with the core scope, clarifies one product-defining gap if needed, and guides you through concern-level reference composition before UI work. The installed project instructions activate the pipeline and enforce its capability, design, feedback, and acceptance gates.

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

The agent cannot omit, merge, rename, reorder, replace, or mark an item `N/A`. The first ten capabilities require real behavior: a permission-only button or fake device does not count. CallKit alone uses an honest `INTERFACE_ONLY` mode without a fabricated call, participant, connected state, signaling, or media transport.

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
├── scripts/
├── design/
└── artifacts/
```

- `design/` contains the approved coherent design composition and its source provenance.
- `artifacts/<run-id>/` contains run state, phase handoffs, contracts, evidence, screenshots, usage metrics, and review results.
- `roles/` and `workflow/` define the factory stages independently of a specific agent harness.
- `adapters/` map those stages to Codex or another environment.

Re-running `init` updates managed workflow files while preserving the selected design and run artifacts.

## Design sources

- **The enriched GitHub style catalog** lists the available reference apps with normalized categories and summaries of their UI, UX, navigation, core flows, and illustration language. Trickster downloads documents only for the shortlist, then stores approved `provenance.json`, `composition.md`, `ui.md`, `ux.md`, and optional `illustrations.md` in `trickster/design/`.
- **Logoinspo App Icons** supplies references for the original app-icon direction.

The composition is not a collection of interchangeable skins. Each concern has one source owner, and the result must read as one product. Native controls may provide behavior, accessibility, focus, and keyboard integration, while their appearance follows the approved `ui.md`.

## Detailed stages

| Stage | Owner | Required result |
|---|---|---|
| 1. Product definition | product-researcher + master gate | Reconciled local-first scope and eleven product-specific capabilities |
| 2. Reference composition | design-planner + user gate | Approved UI, UX, and optional illustration sources synthesized locally |
| 3. Product contract | design-planner | Screens, launch/splash behavior, states, phase boundaries, assets, and verification plan |
| 4. Core implementation | implementation-owner + user gate | Real cold launch and main sections iterated to `CORE UI APPROVED` |
| 5. Full implementation | implementation-owner | Remaining scope, capability flows, and `LOCAL DATA READY` |
| 6. Product assets | visual-producer + implementation-owner | Approved assets generated after `LOCAL DATA READY` and integrated with the approved icon |
| 7. Hardening | implementation-owner | Final-UI failure, denial, unavailable, accessibility, persistence, and asset-regression states |
| Parallel. App icon | visual-producer + user gate | Latest-model concept approved before code integration |
| 8. Acceptance | acceptance-reviewer + master | Independently verified final build and eleven-row capability matrix |
| 9. Store screenshots | visual-producer + user gates | Approved storyboard and individually approved real-build frames |
| 10. Finalization | master + user gate | Explicit user confirmation and cleanup of temporary files |
| 11. Delivery | master | Reproducible evidence and final status |

See [the master process](workflow/master-prompt.md) and [orchestration contract](workflow/orchestration.md) for the exact execution rules.

## Core guarantees

- The style shortlist contains no more than three packages selected from catalog metadata; only their documents are downloaded.
- All eleven canonical iOS capabilities are contracted and implemented regardless of the prompt scope; none can be `N/A`.
- Every app is local-first: SwiftData owns durable domain data, files own binary payloads, local identity needs no account, and Release paths cannot activate runtime mocks.
- CallKit is the only capability allowed to use the explicit `INTERFACE_ONLY` mode.
- Every app includes a real system launch screen. It matches the first frame, has no artificial delay, and is verified as a cold-launch transition rather than a static mockup; an app-owned splash is optional and must have a product purpose.
- ASO may use reproducible demonstration data seeded into the real SwiftData and file stores; it may not replace the production repository with a mock.
- UI implementation stops until the user approves one coherent design composition.
- UI, UX, and optional illustration references may come from different shortlisted apps, but each concern has one source and arbitrary component-level mixing is prohibited.
- Native control behavior is preserved while appearance follows the approved visual language.
- Full implementation stops until the user approves the Core direction; every implementation phase supports a user-requested Simulator preview.
- Stable roles use fresh phase-scoped execution sessions and validated file handoffs instead of carrying unrestricted conversation history across gates.
- App-icon and store-screenshot production are feedback-gated before integration or continuation.
- An implementation agent cannot accept its own work.
- Build success alone is not acceptance.
- Unavailable tools or evidence are reported as `UNVERIFIED`, never invented.

## Requirements and boundaries

Trickster requires macOS, Xcode, an appropriate iOS Simulator runtime, a suitable physical iPhone and peripherals for mandatory hardware-dependent capability verification, Node.js 20 or later, and an agent environment capable of reading the installed instructions and using project tools. New reference research requires access to the raw files in the Trickster GitHub repository; an existing project continues to use its locally saved approved composition.

Signing for physical-device verification of the ten `REAL` capabilities is part of acceptance. Release archives and App Store submission remain separate release tasks. Trickster does not create a proprietary backend, server accounts, Sign in with Apple, CloudKit, or synchronization; a product that fundamentally requires them is outside the standard local-first boundary.

Global installation is intentionally rejected. Use `npx` as a temporary launcher inside the target project.

## Project documentation

- [Master process](workflow/master-prompt.md)
- [Role orchestration](workflow/orchestration.md)
- [Mandatory iOS capabilities](workflow/ios-capabilities.md)
- [Reference composition](workflow/style-reference.md)
- [Launch and splash experience](workflow/launch-screen.md)
- [Implementation](workflow/implementation.md)
- [Core implementation](workflow/implementation-core.md)
- [Full implementation](workflow/implementation-full.md)
- [Hardening](workflow/implementation-hardening.md)
- [Acceptance](workflow/acceptance.md)
- [End-to-end verification](workflow/verification.md)

External documentation:

- [Apple: Running your app in Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: Launching](https://developer.apple.com/design/human-interface-guidelines/launching)
- [Apple: Screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
