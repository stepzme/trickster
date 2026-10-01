<design-context>
---
version: 1
platform: iOS
name: Yandex-Pro-design-analysis
description: "A driver operations interface built around live maps, bright yellow trip actions, black-and-white task controls, green payment status, and blue financial analysis. The system keeps location, route, timer, payment method, and earnings visible under time pressure."
colors: { primary: "#FFDD00", on-primary: "#181818", primary-soft: "#FFF4A3", accent: "#416BEA", ink: "#171719", ink-muted: "#73767B", ink-subtle: "#B0B3B7", canvas: "#FFFFFF", surface-1: "#F3F3F4", surface-2: "#E9EAEC", hairline: "#DDE0E3", semantic-success: "#45B97A", semantic-warning: "#FFDD00", semantic-danger: "#EF4F45", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 42, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.9 }
  display-lg: { fontFamily: Yandex Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: Yandex Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: Yandex Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [15, 20]}
  trip-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  status-chip: { backgroundColor: "#DDF7EA", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [7, 10]}
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Яндекс Про supports time-critical driver work with a live route, prominent trip state, payment visibility, and transparent earnings detail.

# Non-negotiable visual invariants

- Keep pickup and payment visible.
- Separate gross income from deductions.
- Make cancellation explicit and red.
- The active trip uses a full map with a bottom task sheet; earnings use a summary chart above dated order rows.
- Keep trip screens compact and glanceable while allowing financial analysis more vertical space.

# Color and surfaces

Use yellow for the primary trip action, blue for navigation and income analysis, and green for confirmed payment state.

Let the map fill the canvas and place white sheets or cards over it; use pale gray for secondary action groups.

Use near-black for route and earnings, gray for metadata, and white on strong navigation blue.

Use green for paid or ready state, red for cancellation and deductions, yellow for action, and blue for earnings.

# Typography

Use Yandex Sans for route, task, and financial information.

Use 34–42 points for earnings, 22 points for page titles, 16 points for primary actions, 14 points body, and 10–12 points metadata.

Make maneuver, distance, timer, pickup, payment, and net income readable at a glance.

Use the platform sans or Inter with tabular time and money.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points gutters, 10 points gaps, and 14 points sheet padding.

The active trip uses a full map with a bottom task sheet; earnings use a summary chart above dated order rows.

Keep trip screens compact and glanceable while allowing financial analysis more vertical space.

Map geometry, route color, and charts provide depth; avoid decoration unrelated to the task.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Orders, Money, Chats, and Profile remain in the bottom bar; active navigation takes priority during a trip.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use a wide yellow pill for Start trip and compact gray or red rows for call and cancel.

Use navigation cards, trip sheets, route rows, payment chips, earnings summaries, and dated order lists.

Keep order actions and financial filters short, explicit, and suitable for one-handed use.

Show waiting, cash payment, route progress, timer, cancellation, orders, bonuses, tips, commissions, and net income.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use map, route, vehicle, and chart symbols only; do not introduce ornamental scenes.

Keep maps fluid, route contrast strong, and charts fully visible without horizontal crop.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show waiting, cash payment, route progress, timer, cancellation, orders, bonuses, tips, commissions, and net income.

Use green for paid or ready state, red for cancellation and deductions, yellow for action, and blue for earnings.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep Start, call, cancel, route rows, tabs, calendar, and footer actions at least 44 points.
- Preserve maneuver, route, timer, payment, and primary action; collapse secondary chat and history first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not cover the active route with secondary content.
- Do not rely on tiny chart labels.
- Do not mix trip and earnings actions.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Tokens were inferred visually from sampled mobile screens.
- Ride details and Detailed breakdown were reviewed as complete flows.
- Dispatch, shift start, and support flows were not sampled.

</design-context>
