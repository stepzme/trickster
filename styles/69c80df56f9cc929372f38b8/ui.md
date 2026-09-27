<design-context>
---
version: alpha
name: Opal-design-analysis
description: "An immersive black focus system with translucent glass controls, mint creation accents, electric-blue permission guidance, iridescent imagery, soft neon edges, and stable thumb-level timer actions."
colors: {primary: "#B9FFD0", on-primary: "#102018", primary-hover: "#CDFFDC", primary-focus: "#8CE8AC", ink: "#F7F8F8", ink-muted: "#B0B2B5", ink-subtle: "#797B80", ink-tertiary: "#515359", canvas: "#000000", surface-1: "#171719", surface-2: "#242529", surface-3: "#323338", surface-4: "#404147", hairline: "#2A2B2F", hairline-strong: "#42444A", hairline-tertiary: "#585A61", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#121316", brand-secure: "#147BFF", semantic-success: "#B9FFD0", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 8px, sm: 12px, md: 18px, lg: 24px, xl: 30px, xxl: 34px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Opal frames focus as a premium immersive state through black glass, glowing atmospheric cards, stable duration controls, and restrained mint or blue emphasis.

**Key Characteristics:** black glass, soft neon imagery, mint add controls, blue instructional arrows, translucent pills, rounded preset cards, and an icon-only dock.

## Colors

### Brand & Accent

Mint identifies creation, positive focus, and primary start states. Electric blue is used for system permission guidance and instructional emphasis.

### Surface

Use black as the canvas, translucent charcoal for controls, and blurred dark imagery behind focus modules.

### Text

White carries timer and preset titles; cool gray supports schedules, descriptions, and inactive tools.

### Semantic

Mint marks constructive state, blue guides setup, and amber flame indicates streak without competing with primary action.

## Typography

### Font Family

Use SF Pro Display for focus and timer headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with duration, blocked scope, schedule, or focus state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with calm proportions and legible small schedule metadata.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home uses horizontal preset rails and two-column soundscapes; Blocks uses a single vertical schedule list.

### Whitespace Philosophy

Allow dark negative space around score and timer state, while preset libraries can become visually dense.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use translucent glass, blur, emitted light, and restrained neon borders; avoid conventional opaque card shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 8px | Badges |
| rounded-sm | 12px | Buttons and fields |
| rounded-md | 18px | Cards |
| rounded-lg | 24px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Preset imagery sits in rounded portrait cards; soundscapes use wide rounded thumbnails; primary controls are pills.

## Components

### Buttons

Start Timer uses a wide translucent mint-tinted pill; Add uses compact dark pills and mint circular creation.

### Pricing Tabs

Duration, block scope, and templates use pill controls with bright selected fill or outline.

### Cards & Containers

Preset cards combine atmospheric art, title, benefit, schedule, and one Add action; block rows remain plain and dark.

### Inputs & Forms

System permission and block selection controls should inherit glass surfaces, blue guidance, and rounded geometry.

### Status & Build Page

Keep loading, active timer, next start, streak, and blocked scope close to the relevant focus control.

### Navigation

Use five line icons on black with a subtle white glow for the active destination.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the premium dark atmosphere and selective luminous emphasis.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't flatten atmospheric imagery into generic gradient cards.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten secondary metadata |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44px.

### Collapsing Strategy

Keep timer duration, block scope, and Start fixed; reduce descriptive copy and preset previews first.

### Image Behavior

Preserve luminous subjects and horizons inside rounded crops, with enough dark area for labels.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
