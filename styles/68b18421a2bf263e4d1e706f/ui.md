<design-context>
---
version: alpha
name: Tinkoff-Journal-design-analysis
description: "An editorial learning app built from white reading surfaces, oversized black headlines, vivid cobalt actions, image-led article cards, and expressive flat line illustrations on bold color fields. The interface balances magazine energy with highly readable course and calculator content."

colors:
  primary: "#302DE8"
  on-primary: "#FFFFFF"
  primary-pressed: "#2220C7"
  ink: "#111113"
  ink-muted: "#696B70"
  ink-subtle: "#A4A6AA"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F3F5"
  accent-mint: "#A8E8BC"
  accent-sky: "#8CC9F3"
  hairline: "#E0E1E4"
  semantic-success: "#329B55"
  semantic-warning: "#DFA524"
  semantic-danger: "#D84F57"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 800, lineHeight: 1.06, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 28px, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 18px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15px, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 3px, sm: 7px, md: 11px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  article-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  course-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  quiz-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.lg}", height: 60px }
---

## Overview

Tinkoff Journal uses magazine-scale type, real photography, and bold illustrated explainers. White reading surfaces keep long-form content calm while cobalt actions and colorful course art add energy.

## Colors

### Brand & Accent

Cobalt is the primary action and launch color. Mint, sky, yellow, and lavender belong to illustration and course covers.

### Surface

White dominates reading and settings. Pale gray separates cards, sheets, and inactive controls.

### Text

Near-black carries headlines and body; gray carries dates, categories, progress, and secondary notes.

### Semantic

Green confirms correct answers, amber warns, and red marks errors. Illustration colors never substitute for feedback.

## Typography

### Font Family

Use a bold grotesk for editorial display and a neutral sans for long-form reading.

### Hierarchy

Use 28–42px article and course headlines, 17–22px card titles, 15–17px body, and 11–13px metadata.

### Principles

Let headlines be assertive, keep body line length comfortable, and make quiz values visually distinct from explanation.

### Note on Font Substitutes

Use Inter, Arial, or SF Pro with strong 700–800 display weights.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 12–16px card gaps, and 24–32px between editorial sections.

### Grid & Container

Journal uses stacked photo cards; Textbook uses large course covers. Lessons and quizzes are single-column with bottom sheets.

### Whitespace Philosophy

Give headlines and body generous space. Let large images and illustrations form section boundaries.

## Elevation & Depth

Cards and lesson sheets use soft lift over gray or media. Most reading surfaces remain flat.

### Decorative Depth

Use bold flat illustration, photography, and occasional colored course panels. Avoid UI gradients and heavy shadow.

## Shapes

### Border Radius Scale

Article and course media use 16px, quiz sheets 22px, buttons 7–11px, and bottom navigation uses soft rounded corners.

### Photography & Illustration Geometry

Photography uses wide editorial crops; illustrations use poster-like rectangles with one central metaphor.

## Components

### Buttons

Primary actions are cobalt rectangles with modest rounding. Native controls must inherit cobalt selection and editorial typography.

### Pricing Tabs

Course sections, answers, and calculator modes use compact segments with clear selected state.

### Cards & Containers

Article cards pair large media with date, headline, and engagement. Course cards foreground illustrated covers and progress.

### Inputs & Forms

Search and calculator inputs use pale fields. Quiz answers use outlined cards and visible result states.

### Status & Build Page

Lesson progress, score, answer correctness, notification state, and saved content appear beside the relevant item.

### Navigation

Use three bottom destinations for Textbook, Journal, and Calculators. Focused reading uses back and close actions.

### Footer

There is no footer. Articles and lessons end with related content or rating actions above navigation.

## Do's and Don'ts

### Do

- Use bold editorial hierarchy.
- Keep long-form reading comfortable.
- Reuse the flat illustration family.
- Separate learning from settings chrome.

### Don't

- Do not use tiny body text.
- Do not mix unrelated illustration styles.
- Do not overload course covers with UI.
- Do not expose default blue controls.

## Responsive Behavior

### Breakpoints

Keep lessons single-column on phones. Wider screens may center reading and place navigation or related content beside it.

### Touch Targets

Article cards, answers, navigation, search, and lesson actions require at least 44px targets.

### Collapsing Strategy

Keep course progression linear. Move secondary topic filters into horizontal rails or menus on narrow screens.

### Image Behavior

Use `cover` for editorial photography and `contain` for course illustration when the whole metaphor matters.

## Iteration Guide

Start with white reading canvas, oversized headlines, three-tab navigation, article cards, course covers, and lesson sheets. Add quizzes and calculators afterward.

## Known Gaps

Screen Gallery exposes 34 image screens but no flows. Journal, topic catalog, Textbook, lessons, quizzes, notifications, and settings are visually documented; exact transition order remains unverified.

</design-context>

Use the design system above for all UI you generate.
