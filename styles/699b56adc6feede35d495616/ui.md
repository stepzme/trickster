<design-context>
---
version: alpha
name: MBANK-design-analysis
description: "A modular super-app dashboard on pale gray, built from white rounded cards, emerald finance actions, a yellow central QR control, vivid multicolor service tiles, dense campaign rails, and compact aligned financial data."
colors: {primary: "#08A36A", on-primary: "#FFFFFF", primary-hover: "#21B77F", primary-focus: "#007D50", ink: "#202127", ink-muted: "#777981", ink-subtle: "#A6A8AE", ink-tertiary: "#CACBD0", canvas: "#F3F4F4", surface-1: "#FFFFFF", surface-2: "#EDEFEF", surface-3: "#E2E5E5", surface-4: "#D6DADA", hairline: "#E5E7E7", hairline-strong: "#CED2D2", hairline-tertiary: "#B5BBBB", inverse-canvas: "#1D2E28", inverse-surface-1: "#29443A", inverse-surface-2: "#355B4C", inverse-ink: "#FFFFFF", brand-secure: "#FFD51F", semantic-success: "#08A36A", semantic-overlay: "#202127"}
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
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px}
  finance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10px}
  campaign-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

MBANK is a colorful super-app where white modules and green banking actions organize finance, rewards, payments, and lifestyle services.

**Key Characteristics:** pale-gray canvas; white rounded modules; emerald finance actions; yellow central QR; vivid service art.

## Colors

### Brand & Accent

Emerald anchors banking and selection. Yellow is reserved for the central QR and hub identity; services may use vivid local palettes.

### Surface

Pale gray canvas with bright white cards and minimal separators.

### Text

Near-black carries balances and titles; gray carries account, transaction, and helper metadata.

### Semantic

Green means success or finance, yellow attention, red debt/error, and multicolor bars encode categories.

## Typography

### Font Family

Use SF Pro Display for dashboard headings and SF Pro Text for financial detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Product claim |
| headline | 20px | 700 | Payments and services title |
| card-title | 15px | 600 | Balance and product |
| body | 12px | 400 | Transaction detail |
| caption | 9px | 400 | Status and navigation |

### Principles

- Make balances and amounts scannable.
- Keep service labels explicit.
- Use campaign typography only inside campaigns.

### Note on Font Substitutes

Inter is suitable; preserve Cyrillic and tabular financial figures.

## Layout

### Spacing System

Use a 4px base, 10–12px module gaps, and 12px gutters.

### Grid & Container

Home stacks modular cards and horizontal rails; payments use tile grids and lists; analysis uses aligned rows.

### Whitespace Philosophy

Keep modules dense but separated by clear gray gutters.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale-gray canvas | Dashboard |
| 1 | White rounded card | Finance and service |
| 2 | Floating yellow QR | Primary hub action |
| 3 | Sheet | Confirmation and detail |

### Decorative Depth

Use dimensional service scenes inside campaigns; core banking stays flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Service tiles |
| rounded-lg | 16px | Finance and campaign cards |
| rounded-full | full | QR, avatar, and partner logos |

### Photography & Illustration Geometry

Campaigns use rounded wide crops; service scenes sit inside compact rounded tiles; partner logos remain contained.

## Components

### Buttons

Primary finance actions are green; central QR is yellow; secondary actions are white or pale gray.

### Pricing Tabs

MMarket/MBank and history periods use compact segments with green selection.

### Cards & Containers

Finance cards group balance and products; service tiles combine one icon, label, and optional badge.

### Inputs & Forms

Search and payment fields are pale gray with green focus and large amounts.

### Status & Build Page

Transfers and payments use clear review, processing, and result states close to amount and recipient.

### Navigation

Keep Home, Payments, QR, Services, and More fixed; QR remains visually dominant.

### Footer

No footer; bottom navigation owns the safe area.

## Do's and Don'ts

### Do

- Keep finance distinct from lifestyle art.
- Align amounts and balances.
- Label all service icons.
- Style native controls consistently.

### Don't

- Don't let campaigns obscure balances.
- Don't use yellow for ordinary actions.
- Don't encode categories by color alone.
- Don't add heavy shadows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten modules and service labels |
| Standard | 375–430px | Default dashboard |
| Wide | 431px+ | Expand rails and payment gutters |

### Touch Targets

Cards, services, payment routes, QR, and navigation remain at least 44px.

### Collapsing Strategy

Scroll campaign rails horizontally and stack financial modules before shrinking values.

### Image Behavior

Contain service scenes and partner marks; preserve wide campaign focal areas.

## Iteration Guide

Tune balance clarity first, then payments, service discovery, rewards, and campaign density.

## Known Gaps

- Transfer confirmation was not visually sampled.
- Loan application was not reviewed end to end.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
