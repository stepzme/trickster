<design-context>
---
version: 1
platform: iOS
name: Yandex-Music-design-analysis
description: "A dual light-and-black music interface combining vivid album art, fluorescent yellow listening actions, oversized editorial type, rounded media cards, a persistent mini-player, and neon abstract brand graphics."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1F1F3"
  accent-primary: "#FFD600"
  accent-secondary: "#111111"
  text-primary: "#111111"
  text-secondary: "#747478"
  divider: "#DEDEE1"
  destructive: "#E54A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 42, fontWeight: 800, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 750, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 650, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 450, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#FFD600", textColor: "#111111", cornerRadius: 999, minHeight: 48}
  secondary-action: {fill: "#F1F1F3", textColor: "#111111", cornerRadius: 999, minHeight: 44}
  primary-card: {fill: "#FFFFFF", cornerRadius: 20, padding: 16}
  navigation: {fill: "#FFFFFF", selectedColor: "#111111", accentColor: "#FFD600"}
---

# Overview

Yandex Music alternates between bright white discovery/library surfaces and immersive black listening surfaces. Vivid square album art, fluorescent yellow playback, oversized editorial type, persistent mini-player controls, and neon abstract brand objects make the product expressive without weakening playback clarity.

# Non-negotiable visual invariants

- Browsing surfaces are predominantly white, while active listening and selected hero experiences may become fully black.
- Fluorescent yellow is the stable primary listening/action accent and is paired with near-black content.
- Album and playlist art is a major visual mass in rails, lists, heroes, and the full player.
- One oversized bold title anchors major discovery or onboarding compositions.
- A compact mini-player remains visually distinct immediately above the bottom navigation on browsing screens.
- Bottom navigation is clean and low-profile, with unmistakable selected state and no generic blue.
- Abstract neon/glass-like wave objects and star motifs use a consistent authored graphic language.

# Color and surfaces

White and black are the two large canvas states. Pale gray supports search fields and secondary controls on white; deep charcoal supports controls and the mini-player on black. Yellow identifies play, selection, and the star/sun brand mark without becoming a general background color. Artwork-derived gradients and blurred color may fill immersive hero/player areas, but they remain subordinate to the current content. Near-black or white text switches with the canvas; gray carries artist and metadata. Destructive states use red. Default blue or unrelated decorative gradients would break the system.

# Typography

Use SF Pro Display/Text when the source brand face is unavailable. Hero titles are very large, heavy, and compact, often occupying several lines; playlist and section titles remain bold; track, artist, and metadata use smaller neutral styles. Numeric time values and playback positions are compact. Preserve a clear large-title-to-body contrast rather than using adjacent near-identical sizes. At Dynamic Type sizes, let editorial titles wrap, protect track/artist pairing, and keep playback controls and essential metadata visible before secondary descriptions.

# Screen composition

The top safe area continues the current white, black, or artwork-derived field. Onboarding and branded education use a large title with a dominant abstract object or gradient field. Home/discovery stacks editorial headings, horizontal media rails with partial next items, and larger feature cards. Search and catalog use white one-column content with pale search fields and colorful category artwork. The full player centers a large square cover above metadata, progress, and oversized playback controls on a dark or artwork-derived background. Collection uses denser lists/grids, while a mini-player sits above bottom navigation.

Visible archetypes include authored onboarding; white discovery home; black or artwork-derived full player; search/category browsing; catalog education with abstract objects; and collection/library lists.

# Navigation appearance

Browsing screens use a low-profile white bottom bar with compact icons and labels; black immersive surfaces invert the chrome. The selected item uses stronger contrast and yellow where appropriate. A persistent mini-player forms a separate rounded dark strip directly above the bar, with cover thumbnail, track metadata, and playback control. Top navigation is visually minimal, and back/close controls use ordinary scale. Bottom sheets have large rounded top corners and adapt to the current light or dark surface.

# Components

The primary action is a yellow pill or circular play control with near-black content. Secondary actions are pale-gray pills on white or translucent/dark pills on immersive surfaces. Media cards pair square/rounded artwork with concise title and artist/context. The mini-player is a compact dark rounded strip with small artwork and high-contrast controls. Search uses a pale rounded field on white. Category or mood cards may combine short labels with authored abstract objects. Player controls use strong size contrast: dominant play, smaller skip/like/queue controls, thin progress track. Disabled/unavailable items reduce contrast while preserving layout.

# Imagery and icons

Album/playlist covers, artwork-derived color, and authored abstract brand graphics are compositionally required and cannot be omitted while assets are pending. Cover art keeps stable square ratios and avoids cropping embedded typography. Background atmosphere may sample and heavily blur artwork color. Abstract 3D/glass-like waves, category glyphs, and star forms follow the separate illustration specification. Playback icons are simple, bold, and optically centered; arbitrary SF Symbols are unacceptable when their weight or geometry conflicts.

# States

Observed states include onboarding, populated discovery, search/catalog results, collection, playing/paused full player, mini-player, liked/saved, and modal education. Playing state strengthens yellow and exposes progress; selected library/filter states use strong contrast or pale tonal fill. Dark and light surfaces retain the same artwork and typography hierarchy. Unavailable or error states lower content contrast and use local red only where needed.

# iOS adaptation

Extend the current visual field through the top safe area and keep navigation/mini-player above the home indicator. Use vertical scrolling with horizontal media rails; center the full-player stack within available height and allow metadata to scroll before shrinking cover art excessively. Maintain 44-point targets for play, skip, like, queue, search, and navigation. VoiceOver order should read cover context, title, artist, playback state/progress, primary controls, then secondary actions. Dynamic Type expands cards and list rows and may reduce hero art before clipping text. Support both light and dark app-owned appearances, Reduce Transparency fallbacks, and native audio/permission behavior with explicitly styled surfaces.

# Anti-generic checklist

- Do not replace fluorescent yellow with default blue.
- Do not remove album art, artwork-derived atmosphere, or authored abstract objects.
- Do not turn discovery into a uniform stack of white text cards.
- Do not use an unstyled `TabView`, mini-player, slider, or playback control set.
- Do not apply random gradients unrelated to artwork or the authored graphic language.
- Do not flatten oversized editorial titles into ordinary navigation headings.
- Do not crop cover typography or use one radius for covers, pills, sheets, and navigation.

</design-context>
