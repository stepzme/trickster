<design-context>
---
version: 1
platform: iOS
name: METRO-design-analysis
description: "A dense grocery marketplace on white, anchored by deep METRO blue, bright yellow loyalty accents, red prices and discounts, product pack shots, square category imagery, and a floating translucent bottom dock."
colors:
  primary: "#17478F"
  on-primary: "#FFFFFF"
  primary-focus: "#0B3471"
  ink: "#1D1D22"
  ink-muted: "#75757C"
  ink-subtle: "#A5A5AC"
  ink-tertiary: "#C8C8CE"
  canvas: "#FFFFFF"
  surface-1: "#F5F6F8"
  surface-2: "#EDF0F4"
  surface-3: "#E2E6EB"
  surface-4: "#D6DBE1"
  hairline: "#E5E8EB"
  hairline-strong: "#CED3D9"
  hairline-tertiary: "#B5BCC3"
  inverse-canvas: "#153B76"
  inverse-surface-1: "#102F60"
  inverse-surface-2: "#0B244A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FFE500"
  semantic-success: "#35A968"
  semantic-overlay: "#1D1D22"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 8}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 6}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xxl}", padding: [8, 10]}
---

# Overview

METRO is a high-density grocery storefront where deep blue drives purchase, yellow marks loyalty, and red keeps savings immediately visible.

**Key Characteristics:**
- White product-heavy canvas.
- Deep blue cart and checkout actions.
- Yellow loyalty and selected Home mark.
- Red price and discount emphasis.
- Floating rounded bottom dock.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White product-heavy canvas.
- The reviewed screens show this treatment: Deep blue cart and checkout actions.
- The reviewed screens show this treatment: Yellow loyalty and selected Home mark.
- The reviewed screens show this treatment: Red price and discount emphasis.
- The reviewed screens show this treatment: Floating rounded bottom dock.

# Color and surfaces

### Brand & Accent

Deep blue is primary. Yellow identifies METRO loyalty and selected brand moments; red is limited to discounts and current price.

### Surface

White carries shopping; pale cool gray groups fulfillment, categories, and checkout choices.

### Text

Near-black carries product names and totals; gray carries unit, old price, and conditions.

### Semantic

Green is success, yellow attention or loyalty, red savings, and blue commitment.

# Typography

### Font Family

Use SF Pro Display for section titles and SF Pro Text for compact catalog and checkout data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Order state |
| headline | 20pt | 700 | Catalog and checkout title |
| card-title | 15pt | 600 | Product and total |
| body | 12pt | 400 | Unit and fulfillment |
| caption | 9pt | 400 | Discount, rating, navigation |

### Principles

- Lead cards with image and current price.
- Keep unit price and discount together.
- Use bold for totals, not every label.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tabular prices.

# Screen composition

### Spacing System

Use a 4pt base, 8pt product gaps, and 12pt screen gutters.

### Grid & Container

Home uses horizontal product rails; catalog uses three category columns; results use two product columns.

### Whitespace Philosophy

Browsing is dense; checkout and address decisions use more separation.

# Navigation appearance

Keep five destinations in a floating translucent dock; Home receives the yellow-blue brand mark.

# Components

### Buttons

Primary actions are deep blue. Yellow is reserved for brand emphasis, not general confirmation.

Search categories and delivery modes use pale chips or segmented controls with blue selection.

### Cards & Containers

Product cards combine image, discount, favorite, price, unit, rating, title, and blue cart action.

### Inputs & Forms

Search is a floating white pill; checkout fields are stacked white rows with blue focus.

### Status & Build Page

Order progress uses compact stages and a visible add-on action. Errors stay near fulfillment or payment.

### Navigation

Keep five destinations in a floating translucent dock; Home receives the yellow-blue brand mark.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale group fill | Checkout and fulfillment |
| 2 | Floating dock | Navigation |
| 3 | Sheet over scrim | Filters and substitutions |

### Decorative Depth

Product and food photography supplies depth; UI shadows stay soft.

# States

Order progress uses compact stages and a visible add-on action. Errors stay near fulfillment or payment.

# iOS adaptation

### Touch Targets

Search, scan, favorite, cart, quantity, fulfillment, and navigation remain at least 44pt.

### Collapsing Strategy

Keep two product columns, scroll rails horizontally, and stack checkout choices.

### Image Behavior

Contain packaging, aspect-fill food scenes, and keep consistent product image boxes.

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

- Keep price and unit readable.
- Show substitutions and time before checkout.
- Preserve pack-shot consistency.
- Restyle native controls into the system.

### Don't

- Don't use yellow for every action.
- Don't hide old price or discount context.
- Don't crop packaging.
- Don't add heavy card shadows.

# Known gaps

- Completed delivery tracking was not visually sampled.
- Support and cancellation were not opened in detail.
- iPad and landscape layouts were not represented.

</design-context>
