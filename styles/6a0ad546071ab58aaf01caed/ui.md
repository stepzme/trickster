<design-context>
---
version: alpha
name: Buy-am-design-analysis
description: "A broad commerce and delivery super-app with a white canvas, pale-gray search fields, black hierarchy, hot-pink actions, retailer photography, and compact five-tab navigation. Restaurants, supermarkets, stores, pharmacy, services, mall, checkout, wallet, and order tracking use familiar cards and sheets."
colors:
  primary: "#E91E63"
  on-primary: "#FFFFFF"
  primary-hover: "#C91652"
  primary-soft: "#FDE8F0"
  accent: "#B51E55"
  accent-secondary: "#F5C542"
  ink: "#202124"
  ink-muted: "#74777B"
  ink-subtle: "#A9ACAF"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F5"
  hairline: "#E3E5E7"
  semantic-success: "#2E9B63"
  semantic-danger: "#D63A45"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
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

Buy.am presents several commerce verticals through one search, address, category, basket, and order model. Photography and merchant branding carry discovery; pink controls carry commitment.

**Key Characteristics:**
- White marketplace canvas.
- Hot-pink commerce actions.
- Photo-led merchant and product cards.
- Pale-gray search and address fields.
- Home, Restaurants, Mall, Basket, and Profile navigation.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Checkout, basket, selection, and active navigation.
- **Accent** ({colors.accent}): Price and focused commerce links.
- **Secondary Accent** ({colors.accent-secondary}): Ratings and tracking milestones.

### Surface
- **Canvas** ({colors.canvas}): All discovery and transaction surfaces.
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

- **SF Pro Display** — section and merchant headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Lead with vertical, merchant, and address.
- Keep price, ETA, and rating together.
- Use merchant photography for recognition.
- Expose fees before checkout.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home stacks search, address, vertical pills, banners, favorite brands, and recommendations. Category views use photo cards; checkout and tracking use one-column sheets.

### Whitespace Philosophy

Keep top-level verticals separated, but allow dense merchant and product lists within each section.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use soft card borders and occasional sheet elevation. Merchant photography provides visual richness.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Use real product, food, store, and banner photography in rounded rectangles. Keep totals, tracking, and controls outside images.

## Components

### Buttons

Pink full-width pills commit checkout and payment. Small plus/minus controls stay local to products.

### Pricing Tabs

Commerce verticals use outline pills; the five bottom destinations use a pink selected state.

### Cards & Containers

Merchant cards pair image, rating, fee, and ETA. Basket cards keep quantity, price, delivery, packaging, and total visible.

### Inputs & Forms

Search, address, comment, promo, gift card, and payment use large pale fields with clear labels.

### Status & Build Page

Show accepted, processing, delivery stages, completed, cancelled, and rating state as text plus a simple timeline.

### Navigation

Home, Restaurants, Mall, Basket, and Profile are stable; vertical search and checkout stay focused.

### Footer

Persistent navigation supports browsing; basket and payment actions replace it during checkout.

## Do's and Don'ts

### Do

- Keep vertical context visible.
- Show all order fees.
- Use real merchant imagery.
- Retain order history and reorder.
- Keep basket badge current.

### Don't

- Don't invent a separate visual system per vertical.
- Don't hide delivery windows.
- Don't place text over busy photos.
- Don't use promotional banners as status.
- Don't merge wallet balance with order total.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44px.

### Collapsing Strategy

Preserve address, vertical, basket total, and primary action. Remove secondary promotions before product data.

### Image Behavior

Crop around the merchant, dish, or product; keep ratings, delivery metadata, price, and controls in the card body.

## Iteration Guide

1. Build home and vertical selection.
2. Add merchant and product discovery.
3. Add basket and checkout.
4. Add tracking and order history.
5. Add wallet, gift cards, and profile.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 38 available flow names were inventoried; main page, ordering, and order tracking were image-reviewed.
- Live courier map, cross-vertical fulfillment, and payment completion were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
