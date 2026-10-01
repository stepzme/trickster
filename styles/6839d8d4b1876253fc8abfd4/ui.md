<design-context>
---
version: 1
platform: iOS
name: mts-urent-design-analysis
description: "A map-first rental interface with a pale 2GIS canvas, charcoal mobility pins, a violet scan action, and white bottom sheets that stage vehicle choice, tariff, ride, and completion."
colors:
  map-canvas: "#F2F2F4"
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F6F3F8"
  surface-muted: "#ECE9EF"
  accent-primary: "#7B3FF2"
  accent-secondary: "#A789FF"
  text-primary: "#17171A"
  text-secondary: "#6E6B73"
  text-tertiary: "#A5A1AA"
  marker: "#44414B"
  success: "#24D58E"
  warning: "#FF4965"
  divider: "#E7E3EA"
  overlay: "#17151C"
typography:
  campaign: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 34}
  page-title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  sheet-title: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  vehicle-title: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 600, lineHeight: 22}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 500, lineHeight: 17}
  metadata: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
spacing:
  screen-horizontal: 16
  sheet-padding: 16
  section-gap: 20
  card-gap: 8
  control-gap: 12
rounded:
  compact: 10
  control: 14
  card: 18
  sheet: 24
  circle: 999
components:
  scan-action: {height: 64, fill: "#7B3FF2", foreground: "#FFFFFF", radius: 32}
  primary-action: {height: 54, fill: "#7B3FF2", foreground: "#FFFFFF", radius: 14}
  map-control: {height: 48, fill: "#FFFFFF", foreground: "#17171A", radius: 24}
  vehicle-marker: {minHeight: 32, fill: "#44414B", foreground: "#FFFFFF", radius: 16}
  task-sheet: {minHeight: 180, fill: "#FFFFFF", foreground: "#17171A", radius: 24}
  option-tile: {minHeight: 88, fill: "#F6F3F8", foreground: "#17171A", radius: 16}
---

# Overview

MTS Urent keeps a live 2GIS map visible through most discovery and ride states. Dark vehicle markers, dashed parking boundaries, a central violet scan action, and small white map controls form the persistent shell. Information rises from the bottom only when a decision is needed: vehicle selection, tariff, payment, active ride, help, parking proof, or feedback. Full white pages are reserved for focused account and form tasks; saturated gradients are limited to subscription and campaign moments.

# Non-negotiable visual invariants

- The map is the primary canvas for discovery and active rides; it is not reduced to a thumbnail above a dashboard.
- Available vehicles use compact charcoal map pins with a small vehicle pictogram and a mint availability or battery accent.
- The scan action remains the strongest persistent map control and sits near the bottom center in violet.
- Vehicle, tariff, ride, and support information rises in white sheets while enough map remains visible to preserve location context.
- Primary rental actions use violet; success and battery readiness use mint, while blocking restrictions use explicit warning treatment.
- Controls around the map are small white circles or compact pills with restrained separation rather than heavy card shadows.
- Account and legal tasks move to calm white pages with grouped pale surfaces and compact black text.

# Color and surfaces

The base map is pale gray with quiet streets, green parks, blue water, and legible route or boundary lines. App chrome must not repaint the geography. Vehicle pins are charcoal so dense clusters remain readable; a selected vehicle changes to violet and may gain a label. Parking counts use dark compact pills, prohibited or restricted areas use outlined red marks, and mint communicates battery or positive readiness.

White sheets, floating circles, and account pages form the main app surface. Pale lavender-gray groups separate tariff choices, profile sections, and form rows. Violet runs from approximately `#7B3FF2` to lighter lavender in primary controls, selected tariffs, premium badges, and subscription fields. Use red-pink only for restrictions, destructive actions, or stop/end markers. Do not substitute default iOS blue for rental commitment.

Depth is shallow: a soft edge or subtle shadow lifts controls from the map, while adjacent groups on white pages rely on spacing and pale fills. A dim scrim appears only when a sheet requires focus. Camera scanning is near-black because it exposes the live camera feed, not because the product has a dark theme.

# Typography

Use SF Pro Display for 24/29 page titles and 30/34 campaign statements; use SF Pro Text elsewhere. Sheet titles use 20/25 bold, vehicle names and major ride status use 17/22 semibold, body text uses 15/20 regular, labels use 13/17 medium, and map or tariff metadata uses 11/15 regular.

Prices, elapsed time, distance, battery, vehicle number, and tariff terms align as compact numeric facts. Use tabular numerals for timers, costs, and distances. Campaign type may be uppercase and heavy, but operational screens remain sentence case. With Dynamic Type, allow sheets to grow and scroll, keep numeric summaries grouped with their labels, and never shrink map actions or tariff terms below legibility.

# Screen composition

The default frame is edge-to-edge map. A premium badge occupies the upper left; zoom and layers form a vertical group on the right; menu and location sit near the lower corners; the scan action anchors the bottom center. Vehicle and parking markers occupy the map itself. Selecting an object raises a bottom sheet between roughly one quarter and one half of the viewport.

## Map discovery

The map remains unobstructed through most of the viewport. Marker density changes with zoom, while parking areas and restrictions remain spatially attached. The scan action sits above the home indicator with menu and location controls balanced to either side.

## Vehicle and station sheet

A compact handle introduces the sheet. Vehicle or station identity, number, battery or availability, and local address appear first. Tariff options form a horizontal rail or compact row near the bottom. The primary action remains full width and close to the safe area without covering facts.

## Scanner and rental setup

The scanner uses a live camera field with a large four-corner target, a short instruction above, and close, light, and manual-entry controls near the bottom. After recognition, a vehicle summary and tariff rail rise over the camera or map. Tariff review expands into a white task sheet with one large violet plan block, costs, payment, insurance, promo code, and a bottom commitment action.

## Active ride

The map stays visible above a persistent ride sheet. Cost, time, and distance form a single summary row, followed by vehicle state and battery. Help and lock controls occupy paired tiles; pause and end actions sit at the bottom, with end visually distinct from the primary violet actions.

## Completion and proof

Parking proof becomes a full-screen camera with a large central shutter and a short instruction attached near the target. Review and feedback return to white sheets over the map, using direct totals, problem choices, and one completion action. Loading or vehicle checking may temporarily become a sparse full-screen white state.

## Menu and account tasks

The menu is a tall white sheet over the map. Identity and account-linking appear first, followed by a premium banner and a two-column matrix of wallet, discounts, help, rules test, history, and payment destinations. Profile, history, promo code, payment, and legal pages use full-screen white composition with pale grouped sections.

## Campaign surfaces

Subscription and age-verification offers may use a violet-to-sky gradient, one large scooter or benefit composition, and a white information panel anchored at the bottom. These are focused campaign exceptions, not the default styling for rental operations.

# Navigation appearance

There is no persistent tab bar. Map controls act as the primary visual navigation: menu, scanner, location, layers, zoom, markers, and selected-object sheets. Controls are circular or short pills with white fill; the scanner is the single large violet exception.

Full-screen account tasks use a compact back control and centered or left-aligned title. Sheets use a small drag handle and large top corners; focused scanner and campaign modes use Close. The adapted product should preserve this map-and-sheet hierarchy only when spatial context is real, and should not add a conventional tab bar to imitate a generic app shell.

# Components

## Vehicle marker

A charcoal rounded pin contains a white scooter or bike symbol and a narrow mint status line. Selected state changes the body to violet and may extend into a short label with vehicle number. Cluster or parking counts use compact dark pills. Markers must remain distinct from native map labels at every supported zoom.

## Scan action

The map version is a violet circle around 64 points with a centered QR-corner symbol. In later captures it may widen into a violet pill with an explicit scan label, but it remains centered and dominant. Pressed state deepens the violet; disabled or loading state keeps the same position and announces status.

## Map control

Menu, current location, layers, light, and close controls use 44–48 point white circles with dark simple symbols. Zoom uses two stacked square-ended controls inside one white vertical group. Notifications may attach as a small red dot without changing the symbol.

## Task sheet

The white sheet has 24-point upper corners, 16-point side padding, a centered handle, and compact internal groups. It can collapse for a vehicle preview and expand for tariffs, support, or feedback. Avoid nested shadows; separate decisions with pale grouped surfaces and 8–12 point gaps.

## Tariff choice and primary action

Tariffs use a horizontal set of colored compact cards or one large violet plan header followed by aligned price facts. Selection needs a clear outline or fill plus text. The primary action is a 54-point violet rounded rectangle with white semibold text. Disabled state uses a pale neutral surface; progress preserves the control footprint.

## Ride summary

Cost, timer, and distance share one horizontal row with equal visual weight. Vehicle status below includes identity and battery. Pause is a light secondary action; End uses dark charcoal with a small red stop mark. Both retain explicit labels.

## Form and feedback controls

Phone, code, promo, and profile fields use pale fills, clear labels, and native keyboards. Option tiles, toggles, and problem chips expose selected state with violet outline, fill, or check. Success may use a centered violet check or a short mint banner; loading uses a local activity indicator and explanatory status.

# Imagery and icons

The 2GIS map is functional imagery and must remain readable beneath app controls. Vehicle photos and small scooter renders identify a selected asset; station photos provide factual location context. Use contain or restrained crop so vehicle type and station remain recognisable. Ride-ending camera imagery is user-captured proof, not decoration.

Campaigns may contain polished scooter renders, benefit objects, photography, or metallic recap badges, but the viewed campaigns do not establish one reusable illustration system across the operational product. Treat them as supplied campaign assets. Do not extrapolate their style into map markers, account icons, or routine empty states.

Use coherent simple symbols for QR scan, menu, location, layers, zoom, help, lock, payment, history, and disclosure. Vehicle markers and branded service marks are custom assets; do not replace them with arbitrary SF Symbols.

# States

Observed states include empty and dense map areas, normal and selected vehicles, parking and restricted zones, layer toggles, scanner before and after camera acquisition, recognized vehicle, tariff options, promo entry, payment handoff, applied discount, vehicle checking, active ride, support overlay, pause or lock actions, parking-photo capture, ride feedback, cost breakdown, phone verification, notification permission, account linking, profile update success, and subscription selection.

Map state remains visible through selection and active ride. Loading preserves the current task and names what is being checked. Success uses a check, status text, or short confirmation banner. Restriction warnings identify the blocking requirement and route to resolution. Camera and permission states use native system behavior while returning to the pending rental task.

# iOS adaptation

Use a native map integration for geography, camera APIs for scanning and parking proof, and custom app overlays for markers, controls, and sheets. Respect the top safe area without moving map content into an artificial header. Let the map extend under controls and the home indicator; sheets and primary actions must respect bottom safe-area insets. Use detents only when each height preserves required facts and the map context.

Keep every map control, chip, marker action, tariff, and sheet action at least 44 points tappable. VoiceOver should expose map controls first, then nearby or selected vehicles in a predictable list, followed by the active sheet; announce vehicle type, number, battery, distance, tariff, ride state, and restrictions without relying on color. At large Dynamic Type, allow task sheets to expand or scroll, stack the ride summary if necessary, and preserve the scan and end actions. Keyboard presentation must not hide promo, phone, or verification completion.

# Anti-generic checklist

- Do not replace the live map with a white dashboard of nearby-vehicle cards.
- Do not add a conventional bottom tab bar to the observed map-and-sheet hierarchy.
- Do not color every sheet violet; operational facts live on white and violet stays concentrated in selection and commitment.
- Do not use generic map pins for scooters, bikes, stations, parking counts, and restrictions.
- Do not cover the map with a full-height sheet before the task requires focused detail.
- Do not reuse one-off subscription or recap artwork as the product-wide illustration language.
</design-context>
