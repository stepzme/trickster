<design-context>
---
version: 1
platform: iOS
name: Magnifier-design-analysis
description: "A high-contrast camera utility with a live full-screen view, translucent black control deck, bright white circular controls, yellow active states, and minimal accessibility-first typography."
colors:
  primary: "#FFD83D"
  on-primary: "#111111"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  control-deck: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 12}
  circular-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12}
  slider: {backgroundColor: "{colors.surface-3}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 10]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Magnifier is a low-vision camera tool where a dark expandable deck keeps large controls readable over changing live imagery.

**Key Characteristics:**
- Full-screen camera context.
- Translucent black control deck.
- White circular tools and yellow selection.
- Zoom, brightness, contrast, filter, focus, torch, and description controls.
- Configurable activities and control order.

# Non-negotiable visual invariants

- The reference consistently shows full-screen camera context.
- Sampled screens consistently use translucent black control deck.
- The reference consistently shows white circular tools and yellow selection.
- The reference consistently shows zoom, brightness, contrast, filter, focus, torch, and description controls.
- Sampled screens consistently use configurable activities and control order.

# Color and surfaces

### Brand & Accent

Yellow identifies active adjustments and confirmation. White carries high-contrast controls over black.

### Surface

Live camera is the canvas; black and charcoal overlays isolate controls.

### Text

White is primary, gray secondary, and black is used only on yellow or white actions.

### Semantic

Yellow means current or selected; green success and red removal remain conventional.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text for maximum platform legibility.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Activity setup |
| headline | 20 points | 700 | Sheet title |
| card-title | 15 points | 600 | Control group |
| body | 12 points | 400 | Guidance |
| caption | 9 points | 500 | Control label |

### Principles

- Keep labels literal and short.
- Prioritize size and contrast over density.
- Never rely on icons alone in configuration.

### Note on Font Substitutes

Inter is suitable; preserve large targets and strong contrast.

# Screen composition

### Spacing System

Use a 4 points base, 12 points control gaps, and 16 points sheet gutters.

### Grid & Container

The live view is full bleed; the control deck uses slider rows and a centered circular tool grid.

### Whitespace Philosophy

Keep separation generous enough for recognition and motor accuracy.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Live camera | Visual target |
| 1 | Translucent black deck | Controls |
| 2 | Opaque charcoal sheet | Configuration |
| 3 | Yellow confirmation | Immediate action |

### Decorative Depth

No decorative depth; translucency preserves camera context.

# Navigation appearance

Keep live-view tools in reach; deeper settings return directly to the camera.

# Components

### Buttons

Use large circular black or white tools; yellow filled actions confirm activity or view choices.

### Cards & Containers

The deck is one grouped container; customization uses dark rows with drag handles and add/remove controls.

### Inputs & Forms

Activity naming uses a dark field and a wide yellow Done action styled into the system.

# Imagery and icons

No decorative depth; translucency preserves camera context.

Camera imagery stays uncropped; recognition labels float near detected content without obscuring it.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Recognition and selected mode appear as short high-contrast floating labels.

# iOS adaptation

### Touch Targets

Every tool, slider end, drag handle, and confirmation remains at least 44 points.

### Collapsing Strategy

Keep primary tools visible and move secondary tools into the expandable deck.

### Image Behavior

Never resize or crop the live view independently of zoom intent.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't use thin low-contrast controls.
- Don't hide the active mode.
- Don't crowd the camera center.
- Don't add decorative illustration.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
