<design-context>
---
version: alpha
name: METRO-design-analysis
description: "A dense grocery marketplace on white, anchored by deep METRO blue, bright yellow loyalty accents, red prices and discounts, product pack shots, square category imagery, and a floating translucent bottom dock."
colors:
  primary: "#17478F"
  on-primary: "#FFFFFF"
  primary-hover: "#285DAA"
  primary-focus: "#0B3471"
  ink: "#1D1D22"
  ink-muted: "#75757C"
  ink-subtle: "#A5A5AC"
  ink-tertiary: "#C8C8CE"
  canvas: "#FFFFFF"
  surface-1: "#F5F6F8"
  surface-2: "#EDF0F4"
  surface-3: "#E2E6EB"
  surface-4: "#D6DBE1"
  hairline: "#E5E8EB"
  hairline-strong: "#CED3D9"
  hairline-tertiary: "#B5BCC3"
  inverse-canvas: "#153B76"
  inverse-surface-1: "#102F60"
  inverse-surface-2: "#0B244A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FFE500"
  semantic-success: "#35A968"
  semantic-overlay: "#1D1D22"
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
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 8px}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 6px}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 10px 14px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xxl}", padding: 8px 10px}
---
## Overview

METRO is a high-density grocery storefront where deep blue drives purchase, yellow marks loyalty, and red keeps savings immediately visible.

**Key Characteristics:**
- White product-heavy canvas.
- Deep blue cart and checkout actions.
- Yellow loyalty and selected Home mark.
- Red price and discount emphasis.
- Floating rounded bottom dock.

## Colors

### Brand & Accent

Deep blue is primary. Yellow identifies METRO loyalty and selected brand moments; red is limited to discounts and current price.

### Surface

White carries shopping; pale cool gray groups fulfillment, categories, and checkout choices.

### Text

Near-black carries product names and totals; gray carries unit, old price, and conditions.

### Semantic

Green is success, yellow attention or loyalty, red savings, and blue commitment.

## Typography

### Font Family

Use SF Pro Display for section titles and SF Pro Text for compact catalog and checkout data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Order state |
| headline | 20px | 700 | Catalog and checkout title |
| card-title | 15px | 600 | Product and total |
| body | 12px | 400 | Unit and fulfillment |
| caption | 9px | 400 | Discount, rating, navigation |

### Principles

- Lead cards with image and current price.
- Keep unit price and discount together.
- Use bold for totals, not every label.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tabular prices.

## Layout

### Spacing System

Use a 4px base, 8px product gaps, and 12px screen gutters.

### Grid & Container

Home uses horizontal product rails; catalog uses three category columns; results use two product columns.

### Whitespace Philosophy

Browsing is dense; checkout and address decisions use more separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale group fill | Checkout and fulfillment |
| 2 | Floating dock | Navigation |
| 3 | Sheet over scrim | Filters and substitutions |

### Decorative Depth

Product and food photography supplies depth; UI shadows stay soft.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount labels |
| rounded-sm | 8px | Buttons and cards |
| rounded-md | 12px | Loyalty and order panels |
| rounded-lg | 16px | Sheets |
| rounded-full | full | Search, favorite, and dock |

### Photography & Illustration Geometry

Contain package shots on white, aspect-fill food photography in categories, and preserve full product silhouettes.

## Components

### Buttons

Primary actions are deep blue. Yellow is reserved for brand emphasis, not general confirmation.

### Pricing Tabs

Search categories and delivery modes use pale chips or segmented controls with blue selection.

### Cards & Containers

Product cards combine image, discount, favorite, price, unit, rating, title, and blue cart action.

### Inputs & Forms

Search is a floating white pill; checkout fields are stacked white rows with blue focus.

### Status & Build Page

Order progress uses compact stages and a visible add-on action. Errors stay near fulfillment or payment.

### Navigation

Keep five destinations in a floating translucent dock; Home receives the yellow-blue brand mark.

### Footer

No footer; the floating dock or sticky total owns the safe area.

## Do's and Don'ts

### Do

- Keep price and unit readable.
- Show substitutions and time before checkout.
- Preserve pack-shot consistency.
- Restyle native controls into the system.

### Don't

- Don't use yellow for every action.
- Don't hide old price or discount context.
- Don't crop packaging.
- Don't add heavy card shadows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata and dock |
| Standard | 375–430px | Default grids and rails |
| Wide | 431px+ | Expand checkout and media gutters |

### Touch Targets

Search, scan, favorite, cart, quantity, fulfillment, and navigation remain at least 44px.

### Collapsing Strategy

Keep two product columns, scroll rails horizontally, and stack checkout choices.

### Image Behavior

Contain packaging, aspect-fill food scenes, and keep consistent product image boxes.

## Iteration Guide

Tune price comparison first, then quantity, substitutions, fulfillment, and loyalty clarity.

## Known Gaps

- Completed delivery tracking was not visually sampled.
- Support and cancellation were not opened in detail.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
