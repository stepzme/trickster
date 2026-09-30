<design-context>
---
version: alpha
name: Trainline-design-analysis
description: "A rail-booking interface that pairs a deep indigo journey header with mint and teal commitment actions, white rounded search panels, dense timetable rows, and playful service illustrations. Expressive discovery stays near the home and onboarding surfaces; booking, fare conditions, tickets, and payment become compact, explicit, and highly structured."
colors:
  primary: "#25008B"
  on-primary: "#FFFFFF"
  primary-hover: "#3512A8"
  primary-focus: "#180064"
  ink: "#11131A"
  ink-muted: "#5F626B"
  ink-subtle: "#92969E"
  ink-tertiary: "#C4C7CC"
  canvas: "#F4F4F6"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F3"
  surface-3: "#E5E7EA"
  surface-4: "#D8DBDF"
  hairline: "#E0E2E5"
  hairline-strong: "#C8CCD1"
  hairline-tertiary: "#AEB3BA"
  inverse-canvas: "#003B39"
  inverse-surface-1: "#79D477"
  inverse-surface-2: "#A8F79B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#08AD94"
  semantic-success: "#08AD94"
  semantic-overlay: "#11131A"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 44px}
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "#078C79", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  search-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px}
  result-row: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px}
  option-card: {backgroundColor: "#F4F2FF", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px}
  ticket-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px}
---
## Overview

Trainline separates expressive journey discovery from a dense booking utility. Indigo establishes the travel context, mint and teal move the purchase forward, and white panels keep fares, conditions, and ticket data readable.

## Colors

### Brand & Accent
- Deep indigo owns headers, selected tabs, focus outlines, and timetable context.
- Mint and teal mark primary continuation, completion, and reassuring service states.

### Surface
- White cards sit on pale gray booking canvases.
- Very pale lavender differentiates selected fare and flexibility options.

### Text
- Near-black leads times, prices, destinations, and actions; cool gray supports conditions and labels.

### Semantic
- Teal confirms available actions and included benefits. Indigo indicates selection; neutral gray carries unavailable or secondary content.

## Typography

### Font Family

Use SF Pro Display for journey and section headings, SF Pro Text for forms, timetables, fares, and account rows.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding statement |
| headline | 21px | 700 | Search or booking section |
| card-title | 16px | 600 | Fare, route, or ticket title |
| body | 13px | 400 | Conditions and itinerary facts |
| caption | 10px | 400 | Navigation and metadata |

### Principles

- Make departure, arrival, duration, changes, and total scannable as a group.
- Keep contractual conditions in plain sentence case.
- Use compact bold labels rather than decorative type.

### Note on Font Substitutes

Use the platform system sans with tabular numerals and broad language coverage.

## Layout

### Spacing System

Use a 4px base, 12px row gaps, 16px side margins, and 12–16px card padding.

### Grid & Container

Discovery uses a full-width header, hero card, and horizontal service tiles. Search and purchase use one stacked column; result rows align time, route, operator, and price on a strict grid.

### Whitespace Philosophy

Give forms clear panel boundaries, but keep related timetable and fare facts compact enough for comparison.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Search and purchase |
| 1 | White card | Fields, options, tickets |
| 2 | Sticky action area | Continue and total |
| 3 | Sheet over scrim | Date, station, and focused choice |

### Decorative Depth

Use soft card shadows on discovery and tickets. Booking depth comes mainly from surface contrast and sticky action regions.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Fields and fare options |
| rounded-md | 12px | Controls and service tiles |
| rounded-lg | 16px | Search panels |
| rounded-xl | 22px | Hero and sheets |
| rounded-full | full | Search bar and navigation selection |

### Photography & Illustration Geometry

Use broad journey photography in rounded rectangles and one centered line-art object inside each square service tile. Keep operational content outside imagery.

## Components

### Buttons

Teal commits booking steps; indigo confirms sheet choices. Secondary controls stay white or neutral with explicit labels.

### Pricing Tabs

Ticket type, class, flexibility, sorting, and time choices use outlined cards, compact segments, or simple rows with one indigo selection.

### Cards & Containers

Search panels group where, when, and passengers. Result rows keep route and price aligned; ticket cards visualize the journey with a simple vertical line.

### Inputs & Forms

Station fields open a rounded focused sheet with saved places and suggestions. Dates, passengers, railcards, seating, and payment remain labeled and editable.

### Status & Build Page

Use text for fastest, direct, delayed, unavailable, included, refundable, and unprotected states. Keep operator identity and total near the related decision.

### Navigation

Search, My Tickets, and Account remain fixed during browsing. Purchase steps replace the tab bar with a focused header and continuation action.

### Footer

No footer; reserve the safe area for the bottom bar or the current total and action.

## Do's and Don'ts

### Do

- Keep timetable comparison dense and aligned.
- Repeat the current total at commitment points.
- Expose fare and refund conditions before payment.
- Use mint illustration for reassurance, not decoration inside forms.

### Don't

- Don't hide changes, operators, or unavailable states.
- Don't use promotional photography behind booking text.
- Don't turn teal into a general background color.
- Don't flatten multi-step booking into one undifferentiated form.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten labels and result columns |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Widen panels without splitting the journey |

### Touch Targets

Station rows, calendar dates, tabs, toggles, result rows, and actions keep at least 44px hit areas.

### Collapsing Strategy

Preserve route, date, time, duration, changes, price, conditions, and action. Collapse service promotion and secondary explanation first.

### Image Behavior

Crop discovery photography around travelers and the journey environment. Keep service illustrations uncropped with clear internal padding.

## Iteration Guide

Tune station entry and result comparison first, then fare configuration, payment clarity, tickets, and account utilities.

## Known Gaps

- Tokens were inferred visually from reviewed mobile screens.
- Live validation, payment completion, refund confirmation, and dynamic delay updates were not executed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
