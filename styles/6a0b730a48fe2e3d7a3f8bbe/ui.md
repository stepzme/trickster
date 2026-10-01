<design-context>
---
version: 1
platform: iOS
name: iHerb-design-analysis
description: "A dense but orderly health-commerce interface with a saturated green top bar, white product surfaces, orange add-to-cart actions, and information-rich catalog rows. Product photography, ratings, discount labels, health concern imagery, persistent search, and sticky purchase controls support comparison-heavy shopping without decorative chrome."
colors:
  primary: "#3D8B00"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 31, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 44
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-primary-pressed: {backgroundColor: "#E27F00", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  product-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12}
  product-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12}
  filter-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [7, 12]}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [9, 14]}
  detail-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 6]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [6, 8]}
---

# Overview

iHerb is an information-dense marketplace where green navigation communicates health and trust, orange marks shopping actions, and white content surfaces keep product evidence legible. Search, ratings, claims, pricing, and delivery requirements remain visible throughout the purchase path.

**Key Characteristics:**
- Saturated green persistent header and search.
- White catalog surfaces with dense product information.
- Orange add-to-cart controls; green checkout controls.
- Ratings, review counts, discount labels, and stock status.
- Horizontal filters and fixed bottom purchase actions.
- Health concern photography and product packshots.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Saturated green persistent header and search.
- The reviewed screens show this treatment: White catalog surfaces with dense product information.
- The reviewed screens show this treatment: Orange add-to-cart controls; green checkout controls.
- The reviewed screens show this treatment: Ratings, review counts, discount labels, and stock status.
- The reviewed screens show this treatment: Horizontal filters and fixed bottom purchase actions.
- The reviewed screens show this treatment: Health concern photography and product packshots.

# Color and surfaces

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

# Typography

### Font Family

- SF Pro Display for page and product headings.
- SF Pro Text for dense catalog and checkout copy.
- SF Mono for tightly aligned codes or order identifiers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 38pt | 700 | Major price or completion |
| display-lg | 31pt | 700 | Product title |
| display-md | 26pt | 700 | Page title |
| headline | 22pt | 700 | Section heading |
| card-title | 17pt | 600 | Product or concern |
| body | 14pt | 400 | Product details |
| caption | 10pt | 400 | Units and navigation |

### Principles

- Use compact hierarchy to keep product evidence adjacent.
- Let price and title dominate ratings and metadata.
- Avoid tiny touch controls even when text is dense.

### Note on Font Substitutes

Use Apple system fonts for predictable multilingual and numeric rendering.

# Screen composition

### Grid & Container

Home and recommendations use horizontal product rails. Search results use one-column rows. Concerns and categories use two-column image grids.

### Whitespace Philosophy

Keep spacing efficient but preserve a visible gap between unrelated merchandising modules. Do not add card frames where whitespace is sufficient.

# Navigation appearance

Use five bottom destinations: Home, Catalog, Categories, Cart, Account. The selected icon and label turn green.

# Components

### Buttons

Orange adds to cart. Green applies promo codes, saves checkout data, and completes orders. Use compact rounded rectangles, not pills.

Product detail tabs use text with a green underline. Filter choices use chips.

### Cards & Containers

Product rows combine image, brand, title, rating, availability, price, discount, and action. Related products use smaller horizontal tiles.

### Inputs & Forms

Search is a white pill inside the green header. Checkout fields are white with gray borders and explicit labels; warnings use pale yellow panels.

### Status & Build Page

Sale, low-stock, and brand badges sit near the affected product. Order completion returns immediately to recommendations and feedback.

### Navigation

Use five bottom destinations: Home, Catalog, Categories, Cart, Account. The selected icon and label turn green.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale tinted module | Rewards and recommendations |
| 2 | Sticky action bar | Add to cart and checkout |
| 3 | Rounded modal sheet | Long product details |

### Decorative Depth

Use product photography, concern imagery, and soft tinted modules. Avoid ornamental gradients and strong shadows.

# States

Sale, low-stock, and brand badges sit near the affected product. Order completion returns immediately to recommendations and feedback.

# iOS adaptation

### Touch Targets

Cart, quantity, tabs, filters, and bottom navigation retain at least 44pt hit areas.

### Collapsing Strategy

Filters and tabs scroll horizontally. Product rows remain one column; metadata wraps before action controls.

### Image Behavior

Use contain for packshots and aspect-fill for lifestyle photography.

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

</design-context>
