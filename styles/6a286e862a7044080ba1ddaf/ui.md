<design-context>
---
version: alpha
name: Banco-Plata-design-analysis
description: "A soft, futuristic banking interface built from mist-gray backgrounds, translucent white rounded cards, orange brand accents, violet controls, and high-contrast black totals. Credit, account, payments, cashback, installments, and savings share a floating modular dashboard; premium 3D product renders turn new financial products into tactile objects."
colors:
  primary: "#FF5B19"
  on-primary: "#FFFFFF"
  primary-hover: "#E84C0C"
  primary-soft: "#FFF0E8"
  accent-violet: "#3714E8"
  accent-blue: "#2563EB"
  accent-red: "#FF3B30"
  ink: "#101014"
  ink-muted: "#74747C"
  ink-subtle: "#A6A6AE"
  canvas: "#F2F2F5"
  surface-1: "#FFFFFF"
  surface-2: "#E8E8ED"
  hairline: "#DDDEE4"
  semantic-success: "#24B66F"
  semantic-danger: "#E54455"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.9px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  summary-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  action-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  transfer-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px }
---

## Overview

Banco Plata uses a soft floating-card system to unify credit, cash account, cards, cashback, installments, payments, transfers, savings, and investment. Orange identifies the brand and acquisition; violet emphasizes financial controls.

**Key Characteristics:**
- Mist-gray atmospheric canvas.
- Large white rounded account modules.
- Orange brand and acquisition actions.
- Floating pill navigation.
- Premium 3D financial product renders.

## Colors

### Brand & Accent
- **Plata Orange** ({colors.primary}): Wordmark, acquisition, and key product actions.
- **Violet** ({colors.accent-violet}): Transfers, toggles, and financial emphasis.
- **Blue** ({colors.accent-blue}): Linked utility actions.
- **Red** ({colors.accent-red}): Cashback and alerts.

### Surface
- **Canvas** ({colors.canvas}): Dashboard atmosphere.
- **Surface 1** ({colors.surface-1}): Accounts, summaries, and sheets.
- **Surface 2** ({colors.surface-2}): Disabled and secondary fields.
- **Hairline** ({colors.hairline}): Subtle separation.

### Text
- **Ink** ({colors.ink}): Balances, totals, and headings.
- **Ink Muted** ({colors.ink-muted}): Product terms and dates.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and empty state.

### Semantic
- **Success** ({colors.semantic-success}): Completed and positive state.
- **Danger** ({colors.semantic-danger}): Freeze, discard, and errors.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet focus.

## Typography

### Font Family

- **SF Pro Display** — balances, campaigns, and major headings.
- **SF Pro Text** — cards, payments, and forms.
- **SF Mono** — card suffixes and codes.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Balance or product campaign |
| `{typography.headline}` | 22px | 700 | Screen and module heading |
| `{typography.card-title}` | 16px | 600 | Account and payment title |
| `{typography.body}` | 14px | 400 | Conditions and forms |
| `{typography.caption}` | 10px | 400 | Navigation and metadata |
| `{typography.button}` | 14px | 600 | Primary action |

### Principles

- Lead with amount and available balance.
- Keep credit and own-funds distinctions explicit.
- Use bold section labels, not dense bold body text.
- Keep campaign lettering inside authored assets.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 12px module gaps, and 16px card padding.

### Grid & Container

Home stacks paired insight tiles, transaction summary, account modules, and product invitations. Payments use action pairs, favorites, and category grids. Details become one-column sheets.

### Whitespace Philosophy

Allow modules to float in open mist-gray space; avoid packing every viewport edge.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Mist-gray atmosphere | Dashboard base |
| 1 | White rounded card | Accounts and summaries |
| 2 | Gradient orb or card | Dynamic finance signal |
| 3 | White bottom sheet over scrim | Transfer choice |

### Decorative Depth

Use translucent highlights, gradient spheres, and premium 3D product renders. Functional text remains high contrast.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Inputs and tags |
| `{rounded.sm}` | 12px | Payment icons |
| `{rounded.md}` | 16px | Summary tiles |
| `{rounded.lg}` | 22px | Account cards and sheets |
| `{rounded.pill}` | full | Navigation and chips |
| `{rounded.full}` | full | Avatar and gradient orb |

### Photography & Illustration Geometry

Cards keep landscape ratio. Product illustration uses glossy isolated 3D objects on dark or iridescent grounds, with generous safe area for copy.

## Components

### Buttons

Orange commits acquisition or savings. White action tiles handle pay, bill pay, transfer, freeze, and reissue. Violet controls indicate enabled financial permissions.

### Pricing Tabs

Card and account choices use small thumbnail selectors. Transfer rails appear as large sheet rows.

### Cards & Containers

Account cards expose amount, due state, linked cards, dates, and shortcuts. Summary tiles cover cashback, installments, and spending. Product campaigns are visually richer and isolated.

### Inputs & Forms

Authentication uses large code entry. Payment and transfer forms use one-column fields and review. Numeric keyboard remains visible where useful.

### Status & Build Page

Show due, available credit, own funds, cashback earned, months deferred, frozen, online payment, and ATM state explicitly.

### Navigation

Home, Pay, Invest, Invite amount, and Chat form a floating bottom pill. Product details keep the navigation reachable when safe.

### Footer

The pill navigation floats above the safe area; sheets and forms replace it with a focused confirmation action.

## Do's and Don'ts

### Do

- Separate available credit from own funds.
- Keep due state and dates visible.
- Use orange for acquisition and high-value progression.
- Preserve the soft floating surface system.
- Use 3D art only for new products.

### Don't

- Don't reduce contrast to achieve translucency.
- Don't put product art behind balances.
- Don't merge bill payment and transfers.
- Don't hide card security toggles.
- Don't use orange for destructive actions.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add dashboard columns |
| Compact | 390–767px | Default stacked modules |
| Small | <390px | Stack insight tiles and shorten labels |

### Touch Targets

Keep tiles, card selectors, toggles, transfer rows, and bottom navigation at least 44px.

### Collapsing Strategy

Stack insight pairs before shrinking text. Preserve balances, due state, and primary account above campaigns.

### Image Behavior

Contain 3D product objects and preserve card aspect ratio. Crop only authored campaign backgrounds, never banking data.

## Iteration Guide

1. Establish dashboard modules and pill navigation.
2. Build card and account detail.
3. Add payments, transfers, and favorites.
4. Add security, deposits, and statements.
5. Add new-product 3D campaigns last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; sign-in, home, card detail, transfers, payments, and deposit flows were image-reviewed.
- Animation, investment detail, and biometric behavior were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
