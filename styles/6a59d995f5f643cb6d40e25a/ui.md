<design-context>
---
version: alpha
name: Home-Credit-Bank-design-analysis
description: "A white, modular banking interface with near-black navigation, a vivid red-magenta action core, colorful product cards, precise finance charts, and playful dimensional payment-category objects. Rounded modules keep cards, transfers, payments, and analytics compact without sacrificing trust."
colors: {primary: "#EC0A46", on-primary: "#FFFFFF", primary-hover: "#F02C60", primary-focus: "#C90036", ink: "#17191F", ink-muted: "#676C74", ink-subtle: "#989DA5", ink-tertiary: "#C5C9CF", canvas: "#FFFFFF", surface-1: "#F7F7F9", surface-2: "#EFEFF3", surface-3: "#E4E5EA", surface-4: "#D6D8DF", hairline: "#E5E6EA", hairline-strong: "#C9CCD3", hairline-tertiary: "#B1B6C0", inverse-canvas: "#181B23", inverse-surface-1: "#292D38", inverse-surface-2: "#3C414E", inverse-ink: "#FFFFFF", brand-secure: "#EC0A46", semantic-success: "#1EC95B", semantic-overlay: "#15171D"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  product-card: {backgroundColor: "#890044", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px}
  finance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "#E7FAED", textColor: "#169A47", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 10px}
---
## Overview

Home Credit Bank uses a light modular shell with a vivid red-magenta action center. Dark navigation, colorful financial products, analytical charts, and dimensional payment icons make a broad banking suite easy to scan.

**Key Characteristics:** white banking canvas, red-magenta primary action, near-black controls, colorful card carousel, rounded finance modules, green income cues, clean charts, 3D payment objects, and five-item navigation.

## Colors

### Brand & Accent

Red-magenta owns the central action, active payment state, and urgent brand emphasis. Near-black supports strong secondary actions and selected tabs.

### Surface

White is the base. Pale cool gray groups products, transfer modes, payment categories, analytics, and sheets.

### Text

Near-black leads balances, amounts, product names, and headings. Gray supports rates, dates, account detail, and explanations.

### Semantic

Green represents income and success, coral marks spending, violet supports finance categories, and red-magenta remains the core action color.

## Typography

### Font Family

Use SF Pro Display for balances and financial states and SF Pro Text for products, transfers, payments, charts, and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Balance or total |
| headline | 21px | 700 | Page or product |
| card-title | 16px | 600 | Card and payment |
| body | 13px | 400 | Financial detail |
| caption | 10px | 400 | Rate and transaction meta |

### Principles

- Lead with amount, source, recipient, or current product.
- Use tabular numerals and stable alignment.
- Separate informational color from transactional action.

### Note on Font Substitutes

Use the platform sans with tabular numerals and strong Cyrillic or Kazakh support.

## Layout

### Spacing System

Use a 4px base, 8–12px item gaps, 14–16px module padding, and 20–24px between financial sections.

### Grid & Container

Home stacks category tabs, product carousel, quick actions, finance summary, and transfer entry. Detail and analytics use focused vertical modules or sheets.

### Whitespace Philosophy

Keep banking modules compact but distinct. Never let promotional content interrupt the amount-to-action reading path.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Banking shell |
| 1 | Pale rounded module | Quick action and analytics |
| 2 | Saturated product card | Account or card |
| 3 | Red floating action | Primary destination |

### Decorative Depth

Use colorful card artwork, precise charts, dimensional payment-category objects, and restrained tonal panels. Avoid heavy shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small badge |
| rounded-sm | 8px | Button and input |
| rounded-md | 12px | Finance and product card |
| rounded-lg | 16px | Sheet and catalog group |
| rounded-full | full | Central navigation action |

### Photography & Illustration Geometry

Use small dimensional objects inside payment-category cells and full-width branded card artwork for products. Charts remain clean and geometric.

## Components

### Buttons

Primary banking actions use red-magenta with white text; dark buttons support conversion or secondary commitment. Pale buttons handle utility actions.

### Pricing Tabs

Products, transfer method, payment catalog, account filter, period, and chart range use compact tabs or segments with black or red active state.

### Cards & Containers

Product cards align name, balance, rewards, and brand artwork. Finance cards align income, spending, category chart, period, and drill-down.

### Inputs & Forms

Amount, phone, card, account, and payment fields use pale grouped surfaces with clear validation. Native controls must inherit brand focus, radii, type, and spacing.

### Status & Build Page

Keep balance, fee, rate, limit, recipient, source, pending or failed state, receipt, and confirmation near the affected transaction.

### Navigation

Use five bottom destinations for Home, All accounts, Transfers, Payments, and For me, with a red circular active action and gray inactive icons.

### Footer

No footer; bottom navigation or the current transaction action owns the safe area.

## Do's and Don'ts

### Do

- Keep amounts, sources, recipients, fees, and confirmation explicit.
- Reserve red-magenta for brand and primary action.
- Use dimensional illustration to distinguish payment categories.

### Don't

- Don't color every financial module red.
- Don't use decorative art behind critical numbers.
- Don't let native controls ignore the surrounding custom visual language.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product and payment grids |
| Standard | 375–430px | Default banking layout |
| Wide | 431px+ | Expand analytics and sheet gutters |

### Touch Targets

Product cards, quick actions, tabs, amount fields, payment cells, filters, navigation, and confirmation remain at least 44px.

### Collapsing Strategy

Preserve amount, source, recipient, fee, rate, status, and confirmation; reduce promotions and education first.

### Image Behavior

Keep card artwork legible, contain payment objects without cropping, and preserve chart labels at compact widths.

## Iteration Guide

Tune Home and product detail first, then transfers, payments, conversion, analytics, history, card controls, offers, and settings.

## Known Gaps

- Dispute and fraud-report recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
