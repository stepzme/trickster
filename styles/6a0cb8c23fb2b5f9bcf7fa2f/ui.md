<design-context>
---
version: 1
platform: iOS
name: Lemana-PRO-design-analysis
description: "A practical home-improvement marketplace built on white with vivid construction-yellow commitment actions, charcoal filters, rounded floating navigation, and dense product photography. Loyalty, promotions, room solutions, catalog, fulfillment, and checkout share a sturdy utilitarian rhythm."
colors:
  primary: "#FFC900"
  on-primary: "#171717"
  primary-focus: "#E5B400"
  ink: "#171717"
  ink-muted: "#707075"
  ink-subtle: "#A3A3A8"
  ink-tertiary: "#C6C6CA"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F4"
  surface-2: "#ECECEA"
  surface-3: "#E1E1DE"
  surface-4: "#D4D4D0"
  hairline: "#E5E5E2"
  hairline-strong: "#D0D0CC"
  hairline-tertiary: "#B8B8B2"
  inverse-canvas: "#202326"
  inverse-surface-1: "#34383B"
  inverse-surface-2: "#494D50"
  inverse-ink: "#FFFFFF"
  brand-secure: "#C59800"
  semantic-success: "#3DA55A"
  semantic-overlay: "#171717"
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
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 26
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
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 10}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [11, 14]}
  availability-badge: {backgroundColor: "#DFF2FA", textColor: "#2E6C82", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 6]}
  bottom-nav: {backgroundColor: "rgba(255,255,255,0.94)", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
---

# Overview

Lemana PRO is a utilitarian home-improvement shop where yellow actions, charcoal filters, and product photography make complex projects feel manageable.

**Key Characteristics:**
- Yellow loyalty header and purchase actions.
- Floating white navigation dock.
- Two-column catalog and product comparison.
- Ready-made room solutions and service shortcuts.
- Fulfillment availability visible before checkout.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Yellow loyalty header and purchase actions.
- The reviewed screens show this treatment: Floating white navigation dock.
- The reviewed screens show this treatment: Two-column catalog and product comparison.
- The reviewed screens show this treatment: Ready-made room solutions and service shortcuts.
- The reviewed screens show this treatment: Fulfillment availability visible before checkout.

# Color and surfaces

### Brand & Accent

Construction yellow identifies brand, loyalty, selection, cart, and checkout. Charcoal handles filters and secondary commitment.

### Surface

White is the shopping canvas; warm pale gray separates category tiles, quantity controls, and checkout groups.

### Text

Near-black carries headings, price, and specifications. Gray supports unit price, availability, and secondary instructions.

### Semantic

Pale blue marks fulfillment availability. Green is reserved for success; red marks discounts and destructive states.

# Typography

### Font Family

Use SF Pro Display for strong section headings and SF Pro Text for dense product and fulfillment data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Project or campaign claim |
| headline | 20pt | 700 | Catalog and checkout title |
| card-title | 15pt | 600 | Product and section title |
| body | 12pt | 400 | Specifications and delivery |
| caption | 9pt | 400 | Unit price, rating, and badge |

### Principles

- Keep price and unit visible together.
- Use bold for categories and decision points.
- Favor short practical labels over editorial copy.

### Note on Font Substitutes

Inter is a suitable substitute; preserve compact Cyrillic and legible fractions or unit notation.

# Screen composition

### Grid & Container

Categories and products use two columns. Inspiration uses horizontal rails; checkout uses one stacked column.

### Whitespace Philosophy

Catalog density is useful. Open more space around project imagery, totals, address, and final actions.

# Navigation appearance

Keep the rounded floating dock with Home, Cart, Search, and Scanner. Native controls must inherit the yellow-charcoal hierarchy.

# Components

### Buttons

Primary actions are yellow with black type. Filters are charcoal with white type; low-priority actions use pale gray or white.

Quick filters use charcoal pills with removable selections; fulfillment modes use wide segmented rows.

### Cards & Containers

Product cards combine imagery, title, rating, current and former price, unit price, availability, and cart action without heavy borders.

### Inputs & Forms

Search is a white pill with scanner access. Address and contact forms use sheets, thin fields, and yellow confirmation actions.

### Status & Build Page

Availability badges distinguish store today, delivery tomorrow, and special order. Cart counts use small red badges.

### Navigation

Keep the rounded floating dock with Home, Cart, Search, and Scanner. Native controls must inherit the yellow-charcoal hierarchy.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale filled tile | Categories and controls |
| 2 | Floating white dock | Home, cart, search, scanner |
| 3 | Rounded sheet over scrim | Address and selectors |

### Decorative Depth

Use project photography and isolated product cutouts; UI shadows stay soft and limited to floating controls.

# States

Availability badges distinguish store today, delivery tomorrow, and special order. Cart counts use small red badges.

# iOS adaptation

### Touch Targets

Search, scanner, filter, cart, quantity, fulfillment, and dock targets remain at least 44pt.

### Collapsing Strategy

Keep products at two columns on phones; scroll filters horizontally and stack checkout options.

### Image Behavior

Contain pack shots and tools; aspect-fill interiors and campaign banners without cropping key fixtures.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Keep units, quantity, and fulfillment clear.
- Use yellow for brand and primary progress.
- Keep project inspiration photographic.
- Preserve scanner and search access.
- Adapt native controls to the floating dock system.

### Don't

- Don't use yellow as a large content background outside brand zones.
- Don't hide store availability.
- Don't add heavy shadows to product cards.
- Don't mix editorial typography into specifications.
- Don't replace real project imagery with decorative illustration.

# Known gaps

- Payment selection after contact details was not visible in the sampled checkout screens.
- Scanner camera interaction was not reviewed.
- iPad and landscape layouts were not represented.

</design-context>
