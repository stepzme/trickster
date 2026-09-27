<design-context>
---
version: alpha
name: Brilliant-design-analysis
description: "A bright interactive-learning interface with white space, heavy black hierarchy, vivid blue or green lesson actions, soft-gray containers, and compact 3D diagrams. Progress is expressed through short checks, skill paths, manipulable visual models, and immediate explanations rather than long reading."
colors:
  primary: "#4267F5"
  on-primary: "#FFFFFF"
  primary-hover: "#3153D8"
  primary-soft: "#EEF2FF"
  accent: "#25BFA8"
  accent-secondary: "#F2C230"
  ink: "#111214"
  ink-muted: "#656A70"
  ink-subtle: "#A7ABB0"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F5F6"
  hairline: "#E2E4E6"
  semantic-success: "#25C46B"
  semantic-danger: "#D94A57"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
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
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Brilliant makes each lesson a sequence of small visual decisions. Home recommends the next skill; the lesson alternates interactive diagrams, answers, explanations, and progress feedback.

**Key Characteristics:**
- Very bright white canvas.
- Blue and teal course accents.
- Compact 3D learning objects.
- Short progress bars and energy count.
- Rounded bottom navigation.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Lesson start, selection, and continuation.
- **Accent** ({colors.accent}): Alternative course families and correct progress.
- **Secondary Accent** ({colors.accent-secondary}): Scientific-thinking emphasis and energy.

### Surface
- **Canvas** ({colors.canvas}): Lessons, home, courses, and profile.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary fields and controls.
- **Hairline** ({colors.hairline}): Quiet grouping.

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

- **SF Pro Display** — course names and question prompts.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Ask one clear question at a time.
- Keep diagrams larger than helper text.
- Use color to distinguish variables consistently.
- Explain an error immediately.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home centers one recommended course card above a three-tab nav. Lessons use a top progress bar, a central diagram, and one bottom action; course catalog uses grouped lists.

### Whitespace Philosophy

Give each interactive model room to be manipulated and understood without surrounding dashboard noise.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use soft 3D volume for educational objects, while forms and navigation stay almost flat.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills for compact filters.

### Photography & Illustration Geometry

Illustrations are functional diagrams: balances, gears, number blocks, paths, and course symbols. Keep labels and variables readable at a glance.

## Components

### Buttons

Blue or course-colored full-width buttons start and continue. Answer choices become outlined cards with clear selected and result states.

### Pricing Tabs

Home, Courses, and You use a rounded bottom bar; course levels and skill paths use large selectable stages.

### Cards & Containers

Recommended course cards combine subject, level, illustration, and one action. Explanation cards stay text-led with a supporting diagram.

### Inputs & Forms

Answers use direct taps, drag manipulation, numeric entry, or short choices; account forms remain conventional.

### Status & Build Page

Show lesson progress, energy, correct, incorrect, explanation, skill check, streak, league, and completed state explicitly.

### Navigation

Home, Courses, and You are stable. Lesson navigation becomes focused with close, progress, sound, and energy.

### Footer

The lesson action remains above the safe area; the three-tab nav returns outside an active lesson.

## Do's and Don'ts

### Do

- Make diagrams operational.
- Keep one concept per screen.
- Explain mistakes without punishment.
- Preserve variable colors.
- Show the next learning step.

### Don't

- Don't use decorative art unrelated to the concept.
- Don't crowd diagrams with chrome.
- Don't reveal answers without explanation.
- Don't mix course accent roles.
- Don't bury progress recovery.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, and primary action at least 44px.

### Collapsing Strategy

Preserve prompt, diagram, answer state, and continuation. Hide secondary explanation controls before reducing the model.

### Image Behavior

Contain complete diagrams and labels. Never crop a relation, equation, balance, or path that the learner must reason about.

## Iteration Guide

1. Build home and course recommendation.
2. Add one complete interactive lesson.
3. Add explanation and error recovery.
4. Add course paths, streak, and leagues.
5. Add profile, settings, and subscription.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 37 available flow names were inventoried; onboarding, home, lesson, incorrect answers, courses, and profile were image-reviewed.
- Drag physics, voice assistant quality, and lesson audio were not directly assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
