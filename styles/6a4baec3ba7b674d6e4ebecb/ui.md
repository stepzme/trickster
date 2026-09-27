<design-context>
---
version: alpha
name: Globus-design-analysis
description: "A practical grocery-commerce interface built on white surfaces, saturated orange actions and headers, fresh green promotional imagery, and dense product photography. Soft cards, compact prices, and a five-destination bottom bar balance discovery with fast repeat shopping."
colors: {primary: "#F47B20", on-primary: "#FFFFFF", primary-hover: "#F59145", primary-focus: "#D9600D", ink: "#202124", ink-muted: "#666A6E", ink-subtle: "#969A9E", ink-tertiary: "#C5C8CA", canvas: "#FFFFFF", surface-1: "#F7F7F5", surface-2: "#F0F1EE", surface-3: "#E5E7E2", surface-4: "#D7DBD4", hairline: "#E7E8E4", hairline-strong: "#CDD1CA", hairline-tertiary: "#B6BCB3", inverse-canvas: "#2F7F31", inverse-surface-1: "#469644", inverse-surface-2: "#67AA5F", inverse-ink: "#FFFFFF", brand-secure: "#F47B20", semantic-success: "#3B9744", semantic-overlay: "#1A1C1B"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px}
  promo-card: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px}
  status-badge: {backgroundColor: "#E94835", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Globus is a dense but orderly grocery storefront. Orange drives search and purchase, white keeps product comparison clean, and green campaign photography communicates freshness.

**Key Characteristics:** orange header and actions, white commerce cards, green food campaigns, image-led categories, compact price stacks, soft shadows, and a persistent five-item bottom bar.

## Colors

### Brand & Accent

Orange owns the header, cart actions, active controls, and important utility entry points. Green belongs to fresh-food campaigns and positive states.

### Surface

White is the base. Pale warm gray groups search, category, cart, and delivery modules; campaign color remains contained within promotional cards.

### Text

Near-black leads names, totals, and headings. Gray supports weight, unit price, fulfillment, old price, and conditions.

### Semantic

Orange means action, green confirms availability or success, and red marks discounts or price urgency. Do not use campaign green as a substitute for purchase action.

## Typography

### Font Family

Use SF Pro Display for promotion and section emphasis and SF Pro Text for catalog density, pricing, delivery, and checkout.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28px | 700 | Campaign or major state |
| headline | 20px | 700 | Section title |
| card-title | 15px | 600 | Product or category |
| body | 13px | 400 | Product and order detail |
| caption | 10px | 400 | Unit price and delivery meta |

### Principles

- Put current price, product name, and availability in a stable order.
- Use compact weights and short labels in repeated cards.
- Align price, quantity, and cart controls across lists.

### Note on Font Substitutes

Use the platform sans with clear Cyrillic and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 8–12px catalog gaps, 16px module padding, and 20–24px between major rails.

### Grid & Container

Home combines wide campaigns and horizontal product rails. Catalog, product detail, and cart move into a focused single-column hierarchy.

### Whitespace Philosophy

Discovery may be dense, but each product card needs a clean image area and an uninterrupted price-to-action path.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale grouped field | Search and delivery |
| 2 | Soft white card | Product and category |
| 3 | Orange sticky action | Add, cart, or checkout |

### Decorative Depth

Use product cutouts, grocery photography, and restrained soft shadow. Avoid ornamental illustration or glossy effects unrelated to the merchandise.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount label |
| rounded-sm | 8px | Chip and small control |
| rounded-md | 12px | Product and input |
| rounded-lg | 16px | Campaign card |
| rounded-full | full | Icon action and counter |

### Photography & Illustration Geometry

Contain products in consistent square crops and use wide food photography for campaigns. Preserve clear space for offer text and action.

## Components

### Buttons

Primary add-to-cart and checkout controls use orange with white labels. Secondary actions stay white or pale with dark text.

### Pricing Tabs

Delivery mode, categories, filters, and sorting use compact chips or segmented controls with orange selection.

### Cards & Containers

Product cards align image, badge, title, current and old price, unit detail, and cart control. Campaign cards combine food imagery with one concise offer.

### Inputs & Forms

Search is prominent and pale with barcode or history utilities. Native form controls must inherit orange focus, these radii, spacing, and type.

### Status & Build Page

Keep stock, discount, quantity, delivery slot, substitutions, total, and order state adjacent to the relevant decision.

### Navigation

Use five bottom destinations with an orange active state. Keep search and selected fulfillment context visible when entering catalog.

### Footer

No footer; bottom navigation or the active cart action owns the safe area.

## Do's and Don'ts

### Do

- Keep orange reserved for action and active state.
- Make image, product, price, quantity, and delivery easy to scan.
- Let campaign photography carry freshness.

### Don't

- Don't turn every card orange or green.
- Don't use large shadow on every catalog item.
- Don't hide unit price or fulfillment behind decoration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata |
| Standard | 375–430px | Default grocery layout |
| Wide | 431px+ | Expand campaigns and gutters |

### Touch Targets

Search tools, category cards, filters, quantity controls, navigation, and checkout remain at least 44px.

### Collapsing Strategy

Preserve product, price, stock, quantity, delivery, total, and checkout; reduce campaigns and recommendations first.

### Image Behavior

Contain product photography without distortion and crop campaign imagery around a deliberate text-safe area.

## Iteration Guide

Tune Home and Catalog first, then product detail, cart, checkout, order tracking, loyalty, and support.

## Known Gaps

- Substitution and refund recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
