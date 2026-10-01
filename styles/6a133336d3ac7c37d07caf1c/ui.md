<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: YS Text, fontSize: 42, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1.1 }
  display-lg: { fontFamily: YS Text, fontSize: 34, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8 }
  display-md: { fontFamily: YS Text, fontSize: 28, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }
  headline: { fontFamily: YS Text, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.25 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 17, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  mini-player: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.ink-inverse}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [8, 12]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Yandex Music shifts between a cinematic dark listening mode and a restrained white library mode while preserving artwork, yellow playback, and bold editorial typography.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A dual-mode music system: immersive black listening surfaces with fluorescent yellow playback and artwork-derived color, paired with clean white catalog and collection pages.
- The dominant canvas token is #FFFFFF and the primary accent token is #FFD600.
- The recorded display style is 42 points while the body style is 14 points.
- Navigation uses a bottom bar for Home, Trends, Collection, and Search, with a persistent mini-player above it.
- The reviewed screens use this hierarchy: Large editorial type, square cover art, blurred auroras, and translucent 3D mood objects make discovery feel expressive without weakening control clarity.

# Color and surfaces

Use black and artwork-derived color for listening; use white and pale gray for browsing. Fluorescent yellow remains the stable interaction accent.

### Brand & Accent

Use yellow for play, selected states, and the starburst identity. Do not spread it across large decorative surfaces.

### Surface

Use black immersive canvases, white browsing pages, pale gray utility fields, and dark mini-player surfaces with strong contrast.

### Text

Use white over immersive media, near-black on white, medium gray for artist and metadata, and high contrast for track titles.

### Semantic

Use yellow for active playback, green for downloaded or available offline, red for errors, and artwork color for atmosphere only.

# Typography

Large condensed-feeling titles give playlists and My Wave an editorial presence; metadata remains compact and neutral.

### Font Family

Use YS Text with heavy display weights and regular body weights.

### Principles

Keep artist and title pairings intact, avoid wrapping controls, and let one large title dominate each discovery scene.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; preserve heavy display weight and compact tracking.

# Screen composition

Use full-bleed mood canvases, centered square player art, horizontal content rails, and vertical track or collection lists.

### Grid & Container

Discovery rails show partial next items; player content is centered; collection and search results use a single scrolling column.

### Whitespace Philosophy

Give the player and hero title generous space. Browsing may be denser, but album covers need clean separation.

# Navigation appearance

Use a bottom bar for Home, Trends, Collection, and Search, with a persistent mini-player above it.

# Components

Playback can use native audio behavior, but every visible control must inherit Music color, scale, icon weight, and shape.

### Buttons

Use fluorescent yellow circular play buttons, white or dark icon controls, and pale pills for secondary actions. Remove native blue.

Use compact pills or segmented tabs for categories, moods, and formats; subscription prompts use one dominant yellow action.

### Cards & Containers

Media cards combine artwork, title, artist, and context. Feature banners may use immersive color and oversized display text.

### Inputs & Forms

Use pale search fields on white and translucent dark fields on immersive surfaces. Keep filters and import controls in bottom sheets.

### Status & Build Page

Show playing, paused, liked, explicit, downloaded, unavailable, and subscription states with icons plus labels where ambiguity remains.

### Navigation

Use a bottom bar for Home, Trends, Collection, and Search, with a persistent mini-player above it.

# Imagery and icons

Use blurred artwork color, translucent sheets, and the floating mini-player; avoid card shadows on the immersive canvas.

### Decorative Depth

Create depth with aurora blur, glass-like 3D mood objects, and artwork sampling rather than generic gradients.

# States

Show playing, paused, liked, explicit, downloaded, unavailable, and subscription states with icons plus labels where ambiguity remains.

# iOS adaptation

Increase content density on larger screens while protecting centered playback and readable metadata.

Phones use rails and one-column lists; larger screens may add multi-column shelves and place queue beside the player.

### Touch Targets

Play, skip, like, queue, seek, download, search, card, mini-player, and navigation targets require at least 44pt.

### Collapsing Strategy

Keep artwork, title, artist, play state, seek position, and current destination; collapse editorial description and secondary actions first.

### Image Behavior

Use cover for artwork-derived backgrounds with heavy blur, contain for primary cover art, and fixed ratios across rails.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
