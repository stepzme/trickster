<design-context>
---
version: alpha
name: Measure-design-analysis
description: "A minimal augmented-reality utility where the camera fills the screen, thin white geometry explains detection and measurement, oversized white placement controls support precision, and a full-screen red level state gives immediate angle feedback."
colors:
  primary: "#FFFFFF"
  on-primary: "#111111"
  primary-hover: "#F1F1F1"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 400, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 400, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 500, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  point-control: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 18px}
  measure-label: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 5px 8px}
  mode-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Measure is an AR tool where white geometry and oversized controls sit directly on the camera, while Level uses an immediate color field.

**Key Characteristics:**
- Full-screen camera.
- Thin white measurement geometry.
- Large central point action.
- Minimal undo and clear controls.
- Two-mode Measure and Level navigation.

## Colors

### Brand & Accent

White is the functional accent. Red communicates a non-level state; neutral black frames navigation.

### Surface

Camera content is the canvas. Opaque surfaces appear only behind small controls and bottom navigation.

### Text

White labels sit over imagery; black text sits inside white measurement pills.

### Semantic

The level background shifts with alignment; color must be reinforced by the numeric angle.

## Typography

### Font Family

Use SF Pro Display and SF Pro Text for a native precision-tool character.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 36px | 400 | Level angle |
| headline | 20px | 500 | Guidance |
| card-title | 15px | 500 | Measurement value |
| body | 12px | 400 | Instruction |
| caption | 9px | 500 | Mode label |

### Principles

- Keep values central and unambiguous.
- Use short spatial guidance.
- Avoid unnecessary labels during measurement.

### Note on Font Substitutes

Inter is suitable; retain lightweight geometry and large numerals.

## Layout

### Spacing System

Use a 4px base and generous 16–24px spacing around placement controls.

### Grid & Container

The camera is full bleed; guidance centers in the upper-middle and actions sit within thumb reach.

### Whitespace Philosophy

Treat unobstructed camera area as functional whitespace.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Live camera | Target surface |
| 1 | White AR line | Measurement |
| 2 | Floating controls | Point, undo, clear |
| 3 | Solid color field | Level feedback |

### Decorative Depth

No decorative depth; geometry must remain stable against real imagery.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small labels |
| rounded-sm | 8px | Undo and clear |
| rounded-md | 12px | Guidance field |
| rounded-lg | 16px | Rare sheet |
| rounded-full | full | Point and value controls |

### Photography & Illustration Geometry

Camera imagery stays full bleed. Instructional line art is thin, centered, and directly tied to device movement.

## Components

### Buttons

Use a large white circular point action, smaller white or gray utilities, and clear pressed feedback.

### Pricing Tabs

Measure and Level use a two-item dark mode bar with a bright active label.

### Cards & Containers

Avoid cards over the camera; use only compact floating labels and controls.

### Inputs & Forms

No standard forms; any calibration prompt must use the same minimal geometry.

### Status & Build Page

Surface detection uses centered movement guidance; measurement status appears on the line itself.

### Navigation

Keep Measure and Level fixed at the bottom without obscuring the target.

### Footer

No footer; the mode bar owns the safe area.

## Do's and Don'ts

### Do

- Keep camera context visible.
- Make placement forgiving.
- Pair level color with angle.
- Preserve large targets.

### Don't

- Don't add decorative panels.
- Don't use low-contrast lines.
- Don't hide undo or clear.
- Don't crop the live view.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten guidance width |
| Standard | 375–430px | Default AR geometry |
| Wide | 431px+ | Expand action spacing |

### Touch Targets

Point, undo, clear, Measure, and Level controls remain at least 44px.

### Collapsing Strategy

Keep the point action dominant and reduce instructional copy before shrinking controls.

### Image Behavior

The live camera always aspect-fills; AR points must stay registered during movement.

## Iteration Guide

Tune surface detection first, then point placement, measurement readability, and level feedback.

## Known Gaps

- Multi-segment measurement was not represented.
- Saved measurement history was not present.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
