<design-context>
---
version: 1
platform: iOS
name: Radio-Arzamas-design-analysis
description: "A dark editorial audio interface built on warm charcoal surfaces, oversized white cultural headlines, and a single vivid yellow accent. Museum photography, archival imagery, and illustrated cover art carry discovery while thin white outlines, compact metadata, and a restrained five-tab shell keep playback and library tasks legible."

colors:
  primary: "#FFD81A"
  on-primary: "#211E21"
  primary-soft: "#4A431B"
  ink: "#F7F6F4"
  ink-muted: "#B8B4B6"
  ink-subtle: "#858184"
  canvas: "#211E21"
  surface-1: "#2D2A2E"
  surface-2: "#3B383C"
  surface-3: "#4A474B"
  hairline: "#5E5A60"
  outline: "#EEECEF"
  semantic-success: "#77B86A"
  semantic-danger: "#E46B72"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 40
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -1.2
  display-lg:
    fontFamily: System Sans
    fontSize: 34
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -0.9
  display-md:
    fontFamily: System Sans
    fontSize: 28
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.5
  headline:
    fontFamily: System Sans
    fontSize: 23
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
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
    fontSize: 14
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.3
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4
  sm: 6
  md: 10
  lg: 14
  xl: 20
  xxl: 28
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
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.outline}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [13, 20]
  topic-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: [8, 12]
  content-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 0
  subscription-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 16
  search-field:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: [13, 14]
  mini-player:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: [8, 10]
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 56
---

# Overview

Radio Arzamas is a dark editorial listening environment. Warm charcoal rather than pure black keeps archival imagery and art reproductions from feeling harsh. White display type overlays image-led heroes, while yellow is reserved for the active tab, saved state, outlined topic filters, and subscription actions.

**Key Characteristics:**
- Warm near-black canvas with no separate light mode in the reviewed screens.
- One yellow accent used sparingly and consistently.
- Large, tightly stacked cultural headlines over full-width imagery.
- Dense horizontal shelves for courses, podcasts, topics, and lecturers.
- Thin white outlines for secondary actions and circular playback controls.
- Persistent mini-player that remains visually subordinate to content.

# Non-negotiable visual invariants

- Sampled screens consistently use warm near-black canvas with no separate light mode in the reviewed screens.
- The reference consistently shows one yellow accent used sparingly and consistently.
- Imagery consistently uses large, tightly stacked cultural headlines over full-width imagery.
- The reference consistently shows dense horizontal shelves for courses, podcasts, topics, and lecturers.
- The reference consistently shows thin white outlines for secondary actions and circular playback controls.
- Persistent mini-player that remains visually subordinate to content.

# Color and surfaces

### Brand & Accent

- **Yellow** ({colors.primary}) marks selection, progress, bookmarks, filter outlines, and purchase actions.
- **Yellow Soft** ({colors.primary-soft}) may support subtle progress or selected backgrounds but should never replace the clear yellow stroke or fill.

### Surface

- **Canvas** ({colors.canvas}) is the default page and navigation background.
- **Surface 1** ({colors.surface-1}) supports content rows and image fallbacks.
- **Surface 2** ({colors.surface-2}) carries search, subscription cards, and the mini-player.
- **Surface 3** ({colors.surface-3}) is limited to pressed or layered controls.

### Text

- **Ink** ({colors.ink}) is used for headlines and primary content.
- **Muted** ({colors.ink-muted}) carries authors, descriptions, and secondary actions.
- **Subtle** ({colors.ink-subtle}) is reserved for inactive tabs and quiet metadata.

### Semantic

Semantic success and danger appear only when the task requires them. Do not introduce additional bright hues into the shell; content artwork provides color variety.

# Typography

### Font Family

- Use a neutral system grotesk for interface and editorial display type.
- Use serif typography only when it is part of supplied artwork, never as a competing UI family.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40 points | 800 | Home hero title |
| `{typography.display-lg}` | 34 points | 800 | Course and campaign headline |
| `{typography.display-md}` | 28 points | 700 | Screen or paywall heading |
| `{typography.headline}` | 23 points | 600 | Catalog and library title |
| `{typography.card-title}` | 16 points | 500 | Course and episode title |
| `{typography.body}` | 14 points | 400 | Default copy |
| `{typography.caption}` | 11 points | 400 | Duration, author, and count |

### Principles

- Break editorial headlines into short, forceful lines rather than shrinking them.
- Use uppercase sparingly for shelf labels and metadata, not paragraph copy.
- Keep episode descriptions readable and left-aligned.
- Let content imagery and hierarchy create drama; avoid decorative interface type.

### Note on Font Substitutes

Use SF Pro Display/Text on iOS or Inter elsewhere. Preserve the heavy display weight and compact leading; do not substitute a rounded or friendly display face.

# Screen composition

### Spacing System

Use a 4 points base, 12 points screen gutters, 12–16 points card gaps, and 24 points between editorial shelves. Detail pages use 16 points horizontal insets and larger 24–32 points gaps around the hero.

### Grid & Container

Home and catalog use one vertical feed with horizontally scrolling card rows. Course detail screens keep controls and text in a single column. Circular author portraits form a separate horizontal row.

### Whitespace Philosophy

Whitespace is compact around shelves but generous around the hero title and playback button. Do not fill every dark area with panels; the uninterrupted canvas is part of the editorial tone.

Surface hierarchy observed in the source:

The system relies on tonal layering, image gradients, and bottom sheets rather than shadows. Fade hero imagery into the canvas. The mini-player and subscription sheet lift through a lighter charcoal surface, not a large drop shadow.

### Decorative Depth

Use dark image fades, overlapping artwork, and the persistent mini-player to create depth. Avoid ornamental glows, bevels, and visible shadow stacks.

# Navigation appearance

The five-item bottom bar stays on the canvas with yellow active state and muted inactive icons. Profile remains a circular top-right control; back actions use simple white chevrons.

# Components

### Buttons

Primary buttons use yellow fill and dark text. Secondary buttons remain charcoal with a thin white outline. Circular playback buttons follow the same outline treatment. Native controls must inherit these colors, radii, and typography rather than exposing default iOS blue.

### Cards & Containers

Use a wide image with a bottom dark fade, large white title, small explanatory line, pagination dots, bookmark, and outlined circular play action.
Pair compact uppercase shelf labels with a chevron. Cards prioritize artwork, then title and author or episode count. Keep save affordances in the image corner.

### Inputs & Forms

Search uses a full-width charcoal field with white input text and a quiet clear action. Registration and support forms keep one column and outlined or yellow bottom actions.

# Imagery and icons

Use dark image fades, overlapping artwork, and the persistent mini-player to create depth. Avoid ornamental glows, bevels, and visible shadow stacks.

Editorial imagery stays rectangular or softly rounded and may fade into the dark canvas. Circular crops are reserved for lecturer portraits and profile identity.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

The mini-player includes thumbnail, current title, replay, and play/pause. Full playback may add timer, queue, download, and sharing without changing the surrounding visual grammar.
Place monthly and annual options side by side. The selected plan becomes yellow with dark text; the unselected plan remains charcoal with a white outline. Use one full-width yellow confirmation button.

# iOS adaptation

### Touch Targets

Keep playback, bookmarks, topic chips, and bottom navigation at least 44 points where they are direct controls, even when the visible icon is smaller.

### Collapsing Strategy

Keep two partial content cards visible to communicate horizontal scrolling. Allow large titles to wrap before reducing below 32 points, and preserve the bottom bar plus mini-player above the safe area.

### Image Behavior

Crop hero images around the main subject and retain the lower dark fade for text. Shelf artwork keeps a stable aspect ratio and should scroll rather than compress.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not introduce colorful navigation chrome.
- Do not put every shelf inside a separate card.
- Do not use heavy shadows or glossy glass effects.
- Do not center long descriptions.
- Do not turn archival imagery into decorative background noise.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
