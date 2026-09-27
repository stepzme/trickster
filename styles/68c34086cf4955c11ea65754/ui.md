<design-context>
---
version: alpha
name: Calculator-design-analysis
description: "A pure black system calculator with a large right-aligned white result, circular dark-gray number keys, light-gray function keys, and a saturated orange operator column. The fixed four-column keypad emphasizes one-handed muscle memory and immediate state change without decoration."
colors:
  primary: "#FF9F0A"
  on-primary: "#FFFFFF"
  primary-hover: "#E58A00"
  primary-soft: "#3B2A10"
  accent: "#A5A5A5"
  accent-secondary: "#333333"
  ink: "#FFFFFF"
  ink-muted: "#D2D2D2"
  ink-subtle: "#777777"
  canvas: "#000000"
  surface-1: "#1C1C1E"
  surface-2: "#333333"
  hairline: "#000000"
  semantic-success: "#FF9F0A"
  semantic-danger: "#FF453A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Calculator is a single-purpose numeric surface: result above, keypad below, functions on the left, digits in the middle, and operators in a stable orange column.

**Key Characteristics:**
- Pure black canvas.
- Large right-aligned result.
- Four-column circular keypad.
- Orange operator column.
- Light-gray function keys.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Operators and active calculation state.
- **Accent** ({colors.accent}): Clear, sign, and percent.
- **Secondary Accent** ({colors.accent-secondary}): Digits and decimal.

### Surface
- **Canvas** ({colors.canvas}): The complete utility surface.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Display** — the live result only.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep every key position stable.
- Let the result dominate without a label.
- Show active operator state clearly.
- Use no decorative copy.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

A large flexible result region sits above a fixed 4×5 keypad. Zero spans two columns while retaining the circular visual rhythm.

### Whitespace Philosophy

Reserve open black space above the keypad so long results remain legible and calm.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use flat solid circles and immediate pressed-state changes; no shadows or decoration.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

No photography or illustration. The interface is entirely type, color, and key geometry.

## Components

### Buttons

Digits use dark-gray circles, functions light gray, and operators orange. Zero is a wide pill aligned to the grid.

### Pricing Tabs

There are no tabs; mode is communicated through key state and result.

### Cards & Containers

There are no cards or containers beyond the result selection overlay.

### Inputs & Forms

All input comes from fixed keypad keys; the result supports system selection and copy.

### Status & Build Page

Show cleared, entering, operator selected, result, sign changed, percent, and overflow through result and key state.

### Navigation

No application navigation is present.

### Footer

The keypad ends above the safe-area home indicator.

## Do's and Don'ts

### Do

- Keep the keypad stable.
- Preserve orange operator semantics.
- Right-align the result.
- Use system copy behavior.
- Support locale decimal punctuation.

### Don't

- Don't add a toolbar.
- Don't decorate the black field.
- Don't change key positions by state.
- Don't mix operator and digit colors.
- Don't shrink keys below comfortable touch size.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44px.

### Collapsing Strategy

Preserve all keys and the result; reduce result font dynamically before changing keypad geometry.

### Image Behavior

No images are used.

## Iteration Guide

1. Build the fixed keypad.
2. Add numeric entry and clear.
3. Add operators and active state.
4. Add percent and sign.
5. Add result selection and locale formatting.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- No flows are available; all 21 image screens were inventoried and representative input, sign, decimal, result, and copy states were reviewed through screens fallback.
- Landscape scientific mode and haptic feedback were not represented.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
