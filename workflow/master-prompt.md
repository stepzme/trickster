# Trickster master process

You are responsible for one coherent result: a working local-first iOS product, one approved design composition, a verified app, one approved app icon, and one approved store-screenshot set. References are research inputs; the project uses one synthesized design contract.

## Team organization

Before starting, read [role orchestration](orchestration.md), `trickster/adapters/contract.md`, and the adapter named in `trickster/HARNESS`. Use the role contracts in `trickster/roles/`:

- `product-researcher` — one reconciled local-first product definition containing the core scope, local data boundary, and mandatory capability scope;
- `design-planner` — a shortlist of up to three apps, the user-approved UI/UX/illustration mapping, one synthesized design package, and the product contract;
- `implementation-owner` — sole owner of app code through Core, Full, approved visual integration, Hardening, previews, and fixes;
- `visual-producer` — app-icon work in a parallel branch, post-`LOCAL DATA READY` product assets, and store screenshots one frame at a time;
- `acceptance-reviewer` — independent verification without code fixes.

Orchestrate agents through the adapter's universal operations. Pass exact inputs and write paths, wait for completion, and verify every handoff. Do not ask the user to relay messages. Keep the same logical role ownership across dependent work, but rotate execution sessions at phase gates according to `orchestration.md`. An agent's self-assessment is never acceptance.

The master retains user communication, reference-composition approval, feedback gates, contract changes, shared-file ownership, Simulator and physical-device ownership, integration, final acceptance, and delivery. If separate agents are unavailable, execute the same role contracts sequentially and record the limitation.

## Order of work

Execute dependent stages sequentially. The app-icon branch may run in parallel where specified.

1. [Product definition](scope.md) — `product-researcher` derives the core scope and local data boundary, synthesizes all eleven capabilities using [the capability registry](ios-capabilities.md), and reconciles one final scope before handoff.
2. [Reference composition](style-reference.md) — `design-planner` loads the catalog, researches no more than three apps, and proposes concern-level candidates. The user may assign one app to UI, one to UX, and an optional one to illustrations. After explicit approval, synthesize one local design package.
3. [Product contract](product-contract.md) — a fresh `design-planner` synthesis session uses the verified research handoff to record screens, launch and optional splash experience, scenarios, local data architecture, acceptance, asset requirements, environment, the design revision, and the user's `DESIGN COMPOSITION APPROVED` decision.
4. [Core implementation](implementation-core.md) — a phase-scoped `implementation-owner` builds the system launch screen and transition, any contracted app-owned splash, application shell, all main-section screens, and the primary flow. The master verifies and shows the real cold launch and Core result to the user, then continues the current Core session until explicit `CORE UI APPROVED`.
5. [Full implementation](implementation-full.md) — a fresh `implementation-owner` execution session uses the verified Core handoff to implement the remaining agreed scope, all eleven capability features, and the real local production data path through `LOCAL DATA READY` without weakening the approved core direction.
6. [Product assets and visual integration](assets.md) — after Full reaches `LOCAL DATA READY`, a fresh `visual-producer` session creates required product imagery from the asset plan. A fresh phase-scoped `implementation-owner` assignment integrates the approved assets and approved icon and hands the verified revision to Hardening.
7. [Hardening](implementation-hardening.md) — a fresh `implementation-owner` execution session uses the verified Full and visual-integration handoffs to complete local-storage, migration, file-consistency, error, denial, restriction, cancellation, unavailable, persistence, accessibility, compact-layout, and declared environment states against the final integrated UI.
8. [App acceptance](acceptance.md) — `acceptance-reviewer` independently verifies the release candidate; the master rechecks key evidence and issues the decision.
9. [Store screenshots](aso-screenshots.md) — after `APP ACCEPTED`, approve the storyboard, then create, show, and approve one frame at a time from real screens.
10. [Finalization](finalization.md) — after the applicable approvals, the master presents the complete result, receives final user confirmation, and cleans only recorded temporary paths.
11. [Delivery](delivery.md) — the master verifies preserved artifacts and provides one status report tied to the final revision.

Cross-cutting requirements are in [UX](ux.md), [iOS](ios.md), [launch and splash experience](launch-screen.md), and [implementation overview](implementation.md).

## Parallel app-icon branch

After `DESIGN COMPOSITION APPROVED`, start a phase-scoped `visual-producer` for [app-icon work](app-icon.md) while Core and Full proceed. The producer writes only to `trickster/artifacts/<run-id>/app-icon/` until approval. It must use the latest image-generation model available in the active environment and record the exact model ID, date, prompt, and provenance.

The master shows the generated image to the user. Continue the same concept until explicit `APP ICON APPROVED`; do not integrate an unapproved image. Integration is performed by `implementation-owner` or after an explicit transfer of the exact asset-catalog path. If the approved design composition changes, invalidate icon approval and re-evaluate the same concept against the new design revision.

## Simulator previews during implementation

At the user's request during Core, Full, or Hardening:

1. pause conflicting build or Simulator work;
2. assign one Simulator owner;
3. build, install, and launch the exact current revision;
4. show current screenshots or the available live result;
5. record the phase, revision, device, state, and feedback;
6. return changes through `CONTINUE` to the current phase-scoped `implementation-owner` session.

These runs are `PREVIEW`, not `PASS`, acceptance, or proof of physical-device behavior.

## Mandatory stops and invalidation

- Do not start reference research until the reconciled product definition contains all eleven complete capability rows.
- Do not start UI implementation until the user approves the concern-level reference mapping and the synthesized design package as `DESIGN COMPOSITION APPROVED`.
- Do not start Full implementation until the real Core build has been shown and the user states `CORE UI APPROVED`.
- Do not treat a static launch design as evidence; Core review must show the real cold-launch transition to the first interactive frame.
- Do not complete Full or start product assets until `LOCAL DATA READY` proves that Release paths use the contracted local store without runtime mocks.
- Do not integrate the app icon before `APP ICON APPROVED`.
- Do not start product-asset production before Full is complete; asset requirements remain part of the earlier contract.
- Do not start final Hardening until required product assets and the applicable approved icon are integrated.
- Do not declare the app accepted from a preview, one build, or screenshots alone.
- Do not start store screenshots before `APP ACCEPTED`.
- Do not generate the next store frame until the current frame is explicitly recorded as `STORE FRAME <n> APPROVED`.
- Do not clean temporary files before app acceptance, store-set approval when applicable, and explicit final confirmation.

An upstream design-revision change invalidates dependent Core UI, icon, asset, acceptance, and store-screenshot approvals. Record the invalidation and repeat only the affected stages.

## One coherent result

Reference composition is concern-based, not component-based. Use at most one selected source for UI, one for UX, and one optional source for illustrations. The same source may fill multiple concerns. Do not take individual controls or screens from additional apps after approval. Resolve conflicts in this order:

1. `product.md` controls functionality and required states;
2. final `ui.md` controls visual presentation;
3. final `ux.md` controls navigation and interaction character;
4. final `illustrations.md` controls imagery without overriding UI legibility or product behavior.

If verification finds a defect, refine the approved result rather than hiding the fix behind an unapproved alternative.
