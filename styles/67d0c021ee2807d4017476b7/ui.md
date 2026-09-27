<design-context>
---
version: alpha
name: Yandex-Weather-design-analysis
description: "A data-rich weather interface that combines atmospheric full-screen gradients, translucent rounded cards, map layers, compact hourly charts, and precise utility sheets. Contextual color changes with conditions while white data panels protect readability."
colors: { primary: "#3F80F7", on-primary: "#FFFFFF", primary-hover: "#2F6FDE", primary-soft: "#DDEBFF", accent: "#FF5A3C", ink: "#20242A", ink-muted: "#737981", ink-subtle: "#ADB3BA", canvas: "#EEF4FC", surface-1: "#FFFFFF", surface-2: "#EEF1F5", hairline: "#DDE2E8", semantic-success: "#38B867", semantic-warning: "#FFD43B", semantic-danger: "#F04444", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 44px, fontWeight: 700, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: Yandex Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: Yandex Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: Yandex Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  weather-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 9px 12px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Yandex Weather combines an atmospheric forecast dashboard with detailed maps, specialized indices, and hourly data.

## Colors

### Brand & Accent
Use sky blue as the stable accent while condition, map, pollen, and warning colors encode live context.

### Surface
Place translucent blue cards over atmospheric backgrounds and use white sheets for detailed reading.

### Text
Use dark ink on white, white on dark weather fields, and gray for units and secondary values.

### Semantic
Use green, yellow, orange, and red for increasing activity or danger; keep legends visible.

## Typography

### Font Family
Use Yandex Sans for forecast, map, and utility information.

### Hierarchy
Use 34–44px for current temperature, 22px for section titles, 16px for metrics, 14px body, and 10–12px units.

### Principles
Pair every value with a clear unit, time, place, or legend.

### Note on Font Substitutes
Use the platform sans or Inter with tabular numerals.

## Layout

### Spacing System
Use a 4px base, 14px gutters, 10–12px card gaps, and 14px panel padding.

### Grid & Container
Home stacks current conditions, metric cards, hourly forecast, and narrative; detail uses tables, sheets, and full-screen maps.

### Whitespace Philosophy
Keep current conditions spacious and allow detailed forecast tables to become denser.

## Elevation & Depth
Use translucent layered cards, lifted sheets, and floating map controls.

### Decorative Depth
Use soft atmospheric gradients, map overlays, and condition icons rather than ornamental effects.

## Shapes

### Border Radius Scale
Use 10px for chips, 14px for metric cards, 20px for sheets, and pills for map controls.

### Photography & Illustration Geometry
Contain condition icons and reward objects; let maps and sky fields fill the available canvas.

## Components

### Buttons
Use dark pill actions for rewards and white floating controls for maps and sheets.

### Pricing Tabs
Use day tabs, pollen species tabs, map-layer selectors, and compact forecast chips.

### Cards & Containers
Use current-weather, metric, hourly, city, pollen, map, and detailed-table cards.

### Inputs & Forms
City search and favorites management use large rows with visible current location.

### Status & Build Page
Show current, feels-like, hourly, sunset, water, UV, pollen, precipitation, and warning state with units.

### Navigation
Use city search for location changes and focused back navigation for maps and specialized forecasts.

### Footer
Prefer contextual horizontal timelines and map legends over a persistent global footer.

## Do's and Don'ts

### Do
- Pair data with units and time.
- Keep map legends visible.
- Use color consistently across risk levels.

### Don't
- Don't rely on color alone for warnings.
- Don't crowd the current-condition header.
- Don't hide forecast uncertainty.

## Responsive Behavior

### Breakpoints
Use horizontal metric rails on phones, grid panels on tablet, and a split map-detail view on desktop.

### Touch Targets
Keep city, tabs, cards, layers, zoom, timelines, and close controls at least 44px.

### Collapsing Strategy
Preserve location, current condition, next hours, warnings, and map legend; collapse secondary indices first.

### Image Behavior
Scale maps fluidly, contain condition icons, and keep decorative reward art secondary to live data.

## Iteration Guide
1. Build current conditions, hourly forecast, city search, and favorites.
2. Add detailed metrics, warnings, and specialized forecasts.
3. Add precipitation, pollen, snow, and reward map layers.

## Known Gaps
- Tokens were inferred visually from representative mobile screens.
- All 102 image screens were inventoried; 9 distributed screens were image-reviewed.
- Named flow metadata was unavailable through the gallery.

</design-context>
