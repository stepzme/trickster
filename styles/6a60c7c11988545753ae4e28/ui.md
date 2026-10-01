<design-context>
---
version: 1
platform: iOS
name: GO-Club-design-analysis
description: "A vivid habit and fitness dashboard built from electric cobalt gradients, translucent blue layers, oversized black metrics, white pill controls, and sharp lemon-to-mint progress accents. Large graphic cards turn steps, water, plans, and countdowns into bold daily rituals."
colors: {primary: "#2457F5", on-primary: "#FFFFFF", primary-focus: "#1744D5", ink: "#0A0B0D", ink-muted: "#4F5662", ink-subtle: "#7C8592", ink-tertiary: "#AFB7C1", canvas: "#1748E8", surface-1: "#FFFFFF", surface-2: "#BCD9FF", surface-3: "#83B4FF", surface-4: "#578CFA", hairline: "#D8E6FF", hairline-strong: "#A6C6FF", hairline-tertiary: "#76A2F5", inverse-canvas: "#081A68", inverse-surface-1: "#12359B", inverse-surface-2: "#2457C7", inverse-ink: "#FFFFFF", brand-secure: "#2457F5", semantic-success: "#B8F25B", semantic-overlay: "#07133C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 52, fontWeight: 700, lineHeight: 0.98, letterSpacing: -1.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.1}
  display-md: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6}
  headline: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 10, md: 14, lg: 20, xl: 26, xxl: 34, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-secondary: {backgroundColor: "{colors.surface-3}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  metric-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20}
  progress-card: {backgroundColor: "#D9F35C", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20}
  segmented-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 5}
  status-badge: {backgroundColor: "#B8F25B", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.surface-3}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 10]}
---

# Overview

GO Club turns daily health routines into bold visual dashboards. Electric blue fills the viewport, white cards carry oversized metrics, and lemon-to-mint accents make progress feel immediate.

**Key Characteristics:** cobalt gradients, translucent blue layers, giant black numerals, white pill controls, lemon progress cards, simple graphic objects, compact bottom navigation, and one dominant habit per screen.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: cobalt gradients.
- The reviewed screens show this treatment: translucent blue layers.
- The reviewed screens show this treatment: giant black numerals.
- The reviewed screens show this treatment: white pill controls.
- The reviewed screens show this treatment: lemon progress cards.
- The reviewed screens show this treatment: simple graphic objects.
- The reviewed screens show this treatment: compact bottom navigation.
- The reviewed screens show this treatment: one dominant habit per screen.

# Color and surfaces

### Brand & Accent

Electric blue is the environment. White defines decisive controls and metric cards; lemon and mint mark progress, completion, and energetic program content.

### Surface

Blue moves from deep gradient canvas to translucent cyan panels. White is reserved for the clearest data and primary action surfaces.

### Text

Black appears on white or lemon cards, while white text sits on blue. Muted blue-gray supports labels without weakening the major number.

### Semantic

Lemon-mint means progress or positive momentum. White means actionable clarity; darker blue indicates depth, history, or inactive context.

# Typography

### Font Family

Use SF Pro Display for oversized metrics and countdowns and SF Pro Text for goals, units, labels, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 52pt | 700 | Primary metric |
| display-lg | 40pt | 700 | Countdown or progress |
| headline | 24pt | 700 | Habit title |
| body | 14pt | 400 | Goal and context |
| caption | 10pt | 500 | Unit and nav label |

### Principles

- Give each screen one unmistakable metric.
- Pair giant numbers with compact labels and units.
- Use contrast and scale before adding explanatory copy.

### Note on Font Substitutes

Use a clean geometric platform sans with tabular numerals and a strong bold cut.

# Screen composition

### Grid & Container

Screens use a full blue field with one or two large rounded cards. Supporting controls sit in pill groups near the bottom safe area.

### Whitespace Philosophy

Keep each habit sparse and theatrical. The background is active color, so avoid filling it with secondary modules.

# Navigation appearance

Use a soft translucent pill bar with few destinations. The active item is clearer and brighter without reverting to generic iOS blue.

# Components

### Buttons

Primary completion actions are white pills with black text. Secondary controls use translucent blue or pale blue with strong selected contrast.

Time ranges, targets, and plan modes use pill segments. Selection should be obvious through a white or high-contrast fill, not a thin system tint.

### Cards & Containers

Metric cards feature one giant number, a short label, and a chart or progress support. Plan cards combine countdown, weather or program art, and progress.

### Inputs & Forms

Water and goal inputs use large steppers, toggles, and pill controls. Native controls must inherit the blue palette, rounded geometry, type scale, and spacing.

### Status & Build Page

Keep current value, goal, unit, progress, streak, schedule, and completion visible near the main control.

### Navigation

Use a soft translucent pill bar with few destinations. The active item is clearer and brighter without reverting to generic iOS blue.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Blue gradient field | Habit environment |
| 1 | Translucent blue panel | Chart and navigation |
| 2 | White metric card | Primary data |
| 3 | Lemon graphic card | Progress or program |

### Decorative Depth

Use smooth gradients, translucent bars, simple dimensional objects, line-art weather scenes, and soft edge glow rather than conventional shadow.

# States

Keep current value, goal, unit, progress, streak, schedule, and completion visible near the main control.

# iOS adaptation

### Touch Targets

Steppers, segments, toggles, completion actions, cards, and navigation remain at least 44pt.

### Collapsing Strategy

Preserve metric, unit, goal, progress, main control, and completion; collapse history and decorative program detail first.

### Image Behavior

Scale graphic objects proportionally, preserve generous negative space, and keep charts readable without cropping.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Give one metric visual dominance.
- Preserve cobalt, white, and lemon-mint roles.
- Style every native control to belong to the graphic system.

### Don't

- Don't add dense white settings lists to primary habit screens.
- Don't use many unrelated accent colors.
- Don't shrink the main number to fit secondary content.

</design-context>
