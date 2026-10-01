<design-context>
---
version: 1
platform: iOS
name: Yandex-Metro-design-analysis
description: "A dense dark transit interface where a full-bleed schematic map, charcoal draggable sheets, compact white type, blue action affordances, and brightly colored line badges replace conventional card-based navigation."
colors:
  canvas: "#1F1F1F"
  surface-primary: "#2E2E2E"
  surface-secondary: "#3A3A3A"
  accent-primary: "#4AA3FF"
  accent-secondary: "#FF3B3B"
  text-primary: "#F5F5F5"
  text-secondary: "#9B9B9B"
  divider: "#484848"
  destructive: "#FF6B6B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 600, lineHeight: 29}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 600, lineHeight: 27}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 8
  card: 14
  sheet: 24
  pill: 999
components:
  route-sheet: {fill: "surface-primary", radiusTop: 24, grabber: "muted gray", close: "circular"}
  endpoint-action: {fill: "white", height: 48, radius: 8, text: "dark medium"}
  search-row: {fill: "surface-primary", height: 60, leading: "line badge", trailing: "blue info circle"}
  route-timeline: {line: "transit color", stationDot: "filled circle", metadata: "aligned compact"}
  map-control: {fill: "surface-secondary", size: 44, radius: 999, text: "text-primary"}
---

# Overview

Yandex Metro is a map-first dark interface in which transit geometry is the primary visual content. A dense near-black schematic fills the viewport while charcoal sheets, compact white labels, colored line badges, station dots, and blue action controls layer directly above it. The product avoids promotional blocks and decorative cards; hierarchy comes from map scale, sheet height, route color, and tightly aligned time and station data.

# Non-negotiable visual invariants

- Dark charcoal remains the default chrome across map, sheets, search, route detail, alerts, and settings.
- The schematic map fills the viewport behind controls rather than appearing inside a framed card.
- Bottom sheets use rounded top corners, a centered grabber, and a circular close control at the upper right.
- Transit identity remains encoded by bright line badges, colored station dots, and vertical route timelines.
- Dense information uses compact 12-18 point text and aligned columns rather than large promotional typography.
- Blue is confined to actions, navigation, and information affordances; red marks warnings, destructive actions, or the brand symbol.
- High-emphasis endpoint controls are white rectangles on dark sheets with moderate, not pill-like, corners.
- Status-bar and home-indicator safe areas remain visible and clear across map and sheet states.

# Color and surfaces

The base alternates between a nearly black map around `#1F1F1F` and charcoal panels around `#2E2E2E`; raised controls use a slightly lighter gray. Primary labels are off-white and secondary metadata is muted gray. Thin mid-gray dividers structure lists without creating separate cards.

Bright transit colors remain attached to lines, station badges, and route diagrams: yellow, green, red, and cyan-blue are all visible. Blue around `#4AA3FF` identifies actions and information buttons, while red around `#FF6B6B` signals warnings or destructive emphasis. Do not replace the multicolor transit encoding with one brand tint, and do not introduce generic light surfaces into the main dark shell.

# Typography

Use SF Pro as the iOS-safe substitute. Route durations and main titles sit around 20-24 points at medium or semibold weight. Station and list labels use 16-18 points; action labels use 14-15 points; line, distance, exit, and transfer metadata use 12-14 points in gray. The splash wordmark is artwork rather than live interface type.

Keep time, line, and station columns aligned and use tabular numerals where timing data repeats. Dynamic Type should expand rows and route steps vertically while preserving the distinction between primary station names and secondary metadata; never solve crowding by shrinking map labels below legibility.

# Screen composition

Core screens use an edge-to-edge schematic beneath safe-area-aware floating controls. Compact branding or title treatment sits at the upper edge, with a circular menu control opposite. A dark sheet rises from the bottom and occupies roughly 35-70% of the viewport depending on information density, leaving the map visible above. Sheet content uses 16 point insets, 8-12 point row gaps, and one vertical information column.

The station-sheet archetype pairs a short header and metadata with two side-by-side white endpoint actions. The search archetype replaces the map with a full dark panel, a top search field, 52-70 point result rows, and the native keyboard. The route-detail archetype uses a vertical colored line, aligned time labels, station names, information circles, expandable pills, and train-car diagrams. Settings uses flat full-width dark rows 48-64 points high with dividers, chevrons, switches, or checkmarks.

Alerts and service notices appear as compact dark sheets or native action overlays. Avoid wrapping every route step or settings row in its own rounded card.

# Navigation appearance

Map surfaces use floating circular controls and draggable sheets rather than a persistent tab bar. Secondary dark pages use a compact centered title with an upper-left blue back label or chevron. Close actions appear as blue text or a gray circular `x`. Sheets are visually anchored by their grabber and large top radius.

External modal surfaces may retain native browser-like chrome, but it should not be treated as the authored core style. Product destinations and screen structure come from approved Research and Planning, not from the reference application's settings hierarchy.

# Components

Route sheets are charcoal panels with approximately 24-point top corners, a centered gray grabber, a circular close button, and compact stacked information. Endpoint actions are two equal-width white rectangles about 48 points high with dark medium labels and roughly 8-point corners.

Search result rows are dark, 52-70 points high, and contain a colored line icon or badge, a 16-18 point station name, smaller gray metadata, and a blue circular information control. Route timelines use a continuous bright line with station dots, aligned time text, and compact expandable segments. Settings rows are flat full-width strips separated by thin gray rules.

Floating map controls are compact dark or charcoal circles with white glyphs. Disabled rows and actions remain present but lower contrast; destructive confirmations use red text within native dark action-sheet geometry.

# Imagery and icons

The schematic metro map, line badges, station dots, small transport icons, map previews, and train-car diagrams are the functional imagery. There is no decorative photography or independent illustration language. Network geometry must remain crisp, dense, and visually dominant; it cannot be replaced by generic route cards or arbitrary symbols.

Icons are small and utilitarian, using white or blue on dark surfaces. Transit colors require accompanying shapes or labels so meaning is not color-only. Placeholders for map content must preserve line density, station rhythm, and the relative scale of controls rather than leaving an empty dark background.

# States

Observed states include splash/loading, idle map, active search with keyboard, populated search results, selected-station sheet, favorite added and removed, collapsed route summary, expanded route detail, warning sheets, default settings, destructive confirmation, disabled history clearing, and selected city/language rows. Dark surfaces, compact hierarchy, blue affordances, and transit-color encoding remain stable across states.

# iOS adaptation

Keep the map full-bleed while positioning branding, menu, and sheet content inside current status and home-indicator safe areas. All map controls, station targets, endpoint actions, grabbers, information buttons, and settings rows need at least 44-point hit regions. Sheets and route details must scroll internally as content or Dynamic Type grows.

On compact widths, stack endpoint actions only when equal halves can no longer preserve readable labels; keep route time and station columns aligned. VoiceOver order should move from upper map controls to selected map content, sheet title, route steps, and sheet actions. Announce line identity in text in addition to color. Preserve the observed dark appearance rather than relying on an automatic generic dark-mode inversion.

# Anti-generic checklist

- Do not replace the full-bleed schematic with a generic dark dashboard or card stack.
- Do not use white `Form` sections, light navigation bars, or an unstyled `TabView`.
- Do not recolor all transit lines into one accent or rely on color without labels and shapes.
- Do not cover the map with a full-height sheet before dense detail requires it.
- Do not use oversized promotional titles or spacious marketing cards on operational screens.
- Do not replace route timelines, station dots, or train diagrams with arbitrary SF Symbols.
- Do not apply one corner radius to endpoint buttons, rows, sheets, pills, and circular controls.
- Do not treat external browser chrome as the primary visual language.

</design-context>
