<design-context>
---
version: 1
platform: iOS
name: Dixy-design-analysis
description: "A bright grocery commerce system with a white canvas, unmistakable orange loyalty and checkout actions, lime promotional accents, compact product grids, a barcode-first rewards header, cheerful 3D food imagery, and a recurring orange cat mascot that guides delivery and savings."
colors:
  primary: "#FF8600"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  loyalty-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  promo-banner: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 12 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
---

# Overview

Dixy combines loyalty, delivery, and grocery retail around a high-visibility orange rewards header. White shopping surfaces, product photography, a green promotional accent, and a small cat guide keep the catalog energetic.

**Key Characteristics:**
- Orange loyalty, cart, and checkout anchor.
- White catalog canvas with compact product rails.
- Lime accent for benefit and fulfillment emphasis.
- Barcode-first rewards experience.
- Orange cat mascot in promotional and helper positions.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Orange loyalty, cart, and checkout anchor.
- The reviewed screens show this treatment: White catalog canvas with compact product rails.
- The reviewed screens show this treatment: Lime accent for benefit and fulfillment emphasis.
- The reviewed screens show this treatment: Barcode-first rewards experience.
- The reviewed screens show this treatment: Orange cat mascot in promotional and helper positions.

# Color and surfaces

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

# Typography

### Font Family
- **SF Pro Display** — campaign, loyalty, and section headings.
- **SF Pro Text** — products, forms, and transaction detail.
- **SF Mono** — card number, receipt, and order references.

### Principles
- Keep product name, unit, old price, and current price distinct.
- Make total and pay action dominant in checkout.
- Keep loyalty values compact above the barcode.
- Use weight before adding more color.

### Note on Font Substitutes
Use the platform system sans or **Inter** with heavy display weights and tabular prices.

# Screen composition

### Spacing System
Use a 4pt base, 12pt module gaps, 16pt gutters, 8pt product padding, and 16pt checkout sections.

### Grid & Container
Home stacks loyalty, shortcuts, address, search, campaigns, product rails, and five-tab navigation. Catalog uses product tiles and category imagery.

### Whitespace Philosophy
Favor efficient retail density while preserving distinct bands for loyalty, delivery, promotion, products, and checkout.

# Navigation appearance

Home, Catalog, seasonal hub, Promotions, and Profile stay in the bottom bar; cart floats as a persistent action when populated.

# Components

### Buttons
Use orange filled cart and checkout actions, green final payment when appropriate, and outlined delivery or filter selection.

Use bordered segmented controls for delivery versus pickup and compact chips for sorting, filters, or favorite categories.

### Cards & Containers
Use loyalty header, shortcuts, offer banners, product cards, category still lifes, cart rows, and order-status panels.

### Inputs & Forms
Search includes scan. Checkout groups address, contact, substitution comment, payment, discounts, fees, and total.

### Status & Build Page
Show loyalty tier, cashback, coin count, coupons, order assembly, delivery progress, payment, and refund state explicitly.

### Navigation
Home, Catalog, seasonal hub, Promotions, and Profile stay in the bottom bar; cart floats as a persistent action when populated.

# Imagery and icons

Use subtle white-card separation and bottom sheets. Mascot and product renders create more depth than shadows.

### Decorative Depth
Use isolated food renders, gift props, branded campaign fields, and the 3D cat mascot; keep order forms flat.

# States

Show loyalty tier, cashback, coin count, coupons, order assembly, delivery progress, payment, and refund state explicitly.

# iOS adaptation

### Touch Targets
Keep barcode, shortcuts, search, scan, products, quantity, fulfillment, payment, and navigation at least 44pt.

### Collapsing Strategy
Preserve loyalty, address, search, cart, price, and checkout. Move promotional rails below active order state.

### Image Behavior
Contain product renders and category still lifes. Crop campaign banners only inside their intended frames and preserve embedded text.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 78 flow names were inventoried; Home, Loyalty card, and Placing an order were image-reviewed.
- Scanner, seasonal hub, reviews, and post-order branches were not deeply sampled.

</design-context>
