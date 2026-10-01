<design-context>
---
version: 1
platform: iOS
name: WindHub-design-analysis
description: "A bright marine-weather workstation built from cyan actions, full-screen multicolor wind maps, white forecast sheets, dense color-coded tables, black line icons, and orange warning or subscription accents. The interface balances technical data density with simple rounded map controls and a five-tool navigation bar."

colors:
  primary: "#35C5D3"
  on-primary: "#FFFFFF"
  primary-pressed: "#20AAB8"
  secondary: "#FF7650"
  ink: "#242529"
  ink-muted: "#73777D"
  ink-subtle: "#A8ABB0"
  canvas: "#FFFFFF"
  surface-1: "#F6F8F9"
  surface-2: "#EAF7F8"
  map-blue: "#40A8C7"
  map-green: "#78B85B"
  map-yellow: "#E6D44C"
  map-red: "#C7584F"
  map-violet: "#A255A0"
  hairline: "#E0E4E6"
  semantic-success: "#28A76D"
  semantic-warning: "#FF8355"
  semantic-danger: "#E44E59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 9, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.15 }
  mono: { fontFamily: System Mono, fontSize: 10, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  forecast-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xl}", padding: 12 }
  map-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10 }
  data-cell: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.xs}", padding: 5 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

WindHub places scientific marine data over a bright map and compresses forecasts into a highly structured white sheet. Cyan keeps navigation and action coherent across weather, fishing, and routes.

# Non-negotiable visual invariants

- Keep map and forecast visibly connected.
- Align technical values into stable rows and columns.
- Make warnings impossible to confuse with normal data.
- Use cyan consistently for selection and action.
- Maps fill the upper view; forecast sheets expand from bottom.
- Tables use time columns and metric rows; onboarding uses one decision per screen.
- Technical tables may be dense, but map controls and settings should remain sparse.
- Keep clear separation between forecast groups.

# Color and surfaces

Cyan owns primary action, selected navigation, saved state, and onboarding progress. Orange marks warnings and subscription offers.

Use white sheets and controls over full-color maps, with pale cyan selection cards and very light gray settings surfaces.

Use near-black for forecast values and headings, gray for labels and units, and white on cyan or orange action.

Use the weather legend itself for magnitude: blue and green low, yellow moderate, red and violet high. Do not reuse these colors for unrelated status.

# Typography

Use a compact system sans and tabular or monospaced numerals inside dense forecast tables.

Use 25–32 points onboarding headings, 20 points screen headings, 13–17 points location and actions, and 9–11 points technical cells.

Keep model, time, unit, value, direction, and warning aligned. Use bold only for location, current value, and primary warning.

Use Inter for UI and SF Mono or JetBrains Mono for compact tabular data.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12–16 points sheet padding, 8 points between controls, and 2–4 points between data cells.

Maps fill the upper view; forecast sheets expand from bottom. Tables use time columns and metric rows; onboarding uses one decision per screen.

Technical tables may be dense, but map controls and settings should remain sparse. Keep clear separation between forecast groups.

Use real marine photography, map texture, and UI mockups in onboarding. Do not add decorative illustration to technical working views.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five bottom destinations for Weather, Fishing, Route, Favorites, and Menu. Selected destination uses cyan icon and label.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary onboarding, save, and purchase actions are cyan rounded rectangles. Subscription promotion may use orange. Native controls must inherit these colors and radii.

Forecast sheets contain location header, date strip, warning, and a matrix of icons, values, arrows, swell, and tide curves.

Search, route settings, save point, and account forms use white or pale filled rows with direct labels and one completion action.

Show live, model, HD, small-craft advisory, saved point, route point, fish selection, tide, trial, and Pro states in direct context.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Crop marine photos as compact rounded rectangles. Preserve map and chart geometry; use `contain` for fish silhouettes and weather icons.

Maps fill the available area. Use `cover` for marine photography and `contain` for fish, weather, route, and navigation icons.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show live, model, HD, small-craft advisory, saved point, route point, fish selection, tide, trial, and Pro states in direct context.

Use the weather legend itself for magnitude: blue and green low, yellow moderate, red and violet high. Do not reuse these colors for unrelated status.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Map points, layers, model, date strip, save, species, waypoints, bottom navigation, and menu rows require at least 44 points targets.
- Keep location, model, warning, current window, and selected tool visible. Collapse secondary metrics, guides, and settings.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not simplify away units or model context.
- Do not add decorative color to data cells.
- Do not obscure the map with multiple sheets.
- Do not retain default native blue controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
