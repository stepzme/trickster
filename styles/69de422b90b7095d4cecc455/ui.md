<design-context>
---
version: 1
platform: iOS
name: Coinbase-design-analysis
description: "A bright, information-dense crypto finance interface built on white, decisive Coinbase blue, black typography, pale-gray pills and cards, compact market rows, green and red performance signals, simple line charts, and a persistent four-tab task model."
colors:
  primary: "#1652F0"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  metric-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  asset-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 0]}
  bottom-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14]}
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Coinbase makes a dense asset market feel approachable through a white canvas, clear blue actions, compact asset rows, and chart-led summaries. Transaction tasks stay anchored to persistent navigation.

# Non-negotiable visual invariants

- Primary screens use White canvas with pale-gray functional modules.
- Keep portfolio and asset values scannable.
- Reserve blue for product action.
- Pair market color with explicit signs and numbers.
- Preserve legal and risk context.
- Home stacks portfolio, onboarding, watchlist, and quick actions.
- Trade stacks filters, ranked asset rows, market insight, and legal context.
- Keep financial sections compact but visibly separated; do not wrap each asset row in an isolated card.

# Color and surfaces

- **Primary** ({colors.primary}): Buy, deposit, active tabs, links, and progress.
- **Primary Soft** ({colors.primary-soft}): Secondary transfer and selected backgrounds.

- **Canvas** ({colors.canvas}): Main home, trade, pay, and transaction screens.
- **Surface 1** ({colors.surface-1}): Search, metrics, onboarding, and neutral buttons.
- **Surface 2** ({colors.surface-2}): Dividers and disabled state.
- **Hairline** ({colors.hairline}): Section boundaries.

- **Ink** ({colors.ink}): Portfolio value, asset names, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Descriptions, legal copy, and secondary values.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Positive movement and income.
- **Danger** ({colors.semantic-danger}): Negative movement and risk.
- **Warning** ({colors.semantic-warning}): Timed or regulatory notices.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet focus.

# Typography

- **SF Pro Display** — portfolio totals and major headings.
- **SF Pro Text** — asset rows, actions, and explanatory content.
- **SF Mono** — wallet addresses and technical identifiers.

Use 36 points bold for portfolio values, 22 points bold for section headlines, 17 points semibold for card titles, 14 points body, and 10–12 points legal or market metadata.

- Align numeric columns and deltas consistently.
- Distinguish asset name, ticker, value, and change.
- Keep risk copy readable rather than visually hidden.
- Use blue for action, not market direction.

Use the platform system sans or **Inter** with tabular numerals and controlled chart labels.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 10 points asset-row rhythm, 16 points card padding, and 24 points between market sections.

Home stacks portfolio, onboarding, watchlist, and quick actions. Trade stacks filters, ranked asset rows, market insight, and legal context.

Keep financial sections compact but visibly separated; do not wrap each asset row in an isolated card.

Charts and token marks provide visual texture; avoid atmospheric backgrounds or decorative crypto art.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep Home, Trade, Pay, and Transactions in the tab bar; search, menu, account, and notifications remain in the top chrome.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are full-width blue pills; secondary actions use pale-blue or gray fills; text links remain blue.

Use onboarding cards, metric cards, asset rows, notice panels, chart regions, and bottom sheets.

Search uses a gray capsule. Trade and payment forms keep amount, asset, funding source, fees, and review state clearly separated.

Show positive or negative performance, regulation deadlines, pending transactions, staking state, and verification progress with label plus semantic color.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use token marks, small functional onboarding symbols, and contained charts. Do not make decorative imagery the page background.

Keep token marks square and charts aspect-fit. Never crop chart axes or use market imagery as a background.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show positive or negative performance, regulation deadlines, pending transactions, staking state, and verification progress with label plus semantic color.

- **Success** ({colors.semantic-success}): Positive movement and income.
- **Danger** ({colors.semantic-danger}): Negative movement and risk.
- **Warning** ({colors.semantic-warning}): Timed or regulatory notices.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep tabs, asset rows, filter pills, sheet actions, and trade buttons at least 44 points.
- Preserve portfolio value, primary buy or sell action, active asset, and navigation. Move insight and legal sections below core task content.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use green as the primary CTA color.
- Do not overload asset rows with card chrome.
- Do not hide fees or funding source before confirmation.
- Do not introduce decorative coin illustrations into the shell.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
