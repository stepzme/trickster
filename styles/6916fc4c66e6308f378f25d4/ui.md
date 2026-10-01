<design-context>
---
version: 1
platform: iOS
name: Joi-design-analysis
description: "A restrained monochrome daily planner where bold editorial date typography, a coral day marker, hairline timeline rows, and softly blurred navigation chrome create a quiet focus tool. White and charcoal themes share the same hierarchy; native controls may be used, but their fills, radii, weight, and spacing must inherit this sparse visual language."
colors:
  primary: "#EF625E"
  on-primary: "#FFFFFF"
  primary-focus: "#D94E4A"
  ink: "#1D1B1D"
  ink-muted: "#777377"
  ink-subtle: "#B3AFB3"
  ink-tertiary: "#D0CCD0"
  canvas: "#FBF9FB"
  surface-1: "#FFFFFF"
  surface-2: "#F2EFF2"
  surface-3: "#E8E4E8"
  surface-4: "#DCD7DC"
  hairline: "#E9E5E9"
  hairline-strong: "#D8D3D8"
  hairline-tertiary: "#C2BCC2"
  inverse-canvas: "#201E20"
  inverse-surface-1: "#2B292B"
  inverse-surface-2: "#373437"
  inverse-ink: "#FFFFFF"
  brand-secure: "#EF625E"
  semantic-success: "#52B986"
  semantic-overlay: "#1D1B1D"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.4}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0}
  display-md: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7}
  headline: {fontFamily: SF Pro Display, fontSize: 23, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.4}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  button: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 48
components:
  button-primary: {backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 16 20}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14 18}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14 18}
  timeline-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 14 4}
  habit-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 7 12}
  modal-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 24}
  date-cell: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8 6}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 48}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 10 16}
---

# Overview

Joi is a minimal day timeline with editorial date typography, barely visible structure, and one coral temporal marker. Controls feel native but are restyled to match the product's restrained system.

# Non-negotiable visual invariants

- Primary screens use Warm white or charcoal canvas.
- Preserve large quiet areas.
- Use coral as a tiny temporal signal.
- Keep completed tasks visible but subdued.
- Style native controls to match Joi's visual system.
- Use sheets for one focused choice at a time.
- The screen is one vertical timeline.
- The week strip uses seven equal columns; modal sheets keep one centered column.

# Color and surfaces

- Coral marks today and tiny timeline cues; it is not the button color.
- Primary actions are black in light theme and white in dark theme.

- Warm white reduces clinical contrast.
- Dark theme uses charcoal rather than pure black; sheets invert to white when focus is needed.

- Near-black or white carries date and task labels.
- Pale grays make completed and inactive information recede strongly.

- Completion is communicated by strike-through and opacity.
- Blue is limited to system calendar selection inside focused sheets.

# Typography

Use SF Pro Display for dates and onboarding headlines, SF Pro Text for task rows and controls.

- display-xl — 40 points — 700 — Weekday
- display-lg — 34 points — 700 — Onboarding claim
- display-md — 28 points — 700 — Step question
- headline — 23 points — 700 — Sheet title
- card-title — 17 points — 600 — Timeline item
- body — 15 points — 400 — Supporting copy
- caption — 10 points — 500 — Week strip

- Let scale, not color, establish the main hierarchy.
- Keep timeline labels single-line where possible.
- Use subdued weight and opacity for dates outside the active day.

SF Pro is the intended reference. A neutral system sans must preserve tight date metrics.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 20–24 points side padding, and 14–16 points vertical padding per timeline row.

The screen is one vertical timeline. The week strip uses seven equal columns; modal sheets keep one centered column.

Large empty regions are intentional. Avoid adding cards merely to fill the day.

Use blur and subtle tonal contrast instead of shadows. Dark theme may expose a white sheet as a deliberate high-contrast layer.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep the week strip close to the date header and a low-contrast action dock near the bottom safe area.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary buttons are full-width black or white with restrained radius. The central add control is a compact blurred surface, not a floating brand-colored button.

Avoid standard cards. Timeline content sits directly on the canvas; sheets appear only for focused decisions.

Use simple rows, chips, and system pickers restyled with Joi spacing, type, and monochrome fills. Native controls must visually inherit this UI rather than retain generic iOS styling.

Use opacity, strike-through, a tiny coral dot, and concise day summaries. Do not add celebratory banners to routine completion.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

No photography or expressive illustration was observed. Use only simple line glyphs that inherit the typographic weight.

No content imagery is part of the reference system. If user media is introduced, keep it secondary and softly rounded.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Use opacity, strike-through, a tiny coral dot, and concise day summaries. Do not add celebratory banners to routine completion.

- Completion is communicated by strike-through and opacity.
- Blue is limited to system calendar selection inside focused sheets.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Checkboxes, date cells, and dock icons keep at least 44 points hit areas despite their minimal visible forms.
- Task labels truncate only after preserving time. Sheets scroll vertically; the save action stays near the safe area.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not wrap every task in a card.
- Do not make every control coral.
- Do not use heavy shadows or visible gradients.
- Do not leave default iOS control styling unmodified.
- Do not crowd the header with utilities.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
