<design-context>
---
version: alpha
name: Magnit-design-analysis
description: "A vivid omnichannel grocery system on white, led by bright red commerce actions, warm orange-pink promotional gradients, dense product photography, compact prices and discounts, and loyalty-first navigation."
colors: {primary: "#F20D16", on-primary: "#FFFFFF", primary-hover: "#FF3038", primary-focus: "#CF000A", ink: "#202025", ink-muted: "#77777E", ink-subtle: "#A6A6AD", ink-tertiary: "#CCCCD1", canvas: "#FFFFFF", surface-1: "#F6F6F7", surface-2: "#EEEEF1", surface-3: "#E4E4E8", surface-4: "#D8D8DD", hairline: "#E7E7EA", hairline-strong: "#D0D0D5", hairline-tertiary: "#B8B8BF", inverse-canvas: "#202025", inverse-surface-1: "#323238", inverse-surface-2: "#44444C", inverse-ink: "#FFFFFF", brand-secure: "#FF8A34", semantic-success: "#32A95F", semantic-overlay: "#202025"}
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
  promo-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Magnit is a dense grocery and loyalty storefront with red commitment, warm promotional color, and product-first shopping.

**Key Characteristics:** red purchase actions; white catalog; warm campaign gradients; dense product cards; five business destinations.

## Colors

### Brand & Accent

Use red for commerce and loyalty emphasis; warm orange-pink gradients support campaigns.

### Surface

White carries shopping; pale gray groups categories, checkout, and recommendations.

### Text

Near-black carries product and total; gray carries unit, old price, and conditions.

### Semantic

Green means success, yellow rating, violet promo codes, and red current price or action.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for catalog and checkout data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Order state |
| headline | 20px | 700 | Section title |
| card-title | 15px | 600 | Product and total |
| body | 12px | 400 | Unit and detail |
| caption | 9px | 400 | Discount and rating |

### Principles

- Keep price, unit, discount, and quantity together.
- Use concise promotional copy.
- Align totals and fulfillment data.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tabular prices.

## Layout

### Spacing System

Use a 4px base, 8px product gaps, and 12px gutters.

### Grid & Container

Home uses rails; delivery uses two-column products; checkout uses one column and sticky actions.

### Whitespace Philosophy

Browsing is dense; payment and tracking receive more breathing room.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog |
| 1 | Pale card | Recommendations |
| 2 | Sticky red action | Cart and checkout |
| 3 | Sheet | Promo and fulfillment |

### Decorative Depth

Photography supplies depth; ordinary controls remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and search |
| rounded-md | 12px | Product and promo cards |
| rounded-lg | 16px | Sheets |
| rounded-full | full | Quantity and favorites |

### Photography & Illustration Geometry

Contain pack shots and aspect-fill campaign food photography without obscuring copy.

## Components

### Buttons

Primary actions are red; secondary actions are white or pale gray with red labels.

### Pricing Tabs

Delivery modes and filters use compact segmented controls with red selection.

### Cards & Containers

Product cards combine image, price, old price, discount, rating, title, and quantity action.

### Inputs & Forms

Search and checkout fields are pale with red focus and large readable values.

### Status & Build Page

Order confirmation and tracking use clear stages, map context, time, and support actions.

### Navigation

Keep Home, In Store, Delivery, Market, and Cosmetics fixed with red active state.

### Footer

No footer; navigation or sticky total owns the safe area.

## Do's and Don'ts

### Do

- Preserve price clarity.
- Show delivery conditions early.
- Keep loyalty visible.
- Style native controls consistently.

### Don't

- Don't use red for neutral metadata.
- Don't crop packaging.
- Don't hide promo conditions.
- Don't add heavy shadows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten cards and labels |
| Standard | 375–430px | Default shopping layout |
| Wide | 431px+ | Expand checkout gutters |

### Touch Targets

Search, favorites, quantity, cart, payment, and navigation remain at least 44px.

### Collapsing Strategy

Keep two columns while prices remain readable and stack checkout decisions.

### Image Behavior

Contain packages and preserve campaign focal subjects.

## Iteration Guide

Tune product comparison first, then cart, promotions, fulfillment, and tracking.

## Known Gaps

- Returns were not visually sampled.
- Cosmetics checkout was not reviewed end to end.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
