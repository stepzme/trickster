<design-context>
---
version: alpha
name: Yandex-Travel-design-analysis
description: "A broad travel marketplace built from white booking surfaces, high-impact destination photography, bright yellow primary actions, violet brand moments, compact filters, and rounded bottom sheets. Commerce remains utilitarian while seasonal campaigns introduce playful geometric and 3D artwork."
colors: { primary: "#FFD633", on-primary: "#161616", primary-hover: "#F2C824", primary-soft: "#FFF3B6", accent: "#7352E8", ink: "#171719", ink-muted: "#73767B", ink-subtle: "#B0B3B7", canvas: "#FFFFFF", surface-1: "#F5F5F6", surface-2: "#ECEDEF", hairline: "#DFE1E3", semantic-success: "#43A94F", semantic-warning: "#F1B72A", semantic-danger: "#D84E58", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: Yandex Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: Yandex Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: Yandex Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  travel-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 11px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 13px 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Yandex Travel combines lodging, transport, events, and city discovery in a photo-led booking system with clear yellow actions.

## Colors

### Brand & Accent
Use yellow for booking decisions and violet for brand campaigns, travel categories, and playful highlights.

### Surface
Keep booking surfaces white and filters pale gray; use black overlays only for camera or immersive media.

### Text
Use near-black for price and destination, gray for conditions, and white on photography.

### Semantic
Use green for ratings and confirmed state, yellow for actions, red for favorites or cancellation warnings.

## Typography

### Font Family
Use Yandex Sans for navigation, booking, and editorial discovery.

### Hierarchy
Use 28–34px for campaigns, 22px for sections, 16px for cards, 14px body, and 10–12px metadata.

### Principles
Keep price, date, cancellation, and payment timing more prominent than promotional copy.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px gaps, and 16px sheet padding.

### Grid & Container
Home stacks category shortcuts, campaigns, city search, and discovery; booking uses lists, filters, detail, and review sheets.

### Whitespace Philosophy
Use generous imagery in discovery and tighter grouping for booking terms and payment details.

## Elevation & Depth
Use rounded sheets over dimmed detail pages and light elevation for filters and booking controls.

### Decorative Depth
Use destination photography, seasonal 3D objects, and bold geometric campaign backdrops.

## Shapes

### Border Radius Scale
Use 10px for chips, 14px for cards and inputs, 20px for sheets, and full circles for favorite and close actions.

### Photography & Illustration Geometry
Crop destinations to rounded cards; keep campaign objects fully visible against simple color fields.

## Components

### Buttons
Use wide yellow buttons for apply, book, continue, and keep-booking actions.

### Pricing Tabs
Use category chips, amenity chips, date controls, and segmented content tabs.

### Cards & Containers
Use hotel, transport, event, excursion, payment, recommendation, and cancellation cards.

### Inputs & Forms
Group destination, dates, travelers, filters, payment, and cancellation reasons in focused sheets.

### Status & Build Page
Show recommended, available, prepaid, deferred, refundable, canceled, and document state beside the booking.

### Navigation
Keep travel categories near the top and use back or close controls for deep booking steps.

### Footer
Use a quiet white footer or task-specific sticky action rather than competing global chrome.

## Do's and Don'ts

### Do
- Keep total and payment timing explicit.
- Show cancellation conditions before confirmation.
- Let destination imagery support comparison.

### Don't
- Don't let campaigns obscure search.
- Don't hide refund value.
- Don't overload filter sheets with decoration.

## Responsive Behavior

### Breakpoints
Use horizontal rails on phones, two-column comparison on tablet, and a capped booking workspace on desktop.

### Touch Targets
Keep categories, filters, favorites, dates, booking, and close controls at least 44px.

### Collapsing Strategy
Preserve search, price, dates, conditions, and primary action; move editorial discovery below.

### Image Behavior
Crop destination photography consistently and contain campaign objects without covering copy.

## Iteration Guide
1. Build search, categories, listings, and filters.
2. Add detail, booking, payment, documents, and cancellation.
3. Add events, excursions, camera discovery, and campaigns.

## Known Gaps
- Tokens were inferred visually from representative mobile screens.
- All 204 image screens were inventoried; 9 distributed screens were image-reviewed.
- Named flow metadata was unavailable through the gallery.

</design-context>
