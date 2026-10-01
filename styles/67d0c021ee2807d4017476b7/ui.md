<design-context>
---
version: 1
platform: iOS
name: Yandex-Weather-design-analysis
description: "A data-rich weather interface that combines atmospheric full-screen gradients, translucent rounded cards, map layers, compact hourly charts, and precise utility sheets. Contextual color changes with conditions while white data panels protect readability."
colors: { primary: "#3F80F7", on-primary: "#FFFFFF", primary-soft: "#DDEBFF", accent: "#FF5A3C", ink: "#20242A", ink-muted: "#737981", ink-subtle: "#ADB3BA", canvas: "#EEF4FC", surface-1: "#FFFFFF", surface-2: "#EEF1F5", hairline: "#DDE2E8", semantic-success: "#38B867", semantic-warning: "#FFD43B", semantic-danger: "#F04444", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 44, fontWeight: 700, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: Yandex Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: Yandex Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: Yandex Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  weather-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [9, 12]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Yandex Weather combines an atmospheric forecast dashboard with detailed maps, specialized indices, and hourly data.

# Non-negotiable visual invariants

- The reference consistently shows pair data with units and time.
- The reference consistently shows map legends visible.
- Sampled screens consistently use color consistently across risk levels.
- A data-rich weather interface that combines atmospheric full-screen gradients.
- The reference consistently shows translucent rounded cards.
- The reference consistently shows map layers.
- The reference consistently shows compact hourly charts.
- Sampled screens consistently use precise utility sheets. Contextual color changes with conditions while white data panels protect readability.

# Color and surfaces

### Brand & Accent
Use sky blue as the stable accent while condition, map, pollen, and warning colors encode live context.

### Surface
Place translucent blue cards over atmospheric backgrounds and use white sheets for detailed reading.

### Text
Use dark ink on white, white on dark weather fields, and gray for units and secondary values.

### Semantic
Use green, yellow, orange, and red for increasing activity or danger; keep legends visible.

# Typography

### Font Family
Use Yandex Sans for forecast, map, and utility information.

### Hierarchy
Use 34–44 points for current temperature, 22 points for section titles, 16 points for metrics, 14 points body, and 10–12 points units.

### Principles
Pair every value with a clear unit, time, place, or legend.

### Note on Font Substitutes
Use the platform sans or Inter with tabular numerals.

# Screen composition

### Spacing System
Use a 4 points base, 14 points gutters, 10–12 points card gaps, and 14 points panel padding.

### Grid & Container
Home stacks current conditions, metric cards, hourly forecast, and narrative; detail uses tables, sheets, and full-screen maps.

### Whitespace Philosophy
Keep current conditions spacious and allow detailed forecast tables to become denser.

Surface hierarchy observed in the source:

Use translucent layered cards, lifted sheets, and floating map controls.

### Decorative Depth
Use soft atmospheric gradients, map overlays, and condition icons rather than ornamental effects.

# Navigation appearance

Use city search for location changes and focused back navigation for maps and specialized forecasts.

# Components

### Buttons

Use dark pill actions for rewards and white floating controls for maps and sheets.

### Cards & Containers

Use current-weather, metric, hourly, city, pollen, map, and detailed-table cards.

### Inputs & Forms

City search and favorites management use large rows with visible current location.

# Imagery and icons

Use soft atmospheric gradients, map overlays, and condition icons rather than ornamental effects.

Contain condition icons and reward objects; let maps and sky fields fill the available canvas.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show current, feels-like, hourly, sunset, water, UV, pollen, precipitation, and warning state with units.

# iOS adaptation

### Touch Targets

Keep city, tabs, cards, layers, zoom, timelines, and close controls at least 44 points.

### Collapsing Strategy

Preserve location, current condition, next hours, warnings, and map legend; collapse secondary indices first.

### Image Behavior

Scale maps fluidly, contain condition icons, and keep decorative reward art secondary to live data.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't rely on color alone for warnings.
- Don't crowd the current-condition header.
- Don't hide forecast uncertainty.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
