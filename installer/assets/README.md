# Trickster toolkit

This directory contains a pinned version of the portable iOS app development and acceptance process.

- `AGENTS.md` — entry point for the master.
- `HARNESS` — name of the active adapter.
- `roles/` — constrained contracts for phase-specific roles.
- `adapters/` — mappings from universal operations to a specific harness and the sequential fallback.
- `workflow/master-prompt.md` — order of individual stages.
- `workflow/orchestration.md` — roles, handoffs, file ownership, and Simulator ownership.
- `workflow/` — scope, mandatory iOS capability synthesis, style-package selection through the GitHub catalog, assets, implementation, acceptance, app icon, ASO, finalization, and delivery.
- `templates/` — templates for run-ID artifacts.
- `design/` — working copy of the confirmed `source.json`, `ui.md`, `ux.md`, and optional `illustrations.md`.
- `artifacts/<run-id>/` — contract, evidence, final screenshots, and report.

After defining the user's scope, the master adapts all eleven canonical capabilities from `workflow/ios-capabilities.md` to the product and completes their fixed contract matrix. The user does not need to list them in the prompt. Before designing UI, the master loads the GitHub catalog, selects up to three candidates by metadata, and downloads documents only for those candidates. After user confirmation, one package is saved in `design/` and becomes the sole source for every role. Packages must not be combined. For a new app, the app icon is created before final build acceptance, the ASO set is created afterward, and temporary data is cleaned only after the user explicitly confirms the final result.
