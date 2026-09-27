<design-context>
---
version: alpha
name: Burger-King-design-analysis
description: "A warm, playful fast-food ordering interface built from cream backgrounds, dark-brown headers, flame orange actions, bold retro display type, product cutouts, and crown-themed red-yellow promotion art. Menu, cart, checkout, delivery tracking, loyalty crowns, and coupons share chunky rounded cards and a persistent five-item navigation."
colors:
  primary: "#F58220"
  on-primary: "#FFFFFF"
  primary-hover: "#D96B12"
  primary-soft: "#FFF0DF"
  accent: "#5B2416"
  accent-secondary: "#E2231A"
  ink: "#4A2015"
  ink-muted: "#806C65"
  ink-subtle: "#B5A59E"
  canvas: "#FFF4E8"
  surface-1: "#FFF9F2"
  surface-2: "#F3E5D8"
  hairline: "#E8D7C8"
  semantic-success: "#16A34A"
  semantic-danger: "#D7262E"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Cooper Black, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: Cooper Black, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: Cooper Black, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: Cooper Black, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
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

Burger King turns ordering and loyalty into one warm branded surface. Product cards remain transactional while crowns, coupons, challenges, and campaigns introduce a playful editorial layer.

**Key Characteristics:**
- Cream canvas and dark-brown chrome.
- Chunky retro display headings.
- Orange circular add controls.
- Food cutouts on pale product cards.
- Red-yellow illustrated crown campaigns.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Add, selected order controls, and product emphasis.
- **Accent** ({colors.accent}): Header, primary text, and navigation.
- **Secondary Accent** ({colors.accent-secondary}): Promotions, loyalty, and urgent offers.

### Surface
- **Canvas** ({colors.canvas}): Menu, checkout, loyalty, and profile.
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

- **Cooper Black** — menu categories, campaigns, and totals.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep product name and price close.
- Use display type for short labels only.
- Make delivery cost and thresholds explicit.
- Separate food commerce from loyalty rewards.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Menu uses a horizontal category rail and two-column product grid. Checkout and tracking use stacked sheets; Crowns uses campaign cards and paired utility tiles.

### Whitespace Philosophy

Use comfortable gaps between chunky cards while keeping products visually abundant.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use subtle warm shadows and isolated food cutouts. Illustration adds depth only inside campaign cards.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Food appears as clean cutouts or close product photography. Campaigns use flat crown characters and bold color fields with protected copy zones.

## Components

### Buttons

Orange circular plus controls add items; green confirms payment; white outlined pills handle secondary actions.

### Pricing Tabs

Category chips and five bottom destinations show a strong selected state; delivery thresholds appear as compact stepped controls.

### Cards & Containers

Product cards pair cutout, name, price, portion, favorite, and add. Checkout groups items, suggestions, payment, address, and total.

### Inputs & Forms

Address, promo, card, and profile data use focused sheets with explicit confirmation.

### Status & Build Page

Show accepted, preparing, courier assigned, en route, delivered, crown earned, coupon active, and challenge progress in text.

### Navigation

My addresses, Menu, Crowns, Coupons, and More remain persistent outside focused checkout and tracking.

### Footer

Keep basket or payment action above the safe area; browsing retains the five-tab bar.

## Do's and Don'ts

### Do

- Preserve the cream-brown brand field.
- Keep delivery cost visible.
- Use orange locally for adding.
- Give loyalty its own space.
- Use illustration only for campaigns and rewards.

### Don't

- Don't place promo art behind order totals.
- Don't use green as a general brand color.
- Don't crowd product cutouts with badges.
- Don't hide crown earning rules.
- Don't flatten the retro type hierarchy.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44px.

### Collapsing Strategy

Preserve category, product, basket total, address, and payment action. Collapse campaign cards before commerce state.

### Image Behavior

Contain product cutouts with clear edges; crop campaign art only inside its authored card and never through headline or CTA.

## Iteration Guide

1. Build menu and categories.
2. Add product and combo selection.
3. Add cart, address, and payment.
4. Add order tracking.
5. Add crowns, coupons, challenges, and profile.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 31 available flow names were inventoried; menu, order processing, tracking, and crowns were image-reviewed.
- Animations, courier map behavior, and haptics were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
