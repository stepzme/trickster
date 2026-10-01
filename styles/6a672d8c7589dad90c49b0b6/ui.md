<design-context>
---
version: 1
platform: iOS
name: Suno-design-analysis
description: "A dark AI-music product built from near-black chrome, translucent charcoal creation panels, artwork-derived gradients, white rounded playback controls, and a hot pink-to-orange creative accent. Dense social music feeds coexist with a focused studio form and persistent mini-player."

colors:
  primary: "#F93479"
  on-primary: "#FFFFFF"
  primary-alt: "#FF8A22"
  ink: "#F7F7F8"
  ink-muted: "#A9A7AC"
  ink-subtle: "#6F6D72"
  canvas: "#101011"
  surface-1: "#1D1A1D"
  surface-2: "#292529"
  hairline: "#383238"
  semantic-success: "#36C27C"
  semantic-warning: "#F5B33A"
  semantic-danger: "#E95761"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 20]}
  create-action: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 24]}
  studio-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  media-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

Suno is a dark content-led music system where artwork and warm creative gradients animate otherwise restrained chrome. Creation panels are soft and translucent; playback remains bold and direct.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A dark AI-music product built from near-black chrome, translucent charcoal creation panels, artwork-derived gradients, white rounded playback controls, and a hot pink-to-orange creative accent.
- The dominant canvas token is #101011 and the primary accent token is #F93479.
- The recorded display style is 40 points while the body style is 14 points.
- Navigation appears as follows: Five bottom destinations persist, with Create centered as a gradient pill.
- The reviewed screens use this hierarchy: Dense social music feeds coexist with a focused studio form and persistent mini-player.

# Color and surfaces

### Brand & Accent

Pink-to-orange identifies creation, selected profile accents, and special creative state. White remains the primary playback action.

### Surface

Use near-black canvas with layered charcoal panels. Artwork-derived blur may sit behind the player or studio.

### Text

White carries titles and actions; cool gray carries prompts, styles, counts, and timestamps.

### Semantic

Green confirms completion, amber warns about credits, and red marks destructive actions. Do not use the creative gradient as status.

# Typography

### Font Family

Use a neutral system sans with strong display weight and compact social metadata.

### Principles

Keep track title and creator distinct, make prompts readable, and truncate style tags predictably.

### Note on Font Substitutes

SF Pro or Inter are appropriate. Preserve clear Cyrillic and compact metadata.

# Screen composition

### Grid & Container

Explore uses horizontal art rails and vertical track lists. Studio uses stacked rounded panels; player is immersive and single-column.

### Whitespace Philosophy

Keep discovery dense but preserve breathing room around cover art, studio groups, and the central playback button.

# Navigation appearance

Five bottom destinations persist, with Create centered as a gradient pill. Mini-player sits immediately above the bar.

# Components

### Buttons

Primary playback uses white pills or circles. Creative actions use the warm gradient; native controls must inherit dark surfaces and typography.

Mode and model selectors use compact dark pills. Selected state gains brighter text or a restrained warm accent.

### Cards & Containers

Track rows combine cover, duration, title, creator, plays, and overflow. Studio panels isolate lyrics, style, audio, and advanced options.

### Inputs & Forms

Prompts and titles live inside dark rounded fields. Keep generation credits and advanced values visible before commitment.

### Status & Build Page

Generation progress, published state, likes, plays, comments, and model version appear beside the relevant song.

### Navigation

Five bottom destinations persist, with Create centered as a gradient pill. Mini-player sits immediately above the bar.

# Imagery and icons

Depth comes from artwork blur, dark surface steps, and the mini-player above navigation rather than strong shadow.

### Decorative Depth

Use sampled artwork color and subtle translucent panels. Avoid unrelated glow, illustration, or glass overload.

# States

Generation progress, published state, likes, plays, comments, and model version appear beside the relevant song.

# iOS adaptation

Keep creation and playback single-column on phones. Wider layouts may pair library lists with a persistent player.

### Touch Targets

Playback, tags, overflow, create, and navigation controls require at least 44pt targets.

### Collapsing Strategy

Allow shelves and tags to scroll horizontally. Keep Create or playback visible during long content.

### Image Behavior

Use `cover` for artwork and video. Sample artwork colors for background blur while maintaining text contrast.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Let artwork supply most color.
- Reserve gradients for creative state.
- Keep generation controls grouped.
- Preserve listening context.

### Don't

- Do not brighten every dark card.
- Do not hide credits or model choices.
- Do not use unrelated decorative illustration.
- Do not expose light native controls.

</design-context>
