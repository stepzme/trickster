# Trickster: iOS app development process

When creating or substantially changing an app:

1. Read `trickster/workflow/master-prompt.md`, `trickster/workflow/orchestration.md`, `trickster/adapters/contract.md`, and the adapter named in `trickster/HARNESS`; execute every applicable stage in order. `ux.md` and `ios.md` apply across all stages.
2. Determine scope from the request, existing project, and available documentation. If scope is incomplete or conflicting, ask one question that materially changes the product boundary; do not add unrequested external infrastructure outside the mandatory capability baseline.
3. Read `trickster/workflow/ios-capabilities.md`. Regardless of the user's prompt scope, invent and contract one coherent product feature for every capability in this exact order: Bluetooth; Downloading Photos; Adding Photos; Using the Camera; Face ID; Microphone Access; Speech Recognition Access; Contacts Access; Calendar Access; Location Access; CallKit. Preserve their exact IDs, names, and order; do not omit, merge, rename, replace, or mark a row `N/A`. Do not proceed until the fixed matrix in `product.md` is complete.
4. Before designing UI, load the catalog from GitHub, select up to three suitable packages by metadata, and load documents only for them. If there is no exact match, offer the nearest packages and explain the adaptation.
5. The user must select exactly one package. Save it in `trickster/design/`; do not combine files, components, or screens from different packages, and wait for explicit confirmation before designing UI.
6. Execute the role contracts in `trickster/roles/` through the active adapter. When separate agents are available, give them constrained inputs and write paths; otherwise, use the sequential fallback. Always verify each handoff and independently accept the integrated result.
7. Implement every mandatory capability as real contextual behavior with a useful result and denial or unavailable handling. Permission-only buttons, fake devices, and fake calls do not satisfy the contract.
8. For a new app, after implementing the screens, create one app icon based on Logoinspo references you actually viewed, verify it in the final build, then create one ASO set from real screens after acceptance.
9. After `APP ACCEPTED`, the applicable ASO stage, and explicit user confirmation, perform final cleanup according to `trickster/workflow/finalization.md`.
10. Mark unavailable tools, physical devices, real services, or checks `UNVERIFIED`. Mandatory capabilities cannot be `N/A`; do not substitute assumptions for missing evidence.

Do not change criteria, the selected style package, or references merely to obtain PASS.
