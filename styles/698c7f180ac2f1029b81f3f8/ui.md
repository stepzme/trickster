<design-context>
---
version: 1
platform: iOS
name: Trading-212-design-analysis
description: "A crisp trading interface with white analytical surfaces, a dark gradient account stage, bright-cyan actions and charts, precise tabular numerals, compact instrument rows, and cyan-backed order confirmations."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F5F6"
  accent-primary: "#12B5DD"
  accent-secondary: "#101A22"
  text-primary: "#111214"
  text-secondary: "#696B70"
  divider: "#E1E3E5"
  destructive: "#D94A5B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 44, fontWeight: 500, lineHeight: 50}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 600, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#12B5DD", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 26}
  secondary-action: {background: "#F4F5F6", foreground: "#111214", minHeight: 48, cornerRadius: 14}
  primary-card: {background: "#F4F5F6", foreground: "#111214", cornerRadius: 16, padding: 14}
  navigation: {background: "#FFFFFF", selected: "#111214", unselected: "#8E9196"}
---

# Overview

Trading 212 layers a calm white trading workspace over a dark black-to-teal account stage. Bright cyan is reserved for commitment, selection, and chart focus; green and red remain directional market colors. Oversized financial values, precise aligned rows, charts, and compact technical controls create the identity more than imagery.

# Non-negotiable visual invariants

- Account-overview compositions place a dark gradient summary above a white sheet with broad rounded top corners.
- Large balances and instrument prices use open space and tabular alignment rather than heavy decorative cards.
- Cyan owns primary actions, focus, chart emphasis, progress, and toggles; it never represents profit.
- Green and red are reserved for positive and negative market movement or transaction state.
- Instrument rows align logo, name/ticker, sparkline, price, and change in stable columns.
- Instrument detail gives the chart the dominant middle region and keeps range controls compact.
- Order and funding actions use broad cyan pills above the bottom safe area.
- The six-item white tab bar stays visually light, with dark selected state and a tiny cyan indicator where observed.

# Color and surfaces

White dominates research, search, orders, funding, history, settings, and lists. Very light gray separates grouped metrics and cells. The account overview uses a large black-to-blue/teal gradient header; order confirmation can invert this with a full cyan field and centered white card.

Near-black carries prices and titles; gray carries labels, secondary data, and inactive navigation. Cyan drives actions, selected controls, chart lines, and progress. Green and red encode gains/losses and transaction direction. Dark blue and glossy color are confined to campaigns or product renders. Generic blue or green used as the primary action color would break the cyan brand and market semantics.

# Typography

Use SF Pro with tabular figures. Account values and instrument prices are oversized, approximately 40–56 points with regular or medium weight. Page titles are 17–22 points; standard rows 14–16 points; uppercase labels, tickers, time ranges, and metadata 10–13 points.

Separate value from daily change and avoid bolding every row. Numeric columns remain aligned and stable. Onboarding copy may be centered with larger line spacing; dense lists stay left aligned. With Dynamic Type, explanatory text wraps before price, position, market state, or Buy/Sell action loses priority; technical chart labels may use accessibility alternatives rather than uncontrolled scaling.

# Screen composition

Use 12–16-point horizontal insets, 8–12-point row gaps, and 20–24 points between analytical sections.

Observed archetypes:

- Account overview: dark summary field with key values and small metric tiles, then a white rounded sheet containing tabs, lists, and tab bar.
- Instrument list: compact rows with logo/flag, name and ticker, sparkline, price, and red/green change.
- Instrument detail: price block, large cyan chart, time-range pills, analytical or position cards, and fixed bottom Buy/Sell controls.
- Full-screen chart: dense candlestick field with technical side tools, indicator row, axes, and range controls.
- Search/discovery: search field, horizontal chips, and logo-led list or grid results.
- Order flow: segmented order-type controls, oversized value, allocation indicator or slider, timing note, and bottom review action.
- Funding flow: preset amount chips, numeric keypad, method rows, native payment sheet, progress, and success.
- Confirmation: white rounded breakdown card centered on a full cyan background.
- Settings/history: plain white lists with fine dividers, chevrons, and persistent bottom navigation.

All fixed bars sit above the home indicator.

# Navigation appearance

The persistent white bottom bar uses six thin icons in the observed sample. Selected state is dark, inactive state gray, and a small cyan indicator may appear below the active item. It remains edge-integrated rather than floating.

Top bars alternate between close X, back chevron, centered or left title, and compact bell/settings/overflow actions. Instrument and order flows may replace the tab bar with cyan action pills. Sheets use rounded top corners, a drag handle, dimmed context, and full-width primary action. These rules define appearance only.

# Components

Primary buttons are broad cyan pills around 48–52 points high with white medium-weight labels. Pressed states deepen cyan; disabled review buttons become pale gray. Secondary controls use light gray or white with dark type.

Summary cards contain one label, one value, and at most one micro-chart. Instrument rows combine a small circular/squircle logo, aligned text, sparkline, price, and delta. Order-type segments use clear selected contrast; amount input is oversized and paired with slider, keypad, or allocation indicator.

Instrument detail uses cyan line chart, compact range pills, and fixed Buy/Sell actions. Full-screen chart controls use thin technical icons with much greater density than ordinary navigation. Funding lists pair provider mark, method, fee or note, and chevron. Confirmation cards align fee, FX, total, loading, and placed states. All controls maintain a 44-point target even when visible glyphs are small.

# Imagery and icons

Most visual identifiers are functional company logos, flags, payment marks, and the Trading 212 brand mark. Charts—not illustration—are the primary visual objects. Keep logos contained and preserve chart axes, line thickness, range labels, and red/green semantics.

Campaign art includes glossy crypto imagery, card renders, referral/reward graphics, and dark gradients. Onboarding and permission screens use light centered line art, but the broader product mixes too many asset families to constitute one standalone illustration system. Do not extrapolate campaign renders or line art into analytical screens. Temporary assets must preserve the observed scale and negative space.

# States

Observed states include registration and identity verification, camera permission, empty/zero-value portfolio, populated account summary, watchlists, search, instrument details, full-screen charts, order-type selection, disabled/enabled review, cyan confirmation, order loading and placed, funding with preset/custom amount, native payment and passcode overlays, funding success, history, notification tabs, settings, support, and chat.

Zero-value state retains the same analytical layout with a flat cyan chart and deposit CTA. Loading uses button spinner, progress bar, or dimmed payment surface. Success uses large green or cyan state mark without changing the surrounding spacing system. Market direction remains green/red while action remains cyan.

# iOS adaptation

Extend dark, white, or cyan fields through safe areas according to the active composition. Use vertical scrolling for portfolios, lists, detail sections, history, settings, and support; reserve bottom space for tab or trading CTA.

Charts scale to available width without distorting axes or labels. Dense technical tools may become horizontally scrollable or expose an accessible list on compact widths. Present keyboard, camera, native payment, passcode, and other system surfaces natively, then restore the same context. VoiceOver should announce instrument, price, change, market state, position, and action in logical order. Dynamic Type may expand rows and sections while preserving numeric alignment.

# Anti-generic checklist

- Do not make gains cyan or losses use the brand action color.
- Do not replace the dark account stage and rounded white sheet with a generic white dashboard.
- Do not hide order type, execution timing, fees, FX, or total.
- Do not turn every market row into a shadowed card.
- Do not remove chart scale, range selection, or red/green directional meaning.
- Do not use default blue tint, an unstyled `TabView`, or generic `Form` sections.
- Do not introduce campaign art into analytical instrument and history screens.
- Do not collapse technical chart controls, cards, pills, and sheets to one radius.

</design-context>
