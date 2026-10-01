<design-context>
---
version: 1
platform: iOS
name: Ozon-design-analysis
description: "A high-density marketplace interface with Ozon blue purchase actions, hot-pink sale signals, bright promotional banners, image-first product grids, compact commerce metadata, and persistent search."
colors: {primary: "#006DFF", on-primary: "#FFFFFF", primary-focus: "#0057CC", ink: "#16181B", ink-muted: "#686B71", ink-subtle: "#9A9DA3", ink-tertiary: "#C3C6CB", canvas: "#FFFFFF", surface-1: "#F5F7F9", surface-2: "#EAF0F5", surface-3: "#DEE5EB", surface-4: "#D1D9E0", hairline: "#E2E7EB", hairline-strong: "#CAD1D7", hairline-tertiary: "#B1BAC2", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#F20D7A", semantic-success: "#18B766", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Ozon is a dense image-led marketplace where blue purchase actions, pink sale metadata, constant search, and compact two-column products support fast discovery and checkout.

**Key Characteristics:** Ozon blue, sale pink, white canvas, promotional banners, two-column product grids, sticky blue purchase actions, and dense rating and delivery metadata.

# Non-negotiable visual invariants

- The reference consistently shows ozon blue.
- The reference consistently shows sale pink.
- Sampled screens consistently use white canvas.
- The reference consistently shows promotional banners.
- The reference consistently shows two-column product grids.
- The reference consistently shows sticky blue purchase actions.
- The reference consistently shows dense rating and delivery metadata.

# Color and surfaces

### Brand & Accent

Blue owns cart, checkout, active navigation, fulfillment, and trust. Pink marks sale, urgency, and favorites; it is not the default action color.

### Surface

White carries browsing and checkout; pale blue-gray separates sticky bars, seller groups, and recommendation modules.

### Text

Near-black leads product and total; gray supports seller, delivery, review count, and crossed-out price.

### Semantic

Green confirms delivery and order success; yellow marks rating or reward; pink remains sale-specific.

# Typography

### Font Family

Use SF Pro Display for commerce and checkout headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with product, current price, delivery promise, or order total.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with compact price metrics and clear small Cyrillic.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

Home and results use two product columns and wide campaign rails; detail and checkout use one structured column.

### Whitespace Philosophy

Catalog density is intentional; checkout and success states must simplify and separate commitments.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use product photography, banner art, and sticky action bars; product cards themselves stay nearly flat.

# Navigation appearance

Use compact bottom destinations with blue active icon and pale gray inactive icons.

# Components

### Buttons

Primary cart and checkout use solid blue; favorite uses pink; secondary actions use pale fills or text.

### Cards & Containers

Product cards align image, price, discount, stock, rating, reviews, and delivery; seller or checkout groups span full width.

### Inputs & Forms

Search remains a pale prominent bar with suggestions, categories, and native keyboard styled by surrounding Ozon chrome.

# Imagery and icons

Use product photography, banner art, and sticky action bars; product cards themselves stay nearly flat.

Product images use consistent square or portrait crops; banners remain wide; detail media is large and centered.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep scarcity, sale time, delivery, installment, cart count, payment, and order confirmation near the affected item.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Preserve image, price, delivery, and cart action; reduce banner and recommendation density first.

### Image Behavior

Contain product photography without distortion and preserve embedded campaign copy inside safe areas.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't wrap each product in a heavy bordered container or hide fulfillment facts.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
