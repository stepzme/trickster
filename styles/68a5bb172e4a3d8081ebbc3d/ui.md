<design-context>
---
version: alpha
name: Radio-Arzamas-design-analysis
description: "A dark editorial audio interface built on warm charcoal surfaces, oversized white cultural headlines, and a single vivid yellow accent. Museum photography, archival imagery, and illustrated cover art carry discovery while thin white outlines, compact metadata, and a restrained five-tab shell keep playback and library tasks legible."

colors:
  primary: "#FFD81A"
  on-primary: "#211E21"
  primary-hover: "#FFE45C"
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
    fontSize: 40px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -1.2px
  display-lg:
    fontFamily: System Sans
    fontSize: 34px
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -0.9px
  display-md:
    fontFamily: System Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.5px
  headline:
    fontFamily: System Sans
    fontSize: 23px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.2px
  card-title:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.3px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  xxl: 28px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.outline}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 13px 20px
  topic-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
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
    padding: 16px
  search-field:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 13px 14px
  mini-player:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 8px 10px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 56px
---

## Overview

Radio Arzamas is a dark editorial listening environment. Warm charcoal rather than pure black keeps archival imagery and art reproductions from feeling harsh. White display type overlays image-led heroes, while yellow is reserved for the active tab, saved state, outlined topic filters, and subscription actions.

**Key Characteristics:**
- Warm near-black canvas with no separate light mode in the reviewed screens.
- One yellow accent used sparingly and consistently.
- Large, tightly stacked cultural headlines over full-width imagery.
- Dense horizontal shelves for courses, podcasts, topics, and lecturers.
- Thin white outlines for secondary actions and circular playback controls.
- Persistent mini-player that remains visually subordinate to content.

## Colors

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

## Typography

### Font Family

- Use a neutral system grotesk for interface and editorial display type.
- Use serif typography only when it is part of supplied artwork, never as a competing UI family.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 800 | Home hero title |
| `{typography.display-lg}` | 34px | 800 | Course and campaign headline |
| `{typography.display-md}` | 28px | 700 | Screen or paywall heading |
| `{typography.headline}` | 23px | 600 | Catalog and library title |
| `{typography.card-title}` | 16px | 500 | Course and episode title |
| `{typography.body}` | 14px | 400 | Default copy |
| `{typography.caption}` | 11px | 400 | Duration, author, and count |

### Principles

- Break editorial headlines into short, forceful lines rather than shrinking them.
- Use uppercase sparingly for shelf labels and metadata, not paragraph copy.
- Keep episode descriptions readable and left-aligned.
- Let content imagery and hierarchy create drama; avoid decorative interface type.

### Note on Font Substitutes

Use SF Pro Display/Text on iOS or Inter elsewhere. Preserve the heavy display weight and compact leading; do not substitute a rounded or friendly display face.

## Layout

### Spacing System

Use a 4px base, 12px screen gutters, 12–16px card gaps, and 24px between editorial shelves. Detail pages use 16px horizontal insets and larger 24–32px gaps around the hero.

### Grid & Container

Home and catalog use one vertical feed with horizontally scrolling card rows. Course detail screens keep controls and text in a single column. Circular author portraits form a separate horizontal row.

### Whitespace Philosophy

Whitespace is compact around shelves but generous around the hero title and playback button. Do not fill every dark area with panels; the uninterrupted canvas is part of the editorial tone.

## Elevation & Depth

The system relies on tonal layering, image gradients, and bottom sheets rather than shadows. Fade hero imagery into the canvas. The mini-player and subscription sheet lift through a lighter charcoal surface, not a large drop shadow.

### Decorative Depth

Use dark image fades, overlapping artwork, and the persistent mini-player to create depth. Avoid ornamental glows, bevels, and visible shadow stacks.

## Shapes

### Border Radius Scale

- Content artwork uses small 6–10px corner radii.
- Primary and secondary buttons are fully pill-shaped.
- Playback and profile controls are circular with thin white outlines.
- Subscription containers use 20px corners; plan choices can be asymmetrical only through selection color.
- Avoid soft bubbly cards across the ordinary catalog.

### Photography & Illustration Geometry

Editorial imagery stays rectangular or softly rounded and may fade into the dark canvas. Circular crops are reserved for lecturer portraits and profile identity.

## Components

### Buttons

Primary buttons use yellow fill and dark text. Secondary buttons remain charcoal with a thin white outline. Circular playback buttons follow the same outline treatment. Native controls must inherit these colors, radii, and typography rather than exposing default iOS blue.

### Pricing Tabs

Use a compact segmented row for Albums, Tracks, and Lecturers. The active option gains a white underline; topic-level selection uses outlined yellow chips rather than a second filled tab style.

### Cards & Containers

Use a wide image with a bottom dark fade, large white title, small explanatory line, pagination dots, bookmark, and outlined circular play action.
Pair compact uppercase shelf labels with a chevron. Cards prioritize artwork, then title and author or episode count. Keep save affordances in the image corner.

### Inputs & Forms

Search uses a full-width charcoal field with white input text and a quiet clear action. Registration and support forms keep one column and outlined or yellow bottom actions.

### Status & Build Page

The mini-player includes thumbnail, current title, replay, and play/pause. Full playback may add timer, queue, download, and sharing without changing the surrounding visual grammar.
Place monthly and annual options side by side. The selected plan becomes yellow with dark text; the unselected plan remains charcoal with a white outline. Use one full-width yellow confirmation button.

### Navigation

The five-item bottom bar stays on the canvas with yellow active state and muted inactive icons. Profile remains a circular top-right control; back actions use simple white chevrons.

### Footer

Mobile product screens have no marketing footer. The bottom safe-area treatment should continue the charcoal canvas, with navigation or the mini-player as the final anchored element.

## Do's and Don'ts

### Do

- Keep yellow limited to action and selected state.
- Use authentic editorial images as the dominant visual material.
- Preserve persistent playback context.
- Use white outlines for quiet actions on dark surfaces.
- Keep metadata small and restrained.

### Don't

- Do not introduce colorful navigation chrome.
- Do not put every shelf inside a separate card.
- Do not use heavy shadows or glossy glass effects.
- Do not center long descriptions.
- Do not turn archival imagery into decorative background noise.

## Responsive Behavior

### Breakpoints

Use a single-column mobile layout through compact and regular phone widths. On wider screens, increase card width and outer gutters rather than adding unrelated columns.

### Touch Targets

Keep playback, bookmarks, topic chips, and bottom navigation at least 44px where they are direct controls, even when the visible icon is smaller.

### Collapsing Strategy

Keep two partial content cards visible to communicate horizontal scrolling. Allow large titles to wrap before reducing below 32px, and preserve the bottom bar plus mini-player above the safe area.

### Image Behavior

Crop hero images around the main subject and retain the lower dark fade for text. Shelf artwork keeps a stable aspect ratio and should scroll rather than compress.

## Iteration Guide

1. Establish the charcoal shell and five-tab navigation.
2. Build hero, content shelf, catalog, and detail templates.
3. Add playback continuity through the mini-player.
4. Apply yellow only after hierarchy works in grayscale.
5. Add subscription and profile surfaces using the same tokens.

## Known Gaps

- Exact custom font files were not available; system substitutes are specified.
- Video-only motion in onboarding was not reproducible from still images.
- Tablet and landscape layouts were not present in the reviewed material.
</design-context>
