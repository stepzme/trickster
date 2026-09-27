<design-context>
---
version: alpha
name: Detsky-Mir-design-analysis
description: "A playful family marketplace on a pale icy-blue canvas with bright blue commerce actions, bold black headings, white rounded product cards, red discount signals, colorful category tiles, dense catalog grids, and a friendly blue bear mascot used across loyalty and promotional guidance."
colors:
  primary: "#078CE5"
  on-primary: "#FFFFFF"
  primary-hover: "#0075C5"
  primary-soft: "#E5F4FF"
  accent: "#6C35DB"
  ink: "#111318"
  ink-muted: "#737984"
  ink-subtle: "#AEB4BE"
  canvas: "#EFF6FF"
  surface-1: "#FFFFFF"
  surface-2: "#E4F0FA"
  hairline: "#DCE5EE"
  semantic-success: "#22A866"
  semantic-warning: "#FFB21A"
  semantic-danger: "#F04438"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 800, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 750, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 750, lineHeight: 1.20, letterSpacing: -0.1px }
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10px 8px }
  promo-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Detsky Mir combines a dense family catalog with cheerful loyalty and promotion. Blue anchors navigation and purchase, while a friendly bear and toy-like graphics make benefits approachable.

**Key Characteristics:**
- Pale blue retail canvas and white rounded modules.
- Bright blue purchase actions and selected navigation.
- Red discount prices with crossed-out history.
- Dense two-column product cards and horizontal offers.
- Blue bear mascot across loyalty and guidance.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Catalog, cart actions, active navigation, and links.
- **Primary Soft** ({colors.primary-soft}): Selected or informational modules.
- **Purple Accent** ({colors.accent}): Zoo and special campaign entry points.

### Surface
- **Canvas** ({colors.canvas}): Home and catalog background.
- **Surface 1** ({colors.surface-1}): Cards, forms, and checkout sections.
- **Surface 2** ({colors.surface-2}): Secondary bands and selection.
- **Hairline** ({colors.hairline}): Product and form boundaries.

### Text
- **Ink** ({colors.ink}): Product names, headings, and current prices.
- **Ink Muted** ({colors.ink-muted}): Specifications and fulfillment metadata.
- **Ink Subtle** ({colors.ink-subtle}): Old price and disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Availability and completed status.
- **Warning** ({colors.semantic-warning}): Rating and limited attention.
- **Danger** ({colors.semantic-danger}): Discounts, failures, and destructive action.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family
- **SF Pro Display** — store headings and benefit statements.
- **SF Pro Text** — product cards, specifications, and checkout.
- **SF Mono** — order numbers and payment references.

### Hierarchy
Use 32–38px heavy for campaign statements, 22px for sections, 16px semibold for cards, 14px body, and 10–12px dense product metadata.

### Principles
- Keep current price strongest in product cards.
- Limit labels to readable short lines.
- Use bold headings for family-friendly clarity.
- Keep checkout copy calmer than campaigns.

### Note on Font Substitutes
Use the platform system sans or **Inter** with a heavy display weight and tabular prices.

## Layout

### Spacing System
Use a 4px base, 12px module gaps, 16px gutters, 10px product-card padding, and 16px checkout section padding.

### Grid & Container
Home stacks search, utility tiles, promotions, product rails, and the fixed four-tab bar. Catalog and recommendations use dense two-column grids.

### Whitespace Philosophy
Keep retail density high but separate discovery, product comparison, and checkout into clear white zones.

## Elevation & Depth
Use white cards and pale-blue bands with light boundaries. Reserve stronger elevation for sticky cart actions and payment confirmation.

### Decorative Depth
Mascot art, toy icons, product photography, and bright campaign fields supply depth while the commerce shell stays flat.

## Shapes

### Border Radius Scale
Use 10px for inputs, 14px for product and promo cards, 18px for sheets, 24px for major campaign modules, and full circles for icons.

### Photography & Illustration Geometry
Use isolated product photography on white cards and rounded mascot scenes with generous light-blue negative space.

## Components

### Buttons
Use blue filled purchase buttons, blue text links, and outlined filters. Keep sticky Add to cart and Pay controls full-width.

### Pricing Tabs
Use filter chips for category, delivery speed, exclusivity, and sorting; selection gains a blue outline or pale fill.

### Cards & Containers
Use product cards, campaign banners, utility tiles, bonus cards, recommendation rails, cart items, and checkout sections.

### Inputs & Forms
Search stays globally prominent with barcode scan. Checkout groups fulfillment, payment, recipient, and certificate fields.

### Status & Build Page
Show discount, rating, exclusive price, availability, cart count, payment confirmation, canceled order, and bonus state explicitly.

### Navigation
Home, Catalog, Profile, and Cart remain in the tab bar; search and support are surfaced near the top of Home.

### Footer
The white tab bar stays stable while sticky purchase actions sit immediately above it.

## Do's and Don'ts

### Do
- Keep current price and discount easy to compare.
- Use mascot art for benefits and guidance.
- Preserve scan and search access.
- Keep fulfillment and payment choices explicit.

### Don't
- Don't mix mascot art into dense product rows.
- Don't hide old price or unit context.
- Don't let campaign color overtake checkout.
- Don't rely on icons alone for family-critical actions.

## Responsive Behavior

### Breakpoints
Use two product columns on phones, three from 768px, and a wider catalog with persistent filters above 1024px.

### Touch Targets
Keep search, scan, tiles, products, favorite, quantity, fulfillment, payment, and navigation at least 44px.

### Collapsing Strategy
Preserve search, catalog, cart, price, fulfillment, and pay. Move campaigns and recommendation rails below active shopping tasks.

### Image Behavior
Contain product photography without crop; crop mascot banners only within their designed rounded frames and preserve embedded copy.

## Iteration Guide
1. Build navigation, search, and catalog.
2. Add product detail, favorites, and cart.
3. Add fulfillment, payment, and order status.
4. Add bonus card, family profile, and certificates.
5. Add campaigns, support, and reviews.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 47 flow names were inventoried; Main, Product card, and Placing an order were image-reviewed.
- Returns, support, and family bonus edge cases were not deeply sampled.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
