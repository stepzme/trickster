<design-context>
---
version: 1
platform: iOS
name: yandex-maps-design-analysis
description: "A cartography-first interface with a detailed live map, white floating controls, layered bottom sheets, blue route actions, compact information density, and map-derived onboarding scenes."
colors:
  map-land: "#EEF0EB"
  map-park: "#D9F0D7"
  map-water: "#BFE5F4"
  map-road: "#FFFFFF"
  canvas: "#FFFFFF"
  surface-soft: "#F2F2F3"
  surface-muted: "#E8E8EA"
  text-primary: "#171719"
  text-secondary: "#73757A"
  text-tertiary: "#A6A8AC"
  route-blue: "#2F78F6"
  route-green: "#4BC142"
  route-red: "#F04A3C"
  alice-purple: "#7448E8"
  rating-yellow: "#FFD33D"
  divider: "#E5E6E8"
  overlay: "#000000"
typography:
  display: { fontFamily: "YS Text", fontSize: 28, fontWeight: 700, lineHeight: 33, letterSpacing: -0.3 }
  title: { fontFamily: "YS Text", fontSize: 22, fontWeight: 700, lineHeight: 27, letterSpacing: -0.2 }
  headline: { fontFamily: "YS Text", fontSize: 18, fontWeight: 600, lineHeight: 23, letterSpacing: 0 }
  section: { fontFamily: "YS Text", fontSize: 16, fontWeight: 600, lineHeight: 21, letterSpacing: 0 }
  body: { fontFamily: "YS Text", fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0 }
  body-compact: { fontFamily: "YS Text", fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0 }
  caption: { fontFamily: "YS Text", fontSize: 10, fontWeight: 400, lineHeight: 13, letterSpacing: 0 }
  action: { fontFamily: "YS Text", fontSize: 15, fontWeight: 500, lineHeight: 19, letterSpacing: 0 }
spacing:
  screen-horizontal: 12
  compact-gap: 6
  control-gap: 8
  section-gap: 20
  sheet-padding: 16
rounded:
  control: 12
  search: 16
  card: 14
  sheet: 22
  pill: 999
components:
  search-dock: { minHeight: 48, fill: "#FFFFFF", radius: 16, horizontalPadding: 12 }
  map-control: { size: 44, fill: "#FFFFFF", radius: 12 }
  primary-route-action: { height: 48, fill: "#2F78F6", foreground: "#FFFFFF", radius: 12 }
  contextual-action: { height: 48, fill: "#4BC142", foreground: "#FFFFFF", radius: 12 }
  place-sheet: { fill: "#FFFFFF", radius: 22, padding: 16 }
  category-chip: { minHeight: 36, fill: "#F2F2F3", radius: 12, horizontalPadding: 12 }
---

# Overview

Yandex Maps keeps the map as the primary working surface. Search, categories, location controls, place facts, routes, transport, and account tools are layered over it as floating controls and bottom sheets. The interface is information-dense but physically compact: controls protect map visibility, sheets grow only as the task needs more detail, and blue consistently identifies route-building and navigation actions.

# Non-negotiable visual invariants

- The detailed map remains visible as the base of discovery, place selection, and route planning.
- Search and category access sit in a white bottom dock or sheet instead of a conventional full-width tab bar.
- Zoom, location, orientation, layers, and 3D controls are separate white floating buttons aligned along map edges.
- Place details rise from the bottom and can expand from a compact summary into a full information surface while retaining task actions.
- Route alternatives remain visible on the map and are paired with compact mode, time, disruption, and price choices below.
- Blue marks route and navigation commitment; green is reserved for contextual offers or selected commercial actions.
- Photos, ratings, address facts, hours, transport access, reviews, and actions use compact section hierarchy rather than equal decorative cards.

# Color and surfaces

The cartographic palette supplies most of the screen color: pale neutral land, green parks, blue water, white roads, colored transit symbols, and dark labels. UI surfaces are white with faint neutral fills and dividers. Floating controls use soft ambient lift only where needed to separate them from map detail.

Route blue is the stable action and selection color. Route lines may use blue, green, red, or darker alternatives to distinguish mode and traffic context. Purple belongs to the Alice search entry. Yellow communicates ratings. Green actions are contextual to offers or partner tasks and do not replace blue navigation actions globally.

# Typography

Use YS Text when available and SF Pro as the iOS substitute. Place names, route durations, and onboarding statements carry the strongest weight. Most map-adjacent information uses 12–16-point text so it can coexist with labels already embedded in the map. Secondary facts, counts, distances, and prices use compact lines but remain readable.

Use 22–28-point text only for major onboarding or task statements, 18-point text for place and route titles, 14–16-point text for actions and section labels, and 10–12-point text for dense metadata. Preserve tabular clarity for time, distance, ratings, and prices. Dynamic Type should expand sheet content and actions while leaving map labels under the cartographic renderer's control.

# Screen composition

The live map fills the viewport. A vertical cluster of map controls sits at the trailing edge; location and route shortcuts occupy the lower corners. The bottom dock contains search, Alice, category shortcuts, and service destinations without turning the map into a small viewport surrounded by chrome.

Search expands into a bottom surface with the query field first, category/history switching below it, and either a category grid, search history, or result list. Place selection combines a map marker, optional image preview, and a sheet that begins with title, category, rating, hours, and immediate actions. Expanding the place sheet reveals sectioned facts, contacts, transport access, media, reviews, and corrections while keeping a sticky action row available.

Route planning keeps the map above a bottom route surface. Origin and destination, transport modes, alternatives, duration, disruptions, and price compete for limited space through horizontal choices rather than stacked full-width cards. Time selection and other refinements replace or overlay only the lower task surface.

Menu, profile, settings, bookmarks, and offline maps may use full-height content because map manipulation is no longer the immediate task. Even there, grouped rows remain flat and compact rather than becoming a stack of elevated cards.

# Navigation appearance

Primary navigation is task-based: the map remains the base, search and categories open from the bottom dock, route building opens from a destination or route shortcut, and menu/profile lead to account utilities. There is no conventional persistent tab bar competing with the map.

Bottom sheets use a small drag indicator, a close action when appropriate, and tabs or segmented choices inside the sheet. Place sections use a short underline for the active destination. Drill-down settings use back navigation and compact titles. Floating map controls remain visible only when they apply to the current map state.

# Components

The search dock is a white rounded container with account identity at the leading edge, query text in the center, and Alice at the trailing edge. A short category/service row may attach below it. Expanded search adds a keyboard-aware query row, categories/history selection, and results in the same task surface.

Map controls are isolated 44-point white buttons with one dark symbol. Related zoom actions may stack, but unrelated controls remain separate. Their shadows and corner radii are just strong enough to maintain legibility over changing map content.

The place sheet starts with title, classification, rating, review count, opening state, distance, and one or two priority actions. Information below is divided by whitespace and faint separators. Media uses a compact mosaic or wide crop. The bottom action row may include route, taxi, phone, share, or contextual commerce while keeping the route action first.

Route alternatives combine a mode selector with duration and service information. A selected option is filled blue; alternatives remain pale. Primary route or tariff actions span most of the sheet width. Route lines, pins, stops, incidents, and live transport markers must remain distinguishable from UI buttons.

Category entries use either familiar monochrome symbols on pale circular fields or actual service marks where brand recognition matters. They are functional shortcuts, not illustrations.

# Imagery and icons

Cartography is the primary image system. Preserve vector labels, transit symbols, road hierarchy, building footprints, parks, water, traffic, route lines, selected pins, and 3D landmarks as functional map content. Do not flatten the map into a decorative background texture.

Place photography uses real wide crops, panoramas, and compact mosaics. Familiar map and navigation actions use coherent functional symbols. Partner or service logos remain distinct where recognition is necessary. Onboarding scenes derived from the map follow the separate illustration guidance; ordinary place photos and category icons do not.

# States

Observed states include initial location search, permission prompts, current-location resolution, standard and 3D map views, search categories, empty history, typed suggestions, selected place, collapsed and expanded place details, photo browsing, route mode selection, route alternatives, time refinement, transport and taxi choices, menu, profile, and settings.

Selection is explicit through an active map marker, highlighted route, selected mode, or active section. Loading preserves the map when possible. Empty history and unavailable content explain the state and retain a next action. System location and notification prompts remain native. Failed or denied location access must leave manual search and map movement available.

# iOS adaptation

Keep map controls, search, route modes, sheet actions, category shortcuts, and close controls at least 44 points even when their visible symbol is smaller. Respect safe areas while allowing the map and place imagery to extend edge-to-edge. Ensure bottom sheets and sticky action rows do not cover the selected marker or the final scroll item.

Expose map, selected place, sheet content, and actions as separate VoiceOver regions. Announce route duration together with mode and disruptions, and expose map controls by function rather than symbol name. At large Dynamic Type sizes, expand the sheet, wrap facts, and horizontally scroll route alternatives instead of shrinking text or covering the map with fixed controls.

# Anti-generic checklist

- Do not replace the map with a pale placeholder behind generic cards.
- Do not turn search, place, route, menu, and settings into one repeated sheet template.
- Do not use purple as the default route or navigation action color.
- Do not hide distinct route alternatives, disruptions, prices, and transport modes inside one summary value.
- Do not replace functional cartographic symbols or service marks with arbitrary SF Symbols.
- Do not use heavy shadows, oversized chrome, or a conventional tab bar that consumes the working map area.

</design-context>
