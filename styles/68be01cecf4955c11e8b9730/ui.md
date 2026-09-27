<design-context>
---
version: alpha
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 76px, fontWeight: 250, lineHeight: 0.95, letterSpacing: -2px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 52px, fontWeight: 300, lineHeight: 1.0, letterSpacing: -1px }
  display-md: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 550, lineHeight: 1.1, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Text, fontSize: 20px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.15px }
  button: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 16px }
  forecast-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  city-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px }
  search-field: { backgroundColor: "{colors.list-surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  map-control: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px }
---

## Overview

Weather turns conditions into the environment itself. Atmospheric imagery establishes mood, translucent forecast cards organize data, and the map becomes a full-screen scientific surface.

## Colors

### Brand & Accent

There is no fixed chromatic brand beyond white system chrome. Blue, cyan, violet, green, and yellow change with sky and weather layers.

### Surface

Use full-screen atmospheric imagery, translucent blue-gray cards, near-black saved-city canvas, and white floating map controls.

### Text

Use white over condition imagery, pale blue-gray for secondary labels, and black inside light map controls or system sheets.

### Semantic

Use yellow for sun and warnings, blue for rain and cold, violet for heavy precipitation, and red only for severe conditions.

## Typography

### Font Family

Use SF Pro Display and SF Pro Text with thin large numerals and compact labels.

### Hierarchy

Use 52–76px current temperature, 34px city-list temperature, 17–20px condition and row titles, and 10–14px metrics.

### Principles

Let temperature dominate without bold weight. Keep metric labels uppercase and quiet; align forecast numbers for comparison.

### Note on Font Substitutes

Use Inter with light display numerals and medium text weights when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px screen gutters, 12px card gaps, and 8px between forecast rows.

### Grid & Container

City detail is a vertical stack of full-width translucent cards. The map fills the viewport with legends and controls pinned to edges.

### Whitespace Philosophy

Keep the condition header open and cinematic. Data cards may be dense but require stable row alignment and clear grouping.

## Elevation & Depth

Use material blur, translucent overlays, soft gradients, and atmospheric parallax. Avoid opaque floating card stacks over the forecast.

### Decorative Depth

Condition imagery, animated particles, moving cloud layers, and blurred glass provide all decoration. Do not add unrelated ornaments.

## Shapes

### Border Radius Scale

Use 8px compact controls, 12px map controls, 16px forecast cards, 22px widgets, and pills for timeline markers.

### Photography & Illustration Geometry

Weather imagery fills edge to edge and may blur beneath cards. Maps remain uncropped; widgets use a soft rounded square.

## Components

### Buttons

Use light translucent or white compact controls with system glyphs. Native controls may be used, but their blur, tint, contrast, and radius must match the current weather surface.

### Pricing Tabs

Map layers and city selection use text menus, compact segments, or list choices rather than promotional tabs.

### Cards & Containers

Forecast cards use one translucent tone with hairline separation, compact labels, weather glyphs, and colored range bars.

### Inputs & Forms

City search uses a dark rounded field with magnifier and clear action. Notification setup uses a concise full-width row.

### Status & Build Page

Show current condition, severe alert, precipitation chance, map intensity, location permission, notification permission, and widget state directly.

### Navigation

Use map and list controls at the bottom of city detail; map view uses Done, location, city list, layers, and timeline controls.

### Footer

There is no footer. Weather and map data attribution stays as a small link beneath the relevant surface.

## Do's and Don'ts

### Do

- Let the current condition define the atmosphere.
- Keep forecast rows aligned and comparable.
- Use translucent materials consistently.
- Preserve the map as a full-screen tool.

### Don't

- Do not force one static background across conditions.
- Do not use heavy bold type for temperature.
- Do not add opaque white cards over the city forecast.
- Do not leave mismatched default control styling.

## Responsive Behavior

### Breakpoints

Phones use one city detail or map. Wider screens may pair city list with detail and give maps a side legend or forecast panel.

### Touch Targets

City cards, hourly items, metric cards, map layers, timeline, location, list, search, and alert controls require at least 44px targets.

### Collapsing Strategy

Keep city, current temperature, next hours, warning, and map access visible. Collapse deeper metrics below the ten-day forecast.

### Image Behavior

Use `cover` for condition photography and `fill` for map tiles. Keep weather glyphs and widgets sharp with `contain`.

## Iteration Guide

Start with location permission, saved-city list, city header, hourly and ten-day forecast, core metric cards, map layers, city search, and alerts. Add widgets and deeper metrics afterward.

## Known Gaps

All 18 catalog flows were reviewed by structure with complete representative scenarios across launch, city forecast, weather map, saved cities, notifications, and widget. Animated condition transitions are represented only by still screens.

</design-context>

Use the design system above for all UI you generate.
