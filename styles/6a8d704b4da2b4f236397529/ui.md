<design-context>
---
version: alpha
name: Skyeng-design-analysis
description: "A bright modular language-learning interface built on white space, saturated cyan actions, violet practice states, coral and green learning cards, and a mixed illustration system of soft 3D characters and flat educational scenes. Dense course variety stays approachable through rounded cards and a persistent five-tab shell."

colors:
  primary: "#11B8EA"
  on-primary: "#FFFFFF"
  primary-hover: "#35C8F1"
  primary-soft: "#DDF7FD"
  accent-violet: "#6035E6"
  accent-green: "#16C56B"
  accent-coral: "#FF7478"
  ink: "#15171A"
  ink-muted: "#6C7177"
  ink-subtle: "#A0A5AA"
  canvas: "#FFFFFF"
  surface-1: "#F4F5F6"
  surface-2: "#EAEDF0"
  surface-dark: "#090B0E"
  hairline: "#E1E4E7"
  semantic-success: "#16C56B"
  semantic-warning: "#F3A932"
  semantic-danger: "#EF6175"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  button-practice: { backgroundColor: "{colors.accent-violet}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  learning-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  promo-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  lesson-step: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  search-field: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62px }
---

## Overview

Skyeng is a broad language-learning product combining self-study, lessons, AI speaking, vocabulary, homework, schedules, messages, and courses. Cyan anchors navigation and acquisition, violet marks active practice, and colorful cards with 3D characters or flat scenes keep learning inviting.

**Key Characteristics:**
- White canvas and saturated cyan primary actions.
- Violet practice and recording controls.
- Coral, green, dark blue, and black content cards.
- Mixed 3D character and flat educational illustration system.
- Five-tab navigation across Home, Homework, Schedule, Messages, and Practice.

## Colors

### Brand & Accent

- **Skyeng Cyan** ({colors.primary}) marks primary actions, active navigation, links, and search.
- **Practice Violet** ({colors.accent-violet}) marks lesson progress, audio, and recording.
- Green confirms correct learning states; coral distinguishes offers and course categories.

### Surface

- **Canvas** ({colors.canvas}) is the main learning background.
- **Surface 1** ({colors.surface-1}) carries lesson steps and settings.
- **Surface 2** ({colors.surface-2}) supports inactive controls.
- **Dark Surface** ({colors.surface-dark}) is used for immersive speaking practice.

### Text

- **Ink** ({colors.ink}) carries titles and lesson content.
- **Muted** ({colors.ink-muted}) carries explanations and metadata.
- **Subtle** ({colors.ink-subtle}) is for inactive navigation and secondary status.

### Semantic

Green communicates correct or complete, amber attention, and red error or report. Learning-category color must not replace semantic feedback.

## Typography

### Font Family

Use a neutral system sans with bold educational headings and highly readable exercise text.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 38px | 700 | Onboarding claim |
| `{typography.display-lg}` | 30px | 700 | Major learning title |
| `{typography.display-md}` | 25px | 700 | Screen title |
| `{typography.headline}` | 21px | 700 | Learning section |
| `{typography.card-title}` | 16px | 600 | Course or practice title |
| `{typography.body}` | 14px | 400 | Lesson and explanation text |
| `{typography.caption}` | 10px | 400 | Duration, status, navigation |

### Principles

- Keep exercise prompts and examples readable.
- Use weight to separate instruction from answer.
- Avoid all caps in learning content.
- Keep bilingual or phonetic lines clearly grouped.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve language character coverage and comfortable exercise line height.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 10–12px card gaps, and 24px between learning sections.

### Grid & Container

Home is a vertical feed with horizontal story and course strips. Practice and vocabulary use one-column lesson steps. Catalog areas may use two-column cards.

### Whitespace Philosophy

Give instructions and exercises clear breathing room. Discovery feeds can be denser, but each learning task should focus on one decision.

## Elevation & Depth

Use flat colored cards, soft shadows, and occasional dark immersive modes. Character rendering supplies depth without heavy chrome.

### Decorative Depth

Use 3D characters, colored card backgrounds, and simple gradient atmosphere. Avoid adding depth effects to form-like lesson steps.

## Shapes

### Border Radius Scale

- Learning and promo cards use 12–16px corners.
- Buttons use 12px or pill geometry.
- Profile controls and character heads may be circular.
- Lesson steps stay rectangular with soft corners.

### Photography & Illustration Geometry

Use full-card illustrations for topics and 3D characters as isolated focal subjects. Video or tutor photography remains rectangular and softly rounded.

## Components

### Buttons

Primary acquisition and navigation actions use cyan; practice and recording actions use violet. Correct completion can use green. Native controls must inherit the package styling.

### Pricing Tabs

Course filters and product selectors use chips or compact tabs. Active state uses cyan fill or underline; avoid heavy segmented chrome.

### Cards & Containers

Learning cards combine title, duration, status, and one image. Promo cards may use stronger colors. Lesson steps use pale surfaces with numbered labels and embedded controls.

### Inputs & Forms

Search, promo code, answer, and recording inputs use rounded light fields. Speech tests show microphone state, waveform, transcript, and retry close together.

### Status & Build Page

Progress bars and numbered steps show lesson advancement. Recognition success uses a mint panel; failed or skipped content retains the same task context.

### Navigation

Use five bottom destinations for Home, Homework, Schedule, Messages, and Practice. Vocabulary and profile open from contextual links and top controls.

### Footer

There is no footer. End learning screens with the next action and bottom safe-area spacing.

## Do's and Don'ts

### Do

- Keep one primary learning decision per step.
- Use cyan for product navigation.
- Use violet consistently for active practice.
- Pair semantic feedback with text.
- Let illustrations make topics memorable.

### Don't

- Do not turn every card into a different style.
- Do not use decorative color as correctness feedback.
- Do not hide recording or playback state.
- Do not crowd exercise copy.
- Do not expose default platform controls.

## Responsive Behavior

### Breakpoints

Keep exercises and vocabulary single-column. Discovery cards may stack when titles or imagery no longer fit.

### Touch Targets

Lesson answers, audio, recording, cards, chips, and navigation require at least 44px targets.

### Collapsing Strategy

Allow story and course strips to scroll horizontally. Keep lesson progress and next action visible while step content scrolls.

### Image Behavior

Use `contain` for isolated characters and `cover` for full-card scenes or video. Preserve character faces and instructional context.

## Iteration Guide

Start with the white shell, cyan actions, five-tab navigation, and learning cards. Add practice and vocabulary, then violet audio states and the illustration system.

## Known Gaps

The reviewed scenarios cover onboarding, home, courses, lessons, AI speaking, vocabulary, profile, and settings. Tablet layouts, accessibility scaling, and every live-tutor state were not visible.
