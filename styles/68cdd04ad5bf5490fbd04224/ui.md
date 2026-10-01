<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
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

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 20]}
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  mix-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 16 }
  mini-player: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

VK Music places album art and personalized gradients on a black listening canvas. The persistent mini-player maintains continuity while compact shelves keep discovery fast.

# Non-negotiable visual invariants

- The reference consistently shows playback context persistent.
- Imagery consistently uses let cover art drive variety.
- The reference consistently shows blue for active audio.
- The reference consistently shows track rows compact.
- The reference consistently shows a dark music interface built from black listening surfaces.
- The reference consistently shows vivid blue-violet gradients.
- Imagery consistently uses album-art shelves.
- The reference consistently shows circular artist portraits.

# Color and surfaces

### Brand & Accent

Blue marks playback, selection, and links. Violet and pink enrich mix, plan, and campaign gradients.

### Surface

Use black for main destinations, near-black for lists, and graphite for the mini-player, sheets, and controls.

### Text

White carries titles and tracks; gray carries artists, metadata, and inactive navigation.

### Semantic

Green confirms download or save, amber warns, and red marks unavailable or destructive actions. Playback remains blue.

# Typography

### Font Family

Use a compact system sans with broad artist-name and multilingual support.

### Hierarchy

Use 24–38 points campaign statements, 20 points shelf titles, 14–16 points tracks, and 10–12 points metadata.

### Principles

Keep track and artist hierarchy stable, truncate predictably, and avoid placing long copy over album art.

### Note on Font Substitutes

Use SF Pro or Inter with medium list weights and bold feature-card titles.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 12 points card gaps, and 24 points between discovery shelves.

### Grid & Container

Home and Mix stack horizontal rails. Track lists align art, title, artist, play state, and overflow.

### Whitespace Philosophy

Let cover art create rhythm. Keep player controls open and avoid dense copy near transport controls.

Surface hierarchy observed in the source:

Use cover-art contrast, gradient cards, and a lifted mini-player. Shadows remain subtle on black.

### Decorative Depth

Use blue-violet gradients, blurred cover color, and simple waveform motifs. Album art supplies the rest.

# Navigation appearance

Use five bottom destinations for Main, Mix, Podcasts, Search, and My Music, with the mini-player directly above.

# Components

### Buttons

Play controls are circular high-contrast buttons; subscription actions are white or blue pills. Native controls must inherit the dark palette and blue focus.

### Cards & Containers

Mix cards use one gradient, large title, and play action. Social playlist cards show taste match before track preview.

### Inputs & Forms

Search uses a graphite full-width field. Playlist creation uses dark fields and clear visibility or collaboration settings.

# Imagery and icons

Use blue-violet gradients, blurred cover color, and simple waveform motifs. Album art supplies the rest.

Album and podcast art uses square `cover`; artist portraits are circular. There is no separate illustration language beyond campaign assets.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Playing, paused, queued, downloaded, explicit, unavailable, subscribed, and offline states appear beside the related audio.

# iOS adaptation

### Touch Targets

Track rows, play actions, tabs, overflow menus, mini-player, and navigation require at least 44 points hit regions.

### Collapsing Strategy

Keep current track, transport, and primary destinations visible. Move queue, device, lyrics, and advanced actions into panels.

### Image Behavior

Use `cover` for album and podcast art, circular crop for artists, and `contain` for service-import logos.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not decorate every shelf with gradients.
- Do not hide download or queue state.
- Do not overcrowd the mini-player.
- Do not expose light native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
