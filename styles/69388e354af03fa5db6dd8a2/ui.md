<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9px, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 9px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.15px }
  mono: { fontFamily: System Mono, fontSize: 10px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  forecast-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xl}", padding: 12px }
  map-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10px }
  data-cell: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.xs}", padding: 5px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

WindHub places scientific marine data over a bright map and compresses forecasts into a highly structured white sheet. Cyan keeps navigation and action coherent across weather, fishing, and routes.

## Colors

### Brand & Accent

Cyan owns primary action, selected navigation, saved state, and onboarding progress. Orange marks warnings and subscription offers.

### Surface

Use white sheets and controls over full-color maps, with pale cyan selection cards and very light gray settings surfaces.

### Text

Use near-black for forecast values and headings, gray for labels and units, and white on cyan or orange action.

### Semantic

Use the weather legend itself for magnitude: blue and green low, yellow moderate, red and violet high. Do not reuse these colors for unrelated status.

## Typography

### Font Family

Use a compact system sans and tabular or monospaced numerals inside dense forecast tables.

### Hierarchy

Use 25–32px onboarding headings, 20px screen headings, 13–17px location and actions, and 9–11px technical cells.

### Principles

Keep model, time, unit, value, direction, and warning aligned. Use bold only for location, current value, and primary warning.

### Note on Font Substitutes

Use Inter for UI and SF Mono or JetBrains Mono for compact tabular data.

## Layout

### Spacing System

Use a 4px base, 12–16px sheet padding, 8px between controls, and 2–4px between data cells.

### Grid & Container

Maps fill the upper view; forecast sheets expand from bottom. Tables use time columns and metric rows; onboarding uses one decision per screen.

### Whitespace Philosophy

Technical tables may be dense, but map controls and settings should remain sparse. Keep clear separation between forecast groups.

## Elevation & Depth

Use raised white sheets, circular map controls, and thin shadows over the map. Avoid additional layers within data tables.

### Decorative Depth

Use real marine photography, map texture, and UI mockups in onboarding. Do not add decorative illustration to technical working views.

## Shapes

### Border Radius Scale

Use 8px selectors, 12px onboarding cards, 16px data panels, 22px bottom sheets, and circles for map controls.

### Photography & Illustration Geometry

Crop marine photos as compact rounded rectangles. Preserve map and chart geometry; use `contain` for fish silhouettes and weather icons.

## Components

### Buttons

Primary onboarding, save, and purchase actions are cyan rounded rectangles. Subscription promotion may use orange. Native controls must inherit these colors and radii.

### Pricing Tabs

Weather models, map quality, layers, dates, and fishing species use compact chips, toggles, or horizontal strips with cyan selected state.

### Cards & Containers

Forecast sheets contain location header, date strip, warning, and a matrix of icons, values, arrows, swell, and tide curves.

### Inputs & Forms

Search, route settings, save point, and account forms use white or pale filled rows with direct labels and one completion action.

### Status & Build Page

Show live, model, HD, small-craft advisory, saved point, route point, fish selection, tide, trial, and Pro states in direct context.

### Navigation

Use five bottom destinations for Weather, Fishing, Route, Favorites, and Menu. Selected destination uses cyan icon and label.

### Footer

There is no footer. Feedback, webinar, guide, FAQ, account, and logout live in Menu.

## Do's and Don'ts

### Do

- Keep map and forecast visibly connected.
- Align technical values into stable rows and columns.
- Make warnings impossible to confuse with normal data.
- Use cyan consistently for selection and action.

### Don't

- Do not simplify away units or model context.
- Do not add decorative color to data cells.
- Do not obscure the map with multiple sheets.
- Do not retain default native blue controls.

## Responsive Behavior

### Breakpoints

Phones use map plus expandable sheet. Wider screens may keep map, forecast table, and route or fishing panel visible side by side.

### Touch Targets

Map points, layers, model, date strip, save, species, waypoints, bottom navigation, and menu rows require at least 44px targets.

### Collapsing Strategy

Keep location, model, warning, current window, and selected tool visible. Collapse secondary metrics, guides, and settings.

### Image Behavior

Maps fill the available area. Use `cover` for marine photography and `contain` for fish, weather, route, and navigation icons.

## Iteration Guide

Start with onboarding, Weather map, point selection, model and layer controls, forecast table, Fishing spot, Route waypoints, Favorites, and Menu. Add sharing, GPX, depth charts, and subscription afterward.

## Known Gaps

All 17 catalog flows were reviewed by structure with complete representative scenarios across onboarding, weather, fishing, route planning, and settings. A few preview and transition entries are video-only.

</design-context>

Use the design system above for all UI you generate.
