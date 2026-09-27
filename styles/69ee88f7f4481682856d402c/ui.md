<design-context>
---
version: alpha
name: VK-Video-design-analysis
description: "A bright video-discovery interface built from white surfaces, oversized thumbnail imagery, compact black titles, cool-blue navigation, and a red play-brand accent. Dense feeds remain readable through strict card rhythm and minimal chrome."

colors:
  primary: "#2688EB"
  on-primary: "#FFFFFF"
  primary-pressed: "#1E6FC5"
  accent-red: "#F03448"
  ink: "#17181B"
  ink-muted: "#73767C"
  ink-subtle: "#A5A8AD"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F3F5"
  hairline: "#DFE1E5"
  semantic-success: "#42AF72"
  semantic-warning: "#E5A038"
  semantic-danger: "#E34B58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0 }
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
  video-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0 }
  channel-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

VK Video uses strict white feed structure so vivid thumbnails and channel media carry the visual energy. Blue guides navigation while red stays tied to the play identity and live video.

## Colors

### Brand & Accent

Blue owns navigation, search, follow, and general action. Red is limited to the play mark, live content, and urgent media state.

### Surface

Use white for feeds and channel pages, pale gray for search and placeholders, and black for playback chrome.

### Text

Near-black carries titles; gray carries channels, views, dates, duration context, and inactive navigation.

### Semantic

Green confirms upload or save, amber warns, and red marks live or destructive action. Use labels with all states.

## Typography

### Font Family

Use a compact system sans with readable Cyrillic and strong thumbnail-title pairing.

### Hierarchy

Use 24–38px page titles, 15–20px video and channel titles, 12–14px metadata, and 10px navigation labels.

### Principles

Limit titles to a few lines, preserve clear channel metadata, and keep duration separate from title text.

### Note on Font Substitutes

Use SF Pro or Inter with medium card titles and tabular duration figures.

## Layout

### Spacing System

Use a 4px base, 8–12px feed gutters, 10px card gaps, and 20–24px between discovery sections.

### Grid & Container

The primary feed is single-column; themed sections use horizontal rails or two-column grids. Playback stays edge-to-edge.

### Whitespace Philosophy

Let thumbnails touch the feed rhythm while keeping title and metadata blocks distinct. Use more space around search and channel headers.

## Elevation & Depth

Use flat white cards, light dividers, and black playback overlays. Shadows are unnecessary in feed lists.

### Decorative Depth

Thumbnails, channel art, and video provide all decorative depth. UI stays neutral.

## Shapes

### Border Radius Scale

Use 6px thumbnails and fields, 10–14px sheets, and circular avatars or playback controls.

### Photography & Illustration Geometry

Video thumbnails use 16:9 `cover`; clips use portrait `cover`; channel avatars are circular. No separate illustration language is present.

## Components

### Buttons

Subscribe, create, and follow actions use blue or high-contrast white over playback. Native controls must inherit blue focus and the current surface.

### Pricing Tabs

Home categories, channel sections, and profile modes use text tabs with blue underline.

### Cards & Containers

Video cards pair one thumbnail with title, channel, views, age, and overflow. Continue Watching adds progress to the thumbnail.

### Inputs & Forms

Search uses a pale field and cancel action. Publishing forms use grouped fields for title, media, cover, category, and visibility.

### Status & Build Page

Live, duration, progress, subscribed, saved, restricted, upload, and processing states appear on the relevant thumbnail or creator flow.

### Navigation

Use five bottom destinations for Home, Clips, Create, Subscriptions, and Profile. Keep discovery tabs in the Home header.

### Footer

There is no footer. Playback actions or bottom navigation complete primary surfaces.

## Do's and Don'ts

### Do

- Let thumbnails lead discovery.
- Keep metadata consistent.
- Preserve watch progress.
- Separate long video and clips modes.

### Don't

- Do not decorate feed backgrounds.
- Do not over-round every card.
- Do not hide channel attribution.
- Do not expose unrelated accent colors.

## Responsive Behavior

### Breakpoints

Phones use a single feed. Wider screens may use a thumbnail grid with persistent category or subscription navigation.

### Touch Targets

Tabs, video cards, channel links, search, overflow, and navigation require at least 44px hit regions.

### Collapsing Strategy

Keep thumbnail, title, channel, duration, and primary action visible. Move secondary metadata and management into detail or overflow.

### Image Behavior

Use `cover` for thumbnails and clips, circular crop for avatars, and `contain` for logos or unavailable placeholders.

## Iteration Guide

Start with Home feed, player, search, channel page, subscriptions, and five-item navigation. Add Kids, Clips, creator upload, live content, and profile management afterward.

## Known Gaps

The inspected catalog documents 86 flows across onboarding, feeds, Kids, search, channels, clips, subscriptions, profile, creation, and settings. Some live and upload-failure states are less represented.

</design-context>

Use the design system above for all UI you generate.
