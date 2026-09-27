<design-context>
---
version: alpha
name: Magnum-GO-design-analysis
description: "A compact grocery marketplace on white with deep raspberry commerce actions, pale pink category tiles, strong black headings, product pack shots, outlined quantity steppers, and a simple five-item navigation bar."
colors: {primary: "#C91657", on-primary: "#FFFFFF", primary-hover: "#DD2E6E", primary-focus: "#A80B43", ink: "#20232A", ink-muted: "#777A82", ink-subtle: "#A7A9AF", ink-tertiary: "#CCCDD1", canvas: "#FFFFFF", surface-1: "#FBF2F7", surface-2: "#F5E6EE", surface-3: "#EBD8E2", surface-4: "#DFC8D4", hairline: "#E8E8EB", hairline-strong: "#D0D0D5", hairline-tertiary: "#B8B8BF", inverse-canvas: "#20232A", inverse-surface-1: "#32353D", inverse-surface-2: "#454851", inverse-ink: "#FFFFFF", brand-secure: "#7A1746", semantic-success: "#33AA67", semantic-overlay: "#20232A"}
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
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 8px}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px}
  quantity-stepper: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 8px 12px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Magnum GO is a straightforward grocery storefront where raspberry actions and pale-pink tiles organize catalog, basket, and order management.

**Key Characteristics:** white canvas; raspberry action color; two-column category and product grids; outlined steppers; typography-led empty states.

## Colors

### Brand & Accent

Use raspberry for price, cart, selected navigation, and purchase actions.

### Surface

White is primary; pale pink distinguishes categories and recommendations.

### Text

Near-black leads; gray supports unit, old price, and profile detail.

### Semantic

Green means success, yellow caution, and raspberry commerce or selection.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for product and order detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Empty state |
| headline | 20px | 700 | Cart and profile title |
| card-title | 15px | 600 | Product and total |
| body | 12px | 400 | Unit and metadata |
| caption | 9px | 400 | Discount and navigation |

### Principles

- Keep price and pack size adjacent.
- Use strong titles and simple supporting copy.
- Align quantity controls across rows.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tenge figures.

## Layout

### Spacing System

Use a 4px base, 8px grid gaps, and 12px gutters.

### Grid & Container

Catalog uses two columns; cart and profile use single-column lists.

### Whitespace Philosophy

Keep browsing dense and empty/order states open.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog |
| 1 | Pale pink tile | Categories |
| 2 | Sticky raspberry action | Checkout |
| 3 | Sheet | Focused choice |

### Decorative Depth

Product imagery creates depth; UI stays flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and steppers |
| rounded-md | 12px | Category tiles |
| rounded-lg | 16px | Banners |
| rounded-full | full | Favorites |

### Photography & Illustration Geometry

Contain pack shots on white or pale pink and use aspect-fill campaign banners.

## Components

### Buttons

Primary actions are raspberry; secondary actions are white or pale pink.

### Pricing Tabs

Category and sort filters use pale segmented rows with raspberry selection.

### Cards & Containers

Product cards combine image, title, unit, current and old price, badges, and cart control.

### Inputs & Forms

Search and profile fields are pale gray with raspberry focus.

### Status & Build Page

Orders use large title, status, total, and time; empty states provide one recovery action.

### Navigation

Keep Catalog, Orders, Favorites, Profile, and Cart fixed.

### Footer

No footer; navigation or checkout action owns the safe area.

## Do's and Don'ts

### Do

- Keep quantity and total visible.
- Preserve clean pack shots.
- Show delivery threshold.
- Style native controls consistently.

### Don't

- Don't overdecorate empty states.
- Don't use raspberry for neutral metadata.
- Don't crop packaging.
- Don't add heavy shadows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten card metadata |
| Standard | 375–430px | Default two-column catalog |
| Wide | 431px+ | Expand basket gutters |

### Touch Targets

Search, filters, favorite, stepper, checkout, and navigation remain at least 44px.

### Collapsing Strategy

Keep two columns while titles remain readable and stack basket summaries.

### Image Behavior

Contain products and preserve category image balance.

## Iteration Guide

Tune catalog scanning first, then quantity, basket total, suggested extras, and order status.

## Known Gaps

- Full checkout forms were not visually sampled.
- Support conversation was not represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
