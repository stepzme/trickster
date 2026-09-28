# Trickster: iOS app development process

When creating or substantially changing an app:

1. Read `trickster/workflow/master-prompt.md`, `trickster/workflow/orchestration.md`, `trickster/adapters/contract.md`, and the adapter named in `trickster/HARNESS`; execute every applicable stage in order. `ux.md` and `ios.md` apply across all stages.
2. Determine scope from the request, existing project, and available documentation. If scope is incomplete or conflicting, ask one question that materially changes the product boundary; do not add unrequested external infrastructure.
3. Before designing UI, load the catalog from GitHub, select up to three suitable packages by metadata, and load documents only for them. If there is no exact match, offer the nearest packages and explain the adaptation.
4. The user must select exactly one package. Save it in `trickster/design/`; do not combine files, components, or screens from different packages, and wait for explicit confirmation before designing UI.
5. Execute the role contracts in `trickster/roles/` through the active adapter. When separate agents are available, give them constrained inputs and write paths; otherwise, use the sequential fallback. Always verify each handoff and independently accept the integrated result.
6. For a new app, after implementing the screens, create one app icon based on Logoinspo references you actually viewed, verify it in the final build, then create one ASO set from real screens after acceptance.
7. After `APP ACCEPTED`, the applicable ASO stage, and explicit user confirmation, perform final cleanup according to `trickster/workflow/finalization.md`.
8. Mark unavailable tools or checks `UNVERIFIED`. Do not substitute assumptions for missing evidence.

Do not change criteria, the selected style package, or references merely to obtain PASS.
