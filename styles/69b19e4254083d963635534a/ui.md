<design-context>
---
version: alpha
name: Yandex-Pro-design-analysis
description: "A driver operations interface built around live maps, bright yellow trip actions, black-and-white task controls, green payment status, and blue financial analysis. The system keeps location, route, timer, payment method, and earnings visible under time pressure."
colors: { primary: "#FFDD00", on-primary: "#181818", primary-hover: "#F0CE00", primary-soft: "#FFF4A3", accent: "#416BEA", ink: "#171719", ink-muted: "#73767B", ink-subtle: "#B0B3B7", canvas: "#FFFFFF", surface-1: "#F3F3F4", surface-2: "#E9EAEC", hairline: "#DDE0E3", semantic-success: "#45B97A", semantic-warning: "#FFDD00", semantic-danger: "#EF4F45", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 42px, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.9px }
  display-lg: { fontFamily: Yandex Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: Yandex Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: Yandex Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 15px 20px }
  trip-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  status-chip: { backgroundColor: "#DDF7EA", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 7px 10px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Яндекс Про supports time-critical driver work with a live route, prominent trip state, payment visibility, and transparent earnings detail.

## Colors

### Brand & Accent
Use yellow for the primary trip action, blue for navigation and income analysis, and green for confirmed payment state.

### Surface
Let the map fill the canvas and place white sheets or cards over it; use pale gray for secondary action groups.

### Text
Use near-black for route and earnings, gray for metadata, and white on strong navigation blue.

### Semantic
Use green for paid or ready state, red for cancellation and deductions, yellow for action, and blue for earnings.

## Typography

### Font Family
Use Yandex Sans for route, task, and financial information.

### Hierarchy
Use 34–42px for earnings, 22px for page titles, 16px for primary actions, 14px body, and 10–12px metadata.

### Principles
Make maneuver, distance, timer, pickup, payment, and net income readable at a glance.

### Note on Font Substitutes
Use the platform sans or Inter with tabular time and money.

## Layout

### Spacing System
Use a 4px base, 8–12px gutters, 10px gaps, and 14px sheet padding.

### Grid & Container
The active trip uses a full map with a bottom task sheet; earnings use a summary chart above dated order rows.

### Whitespace Philosophy
Keep trip screens compact and glanceable while allowing financial analysis more vertical space.

## Elevation & Depth
Use raised white sheets and floating navigation cards over the map; keep earnings panels flat.

### Decorative Depth
Map geometry, route color, and charts provide depth; avoid decoration unrelated to the task.

## Shapes

### Border Radius Scale
Use 10px for status chips, 14px for cards, 20px for sheets, and pills for the primary trip action.

### Photography & Illustration Geometry
Use map, route, vehicle, and chart symbols only; do not introduce ornamental scenes.

## Components

### Buttons
Use a wide yellow pill for Start trip and compact gray or red rows for call and cancel.

### Pricing Tabs
Use segmented controls for Comparison and Details and date controls for earnings periods.

### Cards & Containers
Use navigation cards, trip sheets, route rows, payment chips, earnings summaries, and dated order lists.

### Inputs & Forms
Keep order actions and financial filters short, explicit, and suitable for one-handed use.

### Status & Build Page
Show waiting, cash payment, route progress, timer, cancellation, orders, bonuses, tips, commissions, and net income.

### Navigation
Orders, Money, Chats, and Profile remain in the bottom bar; active navigation takes priority during a trip.

### Footer
Keep footer actions quiet and disable nonessential destinations when the trip demands focus.

## Do's and Don'ts

### Do
- Keep pickup and payment visible.
- Separate gross income from deductions.
- Make cancellation explicit and red.

### Don't
- Don't cover the active route with secondary content.
- Don't rely on tiny chart labels.
- Don't mix trip and earnings actions.

## Responsive Behavior

### Breakpoints
Use map-plus-sheet on phones, a side task panel on tablet, and split map and detail on wide screens.

### Touch Targets
Keep Start, call, cancel, route rows, tabs, calendar, and footer actions at least 44px.

### Collapsing Strategy
Preserve maneuver, route, timer, payment, and primary action; collapse secondary chat and history first.

### Image Behavior
Keep maps fluid, route contrast strong, and charts fully visible without horizontal crop.

## Iteration Guide
1. Build active trip map, task sheet, and trip controls.
2. Add orders, payments, chat, and profile navigation.
3. Add earnings comparison, deductions, and detailed history.

## Known Gaps
- Tokens were inferred visually from sampled mobile screens.
- Ride details and Detailed breakdown were reviewed as complete flows.
- Dispatch, shift start, and support flows were not sampled.

</design-context>
