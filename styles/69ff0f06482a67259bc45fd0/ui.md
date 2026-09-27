<design-context>
---
version: alpha
name: Ivi-design-analysis
description: "A cinematic near-black streaming interface driven by edge-to-edge artwork, deep burgundy surfaces, and a vivid pink-red action color. Rounded media panels, dense poster grids, bold white titles, restrained metadata, and a translucent dark bottom bar make the product feel immersive without obscuring navigation."
colors:
  primary: "#FF1654"
  on-primary: "#FFFFFF"
  primary-hover: "#FF3E70"
  primary-focus: "#D90F45"
  ink: "#FFFFFF"
  ink-muted: "#C8C1C8"
  ink-subtle: "#918993"
  ink-tertiary: "#68606B"
  canvas: "#08050A"
  surface-1: "#120B13"
  surface-2: "#211724"
  surface-3: "#302334"
  surface-4: "#443147"
  hairline: "#332734"
  hairline-strong: "#4C3D4F"
  hairline-tertiary: "#655468"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F5F2F5"
  inverse-surface-2: "#E8E3E8"
  inverse-ink: "#110B12"
  brand-secure: "#8B1D4A"
  semantic-success: "#27C88A"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.2px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.8px}
  display-md: {fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.5px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 18px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.2px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.3px}
  mono: {fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 28px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px}
  media-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  poster-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px}
  filter-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px 12px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 48px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8px 10px}
---
## Overview

Ivi is a dark, artwork-first streaming system. Posters and cinematic stills define each screen; UI chrome is compact, rounded, and subordinate to content.

**Key Characteristics:**
- Near-black and burgundy surfaces.
- White bold titles with quiet gray metadata.
- Pink-red reserved for subscription and editorial labels.
- Large landscape features plus dense portrait poster grids.
- Five-item persistent bottom navigation.

## Colors

### Brand & Accent
- Hot pink-red marks subscription CTAs, promotional labels, and rare active emphasis.
- Green and cyan appear only in ratings or source metadata.

### Surface
- Near-black is the default canvas; burgundy-black panels separate search and navigation.
- Translucent dark overlays protect controls over moving imagery.

### Text
- White carries titles and primary actions.
- Warm grays reduce synopsis, inactive navigation, and supporting facts.

### Semantic
- Green ratings indicate positive quality signals.
- Black image scrims ensure readable text and playback controls.

## Typography

### Font Family

Use SF Pro Display for cinematic headings and SF Pro Text for navigation, metadata, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32px | 700 | Subscription statement |
| display-md | 26px | 700 | Title detail heading |
| headline | 22px | 700 | Content section |
| card-title | 18px | 600 | Featured title |
| body | 14px | 400 | Synopsis |
| caption | 10px | 500 | Navigation and badges |

### Principles

- Keep title lines short and decisive.
- Let poster typography remain inside artwork rather than recreating it in UI text.
- Set metadata compactly and group related facts on one line.

### Note on Font Substitutes

SF Pro is sufficient; use another neutral neo-grotesk only where unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gaps inside rails, and 16px screen gutters.

### Grid & Container

Feature cards use the full content width. Search uses a three-column portrait grid; related titles use horizontal rails.

### Whitespace Philosophy

Favor content density over empty space, but separate sections with 20–32px vertical rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-black canvas | Feed and search |
| 1 | Burgundy panel | Inputs and navigation |
| 2 | Dark gradient over image | Metadata and controls |
| 3 | Full-screen video overlay | Playback |

### Decorative Depth

Use image gradients, blur, and translucent chrome. Avoid conventional drop shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Posters and chips |
| rounded-md | 12px | Search and buttons |
| rounded-lg | 16px | Feature cards |
| rounded-xl | 20px | Navigation surface |
| rounded-pill | full | Labels |

### Photography & Illustration Geometry

Landscape stills use wide rounded crops; portrait posters use consistent narrow cards. Preserve faces and title art.

## Components

### Buttons

Primary subscription actions are full-width pink-red rectangles with medium radius. Media actions may use compact icon buttons over dark scrims.

### Pricing Tabs

No pricing tabs were observed. If required, use dark segmented pills and one pink-red selected state.

### Cards & Containers

Feature cards combine a wide image, two-line synopsis, metadata, and bookmark action. Poster cards are mostly image with minimal external text.

### Inputs & Forms

Search is a filled dark field paired with a square filter button. Keep forms rare and visually integrated into the dark surface.

### Status & Build Page

Use small colored badges over artwork and compact progress bars inside playback or continuing-content states.

### Navigation

Keep five destinations fixed. Use white for the current icon and muted gray elsewhere; preserve labels at all times.

### Footer

No footer; reserve bottom safe-area space below navigation.

## Do's and Don'ts

### Do

- Let artwork dominate the screen.
- Keep metadata compact and factual.
- Use the pink-red accent sparingly.
- Preserve predictable poster proportions.
- Maintain dark continuity between feed and detail.

### Don't

- Don't place bright panels behind every section.
- Don't crop faces or title typography carelessly.
- Don't replace poster grids with generic text cards.
- Don't overuse shadows or borders.
- Don't turn rating colors into general accents.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten gutters and poster gaps |
| Standard | 375–430px | Default three-column grid |
| Wide | 431px+ | Enlarge feature image and rail cards |

### Touch Targets

Navigation, bookmarks, filters, and playback controls remain at least 44px even when the visible icon is smaller.

### Collapsing Strategy

Horizontal rails scroll instead of wrapping. Synopsis expands vertically; bottom navigation stays fixed.

### Image Behavior

Use aspect-fill, keep focal faces within safe regions, and apply bottom gradients only when text overlaps.

## Iteration Guide

Tune artwork scale and dark surface continuity first, then metadata density, radius, and accent frequency.

## Known Gaps

- Playback gesture timing was available only as video, not measured.
- Tablet and landscape catalog layouts were not represented.
- Dynamic states for downloads and offline viewing were not reviewed.

</design-context>

Use the design system above for all UI you generate.
