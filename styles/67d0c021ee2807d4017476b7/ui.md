<design-context>
---
version: 1
platform: iOS
name: yandex-weather-design-analysis
description: "A weather interface built from a map-led header, a deep condition-responsive blue field, oversized forecast typography, translucent data modules, compact hourly cells, and white analytical sheets."
colors:
  sky-blue: "#2F91EE"
  sky-deep: "#142A60"
  sky-night: "#11183E"
  glass-primary: "#557DB7"
  glass-secondary: "#6F94C5"
  canvas-light: "#F6F7F9"
  surface-light: "#FFFFFF"
  surface-muted: "#F0F1F4"
  action-dark: "#202126"
  text-on-sky: "#FFFFFF"
  text-primary: "#202126"
  text-secondary: "#777B83"
  accent-blue: "#2F9BF3"
  low-risk: "#57CC66"
  moderate-risk: "#FFD54A"
  elevated-risk: "#FF9418"
  high-risk: "#F14646"
typography:
  temperature: {fontFamily: "Rounded Sans", fontSize: 56, fontWeight: 700, lineHeight: 58}
  forecast-hero: {fontFamily: "Rounded Sans", fontSize: 29, fontWeight: 700, lineHeight: 32}
  title: {fontFamily: "Rounded Sans", fontSize: 22, fontWeight: 700, lineHeight: 27}
  card-title: {fontFamily: "Rounded Sans", fontSize: 17, fontWeight: 700, lineHeight: 21}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 500, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 14
  section-gap: 24
  card-gap: 8
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 20
  map: 26
  sheet: 28
  pill: 999
components:
  location-control: {height: 44, treatment: "dark-translucent", foreground: "#FFFFFF", radius: 22}
  weather-card: {fill: "translucent-blue", foreground: "#FFFFFF", radius: 20, padding: 14}
  hourly-cell: {minWidth: 76, fill: "translucent-blue", foreground: "#FFFFFF", radius: 20}
  light-panel: {fill: "#FFFFFF", foreground: "#202126", radius: 20, padding: 14}
  task-action: {height: 52, fill: "#202126", foreground: "#FFFFFF", radius: 26}
---

# Overview

Yandex Weather has two connected visual modes. The main forecast is an immersive, condition-responsive blue field with a live map at the top, oversized white weather information, translucent data modules, and compact hourly cells. Deeper forecast, pollen, and map tasks move onto white analytical surfaces with dark text, restrained color encoding, and denser tables. The interface is data-rich but keeps the immediate condition legible before secondary metrics.

# Non-negotiable visual invariants

- The main screen is dominated by a continuous blue atmospheric field; it is not a white dashboard with independent weather cards.
- A rounded map viewport and location controls form the main screen header and remain visually connected to the forecast below.
- Current temperature and plain-language condition are the largest information block; units, time, and location remain attached to every value that needs context.
- Data modules use translucent blue-on-blue layering with little or no shadow. Light analytical pages use white and very pale gray surfaces instead.
- Hourly forecast is a compact horizontal sequence with condition imagery, time, and temperature held together in each cell.
- Risk color is local and accompanied by a label, value, legend, or timeline; color alone does not carry meaning.
- Weather pictograms, map data, and live condition texture are functional product imagery, not decorative replacements for missing content.

# Color and surfaces

The main screen shifts between bright sky blue, steel blue, deep navy, and near-indigo according to condition and time. Clear daytime states are brighter and more saturated; rain states add a darker vertical texture; night and severe-cold states deepen toward navy. This environmental field is the largest color mass.

Forecast cards, metric tiles, narrative strips, and hourly cells use lighter translucent blue fills over the same field. Their borders are faint or absent, and their corners remain generous. A map is a separate pale, detailed surface cropped into a large rounded frame. Dark translucent controls float over it without competing with labels and roads.

Detail screens and sheets use white or off-white canvases with near-black text and very pale gray grouped surfaces. Blue returns for links, current selection, map actions, and forecast graphics. Green, yellow, orange, and red encode increasing pollen or weather risk and must always remain paired with written meaning. Near-black is used for a small number of explicit task actions, not as the global accent.

# Typography

The weather hero uses a rounded, sturdy grotesk with generous counters and heavy weight. Temperature is the largest type, followed by a compact multi-line forecast statement. Large labels are direct and conversational rather than technical. The same family or a close substitute carries titles and metric headings.

Supporting forecasts, timestamps, values, units, legends, and explanatory copy use a neutral sans serif. Tables depend on aligned numerals and consistent unit placement. Secondary copy is smaller but stays legible against translucent fields; white screens use gray only for genuinely subordinate dates, units, and descriptions.

Use a rounded display sans with SF Pro as the body fallback when the original typeface is unavailable. Enable tabular figures in forecast grids and charts. Under Dynamic Type, keep a coherent temperature-condition group, allow narrative copy to wrap, and convert wide analytical tables into horizontal scrolling or focused subsections before compressing labels.

# Screen composition

The main screen is one long vertical forecast canvas. A shallow map occupies the upper portion, with location search and compact utilities over it. Immediately below, the current-condition region and a horizontally navigable metric area share the atmospheric background. Hourly cells form a continuous rail, followed by narrative summary, extended forecast, contextual activity shortcuts, and another map module.

## Current conditions

The current value and condition statement occupy a broad, uncluttered region. Secondary metrics appear as adjacent large tiles that can be browsed without displacing the location context. The hourly rail remains close to the hero so the next change is visible without opening a separate page.

## Extended forecast

The main screen presents multiple days as compact blue rows. A dedicated monthly forecast switches to a flat white list: date and weekday lead, condition pictogram sits near the values, and day/night temperatures align consistently. A more detailed forecast page uses date selectors followed by structured rows for morning, day, evening, night, wind, humidity, pressure, and other measurements.

## Analytical sheet

Pollen and similar topics rise as a large white surface over the retained main context. The sheet can combine a headline assessment, species selector, activity chart, map, symptom question, flowering calendar, and expandable explanations. Each module has its own pale grouping, but the sheet reads as one report rather than a stack of unrelated cards.

## Full-screen map

The map fills the screen below a compact top row. Layer and subtype controls float above the map; zoom controls sit within reach; a timeline spans the lower edge. The active time and interpreted condition remain visible, and any legend stays connected to the selected layer.

## Confirmation and reward

A compact condition confirmation stays attached to the current forecast. If the task expands, a white app-owned sheet asks for the observed condition. A reward presentation uses a large pale blue-white panel over the existing forecast or map, gives the object a dedicated central stage, and keeps variant choice and the single commitment action together.

# Navigation appearance

The observed product does not use a persistent tab bar. The main forecast is the home context; search changes the active place, while forecast rows, metric modules, and map actions open focused details. Detail pages use a minimal top row with a back control and centered title. Large analytical sheets use a centered title and close control, preserving the underlying forecast as context.

Map tasks use floating pill controls and a bottom timeline rather than a conventional navigation bar. Use this hierarchy only where the adapted product has the same relationship between overview, detail, and spatial exploration; do not introduce map navigation or location search merely to mimic the source.

# Components

## Location and map header

A large rounded map crop with a dark translucent location field, circular utility controls, a visible place pin, and a blue map action. Text and road detail remain readable beneath the overlay. The map crop should not be replaced by a generic gradient banner.

## Current-condition hero

A large temperature, condition pictogram, feels-like value, and short plain-language forecast set directly on the atmospheric field. The block has generous internal space and no opaque card behind its main text.

## Metric tile

A large translucent rounded module with a short condition label, one primary value or gauge, and a supporting sentence. Adjacent tiles share scale but not invented data. Small gauges use a visible marker and explicit unit.

## Hourly cell

A compact rounded cell containing time, product-specific condition pictogram, and temperature. Special events such as sunset may replace temperature with a short event label. The selected or current hour uses a brighter blue field while adjacent hours remain translucent.

## Forecast row and data table

Extended forecast rows use consistent columns and restrained separators. Dense detailed forecasts group related values by period and use pale highlighting only where it conveys risk or change. Do not wrap every measurement into a separate floating card.

## Analytical sheet and disclosure row

A white sheet with large upper corners and grouped report modules. Species or period selectors use compact pills. Disclosure rows use a short question and chevron; expanded state reveals body copy within the same group.

## Task action

A near-black full-width pill with white medium-weight text for one clear continuation. Lightweight selection and navigation actions should not all inherit this treatment.

# Imagery and icons

Weather conditions use a coherent family of compact, softly modeled pictograms: white or pale-blue clouds, yellow sun and moon discs, and small rain or snow marks. These are domain graphics and must remain recognizable at both hero and hourly sizes. They should not be replaced with an inconsistent mix of emoji and SF Symbols.

Maps, precipitation fields, pollen overlays, chart fills, and rain texture are data-bearing imagery. Preserve labels, legends, selected time, and geographic context. Botanical photography appears in a pollen introduction, while a rendered umbrella appears in a reward task; these isolated assets do not establish a reusable product-wide illustration language.

System-owned permission dialogs and ordinary back, close, share, search, location, zoom, and disclosure controls may use familiar native or system-style icons. Keep them visually subordinate to weather data.

# States

Observed states include launch, location permission, notification permission, tracking permission, clear day, clear night, cloud, rain, snow, severe cold, horizontally selected metric groups, different active hours, scrolled extended forecast, white monthly forecast, detailed data table, collapsed and expanded pollen explanations, pollen species and risk selections, pollen map and timeline, full precipitation map, weather confirmation, mismatch selection, acknowledgement, locked reward variant, available reward variants, and the selected object shown on a map.

Environmental states may change the main background, condition texture, pictogram, and data while preserving the screen hierarchy. Selection in light reports uses dark or blue emphasis; current time uses a visible marker. Permission prompts remain native. Confirmation replaces the choice with acknowledgement locally, and locked reward choices explain the remaining requirement without masquerading as available.

# iOS adaptation

Use a custom `ScrollView` for the main atmospheric canvas so the map, condition field, translucent modules, hourly rail, and extended forecast remain one composition. Remove default list backgrounds and row chrome from analytical pages. Respect safe areas for location controls and detail navigation while allowing atmospheric color and map content to extend edge-to-edge.

Use native authorization dialogs for location, notifications, and tracking. App-owned analytical surfaces may use sheets or full-screen covers according to the observed depth, but must preserve the main forecast context when dismissed. Keep map controls, hourly cells, selectors, and close actions at least 44 points and ensure the timeline remains operable without covering map labels.

For VoiceOver, announce place and observation time before condition, combine each temperature with its period and unit, expose gauge meaning as text, and pair risk colors with the written category. Treat charts and maps as summarized data first, then expose interactive selectors. Under larger text, stack metric tiles or allow horizontal browsing, keep legends adjacent to their data, and avoid truncating the weather statement.

# Anti-generic checklist

- Do not turn the main forecast into a white card dashboard.
- Do not separate the top map from the atmospheric forecast with unrelated navigation chrome.
- Do not use one static blue regardless of day, night, rain, or severe cold.
- Do not hide time, unit, place, legend, or selected layer from data that depends on it.
- Do not rely on green-to-red color alone for risk or warning meaning.
- Do not replace the condition-pictogram family with emoji or arbitrary SF Symbols.
- Do not copy weather-specific maps, pollen modules, or reward objects into an adapted product that has no equivalent content.
- Do not present every metric as an identical raised card or apply one density to both the hero and analytical tables.
</design-context>
