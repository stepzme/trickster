<design-context>
---
version: 1
platform: iOS
name: Calculator-design-analysis
description: "A pure black system calculator with a large right-aligned white result, circular dark-gray number keys, light-gray function keys, and a saturated orange operator column. The fixed four-column keypad emphasizes one-handed muscle memory and immediate state change without decoration."
colors:
  primary: "#FF9F0A"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Calculator is a single-purpose numeric surface: result above, keypad below, functions on the left, digits in the middle, and operators in a stable orange column.

**Key Characteristics:**
- Pure black canvas.
- Large right-aligned result.
- Four-column circular keypad.
- Orange operator column.
- Light-gray function keys.

# Non-negotiable visual invariants

- Sampled screens consistently use pure black canvas.
- The reference consistently shows large right-aligned result.
- The reference consistently shows four-column circular keypad.
- The reference consistently shows orange operator column.
- The reference consistently shows light-gray function keys.

# Color and surfaces

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

# Typography

### Font Family

- **SF Pro Display** — the live result only.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

### Principles

- Keep every key position stable.
- Let the result dominate without a label.
- Show active operator state clearly.
- Use no decorative copy.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

### Grid & Container

A large flexible result region sits above a fixed 4×5 keypad. Zero spans two columns while retaining the circular visual rhythm.

### Whitespace Philosophy

Reserve open black space above the keypad so long results remain legible and calm.

Surface hierarchy observed in the source:

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use flat solid circles and immediate pressed-state changes; no shadows or decoration.

# Navigation appearance

No application navigation is present.

# Components

### Buttons

Digits use dark-gray circles, functions light gray, and operators orange. Zero is a wide pill aligned to the grid.

### Cards & Containers

There are no cards or containers beyond the result selection overlay.

### Inputs & Forms

All input comes from fixed keypad keys; the result supports system selection and copy.

# Imagery and icons

Use flat solid circles and immediate pressed-state changes; no shadows or decoration.

No photography or illustration. The interface is entirely type, color, and key geometry.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show cleared, entering, operator selected, result, sign changed, percent, and overflow through result and key state.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44 points.

### Collapsing Strategy

Preserve all keys and the result; reduce result font dynamically before changing keypad geometry.

### Image Behavior

No images are used.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't add a toolbar.
- Don't decorate the black field.
- Don't change key positions by state.
- Don't mix operator and digit colors.
- Don't shrink keys below comfortable touch size.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
