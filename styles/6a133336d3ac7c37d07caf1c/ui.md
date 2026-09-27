<design-context>
---
version: alpha
name: Yandex-Music-design-analysis
description: "A dual-mode music system: immersive black listening surfaces with fluorescent yellow playback and artwork-derived color, paired with clean white catalog and collection pages. Large editorial type, square cover art, blurred auroras, and translucent 3D mood objects make discovery feel expressive without weakening control clarity."

colors:
  primary: "#FFD600"
  on-primary: "#111111"
  primary-pressed: "#E6C100"
  ink: "#111111"
  ink-inverse: "#FFFFFF"
  ink-muted: "#737378"
  ink-subtle: "#A6A6AB"
  canvas: "#FFFFFF"
  canvas-immersive: "#050505"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F3"
  surface-dark: "#171719"
  hairline: "#DDDDDF"
  semantic-success: "#31A568"
  semantic-warning: "#F2A900"
  semantic-danger: "#E64A4A"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 42px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1.1px }
  display-lg: { fontFamily: YS Text, fontSize: 34px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8px }
  display-md: { fontFamily: YS Text, fontSize: 28px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5px }
  headline: { fontFamily: YS Text, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.25px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  mini-player: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.ink-inverse}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Yandex Music shifts between a cinematic dark listening mode and a restrained white library mode while preserving artwork, yellow playback, and bold editorial typography.

## Colors

Use black and artwork-derived color for listening; use white and pale gray for browsing. Fluorescent yellow remains the stable interaction accent.

### Brand & Accent

Use yellow for play, selected states, and the starburst identity. Do not spread it across large decorative surfaces.

### Surface

Use black immersive canvases, white browsing pages, pale gray utility fields, and dark mini-player surfaces with strong contrast.

### Text

Use white over immersive media, near-black on white, medium gray for artist and metadata, and high contrast for track titles.

### Semantic

Use yellow for active playback, green for downloaded or available offline, red for errors, and artwork color for atmosphere only.

## Typography

Large condensed-feeling titles give playlists and My Wave an editorial presence; metadata remains compact and neutral.

### Font Family

Use YS Text with heavy display weights and regular body weights.

### Hierarchy

Use 34–42px immersive titles, 24–28px page titles, 18–22px section headings, 14–16px track titles, and 11–13px metadata.

### Principles

Keep artist and title pairings intact, avoid wrapping controls, and let one large title dominate each discovery scene.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; preserve heavy display weight and compact tracking.

## Layout

Use full-bleed mood canvases, centered square player art, horizontal content rails, and vertical track or collection lists.

### Spacing System

Use a 4px base, 8px between track facts, 12px card gaps, 16px page gutters, and 24–32px between content sections.

### Grid & Container

Discovery rails show partial next items; player content is centered; collection and search results use a single scrolling column.

### Whitespace Philosophy

Give the player and hero title generous space. Browsing may be denser, but album covers need clean separation.

## Elevation & Depth

Use blurred artwork color, translucent sheets, and the floating mini-player; avoid card shadows on the immersive canvas.

### Decorative Depth

Create depth with aurora blur, glass-like 3D mood objects, and artwork sampling rather than generic gradients.

## Shapes

Use square album art, circular playback controls, rounded search and filter fields, and pill actions.

### Border Radius Scale

Use 10px for art and compact controls, 14–18px for cards and sheets, 24px for large panels, and full circles for playback.

### Photography & Illustration Geometry

Preserve square cover art without cropping titles; portraits may be circular. Mood objects stay centered and softly bounded.

## Components

Playback can use native audio behavior, but every visible control must inherit Music color, scale, icon weight, and shape.

### Buttons

Use fluorescent yellow circular play buttons, white or dark icon controls, and pale pills for secondary actions. Remove native blue.

### Pricing Tabs

Use compact pills or segmented tabs for categories, moods, and formats; subscription prompts use one dominant yellow action.

### Cards & Containers

Media cards combine artwork, title, artist, and context. Feature banners may use immersive color and oversized display text.

### Inputs & Forms

Use pale search fields on white and translucent dark fields on immersive surfaces. Keep filters and import controls in bottom sheets.

### Status & Build Page

Show playing, paused, liked, explicit, downloaded, unavailable, and subscription states with icons plus labels where ambiguity remains.

### Navigation

Use a bottom bar for Home, Trends, Collection, and Search, with a persistent mini-player above it.

### Footer

There is no footer; profile, subscription, storage, offline mode, imports, help, and legal information belong to settings pages.

## Do's and Don'ts

Keep musical content primary and the listening state unmistakable.

### Do

- Preserve cover art and artwork-derived atmosphere.
- Keep playback reachable from every browsing surface.
- Use yellow consistently for the main listening action.
- Style native media controls in the Music system.

### Don't

- Do not use default platform blue.
- Do not apply random gradients unrelated to content.
- Do not crop cover typography.
- Do not make secondary actions compete with Play.

## Responsive Behavior

Increase content density on larger screens while protecting centered playback and readable metadata.

### Breakpoints

Phones use rails and one-column lists; larger screens may add multi-column shelves and place queue beside the player.

### Touch Targets

Play, skip, like, queue, seek, download, search, card, mini-player, and navigation targets require at least 44px.

### Collapsing Strategy

Keep artwork, title, artist, play state, seek position, and current destination; collapse editorial description and secondary actions first.

### Image Behavior

Use cover for artwork-derived backgrounds with heavy blur, contain for primary cover art, and fixed ratios across rails.

## Iteration Guide

Start with onboarding, My Wave, player, search, catalog, collection, and mini-player. Add lyrics, queue, downloads, imports, podcasts, and subscription management next.

## Known Gaps

One hundred two available flow structures and representative screens across onboarding, Home, player, search, catalog, Collection, and settings were sampled. The full catalog and every subscription-management branch were not exhaustively viewed.

</design-context>

Use the design system above for all UI you generate.
