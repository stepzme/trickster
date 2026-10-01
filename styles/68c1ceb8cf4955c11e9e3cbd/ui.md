<design-context>
---
version: 1
platform: iOS
name: Apple-Music-design-analysis
description: "A content-led music interface built from white iOS surfaces, heavy black titles, Apple Music coral, and richly varied album artwork. A translucent mini-player and five-tab navigation remain persistent, while the full player derives its atmospheric color from the current cover."
colors:
  primary: "#FA2D48"
  on-primary: "#FFFFFF"
  primary-soft: "#FDE8EB"
  ink: "#111111"
  ink-muted: "#77777C"
  ink-subtle: "#A9A9AE"
  canvas: "#FFFFFF"
  surface-1: "#F2F2F7"
  surface-2: "#E5E5EA"
  hairline: "#D9D9DE"
  semantic-success: "#34C759"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  media-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0 }
  mini-player: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [8, 16]}
  context-menu: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 6 }
  plan-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 16 }
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Apple Music keeps system chrome quiet so album covers, editorial art, and radio portraits dominate. Coral indicates active music actions; playback surfaces inherit color from the current artwork.

**Key Characteristics:**
- White iOS canvas with bold titles.
- Coral active tabs, links, and subscription actions.
- Artwork-led horizontal rails and grids.
- Persistent mini-player above navigation.
- Full player with blurred cover-derived backdrop.
- Native sheets, context menus, and purchase confirmation.

# Non-negotiable visual invariants

- Sampled screens consistently use white iOS canvas with bold titles.
- The reference consistently shows coral active tabs, links, and subscription actions.
- The reference consistently shows artwork-led horizontal rails and grids.
- Navigation consistently uses persistent mini-player above navigation.
- The reference consistently shows full player with blurred cover-derived backdrop.
- The reference consistently shows native sheets, context menus, and purchase confirmation.

# Color and surfaces

### Brand & Accent
- **Apple Music Coral** ({colors.primary}): Active destination, links, subscription, and library icons.
- **Soft Coral** ({colors.primary-soft}): Selected or promotional support.
- Dynamic cover-derived color belongs only to Now Playing.

### Surface
- **Canvas** ({colors.canvas}): Discovery, library, search, and account.
- **Surface 1** ({colors.surface-1}): Mini-player, sheets, search, and menus.
- **Surface 2** ({colors.surface-2}): Disabled and nested controls.
- **Hairline** ({colors.hairline}): Lists and grouped settings.

### Text
- **Ink** ({colors.ink}): Titles, track names, and actions.
- **Ink Muted** ({colors.ink-muted}): Artist, schedule, and metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled transport and empty guidance.

### Semantic
- **Success** ({colors.semantic-success}): Enabled contact and discovery toggles.
- **Danger** ({colors.semantic-danger}): Destructive account state.
- **Overlay** ({colors.semantic-overlay}): Menu and player blur scrim.

# Typography

### Font Family

- **SF Pro Display** — page and section headings.
- **SF Pro Text** — track, artist, navigation, menus, and settings.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40 points | 700 | Destination heading |
| `{typography.display-md}` | 28 points | 700 | Player or plan heading |
| `{typography.headline}` | 22 points | 700 | Section heading |
| `{typography.card-title}` | 16 points | 600 | Track, station, or collection |
| `{typography.body}` | 15 points | 400 | Default metadata |
| `{typography.caption}` | 11 points | 400 | Tab and schedule metadata |
| `{typography.button}` | 15 points | 600 | Actions |

### Principles

- Use large bold destination titles.
- Keep track and artist hierarchy consistent.
- Let cover typography remain inside artwork.
- Use coral text sparingly for action and selection.

### Note on Font Substitutes

Use **Inter** or a native system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4 points base. Screen gutters are 16 points, artwork gaps 8–12 points, and list rows 12–16 points.

### Grid & Container

Listen Now and Browse use horizontal media rails and two-column grids. Library and Search use single-column lists or two-column categories. Now Playing is a centered vertical stack.

### Whitespace Philosophy

Use open white space around media rails and lists. Never add decorative panels behind artwork unless it is an editorial card.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Discovery and library |
| 1 | Translucent bar | Mini-player and tabs |
| 2 | Blurred background plus menu | Context action |
| 3 | Cover-derived atmosphere | Full player |

### Decorative Depth

Use blurred artwork and translucency around playback. Avoid drop shadows on ordinary lists.

# Navigation appearance

Listen Now, Browse, Radio, Library, and Search form the bottom bar. Non-subscribers may see a reduced set. Mini-player remains above it.

# Components

### Buttons

Primary subscription and redemption actions use coral. Playback controls are black or white depending on backdrop. Secondary actions use text or native list rows.

### Cards & Containers

Media cards pair square art with title and artist. Radio cards add schedule and play. Trial cards use bounded promotional art and one coral action.

### Inputs & Forms

Search uses a soft gray field with Cancel while active. Playlist search and manual redemption use native inputs and clear keyboard-safe actions.

# Imagery and icons

Use blurred artwork and translucency around playback. Avoid drop shadows on ordinary lists.

Album and playlist art remains square and uncropped. Radio portraits may fill wide cards. Profile imagery is circular.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Playback state stays in the mini-player. Live radio and schedule are explicit. Downloaded and selected library states use icon plus label.

# iOS adaptation

### Touch Targets

Maintain 44 points for tabs, transport, overflow, search segments, and plan selection.

### Collapsing Strategy

Reduce media-grid columns before artwork size. Keep the mini-player full width and truncate track metadata before controls.

### Image Behavior

Contain square art and preserve aspect ratio. Cover only wide editorial cards; use a blurred duplicate for player atmosphere.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't recolor discovery chrome per album.
- Don't crop cover typography.
- Don't hide player access during navigation.
- Don't interrupt browsing with full-screen upsells.
- Don't merge playback and subscription actions.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
