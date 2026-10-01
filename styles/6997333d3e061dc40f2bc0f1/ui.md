<design-context>
---
version: 1
platform: iOS
name: ChallengeUp-design-analysis
description: "A bold challenge tracker built on pure black with oversized geometric actions, heavy extended display type, saturated yellow, mint, salmon, mustard, purple, and blue blocks, plus expressive flat editorial characters. Challenge choice, daily completion, progress, sharing, editing, and completion stay graphic and immediate."
colors:
  primary: "#FFC400"
  on-primary: "#080808"
  primary-soft: "#3A3010"
  accent: "#57D6A3"
  accent-secondary: "#E98572"
  ink: "#FFFFFF"
  ink-muted: "#9D9D9D"
  ink-subtle: "#5E5E5E"
  canvas: "#000000"
  surface-1: "#171717"
  surface-2: "#292929"
  hairline: "#3A3A3A"
  semantic-success: "#20C997"
  semantic-danger: "#E3482C"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Arial Black, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: Arial Black, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: Arial Black, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: Arial Black, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
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

ChallengeUp treats goals as bold graphic posters. Creation begins with an enormous yellow circle, templates use illustrated color cards, and active challenges become large status blocks with completion gestures.

# Non-negotiable visual invariants

- The recurring color treatment uses Pure black foundation.
- Keep the black stage dominant.
- Use one saturated color per challenge.
- Make daily completion immediate.
- Preserve large counters.
- Use editorial illustration on templates.
- Empty state centers one giant circle.
- Template browsing uses horizontally paged two-column cards; active challenges stack full-width colored blocks.

# Color and surfaces

- **Primary** ({colors.primary}): Creation, primary progression, and high-attention CTA.
- **Accent** ({colors.accent}): Active challenge and positive category fields.
- **Secondary Accent** ({colors.accent-secondary}): Progress detail and lifestyle category fields.

- **Canvas** ({colors.canvas}): Challenge dashboard and template browsing.
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

- **Arial Black** — challenge titles, counters, and calls to action.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

- Keep titles short and forceful.
- Let one geometric action dominate.
- Use one color field per challenge.
- Keep progress numbers large and spare.

Use **Inter** or the platform system sans when the reference display face is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

Empty state centers one giant circle. Template browsing uses horizontally paged two-column cards; active challenges stack full-width colored blocks.

Use large black gaps to separate graphic objects and avoid conventional dashboard density.

Remain flat and poster-like. Layer only circles, outlined counters, and small completion tokens.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Menu and add remain at the top. Other contains guidance, profile questions, feedback, and language.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

The giant circle creates; bottom yellow bars create custom challenges; black circles mark done; blue bars share progress.

Template cards pair a large uppercase title with one editorial scene. Active cards show title, day count, schedule, and a dominant done circle.

Challenge setup uses large choices, short fields, schedule, duration, and notification configuration.

Show upcoming, ready, done today, paused, completed, reset, shared, and deleted explicitly through label plus graphic token.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use flat editorial figures with angular shapes, limited texture, and bold contrasting skin and clothing colors inside solid category cards.

Contain editorial figures inside their color card and preserve intentional cropping. Never place progress controls over faces or key gestures.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show upcoming, ready, done today, paused, completed, reset, shared, and deleted explicitly through label plus graphic token.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every row, tab, selector, key, and primary action at least 44 points.
- Preserve challenge title, day count, completion control, and next date. Move edit actions into detail before shrinking the card.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not turn progress into small charts.
- Do not introduce gradients or soft shadows.
- Do not mix photography into template cards.
- Do not use thin generic typography for titles.
- Do not crowd a card with secondary actions.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
