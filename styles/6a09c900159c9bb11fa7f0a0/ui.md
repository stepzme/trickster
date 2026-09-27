<design-context>
---
version: alpha
name: OZON-Select-design-analysis
description: "A monochrome fashion-commerce interface built from a black canvas, large white product cards, editorial photography, compact serif branding, hot-pink price signals, and pill-shaped black purchase controls."
colors: {primary: "#151517", on-primary: "#FFFFFF", primary-hover: "#2B2B2F", primary-focus: "#000000", ink: "#101012", ink-muted: "#66676C", ink-subtle: "#9B9CA1", ink-tertiary: "#C6C7CB", canvas: "#09090B", surface-1: "#FFFFFF", surface-2: "#F3F3F5", surface-3: "#E8E8EB", surface-4: "#DCDDE1", hairline: "#E4E4E7", hairline-strong: "#CDCDD2", hairline-tertiary: "#B6B7BD", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F7F7F8", inverse-surface-2: "#ECECEF", inverse-ink: "#101012", brand-secure: "#E91E63", semantic-success: "#30A96B", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  product-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 10px}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

OZON Select is a black-and-white fashion marketplace. Large white product cards and editorial imagery dominate; pink is restricted to prices and sale urgency, while actions remain black.

**Key Characteristics:** black canvas, white rounded product islands, editorial fashion photography, compact product metadata, pink sale prices, pill purchase controls, and minimal icon navigation.

## Colors

### Brand & Accent

Black is the controlling action and navigation color. Hot pink marks price reductions, favorites, and scarcity without becoming a general-purpose CTA.

### Surface

The black page makes white product cards read as isolated display plinths; pale gray appears inside search, filters, and secondary rows.

### Text

Black leads product and totals on white; white leads section labels on black; gray carries brands, old prices, ratings, and logistics.

### Semantic

Pink marks sale and desire; green is reserved for success; selection otherwise relies on monochrome contrast.

## Typography

### Font Family

Use SF Pro for interface copy, with a restrained high-contrast serif treatment only for the compact Select wordmark character.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Major campaign state |
| headline | 20px | 700 | Section title |
| card-title | 15px | 600 | Product or total |
| body | 13px | 400 | Description |
| caption | 10px | 400 | Rating and delivery |

### Principles

- Let imagery and price lead.
- Keep product metadata dense but calm.
- Maintain crisp black/white hierarchy before adding accent.

### Note on Font Substitutes

Use the platform sans; pair with a compact Didone only where a brand-like editorial label is required.

## Layout

### Spacing System

Use a 4px base, 8–12px card rhythm, and 12px gutters between large product tiles.

### Grid & Container

Discovery and search use two columns; product details and cart use single wide rounded sheets over the black canvas.

### Whitespace Philosophy

White cards supply breathing room, while the black gaps keep the dense grid visually separated.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Browsing field |
| 1 | White rounded island | Product and cart group |
| 2 | Sticky black pill | Purchase commitment |
| 3 | Sheet over context | Focused choice |

### Decorative Depth

Use polished product photography and alternating black/white masses rather than shadows or atmospheric effects.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Sale badge |
| rounded-sm | 8px | Fields |
| rounded-md | 12px | Campaign tile |
| rounded-lg | 16px | Product card |
| rounded-full | full | Purchase pills and category circles |

### Photography & Illustration Geometry

Product photography fills tall portrait cards; campaign imagery uses broad rounded crops; line-art category objects sit inside dark circles.

## Components

### Buttons

Use black pill buttons with white labels for buy and checkout; pale controls handle filters and secondary actions.

### Pricing Tabs

Filters and size or delivery options form horizontally scrolling pills with high-contrast selected states.

### Cards & Containers

Cards pair large media with favorite, price, sale, brand, rating, and delivery; cart groups become broad white rounded sheets.

### Inputs & Forms

Search uses a low-contrast gray pill; native controls inherit monochrome styling and visible black focus.

### Status & Build Page

Keep sale countdown, availability, delivery date, installment, and cart total close to the item or action.

### Navigation

Use a white bottom bar with black active icon and muted gray inactive destinations.

### Footer

No footer; bottom navigation or checkout occupies the safe area.

## Do's and Don'ts

### Do

- Preserve the black field and white product islands.
- Let fashion photography dominate product discovery.
- Style native controls to inherit this visual system.

### Don't

- Don't use pink as the default purchase control.
- Don't add heavy borders or colorful card backgrounds.
- Don't shrink product media to make room for decorative chrome.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten metadata |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Product cards, favorites, filters, navigation, and checkout remain at least 44px.

### Collapsing Strategy

Preserve product media, price, variant, delivery, and purchase action; reduce campaign density first.

### Image Behavior

Use consistent portrait or square crops and avoid obscuring the garment with overlay chrome.

## Iteration Guide

Tune discovery, media scale, and price hierarchy first; then refine product, cart, filters, and secondary states.

## Known Gaps

- Returns and support recovery were not sampled.
- Rare validation and payment failures were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
