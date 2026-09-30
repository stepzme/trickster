# Trickster toolkit

This directory contains a pinned version of the portable iOS app development and acceptance process.

- `AGENTS.md` — entry point for the master.
- `HARNESS` — name of the active adapter.
- `roles/` — constrained contracts for phase-specific roles.
- `adapters/` — mappings from universal operations to a specific harness and the sequential fallback.
- `workflow/master-prompt.md` — order of individual stages.
- `workflow/orchestration.md` — roles, handoffs, file ownership, and Simulator ownership.
- `workflow/` — product definition with mandatory iOS capabilities, concern-level reference composition, staged implementation, app icon, post-Full assets, final Hardening, acceptance, store screenshots, finalization, and delivery.
- `templates/` — templates for run-ID artifacts.
- `design/` — approved `provenance.json`, `composition.md`, `ui.md`, `ux.md`, and optional `illustrations.md`.
- `artifacts/<run-id>/` — contract, evidence, final screenshots, and report.

Product definition reconciles the user's core scope with all eleven canonical capabilities from `workflow/ios-capabilities.md`; the user does not need to list them. Before UI work, the master loads the enriched GitHub catalog, selects up to three candidates by category, UI, UX, navigation, core-flow, and illustration metadata, and downloads documents only for those candidates. The user may assign one shortlisted app to UI, one to UX, and optionally one to illustrations. The design planner synthesizes those concern-level sources into one coherent local direction and records provenance. Implementation proceeds through Core and Full, followed by approved visual integration and final Hardening, with user-requested Simulator previews and a mandatory Core feedback loop. App-icon work may run in parallel but is integrated only after user approval; store screenshots are approved one frame at a time after app acceptance.
