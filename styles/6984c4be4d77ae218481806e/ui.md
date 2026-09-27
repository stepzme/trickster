<design-context>
---
version: alpha
name: Fix-Price-design-analysis
description: "A value-retail marketplace led by vivid lime green, white commerce surfaces, blue informational accents, dense product rails, bold campaign banners, and a friendly lime hedgehog mascot used for loyalty, seasonal discovery, and order confirmation."
colors: { primary: "#7BC52B", on-primary: "#FFFFFF", primary-hover: "#68AD20", primary-soft: "#EBFFD7", accent: "#2E7AD9", ink: "#202124", ink-muted: "#74777D", ink-subtle: "#ADB1B7", canvas: "#FFFFFF", surface-1: "#F5F5F5", surface-2: "#EFF8E7", hairline: "#E1E3E6", semantic-success: "#4AAE38", semantic-warning: "#F2B423", semantic-danger: "#DF4B4B", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 10px }
  promo-banner: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Fix Price combines dense value shopping with a bright lime identity and a friendly mascot that carries loyalty and order moments.

## Colors

### Brand & Accent
Use lime for primary shopping actions and blue for informational links or secondary emphasis.

### Surface
Keep the canvas white, search and forms pale gray, and category modules lightly tinted.

### Text
Use near-black for product and price, gray for metadata, and pale gray for disabled state.

### Semantic
Use green for success, yellow for attention, and red for errors or destructive action.

## Typography

### Font Family
Use SF Pro Display for campaigns and SF Pro Text for products, forms, and checkout.

### Hierarchy
Use 32–38px heavy for campaigns, 22px for sections, 16px for cards, 14px body, and 10–12px metadata.

### Principles
Keep current price strongest, old price secondary, and product names readable within dense rails.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px module gaps, and 10px card padding.

### Grid & Container
Home stacks fulfillment, banners, categories, product rails, loyalty, and a five-tab footer; catalog becomes a compact list or grid.

### Whitespace Philosophy
Maintain retail density while separating discovery, product, and checkout into clear bands.

## Elevation & Depth
Use white cards and colored bands with minimal shadow; sticky cart and sheets may lift modestly.

### Decorative Depth
Product photography, campaign props, and mascot scenes create depth.

## Shapes

### Border Radius Scale
Use 10px for fields, 14px for cards and banners, 18px for sheets, and full circles for helper actions.

### Photography & Illustration Geometry
Contain product photography and place the mascot in rounded banners with generous negative space.

## Components

### Buttons
Use lime filled Add to cart and checkout controls; secondary actions remain white, outlined, or blue text.

### Pricing Tabs
Use segmented fulfillment and payment controls plus compact filter chips.

### Cards & Containers
Use product cards, campaign banners, category rails, loyalty blocks, cart rows, and checkout groups.

### Inputs & Forms
Search, recipient, payment, promo, loyalty, and fulfillment fields stay clearly grouped and labeled.

### Status & Build Page
Show availability, discount, cart count, placed, assembling, canceled, and loyalty status explicitly.

### Navigation
Home, Catalog, Cart, Stores, and Profile remain in the bottom bar.

### Footer
The white tab bar stays stable while lime marks active or populated commerce state.

## Do's and Don'ts

### Do
- Keep fulfillment and price visible.
- Use the mascot for guidance and celebration.
- Preserve search and cart state.

### Don't
- Don't let campaign color enter checkout forms.
- Don't obscure unit or availability.
- Don't mix mascot art into dense product cards.

## Responsive Behavior

### Breakpoints
Use two product columns on phones, three on tablet, and a filter rail above 1024px.

### Touch Targets
Keep product, favorite, quantity, fulfillment, payment, and tabs at least 44px.

### Collapsing Strategy
Preserve search, fulfillment, product, cart, total, and checkout; move banners below the shopping task.

### Image Behavior
Contain products without crop and keep mascot campaign copy unobstructed.

## Iteration Guide
1. Build navigation, fulfillment, catalog, and search.
2. Add product detail, loyalty, cart, and checkout.
3. Add stores, orders, support, and campaigns.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 30 flows were inventoried; Main, Product card, and Order processing were image-reviewed.
- Store and post-order edge cases were not deeply sampled.

</design-context>

Use the design system above for all UI you generate.
