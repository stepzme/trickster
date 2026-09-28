# Stage 7. App acceptance

Before implementation, the master records the applicability of criteria and the scenarios in `product.md`. The acceptance reviewer independently gathers evidence and prepares a draft review, but the master makes the final decision after personally verifying key scenarios and images. Criteria must not be weakened to justify the finished implementation. Verification is performed on the final version after all code changes are complete.

## Individual check statuses

- `PASS` — the check was performed, the result meets the expectation, and evidence is available.
- `FAIL` — a criterion violation was observed.
- `UNVERIFIED` — required data, tools, or execution are missing.
- `N/A` — not applicable, with a verifiable reason. Required criteria cannot be N/A.

## App criteria

| ID | Criterion | Evidence | Applicability |
|---|---|---|---|
| AC-01 | The final code builds with Xcode tooling | Command, exit code, complete log, revision | Required |
| AC-02 | That exact build installs and launches in Simulator | Device/OS, bundle ID, commands, and screenshot of the running app | Required |
| AC-03 | Every required feature and scenario in `product.md` is implemented and produces the expected result | Scope matrix, actions, observed result, and data | Required |
| AC-04 | Screens and controls consistently express the confirmed `ui.md`, `ux.md`, and applicable `illustrations.md`; native implementation is acceptable, but the default SwiftUI appearance is acceptable only when it matches the reference | Current screenshots, local package, and analysis of button, field, card, and navigation styling | Required |
| AC-05 | Navigation and interactions consistently use applicable rules from the selected `ux.md`; deviations are justified by the product task | Local package, `product.md`, reproduced scenarios, and observations | Required |
| AC-06 | Layout and text preserve functionality on target sizes | Primary and compact iPhone, enlarged text | Required |
| AC-07 | Applicable UX-01 through UX-12 have been performed | Per-screen rule matrix and actual observations | Required |
| AC-08 | Persisted data survives a restart | Create/change data → restart → verify values | If the product stores data |
| AC-09 | Errors and constraints do not break a required scenario | Contract-defined network/input/permission errors tested | If applicable |
| AC-10 | Promised locales, themes, orientations, and iPad support work | Verification of the matrix declared in `product.md` | If declared |
| AC-11 | Sources and evidence correspond to the specific run and final version | `trickster/design/source.json`, revision, timestamps, and artifact manifest | Required |

A screenshot demonstrates appearance and state; it does not prove data persistence or correct transitions. Behavior requires actions and verification of the result. Generated mockups do not replace Simulator screenshots.

## Fix cycles

For each defect, record the criterion, screen/state, observed and expected behavior, severity, and artifact. By default, the process allows the initial implementation and up to three fix cycles. After a fix, retest affected scenarios and the primary path.

When the limit is exhausted, return `NEEDS_WORK` with the remaining issues. Do not start a new run ID merely to reset the limit.

## App decision

- `ACCEPTED` — all required and applicable AC-01 through AC-11 are PASS; all others are justifiably N/A.
- `NEEDS_WORK` — at least one item is FAIL.
- `UNVERIFIED` — no FAIL was found, but a required item was not verified.

A visual PASS is the reviewer's judgment against the specified sources; it does not prove the design's market success.

## Store package

The app icon is created before this acceptance stage and is included in the build under review. After `ACCEPTED`, execute `aso-screenshots.md`, then assess the complete Store package.

| ID | Criterion | Applicability |
|---|---|---|
| SP-01 | The app icon is based on Logoinspo references that were actually viewed, is original, is installed, and is verified in Simulator | Required for a new app |
| SP-02 | One app-icon concept was created, with no parallel alternatives | Required for a new app |
| SP-03 | One ASO set uses real screens from the accepted build and unifies the confirmed style, UI, and app icon | Required for a new app |
| SP-04 | Every ASO export corresponds to an implemented feature and current technical requirements | Required for a new app |

Assess the Store package separately as `ACCEPTED`, `NEEDS_WORK`, `UNVERIFIED`, or `N/A`. Signing, a release archive, physical devices, and publication belong to a separate release task.
