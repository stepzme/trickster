<design-context>
---
version: alpha
name: CDEK-design-analysis
description: "A logistics super-app combining light-gray canvases, white rounded modules, neon-green progression, black totals, 3D service icons, package diagrams, maps, order cards, and an embedded shopping feed. Sending, tracking, pickup points, payment, support, and commerce remain separated inside one modular shell."
colors:
  primary: "#32E85A"
  on-primary: "#101112"
  primary-hover: "#24C947"
  primary-soft: "#DFFFE7"
  accent: "#111214"
  accent-secondary: "#28B75A"
  ink: "#151617"
  ink-muted: "#74787B"
  ink-subtle: "#A9ADAF"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#EBECEF"
  hairline: "#DFE1E4"
  semantic-success: "#2DD257"
  semantic-danger: "#D83D48"
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

CDEK centers package sending and order tracking, then layers pickup points, business tools, fulfillment, and shopping around the same modular home.

**Key Characteristics:**
- Pale-gray app canvas.
- White rounded task modules.
- Neon-green continuation actions.
- Clay-like 3D service icons.
- Package size diagrams and explicit totals.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Progress, selection, confirmation, and logistics success.
- **Accent** ({colors.accent}): Totals, headings, and secondary primary actions.
- **Secondary Accent** ({colors.accent-secondary}): Positive status and service emphasis.

### Surface
- **Canvas** ({colors.canvas}): Home, sending, tracking, and shopping.
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

- **SF Pro Display** — task headings and order totals.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep route, package, rate, and total visible.
- Use green for progression, not decoration.
- Separate shipping and shopping state.
- Pair package size with a concrete diagram.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home uses story cards, a task grid, orders, and shopping feed. Sending is a linear stack of route, package, rate, people, review, and payment modules.

### Whitespace Philosophy

Separate logistics stages with clear module gaps; dense shopping cards stay inside their own section.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use modest card shadow and soft 3D icons. Package renders clarify scale rather than decorate.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Service icons use friendly clay-like 3D objects. Package diagrams show dimensions; shopping uses real product photography.

## Components

### Buttons

Neon-green full-width buttons advance the shipment. Black buttons serve secondary high-commitment actions such as tracking.

### Pricing Tabs

Rate options and pickup choices use outlined cards with green selected state.

### Cards & Containers

Route, package, rate, total, order status, pickup point, and instruction modules remain independently scannable.

### Inputs & Forms

City, address, dimensions, value, sender, recipient, promo, and payment use focused sheets and labeled rows.

### Status & Build Page

Show draft, paid, awaiting drop-off, in transit, ready, delivered, undelivered, and repeated order with labels and guidance.

### Navigation

Home and profile expose shipping, orders, pickup points, business, shopping, and support without merging active tasks.

### Footer

A persistent total and next action sit above the safe area during shipment creation.

## Do's and Don'ts

### Do

- Keep shipment total current.
- Show package dimensions visually.
- Separate route and package edits.
- Use green for progression.
- Keep shopping subordinate to logistics.

### Don't

- Don't mix shopping basket with parcel order.
- Don't hide pickup requirements.
- Don't use 3D icons behind form data.
- Don't rely on color alone for delivery status.
- Don't remove the review before payment.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44px.

### Collapsing Strategy

Preserve route, package, rate, total, and next action. Collapse stories and shopping promotions before logistics state.

### Image Behavior

Contain 3D service objects and package diagrams with their full silhouette. Crop retail photos only within product cards.

## Iteration Guide

1. Build home and tracking search.
2. Add route and pickup selection.
3. Add package, rate, and party details.
4. Add review, payment, and order status.
5. Add shopping and business utilities.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 58 available flow names were inventoried; home, sending route, dimensions, order details, and tracking were image-reviewed.
- Live map movement, barcode handling, and payment completion were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
