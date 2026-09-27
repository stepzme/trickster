<design-context>
---
version: alpha
name: Wildberries-design-analysis
description: "A high-density marketplace built from hot magenta navigation, pale lilac search, white canvas, two-column product grids, large promotional carousels, compact discount metadata, and direct violet or orange purchase actions. Product photography carries most of the color while the chrome stays bright, fast, and conversion-oriented."

colors:
  primary: "#D900E5"
  on-primary: "#FFFFFF"
  primary-pressed: "#B500C2"
  ink: "#171719"
  ink-muted: "#77747C"
  ink-subtle: "#ABA8AF"
  canvas: "#FFFFFF"
  surface-1: "#F8F7FA"
  surface-2: "#F4E9FB"
  accent-orange: "#FF7B18"
  discount: "#EF2D89"
  price: "#D81BC9"
  hairline: "#E9E6EC"
  semantic-success: "#20A46E"
  semantic-warning: "#E4A331"
  semantic-danger: "#DC4C59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 9px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.15px }
  mono: { fontFamily: System Mono, fontSize: 11px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 16px }
  button-buy-now: { backgroundColor: "{colors.accent-orange}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 16px }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px 14px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0 }
  promo-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.headline}", rounded: "{rounded.lg}", padding: 16px }
---

## Overview

Wildberries maximizes product density while preserving quick comparison. Search, discount, price, delivery date, rating, and cart action stay visible around every product image.

## Colors

### Brand & Accent

Hot magenta owns brand, active navigation, search tint, cart, and standard purchase. Orange distinguishes Buy now and final checkout.

### Surface

Use white canvas, pale lilac search and promotion shells, and very light gray grouped checkout cards.

### Text

Use near-black for product names and totals, magenta for current price or discount, gray for former price and metadata, and white on saturated actions.

### Semantic

Use green for price decrease or free return, amber for rating and urgency, red for problems, and magenta only for marketplace action.

## Typography

### Font Family

Use a compact modern system sans with tabular figures for prices, quantities, and dates.

### Hierarchy

Use 25–32px page headings, 20px section headings, 13–17px key values, and 9–12px dense product metadata.

### Principles

Prioritize current price, delivery date, product identity, rating, and quantity. Previous price and promotion labels remain smaller.

### Note on Font Substitutes

Use SF Pro or Inter with tight line-height and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 6–8px product-grid gutters, 12–16px page gutters, and 20–24px between major modules.

### Grid & Container

Home and search use two-column product grids beneath search and banners. Product detail uses a large gallery and sticky split action; checkout uses one column.

### Whitespace Philosophy

Allow dense product browsing but keep each card's price and action zone consistent. Commitment screens should reduce recommendations around the primary task.

## Elevation & Depth

Use light grouped cards, sticky action bars, and mild sheet shadow. Product photography and banner composition provide most depth.

### Decorative Depth

Use 3D objects, collage, or illustration only inside advertising banners. Keep product, cart, checkout, and tracking surfaces functional.

## Shapes

### Border Radius Scale

Use 8px chips, 12px product images and cards, 16px banners, 22px sheets, and pills for discount or delivery labels.

### Photography & Illustration Geometry

Use consistent near-square product crops and wide promotional banners. Preserve product scale and leave overlays within safe corners.

## Components

### Buttons

Standard cart actions are violet-magenta; Buy now and final checkout are orange. Native controls must inherit these fills, radii, and compact type.

### Pricing Tabs

Variants, filters, sorting, pickup or delivery, and payment use chips, swatches, or rows with magenta selected state.

### Cards & Containers

Product cards contain image, favorite, visual-search badge, discount, price, former price, seller, title, rating, review count, and delivery action.

### Inputs & Forms

Search is a wide pale-lilac field with camera action. Checkout groups address, delivery, payment, contact, and subscription choices into clear rows.

### Status & Build Page

Use delivery date, stock urgency, order processing, in-transit, pickup code, courier, cancellation, refund, rating, and cart count states in context.

### Navigation

Use a five-item bottom bar for Home/Search, Catalog, Wallet or services, Cart, and Profile. Keep counts as small magenta badges.

### Footer

There is no footer. Seller, return, legal, support, and subscription information belongs in product or checkout detail.

## Do's and Don'ts

### Do

- Keep comparison facts in stable card positions.
- Distinguish cart and immediate purchase actions.
- Make delivery timing visible early.
- Use recommendations without interrupting checkout.

### Don't

- Do not let ad styling leak into transactional forms.
- Do not hide previous price or discount conditions.
- Do not mix inconsistent product-image ratios.
- Do not leave default native blue accents.

## Responsive Behavior

### Breakpoints

Phones use two product columns and one checkout flow. Wider screens may add product columns or pair gallery with purchase detail.

### Touch Targets

Search, camera, filters, product cards, favorites, cart actions, variants, address, payment, tracking, and navigation require at least 44px targets.

### Collapsing Strategy

Keep image, price, variant, delivery, seller, and purchase action visible. Collapse description, history, reviews, questions, and recommendations.

### Image Behavior

Use `cover` for product and campaign media with consistent card ratios; use `contain` when product silhouette must remain complete.

## Iteration Guide

Start with Home, search and filters, product grid, product detail and variants, cart, address or pickup, payment, checkout, processing, tracking, cancellation, and rating. Add seller and review depth afterward.

## Known Gaps

All 31 catalog flows were reviewed by structure with complete representative scenarios across launch, Home, search, product detail, checkout, and tracking. Advertising content varies widely and is not treated as one reusable illustration system.

</design-context>

Use the design system above for all UI you generate.
