<design-context>
---
version: alpha
name: Kino.kz-design-analysis
description: "A bright event-ticketing interface built on white, neon green identity marks, violet navigation and selection states, poster-led content rails, thin outlined filters, and compact ticket details. The system balances colorful entertainment artwork with calm utility screens for seats, orders, and saved tickets."
colors:
  primary: "#9145F5"
  on-primary: "#FFFFFF"
  primary-hover: "#A967F7"
  primary-focus: "#7734D4"
  ink: "#202024"
  ink-muted: "#66666D"
  ink-subtle: "#9B9BA3"
  ink-tertiary: "#BFBFC6"
  canvas: "#FFFFFF"
  surface-1: "#FAF9FC"
  surface-2: "#F3F0F7"
  surface-3: "#E8E3EE"
  surface-4: "#DCD5E5"
  hairline: "#E7E4EA"
  hairline-strong: "#D1CBD8"
  hairline-tertiary: "#B6AEC0"
  inverse-canvas: "#1D1D22"
  inverse-surface-1: "#303037"
  inverse-surface-2: "#43434B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#00ED39"
  semantic-success: "#12B77A"
  semantic-overlay: "#1D1D22"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
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
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  event-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0}
  filter-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 6px 10px}
  seat-cell: {backgroundColor: "#DCC4FA", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px}
  ticket-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px}
  status-badge: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Kino.kz is a clean event marketplace where colorful posters lead discovery and violet controls guide selection. Green identity marks and price badges add a distinct local-ticketing character.

**Key Characteristics:**
- White canvas with poster-rich horizontal rails.
- Neon green identity and ticket-price badges.
- Violet navigation, filters, seat selection, and CTAs.
- Four-item bottom navigation.
- Calm ticket and checkout utility screens.

## Colors

### Brand & Accent
- Violet marks active navigation, filters, selected seats, and forward actions.
- Neon green identifies the brand and price or loyalty benefits.

### Surface
- White dominates; pale lavender supports filters, alerts, and seat-map regions.
- Dark mode shifts surfaces without changing violet selection semantics.

### Text
- Near-black carries event titles and transactional facts.
- Gray supports venue, date, format, and secondary descriptions.

### Semantic
- Green price and age badges sit on poster imagery.
- Coral-red may appear only for mature age restrictions or warnings.

## Typography

### Font Family

Use SF Pro Display for event and page headings, SF Pro Text for listings, filters, and ticket facts.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Event hero statement |
| display-md | 25px | 700 | Checkout or ticket title |
| headline | 21px | 700 | Category heading |
| card-title | 16px | 600 | Event name |
| body | 13px | 400 | Venue and schedule |
| caption | 10px | 400 | Price and navigation |

### Principles

- Let posters carry expressive typography.
- Keep venue and date metadata compact beneath the title.
- Use strong headings to separate varied event categories.

### Note on Font Substitutes

Use a neutral system sans with clear Cyrillic and numeric metrics.

## Layout

### Spacing System

Use a 4px base, 10–12px poster gaps, and 12px screen gutters.

### Grid & Container

Home uses horizontal poster rails; filtered catalogs use a two-column poster grid. Ticket detail uses one stacked column.

### Whitespace Philosophy

Discovery may be dense; seat choice and ticket details need more separation around decisions and totals.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Event discovery |
| 1 | Pale lavender fill | Filters and seat map |
| 2 | White outlined card | Services and tickets |
| 3 | Fixed action area | Seat selection and checkout |

### Decorative Depth

Use poster imagery and mild surface contrast rather than shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Posters, buttons, seats |
| rounded-md | 12px | Tickets and service cards |
| rounded-lg | 16px | Hero media |
| rounded-pill | full | Filters and badges |

### Photography & Illustration Geometry

Event posters use consistent portrait crops; film detail can use a wide hero. No separate expressive illustration language was observed.

## Components

### Buttons

Primary actions are wide violet rectangles. Secondary actions use violet outlines on white or pale surfaces.

### Pricing Tabs

Session and seat choices use date strips and segmented time-versus-cinema controls, with violet fill for the active option.

### Cards & Containers

Event cards are poster-first with title and venue below. Service cards are compact white outlined rows with violet icons.

### Inputs & Forms

Use pills and simple fields with violet focus. Native date, seat, and payment controls must inherit the product's radius, spacing, and color system.

### Status & Build Page

Use green price and loyalty badges, violet selected seats, and explicit totals. Tickets show complete event facts before the order code.

### Navigation

Keep Events, Places, My Tickets, and Profile fixed. Active state is violet; city and utility actions stay in the top bar.

### Footer

No footer; preserve safe-area space below navigation or fixed purchase action.

## Do's and Don'ts

### Do

- Preserve consistent poster proportions.
- Keep date and category filters near listings.
- Use violet for selection and forward motion.
- Make seat price and count visible before continuing.
- Restyle native controls to match the UI.

### Don't

- Don't mix green and violet roles.
- Don't hide venue and schedule metadata.
- Don't add card chrome around every poster.
- Don't use illustration instead of event artwork.
- Don't leave default iOS controls unchanged.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten poster width and filters |
| Standard | 375–430px | Default rails and two-column catalog |
| Wide | 431px+ | Increase hero width and seat-map breathing room |

### Touch Targets

Filters, seats, navigation, and session times retain at least 44px hit areas.

### Collapsing Strategy

Poster rails and filter rows scroll horizontally. Seat maps pan or zoom while the total and next action remain anchored.

### Image Behavior

Use aspect-fill for posters and wide hero media. Preserve embedded titles, faces, and age marks within safe crops.

## Iteration Guide

Tune poster rhythm and ticket decision clarity first, then violet prominence, metadata density, and service-card spacing.

## Known Gaps

- Seat-map gestures and zoom timing were not measured.
- Payment confirmation screens were not represented in the reviewed flow.
- Tablet and landscape layouts were not shown.

</design-context>

Use the design system above for all UI you generate.
