<design-context>
---
version: alpha
name: Vivid-design-analysis
description: "A bright premium-finance interface built from white space, bold black headings, saturated violet actions, pale-lilac cards, and glossy 3D product metaphors. It makes banking, rewards, and investing feel approachable and collectible."

colors:
  primary: "#8A32F4"
  on-primary: "#FFFFFF"
  primary-pressed: "#6F22D1"
  ink: "#242426"
  ink-muted: "#747478"
  ink-subtle: "#A9A9AE"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F6F4F7"
  accent-lilac: "#E7D9FA"
  hairline: "#E6E4E8"
  semantic-success: "#35B978"
  semantic-warning: "#E9A337"
  semantic-danger: "#E05762"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 750, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  pocket-tile: { backgroundColor: "{colors.accent-lilac}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 0 }
  action-row: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  promo-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58px }
---

## Overview

Vivid pairs strong black headlines and white canvas with saturated violet action and collectible 3D financial objects. Product breadth is organized through pockets, search, and clear bottom navigation.

## Colors

### Brand & Accent

Violet owns primary actions, active navigation, and promotional emphasis. Lilac supports product tiles and icon backgrounds.

### Surface

Use white as the default canvas and very pale gray or lavender for grouped rows, search, and cards.

### Text

Charcoal carries headings and values; gray carries account labels and helper copy. White appears on violet promotions and buttons.

### Semantic

Green and red show financial direction or result, amber warns, and violet remains brand action.

## Typography

### Font Family

Use a bold geometric sans with tabular figures for money and rates.

### Hierarchy

Use 32–40px product messages, 20–25px page headings, 16–17px card titles, and 10–14px detail.

### Principles

Use heavy headings sparingly, align monetary values, and keep supporting copy short inside product tiles.

### Note on Font Substitutes

Use Inter or SF Pro with 700–800 headline weights and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 12px card gaps, and 24–32px between product sections.

### Grid & Container

Pockets use a two-column tile grid above cards. Payments use grouped actions; Rewards and Invest use vertical sections and horizontal rails.

### Whitespace Philosophy

Give headings and product art room to breathe. Dense transaction data should stay in flat lists rather than decorative tiles.

## Elevation & Depth

Use subtle card lift and soft contact shadow beneath 3D assets. Most transactional surfaces remain flat.

### Decorative Depth

Use violet gradients, translucent glows, and glossy miniature objects in product and promo cards. Avoid decorative depth in timeline rows.

## Shapes

### Border Radius Scale

Use 8px fields, 12px action rows, 16px product cards, 22px sheets, and round icon backgrounds.

### Photography & Illustration Geometry

Center glossy 3D objects on square gradient tiles with safe margins. Marketing photography, when present, uses restrained rounded crops.

## Components

### Buttons

Primary actions are filled violet rectangles; secondary actions are white or pale rows. Native controls must inherit violet focus and rounded geometry.

### Pricing Tabs

Personal/Business, asset classes, and recommendation modes use compact white segments or chips with violet selected state.

### Cards & Containers

Pocket tiles pair one 3D object, product name, and balance or benefit. Transaction rows are flatter and denser.

### Inputs & Forms

Registration and payments use pale filled fields with strong focus. Search remains full-width and quiet.

### Status & Build Page

Pocket balance, card availability, reward earned, planned payment, verification, and order state appear beside the related product.

### Navigation

Use five bottom destinations for Pockets, Timeline, Payments, Rewards, and Invest. Keep local categories inside each destination.

### Footer

There is no footer. Support, legal, and personal settings live in account screens.

## Do's and Don'ts

### Do

- Give product objects clear visual ownership.
- Keep transactional lists simple.
- Reserve violet for action and brand.
- Align balances and returns.

### Don't

- Do not add 3D art to every row.
- Do not make gains violet.
- Do not crowd product tiles with copy.
- Do not expose default native accents.

## Responsive Behavior

### Breakpoints

Use two pocket columns on phones when legible; fall back to one. Wider screens may separate product overview from activity.

### Touch Targets

Pocket tiles, payment actions, filters, category chips, navigation, and order controls require at least 44px targets.

### Collapsing Strategy

Keep balances, primary payment actions, and current product visible. Collapse secondary benefits and analysis into detail pages.

### Image Behavior

Use `contain` for 3D product metaphors and logos; use `cover` only for lifestyle reward photography.

## Iteration Guide

Start with onboarding, pocket overview, timeline, payments, and five-item navigation. Add rewards, investment discovery, business products, and promotional 3D art afterward.

## Known Gaps

The inspected catalog documents 45 flows across onboarding, pockets, timeline, payments, rewards, investing, support, and account states. Some transactional confirmations are video-only or less represented.

</design-context>

Use the design system above for all UI you generate.
