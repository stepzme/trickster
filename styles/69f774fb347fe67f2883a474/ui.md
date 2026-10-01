<design-context>
---
version: 1
platform: iOS
name: BelkaCar-design-analysis
description: "A map-first car-sharing interface built from cool cobalt blue, white floating sheets, black utility type, bright pink tariff contrast, and realistic vehicle cutouts. Discovery, reservation, inspection, active rental, parking, support, and completion remain centered on the live map and current car state."
colors:
  primary: "#1E5CCE"
  on-primary: "#FFFFFF"
  primary-soft: "#E5EEFF"
  accent-pink: "#F02D8A"
  accent-red: "#F04444"
  accent-green: "#24A866"
  ink: "#111319"
  ink-muted: "#737984"
  ink-subtle: "#A7ADB6"
  canvas: "#F3F5FA"
  surface-1: "#FFFFFF"
  surface-2: "#E9EDF4"
  hairline: "#DCE1EA"
  semantic-success: "#24A866"
  semantic-danger: "#F04444"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.9 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 7, sm: 11, md: 15, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.full}", padding: 12 }
  reservation-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  tariff-card: { backgroundColor: "{colors.accent-pink}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  menu-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  navigation-bar: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: [10, 12]}
---

# Overview

BelkaCar keeps vehicle location, service zone, route, time, and cost visible on the map. White sheets handle reservation and rental state; blue progresses the trip, pink distinguishes longer tariffs, and red ends it.

# Non-negotiable visual invariants

- The sampled screens consistently show Full-screen live map.
- Keep map, vehicle, and zone visible.
- Show current cost throughout rental.
- Require inspection before driving.
- Make pause and finish distinct.
- Keep support and refueling guidance close.
- The map fills the viewport.
- Controls float at edges; a bottom sheet expands from vehicle preview to reservation, inspection, active rental, pause, and completion.

# Color and surfaces

- **Belka Blue** ({colors.primary}): Reservation, trip progression, and brand.
- **Tariff Pink** ({colors.accent-pink}): Long fixed tariff.
- **Red** ({colors.accent-red}): End trip and problems.
- **Green** ({colors.accent-green}): Valid zone and completion.

- **Canvas** ({colors.canvas}): Map and app background.
- **Surface 1** ({colors.surface-1}): Sheets, menus, and controls.
- **Surface 2** ({colors.surface-2}): Disabled action and secondary status.
- **Hairline** ({colors.hairline}): List separation.

- **Ink** ({colors.ink}): Vehicle, cost, and actions.
- **Ink Muted** ({colors.ink-muted}): Address, tariff, and help.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

- **Success** ({colors.semantic-success}): Valid inspection and completed state.
- **Danger** ({colors.semantic-danger}): Problem and trip completion.
- **Overlay** ({colors.semantic-overlay}): Menu and modal focus.

# Typography

- **SF Pro Display** — cost and major state headings.
- **SF Pro Text** — map labels, checklists, and menus.
- **SF Mono** — trip or vehicle codes only.

- `{typography.display-xl}` — 38 points — 700 — Live cost
- `{typography.headline}` — 22 points — 700 — Vehicle or state heading
- `{typography.card-title}` — 16 points — 600 — Tariff and checklist title
- `{typography.body}` — 14 points — 400 — Address and help rows
- `{typography.caption}` — 10 points — 400 — Map and timing metadata
- `{typography.button}` — 14 points — 600 — Reserve, start, pause, finish

- Keep current price and time prominent.
- Use imperative labels for trip steps.
- Show address and distance together.
- Keep map labels compact.

Use **Inter** or the platform system sans when SF Pro is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points sheet gutters, 12 points control gaps, and 16 points sheet padding.

The map fills the viewport. Controls float at edges; a bottom sheet expands from vehicle preview to reservation, inspection, active rental, pause, and completion.

Maps provide ambient detail; sheets must stay uncluttered so the next physical-world action is obvious.

Use realistic vehicle cutouts and map perspective. Avoid decorative shadows beyond floating control separation.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

The map uses hamburger, promo, tools, and location controls. A slide-out menu holds history, payment, support, insurance, promo codes, FAQ, business, and account.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Blue reserves, starts, resumes, or confirms. Pink selects day tariff. Red ends a trip. Disabled state is pale gray and must explain prerequisites.

Reservation sheets pair route, vehicle cutout, tariff, fuel, insurance, and bonuses. Active rental sheets show time, cost, help, and trip actions.

Registration and verification use one field or document task per screen. Inspection uses photo count, checklist, problems, and a fixed next action.

Show free reservation time, verification, fuel, documents, inspection progress, pause, zone, cost, debt, rating, bonus, and completion state explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use realistic isolated vehicle cutouts on reservation sheets and tiny top-down vehicle markers on maps. Do not invent decorative illustration.

Contain vehicle cutouts and preserve the full silhouette. Maps fill available space and maintain readable labels and controls.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show free reservation time, verification, fuel, documents, inspection progress, pause, zone, cost, debt, rating, bonus, and completion state explicitly.

- **Success** ({colors.semantic-success}): Valid inspection and completed state.
- **Danger** ({colors.semantic-danger}): Problem and trip completion.
- **Overlay** ({colors.semantic-overlay}): Menu and modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep map controls, vehicle markers, tariff cards, checklist rows, and trip actions at least 44 points.
- Collapse the sheet before shrinking map controls. Preserve cost, time, vehicle, and next action in the compact state.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not cover the map with tall static chrome.
- Do not hide parking restrictions.
- Do not use pink for safety-critical actions.
- Do not allow finish without checklist state.
- Do not replace vehicle evidence with illustration.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
