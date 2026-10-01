<design-context>
---
version: 1
platform: iOS
name: 2GIS-design-analysis
description: "A map-first mobile interface built from a pale detailed map, white floating sheets, and saturated green route actions. Compact system typography, blue spatial markers, transport icons, and persistent edge controls keep navigation legible while recommendation cards and vivid 3D onboarding scenes add personality."
colors:
  primary: "#19C83A"
  on-primary: "#FFFFFF"
  accent-blue: "#1688F5"
  accent-red: "#EF3D43"
  ink: "#202124"
  ink-muted: "#73777F"
  ink-subtle: "#A1A5AC"
  canvas: "#F5F4F1"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F4"
  surface-dark: "#10131A"
  hairline: "#E1E3E6"
  semantic-warning: "#F4B323"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.1 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  place-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  route-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  navigation-bar: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", height: 48 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [20, 16]}
---

# Overview

2GIS keeps the map visible through discovery, routing, navigation, weather, traffic, friends, and recommendations. White controls and sheets float over dense cartography; green confirms progress while blue marks spatial information.

# Non-negotiable visual invariants

- The sampled screens consistently show Persistent detailed map as the base surface.
- Preserve the map under every spatial task.
- Pair icons with time, distance, or status labels.
- Use green for the current primary action.
- Keep map controls clustered at edges.
- Move complex choices into sheets.
- The map fills the viewport.
- Sheets occupy the lower portion and may scroll.

# Color and surfaces

- **Green** ({colors.primary}): Route, confirmation, active progress, and selected state.
- **Blue** ({colors.accent-blue}): Location, parking, transit, and current-position markers.
- **Red** ({colors.accent-red}): Restrictions, incidents, and critical map symbols.

- **Map Canvas** ({colors.canvas}): Pale geographic base.
- **Surface 1** ({colors.surface-1}): Search, controls, cards, and sheets.
- **Surface 2** ({colors.surface-2}): Nested rows and inactive chips.
- **Dark Surface** ({colors.surface-dark}): Onboarding and night navigation.

- **Ink** ({colors.ink}): Place names, route metrics, and actions.
- **Ink Muted** ({colors.ink-muted}): Addresses, timing detail, and descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and low-priority labels.

- **Warning** ({colors.semantic-warning}): Traffic, weather, and attention markers.
- **Overlay** ({colors.semantic-overlay}): Scrim under modal sheets.

# Typography

- **System Sans** — all map labels, sheets, metrics, menus, and controls.
- **System Mono** — optional for coordinates or technical values only.

- `{typography.display-lg}` — 30 points — 700 — Onboarding statement
- `{typography.headline}` — 21 points — 600 — Sheet heading
- `{typography.card-title}` — 16 points — 600 — Place and route title
- `{typography.body}` — 14 points — 400 — Default labels
- `{typography.caption}` — 11 points — 500 — Map and transfer metadata
- `{typography.button}` — 15 points — 600 — Primary action

- Put time, distance, and place names before explanation.
- Keep map labels compact and avoid decorative type.
- Use weight and spatial grouping before extra color.
- Maintain legibility on both map and photo backgrounds.

Use **SF Pro**, **Inter**, or **Roboto** with compact mobile metrics and clear Cyrillic support.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Map controls sit 8–12 points from edges; sheets use 16 points interiors; route cards use 12–14 points gaps.

The map fills the viewport. Sheets occupy the lower portion and may scroll. Route alternatives use horizontal cards; mode choices use a compact horizontal strip.

Whitespace belongs inside floating surfaces, not across the map. Keep the map readable by clustering controls at edges and limiting simultaneous cards.

Use soft shadows and sheet overlap. Reserve dramatic lighting and glossy depth for onboarding illustration.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Search, Trips, Navigator, Friends, and Tips form the bottom bar. Edge controls handle layers, zoom, location, and menu. Navigation mode reduces chrome to driving essentials.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are green rounded rectangles with white semibold labels. Secondary actions use white or pale gray. Circular map controls group one function per button.

Place cards combine title, category, rating, address, and photo. Route cards prioritize duration, arrival time, transfers, and mode icons. Recommendation cards can include image or illustration.

Search uses a white rounded field with microphone. Destination forms keep start and end visible together. Sheets handle floors, entrances, final points, and privacy choices.

Traffic, weather, route incidents, parking, and friend status use explicit labels plus icons. Selected route is reinforced by green line and action.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Place photos use rounded landscape crops. 3D onboarding objects remain centered and fully visible. Map markers use compact circles, pins, and speech-bubble forms.

Map stays full bleed. Place photography uses cover with safe subject crops. 3D onboarding uses contain on a dark field.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Traffic, weather, route incidents, parking, and friend status use explicit labels plus icons. Selected route is reinforced by green line and action.

- **Warning** ({colors.semantic-warning}): Traffic, weather, and attention markers.
- **Overlay** ({colors.semantic-overlay}): Scrim under modal sheets.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Maintain 44 points for map controls, markers, tabs, route modes, and sheet rows. Separate zoom, close, and recenter actions.
- Collapse route alternatives to horizontal paging before hiding metrics. Let sheets expand vertically. Reduce recommendation cards before shrinking map controls.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not obscure the route with oversized cards.
- Do not use green for unrelated decorative content.
- Do not rely on marker color alone.
- Do not add dense text directly on the map.
- Do not bring onboarding 3D effects into navigation controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
