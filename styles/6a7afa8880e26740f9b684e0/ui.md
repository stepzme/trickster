<design-context>
---
version: alpha
name: Booking-design-analysis
description: "A dense, utility-first travel marketplace organized around a royal-blue header, bright-blue actions, yellow focus frames, white information cards, green deal signals, and destination photography. Search parameters, comparison data, policies, and totals remain explicit through every travel category."
colors:
  primary: "#003B95"
  on-primary: "#FFFFFF"
  primary-hover: "#002F76"
  primary-soft: "#EAF3FF"
  accent: "#0071C2"
  accent-secondary: "#FEBB02"
  ink: "#1A1A1A"
  ink-muted: "#5D6268"
  ink-subtle: "#9CA1A6"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F4F6"
  hairline: "#DDE1E5"
  semantic-success: "#008234"
  semantic-danger: "#D4111E"
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
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Booking unifies stays, flights, cars, taxis, and attractions through a shared search-first shell. Dense results remain comparable because dates, party, location, price, policy, and rating are kept close.

**Key Characteristics:**
- Royal-blue product header.
- Yellow-framed search module.
- Photo-led result cards.
- Green deal and cancellation labels.
- Persistent Search, Saved, Bookings, and Account navigation.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Header, brand context, and selected service.
- **Accent** ({colors.accent}): Search, select, and linked actions.
- **Secondary Accent** ({colors.accent-secondary}): Search-frame focus and rating emphasis.

### Surface
- **Canvas** ({colors.canvas}): Results, details, and checkout.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary fields and controls.
- **Hairline** ({colors.hairline}): Quiet grouping.

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

- **SF Pro Display** — destination and booking headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Lead with destination, date, and party.
- Keep total price and cancellation visible.
- Use green only for verified benefits.
- Let photography identify place, not state.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

The header holds horizontally scrollable travel modes and a stacked search form. Results use one-column photo cards; detail and checkout use dense grouped sections.

### Whitespace Philosophy

Separate major decisions clearly, but keep related comparison data tightly grouped.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use slight shadows on search, result, and confirmation cards. Real photography supplies visual richness.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills for compact filters.

### Photography & Illustration Geometry

Use real destination, property, room, car, and attraction photography in consistent rectangles. Never put critical terms inside imagery.

## Components

### Buttons

Bright blue commits search, room selection, and final booking. Text links reveal policies, reviews, and detail.

### Pricing Tabs

Travel modes, filters, sort, map, and room choices show an explicit selected state without competing with the main CTA.

### Cards & Containers

Result cards combine photo, rating, distance, benefit labels, availability, and total. Booking cards group room, conditions, and included amenities.

### Inputs & Forms

Destination, dates, party, traveler, and payment fields remain stacked, labeled, and editable before commitment.

### Status & Build Page

Expose limited availability, mobile price, Genius benefit, free cancellation, no prepayment, pending, confirmed, and cancelled in text.

### Navigation

Search, Saved, Bookings, and My account anchor the app; category work stays in the Search branch.

### Footer

Bottom navigation persists in browsing; booking steps replace it with a focused continuation action.

## Do's and Don'ts

### Do

- Keep price terms explicit.
- Preserve search context on results.
- Show policy before commitment.
- Use real travel photography.
- Support map and list comparison.

### Don't

- Don't hide taxes or cancellation.
- Don't replace property photos with illustration.
- Don't overload the blue header with actions.
- Don't bury traveler edits.
- Don't use yellow as a second primary button.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, and primary action at least 44px.

### Collapsing Strategy

Preserve destination, dates, total, policy, and main action. Collapse secondary facilities and promotions first.

### Image Behavior

Crop around the property or destination while retaining a useful overview. Keep badges and booking data outside the photo.

## Iteration Guide

1. Build the shared search shell.
2. Add stay results and property detail.
3. Add room selection and booking.
4. Add flights, cars, taxis, and attractions.
5. Add bookings, saved items, and account.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 89 available flow names were inventoried; home, stay search, property results, booking, flights, and bookings were image-reviewed.
- Live map behavior, AI filtering detail, and payment completion were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
