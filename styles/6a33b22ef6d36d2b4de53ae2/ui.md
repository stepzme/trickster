<design-context>
---
version: alpha
name: Ozon-Fresh-design-analysis
description: "A fast grocery interface combining a black delivery-status header, a white rounded shopping sheet, turquoise purchase actions, hot-pink promotion signals, playful dimensional category art, and dense product photography."
colors: {primary: "#12C9C2", on-primary: "#FFFFFF", primary-hover: "#35D7D1", primary-focus: "#08A9A4", ink: "#141518", ink-muted: "#666A70", ink-subtle: "#9A9EA4", ink-tertiary: "#C8CBD0", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#ECEFF1", surface-3: "#E2E5E8", surface-4: "#D7DBDF", hairline: "#E6E8EA", hairline-strong: "#CDD1D5", hairline-tertiary: "#B7BCC1", inverse-canvas: "#08090A", inverse-surface-1: "#202225", inverse-surface-2: "#303337", inverse-ink: "#FFFFFF", brand-secure: "#F53F87", semantic-success: "#19B96B", semantic-overlay: "#111315"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Ozon Fresh is a high-tempo grocery storefront. The black delivery header and white rounded content sheet establish the frame; turquoise carries purchase and delivery progress, while pink marks discounts and small moments of delight.

**Key Characteristics:** black delivery context, white shopping sheet, turquoise actions, pink discounts, photographic food, rounded product tiles, dense recommendations, and playful category art.

## Colors

### Brand & Accent

Turquoise owns cart, continuation, delivery progress, and active commerce. Hot pink marks discounts, rewards, and promotional emphasis.

### Surface

White is the main shopping surface; pale gray separates modules; near-black is reserved for delivery context and selected compact controls.

### Text

Near-black leads product names and prices; layered grays carry quantity, delivery, reviews, and crossed-out values.

### Semantic

Green confirms completion, turquoise indicates active fulfillment, and pink communicates savings rather than generic status.

## Typography

### Font Family

Use SF Pro Display for section and price emphasis and SF Pro Text for product metadata and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28px | 700 | Major state |
| headline | 20px | 700 | Section title |
| card-title | 16px | 600 | Product or action |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Rating and delivery meta |

### Principles

- Lead with price, product, ETA, or order state.
- Keep repeated commerce facts compact and aligned.
- Use bold type selectively for decisions and totals.

### Note on Font Substitutes

Use the platform sans with clear small Cyrillic and tabular price numerals.

## Layout

### Spacing System

Use a 4px base, 8–12px internal rhythm, and 12–16px screen gutters.

### Grid & Container

Home mixes horizontal rails and banners; catalogs use two product columns; cart and order tracking become structured single columns.

### Whitespace Philosophy

Density supports fast basket building, but checkout and fulfillment states receive larger grouped gaps.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Shopping content |
| 1 | Pale rounded tile | Categories and products |
| 2 | Sticky action bar | Basket commitment |
| 3 | Sheet over dimmed context | Product or choice focus |

### Decorative Depth

Use food photography, softly modeled category art, and the dark-to-white sheet transition; avoid ornamental shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount badge |
| rounded-sm | 8px | Actions and fields |
| rounded-md | 12px | Product tiles |
| rounded-lg | 16px | Modules and sheets |
| rounded-full | full | Quantity and icon controls |

### Photography & Illustration Geometry

Keep product images clean and contained; use wide food banners and compact isolated dimensional category objects.

## Components

### Buttons

Primary continuation and cart actions use turquoise; selected compact options may use charcoal; secondary actions remain pale.

### Pricing Tabs

Category and option chips use compact pills with charcoal or turquoise selection.

### Cards & Containers

Product cards combine image, discount, current and old price, name, stock, rating, and an in-place basket control.

### Inputs & Forms

Search is a prominent pale rounded bar; selection rows and native controls inherit the same type, spacing, and turquoise focus.

### Status & Build Page

Keep ETA, courier state, minimum basket progress, discount, item count, and delivery confirmation next to the affected action.

### Navigation

Use a compact five-item bottom bar and keep delivery context above scrollable content.

### Footer

No footer; persistent navigation and the active basket action own the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the black header, white sheet, and turquoise action hierarchy.
- Keep product photography and delivery state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't turn promotional pink into the default action color.
- Don't add borders or shadows around every product.
- Don't replace dense shopping utility with oversized editorial whitespace.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten metadata |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Basket controls, navigation, category tiles, and sticky actions remain at least 44px.

### Collapsing Strategy

Preserve search, price, quantity, ETA, and checkout action; reduce banners and recommendations first.

### Image Behavior

Contain products without distortion and keep embedded campaign copy inside safe areas.

## Iteration Guide

Tune discovery and basket building first, then checkout state, fulfillment clarity, recommendations, and edge cases.

## Known Gaps

- Rare payment failures and substitution disputes were not sampled.
- Tablet and landscape layouts were not represented.
- The courier map's intermediate states were only partially reviewed.

</design-context>

Use the design system above for all UI you generate.
