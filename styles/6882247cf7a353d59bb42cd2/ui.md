<design-context>
---
version: 1
platform: iOS
name: Yandex-Go-design-analysis
description: "A map-and-sheet mobility interface pairing pale cartography and white utility surfaces with saturated yellow actions, compact black type, floating circular controls, rounded bottom panels, and object-led service tiles."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F3"
  accent-primary: "#FFE22E"
  accent-secondary: "#20B866"
  text-primary: "#111111"
  text-secondary: "#8A8A8A"
  divider: "#E3E3E3"
  destructive: "#E24A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", height: 50, radius: 14, text: "text-primary semibold"}
  service-tile: {fill: "surface-secondary", radius: 18, imageRole: "centered dominant object"}
  bottom-sheet: {fill: "surface-primary", radiusTop: 28, grabber: "subtle gray"}
  map-control: {fill: "surface-primary", size: 44, radius: 999, shadow: "soft"}
  search-field: {fill: "surface-secondary", height: 48, radius: 14, text: "text-primary"}
---

# Overview

Yandex Go alternates between two dominant visual fields: pale full-screen cartography with layered white controls, and white utility canvases composed from soft-gray service tiles and dense rows. Saturated yellow is concentrated in branding, progress, and primary actions rather than spread across every surface. Recognizable depth comes from rounded bottom sheets, floating circular controls, and small object-led service imagery, not from generic card stacks or standard navigation bars.

# Non-negotiable visual invariants

- Saturated yellow remains the primary brand/action signal and is strongest in full-width low actions, progress, and selected emphasis.
- Map compositions keep a meaningful portion of pale cartography visible behind floating controls and rounded white sheets.
- White bottom sheets have large top corners, a subtle grabber, and generous home-indicator padding.
- Map controls are separate white circular buttons approximately 40-44 points across with soft shadow, never toolbar items inside a standard navigation bar.
- Primary actions sit low and span most of the available width with dark semibold text on yellow.
- Dense utility lists use 15-17 point dark labels, muted secondary metadata, fine dividers, and compact chevrons.
- Service tiles use pale surfaces with one centered, visually dominant object or miniature and a short subordinate label.
- Full-screen story compositions retain top progress marks, a close control below the status area, sparse bold type, and one dominant visual object.

# Color and surfaces

White is the principal sheet and utility canvas. Soft gray around `#F3F3F3` separates search fields, chips, service tiles, and secondary controls without heavy borders. Map screens use pale gray-green cartography around `#EEF3EC` as a full-viewport field. Saturated yellow around `#FFE22E` creates concentrated brand and action masses; green around `#20B866` appears as a secondary mobility or map accent.

Primary text is nearly black and secondary text is medium gray. Fine gray rules organize list rows. Promotional screens can introduce black-yellow gradients or isolated green fields, but these do not replace the white/map foundation of operational screens. Default system blue used as a global tint, or strong decorative map colors unrelated to cartography, would visibly break the reference.

# Typography

Use SF Pro as the iOS-safe substitute for the observed Yandex-style sans. Utility UI is compact: 15-17 point regular or medium row labels, 11-13 point gray captions and addresses, and 16 point semibold actions. Sheets use 20-24 point bold titles. Story and promotional screens rise to approximately 24-30 point heavy headings and may feel slightly more compressed than operational text.

Most utility copy is left-aligned and arranged for fast scanning; story text can be centered or placed high in the composition. Avoid negative tracking and preserve clear size steps. With Dynamic Type, grow sheet content and list rows while keeping captions subordinate, allowing addresses to wrap and retaining the low primary action as a distinct visual block.

# Screen composition

Map-first screens fill the viewport beneath the status safe area with pale cartography. White circular controls float near the edges, while a white sheet rises from the bottom and covers only the portion required by the current state. Sheets use roughly 16 point horizontal content insets, 10-16 point internal gaps, large rounded top corners, and bottom padding around the home indicator. Search bars and map markers remain visually separated from the sheet.

The service-dashboard archetype uses a white scroll surface, broad pale search field, two-column tiles or horizontal shortcut groups, and 10-12 point gaps. Each tile reserves substantial central space for an object image and keeps its label brief. The utility-list archetype uses full-width white rows, small leading icons, fine separators, chevrons, and restrained metadata. The story archetype is full-screen, with progress bars at the top, a close icon, sparse large text, and one large object or image occupying much of the remaining field.

Dimmed overlays and a left-side drawer may cover most of the underlying content while leaving its edge visible. Do not flatten these archetypes into the same container treatment: maps, sheets, dashboards, lists, and stories have deliberately different proportions.

# Navigation appearance

The sampled screens do not rely on a dominant standard iOS navigation bar or persistent tab bar. Navigation chrome appears as floating circular back controls, small menu buttons, close `X` controls, story progress bars, white rounded sheets, and a broad left-side drawer over a dimmed surface. These controls use dark glyphs, white or transparent bases, and compact visual footprints.

Sheet handles and top corners communicate layering; low yellow actions anchor the bottom safe area. The adapted product must take destinations and screen structure from its approved Research and Planning artifacts rather than copying the reference application's menu or service arrangement.

# Components

Primary actions are saturated yellow rounded rectangles approximately 48-52 points high with near-black semibold text. They normally span most of the screen width near the bottom. Secondary buttons are white or pale gray with dark icons and labels.

Bottom sheets are white, have approximately 28-point top corners, a subtle centered grabber when appropriate, and a soft edge shadow over maps. Search and address fields are 46-50 point pale-gray rounded bars with embedded icons. Suggestion and settings rows use small gray glyphs, dark labels, optional right-aligned metadata, fine dividers, and compact chevrons.

Service tiles are soft gray rounded rectangles arranged in two columns or horizontal groups. A centered object or miniature supplies most of the visual weight, with a short label near an edge. Map controls are independent 44-point white circles with dark glyphs and shallow shadow. Selection chips, rating stars, tip options, and feedback controls remain compact and use yellow only for meaningful emphasis.

# Imagery and icons

Operational screens combine real map imagery with compact rendered objects: vehicles, food, parcels, scooters, and other service motifs. These objects are softly modeled, centered, and large enough to define a tile, usually on pale neutral backgrounds with shallow shadow. Story and promotional surfaces may scale a single object much larger against white, yellow-black gradient, or green fields. Advertising and product photography also appear, so the imagery system is intentionally mixed rather than a single standalone illustration language.

Functional glyphs are simple, dark, and compact. Map pins and vehicle markers remain visually distinct from ordinary icons. When object imagery is compositionally important, retain its tile footprint with a generated or approved image asset; do not approximate the object with SwiftUI shapes or replace it with an arbitrary SF Symbol.

# States

Observed visual states include splash/loading, populated dashboard, destination search with keyboard, pickup adjustment, search-in-progress over a map, arriving vehicle information, active micromobility map, empty support chat, categorized support list, dimmed side drawer, rating and tip controls, and full-screen stories. Map, sheet, action, and typography treatments remain consistent while sheet height, marker density, and low controls change. Native keyboard and system surfaces remain native.

# iOS adaptation

Keep the map or base canvas full-bleed while placing tappable content within current safe areas. Floating controls need at least 44-point hit regions and must not collide with the Dynamic Island, status bar, keyboard, sheet, or home indicator. Implement sheets with scrollable content and detents that preserve enough visible map context; low actions require bottom safe-area padding.

On compact widths, retain two service columns only if object imagery and labels remain legible; otherwise use a horizontal rail or one-column list without shrinking tap targets. Dynamic Type may increase sheet height and row height, but must not eliminate the visual gap between title, metadata, and primary action. VoiceOver order should move from floating/top controls through primary content and sheet controls to the low action. Preserve the observed light operational appearance unless the approved product defines a separate dark state.

# Anti-generic checklist

- Do not replace map-and-sheet compositions with a generic white screen containing stacked cards.
- Do not use a standard large-title navigation bar where the reference uses floating controls or sheet chrome.
- Do not let a bottom sheet cover the entire map by default when spatial context is compositionally important.
- Do not substitute default blue tint for yellow actions or selection emphasis.
- Do not turn service tiles into text-only menu rows or remove their dominant object imagery.
- Do not use an unstyled `Form`, default list separators, or an unstyled `TabView` as the visual foundation.
- Do not apply one corner radius to search fields, service tiles, buttons, circular map controls, and sheets.
- Do not draw object imagery from SwiftUI primitives or arbitrary SF Symbols; use generated or approved image assets that preserve scale and material character.

</design-context>
