# Trickster master process

You are responsible for one coherent result: a working iOS product, one confirmed visual language, a verified app, one app icon, and one ASO screenshot set. The remote-package shortlist exists only to select a direction; do not create parallel design concepts after selection.

## Team organization

Before starting, read [role orchestration](orchestration.md), `trickster/adapters/contract.md`, and the adapter named in `trickster/HARNESS`. Use the role contracts in `trickster/roles/`:

- `product-researcher` — product scope and boundaries;
- `design-planner` — a shortlist from the GitHub catalog, then one locally saved package and contract;
- `implementation-owner` — sole owner of app code;
- `visual-producer` — product images, app icon, and ASO in separate phases;
- `acceptance-reviewer` — independent verification without code fixes.

Orchestrate agents yourself through the adapter's universal operations: pass exact inputs and write paths, wait for completion, and verify each handoff. Do not ask the user to relay messages. Continue the existing agent when work belongs to the same role. Do not accept its self-assessment as evidence.

The master always retains user communication, presentation of the shortlist, selection of exactly one style package, contract changes, assignment of shared files and Simulator, integration, final acceptance, and delivery. If separate agents are unavailable, execute the roles sequentially through the generic adapter and record the limitation.

## Order of work

Execute stages sequentially. Do not proceed past a required blocking result.

1. [Scope definition](scope.md) — `product-researcher` analyzes the original request and existing project and identifies gaps.
2. [Style-package selection](style-reference.md) — `design-planner` loads the GitHub catalog, selects up to three candidates by metadata, and loads documents only for those candidates; the master presents the shortlist and requires the user to select one.
3. [Product contract](product-contract.md) — after selection, the same `design-planner` records scope, screens, scenarios, design, and acceptance plan.
4. [Product images](assets.md) — create `visual-producer` only when there is a real need; one solution for each need.
5. [Implementation](implementation.md) — `implementation-owner` builds a vertical slice and the complete agreed scope.
6. [App icon](app-icon.md) — `visual-producer` researches Logoinspo and creates one original concept in the asset catalog.
7. [App acceptance](acceptance.md) — `acceptance-reviewer` independently verifies the final build; the master rechecks key evidence and issues a decision.
8. [ASO screenshots](aso-screenshots.md) — after ACCEPTED, `visual-producer` creates one set from real screens.
9. [Finalization](finalization.md) — the master presents the result, gets explicit user confirmation, and cleans temporary downloads and build files.
10. [Delivery](delivery.md) — the master verifies preserved artifacts and provides a unified report.

Cross-cutting requirements are in [UX](ux.md) and [iOS](ios.md). Before selection, `design-planner` uses the GitHub catalog; after selection, visual and behavioral design comes only from `trickster/design/`.

## Mandatory stops

- Do not begin UI design or implementation until the user explicitly selects one style package.
- If the user selects multiple packages, do not combine them; ask the user to keep one.
- If there is no exact match, offer the nearest packages from the catalog and explain the adaptation.
- If the catalog or required candidate documents are unavailable, identify the specific link and stop UI work.
- Do not declare the app accepted based on one build or screenshot.
- Do not create the app icon before the app screens are complete; do not create ASO screenshots before final build acceptance.
- Do not clean temporary files before `APP ACCEPTED`, completion of the applicable ASO stage, and explicit user confirmation.

## One pass, one solution

Before selection, a shortlist of up to three existing packages is allowed. After selection, use the package as a whole: do not mix its files, components, or individual screens with other packages. If verification finds a defect, fix the selected solution; do not disguise a fix as an alternative concept.
