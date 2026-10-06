---
name: trickster-ios
description: Create or substantially change a native iOS app through Trickster's Research, Planning, Design, Dev, Polish, and Publish workflow. Use for end-to-end product work, not isolated bug fixes, code review, or non-iOS apps.
---

# Trickster iOS

Use the project-local Trickster snapshot as the operating contract.

## Bootstrap

1. Work from an existing Git, Xcode, Swift Package, or XcodeGen project root. For a new empty directory, initialize Git first.
2. If `trickster/VERSION` is absent, run the bundled `scripts/init-project.mjs` with the project root as `--target`.
3. If Trickster is already installed, do not update its workflow silently. Run `scripts/doctor.mjs`, use the committed project snapshot, and update it only when the user asks.
4. Read `trickster/workflow/master-prompt.md`, `trickster/workflow/orchestration.md`, and the adapter named in `trickster/HARNESS` completely before app work.

Resolve bundled script paths from this skill directory and run them with Node.js.

## Workflow

Follow the installed six-stage process and its ownership rules:

`Research → Planning → Design → Dev → Polish → Publish`

Keep every approval gate explicit. Do not start app implementation before approved Research and Planning. Do not treat source documents, evidence frames, or a successful build as design approval: show the running Simulator MVP. Implement Full Scope in separately approved large blocks, complete independent Polish review, and create publication materials only afterward.

Use the exact capability contract in `trickster/roles/product-researcher.md`. Preserve approved artifacts and selected design sources. Do not invent unavailable checks or download a missing iOS runtime or device without user approval.

The bundled `references/` directory is the source used to initialize a project. Once installed, prefer the project-local files so the repository records the workflow version used for the app.
