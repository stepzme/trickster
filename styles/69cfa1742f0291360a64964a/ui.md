<design-context>
---
version: alpha
name: Duolingo-design-analysis
description: "A gamified learning path on white with saturated green progression, cyan secondary actions, chunky outlined controls, bright reward colors, circular lesson nodes, persistent resource counters, and expressive mascot scenes that turn completion, streaks, and setbacks into emotional events."
colors:
  primary: "#58CC02"
  on-primary: "#FFFFFF"
  primary-hover: "#46A302"
  primary-soft: "#DDF8C7"
  accent: "#1CB0F6"
  accent-purple: "#CE82FF"
  ink: "#3C3C3C"
  ink-muted: "#777777"
  ink-subtle: "#AFAFAF"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#E5E5E5"
  hairline: "#D7D7D7"
  semantic-success: "#58CC02"
  semantic-warning: "#FFC800"
  semantic-danger: "#FF4B4B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: DIN Round, fontSize: 40px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.5px }
  display-lg: { fontFamily: DIN Round, fontSize: 34px, fontWeight: 800, lineHeight: 1.10, letterSpacing: -0.3px }
  display-md: { fontFamily: DIN Round, fontSize: 28px, fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: DIN Round, fontSize: 22px, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: DIN Round, fontSize: 18px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: DIN Round, fontSize: 16px, fontWeight: 700, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: DIN Round, fontSize: 17px, fontWeight: 500, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: DIN Round, fontSize: 15px, fontWeight: 500, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: DIN Round, fontSize: 13px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: DIN Round, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: DIN Round, fontSize: 15px, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0.4px }
  eyebrow: { fontFamily: DIN Round, fontSize: 12px, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0.5px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  lesson-node: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.full}", padding: 14px }
  answer-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  reward-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Duolingo turns learning into a colorful progression game. A winding path, chunky controls, resource counters, and mascot reactions make every lesson and reward feel tangible.

**Key Characteristics:**
- Bright green progression and primary actions.
- Circular lesson nodes on a winding vertical path.
- Chunky rounded controls with strong pressed depth.
- Persistent streak, currency, and energy counters.
- Expressive mascot scenes for feedback and rewards.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Progress, continue, correct state, and active lesson.
- **Cyan Accent** ({colors.accent}): Secondary progression and links.
- **Purple Accent** ({colors.accent-purple}): Premium and special modes.

### Surface
- **Canvas** ({colors.canvas}): Path, lessons, and profile.
- **Surface 1** ({colors.surface-1}): Cards and neutral answer state.
- **Surface 2** ({colors.surface-2}): Disabled nodes and borders.
- **Hairline** ({colors.hairline}): Control outlines.

### Text
- **Ink** ({colors.ink}): Prompts, titles, and answer text.
- **Ink Muted** ({colors.ink-muted}): Explanations and supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Locked and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Correct and completed.
- **Warning** ({colors.semantic-warning}): Streak and reward urgency.
- **Danger** ({colors.semantic-danger}): Incorrect and depleted state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family
- **DIN Round** — rounded learning, reward, and navigation voice.
- **SF Mono** — fixed-width notation in code or math when required.

### Hierarchy
Use 34–40px extra-bold for reward moments, 22px for prompts, 18px for cards, 15–17px lesson copy, and 11–13px counters.

### Principles
- Keep instructions short and direct.
- Use uppercase only for compact action labels.
- Pair friendly rounded type with strong hierarchy.
- Keep answer text large enough for scanning.

### Note on Font Substitutes
Use **Nunito Sans** or **Arial Rounded** when DIN Round is unavailable.

## Layout

### Spacing System
Use a 4px base, 16px screen gutters, 12px answer gaps, and generous vertical distance between path nodes.

### Grid & Container
Home is a centered winding path under counters and a module banner. Lessons become a prompt, answer area, progress bar, and bottom action.

### Whitespace Philosophy
Leave open white space around one learning decision at a time; reward screens may become visually full.

## Elevation & Depth
Use thick lower borders and layered circular nodes to create toy-like pressable depth without realistic shadow.

### Decorative Depth
Characters, stars, chests, ribbons, and colored stage backgrounds provide celebration and progression depth.

## Shapes

### Border Radius Scale
Use 12px for small controls, 16px for answers and buttons, 20px for cards, and full circles for path nodes and counters.

### Photography & Illustration Geometry
Use bold flat characters with large eyes, simple silhouettes, expressive poses, and graphic background shards or gradients.

## Components

### Buttons
Primary actions are wide green or cyan blocks with a darker lower edge. Secondary buttons are white with thick gray outlines.

### Pricing Tabs
Course, practice, store, and subscription choices use chunky segments or cards with clear selected and locked states.

### Cards & Containers
Use lesson nodes, answer tiles, reward cards, streak panels, league rows, chests, and mascot feedback scenes.

### Inputs & Forms
Typed, spoken, matching, listening, and multiple-choice answers use large task-specific controls and immediate validation.

### Status & Build Page
Show correct, incorrect, streak, energy, currency, locked, legendary, boost, and completion states with color, text, and character response.

### Navigation
Persistent bottom navigation covers learning path, practice, leagues, social, profile, and more; resources stay at the top.

### Footer
Lessons use a fixed validation or continue action above the safe area; the home footer remains a colorful icon bar.

## Do's and Don'ts

### Do
- Focus each lesson on one clear decision.
- Celebrate meaningful progress visually.
- Pair semantic color with explicit text.
- Keep resource counters persistent.

### Don't
- Don't make every screen equally celebratory.
- Don't use subtle low-contrast buttons.
- Don't punish errors without explanation.
- Don't mix realistic imagery with mascot scenes.

## Responsive Behavior

### Breakpoints
Use the centered path or lesson column up to 767px, a wider lesson canvas on tablet, and sidebar navigation plus centered task above 1024px.

### Touch Targets
Keep nodes, answers, audio, record, continue, counters, and navigation at least 44px.

### Collapsing Strategy
Preserve progress, prompt, answer, validation, and continue. Move secondary counters or social context outside the active task.

### Image Behavior
Contain characters without cropping expressive faces or gestures; allow celebration backgrounds to fill while protecting action labels.

## Iteration Guide
1. Build path, counters, and navigation.
2. Add core lesson interactions and validation.
3. Add completion, streak, and rewards.
4. Add practice, courses, leagues, and social.
5. Add subscription, avatars, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 100 flow names were inventoried; Home, Start Lesson, and Lesson Complete were image-reviewed.
- Several sampled lesson steps were video-only; broader course types and subscription were not deeply assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
