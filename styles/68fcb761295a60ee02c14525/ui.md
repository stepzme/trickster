<design-context>
---
version: alpha
name: Kupibilet-design-analysis
description: "A travel-booking system that pairs a deep navy search canvas with vivid mint-green actions, then shifts into white and ice-gray comparison screens. Rounded form cards, compact itinerary diagrams, green selection outlines, and playful travel illustrations balance a long, data-heavy booking journey."
colors:
  primary: "#22E986"
  on-primary: "#10241A"
  primary-hover: "#49F09B"
  primary-focus: "#18B968"
  ink: "#191A1E"
  ink-muted: "#70737A"
  ink-subtle: "#A0A3AA"
  ink-tertiary: "#C2C5CA"
  canvas: "#F4F5F8"
  surface-1: "#FFFFFF"
  surface-2: "#ECEEF3"
  surface-3: "#E1E4EA"
  surface-4: "#D4D8E0"
  hairline: "#E3E5EA"
  hairline-strong: "#CED2D9"
  hairline-tertiary: "#B5BAC3"
  inverse-canvas: "#303D63"
  inverse-surface-1: "#3A486F"
  inverse-surface-2: "#47557B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#1FAF67"
  semantic-success: "#23AF65"
  semantic-overlay: "#161923"
typography:
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Rounded, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 5px
  sm: 9px
  md: 13px
  lg: 18px
  xl: 22px
  xxl: 28px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  search-form: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  flight-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  form-section: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  status-panel: {backgroundColor: "#FFF8EC", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px}
  top-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Kupibilet combines a dark navy search stage with bright green commitment actions and calm white comparison, form, and payment screens.

**Key Characteristics:**
- Deep navy home with stacked white search fields.
- Mint-green buttons and selected outlines.
- White flight cards on an ice-gray results canvas.
- Compact route diagrams and price/date comparisons.
- Playful illustrated onboarding and helper modules.

## Colors

### Brand & Accent

Electric mint-green marks forward progress, selected states, the brand mark, and favorable prices. Deep navy anchors search and branded navigation.

### Surface

Home uses navy; the rest of the journey uses pale gray with white cards, sheets, and form groups.

### Text

Near-black carries flight facts and totals. Gray handles labels and timing metadata; green highlights selection and advantageous price.

### Semantic

Warm orange marks waiting; red marks failed payment or problematic route facts. Keep these states inside softly tinted panels.

## Typography

### Font Family

Use a rounded display sans for branded headings and SF Pro Text for itineraries, forms, and payment.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding claim |
| headline | 20px | 700 | Booking and route heading |
| card-title | 16px | 600 | Price, passenger, or section title |
| body | 13px | 400 | Flight details and forms |
| caption | 10px | 400 | Duration, airport, and navigation |

### Principles

- Prices, dates, and route endpoints receive priority.
- Keep itinerary detail compact but never cryptic.
- Use rounded bold headings sparingly above functional content.

### Note on Font Substitutes

SF Pro Rounded or Nunito Sans matches the brand tone; Inter works for dense travel data.

## Layout

### Spacing System

Use a 4px base, 12px card gaps, and 12–16px screen padding.

### Grid & Container

Search is one stacked form. Results are a single vertical list with horizontal price/date chips; insurance options use a horizontal card rail.

### Whitespace Philosophy

Keep comparison screens dense, but isolate each booking decision in its own white rounded group.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Navy or ice-gray canvas | Page background |
| 1 | White rounded card | Search, result, form, itinerary |
| 2 | White bottom sheet | Calendar, details, payment |
| 3 | Tinted status panel | Waiting and error feedback |

### Decorative Depth

Use bold flat illustration shadows and occasional map depth. Functional cards rely on surface contrast, not heavy shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 5px | Small status labels |
| rounded-sm | 9px | Buttons and inputs |
| rounded-md | 13px | Flight and form cards |
| rounded-lg | 18px | Helper panels and sheets |
| rounded-full | full | Brand capsule and icon controls |

### Photography & Illustration Geometry

Destination photography stays in rounded portrait cards. Illustration uses one large object on a saturated field or a small line drawing aligned to a helper card corner.

## Components

### Buttons

Primary actions are full-width green rectangles with modest rounding. Navy secondary actions appear on dark search surfaces; pale gray supports low-priority choices.

### Pricing Tabs

Date-price chips and exact/flexible date controls use green outlines or fills for selection; unavailable choices stay pale and quiet.

### Cards & Containers

Flight cards stack timings, transfers, baggage, duration, and price. Booking forms and order summaries use white rounded groups on pale gray.

### Inputs & Forms

Search fields are large white rows on navy. Passenger and card fields use thin gray borders; focus shifts to a green outline without changing geometry.

### Status & Build Page

Order status groups waiting and failure messages above the route. Use warm tints, a clear icon, and a direct recovery explanation.

### Navigation

Keep five bottom destinations fixed on discovery. Results and booking use a simple back header with the small navy brand capsule centered above.

### Footer

No footer; bottom navigation, persistent continue, or payment actions own the safe area.

## Do's and Don'ts

### Do

- Keep price comparisons close to dates.
- Use green consistently for selection and progress.
- Group long forms into clear sections.
- Show transfer and baggage consequences before purchase.
- Preserve the navy-to-light journey transition.

### Don't

- Don't decorate flight-result cards with illustration.
- Don't use red for ordinary price emphasis.
- Don't hide fees or route complexity.
- Don't over-round dense form fields.
- Don't leave native inputs visually disconnected from the green focus system.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten itinerary labels and date chips |
| Standard | 375–430px | Default single-column journey |
| Wide | 431px+ | Expand cards and form gutters |

### Touch Targets

Route fields, calendar dates, filters, result cards, payment choices, and bottom navigation remain at least 44px.

### Collapsing Strategy

Keep the journey single-column; allow date, destination, and insurance rails to scroll horizontally rather than shrinking content.

### Image Behavior

Destination photos use aspect-fill with labels outside the image. Illustrations scale proportionally and retain clear space around form copy.

## Iteration Guide

Tune route and price clarity first, then form grouping, selection feedback, status recovery, and illustration balance.

## Known Gaps

- Successful payment confirmation was not present in the reviewed flow.
- Chat and order support interactions were not opened.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
