<design-context>
---
version: 1
platform: iOS
name: Stocks-design-analysis
description: "A dense black iOS market interface where aligned white financial data, thin green and red charts, blue actions, compact watchlist rows, graphite news cards, and tall rounded detail sheets replace decorative imagery."
colors:
  canvas: "#000000"
  surface-primary: "#1C1C1E"
  surface-secondary: "#2C2C2E"
  accent-primary: "#0A84FF"
  accent-secondary: "#54C76A"
  text-primary: "#F5F5F7"
  text-secondary: "#A7A7AC"
  divider: "#38383A"
  destructive: "#F05A55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 10
  card: 16
  sheet: 24
  pill: 999
components:
  quote-row: {fill: "#000000", height: 64, divider: "#38383A"}
  movement-badge: {radius: 8, positive: "#54C76A", negative: "#F05A55"}
  chart-panel: {fill: "#1C1C1E", linePositive: "#54C76A", lineNegative: "#F05A55"}
  search-field: {fill: "#1C1C1E", text: "#F5F5F7", radius: 10}
  navigation: {fill: "#000000", active: "#0A84FF", inactive: "#A7A7AC"}
---

# Overview

Stocks is a dark, data-first iOS utility. Dense aligned watchlist information, semantic movement color, sparklines, and chart-led detail surfaces provide the visual identity. Decoration is minimal: graphite cards and sheets establish depth while market data remains the dominant content.

# Non-negotiable visual invariants

- Black remains the dominant canvas across dashboard, search, edit, and detail states.
- Green and red are reserved for positive and negative movement, including charts and change badges.
- Blue is limited to interactive actions, selection, and add/check states.
- Watchlist rows align identity at left, a compact sparkline near the right, and value/change at the trailing edge.
- Detail surfaces lead with identity and price, then range controls and a large thin line chart.
- News appears in rounded graphite modules below market data rather than replacing it.
- Menus and tall rounded sheets layer over visible underlying market context.
- Density comes from alignment and separators, not a stack of isolated cards.

# Color and surfaces

Pure black carries primary screens. Graphite surfaces distinguish search, news modules, menus, alerts, and sheets. White carries symbols, prices, and titles; gray carries company names, timestamps, axes, and inactive controls. Green and red retain strict market semantics, while iOS blue marks interaction. Warning color is used only when explicitly needed. Decorative gradients, pastel surfaces, or arbitrary reuse of movement colors would undermine the system.

# Typography

Root headings are bold at large-title scale, while watchlist identity, values, and changes use compact system text with tabular numerals. Detail hierarchy descends from ticker and price to chart labels, range captions, metrics, and news metadata. Numeric columns remain visually aligned and signs and units stay explicit. Dynamic Type expands rows and secondary blocks while preserving separate columns or moving them to a readable stacked layout.

# Screen composition

The dashboard uses a large title/date region, a rounded search field, dense full-width quote rows, and news modules below. Rows use thin dividers and minimal vertical padding rather than individual card shells. Search and edit screens preserve the same black list field, adding keyboard, selection circles, reorder handles, or swipe actions. A symbol detail appears as a tall rounded sheet: identity and current value at top, compact range selector, a large graph with grid and volume, then metrics and news. Onboarding is sparse and centered with simple blue functional glyphs. Menus, alerts, share surfaces, and article web views use native layered presentation.

# Navigation appearance

No persistent bottom tab bar was observed. Top search and a compact overflow control provide the strongest recurring chrome. Blue text or glyphs mark actions. Tall detail sheets have large rounded top corners and a close control; menus and share sheets sit above dimmed market content. Article surfaces use restrained browser-like bars. These visual properties do not import the source product's routes.

# Components

Quote rows use bold identity, gray company metadata, a thin green or red sparkline, right-aligned price, and a compact filled change badge. Range selectors are small equal-width labels with a restrained selected surface. Charts use thin semantic lines, faint gridlines, compact axes, and optional volume bars. News cards are graphite rounded rectangles with concise headline and source metadata. Search is a rounded dark field. Add/check circles, swipe actions, edit handles, dark alerts, and share sheets retain native geometry. Disabled controls reduce contrast without changing alignment.

# Imagery and icons

Charts, sparklines, and data marks are the recurring visual language and cannot be replaced by generic icons or omitted. Occasional onboarding glyphs and source marks are simple functional graphics, not a stable illustration system. Photography is not a dominant compositional layer in the sampled product. Keep icons monochrome except for blue interaction and green/red market semantics.

# States

Observed states include welcome/onboarding, populated and scrolled dashboards, article web view, row swipe actions, add-to-list and share sheets, overflow menus and submenus, edit/reorder/delete, focused search with results or no results, new-list alert, added-symbol selection, multiple chart ranges, and symbol action menus. Dark surfaces, aligned numbers, semantic movement colors, and blue actions remain stable.

# iOS adaptation

Keep status and home-indicator safe areas clear and use vertical scrolling for dense content. Sheets preserve rounded top corners and allow chart/news content to scroll internally. Keyboards must not obscure search results or alert fields. Maintain at least 44-point hit targets around compact range labels and glyphs. VoiceOver order should announce identity, price, movement, then chart summary and actions. Dynamic Type may stack row columns at larger sizes but must preserve signs, units, and movement meaning. Dark appearance is canonical; do not generate a light palette by inversion.

# Anti-generic checklist

- No light dashboard or generic white card stack.
- No arbitrary green/red decoration unrelated to market movement.
- No missing sparklines, chart, axes, or range controls where data visualization is primary.
- No rounding every watchlist row into a separate card.
- No unstyled `Form`, `List`, default blue tint everywhere, or persistent tab bar not present in the reference.
- No illustration file inferred from onboarding glyphs or charts.
- No decorative slogans or prose that duplicates visible financial context.

</design-context>
