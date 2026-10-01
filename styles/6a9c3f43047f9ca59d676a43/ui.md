<design-context>
---
version: 1
platform: iOS
name: Trainline-design-analysis
description: "A rail-booking interface that pairs a deep indigo journey header with mint and teal commitment actions, white rounded search panels, dense timetable rows, and playful service illustrations. Expressive discovery stays near the home and onboarding surfaces; booking, fare conditions, tickets, and payment become compact, explicit, and highly structured."
colors:
  primary: "#25008B"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 44}
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "#078C79", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  search-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  result-row: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12}
  option-card: {backgroundColor: "#F4F2FF", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14}
  ticket-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
---

# Overview

Trainline separates expressive journey discovery from a dense booking utility. Indigo establishes the travel context, mint and teal move the purchase forward, and white panels keep fares, conditions, and ticket data readable.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A rail-booking interface that pairs a deep indigo journey header with mint and teal commitment actions, white rounded search panels, dense timetable rows, and playful service illustrations.
- The dominant canvas token is #F4F4F6 and the primary accent token is #25008B.
- The recorded display style is 38 points while the body style is 13 points.
- Navigation appears as follows: Search, My Tickets, and Account remain fixed during browsing.
- The reviewed screens use this hierarchy: Expressive discovery stays near the home and onboarding surfaces; booking, fare conditions, tickets, and payment become compact, explicit, and highly structured.

# Color and surfaces

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

# Typography

### Font Family

Use SF Pro Display for journey and section headings, SF Pro Text for forms, timetables, fares, and account rows.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Onboarding statement |
| headline | 21pt | 700 | Search or booking section |
| card-title | 16pt | 600 | Fare, route, or ticket title |
| body | 13pt | 400 | Conditions and itinerary facts |
| caption | 10pt | 400 | Navigation and metadata |

### Principles

- Make departure, arrival, duration, changes, and total scannable as a group.
- Keep contractual conditions in plain sentence case.
- Use compact bold labels rather than decorative type.

### Note on Font Substitutes

Use the platform system sans with tabular numerals and broad language coverage.

# Screen composition

### Grid & Container

Discovery uses a full-width header, hero card, and horizontal service tiles. Search and purchase use one stacked column; result rows align time, route, operator, and price on a strict grid.

### Whitespace Philosophy

Give forms clear panel boundaries, but keep related timetable and fare facts compact enough for comparison.

# Navigation appearance

Search, My Tickets, and Account remain fixed during browsing. Purchase steps replace the tab bar with a focused header and continuation action.

# Components

### Buttons

Teal commits booking steps; indigo confirms sheet choices. Secondary controls stay white or neutral with explicit labels.

Ticket type, class, flexibility, sorting, and time choices use outlined cards, compact segments, or simple rows with one indigo selection.

### Cards & Containers

Search panels group where, when, and passengers. Result rows keep route and price aligned; ticket cards visualize the journey with a simple vertical line.

### Inputs & Forms

Station fields open a rounded focused sheet with saved places and suggestions. Dates, passengers, railcards, seating, and payment remain labeled and editable.

### Status & Build Page

Use text for fastest, direct, delayed, unavailable, included, refundable, and unprotected states. Keep operator identity and total near the related decision.

### Navigation

Search, My Tickets, and Account remain fixed during browsing. Purchase steps replace the tab bar with a focused header and continuation action.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Search and purchase |
| 1 | White card | Fields, options, tickets |
| 2 | Sticky action area | Continue and total |
| 3 | Sheet over scrim | Date, station, and focused choice |

### Decorative Depth

Use soft card shadows on discovery and tickets. Booking depth comes mainly from surface contrast and sticky action regions.

# States

Use text for fastest, direct, delayed, unavailable, included, refundable, and unprotected states. Keep operator identity and total near the related decision.

# iOS adaptation

### Touch Targets

Station rows, calendar dates, tabs, toggles, result rows, and actions keep at least 44pt hit areas.

### Collapsing Strategy

Preserve route, date, time, duration, changes, price, conditions, and action. Collapse service promotion and secondary explanation first.

### Image Behavior

Crop discovery photography around travelers and the journey environment. Keep service illustrations uncropped with clear internal padding.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
