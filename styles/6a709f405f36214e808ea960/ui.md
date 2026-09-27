<design-context>
---
version: alpha
name: Kompanion-design-analysis
description: "A pale blue-white retail banking interface centered on saturated royal-blue cards and actions, rounded white service tiles, colorful circular story badges, soft promotional banners, and a prominent QR tab. Financial screens are orderly and spacious, with blue line icons and green confirmation states."
colors:
  primary: "#2167DF"
  on-primary: "#FFFFFF"
  primary-hover: "#4380E7"
  primary-focus: "#174FB8"
  ink: "#202126"
  ink-muted: "#686B73"
  ink-subtle: "#9DA1AA"
  ink-tertiary: "#C0C4CC"
  canvas: "#F7F8FF"
  surface-1: "#FFFFFF"
  surface-2: "#EFF2FA"
  surface-3: "#E4E9F4"
  surface-4: "#D7DFEE"
  hairline: "#E4E7EE"
  hairline-strong: "#CDD2DC"
  hairline-tertiary: "#B3BAC7"
  inverse-canvas: "#202126"
  inverse-surface-1: "#34363C"
  inverse-surface-2: "#484B53"
  inverse-ink: "#FFFFFF"
  brand-secure: "#8B55F4"
  semantic-success: "#49B95C"
  semantic-overlay: "#202126"
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
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  bank-card: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px}
  transaction-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Kompanion is a soft, light banking system anchored by royal-blue cards, white service tiles, and a central QR action.

## Colors

### Brand & Accent
- Royal blue identifies cards, primary actions, links, and the QR control.
- Violet and pastel colors stay inside stories, cashback, or promotions.

### Surface
- Pale blue-white is the page canvas; white cards group actions and details.

### Text
- Near-black carries amounts and headings; gray supports account and transaction metadata.

### Semantic
- Green confirms successful payments. Red remains limited to warnings and notification dots.

## Typography

### Font Family

Use SF Pro Display for amounts and outcomes, SF Pro Text for banking labels and forms.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Payment outcome |
| display-md | 25px | 700 | Amount or authorization title |
| headline | 21px | 700 | Page heading |
| card-title | 16px | 600 | Product or service title |
| body | 13px | 400 | Banking detail |
| caption | 9px | 400 | Navigation |

### Principles

- Lead with amount and account identity.
- Keep frequent action labels short.
- Use color icons only inside bounded service tiles.

### Note on Font Substitutes

Use a neutral system sans with clear Cyrillic and numeric metrics.

## Layout

### Spacing System

Use a 4px base, 12px tile gaps, and 12–16px screen gutters.

### Grid & Container

Cards use a horizontal carousel; frequent actions use four columns; details and transfers use one column.

### Whitespace Philosophy

Keep the dashboard compact but give forms, success states, and account detail more vertical space.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Dashboard |
| 1 | White tile | Services and detail |
| 2 | Saturated card | Account identity |
| 3 | Focused sheet | Selectors and confirmation |

### Decorative Depth

Use mild card shadows and photographic card backgrounds; avoid heavy elevation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Fields and buttons |
| rounded-md | 12px | Cards and tiles |
| rounded-lg | 16px | Promotional banners |
| rounded-full | full | Stories and QR control |

### Photography & Illustration Geometry

Card and promotion imagery use bounded landscape crops. No separate expressive illustration language was observed.

## Components

### Buttons

Primary actions are wide royal-blue rectangles. Secondary actions are white with blue labels.

### Pricing Tabs

Loan and deposit terms use simple segmented or stacked options with one blue selection.

### Cards & Containers

Bank cards are saturated rounded rectangles; service tiles are white and compact; detail lists use full-width white groups.

### Inputs & Forms

Use outlined or white filled fields with blue focus. Native controls must inherit Kompanion spacing, radius, and action color.

### Status & Build Page

Success centers a green check, timestamp, amount, and recipient, followed by repeat, save, and receipt actions.

### Navigation

Keep five destinations fixed and emphasize the central QR action as a blue circle. Active state uses blue.

### Footer

No footer; preserve safe-area padding below navigation and full-width actions.

## Do's and Don'ts

### Do

- Keep balances and cards easy to scan.
- Use blue consistently for commitment.
- Keep frequent actions in predictable tiles.
- Provide receipts and repeat paths after transfer.
- Restyle native controls.

### Don't

- Don't overfill the pale canvas with color.
- Don't use story colors for transactions.
- Don't hide account identity in generic lists.
- Don't add decorative illustration.
- Don't leave default iOS form styling.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten action tiles and card width |
| Standard | 375–430px | Default dashboard |
| Wide | 431px+ | Expand card carousel and detail gutters |

### Touch Targets

Tiles, QR, cards, and navigation retain at least 44px hit areas.

### Collapsing Strategy

Cards and stories scroll horizontally; forms grow vertically; primary actions stay near the safe area.

### Image Behavior

Use aspect-fill for card and promotional imagery while protecting balance and card-number regions.

## Iteration Guide

Tune account hierarchy and action scan speed first, then card imagery and promotional density.

## Known Gaps

- Identification camera states were not reviewed.
- Tablet layouts were not represented.
- Loan and deposit detail variants were not visually sampled.

</design-context>

Use the design system above for all UI you generate.
