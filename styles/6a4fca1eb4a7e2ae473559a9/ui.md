<design-context>
---
version: alpha
name: Numo-design-analysis
description: "A black ADHD-support interface with condensed white display type, electric blue task actions, hot orange-red streak energy, sparse outlined controls, and saturated editorial story graphics."
colors: {primary: "#087CFF", on-primary: "#FFFFFF", primary-hover: "#2E91FF", primary-focus: "#0065D6", ink: "#F8F8F8", ink-muted: "#A4A5AA", ink-subtle: "#74757B", ink-tertiary: "#505157", canvas: "#000000", surface-1: "#151619", surface-2: "#25262A", surface-3: "#333439", surface-4: "#414248", hairline: "#2B2C31", hairline-strong: "#43444A", hairline-tertiary: "#585A61", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#FF3B20", semantic-success: "#35C878", semantic-overlay: "#17181C"}
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
rounded: {xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 28px, pill: 9999px, full: 9999px}
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
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Numo is a stark black productivity system where a sparse daily task surface, bold condensed headings, blue creation controls, and saturated editorial learning covers create motivational intensity.

**Key Characteristics:** pure black canvas, condensed white type, electric blue actions, orange-red streaks, outlined filters, floating voice/add controls, and collage story covers.

## Colors

### Brand & Accent

Electric blue owns task creation, active navigation, and primary story continuation. Orange-red carries streak, urgency, and motivational energy.

### Surface

Use pure black for primary screens, charcoal for completed tasks and filters, and deep blue-black for learning detail.

### Text

White leads dates, tasks, and collection headings; cool gray supports durations, prompts, and inactive navigation.

### Semantic

Green confirms completion; orange-red should remain a motivation signal and not replace destructive feedback.

## Typography

### Font Family

Use SF Pro Display for bold motivational headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the day, task, streak, or next learning story.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a narrow heavy display sans such as Impact or a condensed grotesk, paired with a neutral system sans.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Do uses one sparse task column and horizontal date strip; Hack uses two-column graphic covers and single-column story detail.

### Whitespace Philosophy

Large black gaps are deliberate around short daily lists; learning and community screens can become denser.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use saturated cover texture and floating bottom actions; ordinary task controls stay flat and sharply bounded.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 14px | Cards |
| rounded-lg | 18px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Story covers use rounded squares with cropped oversized type; avatars and community photos use circles or compact rounded rectangles.

## Components

### Buttons

Primary actions are electric blue pills; voice is white circular; filters are black outlined pills with white labels.

### Pricing Tabs

Routine, Health, and Relax use outlined pills; the selected date uses a thin white rounded outline with blue detail.

### Cards & Containers

Tasks use dark blue or charcoal full-width rows; learning collections are graphic covers rather than conventional cards.

### Inputs & Forms

Task capture should inherit the black canvas, strong white text, blue focus, and floating action language.

### Status & Build Page

Keep streak, completion, story progress, votes, and team state beside the content they affect.

### Navigation

Use five icon-and-label destinations on black, with electric blue for the active destination.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the sparse daily surface and energetic editorial learning language.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't fill all empty black space with generic cards or gradients.
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

Keep current day, task action, and next story first; reduce community metadata before primary participation.

### Image Behavior

Allow cover type and collage to crop within tiles, but keep faces and video thumbnails legible.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
