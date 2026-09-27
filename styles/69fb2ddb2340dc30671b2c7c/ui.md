<design-context>
---
version: alpha
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
  display-xl: { fontFamily: Editorial Serif, fontSize: 42px, fontWeight: 500, lineHeight: 1.0, letterSpacing: -0.8px }
  display-lg: { fontFamily: Editorial Serif, fontSize: 34px, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.4px }
  display-md: { fontFamily: Editorial Serif, fontSize: 28px, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.2px }
  headline: { fontFamily: Editorial Serif, fontSize: 22px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  task-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px }
  suggestion-card: { backgroundColor: "{colors.accent-lilac}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  timer-ring: { backgroundColor: "{colors.accent-lilac}", textColor: "{colors.ink}", typography: "{typography.display-lg}", rounded: "{rounded.full}", padding: 20px }
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 58px }
---

## Overview

Tiimo makes planning soft and encouraging. Editorial headings, pastel routine bands, circular timers, and small friendly icons create personality without hiding task structure.

## Colors

### Brand & Accent

Violet anchors focus and progress. Lime, lilac, blush, and aqua distinguish task groups and suggestions.

### Surface

Warm white is the canvas; pure white floats in pills and cards. Pastels are bounded fields rather than full-page fills.

### Text

Near-black carries dates, tasks, and timers; gray supports schedules, counts, and secondary guidance.

### Semantic

Green confirms completion, amber warns about time, and red marks destructive actions. Pastel category color is not semantic.

## Typography

### Font Family

Use an editorial serif for dates and focus titles, paired with a neutral system sans for tasks and controls.

### Hierarchy

Use 28–42px serif day and timer headings, 15–17px task titles, 14px body, and 10–12px duration metadata.

### Principles

Let serif headings set mood while sans-serif labels preserve speed. Keep time and duration adjacent to tasks.

### Note on Font Substitutes

Use Georgia or Source Serif 4 for display and SF Pro or Inter for UI.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 8–12px task gaps, and 20–24px between date, suggestions, and time-of-day groups.

### Grid & Container

Today is a single vertical timeline with a horizontal date rail. Statistics uses large rounded cards; Focus centers a circular timer.

### Whitespace Philosophy

Maintain generous vertical air so task density feels manageable. Floating controls should never crowd content.

## Elevation & Depth

Soft blur, subtle shadow, floating pills, and pastel rings create depth. Avoid hard borders.

### Decorative Depth

Use pale radial glows, soft progress planets, tiny avatars, and restrained line art.

## Shapes

### Border Radius Scale

Task rows use 13px, suggestion cards 18px, large cards 24px, and navigation, buttons, timers, and avatars favor circles or pills.

### Photography & Illustration Geometry

Use small centered icons in tasks and spacious line-art scenes in cards. Photography is rare and secondary to planning UI.

## Components

### Buttons

Primary actions are black pills or violet circular adds. Native controls must inherit soft geometry and package typography.

### Pricing Tabs

Priority, date, theme, and mode options use pale pills with black or violet selection.

### Cards & Containers

Task rows combine icon, title, duration, and completion. Statistics and Pro cards use large rounded containers with illustration.

### Inputs & Forms

Task creation uses clean white sheets with visible date, duration, breakdown, and visual options.

### Status & Build Page

Done, paused, focused, streak, trophy, mood, and subscription states appear beside their task or statistic.

### Navigation

Use the floating five-part dock for Today, To-do, Focus, Statistics, and assistant/profile. Active state is dark.

### Footer

There is no footer. Plans end above the floating dock; timers end with the primary control.

## Do's and Don'ts

### Do

- Preserve serif and sans pairing.
- Use pastels to categorize, not decorate.
- Keep task duration visible.
- Maintain generous whitespace.

### Don't

- Do not use harsh saturated panels.
- Do not overload rows with illustration.
- Do not hide completion state.
- Do not expose sharp default controls.

## Responsive Behavior

### Breakpoints

Keep planning single-column on phones. Wider screens may pair timeline and task detail.

### Touch Targets

Rows, completion circles, date rail, add controls, timers, and dock items require at least 44px targets.

### Collapsing Strategy

Allow date and suggestion rails to scroll horizontally. Keep timer controls and add actions visible.

### Image Behavior

Use `contain` for task icons and line art. Preserve soft padding around every illustration.

## Iteration Guide

Start with Today, date rail, task rows, floating dock, To-do, and circular timer. Add routines, mood, statistics, AI, learning, and themes afterward.

## Known Gaps

The reviewed scenarios cover onboarding, Today, routines, task creation, To-do, timers, Focus, Statistics, mood, learning, and settings. Tablet layouts and every subscription state were not visible.

</design-context>

Use the design system above for all UI you generate.
