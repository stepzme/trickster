<design-context>
---
version: 1
platform: iOS
name: KION-design-analysis
description: "A black streaming interface driven by cinematic posters, white condensed-feeling headings, electric cyan links, a blue gradient subscription action, and a translucent dark tab bar. Content rails are dense and image-first; utility controls stay thin, outlined, and subordinate to media."
colors:
  primary: "#2796F4"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.2}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.5}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 7, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "#49C7E9", typography: "{typography.button}", rounded: "{rounded.md}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 18]}
  poster-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 0}
  action-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [10, 14]}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

KION is a dense black streaming system where posters and title art carry most visual expression. Cyan utility links and blue actions provide orientation without competing with media.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A black streaming interface driven by cinematic posters, white condensed-feeling headings, electric cyan links, a blue gradient subscription action, and a translucent dark tab bar.
- The dominant canvas token is #030303 and the primary accent token is #2796F4.
- The recorded display style is 40 points while the body style is 13 points.
- Navigation keeps five destinations fixed until playback.
- The reviewed screens use this hierarchy: Content rails are dense and image-first; utility controls stay thin, outlined, and subordinate to media.

# Color and surfaces

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

# Typography

### Font Family

Use SF Pro Display for campaign and section headings, SF Pro Text for metadata and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32pt | 700 | Subscription statement |
| display-md | 26pt | 700 | Title heading |
| headline | 21pt | 700 | Rail title |
| card-title | 16pt | 600 | Episode or poster title |
| body | 13pt | 400 | Synopsis and metadata |
| caption | 10pt | 500 | Navigation |

### Principles

- Keep headings short and bold.
- Let artwork retain its embedded title treatment.
- Group ratings, year, genre, and age compactly.

### Note on Font Substitutes

Use a neutral system sans with strong Cyrillic weights.

# Screen composition

### Grid & Container

Hero media spans the width; discovery uses horizontal poster rails and details use one vertical column.

# Navigation appearance

Keep five destinations fixed until playback. Active state is white or campaign-magenta; inactive items remain gray.

# Components

### Buttons

Primary buttons use a blue gradient or solid blue. Secondary actions are charcoal; utility links are cyan.

### Cards & Containers

Poster cards are nearly borderless. Episode rows combine a thumbnail, duration, and download action.

### Inputs & Forms

Search and filters use dark filled surfaces. Native playback controls must inherit KION's thin white geometry and dark chrome.

### Status & Build Page

Use cyan progress, compact download states, and restrained badges over artwork.

### Navigation

Keep five destinations fixed until playback. Active state is white or campaign-magenta; inactive items remain gray.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Feed and detail |
| 1 | Charcoal fill | Controls and navigation |
| 2 | Image scrim | Hero actions |
| 3 | Video overlay | Playback |

### Decorative Depth

Use gradients, blur, and artwork overlap instead of shadows.

# States

Use cyan progress, compact download states, and restrained badges over artwork.

# iOS adaptation

### Touch Targets

Tabs, downloads, playback, and navigation keep at least 44pt hit areas.

### Collapsing Strategy

Rails scroll horizontally; detail sections grow vertically; playback hides navigation.

### Image Behavior

Use aspect-fill while preserving faces and title art; add scrims only behind UI copy.

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

</design-context>
