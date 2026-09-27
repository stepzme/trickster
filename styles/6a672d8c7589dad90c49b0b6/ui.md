<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 20px }
  create-action: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 24px }
  studio-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  media-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62px }
---

## Overview

Suno is a dark content-led music system where artwork and warm creative gradients animate otherwise restrained chrome. Creation panels are soft and translucent; playback remains bold and direct.

## Colors

### Brand & Accent

Pink-to-orange identifies creation, selected profile accents, and special creative state. White remains the primary playback action.

### Surface

Use near-black canvas with layered charcoal panels. Artwork-derived blur may sit behind the player or studio.

### Text

White carries titles and actions; cool gray carries prompts, styles, counts, and timestamps.

### Semantic

Green confirms completion, amber warns about credits, and red marks destructive actions. Do not use the creative gradient as status.

## Typography

### Font Family

Use a neutral system sans with strong display weight and compact social metadata.

### Hierarchy

Use 22–28px page titles, 15–17px track and panel titles, 14px body, and 10–12px counts or generation labels.

### Principles

Keep track title and creator distinct, make prompts readable, and truncate style tags predictably.

### Note on Font Substitutes

SF Pro or Inter are appropriate. Preserve clear Cyrillic and compact metadata.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px within rows and panels, and 20–24px between discovery shelves.

### Grid & Container

Explore uses horizontal art rails and vertical track lists. Studio uses stacked rounded panels; player is immersive and single-column.

### Whitespace Philosophy

Keep discovery dense but preserve breathing room around cover art, studio groups, and the central playback button.

## Elevation & Depth

Depth comes from artwork blur, dark surface steps, and the mini-player above navigation rather than strong shadow.

### Decorative Depth

Use sampled artwork color and subtle translucent panels. Avoid unrelated glow, illustration, or glass overload.

## Shapes

### Border Radius Scale

Studio panels and cards use 12–16px, buttons and navigation selection are pills, and avatars are circular.

### Photography & Illustration Geometry

Artwork is square in feeds, collage-based for playlists, and full-bleed in video playback. Preserve creator avatars as circles.

## Components

### Buttons

Primary playback uses white pills or circles. Creative actions use the warm gradient; native controls must inherit dark surfaces and typography.

### Pricing Tabs

Mode and model selectors use compact dark pills. Selected state gains brighter text or a restrained warm accent.

### Cards & Containers

Track rows combine cover, duration, title, creator, plays, and overflow. Studio panels isolate lyrics, style, audio, and advanced options.

### Inputs & Forms

Prompts and titles live inside dark rounded fields. Keep generation credits and advanced values visible before commitment.

### Status & Build Page

Generation progress, published state, likes, plays, comments, and model version appear beside the relevant song.

### Navigation

Five bottom destinations persist, with Create centered as a gradient pill. Mini-player sits immediately above the bar.

### Footer

There is no footer. Persistent playback and bottom navigation close primary screens.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints

Keep creation and playback single-column on phones. Wider layouts may pair library lists with a persistent player.

### Touch Targets

Playback, tags, overflow, create, and navigation controls require at least 44px targets.

### Collapsing Strategy

Allow shelves and tags to scroll horizontally. Keep Create or playback visible during long content.

### Image Behavior

Use `cover` for artwork and video. Sample artwork colors for background blur while maintaining text contrast.

## Iteration Guide

Start with near-black canvas, artwork rails, bottom navigation, mini-player, and studio panels. Add publishing, remix, social, and profile tools afterward.

## Known Gaps

The reviewed scenarios cover Home, generation, Explore, playback, social actions, Library, publishing, Profile, and settings. Tablet layouts and every generation failure were not visible.

</design-context>

Use the design system above for all UI you generate.
