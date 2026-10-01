<design-context>
---
version: 1
platform: iOS
name: Tiimo-design-analysis
description: "A gentle visual planner built from warm white canvas, editorial serif headings, soft lilac, lime, blush, and aqua task bands, floating pill controls, circular progress, and friendly miniature illustrations. The system feels calm and personal while keeping daily structure explicit."

colors:
  primary: "#755BE8"
  on-primary: "#FFFFFF"
  accent-lime: "#DDF05D"
  accent-lilac: "#E6DDF7"
  accent-blush: "#F7E4E2"
  accent-aqua: "#DDEFF0"
  ink: "#171619"
  ink-muted: "#77747B"
  ink-subtle: "#AAA7AE"
  canvas: "#FFFEFC"
  surface-1: "#FFFFFF"
  surface-2: "#F2F0EE"
  hairline: "#E8E5E6"
  semantic-success: "#58A679"
  semantic-warning: "#D69A2F"
  semantic-danger: "#D95A66"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Editorial Serif, fontSize: 42, fontWeight: 500, lineHeight: 1.0, letterSpacing: -0.8 }
  display-lg: { fontFamily: Editorial Serif, fontSize: 34, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.4 }
  display-md: { fontFamily: Editorial Serif, fontSize: 28, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.2 }
  headline: { fontFamily: Editorial Serif, fontSize: 22, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  task-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10 }
  suggestion-card: { backgroundColor: "{colors.accent-lilac}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  timer-ring: { backgroundColor: "{colors.accent-lilac}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.full}", padding: 20 }
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 58 }
---

# Overview

Tiimo makes planning soft and encouraging. Editorial headings, pastel routine bands, circular timers, and small friendly icons create personality without hiding task structure.

# Non-negotiable visual invariants

- Preserve serif and sans pairing.
- Use pastels to categorize, not decorate.
- Keep task duration visible.
- Maintain generous whitespace.
- Today is a single vertical timeline with a horizontal date rail.
- Statistics uses large rounded cards; Focus centers a circular timer.
- Maintain generous vertical air so task density feels manageable.
- Floating controls should never crowd content.

# Color and surfaces

Violet anchors focus and progress. Lime, lilac, blush, and aqua distinguish task groups and suggestions.

Warm white is the canvas; pure white floats in pills and cards. Pastels are bounded fields rather than full-page fills.

Near-black carries dates, tasks, and timers; gray supports schedules, counts, and secondary guidance.

Green confirms completion, amber warns about time, and red marks destructive actions. Pastel category color is not semantic.

# Typography

Use an editorial serif for dates and focus titles, paired with a neutral system sans for tasks and controls.

Use 28–42 points serif day and timer headings, 15–17 points task titles, 14 points body, and 10–12 points duration metadata.

Let serif headings set mood while sans-serif labels preserve speed. Keep time and duration adjacent to tasks.

Use Georgia or Source Serif 4 for display and SF Pro or Inter for UI.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 8–12 points task gaps, and 20–24 points between date, suggestions, and time-of-day groups.

Today is a single vertical timeline with a horizontal date rail. Statistics uses large rounded cards; Focus centers a circular timer.

Maintain generous vertical air so task density feels manageable. Floating controls should never crowd content.

Use pale radial glows, soft progress planets, tiny avatars, and restrained line art.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use the floating five-part dock for Today, To-do, Focus, Statistics, and assistant/profile. Active state is dark.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are black pills or violet circular adds. Native controls must inherit soft geometry and package typography.

Task rows combine icon, title, duration, and completion. Statistics and Pro cards use large rounded containers with illustration.

Task creation uses clean white sheets with visible date, duration, breakdown, and visual options.

Done, paused, focused, streak, trophy, mood, and subscription states appear beside their task or statistic.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use small centered icons in tasks and spacious line-art scenes in cards. Photography is rare and secondary to planning UI.

Use `contain` for task icons and line art. Preserve soft padding around every illustration.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Done, paused, focused, streak, trophy, mood, and subscription states appear beside their task or statistic.

Green confirms completion, amber warns about time, and red marks destructive actions. Pastel category color is not semantic.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Rows, completion circles, date rail, add controls, timers, and dock items require at least 44 points targets.
- Allow date and suggestion rails to scroll horizontally. Keep timer controls and add actions visible.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use harsh saturated panels.
- Do not overload rows with illustration.
- Do not hide completion state.
- Do not expose sharp default controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
