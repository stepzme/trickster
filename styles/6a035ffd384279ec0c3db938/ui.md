<design-context>
---
version: 1
platform: iOS
name: Kino-kz-design-analysis
description: "A white media-ticketing interface with purple selection, green brand blocks, bold sans headings, poster-heavy grids, pill filters, sticky purchase actions, and a compact four-item bottom bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F5"
  accent-primary: "#7356D8"
  accent-secondary: "#35A85B"
  text-primary: "#171719"
  text-secondary: "#77777E"
  divider: "#E5E5E8"
  destructive: "#D94C55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing: {screen-horizontal: 16, section-gap: 24, card-padding: 14, control-gap: 10}
rounded: {control: 14, card: 18, sheet: 28, pill: 999}
components:
  primary-action: {fill: "purple", shape: "wide rounded control", text: "white semibold"}
  secondary-action: {fill: "light grey", shape: "pill", text: "near-black"}
  primary-card: {fill: "white", shape: "rounded poster card", imagery: "dominant"}
  navigation: {fill: "white bottom bar", active: "purple", inactive: "grey"}
---

# Overview

Kino.kz is a white, poster-driven media interface. Purple organizes selection and purchase, green appears in bounded brand blocks, and black typography keeps dense schedules and venue information legible. Rounded poster cards, pill filters, and sticky actions distinguish it from a generic list app.

# Non-negotiable visual invariants

- White remains the dominant canvas; purple is the principal action and selected-state color.
- Movie and event posters are the largest repeated visual elements.
- Bold screen headings contrast with compact schedule, venue, and price metadata.
- Filters, dates, and categories use compact pills rather than full-width rows.
- Detail screens give the poster or venue image substantial upper-screen space.
- Purchase summaries and primary actions stay fixed above the lower safe area when observed.
- Bottom navigation is a white four-item bar with purple active state.

# Color and surfaces

Pure white pages and light-grey grouped panels support black text. Purple marks CTAs, selected tabs, seats, links, and active navigation; green is a bounded secondary brand accent. Dividers are fine and grey. Disabled controls become pale grey, and destructive feedback uses muted red. Default blue or purple filling every card would break the reference.

# Typography

Use SF Pro Display for large bold screen and detail titles, SF Pro Text for controls and metadata. Poster titles and prices outrank dates, genres, and venue detail. Keep action labels semibold and purple. Dynamic Type expands cards and schedule rows vertically; posters and primary actions retain their hierarchy.

# Screen composition

Home combines media banners, category icons, and poster rails. Catalogs use poster grids; search pairs a compact field with native keyboard and result/empty content. Detail screens place a large poster hero above metadata and a sticky action. Seat selection uses the map as the middle visual mass with a bottom summary. Profile uses grouped single-column rows. Use 16-point gutters and 10–16-point local gaps.

# Navigation appearance

The bottom bar has four icon-and-label items with purple selected state. Top bars use a city selector, back chevron, search, bell, or profile icon. Segmented notification tabs and sheets are rounded and restrained. This section describes appearance only.

# Components

Primary actions are wide purple rounded buttons; disabled actions are light grey. Date/category chips use pale fill and purple selection. Poster cards combine a dominant image, compact title, and metadata. Seat states use clear filled selection. Login and PIN screens retain native keyboard/keypad behavior inside branded white surfaces.

# Imagery and icons

Movie/event posters, venue photos, and advertising photography dominate. Maintain their natural crop and recognizable title art; imagery cannot be omitted while pending. Icons are simple purple/grey line symbols. No stable independent authored illustration system was observed, so do not invent one from isolated promotional graphics.

# States

Observed states include phone login, captcha, PIN, disabled/enabled actions, empty and populated search, selected filters/dates/seats, ticket detail, and segmented notification states. White canvas, purple selection, and poster-first hierarchy remain consistent.

# iOS adaptation

Extend white through safe areas, scroll feeds, grids, details, and profile, and reserve bottom space for navigation or sticky CTAs. Keep keyboard-focused fields visible. Targets require at least 44 points. VoiceOver reads poster title, date/venue, price/state, then action. Dynamic Type expands rows without shrinking poster identity or selected-seat clarity.

# Anti-generic checklist

- Do not replace posters with generic icons or uniform text cards.
- Do not use default blue, unstyled `TabView`, or `Form`.
- Do not flatten purple selection and green brand accents into one arbitrary tint.
- Do not hide sticky purchase state or selected seats.
- Do not use one radius for chips, poster cards, sheets, and navigation.
- Do not add descriptive copy that repeats title, venue, date, or ticket state.

</design-context>
