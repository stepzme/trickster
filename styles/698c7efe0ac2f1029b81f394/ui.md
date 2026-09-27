<design-context>
---
version: alpha
name: bunq-design-analysis
description: "A colorful modular banking dashboard built from white and pale-lavender groups, strong black totals, mint acquisition cards, bright blue links, and small color-coded action pills. Accounts, cards, savings, stocks, crypto, and profile utilities remain dense but scannable through consistent grouped rows."
colors:
  primary: "#149FF2"
  on-primary: "#FFFFFF"
  primary-hover: "#087FC7"
  primary-soft: "#E8F6FE"
  accent: "#38D8A0"
  accent-secondary: "#C34AD9"
  ink: "#101113"
  ink-muted: "#73777D"
  ink-subtle: "#A8ABB0"
  canvas: "#FFFFFF"
  surface-1: "#F8F7FC"
  surface-2: "#EEEFF5"
  hairline: "#E0E1E7"
  semantic-success: "#2FC28A"
  semantic-danger: "#E23C62"
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
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

bunq combines daily banking, savings, cards, investments, and lifestyle benefits in one colorful modular shell. Large totals and consistent rows stabilize the otherwise broad product range.

**Key Characteristics:**
- White and pale-lavender grouped modules.
- Black totals with bright blue links.
- Orange, blue, and purple quick-action pills.
- Mint acquisition and status cards.
- Five-product bottom navigation.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Links, selected navigation, and important utility actions.
- **Accent** ({colors.accent}): Funding, positive change, and acquisition.
- **Secondary Accent** ({colors.accent-secondary}): Request and secondary money actions.

### Surface
- **Canvas** ({colors.canvas}): Primary dashboard and product sections.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary fields and controls.
- **Hairline** ({colors.hairline}): Quiet grouping.

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

- **SF Pro Display** — balances and product headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Lead with available amount and account.
- Keep each action color consistent.
- Use bold labels for totals, not long copy.
- Separate banking state from benefits.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home stacks acquisition, net wealth, quick actions, accounts, transactions, and extras. Cards, savings, stocks, and crypto use dedicated vertical sections with grouped rows.

### Whitespace Philosophy

Use space between modules to offset dense product breadth; keep related rows compact inside each group.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use soft tinted backgrounds and subtle shadows. Glossy icons identify products but should not overpower balances.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills for compact filters.

### Photography & Illustration Geometry

Use compact glossy product icons and real card renders inside stable wells. Keep money values and security controls outside imagery.

## Components

### Buttons

Bright pills distinguish Pay, Request, and Add Money. Full-width blue or mint buttons commit setup and product actions.

### Pricing Tabs

Home, Cards, Savings, Stocks, and Crypto use a persistent bottom bar with blue selection.

### Cards & Containers

Modules group net wealth, accounts, transactions, benefits, market assets, and card data with consistent padding and row height.

### Inputs & Forms

Money flows use amount-first entry, visible source and destination, and review. Security and identity forms remain single-column.

### Status & Build Page

Show funded, pending, scheduled, interest earned, market change, card limit, country access, and closed state as text plus color.

### Navigation

The five product tabs stay stable; profile holds support, settings, personal data, accounting, eSIM, and lifestyle benefits.

### Footer

Keep product navigation above the safe area; focused transfer and setup flows replace it with a confirmation action.

## Do's and Don'ts

### Do

- Keep totals dominant.
- Separate banking and investment risk.
- Use consistent action colors.
- Show limits before payment.
- Keep account rows comparable.

### Don't

- Don't let benefits outrank balances.
- Don't use icon color alone for state.
- Don't merge card and account controls.
- Don't hide fees or market movement.
- Don't overload one module with every product.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, and primary action at least 44px.

### Collapsing Strategy

Preserve total, selected product, next action, and status. Collapse benefits and promotional extras before financial data.

### Image Behavior

Contain glossy icons and card renders. Never crop card security data, charts, or account totals into imagery.

## Iteration Guide

1. Build home, accounts, and quick actions.
2. Add pay, request, and funding.
3. Add cards and savings.
4. Add stocks and crypto.
5. Add profile, accounting, and lifestyle utilities.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 100 available flow names were inventoried; onboarding, home, payments, funding, cards, stocks, and the complete flow inventory were image-reviewed.
- Market execution, support chat, and animated onboarding were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
