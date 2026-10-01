<design-context>
---
version: 1
platform: iOS
name: Brilliant-design-analysis
description: "A bright interactive-learning interface with white space, heavy black hierarchy, vivid blue or green lesson actions, soft-gray containers, and compact 3D diagrams. Progress is expressed through short checks, skill paths, manipulable visual models, and immediate explanations rather than long reading."
colors:
  primary: "#4267F5"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
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
---

# Overview

Brilliant makes each lesson a sequence of small visual decisions. Home recommends the next skill; the lesson alternates interactive diagrams, answers, explanations, and progress feedback.

**Key Characteristics:**
- Very bright white canvas.
- Blue and teal course accents.
- Compact 3D learning objects.
- Short progress bars and energy count.
- Rounded bottom navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Very bright white canvas.
- The reviewed screens show this treatment: Blue and teal course accents.
- The reviewed screens show this treatment: Compact 3D learning objects.
- The reviewed screens show this treatment: Short progress bars and energy count.
- The reviewed screens show this treatment: Rounded bottom navigation.

# Color and surfaces

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

# Typography

### Font Family

- **SF Pro Display** — course names and question prompts.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36pt bold for major statements, 22pt bold for screen headings, 16pt semibold for cards, 14pt regular for detail, and 15pt semibold for primary actions.

### Principles

- Ask one clear question at a time.
- Keep diagrams larger than helper text.
- Use color to distinguish variables consistently.
- Explain an error immediately.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt edge gutters, 12pt control gaps, and 16pt card padding.

### Grid & Container

Home centers one recommended course card above a three-tab nav. Lessons use a top progress bar, a central diagram, and one bottom action; course catalog uses grouped lists.

### Whitespace Philosophy

Give each interactive model room to be manipulated and understood without surrounding dashboard noise.

# Navigation appearance

Home, Courses, and You are stable. Lesson navigation becomes focused with close, progress, sound, and energy.

# Components

### Buttons

Blue or course-colored full-width buttons start and continue. Answer choices become outlined cards with clear selected and result states.

Home, Courses, and You use a rounded bottom bar; course levels and skill paths use large selectable stages.

### Cards & Containers

Recommended course cards combine subject, level, illustration, and one action. Explanation cards stay text-led with a supporting diagram.

### Inputs & Forms

Answers use direct taps, drag manipulation, numeric entry, or short choices; account forms remain conventional.

### Status & Build Page

Show lesson progress, energy, correct, incorrect, explanation, skill check, streak, league, and completed state explicitly.

### Navigation

Home, Courses, and You are stable. Lesson navigation becomes focused with close, progress, sound, and energy.

The lesson action remains above the safe area; the three-tab nav returns outside an active lesson.

# Imagery and icons

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use soft 3D volume for educational objects, while forms and navigation stay almost flat.

# States

Show lesson progress, energy, correct, incorrect, explanation, skill check, streak, league, and completed state explicitly.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, and primary action at least 44pt.

### Collapsing Strategy

Preserve prompt, diagram, answer state, and continuation. Hide secondary explanation controls before reducing the model.

### Image Behavior

Contain complete diagrams and labels. Never crop a relation, equation, balance, or path that the learner must reason about.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 37 available flow names were inventoried; onboarding, home, lesson, incorrect answers, courses, and profile were image-reviewed.
- Drag physics, voice assistant quality, and lesson audio were not directly assessed.

</design-context>
