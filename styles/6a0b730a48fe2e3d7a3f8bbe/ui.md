<design-context>
---
version: alpha
name: iHerb-design-analysis
description: "A dense but orderly health-commerce interface with a saturated green top bar, white product surfaces, orange add-to-cart actions, and information-rich catalog rows. Product photography, ratings, discount labels, health concern imagery, persistent search, and sticky purchase controls support comparison-heavy shopping without decorative chrome."
colors:
  primary: "#3D8B00"
  on-primary: "#FFFFFF"
  primary-hover: "#4FA714"
  primary-focus: "#2F6E00"
  ink: "#272727"
  ink-muted: "#5F5F5F"
  ink-subtle: "#8A8A8A"
  ink-tertiary: "#B0B0B0"
  canvas: "#FFFFFF"
  surface-1: "#F7F8F5"
  surface-2: "#EFF4E8"
  surface-3: "#F7F0E5"
  surface-4: "#E4ECD9"
  hairline: "#E2E2DE"
  hairline-strong: "#C9C9C3"
  hairline-tertiary: "#ACACA5"
  inverse-canvas: "#242424"
  inverse-surface-1: "#343434"
  inverse-surface-2: "#454545"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FF9400"
  semantic-success: "#3D8B00"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 31px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
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
  section: 44px
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-primary-pressed: {backgroundColor: "#E27F00", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "#FFA822", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  product-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px}
  product-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px}
  filter-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 7px 12px}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 9px 14px}
  detail-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 76px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 6px 8px}
---
## Overview

iHerb is an information-dense marketplace where green navigation communicates health and trust, orange marks shopping actions, and white content surfaces keep product evidence legible. Search, ratings, claims, pricing, and delivery requirements remain visible throughout the purchase path.

**Key Characteristics:**
- Saturated green persistent header and search.
- White catalog surfaces with dense product information.
- Orange add-to-cart controls; green checkout controls.
- Ratings, review counts, discount labels, and stock status.
- Horizontal filters and fixed bottom purchase actions.
- Health concern photography and product packshots.

## Colors

### Brand & Accent
- Green anchors navigation, trust, selection, and checkout.
- Orange is reserved for adding products and cart emphasis.

### Surface
- White is dominant.
- Pale green and warm cream group rewards, quality, and recommendations.
- Borders stay light gray.

### Text
- Dark gray carries product names and prices.
- Mid-gray supports brand, unit price, delivery, and metadata.
- Red is used sparingly for sale prices or low stock.

### Semantic
- Green signals positive quality and completion.
- Yellow stars carry rating evidence.

## Typography

### Font Family

- SF Pro Display for page and product headings.
- SF Pro Text for dense catalog and checkout copy.
- SF Mono for tightly aligned codes or order identifiers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 38px | 700 | Major price or completion |
| display-lg | 31px | 700 | Product title |
| display-md | 26px | 700 | Page title |
| headline | 22px | 700 | Section heading |
| card-title | 17px | 600 | Product or concern |
| body | 14px | 400 | Product details |
| caption | 10px | 400 | Units and navigation |

### Principles

- Use compact hierarchy to keep product evidence adjacent.
- Let price and title dominate ratings and metadata.
- Avoid tiny touch controls even when text is dense.

### Note on Font Substitutes

Use Apple system fonts for predictable multilingual and numeric rendering.

## Layout

### Spacing System

Use a 4px base, 12px inside product rows, and 20–24px between major merchandising groups.

### Grid & Container

Home and recommendations use horizontal product rails. Search results use one-column rows. Concerns and categories use two-column image grids.

### Whitespace Philosophy

Keep spacing efficient but preserve a visible gap between unrelated merchandising modules. Do not add card frames where whitespace is sufficient.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale tinted module | Rewards and recommendations |
| 2 | Sticky action bar | Add to cart and checkout |
| 3 | Rounded modal sheet | Long product details |

### Decorative Depth

Use product photography, concern imagery, and soft tinted modules. Avoid ornamental gradients and strong shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Buttons and rows |
| rounded-md | 12px | Product and concern tiles |
| rounded-lg | 16px | Promotion modules |
| rounded-xl | 22px | Modal sheets |
| rounded-pill | full | Search and filter chips |

### Photography & Illustration Geometry

Packshots sit on white with consistent scale. Lifestyle images use simple rounded rectangles. Preserve readable packaging.

## Components

### Buttons

Orange adds to cart. Green applies promo codes, saves checkout data, and completes orders. Use compact rounded rectangles, not pills.

### Pricing Tabs

Product detail tabs use text with a green underline. Filter choices use chips.

### Cards & Containers

Product rows combine image, brand, title, rating, availability, price, discount, and action. Related products use smaller horizontal tiles.

### Inputs & Forms

Search is a white pill inside the green header. Checkout fields are white with gray borders and explicit labels; warnings use pale yellow panels.

### Status & Build Page

Sale, low-stock, and brand badges sit near the affected product. Order completion returns immediately to recommendations and feedback.

### Navigation

Use five bottom destinations: Home, Catalog, Categories, Cart, Account. The selected icon and label turn green.

### Footer

No footer; sticky purchase and navigation controls end the mobile surface.

## Do's and Don'ts

### Do

- Keep search persistent.
- Show evidence close to every product.
- Separate add-to-cart orange from checkout green.
- Preserve packaging legibility.
- Keep customs and delivery requirements explicit.

### Don't

- Don't hide price or stock behind product details.
- Don't use oversized lifestyle imagery in search results.
- Don't turn every module into a shadowed card.
- Don't remove sticky purchase actions.
- Don't introduce decorative brand colors.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Narrow product rows and fewer visible chips |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Wider rails and two-column recommendations |

### Touch Targets

Cart, quantity, tabs, filters, and bottom navigation retain at least 44px hit areas.

### Collapsing Strategy

Filters and tabs scroll horizontally. Product rows remain one column; metadata wraps before action controls.

### Image Behavior

Use contain for packshots and aspect-fill for lifestyle photography.

## Iteration Guide

Tune product hierarchy and action color separation first, then density and imagery scale.

## Known Gaps

- Tablet and landscape layouts were not observed.
- Animation and loading behavior were not captured in stills.
- Subscription-specific flows were not reviewed.
</design-context>
