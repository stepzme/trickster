<design-context>
---
version: 1
platform: iOS
name: Globus-design-analysis
description: "A practical grocery-commerce interface built on white surfaces, saturated orange actions and headers, fresh green promotional imagery, and dense product photography. Soft cards, compact prices, and a five-destination bottom bar balance discovery with fast repeat shopping."
colors: {primary: "#F47B20", on-primary: "#FFFFFF", primary-focus: "#D9600D", ink: "#202124", ink-muted: "#666A6E", ink-subtle: "#969A9E", ink-tertiary: "#C5C8CA", canvas: "#FFFFFF", surface-1: "#F7F7F5", surface-2: "#F0F1EE", surface-3: "#E5E7E2", surface-4: "#D7DBD4", hairline: "#E7E8E4", hairline-strong: "#CDD1CA", hairline-tertiary: "#B6BCB3", inverse-canvas: "#2F7F31", inverse-surface-1: "#469644", inverse-surface-2: "#67AA5F", inverse-ink: "#FFFFFF", brand-secure: "#F47B20", semantic-success: "#3B9744", semantic-overlay: "#1A1C1B"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10}
  promo-card: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  status-badge: {backgroundColor: "#E94835", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Globus is a dense but orderly grocery storefront. Orange drives search and purchase, white keeps product comparison clean, and green campaign photography communicates freshness.

**Key Characteristics:** orange header and actions, white commerce cards, green food campaigns, image-led categories, compact price stacks, soft shadows, and a persistent five-item bottom bar.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: orange header and actions.
- The reviewed screens show this treatment: white commerce cards.
- The reviewed screens show this treatment: green food campaigns.
- The reviewed screens show this treatment: image-led categories.
- The reviewed screens show this treatment: compact price stacks.
- The reviewed screens show this treatment: soft shadows.
- The reviewed screens show this treatment: a persistent five-item bottom bar.

# Color and surfaces

### Brand & Accent

Orange owns the header, cart actions, active controls, and important utility entry points. Green belongs to fresh-food campaigns and positive states.

### Surface

White is the base. Pale warm gray groups search, category, cart, and delivery modules; campaign color remains contained within promotional cards.

### Text

Near-black leads names, totals, and headings. Gray supports weight, unit price, fulfillment, old price, and conditions.

### Semantic

Orange means action, green confirms availability or success, and red marks discounts or price urgency. Do not use campaign green as a substitute for purchase action.

# Typography

### Font Family

Use SF Pro Display for promotion and section emphasis and SF Pro Text for catalog density, pricing, delivery, and checkout.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28pt | 700 | Campaign or major state |
| headline | 20pt | 700 | Section title |
| card-title | 15pt | 600 | Product or category |
| body | 13pt | 400 | Product and order detail |
| caption | 10pt | 400 | Unit price and delivery meta |

### Principles

- Put current price, product name, and availability in a stable order.
- Use compact weights and short labels in repeated cards.
- Align price, quantity, and cart controls across lists.

### Note on Font Substitutes

Use the platform sans with clear Cyrillic and tabular numerals.

# Screen composition

### Grid & Container

Home combines wide campaigns and horizontal product rails. Catalog, product detail, and cart move into a focused single-column hierarchy.

### Whitespace Philosophy

Discovery may be dense, but each product card needs a clean image area and an uninterrupted price-to-action path.

# Navigation appearance

Use five bottom destinations with an orange active state. Keep search and selected fulfillment context visible when entering catalog.

# Components

### Buttons

Primary add-to-cart and checkout controls use orange with white labels. Secondary actions stay white or pale with dark text.

Delivery mode, categories, filters, and sorting use compact chips or segmented controls with orange selection.

### Cards & Containers

Product cards align image, badge, title, current and old price, unit detail, and cart control. Campaign cards combine food imagery with one concise offer.

### Inputs & Forms

Search is prominent and pale with barcode or history utilities. Native form controls must inherit orange focus, these radii, spacing, and type.

### Status & Build Page

Keep stock, discount, quantity, delivery slot, substitutions, total, and order state adjacent to the relevant decision.

### Navigation

Use five bottom destinations with an orange active state. Keep search and selected fulfillment context visible when entering catalog.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale grouped field | Search and delivery |
| 2 | Soft white card | Product and category |
| 3 | Orange sticky action | Add, cart, or checkout |

### Decorative Depth

Use product cutouts, grocery photography, and restrained soft shadow. Avoid ornamental illustration or glossy effects unrelated to the merchandise.

# States

Keep stock, discount, quantity, delivery slot, substitutions, total, and order state adjacent to the relevant decision.

# iOS adaptation

### Touch Targets

Search tools, category cards, filters, quantity controls, navigation, and checkout remain at least 44pt.

### Collapsing Strategy

Preserve product, price, stock, quantity, delivery, total, and checkout; reduce campaigns and recommendations first.

### Image Behavior

Contain product photography without distortion and crop campaign imagery around a deliberate text-safe area.

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

- Keep orange reserved for action and active state.
- Make image, product, price, quantity, and delivery easy to scan.
- Let campaign photography carry freshness.

### Don't

- Don't turn every card orange or green.
- Don't use large shadow on every catalog item.
- Don't hide unit price or fulfillment behind decoration.

# Known gaps

- Substitution and refund recovery were not fully sampled.
- iPad and landscape layouts were not represented.

</design-context>
