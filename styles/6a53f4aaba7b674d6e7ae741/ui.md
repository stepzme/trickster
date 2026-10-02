<design-context>
---
version: 1
platform: iOS
name: Samokat-design-analysis
description: "A fast grocery interface pairing hot-pink brand and purchase masses with white and light-gray commerce surfaces, dark rounded search, dense product photography, circular navigation controls, and stacked rounded transactional panels."
colors:
  canvas: "#F4F4F4"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EDEDED"
  accent-primary: "#F33A8B"
  accent-secondary: "#242424"
  text-primary: "#2B2B2B"
  text-secondary: "#777777"
  divider: "#E0E0E0"
  destructive: "#D93C4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 8
rounded:
  control: 16
  card: 20
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle or sticky bar"}
  secondary-action: {fill: "accent-secondary", text: "white", shape: "pill"}
  primary-card: {fill: "surface-primary", imagery: "food or product photography", shape: "rounded rectangle"}
  navigation: {fill: "surface-primary", selected: "accent-primary", item: "pale circular icon button"}
---

# Overview

Samokat combines hot-pink brand and purchase emphasis with white and light-gray grocery surfaces, a dark floating search pill, dense food photography, and unusually circular navigation items. Product discovery is visually busy, while cart and profile simplify into stacked white rounded panels. Pink is a large structural color, not merely a small tint.

# Non-negotiable visual invariants

- Hot pink forms a substantial mass on launch, primary actions, add controls, and bottom commitment bars.
- Product and food photography dominate home, catalog, search, and detail surfaces.
- Search appears as a dark floating pill with high-contrast text and icons.
- Bottom navigation uses pale circular icon buttons rather than a plain row of unframed symbols.
- Category and product tiles use generous rounding over white or light-gray surfaces.
- Cart and profile content is grouped into stacked white rounded panels on a pale-gray canvas.
- Bold dark section titles remain clearly separated from smaller product and metadata text.

# Color and surfaces

The everyday canvas is light gray, with white product cards, panels, and navigation surfaces. Hot pink is the primary brand, purchase, add, and selected-state color. Near-black creates the floating search control and strong text contrast. Gray supports secondary labels, inactive icons, and dividers; red is reserved for destructive feedback. Product and promo imagery introduces additional color but does not change the app-owned hierarchy. Default iOS blue would visibly break the pink commitment language.

# Typography

Use SF Pro Display for 28–34 point bold page and promotional headings and SF Pro Text for commerce content. Section headings use about 20 point bold; product titles, prices, and actions use 14 point regular or semibold; unit, delivery, badge, and navigation text uses 11–13 point captions. The observed type is rounded and direct rather than editorial. At Dynamic Type sizes, allow tiles and panels to grow and reduce grid columns before truncating prices or product names.

# Screen composition

Login and launch screens use a large pink field or action region with concise centered content. Home begins with a dark floating search pill below the safe area, followed by broad promotional or food imagery, rounded category tiles, and dense product rails. Catalog and search use multi-column product cards with narrow gaps. Product detail gives the upper region to photography and keeps an add or price action near the bottom. Cart and profile switch to single-column stacks of large white rounded panels on light gray, with a pink bottom action for commitment. The bottom navigation remains visually distinct through circular icon containers.

# Navigation appearance

The bottom bar is white or light, with each compact navigation icon placed in a pale circular button; selected state gains pink emphasis while inactive icons remain dark or gray. Focused detail and login surfaces use simple back or close controls. Search is a dark rounded pill floating near the top rather than a default navigation-bar field. Category selectors and filters use compact rounded chips or tabs. Transactional overlays use large top-rounded white sheets.

# Components

Primary actions are hot-pink rounded rectangles or full-width sticky bars with white semibold labels. Secondary commands can use a dark pill with white text. Product cards combine a large photo, concise name and price, optional promotion, and a pink add or quantity action. Category tiles are rounded and image-led. Search is near-black with white content and compact functional icons. Cart and profile panels use white fill, substantial radius, subtle separation, and row-based controls. Pressed pink controls deepen slightly; disabled states recede to gray while retaining readable labels.

# Imagery and icons

Food photography, product packshots, promotional compositions, and category thumbnails are compositionally essential. Crop promotional food images boldly and contain individual packaged products in stable image boxes. A single monochrome onboarding drawing and isolated promo graphics do not establish a repeatable illustration system. Icons are simple and high-contrast, often sitting inside pale circles. Do not replace food or product media with arbitrary SF Symbols, emoji, or programmatic shapes.

# States

Observed states include login, populated home, catalog and search, product detail, cart, profile, selected navigation, product add and quantity controls, and transactional panels. Pink commitment, dark search, circular navigation, product media, and rounded white grouping remain stable. Empty or onboarding art is isolated and should not displace the commerce hierarchy. Errors remain local and use destructive red distinct from the brand pink.

# iOS adaptation

Respect status and home-indicator safe areas, keep the dark search pill and sticky pink actions clear of system regions, and use vertical scrolling for catalog, detail, cart, and profile. Keep focused login or search fields visible above the keyboard. Use the documented top-rounded sheets for app-owned overlays while retaining native system prompts. Search, category, add, stepper, back, and circular navigation items require 44-point targets. VoiceOver should announce product identity and price before promotion and action. At compact widths or large Dynamic Type, move product grids to one column rather than shrinking imagery or labels. Treat the observed UI as light-first.

# Anti-generic checklist

- Do not reduce hot pink to a tiny accent or replace it with default iOS blue.
- Do not replace the dark floating search pill with an unstyled navigation search field.
- Do not turn the circular bottom navigation into a plain default `TabView`.
- Do not omit food photography, product packshots, or promotional media.
- Do not flatten headings, prices, product labels, and metadata into one text scale.
- Do not apply one radius and shadow to category tiles, product cards, panels, and sheets.
- Do not infer a broad illustration language from the isolated onboarding drawing.

</design-context>
