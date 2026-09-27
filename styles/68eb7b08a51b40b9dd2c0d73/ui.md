<design-context>
---
version: alpha
name: Kinopoisk-design-analysis
description: "A cinematic black streaming and film-reference interface organized by orange playback actions, large hero art, dense poster rails, compact white editorial type, bright green ratings, and a translucent dark navigation dock. The product keeps media imagery dominant while supporting long factual title pages and minimal playback chrome."
colors:
  primary: "#FF5A16"
  on-primary: "#FFFFFF"
  primary-hover: "#FF783F"
  primary-focus: "#D9470E"
  ink: "#FFFFFF"
  ink-muted: "#B8B8BC"
  ink-subtle: "#7D7D84"
  ink-tertiary: "#5C5C62"
  canvas: "#050505"
  surface-1: "#101012"
  surface-2: "#1A1A1D"
  surface-3: "#252528"
  surface-4: "#333337"
  hairline: "#29292C"
  hairline-strong: "#3D3D42"
  hairline-tertiary: "#55555B"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F4F4F5"
  inverse-surface-2: "#E7E7E9"
  inverse-ink: "#111113"
  brand-secure: "#9B45FF"
  semantic-success: "#42C95A"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.2px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8px}
  display-md: {fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.5px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 7px
  md: 12px
  lg: 16px
  xl: 22px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 20px}
  hero-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  poster-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 0}
  rating-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.semantic-success}", typography: "{typography.display-xl}", rounded: "{rounded.xs}", padding: 20px}
  media-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 7px 11px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Kinopoisk is a black, cinematic media system where orange controls signal action and artwork supplies most visual variation. Long editorial detail pages remain dense but clearly sectioned.

**Key Characteristics:**
- Deep black canvas and compact white type.
- Orange playback and active-navigation accent.
- Full-width hero artwork plus poster rails.
- Green numeric ratings.
- Minimal dark playback chrome.

## Colors

### Brand & Accent
- Orange marks watch actions, active tabs, links, and progress.
- The Yandex Plus gradient appears only in membership contexts.

### Surface
- Black is continuous across feed, detail, and playback.
- Charcoal panels support ratings, metadata, and navigation without breaking immersion.

### Text
- White carries primary titles and actions.
- Cool gray distinguishes dates, counts, unavailable options, and inactive navigation.

### Semantic
- Green is dedicated to ratings and positive audience signals.
- Dark overlays protect controls over artwork and video.

## Typography

### Font Family

Use SF Pro Display for major title and campaign statements; SF Pro Text for metadata, navigation, and editorial facts.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40px | 700 | Numeric rating |
| display-lg | 32px | 700 | Onboarding statement |
| display-md | 26px | 700 | Title heading |
| headline | 22px | 700 | Detail section |
| card-title | 16px | 600 | Poster or trailer label |
| body | 13px | 400 | Metadata and synopsis |
| caption | 10px | 500 | Navigation and badges |

### Principles

- Let title artwork remain inside hero imagery.
- Keep metadata compact and grouped by meaning.
- Use strong section headings to structure long detail pages.

### Note on Font Substitutes

SF Pro or another neutral neo-grotesk is appropriate; keep numeric ratings wide and bold.

## Layout

### Spacing System

Use a 4px base, 12px rail gaps, and 12–16px side padding.

### Grid & Container

Hero media spans the content width. Poster discovery uses horizontal rails or two-column grids; title detail uses one long column.

### Whitespace Philosophy

Media density is intentional, but section titles need 20–28px separation to keep the page legible.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Feed and detail |
| 1 | Charcoal panel | Ratings and metadata |
| 2 | Image gradient | Hero copy and controls |
| 3 | Video overlay | Playback chrome |

### Decorative Depth

Use image fades, scrims, and subtle translucency. Avoid visible shadow cards.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Posters and panels |
| rounded-sm | 7px | Thumbnails |
| rounded-md | 12px | Chips and tooltips |
| rounded-pill | full | Watch action |
| rounded-full | full | Utility icon controls |

### Photography & Illustration Geometry

Hero artwork uses edge-to-edge landscape crops with protected subject areas. Posters remain rectangular; branded 3D objects are limited to Plus onboarding.

## Components

### Buttons

Primary watch and rate actions are orange pills. Secondary save, hide, and device actions use round charcoal icon buttons.

### Pricing Tabs

Subscription choices were not present in reviewed core flows. Use dark segmented controls with one gradient or orange selection when needed.

### Cards & Containers

Poster cards stay nearly chrome-free. Ratings and release facts use flat charcoal panels; trailers use wide image thumbnails.

### Inputs & Forms

Search and filters use dark filled controls with white text and orange active states. Native media controls must inherit Kinopoisk's dark surfaces and compact geometry.

### Status & Build Page

Use green rating values, compact progress indicators, orange loading arcs, and low-contrast availability metadata.

### Navigation

Keep five bottom destinations fixed. Active item and content-mode underline use orange; inactive items remain gray.

### Footer

No footer; preserve safe-area spacing under dark navigation and playback controls.

## Do's and Don'ts

### Do

- Keep artwork visually dominant.
- Use orange only for action and active context.
- Structure long detail pages with clear sections.
- Preserve consistent poster geometry.
- Restyle native playback controls to match the dark UI.

### Don't

- Don't add light cards to media pages.
- Don't use green outside ratings or success.
- Don't over-round poster artwork.
- Don't bring Plus illustration into ordinary catalogs.
- Don't leave generic iOS media controls unstyled.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten rails and metadata |
| Standard | 375–430px | Default hero and poster scale |
| Wide | 431px+ | Enlarge hero imagery and section spacing |

### Touch Targets

Playback, save, rating, tabs, and navigation controls retain at least 44px hit areas.

### Collapsing Strategy

Poster and trailer rails scroll horizontally. Long title sections expand vertically; navigation stays fixed until immersive playback.

### Image Behavior

Use aspect-fill and preserve faces, logos, and title art. Apply gradients only where UI text overlaps.

## Iteration Guide

Tune hero impact, poster rhythm, and orange action clarity first, then detail density and muted-text contrast.

## Known Gaps

- Playback motion and gesture timing were not measured from video.
- Tablet and landscape catalog states were not reviewed.
- Cinema ticket checkout was outside this visual sample.

</design-context>

Use the design system above for all UI you generate.
