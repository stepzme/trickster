# Implementation overview

Implementation is one continuous responsibility performed by the same `implementation-owner`, but it is divided into three gated phases:

1. [Core](implementation-core.md) — main-section screens, application shell, and the primary flow, followed by user feedback until `CORE UI APPROVED`.
2. [Full](implementation-full.md) — the rest of the agreed scope, all eleven mandatory capability features, and the `LOCAL DATA READY` gate.
3. [Hardening](implementation-hardening.md) — after approved visual integration, local-storage and migration failures, errors, denial, restriction, cancellation, unavailable dependencies, persistence, accessibility, compact layout, final-asset regressions, and declared environment states.

Do not collapse these phases into one large implementation assignment. Use `CONTINUE` with the same owner so earlier decisions, feedback, and defects remain visible.

After Full reaches `LOCAL DATA READY`, execute `assets.md`, integrate approved product assets and the applicable approved icon, and only then continue the implementation owner into final Hardening.

## Shared rules

- `product.md` owns scope, phase boundaries, scenarios, and acceptance criteria.
- `trickster/design/` owns the approved design composition and revision.
- The implementation owner cannot change either contract.
- The implementation owner is the sole writer to app code and shared Xcode files.
- SwiftData owns durable domain data, files own binary payloads, local identity needs no account, and `UserDefaults` is limited to small preferences.
- Preview fixtures never become a Release data provider.
- Build and check each phase before handoff.
- Use native controls where they provide correct behavior and accessibility, while styling presentation according to the final design package.
- Direct temporary build output to `/tmp/trickster/<run-id>/build/` when supported.
- A phase preview is never acceptance.

## User-requested Simulator preview

At any point in Core, Full, or Hardening, the user may ask to see the current app. The master transfers Simulator ownership to one role, pauses conflicting builds, and requests a preview of the exact revision. The owner builds, installs, launches, and captures the requested states. Record phase, revision, device, OS, locale, theme, text size, and data.

Return the result as `PREVIEW`. Do not claim feature completion, physical-device verification, visual acceptance, or `PASS` from the preview. The master shows it to the user and returns feedback to the same owner through `CONTINUE`.

## Design revision invalidation

If Core feedback changes the reference mapping or final design package, stop downstream work. Record a new design revision and repeat affected Core work. Any icon, asset, acceptance, or store-screenshot approval tied to the prior revision must be re-evaluated.
