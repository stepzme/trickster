<design-context>
---
version: 1
platform: iOS
name: VK-Music-design-analysis
description: "A dense dark music interface with near-black listening surfaces, blue active states, album-art shelves, circular artist imagery, a persistent graphite mini-player above tab navigation, and immersive photographic or cover-derived player backgrounds."
colors:
  canvas: "#000000"
  surface-primary: "#151618"
  surface-secondary: "#292A2D"
  accent-primary: "#3C8BFF"
  accent-secondary: "#A13FEC"
  text-primary: "#F7F7F8"
  text-secondary: "#9A9CA1"
  divider: "#34363A"
  destructive: "#E75564"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 600, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 14
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 12
  sheet: 24
  pill: 999
components:
  media-tile: {fill: "album or editorial artwork", radius: 10, label: "compact below"}
  track-row: {fill: "canvas or surface-primary", leading: "square thumbnail", trailing: "overflow or state"}
  mini-player: {fill: "surface-secondary", height: 56, position: "above bottom navigation"}
  bottom-navigation: {fill: "canvas", selected: "blue", icons: "thin line"}
  transport-control: {fill: "transparent", icon: "large white", target: 44}
---

# Overview

VK Music uses a near-black listening canvas where album covers, artist photography, and editorial artwork provide most of the color. Blue selection, graphite secondary surfaces, compact sans-serif metadata, dense shelves and lists, and a persistent mini-player above bottom navigation establish the interface. Full playback becomes more immersive through large media, blurred or photographic backgrounds, open spacing, and oversized transport controls.

# Non-negotiable visual invariants

- Near-black remains the dominant canvas; graphite is reserved for rows, controls, mini-player, and modal surfaces.
- Album, podcast, playlist, and artist imagery provides the visual rhythm of discovery and cannot be replaced by text-only cards.
- Blue marks active navigation, playback, links, toggles, sliders, and selection; violet and pink gradients stay bounded to mixes or campaigns.
- A compact graphite mini-player persists directly above the dark bottom navigation in browsing contexts.
- Media layouts mix horizontal artwork rails, compact track lists, and circular artist portraits rather than uniform elevated cards.
- Full playback uses a large media or photographic field, progress, and oversized high-contrast transport controls with generous bottom spacing.
- Track and queue rows preserve stable title, artist, thumbnail, state, and overflow alignment.
- Campaign art and isolated decorative graphics remain content-specific and do not become a reusable illustration system.

# Color and surfaces

The dominant canvas is black, with near-black panels around `#151618` and graphite controls around `#292A2D`. Dividers are subtle charcoal and ordinary media tiles rely on artwork edges rather than card borders. Full-player surfaces may use blurred or darkened colors derived from the current cover or artist photograph.

Bright blue around `#3C8BFF` communicates active tabs, links, toggles, sliders, progress, and playback state. Violet and pink appear in bounded gradient mix, subscription, or campaign regions; orange and pale yellow may appear in isolated promotional cards. White carries primary type and controls, gray supports metadata and inactive navigation. Light system surfaces or default blue-on-white controls would visibly break the reference.

# Typography

Use SF Pro Display and SF Pro Text. Centered page titles are roughly 17-20 points semibold, section headings 22-26 points semibold, track and row titles 15-17 points, and artist, schedule, or legal metadata 10-14 points gray. Campaign headlines may reach 28-30 points, while lyrics use much larger bold multiline text.

Track title and artist hierarchy stays stable across rows, mini-player, queue, and full player. Browsing text is usually left-aligned; top titles and player metadata may center. Dynamic Type should expand rows and labels, truncate secondary metadata before controls, and keep transport, mini-player, and selected-state geometry stable.

# Screen composition

Discovery screens use 12-16 point side padding and alternate horizontal artwork carousels, larger promotional cards, compact vertical track lists, and circular artist rails. Sections are separated by roughly 24 points. Scrolling content ends above a persistent mini-player and bottom tab stack.

The media-list archetype aligns a square thumbnail, two lines of text, optional download or state marker, and overflow action. Search uses a rounded field, sparse empty or history states, and keyboard-aware results. Settings use full-height dark lists with chevrons, blue toggles, gray helper text, and occasional disabled groups.

The full-player archetype centers a large cover or photographic visual field, then places title and artist, thin progress track, large previous/play/next controls, and secondary actions above the home indicator. Lyrics replace the main art emphasis with large high-contrast multiline text. Queue views use denser rows and drag or list affordances. Paywall and subscription states use full-screen gradient or promotional surfaces rather than small embedded cards.

# Navigation appearance

Bottom navigation is black with evenly spaced thin line icons, small labels, gray inactive states, and blue selection. A full-width graphite mini-player sits immediately above it with a thumbnail, one-line identity, play or pause control, and overflow. This stacked chrome stays compact relative to media content.

Detail screens use a top-left back chevron and centered title, with occasional compact right-side actions. Additional-action and player-control overlays dim the current artwork and present sparse vertical or bottom-aligned controls. Destination labels and order must come from approved Research and Planning rather than this reference.

# Components

Media tiles use square artwork with 8-12 point corners and compact text beneath; artist portraits use circular crops. Track rows are approximately 52-60 points high with a square thumbnail, title, gray artist metadata, small state icon, and overflow. Mix cards may use a blue-violet gradient, larger title, and prominent play affordance.

The mini-player is a 52-58 point graphite bar with thumbnail, truncated identity, and compact transport. Full-player transport uses large white symbols without decorative button backgrounds, a thin blue or light progress track, and compact secondary glyphs. Search fields are graphite when active; the initial search surface may use a contrasting white rounded field.

Settings rows use dark surfaces, chevrons, blue toggles, and gray explanations. Equalizer controls use thin vertical lines and small circular handles. Player or additional-actions overlays use dimmed media and a vertical icon-label list. Disabled states recede to dark gray without changing layout.

# Imagery and icons

Album and podcast art uses square cover crops, artist and profile imagery uses circles, and full-player photography or cover art can expand into the principal visual field. Preserve embedded cover typography and focal faces. Editorial and subscription campaigns may use bright gradients or wide media, while import and service logos remain contained. These image regions cannot be omitted while assets are pending; placeholders must preserve their scale, crop, density, and color contribution.

The sampled screens do not show a stable standalone authored illustration language. Mix gradients, playlist covers, an isolated people graphic, logo marks, waveform-like patterns, and campaign cards are individual content assets. Interface icons are thin white or gray line symbols with blue active tint; do not invent characters or decorative scenes from isolated media.

# States

Observed states include onboarding, populated discovery shelves, compilation and podcast lists, active blue tab, persistent mini-player playing or paused, full player, lyrics, queue, selected mix pill, focused search with keyboard, sparse search history or empty state, settings toggles, disabled section, equalizer, dimmed additional-actions overlay, player settings or volume overlay, subscription blocker, paywall, downloaded or selected state, and overflow actions. Black surfaces, blue activity, compact metadata, and artwork dominance remain stable.

# iOS adaptation

Respect the top status area, keyboard, mini-player, bottom navigation, home indicator, and full-player safe areas. Browsing rails and lists scroll above persistent bottom chrome; full-player backgrounds may extend behind safe areas while controls remain reachable. Search and settings must avoid the keyboard and scroll internally with Dynamic Type.

Provide at least 44-point hit regions for tracks, overflow, tabs, transport, sliders, queue controls, and top actions. VoiceOver order should follow page title, media content, mini-player, then bottom navigation; in full player it should follow artwork identity, track metadata, progress, transport, and secondary controls. On compact widths, truncate artist metadata or reduce visible rail items before shrinking art or controls. Preserve the authored dark appearance and contrast rather than exposing light default components.

# Anti-generic checklist

- Do not replace the black listening canvas with a light grouped interface.
- Do not hide or visually merge the mini-player into the bottom navigation.
- Do not replace album art, artist photography, or editorial media with generic gradient cards.
- Do not decorate every shelf with violet gradients or use campaign colors as ordinary state colors.
- Do not use an unstyled `TabView`, light `Form`, default search field, or arbitrary SF Symbols as finished UI.
- Do not flatten track title, artist, section heading, and metadata into similar weights or sizes.
- Do not overcrowd the full player or shrink primary transport controls.
- Do not infer an illustration package or copy the reference product's destinations and media architecture.

</design-context>
