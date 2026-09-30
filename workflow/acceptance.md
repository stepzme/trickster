# Stage 8. App acceptance

Acceptance applies to one frozen release candidate after Hardening, approved icon integration, and required product-asset integration. Phase previews and role self-assessments are inputs, never acceptance.

The reviewer independently gathers evidence and prepares a draft review. The master makes the final decision after reproducing key scenarios and inspecting current images. Criteria cannot be weakened to justify the implementation.

## Individual statuses

- `PASS` — performed, meets the expectation, and has evidence.
- `FAIL` — a criterion violation was observed.
- `UNVERIFIED` — required data, hardware, service, tool, or execution is missing.
- `N/A` — not applicable with a verifiable reason; required criteria cannot be N/A.

## Preconditions

- `DESIGN COMPOSITION APPROVED`, `CORE UI APPROVED`, and applicable `APP ICON APPROVED` are tied to current revisions.
- Core, Full, and Hardening handoffs are complete.
- Approved product assets and icon are present in the build.
- The code revision and working-copy state are recorded and no role is still changing the app.

## App criteria

| ID | Criterion | Evidence | Applicability |
|---|---|---|---|
| AC-01 | Final code builds with Xcode tooling | Command, exit code, complete log, revision | Required |
| AC-02 | That exact build installs and launches in Simulator | Device/OS, bundle ID, commands, running screenshot | Required |
| AC-03 | Every required feature and scenario produces the expected result | Scope matrix, actions, observed result, data | Required |
| AC-04 | Screens consistently express final `ui.md`, `ux.md`, applicable `illustrations.md`, and `composition.md` | Current screenshots and rule-by-rule observations | Required |
| AC-05 | Navigation and interaction follow the approved UX source and recorded composition resolutions | Reproduced scenarios and observations | Required |
| AC-06 | Layout and text preserve function on primary and compact target sizes | Current screenshots and interaction evidence | Required |
| AC-07 | Applicable UX-01 through UX-12 were performed | Per-rule matrix and observations | Required |
| AC-08 | Persisted data survives restart | Create or change data, restart, verify | If the product stores data |
| AC-09 | Errors and constraints do not break a required scenario | Contract-defined error, permission, and retry tests | If applicable |
| AC-10 | Declared locales, themes, orientations, and iPad support work | Declared environment matrix | If declared |
| AC-11 | Sources, approvals, and evidence correspond to the exact final revisions | Provenance, design revision, app revision, timestamps, manifests | Required |
| AC-12 | All eleven canonical capabilities have real features, correct mechanisms, useful results, denial or unavailable handling, and reproduced evidence | Capability matrix, entitlements, actions, observed behavior, result data, Simulator or physical-device evidence | Required; never N/A |
| AC-13 | Implementation feedback gates and visual approvals are authentic and current | Core preview, user decisions, icon and asset feedback records | Required |

A screenshot proves appearance and state, not persistence or transitions. Generated mockups do not replace Simulator or physical-device evidence.

## Fix cycles

For every defect, record criterion, screen or state, observed result, expected result, severity, and evidence. By default allow the initial implementation and up to three acceptance fix cycles. Return defects through `CONTINUE(implementation_owner)` and retest affected scenarios and the primary path.

Do not start a new run ID to reset the limit. When exhausted, return `NEEDS_WORK`.

## Decision

- `ACCEPTED` — all required and applicable criteria PASS; other criteria are justifiably N/A.
- `NEEDS_WORK` — at least one criterion FAILS.
- `UNVERIFIED` — no failure was found, but a required criterion lacks evidence.

Physical-device verification required by AC-12 is acceptance work, not an optional release task.

## Store package boundary

The accepted build includes the approved app icon. After `APP ACCEPTED`, execute `aso-screenshots.md` with storyboard and per-frame feedback gates. Store screenshots, signing, release archives, App Store submission, and publication have separate statuses; app acceptance does not imply any of them.
