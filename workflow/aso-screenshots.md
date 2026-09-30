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

Do not fabricate features, alter the product UI inside a capture, or replace a real capture with a generated mockup.

## Storyboard gate

1. Select benefits only from accepted scope.
2. Propose one ordered storyboard: first frame communicates the product essence; later frames present individual benefits.
3. Record copy, locale, device, source scenario, and intended real screen for each frame.
4. The master shows the storyboard and waits for explicit `STORE STORYBOARD APPROVED`.

Do not render frames before storyboard approval.

## Per-frame feedback loop

Process frames strictly one at a time:

1. Prepare reproducible data and capture the real source screen from the accepted build.
2. Compose one frame using final `ui.md`, optional `illustrations.md`, and approved icon techniques.
3. Verify copy, localization, readability, crop, safe areas, technical size, source revision, and truthful benefit.
4. The master shows the actual export to the user.
5. If feedback is given, continue the same visual producer and refine that frame.
6. Record explicit `STORE FRAME <n> APPROVED` before starting frame `<n+1>`.

The first approved frame becomes the visual template for the set. Later frames may vary composition to serve their content but must preserve the approved system.

After all frames are approved, inspect them together for sequence, consistency, duplicated claims, locale, and technical requirements. Obtain explicit `STORE SET APPROVED`.

## Output

```text
trickster/artifacts/<run-id>/aso/
├── storyboard.md
├── feedback.md
├── sources/
├── exports/
└── verification.md
```

`feedback.md` records storyboard approval, each shown frame revision, user feedback, every frame approval, and final set approval.
