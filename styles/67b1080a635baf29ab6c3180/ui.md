<design-context>
---
version: alpha
name: memo-design-analysis
description: "A mobile design system defined by acid-green branding, black immersion, full-screen memes, saturated collections, and a screen mascot."
colors: {primary: "#43F36B", on-primary: "#FFFFFF", primary-hover: "#43F36B", primary-focus: "#43F36B", ink: "#FFFFFF", ink-muted: "#777981", ink-subtle: "#A7A8AE", ink-tertiary: "#CACBD0", canvas: "#050505", surface-1: "#171717", surface-2: "#171717", surface-3: "#E2E3E7", surface-4: "#D6D7DC", hairline: "#E5E6E9", hairline-strong: "#CFD0D5", hairline-tertiary: "#B6B8BF", inverse-canvas: "#17181C", inverse-surface-1: "#292A30", inverse-surface-2: "#3B3D45", inverse-ink: "#FFFFFF", brand-secure: "#FFE928", semantic-success: "#34A86B", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px}
  compact-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7px 10px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

memo is defined by acid-green branding, black immersion, full-screen memes, saturated collections, and a screen mascot.

**Key Characteristics:** acid-green branding, black immersion, full-screen memes, saturated collections, and a screen mascot.

## Colors

### Brand & Accent

Acid green identifies brand and active learning; lesson art may use saturated colors.

### Surface

Use the canvas for primary content and the grouped surface for controls, cards, and focused sections.

### Text

Primary text remains high-contrast; secondary metadata stays quieter than the current decision.

### Semantic

Use success, warning, and destructive colors only for their conventional meanings.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 20px | 700 | Section title |
| card-title | 15px | 600 | Primary item |
| body | 12px | 400 | Detail |
| caption | 9px | 400 | Metadata |

### Principles

- Lead with the current task or value.
- Align repeated metadata.
- Reserve emphasis for real decisions.

### Note on Font Substitutes

Inter is suitable; preserve hierarchy, contrast, and numeric clarity.

## Layout

### Spacing System

Use a 4px base, 8–12px card gaps, and 12–16px screen gutters.

### Grid & Container

The feed is one full-screen item; Explore uses a two-column collection grid.

### Whitespace Philosophy

Dense content stays grouped; focused decisions receive more breathing room.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary content |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Let content imagery and approved visual language provide depth; keep ordinary controls restrained.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Cards |
| rounded-lg | 16px | Feature panels |
| rounded-full | full | Floating controls |

### Photography & Illustration Geometry

Let one meme fill the stage and keep captions inside safe areas.

## Components

### Buttons

Primary actions use the brand color; secondary actions use grouped surfaces and clear labels.

### Pricing Tabs

Filters and modes use compact chips or segments with one unmistakable selected state.

### Cards & Containers

Explore cards use bold color, one image, and a short situational title.

### Inputs & Forms

Inputs inherit the brand focus, shared radius, and text hierarchy instead of generic native styling.

### Status & Build Page

Keep progress, result, and recovery close to the content or action they describe.

### Navigation

Preserve the reference navigation hierarchy and make only the active destination prominent.

### Footer

No footer; persistent navigation or the current action owns the safe area.

## Do's and Don'ts

### Do

- Preserve the defining color and content hierarchy.
- Keep primary actions easy to reach.
- Style native controls to inherit the visual system.

### Don't

- Don't introduce unrelated decorative styles.
- Don't hide status or secondary conditions.
- Don't use heavy shadows around every container.

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

Preserve the main decision, stack complex groups, and reduce secondary detail before shrinking type.

### Image Behavior

Preserve source aspect ratios and keep focal content inside safe areas.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare account or support states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
