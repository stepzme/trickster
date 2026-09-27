<design-context>
---
version: alpha
name: Ozon-Travel-design-analysis
description: "A vivid travel-booking interface with electric-blue and violet headers, large rounded white search panels, magenta promotional cards, photographic destination tiles, and compact structured order details."
colors: {primary: "#0868F7", on-primary: "#FFFFFF", primary-hover: "#2B82FA", primary-focus: "#0053C9", ink: "#17191D", ink-muted: "#686C73", ink-subtle: "#9A9FA7", ink-tertiary: "#C4C8CE", canvas: "#F4F6F8", surface-1: "#FFFFFF", surface-2: "#EEF2F6", surface-3: "#E3E8EE", surface-4: "#D7DDE4", hairline: "#E4E8EC", hairline-strong: "#CBD2D9", hairline-tertiary: "#B5BEC7", inverse-canvas: "#075FD8", inverse-surface-1: "#6455E8", inverse-surface-2: "#D62AB5", inverse-ink: "#FFFFFF", brand-secure: "#E72AAD", semantic-success: "#22AF67", semantic-overlay: "#10131A"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  booking-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Ozon Travel pairs an energetic branded discovery header with calm white booking surfaces. Electric blue owns search and ticket actions; violet and magenta create campaign energy; order details return to a dense, highly legible card system.

**Key Characteristics:** gradient travel header, mode icons, white search sheet, blue full-width actions, magenta campaign banners, destination photography, and compact itinerary cards.

## Colors

### Brand & Accent

Electric blue carries search, download, selected modes, and trust. Magenta and violet are promotional accents rather than transactional colors.

### Surface

Pale gray is the app canvas; white rounded panels hold search, forms, results, and orders; saturated gradients remain above or between these surfaces.

### Text

Near-black leads destinations, dates, and totals; gray supports labels and conditions; white is reserved for saturated headers and promotions.

### Semantic

Green confirms paid or completed orders, blue marks active booking, and pink flags campaign opportunities.

## Typography

### Font Family

Use SF Pro Display for destination and campaign emphasis and SF Pro Text for booking facts and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Campaign or state |
| headline | 20px | 700 | Search or order section |
| card-title | 16px | 600 | Route or property |
| body | 13px | 400 | Booking fact |
| caption | 10px | 400 | Conditions and metadata |

### Principles

- Lead with route, destination, date, and current booking state.
- Keep critical itinerary values aligned and compact.
- Separate promotional voice from operational detail.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic and tabular times and prices.

## Layout

### Spacing System

Use a 4px base, 8–12px row gaps, 16px card padding, and compact safe-area navigation.

### Grid & Container

Search is a single rounded block; destinations may form two-column media tiles; results and orders use one structured column.

### Whitespace Philosophy

Campaigns can be visually dense, while forms and confirmed itineraries need clear group separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Base context |
| 1 | White rounded panel | Search and booking data |
| 2 | Sticky blue action | Primary commitment |
| 3 | Bottom sheet over scrim | Dates and travelers |

### Decorative Depth

Use glossy dimensional campaign graphics and photography; functional cards rely on surface separation rather than heavy shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small state label |
| rounded-sm | 8px | Controls |
| rounded-md | 12px | Media tile |
| rounded-lg | 16px | Search and order cards |
| rounded-full | full | Mode icons and badges |

### Photography & Illustration Geometry

Use broad campaign crops, square destination tiles, and isolated dimensional symbols with clear internal safe areas.

## Components

### Buttons

Primary search, save, and ticket actions use blue; secondary choices use pale blue or neutral surfaces.

### Pricing Tabs

Travel modes and fare options use compact icon tiles or chips with blue selected state.

### Cards & Containers

Search cards group route, date, and travelers; order cards align route, times, duration, carriage, seat, and ticket action.

### Inputs & Forms

Inputs are wide, pale, and lightly grouped; bottom sheets handle calendars, traveler counts, and focused selections.

### Status & Build Page

Paid state, departure timing, fare condition, promotion, and support entry remain near the related booking.

### Navigation

Use five compact bottom destinations, with strong selected icon and subdued inactive labels.

### Footer

No footer; bottom navigation or the current booking action owns the safe area.

## Do's and Don'ts

### Do

- Separate expressive discovery from calm booking surfaces.
- Keep route, dates, travelers, and next action visible.
- Style native controls to inherit this visual system.

### Don't

- Don't place essential booking text inside busy campaign artwork.
- Don't use magenta as the primary payment or search action.
- Don't flatten itinerary facts into unstructured prose.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Stack route facts tightly |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand cards and media |

### Touch Targets

Mode selectors, date fields, passenger steppers, navigation, and primary actions remain at least 44px.

### Collapsing Strategy

Preserve route, dates, travelers, price, status, and ticket action; reduce campaigns and suggestions first.

### Image Behavior

Crop destination media consistently and keep embedded promotional copy within generous safe areas.

## Iteration Guide

Tune mode selection and search first, then results, booking forms, order detail, and support states.

## Known Gaps

- Cancellation and refund recovery were not fully sampled.
- Live disruption states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
