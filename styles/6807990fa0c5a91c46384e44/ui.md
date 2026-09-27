<design-context>
---
version: alpha
name: Pyaterochka-design-analysis
description: "A lively grocery-retail interface with a white canvas, strong brand red actions, bright green promotional fields, colorful category tiles, playful 3D mascots, dense product photography, and compact loyalty and checkout modules."
colors: {primary: "#EF2838", on-primary: "#FFFFFF", primary-hover: "#F34B58", primary-focus: "#C91D2B", ink: "#17191B", ink-muted: "#696D72", ink-subtle: "#9CA0A5", ink-tertiary: "#C7CACE", canvas: "#FFFFFF", surface-1: "#F6F7F7", surface-2: "#EEF1EF", surface-3: "#E2E6E3", surface-4: "#D7DCD8", hairline: "#E5E8E5", hairline-strong: "#CCD2CD", hairline-tertiary: "#B6BDB7", inverse-canvas: "#198B3A", inverse-surface-1: "#25A849", inverse-surface-2: "#45BE63", inverse-ink: "#FFFFFF", brand-secure: "#22A541", semantic-success: "#62C64D", semantic-overlay: "#151816"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px}
  promo-card: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "#FFD91A", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Pyaterochka is a high-energy grocery app. White keeps product comparison clear, red owns the transaction and active navigation, green carries brand campaigns, and playful mascots and colorful category art make loyalty feel approachable.

**Key Characteristics:** white commerce canvas, red purchase actions, green campaigns, 3D mascots, colorful category tiles, dense product lists, loyalty and games, inline cart editing, and four destinations.

## Colors

### Brand & Accent

Red owns cart, primary CTA, active navigation, and important promotion labels. Green anchors branding, games, loyalty, and large campaign surfaces.

### Surface

White is the base; pale gray groups search, cart address, and recommendation modules; colorful tiles remain local to categories and campaigns.

### Text

Near-black leads products, prices, and headings; gray supports quantity, old price, delivery, and conditions; white is used over red or green.

### Semantic

Green confirms orders, yellow marks combo or discount, red drives purchase and urgency, and gray communicates inactive or secondary information.

## Typography

### Font Family

Use SF Pro Display for promotion and section emphasis and SF Pro Text for catalog, loyalty, and checkout detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Campaign or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Product or action |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Price and delivery meta |

### Principles

- Lead with product, current price, discount, or delivery state.
- Keep promotional headings short and bold.
- Align repeated cart facts for fast scanning.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic, clear small labels, and tabular prices.

## Layout

### Spacing System

Use a 4px base, 8–12px catalog gaps, 16px module padding, and compact bottom navigation.

### Grid & Container

Home mixes wide campaigns, horizontal rails, and colored category tiles; product detail and cart use one structured column.

### Whitespace Philosophy

Discovery is intentionally dense and colorful; product detail, cart, and order state simplify around price, quantity, and commitment.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale grouped panel | Search and address |
| 2 | Color campaign card | Loyalty and promotion |
| 3 | Sticky red action | Purchase commitment |

### Decorative Depth

Use product photography, soft 3D category objects, mascots, and saturated campaign fields; avoid heavy shadow around every item.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount label |
| rounded-sm | 8px | Inputs and controls |
| rounded-md | 12px | Category tile |
| rounded-lg | 16px | Campaign card |
| rounded-full | full | Primary CTA and icon action |

### Photography & Illustration Geometry

Contain products in clean square or portrait crops; use mascots and dimensional icons as isolated objects inside clear promotional panels.

## Components

### Buttons

Primary cart and checkout actions use red rounded pills; campaign actions may use white pills over green; secondary controls stay pale.

### Pricing Tabs

Delivery mode, store mode, filters, and categories use segmented tiles or compact chips with red or green selection cues.

### Cards & Containers

Product rows align image, promotion, price, quantity, and removal; campaign cards combine short offer, mascot or product art, and one action.

### Inputs & Forms

Search is a pale prominent field with barcode entry; checkout rows use grouped surfaces and native controls styled with red focus and clear labels.

### Status & Build Page

Keep discount, combo, stock, item count, total, payment, confirmation, delivery time, and add-to-order cutoff near the relevant action.

### Navigation

Use four bottom destinations for Home, Catalog, Contact us, and Profile, with red active state and gray inactive icons.

### Footer

No footer; bottom navigation or the current cart action owns the safe area.

## Do's and Don'ts

### Do

- Preserve red transaction and green promotion roles.
- Keep product, price, quantity, and delivery immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't make every category tile red or green.
- Don't let games and mascots obscure grocery decisions.
- Don't add heavy borders or shadows to every product row.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand campaigns and gutters |

### Touch Targets

Navigation, delivery mode, search tools, quantity controls, campaign actions, and checkout remain at least 44px.

### Collapsing Strategy

Preserve product, price, quantity, delivery, total, and checkout action; reduce campaigns, games, and recommendations first.

### Image Behavior

Contain product photography without distortion and preserve text-safe areas around mascots and promotional art.

## Iteration Guide

Tune Home and Catalog first, then product detail, cart, checkout, order state, loyalty, and games.

## Known Gaps

- Refund and substitution recovery were not fully sampled.
- The yearly summary was not central to the current commerce style analysis.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
