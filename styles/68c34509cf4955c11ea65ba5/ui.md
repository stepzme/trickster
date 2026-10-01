<design-context>
---
version: 1
platform: iOS
name: Find-My-design-analysis
description: "A native location utility with pale full-screen maps, white draggable bottom sheets, system-blue selection, compact identity rows, floating map controls, translucent tab navigation, and system modal states."
colors:
  canvas: "#F5F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#3478E5"
  accent-secondary: "#30D158"
  text-primary: "#111216"
  text-secondary: "#6C6C70"
  divider: "#D1D1D6"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  map-sheet: {fill: "surface-primary", radiusTop: 24, handle: "centered", positions: "compact and expanded"}
  identity-row: {fill: "surface-primary", height: 56, leading: "avatar or device image", trailing: "status or action"}
  map-control: {fill: "surface-primary", size: 44, radius: 10, icon: "system line"}
  action-tile: {fill: "surface-primary", radius: 12, icon: "blue or semantic", label: "compact"}
  bottom-navigation: {fill: "translucent light material", selected: "blue", items: 4}
---

# Overview

Find My is a map-first native iOS utility in which a pale map usually occupies most of the viewport and white draggable sheets organize identities, statuses, and actions above it. System-blue selection, compact rows, floating square map controls, circular avatars or device imagery, and translucent bottom navigation produce a restrained functional hierarchy. Full-screen setup and modal states retain standard iOS spacing and typography rather than adding a separate branded layer.

# Non-negotiable visual invariants

- A pale map is the dominant field on location-oriented screens and remains visible behind compact or expanded white sheets.
- Bottom sheets use white surfaces, large rounded top corners, and a centered drag handle rather than floating card stacks.
- System blue marks selected navigation, map location, checks, links, outlines, and primary actions; red is isolated to destructive states.
- Identity rows pair a circular avatar, device image, or item glyph with primary text and compact gray status metadata.
- Floating map controls are small white rounded squares or circles with restrained shadows and dark system icons.
- Navigation and modal chrome use native iOS typography, spacing, alerts, action sheets, toggles, and keyboard treatment.
- Map imagery, avatars, and device or item assets remain functional content and are not replaced by decorative illustration.
- Expanded sheets and full-page forms preserve thin dividers, grouped surfaces, and clear 44-point action rows.

# Color and surfaces

The largest color field comes from pale map tiles: warm beige land, muted green areas, white roads, and soft blue water or location markers. White sheets and modal cards sit above the map, while full-screen forms and settings use grouped light gray around `#F2F2F7`. Thin gray separators organize rows; dim black overlays isolate alerts and sheets.

System blue around `#3478E5` identifies selection, location, navigation, text actions, checkmarks, and focused outlines. Green belongs to enabled toggles or positive availability, orange to warning or pending states, and red to removal, lost, erase, or destructive swipe states. Default system colors are appropriate here, but decorative brand palettes or broad colored backgrounds would break the restrained map-and-sheet system.

# Typography

Use SF Pro Display and SF Pro Text. Introductory or full-page titles are approximately 28-32 points bold, sheet headings around 20-22 points semibold, navigation and primary row text about 17 points, body 15-17 points, and addresses or status metadata 13-15 points gray. Blue edge actions remain regular-weight and compact.

Hierarchy relies on system weight, placement, and color rather than a custom face. Sheet titles and names are left-aligned; modal navigation titles are centered; alerts center their compact copy. Dynamic Type should increase row and sheet height, allow secondary location text to wrap, and preserve clear separation between identity, status, and action.

# Screen composition

The map-and-sheet archetype places a full-screen map behind a white bottom sheet. In its compact position, the map remains the majority of the viewport; in expanded positions, the sheet becomes a scrolling list or detail surface. Floating controls stack near the map edge above the sheet, and persistent navigation aligns to the lower safe area. Map markers use a blue dot, soft halo, or cone without competing decorative chrome.

The list/detail archetype uses 16-20 point insets, 44-60 point rows, thin separators, circular or aspect-fit leading imagery, and compact trailing status or actions. The action-grid archetype groups small rounded white tiles with blue or semantic icons. Full-page forms use generous empty space, large titles, native fields, and keyboard-safe bottom actions.

Modal archetypes include centered alerts, bottom action sheets, dimmed add/search sheets, and full-height setup or status pages. Grouped settings use light-gray canvas with rounded white blocks. At every level, surface depth comes from sheet overlap, material, and minimal shadow rather than decorative elevation.

# Navigation appearance

The bottom navigation uses translucent white material, four evenly spaced icon-and-label items, blue selected state, and gray inactive state. The count and appearance may inform adaptation, but destination names and product structure must come from approved Research and Planning.

Top navigation bars use compact blue text actions at the edges and a centered title where present. Back, close, add, edit, and completion controls retain native proportions. Bottom sheets expose a centered drag handle; alerts and action sheets use standard stacked iOS geometry over a dimmed backdrop.

# Components

The map sheet is a white surface with approximately 24-point top corners, a small centered gray handle, 16-point padding, and compact or expanded positions. Identity rows are roughly 52-60 points high, using a circular avatar, Memoji-like image, product image, or simple item glyph at the leading edge; primary name and gray status stack in the middle, with a concise trailing action when needed.

Map controls are 40-44 point white rounded squares or circles with dark system line icons and subtle shadow. Selectable map thumbnails use compact rounded crops, a blue focus outline, and checkmark. Action tiles use white fill, 12-16 point corners, blue or semantic symbols, and short labels.

Inputs, toggles, popovers, alerts, and action sheets preserve native iOS geometry. Enabled toggles are green; disabled actions are pale gray; selected rows use blue checks; destructive swipe reveals a solid red trash block. Modal primary actions use blue text or fill without creating a separate branded button language.

# Imagery and icons

Maps are the principal imagery and must retain enough visible area for spatial context. Avatars and Memoji-like identity images are circular, device and item images are aspect-fit, and small map-mode thumbnails preserve recognizable terrain. Do not crop informative map labels or enlarge identity assets until they compete with location status. These functional image regions cannot be omitted while final data or assets are pending; placeholders must preserve their scale and role.

System icons, device glyphs, item symbols, permission artwork, and isolated search or phone-outline graphics support specific states. They do not establish a reusable authored illustration system, so no decorative scene language should be inferred or added. Icon weight remains native and labels clarify ambiguous object glyphs.

# States

Observed states include compact and expanded map sheet, blue selected tab, current-location dot and halo, selected map thumbnail with outline and check, empty and populated search, keyboard form, green and gray toggles, permission alert, centered system alert, bottom action sheet, dimmed add/search modal, disabled action, red destructive swipe, full-page status form, password prompt, and edit or completion actions. Pale maps, white grouped surfaces, system type, and blue selection remain constant.

# iOS adaptation

Extend maps beneath the status and navigation regions while keeping markers, floating controls, sheet handles, and actions inside safe areas. Use native sheet detents or equivalent compact and expanded geometry, internal scrolling for long lists, keyboard avoidance for forms and search, and standard safe-area treatment for alerts and action sheets.

Tabs, map controls, rows, markers, action tiles, and navigation actions require at least 44-point hit targets. VoiceOver order should follow map context and selected location, floating controls, sheet title and rows, then bottom navigation; modal presentation should trap focus appropriately. On compact widths, let secondary addresses wrap or truncate before shrinking avatars, map controls, or hit areas. Dynamic Type should grow sheets and rows without fully obscuring the map when the compact state is shown. Preserve native light materials unless the approved product explicitly defines another appearance.

# Anti-generic checklist

- Do not replace the map with a decorative background or hide it behind a full-height generic card stack by default.
- Do not turn draggable sheets into unrelated floating cards with heavy shadows.
- Do not use red for ordinary navigation, selection, or location markers.
- Do not remove avatars, device images, item glyphs, map markers, or map thumbnails from their functional compositions.
- Do not style lists and forms as custom marketing panels or default web components.
- Do not use an unstyled `TabView` without the observed material, spacing, icon-label balance, and blue selection.
- Do not invent a decorative illustration system from permission icons or isolated instructional assets.
- Do not copy visible tab destinations, entity types, or flows into the adapted product.

</design-context>
