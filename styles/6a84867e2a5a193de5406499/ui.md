<design-context>
---
version: alpha
name: Open-design-analysis
description: "A cinematic wellbeing system built on pure black, full-bleed warm photography, widely spaced white type, hairline geometry, tiny red signals, and sparse outlined or white pill actions."
colors: {primary: "#F5F3EE", on-primary: "#111111", primary-hover: "#FFFFFF", primary-focus: "#DCD9D2", ink: "#F7F6F3", ink-muted: "#A7A6A4", ink-subtle: "#747473", ink-tertiary: "#50504F", canvas: "#000000", surface-1: "#121313", surface-2: "#202121", surface-3: "#2E2F2F", surface-4: "#3C3D3D", hairline: "#2A2B2B", hairline-strong: "#424343", hairline-tertiary: "#585959", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#121316", brand-secure: "#D1483F", semantic-success: "#BFD6B8", semantic-overlay: "#000000"}
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
rounded: {xs: 4px, sm: 10px, md: 16px, lg: 22px, xl: 28px, xxl: 32px, pill: 9999px, full: 9999px}
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

Open makes daily wellbeing feel cinematic and contemplative by placing minimal white controls over warm blurred photography and highly restrained black content lists.

**Key Characteristics:** pure black canvas, warm cinematic photography, widely spaced wordmark, thin white outlines, sparse red detail, minimal navigation, and large quiet type.

## Colors

### Brand & Accent

Warm white is the primary interface color. Tiny muted red signals are reserved for notification or studio status, not general action.

### Surface

Black carries nearly every screen; imagery can fill the background, while content sections remain borderless or separated by hairlines.

### Text

Warm white leads practice titles; gray supports teacher, duration, intent, and secondary modes.

### Semantic

Use muted red for attention, soft green only for completion, and keep ordinary navigation monochrome.

## Typography

### Font Family

Use SF Pro Display for practice and program titles and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the practice, teacher, duration, or felt intent.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a refined neutral grotesk with light display weights; preserve wide tracking in the wordmark and mode labels.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Today uses one full-screen feature; programs use cinematic cards; Discover uses a sparse list and horizontal media rail.

### Whitespace Philosophy

Large dark fields and slow visual rhythm are essential; avoid filling space around a single daily practice.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use moving photography, blur, glowing play ring, and subtle dark overlays rather than card elevation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 16px | Cards |
| rounded-lg | 22px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Portraits and abstract movement crops may fill the screen; program cards use tall cinematic rectangles; symbols are thin and geometric.

## Components

### Buttons

Use outlined pills for exploration and a warm-white filled pill for trial or decisive commitment.

### Pricing Tabs

Meditate, Breathe, Move, and Sound use quiet text labels; selection is shown by contrast rather than filled chips.

### Cards & Containers

Program and practice cards rely on photography and type, with almost no visible container chrome.

### Inputs & Forms

Search is a thin outlined field on black; onboarding fields use sparse typography and minimal circular progression.

### Status & Build Page

Keep offline, life score, streak, trial, playback, and completion close to the active practice.

### Navigation

Use small monochrome symbols with Today centered; the active destination is bright white and others remain subdued.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve cinematic negative space and minimal monochrome control language.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't introduce bright app-style cards or dense utility chrome.
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

Preserve the daily practice, play action, and mode; reduce program previews and supporting prose first.

### Image Behavior

Allow full-bleed crop and motion blur, protect faces and gestures, and use dark overlays only for legibility.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
