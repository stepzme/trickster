<design-context>
---
version: alpha
name: ForteApp-design-analysis
description: "A broad mobile bank using a coral-to-magenta identity gradient, burgundy primary actions, white product panels, thin rose line icons, cyan informational cards, compact account tabs, dense financial rows, and a five-tab shell for chat, history, home, transfers, and payments."
colors: { primary: "#B50057", on-primary: "#FFFFFF", primary-hover: "#950047", primary-soft: "#FBE6F0", accent: "#E86573", accent-cyan: "#4CC6D4", ink: "#17181B", ink-muted: "#747982", ink-subtle: "#ADB2B9", canvas: "#FFFFFF", surface-1: "#F6F6F8", surface-2: "#EAF8FB", hairline: "#E2E4E8", semantic-success: "#24AA62", semantic-warning: "#F3B824", semantic-danger: "#D84C58", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  product-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  service-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10px }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "{colors.accent}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

ForteApp combines everyday banking, marketplace services, documents, forex, products, transfers, and payments in a white modular shell under a coral identity gradient.

## Colors

### Brand & Accent
Use burgundy for primary action, coral for identity, cyan for advice, and rose line icons for services.

### Surface
Keep finance surfaces white, product rows pale gray, and advice panels light cyan.

### Text
Use black for balances and actions, gray for metadata, and pale gray for disabled state.

### Semantic
Use green for incoming and accepted, yellow for attention, and red for expense or destructive state.

## Typography

### Font Family
Use SF Pro Display for balances and SF Pro Text for products, transfers, and legal copy.

### Hierarchy
Use 32–38px for balances, 22px for sections, 16px for rows, 14px body, and 10–12px metadata.

### Principles
Keep amount, currency, product, source, and destination explicit and align numeric columns.

### Note on Font Substitutes
Use the platform sans or Inter with tabular numerals.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px module gaps, and 12px row padding.

### Grid & Container
Home stacks identity, promo, service grid, product tabs, rates, and a five-tab footer; task screens become focused forms.

### Whitespace Philosophy
Keep modules compact but separate product, market, advice, and transaction context.

## Elevation & Depth
Use white cards, colored bands, and light sheets with minimal shadow.

### Decorative Depth
Campaign photography and product-card art provide depth; finance forms remain flat.

## Shapes

### Border Radius Scale
Use 10px for fields, 14px for cards, 18px for sheets, and full circles for major home or status icons.

### Photography & Illustration Geometry
Keep campaign photography bounded and service icons simple; avoid decoration in transfer forms.

## Components

### Buttons
Use full-width burgundy continue and confirm actions; secondary actions use pale gray or cyan text.

### Pricing Tabs
Cards, loans, deposits, and accounts use compact underline tabs; transfer types use icon grids.

### Cards & Containers
Use service tiles, product rows, advice cards, rate charts, transfer grids, history rows, and status panels.

### Inputs & Forms
Transfers and products group source, destination, amount, conditions, consents, and review.

### Status & Build Page
Show hidden balance, incoming, expense, pending, accepted, blocked, closed, favorite, and refund state explicitly.

### Navigation
Chats, History, Home, Transfers, and Payments remain in the bottom bar.

### Footer
The white footer marks active state in burgundy and keeps transaction tasks one tap away.

## Do's and Don'ts

### Do
- Keep product and currency explicit.
- Show fees and limits before confirmation.
- Separate marketing from forms.

### Don't
- Don't use the gradient behind dense data.
- Don't rely on red or green alone.
- Don't hide consent or eligibility.

## Responsive Behavior

### Breakpoints
Use a single column on phones, two finance panels on tablet, and persistent navigation above 1024px.

### Touch Targets
Keep services, tabs, product rows, transfer types, fields, and footer at least 44px.

### Collapsing Strategy
Preserve balance, product, primary task, form state, and navigation; move campaigns below operations.

### Image Behavior
Crop campaign media within banners and contain product marks; never stretch charts.

## Iteration Guide
1. Build home, products, history, transfers, and payments.
2. Add cards, accounts, deposits, and loans.
3. Add forex, services, profile, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 127 flows were inventoried; Home screen, Cards, and Transfer by card number were image-reviewed.
- Marketplace, eSIM, government services, and advanced product branches were not deeply sampled.
- No coherent illustration language appeared in reviewed task screens.

</design-context>

Use the design system above for all UI you generate.
