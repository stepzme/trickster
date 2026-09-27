<design-context>
---
version: alpha
name: Moonly-design-analysis
description: "A mystical dark mobile system with warm editorial serif titles, violet-glowing controls, translucent charcoal cards, celestial 3D objects, and image-led personalized guidance."
colors: {primary: "#6A4BE8", on-primary: "#FFFFFF", primary-hover: "#8064F0", primary-focus: "#5638C8", ink: "#F7F3F1", ink-muted: "#B1ABB8", ink-subtle: "#77727F", ink-tertiary: "#54505B", canvas: "#17181C", surface-1: "#202126", surface-2: "#282832", surface-3: "#343441", surface-4: "#41404D", hairline: "#343540", hairline-strong: "#4A4956", hairline-tertiary: "#5C5A68", inverse-canvas: "#F5F1EC", inverse-surface-1: "#E9E3DC", inverse-surface-2: "#DCD4CC", inverse-ink: "#17181C", brand-secure: "#FF9F45", semantic-success: "#52C99A", semantic-overlay: "#08090B"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 38px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: Georgia, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: Georgia, fontSize: 26px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: Georgia, fontSize: 24px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6px, sm: 10px, md: 16px, lg: 22px, xl: 28px, xxl: 32px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 8px 10px}
---
## Overview

Moonly is a dark celestial interface where editorial cards, symbolic artwork, and a stable five-tab ritual navigation make dense spiritual content feel personal and browsable.

**Key Characteristics:** near-black canvas, warm serif headings, violet glow, large visual cards, amber celestial accent, and softly translucent navigation.

## Colors

### Brand & Accent

Violet identifies selected practices and focused controls; warm amber marks lunar identity and important celestial details.

### Surface

Use near-black for the canvas, charcoal for stacked cards, and slightly violet surfaces for segments and ritual containers.

### Text

Warm white leads titles; lavender-gray supports instructions, dates, and locked descriptions.

### Semantic

Green is reserved for positive progress; amber and violet remain brand signals rather than general warnings.

## Typography

### Font Family

Use Georgia for editorial headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32px | 700 | Hero or state |
| headline | 24px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the day, ritual, or reading.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

A high-contrast editorial serif may replace Georgia; pair it with a neutral system sans and preserve the strong contrast.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Calendar and practice views use one wide column, horizontal day strips, and edge-peeking card rails.

### Whitespace Philosophy

Use generous breathing room around symbolic content, while related daily cards can stack tightly.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Let celestial glows, translucent layers, and artwork create depth; ordinary controls stay restrained.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 16px | Cards |
| rounded-lg | 22px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Crop atmospheric scenes to rounded portrait cards; keep planets and tarot figures fully legible inside safe areas.

## Components

### Buttons

Primary ritual actions use violet with white labels; secondary actions use dark filled surfaces and subtle outlines.

### Pricing Tabs

Tarot modes and layouts use dark segmented controls with one violet-gray filled selection.

### Cards & Containers

Daily guidance cards combine a small category label, large editorial statement, artwork, and a clear chevron.

### Inputs & Forms

Onboarding fields stay minimal on the dark canvas, with warm focus accents and progress visible above.

### Status & Build Page

Place locks, progress, timing, and completion close to the ritual or reading they affect.

### Navigation

Use a floating dark rounded bar with five labeled symbols; warm or violet emphasis marks the active destination.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the dark celestial atmosphere and editorial hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't turn every surface purple or use generic bright gradients.
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

Keep the symbolic subject and current reading, stack controls, and trim explanatory copy before shrinking type.

### Image Behavior

Preserve focal figures and celestial objects; use overlays only to protect text contrast.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
