<design-context>
---
version: alpha
name: BelkaCar-design-analysis
description: "A map-first car-sharing interface built from cool cobalt blue, white floating sheets, black utility type, bright pink tariff contrast, and realistic vehicle cutouts. Discovery, reservation, inspection, active rental, parking, support, and completion remain centered on the live map and current car state."
colors:
  primary: "#1E5CCE"
  on-primary: "#FFFFFF"
  primary-hover: "#174CAA"
  primary-soft: "#E5EEFF"
  accent-pink: "#F02D8A"
  accent-red: "#F04444"
  accent-green: "#24A866"
  ink: "#111319"
  ink-muted: "#737984"
  ink-subtle: "#A7ADB6"
  canvas: "#F3F5FA"
  surface-1: "#FFFFFF"
  surface-2: "#E9EDF4"
  hairline: "#DCE1EA"
  semantic-success: "#24A866"
  semantic-danger: "#F04444"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.9px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 7px, sm: 11px, md: 15px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.full}", padding: 12px }
  reservation-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  tariff-card: { backgroundColor: "{colors.accent-pink}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  menu-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 10px 12px }
---

## Overview

BelkaCar keeps vehicle location, service zone, route, time, and cost visible on the map. White sheets handle reservation and rental state; blue progresses the trip, pink distinguishes longer tariffs, and red ends it.

**Key Characteristics:**
- Full-screen live map.
- Floating white controls and sheets.
- Realistic vehicle cutouts and map markers.
- Blue trip progression, pink tariff contrast.
- Explicit inspection and completion checklists.

## Colors

### Brand & Accent
- **Belka Blue** ({colors.primary}): Reservation, trip progression, and brand.
- **Tariff Pink** ({colors.accent-pink}): Long fixed tariff.
- **Red** ({colors.accent-red}): End trip and problems.
- **Green** ({colors.accent-green}): Valid zone and completion.

### Surface
- **Canvas** ({colors.canvas}): Map and app background.
- **Surface 1** ({colors.surface-1}): Sheets, menus, and controls.
- **Surface 2** ({colors.surface-2}): Disabled action and secondary status.
- **Hairline** ({colors.hairline}): List separation.

### Text
- **Ink** ({colors.ink}): Vehicle, cost, and actions.
- **Ink Muted** ({colors.ink-muted}): Address, tariff, and help.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Valid inspection and completed state.
- **Danger** ({colors.semantic-danger}): Problem and trip completion.
- **Overlay** ({colors.semantic-overlay}): Menu and modal focus.

## Typography

### Font Family

- **SF Pro Display** — cost and major state headings.
- **SF Pro Text** — map labels, checklists, and menus.
- **SF Mono** — trip or vehicle codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Live cost |
| `{typography.headline}` | 22px | 700 | Vehicle or state heading |
| `{typography.card-title}` | 16px | 600 | Tariff and checklist title |
| `{typography.body}` | 14px | 400 | Address and help rows |
| `{typography.caption}` | 10px | 400 | Map and timing metadata |
| `{typography.button}` | 14px | 600 | Reserve, start, pause, finish |

### Principles

- Keep current price and time prominent.
- Use imperative labels for trip steps.
- Show address and distance together.
- Keep map labels compact.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px sheet gutters, 12px control gaps, and 16px sheet padding.

### Grid & Container

The map fills the viewport. Controls float at edges; a bottom sheet expands from vehicle preview to reservation, inspection, active rental, pause, and completion.

### Whitespace Philosophy

Maps provide ambient detail; sheets must stay uncluttered so the next physical-world action is obvious.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Full map | Spatial base |
| 1 | Circular white control | Zoom, location, layers |
| 2 | White rounded sheet | Vehicle and rental state |
| 3 | Blue menu header or modal scrim | Account and confirmation |

### Decorative Depth

Use realistic vehicle cutouts and map perspective. Avoid decorative shadows beyond floating control separation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 7px | Tags and fields |
| `{rounded.sm}` | 11px | Tariff cards |
| `{rounded.md}` | 15px | Buttons and status cards |
| `{rounded.lg}` | 20px | Bottom sheets and menu |
| `{rounded.pill}` | full | Search and promo bars |
| `{rounded.full}` | full | Map controls |

### Photography & Illustration Geometry

Use realistic isolated vehicle cutouts on reservation sheets and tiny top-down vehicle markers on maps. Do not invent decorative illustration.

## Components

### Buttons

Blue reserves, starts, resumes, or confirms. Pink selects day tariff. Red ends a trip. Disabled state is pale gray and must explain prerequisites.

### Pricing Tabs

Per-minute and daily tariffs appear as adjacent high-contrast cards. Filters, radar, zones, and guest mode sit in a floating tool panel.

### Cards & Containers

Reservation sheets pair route, vehicle cutout, tariff, fuel, insurance, and bonuses. Active rental sheets show time, cost, help, and trip actions.

### Inputs & Forms

Registration and verification use one field or document task per screen. Inspection uses photo count, checklist, problems, and a fixed next action.

### Status & Build Page

Show free reservation time, verification, fuel, documents, inspection progress, pause, zone, cost, debt, rating, bonus, and completion state explicitly.

### Navigation

The map uses hamburger, promo, tools, and location controls. A slide-out menu holds history, payment, support, insurance, promo codes, FAQ, business, and account.

### Footer

The active bottom sheet is the footer; it always exposes the next safe physical-world action.

## Do's and Don'ts

### Do

- Keep map, vehicle, and zone visible.
- Show current cost throughout rental.
- Require inspection before driving.
- Make pause and finish distinct.
- Keep support and refueling guidance close.

### Don't

- Don't cover the map with tall static chrome.
- Don't hide parking restrictions.
- Don't use pink for safety-critical actions.
- Don't allow finish without checklist state.
- Don't replace vehicle evidence with illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Dock sheet beside map |
| Compact | 390–767px | Default bottom sheet |
| Small | <390px | Collapse secondary help rows |

### Touch Targets

Keep map controls, vehicle markers, tariff cards, checklist rows, and trip actions at least 44px.

### Collapsing Strategy

Collapse the sheet before shrinking map controls. Preserve cost, time, vehicle, and next action in the compact state.

### Image Behavior

Contain vehicle cutouts and preserve the full silhouette. Maps fill available space and maintain readable labels and controls.

## Iteration Guide

1. Establish map and floating controls.
2. Build vehicle reservation sheet.
3. Add inspection and active rental.
4. Add pause, parking, and completion.
5. Add menu, history, payments, and support.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 83 flow names were inventoried; onboarding, map, reservation, active rental, completion, and menu were image-reviewed.
- Vehicle unlocking, GPS accuracy, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
