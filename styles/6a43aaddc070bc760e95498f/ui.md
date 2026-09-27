<design-context>
---
version: alpha
name: Flip-design-analysis
description: "A dense general marketplace on white with cyan-blue navigation, yellow cart actions, bright category tiles, compact two-column product grids, prominent discount labels, image-first discovery, and a floating five-tab footer."
colors: { primary: "#18A8E1", on-primary: "#FFFFFF", primary-hover: "#0E8FC1", primary-soft: "#E4F7FF", accent: "#FFC814", ink: "#17181B", ink-muted: "#767A82", ink-subtle: "#B0B4BA", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#EDF8FC", hairline: "#E2E4E7", semantic-success: "#26A960", semantic-warning: "#FFC814", semantic-danger: "#E8475A", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 8px }
  category-tile: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10px }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 10px }
---

## Overview

Flip is a high-density marketplace where cyan organizes discovery and yellow marks cart intent.

## Colors

### Brand & Accent
Use cyan for navigation and category identity, yellow for cart and checkout, and pink-red for discounts.

### Surface
Keep product grids white, secondary controls light gray, and selection pale cyan.

### Text
Use black for price and product, gray for metadata, and pale gray for old or disabled values.

### Semantic
Use green for paid or verified, yellow for attention, and red for discounts or destructive action.

## Typography

### Font Family
Use SF Pro Display for campaigns and SF Pro Text for products, reviews, and checkout.

### Hierarchy
Use 30–36px for campaigns, 22px for sections, 16px for titles, 14px body, and 10–12px metadata.

### Principles
Prioritize price, discount, rating, delivery, and product name within compact cards.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

## Layout

### Spacing System
Use a 4px base, 8px product gaps, 12px module gaps, and 16px gutters.

### Grid & Container
Home stacks search, campaign, category tiles, product rails, and a floating footer; catalog is a dense two-column grid.

### Whitespace Philosophy
Use tight retail rhythm but separate campaigns, grids, and checkout clearly.

## Elevation & Depth
Keep cards flat and use the floating tab bar and modal sheets for depth.

### Decorative Depth
Product photography and campaign tile lettering provide visual interest.

## Shapes

### Border Radius Scale
Use 10px for search, 14px for banners, 18px for sheets, and full circles for cart controls.

### Photography & Illustration Geometry
Contain products on white or neutral backgrounds; treat 3D typography as bounded campaign art only.

## Components

### Buttons
Use yellow cart pills and checkout blocks; cyan identifies selected navigation and links.

### Pricing Tabs
Use compact category, sort, and filter chips with clear selection.

### Cards & Containers
Use product tiles, category blocks, campaign banners, cart rows, order summaries, and floating navigation.

### Inputs & Forms
Search supports photo input; checkout groups address, payment, promo, and recipient.

### Status & Build Page
Show discount, verified, delivery date, cart count, paid, tracking, and canceled state explicitly.

### Navigation
Home, Search, Cart, Favorites, and Profile remain in the bottom bar.

### Footer
The floating white pill footer keeps task destinations visible over product grids.

## Do's and Don'ts

### Do
- Keep price and discount scannable.
- Preserve photo search and favorites.
- Show delivery timing before purchase.

### Don't
- Don't let campaign colors redefine core actions.
- Don't hide seller or verification context.
- Don't crowd checkout with discovery modules.

## Responsive Behavior

### Breakpoints
Use two columns on phones, three to four on tablet, and persistent filters above 1024px.

### Touch Targets
Keep search, tiles, favorite, cart, filters, and tabs at least 44px.

### Collapsing Strategy
Preserve search, product, cart, total, and checkout; move campaigns below active shopping.

### Image Behavior
Contain product photography and preserve gallery aspect ratios.

## Iteration Guide
1. Build search, catalog, and product cards.
2. Add detail, favorites, cart, and checkout.
3. Add tracking, profile, reviews, and promotions.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 95 flows were inventoried; Main page, Product details, and Checkout were image-reviewed.
- Business shipping and subscription branches were not deeply sampled.
- No coherent illustration system appeared beyond campaign artwork.

</design-context>

Use the design system above for all UI you generate.
