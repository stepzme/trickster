<design-context>
---
version: alpha
name: ChallengeUp-design-analysis
description: "A bold challenge tracker built on pure black with oversized geometric actions, heavy extended display type, saturated yellow, mint, salmon, mustard, purple, and blue blocks, plus expressive flat editorial characters. Challenge choice, daily completion, progress, sharing, editing, and completion stay graphic and immediate."
colors:
  primary: "#FFC400"
  on-primary: "#080808"
  primary-hover: "#E0AD00"
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
  display-xl: { fontFamily: Arial Black, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: Arial Black, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: Arial Black, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: Arial Black, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
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

ChallengeUp treats goals as bold graphic posters. Creation begins with an enormous yellow circle, templates use illustrated color cards, and active challenges become large status blocks with completion gestures.

**Key Characteristics:**
- Pure black foundation.
- Oversized yellow circular action.
- Heavy extended uppercase type.
- Saturated full-card color fields.
- Flat editorial people and activity scenes.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Creation, primary progression, and high-attention CTA.
- **Accent** ({colors.accent}): Active challenge and positive category fields.
- **Secondary Accent** ({colors.accent-secondary}): Progress detail and lifestyle category fields.

### Surface
- **Canvas** ({colors.canvas}): Challenge dashboard and template browsing.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **Arial Black** — challenge titles, counters, and calls to action.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep titles short and forceful.
- Let one geometric action dominate.
- Use one color field per challenge.
- Keep progress numbers large and spare.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Empty state centers one giant circle. Template browsing uses horizontally paged two-column cards; active challenges stack full-width colored blocks.

### Whitespace Philosophy

Use large black gaps to separate graphic objects and avoid conventional dashboard density.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Remain flat and poster-like. Layer only circles, outlined counters, and small completion tokens.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Use flat editorial figures with angular shapes, limited texture, and bold contrasting skin and clothing colors inside solid category cards.

## Components

### Buttons

The giant circle creates; bottom yellow bars create custom challenges; black circles mark done; blue bars share progress.

### Pricing Tabs

Categories page horizontally; challenge state is expressed by card color and circular completion control rather than tabs.

### Cards & Containers

Template cards pair a large uppercase title with one editorial scene. Active cards show title, day count, schedule, and a dominant done circle.

### Inputs & Forms

Challenge setup uses large choices, short fields, schedule, duration, and notification configuration.

### Status & Build Page

Show upcoming, ready, done today, paused, completed, reset, shared, and deleted explicitly through label plus graphic token.

### Navigation

Menu and add remain at the top. Other contains guidance, profile questions, feedback, and language.

### Footer

Contextual create or share bars sit above the safe area; the main list has no persistent tab bar.

## Do's and Don'ts

### Do

- Keep the black stage dominant.
- Use one saturated color per challenge.
- Make daily completion immediate.
- Preserve large counters.
- Use editorial illustration on templates.

### Don't

- Don't turn progress into small charts.
- Don't introduce gradients or soft shadows.
- Don't mix photography into template cards.
- Don't use thin generic typography for titles.
- Don't crowd a card with secondary actions.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44px.

### Collapsing Strategy

Preserve challenge title, day count, completion control, and next date. Move edit actions into detail before shrinking the card.

### Image Behavior

Contain editorial figures inside their color card and preserve intentional cropping. Never place progress controls over faces or key gestures.

## Iteration Guide

1. Build empty state and creation.
2. Add template selection and custom setup.
3. Add active challenge cards and daily completion.
4. Add detail, edit, pause, and reset.
5. Add completion, sharing, and settings.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 20 available flow names were inventoried; new challenge, my challenges, daily completion, and completed challenge were image-reviewed.
- Celebration motion, notification delivery, and share export quality were not directly assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
