# Stage 9. Store screenshots

## Applicability

This stage is required for a new app after acceptance of the release candidate and approved app icon. For an existing app, perform it when requested or when showcased features or visual language changed.

The user-facing result is a store-screenshot set, not a claim that broader App Store Optimization or publication is complete.

## Source contract

Every frame must link:

```text
implemented and verified benefit
→ accepted app scenario
→ real screenshot from the accepted build
→ marketing composition
→ explicit user approval
```

Do not fabricate features, alter the product UI inside a capture, or replace a real capture with a generated mockup. Curated demonstration data is allowed when it is seeded into the real SwiftData and file stores and read through the normal production data path.

## Demonstration-data preparation

Use the accepted app revision and a reproducible ASO data-preparation procedure. The procedure may import fixtures or run a dedicated seed command, but it must create real SwiftData records and copy binary payloads into the same file storage used by the product. It must not replace the production repository, hard-code content in views, simulate a backend response, or change feature behavior.

Record the seed version, inputs, generated local records and files, configuration, and cleanup path. Keep seed tooling and demonstration content out of the user-facing Release build unless the contract identifies them as intentional bundled sample content.

## Storyboard gate

1. Select benefits only from accepted scope.
2. Propose one ordered storyboard: first frame communicates the product essence; later frames present individual benefits.
3. Record copy, locale, device, source scenario, and intended real screen for each frame.
4. The master shows the storyboard and waits for explicit `STORE STORYBOARD APPROVED`.

Do not render frames before storyboard approval.

## Per-frame feedback loop

Process frames strictly one at a time:

1. Prepare reproducible demonstration data in the accepted revision's real local stores and capture the resulting real source screen. Manual entry is not required when the recorded ASO seed or importer follows the production data path.
2. Compose one frame using final `ui.md`, optional `illustrations.md`, and approved icon techniques.
3. Verify copy, localization, readability, crop, safe areas, technical size, source revision, and truthful benefit.
4. The master shows the actual export to the user.
5. If feedback is given, continue the current store-screenshot session and refine that frame.
6. Record explicit `STORE FRAME <n> APPROVED` before starting frame `<n+1>`.

The first approved frame becomes the visual template for the set. Later frames may vary composition to serve their content but must preserve the approved system.

After all frames are approved, inspect them together for sequence, consistency, duplicated claims, locale, and technical requirements. Obtain explicit `STORE SET APPROVED`.

## Output

```text
trickster/artifacts/<run-id>/aso/
├── storyboard.md
├── feedback.md
├── seed-manifest.md
├── sources/
├── exports/
└── verification.md
```

`feedback.md` records storyboard approval, each shown frame revision, user feedback, every frame approval, and final set approval.
The producer writes a validated store-screenshot handoff before the session is retired.
