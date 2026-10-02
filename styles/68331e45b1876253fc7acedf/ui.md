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

MTS Music is a black, media-first iOS interface where album covers, artist portraits, and promotional tiles supply nearly all color. The dominant screens use edge-to-edge black with left-aligned white headings, dense horizontal shelves, compact track rows, and a persistent dark playback/navigation layer at the bottom. Red appears as a focused commitment and selection color, while full-player and collection-detail screens shift into cover-derived atmospheric color fields without abandoning the dark shell.

# Non-negotiable visual invariants

- The main canvas is uninterrupted black; charcoal is limited to controls, sheets, mini player, and subscription cards.
- Square cover art dominates discovery, detail, and player screens; circular crops are reserved for artists and identity avatars.
- Track rows are compact, borderless, and dark, with small leading artwork or rank numbers and trailing favorite or overflow icons.
- Red is reserved for selected items, wide primary actions, recognition/error strips, and subscription commitment controls.
- The full player uses a darkened color atmosphere sampled from the current cover behind one large centered square cover.
- The bottom area stays layered: mini player above a compact four-item tab bar when playback is active.
- Collection detail headers fade from artwork-derived color into a black track-list surface.

# Color and surfaces

Pure black is the default canvas across browse, search, profile, settings, payment, and list screens. Charcoal appears as containment for search fields, disabled buttons, the mini player, bottom navigation, sheets, profile-card rows, and subscription cards. Lists and content rails are not wrapped in large cards; their grouping comes from spacing, left alignment, and changes in artwork scale.

MTS red is saturated and high contrast. It appears on login and continue buttons, selected artist rings and hearts, shuffle actions, recognition/error strips, subscription CTAs, and destructive choices. It is not used as a persistent navigation tint. White carries headings, active symbols, and current media labels; cool gray carries metadata, inactive navigation, placeholders, disabled text, and secondary icons. Green is limited to positive status badges and isolated confirmation details.

Collection detail and full-player backgrounds use blurred, darkened color pulled from the active cover, often violet, brown, blue, or gray. Subscription screens introduce lavender and purple gradients inside cards and CTAs, but the surrounding shell remains black. Native iOS permission alerts keep the system light-gray modal surface over the dark app screen.

# Typography

Typography is dense and native. Page titles are 28-point bold SF Pro Display, left aligned near the top safe area. Media titles and player titles sit around 24 points, usually bold, with player titles centered and browsing titles left aligned. Section headings are 20-point bold or semibold. Track names use 15-point regular SF Pro Text; artist, source, update, price, duration, and helper metadata use 12-13 point gray text. Bottom navigation labels are compact 10-point text beneath thin line icons.

The hierarchy is compressed rather than editorially oversized. Large type appears at page starts and major media headers, while rails, rows, cards, and controls remain compact. Cyrillic and Latin titles share the same scale and weight. Long track or artist names wrap inside the text column before artwork or trailing icons shrink.

# Screen composition

Most screens use 16-point horizontal insets and 24-28 points between major sections. Browse and search screens start with a page title, a compact top action cluster, then alternate horizontal square-art rails, dense media rows, and larger image tiles. Shelves expose partial neighboring cards at the right edge. The bottom safe area is occupied by a dark mini player and tab bar, so scroll content needs enough bottom inset to keep the final rows visible.

Collection detail screens place a compact top control row above one centered square cover, then a title, metadata, and a wide red action before transitioning into a black list. Full-player screens are more vertical and centered: a large square cover fills much of the upper half, title and artist sit below, a thin progress track spans the width, and transport controls sit in one balanced row. Search uses a full-width charcoal search field, colorful suggestion tiles, genre cards, and a floating recognition pill near the lower center. Profile and settings are plain black disclosure lists; the MTS profile subpage switches to a white card-based surface, which is an observed exception rather than the dominant app shell.

# Navigation appearance

The primary navigation is a compact four-item dark bottom bar with thin line icons and short labels. White marks the selected tab and muted gray marks inactive tabs; red does not mark persistent tab selection. When playback is active, a separate mini-player strip sits immediately above the tab bar with cover art, one-line media text, favorite, and play/pause controls.

Drill-down screens use small white back chevrons and quiet share, favorite, queue, or overflow controls. The full player replaces the back chevron with a downward dismissal mark. Sheets rise over dimmed content with large upper corners, charcoal fill, and centered or left-aligned titles depending on density. Native iOS alerts appear unchanged when permissions are requested.

# Components

Square media tiles use 14-point rounding, saturated cover artwork, and tight labels below or over protected lower areas. Personalized mix tiles often use softly dimensional abstract cover art in violet, mint, yellow, or pink; editorial, genre, podcast, and artist tiles use supplied photography or collage. Circular artist chips use image crops with optional red selection rings and heart markers.

Track rows are 44-56 points tall with a 40-point square cover or a rank number at the leading edge, a two-line title/metadata stack, and trailing favorite plus overflow controls. Rows are unboxed and rarely divided. Wide primary actions are about 52 points tall, red, white, bold, and 12-point rounded; disabled actions keep the same footprint but turn charcoal with low-contrast text. Search fields are 40-point charcoal rounded rectangles with a leading search icon, muted placeholder, and internal clear control when active. Playback controls use one oversized white circular play/pause button, unfilled secondary transport icons, and a thin progress slider. Subscription benefit cards use rounded charcoal or purple-gradient panels with mixed icon/photo artwork and short white text.

# Imagery and icons

Album, playlist, podcast, and artist imagery is structural content. Album covers remain square and aspect-fit in the full player; rounded-square crops appear in lists and rails; artist portraits use circles. Genre and editorial tiles can crop photography more assertively, but titles sit on high-contrast protected areas. The interface should not substitute real media art with generic symbols.

The recurring abstract mix covers are polished embossed forms in saturated colors, but they function as cover artwork rather than a reusable standalone illustration system. Subscription cards combine gradient panels, app/service icons, photos, and object renders; these are card-specific promotional images, not a stable general illustration language. App-owned icons are thin, simple, and mostly white or gray, with familiar shapes for back, share, heart, overflow, search, queue, playback, profile, and tab items.

Do not use arbitrary SF Symbols as replacements for album covers, artist portraits, genre cards, mix artwork, subscription artwork, or payment branding. Symbols are acceptable only for interface controls that are already icon-only in the reference.

# States

Observed visual states include splash, phone login, SMS code input, artist selection below and above the minimum threshold, recommendation loading, populated browse shelves, collection detail, full playback, subscription upsell, inactive and active search, keyboard search results, microphone permission, recognition progress, recognition failure, payment form, active subscription badge, profile/settings lists, and dark modal sheets.

Selection is visualized with red rings, hearts, checkmarks, labels, or changed button states. Disabled states keep their geometry while lowering contrast. Recognition progress and failure use a bright red lower strip over the current search screen. Payment fields use charcoal rounded inputs with gray placeholders. System permission remains native and overlays the current dark screen instead of being redrawn as custom app content.

# iOS adaptation

Build browse, detail, profile, and search views with custom dark scroll containers rather than default grouped `List` or `Form` styling. Keep the mini player and bottom navigation inside the bottom safe area and add matching scroll inset so rows and cards are not hidden. Full-player and collection-detail color fields may extend edge to edge, but covers, labels, and controls must remain inside safe areas.

Use the native keyboard and native permission alert surfaces, but keep app-owned search fields, playback controls, sheets, and subscription cards visually aligned to the reference. Icon-only controls need 44-point hit targets even when the visible glyph is small. At larger Dynamic Type sizes, preserve the main cover and transport controls, let metadata wrap, allow track rows to become taller, and reduce visible rail density before shrinking readable text.

# Anti-generic checklist

- Do not replace the black catalog with inset grouped forms or repeated charcoal cards.
- Do not use a fixed violet or red gradient behind every screen; only detail and player atmosphere derive from media artwork.
- Do not tint the selected tab red when the observed persistent selection is white.
- Do not omit the mini player when playback must persist across destinations.
- Do not turn track rows into oversized cards or separate every row with heavy rules.
- Do not replace covers, artist portraits, genre imagery, or abstract mix artwork with arbitrary SF Symbols.
- Do not flatten subscription cards into plain text blocks without their observed rounded panels and promotional imagery.
</design-context>
