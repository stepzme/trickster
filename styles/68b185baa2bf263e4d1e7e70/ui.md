<design-context>
---
version: 1
platform: iOS
name: VK-Clips-design-analysis
description: "A media-first short-video interface built from edge-to-edge video, black creator tools, white overlay actions, cool-blue selection, and a pink-to-cyan creation accent. Chrome stays compact so motion content remains dominant."

colors:
  primary: "#4C8FF0"
  on-primary: "#FFFFFF"
  primary-pressed: "#3575D1"
  accent-pink: "#F05AC8"
  accent-cyan: "#46D9EB"
  ink: "#F7F7F8"
  ink-muted: "#A4A5AA"
  ink-subtle: "#66686D"
  canvas: "#000000"
  surface-1: "#17181A"
  surface-2: "#28292C"
  hairline: "#35363A"
  semantic-success: "#4DBB7B"
  semantic-warning: "#E4A23B"
  semantic-danger: "#EF5A68"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 750, lineHeight: 1.08, letterSpacing: -0.5 }
  display-lg: { fontFamily: System Sans, fontSize: 29, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 23, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 10, lg: 14, xl: 20, xxl: 26, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  overlay-action: { backgroundColor: "{colors.semantic-overlay}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 10 }
  editor-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

VK Clips keeps video full-screen and places only essential metadata and actions over it. Discovery and creator tools use black surfaces, blue focus, and a distinctive pink-cyan create accent.

# Non-negotiable visual invariants

- The reference consistently shows video dominant.
- The reference consistently shows maintain safe overlay contrast.
- The reference consistently shows separate watching from editing tools.
- The reference consistently shows make privacy visible before publish.
- The reference consistently shows a media-first short-video interface built from edge-to-edge video.
- The reference consistently shows black creator tools.
- The reference consistently shows white overlay actions.
- The reference consistently shows cool-blue selection.

# Color and surfaces

### Brand & Accent

Blue marks links, selection, and account actions. Pink-to-cyan belongs to the central create affordance and app identity.

### Surface

Use black for playback and editing, near-black sheets, and graphite fields or tool panels.

### Text

White carries overlay metadata and tools; gray carries counts, helper copy, and inactive navigation.

### Semantic

Green confirms upload or save, amber warns, and pink-red marks report or delete. Brand accents do not replace status.

# Typography

### Font Family

Use a compact system sans that remains readable over moving video.

### Hierarchy

Use 23–36 points page and onboarding titles, 16–20 points creator or editor titles, 14–16 points captions, and 10–12 points counts.

### Principles

Keep overlay lines short, use strong contrast and subtle scrims, and never cover the focal action in the video.

### Note on Font Substitutes

Use SF Pro or Inter with medium overlay weights and broad script support.

# Screen composition

### Spacing System

Use a 4 points base, 10–12 points safe-area gutters, 8 points tool gaps, and 16–24 points between profile sections.

### Grid & Container

Playback fills the viewport. A right action rail and bottom-left metadata share safe edges; editor tools occupy rails and bottom sheets.

### Whitespace Philosophy

The video is the visual field. Keep chrome tightly grouped and hide secondary tools until requested.

Surface hierarchy observed in the source:

Use dark scrims, floating icon controls, and tonal sheets. Avoid visible card shadow over playback.

### Decorative Depth

The content supplies all visual depth. UI uses only the create-button glow and minimal translucent overlays.

# Navigation appearance

Use five bottom destinations for Home, Trending, Create, Notifications, and Profile. Keep Create visually centered and distinct.

# Components

### Buttons

Playback actions are white icons; editor next/save actions are high-contrast white or blue. Native controls must inherit the black workspace and blue focus.

### Cards & Containers

Use sheets for comments, reports, privacy, and publishing. Profile media is a compact thumbnail grid rather than large cards.

### Inputs & Forms

Caption and search fields use graphite fills. Interest selection uses outline chips that fill blue when selected.

# Imagery and icons

The content supplies all visual depth. UI uses only the create-button glow and minimal translucent overlays.

Video uses full-bleed `cover` with subject-safe cropping. Thumbnails and music art use compact squares; no standalone illustration language is present.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Upload progress, download, draft, private, comment, duet, moderation, and publish states appear on the relevant clip or editor.

# iOS adaptation

### Touch Targets

Reaction icons, navigation, editor tools, music items, chips, and publish actions require at least 44 points hit regions.

### Collapsing Strategy

Keep playback, creator, caption, core reactions, and Create visible. Move reporting, advanced editing, and privacy into sheets.

### Image Behavior

Use `cover` for clips and `contain` for stickers, masks, music art, and editor overlays where the full asset matters.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not add opaque chrome over focal video.
- Do not overcrowd the action rail.
- Do not hide upload status.
- Do not expose light native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
