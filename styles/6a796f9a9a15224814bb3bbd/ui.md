<design-context>
---
version: 1
platform: iOS
name: TradingView-design-analysis
description: "A dense dark market interface using black and charcoal data surfaces, compact white numeric type, red-green price semantics, restrained blue-teal selection, full-screen charts, and highly economical navigation chrome."
colors:
  canvas: "#0D0E10"
  surface-primary: "#17191C"
  surface-secondary: "#23262A"
  accent-primary: "#2F7CF6"
  accent-secondary: "#26A69A"
  text-primary: "#F4F5F6"
  text-secondary: "#92979E"
  divider: "#2C2F34"
  destructive: "#F05A62"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Mono", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 12
  control-gap: 8
rounded:
  control: 8
  card: 12
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "blue", text: "white semibold", shape: "compact rounded rectangle"}
  secondary-action: {fill: "charcoal", text: "white or gray", shape: "compact rounded rectangle"}
  primary-card: {fill: "near-black", content: "symbol, price, change, compact metrics", shape: "small rounded"}
  navigation: {fill: "near-black", selected: "white or blue", accessory: "dense icon and label"}
---

# Overview

TradingView is a high-density dark data workspace. Market numbers, watchlist rows, and chart canvases dominate; chrome is compact, monochrome, and subordinate. Red and green encode movement, while blue-teal marks controls and selected analytical state.

# Non-negotiable visual invariants

- Black or charcoal fills every primary data screen.
- Numeric information is compact, aligned, and visually denser than ordinary consumer UI.
- Red and green are reserved for market direction and related states.
- Full-screen charts remain a primary canvas, not an image inside a decorative card.
- Watchlists use tight rows with symbol, price, and change visible together.
- Navigation and filters are compact enough to preserve data area.
- Promotional purple or abstract imagery never replaces the core market palette.

# Color and surfaces

Use near-black canvas, charcoal panels, and fine gray dividers. White carries symbol identity and key price; cool gray carries labels and timestamps. Green and red communicate market movement and must be paired with signs or labels. Blue or teal marks selection and analytical controls. Purple belongs only to bounded subscription promotion.

# Typography

Use SF Pro for UI and SF Mono for compact numbers where alignment matters. Screen titles are strong but not oversized; body and caption scales remain dense. Preserve tabular alignment, decimal clarity, and explicit plus/minus signs. Dynamic Type may increase row height, but must not collapse price and change into an ambiguous block.

# Screen composition

Onboarding and subscription screens may center a bold offer, but operational screens are list- or canvas-led. Watchlists fill the viewport with compact rows beneath a small header. Symbol views group price, summary metrics, and tabs without large decorative cards. Chart screens devote nearly all available space to plotting, with narrow tool strips and compact overlays. Sheets and menus layer above data without replacing its context.

# Navigation appearance

Bottom navigation is near-black with subdued labels and a high-contrast selected state. Top bars use small back, search, add, filter, and overflow controls. Segmented controls and tabs are compact with blue/white selection. Menus and sheets are dark, rounded, and separated by fine borders. No source IA is implied.

# Components

Primary actions are compact blue controls; secondary actions are charcoal with white or gray labels. Watchlist rows use tight vertical padding, hairline dividers, aligned numeric columns, and red/green change. Filters are small pills or menu rows. Chart controls use economical icon buttons with explicit selected state. Disabled controls reduce contrast; selected symbols or lists gain blue/teal emphasis without increased size.

# Imagery and icons

Charts, sparklines, logos, and abstract promotional assets are distinct. Charts are functional imagery and cannot be replaced by placeholder decoration. Icons are small, precise, and consistently stroked. Subscription art is isolated promotional media, not evidence of a reusable illustration system.

# States

Observed states include onboarding, subscription choices, populated and edited watchlists, symbol detail, menus, and interactive chart views. Dark surfaces, compact data density, and red-green semantics remain constant across selected and modal states.

# iOS adaptation

Protect chart area within safe areas and use compact toolbars that still provide 44-point hit regions. Watchlists scroll vertically; tabs and filters may scroll horizontally. At large Dynamic Type, increase row height and allow secondary labels to wrap while keeping numeric columns intelligible. VoiceOver reads symbol, price, direction, then actions. App-owned sheets and menus retain dark styling.

# Anti-generic checklist

- No light card dashboard.
- No oversized marketing typography on operational screens.
- No arbitrary use of red and green outside market semantics.
- No chart squeezed into a small rounded card.
- No unstyled tab bar or default blue form.
- No loose spacing that destroys scan density.
- No illustration language inferred from subscription promos.
</design-context>
