<design-context>
---
version: alpha
name: Synchronize-design-analysis
description: "A dark editorial learning interface where cultural imagery carries the emotion and the UI stays quiet. Pure black canvas, white type, charcoal controls, and a restrained violet-blue access accent frame collage-led course cards. Large serif display titles appear at key editorial moments, while compact sans-serif metadata, chips, tabs, and lesson controls keep dense educational content easy to scan."

colors:
  primary: "#675CFF"
  on-primary: "#FFFFFF"
  primary-hover: "#7D73FF"
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
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.2px
  display-lg:
    fontFamily: New York
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.8px
  display-md:
    fontFamily: New York
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  headline:
    fontFamily: SF Pro Display
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.4px
  card-title:
    fontFamily: SF Pro Display
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -0.3px
  subhead:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.1px
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body:
    fontFamily: SF Pro Text
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: SF Pro Text
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: SF Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 30px
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
  section: 48px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 13px 24px
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
  button-tertiary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
  course-hero-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20px
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
    padding: 7px 12px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 14px 16px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 14px 16px
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
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 52px
  bottom-nav:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: 8px 12px
---

## Overview

Synchronize is a black, content-first learning system. Cultural photography and collage supply the visual energy, while controls remain neutral charcoal or white. Oversized editorial titles introduce courses; utility text becomes compact and systematic around duration, lecture count, views, filters, and progress.

**Key Characteristics:**
- Black canvas with charcoal controls and almost no shadow.
- Editorial serif headlines paired with a compact system sans.
- Large image-led course cards and dense two-column catalog tiles.
- Violet-blue reserved for access and locked-content emphasis.
- Pill controls for search, filters, tabs, and actions.
- Persistent rounded bottom navigation.

## Colors

### Brand & Accent
- Violet-blue is used for access CTAs, locked states, and selected emphasis.
- Lilac appears occasionally inside editorial artwork.

### Surface
- Canvas is the uninterrupted page background.
- Surface 1 holds inputs and dark cards.
- Surface 2 carries chips, tabs, and the bottom bar.
- Stronger charcoal levels are reserved for pressed and nested states.

### Text
- Ink carries headlines and primary controls.
- Ink muted carries course summaries and navigation labels.
- Subtle and tertiary ink handle disabled and low-priority metadata.

### Semantic
- Success marks available or completed learning states.
- Overlay protects text over photography and video.

## Typography

### Font Family

- New York or a similarly editorial serif for course and campaign display titles.
- SF Pro Display/Text for navigation, metadata, lesson UI, and controls.
- SF Mono only when a timed or technical value needs fixed-width rhythm.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42px | 700 | Featured editorial title |
| display-lg | 34px | 700 | Course title |
| display-md | 28px | 700 | Section opener |
| headline | 24px | 700 | Screen title |
| card-title | 20px | 700 | Course card title |
| body | 15px | 400 | Main copy |
| caption | 11px | 400 | Counts and navigation labels |

### Principles

- Use serif display type selectively; utility hierarchy stays sans-serif.
- Keep metadata short, aligned, and visually quieter than titles.
- Allow two-line card titles before truncation.

### Note on Font Substitutes

Use New York on Apple platforms; Georgia is an acceptable fallback. System SF fonts preserve the compact native reading rhythm for controls.

## Layout

### Spacing System

Use a 4px base with 12–20px gaps inside cards and 24–48px between major content groups.

### Grid & Container

Featured content uses nearly full-width cards with a sliver of the next card visible. Catalog content uses a two-column image grid; lesson lists return to one column.

### Whitespace Philosophy

Black negative space separates editorial stories. Dense metadata clusters are kept close to their image or lesson rather than separated into detached panels.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Page and player background |
| 1 | Charcoal fill | Inputs, chips, bottom navigation |
| 2 | Image with dark gradient | Course cards and heroes |
| 3 | Modal or external sheet | Payment and focused tasks |

### Decorative Depth

Depth comes from collage layering, image crops, and gradient overlays. Avoid floating shadows on the dark canvas.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Badges |
| rounded-md | 12px | Search and tiles |
| rounded-lg | 18px | Bottom navigation |
| rounded-xl | 24px | Featured course cards |
| rounded-pill | full | Buttons, chips, tabs |

### Photography & Illustration Geometry

Use tall and square crops with subjects centered or offset to leave room for titles. Editorial collage may extend beyond an implied frame, while utility imagery remains clipped to rounded rectangles.

## Components

### Buttons

Primary access buttons are violet gradients or solid violet-blue. Course-start actions are often white with black text. Both use pill geometry and strong compact labels.

### Pricing Tabs

Access choices use wide rounded segments on dark surfaces. Selected options gain higher contrast rather than a heavy border.

### Cards & Containers

Featured cards combine art, large title, concise descriptor, metadata, and a CTA. Catalog tiles place controls over the image and text below. Avoid generic elevated white cards.

### Inputs & Forms

Inputs are wide charcoal pills with subdued placeholders. Disabled primary actions remain near-black; focus uses a restrained violet outline.

### Status & Build Page

Small badges such as new, free, hit, and locked sit directly on imagery. Progress and completion appear close to lessons rather than in a separate dashboard.

### Navigation

Use the persistent four-item rounded bottom bar. The active destination is white and visually solid; inactive icons and labels remain gray.

### Footer

Mobile screens end naturally after content. Do not introduce a web-style footer; preserve safe-area breathing room below the final block.

## Do's and Don'ts

### Do

- Lead discovery with culturally specific imagery.
- Keep controls monochrome until an access action needs emphasis.
- Pair editorial titles with precise metadata.
- Preserve the two-column library rhythm.
- Keep playback and lesson context on one continuous screen.

### Don't

- Don't turn the interface into a bright streaming-service clone.
- Don't use violet as a full-page background.
- Don't add heavy drop shadows.
- Don't make every title serif.
- Don't separate progress from the lesson it describes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighter card copy, same two-column library |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Wider cards and larger media, not more primary columns |

### Touch Targets

Buttons and navigation targets stay at least 44px high. Overlay bookmark and playback controls use enlarged invisible hit areas.

### Collapsing Strategy

Long chip rows scroll horizontally. Course metadata wraps before controls. Lesson details remain a single vertical flow.

### Image Behavior

Use aspect-fill crops with protected text gradients. Preserve the focal subject and avoid stretching collage elements.

## Iteration Guide

Tune imagery and typography first, then card density, then accent use. If the interface feels generic, reduce chrome and let editorial art occupy more area.

## Known Gaps

- Motion timing is not defined by the sampled still screens.
- External payment UI follows its provider rather than this visual system.
- Tablet and landscape course-player behavior were not present in the reviewed flows.
</design-context>
