<design-context>
---
version: 1
platform: iOS
name: Simple-design-analysis
description: "A dark wellness dashboard built on deep indigo-charcoal surfaces, lavender-to-violet premium actions, green progress signals, rounded tracking modules, and image-led learning cards. A plush purple mascot and friendly editorial illustrations soften the otherwise data-rich health interface."

colors:
  primary: "#A56AFF"
  on-primary: "#FFFFFF"
  primary-soft: "#3A3151"
  ink: "#F7F5FA"
  ink-muted: "#B7B3BF"
  ink-subtle: "#7F7C87"
  canvas: "#20202B"
  surface-1: "#292936"
  surface-2: "#323240"
  surface-3: "#3C3C4B"
  hairline: "#464655"
  semantic-success: "#78D65B"
  semantic-warning: "#F2B34C"
  semantic-danger: "#EF657A"
  semantic-info: "#61A9FF"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  tracker-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  metric-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

Simple is a dark AI wellness companion combining daily plans, fasting, food, hydration, movement, weight, coaching, and a content library. Violet actions and green progress stand out on layered indigo-charcoal cards, while a plush mascot and friendly illustrations make guidance approachable.

# Non-negotiable visual invariants

- Primary screens use Deep indigo-charcoal shell and layered tracking cards.
- Keep tracking metrics concise.
- Use violet for primary and premium actions.
- Use green only for progress.
- Separate coaching from raw tracking.
- Let mascot and content imagery humanize learning.
- Home and Track use one vertical dashboard with occasional two-column metric tiles.
- Explore uses horizontal shelves and two-column content grids.

# Color and surfaces

- **Lavender Violet** ({colors.primary}) marks primary, premium, and selected actions.
- **Soft Violet** ({colors.primary-soft}) supports selected fields and subtle emphasis.

- **Canvas** ({colors.canvas}) is the app shell.
- **Surface 1** ({colors.surface-1}) carries large tracker and content cards.
- **Surface 2** ({colors.surface-2}) carries fields and metric tiles.
- **Surface 3** ({colors.surface-3}) is for pressed and nested states.

- **Ink** ({colors.ink}) carries headings and metrics.
- **Muted** ({colors.ink-muted}) carries explanations.
- **Subtle** ({colors.ink-subtle}) is for inactive navigation and metadata.

Green communicates progress, amber attention, pink-red danger, and blue hydration or information. Pair color with labels and icons.

# Typography

Use a neutral system sans with strong, compact headings and clear health metrics.

- `{typography.display-xl}` — 38 points — 700 — Main score
- `{typography.display-lg}` — 30 points — 700 — Screen title
- `{typography.display-md}` — 25 points — 700 — Section title
- `{typography.headline}` — 21 points — 700 — Plan or tracker heading
- `{typography.card-title}` — 16 points — 600 — Metric and content title
- `{typography.body}` — 14 points — 400 — Coaching and tracker copy
- `{typography.caption}` — 10 points — 400 — Goals and metadata

- Keep goals and progress numeric and scannable.
- Use bold copy for actionable health guidance.
- Keep assistant responses conversational and readable.
- Avoid overly clinical typography.

Use SF Pro or Inter. Preserve strong headings, compact metrics, and comfortable coaching copy.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 8 points card gaps, and 24 points between major tracking or content sections.

Home and Track use one vertical dashboard with occasional two-column metric tiles. Explore uses horizontal shelves and two-column content grids. Coach is a single chat column.

Keep dashboards dense but separate domains with card boundaries. Explore can breathe more around mascot and educational content.

Use soft blurred color at the top, progress arcs, and mascot imagery. Avoid glass-heavy effects or glossy metric cards.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations for Home, Coach, Track, and Explore. Profile opens from a circular top-right control.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary and premium actions use lavender or violet pills. Semantic actions may use green only when they confirm healthy progress. Native controls must inherit the dark palette and radii.

Tracker cards combine metric, goal, progress, and one action. Content cards place title over photography or illustration. Premium locks stay visible but secondary.

Meal logging and chat use dark rounded fields, contextual chips, scan action, and anchored confirmation. Keep keyboard state and close action obvious.

Progress arcs show meals, hydration, movement, fasting, and weight. Coach results use green checks and amber warnings. Locked score states explain the next action.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use edge-to-edge photo cards for workouts and recipes. Mascot and flat illustrations sit on clean colored fields with generous cropping.

Use `cover` for workout and food photography and `contain` for mascot or flat illustration. Preserve readable text overlays.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Progress arcs show meals, hydration, movement, fasting, and weight. Coach results use green checks and amber warnings. Locked score states explain the next action.

Green communicates progress, amber attention, pink-red danger, and blue hydration or information. Pair color with labels and icons.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Trackers, add actions, chips, cards, and bottom navigation require at least 44 points targets.
- Allow content shelves and filters to scroll horizontally. Keep logging or chat actions above the keyboard.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not add bright colors without semantic purpose.
- Do not make every card a promotion.
- Do not hide locked versus available content.
- Do not use light surfaces inside the dark shell without reason.
- Do not expose default platform styling.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
