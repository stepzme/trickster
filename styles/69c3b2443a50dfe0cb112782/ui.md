<design-context>
---
version: alpha
name: Kaspi-design-analysis
description: "A pragmatic white financial super-app defined by vivid Kaspi red outline icons, compact service grids, pale gray banking groups, full-width blue transaction actions, and commerce banners embedded directly into utility flows. The visual system favors recognition, density, and directness over decorative hierarchy."
colors:
  primary: "#F14645"
  on-primary: "#FFFFFF"
  primary-hover: "#F46665"
  primary-focus: "#CE3837"
  ink: "#222224"
  ink-muted: "#68686D"
  ink-subtle: "#A0A0A6"
  ink-tertiary: "#C0C0C5"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#F0F0F1"
  surface-3: "#E6E6E8"
  surface-4: "#DADADD"
  hairline: "#E8E8EA"
  hairline-strong: "#D2D2D5"
  hairline-tertiary: "#B7B7BC"
  inverse-canvas: "#222224"
  inverse-surface-1: "#343438"
  inverse-surface-2: "#47474D"
  inverse-ink: "#FFFFFF"
  brand-secure: "#1188D7"
  semantic-success: "#08B92C"
  semantic-overlay: "#222224"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.9px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 29px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 3px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 18px
  xxl: 24px
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
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "#0874BA", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "#34A0E4", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  service-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px 4px}
  account-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  transaction-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Kaspi is a dense service hub where red outline iconography provides identity and fast recognition. Banking screens shift to pale grouped forms with blue transactional actions.

**Key Characteristics:**
- White canvas and compact four-column service grids.
- Kaspi red outline icons and active navigation.
- Embedded commerce banners and recommendation rails.
- Pale gray financial fields and grouped account cards.
- Blue full-width actions for transfers and money movement.

## Colors

### Brand & Accent
- Kaspi red identifies services, tabs, labels, and marketplace emphasis.
- Blue is reserved for committed financial actions and linked account operations.

### Surface
- White dominates home and services.
- Pale gray creates form fields, transfer groups, and bank background sections.

### Text
- Dark gray carries services, amounts, and headings.
- Mid gray supports explanations and unavailable content.

### Semantic
- Green confirms transfer success and positive repayment progress.
- Red notification dots remain small and distinct from service icons.

## Typography

### Font Family

Use SF Pro throughout. Identity comes from iconography and color rather than expressive type.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 29px | 700 | Transaction outcome |
| display-md | 24px | 700 | Amount or authorization step |
| headline | 20px | 700 | Page heading |
| card-title | 16px | 600 | Account or product title |
| body | 13px | 400 | Form and service copy |
| caption | 9px | 400 | Bottom navigation |

### Principles

- Keep amounts and operation names prominent.
- Use compact labels under service icons.
- Keep explanatory copy short and operational.

### Note on Font Substitutes

Any neutral system sans must preserve numeric clarity and compact Cyrillic metrics.

## Layout

### Spacing System

Use a 4px base, 8–12px service spacing, and 12px screen gutters on dense home surfaces.

### Grid & Container

Core services use four equal columns. Banking details and transfers switch to one stacked column.

### Whitespace Philosophy

Favor operational density on Home; add more space around confirmation, amount entry, and account state.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Home and services |
| 1 | Pale gray group | Forms and bank background |
| 2 | White rounded card | Accounts and loans |
| 3 | Anchored action bar | Transaction confirmation |

### Decorative Depth

Use slight tonal grouping and minimal shadow. Promotional imagery may be richer but stays inside banners.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 3px | Badges |
| rounded-sm | 6px | Buttons and banners |
| rounded-md | 10px | Fields and account cards |
| rounded-lg | 14px | Large banking groups |
| rounded-pill | full | Filter chips |

### Photography & Illustration Geometry

Product and partner photography use compact rectangular banners or cards. No expressive illustration language was observed.

## Components

### Buttons

Financial confirmation uses wide blue rectangles. Red is usually icon or label emphasis rather than the transaction button fill.

### Pricing Tabs

Loan and installment options use simple segmented controls or stacked product rows with red, yellow, and green product markers.

### Cards & Containers

Home services often sit directly on white. Bank accounts and loans use white rounded cards on a pale gray canvas.

### Inputs & Forms

Use filled pale-gray rows for recipient, amount, and message. Native controls must inherit Kaspi's compact radius, spacing, and clear blue action hierarchy.

### Status & Build Page

Success centers a green check and operation summary, followed by receipt and save options. Progress uses thin green bars within loan rows.

### Navigation

Keep Home, QR, Messages, and Services fixed. Active state uses red; inactive icons and labels stay light gray.

### Footer

No footer; preserve safe-area padding below the bottom bar and transaction action.

## Do's and Don'ts

### Do

- Keep service icons consistent and recognizable.
- Distinguish financial actions from discovery content.
- Put amount and recipient before optional message.
- Show clear transaction outcomes.
- Restyle native controls to match the UI.

### Don't

- Don't turn every home module into a card.
- Don't use red and blue interchangeably.
- Don't hide critical totals inside banners.
- Don't add decorative illustration to banking flows.
- Don't leave default iOS form styling unchanged.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten service labels and banner gutters |
| Standard | 375–430px | Default four-column grid |
| Wide | 431px+ | Increase card padding and product rail width |

### Touch Targets

Service tiles, account rows, QR access, and bottom navigation retain at least 44px hit areas.

### Collapsing Strategy

Product rails scroll horizontally. Financial forms scroll vertically while the main action remains above the safe area.

### Image Behavior

Use aspect-fill for campaign imagery and aspect-fit for product cutouts. Preserve embedded price and offer text safe areas.

## Iteration Guide

Tune service recognition and transaction clarity first, then density, banner balance, and secondary metadata contrast.

## Known Gaps

- QR scanner camera states were not visually reviewed.
- Tablet and landscape behavior were not represented.
- Error and reversal paths for transfers were not covered.

</design-context>

Use the design system above for all UI you generate.
