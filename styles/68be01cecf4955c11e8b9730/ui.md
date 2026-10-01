<design-context>
---
version: 1
platform: iOS
name: Weather-design-analysis
description: "An atmospheric dark-mode weather interface built from condition imagery, translucent blue-gray forecast cards, huge thin white temperature numerals, dense multicolor metric charts, full-screen weather maps, and edge-mounted native controls without a tab bar."
colors:
  canvas: "#0B1520"
  surface-primary: "#416F91"
  surface-secondary: "#537E9E"
  accent-primary: "#FFFFFF"
  accent-secondary: "#4D86B8"
  text-primary: "#FFFFFF"
  text-secondary: "#DCE8F0"
  divider: "#FFFFFF33"
  destructive: "#FF453A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 76, fontWeight: 250, lineHeight: 76}
  title: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "white or translucent material", text: "dark blue-gray", shape: "compact rounded control", minimumTarget: 44}
  secondary-action: {fill: "translucent blue-gray", text: "white", border: "subtle white hairline", shape: "rounded rectangle"}
  primary-card: {fill: "frosted blue-gray or weather-image surface", radius: 18, padding: 14, text: "white"}
  navigation: {fill: "atmospheric or black canvas", selected: "white", inactive: "pale blue-gray", tabBar: "none"}
---

# Overview

Weather turns current conditions and forecast data into the interface environment. City forecasts place huge thin white temperature numerals over atmospheric cloudy, rainy, or sky imagery, then layer translucent blue-gray hourly, ten-day, alert, and metric cards below. Saved-city lists shift toward black so each photographic city card reads as a vivid window. Detail views become compact scientific dashboards, and weather maps replace the entire canvas with colored layers, legends, and playback controls.

The interface is recognisably iOS through SF typography, continuous rounded corners, translucent materials, system permission alerts, circular edge controls, and modal navigation. It has no persistent tab bar; map, location, city list, close, menu, and modal edge actions carry the visible navigation appearance.

# Non-negotiable visual invariants

- Current-condition screens use atmospheric imagery or condition-colored fields as the full viewport environment; the weather is not presented inside an isolated white card.
- The current temperature is an extremely large, thin white numeral that dominates the upper region without heavy bold weight.
- Hourly, ten-day, alert, and metric data sit in translucent blue-gray cards with large continuous corners and subtle white separators.
- Saved-city screens use a near-black canvas with broad image-backed weather cards containing city, condition, high/low, and large temperature.
- Detail pages pair a compact date selector with a large line, area, bar, or arc visualization, followed by summary and explanatory content.
- Weather maps fill the screen edge to edge and retain a left legend, right floating controls, central marker, and bottom playback/timeline surface.
- Navigation uses edge-mounted map/location/list/menu/close/Done actions rather than a tab bar.
- Condition photography, map layers, weather glyphs, and charts remain compositionally essential and cannot be replaced by generic symbols or omitted placeholders.

# Color and surfaces

Forecast canvases vary with conditions but stay within dark blue, slate, cyan, cloudy gray, and near-black atmospheric fields. Translucent cards commonly sit around blue-gray `#416F91`–`#537E9E`, with material blur allowing background weather imagery to remain perceptible. Saved-city and search canvases may approach black `#0B0B0D`, while search and menu controls use darker rounded material.

White is the main text and floating-control color. Secondary labels use pale blue-gray `#DCE8F0`, and dividers use low-opacity white. Chart and map semantics introduce bounded hues: blue/cyan for temperature or precipitation, green for UV/humidity or acceptable range, purple for pressure/heavier weather layers, yellow for sunlight/warnings, and red only for severe or destructive action. These colors belong to data, not decorative branding.

Opaque white cards over forecast imagery would visibly break the system. Light surfaces are reserved for compact floating controls, system alerts, or settings contexts where contrast requires them.

# Typography

Use SF Pro Display and SF Pro Text. Current temperature reaches roughly 64–76 points in ultra-light or thin weight. Saved-city card temperatures may sit around 34–52 points. Large list titles use approximately 34 points bold. City names, conditions, card titles, and metric labels sit around 17–20 points semibold or regular; explanatory copy and chart axes use 10–14 points.

Temperature dominates through size rather than weight. High/low, condition, hour, day, units, and chart labels remain compact and aligned for comparison. Metric labels may use restrained uppercase but body explanations remain sentence case. Numeric chart values need stable alignment and clear units.

Dynamic Type should expand explanatory sections, list rows, alerts, and settings; forecast grids and chart labels can remain compact only when accessible equivalents are provided. Avoid shrinking the current condition and key warning hierarchy to make all metrics fit at once.

# Screen composition

City-list screens begin with the status area, large leading title, trailing circular ellipsis menu, and dark rounded search field. A compact severe-weather or notification card may follow, then broad image-backed city cards in a vertical stack. Small data/legal links sit low on the page above the home indicator. Edit mode retains the same stack while exposing drag handles and red delete affordances.

City-forecast screens place city name, condition, and huge temperature in an open upper region over full-screen condition imagery. The middle and lower scroll contain full-width translucent hourly and ten-day forecast cards followed by smaller metric tiles and informational sections. Bottom edge controls expose map, current location, and list as separated system icons rather than a tab surface.

Metric detail screens use a compact modal top bar with title and circular close control, a date strip, a large data visualization, a summary card, and explanatory text. Temperature and feels-like use line/area graphs; UV uses a green curve; wind adds direction arrows; precipitation uses bars; humidity uses blue/green area; visibility a gray line; pressure a purple line; sunrise an arc and daylight bars.

Map screens devote the full viewport to Apple map tiles plus translucent or colored weather overlays. Done sits at top, a vertical stack of floating controls sits at the right edge, the legend runs along the left, a location marker anchors the center, and a rounded playback/timeline sheet occupies the bottom. Search uses top search/cancel controls, results or no-results in the middle, and keyboard below. Widget preview shows a small rounded weather tile over blurred home wallpaper.

Standard gutters are about 16 points with 12-point card gaps. Forecast cards are dense internally but outer condition headers remain open. Every scrolling or map surface must clear safe areas and bottom controls.

# Navigation appearance

There is no visible persistent tab bar. Forecast screens expose three bottom icon controls—map at leading, location/current-position near center, and list at trailing—using white or translucent material. Detail pages use a top-right circular close control. City list uses a circular ellipsis menu. Map uses a textual Done action with floating circular controls and bottom sheet.

Notification and report surfaces use modal top bars with Cancel, Done, or Submit actions. Search uses search/cancel treatment; editing uses Done and row affordances. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

City cards are broad rounded image surfaces with city and condition aligned at leading, high/low nearby, and a large temperature at trailing or upper corner. A severe-alert card uses a clear icon, title, chevron, and small dismiss control. Forecast cards use one coherent translucent material, inset separators, aligned hours/days, weather glyphs, precipitation percentages, and colored range bars.

Metric tiles and detail summaries maintain the same rounded blue-gray material. Charts use crisp lines, areas, bars, dots, arrows, axes, and labels with data-specific color. Floating map controls are compact white or frosted circles/rounded rectangles. Playback combines play/pause, time labels, and scrub/timeline affordance inside a bottom material panel.

Search fields are dark rounded bars with magnifier, clear, and cancel actions. Editing uses drag handles, red minus or swipe-to-delete controls, and Done. Report forms use grouped toggles, checkmarked rows, broad pill-like descriptor buttons, and a restrained thank-you state. Native location/notification permission alerts remain system-authentic.

# Imagery and icons

Weather imagery fills city forecasts and card backgrounds with cloudy, rainy, overcast, or sky atmosphere. It may be photographic or generated but must preserve readable sky/condition fields behind white text and translucent panels. Saved-city cards use wide cover crops, while full forecast backgrounds extend edge to edge.

Maps use factual Apple-style tiles and colored forecast overlays. Weather glyphs, condition icons, alert icons, and map layer symbols are compact and consistent. Charts are a primary form of imagery rather than decoration. The observed screens do not establish a separate authored illustration language; a single notification bell graphic is insufficient. If weather imagery is pending, preserve its full-background or card-sized visual mass with an honest condition-specific placeholder.

# States

Observed permissions include location system prompt, app-authored notification explanation, standard notification prompt, and critical-alert prompt. City list appears populated, menu-open, editing, reordering, swipe-delete, and post-delete. Search includes suggestions, no results, keyboard, and add-city preview. Forecast screens appear at multiple scroll depths and include alert/notification banners.

Metric detail states cover temperature, UV, wind, precipitation, feels-like, humidity, visibility, pressure, and sunrise. Map states include precipitation/temperature layers, unavailable air-quality data, playback, layer selection, duration/type selection, marker context menu, and bottom sheet. Report issue includes grouped selection and submitted thank-you. Widget preview and unavailable/loading city data preserve the same native material and typography.

# iOS adaptation

Use safe-area-aware full-bleed backgrounds so condition imagery and map tiles continue beneath status and edge controls while text remains inside readable safe regions. City forecast is a vertical scroll with a large open header and dense card stack. Metric detail, notifications, report, search, and list editing use native modal or navigation containers. Map legends, right-edge controls, and bottom timeline need collision avoidance on compact widths.

Every city card, hourly/day cell, metric tile, close/menu/map/location/list button, map layer control, timeline control, edit/delete affordance, search result, and alert action needs at least a 44-point effective target. VoiceOver should announce city, condition, current/high/low temperature, alert, and actionable forecast groups in visible order. Charts and maps require accessible text summaries independent of color.

Dynamic Type expands explanatory content and cards; on compact widths, allow forecast labels to wrap or scroll horizontally before hiding key values. Preserve the huge thin temperature, atmospheric imagery, and map viewport. The observed record uses dark mode; any alternate appearance must keep translucent hierarchy and condition contrast rather than replacing cards with generic opaque surfaces.

# Anti-generic checklist

- Do not replace condition imagery with one static gradient or a white dashboard canvas.
- Do not make the current temperature small or heavy-bold; it is the dominant thin numeral.
- Do not place opaque generic white cards over forecast imagery or maps.
- Do not replace forecast rows and metric visualizations with identical text-only cards or progress bars.
- Do not add a tab bar; navigation is expressed by bottom edge icons, close/menu/Done actions, and sheets.
- Do not omit weather backgrounds, map layers, glyphs, charts, legends, or range bars while assets are pending.
- Do not use one data color for temperature, UV, wind, precipitation, humidity, pressure, and sunlight.
- Do not introduce a decorative illustration system where the reference uses atmospheric imagery, data visualization, and native symbols.

</design-context>
