<design-context>
---
version: 1
platform: iOS
name: Okko-design-analysis
description: "A black-first streaming interface structured by cinematic key art, portrait poster rails, heavy white editorial headings, compact charcoal controls, and a violet subscription gradient."
colors:
  canvas: "#000000"
  surface-primary: "#171719"
  surface-secondary: "#252529"
  surface-selected: "#F4F4F5"
  text-primary: "#FFFFFF"
  text-secondary: "#B3B1B7"
  text-tertiary: "#747179"
  text-on-light: "#151417"
  accent-violet: "#7627FF"
  accent-purple: "#4A08C8"
  rating: "#26B66A"
  live: "#E82A64"
  divider: "#29272D"
typography:
  page-title: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40, letterSpacing: -0.6}
  hero-title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 800, lineHeight: 31, letterSpacing: -0.5}
  section-title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27, letterSpacing: -0.2}
  card-title: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 600, lineHeight: 20, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 500, lineHeight: 18, letterSpacing: 0}
  metadata: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 500, lineHeight: 18, letterSpacing: 0}
spacing:
  grid: 4
  compact: 8
  control: 12
  screen-horizontal: 12
  section: 20
  major: 28
rounded:
  badge: 4
  control: 6
  card: 10
  hero: 12
  utility: 999
  sheet: 24
components:
  subscription-action: {height: 48, fill: "violet-gradient", foreground: "#FFFFFF", radius: 6}
  secondary-action: {height: 44, fill: "#252529", foreground: "#FFFFFF", radius: 6}
  utility-action: {size: 48, fill: "#252529", foreground: "#FFFFFF", radius: 999}
  search-field: {height: 36, fill: "#F4F4F5", foreground: "#151417", radius: 7}
  bottom-navigation: {height: 58, fill: "#000000", selected: "#FFFFFF", unselected: "#8D8991"}
---

# Overview

Okko is a black media environment in which artwork is content structure rather than decoration. The home feed alternates a large featured title, compact category shortcuts, poster rails, subscription promotion, editorial collections, and sports modules. White type supplies the hierarchy; charcoal controls stay subordinate; violet is concentrated on subscription and account-conversion actions.

# Non-negotiable visual invariants

- The canvas and persistent navigation are pure black, with charcoal used only for controls and grouped content.
- Featured titles use large cinematic artwork with metadata or actions attached directly to the image-led region.
- Browsing relies on dense horizontal rails of portrait posters and wide editorial cards rather than repeated text-only rows.
- Page and section headings are heavy, white, left aligned, and substantially larger than supporting metadata.
- Subscription commitment uses a saturated violet gradient; ordinary utilities remain charcoal or outline-only.
- Content detail preserves artwork through the first viewport and continues into cast, collections, description, and related titles.
- Channels use a compact schedule list, while sport uses event cards with time, teams, state, and reminder action.

# Color and surfaces

Black is the continuous canvas behind content, status area, and bottom navigation. Charcoal fills category shortcuts, filters, secondary actions, schedule cards, and circular utilities. Selected light segments invert to a near-white fill with dark text. Borders and dividers are rare and low contrast.

The violet gradient runs from deeper purple to electric violet and is reserved for subscription, account creation, or comparable conversion. Green ratings and pink-red live badges remain local to content status. Poster and hero art provide nearly all other color; do not tint neutral navigation to match individual artwork.

# Typography

Use SF Pro Display for page, hero, and section headings and SF Pro Text for metadata, controls, and schedules. Headings use bold or extra-bold weight and compact leading. Supporting text is regular and gray; prices and subscription terms stay white but smaller than the title. Labels under bottom-navigation icons are extremely small and must remain secondary.

The working scale is 34/40 points for major page titles, 28/31 for hero title treatment, 22/27 for section headings, 16/20 for card titles, 15/20 for body, 14/18 for controls, 12/16 for metadata, and 10/13 for captions. Preserve this steep contrast instead of making all content rows the same size.

# Screen composition

Use 12-point outer insets and 8–12-point gaps inside controls and rails. The home feed may place a featured card nearly edge-to-edge, followed by a single horizontally scrolling shortcut row and successive media rails. Category, collection, and sports modules show the next card partially to signal horizontal continuation.

Catalog starts with a large title and compact light search field, then a two-column grid of dark category tiles whose poster stacks extend from the lower portion. Channels switch to a dense vertical schedule list with station mark, current program, remaining time, and save action. Sport begins with a wide editorial hero, then sport filters and chronological event cards. Detail uses full-width vertical key art with a dark fade into title, metadata, price, and the subscription action; supporting sections continue below on black.

# Navigation appearance

The five-item bottom navigation remains black and uses thin outline icons with small labels. The selected destination becomes solid white; inactive items remain gray. Top-level pages place the account action at the upper right. Details use a small circular close action over artwork. Full-screen playback removes browsing navigation and exposes controls only when requested.

# Components

Featured cards use rounded artwork with content metadata integrated at the lower edge. Poster rails keep a consistent portrait ratio and minimal text outside the image. Category shortcuts are short charcoal rectangles with a leading symbol and label. Catalog category tiles use a dark fill, title at the top, and layered poster crops below.

The primary subscription control is a full-width violet gradient with white centered text. Secondary actions are charcoal rectangles. Detail utilities are dark circles for trailer, save, rate, share, download, and related actions, with short labels below. Search is an intentionally light field on black. Segmented controls use a white selected segment and dark unselected segments. Channel rows and sport event cards keep actions at the trailing edge.

# Imagery and icons

Use supplied title art, portrait posters, wide editorial artwork, person photography, channel marks, team marks, and collection banners in their assigned roles. Hero art may extend to screen edges and needs a black gradient only where title or metadata crosses it. Preserve faces and title treatments when cropping. Posters stay portrait; editorial and sports modules stay wide; cast portraits are circular.

Interface icons are quiet white or gray outlines for account, navigation, search, save, close, reminder, share, and playback utilities. Branded channel, team, title, and collection marks are image assets, not substitute symbols. The isolated device artwork in an account prompt is a contextual graphic, not evidence of a reusable illustration system.

## Visual Style

When an adapted product genuinely needs reference-defining key art, posters, channel marks, team marks, or editorial media, generate the required raster asset with an image-generation tool and add the result to the Xcode asset catalog. Do not construct that media in SwiftUI, do not replace it with a symbol, and do not pause for approval before integrating the generated asset into the running build. If final media is unavailable, preserve its intended ratio, crop, focal point, and color mass with a temporary raster asset.

# States

Selected tabs and destinations turn white; inactive controls recede to gray. Search supports idle, entered query, results, and filtered results while preserving the query. Save and favorite actions toggle in place. Content can expose rating, age, duration, season count, price, included-in-subscription, live, upcoming, completed, downloaded, saved, purchased, and history states adjacent to the affected title or event.

Subscription and account prompts lead to focused conversion without changing the rest of the feed. Loading preserves poster and hero slots. Empty library states explain the missing content and keep the relevant account or discovery action available. Playback, authentication, deletion, logout, and child-protection tasks require explicit completion or cancellation feedback.

# iOS adaptation

Use custom scroll containers and media cells; default `List`, `Form`, `TabView`, and button styling must be fully restyled if used for behavior. Allow hero media and black backgrounds to extend edge-to-edge while keeping controls within safe areas. Reserve bottom space for persistent navigation and place sticky subscription actions above it without obscuring the last section.

Each visible compact icon must retain at least a 44-point hit area. Dynamic Type may expand schedule rows, event cards, and metadata, but should not squeeze posters into inconsistent ratios. At accessibility sizes, move trailing actions to a second row and allow rails to retain their media width. VoiceOver should group title, metadata, availability, and primary action before secondary utilities; live and scheduled states must be announced as state, not color alone.

# Anti-generic checklist

- Do not replace poster rails and key art with identical charcoal text cards.
- Do not spread the violet gradient across navigation, filters, and ordinary utilities.
- Do not place white cards or light grouped backgrounds behind the browsing feed.
- Do not use one media ratio for portrait posters, wide editorial cards, sport events, and cast portraits.
- Do not invent decorative symbols where a title, channel, team, or collection asset is required.
- Do not use default blue tint, a stock `TabView`, or elevated shadow cards against the black canvas.

</design-context>
