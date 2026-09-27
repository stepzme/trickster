<design-context>
---
version: alpha
name: PayPal-design-analysis
description: "A calm financial interface using a pale blue-lilac canvas, large white cards, strong black headings, PayPal blue action accents, sparse three-tab navigation, and generous empty space around focused payment tasks."
colors: {primary: "#0070E0", on-primary: "#FFFFFF", primary-hover: "#1685F5", primary-focus: "#0057B8", ink: "#101114", ink-muted: "#5F6268", ink-subtle: "#92969D", ink-tertiary: "#C2C6CC", canvas: "#F2F4FF", surface-1: "#FFFFFF", surface-2: "#F7F8FC", surface-3: "#E8ECF4", surface-4: "#DDE2EB", hairline: "#E2E5EC", hairline-strong: "#C9CED8", hairline-tertiary: "#B3BAC5", inverse-canvas: "#000000", inverse-surface-1: "#1B1D21", inverse-surface-2: "#2C2F34", inverse-ink: "#FFFFFF", brand-secure: "#003087", semantic-success: "#2E936F", semantic-overlay: "#15171B"}
typography:
  display-xl: {fontFamily: PayPal Open, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.9px}
  display-lg: {fontFamily: PayPal Open, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: PayPal Open, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: PayPal Open, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3px}
  card-title: {fontFamily: PayPal Open, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: PayPal Open, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: PayPal Open, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: PayPal Open, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: PayPal Open, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: PayPal Open, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: PayPal Open, fontSize: 13px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: PayPal Open, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 48px}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  balance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px}
  activity-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-3}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px}
---
## Overview

PayPal is sparse and reassuring: a pale blue-lilac field, white financial cards, black typography, and a small amount of PayPal blue. The interface gives each money task a single visible decision.

**Key Characteristics:** pale cool canvas, white cards, bold black headings, blue financial accent, black pill commitments, three destinations, and deliberate empty space.

## Colors

### Brand & Accent

PayPal blue identifies balance, active transfer context, and the raised central navigation action. Black is used for the final Send, Request, or Done commitment.

### Surface

A pale blue-lilac canvas carries white rounded cards and fields; deeper grays appear only for dividers and inactive structure.

### Text

Black leads amounts and task headings; mid-gray carries labels and explanations; blue highlights links and financial context.

### Semantic

Muted green confirms completion, blue denotes trusted action, and orange is limited to small attention dots.

## Typography

### Font Family

Use PayPal Open where available, with SF Pro or another humanist system sans as substitute.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Amount or result |
| headline | 21px | 700 | Task heading |
| card-title | 16px | 600 | Balance or transaction |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Navigation and metadata |

### Principles

- Make amount and action unmistakable.
- Use short centered guidance in focused tasks.
- Keep financial metadata aligned and quiet.

### Note on Font Substitutes

Use a friendly platform sans with sturdy bold weights and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 12–16px card padding, 16px gutters, and large open vertical zones between decisions.

### Grid & Container

Home and Wallet are one-column card stacks; Send/Request centers one search field and one segmented action near the bottom.

### Whitespace Philosophy

Empty space is functional: it isolates the financial task and prevents transaction details from competing with the next action.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Calm base |
| 1 | White card | Balance and activity |
| 2 | Raised circular action | Send/Request navigation |
| 3 | Focused white result | Confirmation |

### Decorative Depth

Use soft card separation and one dimensional confirmation object; avoid decorative gradients or multiple shadow levels.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small label |
| rounded-sm | 8px | Utility row |
| rounded-md | 12px | Financial card |
| rounded-lg | 16px | Grouped panel |
| rounded-full | full | Actions, avatar, segmented control |

### Photography & Illustration Geometry

Avatars remain small circles; card artwork fills its own rectangular wallet card; confirmation art stays isolated and centered.

## Components

### Buttons

Use black wide pills for final commitments, blue circles for the central transfer action, and text links for secondary navigation.

### Pricing Tabs

Send and Request share a full-width segmented pill whose selected half becomes black.

### Cards & Containers

Balance and activity cards use white, low visual noise, and aligned amounts; wallet cards may carry their own issuer artwork.

### Inputs & Forms

Search and recipient inputs use white outlined pills; surrounding native controls inherit the same black type and generous spacing.

### Status & Build Page

Show transaction direction, amount, counterparty, date, and completion outcome without promotional distraction.

### Navigation

Use three destinations with a raised circular Send/Request control in the center.

### Footer

No footer; the bottom navigation or current black action owns the safe area.

## Do's and Don'ts

### Do

- Isolate one money decision per focused screen.
- Keep balance and transaction facts highly legible.
- Style native controls to inherit this visual system.

### Don't

- Don't fill empty space with extra financial promotions.
- Don't use blue for every button when black communicates the final commitment.
- Don't bury transfer direction or amount in prose.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten card padding |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Increase open margins |

### Touch Targets

Navigation, transfer actions, segmented controls, transaction rows, and fields remain at least 44px.

### Collapsing Strategy

Preserve amount, recipient, balance, transaction state, and commitment; collapse explanatory copy first.

### Image Behavior

Keep avatars circular and wallet-card artwork uncropped within its fixed ratio.

## Iteration Guide

Tune send/request clarity first, then home activity, wallet structure, confirmation, and secondary preferences.

## Known Gaps

- Dispute, refund, and failure recovery were not fully sampled.
- International fee variations were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
