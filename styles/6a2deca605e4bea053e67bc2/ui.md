<design-context>
---
version: alpha
name: DailyFin-design-analysis
description: "A vivid mobile banking dashboard where each active card projects its own gradient atmosphere across the upper screen, while white rounded sheets hold quick actions and transaction lists. Electric blue controls, black financial values, colorful service tiles, and a four-tab navigation keep the dense feature set legible."
colors:
  primary: "#2589EF"
  on-primary: "#FFFFFF"
  primary-hover: "#1475D4"
  primary-soft: "#DCEEFF"
  accent: "#FFAD16"
  ink: "#17181B"
  ink-muted: "#737984"
  ink-subtle: "#ACB2BC"
  canvas: "#F4F6F9"
  surface-1: "#FFFFFF"
  surface-2: "#EAF2FB"
  hairline: "#E0E4E9"
  semantic-success: "#12A65A"
  semantic-danger: "#D94A5B"
  semantic-warning: "#FFAD16"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 16px }
  bank-card: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  quick-action: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 12px 8px }
  transaction-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px 16px }
  bottom-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

DailyFin lets the selected bank card set the mood of the dashboard: purple, gold, or blue atmospheres fill the upper region, while operational content lives in crisp white sheets below.

**Key Characteristics:**
- Card-dependent atmospheric gradient header.
- Large physical-card metaphor with prominent balance.
- White quick-action strips and transaction sheets.
- Electric blue functional icons and links.
- Colorful merchant and service tiles inside bounded modules.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Banking actions, links, active tabs, and list icons.
- **Primary Soft** ({colors.primary-soft}): Selected and empty-card surfaces.
- **Accent** ({colors.accent}): Add product and important utility action.

### Surface
- **Canvas** ({colors.canvas}): Neutral content and loading background.
- **Surface 1** ({colors.surface-1}): Actions, transactions, sheets, and tab bar.
- **Surface 2** ({colors.surface-2}): Service launchers and selection.
- **Hairline** ({colors.hairline}): Transaction and menu separation.

### Text
- **Ink** ({colors.ink}): Headings, balances, and transaction values.
- **Ink Muted** ({colors.ink-muted}): Dates, account details, and captions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Incoming money and completed status.
- **Danger** ({colors.semantic-danger}): Debits, failures, and rejected operations.
- **Warning** ({colors.semantic-warning}): Add, attention, and deadline emphasis.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet backdrop.

## Typography

### Font Family
- **SF Pro Display** — balances, screen titles, and card values.
- **SF Pro Text** — actions, service tiles, and transaction metadata.
- **SF Mono** — card endings, account references, and codes.

### Hierarchy
Use 38px bold for major balance emphasis, 22px for screen titles, 16px semibold for sections, 14px body, and 10–12px account metadata.

### Principles
- Keep amount and currency inseparable.
- Align transaction values on the trailing edge.
- Let status color support an explicit sign and label.
- Keep service-tile labels compact but legible.

### Note on Font Substitutes
Use the platform system sans or **Inter**, with tabular numerals for amounts and card data.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 8px quick-action divisions, 12px transaction rhythm, and 16px sheet padding.

### Grid & Container
Home stacks identity, selected card, card actions, quick access, service tiles, and a fixed four-tab bar. Card detail adds the transaction sheet directly below the card.

### Whitespace Philosophy
Use dense modules for banking tasks but keep card, actions, quick access, and history visibly separate.

## Elevation & Depth
Create depth with the atmospheric header, card object, and white bottom sheets. Use minimal shadow inside transaction lists.

### Decorative Depth
Blurred card-colored gradients and card artwork create the atmosphere; operational rows remain flat and white.

## Shapes

### Border Radius Scale
Use 10px for controls, 14px for service modules, 18px for bank cards, 24px top corners for sheets, and full circles for add and header actions.

### Photography & Illustration Geometry
Treat bank-card artwork and merchant imagery as bounded product media. Preserve card ratio and contain service artwork inside tiles.

## Components

### Buttons
Use white segmented action strips over the gradient, blue icons for finance actions, and a circular amber Add control.

### Pricing Tabs
Use dots for card paging and compact selectors for account or history filters; active state uses blue or the current card context.

### Cards & Containers
Use bank cards, segmented action strips, quick-access panels, merchant tiles, transaction sheets, and transfer bottom sheets.

### Inputs & Forms
Transfer and payment forms use white grouped fields with explicit destination type, amount, source account, and review state.

### Status & Build Page
Show incoming, outgoing, rejected, pending, favorite, empty-card, and card-switching states with label, sign, icon, and semantic color.

### Navigation
Keep My Bank, Payments, History, and More in the bottom bar; product detail uses back plus settings and notifications.

### Footer
The white tab bar anchors the interface and stays independent of card-colored atmospheric backgrounds.

## Do's and Don'ts

### Do
- Let the selected card drive only the upper atmosphere.
- Keep task surfaces white and readable.
- Show amount, currency, direction, and state together.
- Preserve fast access to pay and transfer.

### Don't
- Don't carry card gradients through transaction rows.
- Don't rely on red or green alone for operation meaning.
- Don't distort the bank-card aspect ratio.
- Don't turn merchant tiles into full-page decoration.

## Responsive Behavior

### Breakpoints
Use the reference single column up to 767px, a centered card-and-activity column on tablet, and split product plus history panels above 1024px.

### Touch Targets
Keep card actions, quick access, service tiles, transactions, transfer routes, and tabs at least 44px.

### Collapsing Strategy
Preserve selected product, balance, three primary actions, and navigation. Move secondary quick access and offers beneath account activity.

### Image Behavior
Aspect-fit card art and contain merchant graphics; extend only the derived atmospheric color or blur to the screen edges.

## Iteration Guide
1. Build selected card, balance, and primary actions.
2. Add product paging and transaction history.
3. Add payments and transfer sheets.
4. Add quick access, services, deposits, and applications.
5. Add messages, documents, security, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 119 flow names were inventoried; Home, My cards, and Transfer were image-reviewed.
- Payments, deposits, messages, and security branches were not deeply sampled.
- Reviewed depth came from gradients and card artwork, not a separate illustration system.

</design-context>

Use the design system above for all UI you generate.
