<design-context>
---
version: 1
platform: iOS
name: Ivi-design-analysis
description: "A near-black and deep-plum streaming interface lets cinematic posters dominate, using bold white titles, compact gray metadata, hot-pink actions, thin outline navigation, and sparse glossy subscription art."
colors:
  canvas: "#09060A"
  surface-primary: "#140D15"
  surface-secondary: "#241827"
  accent-primary: "#FF1654"
  accent-secondary: "#27C88A"
  text-primary: "#FFFFFF"
  text-secondary: "#AAA2AC"
  divider: "#342837"
  destructive: "#E53E61"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 26
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 26
  pill: 999
components:
  cinematic-feature-card: {}
  portrait-poster-card: {}
  magenta-primary-action: {}
  dark-filter-chip: {}
  five-item-dark-tab-bar: {}
---

# Overview

Ivi is a dark, artwork-first streaming system. Near-black and deep-plum surfaces recede behind cinematic posters, landscape stills, and video frames. Large bold white titles and compact gray metadata provide hierarchy with little explanatory copy. Hot pink is a rare decisive accent for subscription and selected states. Thin outline navigation and dark rounded controls preserve immersion across feed, detail, search, account, and player screens.

# Non-negotiable visual invariants

- Near-black or deep plum fills the entire operational canvas, including safe areas and navigation surroundings.
- Poster and still artwork supplies most color and occupies more visual weight than UI chrome.
- Hot pink is limited to primary subscription/action controls and selected emphasis, never used as a general background.
- White titles are bold and high contrast; supporting metadata is compact, factual, and muted gray.
- Discovery uses full-width feature art, horizontal poster rails, or a consistent three-column portrait grid.
- The five-item bottom bar uses thin white/gray outline icons with a visibly brighter active state.
- Player surfaces remain full-screen black/plum with sparse white controls rather than card-based playback.

# Color and surfaces

The base is near-black with dark burgundy or plum raised surfaces for search, filters, setting rows, and sheets. Poster art introduces all other saturated colors. Hot pink marks high-priority actions, selected indicators, and subscription emphasis. White carries titles and primary player controls; warm gray carries facts, synopsis, and inactive navigation. Green or cyan may appear in ratings or compact source metadata but do not become interface accents. Dim blur and dark scrims protect legibility over imagery. White grouped panels, default blue tint, bright dividers, and decorative gradients behind every section would break the reference.

# Typography

Use SF Pro Display for cinematic headings and SF Pro Text for metadata, controls, and body copy. Hero or subscription statements use 32–40-point bold white type; detail titles 26–30 points; section headings 20–22 points; card labels 15–18 points semibold; metadata and badges 10–13 points muted gray. Keep text concise and let title art remain inside posters rather than recreating it. With Dynamic Type, expand synopsis and settings rows vertically, retain poster/title/action order, and move secondary facts lower before shrinking imagery or tap targets.

# Screen composition

Primary feeds begin below the safe area with minimal top controls, then a large feature image or broad artwork block followed by vertically separated sections of horizontal poster rails. The dark five-item navigation occupies the bottom safe area. Search places a dark filled field and compact filter action above a three-column portrait grid. Filter states use chips and a dark dropdown or sheet.

Detail archetypes place large artwork in the upper half with a bottom gradient into title, compact facts, action row, and a prominent pink CTA, then related rails below. Player screens turn the entire viewport into black/plum video with sparse overlay controls and separate dark panels for audio, subtitles, or lock state. Account/settings use dark raised rows, toggles, subscription cards, and modal sheets over blurred or dimmed backgrounds. Typical horizontal inset is 16 points; major sections breathe with 24–32 points.

# Navigation appearance

The bottom bar is dark and visually continuous with the canvas, with five thin icon-and-label items; the active item is bright white or emphasized, inactive items are gray. Top bars use a minimal back chevron, compact centered or left title, close icon, and occasional line actions. Filter and category selections use dark pills with bright text or a pink indicator. Account actions and media choices appear in dark rounded bottom sheets. Player navigation is an overlay rather than a persistent bar. This section does not define destinations.

# Components

- **Feature card:** full-width landscape artwork with rounded corners, safe subject crop, lower dark gradient where text overlaps, and minimal external chrome.
- **Poster card:** consistent narrow portrait crop with modest radius and little text outside the image; rails scroll horizontally and catalogs form a three-column grid.
- **Primary action:** broad hot-pink rounded rectangle with centered white semibold label; loading may replace the label with a compact spinner, while disabled actions become gray.
- **Filter chip:** compact dark-plum capsule with small white/gray label; selected state becomes brighter or gains a pink cue without changing every chip.
- **Media action row:** compact bookmark, download, share, or rating controls as thin white icons with short labels on the dark canvas.
- **Settings row:** charcoal/plum rounded row with white title, gray detail, and trailing switch, value, or chevron.
- **Player overlay:** sparse white transport and utility controls over full-screen media with dim scrim only where required.

# Imagery and icons

Cinematic posters, thumbnails, and video key art are the primary composition and cannot be omitted. Landscape imagery uses cover crops with focal faces and title artwork protected; portrait posters keep consistent proportions. Thin white line icons remain subordinate. The pink Ivi mark is a brand asset, not illustration. A narrow authored glossy 3D/CG language appears in onboarding and subscription confirmation/promo cards; preserve its central hero space only in those contexts. Do not confuse it with poster art, campaign key art, or functional icons.

# States

Observed states include notification permission, keyboard entry, selected filters, open sort dropdown, loading spinners in actions, subscription success, active subscription card, empty payment methods, toggles, player controls shown, locked player, and audio/subtitle selection. The near-black/plum canvas, white hierarchy, gray support text, and pink decisive action remain constant. No stable authored error illustration was observed; errors should remain semantic within the same dark surface system.

# iOS adaptation

Extend the dark canvas behind safe areas while keeping top actions, player controls, and bottom navigation clear of the Dynamic Island and system gestures. Use a vertical `ScrollView` for feeds and detail content, horizontal scrolling for rails and chips, and a stable three-column `LazyVGrid` only when poster width remains legible. Maintain image aspect ratios and do not crop focal faces or embedded title art. Player controls need 44-point hit regions despite smaller visible glyphs. Present filters, media choices, and account actions as native-behaving dark sheets. Keyboard states must keep search visible. VoiceOver order should announce title, metadata, state, and action after the artwork. Dynamic Type may increase section height rather than reducing poster width. The style is dark-first; do not create a generic automatic light version.

# Anti-generic checklist

- Do not replace poster grids and rails with generic text cards or colored placeholders.
- Do not place bright panels behind every section or use a light grouped canvas.
- Do not overuse hot pink, rating green, or cyan as general decorative accents.
- Do not crop faces or title typography carelessly.
- Do not add conventional drop shadows or strong borders around every dark surface.
- Do not ship an unstyled `TabView`, `Form`, or default blue controls.
- Do not use one corner radius for poster cards, controls, sheets, and pills.
- Do not substitute SF Symbols, generic gifts, or campaign posters for the authored subscription illustration.

</design-context>
