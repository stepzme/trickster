<design-context>
---
version: alpha
name: Choco-design-analysis
description: "A broad lifestyle super-app with a white canvas, black hierarchy, warm-orange grocery actions, coral-red restaurant actions, pale rounded service cards, real listing photography, and playful 3D object collages. Grocery, restaurant delivery, takeaway, coupons, entertainment, QR payment, orders, messages, and profile retain distinct accent cues inside one shared shell."
colors:
  primary: "#FFA800"
  on-primary: "#171717"
  primary-hover: "#E79400"
  primary-soft: "#FFF3CF"
  accent: "#EF3D5D"
  accent-secondary: "#1596D2"
  ink: "#171719"
  ink-muted: "#74777B"
  ink-subtle: "#A9ADB1"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F6"
  hairline: "#E3E5E7"
  semantic-success: "#26A269"
  semantic-danger: "#D83C4B"
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

Choco connects food, groceries, takeaway, entertainment, coupons, QR payment, and lifestyle services through one home while allowing each vertical a clear accent and task model.

**Key Characteristics:**
- White shared shell.
- Orange grocery actions.
- Coral restaurant actions.
- Photo-led listings and products.
- Playful 3D service collages.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Grocery checkout, selection, and progress.
- **Accent** ({colors.accent}): Restaurant ordering and Chocofood identity.
- **Secondary Accent** ({colors.accent-secondary}): Informational services and payment.

### Surface
- **Canvas** ({colors.canvas}): Home, vertical catalogs, orders, and profile.
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

- **SF Pro Display** — vertical and section headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep vertical identity visible.
- Use one primary accent within a task.
- Show fees before payment.
- Let photos identify merchants and offers.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home stacks large service cards and smaller category tiles. Grocery uses dense product rails and grids; restaurant and coupon views use large photo listings; checkout uses stacked sheets.

### Whitespace Philosophy

Separate verticals on home, then tighten density within the selected catalog.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use pale cards, soft object shadows, and selective 3D collages. Transaction screens remain mostly flat.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Service discovery uses isolated 3D food, objects, and props on pale geometric backgrounds. Listings use real photography.

## Components

### Buttons

Orange commits grocery tasks; coral-red commits restaurant tasks. Secondary controls remain neutral and compact.

### Pricing Tabs

Each vertical gets its own relevant bottom navigation while the shared home remains visually consistent.

### Cards & Containers

Home cards introduce services; product, restaurant, entertainment, and coupon cards combine imagery with price, rating, discount, or ETA.

### Inputs & Forms

Address, delivery notes, promo, bonuses, payment, and profile fields use simple one-column forms.

### Status & Build Page

Show confirmed, assembling, courier assigned, delayed, cancelled, delivered, and rated through a clear staged timeline.

### Navigation

Home routes into groceries, restaurants, takeaway, entertainment, QR payment, messages, and profile; each vertical narrows navigation.

### Footer

Basket or pay action stays above the safe area; vertical browsing uses its dedicated bottom bar.

## Do's and Don'ts

### Do

- Keep the current vertical explicit.
- Use its accent consistently.
- Expose delivery and service fees.
- Use 3D collages only for discovery.
- Keep order progress staged.

### Don't

- Don't merge grocery and restaurant baskets.
- Don't let vertical colors compete.
- Don't use 3D art in order details.
- Don't hide address requirements.
- Don't replace listing photography with icons.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44px.

### Collapsing Strategy

Preserve vertical, address, basket total, and primary action. Collapse cross-sell and promotional modules first.

### Image Behavior

Contain 3D objects on home cards; crop real listing photos around the subject and keep price or status outside imagery.

## Iteration Guide

1. Build shared home and vertical routing.
2. Add grocery catalog and checkout.
3. Add restaurant and takeaway flows.
4. Add coupons and entertainment.
5. Add QR payment, orders, messages, and profile.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 101 available flow names were inventoried; main, grocery, checkout, tracking, restaurant, and entertainment flows were image-reviewed.
- Cross-vertical wallet behavior, QR completion, and live courier motion were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
