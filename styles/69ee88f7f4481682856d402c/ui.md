<design-context>
---
version: 1
platform: iOS
name: VK-Video-design-analysis
description: "A white media catalog lets saturated video thumbnails dominate a compact black-and-gray hierarchy, switching to edge-to-edge dark playback with cool-blue actions and a restrained five-item tab bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F5"
  accent-primary: "#2688EB"
  accent-secondary: "#F03448"
  text-primary: "#17181B"
  text-secondary: "#76787D"
  divider: "#E1E3E6"
  destructive: "#E34B58"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 10
rounded:
  control: 12
  card: 14
  sheet: 24
  pill: 999
components:
  video-feed-card: {}
  media-progress-thumbnail: {}
  channel-header: {}
  dark-player-overlay: {}
  five-item-media-tab-bar: {}
---

# Overview

VK Video keeps catalog and account surfaces almost neutral so colorful thumbnails, posters, avatars, and channel artwork supply most of the visual energy. Compact black titles and gray metadata create a dense but predictable rhythm on white. Playback and vertical clips invert into black, edge-to-edge media environments with minimal translucent controls. Blue identifies general actions and selection; red stays close to live or play-related emphasis.

# Non-negotiable visual invariants

- Large 16:9 or portrait media imagery is the dominant visual mass; interface decoration remains restrained.
- Feed items maintain a strict sequence of thumbnail, compact title, attribution, and gray metadata.
- Catalog and settings canvases are white or very pale gray; playback is edge-to-edge black or media-filled.
- Blue owns navigation, subscription, follow, and general actions; red is limited to live, play-brand, or urgent media states.
- Bottom navigation contains five compact icon-and-label items with one active blue state and a visually distinct central creation action.
- Duration, playback progress, mute, live, and other media states sit directly on or adjacent to the thumbnail rather than in separate generic cards.
- Kids/profile creation keeps its blue-purple authored illustration mass instead of substituting ordinary video artwork.

# Color and surfaces

White is the continuous feed, channel, profile, and settings canvas; pale cool gray supports search fields, grouped rows, placeholders, and inactive pills. Near-black carries titles and player chrome, while medium gray handles channel names, views, dates, and secondary settings copy. Blue is the primary action and active-navigation color. Red marks live or destructive/play-related emphasis; green may confirm saved or completed states. Dark player sheets and overlays use black or charcoal with white controls. Decorative gradients on the main feed, arbitrary accent colors in system chrome, or default iOS blue applied to every link would weaken the media-led hierarchy.

# Typography

Use SF Pro with compact mobile metrics. Page titles are bold at 24–30 points, section headers around 20 points, video and channel titles 15–17 points semibold, metadata 11–13 points regular gray, and tab labels around 10–11 points. Titles wrap to a small number of lines, then truncate; channel attribution remains visible. Durations use tabular numerals in compact overlays. Player text stays white and may truncate aggressively over imagery. With Dynamic Type, allow metadata to wrap or move below while preserving the thumbnail, title, creator, and primary action.

# Screen composition

The main catalog begins below the safe area with a compact brand/header row and small utility icons, then a horizontally scrolling category strip and a vertically scrolling single-column feed. Feed thumbnails occupy most of the width; title and metadata blocks sit directly beneath with modest gutters. Themed modules may use horizontal rails or two-column grids without changing the white canvas.

Search uses a pale wide field, then either results with familiar media rows or open whitespace. Channel/profile archetypes combine avatar or header identity, a blue action, compact tabs, and thumbnail grids or lists. Settings become full-width white grouped rows with separators and switches. Playback uses an edge-to-edge landscape or portrait media surface, dim overlay controls, and bottom or modal sheets for comments, description, quality, stickers, or other choices. Typical feed inset is 8–12 points, with 20–24 points between major sections.

# Navigation appearance

The bottom bar is white on catalog surfaces with five small icon-and-label items; active state is blue and inactive states are gray, while the central creation item remains visually distinct. The top catalog row combines a compact brand mark with search, notification, or settings line icons. Horizontal category and channel tabs use blue text or an underline for selection. Detail pages use a simple back arrow. Player and clips screens replace the white bars with translucent or white controls over dark full-bleed media. Sheets rise with large top corners over a dimmed player. This section defines appearance, not routes.

# Components

- **Video feed card:** wide media crop with modest radius, duration/status overlays, optional progress bar, then compact title and gray creator/view/date metadata; avoid an enclosing decorative card surface.
- **Portrait clip:** full-screen vertical cover with white overlay actions and minimal dark scrim for readability.
- **Search field:** broad pale-gray rounded rectangle, dark query text, compact search/clear actions, and a separate cancel action when shown.
- **Channel header:** circular avatar or mark, bold name, supporting counts, blue subscribe/follow control, and compact selected tabs.
- **Player overlay:** edge-to-edge media with centered transport controls, small top utilities, white glyphs, and translucent dark backing only where necessary.
- **Media sheet:** white or charcoal bottom sheet with about 24-point top corners, dense rows, and clear selected/check state for quality or settings.
- **Settings row:** full-width white row with dark label, optional gray description, and trailing switch or chevron separated by hairlines.

# Imagery and icons

Real video thumbnails, posters, creator avatars, channel marks, and sports or entertainment artwork carry most of the composition and cannot be omitted. Use 16:9 cover crops for standard video, portrait cover for clips, and circular crops for avatars. Functional icons are compact monochrome line glyphs; stickers remain user-content tools rather than an illustration reference. A separate authored illustration system appears in Kids/profile creation: flat rounded characters and doodled age-card objects on blue-purple surfaces. Preserve its reserved hero or card area where used, but do not spread it into the general media catalog.

# States

Observed states include native notification and tracking permissions, a logged-in toast, autoplay and mute badges, playback progress, liked and subscribed treatments, comments with keyboard and sticker tray, description and quality sheets, search entry/results, clips loading/playback, and settings toggles. Selected or followed actions use blue; live emphasis uses red; loading on dark media keeps the player surface intact. Native alerts remain native. No coherent branded error composition was observed, so do not invent one.

# iOS adaptation

Keep catalog content below the top safe area and reserve bottom space for the five-item bar and home indicator. Use vertical scrolling for feeds, channel lists, search results, and settings; use horizontal scrolling for category tabs and rails without shrinking touch targets. Standard playback should respect aspect ratio while clips may extend behind safe areas with controls inset from system gestures. Present comments, descriptions, and quality as native-behaving sheets; keep the keyboard from covering the active comment and send action. Maintain 44-point targets for tabs, overflow, transport, and channel actions. VoiceOver should announce thumbnail context, title, creator, duration, and state in that order. Dynamic Type must expand metadata blocks without cropping media controls. Preserve light catalog and dark player appearances rather than applying a single automatic inversion.

# Anti-generic checklist

- Do not replace large media crops with small icons or generic placeholder cards.
- Do not wrap every feed item in a floating white rounded rectangle on a gray background.
- Do not hide creator attribution, duration, progress, or media state.
- Do not use red as a general accent or blue as decorative fill throughout thumbnails.
- Do not ship an unstyled `TabView`, generic `Form`, or default navigation bar that changes the compact media rhythm.
- Do not use one radius for thumbnails, search, sheets, and pills.
- Do not substitute arbitrary SF Symbols or poster art for the authored Kids illustrations.
- Do not add decorative or repeated copy when thumbnail, title, state, and action already communicate the content.

</design-context>
