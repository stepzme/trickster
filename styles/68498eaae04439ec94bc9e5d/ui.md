<design-context>
---
version: alpha
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
  display-xl: { fontFamily: YS Text, fontSize: 36px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: YS Text, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: YS Text, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: YS Text, fontSize: 21px, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  route-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  contextual-button: { backgroundColor: "{colors.contextual-green}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 13px 16px }
  map-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", size: 44px }
  bottom-dock: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 10px 12px }
  place-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  route-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px }
  category-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7px 10px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16px }
---

## Overview

Yandex Maps treats cartography as the permanent canvas. Search, categories, place facts, routes, and account utilities float above it in white controls and rounded sheets. Blue means navigation, purple marks search/Alice, and green marks contextual commercial actions.

**Key Characteristics:**
- Detailed pale map as the base.
- White floating controls and bottom dock.
- Rounded place and route sheets.
- Blue route actions and multicolor paths.
- Sparse 3D onboarding objects.

## Colors

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

## Typography

### Font Family

- **YS Text** — search, place cards, route planning, categories, and account tools.
- Map labels remain part of the cartographic system.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Rare onboarding statement |
| `{typography.display-md}` | 25px | 700 | Major onboarding or place score |
| `{typography.headline}` | 21px | 700 | Place and route title |
| `{typography.card-title}` | 16px | 600 | Card title and ETA |
| `{typography.body}` | 14px | 400 | Place and route facts |
| `{typography.caption}` | 11px | 400 | Map and category metadata |

### Principles

- Keep place names and ETA strongest.
- Use compact labels in map controls.
- Avoid competing with map labels.
- Pair numeric ratings with explicit context.

### Note on Font Substitutes

Use **SF Pro** on iOS or **Inter** when YS Text is unavailable.

## Layout

### Spacing System

Use a 4px base. Floating controls use 8–12px gaps; sheets use 16px gutters; sticky actions use 12px outer spacing.

### Grid & Container

The map fills the viewport. Controls cluster along the right edge and bottom. Place and route information uses a single sheet that can grow vertically.

### Whitespace Philosophy

Preserve map visibility around controls. Inside sheets, use compact vertical rhythm so more location context remains visible.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Detailed map | Base |
| 1 | White floating control | Zoom, layer, location |
| 2 | Rounded white dock or sheet | Search, place, route |
| 3 | Photo header or 3D map object | Place and onboarding depth |

### Decorative Depth

Use light ambient shadows on floating controls and sheets. The map and optional 3D landmarks carry visual richness.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Small chip and route option |
| `{rounded.md}` | 14px | Search, button, map control |
| `{rounded.lg}` | 18px | Place summary card |
| `{rounded.xl}` | 24px | Bottom dock and sheet |
| `{rounded.full}` | full | Avatar and circular locator |

### Photography & Illustration Geometry

Place photos use wide cover crops above a sheet. Onboarding landmarks use a centered isometric object inside a rounded map crop.

## Components

### Buttons

Primary route actions are blue. Contextual commercial actions may be green. Utility controls stay white with dark icons.

### Pricing Tabs

No pricing-plan tabs were observed. Transport modes and route alternatives use horizontal selectable cards with time and price.

### Cards & Containers

Place sheets combine title, category, rating, summary, hours, distance, offers, and actions. Review and visitation modules use pale nested cards.

### Inputs & Forms

Search uses a large pale field with a purple assistant control. Origin and destination form a stacked route pair.

### Status & Build Page

Route cards expose time, distance, price, traffic, and delays. Selected place and live location use distinct map markers.

### Navigation

Search, category shortcuts, and service icons form the bottom dock. Menu and profile open as white sheets while map context remains behind.

### Footer

Sticky route or place actions act as the footer. There is no separate content footer.

## Do's and Don'ts

### Do

- Preserve visible map context.
- Keep route time and distance explicit.
- Use blue consistently for navigation.
- Let sheets expand progressively.
- Pair ratings with count and source.

### Don't

- Don't obscure the full map with fixed chrome.
- Don't use purple for route confirmation.
- Don't collapse distinct route alternatives into one value.
- Don't use decorative shadows stronger than map contrast.
- Don't replace place photos with generic art.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Side panel may replace bottom sheet |
| Compact | 390–767px | Default map plus bottom sheet |
| Small | <390px | Scroll category shortcuts horizontally |

### Touch Targets

Keep map controls, search, route modes, sheet actions, and category chips at least 44px.

### Collapsing Strategy

Move detail into the scrollable sheet, never into smaller map labels. Preserve the primary route action at full width.

### Image Behavior

Cover place photos, contain 3D onboarding objects, and preserve map rendering at native vector resolution.

## Iteration Guide

1. Establish map and floating controls.
2. Add search dock and categories.
3. Build place sheet and actions.
4. Add route alternatives and start action.
5. Add onboarding object illustration last.

## Known Gaps

- Exact tokens and map style values were inferred visually.
- The 53-flow inventory was complete; key search/place/route flows were sampled visually.
- Live navigation motion and voice guidance were not evaluated.
- Tablet layouts were not present.

</design-context>

Use the design system above for all UI you generate.
