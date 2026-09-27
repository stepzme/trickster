<design-context>
---
version: alpha
name: M-Video-design-analysis
description: "A dense electronics marketplace on white, driven by vivid red commerce actions, black technical type, light-gray grouping, large product photography, and compact price, discount, rating, cashback, service, and fulfillment data."
colors:
  primary: "#F20D1B"
  on-primary: "#FFFFFF"
  primary-hover: "#FF2935"
  primary-focus: "#CF0010"
  ink: "#171719"
  ink-muted: "#77777D"
  ink-subtle: "#A8A8AE"
  ink-tertiary: "#CCCCD1"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F8"
  surface-2: "#EEEEF1"
  surface-3: "#E4E4E8"
  surface-4: "#D8D8DD"
  hairline: "#E7E7EA"
  hairline-strong: "#D0D0D5"
  hairline-tertiary: "#B8B8BF"
  inverse-canvas: "#171719"
  inverse-surface-1: "#29292D"
  inverse-surface-2: "#3B3B41"
  inverse-ink: "#FFFFFF"
  brand-secure: "#009F3D"
  semantic-success: "#18AA52"
  semantic-overlay: "#171719"
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
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  filter-chip: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7px 10px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

M.Video is a promotion-heavy electronics storefront where red actions and precise technical data support comparison and checkout.

**Key Characteristics:**
- White canvas with vivid red purchase actions.
- Product photography and campaign banners.
- Dense pricing, cashback, rating, and specification data.
- Two-column results and sticky cart actions.
- Services, credit, delivery, and pickup decisions.

## Colors

### Brand & Accent

Use red for cart, checkout, and primary promotional emphasis. Black supports navigation; green is limited to success and recycling/service benefits.

### Surface

White is primary. Pale cool gray groups recommendations, filters, services, and checkout sections.

### Text

Near-black carries product and price decisions; gray carries model, old price, and conditions.

### Semantic

Red means commerce, green success, cyan savings, and dark chips active filters.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for dense product and checkout data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Order state |
| headline | 20px | 700 | Catalog and checkout title |
| card-title | 15px | 600 | Product and total |
| body | 12px | 400 | Model and specification |
| caption | 9px | 400 | Rating, discount, cashback |

### Principles

- Keep price and action visually adjacent.
- Use weight, not decoration, for technical hierarchy.
- Align numeric comparison data consistently.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tabular figures.

## Layout

### Spacing System

Use a 4px base, 8px grid gaps, and 12px screen gutters.

### Grid & Container

Home uses rails; results use two columns; product and checkout use one column with sticky actions.

### Whitespace Philosophy

Shopping is dense, while payment and confirmation receive larger separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale grouped surface | Recommendations and checkout |
| 2 | Sticky white bar | Price and purchase |
| 3 | Sheet over scrim | Credit and services |

### Decorative Depth

Photography provides depth; interface cards stay flat with restrained shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and search |
| rounded-md | 12px | Cards |
| rounded-lg | 16px | Sheets and states |
| rounded-full | full | Favorite and quantity controls |

### Photography & Illustration Geometry

Contain product images on light fields; use aspect-fill campaign photography without obscuring copy.

## Components

### Buttons

Primary actions are red; secondary actions are white or pale gray with red or black labels.

### Pricing Tabs

Filters use removable dark pills. Payment and fulfillment options use bordered segmented cards.

### Cards & Containers

Product cards combine image, discount, price, old price, cashback, rating, title, and cart action.

### Inputs & Forms

Search and checkout fields are pale and compact; focus must inherit red or black styling.

### Status & Build Page

Confirmation uses a green success mark, order summary, reward facts, and fulfillment instructions.

### Navigation

Keep the five-item bottom bar fixed with the red M mark at center and cart badges visible.

### Footer

No footer; bottom navigation or sticky commerce action owns the safe area.

## Do's and Don'ts

### Do

- Keep technical comparison readable.
- Show total, discount, and services before payment.
- Preserve red action priority.
- Style native controls into the system.

### Don't

- Don't use red for neutral metadata.
- Don't crop product silhouettes.
- Don't hide installment conditions.
- Don't add decorative illustration to product cards.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten metadata and chips |
| Standard | 375–430px | Default two-column results |
| Wide | 431px+ | Expand media and checkout gutters |

### Touch Targets

Search, filters, favorite, compare, quantity, cart, and payment remain at least 44px.

### Collapsing Strategy

Keep two columns while prices remain readable; stack services and checkout choices.

### Image Behavior

Contain products, preserve campaign focal areas, and maintain consistent gallery ratios.

## Iteration Guide

Tune price comparison first, then product evidence, services, fulfillment, and payment clarity.

## Known Gaps

- Returns and support were not visually sampled.
- Long-term order tracking was not represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
