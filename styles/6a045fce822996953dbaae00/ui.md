<design-context>
---
version: alpha
name: Klarna-design-analysis
description: "A light shopping-finance interface combining white surfaces, a lavender atmospheric gradient, Klarna pink labels, near-black rounded actions, large financial totals, soft elevated cards, and a translucent floating dock. Merchant photography and logos supply variety while the product chrome remains calm and spacious."
colors:
  primary: "#FFB3D3"
  on-primary: "#111014"
  primary-hover: "#FFC4DD"
  primary-focus: "#ED92BA"
  ink: "#17151A"
  ink-muted: "#69656E"
  ink-subtle: "#A19CA7"
  ink-tertiary: "#C5C0CA"
  canvas: "#FFFFFF"
  surface-1: "#FAF8FB"
  surface-2: "#F2EEF5"
  surface-3: "#E8E1ED"
  surface-4: "#DCD3E2"
  hairline: "#E8E3EA"
  hairline-strong: "#D3CDD7"
  hairline-tertiary: "#B8B0BE"
  inverse-canvas: "#130B28"
  inverse-surface-1: "#2B174E"
  inverse-surface-2: "#44266D"
  inverse-ink: "#FFFFFF"
  brand-secure: "#C2A8FF"
  semantic-success: "#2CB676"
  semantic-overlay: "#17151A"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 42px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.4px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0px}
  display-md: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 48px}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  finance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 18px}
  store-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10px}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 16px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 10px 16px}
---
## Overview

Klarna is an airy shopping-finance system with lavender atmosphere, soft elevated cards, large totals, and decisive black pill actions.

## Colors

### Brand & Accent
- Klarna pink labels branded payment moments; lavender creates the ambient financial background.
- Near-black is the primary action color.

### Surface
- White cards sit on white or lavender-gradient canvases; pale gray supports embedded checkout information.

### Text
- Near-black carries totals and headings; gray supports schedules, store metadata, and status.

### Semantic
- Green marks cashback or positive status. Pink never substitutes for warning or success.

## Typography

### Font Family

Use SF Pro Display for totals and campaign claims, SF Pro Text for commerce and payment detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42px | 700 | Amount owed |
| display-lg | 34px | 700 | Campaign claim |
| headline | 22px | 700 | Section title |
| card-title | 17px | 600 | Store or payment title |
| body | 14px | 400 | Supporting detail |
| caption | 10px | 500 | Navigation |

### Principles

- Lead financial screens with the total.
- Keep merchant labels short and logo-supported.
- Use large editorial claims only in campaign cards.

### Note on Font Substitutes

Use a neutral system sans with bold, compact numeric forms.

## Layout

### Spacing System

Use a 4px base, 16–20px card padding, and 18–24px screen gutters.

### Grid & Container

Store logos use three columns; offers use horizontal rails; payments use one stacked column.

### Whitespace Philosophy

Generous space reinforces trust. Do not compress totals, payment schedules, or checkout decisions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White or lavender canvas | Main screens |
| 1 | Soft white card | Stores and payments |
| 2 | Translucent capsule | Bottom dock |
| 3 | Embedded merchant browser | Checkout |

### Decorative Depth

Use soft shadows, blur, and ambient gradients; avoid hard borders.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Merchant media |
| rounded-md | 14px | Search and tiles |
| rounded-lg | 18px | Finance cards |
| rounded-xl | 24px | Navigation dock |
| rounded-pill | full | Actions |

### Photography & Illustration Geometry

Merchant photography uses rounded portrait or square crops. No separate expressive illustration language was observed.

## Components

### Buttons

Primary actions are near-black pills; Klarna payment actions may use pink pills inside merchant context.

### Pricing Tabs

Payment plans use clear stacked options with schedule and cost rather than decorative tabs.

### Cards & Containers

Cards are soft white rectangles with generous radius. Campaign cards mix editorial copy and small photography collages.

### Inputs & Forms

Search is a white pill. Checkout fields inherit the Klarna spacing and pink/black action hierarchy even when embedded in a merchant flow.

### Status & Build Page

Use large totals, scheduled-payment labels, compact delivery status, and three-dot loading indicators.

### Navigation

Keep the four-item translucent dock floating above content. Active state uses a pale filled segment.

### Footer

No footer; the floating dock retains bottom safe-area spacing.

## Do's and Don'ts

### Do

- Keep totals visually dominant.
- Use lavender as atmosphere, not dense fill.
- Preserve merchant identity inside bounded media.
- Keep actions pill-shaped and decisive.
- Integrate embedded checkout visually.

### Don't

- Don't use pink for every action.
- Don't crowd financial cards.
- Don't introduce hard card borders.
- Don't replace merchant photography with illustration.
- Don't let embedded browser chrome dominate.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Reduce card gutters and total scale |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Increase negative space and card width |

### Touch Targets

Dock items, store tiles, and payment actions retain at least 44px hit areas.

### Collapsing Strategy

Offer rails scroll horizontally; payments expand vertically; the dock stays fixed.

### Image Behavior

Use aspect-fill for lifestyle offers and preserve merchant logos without cropping.

## Iteration Guide

Tune total hierarchy and card atmosphere first, then gradients, dock blur, and merchant density.

## Known Gaps

- Checkout verification motion was not measured.
- Tablet layouts were not represented.
- Dark appearance was not reviewed in this sample.

</design-context>

Use the design system above for all UI you generate.
