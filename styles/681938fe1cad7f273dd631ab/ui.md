<design-context>
---
version: alpha
name: Ozon-design-analysis
description: "A high-density marketplace interface with Ozon blue purchase actions, hot-pink sale signals, bright promotional banners, image-first product grids, compact commerce metadata, and persistent search."
colors: {primary: "#006DFF", on-primary: "#FFFFFF", primary-hover: "#2584FF", primary-focus: "#0057CC", ink: "#16181B", ink-muted: "#686B71", ink-subtle: "#9A9DA3", ink-tertiary: "#C3C6CB", canvas: "#FFFFFF", surface-1: "#F5F7F9", surface-2: "#EAF0F5", surface-3: "#DEE5EB", surface-4: "#D1D9E0", hairline: "#E2E7EB", hairline-strong: "#CAD1D7", hairline-tertiary: "#B1BAC2", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#F20D7A", semantic-success: "#18B766", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Ozon is a dense image-led marketplace where blue purchase actions, pink sale metadata, constant search, and compact two-column products support fast discovery and checkout.

**Key Characteristics:** Ozon blue, sale pink, white canvas, promotional banners, two-column product grids, sticky blue purchase actions, and dense rating and delivery metadata.

## Colors

### Brand & Accent

Blue owns cart, checkout, active navigation, fulfillment, and trust. Pink marks sale, urgency, and favorites; it is not the default action color.

### Surface

White carries browsing and checkout; pale blue-gray separates sticky bars, seller groups, and recommendation modules.

### Text

Near-black leads product and total; gray supports seller, delivery, review count, and crossed-out price.

### Semantic

Green confirms delivery and order success; yellow marks rating or reward; pink remains sale-specific.

## Typography

### Font Family

Use SF Pro Display for commerce and checkout headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with product, current price, delivery promise, or order total.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with compact price metrics and clear small Cyrillic.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home and results use two product columns and wide campaign rails; detail and checkout use one structured column.

### Whitespace Philosophy

Catalog density is intentional; checkout and success states must simplify and separate commitments.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use product photography, banner art, and sticky action bars; product cards themselves stay nearly flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Cards |
| rounded-lg | 16px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Product images use consistent square or portrait crops; banners remain wide; detail media is large and centered.

## Components

### Buttons

Primary cart and checkout use solid blue; favorite uses pink; secondary actions use pale fills or text.

### Pricing Tabs

Categories and filters use compact chips or scrollable rails with one blue selected state.

### Cards & Containers

Product cards align image, price, discount, stock, rating, reviews, and delivery; seller or checkout groups span full width.

### Inputs & Forms

Search remains a pale prominent bar with suggestions, categories, and native keyboard styled by surrounding Ozon chrome.

### Status & Build Page

Keep scarcity, sale time, delivery, installment, cart count, payment, and order confirmation near the affected item.

### Navigation

Use compact bottom destinations with blue active icon and pale gray inactive icons.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve blue action, pink sale, and image-first comparison hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't wrap each product in a heavy bordered container or hide fulfillment facts.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten secondary metadata |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44px.

### Collapsing Strategy

Preserve image, price, delivery, and cart action; reduce banner and recommendation density first.

### Image Behavior

Contain product photography without distortion and preserve embedded campaign copy inside safe areas.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
