<design-context>
---
version: 1
platform: iOS
name: Phone-design-analysis
description: "A classic native iOS utility interface built from white list surfaces, SF typography, system-blue navigation and links, green call actions, red destructive controls, gray tab icons, and a blurred full-screen in-call layer."
colors: {primary: "#007AFF", on-primary: "#FFFFFF", primary-focus: "#0062CC", ink: "#111113", ink-muted: "#6D6D72", ink-subtle: "#9A9AA0", ink-tertiary: "#C7C7CC", canvas: "#FFFFFF", surface-1: "#F2F2F7", surface-2: "#E5E5EA", surface-3: "#D1D1D6", surface-4: "#C7C7CC", hairline: "#E5E5EA", hairline-strong: "#C7C7CC", hairline-tertiary: "#AEAEB2", inverse-canvas: "#101113", inverse-surface-1: "#2C2C2E", inverse-surface-2: "#3A3A3C", inverse-ink: "#FFFFFF", brand-secure: "#34C759", semantic-success: "#34C759", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 400, lineHeight: 1.05, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 600, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 10, lg: 14, xl: 20, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 44}
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16}
  button-primary-pressed: {backgroundColor: "#28A745", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [10, 14]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [8, 12]}
  list-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: [12, 16]}
  call-control: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [9, 12]}
  status-badge: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 8]}
---

# Overview

Phone is a direct native iOS utility. White list surfaces, system blue, restrained gray dividers, and SF typography make the information hierarchy familiar; active calls switch to a blurred, immersive dark layer with circular controls.

**Key Characteristics:** white lists, blue navigation, green call action, red end and delete controls, five-tab shell, large keypad circles, grouped contact rows, and a blurred in-call background.

# Non-negotiable visual invariants

- The reference consistently shows white lists.
- Navigation consistently uses blue navigation.
- Sampled screens consistently use green call action.
- The reference consistently shows red end and delete controls.
- Navigation consistently uses five-tab shell.
- The reference consistently shows large keypad circles.
- The reference consistently shows grouped contact rows.
- The reference consistently shows a blurred in-call background.

# Color and surfaces

### Brand & Accent

System blue owns navigation, selected tabs, links, edit actions, and information controls. Green starts calls; red ends calls or deletes history.

### Surface

White carries lists and contact details; iOS grouped gray supports search and segmented controls; the call surface uses dark blur and translucent circles.

### Text

Black leads names and numbers, medium gray carries labels and secondary values, and white appears on the active call layer.

### Semantic

Green means start or connected, red means terminate or delete, and blue means selectable or current.

# Typography

### Font Family

Use SF Pro Display for large titles and dialed numbers and SF Pro Text for lists, tabs, labels, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 34 points | 700 | Large list title |
| display-md | 28 points | 600 | Dialed number |
| headline | 22 points | 600 | Contact name |
| body-lg | 17 points | 400 | List row |
| caption | 10 points | 400 | Tab label |

### Principles

- Follow native iOS title, row, and navigation proportions.
- Keep phone numbers and names visually dominant.
- Use color to communicate action semantics, not decoration.

### Note on Font Substitutes

SF Pro is the reference. On other platforms use the local system sans while preserving size and weight relationships.

# Screen composition

### Spacing System

Use a 4 points base, 12–16 points list-row padding, standard iOS gutters, and generous empty space around keypad and call controls.

### Grid & Container

Lists are single column; keypad is a centered 3-by-4 circular grid; active call controls form two rows of three.

### Whitespace Philosophy

Whitespace is structural and native: sparse utilities remain calm, while rows and dividers provide enough scanning rhythm without card clutter.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and keypad |
| 1 | Grouped gray fill | Search and segmented controls |
| 2 | Native sheet | Contact forms |
| 3 | Blur with translucent circles | Active call |

### Decorative Depth

Reserve depth for system blur during calls and subtle grouped-control shading; avoid ornamental shadows.

# Navigation appearance

Use a five-item bottom tab bar with blue active state, gray inactive icons, and large-title navigation above lists.

# Components

### Buttons

Start call uses a large green circle, end call a large red circle, and navigation actions use borderless system-blue text.

### Cards & Containers

Use flat list rows and grouped contact panels rather than custom floating cards.

### Inputs & Forms

Search and contact editing follow native iOS behavior; their presentation must retain this blue, gray, SF, and spacing system.

# Imagery and icons

Reserve depth for system blur during calls and subtle grouped-control shading; avoid ornamental shadows.

Contact avatars are circles; no decorative illustration is used; the call background is full-bleed and heavily blurred.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Expose call state, duration, missed state, voicemail availability, and destructive affordances directly in context.

# iOS adaptation

### Touch Targets

Tabs, keypad keys, call controls, list rows, and edit actions remain at least 44 points.

### Collapsing Strategy

Preserve number, call state, primary controls, names, and tab destinations; truncate secondary labels first.

### Image Behavior

Keep avatars circular and call backgrounds full-bleed with sufficient blur for white control contrast.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't replace lists with decorative card grids.
- Don't use blue for destructive or call-start actions.
- Don't add brand illustration or promotional surfaces.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Conference-call and voicemail playback details were only partially sampled.
- Accessibility sizes and landscape call layouts were not represented.
- Modern Dynamic Island variations were not reviewed.

</design-context>
