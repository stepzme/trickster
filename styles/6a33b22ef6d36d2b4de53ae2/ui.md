<design-context>
---
version: 1
platform: iOS
name: Ozon-Fresh-design-analysis
description: "A fast grocery interface combining a black delivery-status header, a white rounded shopping sheet, turquoise purchase actions, hot-pink promotion signals, playful dimensional category art, and dense product photography."
colors: {primary: "#12C9C2", on-primary: "#FFFFFF", primary-focus: "#08A9A4", ink: "#141518", ink-muted: "#666A70", ink-subtle: "#9A9EA4", ink-tertiary: "#C8CBD0", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#ECEFF1", surface-3: "#E2E5E8", surface-4: "#D7DBDF", hairline: "#E6E8EA", hairline-strong: "#CDD1D5", hairline-tertiary: "#B7BCC1", inverse-canvas: "#08090A", inverse-surface-1: "#202225", inverse-surface-2: "#303337", inverse-ink: "#FFFFFF", brand-secure: "#F53F87", semantic-success: "#19B96B", semantic-overlay: "#111315"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Ozon Fresh is a high-tempo grocery storefront. The black delivery header and white rounded content sheet establish the frame; turquoise carries purchase and delivery progress, while pink marks discounts and small moments of delight.

**Key Characteristics:** black delivery context, white shopping sheet, turquoise actions, pink discounts, photographic food, rounded product tiles, dense recommendations, and playful category art.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: black delivery context.
- The reviewed screens show this treatment: white shopping sheet.
- The reviewed screens show this treatment: turquoise actions.
- The reviewed screens show this treatment: pink discounts.
- The reviewed screens show this treatment: photographic food.
- The reviewed screens show this treatment: rounded product tiles.
- The reviewed screens show this treatment: dense recommendations.
- The reviewed screens show this treatment: playful category art.

# Color and surfaces

### Brand & Accent

Turquoise owns cart, continuation, delivery progress, and active commerce. Hot pink marks discounts, rewards, and promotional emphasis.

### Surface

White is the main shopping surface; pale gray separates modules; near-black is reserved for delivery context and selected compact controls.

### Text

Near-black leads product names and prices; layered grays carry quantity, delivery, reviews, and crossed-out values.

### Semantic

Green confirms completion, turquoise indicates active fulfillment, and pink communicates savings rather than generic status.

# Typography

### Font Family

Use SF Pro Display for section and price emphasis and SF Pro Text for product metadata and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28pt | 700 | Major state |
| headline | 20pt | 700 | Section title |
| card-title | 16pt | 600 | Product or action |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Rating and delivery meta |

### Principles

- Lead with price, product, ETA, or order state.
- Keep repeated commerce facts compact and aligned.
- Use bold type selectively for decisions and totals.

### Note on Font Substitutes

Use the platform sans with clear small Cyrillic and tabular price numerals.

# Screen composition

### Grid & Container

Home mixes horizontal rails and banners; catalogs use two product columns; cart and order tracking become structured single columns.

### Whitespace Philosophy

Density supports fast basket building, but checkout and fulfillment states receive larger grouped gaps.

# Navigation appearance

Use a compact five-item bottom bar and keep delivery context above scrollable content.

# Components

### Buttons

Primary continuation and cart actions use turquoise; selected compact options may use charcoal; secondary actions remain pale.

Category and option chips use compact pills with charcoal or turquoise selection.

### Cards & Containers

Product cards combine image, discount, current and old price, name, stock, rating, and an in-place basket control.

### Inputs & Forms

Search is a prominent pale rounded bar; selection rows and native controls inherit the same type, spacing, and turquoise focus.

### Status & Build Page

Keep ETA, courier state, minimum basket progress, discount, item count, and delivery confirmation next to the affected action.

### Navigation

Use a compact five-item bottom bar and keep delivery context above scrollable content.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Shopping content |
| 1 | Pale rounded tile | Categories and products |
| 2 | Sticky action bar | Basket commitment |
| 3 | Sheet over dimmed context | Product or choice focus |

### Decorative Depth

Use food photography, softly modeled category art, and the dark-to-white sheet transition; avoid ornamental shadows.

# States

Keep ETA, courier state, minimum basket progress, discount, item count, and delivery confirmation next to the affected action.

# iOS adaptation

### Touch Targets

Basket controls, navigation, category tiles, and sticky actions remain at least 44pt.

### Collapsing Strategy

Preserve search, price, quantity, ETA, and checkout action; reduce banners and recommendations first.

### Image Behavior

Contain products without distortion and keep embedded campaign copy inside safe areas.

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

- Preserve the black header, white sheet, and turquoise action hierarchy.
- Keep product photography and delivery state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't turn promotional pink into the default action color.
- Don't add borders or shadows around every product.
- Don't replace dense shopping utility with oversized editorial whitespace.

# Known gaps

- Rare payment failures and substitution disputes were not sampled.
- iPad and landscape layouts were not represented.
- The courier map's intermediate states were only partially reviewed.

</design-context>
