# Trickster toolkit

This directory contains the project-local iOS workflow.

- `AGENTS.md` — entry point for the master;
- `HARNESS` — active harness adapter;
- `roles/` — Product Researcher, Designer, Implementation Owner, and Acceptance Reviewer;
- `workflow/` — Research, Planning, Design, Dev, Publish, and cross-cutting iOS rules;
- `templates/` — Research, Planning, and final-review artifacts;
- `design/` — unchanged approved `ui.md`, `ux.md`, and optional `illustrations.md` source documents;
- `artifacts/<run-id>/` — approved stage artifacts and final review.

Research defines the complete product and all eleven capabilities. Planning selects the design MVP and Full Scope blocks. Designer chooses references and implements the MVP until the running Simulator build is approved. Implementation Owner extends that exact build one approved block at a time. Acceptance Reviewer independently verifies the completed app during Publish.

There is no separate composition layer, Core/Full/Hardening pipeline, run-state schema, token report, or Visual Producer role.
