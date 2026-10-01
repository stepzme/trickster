<design-context>
---
version: 1
platform: iOS
name: Tinkoff-Investments-design-analysis
description: "A data-first black trading interface built from charcoal cards, large white values, compact gray labels, blue commitment actions, green and red market signals, a small yellow brand marker, dense charts, and sparse 3D financial objects."
colors:
  canvas: "#000000"
  surface-primary: "#1A1A1C"
  surface-secondary: "#2B2B2E"
  accent-primary: "#4C83F3"
  accent-secondary: "#FFDD2D"
  text-primary: "#F5F5F7"
  text-secondary: "#A0A1A6"
  divider: "#343438"
  destructive: "#E65063"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 10
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "clear blue", text: "white semibold", height: 50, shape: "rounded rectangle"}
  secondary-action: {fill: "charcoal or white", text: "white or black", border: "none", shape: "rounded rectangle"}
  primary-card: {fill: "charcoal", radius: 16, padding: 16, hierarchy: "large white value over gray metadata"}
  navigation: {fill: "black or charcoal", selected: "white with compact accent", inactive: "gray", labels: "visible"}
---

# Overview

Tinkoff Investments is a dense dark financial interface where numbers, charts, instrument rows, and transaction state dominate the viewport. Pure black canvas and charcoal cards recede behind large white portfolio values, aligned prices, compact gray captions, and full-width analytic graphics. Blue identifies ordinary commitment, green and red encode market direction, and yellow is kept to a small brand marker or authored object rather than used as the default CTA.

The screens range from portfolio summaries and lists to chart-led instrument detail, order books, analytics, calendars, community posts, screeners, and focused trade tickets. Despite the density, hierarchy stays legible through clear numeric scale, restrained surfaces, thin separators, and dedicated bottom action zones.

# Non-negotiable visual invariants

- Pure black fills the full viewport while charcoal surfaces group related data; no light cards or automatic white background appear inside the app shell.
- Large white financial values and titles visibly outrank compact gray tickers, labels, timestamps, commissions, and explanatory copy.
- Green is reserved for positive market movement and red for negative, destructive, blocked, or loss states; neither becomes generic decoration.
- Blue marks primary commitment, selected inputs, and app actions; yellow remains a small identity or illustration accent rather than a universal button color.
- Instrument rows align logo, name/ticker, price, and signed movement in a tight repeatable structure with thin separators.
- Chart-led screens devote a substantial middle region to candlesticks, volume, bars, depth, or calendar cells and preserve fixed buy/sell actions near the bottom.
- The persistent bottom bar uses five labeled items on black/charcoal, with selected content visibly brighter or compactly accented and inactive content gray.
- Bottom sheets, filters, tickets, and numeric forms remain dark, rounded, and keyboard-aware; light native controls never leak into the surface.

# Color and surfaces

The canvas is pure black `#000000`. Primary cards and navigation surfaces rise to `#1A1A1C`; selected controls, sheets, chips, and nested groups may use `#2B2B2E`. Hairlines around `#343438` structure dense rows without producing bright grid lines. Shadows are unnecessary because tonal steps supply depth.

Primary text is near-white `#F5F5F7`; secondary labels, tickers, timestamps, and calculations use `#A0A1A6`, with still quieter gray for disabled or tertiary data. Clear blue around `#4C83F3` is the ordinary action and selection color. Green around `#3BC96B` communicates positive change; red around `#E65063` communicates negative movement, destructive action, and some trade-state emphasis. Tinkoff yellow `#FFDD2D` appears as a compact pill-like brand mark and in authored imagery.

Some transaction detail states use a red upper field. Treat that as bounded status emphasis, not a new general canvas. Generic system blue, green, and red are acceptable only when tuned to the observed dark palette and attached to explicit labels or signed values.

# Typography

Use SF Pro Display and SF Pro Text with tabular numerals for aligned financial data. Portfolio totals, prominent quotes, and some screen titles sit around 26–34 points bold. Section headings are 18–22 points bold; instrument names and key row labels are about 14–16 points medium or semibold. Tickers, exchange metadata, timestamps, chart labels, fees, and supporting calculations occupy 10–13 points in gray.

Numeric hierarchy is more important than decorative display type. Preserve currency symbols, signs, percent units, decimal precision, and aligned columns. Use tabular figures for quote lists, positions, order book, trade tickets, and chart annotations. Dense data can remain compact, but warning, commission, total, and projected result must not become visually indistinguishable.

At larger Dynamic Type sizes, allow rows and cards to grow and place secondary calculations on additional lines. Chart labels may remain compact if their accessible equivalents are available, while titles, actions, warnings, and key totals must scale normally.

# Screen composition

Most screens begin with a black safe-area region and a compact header: a small centered yellow brand marker, a large left-aligned title, or an instrument bar with back, name/ticker, favorite, and sharing controls. The middle contains stacked charcoal summaries, instrument lists, search/screener controls, community content, transaction rows, or a large analytic visualization. The lower region is either continued scrolling plus the labeled tab bar or a fixed dark action zone with blue and secondary buy/sell controls above the home indicator.

Portfolio-like screens place one broad value or account summary near the top, then dense position and transaction lists. Empty versions preserve the same black structure but center an authored object and concise action. Discovery, favorites, search, screeners, and calendars use vertical lists, compact filter chips, or grid-like data cells. Community screens use avatar/post cards and bottom action sheets while staying within the dark palette.

Instrument detail uses a compact header and horizontal top tab strip, then current quote, a large chart or order-book visualization, time/range controls, information cards, and fixed sell/buy actions. Full-screen chart states devote most of the viewport to candlesticks and volume. Trade tickets use stacked account, instrument, quantity, price, fee, and total groups with a numeric keypad or stepper and a clear full-width CTA. Analytics uses full-width bar charts and tooltips; order books use tightly aligned bid/ask columns and depth shapes.

Typical outer gutters are about 12 points, row gaps 8–12 points, card padding 16 points, and major section separation 20–24 points. Sheets use 24-point top corners and a small drag handle. Scroll content must clear both action zones and the tab bar.

# Navigation appearance

The persistent bottom bar uses five labeled icon items on black or dark charcoal. Selected content is brighter white or receives a small blue/red accent; inactive items are gray. The bar is full width, compact, and safe-area aware rather than floating in a decorative pill.

Instrument screens use a horizontally arranged top tab strip with white selected label and a compact underline or contrast change; unselected labels recede to gray. Headers use simple white back, favorite, share, close, and more icons. Bottom sheets use a centered drag handle and dark rounded top. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are full-width blue rounded rectangles about 50 points high with white semibold text. Disabled states keep the same geometry with muted charcoal fill and low-contrast label. Secondary sell or alternate actions may use white, outline, or charcoal treatment, but remain paired clearly with the primary action.

Portfolio cards are charcoal, about 16-point radius, with a large white total, signed green/red movement, gray metadata, and compact shortcuts. Quote rows use circular security logos, white instrument name, gray ticker, right-aligned white price, and signed colored change. Transaction rows follow a similarly dense alignment with state and amount.

Pill filters, range controls, segmented controls, and chips use dark nested fills with a clear selected label. Search fields are dark rounded rectangles. Trade tickets use numeric fields, plus/minus steppers, and full-width summaries. Tooltips are compact dark bubbles tied to chart selection. Calendar and screener tiles retain crisp boundaries and concise labels. Native keyboards and permission alerts may appear, but app-owned content remains dark.

# Imagery and icons

Charts and data are the primary visual imagery: candlesticks, lines, volume bars, depth areas, analytics bars, and calendar cells are crisp, high contrast, and sized to the full available width. Security logos are compact circular or rounded marks that aid scanning but never replace instrument text.

Authored imagery appears selectively in onboarding, referral, empty, screener, restriction, and product-education surfaces. It uses chunky 3D-ish financial objects on generous black space with graphite bases and yellow accents. This artwork is structurally important in those states but must not displace chart or data space on populated financial screens. If temporary imagery is required, preserve the central object scale and surrounding negative space rather than substituting a tiny icon.

# States

Observed states include onboarding and education, empty and populated portfolio, favorites list and empty variant, account-choice and top-up forms, referral permission alert, keyboard-visible text input, operations empty/list/detail, and analytics with chart tooltips. Search and screener screens appear empty, populated, filtering, and construction states.

Instrument states include overview, full-screen chart, order book, indicators, alerts with numeric keypad, buy and sell tickets, blocked or restricted prompts, and processing or completed transaction detail. Positive and negative data retain green/red semantics across states. Community content includes feed, post, comments, and action sheets while maintaining the same black/charcoal shell.

# iOS adaptation

Use safe-area-aware black containers so status and home-indicator regions merge with the app canvas. Lists, community content, screeners, calendars, and transaction history scroll vertically. Horizontal instrument and range tabs may scroll while retaining a clear selected state. Fixed buy/sell or submit actions should use bottom safe-area insets and never cover chart annotations or the final ticket summary.

Every tab, quote row, icon-only header action, chip, chart range, tooltip target, stepper, and trade action needs at least a 44-point effective target. VoiceOver should announce instrument name/ticker, price, signed change, position, and action in that order; charts require accessible summaries and selected-point values independent of color. Green/red meaning must also be expressed through sign and label.

Dynamic Type may increase card/row height and move metadata beneath values. On compact widths, preserve chart width and primary numeric columns before secondary copy; allow tabs and filters to scroll instead of compressing. Keyboard and numeric-keypad screens must keep the active field, total, warning, and commitment action visible. The observed system is intentionally dark; do not generate an automatic light variant by inversion.

# Anti-generic checklist

- Do not place light `Form`, `List`, keyboard-adjacent fields, or alerts inside app-owned dark surfaces.
- Do not use yellow as the default CTA; ordinary commitment is blue and yellow is a restrained identity/art accent.
- Do not encode gain/loss or buy/sell meaning through color alone, or reuse green/red decoratively.
- Do not turn dense instrument, operation, or order-book rows into oversized cards with lost numeric alignment.
- Do not replace candlestick, volume, depth, analytics, or calendar visualizations with generic progress bars.
- Do not ship an unstyled `TabView`; preserve the dark five-item labeled bar and its bright selected state.
- Do not remove authored empty/onboarding objects or shrink them into arbitrary SF Symbols.
- Do not use one corner radius for cards, chips, fields, sheets, and circular security marks.

</design-context>
