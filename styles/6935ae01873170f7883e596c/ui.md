<design-context>
---
version: alpha
name: Joom-design-analysis
description: "A fast, promotion-dense marketplace on a bright white canvas, organized by coral-red commerce actions, compact black type, rounded category thumbnails, two-column product grids, and playful 3D reward moments. Product photography carries browsing while hot coral, pink, violet, and deep blue promotional panels create momentum."
colors:
  primary: "#FF3F4E"
  on-primary: "#FFFFFF"
  primary-hover: "#FF6170"
  primary-focus: "#DB2F3D"
  ink: "#17171A"
  ink-muted: "#66666D"
  ink-subtle: "#96969E"
  ink-tertiary: "#BDBDC4"
  canvas: "#FFFFFF"
  surface-1: "#F8F8FA"
  surface-2: "#F1F1F5"
  surface-3: "#E7E7EC"
  surface-4: "#DCDCE3"
  hairline: "#E8E8ED"
  hairline-strong: "#D1D1D8"
  hairline-tertiary: "#B6B6BF"
  inverse-canvas: "#111114"
  inverse-surface-1: "#28282D"
  inverse-surface-2: "#3A3A41"
  inverse-ink: "#FFFFFF"
  brand-secure: "#913A97"
  semantic-success: "#24B974"
  semantic-overlay: "#111114"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  xxl: 28px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0}
  category-tile: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  reward-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 20px}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Joom is a white, high-density marketplace that layers product photography with frequent promotional and reward moments. Coral actions keep purchase intent clear amid varied content.

**Key Characteristics:**
- Fixed search and shopping tabs.
- Two-column product photography grid.
- Compact prices, discounts, ratings, and favorite controls.
- Coral purchase actions; black secondary rewards actions.
- Rounded 3D art for onboarding and gamification.

## Colors

### Brand & Accent
- Coral-red drives cart, purchase, discount, and active promotional emphasis.
- Pink, violet, and blue support bounded campaign artwork rather than general controls.

### Surface
- White is the default shopping canvas; pale gray separates inputs and checkout groups.
- Saturated promotional panels remain self-contained.

### Text
- Near-black carries price and primary labels.
- Neutral gray supports shipping, order volume, and secondary metadata.

### Semantic
- Green marks favorable delivery or price facts.
- Red rating stars and discount labels share the commerce accent.

## Typography

### Font Family

Use SF Pro Display for campaign headings and SF Pro Text for the dense catalog and checkout UI.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding claim |
| display-md | 25px | 700 | Reward message |
| headline | 21px | 700 | Checkout or collection title |
| card-title | 16px | 600 | Product and section title |
| body | 13px | 400 | Detail copy |
| caption | 10px | 400 | Grid metadata |

### Principles

- Give price and purchase status priority over prose.
- Keep grid metadata compact but readable.
- Use bold promotional type only inside campaign modules.

### Note on Font Substitutes

A neutral system sans is sufficient; preserve tight number metrics and strong price weight.

## Layout

### Spacing System

Use a 4px base, 8–12px grid gaps, and 12–16px horizontal screen padding.

### Grid & Container

Products use two equal columns. Categories and campaigns use horizontal rails or two-column feature blocks.

### Whitespace Philosophy

Catalog density is intentional. Reserve wider space for checkout decisions and reward explanations.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog |
| 1 | Pale grouped fill | Search and checkout |
| 2 | Fixed white action bar | Cart and purchase |
| 3 | Rounded bottom sheet | Rewards and selectors |

### Decorative Depth

Use 3D illustration shadows and subtle sheet separation; product cards themselves stay flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount badge |
| rounded-sm | 8px | Product imagery and buttons |
| rounded-lg | 16px | Category thumbnails |
| rounded-xxl | 28px | Reward sheets |
| rounded-full | full | Favorite controls |

### Photography & Illustration Geometry

Product images use consistent near-square crops. Promotional illustration can crop beyond a white or saturated panel, never into catalog metadata.

## Components

### Buttons

Primary cart and purchase buttons are full-width coral rectangles. Black buttons support claim, continue, or secondary promotional actions.

### Pricing Tabs

No subscription pricing tabs were observed. Product variants use compact selectors with a clear filled state.

### Cards & Containers

Product cards are image-first and largely borderless. Checkout uses full-width grouped rows with hairline or surface separation.

### Inputs & Forms

Search is a pale filled bar with image-search access. Address, delivery, and payment controls use radio rows and collapsible groups.

### Status & Build Page

Discounts, delivery promises, ratings, and order counts stay adjacent to their product. Success uses a single branded icon and direct next actions.

### Navigation

Keep five bottom destinations fixed, with black active icons and pale inactive lines. Preserve search above category tabs on catalog screens.

### Footer

No footer; anchored purchase bars and navigation own the bottom safe area.

## Do's and Don'ts

### Do

- Keep comparison facts close to imagery.
- Preserve persistent purchase actions on long pages.
- Use coral for commerce intent.
- Separate reward art from product content.
- Keep favorites accessible in the grid.

### Don't

- Don't wrap every product in a heavy card.
- Don't use campaign colors for ordinary navigation.
- Don't hide shipping and payment choices.
- Don't overcrowd success states.
- Don't replace real product imagery with illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product gaps and metadata |
| Standard | 375–430px | Default two-column grid |
| Wide | 431px+ | Increase image width and campaign padding |

### Touch Targets

Favorites, tabs, payment choices, and navigation retain at least 44px hit areas.

### Collapsing Strategy

Category rails scroll horizontally. Product details and checkout expand vertically while the main action remains anchored.

### Image Behavior

Use aspect-fill for lifestyle photography and aspect-fit when product shape or packaging must remain complete.

## Iteration Guide

Tune product scan speed and price hierarchy first, then campaign saturation, grid spacing, and reward frequency.

## Known Gaps

- Product variant animation was not measured.
- Tablet and landscape behavior were not represented.
- Delivery tracking after purchase was not deeply reviewed.

</design-context>

Use the design system above for all UI you generate.
