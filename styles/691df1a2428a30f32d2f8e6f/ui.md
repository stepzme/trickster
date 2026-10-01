<design-context>
---
version: 1
platform: iOS
name: Synchronize-design-analysis
description: "A dark editorial learning interface where cultural imagery carries the emotion and the UI stays quiet. Pure black canvas, white type, charcoal controls, and a restrained violet-blue access accent frame collage-led course cards. Large serif display titles appear at key editorial moments, while compact sans-serif metadata, chips, tabs, and lesson controls keep dense educational content easy to scan."

colors:
  primary: "#675CFF"
  on-primary: "#FFFFFF"
  primary-focus: "#5549E8"
  ink: "#FFFFFF"
  ink-muted: "#C9C6CB"
  ink-subtle: "#8B888E"
  ink-tertiary: "#666268"
  canvas: "#000000"
  surface-1: "#171518"
  surface-2: "#242126"
  surface-3: "#302C33"
  surface-4: "#3A3540"
  hairline: "#2B282D"
  hairline-strong: "#474149"
  hairline-tertiary: "#5A535D"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F2F0F3"
  inverse-surface-2: "#E7E4E8"
  inverse-ink: "#111012"
  brand-secure: "#D871FF"
  semantic-success: "#A8D984"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: New York
    fontSize: 42
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.2
  display-lg:
    fontFamily: New York
    fontSize: 34
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.8
  display-md:
    fontFamily: New York
    fontSize: 28
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5
  headline:
    fontFamily: SF Pro Display
    fontSize: 24
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.4
  card-title:
    fontFamily: SF Pro Display
    fontSize: 20
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -0.3
  subhead:
    fontFamily: SF Pro Text
    fontSize: 17
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.1
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body:
    fontFamily: SF Pro Text
    fontSize: 15
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 13
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: SF Pro Text
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: SF Pro Text
    fontSize: 15
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: SF Pro Text
    fontSize: 12
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2
  mono:
    fontFamily: SF Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 18
  xl: 24
  xxl: 30
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
  section: 48

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [13, 24]
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [12, 20]
  button-tertiary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [10, 16]
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [12, 20]
  course-hero-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20
  course-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0
  category-chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: [7, 12]
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: [14, 16]
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: [14, 16]
  lesson-player:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 0
  status-badge:
    backgroundColor: "{colors.inverse-surface-1}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: [4, 8]
  navigation-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 52
  bottom-nav:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: [8, 12]
---

# Overview

Synchronize is a black, content-first learning system. Cultural photography and collage supply the visual energy, while controls remain neutral charcoal or white. Oversized editorial titles introduce courses; utility text becomes compact and systematic around duration, lecture count, views, filters, and progress.

# Non-negotiable visual invariants

- Primary screens use Black canvas with charcoal controls and almost no shadow.
- Lead discovery with culturally specific imagery.
- Keep controls monochrome until an access action needs emphasis.
- Pair editorial titles with precise metadata.
- Preserve the two-column library rhythm.
- Keep playback and lesson context on one continuous screen.
- Featured content uses nearly full-width cards with a sliver of the next card visible.
- Catalog content uses a two-column image grid; lesson lists return to one column.

# Color and surfaces

- Violet-blue is used for access CTAs, locked states, and selected emphasis.
- Lilac appears occasionally inside editorial artwork.

- Canvas is the uninterrupted page background.
- Surface 1 holds inputs and dark cards.
- Surface 2 carries chips, tabs, and the bottom bar.
- Stronger charcoal levels are reserved for pressed and nested states.

- Ink carries headlines and primary controls.
- Ink muted carries course summaries and navigation labels.
- Subtle and tertiary ink handle disabled and low-priority metadata.

- Success marks available or completed learning states.
- Overlay protects text over photography and video.

# Typography

- New York or a similarly editorial serif for course and campaign display titles.
- SF Pro Display/Text for navigation, metadata, lesson UI, and controls.
- SF Mono only when a timed or technical value needs fixed-width rhythm.

- display-xl — 42 points — 700 — Featured editorial title
- display-lg — 34 points — 700 — Course title
- display-md — 28 points — 700 — Section opener
- headline — 24 points — 700 — Screen title
- card-title — 20 points — 700 — Course card title
- body — 15 points — 400 — Main copy
- caption — 11 points — 400 — Counts and navigation labels

- Use serif display type selectively; utility hierarchy stays sans-serif.
- Keep metadata short, aligned, and visually quieter than titles.
- Allow two-line card titles before truncation.

Use New York on Apple platforms; Georgia is an acceptable fallback. System SF fonts preserve the compact native reading rhythm for controls.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base with 12–20 points gaps inside cards and 24–48 points between major content groups.

Featured content uses nearly full-width cards with a sliver of the next card visible. Catalog content uses a two-column image grid; lesson lists return to one column.

Black negative space separates editorial stories. Dense metadata clusters are kept close to their image or lesson rather than separated into detached panels.

Depth comes from collage layering, image crops, and gradient overlays. Avoid floating shadows on the dark canvas.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use the persistent four-item rounded bottom bar. The active destination is white and visually solid; inactive icons and labels remain gray.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary access buttons are violet gradients or solid violet-blue. Course-start actions are often white with black text. Both use pill geometry and strong compact labels.

Featured cards combine art, large title, concise descriptor, metadata, and a CTA. Catalog tiles place controls over the image and text below. Avoid generic elevated white cards.

Inputs are wide charcoal pills with subdued placeholders. Disabled primary actions remain near-black; focus uses a restrained violet outline.

Small badges such as new, free, hit, and locked sit directly on imagery. Progress and completion appear close to lessons rather than in a separate dashboard.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use tall and square crops with subjects centered or offset to leave room for titles. Editorial collage may extend beyond an implied frame, while utility imagery remains clipped to rounded rectangles.

Use aspect-fill crops with protected text gradients. Preserve the focal subject and avoid stretching collage elements.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Small badges such as new, free, hit, and locked sit directly on imagery. Progress and completion appear close to lessons rather than in a separate dashboard.

- Success marks available or completed learning states.
- Overlay protects text over photography and video.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Buttons and navigation targets stay at least 44 points high. Overlay bookmark and playback controls use enlarged invisible hit areas.
- Long chip rows scroll horizontally. Course metadata wraps before controls. Lesson details remain a single vertical flow.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not turn the interface into a bright streaming-service clone.
- Do not use violet as a full-page background.
- Do not add heavy drop shadows.
- Do not make every title serif.
- Do not separate progress from the lesson it describes.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
