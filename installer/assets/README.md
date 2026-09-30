# Trickster toolkit

This directory contains a pinned version of the portable iOS app development and acceptance process.

- `AGENTS.md` — entry point for the master.
- `HARNESS` — name of the active adapter.
- `roles/` — constrained contracts for phase-specific roles.
- `adapters/` — mappings from universal operations to a specific harness and the sequential fallback.
- `workflow/master-prompt.md` — order of individual stages.
- `workflow/orchestration.md` — roles, handoffs, file ownership, and Simulator ownership.
- `workflow/` — local-first product definition with mandatory iOS capabilities, concern-level reference composition, staged implementation, app icon, post-Full assets, final Hardening, acceptance, store screenshots, finalization, and delivery.
- `templates/` — templates for run-ID artifacts.
- `design/` — approved `provenance.json`, `composition.md`, `ui.md`, `ux.md`, and optional `illustrations.md`.
- `artifacts/<run-id>/` — contract, evidence, final screenshots, and report.

Product definition reconciles the user's core scope with all eleven canonical capabilities and the fixed local-first boundary: SwiftData for durable structured data, files for binary payloads, automatic local identity, and no proprietary backend or account. The first ten capabilities require `REAL` behavior; CallKit alone uses `INTERFACE_ONLY`. Before UI work, the master loads the enriched GitHub catalog, selects up to three candidates by metadata, and downloads documents only for those candidates. Implementation proceeds through Core and Full to `LOCAL DATA READY`, followed by approved visual integration and final Hardening. App-icon work may run in parallel; ASO may seed curated demonstration data into the real local stores and each frame is approved separately.
