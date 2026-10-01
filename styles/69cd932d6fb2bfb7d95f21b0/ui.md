<design-context>
---
version: 1
platform: iOS
name: WB-Taxi-design-analysis
description: "A map-first ride interface built from a bright violet-to-magenta action gradient, translucent white route sheets, soft lavender canvas, black active-trip panels, compact vehicle cards, and minimal list-based account screens. Map context remains visible while each next decision rises from the bottom."

colors:
  primary: "#A91DFF"
  on-primary: "#FFFFFF"
  primary-start: "#7F25FF"
  primary-end: "#E410F2"
  primary-pressed: "#8A17D6"
  ink: "#151518"
  ink-muted: "#73737A"
  ink-subtle: "#A7A7AE"
  canvas: "#F4F2F8"
  surface-1: "#FFFFFF"
  surface-2: "#F7F6FA"
  active-surface: "#08080A"
  active-panel: "#222225"
  hairline: "#E7E4EB"
  semantic-success: "#27956A"
  semantic-warning: "#E2A23B"
  semantic-danger: "#E05259"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 19, fontWeight: 650, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  route-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  ride-class-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 12 }
  trip-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  active-trip-sheet: { backgroundColor: "{colors.active-surface}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
---

# Overview

WB Taxi keeps map context primary and turns each ride decision into a compact bottom sheet. Violet gradient action, translucent white layers, and a black driver-search state form the core rhythm.

# Non-negotiable visual invariants

- Keep the map visible through the ordering flow.
- Show only the current ride decision in each sheet.
- Use gradient for the single next action.
- Make active search visibly distinct in black.
- The map fills the screen.
- Route fields sit at top or bottom; class selection uses two columns; Profile becomes a one-column service sheet.
- Let the map provide visual space.
- Sheets should contain only the current decision and avoid carrying unrelated account content.

# Color and surfaces

Use a violet-to-magenta gradient for Order, Continue, and active pickup labels. Keep secondary controls black, white, or neutral gray.

Use the map as the base, translucent white route fields and sheets above it, pale lavender for profile screens, and black for active driver search.

Use near-black for addresses and ride details, medium gray for hints, and white on gradient or black active-trip surfaces.

Use green for successful payment or location confirmation, amber for delayed matching, red for cancellation or route failure, and violet for neutral progress.

# Typography

Use a modern system sans with clear Cyrillic address forms and tabular prices.

Use 24–30 points onboarding headings, 19 points sheet headings, 14–16 points addresses and actions, and 10–12 points class or route metadata.

Prioritize pickup, destination, class, price, and next action. Keep map labels and secondary explanations lighter.

Use SF Pro or Inter with 600–700 headings and regular body weights.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12–16 points sheet padding, 8 points gaps between route rows, and 12 points between ride-class cards.

The map fills the screen. Route fields sit at top or bottom; class selection uses two columns; Profile becomes a one-column service sheet.

Let the map provide visual space. Sheets should contain only the current decision and avoid carrying unrelated account content.

Use a single glossy matching bubble or light bloom around the pickup pin during driver search. Keep all other depth functional.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

There is no persistent tab bar. A profile shortcut on the map opens history, payment, settings, support, and app information.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

The primary action is a full-width violet gradient rectangle with rounded corners. Secondary close or cancel controls are white, gray, or charcoal. Native controls must inherit the gradient, radius, and type hierarchy.

Route details use one white rounded sheet. Profile uses grouped full-width rows with light dividers and no promotional card grid.

Pickup and destination are large rounded rows over the map. Payment and driver note open focused sheets with one clear completion action.

Use map pins, pickup label, route-building feedback, driver-search bubble, cancellation state, payment selection, and support status in direct context.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Vehicle images are isolated side views inside white cards. Maps remain uncropped beneath sheets; onboarding graphics stay in a single wide banner.

Maps fill with native zoom and pan. Use `contain` for vehicle cutouts and `cover` only for a rare onboarding or regional banner.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Use map pins, pickup label, route-building feedback, driver-search bubble, cancellation state, payment selection, and support status in direct context.

Use green for successful payment or location confirmation, amber for delayed matching, red for cancellation or route failure, and violet for neutral progress.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Map pins, location fields, ride-class cards, profile shortcut, payment, note, order, and cancellation controls require at least 44 points targets.
- Keep pickup, destination, selected class, price, and order action visible. Collapse payment, note, support, and settings into dedicated sheets.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not cover the map with a full dashboard before booking.
- Do not use multiple competing gradient buttons.
- Do not overdecorate route and payment forms.
- Do not retain default native blue accents.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
