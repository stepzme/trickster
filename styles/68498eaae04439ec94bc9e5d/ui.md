<design-context>
---
version: 1
platform: iOS
name: yandex-maps-design-analysis
description: "A cartography-first iOS visual system with a full-screen map canvas, compact white floating controls, layered rounded bottom sheets, blue route emphasis, dense list rows, and functional photography or service marks."
colors:
  canvas: "#F3F4F1"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F5"
  surface-tertiary: "#E8EAED"
  map-water: "#BFE5F4"
  map-park: "#D9F0D7"
  accent-primary: "#2F78F6"
  accent-secondary: "#4BC142"
  accent-purple: "#7448E8"
  accent-yellow: "#FFD33D"
  text-primary: "#171719"
  text-secondary: "#73757A"
  text-tertiary: "#A6A8AC"
  divider: "#E5E6E8"
  destructive: "#F04A3C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  section: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 600, lineHeight: 22}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 16
  control-gap: 8
rounded:
  control: 12
  card: 14
  sheet: 22
  pill: 999
components:
  search-dock: {height: 48, fill: "#FFFFFF", radius: 16, horizontalPadding: 12}
  map-control: {size: 44, fill: "#FFFFFF", radius: 12}
  primary-action: {height: 48, fill: "#2F78F6", foreground: "#FFFFFF", radius: 12}
  secondary-action: {height: 44, fill: "#F2F3F5", foreground: "#171719", radius: 12}
  place-sheet: {fill: "#FFFFFF", radius: 22, padding: 16}
  segmented-control: {height: 36, fill: "#F2F3F5", selectedFill: "#FFFFFF", radius: 12}
  bottom-action-bar: {height: 56, fill: "#FFFFFF", radius: 0}
---

# Overview

Yandex Maps is visually anchored by a detailed live map that fills the iPhone screen and stays visible behind compact floating controls. White rounded search fields, control stacks, and bottom sheets sit above cartographic land, water, roads, labels, markers, and route lines. The recognisable character comes from the contrast between busy map detail and restrained white interface chrome: small controls, dense factual rows, blue route emphasis, occasional green commercial actions, and real place imagery.

# Non-negotiable visual invariants

- The map occupies the full viewport whenever map context is visible; controls float above it instead of enclosing it in a page frame.
- Search, place details, route options, permission education, and profile/menu surfaces use white rounded bottom sheets with a small centered grabber.
- Map controls are separate 44-point white buttons along the trailing edge, with zoom controls stacked and unrelated controls kept visually distinct.
- Blue is the dominant commitment and selected-route color; purple is limited to the Alice/search assistant mark and green to contextual partner or transit accents.
- Place cards combine a darkened or real-photo media header, a white information sheet, compact tabs, star rating, metadata rows, and a sticky bottom action strip.
- Route screens keep colored paths and markers on the map while the lower sheet uses compact mode chips, duration tiles, price chips, and one broad blue action.
- Menu and settings abandon the map canvas but keep the same flat density: white background, pale gray row groups, monochrome icons, and thin separators.

# Color and surfaces

The largest color mass is usually cartography: pale gray-beige land, white roads, light blue water, soft green parks, dark place labels, blue transit icons, colored service markers, and red or green route signals. Interface surfaces are mostly pure white with very light gray secondary fills. They rely on rounded geometry and faint shadow or scrim separation rather than heavy elevation.

Blue identifies route selection, primary action, active underlines, and important links. Green appears in contextual partner actions, transit badges, and positive route details. Purple appears as the assistant/search mark and should not spread through generic controls. Yellow is reserved for ratings and a few brand/service marks. Red is seen in location pins, traffic disruption, and destructive or blocked map signals; it should remain small and semantic.

Generic iOS system blue used everywhere would flatten the hierarchy, and large saturated brand fields would fight the map. Dark surfaces belong mainly to photo overlays, scrims, or live map content, not to ordinary settings and list screens.

# Typography

The hierarchy is compact and factual. Place names, route durations, sheet titles, and onboarding questions use the strongest weight. Most rows, labels, distances, counts, prices, and metadata sit in the 12-17 point range so that map labels and dense lists remain legible together. Text is primarily left-aligned in sheets and rows, with centered text used for empty states, permission education, and some broad actions.

Use SF Pro as the iOS-safe face; the observed product reads as a neutral rounded sans with tight but readable rhythm. Preserve numeric clarity for ratings, review counts, times, route durations, distances, prices, and transport badges. Dynamic Type should expand sheets and rows vertically, while route chips and category grids may scroll horizontally rather than compressing labels below readability.

# Screen composition

Map-first screens place live cartography edge to edge through the safe areas. A white search dock or compact bottom panel sits near the lower safe area, service/category shortcuts sit below or above it, and a trailing vertical stack holds layers, orientation, 3D, zoom, and location controls. Selected pins or route endpoints remain visually central, while bottom sheets cover only the lower portion unless a detail state needs more vertical space.

Search composition shifts into a white bottom sheet over a dimmed map. The query field remains first, segmented category/history selection sits beneath it, and content becomes either a grid of circular category entries, an empty centered message, or a tight suggestion list with icons, names, secondary address text, and right-aligned distance.

Place composition combines map context, a marker, optional photography, and a white sheet. The compact sheet opens with title, category, rating, hours, distance, and primary actions. Expanded sections use full-width rows, faint dividers, small icons, blue links, panorama crops, photo mosaics, and a bottom action strip that remains visually pinned.

Route composition keeps the map above and the choices below. Colored route lines, incident marks, stops, and live transport badges stay on the map. The bottom area uses origin/destination fields, horizontal mode choices, compact alternative cards, a wide blue action, and occasional picker sheets that rise over the lower part of the map.

Menu, profile, and settings use full white or pale gray pages with grouped row blocks. They keep the same 12-point horizontal edge discipline, compact icons, and shallow row heights rather than turning into large cards.

# Navigation appearance

Navigation is visually expressed through floating search controls, bottom sheets, compact title bars, segmented controls, and active underlines. There is no persistent full-width tab bar in the sampled screens. When a sheet is active, the map behind it is dimmed or partially visible, the sheet has a rounded top and centered grabber, and close controls are small gray circular buttons.

Active states are marked by blue fill, blue underline, selected white segment over a pale segmented track, or a highlighted route line. Back and close controls remain visually quiet: gray circles, chevrons, or small text buttons placed at sheet or title-bar edges. Settings and detail screens use centered titles or left-leading titles with simple monochrome row disclosures.

# Components

Search docks are white rounded rectangles with a small leading identity or search icon, muted placeholder text, and the purple assistant mark at the trailing edge. Expanded search fields sit inside a sheet, remain horizontally compact, and pair with a blue text or filled action when the keyboard is present.

Map controls are white rounded squares or short capsules with monochrome symbols. They appear in vertical stacks with small gaps; zoom buttons share one stacked control, while layer, orientation, 3D, and location remain separate. Their visual weight is intentionally lighter than place sheets and route panels.

Bottom sheets have 22-point top corners, white fill, a small gray grabber, compact headers, and minimal dividers. Place sheets use tabs with black labels and a short blue active underline. Dense sections use pale row icons, black primary text, gray metadata, and blue link text.

Primary actions are broad blue rounded rectangles with white semibold labels. Secondary actions are pale gray or white controls with black text, or small square icon buttons in the sticky action row. Contextual green actions are broad and rounded but appear only when the visible context uses green.

Category grids use circular pale gray icon fields, compact captions, and occasional recognizable service logos. Settings rows are flat, with a monochrome leading icon, one-line title, optional muted secondary value, and a faint trailing disclosure.

# Imagery and icons

Cartography is the main imagery layer. It must retain road hierarchy, water and park fields, map labels, transit marks, selected pins, route lines, traffic coloring, building footprints, and 3D or panorama cues where visible. Treat the map as functional image content, not as a decorative backdrop.

Place photography appears as real wide crops, darkened media headers, panoramas, compact mosaics, and thumbnails. These images are tightly cropped and paired with factual labels or play/camera counters. Service logos and partner marks appear only where recognition is part of the visible component.

The sampled screens show some one-off educational objects and map-derived graphics, but they are not consistent enough to define a standalone illustration system. Functional icons should stay simple, monochrome, and map-adjacent; do not replace map controls, place photos, service marks, transport badges, or rating stars with arbitrary decorative symbols.

# States

Observed states include splash, location permission, location acquisition, base map, zoomed map, 3D map, expanded search, empty search history, typed suggestions, selected place, expanded place details, photo-heavy place sections, route alternatives, public transport step detail, time picker sheets, menu, profile entry, settings, and educational transport/taxi sheets.

The visual constants are the white sheet surface, compact typography, blue selected or primary action, pale gray secondary fill, and map visibility whenever map context exists. Empty states are sparse and centered. Picker states use native wheel geometry inside a white rounded sheet while preserving the app's blue done/action control. Permission prompts can remain native, but surrounding app surfaces keep the map-derived context and white/blue palette.

# iOS adaptation

Preserve safe-area behavior by allowing the map and media to extend behind the status area while keeping controls and sheet actions clear of the home indicator. Keep visible tap targets at least 44 points for map controls, close buttons, route choices, category entries, and sticky action buttons. Bottom sheets should grow with content and keyboard changes instead of covering selected map markers unnecessarily.

For Dynamic Type, let sheet rows, result lists, settings rows, and place metadata wrap and expand. Keep route alternatives and category shortcuts horizontally scrollable when compact width cannot fit them. VoiceOver order should separate map content, floating controls, sheet title, sheet sections, and sticky actions so the dense layout remains navigable without changing its visual hierarchy.

The reference is a light-mode system in the sampled screens. A dark adaptation should be treated as a separate visual decision, because the observed look depends on pale cartography, white sheets, black text, and blue route emphasis.

# Anti-generic checklist

- Do not replace the live map with a static pale placeholder behind generic cards.
- Do not use a default `TabView`, default `Form` sections, or a standard large-title navigation stack for map, place, or route surfaces.
- Do not make every screen a uniform white card stack; map controls, place sheets, route panels, and settings rows have distinct visual density.
- Do not recolor primary route actions purple or green; blue is the route and selected-action anchor.
- Do not substitute arbitrary SF Symbols for service logos, transport badges, rating stars, map pins, or photographic place media.
- Do not add heavy shadows, large hero typography, decorative gradients, or oversized rounded cards that reduce the visible map area.

</design-context>
