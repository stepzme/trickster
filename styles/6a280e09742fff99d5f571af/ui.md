<design-context>
---
version: 1
platform: iOS
name: ASOS-design-analysis
description: "A fashion-first white marketplace dominated by edge-to-edge model photography, black editorial and uppercase type, compact two-column product grids, restrained pink sale emphasis, and floating rounded navigation."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F4F4"
  accent-primary: "#111111"
  accent-secondary: "#D41455"
  text-primary: "#111111"
  text-secondary: "#686868"
  divider: "#DDDDDD"
  destructive: "#C70039"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 29, fontWeight: 750, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 700, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 10
  control-gap: 8
rounded:
  control: 8
  card: 10
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#111111", textColor: "#FFFFFF", cornerRadius: 999, minHeight: 48}
  secondary-action: {fill: "#F4F4F4", textColor: "#111111", cornerRadius: 999, minHeight: 44}
  primary-card: {fill: "#FFFFFF", cornerRadius: 10, padding: 10}
  navigation: {fill: "rgba(255,255,255,0.94)", selectedColor: "#111111", unselectedColor: "#777777", cornerRadius: 999}
---

# Overview

ASOS keeps interface chrome almost invisible so fashion photography carries the experience. White surfaces, black editorial and uppercase labels, compact product metadata, two-column grids, and a floating rounded navigation bar establish the system. Hot pink is limited to sale/price emphasis; checkout remains structurally plain and high-contrast.

# Non-negotiable visual invariants

- Model and product photography is the dominant visual mass across home, catalog, and product detail.
- White is the main canvas; black supplies headings, navigation, and primary actions.
- Catalog results use dense two-column image-first product cards with compact metadata.
- Section labels and CTAs use strong uppercase/editorial treatment.
- Pink appears selectively for sale, discount, or promotional price emphasis.
- Bottom navigation is a floating rounded/translucent white bar, not a standard edge-to-edge tab strip.
- Product detail preserves a large image gallery and a sticky/persistent purchase action.

# Color and surfaces

White dominates all major surfaces. Black provides primary type, active navigation, and main actions; light gray separates search, filter rows, fields, and sheets. Pink is an exceptional sale/promotion accent rather than a general interaction tint. Green may appear in purchase/availability context, while destructive/error uses darker pink-red. Dividers are thin gray and shadows minimal. Default blue, colored card stacks, or decorative gradients would break the editorial fashion field.

# Typography

Use SF Pro as an iOS-safe substitute for the condensed brand/editorial face, with uppercase, bold weight, and controlled tracking on section labels and actions. Product names, brand, price, color, and status use compact tiers beneath photography. Avoid similar sizes for every text role: editorial headings lead, price/brand follow, product metadata recedes. Dynamic Type expands card height and checkout rows; it must not shrink text over images or detach price/status from the item.

# Screen composition

Onboarding uses stark black/white choice screens and system prompts. Home/catalog screens place search and category/promo bands above dense photo grids. Product listing uses two columns with tall model images and short text below. Product detail begins with a large edge-to-edge or near-edge gallery, followed by name/price, swatches/size, details, and a persistent purchase action. Filter/sort uses full-height or bottom sheets with a sticky “view items” action. Cart and checkout become one-column rows and payment sections. Insets are compact, typically 12–16 points.

Visible archetypes include onboarding/registration; home/category; two-column catalog; product detail; filter/sort; search including empty/recent; saved/out-of-stock; cart; and checkout/payment.

# Navigation appearance

The main navigation is a floating rounded/translucent white bar with compact black icons/labels and clear selected state. Top bars are minimal white with ordinary-scale back, search, close, and bag/favorite controls. Sheets use white surfaces, broad top rounding, and sticky bottom actions. System permission or web sign-in dialogs may remain native, while app-owned bars preserve the monochrome styling.

# Components

Primary actions are black pills with white uppercase labels; purchase actions may use a distinct green state where observed. Product cards are minimally framed: tall photo, brand/title, price/sale status, and favorite. Search is a broad pale pill. Category/promo actions are rectangular black/white bands. Filters use plain rows, chips, radios, and a sticky black action. Color choices use real swatches; size selectors use compact rows/chips. Checkout uses clean white payment rows and Apple Pay/system surfaces. Disabled buy states preserve geometry and lower contrast.

# Imagery and icons

Real model/product photography and campaign banners are compositionally required and cannot be omitted. Use consistent tall fashion crops in grids and larger gallery crops that preserve garment shape and styling. Category thumbnails and product images are content assets, not illustration. No independently repeatable authored illustration system was observed. Icons are restrained utility symbols and remain secondary to photography.

# States

Observed states include splash/category choice, notification and web sign-in prompts, keyboard input, recent/empty search, selected filters with sticky result count/action, saved and out-of-stock products, cart, Apple Pay/payment, and disabled buy action. Black/white structure remains stable; pink marks sale, gray marks disabled/inactive, and system sheets stay visually restrained.

# iOS adaptation

Keep white safe areas clean and the floating navigation above the home indicator. Use vertical scrolling for grids/details/checkout, horizontal swatch/media rails where observed, and keyboard-aware search/registration. Maintain 44-point targets for small favorite, swatch, size, filter, and tab controls. VoiceOver order should read photo description → brand/product → price/status → options → action. At compact widths, keep two columns only when price/name remain legible; otherwise use one column. Dynamic Type expands rows/cards. Preserve photography crops across aspect ratios.

# Anti-generic checklist

- Do not replace photography with illustrations, SF Symbols, or empty placeholders.
- Do not introduce default blue into the monochrome/pink system.
- Do not use an edge-to-edge unstyled `TabView` instead of the floating navigation.
- Do not turn the photo grid into large shadowed cards.
- Do not flatten editorial headings, brand, product, price, and metadata into one scale.
- Do not use default `Form`, filter, swatch, or purchase-button styling.
- Do not invent an illustration language unsupported by the screens.

</design-context>
