<design-context>
---
version: 1
platform: iOS
name: Measure-design-analysis
description: "A camera-first spatial utility with full-bleed live imagery, sparse white AR geometry and circular controls, a fixed black two-item bottom bar, and an alternate level surface where enormous centered degree numerals sit directly on functional black, white, red, or green color fields."
colors:
  canvas: "#000000"
  surface-primary: "#000000"
  surface-secondary: "#FFFFFF"
  accent-primary: "#FFFFFF"
  accent-secondary: "#FF3B30"
  text-primary: "#FFFFFF"
  text-secondary: "#B8B8BC"
  divider: "#3A3A3C"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 72, fontWeight: 300, lineHeight: 80}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 400, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 500, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 999
  card: 14
  sheet: 18
  pill: 999
components:
  primary-action: {fill: "#FFFFFF", foreground: "#000000", shape: "circle"}
  secondary-action: {fill: "#1C1C1E", foreground: "#FFFFFF", shape: "circle-or-pill"}
  primary-card: {fill: "#FFFFFF", foreground: "#000000", shape: "compact-result-panel"}
  navigation: {fill: "#000000", foreground: "#8E8E93", selectedForeground: "#FFFFFF"}
---

# Overview

Measure is built as an instrument rather than a content application. In measurement screens, the live camera occupies the whole viewport and the interface is reduced to white spatial lines, endpoint dots, compact value pills, and a few high-contrast controls. In level screens, camera detail disappears entirely and a black, white, red, or green field becomes the measurement itself, with an enormous centered angle. The fixed black bottom navigation is the only persistent structural surface.

# Non-negotiable visual invariants

- The primary utility surface is full bleed: live camera in spatial measurement or a single functional color field in level mode.
- White reticles, dots, lines, and value pills attach directly to measured positions instead of sitting inside a dashboard or card.
- A large circular white placement control is the dominant bottom action and stays within thumb reach above the navigation bar.
- The bottom navigation is a stable opaque black strip with exactly two evenly weighted icon-and-label items and a clear white selected state.
- Measurement guidance is short, centered, and overlaid on the live view with sufficient contrast; it never becomes a large explanatory panel.
- Level feedback uses very large thin centered degree numerals and immediate full-screen color change.
- Utility controls are simple circles or compact pills with flat fill and no decorative shadow.
- Color communicates instrument state rather than brand mood and is always reinforced by geometry or numeric output.

# Color and surfaces

Camera content is the dominant, variable color mass on measurement screens. Black supplies the stable bottom bar, control backing, status contrast, and some level states. White is the primary overlay color for guidance, lines, endpoint dots, reticles, icons, and circular actions; black text appears inside white value pills or result panels. Level states use full-screen white, red, green, or black fields, with text inverted for legibility. Gray is limited to inactive navigation and subdued controls. There is no decorative accent palette. Default blue tint, pale grouped backgrounds, gradients, translucent cards, or branded color washes would contradict the observed instrument-like treatment.

# Typography

The level readout uses very large, light-weight SF Pro Display numerals centered on the viewport, with a degree symbol optically aligned to the value. Measurement labels use compact medium-weight system text inside white pills. Guidance and control labels are short, white, and regular or medium weight. Navigation captions are small but legible beneath simple icons. Scale contrast is extreme: numeric feedback dominates, then guidance, then labels. Dynamic Type may enlarge guidance and modal copy within bounded widths, but spatial value pills and degree numerals should use minimum-scale behavior to preserve their relationship to geometry and avoid hiding the target surface. VoiceOver must provide the full measurement value independently of visual scaling.

# Screen composition

Measurement screens layer interface directly over a full-bleed camera. Sparse top controls sit below the safe area. Calibration or distance guidance occupies the upper-middle, a targeting reticle stays near the central working area, and the primary placement control sits above the persistent bottom bar. Once points exist, thin white lines connect circular endpoints and a compact rounded value label attaches to the line. Secondary undo or clear controls remain small and peripheral. The camera region is intentionally unobstructed and does not scroll.

A compact measurement-result modal appears centered over the dimmed live surface, using a small light panel, concise value hierarchy, a close control, and a blue or dark system action. Level archetypes remove the camera and use the complete area above the black bottom bar as one flat feedback field. The degree readout remains centered, while minimal guide lines or marks align with the physical level state. All archetypes extend visually to the screen edges and preserve the home-indicator safe area inside the bottom bar.

# Navigation appearance

The observed navigation is a fixed opaque black bottom bar with two equal icon-and-label items. Selected content is white; inactive content is muted gray. The bar sits above and around the home indicator without floating or rounding into a pill. There is no top navigation title or back hierarchy on the main tool surface. Temporary result panels and compact top controls overlay the current surface without replacing the persistent bottom bar.

# Components

The placement action is a large flat white circle with a centered black plus mark and a generous touch target. Secondary actions use smaller black or white circles and compact dark pills with white labels. The targeting control is a translucent or outlined circular reticle aligned to the center working region. Measurement geometry uses fine high-contrast white strokes, solid endpoint dots, and a small white pill with black numeric text. Calibration artwork is thin white line geometry centered over the camera and paired with one short instruction. The result panel is a compact light rounded rectangle with a clear value, close control, and restrained action. Bottom navigation icons are simple monochrome tool symbols above short captions.

# Imagery and icons

Live camera imagery is compositionally indispensable in measurement screens and must remain full bleed with overlays registered to spatial points. It cannot be replaced by a generic background while awaiting implementation. The level screen uses no imagery; its flat color field is functional output. Calibration drawings are minimal white line diagrams tied to device movement, not a reusable editorial illustration language. Icons are sparse, monochrome, and functional. Avoid decorative symbols, stock photography, or generated illustrations that compete with the camera or numeric result.

# States

Observed measurement states include calibration guidance, insufficient-distance guidance, ready-to-place reticle, placed endpoints, a completed short measurement, undo/clear controls, and a compact result modal. Observed level states use black, white, red, and green full-screen fields at different angles, always paired with a centered numeric degree readout. Across states, overlay geometry stays white or high contrast, controls retain their circular/pill shapes, and the black two-item bottom bar remains fixed. No authored empty-state, permission screen, or decorative error illustration is visible.

# iOS adaptation

Use a full-screen camera preview with `aspectFill`, extending under safe areas while keeping top controls and the bottom bar readable. Register AR lines, points, reticle, and labels in one coordinate space so rotation or viewport changes do not visually detach them from the target. Keep placement, undo, clear, and navigation targets at least 44 points. On shorter iPhones, reduce gaps and guidance width before shrinking the primary action or occluding camera space. Preserve the opaque black bar and place the home indicator within its safe-area extension. VoiceOver order should expose current guidance or value, placement action, secondary controls, then navigation; provide non-color descriptions for level state. The sampled screens are portrait, so no landscape composition should be inferred.

# Anti-generic checklist

- Do not place the camera, level value, or measurement canvas inside a rounded card.
- Do not replace the full-screen state colors with decorative gradients or brand tints.
- Do not use default blue tint for spatial controls or bottom selection.
- Do not turn the bottom bar into an unstyled `TabView`, translucent floating pill, or white navigation surface.
- Do not thicken AR geometry into decorative strokes or add shadows that obscure the camera target.
- Do not add tooltips, paragraphs, metric dashboards, or unrelated cards over the working surface.
- Do not replace the calibration line geometry with a character illustration or arbitrary SF Symbol.
- Do not rely on red or green alone; preserve centered numeric and geometric feedback.

</design-context>
