<design-context>
---
version: alpha
name: Dixy-design-analysis
description: "A bright grocery commerce system with a white canvas, unmistakable orange loyalty and checkout actions, lime promotional accents, compact product grids, a barcode-first rewards header, cheerful 3D food imagery, and a recurring orange cat mascot that guides delivery and savings."
colors:
  primary: "#FF8600"
  on-primary: "#FFFFFF"
  primary-hover: "#E87500"
  primary-soft: "#FFF0DF"
  accent: "#8BEA27"
  accent-dark: "#24104F"
  ink: "#151515"
  ink-muted: "#777777"
  ink-subtle: "#B2B2B2"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#FFF5EB"
  hairline: "#E6E6E6"
  semantic-success: "#22AE43"
  semantic-danger: "#E8403A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
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
  loyalty-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  promo-banner: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 12px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Dixy combines loyalty, delivery, and grocery retail around a high-visibility orange rewards header. White shopping surfaces, product photography, a green promotional accent, and a small cat guide keep the catalog energetic.

**Key Characteristics:**
- Orange loyalty, cart, and checkout anchor.
- White catalog canvas with compact product rails.
- Lime accent for benefit and fulfillment emphasis.
- Barcode-first rewards experience.
- Orange cat mascot in promotional and helper positions.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Loyalty, cart, checkout, and active navigation.
- **Primary Soft** ({colors.primary-soft}): Offer and selection backgrounds.
- **Lime Accent** ({colors.accent}): Benefit, delivery, and high-energy promotion.
- **Dark Accent** ({colors.accent-dark}): Payment and high-contrast campaign actions.

### Surface
- **Canvas** ({colors.canvas}): Catalog and transactional background.
- **Surface 1** ({colors.surface-1}): Search, cards, and secondary controls.
- **Surface 2** ({colors.surface-2}): Promotional bands.
- **Hairline** ({colors.hairline}): Lists and forms.

### Text
- **Ink** ({colors.ink}): Product names, headings, and totals.
- **Ink Muted** ({colors.ink-muted}): Unit pricing and fulfillment metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled or historical values.

### Semantic
- **Success** ({colors.semantic-success}): Payment success and confirmed state.
- **Danger** ({colors.semantic-danger}): Errors, discounts, and destructive action.
- **Overlay** ({colors.semantic-overlay}): Loyalty and checkout sheets.

## Typography

### Font Family
- **SF Pro Display** — campaign, loyalty, and section headings.
- **SF Pro Text** — products, forms, and transaction detail.
- **SF Mono** — card number, receipt, and order references.

### Hierarchy
Use 32–38px heavy for campaign emphasis, 22px for sections, 16px semibold for cards, 14px body, and 10–12px price metadata.

### Principles
- Keep product name, unit, old price, and current price distinct.
- Make total and pay action dominant in checkout.
- Keep loyalty values compact above the barcode.
- Use weight before adding more color.

### Note on Font Substitutes
Use the platform system sans or **Inter** with heavy display weights and tabular prices.

## Layout

### Spacing System
Use a 4px base, 12px module gaps, 16px gutters, 8px product padding, and 16px checkout sections.

### Grid & Container
Home stacks loyalty, shortcuts, address, search, campaigns, product rails, and five-tab navigation. Catalog uses product tiles and category imagery.

### Whitespace Philosophy
Favor efficient retail density while preserving distinct bands for loyalty, delivery, promotion, products, and checkout.

## Elevation & Depth
Use subtle white-card separation and bottom sheets. Mascot and product renders create more depth than shadows.

### Decorative Depth
Use isolated food renders, gift props, branded campaign fields, and the 3D cat mascot; keep order forms flat.

## Shapes

### Border Radius Scale
Use 10px for search and chips, 14px for promotional cards, 18px for loyalty and sheets, and full circles for quantity or helper controls.

### Photography & Illustration Geometry
Isolate products on white, compose category objects as small still lifes, and keep the cat mascot in a compact corner or banner frame.

## Components

### Buttons
Use orange filled cart and checkout actions, green final payment when appropriate, and outlined delivery or filter selection.

### Pricing Tabs
Use bordered segmented controls for delivery versus pickup and compact chips for sorting, filters, or favorite categories.

### Cards & Containers
Use loyalty header, shortcuts, offer banners, product cards, category still lifes, cart rows, and order-status panels.

### Inputs & Forms
Search includes scan. Checkout groups address, contact, substitution comment, payment, discounts, fees, and total.

### Status & Build Page
Show loyalty tier, cashback, coin count, coupons, order assembly, delivery progress, payment, and refund state explicitly.

### Navigation
Home, Catalog, seasonal hub, Promotions, and Profile stay in the bottom bar; cart floats as a persistent action when populated.

### Footer
The five-tab footer keeps orange active state while the floating Cart control reports availability or count.

## Do's and Don'ts

### Do
- Keep loyalty and delivery context visible.
- Show price per unit and quantity clearly.
- Use the mascot for guidance and delight.
- Preserve search and scan entry points.

### Don't
- Don't let mascot art obscure product information.
- Don't use lime as the default primary action.
- Don't hide service fee or final total.
- Don't merge catalog discovery with checkout form density.

## Responsive Behavior

### Breakpoints
Use two to three product columns on phones, four on tablet, and a wider catalog with persistent filters above 1024px.

### Touch Targets
Keep barcode, shortcuts, search, scan, products, quantity, fulfillment, payment, and navigation at least 44px.

### Collapsing Strategy
Preserve loyalty, address, search, cart, price, and checkout. Move promotional rails below active order state.

### Image Behavior
Contain product renders and category still lifes. Crop campaign banners only inside their intended frames and preserve embedded text.

## Iteration Guide
1. Build loyalty, navigation, search, and address.
2. Add catalog, products, favorites, and cart.
3. Add checkout, payment, tracking, and receipts.
4. Add coupons, cashback, coins, and clubs.
5. Add promotions, referrals, support, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 78 flow names were inventoried; Home, Loyalty card, and Placing an order were image-reviewed.
- Scanner, seasonal hub, reviews, and post-order branches were not deeply sampled.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
