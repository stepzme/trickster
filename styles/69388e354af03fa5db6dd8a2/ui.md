<design-context>
---
version: 1
platform: iOS
name: WindHub-design-analysis
description: "A marine-weather workstation combining full-screen dark nautical maps, multicolor forecast overlays, dense white tabular sheets, cyan selection and navigation, sparse rounded map controls, and orange-coral subscription actions."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F6F7"
  accent-primary: "#35C5D3"
  accent-secondary: "#FF7650"
  text-primary: "#242529"
  text-secondary: "#73777D"
  divider: "#E0E4E6"
  destructive: "#E44E59"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 37}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Mono", fontSize: 10, fontWeight: 500, lineHeight: 14}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.control}", minHeight: 48}
  forecast-sheet: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.sheet}", padding: "{spacing.card-padding}"}
  map-control: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.pill}", minHeight: 44}
  data-cell: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: 4, padding: 5}
  model-card: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 12}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.accent-primary}", unselectedColor: "{colors.text-primary}"}
---

# Overview

WindHub is defined by the tension between a visually saturated, data-heavy weather map and clean white utility surfaces. Dark blue-gray nautical basemaps carry multicolor wind and forecast layers, while white bottom sheets compress time, units, symbols, arrows, swell, and tide into dense aligned tables. Cyan unifies selection and navigation; orange-coral appears in subscription or warning contexts rather than ordinary map controls.

# Non-negotiable visual invariants

- The map is a full-screen working canvas and remains visually connected to the forecast sheet layered over it.
- Weather magnitude uses a functional cyan-green-yellow-orange-red-magenta scale that is not reused as decorative UI color.
- Forecast values align in stable time columns and compact metric rows with visible units and model context.
- Cyan consistently marks selected tools, active navigation, saved state, and ordinary primary actions.
- White circular map controls float over the map with black line icons and minimal labels.
- Bottom sheets use white surfaces, rounded top corners, compact headers, and dense structured data rather than generic cards.
- Onboarding and utility screens are spacious and white, while map workspaces are deliberately dense.

# Color and surfaces

White is the base for onboarding, settings, forms, selectors, and forecast sheets. Very light gray distinguishes grouped rows and data cells. The map canvas is dark blue-gray and receives functional raster overlays ranging through cyan, green, yellow, orange, red, and magenta according to magnitude. Cyan-turquoise marks selection, active navigation, save actions, and progress. Orange-coral appears in subscription CTAs, offers, and warning emphasis. Near-black carries headings and values; gray carries labels, units, and inactive controls. Red remains destructive or severe. Default iOS blue, decorative reuse of heatmap colors, or gray opaque panels covering most of the map would break the reference.

# Typography

Use SF Pro for interface text and SF Mono for the smallest aligned data. Onboarding and utility titles are approximately 24–32 points bold; location and section headings are around 17–20 points; body and action labels are around 13–16 points; forecast labels, times, units, and numeric cells are around 9–11 points. Important current values and warnings use heavier weight. Tabular figures are essential in forecast matrices. Dynamic Type should enlarge utility screens normally, while forecast sheets may reflow into horizontally scrollable columns so labels and units remain aligned rather than truncating or scaling below legibility.

# Screen composition

Map archetypes fill the viewport with the nautical basemap, keep small white circular controls aligned along an edge, place legends or timeline near the map boundary, and layer a draggable forecast sheet above the lower region. The sheet begins with a compact location/model header, then date or time strip, warning context, and a dense horizontal matrix of symbols, colored values, arrows, swell, and tide graphics. Selector archetypes replace part of the sheet with tiled layer buttons or a grid of model cards. Search and save archetypes use focused white sheets with text fields, recent results, and one completion action. Route archetypes combine the map with a planning panel, waypoints, date controls, and share sheet. Fish archetypes use white forecast panels and realistic species photography. Onboarding, paywall, authentication, and settings archetypes use generous 16–24 point margins, photography or screenshots, large headings, and one clear action.

# Navigation appearance

Main workspaces use a white bottom bar with five evenly spaced black outline icons and labels; the selected item turns cyan. Floating map actions are white circles with subtle separation from the map and consistent black line icons. Top chrome is minimal or absent on full-screen maps. White bottom sheets have rounded top corners, a compact close control or header, and a visible boundary or handle where they overlap the map. Standard iOS alerts, date pickers, and share sheets retain native geometry. Paywall and login actions may use an orange-to-coral gradient but do not change ordinary navigation styling.

# Components

Forecast sheets combine a compact header, horizontal time columns, metric rows, small weather symbols, wind arrows, colored numeric cells, swell bars, tide curves, warnings, model chips, and scalar legends. Map controls are 44-point white circles with centered line icons. Timeline selection uses a visible vertical band or cyan emphasis. Layer pickers use a tidy tile grid with a small pictogram and label; selected tiles receive cyan fill or border. Model selectors use rounded pale cards with model name, region, duration, and optional HD badge. Search and save forms use white or pale rows, direct labels, and cyan action. Subscription actions use orange-coral gradient fills. Route planning panels use compact waypoints, date or settings rows, and a clear primary action. Disabled controls retain geometry and lower saturation.

# Imagery and icons

Functional maps, raster data layers, legends, tide curves, and forecast symbols are compositionally essential and cannot be omitted while data or final assets are pending. Onboarding uses real marine photography and embedded app screenshots; fish detail uses realistic fish photos. Weather symbols, nautical preference pictograms, boat marks, and navigation icons are utilitarian, compact, and mostly line-based. These elements do not form a standalone illustration system. Preserve map geometry and legend meaning; use aspect-fill for marine photography and contain for fish, weather, route, and nautical symbols.

# States

Selected tabs, layers, models, dates, map points, and saved locations use cyan emphasis while leaving the surrounding surface stable. Live, HD, model, trial, and Pro labels appear as compact chips in direct context. Warnings use orange or red and remain clearly distinct from normal heatmap cells. Save confirmation may appear as a small toast over the map. Search can show recents and populated results inside the same white sheet. Route planning moves through selected waypoints and date controls without changing the map language. Authentication, paywall, loading, native alerts, date picker, and share states retain white utility surfaces. No stable custom empty or error illustration system was observed.

# iOS adaptation

Allow the map to extend beneath safe-area regions while keeping controls, legends, tab bar, and sheet handles inside readable insets. Anchor the bottom bar above the home indicator and size sheets so a meaningful map region remains visible. Support horizontal scrolling for time columns and keep the selected time band, current model, warning, and units visible. Present keyboards, date pickers, alerts, and share sheets natively, then return to the same map or white utility context. Maintain at least 44-point targets for map buttons, layers, model cards, dates, waypoints, tabs, and close controls. VoiceOver should announce location, model, selected time, metric name, value, unit, and warning in a stable order. At accessibility sizes, move secondary metrics into additional rows or pages rather than compressing technical text.

# Anti-generic checklist

- Do not replace the functional map with a decorative gradient or generic blue background.
- Do not remove units, model names, legends, or time alignment from forecast data.
- Do not reuse heatmap colors for unrelated buttons or status decoration.
- Do not cover the map with multiple opaque card stacks.
- Do not use default system blue instead of the observed cyan selection color.
- Do not use an unstyled `TabView`, visible default `Form`, or arbitrary mixed-weight SF Symbols.
- Do not turn dense forecast rows into equal rounded cards that break column alignment.
- Do not invent a character or illustration system from photographs, screenshots, and nautical pictograms.

</design-context>
