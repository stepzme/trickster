<design-context>
---
version: 1
platform: iOS
name: Wink-design-analysis
description: "A cinematic near-black entertainment interface with edge-to-edge poster imagery, oversized heavy rounded titles, orange-to-red gradient actions, dense horizontal media rails, compact orange rating badges, and a low-contrast dark tab bar beneath the content."
colors:
  canvas: "#080006"
  surface-primary: "#19161A"
  surface-secondary: "#242126"
  accent-primary: "#FF5A2E"
  accent-secondary: "#FF315F"
  text-primary: "#FFFFFF"
  text-secondary: "#B7ADB6"
  divider: "#3B353D"
  destructive: "#FF4D6A"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 40, fontWeight: 800, lineHeight: 44}
  title: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Rounded", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 18
  section-gap: 32
  card-padding: 14
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "orange-red-gradient", foreground: "#FFFFFF", shape: "pill"}
  secondary-action: {fill: "#242126", foreground: "#FFFFFF", shape: "pill-or-icon"}
  primary-card: {fill: "media-artwork", foreground: "#FFFFFF", shape: "poster-or-wide-still"}
  navigation: {fill: "#19161A", inactive: "#777078", selected: "#FFFFFF"}
---

# Overview

Wink is a dark cinematic catalog in which poster art, video stills, sports imagery, and music artwork supply nearly all color. The shell stays black or dark plum, while oversized rounded display titles, white type, orange-to-red gradient CTAs, and compact rating badges create a bold hierarchy. Browsing is built from dense horizontal rails and partial next-card cues rather than isolated dashboard panels.

# Non-negotiable visual invariants

- Black or dark plum fills the complete screen and continues through both safe areas.
- Large media artwork is the dominant visual mass: edge-to-edge heroes, tall posters, wide stills, and horizontal rails cannot be omitted.
- Primary actions use a vivid orange-to-red gradient, white bold labels, and fully rounded or strongly rounded geometry.
- Page and section headings use unusually heavy rounded or extended display type with strong scale contrast over small gray metadata.
- Browsing rails reveal partial neighboring items and preserve poster or still aspect ratios.
- Media cards use compact orange rating or status badges over or beside artwork.
- The bottom tab bar remains dark and low contrast, with white or orange emphasis reserved for the selected item.
- Forms, settings, and empty states keep the same dark shell even when media density drops.

# Color and surfaces

Ink black and dark plum form the uninterrupted application canvas. Charcoal differentiates tab bars, settings groups, fields, cards, disabled controls, and sheets without introducing light panels. White carries hero and page titles, primary labels, and active icons; pale gray carries synopsis, metadata, inactive navigation, and helper copy. Orange-to-coral or orange-to-red is the primary action and selection gradient, while hot pink may mark originals or editorial emphasis. Green signals available or completed state, amber time-sensitive access, and coral-red destructive or unavailable states. Media supplies blue, purple, skin tones, sport fields, and other large color masses. Default blue tint, light grouped backgrounds, or gray card dashboards would break the reference.

# Typography

Display hierarchy uses a heavy, wide, rounded grotesk for 30–40-point hero and page titles and 22-point section headings. On iOS, SF Pro Rounded with heavy weight and slightly expanded width is a safe substitute when the original display face is unavailable; body and metadata use SF Pro Text. Titles are short, stacked when necessary, and rarely placed as long paragraphs over imagery. Card labels and buttons are semibold; synopsis and metadata are smaller gray text. Dynamic Type should move or wrap supporting text and increase settings rows while retaining the dominant title and CTA roles.

# Screen composition

Discovery archetypes begin with a compact logo/action cluster in the top safe area, a large hero or first rail, then a vertical scroll of titled horizontal media shelves. Posters and wide stills occupy most of each row, with partial next items visible at the trailing edge. Detail archetypes use an edge-to-edge image or video still in the upper portion with a dark gradient scrim, followed by title, metadata, synopsis, large CTA, and additional rails in one continuous column.

Player archetypes strip the composition to a black field, full-screen video, sparse edge controls, a progress line, and dark bottom sheets. Forms and settings use compact centered or top-aligned headings, charcoal fields or grouped rows, and one bottom-proximate orange action. Empty states leave a large centered illustration area, short copy, and an optional CTA while retaining black breathing room. Subscription and payment screens use vertically stacked dark offer rows and orange commitment controls rather than bright cards.

# Navigation appearance

The main shell uses a dark five-item icon-and-label bottom bar with muted inactive states and white or orange selected emphasis. Top discovery chrome is compact and visually overlays the dark/media field. Detail and settings surfaces use a simple back arrow with either a centered title or large leading heading. Player chrome uses close, overflow, cast, quality, and transport glyphs around the screen edges. Bottom sheets are charcoal, use rounded top corners and an optional grab handle, and remain within the dark palette.

# Components

Primary CTAs are full-width orange-red gradient pills with white bold labels; disabled variants become dark gray without changing size. Media cards are artwork-first, with tall or wide aspect ratios, modest corner radii, compact title/metadata, and small orange rating badges. Filter rows use checks or segmented tabs with orange selection. Fields use dark fill, pale text, minimal hairlines, and an orange focus underline or action. Settings rows use charcoal grouping, white labels, gray values, switches, sliders, and chevrons. PIN and code entry use evenly spaced dark cells. Empty-state compositions use a centered character or line-art asset rather than a generic SF Symbol.

# Imagery and icons

Film and series posters, editorial stills, sports, video, music, book covers, and promotional artwork are compositionally essential. Heroes and wide stills use face-aware `cover` plus a dark text scrim; posters and covers retain their vertical ratios and recognizable title artwork. Compact icons are monochrome or gray, with orange active states. The recurring black-and-white TV-headed/question-mark character is a distinct authored empty-state system and cannot be replaced with arbitrary symbols. Other colorful promotional artwork remains content-specific and does not redefine that empty-state language.

# States

Observed states include splash and registration, profile selection, populated home rails, idle and populated search, filters, recommendation prompt, empty notifications, media detail, selected favorite, playback and quality sheet, trailer, subscription offers, download and storage warning, TV guide, music promotion and sort, category catalogs, profile and parental settings, PIN fields, promo-code form, empty continue/download/reminder/subscription surfaces, devices and TV activation, and logout alert. Dark canvas, heavy type, orange action, media proportions, and compact controls remain stable.

# iOS adaptation

Extend the black canvas and hero imagery through safe areas while keeping titles and controls readable within 18-point-class insets. Use a vertical scroll container for discovery, detail, settings, offers, and catalogs; keep each media rail independently horizontal. Preserve posters and stills at stable aspect ratios and reveal partial neighbors rather than shrinking several full cards into the width. Keep tab, playback, card, filter, and CTA targets at least 44 points. On compact heights, keep title, current media, primary action, progress, and essential player controls visible before secondary metadata. VoiceOver order should follow heading, media description, metadata, action, then rail items. Native keyboards and alerts remain system-owned. The reference is dark-first with no general light appearance.

# Anti-generic checklist

- Do not replace the black cinematic field with generic system gray or white grouped cards.
- Do not use default blue actions; preserve the orange-red gradient hierarchy.
- Do not omit or flatten media rails, hero artwork, posters, ratings, or partial next-card cues.
- Do not crop tall posters into uniform landscape cards or obscure title art with text.
- Do not use an unstyled `TabView`; preserve the low-contrast dark bar and white/orange selection.
- Do not apply one radius to posters, pills, sheets, inputs, and badges.
- Do not use arbitrary SF Symbols or colorful promo assets in place of the recurring empty-state character.
- Do not place long copy directly over busy imagery without the observed dark scrim.

</design-context>
