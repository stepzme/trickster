<design-context>
---
version: alpha
name: Coinbase-design-analysis
description: "A bright, information-dense crypto finance interface built on white, decisive Coinbase blue, black typography, pale-gray pills and cards, compact market rows, green and red performance signals, simple line charts, and a persistent four-tab task model."
colors:
  primary: "#1652F0"
  on-primary: "#FFFFFF"
  primary-hover: "#0D45D8"
  primary-soft: "#E7EFFF"
  ink: "#0A0B0D"
  ink-muted: "#5B616E"
  ink-subtle: "#9AA0AA"
  canvas: "#FFFFFF"
  surface-1: "#F5F6F8"
  surface-2: "#ECEEF1"
  hairline: "#E1E3E7"
  semantic-success: "#098551"
  semantic-danger: "#CF334A"
  semantic-warning: "#20345E"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  metric-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  asset-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 0 }
  bottom-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 10px 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Coinbase makes a dense asset market feel approachable through a white canvas, clear blue actions, compact asset rows, and chart-led summaries. Transaction tasks stay anchored to persistent navigation.

**Key Characteristics:**
- White canvas with pale-gray functional modules.
- Coinbase blue for primary actions and active navigation.
- Compact watchlists with token icon, symbol, value, chart, and delta.
- Green and red reserved for movement and transaction meaning.
- Rounded bottom sheets for buy, sell, convert, and recurring actions.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Buy, deposit, active tabs, links, and progress.
- **Primary Soft** ({colors.primary-soft}): Secondary transfer and selected backgrounds.

### Surface
- **Canvas** ({colors.canvas}): Main home, trade, pay, and transaction screens.
- **Surface 1** ({colors.surface-1}): Search, metrics, onboarding, and neutral buttons.
- **Surface 2** ({colors.surface-2}): Dividers and disabled state.
- **Hairline** ({colors.hairline}): Section boundaries.

### Text
- **Ink** ({colors.ink}): Portfolio value, asset names, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Descriptions, legal copy, and secondary values.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Positive movement and income.
- **Danger** ({colors.semantic-danger}): Negative movement and risk.
- **Warning** ({colors.semantic-warning}): Timed or regulatory notices.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet focus.

## Typography

### Font Family
- **SF Pro Display** — portfolio totals and major headings.
- **SF Pro Text** — asset rows, actions, and explanatory content.
- **SF Mono** — wallet addresses and technical identifiers.

### Hierarchy
Use 36px bold for portfolio values, 22px bold for section headlines, 17px semibold for card titles, 14px body, and 10–12px legal or market metadata.

### Principles
- Align numeric columns and deltas consistently.
- Distinguish asset name, ticker, value, and change.
- Keep risk copy readable rather than visually hidden.
- Use blue for action, not market direction.

### Note on Font Substitutes
Use the platform system sans or **Inter** with tabular numerals and controlled chart labels.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 10px asset-row rhythm, 16px card padding, and 24px between market sections.

### Grid & Container
Home stacks portfolio, onboarding, watchlist, and quick actions. Trade stacks filters, ranked asset rows, market insight, and legal context.

### Whitespace Philosophy
Keep financial sections compact but visibly separated; do not wrap each asset row in an isolated card.

## Elevation & Depth
Use gray fills and hairlines on the main canvas. Reserve clear elevation for bottom sheets and account overlays.

### Decorative Depth
Charts and token marks provide visual texture; avoid atmospheric backgrounds or decorative crypto art.

## Shapes

### Border Radius Scale
Use 10px for search, 14px for metric cards, 18px for onboarding cards, 24px top corners for sheets, and full pills for actions and filters.

### Photography & Illustration Geometry
Use token marks, small functional onboarding symbols, and contained charts. Do not make decorative imagery the page background.

## Components

### Buttons
Primary actions are full-width blue pills; secondary actions use pale-blue or gray fills; text links remain blue.

### Pricing Tabs
Market filters use horizontal pills with a dark selected state and pale-gray inactive states.

### Cards & Containers
Use onboarding cards, metric cards, asset rows, notice panels, chart regions, and bottom sheets.

### Inputs & Forms
Search uses a gray capsule. Trade and payment forms keep amount, asset, funding source, fees, and review state clearly separated.

### Status & Build Page
Show positive or negative performance, regulation deadlines, pending transactions, staking state, and verification progress with label plus semantic color.

### Navigation
Keep Home, Trade, Pay, and Transactions in the tab bar; search, menu, account, and notifications remain in the top chrome.

### Footer
The white tab bar maintains task destinations and the safe area without heavy elevation.

## Do's and Don'ts

### Do
- Keep portfolio and asset values scannable.
- Reserve blue for product action.
- Pair market color with explicit signs and numbers.
- Preserve legal and risk context.

### Don't
- Don't use green as the primary CTA color.
- Don't overload asset rows with card chrome.
- Don't hide fees or funding source before confirmation.
- Don't introduce decorative coin illustrations into the shell.

## Responsive Behavior

### Breakpoints
Use the reference single column up to 767px, a centered financial column on tablet, and portfolio plus market-detail columns above 1024px.

### Touch Targets
Keep tabs, asset rows, filter pills, sheet actions, and trade buttons at least 44px.

### Collapsing Strategy
Preserve portfolio value, primary buy or sell action, active asset, and navigation. Move insight and legal sections below core task content.

### Image Behavior
Keep token marks square and charts aspect-fit. Never crop chart axes or use market imagery as a background.

## Iteration Guide
1. Build portfolio and four-tab shell.
2. Add watchlist and asset detail.
3. Add buy, sell, convert, and recurring actions.
4. Add payments and transaction history.
5. Add market insight, staking, support, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 107 flow names were inventoried; Home, Buy and sell, and Trade were image-reviewed.
- Advanced derivatives, support, and the full verification journey were not deeply sampled.
- No coherent decorative illustration language appeared in reviewed task screens.

</design-context>

Use the design system above for all UI you generate.
