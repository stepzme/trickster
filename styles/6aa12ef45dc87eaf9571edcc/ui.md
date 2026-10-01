<design-context>
---
version: 1
platform: iOS
name: Pool-design-analysis
description: "A playful screenshot-organizer interface built on airy white space, fluid cyan controls, and tactile 3D brand objects. Editorial serif headings give the library character while a neutral system sans keeps actions legible. Screenshot mosaics are the primary content; frosted edge controls, rounded cards, and a yellow duck mascot create a soft, spatial layer above them."

colors:
  primary: "#63BCF5"
  on-primary: "#FFFFFF"
  primary-strong: "#2D8FE8"
  primary-soft: "#DDF3FF"
  ink: "#15151B"
  ink-muted: "#77777D"
  ink-subtle: "#AAAAB0"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F5"
  surface-2: "#EEEEED"
  surface-dark: "#171719"
  hairline: "#E2E2E0"
  glass: "#F7F7F2CC"
  mascot-yellow: "#FFC21C"
  accent-pink: "#FF5DA8"
  semantic-success: "#1EAF62"
  semantic-danger: "#E84855"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 40
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.8
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 34
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.6
  display-md:
    fontFamily: Editorial Serif
    fontSize: 28
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.4
  headline:
    fontFamily: Editorial Serif
    fontSize: 24
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 13
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 20
  xl: 28
  xxl: 36
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 72

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  floating-control:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: [12, 16]
  onboarding-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xxl}"
    padding: 24
  pool-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12
  settings-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: [4, 12]
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.xs}"
    height: 48
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: [24, 16]
---

# Overview

Pool makes user screenshots the visual material of the interface. White library screens stay intentionally sparse, while screenshot grids, small 3D objects, and translucent blue controls carry the identity. Onboarding inverts the balance: an atmospheric blue field sits behind one large white question sheet.

**Key Characteristics:**
- Dense screenshot mosaics on an open white canvas.
- Editorial serif for titles; compact system sans for all actions and metadata.
- Cyan-blue pill controls with soft blur and glow.
- Oversized white sheets with rounded corners for sequential setup.
- Yellow duck, pink number, and other tactile objects as navigation landmarks.
- A true dark theme using charcoal grouped surfaces.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Dense screenshot mosaics on an open white canvas.
- The reviewed screens show this treatment: Editorial serif for titles; compact system sans for all actions and metadata.
- The reviewed screens show this treatment: Cyan-blue pill controls with soft blur and glow.
- The reviewed screens show this treatment: Oversized white sheets with rounded corners for sequential setup.
- The reviewed screens show this treatment: Yellow duck, pink number, and other tactile objects as navigation landmarks.
- The reviewed screens show this treatment: A true dark theme using charcoal grouped surfaces.

# Color and surfaces

### Brand & Accent
- **Pool Blue** ({colors.primary}): Primary actions, selected tabs, add and search controls.
- **Strong Blue** ({colors.primary-strong}): Active emphasis and compact links.
- **Soft Blue** ({colors.primary-soft}): Quiet selected and informational surfaces.
- **Mascot Yellow** ({colors.mascot-yellow}) and **Accent Pink** ({colors.accent-pink}): Reserved for the duck and 3D brand objects.

### Surface
- **Canvas** ({colors.canvas}): Main library and settings background.
- **Surface 1** ({colors.surface-1}): Settings groups, text areas, empty pool covers.
- **Surface 2** ({colors.surface-2}): Pressed or nested neutral controls.
- **Glass** ({colors.glass}): Floating navigation and edge controls over content.
- **Dark Surface** ({colors.surface-dark}): Dark-mode canvas and grouped rows.

### Text
- **Ink** ({colors.ink}): Titles, counts, primary labels.
- **Ink Muted** ({colors.ink-muted}): Supporting copy and row descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and disabled controls.

### Semantic
- **Success** ({colors.semantic-success}): Granted permissions and positive confirmation.
- **Danger** ({colors.semantic-danger}): Delete account, trash, and destructive actions.
- **Overlay** ({colors.semantic-overlay}): Dimmed content under sheets.

# Typography

### Font Family

- **Editorial Serif** — app titles, onboarding questions, recaps, and pool headings.
- **System Sans** — buttons, rows, metadata, forms, and screenshot labels.
- **System Mono** — only if source metadata requires fixed-width text.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40pt | 500 | Recap emphasis |
| `{typography.display-lg}` | 34pt | 500 | Onboarding question |
| `{typography.display-md}` | 28pt | 500 | Primary page title |
| `{typography.headline}` | 24pt | 500 | Sheet heading |
| `{typography.card-title}` | 17pt | 600 | Group and card title |
| `{typography.body}` | 15pt | 400 | Default copy |
| `{typography.caption}` | 11pt | 400 | Counts and hints |
| `{typography.button}` | 15pt | 500 | Actions |

### Principles

- Let serif titles feel expressive without increasing density.
- Keep labels short and neutral; the image grid remains dominant.
- Use centered type for onboarding and page titles, left alignment for settings and forms.
- Avoid all-caps except the small POOL.DAY wordmark.

### Note on Font Substitutes

Use **DM Serif Display** or **Fraunces** for the editorial role and **SF Pro / Inter** for system sans. Preserve the restrained serif weight and compact mobile proportions.

# Screen composition

### Grid & Container

The home library uses a user-selectable 2-, 3-, or 4-column image grid. Pools use asymmetrical cover sizes but align to the same horizontal gutters. Focused screens keep one centered mobile column.

### Whitespace Philosophy

Empty white space is functional: it separates image clusters and gives floating controls room to remain visible. Do not fill sparse pool or settings screens with decoration.

# Navigation appearance

The top bar centers POOL.DAY and places tactile brand objects at the edges. A floating bottom bar switches Home and Pools, with adjacent search or add controls. Detail screens use a top-left close and top-right contextual actions.

# Components

### Buttons

Primary actions are wide cyan pills with white text and a diffuse blue shadow. Secondary actions are white or frosted pills. Circular close, add, share, and delete controls use the same floating treatment.

### Cards & Containers

Pool covers are pale rounded fields containing miniature screenshot collages. Settings groups stack rows inside one rounded gray container. Onboarding places all choices inside one oversized white sheet.

### Inputs & Forms

Text entry uses large pale rounded areas with understated placeholders. Keyboard states keep the primary Continue button visible above the keyboard when space permits.

### Status & Build Page

Permission state is shown inline with a green circled check. Counts sit directly under pool names; progress in onboarding uses short horizontal marks rather than numeric steps.

### Navigation

The top bar centers POOL.DAY and places tactile brand objects at the edges. A floating bottom bar switches Home and Pools, with adjacent search or add controls. Detail screens use a top-left close and top-right contextual actions.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White or charcoal canvas | Base screens |
| 1 | Pale rounded group | Settings and form clusters |
| 2 | Translucent blur with soft shadow | Bottom navigation and edge controls |
| 3 | White oversized sheet over blue field | Onboarding |

### Decorative Depth

Use blur, broad low-opacity shadow, and translucent fills. Tactile 3D symbols add depth; borders should remain faint and secondary.

# States

Permission state is shown inline with a green circled check. Counts sit directly under pool names; progress in onboarding uses short horizontal marks rather than numeric steps.

# iOS adaptation

| Wide | 768pt+ | Center the mobile canvas; allow wider gutters |
| Small | <390pt | Reduce sheet padding and serif scale |

### Touch Targets

Maintain at least 44pt for floating icons, segmented options, and rows. Keep the bottom controls above the safe area and avoid narrow hit regions between translucent pills.

### Collapsing Strategy

Reduce screenshot columns before shrinking individual items below useful recognition. Let option grids collapse from two columns to one only when labels wrap. Keep the dominant bottom action full width.

### Image Behavior

Screenshot thumbnails preserve aspect ratio and may vary in height. Detail views fit the full capture without destructive crop. Pool collages may overlap or fan thumbnails but should retain recognizable edges.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Let screenshots dominate the library.
- Keep primary controls cyan, rounded, and spatially detached from content.
- Pair expressive serif headings with neutral sans labels.
- Preserve generous white space around sparse collections.
- Use 3D brand objects only as purposeful landmarks.

### Don't

- Don't place heavy borders around every screenshot.
- Don't introduce dense toolbars over the grid.
- Don't turn the mascot palette into a general multicolor UI.
- Don't flatten onboarding into a conventional settings form.
- Don't use strong shadows on ordinary grouped rows.

# Known gaps

- Exact typeface names and color values were inferred visually from the inspected screens.
- Motion of the duck and video-only interactions could not be assessed from still frames.
- iPad-specific layouts were not present in the available scenarios.

</design-context>
