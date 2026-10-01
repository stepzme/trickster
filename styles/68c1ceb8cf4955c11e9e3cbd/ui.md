<design-context>
---
version: 1
platform: iOS
name: Apple-Music-design-analysis
description: "A content-led native iOS music interface with white and grouped-gray browsing surfaces, large black titles, coral selection, artwork-dense rails and grids, a translucent mini-player above tab navigation, and cover-derived atmospheric playback screens."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#FA2D48"
  accent-secondary: "#007AFF"
  text-primary: "#111111"
  text-secondary: "#77777C"
  divider: "#D9D9DE"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 10
  sheet: 24
  pill: 999
components:
  media-tile: {fill: "artwork", radius: 8, label: "two-line metadata below"}
  mini-player: {fill: "translucent material", height: 56, position: "above bottom navigation"}
  bottom-navigation: {fill: "translucent material", selected: "coral", icons: "system-weight"}
  search-field: {fill: "surface-secondary", radius: 10, state: "focused with cancel"}
  player-control: {fill: "transparent", icon: "oversized high-contrast", target: 44}
---

# Overview

Apple Music keeps native iOS chrome visually quiet so album covers, playlist art, artist photography, and editorial media dominate browsing. White and grouped-gray surfaces, heavy black titles, coral actions, and precise SF Pro hierarchy frame dense media rails and lists. Playback becomes a distinct immersive mode built from cover-derived blurred color, large centered artwork, and oversized high-contrast transport controls.

# Non-negotiable visual invariants

- Browsing uses white or very light gray iOS surfaces with large black titles and restrained separators.
- Coral identifies selected navigation, primary music actions, checks, links, and subscription emphasis; it is not a general background color.
- Square album and playlist artwork remains the primary visual unit in rails, grids, and media rows.
- A translucent mini-player sits immediately above the persistent bottom navigation and remains visually distinct from scrolling content.
- Full-screen playback derives its atmospheric background color from the current artwork and centers one large cover above oversized controls.
- Content layouts mix horizontal artwork rails, two-column media grids, and compact single-column lists rather than identical rounded cards.
- Sheets, alerts, search, settings, and menus retain native iOS material, spacing, and control behavior.
- Editorial artwork and artist photography stay content-specific; recurring decorative characters or a new illustration system must not be invented.

# Color and surfaces

Browsing canvases are white, with grouped controls, search fields, settings cells, and sheets using light gray around `#F2F2F7`. Thin pale dividers organize lists without heavy card borders. Mini-player and navigation surfaces use translucent light material, allowing a subtle sense of depth while preserving legibility.

Apple Music coral around `#FA2D48` marks selected tabs, links, active chips, checks, and primary subscription actions. Blue remains confined to system or payment surfaces. Green appears on enabled toggles, while red marks destructive actions. Playback backgrounds are not fixed tokens: a blurred, darkened, or softened color field is derived from the current cover, with white or black controls chosen for contrast. Generic default blue as the main accent would visibly break the reference.

# Typography

Use SF Pro Display and SF Pro Text. Large navigation titles sit around 32-34 points bold and collapse to compact centered titles. Section headings are approximately 20-22 points bold; media names 15-17 points semibold or regular; artists, schedules, and metadata 12-15 points regular; tab labels and tertiary captions about 10-12 points.

Titles are predominantly left-aligned in browsing and centered in modal navigation bars or playback. Hierarchy comes from large-title contrast and disciplined metadata stacking, not decorative fonts. Dynamic Type should expand list rows and captions, wrap media names, and preserve one clear title-to-artist distinction without pushing transport controls or mini-player actions off screen.

# Screen composition

Browsing screens preserve the top safe area for a large title that may collapse into compact navigation chrome. Below it, 16-point side insets frame horizontal artwork shelves, two-column category or media grids, compact lists, and occasional full-width editorial cards. Artwork gaps are about 8-12 points, while major sections are separated by roughly 24-32 points. Scrolling content terminates above a persistent mini-player and bottom navigation stack.

The media-rail archetype pairs square rounded artwork with one or two compact text lines below. The list archetype uses small artwork or icons, track and artist hierarchy, optional trailing actions, and thin dividers. Search uses a gray rounded field, focused keyboard state, segmented or pill filters, and results that retain the same artwork-led density. Grouped settings and profile surfaces use pale gray backgrounds, rounded white cells, circular avatars, switches, and selection checks.

The full-player archetype fills the viewport with a cover-derived blurred color field, places one large square cover in the upper-middle region, and stacks title metadata, progress, transport, volume, and secondary controls below. Lyrics mode keeps the tinted field but replaces the cover emphasis with oversized high-contrast text. Modal menus and actions appear as rounded material sheets, cards, or alerts over blurred context.

# Navigation appearance

Bottom navigation uses translucent light material, compact system-weight icons, short labels, and coral selection. A full-width mini-player sits directly above it, carrying a small artwork thumbnail, truncated track identity, and compact playback controls. This stacked chrome remains lower and quieter than the main content.

Top navigation transitions from a large left-aligned title to a compact centered title as content scrolls. Search fields, Cancel or Done labels, back controls, contextual menus, and action sheets follow native iOS proportions. Product destinations and their order must come from approved Research and Planning rather than from this reference.

# Components

Media tiles use square art with 8-10 point corners, no decorative container, and two compact left-aligned metadata lines beneath. Track rows use a smaller square thumbnail, primary name, gray secondary line, and restrained trailing control. Wide editorial tiles may use landscape artwork, but ordinary album and playlist art remains square and uncropped.

The mini-player is a 52-58 point translucent row with thumbnail, single-line identity, and compact play or skip controls, separated from navigation by a hairline. Search uses a 36-40 point soft-gray rounded field and reveals a compact Cancel action while focused. Filter chips are pills with coral selected emphasis.

Playback controls are oversized, high-contrast symbols without decorative button backgrounds; progress and volume use thin tracks with clear handles. Context menus use rounded light material over blurred content. Settings use grouped rounded white cells, green switches, coral checks, and thin internal dividers. Disabled controls reduce contrast while preserving their size and position.

# Imagery and icons

Album covers, playlist covers, artist portraits, radio-show art, video stills, and editorial campaign graphics provide the dominant color and identity. Preserve square cover proportions, readable embedded typography, and uncropped faces or focal objects. Wide radio or editorial media can use cover crops, while profile imagery remains circular. These image areas cannot be omitted while waiting for final assets; placeholders must retain the same scale, crop, density, and color weight.

The sampled screens do not establish a standalone authored illustration language. Subscription graphics, logos, gift-card imagery, and editorial category tiles are isolated content assets rather than a reusable grammar. Interface icons use familiar native weights and simple filled or outlined states; do not substitute arbitrary symbols that change their meaning or balance.

# States

Observed states include large-title and collapsed-title browsing, selected coral navigation, persistent mini-player playback, full-screen player, lyrics view, focused search with keyboard and Cancel, selected filters, blurred context menu, bottom action sheet, centered alert, subscription sheet, modal form, grouped settings with green toggles, coral check selection, circular avatar, and disabled or destructive account controls. Artwork dominance, SF Pro hierarchy, restrained surfaces, and coral selection remain stable across these states.

# iOS adaptation

Use native safe areas for status, large-title navigation, keyboard, mini-player, bottom navigation, sheets, and the home indicator. Browsing grids and rails scroll within the content region above persistent bottom chrome. Full playback may extend its color field behind safe areas while title, controls, and volume remain reachable and contrast-safe. Modal forms and search results must remain keyboard-aware.

Provide at least 44-point hit regions for navigation items, transport, overflow, search segments, sheet actions, and settings controls. VoiceOver order should follow visible title, content, mini-player, then bottom navigation; in full player it should follow artwork identity, title, progress, transport, volume, and secondary actions. On compact widths, reduce visible grid columns or truncate secondary metadata before shrinking artwork or controls. Dynamic Type should grow rows and allow labels to wrap while preserving the player hierarchy. Follow system material adaptation for light and dark contexts rather than applying a uniform custom dark theme to browsing.

# Anti-generic checklist

- Do not replace coral selection with default iOS blue across the music interface.
- Do not put album and playlist artwork inside generic elevated white cards or crop square cover typography.
- Do not omit the mini-player or merge it visually into the bottom navigation.
- Do not use an unstyled `TabView`, default `Form`, or arbitrary SF Symbols as the finished appearance.
- Do not flatten full playback into a white sheet; preserve cover-derived atmosphere and oversized controls.
- Do not recolor ordinary browsing chrome for every album or spread dynamic cover colors beyond playback contexts.
- Do not replace artist photography, cover art, or editorial media with generated decorative illustration.
- Do not copy the reference product's tabs, library structure, or playback sequence into the adapted product.

</design-context>
