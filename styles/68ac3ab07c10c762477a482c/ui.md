<design-context>
---
version: alpha
name: Balance-Pay-design-analysis
description: "A compact digital-wallet interface built from white surfaces, very pale lavender grouped cards, a magenta-to-violet brand gradient, black utility type, and small purple line icons. Finance, payments, history, and support remain deliberately sparse, with balances and transaction amounts as the only strong hierarchy."
colors:
  primary: "#B72CF3"
  on-primary: "#FFFFFF"
  primary-hover: "#9820D4"
  primary-soft: "#F3E7FF"
  accent-magenta: "#F018B6"
  accent-violet: "#6F26F5"
  ink: "#101010"
  ink-muted: "#77777E"
  ink-subtle: "#A9A9B0"
  canvas: "#FFFFFF"
  surface-1: "#F5F4F8"
  surface-2: "#ECEAF0"
  hairline: "#DFDDE4"
  semantic-success: "#16B768"
  semantic-danger: "#E44558"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 7px, sm: 11px, md: 15px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  balance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  action-icon: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12px }
  transaction-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  setting-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Balance Pay is intentionally small and calm: two financial products, clear transfer and top-up actions, a filtered history, settings, and support. Purple supplies identity while most everyday tasks remain monochrome and spacious.

**Key Characteristics:**
- White canvas with pale lavender grouped cards.
- Magenta-violet gradient reserved for brand moments.
- Sparse purple line icons.
- Balance-first finance screen.
- Four-item bottom navigation.

## Colors

### Brand & Accent
- **Pay Purple** ({colors.primary}): Active tab, actions, icons, and emphasis.
- **Magenta** ({colors.accent-magenta}) and **Violet** ({colors.accent-violet}): Launch and app-mark gradient.
- Keep everyday financial surfaces neutral.

### Surface
- **Canvas** ({colors.canvas}): Default screen background.
- **Surface 1** ({colors.surface-1}): Balance, payment, history, and settings groups.
- **Surface 2** ({colors.surface-2}): Disabled and selected segment background.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Supporting transaction copy.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and placeholder text.

### Semantic
- **Success** ({colors.semantic-success}): Incoming funds and enabled wallet.
- **Danger** ({colors.semantic-danger}): Blocking, logout, and failure.
- **Overlay** ({colors.semantic-overlay}): Confirmation focus.

## Typography

### Font Family

- **SF Pro Display** — screen headings and empty-state title.
- **SF Pro Text** — balances, rows, forms, and navigation.
- **SF Mono** — identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Launch or major state |
| `{typography.headline}` | 21px | 700 | Screen heading |
| `{typography.card-title}` | 16px | 600 | Product and amount |
| `{typography.body}` | 14px | 400 | Row and form copy |
| `{typography.caption}` | 10px | 400 | Tab and secondary metadata |
| `{typography.button}` | 14px | 600 | Primary action |

### Principles

- Make balance and amount the strongest information.
- Keep product names and actions direct.
- Use purple in labels sparingly.
- Align amounts and dates consistently.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 10–12px card gaps, and 12–16px group padding.

### Grid & Container

Finance and Payments stack full-width product cards. History uses a segmented product switch, statistics summary, filters, and a one-column ledger. Settings use grouped rows.

### Whitespace Philosophy

Keep large open regions around the few primary tasks; do not fill unused space with promotions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Default screen |
| 1 | Pale lavender card | Products and settings |
| 2 | Purple gradient | Brand launch only |
| 3 | Scrim plus confirmation | Blocking or logout |

### Decorative Depth

Use a smooth gradient only for launch and app icon. Functional screens remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 7px | Fields and small rows |
| `{rounded.sm}` | 11px | Transactions and settings |
| `{rounded.md}` | 15px | Balance and payment groups |
| `{rounded.lg}` | 20px | Confirmation sheet |
| `{rounded.pill}` | full | Segments and toggles |
| `{rounded.full}` | full | Action icons |

### Photography & Illustration Geometry

The inspected product uses no expressive illustration system. Use only simple purple line icons or abstract gradient brand marks consistent with the interface.

## Components

### Buttons

Purple handles top-up and confirmation. Neutral gray can indicate unavailable transfer. Destructive wallet actions remain explicit and separated.

### Pricing Tabs

Wallet and WB Balance switch through a compact segmented control. History filters use small pills with clear removal.

### Cards & Containers

Balance cards expose product, masked balance, certificate or limits, and gift balance. Payment cards group transfer and top-up actions. Transaction rows show direction, amount, time, and description.

### Inputs & Forms

Onboarding uses numeric code entry. Transfer, top-up, certificate, and support forms use one-column fields and clear submit actions.

### Status & Build Page

Show hidden balance, gift funds, income, expense, empty history, notification, wallet limit, and blocked state in direct text.

### Navigation

Finance, Payments, History, and Support form the bottom bar. Notifications and settings sit in the finance header.

### Footer

Bottom navigation remains persistent for top-level destinations; secure or destructive subflows use back navigation and confirmation.

## Do's and Don'ts

### Do

- Keep balances and transaction direction explicit.
- Separate Wallet and WB Balance.
- Preserve the sparse layout.
- Use purple only for selection and action.
- Require confirmation for blocking and logout.

### Don't

- Don't add promotional modules to empty space.
- Don't use gradient behind transaction content.
- Don't hide balances without an obvious reveal gesture.
- Don't rely on color alone for income and expense.
- Don't invent decorative illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center a narrow wallet column |
| Compact | 390–767px | Default stacked cards |
| Small | <390px | Shorten row labels and preserve amounts |

### Touch Targets

Keep tabs, product actions, filters, toggles, settings rows, and support composer at least 44px.

### Collapsing Strategy

Keep products stacked and amounts visible. Truncate descriptions before dates or transaction direction.

### Image Behavior

No content imagery is required. Preserve gradient aspect ratio for launch and contain simple product marks.

## Iteration Guide

1. Establish finance cards and bottom navigation.
2. Build payments and product actions.
3. Add history, statistics, and filters.
4. Add settings, support, and secure states.
5. Add launch gradient last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 17 flow names were inventoried; onboarding, finance, payments, history, settings, and support flows were image-reviewed.
- Transfer handoff, certificate output, keyboard behavior, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
