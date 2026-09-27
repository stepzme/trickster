<design-context>
---
version: alpha
name: Citydrive-design-analysis
description: "A map-first car-sharing interface combining a very light 2GIS map, deep-navy control docks, vivid green booking actions, purple active-rental actions, black totals, and clean vehicle cutouts. Search, radar, car detail, tariffs, inspection, active rental, completion, long-term rental, balance, support, and zones remain operational and safety-led."
colors:
  primary: "#2CCB66"
  on-primary: "#FFFFFF"
  primary-hover: "#22AB54"
  primary-soft: "#E8F9EE"
  accent: "#6D27E8"
  accent-secondary: "#080720"
  ink: "#17181A"
  ink-muted: "#70757A"
  ink-subtle: "#A5AAAE"
  canvas: "#F7F8F9"
  surface-1: "#FFFFFF"
  surface-2: "#EFF1F3"
  hairline: "#DDE1E4"
  semantic-success: "#2CCB66"
  semantic-danger: "#D83D4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Citydrive uses the map as the live operating surface and bottom sheets for vehicle, tariff, inspection, door, and rental decisions.

**Key Characteristics:**
- Very light full-screen map.
- Deep-navy bottom dock.
- Green booking and door actions.
- Purple active-rental completion.
- Real vehicle cutouts and map markers.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Booking, opening, confirmation, and permitted progress.
- **Accent** ({colors.accent}): Active rental and end-rental emphasis.
- **Secondary Accent** ({colors.accent-secondary}): Persistent map dock and dark operational chrome.

### Surface
- **Canvas** ({colors.canvas}): Map, menus, history, and account.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Display** — cost, vehicle, and task headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep vehicle, location, cost, and rental state visible.
- Use green for safe forward action.
- Use purple only during active rental.
- Separate map context from detail sheets.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

A full-screen map supports floating search controls and a deep bottom dock. Vehicle, booking, and rental details rise in bottom sheets without replacing the map.

### Whitespace Philosophy

Keep map controls sparse and sheets compact enough to preserve geographic context.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use sheet elevation over the map and isolated real vehicle cutouts. Avoid decorative depth.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Use accurate vehicle cutouts and user-captured inspection photos. Maps remain functional, with clear zone lines and markers.

## Components

### Buttons

Green commits booking and door actions; purple ends an active rental; dark neutral buttons handle secondary vehicle control.

### Pricing Tabs

Carsharing, long-term rental, and menu use the bottom dock. Tariffs and filters use compact selectable cards.

### Cards & Containers

Vehicle sheets show model, plate, fuel, walk time, insurance, tariff, and price. Active rental keeps live cost and door state visible.

### Inputs & Forms

Registration, documents, promo, address, payment, comments, and support use focused forms with explicit validation.

### Status & Build Page

Show available, reserved, inspecting, doors open or closed, active, ending, completed, debt, zone, and radar search through label plus color.

### Navigation

Map and bottom dock anchor the experience; menu holds balance, payment, trips, fines, support, zones, promos, and useful tools.

### Footer

The dock stays above the safe area on map views; active-rental controls occupy the lower sheet.

## Do's and Don'ts

### Do

- Preserve live map context.
- Show running cost.
- Make door state explicit.
- Require inspection before driving.
- Keep zone boundaries visible.

### Don't

- Don't use car images as decoration.
- Don't hide tariff changes.
- Don't reuse purple outside active rental.
- Don't obscure the map with tall sheets.
- Don't end rental without confirmation.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44px.

### Collapsing Strategy

Preserve map, vehicle, running cost, door state, and active action. Collapse secondary car attributes first.

### Image Behavior

Contain the full vehicle cutout and preserve inspection photos as evidence. Let the map crop fluidly around active markers and zones.

## Iteration Guide

1. Build map and vehicle discovery.
2. Add car detail and tariffs.
3. Add booking and inspection.
4. Add active rental and door controls.
5. Add completion, history, radar, zones, and menu.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 94 available flow names were inventoried; main, car detail, booking, active rental, and completion were image-reviewed.
- Live GPS updates, document recognition, and photo validation were not directly assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
