<design-context>
---
version: 1
platform: iOS
name: Not-Boring-Habits-design-analysis
description: "An immersive dark habit tracker where one central tactile object, a seven-day strip, and a 60-step visual journey turn repetition into a collectible ritual. Heavy white type, charcoal stages, and sharp yellow-orange illumination keep the interface dramatic while secondary chrome nearly disappears."
colors:
  primary: "#F5B500"
  on-primary: "#141215"
  primary-soft: "#332B16"
  accent: "#FF7A00"
  accent-secondary: "#F6F6F3"
  ink: "#F7F5F3"
  ink-muted: "#9A969C"
  ink-subtle: "#625F65"
  canvas: "#1D1B1E"
  surface-1: "#242126"
  surface-2: "#111012"
  hairline: "#39363B"
  semantic-success: "#F4F4F0"
  semantic-danger: "#EF5B5B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Rounded, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Rounded, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Rounded, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Rounded, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: DIN Condensed, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.4 }
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

(Not Boring) Habits reduces daily tracking to a theatrical ritual: one habit fills the screen, one large object receives the check, and a 60-step journey rewards continuity.

# Non-negotiable visual invariants

- Primary screens use Near-black immersive canvas.
- Center one habit ritual.
- Make progress visible as a journey.
- Use low-poly rewards consistently.
- Preserve the dark stage.
- Keep the daily action immediate.
- The main habit screen is a vertical stage: utility controls above, the object centered, and the week strip anchored low.
- Profile, achievements, skins, and recaps use focused single-column views.

# Color and surfaces

- **Journey Yellow** ({colors.primary}): Progress, selected day, and reward illumination.
- **Fire Orange** ({colors.accent}): Milestones and dramatic depth.
- **Stage White** ({colors.accent-secondary}): Completion control and high-contrast type.

- **Canvas** ({colors.canvas}): Full-screen habit stage.
- **Surface 1** ({colors.surface-1}): Sheets, premium, and profile areas.
- **Surface 2** ({colors.surface-2}): Central ritual object and recessed controls.
- **Hairline** ({colors.hairline}): Quiet separation.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **SF Pro Rounded** — motivational statements and milestones.
- **SF Pro Text** — controls and explanatory copy.
- **DIN Condensed** — compact labels and authored emphasis.

- {typography.display-xl} — 36 points — 700 — Motivational statement
- {typography.headline} — 22 points — 700 — Screen heading
- {typography.card-title} — 16 points — 600 — Habit, achievement, or skin title
- {typography.body} — 14 points — 400 — Details and forms
- {typography.caption} — 10 points — 400 — Metadata
- {typography.button} — 15 points — 600 — Primary action

- Use one sentence as the emotional focus.
- Keep utility labels compact and subordinate.
- Pair a large bold statement with a narrow technical label.
- Never crowd the central habit object.

Use **Inter** or the platform system sans when the reference fonts are unavailable; preserve relative weight and scale.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

The main habit screen is a vertical stage: utility controls above, the object centered, and the week strip anchored low. Profile, achievements, skins, and recaps use focused single-column views.

Treat empty dark space as part of the experience. One object or statement should dominate each state.

Use hard-edged low-poly volume, deep shadows, and a single warm key light. Functional controls remain flat and quiet.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Plus and profile sit quietly at the top; habit, calendar, journey, achievements, skins, and recaps remain shallow destinations.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

The main check is a large circular object rather than a conventional button. Secondary actions use outlined circles or a single high-contrast white pill.

Avoid conventional dashboards. Premium and profile information may use contained sheets, but the daily habit remains an open stage.

Keep setup and history edits linear, with large choices and minimal keyboard exposure.

Show checked, missed, current repetition, milestone, locked skin, and premium state through label plus object change.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Place one low-poly object or miniature landscape on a dark stage with clear silhouette and strong bottom lighting. Keep text outside its visual core.

Contain the full 3D object and its shadow. Never crop the milestone silhouette or place controls over it.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show checked, missed, current repetition, milestone, locked skin, and premium state through label plus object change.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every interactive control at least 44 points while preserving the reference density.
- Preserve the central object, current habit, and today marker. Move secondary journey details into a sheet before shrinking the ritual.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not turn the home screen into a metric dashboard.
- Do not introduce unrelated bright colors.
- Do not place long copy over the central object.
- Do not hide missed-day editing.
- Do not use generic flat illustrations.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
