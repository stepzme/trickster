# Trickster process

Trickster builds one native iOS app through five stages. The master speaks with the user, starts the roles, checks their work, records explicit approvals, and never treats a role's claim as user approval.

## Participants

- `master` — owns the conversation, stage order, approvals, and final integration;
- `product-researcher` — owns Research and Planning;
- `designer` — owns reference selection, the design implementation, imagery, the app icon, and store screenshots;
- `implementation-owner` — expands the approved design build to the complete planned product;
- `acceptance-reviewer` — independently checks the final app and cleans recorded development output.

If separate agents are unavailable, the master performs the same roles sequentially. Do not create substitute roles or additional approval layers.

## Stages

1. [Research](research.md) — describe the complete product, including all eleven iOS capabilities, and obtain explicit user approval.
2. [Planning](planning.md) — split the approved product into a design MVP and ordered Full Scope blocks; obtain explicit user approval. Planning may run in parallel with reference research after Research is approved.
3. [Design](design.md) — select references, obtain explicit approval of that selection, then let the same Designer implement the MVP in Xcode and show the running app in Simulator until the user explicitly approves the design.
4. [Dev](dev.md) — the Implementation Owner starts from the approved MVP build and implements Full Scope one large block at a time. Show and explicitly approve every block before continuing.
5. [Publish](publish.md) — the Acceptance Reviewer verifies the approvals, final build, scenarios, and capability contract; the master presents the result and only then removes recorded temporary output.

Research approval is required before Planning or Design. Design may research references while Planning runs, but MVP implementation waits for the approved plan. Dev waits for the approved running design.

## Approval rule

Approval is a clear affirmative user response tied to the artifact or running revision being shown. No exact phrase is required. Record the user's actual response, the artifact path or app revision, and the date. Silence, a role handoff, a successful build, or the master's interpretation is not approval.

If an approved upstream artifact changes materially, repeat only the affected approval and downstream work.

## Design rule

The selected `ui.md`, `ux.md`, and optional `illustrations.md` remain source documents. Do not synthesize a new generalized project `ui.md`, `composition.md`, or provenance narrative. Copy the approved source documents unchanged into `trickster/design/` and record source IDs in the Design stage artifact.

`ui.md` controls appearance. `ux.md` controls navigation, interaction, and state transitions; visual wording in a UX source has no authority. `illustrations.md` controls imagery. Product behavior comes from the approved Research and Planning artifacts.

The running MVP is the design proof. Text descriptions, mockups, evidence frames, successful compilation, and screenshots of a different revision cannot replace it.

## Capability rule

The Product Researcher owns the capability contract. Its decisions in the approved Research are authoritative for every downstream role.
