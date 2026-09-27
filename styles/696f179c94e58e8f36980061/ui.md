<design-context>
---
version: alpha
name: Lenta-design-analysis
description: "A dense grocery-delivery system on white, anchored by deep Lenta blue, price red, sunny yellow ratings, and green fulfillment messages. Product pack shots, compact two-column cards, promotion banners, and a friendly orange cat mascot make shopping energetic while checkout remains structured and direct."
colors:
  primary: "#064CA8"
  on-primary: "#FFFFFF"
  primary-hover: "#1764C2"
  primary-focus: "#003B85"
  ink: "#17171A"
  ink-muted: "#74747A"
  ink-subtle: "#A6A6AC"
  ink-tertiary: "#C7C7CC"
  canvas: "#FFFFFF"
  surface-1: "#F6F7F8"
  surface-2: "#EEF1F4"
  surface-3: "#E3E7EB"
  surface-4: "#D6DCE1"
  hairline: "#E5E8EB"
  hairline-strong: "#CFD5DA"
  hairline-tertiary: "#B6BDC4"
  inverse-canvas: "#063D85"
  inverse-surface-1: "#052F67"
  inverse-surface-2: "#04244E"
  inverse-ink: "#FFFFFF"
  brand-secure: "#F7C900"
  semantic-success: "#20B878"
  semantic-overlay: "#17171A"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 26px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px}
  category-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 6px}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  discount-badge: {backgroundColor: "#ED3446", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Lenta is a dense grocery storefront where blue actions, red pricing, product imagery, and mascot-led feedback create a fast everyday rhythm.

**Key Characteristics:**
- Address and mode-first Home.
- Two-column grocery catalog.
- Deep blue cart and checkout actions.
- Red current prices and discount badges.
- Orange cat mascot for empty and success states.

## Colors

### Brand & Accent

Deep blue is the primary action and navigation color. Yellow supports brand, ratings, and loyalty; red highlights pricing and discounts.

### Surface

White carries shopping. Cool pale gray separates search, checkout steps, replacement settings, and information panels.

### Text

Near-black carries product names and decisions. Gray supports weight, former price, and conditions; red gives price priority.

### Semantic

Green marks free delivery and successful conditions. Blue radios and progress indicate active checkout decisions.

## Typography

### Font Family

Use SF Pro Display for section titles and SF Pro Text for compact product, price, and checkout data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Empty or success claim |
| headline | 20px | 700 | Catalog and checkout title |
| card-title | 15px | 600 | Product and section title |
| body | 12px | 400 | Weight, composition, conditions |
| caption | 9px | 400 | Rating, discount, unit price |

### Principles

- Price and quantity lead repeated cards.
- Keep product names to a few readable lines.
- Use bold for decisions and totals.

### Note on Font Substitutes

Inter works well; preserve compact Cyrillic and tabular price figures.

## Layout

### Spacing System

Use a 4px base, 8px product gaps, and 12px screen padding.

### Grid & Container

Products and categories use two columns or horizontal rails. Checkout uses one column with a bottom action pair.

### Whitespace Philosophy

Shopping stays dense. Use larger gaps only for state messaging and checkout decisions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and product detail |
| 1 | Pale group fill | Checkout and settings |
| 2 | Sticky white action bar | Price and cart action |
| 3 | White sheet over scrim | Comment and replacement settings |

### Decorative Depth

Use product pack shots and mascot renders. Ordinary catalog cards remain nearly flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount badge |
| rounded-sm | 8px | Buttons and search |
| rounded-md | 12px | Product and category cards |
| rounded-lg | 16px | Promotion and state panels |
| rounded-full | full | Favorite and radio controls |

### Photography & Illustration Geometry

Pack shots are contained on white. Category food uses clipped still life; mascot scenes sit centered with generous white space.

## Components

### Buttons

Primary actions are blue with white type. Secondary actions use white with blue labels; yellow is reserved for loyalty and select brand moments.

### Pricing Tabs

Delivery/store modes use wide segmented controls. Category filters use small white chips with subtle borders.

### Cards & Containers

Product cards include rating, favorite, pack shot, title, weight, current and former price, discount, and blue cart button.

### Inputs & Forms

Search is a white field with QR access. Checkout comments and preferences use sheets, radios, and blue focus outlines.

### Status & Build Page

Minimum-order and delivery conditions appear as tinted strips. Success uses the mascot with delivery facts and a single blue acknowledgment action.

### Navigation

Keep five bottom destinations fixed. Active state combines blue and yellow; cart count and profile rewards use compact badges.

### Footer

No footer; bottom navigation or checkout action owns the safe area.

## Do's and Don'ts

### Do

- Keep price, weight, and discount adjacent.
- Use blue for commitment.
- Show fulfillment constraints early.
- Keep replacement preferences explicit.
- Use the mascot for state communication.

### Don't

- Don't use red for primary actions.
- Don't hide unit price or minimum order.
- Don't add heavy card shadows.
- Don't put mascot art inside ordinary product cards.
- Don't leave checkout radios in generic native styling.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata and cart buttons |
| Standard | 375–430px | Default two-column catalog |
| Wide | 431px+ | Expand banners and checkout gutters |

### Touch Targets

Search, QR, favorite, cart, quantity, payment, and navigation remain at least 44px.

### Collapsing Strategy

Keep two columns on phones; scroll rails horizontally and stack checkout choices.

### Image Behavior

Contain product packaging and aspect-fill food category crops; mascot art scales proportionally without edge cropping.

## Iteration Guide

Tune price and quantity clarity first, then fulfillment conditions, checkout progression, and mascot balance.

## Known Gaps

- Live courier tracking was not visually sampled.
- Loyalty-card clubs and cashback were not opened in detail.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
