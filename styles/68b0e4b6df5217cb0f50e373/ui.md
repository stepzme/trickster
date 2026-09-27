<design-context>
---
version: alpha
name: RZD-Passengers-design-analysis
description: "A utilitarian rail-booking interface dominated by a vivid red application bar, white transaction surfaces, cool gray work areas, and compact timetable data. Hierarchy comes from strong red actions, uppercase route labels, thin dividers, and persistent booking controls rather than decorative cards."

colors:
  primary: "#E33A2D"
  on-primary: "#FFFFFF"
  primary-hover: "#EF5145"
  primary-dark: "#B72C25"
  ink: "#2F363C"
  ink-muted: "#70777D"
  ink-subtle: "#A4A9AD"
  canvas: "#F1F2F3"
  surface-1: "#FFFFFF"
  surface-2: "#D7DADD"
  surface-dark: "#56606A"
  hairline: "#D9DDE0"
  semantic-success: "#78BF84"
  semantic-warning: "#D9B54A"
  semantic-danger: "#D83B32"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.4px
  display-lg:
    fontFamily: System Sans
    fontSize: 27px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.2px
  display-md:
    fontFamily: System Sans
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  headline:
    fontFamily: System Sans
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  card-title:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.2px
  button:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0.3px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 18px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  button-secondary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 14px 16px
  route-field:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: 10px 12px
  train-row:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 12px
  passenger-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px
  top-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 70px
  side-menu:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: 20px
---

## Overview

RZD Passengers is a dense rail transaction tool. A strong red application bar and CTA system frame white booking surfaces, cool gray work areas, compact train data, and route-oriented forms. The design prioritizes timetable comparison and completion over visual novelty.

**Key Characteristics:**
- Persistent red top bar and red booking actions.
- White rows and forms on cool gray backgrounds.
- Compact route, date, carriage, and price information.
- Minimal rounding except for primary CTAs and contained passenger data.
- Dark gray side menu for broad product navigation.

## Colors

### Brand & Accent

- **Rail Red** ({colors.primary}) carries the application bar, primary action, selection, and urgent emphasis.
- **Dark Red** ({colors.primary-dark}) is reserved for pressed or stronger action states.

### Surface

- **Canvas** ({colors.canvas}) is the default work background.
- **Surface 1** ({colors.surface-1}) holds fields, rows, cards, and dialogs.
- **Surface 2** ({colors.surface-2}) is used for inactive route areas and separators.
- **Dark Surface** ({colors.surface-dark}) carries the side navigation and secondary anchored actions.

### Text

- **Ink** ({colors.ink}) carries routes, dates, prices, and body content.
- **Muted** ({colors.ink-muted}) is for explanations and secondary timing.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and disabled values.

### Semantic

Muted green indicates availability or confirmation, yellow calls attention to fare or bonus information, and red handles validation and destructive states as well as the brand action system.

## Typography

### Font Family

Use a compact neutral system sans. Keep timetable data and form content straightforward; do not add a decorative display family.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 32px | 700 | Empty-state or onboarding heading |
| `{typography.display-lg}` | 27px | 700 | Major route result |
| `{typography.display-md}` | 23px | 700 | Screen or modal title |
| `{typography.headline}` | 20px | 700 | Section heading |
| `{typography.card-title}` | 16px | 600 | Train, card, or passenger title |
| `{typography.body}` | 14px | 400 | Default route and form content |
| `{typography.caption}` | 10px | 400 | Station, fare, and timing metadata |

### Principles

- Keep city and station labels compact and scannable.
- Use weight for price, departure, arrival, and totals.
- Reserve uppercase for short route or navigation labels.
- Keep explanatory text quieter than transaction data.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve compact widths and clear numerals; avoid rounded fonts that weaken the utilitarian tone.

## Layout

### Spacing System

Use a 4px base with 12px screen gutters, 8px row gaps, and 16–24px between major booking groups. Dense schedules may use tighter vertical rhythm than profile screens.

### Grid & Container

The product is a single-column mobile stack. Search results, carriage details, passenger forms, and settings use full-width rows. Seat maps may split details and the carriage diagram within the same viewport.

### Whitespace Philosophy

Whitespace is functional and compact. Preserve enough separation to scan routes and prices, but do not create large decorative gaps inside booking tasks.

## Elevation & Depth

Hierarchy comes from strong color bands, white panels, dividers, and overlays. Shadows are minimal; dialogs and the side menu use clear overlay separation.

### Decorative Depth

Use full-screen seasonal photography only for onboarding. Inside the product, rely on panel overlap, tonal grouping, and the carriage diagram rather than decoration.

## Shapes

### Border Radius Scale

- Primary CTAs are pill-shaped.
- Passenger cards and dialogs use 8–12px corners.
- Rows, fields, calendars, and app bars stay mostly square.
- Floating add and zoom controls may be circular.

### Photography & Illustration Geometry

Photography may fill an onboarding screen with white overlaid copy. Operational illustrations should remain simple dark line symbols centered in empty states; diagrams remain precise and rectangular.

## Components

### Buttons

Use a red full-width pill for the next booking step. Dark gray rectangular controls can support cancel or secondary paths. Native controls may be used internally, but they must inherit this red, gray, compact-radius, and typography system.

### Pricing Tabs

Dates, carriage classes, and card types use compact segmented rows or horizontal tabs. The selected option gains red emphasis or a white selected surface; prices remain visible during comparison.

### Cards & Containers

Train rows expose route, departure, arrival, duration, class, and price with thin dividers. Passenger data uses small white rounded cards. Empty ticket and card states pair a centered line icon with one red CTA.

### Inputs & Forms

Route, passenger, and profile forms use full-width rows with labels above values or aligned inline. Validation stays near the affected row, and long legal confirmations remain grouped immediately before booking.

### Status & Build Page

Ticket and booking status should precede supporting detail. Cart, ticket history, and support use restrained empty or conversation states; avoid promotional content inside unresolved transactions.

### Navigation

The red top bar contains menu, title or account state, cart, and filter access. A dark gray side menu exposes tickets, passengers, cards, timetable, support, settings, and other rail services.

### Footer

There is no marketing footer. Long transaction screens end with a safe-area-aware red action bar or the final informational row.

## Do's and Don'ts

### Do

- Keep route, time, class, and price readable at a glance.
- Use red for the main transaction path.
- Preserve compact information density.
- Keep seat and carriage diagrams precise.
- Maintain booking context across passenger and payment steps.

### Don't

- Do not turn timetable rows into oversized lifestyle cards.
- Do not add decorative colors to fare comparison.
- Do not round every field and row.
- Do not hide the next action after a long form.
- Do not expose default blue iOS controls.

## Responsive Behavior

### Breakpoints

Keep the booking stack single-column. On wider phones, allow carriage details and the seat diagram to share space only if both remain legible.

### Touch Targets

Navigation, checkboxes, date choices, seat cells, and anchored actions require at least 44px targets even when the visual information is dense.

### Collapsing Strategy

Permit horizontal scrolling for nearby dates or carriage tabs. Keep the main route summary and booking action visible while deeper fare or passenger content scrolls.

### Image Behavior

Crop onboarding photography to fill the viewport while keeping the train and headline visible. Do not use photography within schedule or form rows.

## Iteration Guide

Start with the red app bar, white transaction rows, gray canvas, and anchored booking CTA. Add search, timetable, passenger, and carriage structures before secondary profile or card features. Favor clarity over new visual patterns.

## Known Gaps

The reviewed scenarios cover onboarding, search, ticket purchase, cart, ticket history, cards, profile, support, and settings. Tablet layouts, accessibility text expansion, dark mode, and all payment failure states were not visible.
