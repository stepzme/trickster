<design-context>
---
version: 1
platform: iOS
name: 2GIS-design-analysis
description: "A pale detailed map remains the dominant canvas beneath white floating controls and rounded sheets, while saturated green actions, compact route metrics, and restrained imagery keep spatial tasks legible."
colors:
  canvas: "#EEEDE7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F4"
  accent-primary: "#20C85A"
  accent-secondary: "#258BE6"
  text-primary: "#202124"
  text-secondary: "#74777C"
  divider: "#E2E4E6"
  destructive: "#E34A50"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
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
  control: 14
  card: 18
  sheet: 24
  pill: 999
components:
  map-search-field: {}
  floating-map-control: {}
  route-bottom-sheet: {}
  green-primary-action: {}
  transport-mode-chip: {}
---

# Overview

2GIS is map-first: dense pale cartography usually fills the viewport while white search, control, card, and sheet surfaces float above it. Green marks decisive actions and selected progress; blue identifies spatial information. The operational UI is compact and quiet, leaving routes, markers, place photography, and time or distance metrics to carry meaning.

# Non-negotiable visual invariants

- A detailed pale map remains the largest visual mass on spatial screens and extends behind floating chrome.
- Complex content rises from the bottom as a broad white rounded sheet instead of replacing the map with a new page.
- Saturated green is reserved for the current primary action, selected route, toggle, badge, or confirmed state.
- Search and map controls are white floating surfaces with compact dark glyphs and soft separation from the map.
- Route cards prioritize time, arrival, distance, and transport symbols before explanatory text.
- Controls cluster near screen edges so the central map and route remain readable.
- Full-screen list and settings surfaces use restrained white or pale gray rows rather than decorative cards.

# Color and surfaces

The base map is warm pale beige-gray with muted green land, light roads, and dense neutral labels. White is the main overlay surface for search, sheets, cards, drawers, and settings; pale gray supports inactive chips and grouped rows. Green is the dominant action color, blue carries location and transit emphasis, red marks restrictions or destructive meaning, and amber may signal traffic or attention. Scrims are dark but translucent. Default iOS blue as a universal tint, opaque gray grouped backgrounds over the map, or decorative gradients on operational screens would break the reference.

# Typography

Use SF Pro with compact metrics and clear Cyrillic. Page and sheet titles use bold 20–28-point styles; place names and route headings are semibold; body labels are 14–16 points; dense route metadata and map-adjacent labels are 11–13 points in muted gray. Numeric travel time is the strongest element inside a route option and should use tabular numerals. Keep labels short and pair icons with textual time, distance, or status. Under Dynamic Type, allow secondary rows to wrap or grow while preserving the route metric, place name, and primary action as the first read.

# Screen composition

Map archetypes run full bleed through both safe areas, with a white search field near the top, compact floating controls at the sides, and a bottom-owned navigation or sheet above the home indicator. A collapsed sheet shows the minimum route or place summary; expanded versions cover more of the map and scroll internally while retaining their rounded top corners.

Place-detail sheets combine title and rating information, a horizontal photo strip, compact facts, and a primary action. Route-selection sheets use a horizontal mode strip followed by vertically stacked alternatives and a green action. Navigation mode reduces chrome to the route line, essential metrics, and edge controls. Search, profile, and settings archetypes move to full white or light-gray list pages with integrated top bars, roomy rows, separators, switches, and checkmarks. Horizontal insets are roughly 16 points; floating edge controls sit 8–12 points from screen edges.

# Navigation appearance

Primary bottom navigation is a low white bar with compact icon-and-label items and green active emphasis. Map tasks replace persistent page chrome with white floating controls and rounded bottom sheets. Full-screen list pages use a simple back arrow and a strong title on white. A side drawer appears as a white panel over a still-visible portion of the underlying map. Selected route or transport tabs use green lines, fills, or labels; unselected states stay gray. This specifies appearance only, not source-product destinations.

# Components

- **Map search field:** wide white rounded rectangle with dark query text and compact microphone or menu actions; soft shadow or contrast separates it from cartography.
- **Floating map control:** white rounded square or circle, one centered dark glyph, at least a 44-point target, arranged in a small edge cluster.
- **Bottom sheet:** broad white surface with about 24-point top corners, compact drag affordance where visible, and scrollable content above the home indicator.
- **Route card:** white or pale option row prioritizing bold duration, arrival or distance, transport glyphs, and restrained secondary details; selected treatment ties to green.
- **Primary action:** saturated green rounded rectangle with centered white semibold label; disabled treatment becomes low-contrast rather than changing hue arbitrarily.
- **Mode chip:** compact icon-and-label pill or tab; green selected, pale-gray inactive, with enough hit area around the visible capsule.
- **Settings row:** full-width light row with leading label, optional secondary text, and trailing switch, checkmark, or chevron separated by hairlines.

# Imagery and icons

Cartography, route lines, POI markers, and transport glyphs are the core imagery and must remain visible at useful scale. Place photographs use rounded landscape crops in horizontal strips or cards. Functional icons are compact and literal, with green, blue, red, or neutral meaning reinforced by labels. Authored onboarding scenes and empty-state drawings are a separate illustration system; where present, preserve their scale and reserved space rather than replacing them with SF Symbols. Campaign media, map previews, profile promotion, and brand marks are not illustration references.

# States

Observed selected routes keep a green line and matching action while alternatives remain muted. Permission states use native iOS alerts over the current visual context. Voice search, traffic display, favorites empty content, toggles, checkmarks, drawers, and expanded/collapsed sheets retain the same white-over-map hierarchy. Empty favorites place sparse authored art inside a white surface with a short message. No stable branded error composition was observed, so errors should preserve the existing map, sheet, and semantic-color system rather than invent new artwork.

# iOS adaptation

Render the map behind safe areas, but keep search, controls, and route metrics clear of the status bar, Dynamic Island, home indicator, and system gestures. Use a resizable native-behaving sheet or an accessible custom equivalent for collapsed and expanded map content. Lists inside sheets scroll independently only when necessary; full-page lists use a standard vertical scroll container. Preserve 44-point targets for markers, map controls, mode tabs, and rows. Keyboard and system permission transitions should return to the same map context. VoiceOver order starts with title/search, then primary metrics and action, then supporting content. On compact widths, horizontally scroll route modes or alternatives instead of shrinking icons and text. Retain evidenced light map/list appearance; dark visual treatment belongs only to contexts actually shown, such as onboarding or night navigation.

# Anti-generic checklist

- Do not replace the map-first composition with a generic white dashboard or card grid.
- Do not cover the route with oversized opaque panels when a partial sheet is sufficient.
- Do not use default blue tint for the primary action or selection; green owns that role.
- Do not ship an unstyled `TabView`, `Form`, or default grouped list where the reference uses integrated map chrome.
- Do not scatter controls through the map center or place dense paragraphs directly on cartography.
- Do not rely on marker color alone; retain icons and textual status.
- Do not use one radius for floating controls, cards, sheets, and pills.
- Do not substitute arbitrary SF Symbols for authored onboarding or empty-state art.

</design-context>
