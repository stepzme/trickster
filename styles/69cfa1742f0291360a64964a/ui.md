<design-context>
---
version: 1
platform: iOS
name: Duolingo-design-analysis
description: "A gamified learning path on white with saturated green progression, cyan secondary actions, chunky outlined controls, bright reward colors, circular lesson nodes, persistent resource counters, and expressive mascot scenes that turn completion, streaks, and setbacks into emotional events."
colors:
  primary: "#58CC02"
  on-primary: "#FFFFFF"
  primary-soft: "#DDF8C7"
  accent: "#1CB0F6"
  accent-purple: "#CE82FF"
  ink: "#3C3C3C"
  ink-muted: "#777777"
  ink-subtle: "#AFAFAF"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#E5E5E5"
  hairline: "#D7D7D7"
  semantic-success: "#58CC02"
  semantic-warning: "#FFC800"
  semantic-danger: "#FF4B4B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: DIN Round, fontSize: 40, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.5 }
  display-lg: { fontFamily: DIN Round, fontSize: 34, fontWeight: 800, lineHeight: 1.10, letterSpacing: -0.3 }
  display-md: { fontFamily: DIN Round, fontSize: 28, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: DIN Round, fontSize: 22, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: DIN Round, fontSize: 18, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: DIN Round, fontSize: 16, fontWeight: 700, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: DIN Round, fontSize: 17, fontWeight: 500, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: DIN Round, fontSize: 15, fontWeight: 500, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: DIN Round, fontSize: 13, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: DIN Round, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: DIN Round, fontSize: 15, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0.4 }
  eyebrow: { fontFamily: DIN Round, fontSize: 12, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0.5 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  lesson-node: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.full}", padding: 14 }
  answer-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  reward-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Duolingo turns learning into a colorful progression game. A winding path, chunky controls, resource counters, and mascot reactions make every lesson and reward feel tangible.

# Non-negotiable visual invariants

- The recurring color treatment uses Bright green progression and primary actions.
- Focus each lesson on one clear decision.
- Celebrate meaningful progress visually.
- Pair semantic color with explicit text.
- Keep resource counters persistent.
- Home is a centered winding path under counters and a module banner.
- Lessons become a prompt, answer area, progress bar, and bottom action.
- Leave open white space around one learning decision at a time; reward screens may become visually full.

# Color and surfaces

- **Primary** ({colors.primary}): Progress, continue, correct state, and active lesson.
- **Cyan Accent** ({colors.accent}): Secondary progression and links.
- **Purple Accent** ({colors.accent-purple}): Premium and special modes.

- **Canvas** ({colors.canvas}): Path, lessons, and profile.
- **Surface 1** ({colors.surface-1}): Cards and neutral answer state.
- **Surface 2** ({colors.surface-2}): Disabled nodes and borders.
- **Hairline** ({colors.hairline}): Control outlines.

- **Ink** ({colors.ink}): Prompts, titles, and answer text.
- **Ink Muted** ({colors.ink-muted}): Explanations and supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Locked and inactive state.

- **Success** ({colors.semantic-success}): Correct and completed.
- **Warning** ({colors.semantic-warning}): Streak and reward urgency.
- **Danger** ({colors.semantic-danger}): Incorrect and depleted state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **DIN Round** — rounded learning, reward, and navigation voice.
- **SF Mono** — fixed-width notation in code or math when required.

Use 34–40 points extra-bold for reward moments, 22 points for prompts, 18 points for cards, 15–17 points lesson copy, and 11–13 points counters.

- Keep instructions short and direct.
- Use uppercase only for compact action labels.
- Pair friendly rounded type with strong hierarchy.
- Keep answer text large enough for scanning.

Use **Nunito Sans** or **Arial Rounded** when DIN Round is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points screen gutters, 12 points answer gaps, and generous vertical distance between path nodes.

Home is a centered winding path under counters and a module banner. Lessons become a prompt, answer area, progress bar, and bottom action.

Leave open white space around one learning decision at a time; reward screens may become visually full.

Characters, stars, chests, ribbons, and colored stage backgrounds provide celebration and progression depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Persistent bottom navigation covers learning path, practice, leagues, social, profile, and more; resources stay at the top.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are wide green or cyan blocks with a darker lower edge. Secondary buttons are white with thick gray outlines.

Use lesson nodes, answer tiles, reward cards, streak panels, league rows, chests, and mascot feedback scenes.

Typed, spoken, matching, listening, and multiple-choice answers use large task-specific controls and immediate validation.

Show correct, incorrect, streak, energy, currency, locked, legendary, boost, and completion states with color, text, and character response.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use bold flat characters with large eyes, simple silhouettes, expressive poses, and graphic background shards or gradients.

Contain characters without cropping expressive faces or gestures; allow celebration backgrounds to fill while protecting action labels.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show correct, incorrect, streak, energy, currency, locked, legendary, boost, and completion states with color, text, and character response.

- **Success** ({colors.semantic-success}): Correct and completed.
- **Warning** ({colors.semantic-warning}): Streak and reward urgency.
- **Danger** ({colors.semantic-danger}): Incorrect and depleted state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep nodes, answers, audio, record, continue, counters, and navigation at least 44 points.
- Preserve progress, prompt, answer, validation, and continue. Move secondary counters or social context outside the active task.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not make every screen equally celebratory.
- Do not use subtle low-contrast buttons.
- Do not punish errors without explanation.
- Do not mix realistic imagery with mascot scenes.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
