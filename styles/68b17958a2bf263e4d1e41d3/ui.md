<design-context>
---
version: alpha
name: Yandex-Metro-design-analysis
description: "A dark, map-first navigation system built from near-black charcoal, crisp white labels, authentic metro-line colors, and bright green active-route emphasis. Translucent rounded sheets preserve network context while revealing itinerary detail."

colors:
  primary: "#32D26E"
  on-primary: "#08110B"
  primary-pressed: "#25B95C"
  ink: "#FFFFFF"
  ink-muted: "#C5C7CC"
  ink-subtle: "#8E9198"
  canvas: "#111214"
  surface-1: "#1C1D20"
  surface-2: "#282A2E"
  surface-3: "#34363B"
  hairline: "#45484E"
  semantic-success: "#32D26E"
  semantic-warning: "#F2C94C"
  semantic-danger: "#F05252"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 34px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: YS Text, fontSize: 28px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5px }
  display-md: { fontFamily: YS Text, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: YS Text, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.15px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 56px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  route-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 13px 16px }
  station-badge: { backgroundColor: "{colors.surface-3}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 6px }
  map-controls: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10px }
---

## Overview

Yandex Metro is a night-mode transit tool where the network diagram is the product, not a decorative background.

## Colors

Use charcoal surfaces and white labels, preserving official line colors. Reserve fluorescent green for the currently chosen route.

### Brand & Accent

Use green to connect route segments, duration, and confirmation. Do not recolor the underlying metro lines to match the brand.

### Surface

Use a near-black map canvas, dark translucent sheets, and slightly lighter controls with thin cool-gray separators.

### Text

Use white for station and route names, light gray for secondary instructions, and muted gray for inactive controls.

### Semantic

Use green for the active route, red for disruptions, yellow for warnings, and route colors only for transport identity.

## Typography

Typography is compact and functional, designed to remain legible over complex network geometry.

### Font Family

Use YS Text or a neutral system sans with clear small-size Cyrillic and numerals.

### Hierarchy

Use 22–28px route duration, 17–20px sheet titles, 14–16px station names, and 11–13px transfer or exit metadata.

### Principles

Keep station names concise, align time and transfer facts consistently, and never let labels overpower route geometry.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; verify legibility at 11–12px on dark surfaces.

## Layout

Treat the map as a full-screen canvas with bottom-origin sheets that expand from search to route detail.

### Spacing System

Use a 4px base, 8–12px within route rows, 16px sheet padding, and 24px between itinerary groups.

### Grid & Container

The map is edge-to-edge; sheets use one vertical column with aligned time, line, station, and transfer data.

### Whitespace Philosophy

Keep controls compact to protect map visibility, but give every itinerary step enough vertical separation to trace the journey.

## Elevation & Depth

Use translucent sheets, soft top shadows, and dimmed map regions to separate route detail without abandoning location context.

### Decorative Depth

Do not add decorative imagery. Depth comes from layered map, route highlight, markers, and sliding sheets.

## Shapes

Use rounded sheets and search pills, circular map controls, and geometric line and station markers.

### Border Radius Scale

Use 10px for compact controls, 14px for search and rows, 24–30px for sheet tops, and circles for map actions and A/B markers.

### Photography & Illustration Geometry

There is no photography. Preserve geographic and network geometry; keep icons small, symbolic, and aligned with the map grid.

## Components

Native scrolling and sheets are acceptable, but controls must inherit the dark surfaces, route colors, radii, and type hierarchy.

### Buttons

Use green filled route actions, dark secondary pills, and circular map controls. Avoid default platform blue.

### Pricing Tabs

There is no pricing. Use compact segmented route options and transport chips when multiple journeys are available.

### Cards & Containers

Route cards show duration, transfers, line colors, and alerts; station sheets group exits and adjacent services.

### Inputs & Forms

Use a rounded dark search field with clear From and To states, large A/B markers, and focused suggestion lists.

### Status & Build Page

Show closures, delays, transfer walking, carriage advice, and service disruptions inline with the affected line or step.

### Navigation

The map is home. Search, route, station, messages, and settings appear as overlays or secondary pages rather than a tab bar.

### Footer

There is no footer; city selection, map settings, legal information, and feedback belong to Settings.

## Do's and Don'ts

Protect spatial comprehension and route continuity.

### Do

- Preserve official line colors.
- Keep the map visible while choosing a route.
- Make origin, destination, and active route unmistakable.
- Style native sheets and controls in the Metro system.

### Don't

- Do not add ornamental color.
- Do not cover the full map prematurely.
- Do not rely on color without labels.
- Do not use default light native controls.

## Responsive Behavior

Use wider screens to show more network and route detail simultaneously.

### Breakpoints

Phones use bottom sheets; larger screens may place the itinerary in a side panel while the map remains interactive.

### Touch Targets

Stations, A/B fields, route options, sheet handles, exits, settings, and map controls require at least 44px.

### Collapsing Strategy

Keep endpoints, duration, transfer count, active line, and disruption status; collapse exit detail and secondary services first.

### Image Behavior

The map is vector-like and must scale crisply without changing line relationships or hiding labels under controls.

## Iteration Guide

Start with city selection, map, station search, route creation, route comparison, itinerary, and station sheet. Add disruptions, carriage guidance, taxi links, and settings next.

## Known Gaps

All five available flows were reviewed across first launch, route search, map selection, service messages, and settings. Live location animation and city-specific map variations were not exhaustively represented.

</design-context>

Use the design system above for all UI you generate.
