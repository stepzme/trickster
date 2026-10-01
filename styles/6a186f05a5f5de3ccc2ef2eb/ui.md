<design-context>
---
version: 1
platform: iOS
name: M-Video-design-analysis
description: "A dense electronics marketplace on white, driven by vivid red commerce actions, black technical type, light-gray grouping, large product photography, and compact price, discount, rating, cashback, service, and fulfillment data."
colors:
  primary: "#F20D1B"
  on-primary: "#FFFFFF"
  primary-focus: "#CF0010"
  ink: "#171719"
  ink-muted: "#77777D"
  ink-subtle: "#A8A8AE"
  ink-tertiary: "#CCCCD1"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F8"
  surface-2: "#EEEEF1"
  surface-3: "#E4E4E8"
  surface-4: "#D8D8DD"
  hairline: "#E7E7EA"
  hairline-strong: "#D0D0D5"
  hairline-tertiary: "#B8B8BF"
  inverse-canvas: "#171719"
  inverse-surface-1: "#29292D"
  inverse-surface-2: "#3B3B41"
  inverse-ink: "#FFFFFF"
  brand-secure: "#009F3D"
  semantic-success: "#18AA52"
  semantic-overlay: "#171719"
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
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  filter-chip: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [7, 10]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

M.Video is a promotion-heavy electronics storefront where red actions and precise technical data support comparison and checkout.

**Key Characteristics:**
- White canvas with vivid red purchase actions.
- Product photography and campaign banners.
- Dense pricing, cashback, rating, and specification data.
- Two-column results and sticky cart actions.
- Services, credit, delivery, and pickup decisions.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White canvas with vivid red purchase actions.
- The reviewed screens show this treatment: Product photography and campaign banners.
- The reviewed screens show this treatment: Dense pricing, cashback, rating, and specification data.
- The reviewed screens show this treatment: Two-column results and sticky cart actions.
- The reviewed screens show this treatment: Services, credit, delivery, and pickup decisions.

# Color and surfaces

### Brand & Accent

Use red for cart, checkout, and primary promotional emphasis. Black supports navigation; green is limited to success and recycling/service benefits.

### Surface

White is primary. Pale cool gray groups recommendations, filters, services, and checkout sections.

### Text

Near-black carries product and price decisions; gray carries model, old price, and conditions.

### Semantic

Red means commerce, green success, cyan savings, and dark chips active filters.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for dense product and checkout data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Order state |
| headline | 20pt | 700 | Catalog and checkout title |
| card-title | 15pt | 600 | Product and total |
| body | 12pt | 400 | Model and specification |
| caption | 9pt | 400 | Rating, discount, cashback |

### Principles

- Keep price and action visually adjacent.
- Use weight, not decoration, for technical hierarchy.
- Align numeric comparison data consistently.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tabular figures.

# Screen composition

### Spacing System

Use a 4pt base, 8pt grid gaps, and 12pt screen gutters.

### Grid & Container

Home uses rails; results use two columns; product and checkout use one column with sticky actions.

### Whitespace Philosophy

Shopping is dense, while payment and confirmation receive larger separation.

# Navigation appearance

Keep the five-item bottom bar fixed with the red M mark at center and cart badges visible.

# Components

### Buttons

Primary actions are red; secondary actions are white or pale gray with red or black labels.

Filters use removable dark pills. Payment and fulfillment options use bordered segmented cards.

### Cards & Containers

Product cards combine image, discount, price, old price, cashback, rating, title, and cart action.

### Inputs & Forms

Search and checkout fields are pale and compact; focus must inherit red or black styling.

### Status & Build Page

Confirmation uses a green success mark, order summary, reward facts, and fulfillment instructions.

### Navigation

Keep the five-item bottom bar fixed with the red M mark at center and cart badges visible.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale grouped surface | Recommendations and checkout |
| 2 | Sticky white bar | Price and purchase |
| 3 | Sheet over scrim | Credit and services |

### Decorative Depth

Photography provides depth; interface cards stay flat with restrained shadows.

# States

Confirmation uses a green success mark, order summary, reward facts, and fulfillment instructions.

# iOS adaptation

### Touch Targets

Search, filters, favorite, compare, quantity, cart, and payment remain at least 44pt.

### Collapsing Strategy

Keep two columns while prices remain readable; stack services and checkout choices.

### Image Behavior

Contain products, preserve campaign focal areas, and maintain consistent gallery ratios.

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

- Keep technical comparison readable.
- Show total, discount, and services before payment.
- Preserve red action priority.
- Style native controls into the system.

### Don't

- Don't use red for neutral metadata.
- Don't crop product silhouettes.
- Don't hide installment conditions.
- Don't add decorative illustration to product cards.

# Known gaps

- Returns and support were not visually sampled.
- Long-term order tracking was not represented.
- iPad and landscape layouts were not represented.

</design-context>
