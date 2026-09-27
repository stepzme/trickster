<design-context>
---
version: alpha
name: Chizhik-design-analysis
description: "A high-energy grocery interface with a vivid yellow brand field, heavy black display type, hot-pink promotion cards, white catalog surfaces, product cutouts, and a recurring red-black bird mascot. Home, catalog, scanner, cart, checkout, stores, promotions, and profile use bold rounded cards and a compact four-item navigation."
colors:
  primary: "#FFDD00"
  on-primary: "#111111"
  primary-hover: "#E8C700"
  primary-soft: "#FFF7BF"
  accent: "#F23694"
  accent-secondary: "#111111"
  ink: "#171717"
  ink-muted: "#747474"
  ink-subtle: "#AAAAAA"
  canvas: "#F8F9FA"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F4"
  hairline: "#E1E3E5"
  semantic-success: "#32A852"
  semantic-danger: "#D9343A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Arial Black, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: Arial Black, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: Arial Black, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: Arial Black, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Chizhik combines promotional discovery, local store context, grocery catalog, scanner, and delivery ordering under a bold yellow-black retail identity.

**Key Characteristics:**
- Vivid yellow brand areas.
- Heavy black uppercase headings.
- Hot-pink promotional cards.
- Product cutouts on white.
- Recurring red-black bird mascot.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Add, basket, checkout, and selected navigation.
- **Accent** ({colors.accent}): Urgent promotional campaigns.
- **Secondary Accent** ({colors.accent-secondary}): Headline, CTA, and strong contrast.

### Surface
- **Canvas** ({colors.canvas}): Catalog, search, checkout, and profile.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **Arial Black** — campaigns, category headings, and prices.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Make price and product unmistakable.
- Use heavy display type in short bursts.
- Keep availability tied to the selected store.
- Separate promotional color from status.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home stacks hero stories, promos, store context, and shortcuts. Catalog uses two-column product grids; product and checkout switch to focused single-column layouts.

### Whitespace Philosophy

Use large graphic blocks on home and tighter product density inside the catalog.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use minimal shadow, large color fields, and isolated product cutouts. Mascot and promo art stay flat and graphic.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Products use real cutouts. Promotional cards use bold geometric fields, mascot moments, and simple vector scenes.

## Components

### Buttons

Yellow full-width actions add to basket or continue checkout; compact yellow plus and minus controls sit on product cards.

### Pricing Tabs

Home, Catalog, Scanner, and Profile use a stable bottom bar; filters and categories use compact chips.

### Cards & Containers

Product cards pair cutout, title, price, favorite, and add. Checkout groups address, residence details, comments, timing, and payment.

### Inputs & Forms

Search, address, home details, courier notes, delivery slot, and card payment use clear labeled fields.

### Status & Build Page

Show store selected, age required, minimum reached, processing, cancelled, ready, and delivered through text plus state.

### Navigation

Home, Catalog, Scanner, and Profile remain stable outside focused product, cart, and checkout screens.

### Footer

Basket total stays above the safe area; browsing retains the four-tab bar.

## Do's and Don'ts

### Do

- Keep yellow as the main retail signal.
- Show the selected store.
- Make price large.
- Use the mascot in branded moments.
- Keep basket total persistent.

### Don't

- Don't use pink for functional status.
- Don't replace product photos with illustration.
- Don't hide minimum order.
- Don't overload cards with promo badges.
- Don't detach availability from store.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44px.

### Collapsing Strategy

Preserve store, product, price, quantity, basket total, and checkout action. Collapse stories and campaigns first.

### Image Behavior

Contain product cutouts on white; crop promotional artwork only inside authored cards and preserve mascot silhouette.

## Iteration Guide

1. Build home and store context.
2. Add catalog, search, and scanner.
3. Add product, favorite, and basket.
4. Add checkout and payment.
5. Add promotions, orders, and profile.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 61 available flow names were inventoried; home, product, catalog, basket, checkout, and store flows were image-reviewed.
- Scanner recognition, live delivery state, and story motion were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
