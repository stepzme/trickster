<design-context>
---
version: 1
platform: iOS
name: Kuper-design-analysis
description: "A dense multi-store delivery marketplace on white and cool-gray surfaces, anchored by near-black pill controls, restrained green status accents, rounded commerce modules, and abundant product and merchant photography."
colors:
  canvas: "#F6F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFEEF1"
  accent-primary: "#181619"
  accent-secondary: "#00D978"
  text-primary: "#19171A"
  text-secondary: "#747176"
  divider: "#E5E3E7"
  destructive: "#E04444"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
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
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "wide pill"}
  secondary-action: {fill: "surface-primary", text: "text-primary", shape: "pill"}
  primary-card: {fill: "surface-primary", imagery: "merchant or product media", shape: "rounded rectangle"}
  navigation: {fill: "surface-primary", selected: "text-primary", unselected: "text-secondary"}
---

# Overview

Kuper is a dense delivery marketplace whose structure comes from cool-gray grouping, white rounded modules, near-black action pills, and a continuous mix of merchant branding, product packshots, and promotional photography. Green appears as a precise status or brand accent rather than a large background. The interface should feel operational and merchandise-rich, not like a generic lifestyle dashboard.

# Non-negotiable visual invariants

- White rounded commerce modules sit on a cool, very light gray canvas rather than on a pure-white undifferentiated page.
- Near-black wide pills carry primary commitment and sticky cart or checkout actions.
- Product packshots, store logos, and merchant banners occupy a substantial share of browsing screens and cannot be replaced by symbols.
- Discovery remains dense through horizontal rails, compact tiles, and multi-column product layouts.
- Green is a small, high-contrast brand or positive-status accent, not the dominant surface color.
- Sheets and anchored bottom actions use generous rounding while product tiles use tighter geometry.
- Typography stays compact and utilitarian below clear, bold section headings.

# Color and surfaces

The base alternates between a cool pale-gray canvas and white cards, fields, and sheets. Near-black is used for primary buttons, selected emphasis, and strong text. Bright green is limited to positive status, brand moments, or a focused action accent. Medium gray supports metadata and inactive navigation; subtle gray dividers or spacing separate rows. Promotional banners may introduce external merchant colors, but app-owned structure remains neutral. Default system blue or a large green background would visibly distort the observed hierarchy.

# Typography

Use SF Pro Display for 28–34 point bold titles and SF Pro Text for section, product, price, and control copy. Section titles use approximately 20 point bold; product names and action labels cluster around 14–15 points; delivery data, ratings, and tab labels fall to 11–13 points. Price and total numerals receive weight rather than oversized scale. Dynamic Type should expand card height and allow metadata to wrap, while preserving the distinction between section heading, product identity, and supporting delivery information.

# Screen composition

Home and store surfaces begin with a compact safe-area header or search control, then stack large promo banners, horizontally scrolling merchant or category rails, and dense product modules. Typical horizontal inset is about 16 points with 8–12 point gaps between tiles. Product browsing uses two columns where space permits; merchant and offer rows may scroll horizontally. Detail places the product image in the upper region and moves price, variants, and purchase controls below it. Cart and checkout are calmer single-column stacks of rounded white sections with a persistent dark action above the bottom safe area. Modal decisions use a top-rounded white sheet over a muted scrim.

# Navigation appearance

Navigation is visually conventional but custom-styled: compact top search and back/close controls, a white bottom tab bar, and small icon-label pairs with a dark selected state. Within store contexts, compact tabs or segmented delivery/pickup controls use filled or underlined selection. Persistent cart actions appear as floating or anchored black pills and must remain distinct from the navigation bar. Sheets have a pronounced top radius and restrained drag affordance.

# Components

Primary actions are near-black pills with white semibold labels, commonly full width. Secondary buttons are white or pale-gray pills with dark labels. Search is a wide rounded field with subdued placeholder and compact leading/trailing controls. Merchant cards combine brand mark, delivery metadata, and a photographic or colored banner. Product cards keep a consistent image box above concise name, price, offer information, and add/stepper control. Promo banners are broad, media-rich rectangles. Segmented delivery controls, chips, favorites, ratings, and steppers are compact in appearance but maintain 44-point hit regions. Disabled and blocked states use muted gray surfaces plus legible labels.

# Imagery and icons

Product packshots, food photography, merchant logos, and promotional campaign assets are essential to the visual rhythm. Contain packaged products within consistent image boxes; crop lifestyle and food banners more assertively. Do not manufacture a common illustration style from unrelated merchant creatives. Icons are functional, simple, and mostly monochrome; green may highlight a positive state and near-black indicates primary selection. Photography and external brand assets should never be replaced with arbitrary SF Symbols or empty colored tiles.

# States

Observed states include native permissions, sign-in fields, delivery versus pickup selection, favorite and selected controls, discounted prices, product add versus quantity stepper, a populated cart, and an onboarding or education overlay. White/cool-gray grouping, dark commitment actions, compact type, and media density remain constant across these states. Disabled controls recede to gray but retain explicit labels; positive availability or confirmation can use the small green accent.

# iOS adaptation

Respect status and home-indicator safe areas, keep sticky cart and checkout pills above the bottom inset, and use scroll containers for discovery, store, product, and checkout content. The keyboard must reveal the active field and next action. Preserve app-owned top-rounded sheets while leaving system permission dialogs native. Back, close, favorite, tabs, steppers, and media controls need 44-point hit targets even when their visible glyphs are smaller. VoiceOver order should announce merchant or product identity, price and delivery state, then action. At large Dynamic Type, grow tiles or reduce product grids to one column rather than clipping commerce data. The observed presentation is light-first; do not apply automatic dark inversion.

# Anti-generic checklist

- Do not turn the interface into a uniform stack of generic white cards.
- Do not replace the near-black action hierarchy with default iOS blue.
- Do not omit merchant banners, product packshots, and promo imagery.
- Do not use an unstyled `TabView`, `Form`, `List`, or default segmented control.
- Do not make bright green the background of every primary action or surface.
- Do not apply the same radius and shadow to search, product tiles, sheets, and sticky actions.
- Do not invent a reusable illustration language from isolated promotional graphics.

</design-context>
