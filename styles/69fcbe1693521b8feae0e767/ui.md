<design-context>
---
version: 1
platform: iOS
name: FocusPomo-design-analysis
description: "A soft playful focus timer with a warm cream-to-peach canvas, dark taupe controls, white pill panels, rounded pastel charts, and a growing crowd of expressive tomato characters that turns sessions, breaks, goals, and statistics into a collectible visual ritual."
colors: { primary: "#5B5249", on-primary: "#FFFFFF", primary-soft: "#EEE8E1", accent: "#F28755", accent-yellow: "#F6D94A", ink: "#514B45", ink-muted: "#8C8580", ink-subtle: "#BBB5B0", canvas: "#FFF4E8", surface-1: "#FFFFFF", surface-2: "#F1EDE8", hairline: "#E5DED7", semantic-success: "#89B84A", semantic-warning: "#F4C84B", semantic-danger: "#E46C5D", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Rounded, fontSize: 56, fontWeight: 400, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: SF Pro Rounded, fontSize: 38, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Rounded, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: SF Pro Rounded, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Rounded, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Rounded, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Rounded, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Rounded, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Rounded, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Rounded, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Rounded, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Rounded, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 22, xl: 28, xxl: 36, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  timer-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.xl}", padding: 24 }
  stat-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  navigation-bar: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 48 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
---

# Overview

FocusPomo turns focused time into a warm collectible garden of expressive tomatoes and soft statistics.

# Non-negotiable visual invariants

- Keep time and current tag visible.
- Use tomato count as a secondary progress signal.
- Make session interruption explicit.
- Timer centers time above a tomato field; summary stacks rounded metric, chart, tag, and detail cards.
- Use calm open space during focus and denser playful collections only in progress views.

# Color and surfaces

Use dark taupe for primary control, tomato orange for personality, and yellow for breaks or achievements.

Use peach-cream canvas, white cards, and pale taupe secondary controls.

Use dark warm gray for time and headings, medium gray for metadata, and pale gray for disabled state.

Use green for positive trend, yellow for attention, and coral for abandoned or blocked state.

# Typography

Use SF Pro Rounded for the whole experience and SF Mono only for technical values.

Use 56 points for the timer, 28–38 points for achievements, 22 points for sections, 14–17 points for controls and stats.

Keep time dominant, labels warm and concise, and statistics readable despite the playful treatment.

Use Nunito Sans or Arial Rounded when SF Pro Rounded is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 16 points card padding, and generous vertical space around the timer.

Timer centers time above a tomato field; summary stacks rounded metric, chart, tag, and detail cards.

Use calm open space during focus and denser playful collections only in progress views.

Tomato crowds, trophy cards, soft gradients, and pastel stacked bars create depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Timer, summary, calendar, and settings remain directly reachable through light floating controls.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use dark taupe pills for Start, Break, and confirmation; secondary actions use pale rounded fills.

Use timer stage, trophy card, summary metrics, stacked chart, tag legend, tomato grid, and subscription banner.

Tag and schedule forms use soft white fields, colored swatches, and clear duration controls.

Show focusing, break, completed, abandoned, goal, archived tag, blocked apps, and subscription states explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use flat rounded fruit characters with simple faces, tiny limbs, and varied scale to show accumulated sessions.

Keep fruit characters fully visible and trophy art contained in its card.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show focusing, break, completed, abandoned, goal, archived tag, blocked apps, and subscription states explicitly.

Use green for positive trend, yellow for attention, and coral for abandoned or blocked state.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep timer, start, break, tags, dates, and settings at least 44 points.
- Preserve time, tag, start or stop, and session state; move analytics below the active timer.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not animate characters during deep focus.
- Do not hide exact duration behind illustration.
- Do not over-saturate the calm canvas.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
