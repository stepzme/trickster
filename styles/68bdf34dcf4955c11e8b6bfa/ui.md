<design-context>
---
version: alpha
name: Phone-design-analysis
description: "A classic native iOS utility interface built from white list surfaces, SF typography, system-blue navigation and links, green call actions, red destructive controls, gray tab icons, and a blurred full-screen in-call layer."
colors: {primary: "#007AFF", on-primary: "#FFFFFF", primary-hover: "#2490FF", primary-focus: "#0062CC", ink: "#111113", ink-muted: "#6D6D72", ink-subtle: "#9A9AA0", ink-tertiary: "#C7C7CC", canvas: "#FFFFFF", surface-1: "#F2F2F7", surface-2: "#E5E5EA", surface-3: "#D1D1D6", surface-4: "#C7C7CC", hairline: "#E5E5EA", hairline-strong: "#C7C7CC", hairline-tertiary: "#AEAEB2", inverse-canvas: "#101113", inverse-surface-1: "#2C2C2E", inverse-surface-2: "#3A3A3C", inverse-ink: "#FFFFFF", brand-secure: "#34C759", semantic-success: "#34C759", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 400, lineHeight: 1.05, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 600, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 10px, lg: 14px, xl: 20px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 44px}
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16px}
  button-primary-pressed: {backgroundColor: "#28A745", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-primary-hover: {backgroundColor: "#49D563", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10px 14px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 8px 12px}
  list-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 12px 16px}
  call-control: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 9px 12px}
  status-badge: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 8px}
---
## Overview

Phone is a direct native iOS utility. White list surfaces, system blue, restrained gray dividers, and SF typography make the information hierarchy familiar; active calls switch to a blurred, immersive dark layer with circular controls.

**Key Characteristics:** white lists, blue navigation, green call action, red end and delete controls, five-tab shell, large keypad circles, grouped contact rows, and a blurred in-call background.

## Colors

### Brand & Accent

System blue owns navigation, selected tabs, links, edit actions, and information controls. Green starts calls; red ends calls or deletes history.

### Surface

White carries lists and contact details; iOS grouped gray supports search and segmented controls; the call surface uses dark blur and translucent circles.

### Text

Black leads names and numbers, medium gray carries labels and secondary values, and white appears on the active call layer.

### Semantic

Green means start or connected, red means terminate or delete, and blue means selectable or current.

## Typography

### Font Family

Use SF Pro Display for large titles and dialed numbers and SF Pro Text for lists, tabs, labels, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 34px | 700 | Large list title |
| display-md | 28px | 600 | Dialed number |
| headline | 22px | 600 | Contact name |
| body-lg | 17px | 400 | List row |
| caption | 10px | 400 | Tab label |

### Principles

- Follow native iOS title, row, and navigation proportions.
- Keep phone numbers and names visually dominant.
- Use color to communicate action semantics, not decoration.

### Note on Font Substitutes

SF Pro is the reference. On other platforms use the local system sans while preserving size and weight relationships.

## Layout

### Spacing System

Use a 4px base, 12–16px list-row padding, standard iOS gutters, and generous empty space around keypad and call controls.

### Grid & Container

Lists are single column; keypad is a centered 3-by-4 circular grid; active call controls form two rows of three.

### Whitespace Philosophy

Whitespace is structural and native: sparse utilities remain calm, while rows and dividers provide enough scanning rhythm without card clutter.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and keypad |
| 1 | Grouped gray fill | Search and segmented controls |
| 2 | Native sheet | Contact forms |
| 3 | Blur with translucent circles | Active call |

### Decorative Depth

Reserve depth for system blur during calls and subtle grouped-control shading; avoid ornamental shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Divider-adjacent state |
| rounded-sm | 8px | Small controls |
| rounded-md | 10px | Search and grouped row |
| rounded-lg | 14px | Native sheet block |
| rounded-full | full | Keypad, avatar, call controls |

### Photography & Illustration Geometry

Contact avatars are circles; no decorative illustration is used; the call background is full-bleed and heavily blurred.

## Components

### Buttons

Start call uses a large green circle, end call a large red circle, and navigation actions use borderless system-blue text.

### Pricing Tabs

Segmented controls such as All and Missed use compact native gray selection; there are no commerce pricing tabs.

### Cards & Containers

Use flat list rows and grouped contact panels rather than custom floating cards.

### Inputs & Forms

Search and contact editing follow native iOS behavior; their presentation must retain this blue, gray, SF, and spacing system.

### Status & Build Page

Expose call state, duration, missed state, voicemail availability, and destructive affordances directly in context.

### Navigation

Use a five-item bottom tab bar with blue active state, gray inactive icons, and large-title navigation above lists.

### Footer

No footer; the tab bar or active call control cluster owns the lower safe area.

## Do's and Don'ts

### Do

- Preserve native iOS hierarchy and semantic action colors.
- Keep calling and contact actions immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't replace lists with decorative card grids.
- Don't use blue for destructive or call-start actions.
- Don't add brand illustration or promotional surfaces.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten row labels |
| Standard | 375–430px | Default iPhone composition |
| Wide | 431px+ | Increase centered control spacing |

### Touch Targets

Tabs, keypad keys, call controls, list rows, and edit actions remain at least 44px.

### Collapsing Strategy

Preserve number, call state, primary controls, names, and tab destinations; truncate secondary labels first.

### Image Behavior

Keep avatars circular and call backgrounds full-bleed with sufficient blur for white control contrast.

## Iteration Guide

Tune keypad and call controls first, then contacts, recents, favorites, voicemail, and editing states.

## Known Gaps

- Conference-call and voicemail playback details were only partially sampled.
- Accessibility sizes and landscape call layouts were not represented.
- Modern Dynamic Island variations were not reviewed.

</design-context>

Use the design system above for all UI you generate.
