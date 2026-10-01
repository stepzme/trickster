<design-context>
---
version: 1
platform: iOS
name: Spotify-design-analysis
description: "A near-black media interface where album and podcast artwork provides nearly all visual color. White high-contrast typography, charcoal cards, compact gray pills, a scarce neon-green state accent, and a persistent mini-player create a dense but legible listening environment."

colors:
  primary: "#1ED760"
  on-primary: "#07120A"
  primary-pressed: "#18B94F"
  ink: "#FFFFFF"
  ink-muted: "#B3B3B3"
  ink-subtle: "#77777B"
  canvas: "#0E0C0F"
  surface-1: "#1D1B1E"
  surface-2: "#2B292C"
  surface-3: "#363438"
  hairline: "#39363B"
  semantic-success: "#1ED760"
  semantic-warning: "#F0B73B"
  semantic-danger: "#E9505B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.1 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 8, lg: 12, xl: 16, xxl: 24, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 20]}
  media-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  filter-chip: { backgroundColor: "{colors.surface-3}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  mini-player: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

Spotify is a dark content-first system. The chrome recedes into near-black while artwork, playback gradients, and strong white type identify media. Green remains scarce and meaningful.

# Non-negotiable visual invariants

- Let media artwork supply color.
- Keep green scarce and stateful.
- Preserve uninterrupted mini-player context.
- Use bold type to segment dense shelves.
- Home uses horizontal shelves and stacked recommendation cards.
- Library uses compact rows; the player uses a single immersive column.
- Favor dense browse surfaces but preserve large breathing room around cover art and central playback controls.

# Color and surfaces

Neon green marks active filters, saved state, progress, or playback context. Primary text actions often use white rather than filling the interface with green.

Near-black is the canvas; charcoal cards and chips create subtle lift. Media-derived gradients may fill player headers.

White carries titles and controls; light gray supports metadata; darker gray indicates inactive navigation or tertiary labels.

Green is both brand and positive playback state. Reserve red for destructive actions and amber for warnings.

# Typography

Use a compact grotesk or neutral system sans. Bold titles contrast with dense regular metadata.

Use 22–28 points page titles, 15–17 points media titles, 14 points body, and 10–12 points artist, duration, and navigation metadata.

Keep track and episode names prominent, truncate secondary metadata predictably, and use bold type for section rhythm.

Spotify Mix is proprietary; use Circular-like system stacks, SF Pro, or Inter with strong 600–700 weights.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 8–12 points within cards and lists, and 20–24 points between discovery shelves.

Home uses horizontal shelves and stacked recommendation cards. Library uses compact rows; the player uses a single immersive column.

Favor dense browse surfaces but preserve large breathing room around cover art and central playback controls.

Use blurred or sampled artwork color behind the player. Avoid unrelated gradients or ornamental effects.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five dark bottom destinations and keep the mini-player immediately above them. Active icons are white; green appears for content state.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary account actions are white pills with dark text; playback centers on a large circular white button. Native controls must inherit the dark surfaces and package typography.

Recommendation cards pair artwork with title, metadata, overflow, and play controls. Library rows stay flatter and denser.

Search uses a prominent dark or light field depending on context. Playlist and settings forms use charcoal rows with clear white labels.

Downloaded, saved, explicit, playing, and premium states use small icons or green labels adjacent to media metadata.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Artwork remains the content, not chrome: square album covers, portrait podcast covers, circular artists, and full-width premium collage crops.

Use `cover` for artwork and preserve square or portrait ratios. Sample artwork color for backgrounds without reducing text contrast.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Downloaded, saved, explicit, playing, and premium states use small icons or green labels adjacent to media metadata.

Green is both brand and positive playback state. Reserve red for destructive actions and amber for warnings.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Playback, chips, overflow actions, media rows, and bottom navigation require at least 44 points targets.
- Allow discovery shelves and filter chips to scroll horizontally. Keep the mini-player persistent and the full player vertically scrollable.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not fill generic cards with green.
- Do not add bright chrome around artwork.
- Do not hide playback state during navigation.
- Do not expose light native controls on dark surfaces.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

The reviewed scenarios cover Home, music and podcast discovery, player and lyrics, Search, Library, playlists, Premium, side menu, and settings. Tablet layouts and every playback error were not visible.

</design-context>
