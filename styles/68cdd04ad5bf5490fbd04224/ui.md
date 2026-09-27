<design-context>
---
version: alpha
name: VK-Music-design-analysis
description: "A dark music interface built from black listening surfaces, vivid blue-violet gradients, album-art shelves, circular artist portraits, and a persistent compact player. It feels immersive, social, and recommendation-led."

colors:
  primary: "#3C8BFF"
  on-primary: "#FFFFFF"
  primary-pressed: "#2B6FD5"
  accent-violet: "#A13FEC"
  accent-pink: "#EC53D7"
  ink: "#F7F7F8"
  ink-muted: "#9A9CA1"
  ink-subtle: "#62646A"
  canvas: "#000000"
  surface-1: "#151618"
  surface-2: "#292A2D"
  hairline: "#34363A"
  semantic-success: "#49B979"
  semantic-warning: "#E2A13A"
  semantic-danger: "#E75564"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
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

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 20px }
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  mix-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 16px }
  mini-player: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

VK Music places album art and personalized gradients on a black listening canvas. The persistent mini-player maintains continuity while compact shelves keep discovery fast.

## Colors

### Brand & Accent

Blue marks playback, selection, and links. Violet and pink enrich mix, plan, and campaign gradients.

### Surface

Use black for main destinations, near-black for lists, and graphite for the mini-player, sheets, and controls.

### Text

White carries titles and tracks; gray carries artists, metadata, and inactive navigation.

### Semantic

Green confirms download or save, amber warns, and red marks unavailable or destructive actions. Playback remains blue.

## Typography

### Font Family

Use a compact system sans with broad artist-name and multilingual support.

### Hierarchy

Use 24–38px campaign statements, 20px shelf titles, 14–16px tracks, and 10–12px metadata.

### Principles

Keep track and artist hierarchy stable, truncate predictably, and avoid placing long copy over album art.

### Note on Font Substitutes

Use SF Pro or Inter with medium list weights and bold feature-card titles.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 12px card gaps, and 24px between discovery shelves.

### Grid & Container

Home and Mix stack horizontal rails. Track lists align art, title, artist, play state, and overflow.

### Whitespace Philosophy

Let cover art create rhythm. Keep player controls open and avoid dense copy near transport controls.

## Elevation & Depth

Use cover-art contrast, gradient cards, and a lifted mini-player. Shadows remain subtle on black.

### Decorative Depth

Use blue-violet gradients, blurred cover color, and simple waveform motifs. Album art supplies the rest.

## Shapes

### Border Radius Scale

Use 8px list art and mini-player, 12–16px mix cards, 22px sheets, and circular artists and play controls.

### Photography & Illustration Geometry

Album and podcast art uses square `cover`; artist portraits are circular. There is no separate illustration language beyond campaign assets.

## Components

### Buttons

Play controls are circular high-contrast buttons; subscription actions are white or blue pills. Native controls must inherit the dark palette and blue focus.

### Pricing Tabs

Plan cadence, library sections, and recommendation modes use underline or compact segments with blue active state.

### Cards & Containers

Mix cards use one gradient, large title, and play action. Social playlist cards show taste match before track preview.

### Inputs & Forms

Search uses a graphite full-width field. Playlist creation uses dark fields and clear visibility or collaboration settings.

### Status & Build Page

Playing, paused, queued, downloaded, explicit, unavailable, subscribed, and offline states appear beside the related audio.

### Navigation

Use five bottom destinations for Main, Mix, Podcasts, Search, and My Music, with the mini-player directly above.

### Footer

There is no footer. The mini-player and navigation persist across primary destinations.

## Do's and Don'ts

### Do

- Keep playback context persistent.
- Let cover art drive variety.
- Use blue for active audio.
- Keep track rows compact.

### Don't

- Do not decorate every shelf with gradients.
- Do not hide download or queue state.
- Do not overcrowd the mini-player.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Phones use horizontal shelves and one player. Wider screens may show library navigation, content, and queue in columns.

### Touch Targets

Track rows, play actions, tabs, overflow menus, mini-player, and navigation require at least 44px hit regions.

### Collapsing Strategy

Keep current track, transport, and primary destinations visible. Move queue, device, lyrics, and advanced actions into panels.

### Image Behavior

Use `cover` for album and podcast art, circular crop for artists, and `contain` for service-import logos.

## Iteration Guide

Start with Main shelves, track list, mini-player, full player, search, and My Music. Add Mix, podcasts, social playlists, downloads, and subscription afterward.

## Known Gaps

The inspected catalog documents 21 flows across onboarding, discovery, subscription, mixes, podcasts, search, and library. Some full-player, queue, and offline error states are less represented.

</design-context>

Use the design system above for all UI you generate.
