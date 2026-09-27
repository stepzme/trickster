<design-context>
---
version: alpha
name: Perekrestok-design-analysis
description: "A clean grocery-retail interface with a white canvas, layered fresh greens, loyalty-first home content, food photography, compact campaign tiles, circular quantity controls, and restrained gray utility structure."
colors: {primary: "#49BF45", on-primary: "#FFFFFF", primary-hover: "#63CC60", primary-focus: "#339A32", ink: "#17191B", ink-muted: "#676A6E", ink-subtle: "#9B9EA3", ink-tertiary: "#C7C9CD", canvas: "#FFFFFF", surface-1: "#F6F7F7", surface-2: "#EDF0EE", surface-3: "#E1E5E2", surface-4: "#D5DAD6", hairline: "#E5E8E5", hairline-strong: "#CCD2CD", hairline-tertiary: "#B6BDB7", inverse-canvas: "#1D512E", inverse-surface-1: "#2D7040", inverse-surface-2: "#3D8D50", inverse-ink: "#FFFFFF", brand-secure: "#1F8E46", semantic-success: "#43B94A", semantic-overlay: "#171A18"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
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
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Perekrestok uses a straightforward white grocery canvas with fresh green actions. Loyalty, offers, food photography, and a familiar cart hierarchy create a practical supermarket rhythm rather than a decorative lifestyle experience.

**Key Characteristics:** white canvas, fresh green actions, loyalty barcode, compact campaign rails, food photography, circular cart controls, clear payment sheets, and five-tab navigation.

## Colors

### Brand & Accent

Fresh green owns selection, add-to-cart, checkout, active navigation, and loyalty. Deeper greens support branding and secondary emphasis.

### Surface

White carries most content; pale gray groups shortcuts, cards, checkout sections, and selected payment rows.

### Text

Near-black leads headings, products, and totals; gray carries labels, crossed prices, conditions, and inactive navigation.

### Semantic

Green confirms action and success, yellow marks discount, and red is limited to destructive or attention states.

## Typography

### Font Family

Use SF Pro Display for section and total emphasis and SF Pro Text for catalog, loyalty, and checkout detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28px | 700 | Major state |
| headline | 20px | 700 | Screen or section title |
| card-title | 15px | 600 | Product or choice |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Price and delivery meta |

### Principles

- Lead with the current task, product, or total.
- Keep loyalty and offer facts compact.
- Align repeated price and quantity information.

### Note on Font Substitutes

Use the platform sans with clear small Cyrillic and stable numeric widths.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px screen gutters.

### Grid & Container

Home uses horizontal campaign and product rails; cart and checkout use a single vertically structured column.

### Whitespace Philosophy

Retail density is expected on Home and Catalog; checkout reduces noise and separates each commitment.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and cart |
| 1 | Pale grouped panel | Shortcut and checkout section |
| 2 | Sticky green action | Checkout commitment |
| 3 | Bottom sheet over scrim | Payment choice |

### Decorative Depth

Use food photography and softly tinted campaigns; keep functional rows flat and avoid heavy shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount label |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Campaign tile |
| rounded-lg | 16px | Grouped panel |
| rounded-full | full | Quantity and icon controls |

### Photography & Illustration Geometry

Food photography uses clean square or landscape crops; campaign tiles stay compact; empty-state graphics remain centered and utilitarian.

## Components

### Buttons

Primary cart and checkout use solid green; quantity changes use green circles; secondary actions remain pale or text-only.

### Pricing Tabs

Categories, preferences, and checkout wishes use compact chips with green or charcoal selection.

### Cards & Containers

Product rows align image, label, price, discount, quantity, and removal; home campaigns use small rounded tinted cards.

### Inputs & Forms

Search, wishes, delivery, and payment rows use grouped pale surfaces; native controls inherit green selection and platform behavior.

### Status & Build Page

Keep cart count, total, discount, delivery, payment, and order state visible near the affected action.

### Navigation

Use five compact bottom destinations with green active icon and gray inactive items.

### Footer

No footer; bottom navigation or the sticky checkout action owns the safe area.

## Do's and Don'ts

### Do

- Preserve the white and fresh-green retail hierarchy.
- Keep loyalty, price, quantity, and checkout state scannable.
- Style native controls to inherit this visual system.

### Don't

- Don't turn campaign colors into permanent navigation accents.
- Don't add card outlines and shadows to every catalog item.
- Don't hide fees or payment choices behind decorative layouts.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand imagery and gutters |

### Touch Targets

Quantity controls, navigation, campaign tiles, payment rows, and checkout remain at least 44px.

### Collapsing Strategy

Preserve product, price, quantity, total, payment, and checkout action; reduce campaigns and recommendations first.

### Image Behavior

Contain product imagery without distortion and preserve text-safe areas in campaign tiles.

## Iteration Guide

Tune loyalty and discovery first, then cart editing, checkout, payment selection, and order status.

## Known Gaps

- Substitution and refund recovery were not fully sampled.
- Long-tail empty and error states were only partially reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
