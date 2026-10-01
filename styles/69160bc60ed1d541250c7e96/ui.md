<design-context>
---
version: 1
platform: iOS
name: Windy-app-design-analysis
description: "A dense weather workspace where pale cartography or deep petroleum panels dominate the viewport, compact measurement typography overlays live data, bright aqua marks active controls, and navigation floats directly over maps and forecasts."
colors:
  canvas: "#0B3943"
  surface-primary: "#174B55"
  surface-secondary: "#27616A"
  accent-primary: "#18D9D0"
  accent-secondary: "#F1C84B"
  text-primary: "#FFFFFF"
  text-secondary: "#B6CDD0"
  divider: "#4F737A"
  destructive: "#E85C63"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  map-control-stack: {fill: "dark translucent teal", geometry: "compact vertically grouped rounded controls"}
  forecast-panel: {fill: "layered teal", geometry: "full-width dense data panel"}
  time-scrubber: {fill: "dark overlay", geometry: "bottom timeline with aqua selected position"}
  pro-marker: {fill: "yellow", geometry: "small inline chip or lock"}
---

# Overview

Windy.app is a data-first weather interface. Map screens devote nearly the whole viewport to cartography, radar, wind color fields, or route overlays, while other screens use a deep petroleum shell filled with compact forecasts and controls. Aqua selection, dense measurement labels, and floating tool clusters make it visibly different from a generic card-based SwiftUI app.

# Non-negotiable visual invariants

- Real map, weather, or forecast data occupies the largest visual region whenever that data is present.
- Deep petroleum teal is the persistent chrome and panel color around data visualizations.
- Bright aqua is reserved for primary actions, selected modes, slider positions, and active controls.
- Map controls appear as compact floating stacks over the current visualization rather than as large detached cards.
- Forecasts and station views use dense microdata, compact labels, charts, and tables instead of spacious editorial layouts.
- Premium status appears as a small yellow `PRO` marker or lock adjacent to the affected control.
- Mode changes and secondary settings use layered sheets or action panels without discarding the visible context beneath them.
- Icons describe weather, direction, layer, or measurement functions; decorative imagery does not compete with the data.

# Color and surfaces

On non-map screens, the canvas is a full-screen petroleum field with progressively lighter blue-teal cards and rows. Map screens replace most of that mass with pale cartographic tiles, satellite texture, or multicolor weather overlays, but retain dark teal floating chrome and bottom timelines. Primary aqua is a narrow signal rather than a background color. Yellow identifies premium access; red is reserved for destructive or severe conditions. White carries primary values, blue-gray carries supporting units and metadata, and low-contrast teal dividers separate dense rows. Default iOS blue or grouped gray surfaces would visibly break this system.

# Typography

Use SF Pro as the iOS-safe sans. Hierarchy is compact: medium-bold screen or panel titles, semibold current values, small labels, and very small captions for units, times, models, and chart axes. Numeric weather data should use tabular figures so columns and timelines remain stable. Uppercase may be used sparingly for terse technical or premium labels, not for paragraphs. Under Dynamic Type, preserve the primary measurement and its unit together; let secondary metadata wrap or move below before enlarging dense charts beyond their available width.

# Screen composition

Map archetype: extend the map or weather layer under the safe areas and across almost the entire screen; place a restrained top bar, one or two vertical floating control stacks, and a dark bottom time scrubber directly over it. Preserve enough unobscured map to keep location and weather patterns legible.

Forecast archetype: begin with compact location/context chrome, then stack full-width forecast strips, graphs, tables, and station panels with roughly 16-point side insets and 10–14-point internal padding. The viewport should feel information-rich, not like a sequence of oversized cards.

Selection or settings archetype: use a dark teal canvas with compact rows, segmented controls, sliders, and toggles; focused choices may rise in a rounded bottom sheet. Long content scrolls vertically while the current action or timeline remains clear of the home indicator.

# Navigation appearance

Navigation chrome is dark teal, compact, and usually overlaid on the active visualization. Top controls use simple white line symbols; map and layer tools form rounded vertical groups; selected states turn aqua. Bottom timelines and sheets use darker translucent surfaces with a clear selected time or mode. Back controls and sheet dismissals stay visually small while retaining full hit areas. This section defines appearance only; routes and information architecture come from the consuming product.

# Components

Map control stacks use small rounded teal cells, white line icons, minimal separators, and aqua selected icons or fills. Forecast panels use full-width teal surfaces, compact headings, aligned numeric columns, thin chart strokes, and restrained corner radii. Time scrubbers sit along the bottom edge with dense time labels, a colored selection indicator, and weather-layer color scales nearby. Primary actions are aqua rounded rectangles with dark text; secondary actions remain dark or outlined. Sliders and segmented controls inherit the same aqua active state. Premium markers are tiny yellow pills or locks placed inline with the affected label. Pressed states deepen the existing surface; disabled states reduce contrast without changing the layout.

# Imagery and icons

The dominant imagery is functional: map tiles, satellite texture, radar and wind overlays, route lines, compass graphics, color legends, and line charts. These visualizations must keep their large scale and cannot be replaced by blank placeholders or generic cards. Photography, when present in community content, stays secondary and cropped into compact rounded thumbnails. Use consistent thin weather and map glyphs with measurement labels; do not introduce decorative illustration or arbitrary symbol styles.

# States

Selected layers, times, tabs, and slider positions retain the dark teal base and add aqua emphasis. Premium controls retain their normal geometry and add a yellow chip or lock. Modal choices appear over the current map or forecast using a darker sheet, while native permission or rating prompts may temporarily sit above the same context. Populated maps and charts preserve their legends and units; unavailable or disabled items reduce contrast rather than becoming unrelated empty-state artwork.

# iOS adaptation

Extend maps and the petroleum canvas through the safe areas, then inset labels and controls from the status bar and home indicator. Place overlay controls in safe, reachable zones with at least 44-point hit targets even when the visible icon is compact. Use vertical scrolling for long forecasts and settings, horizontal scrolling only for time-based data where the sequence remains evident. Sheets should use native presentation and keyboard behavior while adopting the documented teal surfaces and radii. VoiceOver order follows location/context, primary visualization or value, controls, then supporting data. Dynamic Type may stack labels and values, but must not erase the dominant map/data region. Preserve the observed dark shell; do not invent an unrelated light appearance for non-map surfaces.

# Anti-generic checklist

- Do not replace the map or chart region with a generic white card stack.
- Do not use default blue tint for selected controls.
- Do not spread sparse content across oversized editorial cards.
- Do not convert floating map tools into an unstyled toolbar or `TabView`.
- Do not use `Form` sections with default grouped backgrounds for dense weather settings.
- Do not remove units, legends, time labels, or data alignment from technical panels.
- Do not use yellow for ordinary selection or aqua as a full-screen decorative field.
- Do not add decorative illustrations where functional cartography and weather graphics carry the visual weight.

</design-context>
