<design-context>
---
version: 1
platform: iOS
name: InDrive-design-analysis
description: "A map-first mobility interface with white layered sheets, bold black type, simple gray dividers, and an unmistakable acid-lime action color. Live location and route context stay visible behind large rounded planning panels. Safety, driver contact, and price negotiation receive equal visual weight, supported by black-and-white character illustration and compact 3D transport scenes."
colors:
  primary: "#B9F600"
  on-primary: "#111111"
  primary-focus: "#9FD600"
  ink: "#161616"
  ink-muted: "#535357"
  ink-subtle: "#85858B"
  ink-tertiary: "#B0B0B6"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F8"
  surface-2: "#EFEFF1"
  surface-3: "#E3E3E6"
  surface-4: "#D6D6DA"
  hairline: "#E0E0E3"
  hairline-strong: "#C5C5CA"
  hairline-tertiary: "#AAAAAF"
  inverse-canvas: "#151515"
  inverse-surface-1: "#292929"
  inverse-surface-2: "#3B3B3B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#89AFFF"
  semantic-success: "#20C987"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 42, fontWeight: 800, lineHeight: 1.04, letterSpacing: -1.3}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 800, lineHeight: 1.08, letterSpacing: -0.9}
  display-md: {fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.5}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 13, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 18
  xl: 24
  xxl: 30
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
  section: 44
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  map-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16}
  location-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 16}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10}
  driver-action: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12}
  price-stepper: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.md}", padding: 12}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4 8}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 12}
---

# Overview

InDrive keeps the map as persistent spatial context while white rounded sheets carry planning, offers, driver details, and safety. Acid lime makes key actions instantly recognizable without coloring the whole interface.

# Non-negotiable visual invariants

- Characteristic content and controls use Map-first composition with layered white sheets.
- Preserve visible map context.
- Make price negotiation explicit.
- Keep safety reachable throughout the ride.
- Reserve lime for action and trust.
- Group driver contact choices together.
- The map occupies the viewport.
- Planning content uses one large bottom sheet; service options use a compact grid inside it.

# Color and surfaces

- Acid lime marks primary actions, safe-state controls, and brand moments.
- Blue is limited to current location on the map.

- White sheets and controls float over a pale neutral map.
- Light gray groups fields, steppers, and service tiles.
- Black appears in launch branding and high-contrast illustration.

- Near-black carries destination, price, and driver data.
- Mid-gray handles guidance and secondary route facts.
- Red is reserved for cancellation and emergency.

- Lime communicates proactive safety and action, not success alone.
- Green confirms completion where needed.

# Typography

- SF Pro Display for destination, offer price, and arrival time.
- SF Pro Text for forms, route details, and safety copy.
- SF Mono for countdowns, codes, and price increments.

- display-xl — 42 points — 800 — Offered price
- display-lg — 34 points — 800 — Arrival or status
- display-md — 27 points — 700 — Sheet title
- headline — 22 points — 700 — Destination prompt
- card-title — 17 points — 600 — Driver or service
- body — 14 points — 400 — Route and safety copy
- caption — 10 points — 400 — Service labels

- Keep price and time visually dominant.
- Use short labels beneath circular actions.
- Avoid condensed typography on map labels or safety content.

Use Apple system fonts for consistent map and form rendering.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base with 12–16 points inside controls and 20–24 points between major sheet groups.

The map occupies the viewport. Planning content uses one large bottom sheet; service options use a compact grid inside it.

White space must keep location and price decisions legible. Avoid filling the map with independent floating controls.

Use soft sheet separation and compact 3D service scenes. Do not add heavy shadows to every row.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a floating menu button over the map. Contextual back, close, and recenter controls are circular and remain separated from the main sheet.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary buttons are full-width lime rectangles with dark labels. Secondary actions use light gray or white. Cancellation uses red text without filling the whole panel.

Planning and ride state live in one continuous sheet. Promotional services use small image-led tiles; safety information uses simple rows and circular actions.

Location fields are large pale rows. Price negotiation uses a central bold amount with decrement and increment controls.

Search progress combines a countdown, number of drivers viewing, and an optional automatic-accept toggle. Arrival state promotes driver and vehicle information.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Character illustrations use angular lime backdrops. Service vehicles are small 3D scenes. Avatars remain circular; map and route graphics stay factual.

Keep illustrations contained without clipping hands or vehicles. Map content remains fully interactive behind the sheet.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Search progress combines a countdown, number of drivers viewing, and an optional automatic-accept toggle. Arrival state promotes driver and vehicle information.

- Lime communicates proactive safety and action, not success alone.
- Green confirms completion where needed.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Map controls, location rows, driver actions, and steppers retain at least 44 points hit areas.
- The sheet scrolls internally when ride detail grows. Service grids reduce columns before labels shrink.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not cover the entire map before destination selection.
- Do not use lime as a large text background repeatedly.
- Do not bury safety in settings.
- Do not separate price and timer.
- Do not add a conventional five-tab bottom bar.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
