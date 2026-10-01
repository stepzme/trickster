<design-context>
---
version: 1
platform: iOS
name: Weather-design-analysis
description: "An atmospheric iOS weather system built from full-screen condition imagery, blue-gray translucent forecast cards, very large white temperature type, compact weather glyphs, thin range bars, and data-rich animated maps. The saved-city list shifts to near-black so each photographic location card becomes a vivid window."

colors:
  primary: "#FFFFFF"
  on-primary: "#23445E"
  primary-pressed: "#E9F2F8"
  ink: "#FFFFFF"
  ink-muted: "#DCE8F0"
  ink-subtle: "#AFC3D0"
  canvas: "#315F7C"
  surface-1: "#416F91"
  surface-2: "#537E9E"
  list-canvas: "#000000"
  list-surface: "#242426"
  map-blue: "#4D86B8"
  map-cyan: "#67C9DA"
  map-violet: "#A157C7"
  hairline: "#FFFFFF33"
  semantic-warning: "#FFD45A"
  semantic-danger: "#FF6B6B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 76, fontWeight: 250, lineHeight: 0.95, letterSpacing: -2 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 52, fontWeight: 300, lineHeight: 1.0, letterSpacing: -1 }
  display-md: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 550, lineHeight: 1.1, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Text, fontSize: 20, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.15 }
  button: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 16]}
  forecast-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  city-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  search-field: { backgroundColor: "{colors.list-surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  map-control: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10 }
---

# Overview

Weather turns conditions into the environment itself. Atmospheric imagery establishes mood, translucent forecast cards organize data, and the map becomes a full-screen scientific surface.

# Non-negotiable visual invariants

- The reference consistently shows let the current condition define the atmosphere.
- The reference consistently shows forecast rows aligned and comparable.
- The reference consistently shows translucent materials consistently.
- The reference consistently shows preserve the map as a full-screen tool.
- Imagery consistently uses an atmospheric iOS weather system built from full-screen condition imagery.
- The reference consistently shows blue-gray translucent forecast cards.
- Typography consistently uses very large white temperature type.
- The reference consistently shows compact weather glyphs.

# Color and surfaces

### Brand & Accent

There is no fixed chromatic brand beyond white system chrome. Blue, cyan, violet, green, and yellow change with sky and weather layers.

### Surface

Use full-screen atmospheric imagery, translucent blue-gray cards, near-black saved-city canvas, and white floating map controls.

### Text

Use white over condition imagery, pale blue-gray for secondary labels, and black inside light map controls or system sheets.

### Semantic

Use yellow for sun and warnings, blue for rain and cold, violet for heavy precipitation, and red only for severe conditions.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text with thin large numerals and compact labels.

### Hierarchy

Use 52–76 points current temperature, 34 points city-list temperature, 17–20 points condition and row titles, and 10–14 points metrics.

### Principles

Let temperature dominate without bold weight. Keep metric labels uppercase and quiet; align forecast numbers for comparison.

### Note on Font Substitutes

Use Inter with light display numerals and medium text weights when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 16 points screen gutters, 12 points card gaps, and 8 points between forecast rows.

### Grid & Container

City detail is a vertical stack of full-width translucent cards. The map fills the viewport with legends and controls pinned to edges.

### Whitespace Philosophy

Keep the condition header open and cinematic. Data cards may be dense but require stable row alignment and clear grouping.

Surface hierarchy observed in the source:

Use material blur, translucent overlays, soft gradients, and atmospheric parallax. Avoid opaque floating card stacks over the forecast.

### Decorative Depth

Condition imagery, animated particles, moving cloud layers, and blurred glass provide all decoration. Do not add unrelated ornaments.

# Navigation appearance

Use map and list controls at the bottom of city detail; map view uses Done, location, city list, layers, and timeline controls.

# Components

### Buttons

Use light translucent or white compact controls with system glyphs. Native controls may be used, but their blur, tint, contrast, and radius must match the current weather surface.

### Cards & Containers

Forecast cards use one translucent tone with hairline separation, compact labels, weather glyphs, and colored range bars.

### Inputs & Forms

City search uses a dark rounded field with magnifier and clear action. Notification setup uses a concise full-width row.

# Imagery and icons

Condition imagery, animated particles, moving cloud layers, and blurred glass provide all decoration. Do not add unrelated ornaments.

Weather imagery fills edge to edge and may blur beneath cards. Maps remain uncropped; widgets use a soft rounded square.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show current condition, severe alert, precipitation chance, map intensity, location permission, notification permission, and widget state directly.

# iOS adaptation

### Touch Targets

City cards, hourly items, metric cards, map layers, timeline, location, list, search, and alert controls require at least 44 points targets.

### Collapsing Strategy

Keep city, current temperature, next hours, warning, and map access visible. Collapse deeper metrics below the ten-day forecast.

### Image Behavior

Use `cover` for condition photography and `fill` for map tiles. Keep weather glyphs and widgets sharp with `contain`.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not force one static background across conditions.
- Do not use heavy bold type for temperature.
- Do not add opaque white cards over the city forecast.
- Do not leave mismatched default control styling.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
