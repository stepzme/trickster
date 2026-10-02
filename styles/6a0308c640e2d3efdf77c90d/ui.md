<design-context>
---
version: 1
platform: iOS
name: 585-Gold-design-analysis
description: "A promotion-heavy jewelry storefront combining red-orange campaign fields, black contrast, white commerce surfaces, bold price hierarchy, polished jewelry photography, two-column product grids, and a five-item bottom bar."
colors:
  canvas: "#F7F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EEF1"
  accent-primary: "#FF432D"
  accent-secondary: "#111113"
  text-primary: "#151519"
  text-secondary: "#77777F"
  divider: "#E3E0E4"
  destructive: "#D93C43"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 43}
  title: {fontFamily: "SF Pro Display", fontSize: 29, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "red-orange", shape: "pill", text: "white semibold"}
  secondary-action: {fill: "white or pale grey", shape: "pill", text: "near-black"}
  primary-card: {fill: "white", shape: "rounded product card", imagery: "contained jewelry photo"}
  navigation: {fill: "white bottom bar", active: "red-orange", inactive: "grey outline"}
---

# Overview

585 Gold is a dense promotional storefront whose identity comes from large red-orange and black campaign masses surrounding clean jewelry photography. Working screens return to a white or pale grey commerce canvas with compact product cards, explicit price reductions, and a persistent five-item bottom bar.

# Non-negotiable visual invariants

- Red-orange is the dominant conversion and selected-state accent; black supplies premium campaign contrast.
- Jewelry photography stays clean, large, and visually isolated on white.
- Current price is stronger than product copy, with old price and discount adjacent.
- Browse screens use dense two-column product grids; detail screens give the product image most of the upper viewport.
- Campaign cards are materially larger and more saturated than ordinary product cards.
- Bottom navigation keeps five outline icons with red-orange active state.
- Sticky purchase actions remain visible above the lower safe area.

# Color and surfaces

Use a soft white-grey browse canvas and pure white product surfaces. Red-orange fills primary buttons, active navigation, badges, and campaign fields; near black provides high-contrast promotional blocks and primary text. Muted grey carries old prices and metadata. Gold is a small contextual accent, not the base palette. Default blue, beige luxury styling, or red across every surface would break the reference.

# Typography

Campaign claims use heavy bold display sans; headings are bold; product names and metadata are compact. Current prices use strong numeric weight, while old prices are smaller, grey, and often struck through. Use SF Pro Display/Text, mapping campaigns to large title, sections to title 3, product names to callout, and metadata to caption. Dynamic Type may increase card height and stack price lines before reducing image or action prominence.

# Screen composition

Onboarding uses a full-screen red/black gradient with a centered authored map-like visual. Home stacks wide campaign carousels and shortcut pills. Catalog and search use a two-column grid with tight gutters; product detail uses a large contained jewelry hero followed by price and a sticky purchase bar. Cart and profile return to single-column groups, including loyalty or barcode cards. Use 16-point outer gutters and tighter 8–12-point grid gaps.

# Navigation appearance

The bottom bar is white with five compact outline icons; active state is red-orange and may carry a count badge. Top bars use compact back, search, favorite, and cart controls, sometimes inside a branded capsule. Sheets and fixed purchase bars are white with soft separation. Appearance only; destinations come from product planning.

# Components

Primary actions are full-width red-orange pills with white semibold labels. Product cards contain a high-key jewelry photo, badge/rating, compact name, old/current price, discount, heart, and bag action. Search is a pale rounded field; filters and category shortcuts are pills. Campaign cards combine saturated backgrounds, bold type, and product imagery. Disabled states use pale grey; selected/favorite states use red-orange.

# Imagery and icons

Polished jewelry renders and photos dominate, usually fully contained so stones, clasps, and silhouettes remain visible. Promotional banners may use stylized gradients and product composites. The onboarding artwork is isolated brand art, not evidence of a stable independent illustration system. Do not omit compositionally important product imagery; temporary raster assets must preserve subject, crop, scale, and white space. Icons are restrained line symbols.

# States

Observed states include onboarding, promotion carousel, selected category/filter, search, discounted product cards, favorite and cart states, product detail, cart, and loyalty profile. Hit, rating, discount, and count badges stay compact and explicit. Core white surfaces, red-orange action language, and price hierarchy remain constant.

# iOS adaptation

Extend campaign or browse canvas through safe areas. Use vertical scrolling for home, grid, detail, cart, and profile; reserve bottom inset for navigation and sticky purchase bars. On narrow phones keep two columns while labels fit, falling to one only when price hierarchy becomes unreadable. Targets are at least 44 points. VoiceOver reads product, current price, old price/discount, then actions. Dynamic Type expands cards without cropping jewelry.

# Anti-generic checklist

- Do not replace campaign masses with generic pastel cards.
- Do not use default blue, unstyled `TabView`, or `Form`.
- Do not crop jewelry silhouettes or replace products with symbols.
- Do not hide discount math or weaken the current price.
- Do not give campaigns and ordinary product cards equal visual weight.
- Do not apply one radius to every surface.
- Do not add decorative copy that repeats price, rating, or promotion state.

</design-context>
