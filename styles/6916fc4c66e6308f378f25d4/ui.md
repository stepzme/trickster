<design-context>
---
version: alpha
name: Joi-design-analysis
description: "A restrained monochrome daily planner where bold editorial date typography, a coral day marker, hairline timeline rows, and softly blurred navigation chrome create a quiet focus tool. White and charcoal themes share the same hierarchy; native controls may be used, but their fills, radii, weight, and spacing must inherit this sparse visual language."
colors:
  primary: "#EF625E"
  on-primary: "#FFFFFF"
  primary-hover: "#F47A76"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.4px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0px}
  display-md: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7px}
  headline: {fontFamily: SF Pro Display, fontSize: 23px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.4px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  button: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 48px
components:
  button-primary: {backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 16px 20px}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-primary-hover: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px}
  timeline-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 14px 4px}
  habit-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 7px 12px}
  modal-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 24px}
  date-cell: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 48px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 10px 16px}
---
## Overview

Joi is a minimal day timeline with editorial date typography, barely visible structure, and one coral temporal marker. Controls feel native but are restyled to match the product's restrained system.

**Key Characteristics:**
- Warm white or charcoal canvas.
- Oversized weekday paired with quiet full date.
- Hairline-separated task rows and compact checkboxes.
- Coral used only for the active day cue.
- Softly blurred bottom controls and rounded modal sheets.

## Colors

### Brand & Accent
- Coral marks today and tiny timeline cues; it is not the button color.
- Primary actions are black in light theme and white in dark theme.

### Surface
- Warm white reduces clinical contrast.
- Dark theme uses charcoal rather than pure black; sheets invert to white when focus is needed.

### Text
- Near-black or white carries date and task labels.
- Pale grays make completed and inactive information recede strongly.

### Semantic
- Completion is communicated by strike-through and opacity.
- Blue is limited to system calendar selection inside focused sheets.

## Typography

### Font Family

Use SF Pro Display for dates and onboarding headlines, SF Pro Text for task rows and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40px | 700 | Weekday |
| display-lg | 34px | 700 | Onboarding claim |
| display-md | 28px | 700 | Step question |
| headline | 23px | 700 | Sheet title |
| card-title | 17px | 600 | Timeline item |
| body | 15px | 400 | Supporting copy |
| caption | 10px | 500 | Week strip |

### Principles

- Let scale, not color, establish the main hierarchy.
- Keep timeline labels single-line where possible.
- Use subdued weight and opacity for dates outside the active day.

### Note on Font Substitutes

SF Pro is the intended reference. A neutral system sans must preserve tight date metrics.

## Layout

### Spacing System

Use a 4px base, 20–24px side padding, and 14–16px vertical padding per timeline row.

### Grid & Container

The screen is one vertical timeline. The week strip uses seven equal columns; modal sheets keep one centered column.

### Whitespace Philosophy

Large empty regions are intentional. Avoid adding cards merely to fill the day.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm canvas | Timeline |
| 1 | Hairline row separation | Tasks and habits |
| 2 | Blurred rounded chrome | Bottom actions |
| 3 | White rounded sheet | Calendar and creation |

### Decorative Depth

Use blur and subtle tonal contrast instead of shadows. Dark theme may expose a white sheet as a deliberate high-contrast layer.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Date cell |
| rounded-md | 12px | Buttons and fields |
| rounded-xl | 24px | Navigation chrome |
| rounded-xxl | 32px | Sheets |
| rounded-pill | full | Habit chips |

### Photography & Illustration Geometry

No photography or expressive illustration was observed. Use only simple line glyphs that inherit the typographic weight.

## Components

### Buttons

Primary buttons are full-width black or white with restrained radius. The central add control is a compact blurred surface, not a floating brand-colored button.

### Pricing Tabs

No pricing tabs were observed. Use monochrome segmented pills if a plan choice is required.

### Cards & Containers

Avoid standard cards. Timeline content sits directly on the canvas; sheets appear only for focused decisions.

### Inputs & Forms

Use simple rows, chips, and system pickers restyled with Joi spacing, type, and monochrome fills. Native controls must visually inherit this UI rather than retain generic iOS styling.

### Status & Build Page

Use opacity, strike-through, a tiny coral dot, and concise day summaries. Do not add celebratory banners to routine completion.

### Navigation

Keep the week strip close to the date header and a low-contrast action dock near the bottom safe area.

### Footer

No footer; leave generous safe-area space below the bottom control dock.

## Do's and Don'ts

### Do

- Preserve large quiet areas.
- Use coral as a tiny temporal signal.
- Keep completed tasks visible but subdued.
- Style native controls to match Joi's visual system.
- Use sheets for one focused choice at a time.

### Don't

- Don't wrap every task in a card.
- Don't make every control coral.
- Don't use heavy shadows or visible gradients.
- Don't leave default iOS control styling unmodified.
- Don't crowd the header with utilities.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Reduce weekday scale and week-strip gaps |
| Standard | 375–430px | Default timeline rhythm |
| Wide | 431px+ | Increase side margins and sheet width restraint |

### Touch Targets

Checkboxes, date cells, and dock icons keep at least 44px hit areas despite their minimal visible forms.

### Collapsing Strategy

Task labels truncate only after preserving time. Sheets scroll vertically; the save action stays near the safe area.

### Image Behavior

No content imagery is part of the reference system. If user media is introduced, keep it secondary and softly rounded.

## Iteration Guide

Tune date scale, row rhythm, and inactive contrast first. Add no new decoration until the timeline remains clear in both themes.

## Known Gaps

- Gesture behavior for moving timeline items was not visible.
- Tablet layout was not represented.
- Calendar interoperability states were not reviewed.

</design-context>

Use the design system above for all UI you generate.
