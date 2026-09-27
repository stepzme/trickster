<design-context>
---
version: alpha
name: Sutochno-design-analysis
description: "A bright accommodation marketplace built from white sheets, near-black booking controls, a raspberry-pink brand accent, softly rounded photo cards, and dense travel metadata. Property photography is the visual protagonist while totals, ratings, dates, and conditions remain explicit."

colors:
  primary: "#EA315F"
  on-primary: "#FFFFFF"
  action: "#171717"
  on-action: "#FFFFFF"
  ink: "#18181A"
  ink-muted: "#747478"
  ink-subtle: "#A8A8AC"
  canvas: "#F5F6F8"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F3"
  hairline: "#E1E2E5"
  semantic-success: "#2CB66C"
  semantic-warning: "#EFAE2E"
  semantic-danger: "#E64E57"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.action}", textColor: "{colors.on-action}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  property-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 0 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  summary-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60px }
---

## Overview

Sutochno.ru is a photo-led travel marketplace with practical checkout. Pink identifies the service, while black actions and white information sheets keep booking decisions clear.

## Colors

### Brand & Accent

Raspberry pink marks brand, active navigation, ratings, bonuses, and select toggles. Black is reserved for booking commitment.

### Surface

White cards and sheets sit on cool gray. Search headers may use a black band for high contrast.

### Text

Near-black carries property names, totals, and headings; gray carries location, attributes, and conditions.

### Semantic

Green confirms ratings or recommendations, red marks errors, and pink carries loyalty. Never use brand pink alone for destructive state.

## Typography

### Font Family

Use a neutral system sans with strong numerals and readable Cyrillic.

### Hierarchy

Use 21–27px page headings, 15–17px property titles, 14px body, and 10–12px travel metadata.

### Principles

Keep nightly and total prices distinct, pair ratings with review counts, and state dates and guests consistently.

### Note on Font Substitutes

SF Pro or Inter are suitable. Use tabular numerals for prices and dates.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px card gaps, and 20–24px between search, results, amenities, and payment groups.

### Grid & Container

Home uses horizontal destination and review rails. Results stack image-led cards; property and checkout screens are single-column.

### Whitespace Philosophy

Allow photography to breathe while keeping booking facts dense and aligned beneath or beside each image.

## Elevation & Depth

White cards lift gently from gray. Sticky black booking bars and overlapping summary sheets create functional depth.

### Decorative Depth

Use accommodation and destination photography. Avoid gradients, generic travel illustrations, or ornamental shadows.

## Shapes

### Border Radius Scale

Property images and cards use 16px, fields and buttons 12px, chips 8px, and avatars are circular.

### Photography & Illustration Geometry

Use `cover` crops that show the room or destination clearly. Galleries are large and edge-to-edge; map pins remain functional.

## Components

### Buttons

Primary booking actions are black with white text; pink appears in smaller brand actions. Native controls must inherit package color and geometry.

### Pricing Tabs

Date, guest, filter, and room selectors use compact outlined or pale controls with pink selection.

### Cards & Containers

Result cards combine photo, badges, rating, location, title, occupancy, and price. Checkout sheets group terms and totals.

### Inputs & Forms

Search uses rounded destination fields and explicit date and guest pickers. Checkout fields remain linear and labeled.

### Status & Build Page

Pending, active, past, canceled, cashback, promo, and payment states appear beside the relevant reservation or amount.

### Navigation

Five bottom tabs persist across search, favorites, bookings, messages, and profile. Detail tasks use a compact top bar.

### Footer

There is no footer. End detail and checkout with a sticky black action above the safe area.

## Do's and Don'ts

### Do

- Let real accommodation photos lead.
- Keep totals and conditions explicit.
- Use black for commitment.
- Preserve pink for brand and selection.

### Don't

- Do not obscure price with badges.
- Do not use decorative travel art instead of photos.
- Do not hide cancellation terms.
- Do not expose default platform-blue controls.

## Responsive Behavior

### Breakpoints

Keep booking single-column on phones. Wider results may use two columns or a list-map split.

### Touch Targets

Dates, guests, filters, cards, favorites, navigation, and booking actions require at least 44px targets.

### Collapsing Strategy

Allow destination and review rails to scroll horizontally. Keep total and booking action pinned through long detail screens.

### Image Behavior

Use `cover` for property and destination photography. Preserve gallery aspect ratios and avoid hiding key room features.

## Iteration Guide

Start with search, five-tab navigation, result cards, property detail, and sticky booking action. Add checkout, reservations, chat, favorites, and profile afterward.

## Known Gaps

The reviewed scenarios cover search, dates, guests, filters, map, property detail, reviews, booking, checkout, messages, reservations, favorites, and profile. Tablet layouts and every payment error were not visible.

</design-context>

Use the design system above for all UI you generate.
