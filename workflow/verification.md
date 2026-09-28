# End-to-end process verification

## Goal

Verify the complete user path: installation of the compact workflow, synthesis of all eleven mandatory iOS capabilities, GitHub-catalog selection, persistence of exactly one local package, portable role orchestration, implementation, independent acceptance, app icon, ASO screenshots, and final cleanup after user confirmation.

## 1. Preparation

Install the current npm package with `npx @sgx22/trickster init --harness <codex|generic>` in a separate clean test project. Ensure that the selected harness reads the Trickster instructions and that `trickster/styles/` is not installed.

Before the task, a working package may be absent from `trickster/design/`: the shortlist and selection follow mandatory capability synthesis. Prepare Xcode, primary and compact Simulators, a physical iPhone and required peripherals where available, UI interaction, and image viewing. In a new session, verify the adapter, delegated mode, or sequential fallback.

## 2. Test task

Use a product with a sufficiently clear primary task but no preselected design package or app icon. For a new project, provide access to raw files from the Trickster GitHub repository.

## 3. Required observations

Verify that the master and role agents:

1. read the active adapter and executed role contracts in delegated mode or an explicitly selected `sequential fallback`;
2. defined the user's scope without adding infrastructure outside the fixed capability baseline;
3. retained all eleven canonical capability IDs, names, and order, and invented one coherent product feature with a real result for every row;
4. stopped before style selection when any capability row was missing, merged, renamed, marked `N/A`, or incomplete;
5. loaded `styles/catalog.json` from GitHub, selected no more than three candidates by metadata, and downloaded documents only for those candidates;
6. stopped before the user selected exactly one `appId`;
7. after selection, saved only one complete package in `trickster/design/` and completed the product contract;
8. made all subsequent roles read the style only from `trickster/design/`, not GitHub or run artifacts;
9. gave the implementation owner sole ownership of app code and implemented one design without mixing packages;
10. implemented real contextual access flows, results, purpose strings, denial behavior, and required dependencies for every capability instead of prompt-only or fake features;
11. had the visual producer inspect Logoinspo icons and create one concept;
12. had the acceptance reviewer independently build, install, and verify the final app and AC-12 without fixing code;
13. had the master return specific defects to the implementation owner and independently verify the final handoff;
14. after ACCEPTED, had the visual producer create one ASO set from final-build screens;
15. had the master obtain explicit user confirmation only after APP ACCEPTED and ASO, then clean temporary downloads and build artifacts;
16. had the master report separate statuses for the app, all eleven capabilities, app icon, and ASO.

## 4. Negative checks

- Select two packages and verify that the master refuses to combine them and asks to keep one.
- Reject the entire shortlist and verify that a new shortlist is rebuilt from the catalog.
- Make GitHub unavailable in a new project and verify that UI work stops with the specific inaccessible link.
- Repeat the same scenario in a project with a complete `trickster/design/` and verify that the saved package is used without the network.
- Verify that repeated `init` does not delete the selected working package or artifacts.
- Verify that ASO does not show features that do not exist.
- Withhold final user confirmation and verify that cleanup does not start.
- Make delegation unavailable and verify that the master performs roles sequentially and marks the mode `sequential fallback`.
- Verify that two agents do not write simultaneously to the Xcode project, asset catalog, `product.md`, or `review.md`.
- Remove, reorder, rename, merge, or mark `N/A` one canonical capability and verify that style selection and implementation remain blocked.
- Replace one capability feature with a prompt-only button or fake result and verify that AC-12 fails.
- Make required physical hardware or a real calling service unavailable and verify that the affected capability and AC-12 remain `UNVERIFIED`, not `PASS` or `N/A`.

## 5. Package verification

Inspect `npm pack --dry-run`: the installation package contains `workflow/ios-capabilities.md`, other workflow documents, role contracts, adapters, and templates, but does not contain `styles/`.

Inspect `styles/catalog.json` in the repository: each entry contains non-empty `appId`, `name`, `url`, and `category`, and the corresponding `ui.md` and `ux.md` exist. The installer does not create `trickster/styles/` and preserves an existing `trickster/design/` on repeated runs.

After finalization, verify that the current run-ID temporary directory and recorded build artifacts have been deleted while the project, `trickster/design/`, review/evidence, app icon, and ASO remain.

## Release gate

The installer reproducibly creates a compact toolkit without the style library; every run synthesizes the exact eleven canonical capabilities before style selection; a new run sees the current GitHub catalog; the shortlist is limited to three candidates; the user selects exactly one package; every role after selection uses its local copy; packages are not mixed; scope is not made accidentally minimal; the reviewer independently verifies the build and AC-12 when the required environment permits; the app icon and ASO are based on real sources; cleanup occurs only after explicit user confirmation.
