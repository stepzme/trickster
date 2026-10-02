# Polish

## Goal

Independently verify the completed app and return concrete defects to their owner until the product is ready for final publication materials.

## Start gate

The Acceptance Reviewer verifies that the current revisions have explicit Research, Planning, reference-selection, running-design, and Dev-block approvals. Missing approval blocks Polish.

## Independent review

The Acceptance Reviewer independently:

- builds, installs, and launches the completed app;
- exercises the primary flows and every completed Full Scope block;
- compares live screens with the approved UI source and approved MVP;
- verifies navigation and interaction against the approved Research and Planning artifacts and the shared workflow criteria;
- verifies every capability decision recorded in the approved Research;
- verifies denial, unavailable, cancellation, and retry behavior that the app claims to support;
- inspects cold launch, accessibility, supported compact size, promised persistence, and final product imagery;
- records performed checks, concrete failures, evidence, and unavailable verification in `trickster/artifacts/<run-id>/review.md` using `trickster/templates/review.md`.

The reviewer does not fix code. Functional defects return to the Implementation Owner as one concrete batch. Visual-direction defects return to Designer. The Acceptance Reviewer retests the changed build.

## Approval

The master presents the polished running app and review result to the user. Publish begins only after explicit approval of the current app revision. Missing tools or device-only checks remain recorded plainly and are never converted into a pass.
