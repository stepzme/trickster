<design-context>
---
version: 1
platform: iOS
name: Airbnb-design-analysis
description: "A photography-led travel marketplace on a bright white canvas, organized by a compact black typographic hierarchy and the signature coral-pink accent. Rounded image cards, floating search surfaces, light-gray sheets, map price pins, and a persistent five-tab bar keep discovery approachable while fixed bottom reservation actions make conversion explicit. Traveler and host modes share the same restrained surfaces but use distinct navigation."

colors:
  primary: "#E82161"
  on-primary: "#FFFFFF"
  primary-soft: "#FFF0F5"
  ink: "#222222"
  ink-muted: "#6A6A6A"
  ink-subtle: "#A0A0A0"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#EFEFEF"
  surface-warm: "#F8F5ED"
  hairline: "#DDDDDD"
  hairline-strong: "#B0B0B0"
  inverse-canvas: "#222222"
  inverse-ink: "#FFFFFF"
  semantic-success: "#0B8F55"
  semantic-info: "#4A8DFF"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Marketplace Sans
    fontSize: 40
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.0
  display-lg:
    fontFamily: Marketplace Sans
    fontSize: 32
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.6
  display-md:
    fontFamily: Marketplace Sans
    fontSize: 26
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3
  headline:
    fontFamily: Marketplace Sans
    fontSize: 22
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.2
  card-title:
    fontFamily: Marketplace Sans
    fontSize: 16
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: Marketplace Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: Marketplace Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: Marketplace Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: Marketplace Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: Marketplace Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: Marketplace Sans
    fontSize: 15
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Marketplace Sans
    fontSize: 12
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.1
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 30
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: [14, 20]
  search-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  listing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 0
  search-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20
  price-pin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: [6, 10]
  status-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: [4, 8]
  navigation-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 56
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: [24, 16]
---

# Overview

Airbnb keeps interface color restrained so accommodation, experience, and service photography can lead. The coral-pink accent marks search, reservation, saved state, and selected navigation. Rounded cards and floating white surfaces create a soft marketplace rhythm across list, map, trip, message, profile, and host screens.

# Non-negotiable visual invariants

- The principal image treatment uses Full-color photography as the primary discovery medium.
- Let real photography carry destination character.
- Reserve coral for search, booking, saved, and selected state.
- Keep search criteria resumable and visible.
- Use one fixed reservation action with price context.
- Treat traveler and host navigation as separate modes.
- Explore uses horizontal two-card carousels in one mobile column.
- Listing detail is a vertical editorial stack.

# Color and surfaces

- **Coral Pink** ({colors.primary}): Search, Reserve, saved heart, and selected navigation.
- **Coral pressed** ({colors.primary}): Pressed primary action.
- **Soft Coral** ({colors.primary-soft}): Quiet selected and informational background.

- **Canvas** ({colors.canvas}): Default page, cards, and fixed navigation.
- **Surface 1** ({colors.surface-1}): Search backdrop, secondary actions, and grouped regions.
- **Surface 2** ({colors.surface-2}): Skeletons, disabled controls, and quiet chips.
- **Warm Surface** ({colors.surface-warm}): Host education and editorial recommendation cards.
- **Inverse Canvas** ({colors.inverse-canvas}): Selected dark filters and emphasis.

- **Ink** ({colors.ink}): Titles, prices, destinations, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Dates, host type, explanations, and message preview.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and low-priority labels.
- **Inverse Ink** ({colors.inverse-ink}): Text on dark selections.

- **Success** ({colors.semantic-success}): Confirmed reservation and online status.
- **Info** ({colors.semantic-info}): Identity and reservation notices.
- **Overlay** ({colors.semantic-overlay}): Scrim below sheets and host-mode dialogs.

# Typography

- **Marketplace Sans** — one friendly neutral sans for headings, cards, body, prices, and navigation.
- **System Mono** — only for reservation or payment identifiers where needed.

- `{typography.display-xl}` — 40 points — 700 — Major host setup statement
- `{typography.display-lg}` — 32 points — 700 — Empty state or mode heading
- `{typography.display-md}` — 26 points — 700 — Page title
- `{typography.headline}` — 22 points — 600 — Listing section heading
- `{typography.card-title}` — 16 points — 600 — Property, trip, and message title
- `{typography.body}` — 14 points — 400 — Default details
- `{typography.caption}` — 11 points — 400 — Tab and badge labels
- `{typography.button}` — 15 points — 600 — Search and Reserve

- Let photographs establish mood; keep type functional and compact.
- Keep destination and price slightly stronger than host and date metadata.
- Use sentence case throughout.
- Separate long descriptions with section headings and rules.

Use **Airbnb Cereal** when licensed; otherwise **Circular**, **SF Pro**, or **Inter**. Preserve rounded counters, compact body proportions, and 600–700 heading weights.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 16–20 points, card gaps 12–16 points, section gaps 24 points, and sheet interiors 20 points. Fixed bottom actions respect the safe area with 12–16 points padding.

Explore uses horizontal two-card carousels in one mobile column. Listing detail is a vertical editorial stack. Map search uses full-screen map plus one bottom preview card. Profile and host menus use a single grouped list.

White space separates destinations and tasks. Do not fill gaps with decorative color. Allow empty wishlists and message states to remain visibly sparse.

Use photographic depth, soft ambient shadow, and restrained blur. Map pins and floating search controls may lift slightly; ordinary list rows remain flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Traveler mode uses Explore, Wishlists, Trips, Messages, Profile. Hosting uses Today, Calendar, Listings, Messages, Menu. Selected icons and labels turn coral; the two modes switch explicitly.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary Search and Reserve actions use coral fill, white semibold text, and 14 points corners. Secondary buttons use pale gray or white with dark text. Favorite is a circular heart overlay on photography.

Listing cards lead with photography, then compact title, metadata, price, and rating. Trip cards add reservation status and one quiet bottom action. Host education cards use a warm backdrop and photo collage.

Search separates Where, When, and Who into clear steps. Fields have visible borders and generous touch space. Host setup uses sequential large choices instead of one long form.

Reservation status appears in a labeled pill and accompanying notice. Guest favourite, pending, identity review, confirmed, and cancellation remain readable without relying on color alone.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Listing and experience photos crop to rounded landscape or near-square cards with subject-safe cover behavior. Photo galleries vary scale but keep consistent corner treatment. Emoji-like mode icons are functional labels, not a reusable illustration language.

Use cover for property cards and contain only for small profile or functional imagery. Preserve important rooms, people, and landmarks within safe crop areas. Gallery images keep their original hierarchy rather than uniform cropping.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Reservation status appears in a labeled pill and accompanying notice. Guest favourite, pending, identity review, confirmed, and cancellation remain readable without relying on color alone.

- **Success** ({colors.semantic-success}): Confirmed reservation and online status.
- **Info** ({colors.semantic-info}): Identity and reservation notices.
- **Overlay** ({colors.semantic-overlay}): Scrim below sheets and host-mode dialogs.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Maintain at least 44 points for tabs, hearts, filter controls, map pins, and bottom actions. Keep close and back buttons detached from photo-gallery edges.
- Stack search fields when needed; preserve Where, When, Who order. Convert two-card rows to one wider card before shrinking photos below recognition. Fixed reservation bars keep price and action on one row where possible.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use coral as a large section background.
- Do not hide price or reservation state behind unlabeled icons.
- Do not crowd listing photos with multiple badges.
- Do not add heavy shadows to every card.
- Do not replace real accommodation imagery with decorative illustration.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
