<design-context>
---
version: 1
platform: iOS
name: mts-music-design-analysis
description: "A black, artwork-led music interface with dense editorial rails, red commitment controls, a persistent playback layer, and full-player surfaces whose atmosphere is derived from the active cover."
colors:
  canvas: "#000000"
  surface-primary: "#171719"
  surface-secondary: "#2A2A2E"
  surface-elevated: "#333338"
  accent-primary: "#F53446"
  accent-pressed: "#D92538"
  text-primary: "#FFFFFF"
  text-secondary: "#A3A3AA"
  text-tertiary: "#6F6F76"
  divider: "#29292D"
  success: "#65D39A"
  destructive: "#F53446"
  overlay: "#000000"
typography:
  page-title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  media-title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  track-title: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  metadata: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
  navigation: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13}
  button: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 700, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-gap: 10
  row-gap: 12
  control-gap: 8
rounded:
  compact: 8
  control: 12
  artwork: 14
  sheet: 24
  pill: 999
components:
  primary-action: {height: 52, fill: "#F53446", foreground: "#FFFFFF", radius: 12}
  search-field: {height: 40, fill: "#202024", foreground: "#FFFFFF", radius: 10}
  mix-tile: {minHeight: 156, fill: "#171719", foreground: "#FFFFFF", radius: 14}
  track-row: {minHeight: 56, fill: "#000000", foreground: "#FFFFFF", radius: 0}
  mini-player: {height: 58, fill: "#242428", foreground: "#FFFFFF", radius: 0}
  bottom-navigation: {height: 58, fill: "#111113", selected: "#FFFFFF", unselected: "#77777E"}
---

# Overview

MTS Music is a flat black listening environment in which music imagery provides nearly all color. Discovery screens combine large left-aligned headings, square personalized mixes, album and genre art, and compact track rows. The player becomes a separate atmospheric mode: one large square cover sits above the title and transport controls while a blurred, darkened color field derived from that cover replaces the plain black canvas. Red is concentrated in selection, shuffle, subscription, and other commitment actions rather than spread across the shell.

# Non-negotiable visual invariants

- Browse, search, favorites, and profile screens use an uninterrupted black canvas rather than a stack of dark cards.
- Square cover art is the dominant discovery unit; circular crops are reserved for artists and identity.
- Track lists remain compact, borderless rows with small artwork, quiet metadata, and trailing favorite or overflow actions.
- The full player derives its background atmosphere from the current cover while keeping one large, uncropped square cover central.
- MTS red is a focused action and selection color; ordinary navigation and playback controls remain white or gray.
- A mini player preserves the current track immediately above the four-item bottom navigation when playback is active.
- Collection headers transition from an artwork-derived color field into the black track-list surface.

# Color and surfaces

Pure black is the default canvas and the space between content. Charcoal appears only where a control needs containment: search, mini player, modal sheet, compact chip, or disabled action. Lists and rails do not receive enclosing card surfaces or shadows. Thin dividers are uncommon; spacing and alignment do most of the grouping.

Red marks selected artists and favorites, wide shuffle or continue actions, subscription commitment, and destructive confirmation. It should not become a red navigation bar or a general link tint. White carries headings, active controls, and current media; cool gray carries creators, dates, durations, inactive navigation, and secondary conditions. Green is limited to affirmative status such as an active subscription or a completed add action.

Collection detail may begin with violet, brown, or another cover-derived field and fade into black below the header. The full player uses a heavily darkened, blurred sample from the active cover, not a fixed brand gradient. Native permission alerts retain their system surface.

# Typography

Use SF Pro Display for 24–28 point page and media titles and SF Pro Text for the rest. Page titles are bold, left-aligned, and close to the top controls. Section headings use 20/25 semibold or bold. Track names use 15/20 regular; artist, source, duration, and update metadata use 12/16 regular. Bottom navigation uses compact 10/13 labels.

The hierarchy is intentionally compressed: large display type does not repeat inside every rail. Player titles may use 24/29 bold and center alignment, while track lists keep all textual baselines aligned. Cyrillic and Latin titles use the same scale. With Dynamic Type, allow names and metadata to wrap before reducing artwork; move trailing actions to a stable column and preserve the relationship between a title and its creator.

# Screen composition

Use 16-point horizontal insets on browsing screens and 24–28 points between major sections. The upper row carries the page title plus history and profile actions. Discovery then alternates horizontal square-art rails, a compact playlist row, and larger two-column genre or editorial tiles. Content scrolls behind the persistent playback and navigation region, so the final section needs matching bottom inset.

## Discovery

The page title anchors the upper left. Personalized mix tiles form a horizontal rail, followed by a labeled playlist whose tracks use small leading covers and trailing actions. Later sections repeat artwork-led rails or larger genre tiles without adding container backgrounds.

## Collection detail

A back row and share, favorite, and overflow actions sit above one centered square cover. Title, creator or update metadata, and a wide red shuffle action complete the header. The background color fades to black where the compact track list begins.

## Full player

The active cover occupies most of the upper half inside a modestly rounded square. Centered title and creator follow, then a thin progress track and one row of transport controls with an oversized white play/pause circle. Utility actions form a quiet bottom row. The entire background is a subdued color atmosphere sampled from the cover.

## Search and favorites

Search starts with a dark full-width field, colorful suggestion tiles, genre artwork, and a floating recognition entry above navigation. Active search replaces discovery with the keyboard and dense results. Favorites uses direct media lists and playlist management rather than a decorative empty dashboard.

## Profile and modal tasks

Profile is a plain black list with identity and status first, then disclosure rows. Destructive confirmation uses one charcoal sheet near the bottom with a red primary decision and a separate neutral cancellation action. Playlist editing may use a taller charcoal sheet over the current collection.

# Navigation appearance

The observed primary navigation is a compact four-item dark bar with line icons and short labels. White indicates the selected destination and gray recedes the others; red is not the persistent selected-tab color. When audio is active, the mini player forms a distinct strip directly above the bar.

Drill-down screens use a small white back chevron and quiet white share, favorite, and overflow controls. The full player uses a downward dismissal control. Task sheets rise over dimmed content with large upper corners and dark charcoal fill. Use these treatments only for the adapted product's real hierarchy; do not copy the source destinations mechanically.

# Components

## Mix and editorial tile

A square image with 14-point rounding leads the component. Personalized mixes use saturated, softly dimensional abstract cover art; editorial and genre tiles use supplied photography or collage. Title and one or two short metadata lines sit below or inside a protected lower area. Neighboring cards remain partially visible to signal horizontal scrolling.

## Track row

A 44–56 point row contains a 40-point square cover, title, creator or source, then favorite and overflow actions. Track numbers may replace the cover in ordered lists. The row is unboxed; playing, favorited, downloaded, or added state is attached to the affected track and never communicated by color alone.

## Primary action

A wide red control around 52 points high uses white bold text and 12-point rounding. Pressed state darkens the red. Disabled state becomes charcoal with low-contrast text while retaining its footprint. Do not reuse it for passive navigation.

## Search field

The inactive field is a 40-point charcoal rounded rectangle with a leading search symbol and muted prompt. Active search keeps Cancel outside the field and uses the native keyboard. Query clearing stays inside the field.

## Playback controls

The main play/pause control is a white circle at least 56 points across with a dark symbol. Previous, next, repeat, and shuffle remain unfilled white or gray controls with 44-point hit areas. The progress slider is a thin light track with elapsed and remaining time below.

## Mini player and sheets

The mini player uses compact cover art, one line of track context, favorite, and play/pause. Sheets use charcoal rather than black, a small drag indicator, a clear title row, and either dense media choices or two full-width decisions. Native permission alerts remain system-owned.

# Imagery and icons

Album, playlist, podcast, and artist imagery is content, not decoration. Keep album covers square and aspect-fit in the full player; use rounded-square crops in lists and rails. Artist portraits use circular crops. Genre and editorial tiles may crop photography more assertively, but titles need protected contrast.

The recurring abstract mix covers are polished embossed forms in saturated violet, mint, yellow, and pink. They are authored cover artwork rather than interface symbols. Photography, artist portraits, album covers, and podcast art remain supplied catalog assets, not a reusable illustration system.

Use a coherent thin icon family for back, share, favorite, overflow, search, queue, playback, and navigation. Preserve familiar system meaning, but match the observed stroke weight and circular control treatment. Do not replace artist, album, genre, or mix artwork with SF Symbols.

# States

Observed states include initial loading, phone entry, artist selection below and above its minimum, loading after preference confirmation, inactive and active search with keyboard, populated suggestions and results, favorited and unfavorited media, active playback, paused playback, player guidance, notification permission, playlist editing with selected additions, active subscription status, and destructive sign-out confirmation.

Selection adds an explicit heart, outline, check, label, or changed control state. Disabled actions retain their dimensions. Loading stays local to the pending screen or control. Player state preserves the cover, title, and timeline. System permission remains visually native over the current collection instead of being redrawn as app content.

# iOS adaptation

Build browse and detail layouts from custom scroll containers and rows; remove default `List`, `Form`, and `TabView` styling when it conflicts with the flat black composition. Keep the mini player and bottom navigation within the bottom safe area and reserve enough content inset that neither covers the last track. The full player may extend its cover-derived field edge to edge while keeping controls inside safe areas.

Use native keyboard, permission, audio route, and media controls for behavior, but style app-owned search, sheets, and playback surfaces to match the reference. Every icon action needs at least a 44-point hit target. VoiceOver should group cover, title, creator, and playback state before exposing actions; announce favorited, playing, selected, and disabled state explicitly. At large Dynamic Type, preserve the main cover and transport controls, allow metadata to wrap, widen track rows vertically, and reduce the number of visible rail cards before shrinking essential text.

# Anti-generic checklist

- Do not replace the black catalog with inset grouped forms or repeated charcoal cards.
- Do not use a fixed violet or red gradient behind every screen; only detail and player atmosphere derive from active artwork.
- Do not tint the selected tab red when the observed persistent selection is white.
- Do not omit the mini player when playback must persist across destinations.
- Do not turn track rows into oversized cards or separate every row with heavy rules.
- Do not replace covers, artist portraits, genre imagery, or abstract mix assets with arbitrary SF Symbols.
</design-context>
