<design-context>
---
version: alpha
name: SberBank-Online-design-analysis
description: "A broad financial super-app built on misty mint gradients, white rounded modules, strong black hierarchy, and focused Sber green actions. Dense banking information is split into configurable cards, while friendly pastel 3D financial objects add identity to services without obscuring balances or transactions."

colors:
  primary: "#10A63A"
  on-primary: "#FFFFFF"
  primary-hover: "#20B64B"
  primary-soft: "#E4F6E8"
  ink: "#111315"
  ink-muted: "#666C70"
  ink-subtle: "#9A9FA3"
  canvas: "#F2F5F3"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F2"
  surface-mint: "#E6F7EF"
  hairline: "#E2E6E3"
  semantic-success: "#10A63A"
  semantic-warning: "#F0A72F"
  semantic-danger: "#E34B4B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  xxl: 28px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  product-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px 14px }
  transaction-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 0 }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62px }
---

## Overview

SberBank Online is a configurable financial dashboard on a pale mint atmosphere. White rounded modules organize wallet, history, transfers, spending, savings, loans, payments, and profile services. Sber green marks action and positive value; pastel 3D objects make secondary product areas recognizable.

**Key Characteristics:**
- Misty mint gradient around the top and navigation edges.
- White modular cards with medium rounding.
- Green actions, amounts, links, and active navigation.
- Dense finance data broken into titled, configurable blocks.
- Soft 3D financial objects inside service tiles.

## Colors

### Brand & Accent

- **Sber Green** ({colors.primary}) marks primary actions, active tabs, incoming amounts, and links.
- **Soft Green** ({colors.primary-soft}) supports selection and calm status emphasis.

### Surface

- **Canvas** ({colors.canvas}) is the pale financial workspace.
- **Surface 1** ({colors.surface-1}) carries cards, forms, and transaction groups.
- **Surface 2** ({colors.surface-2}) carries service tiles and filters.
- **Mint Surface** ({colors.surface-mint}) supports atmospheric highlights.

### Text

- **Ink** ({colors.ink}) carries balances, titles, and transaction identity.
- **Muted** ({colors.ink-muted}) carries dates and descriptions.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and inactive navigation.

### Semantic

Green doubles as brand and positive finance state. Orange and red remain strictly warning, error, or debt-related; use signs and labels so meaning does not rely on color alone.

## Typography

### Font Family

Use a neutral system sans with clear numerals. The interface depends on readable financial hierarchy, not a decorative typeface.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 36px | 700 | Total balance |
| `{typography.display-lg}` | 30px | 700 | Product balance or major title |
| `{typography.display-md}` | 25px | 700 | Screen title |
| `{typography.headline}` | 21px | 700 | Module heading |
| `{typography.card-title}` | 16px | 600 | Product or service title |
| `{typography.body}` | 14px | 400 | Transaction and form content |
| `{typography.caption}` | 10px | 400 | Account, date, and fee metadata |

### Principles

- Align amounts and keep signs unambiguous.
- Give balances stronger weight than account metadata.
- Keep service titles short and plain.
- Use green text selectively so it retains action and value meaning.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve tabular-looking numerals and compact finance density; avoid playful display fonts.

## Layout

### Spacing System

Use a 4px base, 10–12px screen gutters, 8px gaps between dashboard cards, and 20–24px between major financial groups.

### Grid & Container

The home dashboard is a single vertical feed of modular cards with horizontal product strips and two-column service tiles. Transfers and applications become focused one-column forms.

### Whitespace Philosophy

Whitespace separates modules without making the dashboard sparse. Keep related transactions tight inside one card and leave canvas between distinct financial domains.

## Elevation & Depth

Use white-on-mint contrast, shallow shadows, and ambient gradient rather than strong elevation. Product cards may overlap slightly within horizontal strips.

### Decorative Depth

Use mint atmosphere and pastel 3D objects for depth. Keep balance, transaction, and form surfaces flat and highly legible.

## Shapes

### Border Radius Scale

- Dashboard and product cards use 16px corners.
- Form fields and service tiles use 12px corners.
- Filters and compact actions are pill-shaped.
- Profile imagery may use rounded-square crops.

### Photography & Illustration Geometry

Place small 3D financial objects at the edge of service tiles, leaving copy unobstructed. User imagery remains rounded-square or circular and secondary to account data.

## Components

### Buttons

Primary financial commitments use solid green with white labels. Secondary actions use pale gray with dark text. Native controls may be used, but must inherit the green tint, card radii, typography, and spacing.

### Pricing Tabs

History filters, payment categories, and product groups use chips or horizontal tabs. Active state is green text, soft green, or a white lifted segment; avoid ornamental underlines.

### Cards & Containers

Dashboard cards have a title, optional All or More action, and compact content. Account cards show product identity, balance, and masked number. Service tiles combine short copy with one 3D object.

### Inputs & Forms

Transfer forms progress through destination, amount, source, and optional message. Keep commission and legal conditions close to the amount, with the green confirmation anchored at the bottom.

### Status & Build Page

Transaction history prioritizes amount, counterparty, date, category, and status. Receipts and confirmations become clean document-like surfaces with one save or share action.

### Navigation

Use a five-item bottom bar for Home, Savings, Lifestyle, Payments, and Loans. Search with GigaChat remains near the top; deep flows use back navigation and focused titles.

### Footer

There is no marketing footer. Long financial flows end with a safe-area-aware confirmation action or the final informational group.

## Do's and Don'ts

### Do

- Keep balances and next actions immediately visible.
- Reuse modular white cards.
- Use green consistently for action and positive value.
- Keep financial forms focused and linear.
- Use illustrations only in supporting service tiles.

### Don't

- Do not turn every module into a different visual system.
- Do not use green decoratively across all text.
- Do not hide fees or source accounts.
- Do not let illustration obscure financial data.
- Do not expose default blue platform controls.

## Responsive Behavior

### Breakpoints

Keep transaction and application flows single-column. Dashboard service tiles can stay two-column while titles and values remain readable, otherwise stack.

### Touch Targets

Cards, filters, product strips, transfer recipients, and bottom navigation need at least 44px targets.

### Collapsing Strategy

Allow product strips and filters to scroll horizontally. Keep the confirmation action pinned during long transfers or applications.

### Image Behavior

Scale 3D objects proportionally and keep them inside tile bounds. Do not crop away the object silhouette or place it behind critical amounts.

## Iteration Guide

Start with the mint canvas, white module system, green actions, and bottom navigation. Add wallet, history, transfers, payments, savings, and loans before optional assistant or lifestyle modules.

## Known Gaps

The reviewed scenarios cover onboarding, home, wallet, cards, history, transfers, payments, savings, loans, profile, and GigaChat. Tablet behavior, accessibility scaling, dark mode, and every specialized banking product were not visually sampled.
