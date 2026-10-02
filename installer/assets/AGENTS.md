# Trickster: iOS app development process

When creating or substantially changing an app:

1. Read `trickster/workflow/master-prompt.md`, `trickster/workflow/orchestration.md`, and the adapter named in `trickster/HARNESS`. Follow Research, Planning, Design, Dev, Polish, and Publish.
2. Product Researcher defines the complete product and all eleven capabilities during Research without dividing work into MVP and Full Scope. The user must explicitly approve the Research artifact.
3. After Research approval, Planning and design-reference research may run in parallel. Planning divides the approved product into a design MVP and ordered Full Scope blocks and requires explicit user approval.
4. Designer shortlists up to three reference apps and proposes one UI source and an optional illustration source. References do not define product navigation or flows; use the approved Research and Planning artifacts plus the shared workflow rules. The user explicitly approves the selection.
5. Copy approved source documents unchanged into `trickster/design/`. Do not synthesize a generalized project `ui.md`, `composition.md`, or provenance document.
6. The same Designer implements the MVP in Xcode, creates the graphics it needs, runs it in Simulator, and iterates until the user explicitly approves the running design. Text descriptions, evidence frames, and a successful build do not constitute design approval.
7. Implementation Owner starts only from the approved MVP and implements Full Scope one large block at a time. Show and explicitly approve every block before continuing.
8. Acceptance Reviewer checks every approval, the completed build, reference fidelity, product flows, and capabilities during Polish. The reviewer does not fix code. The user explicitly approves the polished app before Publish.
9. Designer owns illustrations, images, the final app icon, and store screenshots. During Publish, create final materials only from the polished app and real screens. If integration changes the app bundle, repeat the affected Polish checks. Clean only recorded temporary output after final user confirmation.
10. Product Researcher follows the single capability contract in `trickster/roles/product-researcher.md`. Every downstream role follows the capability decisions in the approved Research.
11. Do not add a proprietary backend, server account, Sign in with Apple, CloudKit, or synchronization unless the user explicitly requires it. Use the simplest suitable local storage for product data.
12. Describe unavailable checks plainly. Never fabricate a system prompt, visual review, or successful test.

Do not change approved scope, references, or criteria merely to obtain a positive result.
