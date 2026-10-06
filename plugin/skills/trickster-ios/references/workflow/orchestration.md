# Role orchestration

## Simple operating model

The master starts a role with its role contract, the current stage document, the approved upstream artifact, and the exact paths it may change. The stage artifact itself is the handoff; there is no separate handoff schema, run-state file, token report, provenance report, or composition report.

Use the adapter named in `trickster/HARNESS`. When delegation exists, use one agent per active role. Continue the same role for corrections inside its current stage. Start the next role only when its stated dependency is approved.

## Ownership

| Stage | Owner | Writes |
|---|---|---|
| Research | Product Researcher | `trickster/artifacts/<run-id>/research.md` |
| Planning | Product Researcher | `trickster/artifacts/<run-id>/plan.md` |
| Design | Designer | `trickster/design/`, app code for the MVP, and design assets |
| Dev | Implementation Owner | app code and Xcode project after design approval |
| Polish | Acceptance Reviewer | review evidence only; never app code |
| Publish | Designer | final app icon, store screenshots, export files, and `trickster/artifacts/<run-id>/publish.md` |

The master records user approvals in the corresponding artifact. Roles do not ask the user directly and do not approve their own work.

Only one role may write app code or operate a Simulator at a time. Designer owns the Xcode project through design approval, then transfers it to the Implementation Owner. Polish transfers final-material ownership back to Designer only after the app is approved.

## Parallel work

After Research approval:

- Product Researcher may perform Planning;
- Designer may research references.

These tasks do not write the same files. Designer must wait for the approved plan before implementing the MVP. All other work is sequential unless two tasks have explicitly separate files and no shared device.

## Role assignment

Each assignment contains only:

- role and stage;
- goal;
- approved input paths;
- allowed write paths;
- completion conditions;
- current app revision when code already exists.

Do not rotate agents merely to save context. Do not create administrative artifacts to summarize other administrative artifacts. The master reads the actual stage output and the running app.

## Corrections

User feedback stays with the role that owns the open stage. Polish defects return to the Implementation Owner as one concrete batch and then go back to the Acceptance Reviewer. A design defect returns to Designer even if discovered later. If Publish changes the app bundle, rerun the affected Polish checks before final confirmation.
