<design-context>
---
version: 1
platform: iOS
name: RZD-Passengers-design-analysis
description: "A utilitarian rail-booking interface dominated by a vivid red application bar, white transaction surfaces, cool gray work areas, and compact timetable data. Hierarchy comes from strong red actions, uppercase route labels, thin dividers, and persistent booking controls rather than decorative cards."

colors:
  primary: "#E33A2D"
  on-primary: "#FFFFFF"
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
    fontSize: 32
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.4
  display-lg:
    fontFamily: System Sans
    fontSize: 27
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.2
  display-md:
    fontFamily: System Sans
    fontSize: 23
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  headline:
    fontFamily: System Sans
    fontSize: 20
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  card-title:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 10
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.2
  button:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0.3
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0

rounded:
  xs: 2
  sm: 4
  md: 8
  lg: 12
  xl: 18
  xxl: 24
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  button-secondary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: [14, 16]
  route-field:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: [10, 12]
  train-row:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 12
  passenger-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12
  top-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 70
  side-menu:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: 20
---

# Overview

RZD Passengers is a dense rail transaction tool. A strong red application bar and CTA system frame white booking surfaces, cool gray work areas, compact train data, and route-oriented forms. The design prioritizes timetable comparison and completion over visual novelty.

**Key Characteristics:**
- Persistent red top bar and red booking actions.
- White rows and forms on cool gray backgrounds.
- Compact route, date, carriage, and price information.
- Minimal rounding except for primary CTAs and contained passenger data.
- Dark gray side menu for broad product navigation.

# Non-negotiable visual invariants

- The reference consistently shows persistent red top bar and red booking actions.
- The reference consistently shows white rows and forms on cool gray backgrounds.
- The reference consistently shows compact route, date, carriage, and price information.
- The reference consistently shows minimal rounding except for primary CTAs and contained passenger data.
- Navigation consistently uses dark gray side menu for broad product navigation.

# Color and surfaces

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

# Typography

### Font Family

Use a compact neutral system sans. Keep timetable data and form content straightforward; do not add a decorative display family.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 32 points | 700 | Empty-state or onboarding heading |
| `{typography.display-lg}` | 27 points | 700 | Major route result |
| `{typography.display-md}` | 23 points | 700 | Screen or modal title |
| `{typography.headline}` | 20 points | 700 | Section heading |
| `{typography.card-title}` | 16 points | 600 | Train, card, or passenger title |
| `{typography.body}` | 14 points | 400 | Default route and form content |
| `{typography.caption}` | 10 points | 400 | Station, fare, and timing metadata |

### Principles

- Keep city and station labels compact and scannable.
- Use weight for price, departure, arrival, and totals.
- Reserve uppercase for short route or navigation labels.
- Keep explanatory text quieter than transaction data.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve compact widths and clear numerals; avoid rounded fonts that weaken the utilitarian tone.

# Screen composition

### Spacing System

Use a 4 points base with 12 points screen gutters, 8 points row gaps, and 16–24 points between major booking groups. Dense schedules may use tighter vertical rhythm than profile screens.

### Grid & Container

The product is a single-column mobile stack. Search results, carriage details, passenger forms, and settings use full-width rows. Seat maps may split details and the carriage diagram within the same viewport.

### Whitespace Philosophy

Whitespace is functional and compact. Preserve enough separation to scan routes and prices, but do not create large decorative gaps inside booking tasks.

Surface hierarchy observed in the source:

Hierarchy comes from strong color bands, white panels, dividers, and overlays. Shadows are minimal; dialogs and the side menu use clear overlay separation.

### Decorative Depth

Use full-screen seasonal photography only for onboarding. Inside the product, rely on panel overlap, tonal grouping, and the carriage diagram rather than decoration.

# Navigation appearance

The red top bar contains menu, title or account state, cart, and filter access. A dark gray side menu exposes tickets, passengers, cards, timetable, support, settings, and other rail services.

# Components

### Buttons

Use a red full-width pill for the next booking step. Dark gray rectangular controls can support cancel or secondary paths. Native controls may be used internally, but they must inherit this red, gray, compact-radius, and typography system.

### Cards & Containers

Train rows expose route, departure, arrival, duration, class, and price with thin dividers. Passenger data uses small white rounded cards. Empty ticket and card states pair a centered line icon with one red CTA.

### Inputs & Forms

Route, passenger, and profile forms use full-width rows with labels above values or aligned inline. Validation stays near the affected row, and long legal confirmations remain grouped immediately before booking.

# Imagery and icons

Use full-screen seasonal photography only for onboarding. Inside the product, rely on panel overlap, tonal grouping, and the carriage diagram rather than decoration.

Photography may fill an onboarding screen with white overlaid copy. Operational illustrations should remain simple dark line symbols centered in empty states; diagrams remain precise and rectangular.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Ticket and booking status should precede supporting detail. Cart, ticket history, and support use restrained empty or conversation states; avoid promotional content inside unresolved transactions.

# iOS adaptation

### Touch Targets

Navigation, checkboxes, date choices, seat cells, and anchored actions require at least 44 points targets even when the visual information is dense.

### Collapsing Strategy

Permit horizontal scrolling for nearby dates or carriage tabs. Keep the main route summary and booking action visible while deeper fare or passenger content scrolls.

### Image Behavior

Crop onboarding photography to fill the viewport while keeping the train and headline visible. Do not use photography within schedule or form rows.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not turn timetable rows into oversized lifestyle cards.
- Do not add decorative colors to fare comparison.
- Do not round every field and row.
- Do not hide the next action after a long form.
- Do not expose default blue iOS controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
