<design-context>
---
version: 1
platform: iOS
name: Yandex-Pro-design-analysis
description: "A map-first operational interface where live geography fills most of the viewport, white rounded command sheets carry work controls, yellow dominates actions and selected states, purple marks order acceptance, and sparse white analytics screens use heavy numeric type and blue charts."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F5F6"
  accent-primary: "#FFD600"
  accent-secondary: "#C000FF"
  text-primary: "#1F1F1F"
  text-secondary: "#8E8E93"
  divider: "#E7E7EA"
  destructive: "#E53935"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 37}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 600, lineHeight: 21}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 16
  sheet: 24
  pill: 999
components:
  operational-sheet: {fill: "white", topRadius: 24, padding: 16, placement: "over map bottom edge"}
  primary-action: {fill: "yellow", text: "near-black semibold", radius: 999, minHeight: 52}
  accept-slider: {fill: "purple", trailing: "black cap", radius: 999}
  analytics-chart: {bars: "blue and gray", surface: "white", numbers: "large bold"}
---

# Overview

Yandex Pro is operational and map-first. On work screens, live geography occupies roughly two thirds of the viewport while a white rounded sheet anchors immediate controls at the bottom. Yellow marks the main action and most selected states; a vivid purple slider is reserved for accepting work. Outside the map, the interface becomes sparse and white, using generous rows, low-contrast metadata, heavy numeric earnings, and blue charts.

# Non-negotiable visual invariants

- Let functional map imagery occupy roughly 60–75% of operational screens rather than reducing it to a card.
- Place task controls in a white bottom sheet with large rounded top corners over the map.
- Use bright yellow for the dominant action and selected toggles, radios, checks, and pills.
- Preserve the purple accept slider with its high-contrast dark trailing cap when an equivalent commitment control is needed.
- Keep navigation and settings visually restrained: generous row height, thin dividers, black labels, and gray metadata.
- Give financial values 24–32 point heavy emphasis and pair them with blue/gray charts on open white pages.
- Mirror structure in the observed dark appearance instead of redesigning layout or hierarchy.
- Keep authored illustration sparse and task-specific; maps, photos, icons, and charts carry most visual meaning.

# Color and surfaces

Operational screens use the map as the largest color field, with white sheets and floating controls above it. Non-map screens use white as the continuous canvas and pale gray for grouped cards, fields, and inactive controls. Bright yellow is the repeated primary accent and can occupy wide pill actions or small selected marks. Purple is isolated to the high-commitment acceptance control, while blue belongs to earnings charts and some navigation or informational panels.

Near-black carries route, row, and financial labels; medium gray carries metadata; pale gray dividers keep long lists structured. Green supports payment, support, or success feedback, and red belongs to cancellation, destructive confirmation, or warnings. Dark mode uses black canvas and dark-gray surfaces while keeping yellow and semantic colors intact. Generic system blue as the primary CTA would visibly break the reference.

# Typography

The typography is system-like and optimized for rapid scanning. Major financial values and operational numbers use 24–32 point bold display type; page titles sit around 24–26 points; row labels and primary controls use 16–17 points; metadata uses 13–14 points; captions use 11–12 points. The main distance, timer, amount, or status must remain visually stronger than explanatory text.

Use SF Pro Display and SF Pro Text as the iOS-safe substitute. Prefer stable numeric alignment for time and money. Under Dynamic Type, move metadata and secondary actions onto additional lines while preserving the primary number and action. Bottom sheets should grow or scroll without covering the map entirely, and list rows should expand vertically rather than truncate essential state.

# Screen composition

Map-led screens extend functional geography through the safe areas. Floating map controls sit near the edges, while the bottom 25–40% is occupied by a white command sheet with one primary action. Route and navigation states add compact overlays without covering the main path. Non-map screens begin with a minimal top bar and use vertical white lists, grouped profile cards, or analytics content with generous whitespace.

Observed archetypes include a map with demand zones and a bottom online control; a route map with navigation overlays; an order sheet with a purple accept slider; a white earnings page with a large value, segmented control, blue/gray chart, and dated rows; a grouped profile dashboard; a plain settings list; a keyboard form sheet; a dimmed bottom picker with radio selection; a centered destructive confirmation card; a chat screen with bubbles and pinned input; and sparse empty or task-instruction states.

# Navigation appearance

The persistent bottom bar uses icon-and-label items on a light or dark surface. Inactive items are muted gray, the selected item is dark or high contrast, and small red badges may mark counts. Operational map states reduce competing navigation chrome. Top bars are minimal, with a small back arrow, centered title, and occasional right action. Bottom sheets use large rounded top corners; destructive confirmation appears as a compact centered white card over a dimmed backdrop.

# Components

Primary actions are wide yellow pills with near-black semibold labels and, when observed, a left circular arrow or confirmation mark. The accept control is a purple full-width slider with a black trailing cap and high-contrast white label. Operational sheets are white, have roughly 20–24 point top radii, and use about 16 points of padding.

Rows are tall, flat, and separated by thin pale dividers. Toggles use yellow on and pale gray off. Radio lists in sheets use a yellow selected check. Payment and status chips are compact pills. Statistics use segmented controls, large numeric summaries, and blue/gray bar charts. Chat bubbles use pale gray and cyan-tinted fills. Pressed and disabled states adjust opacity or tone while preserving shape and semantic color.

# Imagery and icons

Maps are essential functional imagery and cannot be replaced with a neutral placeholder in a visual evaluation; route contrast, zone overlays, and controls must remain legible. Profile screens may use a blurred real avatar and vehicle photo or render. Logos appear in authentication and small service contexts. Icons are mostly simple black outline glyphs, with colored circular icons in chat or service lists. Charts are data visualization, not illustration. The observed selfie guidance and empty-state art are isolated task assets rather than evidence of a stable illustration system.

# States

Observed online, route, order, and selected map states retain the map plus white sheet structure. Selected radio, toggle, and checkbox states use yellow; acceptance uses purple. Analytics move between segmented periods without changing the white page and chart hierarchy. Dark appearance mirrors the same sheets, rows, and controls on black and dark gray. Empty earnings and selfie-instruction states introduce sparse task-specific art. Destructive confirmation stays centered above a dim backdrop, and chat maintains pinned input above the keyboard.

# iOS adaptation

Allow the live map to extend under the status bar and behind floating controls, while keeping operational labels within readable safe-area insets. Anchor command sheets and actions above the home indicator, with interactive sheet heights that preserve meaningful map context. Place analytics, profile, settings, and chat content in vertical scroll containers. Keyboard avoidance must keep active fields or chat input visible.

All map controls, tabs, list rows, toggles, radio choices, sliders, and actions need at least 44-point targets. VoiceOver should announce operational status, key distance or amount, then the primary action before secondary details. Dynamic Type should expand sheets and rows while preserving the large metric. On compact widths, stack supporting metadata and reduce secondary map overlays before shrinking the primary control. Preserve both observed light and dark relationships.

# Anti-generic checklist

- Do not put the map inside a decorative card or cover most of it with secondary content.
- Do not replace yellow actions and selection with default blue tint.
- Do not turn every screen into the same white card stack; map, analytics, lists, and sheets have distinct compositions.
- Do not ship an unstyled `TabView` or generic `Form` where the reference uses flat tall rows and custom selection.
- Do not replace the purple acceptance slider with an ordinary rectangular button.
- Do not shrink financial values or charts into low-priority cards.
- Do not use arbitrary multicolor icons or decorative scenes on operational screens.
- Do not infer a pervasive illustration system from isolated empty and instruction art.

</design-context>
