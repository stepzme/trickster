<design-context>
---
version: 1
platform: iOS
name: DailyFin-design-analysis
description: "A vivid mobile banking dashboard where each active card projects its own gradient atmosphere across the upper screen, while white rounded sheets hold quick actions and transaction lists. Electric blue controls, black financial values, colorful service tiles, and a four-tab navigation keep the dense feature set legible."
colors:
  primary: "#2589EF"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 16]}
  bank-card: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  quick-action: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: [12, 8]}
  transaction-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 16]}
  bottom-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
---

# Overview

DailyFin lets the selected bank card set the mood of the dashboard: purple, gold, or blue atmospheres fill the upper region, while operational content lives in crisp white sheets below.

**Key Characteristics:**
- Card-dependent atmospheric gradient header.
- Large physical-card metaphor with prominent balance.
- White quick-action strips and transaction sheets.
- Electric blue functional icons and links.
- Colorful merchant and service tiles inside bounded modules.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Card-dependent atmospheric gradient header.
- The reviewed screens show this treatment: Large physical-card metaphor with prominent balance.
- The reviewed screens show this treatment: White quick-action strips and transaction sheets.
- The reviewed screens show this treatment: Electric blue functional icons and links.
- The reviewed screens show this treatment: Colorful merchant and service tiles inside bounded modules.

# Color and surfaces

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

# Typography

### Font Family
- **SF Pro Display** — balances, screen titles, and card values.
- **SF Pro Text** — actions, service tiles, and transaction metadata.
- **SF Mono** — card endings, account references, and codes.

### Principles
- Keep amount and currency inseparable.
- Align transaction values on the trailing edge.
- Let status color support an explicit sign and label.
- Keep service-tile labels compact but legible.

### Note on Font Substitutes
Use the platform system sans or **Inter**, with tabular numerals for amounts and card data.

# Screen composition

### Spacing System
Use a 4pt base, 16pt gutters, 8pt quick-action divisions, 12pt transaction rhythm, and 16pt sheet padding.

### Grid & Container
Home stacks identity, selected card, card actions, quick access, service tiles, and a fixed four-tab bar. Card detail adds the transaction sheet directly below the card.

### Whitespace Philosophy
Use dense modules for banking tasks but keep card, actions, quick access, and history visibly separate.

# Navigation appearance

Keep My Bank, Payments, History, and More in the bottom bar; product detail uses back plus settings and notifications.

# Components

### Buttons
Use white segmented action strips over the gradient, blue icons for finance actions, and a circular amber Add control.

Use dots for card paging and compact selectors for account or history filters; active state uses blue or the current card context.

### Cards & Containers
Use bank cards, segmented action strips, quick-access panels, merchant tiles, transaction sheets, and transfer bottom sheets.

### Inputs & Forms
Transfer and payment forms use white grouped fields with explicit destination type, amount, source account, and review state.

### Status & Build Page
Show incoming, outgoing, rejected, pending, favorite, empty-card, and card-switching states with label, sign, icon, and semantic color.

### Navigation
Keep My Bank, Payments, History, and More in the bottom bar; product detail uses back plus settings and notifications.

The white tab bar anchors the interface and stays independent of card-colored atmospheric backgrounds.

# Imagery and icons

Create depth with the atmospheric header, card object, and white bottom sheets. Use minimal shadow inside transaction lists.

### Decorative Depth
Blurred card-colored gradients and card artwork create the atmosphere; operational rows remain flat and white.

# States

Show incoming, outgoing, rejected, pending, favorite, empty-card, and card-switching states with label, sign, icon, and semantic color.

# iOS adaptation

### Touch Targets
Keep card actions, quick access, service tiles, transactions, transfer routes, and tabs at least 44pt.

### Collapsing Strategy
Preserve selected product, balance, three primary actions, and navigation. Move secondary quick access and offers beneath account activity.

### Image Behavior
Aspect-fit card art and contain merchant graphics; extend only the derived atmospheric color or blur to the screen edges.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 119 flow names were inventoried; Home, My cards, and Transfer were image-reviewed.
- Payments, deposits, messages, and security branches were not deeply sampled.
- Reviewed depth came from gradients and card artwork, not a separate illustration system.

</design-context>
