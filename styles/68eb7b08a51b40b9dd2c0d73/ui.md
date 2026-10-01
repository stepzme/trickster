<design-context>
---
version: 1
platform: iOS
name: Kinopoisk-design-analysis
description: "A cinematic black streaming and film-reference interface organized by orange playback actions, large hero art, dense poster rails, compact white editorial type, bright green ratings, and a translucent dark navigation dock. The product keeps media imagery dominant while supporting long factual title pages and minimal playback chrome."
colors:
  primary: "#FF5A16"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.2}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.5}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 7
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 20]}
  hero-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  poster-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 0}
  rating-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.semantic-success}", typography: "{typography.display-xl}", rounded: "{rounded.xs}", padding: 20}
  media-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [7, 11]}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Kinopoisk is a black, cinematic media system where orange controls signal action and artwork supplies most visual variation. Long editorial detail pages remain dense but clearly sectioned.

**Key Characteristics:**
- Deep black canvas and compact white type.
- Orange playback and active-navigation accent.
- Full-width hero artwork plus poster rails.
- Green numeric ratings.
- Minimal dark playback chrome.

# Non-negotiable visual invariants

- Typography consistently uses deep black canvas and compact white type.
- Navigation consistently uses orange playback and active-navigation accent.
- The reference consistently shows full-width hero artwork plus poster rails.
- The reference consistently shows green numeric ratings.
- The reference consistently shows minimal dark playback chrome.

# Color and surfaces

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

# Typography

### Font Family

Use SF Pro Display for major title and campaign statements; SF Pro Text for metadata, navigation, and editorial facts.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40 points | 700 | Numeric rating |
| display-lg | 32 points | 700 | Onboarding statement |
| display-md | 26 points | 700 | Title heading |
| headline | 22 points | 700 | Detail section |
| card-title | 16 points | 600 | Poster or trailer label |
| body | 13 points | 400 | Metadata and synopsis |
| caption | 10 points | 500 | Navigation and badges |

### Principles

- Let title artwork remain inside hero imagery.
- Keep metadata compact and grouped by meaning.
- Use strong section headings to structure long detail pages.

### Note on Font Substitutes

SF Pro or another neutral neo-grotesk is appropriate; keep numeric ratings wide and bold.

# Screen composition

### Spacing System

Use a 4 points base, 12 points rail gaps, and 12–16 points side padding.

### Grid & Container

Hero media spans the content width. Poster discovery uses horizontal rails or two-column grids; title detail uses one long column.

### Whitespace Philosophy

Media density is intentional, but section titles need 20–28 points separation to keep the page legible.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Feed and detail |
| 1 | Charcoal panel | Ratings and metadata |
| 2 | Image gradient | Hero copy and controls |
| 3 | Video overlay | Playback chrome |

### Decorative Depth

Use image fades, scrims, and subtle translucency. Avoid visible shadow cards.

# Navigation appearance

Keep five bottom destinations fixed. Active item and content-mode underline use orange; inactive items remain gray.

# Components

### Buttons

Primary watch and rate actions are orange pills. Secondary save, hide, and device actions use round charcoal icon buttons.

### Cards & Containers

Poster cards stay nearly chrome-free. Ratings and release facts use flat charcoal panels; trailers use wide image thumbnails.

### Inputs & Forms

Search and filters use dark filled controls with white text and orange active states. Native media controls must inherit Kinopoisk's dark surfaces and compact geometry.

# Imagery and icons

Use image fades, scrims, and subtle translucency. Avoid visible shadow cards.

Hero artwork uses edge-to-edge landscape crops with protected subject areas. Posters remain rectangular; branded 3D objects are limited to Plus onboarding.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Use green rating values, compact progress indicators, orange loading arcs, and low-contrast availability metadata.

# iOS adaptation

### Touch Targets

Playback, save, rating, tabs, and navigation controls retain at least 44 points hit areas.

### Collapsing Strategy

Poster and trailer rails scroll horizontally. Long title sections expand vertically; navigation stays fixed until immersive playback.

### Image Behavior

Use aspect-fill and preserve faces, logos, and title art. Apply gradients only where UI text overlaps.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add light cards to media pages.
- Don't use green outside ratings or success.
- Don't over-round poster artwork.
- Don't bring Plus illustration into ordinary catalogs.
- Don't leave generic iOS media controls unstyled.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

# Known gaps

- Playback motion and gesture timing were not measured from video.
- Tablet and landscape catalog states were not reviewed.
- Cinema ticket checkout was outside this visual sample.

</design-context>
