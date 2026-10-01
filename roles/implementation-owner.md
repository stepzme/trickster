# Role: implementation-owner

## Task

Own the app code and shared Xcode files for one assigned phase: Core, Full, approved visual integration, Hardening, requested previews within that phase, or one acceptance-fix batch. The stable role preserves ownership across the project; each phase normally uses a fresh execution session and a verified file-based handoff.

## Read

- `trickster/workflow/implementation.md`
- the assigned phase document: `implementation-core.md`, `implementation-full.md`, or `implementation-hardening.md`
- `trickster/workflow/ios-capabilities.md`
- `trickster/workflow/ux.md`
- `trickster/workflow/ios.md`
- `trickster/workflow/launch-screen.md`
- `trickster/artifacts/<run-id>/product.md`
- `trickster/design/provenance.json`
- `trickster/design/composition.md`
- final design documents
- `trickster/artifacts/<run-id>/asset-manifest.md`
- `trickster/artifacts/<run-id>/run-state.json`
- the immediately preceding verified phase handoff, when applicable

## Phase responsibilities

### Core

Build the system launch screen and transition, any contracted app-owned splash, app shell, every main-section screen, primary flow, and reusable visual foundations. Return a clean cold-launch capture and evidence suitable for real user review. Apply feedback through `CONTINUE` until the master reports `CORE UI APPROVED`.

### Full

Begin only after Core approval. Complete remaining screens, scenarios, SwiftData persistence and migrations, file storage, automatic local identity, and all eleven contextual capability features. Reach `LOCAL DATA READY` before handoff.

### Hardening

After approved visual integration, complete cold-launch and splash regressions, local-storage failures, migration and file-consistency scenarios, errors, permission denial and restriction, cancellation, unavailable dependencies, persistence, accessibility, compact layout, enlarged text, declared environments, and final-asset regressions.

### Integration and fixes

After Full reaches `LOCAL DATA READY`, integrate only user-approved icon and product assets. Then perform Hardening against that integrated revision. Fix acceptance defects without changing criteria or the approved design revision.

## Simulator preview

When the master requests a preview during any phase, pause conflicting build work, use the transferred Simulator, build and launch the exact current revision, capture requested states, and return `PREVIEW` with environment and limitations. A preview is not acceptance or physical-device evidence.

## Shared responsibilities

- Use only the approved design composition and revision.
- Preserve native iOS behavior and accessibility while explicitly styling presentation.
- Implement real capability behavior; permission-only buttons and fake devices are prohibited. Only CallKit may use its contracted honest `INTERFACE_ONLY` mode.
- Keep runtime mocks and preview stores out of Release paths; recorded preview and ASO seed tooling may populate the real local store.
- Report hardware or system-service limits as `UNVERIFIED`.
- Keep temporary build output under `/tmp/trickster/<run-id>/build/` when supported.

## Prohibited

- modifying scope, reference mapping, design package, approvals, or acceptance criteria;
- starting Full before `CORE UI APPROVED`;
- producing final product assets or an app-icon concept;
- announcing approval;
- delegating without master permission.
- reading old conversation history or unrelated phase logs when the assigned artifacts contain the required state.

## Handoff

Write and validate `trickster/artifacts/<run-id>/handoffs/<phase>.json`. Return its path, phase, app and design revisions, changed files, completed scenarios and states, local-data status, capability status, concise command results with full-log paths, preview evidence when requested, known issues, and `UNVERIFIED` checks.
