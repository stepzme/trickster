<design-context>
---
version: 1
platform: iOS
name: Ivi-design-analysis
description: "A cinematic near-black streaming interface driven by edge-to-edge artwork, deep burgundy surfaces, and a vivid pink-red action color. Rounded media panels, dense poster grids, bold white titles, restrained metadata, and a translucent dark bottom bar make the product feel immersive without obscuring navigation."
colors:
  primary: "#FF1654"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.2}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.8}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.5}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 18, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.2}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.3}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12 18}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12 18}
  media-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  poster-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 14}
  filter-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 12}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 48}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8 10}
---

# Overview

Ivi is a dark, artwork-first streaming system. Posters and cinematic stills define each screen; UI chrome is compact, rounded, and subordinate to content.

# Non-negotiable visual invariants

- The recurring color treatment uses Near-black and burgundy surfaces.
- Let artwork dominate the screen.
- Keep metadata compact and factual.
- Use the pink-red accent sparingly.
- Preserve predictable poster proportions.
- Maintain dark continuity between feed and detail.
- Feature cards use the full content width.
- Search uses a three-column portrait grid; related titles use horizontal rails.

# Color and surfaces

- Hot pink-red marks subscription CTAs, promotional labels, and rare active emphasis.
- Green and cyan appear only in ratings or source metadata.

- Near-black is the default canvas; burgundy-black panels separate search and navigation.
- Translucent dark overlays protect controls over moving imagery.

- White carries titles and primary actions.
- Warm grays reduce synopsis, inactive navigation, and supporting facts.

- Green ratings indicate positive quality signals.
- Black image scrims ensure readable text and playback controls.

# Typography

Use SF Pro Display for cinematic headings and SF Pro Text for navigation, metadata, and controls.

- display-lg — 32 points — 700 — Subscription statement
- display-md — 26 points — 700 — Title detail heading
- headline — 22 points — 700 — Content section
- card-title — 18 points — 600 — Featured title
- body — 14 points — 400 — Synopsis
- caption — 10 points — 500 — Navigation and badges

- Keep title lines short and decisive.
- Let poster typography remain inside artwork rather than recreating it in UI text.
- Set metadata compactly and group related facts on one line.

SF Pro is sufficient; use another neutral neo-grotesk only where unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gaps inside rails, and 16 points screen gutters.

Feature cards use the full content width. Search uses a three-column portrait grid; related titles use horizontal rails.

Favor content density over empty space, but separate sections with 20–32 points vertical rhythm.

Use image gradients, blur, and translucent chrome. Avoid conventional drop shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep five destinations fixed. Use white for the current icon and muted gray elsewhere; preserve labels at all times.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary subscription actions are full-width pink-red rectangles with medium radius. Media actions may use compact icon buttons over dark scrims.

Feature cards combine a wide image, two-line synopsis, metadata, and bookmark action. Poster cards are mostly image with minimal external text.

Search is a filled dark field paired with a square filter button. Keep forms rare and visually integrated into the dark surface.

Use small colored badges over artwork and compact progress bars inside playback or continuing-content states.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Landscape stills use wide rounded crops; portrait posters use consistent narrow cards. Preserve faces and title art.

Use aspect-fill, keep focal faces within safe regions, and apply bottom gradients only when text overlaps.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Use small colored badges over artwork and compact progress bars inside playback or continuing-content states.

- Green ratings indicate positive quality signals.
- Black image scrims ensure readable text and playback controls.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Navigation, bookmarks, filters, and playback controls remain at least 44 points even when the visible icon is smaller.
- Horizontal rails scroll instead of wrapping. Synopsis expands vertically; bottom navigation stays fixed.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not place bright panels behind every section.
- Do not crop faces or title typography carelessly.
- Do not replace poster grids with generic text cards.
- Do not overuse shadows or borders.
- Do not turn rating colors into general accents.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
