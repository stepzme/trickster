<design-context>
---
version: 1
platform: iOS
name: Bolt-design-analysis
description: "A map-led mobility interface where live route context sits behind compact white bottom sheets, wide green commitment actions, shallow neutral cards, thin monochrome controls, a three-item tab bar, and isolated service-object renders."
colors:
  canvas: "#F4F5F4"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEFEE"
  accent-primary: "#00A85A"
  accent-secondary: "#2864DC"
  text-primary: "#1D1F20"
  text-secondary: "#6D7275"
  divider: "#E0E3E4"
  destructive: "#D83B45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 16
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#00A85A", text: "#FFFFFF", radius: 999, height: 52}
  map-sheet: {fill: "#FFFFFF", radius: 24, handle: "short gray capsule"}
  service-tile: {fill: "#F4F5F4", radius: 14, media: "isolated object render"}
  navigation: {fill: "#FFFFFF", selected: "#1D1F20 or green", unselected: "#6D7275"}
---

# Overview

Bolt is a direct utility interface built around two large visual fields: a live map and a white decision surface. On location-focused screens the map remains visible across roughly half or more of the viewport, while compact rounded sheets carry addresses, transport choices, price, and status. Green is reserved for brand and commitment. Non-map screens use white and pale gray, shallow cards, bold compact headings, and sparse thin icons. Realistic service-object renders identify entry tiles but do not form a broad illustration language.

# Non-negotiable visual invariants

- White and pale-gray utility surfaces dominate, with green reserved for brand and primary commitment.
- Location-focused archetypes retain visible live-map context behind a rounded bottom sheet.
- Primary actions are wide green pills positioned near the lower edge of the active surface.
- Map controls are floating white circles with thin dark glyphs and restrained elevation.
- Cards are shallow white or light-gray modules with modest radii rather than oversized decorative containers.
- The three-item bottom bar uses compact icons and labels with a restrained selected state.
- Side navigation appears as a broad white drawer over a dimmed underlying screen.
- Service-entry imagery remains an isolated object or product render and does not replace operational map, price, or status information.

# Color and surfaces

White is the main sheet, drawer, card, and navigation surface; pale neutral gray fills the non-map canvas, secondary fields, and inactive tiles. Bolt green marks the dominant action, active service, success, and small brand moments. Blue belongs mainly to route and map information, with occasional violet or blue confined to promotional content. Primary text is near-black, supporting details are medium gray, and separators are cool pale gray. Destructive cancellation and blocking errors use red rather than green.

The main masses should remain live cartography, white controls, and one green action. Default iOS blue buttons, dark elevated card stacks, saturated map styling, or green applied to every surface would erase the observed hierarchy.

# Typography

Typography is a system-like sans with compact bold headings and clear weight contrast. Task and sheet titles sit around 20–24 points; service and option labels are semibold at 15–18 points; address, ETA, and condition text is regular at 13–15 points; metadata is small and gray. Price, time, and selected option receive weight before decorative size. Most content is left aligned, while onboarding and rating prompts may center their short statements.

Use SF Pro Display and SF Pro Text on iOS. Use tabular numerals for fares, time, and rating or tip values. Under Dynamic Type, wrap addresses and secondary detail, move metadata beneath the main label, and expand sheets vertically before reducing price or primary-action legibility.

# Screen composition

Map archetypes use an edge-to-edge map under the safe area, sparse floating controls near the top and sides, and a white bottom sheet occupying roughly 35–50 percent of the viewport. The sheet may grow for option selection or detail but should preserve enough map to communicate spatial context. Non-map home surfaces use a compact top area, destination entry, shallow service tiles, and a three-item bottom bar. Horizontal insets and sheet padding are commonly about 16 points, with 8–12-point gaps between option rows.

Observed archetypes include a service home with destination field and rendered service objects; route entry with keyboard; map plus ride-selection sheet; active-status and detail sheets over the route; a wide side drawer over dimmed content; payment selection rows; scooter map with reserve sheet; a native app-install handoff; and rating or tip surfaces with a centered prompt, star row, choice chips, and bottom action. Operational screens prioritize map and state; service renders appear only where choosing a category or product.

# Navigation appearance

The bottom bar is a white band with three evenly spaced icon-and-label items; inactive items are gray and selected treatment becomes darker or green without a large filled capsule. The side drawer covers about three quarters of the width, using black labels, left-aligned thin icons, occasional small badges, and generous row height. Map screens use floating circular menu, back, locate, and utility controls. Modal sheets have rounded top corners, a short centered drag handle, and a dimmed or still-visible source layer.

# Components

The primary button is a full-width green pill about 52 points high with a white semibold label. Secondary actions use white or pale-gray fills; destructive actions are visually separated and red when observed. Location fields are large light-neutral rounded rows with short labels, address text, and compact endpoint or search symbols.

Ride and payment rows are white, horizontally structured, and dense: a small vehicle or payment mark on the left, primary label and metadata in the middle, and price, radio, or state on the right. Selected options gain a clear outline, check, or green emphasis without filling the whole screen. Service tiles are shallow rounded modules with an isolated car, scooter, parcel, or food-related render. Map controls are circular and elevated just enough to separate from cartography. Rating uses large tappable stars and compact rounded tip chips.

# Imagery and icons

The live map is compositionally essential on ride and scooter archetypes; preserve route lines, relevant pins, and enough visible geography while sheets change height. Do not replace it with a blank gray field while map data is pending. Service tiles use realistic or lightly modeled isolated objects against clean neutral backgrounds. Payment-card visuals, App Store imagery, safety banners, and promotional art remain local assets rather than a reusable illustration system.

Interface icons are thin, monochrome, and functional. Green marks active or affirmative states; map blue communicates route information. Vehicle and service objects may be visually richer than the surrounding chrome, but they remain contained and must not obscure address, price, or status.

# States

Observed states include splash, system tracking permission, phone entry, home with different map prominence, keyboard-raised address search, selected transport option, active trip, expanded trip details, open side drawer, selected payment method, scooter map, reservation and payment sheet, reserved scooter, native App Store handoff, and rating with unselected or selected stars and tip chips. Across these states, white sheets, compact black text, thin icons, and a single green commitment action remain stable.

# iOS adaptation

Keep the map edge-to-edge while floating controls respect top and side safe areas. Bottom sheets, primary actions, and the three-item navigation bar must sit above the home indicator. Use a scrollable sheet when compact height or Dynamic Type would otherwise hide the selected option or action. Keep native keyboard, permission alert, App Store handoff, and sheet interaction behavior while styling surrounding controls to the recorded palette and geometry.

Maintain 44-point targets for fields, ride rows, drawer items, map buttons, stars, chips, and navigation. VoiceOver should announce the current task or status, a concise map summary, sheet content, and the primary action in visible order. On compact widths, stack metadata beneath labels and reduce secondary service content before shrinking price, ETA, or map context. If dark appearance is required without sampled evidence, preserve green action priority and map legibility rather than simply inverting all cartography and sheets.

# Anti-generic checklist

- Do not replace the map-and-sheet composition with a full-page generic form.
- Do not let a large sheet erase all live route or scooter context.
- Do not use default blue tint for the primary commitment action.
- Do not substitute an unstyled `TabView`, `List`, or `Form` for the recorded navigation, drawer, and rows.
- Do not make every surface a large floating white card with the same radius.
- Do not hide price, ETA, endpoint, or selected-option hierarchy behind decorative imagery.
- Do not treat service renders, payment cards, or one-off banners as a reusable illustration family.
- Do not replace required map or service-object imagery with arbitrary SF Symbols or emoji.

</design-context>
