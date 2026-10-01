<design-context>
---
version: 1
platform: iOS
name: Measure-design-analysis
description: "A minimal augmented-reality utility where the camera fills the screen, thin white geometry explains detection and measurement, oversized white placement controls support precision, and a full-screen red level state gives immediate angle feedback."
colors:
  primary: "#FFFFFF"
  on-primary: "#111111"
  primary-focus: "#D8D8D8"
  ink: "#FFFFFF"
  ink-muted: "#B8B8BC"
  ink-subtle: "#85858A"
  ink-tertiary: "#5B5B60"
  canvas: "#090909"
  surface-1: "#1C1C1E"
  surface-2: "#2C2C2E"
  surface-3: "#3A3A3C"
  surface-4: "#48484A"
  hairline: "#3A3A3C"
  hairline-strong: "#56565C"
  hairline-tertiary: "#707078"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F2F2F4"
  inverse-surface-2: "#E5E5E8"
  inverse-ink: "#111111"
  brand-secure: "#EF493A"
  semantic-success: "#F2C94C"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 400, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 400, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 500, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  point-control: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 18}
  measure-label: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [5, 8]}
  mode-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Measure is an AR tool where white geometry and oversized controls sit directly on the camera, while Level uses an immediate color field.

**Key Characteristics:**
- Full-screen camera.
- Thin white measurement geometry.
- Large central point action.
- Minimal undo and clear controls.
- Two-mode Measure and Level navigation.

# Non-negotiable visual invariants

- The reference consistently shows full-screen camera.
- The reference consistently shows thin white measurement geometry.
- Sampled screens consistently use large central point action.
- The reference consistently shows minimal undo and clear controls.
- Navigation consistently uses two-mode Measure and Level navigation.

# Color and surfaces

### Brand & Accent

White is the functional accent. Red communicates a non-level state; neutral black frames navigation.

### Surface

Camera content is the canvas. Opaque surfaces appear only behind small controls and bottom navigation.

### Text

White labels sit over imagery; black text sits inside white measurement pills.

### Semantic

The level background shifts with alignment; color must be reinforced by the numeric angle.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text for a native precision-tool character.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 36 points | 400 | Level angle |
| headline | 20 points | 500 | Guidance |
| card-title | 15 points | 500 | Measurement value |
| body | 12 points | 400 | Instruction |
| caption | 9 points | 500 | Mode label |

### Principles

- Keep values central and unambiguous.
- Use short spatial guidance.
- Avoid unnecessary labels during measurement.

### Note on Font Substitutes

Inter is suitable; retain lightweight geometry and large numerals.

# Screen composition

### Spacing System

Use a 4 points base and generous 16–24 points spacing around placement controls.

### Grid & Container

The camera is full bleed; guidance centers in the upper-middle and actions sit within thumb reach.

### Whitespace Philosophy

Treat unobstructed camera area as functional whitespace.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Live camera | Target surface |
| 1 | White AR line | Measurement |
| 2 | Floating controls | Point, undo, clear |
| 3 | Solid color field | Level feedback |

### Decorative Depth

No decorative depth; geometry must remain stable against real imagery.

# Navigation appearance

Keep Measure and Level fixed at the bottom without obscuring the target.

# Components

### Buttons

Use a large white circular point action, smaller white or gray utilities, and clear pressed feedback.

### Cards & Containers

Avoid cards over the camera; use only compact floating labels and controls.

### Inputs & Forms

No standard forms; any calibration prompt must use the same minimal geometry.

# Imagery and icons

No decorative depth; geometry must remain stable against real imagery.

Camera imagery stays full bleed. Instructional line art is thin, centered, and directly tied to device movement.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Surface detection uses centered movement guidance; measurement status appears on the line itself.

# iOS adaptation

### Touch Targets

Point, undo, clear, Measure, and Level controls remain at least 44 points.

### Collapsing Strategy

Keep the point action dominant and reduce instructional copy before shrinking controls.

### Image Behavior

The live camera always aspect-fills; AR points must stay registered during movement.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add decorative panels.
- Don't use low-contrast lines.
- Don't hide undo or clear.
- Don't crop the live view.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Multi-segment measurement was not represented.
- Saved measurement history was not present.
- Tablet and landscape layouts were not represented.

</design-context>
