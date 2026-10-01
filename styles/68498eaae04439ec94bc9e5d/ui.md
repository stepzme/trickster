<design-context>
---
version: 1
platform: iOS
name: yandex-maps-design-analysis
description: "A cartography-first mobile interface that keeps a detailed pale map visible beneath white floating controls and rounded bottom sheets. Blue navigation actions, a purple search/Alice accent, green contextual actions, colored route lines, compact place metadata, and sparse 3D onboarding objects create a practical location system with approachable guidance."
colors:
  primary: "#2F73F6"
  on-primary: "#FFFFFF"
  search-accent: "#7448E8"
  contextual-green: "#4EBB32"
  marker-red: "#F04438"
  route-green: "#43B967"
  route-blue: "#3478F6"
  route-alt: "#253D8F"
  ink: "#18191B"
  ink-muted: "#6E7075"
  ink-subtle: "#A4A6AB"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F5"
  surface-2: "#EDEDEF"
  surface-3: "#DFE1E3"
  hairline: "#E3E4E6"
  semantic-danger: "#E14B45"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: YS Text, fontSize: 36, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: YS Text, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: YS Text, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: YS Text, fontSize: 21, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  route-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  contextual-button: { backgroundColor: "{colors.contextual-green}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [13, 16]}
  map-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", size: 44 }
  bottom-dock: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: [10, 12]}
  place-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  route-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10 }
  category-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [7, 10]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16 }
---

# Overview

Yandex Maps treats cartography as the permanent canvas. Search, categories, place facts, routes, and account utilities float above it in white controls and rounded sheets. Blue means navigation, purple marks search/Alice, and green marks contextual commercial actions.

**Key Characteristics:**
- Detailed pale map as the base.
- White floating controls and bottom dock.
- Rounded place and route sheets.
- Blue route actions and multicolor paths.
- Sparse 3D onboarding objects.

# Non-negotiable visual invariants

- The reference consistently shows detailed pale map as the base.
- Navigation consistently uses white floating controls and bottom dock.
- The reference consistently shows rounded place and route sheets.
- The reference consistently shows blue route actions and multicolor paths.
- The reference consistently shows sparse 3D onboarding objects.

# Color and surfaces

### Brand & Accent
- **Navigation Blue** ({colors.primary}): Route, start, selected tab, and primary navigation.
- **Search Purple** ({colors.search-accent}): Search assistant entry.
- **Context Green** ({colors.contextual-green}): Excursion and favorable place actions.
- **Marker Red** ({colors.marker-red}): Selected destination or warning marker.

### Surface
- **Canvas** ({colors.canvas}): Sheets, controls, and cards.
- **Surface 1** ({colors.surface-1}): Search, categories, review summaries, and inactive modes.
- **Surface 2/3**: Pressed and nested states.
- **Hairline** ({colors.hairline}): Place detail and route separation.

### Text
- **Ink** ({colors.ink}): Place, route, time, and action labels.
- **Ink Muted** ({colors.ink-muted}): Category, distance, address, and supporting facts.
- **Ink Subtle** ({colors.ink-subtle}): Empty and inactive states.

### Semantic
- **Danger** ({colors.semantic-danger}): Closures, delays, and warnings.
- **Overlay** ({colors.semantic-overlay}): Photo and modal context.

# Typography

### Font Family

- **YS Text** — search, place cards, route planning, categories, and account tools.
- Map labels remain part of the cartographic system.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36 points | 700 | Rare onboarding statement |
| `{typography.display-md}` | 25 points | 700 | Major onboarding or place score |
| `{typography.headline}` | 21 points | 700 | Place and route title |
| `{typography.card-title}` | 16 points | 600 | Card title and ETA |
| `{typography.body}` | 14 points | 400 | Place and route facts |
| `{typography.caption}` | 11 points | 400 | Map and category metadata |

### Principles

- Keep place names and ETA strongest.
- Use compact labels in map controls.
- Avoid competing with map labels.
- Pair numeric ratings with explicit context.

### Note on Font Substitutes

Use **SF Pro** on iOS or **Inter** when YS Text is unavailable.

# Screen composition

### Spacing System

Use a 4 points base. Floating controls use 8–12 points gaps; sheets use 16 points gutters; sticky actions use 12 points outer spacing.

### Grid & Container

The map fills the viewport. Controls cluster along the right edge and bottom. Place and route information uses a single sheet that can grow vertically.

### Whitespace Philosophy

Preserve map visibility around controls. Inside sheets, use compact vertical rhythm so more location context remains visible.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Detailed map | Base |
| 1 | White floating control | Zoom, layer, location |
| 2 | Rounded white dock or sheet | Search, place, route |
| 3 | Photo header or 3D map object | Place and onboarding depth |

### Decorative Depth

Use light ambient shadows on floating controls and sheets. The map and optional 3D landmarks carry visual richness.

# Navigation appearance

Search, category shortcuts, and service icons form the bottom dock. Menu and profile open as white sheets while map context remains behind.

# Components

### Buttons

Primary route actions are blue. Contextual commercial actions may be green. Utility controls stay white with dark icons.

### Cards & Containers

Place sheets combine title, category, rating, summary, hours, distance, offers, and actions. Review and visitation modules use pale nested cards.

### Inputs & Forms

Search uses a large pale field with a purple assistant control. Origin and destination form a stacked route pair.

# Imagery and icons

Use light ambient shadows on floating controls and sheets. The map and optional 3D landmarks carry visual richness.

Place photos use wide cover crops above a sheet. Onboarding landmarks use a centered isometric object inside a rounded map crop.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Route cards expose time, distance, price, traffic, and delays. Selected place and live location use distinct map markers.

# iOS adaptation

### Touch Targets

Keep map controls, search, route modes, sheet actions, and category chips at least 44 points.

### Collapsing Strategy

Move detail into the scrollable sheet, never into smaller map labels. Preserve the primary route action at full width.

### Image Behavior

Cover place photos, contain 3D onboarding objects, and preserve map rendering at native vector resolution.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't obscure the full map with fixed chrome.
- Don't use purple for route confirmation.
- Don't collapse distinct route alternatives into one value.
- Don't use decorative shadows stronger than map contrast.
- Don't replace place photos with generic art.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
