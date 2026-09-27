<design-context>
---
version: alpha
name: MTS-Music-design-analysis
description: "A near-black streaming interface where album art, personalized cover tiles, white controls, and MTS red accents shape an immersive but highly scannable listening experience."
colors: {primary: "#FF0032", on-primary: "#FFFFFF", primary-hover: "#FF3159", primary-focus: "#D8002A", ink: "#F7F7F8", ink-muted: "#A2A2A8", ink-subtle: "#73737A", ink-tertiary: "#505057", canvas: "#000000", surface-1: "#17171A", surface-2: "#242428", surface-3: "#313136", surface-4: "#3E3E44", hairline: "#29292D", hairline-strong: "#404047", hairline-tertiary: "#55555E", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F2F2F4", inverse-surface-2: "#E4E4E8", inverse-ink: "#111114", brand-secure: "#7B46F4", semantic-success: "#3CCD76", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

MTS Music is a black, content-first system where vivid cover art, curated rails, track lists, and persistent playback controls carry the experience.

**Key Characteristics:** black canvas, white type, bright cover art, MTS red emphasis, soft dark panels, and artwork-derived player atmosphere.

## Colors

### Brand & Accent

MTS red belongs to identity, subscription, and decisive promotional actions; vivid playlist colors live inside artwork tiles.

### Surface

Use pure black for browsing, charcoal for panels and the mini player, and artwork-derived blur only on the full player.

### Text

White carries titles and controls; cool gray separates artist, source, and secondary playback facts.

### Semantic

Green marks active subscription or success; red remains brand-led and should not imply error without context.

## Typography

### Font Family

Use SF Pro Display for listening and collection headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 22px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the playable item and its creator.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans; preserve clear Cyrillic and compact track-list metrics.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Discovery uses horizontally scrolling square cover rails and vertical track lists; the player uses one centered artwork column.

### Whitespace Philosophy

Let artwork breathe, but keep track lists and profile rows compact for fast scanning.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Artwork blur may fill the player background; browsing surfaces stay flat and dark with minimal separators.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Cards |
| rounded-lg | 16px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Use consistent rounded-square artwork, circular artist portraits, and uncropped album covers in the player.

## Components

### Buttons

Playback uses high-contrast circular controls; branded or subscription actions use red, while secondary actions stay dark.

### Pricing Tabs

No pricing tabs were observed; filters and library modes use restrained dark segments or labeled rows.

### Cards & Containers

Mix cards are image-led with title and short context below; settings use borderless full-width rows.

### Inputs & Forms

Search and account fields use dark filled surfaces, clear white labels, and the red focus language rather than native chrome.

### Status & Build Page

Keep download, favorite, subscription, playback, and queue status beside the affected media.

### Navigation

Use four bottom destinations on a dark translucent bar, with the active icon and label bright white.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve content artwork as the primary source of color.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't fill the browsing chrome with red or unrelated gradients.
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

Preserve artwork, title, and playback controls first; reduce editorial copy and rail previews before core actions.

### Image Behavior

Keep cover ratios intact, crop artist imagery consistently, and derive player blur from the active art.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
