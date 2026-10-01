<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: YS Text, fontSize: 34, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: YS Text, fontSize: 28, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }
  display-md: { fontFamily: YS Text, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: YS Text, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.15 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 56 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  route-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [13, 16]}
  station-badge: { backgroundColor: "{colors.surface-3}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 6 }
  map-controls: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10 }
---

# Overview

Yandex Metro is a night-mode transit tool where the network diagram is the product, not a decorative background.

# Non-negotiable visual invariants

- The reference consistently shows preserve official line colors.
- The reference consistently shows the map visible while choosing a route.
- The reference consistently shows make origin, destination, and active route unmistakable.
- The reference consistently shows style native sheets and controls in the Metro system.
- The reference consistently shows a dark.
- Navigation consistently uses map-first navigation system built from near-black charcoal.
- The reference consistently shows crisp white labels.
- The reference consistently shows authentic metro-line colors.

# Color and surfaces

Use charcoal surfaces and white labels, preserving official line colors. Reserve fluorescent green for the currently chosen route.

### Brand & Accent

Use green to connect route segments, duration, and confirmation. Do not recolor the underlying metro lines to match the brand.

### Surface

Use a near-black map canvas, dark translucent sheets, and slightly lighter controls with thin cool-gray separators.

### Text

Use white for station and route names, light gray for secondary instructions, and muted gray for inactive controls.

### Semantic

Use green for the active route, red for disruptions, yellow for warnings, and route colors only for transport identity.

# Typography

Typography is compact and functional, designed to remain legible over complex network geometry.

### Font Family

Use YS Text or a neutral system sans with clear small-size Cyrillic and numerals.

### Hierarchy

Use 22–28 points route duration, 17–20 points sheet titles, 14–16 points station names, and 11–13 points transfer or exit metadata.

### Principles

Keep station names concise, align time and transfer facts consistently, and never let labels overpower route geometry.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; verify legibility at 11–12 points on dark surfaces.

# Screen composition

Treat the map as a full-screen canvas with bottom-origin sheets that expand from search to route detail.

### Spacing System

Use a 4 points base, 8–12 points within route rows, 16 points sheet padding, and 24 points between itinerary groups.

### Grid & Container

The map is edge-to-edge; sheets use one vertical column with aligned time, line, station, and transfer data.

### Whitespace Philosophy

Keep controls compact to protect map visibility, but give every itinerary step enough vertical separation to trace the journey.

Surface hierarchy observed in the source:

Use translucent sheets, soft top shadows, and dimmed map regions to separate route detail without abandoning location context.

### Decorative Depth

Do not add decorative imagery. Depth comes from layered map, route highlight, markers, and sliding sheets.

# Navigation appearance

The map is home. Search, route, station, messages, and settings appear as overlays or secondary pages rather than a tab bar.

# Components

### Buttons

Use green filled route actions, dark secondary pills, and circular map controls. Avoid default platform blue.

### Cards & Containers

Route cards show duration, transfers, line colors, and alerts; station sheets group exits and adjacent services.

### Inputs & Forms

Use a rounded dark search field with clear From and To states, large A/B markers, and focused suggestion lists.

# Imagery and icons

Do not add decorative imagery. Depth comes from layered map, route highlight, markers, and sliding sheets.

There is no photography. Preserve geographic and network geometry; keep icons small, symbolic, and aligned with the map grid.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show closures, delays, transfer walking, carriage advice, and service disruptions inline with the affected line or step.

# iOS adaptation

### Touch Targets

Stations, A/B fields, route options, sheet handles, exits, settings, and map controls require at least 44 points.

### Collapsing Strategy

Keep endpoints, duration, transfer count, active line, and disruption status; collapse exit detail and secondary services first.

### Image Behavior

The map is vector-like and must scale crisply without changing line relationships or hiding labels under controls.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not add ornamental color.
- Do not cover the full map prematurely.
- Do not rely on color without labels.
- Do not use default light native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

All five available flows were reviewed across first launch, route search, map selection, service messages, and settings. Live location animation and city-specific map variations were not exhaustively represented.

</design-context>
