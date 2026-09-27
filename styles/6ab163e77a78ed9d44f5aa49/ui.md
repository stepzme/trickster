<design-context>
---
version: alpha
name: KION-design-analysis
description: "A black streaming interface driven by cinematic posters, white condensed-feeling headings, electric cyan links, a blue gradient subscription action, and a translucent dark tab bar. Content rails are dense and image-first; utility controls stay thin, outlined, and subordinate to media."
colors:
  primary: "#2796F4"
  on-primary: "#FFFFFF"
  primary-hover: "#4EAEFF"
  primary-focus: "#1877D2"
  ink: "#FFFFFF"
  ink-muted: "#B6B6BB"
  ink-subtle: "#77777E"
  ink-tertiary: "#55555C"
  canvas: "#030303"
  surface-1: "#111113"
  surface-2: "#1B1B1E"
  surface-3: "#27272B"
  surface-4: "#35353A"
  hairline: "#29292E"
  hairline-strong: "#404047"
  hairline-tertiary: "#585861"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F4F4F5"
  inverse-surface-2: "#E7E7E9"
  inverse-ink: "#111113"
  brand-secure: "#C90072"
  semantic-success: "#42C76A"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.2px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8px}
  display-md: {fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.5px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 7px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "#49C7E9", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px}
  poster-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 0}
  action-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px 14px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

KION is a dense black streaming system where posters and title art carry most visual expression. Cyan utility links and blue actions provide orientation without competing with media.

## Colors

### Brand & Accent
- Blue marks subscription and sign-in actions; cyan marks links, tabs, and progress.
- Magenta appears inside KION campaigns and active profile badges, not general controls.

### Surface
- Black remains continuous across discovery, detail, and playback.
- Charcoal supports buttons, navigation, and episode controls.

### Text
- White leads titles and actions; cool grays handle metadata and inactive navigation.

### Semantic
- Ratings remain white; green is reserved for success. Black scrims protect controls over video.

## Typography

### Font Family

Use SF Pro Display for campaign and section headings, SF Pro Text for metadata and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32px | 700 | Subscription statement |
| display-md | 26px | 700 | Title heading |
| headline | 21px | 700 | Rail title |
| card-title | 16px | 600 | Episode or poster title |
| body | 13px | 400 | Synopsis and metadata |
| caption | 10px | 500 | Navigation |

### Principles

- Keep headings short and bold.
- Let artwork retain its embedded title treatment.
- Group ratings, year, genre, and age compactly.

### Note on Font Substitutes

Use a neutral system sans with strong Cyrillic weights.

## Layout

### Spacing System

Use a 4px base, 12px rail gaps, and 12–16px side padding.

### Grid & Container

Hero media spans the width; discovery uses horizontal poster rails and details use one vertical column.

### Whitespace Philosophy

Favor media density, but keep 20–28px between titled sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Feed and detail |
| 1 | Charcoal fill | Controls and navigation |
| 2 | Image scrim | Hero actions |
| 3 | Video overlay | Playback |

### Decorative Depth

Use gradients, blur, and artwork overlap instead of shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 7px | Posters and thumbnails |
| rounded-md | 12px | Buttons and action chips |
| rounded-lg | 16px | Promo panels |
| rounded-full | full | Icon controls |

### Photography & Illustration Geometry

Posters remain portrait; trailers and hero art use landscape crops. No separate expressive illustration language was observed.

## Components

### Buttons

Primary buttons use a blue gradient or solid blue. Secondary actions are charcoal; utility links are cyan.

### Pricing Tabs

Subscription offers use stacked actions rather than pricing tabs. If needed, use dark segments with one blue selection.

### Cards & Containers

Poster cards are nearly borderless. Episode rows combine a thumbnail, duration, and download action.

### Inputs & Forms

Search and filters use dark filled surfaces. Native playback controls must inherit KION's thin white geometry and dark chrome.

### Status & Build Page

Use cyan progress, compact download states, and restrained badges over artwork.

### Navigation

Keep five destinations fixed until playback. Active state is white or campaign-magenta; inactive items remain gray.

### Footer

No footer; preserve the bottom safe area beneath navigation and player controls.

## Do's and Don'ts

### Do

- Let artwork dominate.
- Keep actions compact and predictable.
- Use cyan for utility and blue for commitment.
- Preserve poster proportions.
- Restyle native media controls.

### Don't

- Don't introduce light catalog surfaces.
- Don't overuse campaign magenta.
- Don't wrap every title in a card.
- Don't add decorative illustration to media rails.
- Don't leave generic iOS player chrome.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten rails and labels |
| Standard | 375–430px | Default poster scale |
| Wide | 431px+ | Enlarge hero and rail cards |

### Touch Targets

Tabs, downloads, playback, and navigation keep at least 44px hit areas.

### Collapsing Strategy

Rails scroll horizontally; detail sections grow vertically; playback hides navigation.

### Image Behavior

Use aspect-fill while preserving faces and title art; add scrims only behind UI copy.

## Iteration Guide

Tune artwork scale and action clarity first, then rail density and muted contrast.

## Known Gaps

- Player gesture timing was not measured.
- Tablet and landscape catalogs were not represented.
- Kids mode was not visually reviewed in this sample.

</design-context>

Use the design system above for all UI you generate.
