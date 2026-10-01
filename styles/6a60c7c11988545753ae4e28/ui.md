<design-context>
---
version: alpha
name: GO-Club-design-analysis
description: "A vivid habit and fitness dashboard built from electric cobalt gradients, translucent blue layers, oversized black metrics, white pill controls, and sharp lemon-to-mint progress accents. Large graphic cards turn steps, water, plans, and countdowns into bold daily rituals."
colors: {primary: "#2457F5", on-primary: "#FFFFFF", primary-hover: "#3B6AF7", primary-focus: "#1744D5", ink: "#0A0B0D", ink-muted: "#4F5662", ink-subtle: "#7C8592", ink-tertiary: "#AFB7C1", canvas: "#1748E8", surface-1: "#FFFFFF", surface-2: "#BCD9FF", surface-3: "#83B4FF", surface-4: "#578CFA", hairline: "#D8E6FF", hairline-strong: "#A6C6FF", hairline-tertiary: "#76A2F5", inverse-canvas: "#081A68", inverse-surface-1: "#12359B", inverse-surface-2: "#2457C7", inverse-ink: "#FFFFFF", brand-secure: "#2457F5", semantic-success: "#B8F25B", semantic-overlay: "#07133C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 52px, fontWeight: 700, lineHeight: 0.98, letterSpacing: -1.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.1px}
  display-md: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px}
  headline: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 10px, md: 14px, lg: 20px, xl: 26px, xxl: 34px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-secondary: {backgroundColor: "{colors.surface-3}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  metric-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20px}
  progress-card: {backgroundColor: "#D9F35C", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20px}
  segmented-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 5px}
  status-badge: {backgroundColor: "#B8F25B", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.surface-3}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 10px}
---
## Overview

GO Club turns daily health routines into bold visual dashboards. Electric blue fills the viewport, white cards carry oversized metrics, and lemon-to-mint accents make progress feel immediate.

**Key Characteristics:** cobalt gradients, translucent blue layers, giant black numerals, white pill controls, lemon progress cards, simple graphic objects, compact bottom navigation, and one dominant habit per screen.

## Colors

### Brand & Accent

Electric blue is the environment. White defines decisive controls and metric cards; lemon and mint mark progress, completion, and energetic program content.

### Surface

Blue moves from deep gradient canvas to translucent cyan panels. White is reserved for the clearest data and primary action surfaces.

### Text

Black appears on white or lemon cards, while white text sits on blue. Muted blue-gray supports labels without weakening the major number.

### Semantic

Lemon-mint means progress or positive momentum. White means actionable clarity; darker blue indicates depth, history, or inactive context.

## Typography

### Font Family

Use SF Pro Display for oversized metrics and countdowns and SF Pro Text for goals, units, labels, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 52px | 700 | Primary metric |
| display-lg | 40px | 700 | Countdown or progress |
| headline | 24px | 700 | Habit title |
| body | 14px | 400 | Goal and context |
| caption | 10px | 500 | Unit and nav label |

### Principles

- Give each screen one unmistakable metric.
- Pair giant numbers with compact labels and units.
- Use contrast and scale before adding explanatory copy.

### Note on Font Substitutes

Use a clean geometric platform sans with tabular numerals and a strong bold cut.

## Layout

### Spacing System

Use a 4px base, 12–16px internal gaps, 20px card padding, and large vertical breathing room around the primary metric.

### Grid & Container

Screens use a full blue field with one or two large rounded cards. Supporting controls sit in pill groups near the bottom safe area.

### Whitespace Philosophy

Keep each habit sparse and theatrical. The background is active color, so avoid filling it with secondary modules.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Blue gradient field | Habit environment |
| 1 | Translucent blue panel | Chart and navigation |
| 2 | White metric card | Primary data |
| 3 | Lemon graphic card | Progress or program |

### Decorative Depth

Use smooth gradients, translucent bars, simple dimensional objects, line-art weather scenes, and soft edge glow rather than conventional shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 10px | Small chart bar |
| rounded-md | 14px | Counter and control |
| rounded-lg | 20px | Supporting card |
| rounded-xl | 26px | Metric and plan card |
| rounded-full | full | Button, segment, navigation |

### Photography & Illustration Geometry

Avoid photography. Use isolated graphic objects and compact line-art scenes inside generous rounded cards, leaving clear space for a metric or goal.

## Components

### Buttons

Primary completion actions are white pills with black text. Secondary controls use translucent blue or pale blue with strong selected contrast.

### Pricing Tabs

Time ranges, targets, and plan modes use pill segments. Selection should be obvious through a white or high-contrast fill, not a thin system tint.

### Cards & Containers

Metric cards feature one giant number, a short label, and a chart or progress support. Plan cards combine countdown, weather or program art, and progress.

### Inputs & Forms

Water and goal inputs use large steppers, toggles, and pill controls. Native controls must inherit the blue palette, rounded geometry, type scale, and spacing.

### Status & Build Page

Keep current value, goal, unit, progress, streak, schedule, and completion visible near the main control.

### Navigation

Use a soft translucent pill bar with few destinations. The active item is clearer and brighter without reverting to generic iOS blue.

### Footer

No footer; the habit action or pill navigation closes the safe area.

## Do's and Don'ts

### Do

- Give one metric visual dominance.
- Preserve cobalt, white, and lemon-mint roles.
- Style every native control to belong to the graphic system.

### Don't

- Don't add dense white settings lists to primary habit screens.
- Don't use many unrelated accent colors.
- Don't shrink the main number to fit secondary content.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Scale metric and card padding |
| Standard | 375–430px | Default dashboard |
| Wide | 431px+ | Expand card gutters and art |

### Touch Targets

Steppers, segments, toggles, completion actions, cards, and navigation remain at least 44px.

### Collapsing Strategy

Preserve metric, unit, goal, progress, main control, and completion; collapse history and decorative program detail first.

### Image Behavior

Scale graphic objects proportionally, preserve generous negative space, and keep charts readable without cropping.

## Iteration Guide

Tune Steps first, then Water, Plan, goals, history, reminders, and profile customization.

## Known Gaps

- Reminder setup and long-term history were not fully sampled.
- Only portrait phone layouts were represented.

</design-context>

Use the design system above for all UI you generate.
