<design-context>
---
version: alpha
name: Simple-design-analysis
description: "A dark wellness dashboard built on deep indigo-charcoal surfaces, lavender-to-violet premium actions, green progress signals, rounded tracking modules, and image-led learning cards. A plush purple mascot and friendly editorial illustrations soften the otherwise data-rich health interface."

colors:
  primary: "#A56AFF"
  on-primary: "#FFFFFF"
  primary-hover: "#B986FF"
  primary-soft: "#3A3151"
  ink: "#F7F5FA"
  ink-muted: "#B7B3BF"
  ink-subtle: "#7F7C87"
  canvas: "#20202B"
  surface-1: "#292936"
  surface-2: "#323240"
  surface-3: "#3C3C4B"
  hairline: "#464655"
  semantic-success: "#78D65B"
  semantic-warning: "#F2B34C"
  semantic-danger: "#EF657A"
  semantic-info: "#61A9FF"
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  tracker-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  metric-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62px }
---

## Overview

Simple is a dark AI wellness companion combining daily plans, fasting, food, hydration, movement, weight, coaching, and a content library. Violet actions and green progress stand out on layered indigo-charcoal cards, while a plush mascot and friendly illustrations make guidance approachable.

**Key Characteristics:**
- Deep indigo-charcoal shell and layered tracking cards.
- Lavender and violet for premium and primary actions.
- Green for completed goals and healthy progress.
- Four-tab navigation across Home, Coach, Track, and Explore.
- Mascot and editorial imagery in learning areas.

## Colors

### Brand & Accent

- **Lavender Violet** ({colors.primary}) marks primary, premium, and selected actions.
- **Soft Violet** ({colors.primary-soft}) supports selected fields and subtle emphasis.

### Surface

- **Canvas** ({colors.canvas}) is the app shell.
- **Surface 1** ({colors.surface-1}) carries large tracker and content cards.
- **Surface 2** ({colors.surface-2}) carries fields and metric tiles.
- **Surface 3** ({colors.surface-3}) is for pressed and nested states.

### Text

- **Ink** ({colors.ink}) carries headings and metrics.
- **Muted** ({colors.ink-muted}) carries explanations.
- **Subtle** ({colors.ink-subtle}) is for inactive navigation and metadata.

### Semantic

Green communicates progress, amber attention, pink-red danger, and blue hydration or information. Pair color with labels and icons.

## Typography

### Font Family

Use a neutral system sans with strong, compact headings and clear health metrics.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 38px | 700 | Main score |
| `{typography.display-lg}` | 30px | 700 | Screen title |
| `{typography.display-md}` | 25px | 700 | Section title |
| `{typography.headline}` | 21px | 700 | Plan or tracker heading |
| `{typography.card-title}` | 16px | 600 | Metric and content title |
| `{typography.body}` | 14px | 400 | Coaching and tracker copy |
| `{typography.caption}` | 10px | 400 | Goals and metadata |

### Principles

- Keep goals and progress numeric and scannable.
- Use bold copy for actionable health guidance.
- Keep assistant responses conversational and readable.
- Avoid overly clinical typography.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve strong headings, compact metrics, and comfortable coaching copy.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8px card gaps, and 24px between major tracking or content sections.

### Grid & Container

Home and Track use one vertical dashboard with occasional two-column metric tiles. Explore uses horizontal shelves and two-column content grids. Coach is a single chat column.

### Whitespace Philosophy

Keep dashboards dense but separate domains with card boundaries. Explore can breathe more around mascot and educational content.

## Elevation & Depth

Use tonal indigo steps, violet glow, and image contrast. Shadows remain restrained on the dark shell.

### Decorative Depth

Use soft blurred color at the top, progress arcs, and mascot imagery. Avoid glass-heavy effects or glossy metric cards.

## Shapes

### Border Radius Scale

- Tracking cards use 16px corners.
- Content and input cards use 12px corners.
- Progress arcs and profile imagery are circular.
- Primary actions and filters are pill-shaped.

### Photography & Illustration Geometry

Use edge-to-edge photo cards for workouts and recipes. Mascot and flat illustrations sit on clean colored fields with generous cropping.

## Components

### Buttons

Primary and premium actions use lavender or violet pills. Semantic actions may use green only when they confirm healthy progress. Native controls must inherit the dark palette and radii.

### Pricing Tabs

Explore filters and meal types use pill segments. Selected state gains a lavender fill; inactive options remain dark.

### Cards & Containers

Tracker cards combine metric, goal, progress, and one action. Content cards place title over photography or illustration. Premium locks stay visible but secondary.

### Inputs & Forms

Meal logging and chat use dark rounded fields, contextual chips, scan action, and anchored confirmation. Keep keyboard state and close action obvious.

### Status & Build Page

Progress arcs show meals, hydration, movement, fasting, and weight. Coach results use green checks and amber warnings. Locked score states explain the next action.

### Navigation

Use four bottom destinations for Home, Coach, Track, and Explore. Profile opens from a circular top-right control.

### Footer

There is no footer. End content above the persistent dark navigation and safe area.

## Do's and Don'ts

### Do

- Keep tracking metrics concise.
- Use violet for primary and premium actions.
- Use green only for progress.
- Separate coaching from raw tracking.
- Let mascot and content imagery humanize learning.

### Don't

- Do not add bright colors without semantic purpose.
- Do not make every card a promotion.
- Do not hide locked versus available content.
- Do not use light surfaces inside the dark shell without reason.
- Do not expose default platform styling.

## Responsive Behavior

### Breakpoints

Keep Coach and Track single-column. Content grids may collapse to one column when captions or imagery become cramped.

### Touch Targets

Trackers, add actions, chips, cards, and bottom navigation require at least 44px targets.

### Collapsing Strategy

Allow content shelves and filters to scroll horizontally. Keep logging or chat actions above the keyboard.

### Image Behavior

Use `cover` for workout and food photography and `contain` for mascot or flat illustration. Preserve readable text overlays.

## Iteration Guide

Start with the dark shell, four-tab navigation, tracker cards, violet actions, and green progress. Add Coach and Explore next, then mascot and premium states.

## Known Gaps

The reviewed scenarios cover onboarding, home, meal logging, Coach, Track, fasting, Explore, workouts, recipes, and profile. Tablet behavior, accessibility scaling, and all health-data errors were not visible.
