<design-context>
---
version: 1
platform: iOS
name: Messages-design-analysis
description: "A mobile design system defined by native white chrome, blue outgoing bubbles, gray incoming bubbles, rounded media, and contextual composer tools."
colors: {primary: "#0A84FF", on-primary: "#FFFFFF", primary-focus: "#0A84FF", ink: "#111114", ink-muted: "#777981", ink-subtle: "#A7A8AE", ink-tertiary: "#CACBD0", canvas: "#FFFFFF", surface-1: "#F2F2F7", surface-2: "#F2F2F7", surface-3: "#E2E3E7", surface-4: "#D6D7DC", hairline: "#E5E6E9", hairline-strong: "#CFD0D5", hairline-tertiary: "#B6B8BF", inverse-canvas: "#17181C", inverse-surface-1: "#292A30", inverse-surface-2: "#3B3D45", inverse-ink: "#FFFFFF", brand-secure: "#34C759", semantic-success: "#34A86B", semantic-overlay: "#17181C"}
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
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  compact-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [7, 10]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Messages is defined by native white chrome, blue outgoing bubbles, gray incoming bubbles, rounded media, and contextual composer tools.

**Key Characteristics:** native white chrome, blue outgoing bubbles, gray incoming bubbles, rounded media, and contextual composer tools.

# Non-negotiable visual invariants

- The reference consistently shows native white chrome.
- The reference consistently shows blue outgoing bubbles.
- The reference consistently shows gray incoming bubbles.
- The reference consistently shows rounded media.
- The reference consistently shows contextual composer tools.

# Color and surfaces

### Brand & Accent

System blue carries outgoing messages, compose, links, and active controls.

### Surface

Use the canvas for primary content and the grouped surface for controls, cards, and focused sections.

### Text

Primary text remains high-contrast; secondary metadata stays quieter than the current decision.

### Semantic

Use success, warning, and destructive colors only for their conventional meanings.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 20 points | 700 | Section title |
| card-title | 15 points | 600 | Primary item |
| body | 12 points | 400 | Detail |
| caption | 9 points | 400 | Metadata |

### Principles

- Lead with the current task or value.
- Align repeated metadata.
- Reserve emphasis for real decisions.

### Note on Font Substitutes

Inter is suitable; preserve hierarchy, contrast, and numeric clarity.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points card gaps, and 12–16 points screen gutters.

### Grid & Container

Conversation list uses full rows; chat uses one message column and bottom composer.

### Whitespace Philosophy

Dense content stays grouped; focused decisions receive more breathing room.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary content |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Let content imagery and approved visual language provide depth; keep ordinary controls restrained.

# Navigation appearance

Preserve the reference navigation hierarchy and make only the active destination prominent.

# Components

### Buttons

Primary actions use the brand color; secondary actions use grouped surfaces and clear labels.

### Cards & Containers

Use message bubbles, media frames, reply threads, and contact sheets instead of generic cards.

### Inputs & Forms

Inputs inherit the brand focus, shared radius, and text hierarchy instead of generic native styling.

# Imagery and icons

Let content imagery and approved visual language provide depth; keep ordinary controls restrained.

Preserve media ratios inside rounded message frames; effects may fill the screen.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep progress, result, and recovery close to the content or action they describe.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Preserve the main decision, stack complex groups, and reduce secondary detail before shrinking type.

### Image Behavior

Preserve source aspect ratios and keep focal content inside safe areas.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't introduce unrelated decorative styles.
- Don't hide status or secondary conditions.
- Don't use heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare account or support states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>
