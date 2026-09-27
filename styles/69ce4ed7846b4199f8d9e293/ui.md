<design-context>
---
version: alpha
name: Not-Boring-Habits-design-analysis
description: "An immersive dark habit tracker where one central tactile object, a seven-day strip, and a 60-step visual journey turn repetition into a collectible ritual. Heavy white type, charcoal stages, and sharp yellow-orange illumination keep the interface dramatic while secondary chrome nearly disappears."
colors:
  primary: "#F5B500"
  on-primary: "#141215"
  primary-hover: "#FFD13B"
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
  display-xl: { fontFamily: SF Pro Rounded, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Rounded, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Rounded, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Rounded, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: DIN Condensed, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.4px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

(Not Boring) Habits reduces daily tracking to a theatrical ritual: one habit fills the screen, one large object receives the check, and a 60-step journey rewards continuity.

**Key Characteristics:**
- Near-black immersive canvas.
- One dominant circular completion control.
- Seven-day dot strip at the bottom.
- Low-poly progress worlds and collectible skins.
- Bold white copy with yellow-orange light.

## Colors

### Brand & Accent
- **Journey Yellow** ({colors.primary}): Progress, selected day, and reward illumination.
- **Fire Orange** ({colors.accent}): Milestones and dramatic depth.
- **Stage White** ({colors.accent-secondary}): Completion control and high-contrast type.

### Surface
- **Canvas** ({colors.canvas}): Full-screen habit stage.
- **Surface 1** ({colors.surface-1}): Sheets, premium, and profile areas.
- **Surface 2** ({colors.surface-2}): Central ritual object and recessed controls.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Rounded** — motivational statements and milestones.
- **SF Pro Text** — controls and explanatory copy.
- **DIN Condensed** — compact labels and authored emphasis.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| {typography.display-xl} | 36px | 700 | Motivational statement |
| {typography.headline} | 22px | 700 | Screen heading |
| {typography.card-title} | 16px | 600 | Habit, achievement, or skin title |
| {typography.body} | 14px | 400 | Details and forms |
| {typography.caption} | 10px | 400 | Metadata |
| {typography.button} | 15px | 600 | Primary action |

### Principles

- Use one sentence as the emotional focus.
- Keep utility labels compact and subordinate.
- Pair a large bold statement with a narrow technical label.
- Never crowd the central habit object.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference fonts are unavailable; preserve relative weight and scale.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

The main habit screen is a vertical stage: utility controls above, the object centered, and the week strip anchored low. Profile, achievements, skins, and recaps use focused single-column views.

### Whitespace Philosophy

Treat empty dark space as part of the experience. One object or statement should dominate each state.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-black stage | Base context |
| 1 | Recessed charcoal control | Primary content |
| 2 | Illuminated 3D object | Selected or promoted content |
| 3 | Modal over overlay | Confirmation and focus |

### Decorative Depth

Use hard-edged low-poly volume, deep shadows, and a single warm key light. Functional controls remain flat and quiet.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| {rounded.xs} | 8px | Small controls |
| {rounded.sm} | 12px | Inputs and icon wells |
| {rounded.md} | 16px | Action tiles |
| {rounded.lg} | 20px | Main cards |
| {rounded.pill} | full | Filters and chips |
| {rounded.full} | full | Progress, avatar, or status |

### Photography & Illustration Geometry

Place one low-poly object or miniature landscape on a dark stage with clear silhouette and strong bottom lighting. Keep text outside its visual core.

## Components

### Buttons

The main check is a large circular object rather than a conventional button. Secondary actions use outlined circles or a single high-contrast white pill.

### Pricing Tabs

Days and journey stages use compact circular selectors; the active item gains white or yellow contrast.

### Cards & Containers

Avoid conventional dashboards. Premium and profile information may use contained sheets, but the daily habit remains an open stage.

### Inputs & Forms

Keep setup and history edits linear, with large choices and minimal keyboard exposure.

### Status & Build Page

Show checked, missed, current repetition, milestone, locked skin, and premium state through label plus object change.

### Navigation

Plus and profile sit quietly at the top; habit, calendar, journey, achievements, skins, and recaps remain shallow destinations.

### Footer

Anchor the seven-day strip and overflow control above the safe area.

## Do's and Don'ts

### Do

- Center one habit ritual.
- Make progress visible as a journey.
- Use low-poly rewards consistently.
- Preserve the dark stage.
- Keep the daily action immediate.

### Don't

- Don't turn the home screen into a metric dashboard.
- Don't introduce unrelated bright colors.
- Don't place long copy over the central object.
- Don't hide missed-day editing.
- Don't use generic flat illustrations.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center a fixed-width stage and open supporting history beside it |
| Compact | 390–767px | Default mobile composition |
| Small | <390px | Tighten copy measure before reducing the central object |

### Touch Targets

Keep every interactive control at least 44px while preserving the reference density.

### Collapsing Strategy

Preserve the central object, current habit, and today marker. Move secondary journey details into a sheet before shrinking the ritual.

### Image Behavior

Contain the full 3D object and its shadow. Never crop the milestone silhouette or place controls over it.

## Iteration Guide

1. Build the daily habit stage.
2. Add week strip and completion state.
3. Add calendar and history editing.
4. Add the 60-step journey and achievements.
5. Add skins and premium presentation.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 14 available flow names were inventoried; onboarding, home, mark habit, premium, achievements, and skins were image-reviewed.
- Motion and haptic timing were not directly assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
