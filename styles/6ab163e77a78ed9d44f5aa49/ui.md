<design-context>
---
version: 1
platform: iOS
name: KION-design-analysis
description: "KION is a black image-first streaming interface with dense poster rails, full-bleed cinematic hero art, white compact typography, cyan utility accents, magenta profile highlights, and dark rounded sheets."
colors:
  canvas: "#000000"
  surface-primary: "#1A1A1D"
  surface-secondary: "#2A2A2E"
  accent-primary: "#17A9F5"
  accent-secondary: "#D51A6F"
  text-primary: "#FFFFFF"
  text-secondary: "#A8A8AF"
  divider: "#303036"
  destructive: "#FF4D5F"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 500, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 10
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#FFFFFF", text: "#111111", radius: 12, height: 48}
  secondary-action: {fill: "#2A2A2E", text: "#FFFFFF", radius: 12, height: 48}
  primary-card: {fill: "#1A1A1D", radius: 12}
  navigation: {fill: "#121214", selected: "#FFFFFF", inactive: "#7A7A82", radius: 0, height: 58}
---

# Overview

KION's iOS screens are built around a continuous black entertainment surface. The strongest visual mass is always image or video: launch poster, carousel banner, poster rail, title hero, or playback frame. App chrome stays dark and compact, using white labels, gray metadata, cyan progress/links, occasional blue controls, and magenta profile or campaign highlights.

# Non-negotiable visual invariants

- The canvas remains black across launch, catalog, detail, profile, sheets, and playback surfaces.
- Posters, video frames, or title art provide the largest color areas; app-owned cards stay charcoal and subordinate.
- Home and section screens use dense horizontal poster rails with small captions and rating metadata below each image.
- Content detail screens place a wide hero image/title block above a prominent rounded gradient or white action button.
- Playback removes bottom navigation and uses sparse white controls over black video space with cyan progress.
- Bottom navigation is dark and translucent, with five destinations and a bright selected item; More/Profile can use magenta.
- Modal surveys, filters, and settings use dark rounded sheets with white primary controls or blue selected chips.

# Color and surfaces

The main surface is true black. Charcoal panels appear for profile cards, settings groups, survey sheets, secondary buttons, and blocked/empty notification skeletons. These panels are not high-shadow cards; they are flat dark masses separated by radius, spacing, and subtle divider lines.

White carries primary text, key icons, and some decisive buttons. Cyan/blue marks progress, active detail tabs, selected filters, utility links, and loading arcs. Magenta is visible in KION branding, active profile/avatar gradients, and the selected More tab glow; it should not replace every selected state. Generic light surfaces would break the reference except for explicit white primary buttons inside dark modals.

Metadata uses cool gray: ratings, subtitles, inactive navigation, secondary actions, timestamps, and helper labels. Destructive red should be reserved for actual destructive actions; it was not part of the main observed visual grammar.

# Typography

KION uses compact SF-style Cyrillic typography with bold section labels and small metadata. Section headings are left-aligned, white, and heavy. Poster captions and ratings are small, dense, and often truncated because the artwork matters more than full labels. Detail pages combine embedded poster title art with app text for synopsis, year, country, season, genre, and age rating.

Buttons use semibold compact labels, often uppercase in survey modals. PIN and player controls use large centered numerals or symbols with simple geometry. Preserve strong contrast between section headings and caption metadata. At larger Dynamic Type sizes, let metadata wrap or collapse before increasing rail height enough to crowd poster imagery.

# Screen composition

The catalog screen has a fixed black top area with the KION logo and utility icons, then a wide carousel banner, horizontal chips, poster rails, and a dark translucent bottom tab bar. Rail cards are nearly borderless image rectangles with tight captions and star/play metadata beneath. The spacing is dense: several rails can be visible in one scroll.

Detail pages use a wide rounded hero poster or video still at the top, a centered title treatment, rating, a large action button, synopsis, metadata, square outline action buttons, then tabbed episode or trailer sections. Actor rows use circular portraits. Profile and More screens switch from posters to charcoal rounded panels, but keep the same black background and compact white text.

Onboarding/launch can be full-screen poster art with large title graphics and a call to watch. Profile selection is a black stage with glowing central avatar and dim side avatars. Survey and filter screens are bottom sheets over a dimmed catalog, with a grabber, close button, selected blue chips, white selected controls, and fixed bottom actions.

# Navigation appearance

The bottom tab bar is a dark translucent strip attached to the bottom safe area. It has five icon-and-label destinations, inactive gray glyphs, and a bright selected state; the selected More item uses a magenta glow and filled avatar-like marker in observed screens. During playback, the tab bar disappears entirely.

Top navigation uses white logo/title text on black, with small outline icons for notifications, filters, search, list, headphones, menu, and back. Back controls are plain white chevrons without large light circles. Detail tabs use a cyan underline. Sheets use a centered white grabber and a small white close icon.

# Components

Primary modal buttons are white rounded rectangles with black semibold text. Content detail primary actions use a rounded magenta-to-red gradient button. Secondary actions are charcoal rounded rectangles with white text or outline square buttons with white icons and labels below. Disabled actions become darker charcoal with muted gray text.

Poster cards are image-first and nearly borderless, with small radius and no heavy shadow. Metadata sits outside or directly below the image. Category chips are dark rounded capsules; selected chips can be blue. Filter rows are full-width dark rows with chevrons, toggles, and subtle dividers.

Profile and settings cards are dark rounded rectangles with internal rows, icons, and small labels. Survey sheets use rating number chips, radio rows, and fixed bottom button bars. Player controls are sparse: central play/pause and skip icons, top title row, bottom scrubber, cyan progress/loading, and wide dark buttons such as skip intro or next episode.

# Imagery and icons

Photography, poster art, and video frames are mandatory in KION. The UI should not replace these with illustration, abstract placeholders, or decorative generated art. Poster crops preserve faces and embedded title art; carousels use wide cinematic crops while rails use portrait or landscape thumbnails depending on content type.

Icons are thin white line glyphs on black or charcoal surfaces. Ratings use compact star/play metadata. Profile avatars can use gradient-backed silhouettes or character imagery, but this is not a reusable illustration system; it is a profile asset treatment inside the dark UI.

# States

Observed states include full-screen launch poster, profile selection, PIN entry, survey prompt, selected survey rating, radio selection, home carousel, dense poster rails, collection grid, filter bottom sheet, notification skeleton, content detail expanded synopsis, detail tabs, playback loading, playback in progress, end-of-episode actions, profile card, and settings lists.

Across states, black remains the base, media remains primary where available, and controls stay compact. Selected filters turn blue or white depending on context. Disabled modal actions are dark and muted. Skeleton/loading content uses charcoal blocks on black rather than light shimmer.

# iOS adaptation

Keep the black canvas continuous through safe areas. Poster rails should use horizontal scrolling containers with stable image aspect ratios; detail and profile pages should scroll vertically without changing the top media hierarchy. Playback must hide tab navigation and keep controls inside video-safe regions.

Use at least 44-point touch targets for tab items, player controls, filter rows, action buttons, toggles, chips, and poster cards. VoiceOver order should follow visible hierarchy: logo/title, utilities, hero or rail, section labels, cards, then bottom navigation. Dynamic Type should preserve poster geometry and allow captions, metadata, and synopsis text to wrap or truncate. Do not introduce a light-mode variant unless the source screens show it; the observed KION system is dark-first.

# Anti-generic checklist

- Do not replace poster art or video frames with generic illustrations, gradients, or empty cards.
- Do not use a white catalog background, default grouped `Form`, or light settings panels.
- Do not use default iOS blue indiscriminately; cyan/blue is reserved for utility accents, progress, and selected filter controls.
- Do not leave the player with generic native chrome if it conflicts with the sparse black KION overlay.
- Do not make poster rails into padded card stacks with heavy shadows.
- Do not keep bottom navigation visible during playback.

</design-context>
