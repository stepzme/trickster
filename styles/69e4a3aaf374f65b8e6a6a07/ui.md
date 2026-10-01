<design-context>
---
version: 1
platform: iOS
name: Citydrive-design-analysis
description: "A map-first car-sharing interface combining a very light 2GIS map, deep-navy control docks, vivid green booking actions, purple active-rental actions, black totals, and clean vehicle cutouts. Search, radar, car detail, tariffs, inspection, active rental, completion, long-term rental, balance, support, and zones remain operational and safety-led."
colors:
  primary: "#2CCB66"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F9EE"
  accent: "#6D27E8"
  accent-secondary: "#080720"
  ink: "#17181A"
  ink-muted: "#70757A"
  ink-subtle: "#A5AAAE"
  canvas: "#F7F8F9"
  surface-1: "#FFFFFF"
  surface-2: "#EFF1F3"
  hairline: "#DDE1E4"
  semantic-success: "#2CCB66"
  semantic-danger: "#D83D4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Citydrive uses the map as the live operating surface and bottom sheets for vehicle, tariff, inspection, door, and rental decisions.

# Non-negotiable visual invariants

- The sampled screens consistently show Very light full-screen map.
- Preserve live map context.
- Show running cost.
- Make door state explicit.
- Require inspection before driving.
- Keep zone boundaries visible.
- A full-screen map supports floating search controls and a deep bottom dock.
- Vehicle, booking, and rental details rise in bottom sheets without replacing the map.

# Color and surfaces

- **Primary** ({colors.primary}): Booking, opening, confirmation, and permitted progress.
- **Accent** ({colors.accent}): Active rental and end-rental emphasis.
- **Secondary Accent** ({colors.accent-secondary}): Persistent map dock and dark operational chrome.

- **Canvas** ({colors.canvas}): Map, menus, history, and account.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **SF Pro Display** — cost, vehicle, and task headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

- Keep vehicle, location, cost, and rental state visible.
- Use green for safe forward action.
- Use purple only during active rental.
- Separate map context from detail sheets.

Use **Inter** or the platform system sans when the reference display face is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

A full-screen map supports floating search controls and a deep bottom dock. Vehicle, booking, and rental details rise in bottom sheets without replacing the map.

Keep map controls sparse and sheets compact enough to preserve geographic context.

Use sheet elevation over the map and isolated real vehicle cutouts. Avoid decorative depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Map and bottom dock anchor the experience; menu holds balance, payment, trips, fines, support, zones, promos, and useful tools.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Green commits booking and door actions; purple ends an active rental; dark neutral buttons handle secondary vehicle control.

Vehicle sheets show model, plate, fuel, walk time, insurance, tariff, and price. Active rental keeps live cost and door state visible.

Registration, documents, promo, address, payment, comments, and support use focused forms with explicit validation.

Show available, reserved, inspecting, doors open or closed, active, ending, completed, debt, zone, and radar search through label plus color.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use accurate vehicle cutouts and user-captured inspection photos. Maps remain functional, with clear zone lines and markers.

Contain the full vehicle cutout and preserve inspection photos as evidence. Let the map crop fluidly around active markers and zones.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show available, reserved, inspecting, doors open or closed, active, ending, completed, debt, zone, and radar search through label plus color.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every row, tab, selector, map control, and primary action at least 44 points.
- Preserve map, vehicle, running cost, door state, and active action. Collapse secondary car attributes first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use car images as decoration.
- Do not hide tariff changes.
- Do not reuse purple outside active rental.
- Do not obscure the map with tall sheets.
- Do not end rental without confirmation.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
