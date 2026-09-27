<design-context>
---
version: alpha
name: Magnifier-design-analysis
description: "A high-contrast camera utility with a live full-screen view, translucent black control deck, bright white circular controls, yellow active states, and minimal accessibility-first typography."
colors:
  primary: "#FFD83D"
  on-primary: "#111111"
  primary-hover: "#FFE46A"
  primary-focus: "#E3B900"
  ink: "#FFFFFF"
  ink-muted: "#B8B8BC"
  ink-subtle: "#85858A"
  ink-tertiary: "#5B5B60"
  canvas: "#090909"
  surface-1: "#1D1D1F"
  surface-2: "#2C2C2E"
  surface-3: "#3A3A3C"
  surface-4: "#48484A"
  hairline: "#39393D"
  hairline-strong: "#515156"
  hairline-tertiary: "#6A6A70"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F2F2F4"
  inverse-surface-2: "#E5E5E8"
  inverse-ink: "#111111"
  brand-secure: "#FFFFFF"
  semantic-success: "#34C759"
  semantic-overlay: "#000000"
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
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  control-deck: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 12px}
  circular-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12px}
  slider: {backgroundColor: "{colors.surface-3}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 10px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Magnifier is a low-vision camera tool where a dark expandable deck keeps large controls readable over changing live imagery.

**Key Characteristics:**
- Full-screen camera context.
- Translucent black control deck.
- White circular tools and yellow selection.
- Zoom, brightness, contrast, filter, focus, torch, and description controls.
- Configurable activities and control order.

## Colors

### Brand & Accent

Yellow identifies active adjustments and confirmation. White carries high-contrast controls over black.

### Surface

Live camera is the canvas; black and charcoal overlays isolate controls.

### Text

White is primary, gray secondary, and black is used only on yellow or white actions.

### Semantic

Yellow means current or selected; green success and red removal remain conventional.

## Typography

### Font Family

Use SF Pro Display and SF Pro Text for maximum platform legibility.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Activity setup |
| headline | 20px | 700 | Sheet title |
| card-title | 15px | 600 | Control group |
| body | 12px | 400 | Guidance |
| caption | 9px | 500 | Control label |

### Principles

- Keep labels literal and short.
- Prioritize size and contrast over density.
- Never rely on icons alone in configuration.

### Note on Font Substitutes

Inter is suitable; preserve large targets and strong contrast.

## Layout

### Spacing System

Use a 4px base, 12px control gaps, and 16px sheet gutters.

### Grid & Container

The live view is full bleed; the control deck uses slider rows and a centered circular tool grid.

### Whitespace Philosophy

Keep separation generous enough for recognition and motor accuracy.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Live camera | Visual target |
| 1 | Translucent black deck | Controls |
| 2 | Opaque charcoal sheet | Configuration |
| 3 | Yellow confirmation | Immediate action |

### Decorative Depth

No decorative depth; translucency preserves camera context.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Labels |
| rounded-sm | 8px | Rows |
| rounded-md | 12px | Lists |
| rounded-xl | 20px | Control deck |
| rounded-full | full | Tools and shutter |

### Photography & Illustration Geometry

Camera imagery stays uncropped; recognition labels float near detected content without obscuring it.

## Components

### Buttons

Use large circular black or white tools; yellow filled actions confirm activity or view choices.

### Pricing Tabs

Filter and mode options use compact visual swatches with one yellow outline.

### Cards & Containers

The deck is one grouped container; customization uses dark rows with drag handles and add/remove controls.

### Inputs & Forms

Activity naming uses a dark field and a wide yellow Done action styled into the system.

### Status & Build Page

Recognition and selected mode appear as short high-contrast floating labels.

### Navigation

Keep live-view tools in reach; deeper settings return directly to the camera.

### Footer

No footer; the control deck owns the safe area.

## Do's and Don'ts

### Do

- Preserve high contrast and large targets.
- Keep the camera visible during adjustment.
- Pair configurable icons with labels.
- Respect accessibility settings.

### Don't

- Don't use thin low-contrast controls.
- Don't hide the active mode.
- Don't crowd the camera center.
- Don't add decorative illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Reduce tool count per row |
| Standard | 375–430px | Default control deck |
| Wide | 431px+ | Expand spacing and label width |

### Touch Targets

Every tool, slider end, drag handle, and confirmation remains at least 44px.

### Collapsing Strategy

Keep primary tools visible and move secondary tools into the expandable deck.

### Image Behavior

Never resize or crop the live view independently of zoom intent.

## Iteration Guide

Tune target clarity first, then adjustment discoverability, customization, and saved activities.

## Known Gaps

- Image-description output was not fully sampled.
- Saved-activity recall was not represented end to end.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
