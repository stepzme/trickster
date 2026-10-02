<design-context>
---
version: 1
platform: iOS
name: Citydrive-design-analysis
description: "A map-led car-sharing visual system with a pale 2GIS-style map, bright green booking actions, deep navy operational docks and menu sheets, purple active-rental controls, large white bottom sheets, real vehicle cutouts, and clean document/form screens."
colors:
  primary: "#31C963"
  on-primary: "#FFFFFF"
  primary-soft: "#EAF9F0"
  accent: "#7C32F4"
  accent-soft: "#F1E9FF"
  deep-navy: "#0B0924"
  deep-navy-2: "#171332"
  deep-navy-3: "#211C42"
  ink: "#16171A"
  ink-muted: "#71767C"
  ink-subtle: "#A4AAB0"
  ink-disabled: "#CFD3D8"
  canvas: "#F7F8FA"
  map-canvas: "#F3F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F7"
  surface-3: "#ECEFF3"
  hairline: "#DEE3E8"
  semantic-success: "#31C963"
  semantic-danger: "#E04455"
  semantic-warning: "#7C32F4"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: 0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: 0}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 32
  sheet: 18
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 48
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14 18}
  button-active-rental: {backgroundColor: "{colors.accent}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12 14}
  button-neutral-dark: {backgroundColor: "{colors.deep-navy-2}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14 18}
  sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sheet}", padding: 16}
  dock: {backgroundColor: "{colors.deep-navy}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8 12}
  menu-panel: {backgroundColor: "{colors.deep-navy-2}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14 16}
  chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 10 12}
  vehicle-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
---

# Overview

Citydrive is map-led and operational. The visual language combines a very light map, visible green geofence lines, white bottom sheets, real vehicle cutouts, bright green forward actions, purple active-rental emphasis, and a deep navy dock or menu layer.

# Non-negotiable visual invariants

- Keep the pale map visible behind vehicle and rental controls whenever the reference screen is map-based.
- Draw geofence boundaries as thin green outlines over the map.
- Use bright green for booking, opening, confirming, enabled toggles, and safe progress.
- Use purple only for active-rental emphasis such as running rental actions or live location markers.
- Use deep navy for the persistent bottom dock, active rental chrome, and full menu panels.
- Use real vehicle photos or cutouts as content, not decoration.
- Present vehicle data in white sheets with compact rows and icons.
- Keep document, registration, and phone-entry screens mostly white with sparse controls and large vertical whitespace.

# Color and surfaces

`map-canvas` is the largest surface on car-sharing screens. It should stay low contrast: pale roads, faint labels, and enough opacity for green zone outlines and markers to remain readable.

White sheets rise over the map with large top radii and minimal shadow. Deep navy panels are reserved for the bottom dock, menu drawer, and active rental header. Green is the main action and success color. Purple marks active rental or urgent operational state and should not be used for ordinary selection.

Use black text for model names, headings, costs, and form titles. Use muted gray for explanatory copy, secondary vehicle facts, empty input placeholders, and disabled actions. Destructive text is red and appears sparingly.

# Typography

Use SF Pro Display for major values and headings; use SF Pro Text for forms, rows, labels, and buttons.

- `display-xl` for large running costs.
- `display-lg` for prominent marketing or mode titles.
- `headline` for sheet titles, registration headings, and vehicle names.
- `card-title` for vehicle cards, menu identity, and task cards.
- `body` for vehicle facts, form copy, menu rows, and filter labels.
- `caption` for tab labels, badges, legal text, and compact metadata.

Costs, vehicle names, and the current operating state should be immediately scannable. Supporting facts may wrap or reduce before the primary value changes size.

# Screen composition

Use a 4 point base grid, 16 point side gutters, 12 point row gaps, and 16 point sheet padding. Map-based screens are full-bleed: controls float over the map, and sheets attach to the lower edge.

Vehicle sheets use a compact header with model name and plate, vehicle image at left, facts at right, tariff cards below, and a green primary button near the bottom. When the sheet is expanded, continue the same white surface rather than switching to a separate page style.

Active rental screens use deep navy at the top for live cost and the purple end-rental button. The map remains below the header, then a white vehicle sheet or control strip anchors the lower half. Door controls use large horizontal targets with explicit lock or door labels.

Menu screens use a rounded deep navy panel over a dimmed or partially visible map. Menu content is grouped into dark cards with white text, muted secondary labels, green toggles, and chevrons. Long-term rental and marketplace-style screens return to white canvas but keep the same bottom dock language and vehicle imagery.

Registration and document screens are sparse white forms: heading near the top, large input or checklist group, and a green bottom action. Keep legal text and privacy links small and green.

# Navigation appearance

The map dock is dark navy with rounded top corners and three compact icon-label items. The active mode uses a green or high-contrast icon tile; inactive modes remain muted but readable. Floating map controls are white rounded squares or pill chips with black icons.

This section governs appearance only. Product structure and destinations come from approved product artifacts.

# Components

Primary buttons are green rounded rectangles, usually 48 to 56 points tall. Purple buttons are reserved for active rental termination or comparable active-state emphasis. Dark buttons control secondary operational actions such as doors when shown in the active-rental context.

Bottom sheets use a small centered grab handle, 18 to 24 point top corner radius, and white background. Keep sheet content dense but not cramped: use icons, short labels, and right-aligned values.

Tariff cards are white rounded rectangles with thin borders. Selected tariff cards use a green border and may use green text for the price. Disabled actions are pale gray with low-contrast text.

Inputs use pale gray fills, minimal borders, and black entered text. Checkboxes use green filled circles with white checks when selected. Toggles use green when enabled and gray when off.

Filter chips are white or very pale controls with small black icons. Vehicle grid cards show real car cutouts with rounded white tiles and compact labels.

# Imagery and icons

Use real vehicle cutouts or real vehicle photos with transparent or white backgrounds. Preserve the full car silhouette, especially wheels and roofline, and keep the crop consistent across cards and sheets.

Map imagery is functional: preserve roads, labels, geofence outlines, user marker, vehicle marker, and provider watermark when present in the composition. Do not replace the map with an abstract illustration.

Document capture screens use real document photography examples. Promo and business pages may use composited vehicle imagery, but it must remain raster artwork and must not be redrawn with simple SwiftUI shapes.

Icons are compact, black or white depending on surface, and should remain secondary to labels and vehicle imagery. Avoid arbitrary SF Symbol substitutions when the observed icon has a brand-specific shape or tile.

# States

Available vehicles use green markers and green booking actions. Reserved or active rental states use deep navy and purple emphasis with live cost visible. Door state is explicit through a labeled control and lock/door icon. Search radius and radar states use green markers, sliders, and enabled buttons.

Disabled buttons and inactive form states use pale gray fills with very low text contrast. Loading overlays use a centered green spinner over a translucent gray veil. Selected checkboxes and toggles use green; destructive account actions use red text only.

Only the visual states documented here are specified. Additional states must preserve the same map, sheet, dock, typography, and color hierarchy.

# iOS adaptation

- Extend the map or white canvas through safe areas while keeping controls inside readable insets.
- Keep dock items, map controls, sheet actions, form inputs, and toggles at least 44 points tall.
- Let bottom sheets scroll internally when content exceeds the viewport; do not hide the primary action under the home indicator.
- Preserve map, vehicle image, model, plate, price or live cost, and active action before secondary facts.
- Use native keyboard and permission surfaces; return to the same form or map composition afterward.
- Support Dynamic Type by wrapping secondary rows and keeping primary values visually dominant.
- Integrate vehicle, document, and promo imagery as raster assets with correct crop and scale.

# Anti-generic checklist

- Do not replace the map with a blank background or decorative gradient.
- Do not use purple for ordinary buttons or filters.
- Do not hide green geofence lines, vehicle markers, or the user marker.
- Do not crop vehicle cutouts into generic thumbnails.
- Do not turn bottom sheets into full-screen cards unless the reference surface is not map-based.
- Do not use car images as decoration without vehicle data.
- Do not substitute generic SF Symbols for branded mode tiles, car imagery, document photos, or map markers.
- Do not make registration screens card-heavy; they are sparse white forms.

</design-context>
