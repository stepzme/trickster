# End-to-end process verification

## Goal

Verify the complete user path: installation of the compact workflow, local-first product definition and capability synthesis, enriched-catalog reference composition, contracted launch and optional splash experience, feedback-gated implementation through `LOCAL DATA READY`, parallel app-icon production, post-Full product assets, final launch, local-data and integrated-UI Hardening, independent acceptance, seeded real-store screenshots, and cleanup after final confirmation.

## 1. Preparation

Install the current npm package with `npx @sgx22/trickster init --harness <codex|generic>` in a separate clean test project. Ensure that the selected harness reads the Trickster instructions and that `trickster/styles/` is not installed.

A complete design composition may initially be absent from `trickster/design/`. Prepare Xcode, primary and compact Simulators, a physical iPhone and required peripherals where available, UI interaction, image viewing, and the current image-generation tool. In a new session, verify the adapter, delegated mode, or sequential fallback.

## 2. Test task

Use a product with a clear primary task but no preselected design composition or app icon. For a new project, provide access to raw files from the Trickster GitHub repository.

## 3. Required observations

Verify that the master and role agents:

1. read the active adapter and executed role contracts in delegated mode or an explicitly selected `sequential fallback`;
2. defined the core product scope, SwiftData/file/local-identity boundary, and all eleven canonical capability rows in the same product-definition stage;
3. reconciled the final scope without a proprietary backend, server accounts, Sign in with Apple, CloudKit, or synchronization, and blocked reference research while any capability row was missing, merged, renamed, reordered, marked `N/A`, or incomplete;
4. loaded the enriched `styles/catalog.json` from GitHub, selected no more than three candidates using normalized categories plus UI, UX, navigation, core-flow, and illustration summaries, and downloaded documents only for those candidates;
5. let the user map exactly one shortlisted source to UI, one to UX, and optionally one to illustrations;
6. synthesized those sources into one coherent direction, saved `provenance.json`, `composition.md`, `ui.md`, `ux.md`, and optional `illustrations.md`, and obtained `DESIGN COMPOSITION APPROVED`;
7. created a product contract with Core, Full, `LOCAL DATA READY`, and Hardening boundaries, a local data matrix, launch and optional splash behavior, and asset requirements;
8. gave the stable implementation-owner role sole ownership of app code, used fresh execution sessions and validated handoffs across Core, Full, Hardening, and fix batches, and showed a revision-labelled Simulator `PREVIEW` whenever the user requested it;
9. implemented the system launch screen and any contracted app-owned splash during Core, showed a clean cold launch through the first interactive frame, applied requested changes, and obtained `CORE UI APPROVED` before Full;
10. implemented the complete reconciled scope in Full and proved `LOCAL DATA READY`, including Release exclusion of runtime mocks, preview stores, debug endpoints, and fixture fallbacks;
11. created the app icon in parallel with implementation using the latest suitable available image-generation model, recorded the exact model ID and provenance, and integrated it only after `APP ICON APPROVED`;
12. after Full and `LOCAL DATA READY`, generated and integrated required product assets plus the applicable approved icon, with user approval for substantial generated assets;
13. completed cold-launch and splash regressions, local-storage errors, migrations, missing and orphaned files, deletion cleanup, offline primary flow, denial, restriction, cancellation, accessibility, persistence, compact-layout, locale, and final-asset regression states in Hardening;
14. had the acceptance reviewer independently build, install, and verify the final app, AC-12 modes, AC-14 local production path, and AC-15 launch experience without fixing code;
15. returned specific defects to the implementation owner and invalidated only dependent evidence and approvals;
16. after `APP ACCEPTED`, approved the store storyboard, seeded reproducible demonstration data into the real SwiftData and file stores, generated one real-build frame at a time, and obtained `STORE FRAME <n> APPROVED` before continuing;
17. obtained `STORE SET APPROVED` and explicit final confirmation before cleanup, then reported separate statuses for the app, capabilities, icon, product assets, and store screenshot set.
18. recorded available execution session IDs in `run-state.json`, validated every phase handoff, and produced `usage-report.json` when compatible Codex logs were available.

## 4. Negative checks

- Assign different shortlisted apps to UI and UX and verify that the design planner produces one documented composition rather than copying arbitrary components or maintaining multiple themes.
- Try to assign two UI sources and verify that the master requests one UI owner.
- Reject the shortlist and verify that a new shortlist is rebuilt from the catalog.
- Make GitHub unavailable in a new project and verify that UI work stops with the specific inaccessible link.
- Repeat with a complete approved `trickster/design/` and verify that the saved composition is used without the network.
- Request a Simulator preview in Core, Full, and Hardening; verify that the shown build matches the recorded revision and is labelled `PREVIEW`, not acceptance.
- Withhold Core approval and verify that Full does not begin.
- Replace the real cold-launch capture with a static launch mockup and verify that Core approval stops.
- Add a branding-only timer, localized text to the static system launch screen, or a launch logo absent from the first real frame and verify that AC-15 fails.
- Keep a mock repository reachable from Release and verify that `LOCAL DATA READY` and AC-14 fail.
- Replace durable product data with `UserDefaults` and verify that the local data gate fails.
- Withhold app-icon approval and verify that the icon is not integrated.
- Reject one store frame and verify that it is revised before the next frame is generated.
- Verify that store screenshots do not show features that do not exist.
- Withhold final user confirmation and verify that cleanup does not start.
- Make delegation unavailable and verify sequential fallback reporting.
- Verify that two agents do not write simultaneously to the Xcode project, asset catalog, `product.md`, or `review.md`.
- Replace one of the first ten capability features with a prompt-only button or fake result and verify that AC-12 fails.
- Make required physical hardware unavailable for a `REAL` capability and verify that the affected row and AC-12 remain `UNVERIFIED`, not `PASS` or `N/A`.
- Verify that CallKit passes only as the contracted `INTERFACE_ONLY` experience and fails if it fabricates a participant, connected state, duration, signaling, or media transport.
- Seed ASO content through a mock repository instead of the real local stores and verify that screenshot production stops.

## 5. Package verification

Inspect `npm pack --dry-run`: the package contains the product-definition, reference-composition, launch-screen, Core, Full, Hardening, app-icon, asset, acceptance, and store-screenshot workflows plus role contracts, adapters, and templates; it does not contain `styles/`.

Run `node maintainers/build-style-catalog.mjs --check`. Inspect `styles/catalog.json`: every package has non-empty base provenance, normalized categories, UI/UX/navigation summaries, named core flows, and illustration metadata consistent with the optional `illustrations.md`. The installer does not create `trickster/styles/` and preserves an existing `trickster/design/` on repeated runs.

After finalization, verify that the current run-ID temporary directory and recorded build artifacts have been deleted while the project, approved design composition, review and evidence, app icon, product assets, accepted-build screenshots, and store exports remain.

## Release gate

The installer reproducibly creates a compact toolkit without the style library; product definition fixes the local-first boundary and exact eleven canonical capabilities; the first ten capability modes are `REAL` and CallKit alone is `INTERFACE_ONLY`; the enriched catalog supports a metadata-driven shortlist limited to three apps; concern-level sources become one approved design composition; Core shows and approves the real cold-launch direction before Full; `LOCAL DATA READY` gates assets and final Hardening; acceptance independently verifies launch and the Release local path; ASO data is seeded into real local stores and frames are approved one at a time; cleanup follows explicit final confirmation.
