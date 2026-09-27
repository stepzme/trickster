<design-context>
---
version: alpha
name: Lemana-PRO-design-analysis
description: "A practical home-improvement marketplace built on white with vivid construction-yellow commitment actions, charcoal filters, rounded floating navigation, and dense product photography. Loyalty, promotions, room solutions, catalog, fulfillment, and checkout share a sturdy utilitarian rhythm."
colors:
  primary: "#FFC900"
  on-primary: "#171717"
  primary-hover: "#FFD638"
  primary-focus: "#E5B400"
  ink: "#171717"
  ink-muted: "#707075"
  ink-subtle: "#A3A3A8"
  ink-tertiary: "#C6C6CA"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F4"
  surface-2: "#ECECEA"
  surface-3: "#E1E1DE"
  surface-4: "#D4D4D0"
  hairline: "#E5E5E2"
  hairline-strong: "#D0D0CC"
  hairline-tertiary: "#B8B8B2"
  inverse-canvas: "#202326"
  inverse-surface-1: "#34383B"
  inverse-surface-2: "#494D50"
  inverse-ink: "#FFFFFF"
  brand-secure: "#C59800"
  semantic-success: "#3DA55A"
  semantic-overlay: "#171717"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 26px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 10px}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 11px 14px}
  availability-badge: {backgroundColor: "#DFF2FA", textColor: "#2E6C82", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "rgba(255,255,255,0.94)", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px}
---
## Overview

Lemana PRO is a utilitarian home-improvement shop where yellow actions, charcoal filters, and product photography make complex projects feel manageable.

**Key Characteristics:**
- Yellow loyalty header and purchase actions.
- Floating white navigation dock.
- Two-column catalog and product comparison.
- Ready-made room solutions and service shortcuts.
- Fulfillment availability visible before checkout.

## Colors

### Brand & Accent

Construction yellow identifies brand, loyalty, selection, cart, and checkout. Charcoal handles filters and secondary commitment.

### Surface

White is the shopping canvas; warm pale gray separates category tiles, quantity controls, and checkout groups.

### Text

Near-black carries headings, price, and specifications. Gray supports unit price, availability, and secondary instructions.

### Semantic

Pale blue marks fulfillment availability. Green is reserved for success; red marks discounts and destructive states.

## Typography

### Font Family

Use SF Pro Display for strong section headings and SF Pro Text for dense product and fulfillment data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Project or campaign claim |
| headline | 20px | 700 | Catalog and checkout title |
| card-title | 15px | 600 | Product and section title |
| body | 12px | 400 | Specifications and delivery |
| caption | 9px | 400 | Unit price, rating, and badge |

### Principles

- Keep price and unit visible together.
- Use bold for categories and decision points.
- Favor short practical labels over editorial copy.

### Note on Font Substitutes

Inter is a suitable substitute; preserve compact Cyrillic and legible fractions or unit notation.

## Layout

### Spacing System

Use a 4px base, 8–12px grid gaps, and 12px screen padding.

### Grid & Container

Categories and products use two columns. Inspiration uses horizontal rails; checkout uses one stacked column.

### Whitespace Philosophy

Catalog density is useful. Open more space around project imagery, totals, address, and final actions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale filled tile | Categories and controls |
| 2 | Floating white dock | Home, cart, search, scanner |
| 3 | Rounded sheet over scrim | Address and selectors |

### Decorative Depth

Use project photography and isolated product cutouts; UI shadows stay soft and limited to floating controls.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount and availability labels |
| rounded-sm | 8px | Buttons and category tiles |
| rounded-md | 12px | Product imagery and quantity controls |
| rounded-lg | 16px | Campaign and room-solution cards |
| rounded-pill | full | Floating dock, chips, search |

### Photography & Illustration Geometry

Products are contained or square-cropped. Room solutions use portrait interior photography; banners use wide landscape crops.

## Components

### Buttons

Primary actions are yellow with black type. Filters are charcoal with white type; low-priority actions use pale gray or white.

### Pricing Tabs

Quick filters use charcoal pills with removable selections; fulfillment modes use wide segmented rows.

### Cards & Containers

Product cards combine imagery, title, rating, current and former price, unit price, availability, and cart action without heavy borders.

### Inputs & Forms

Search is a white pill with scanner access. Address and contact forms use sheets, thin fields, and yellow confirmation actions.

### Status & Build Page

Availability badges distinguish store today, delivery tomorrow, and special order. Cart counts use small red badges.

### Navigation

Keep the rounded floating dock with Home, Cart, Search, and Scanner. Native controls must inherit the yellow-charcoal hierarchy.

### Footer

No footer; the dock or persistent cart and checkout action owns the safe area.

## Do's and Don'ts

### Do

- Keep units, quantity, and fulfillment clear.
- Use yellow for brand and primary progress.
- Keep project inspiration photographic.
- Preserve scanner and search access.
- Adapt native controls to the floating dock system.

### Don't

- Don't use yellow as a large content background outside brand zones.
- Don't hide store availability.
- Don't add heavy shadows to product cards.
- Don't mix editorial typography into specifications.
- Don't replace real project imagery with decorative illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata and filter chips |
| Standard | 375–430px | Default two-column catalog |
| Wide | 431px+ | Expand inspiration media and checkout gutters |

### Touch Targets

Search, scanner, filter, cart, quantity, fulfillment, and dock targets remain at least 44px.

### Collapsing Strategy

Keep products at two columns on phones; scroll filters horizontally and stack checkout options.

### Image Behavior

Contain pack shots and tools; aspect-fill interiors and campaign banners without cropping key fixtures.

## Iteration Guide

Tune product comparability and fulfillment clarity first, then floating navigation, projects, and loyalty entry points.

## Known Gaps

- Payment selection after contact details was not visible in the sampled checkout screens.
- Scanner camera interaction was not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
