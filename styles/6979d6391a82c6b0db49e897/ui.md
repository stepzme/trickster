<design-context>
---
version: 1
platform: iOS
name: Spotify-design-analysis
description: "A near-black media interface where album, podcast, artist, and playlist artwork supplies nearly all color, while bold white type, compact charcoal controls, scarce Spotify-green state accents, a persistent mini-player, and a dark tab bar maintain dense listening context."
colors:
  canvas: "#0E0C0F"
  surface-primary: "#1D1B1E"
  surface-secondary: "#2B292C"
  accent-primary: "#1ED760"
  accent-secondary: "#FFFFFF"
  text-primary: "#FFFFFF"
  text-secondary: "#B3B3B3"
  divider: "#39363B"
  destructive: "#E9505B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 10
rounded:
  control: 10
  card: 8
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "white or Spotify green", text: "near-black semibold", height: 50, radius: 999}
  media-card: {fill: "near-black", image: "dominant cover art", radius: 8, metadata: "compact white and gray"}
  mini-player: {fill: "charcoal or artwork-derived color", height: 58, radius: 8, content: "thumbnail, title, progress, playback"}
  navigation: {fill: "near-black", selected: "white icon and label", unselected: "muted gray"}
---

# Overview

Spotify is a dense dark media interface in which chrome recedes and content art becomes the main source of color. Near-black fills nearly every viewport; charcoal controls and sheets create shallow separation without card-heavy elevation. Bold white headings segment shelves and lists, compact gray metadata carries artist or episode context, and Spotify green appears sparingly for active, saved, downloaded, or selected state. A persistent mini-player above the dark bottom bar keeps current media visible across browsing surfaces.

# Non-negotiable visual invariants

- Near-black fills the full viewport; charcoal surfaces separate controls and sheets without light cards or heavy shadow.
- Album, podcast, artist, playlist, and category artwork provides most saturated color and cannot be omitted from media-led compositions.
- Spotify green remains scarce and stateful, reserved for active controls, selected pills, saved or downloaded marks, and prominent playback actions.
- Bold white section headings create rhythm across dense horizontal shelves and vertical lists; metadata stays compact and gray.
- A compact mini-player remains directly above the bottom navigation and preserves thumbnail, title, progress, and playback context.
- The primary bottom bar stays dark, with selected icons and labels turning white while inactive items remain gray.
- Full-player surfaces give cover art and central playback controls substantially more breathing room than browse lists.
- Media-derived color or blur may support a player or header, but unrelated decorative gradients are absent.

# Color and surfaces

The canvas is a continuous near-black. Primary charcoal surfaces hold media rows, menus, forms, and mini-player content; a lighter charcoal supports pills, selected filters, toggles, and modal groupings. Dividers remain subtle and often give way to spacing. Bottom sheets and dimmed overlays stay within the same dark tonal family.

White carries titles, primary controls, and active navigation. Light gray carries artist, duration, description, and inactive state. Spotify green marks active or positive media state, selected chips, saved/downloaded status, toggles, and some primary playback actions. Red is reserved for destructive actions and amber for warning. Artwork-derived gradients may fill a player background when contrast remains high. Default iOS blue, white grouped forms, bright borders, and green-filled generic cards would break the reference.

# Typography

Use SF Pro Display/Text as the iOS-safe substitute for Spotify's compact grotesk. Page titles sit around 26–30 points, section headings around 20–24, media titles around 14–17, body copy around 14–16, and metadata or navigation labels around 10–13. Bold weight is concentrated in page titles, section labels, and the active media title; supporting information remains regular and gray.

Browse content is usually left-aligned. Player titles may center, while settings and detail navigation titles are compact and centered. Track and episode names stay more prominent than artist, duration, or descriptive metadata. With Dynamic Type, secondary metadata wraps or moves below the title, rows grow vertically, and multi-column artwork shelves reduce their column count before labels are clipped.

# Screen composition

Most browse surfaces use 12–16 point horizontal insets, 8–12 point internal gaps, and 20–24 points between shelves. Near-black extends through both safe areas. Long home, search, library, playlist, and settings surfaces scroll vertically; selected shelves and chips may scroll horizontally. The mini-player and bottom bar reserve the lower safe area together.

Observed archetypes include:

- Browse composition: bold page or section title, optional pill filters, then repeated horizontal artwork shelves and compact recommendation cards within a vertical feed.
- Search composition: prominent search field above category artwork, recent queries, filter chips, or dense result rows.
- Library composition: compact filter row followed by a one-column media list or small artwork grid, with title, metadata, status icons, and overflow actions.
- Detail composition: large square or portrait artwork dominates the upper region, followed by title, compact metadata, a strong circular play control, and a dense one-column media list.
- Player composition: one large centered cover image, title and artist, progress, primary playback controls, and smaller utility actions in a single immersive vertical field.
- Settings composition: compact centered title over flat charcoal or black rows with white labels, gray descriptions, chevrons, and green active toggles.
- Modal composition: dark bottom sheet or confirmation panel with rounded top corners, compact icon rows, and dimmed underlying media context.

# Navigation appearance

The bottom bar is near-black and uses compact icon-and-label items. The selected item turns white; inactive items stay muted gray. The mini-player sits immediately above it as a rounded charcoal or artwork-derived strip. Detail screens use white leading back chevrons and compact centered titles. Dark bottom sheets use large top corners and a subtle drag indicator. Filter chips use gray fills; selected chips may turn green with dark text or use stronger white contrast.

# Components

- Mini-player: approximately 56–60 points tall, charcoal or artwork-derived fill, 6–10 point radius, small square thumbnail, compact white title, gray metadata, thin progress mark, and at least one playback control.
- Media card: cover art occupies most of the tile; title and metadata sit below in white and gray. Radius remains modest so the artwork does not become a generic rounded rectangle.
- Media row: small square or portrait thumbnail, white title, compact gray context, optional status glyph, and trailing overflow or playback control.
- Filter chip: 34–40 points tall, pill shape, charcoal fill, white label; selected state gains green or a stronger filled contrast.
- Primary playback control: large circular white or green button with near-black icon, visually dominant among smaller monochrome transport controls.
- Search field: high-contrast white or dark field according to context, rounded but not oversized, with clear leading icon and readable placeholder.
- Settings row: flat dark surface with white label, optional gray description, and trailing chevron or green toggle; rows use spacing or a subtle divider.

# Imagery and icons

Artwork is content, not decoration. Square album and playlist covers, portrait podcast covers, circular artist images, category artwork, premium collages, and editorial media crops provide the interface's chromatic variety. Preserve the source ratio and focal subject: square covers remain square, artist photos remain circular, and portrait covers are not forced into landscape crops.

The sample does not establish one standalone authored illustration system. Visual consistency comes from diverse real cover art, photography, content collages, functional icons, and the surrounding dark chrome. Utility icons are compact white or gray line and filled glyphs for playback, search, library, creation, download, sharing, settings, and disclosure. When final content art is unavailable, temporary imagery must preserve the documented ratio, crop, color density, and visual weight.

# States

Observed states include selected and inactive bottom tabs, green selected chips, saved or downloaded marks, active toggles, playing media, dimmed modal backdrops, confirmation or upsell panels, playlist editing, and dense settings states. These retain the dark field, artwork-led hierarchy, and small green state accents.

Downloaded, saved, or active items use explicit icons or labels in addition to green. Destructive actions use red inside contained confirmations. Modal sheets keep the underlying media visible through dimming. The mini-player persists as a compact state surface, while the full player expands the same media identity into a larger composition.

# iOS adaptation

Extend near-black or artwork-derived player color through the safe areas and reserve the lower inset for the mini-player plus bottom bar. Use vertical scroll containers for browse, detail, player, library, and settings surfaces; horizontal scrolling is reserved for shelves and chips. Keep the last row clear of the persistent player and navigation.

All playback buttons, chips, overflow controls, media rows, and tab items need at least 44-point targets even when their visible glyphs are smaller. VoiceOver should announce media title, creator, state, duration, and action in that order; decorative artwork should receive one concise content label rather than expose visual fragments. Preserve native keyboard, share, permission, and sheet transitions. With Dynamic Type or compact widths, reduce shelf columns and expand rows before shrinking text. Keep the observed dark appearance; do not introduce unrelated light surfaces.

# Anti-generic checklist

- Do not replace content artwork with arbitrary gradients, generic music symbols, or blank colored cards.
- Do not use green as a general card fill or decoration; keep it stateful.
- Do not expose white native forms or default blue controls on the dark canvas.
- Do not remove the persistent mini-player or let it cover the final scroll row.
- Do not give cover art, sheets, pills, player controls, and rows one uniform radius.
- Do not ship an unstyled `TabView`; preserve the dark bar and white selected state.
- Do not add bright chrome, heavy shadows, or ornamental glass around artwork.
- Do not flatten player composition into the same density as browse lists.

</design-context>
