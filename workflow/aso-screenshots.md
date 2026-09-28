# Stage 8. ASO screenshots

## Applicability

This stage is required for a new app after acceptance of the final build and app icon. For changes to an existing app, perform it when requested or when the showcased features or visual language changed.

## One direction

Do not create a separate visual concept for ASO or offer multiple sets. The style is an aggregation:

```text
confirmed style package
+ actual app interface
+ visual techniques from the accepted app icon
+ real product benefits
= one ASO screenshot set
```

## Procedure

1. Select the primary benefits only from implemented and verified scope.
2. Create one frame sequence: the first frame communicates the product's essence, and subsequent frames reveal individual benefits.
3. Prepare reproducible data and capture real screens from the final build in Simulator.
4. Compose the frames using the typography, color, shapes, and graphic techniques from `ui.md`, applicable `illustrations.md`, and the app icon.
5. Do not alter the interface in a screenshot to imply features that do not exist.
6. Verify localization, readability, cropping, safe areas, and conformance with current App Store Connect requirements.
7. Export one final set for the declared devices and locales.

A generated interface mockup does not replace a capture of the real app. A marketing composition may surround the capture, but the product screen itself must come from the accepted build.

## Output

```text
trickster/artifacts/<run-id>/aso/
├── storyboard.md
├── sources/
├── exports/
└── verification.md
```

`storyboard.md` connects each frame to a benefit, real scenario, and source screenshot. `verification.md` records the dimensions, locale, device, and visual verification of every export.
