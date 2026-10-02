<design-context>
---
version: 1
platform: iOS
name: Coinbase-design-analysis
description: "A bright crypto-finance interface built on white canvas, Coinbase blue action pills, black financial typography, pale-gray controls, compact asset rows, green/red market deltas, thin blue line charts, bottom sheets, and small authored brand/verification illustrations."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F6F8"
  surface-tertiary: "#ECEFF3"
  accent-primary: "#0052FF"
  accent-primary-soft: "#E7F0FF"
  accent-primary-muted: "#8DB5FF"
  text-primary: "#0A0B0D"
  text-secondary: "#5B616E"
  text-tertiary: "#9AA0AA"
  divider: "#E1E4EA"
  success: "#098551"
  danger: "#CF334A"
  warning-dark: "#111827"
  overlay: "#000000"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 42, fontWeight: 600, lineHeight: 48}
  metric: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
  micro: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13}
spacing:
  screen-horizontal: 20
  section-gap: 24
  card-padding: 16
  control-gap: 10
  row-gap: 12
rounded:
  control: 14
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.canvas}", typography: "{typography.label}", rounded: "{rounded.pill}", height: 56}
  secondary-action: {backgroundColor: "{colors.accent-primary-soft}", textColor: "{colors.accent-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", height: 52}
  neutral-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", height: 44}
  search-field: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.pill}", height: 40}
  asset-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: 0, padding: [10, 0]}
  bottom-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.sheet}", padding: 20}
  bottom-navigation: {backgroundColor: "{colors.canvas}", activeColor: "{colors.accent-primary}", inactiveColor: "{colors.text-primary}", height: 58}
---

# Overview

Coinbase uses a white, high-contrast financial shell with blue actions and compact data presentation. The recognizable look comes from a large numeric portfolio/amount hierarchy, pill controls, bottom-sheet actions, asset rows with token marks and right-aligned values, small market charts, and carefully placed blue brand artwork.

# Non-negotiable visual invariants

- Keep the page background white and use pale gray only for functional modules, search, cards, and neutral buttons.
- Reserve Coinbase blue for primary actions, active states, progress, links, and major brand surfaces.
- Make amounts and portfolio values the dominant text on finance/task screens.
- Keep asset rows compact: token mark at left, asset name/ticker or subtitle in the middle, value and delta aligned to the right.
- Use green/red only for financial movement and status values, not for primary calls to action.
- Preserve legal/risk copy as visible small text near trade and transaction areas.
- Use bottom sheets with rounded top corners for action menus and trade choices.
- Use authored brand/verification illustrations only in onboarding, prompts, empty states, and promo cards; do not turn them into page backgrounds.

# Color and surfaces

The standard shell is white. Pale gray `#F5F6F8` creates search capsules, onboarding cards, metric cards, disabled buttons, and neutral pills. Hairlines are subtle and mostly appear between large sections or above persistent bottom areas.

Coinbase blue `#0052FF` is saturated and decisive. It fills primary action pills, selected tabs, progress bars, links, and major brand splash surfaces. A pale blue tint supports secondary transfer actions and selected/soft backgrounds. Disabled blue actions reduce saturation and opacity rather than changing hue.

Black/near-black is used for headings, portfolio values, asset names, and keypad numerals. Muted gray supports explanatory text, labels, legal copy, and placeholders. Positive deltas are green; negative deltas are red. Dark warning capsules are used for limited-time or promotional labels, with white text inside.

Avoid gradients in the app shell except in authored brand artwork or small promotional assets where observed. Do not introduce dark cards for ordinary finance content.

# Typography

Use SF Pro Display and SF Pro Text. Portfolio amounts, payment amounts, and big numeric inputs use 30-42 pt display text with tabular numerals and generous whitespace. Screen titles use 24-26 pt bold. Section titles use 20 pt bold. Asset rows use 14-15 pt text, with semibold names and regular subtitles.

Right-align asset prices and deltas in rows. Keep signs, currencies, APY, date ranges, fees, and crypto tickers explicit. Legal copy can be 10-12 pt but must remain readable and visible.

Buttons use semibold 14-15 pt labels. Search placeholders and filter chips use compact text. Onboarding hero copy can be larger and centered on the dark blue/brand intro screen, but ordinary product screens stay utilitarian and data-first.

With Dynamic Type, wrap descriptive and legal copy before shrinking amounts, action labels, or row values. Maintain numeric alignment with tabular figures.

# Screen composition

Use 20 pt horizontal gutters on most screens. Top chrome is compact: menu/back control, search capsule or centered title, and small circular/line icons. Content stacks vertically with clear section boundaries and limited decoration.

Home-style finance screens place notice panels near the top, then a large balance/portfolio metric, a compact line chart or account breakdown, quick action pills, onboarding/compliance card, watchlist, and asset rows. The chart region is thin and wide, with minimal axis chrome and blue line/dot texture.

Trade and market screens start with the same top chrome, then segmented pill filters, compact ranked asset rows, small metric cards, market update cards, and visible legal text lower in the scroll. Rows remain list-like, not isolated cards.

Buy/pay screens are task surfaces: large amount at top, asset/funding rows below, a numeric keypad or review rows, then a full-width blue action. Review screens use a centered token mark, bold confirmation title, fee/source rows, optional toggles, risk copy, and a bottom blue CTA.

Menu/settings screens are sparse white lists with black outline icons, text labels, right chevrons, and occasional large promo cards. Bottom sheets dim the underlying page and expose a white rounded sheet with icon-led action rows.

# Navigation appearance

Navigation appearance is minimal and finance-oriented: white top bars, black line icons, gray search pills, small notification badges, and blue selected indicators. Bottom navigation is white and flat with simple black icons; active state is Coinbase blue. This section specifies visual treatment only, not product navigation or task flow.

# Components

Primary buttons are full-width blue pills, 52-56 pt high, with white semibold labels. Secondary actions use pale blue fill with blue text. Neutral controls use pale gray fill with black text.

Search fields are rounded gray capsules, usually with a magnifier icon and no heavy border. Filter chips are rounded pills; selected chips use dark fill with white text, while inactive chips use pale gray fill.

Asset rows use token logos as colored circular marks, two-line text blocks, and right-aligned numeric values. Sparklines are thin and color-coded, never heavy chart widgets. Watchlists and transaction lists share the same compact row rhythm.

Notice panels use a narrow blue left accent or blue info icon, small body text, and a blue link. Onboarding/compliance cards use pale gray rounded rectangles, bold task text, small illustration, and blue progress bars.

Amount entry screens use oversized currency numerals, large keypad digits, and plain white space. Bottom sheets use a top grabber, rounded top corners, and 48-56 pt action rows with blue circular icons.

Settings/menu rows use black outline icons, medium-weight labels, chevrons, and large vertical spacing. Promo cards can use strong blue artwork but should be contained within a rounded rectangle.

# Imagery and icons

Token marks are critical content, not decoration. Keep them circular, crisp, and close to row text. Charts are functional visual texture: use thin blue/green/red lines or dotted fills, aspect-fit in their assigned area, and avoid cropped axes when labels are present.

Authored illustrations appear in onboarding, identity verification, transaction empty states, and promotional cards. They use Coinbase blue, yellow, teal, gray, and simple geometric forms. Keep them small-to-medium and contained.

Use simple line icons for top chrome and settings. If using SF Symbols, adjust stroke weight, size, and color to match the observed Coinbase outline style.

# States

Observed states include brand splash, dark onboarding intro, iOS auth permission alert, disabled verification buttons, focused text inputs with blue border, keyboard-present forms, active tab indicators, selected filter chips, dimmed bottom-sheet overlay, loading spinner, empty transactions illustration, notification badges, positive/negative market deltas, and visible compliance notices.

Disabled actions retain the blue pill shape but become pale/desaturated. Focused fields use a clear blue outline. Empty states stay centered and illustrated, with a neutral reset action. Bottom sheets dim the page behind them while preserving the underlying layout.

# iOS adaptation

Implement with custom SwiftUI/UIKit styling rather than default grouped forms. Use scroll containers for long finance/settings screens, but keep bottom action bars and navigation clear of the home indicator.

Controls need at least 44 pt touch targets. Numeric input screens should preserve the large amount area when the keyboard/keypad is present. VoiceOver order should follow amount or heading, explanatory text, field/row values, legal copy, then action.

Support compact iPhone heights by moving insight cards and legal blocks lower in the scroll after the primary metric or task controls. Do not remove fees, funding source, risk text, or confirmation totals.

# Anti-generic checklist

- Do not use default iOS blue if it is visibly lighter than Coinbase blue.
- Do not make green the CTA color.
- Do not place every asset row inside its own card.
- Do not hide legal/risk copy or fee/funding details.
- Do not replace token marks, charts, or verification illustrations with generic SF Symbols.
- Do not use dark backgrounds for normal product screens just because onboarding has a dark blue intro.
- Do not introduce decorative crypto coin art, gradient blobs, web nav, hover states, or marketing pricing cards.
- Do not collapse bottom sheets into alert dialogs when a sheet is the observed visual treatment.

</design-context>
