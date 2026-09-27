<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 750, lineHeight: 1.08, letterSpacing: -0.5px }
  display-lg: { fontFamily: System Sans, fontSize: 29px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 23px, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 3px, sm: 6px, md: 10px, lg: 14px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  overlay-action: { backgroundColor: "{colors.semantic-overlay}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 10px }
  editor-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

VK Clips keeps video full-screen and places only essential metadata and actions over it. Discovery and creator tools use black surfaces, blue focus, and a distinctive pink-cyan create accent.

## Colors

### Brand & Accent

Blue marks links, selection, and account actions. Pink-to-cyan belongs to the central create affordance and app identity.

### Surface

Use black for playback and editing, near-black sheets, and graphite fields or tool panels.

### Text

White carries overlay metadata and tools; gray carries counts, helper copy, and inactive navigation.

### Semantic

Green confirms upload or save, amber warns, and pink-red marks report or delete. Brand accents do not replace status.

## Typography

### Font Family

Use a compact system sans that remains readable over moving video.

### Hierarchy

Use 23–36px page and onboarding titles, 16–20px creator or editor titles, 14–16px captions, and 10–12px counts.

### Principles

Keep overlay lines short, use strong contrast and subtle scrims, and never cover the focal action in the video.

### Note on Font Substitutes

Use SF Pro or Inter with medium overlay weights and broad script support.

## Layout

### Spacing System

Use a 4px base, 10–12px safe-area gutters, 8px tool gaps, and 16–24px between profile sections.

### Grid & Container

Playback fills the viewport. A right action rail and bottom-left metadata share safe edges; editor tools occupy rails and bottom sheets.

### Whitespace Philosophy

The video is the visual field. Keep chrome tightly grouped and hide secondary tools until requested.

## Elevation & Depth

Use dark scrims, floating icon controls, and tonal sheets. Avoid visible card shadow over playback.

### Decorative Depth

The content supplies all visual depth. UI uses only the create-button glow and minimal translucent overlays.

## Shapes

### Border Radius Scale

Use 6px fields, 10–14px sheets, 20px media panels, and round creator, reaction, and record controls.

### Photography & Illustration Geometry

Video uses full-bleed `cover` with subject-safe cropping. Thumbnails and music art use compact squares; no standalone illustration language is present.

## Components

### Buttons

Playback actions are white icons; editor next/save actions are high-contrast white or blue. Native controls must inherit the black workspace and blue focus.

### Pricing Tabs

Following/For You, music modes, and profile sections use thin underline tabs with blue or white active state.

### Cards & Containers

Use sheets for comments, reports, privacy, and publishing. Profile media is a compact thumbnail grid rather than large cards.

### Inputs & Forms

Caption and search fields use graphite fills. Interest selection uses outline chips that fill blue when selected.

### Status & Build Page

Upload progress, download, draft, private, comment, duet, moderation, and publish states appear on the relevant clip or editor.

### Navigation

Use five bottom destinations for Home, Trending, Create, Notifications, and Profile. Keep Create visually centered and distinct.

### Footer

There is no footer. Playback navigation or editor actions close every primary surface.

## Do's and Don'ts

### Do

- Keep video dominant.
- Maintain safe overlay contrast.
- Separate watching from editing tools.
- Make privacy visible before publish.

### Don't

- Do not add opaque chrome over focal video.
- Do not overcrowd the action rail.
- Do not hide upload status.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Phones use one full-height clip. Wider screens may center a portrait player with comments or discovery in adjacent columns.

### Touch Targets

Reaction icons, navigation, editor tools, music items, chips, and publish actions require at least 44px hit regions.

### Collapsing Strategy

Keep playback, creator, caption, core reactions, and Create visible. Move reporting, advanced editing, and privacy into sheets.

### Image Behavior

Use `cover` for clips and `contain` for stickers, masks, music art, and editor overlays where the full asset matters.

## Iteration Guide

Start with full-screen playback, feed switch, action rail, creator metadata, navigation, and basic capture. Add editing, music, effects, publishing, and profile management afterward.

## Known Gaps

Screen Gallery exposes 100 image screens but no flow sequences. Playback, reporting, music, capture, editing, publishing, privacy, interests, followers, and profile states are visually documented; exact transition order remains unverified.

</design-context>

Use the design system above for all UI you generate.
