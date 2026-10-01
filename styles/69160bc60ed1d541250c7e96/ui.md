<design-context>
---
version: 1
platform: iOS
name: Windy-app-design-analysis
description: "A dark teal outdoor-weather dashboard built from layered blue panels, neon-mint actions, yellow Pro accents, full-color wind maps, white sport pictograms, compact forecast cards, and a highly structured personalization flow. The style feels technical yet recreational rather than institutional."

colors:
  primary: "#00F0B5"
  on-primary: "#063F46"
  primary-pressed: "#00C998"
  pro: "#F2C83B"
  ink: "#FFFFFF"
  ink-muted: "#B9D0D5"
  ink-subtle: "#73949C"
  canvas: "#0B3946"
  surface-1: "#204D5B"
  surface-2: "#2C5966"
  surface-3: "#173F4C"
  map-green: "#4BA865"
  map-yellow: "#D4BC45"
  map-red: "#B65351"
  hairline: "#FFFFFF24"
  semantic-success: "#00D7A6"
  semantic-warning: "#F2C83B"
  semantic-danger: "#ED5D67"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 9, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 10, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  forecast-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  activity-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10 }
  map-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12 }
  pro-badge: { backgroundColor: "{colors.pro}", textColor: "{colors.canvas}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: [3, 7]}
---

# Overview

Windy.app uses a stable deep-teal shell for outdoor planning, then lets weather maps and community photography add color. Neon mint makes selection and next action unmistakable.

# Non-negotiable visual invariants

- Keep mint exclusive to action and selection.
- Personalize around sport and spot.
- Preserve model, unit, time, and layer context.
- Use real outdoor content for community.
- Onboarding uses a single decision per screen.
- Home stacks forecast, nearest spot, map, favorites, route, community, and nearby lists.
- Keep dark panels clearly separated and avoid filling every gap with forecast detail.
- Maps and sport selection need broad visual breathing room.

# Color and surfaces

Use neon mint for primary action, active time, selected filters, routes, and locations. Yellow is reserved for Pro and rating emphasis.

Use deep teal canvas, layered blue-teal cards, darker side menu, and full-color weather maps.

Use white for headings and values, pale blue-gray for descriptions, and muted teal-gray for inactive or disabled content.

Use mint for normal success, yellow for premium or caution, red for dangerous weather, and the map legend strictly for magnitude.

# Typography

Use a modern system sans with tabular numerals and compact outdoor icon labels.

Use 25–32 points onboarding headings, 20 points card or screen headings, 13–17 points forecast values, and 9–11 points technical labels.

Keep sport, spot, time, unit, and condition aligned. Use bold for section titles and current values, not every row.

Use Inter or SF Pro with tabular figures; use a system mono only when dense timelines require it.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points card gaps, 12–16 points gutters, and 24 points between Home sections.

Onboarding uses a single decision per screen. Home stacks forecast, nearest spot, map, favorites, route, community, and nearby lists.

Keep dark panels clearly separated and avoid filling every gap with forecast detail. Maps and sport selection need broad visual breathing room.

Use real map texture, activity photography, subtle blurred outdoor backgrounds, and UI mockups. Avoid unrelated illustration or 3D objects.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a left side menu for Profile and services, while Home exposes search and map shortcuts. Deep forecast tools use local back, layers, and time controls.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary onboarding, favorite, route, and download actions are mint rounded rectangles. Secondary actions use transparent or dark teal outlines. Native controls must inherit these colors and radii.

Forecast cards combine spot, daily weather, wind bar, nearest action, and map preview. Community and nearby sections use compact dark rows.

Search, registration, unit settings, route creation, and notification forms use layered teal rows with white labels and mint completion action.

Use selected sport, nearest spot, favorite, Pro, offline, route, station, notification, archive, and community states in direct context.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use rounded community thumbnails and full-width weather maps. Sport pictograms remain crisp white silhouettes with no container when possible.

Maps fill their panel with readable labels. Use `cover` for community photos and outdoor backgrounds, and `contain` for sport pictograms and device mockups.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Use selected sport, nearest spot, favorite, Pro, offline, route, station, notification, archive, and community states in direct context.

Use mint for normal success, yellow for premium or caution, red for dangerous weather, and the map legend strictly for magnitude.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Sports, spot cards, search, map controls, layers, timeline, favorites, route, side menu, and Pro actions require at least 44 points targets.
- Keep selected spot, current forecast, next time window, map access, and primary activity action visible. Collapse community, guides, archive, and secondary services.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use yellow for ordinary selection.
- Do not flatten weather maps into generic cards.
- Do not overload Home with full technical tables.
- Do not retain default native blue controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

All 29 catalog flows were reviewed by structure with complete representative scenarios across onboarding, Home, Weather Map, Spot Forecast, and Profile. Some live weather and route transitions are video-only or not fully represented by stills.

</design-context>
