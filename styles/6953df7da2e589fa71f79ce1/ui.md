<design-context>
---
version: 1
platform: iOS
name: Drinkit-design-analysis
description: "An image-led coffee-ordering interface with full-bleed product photography, white and icy-blue surfaces, electric cobalt actions, translucent modifier tiles, horizontal category rails, and tall rounded checkout sheets."
colors:
  canvas: "#F7FAFC"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EAF4F8"
  accent-primary: "#4657DF"
  accent-secondary: "#27A7E8"
  text-primary: "#17181B"
  text-secondary: "#747982"
  divider: "#E4E8EC"
  destructive: "#D94D4D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 600, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 600, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 22
  sheet: 30
  pill: 999
components:
  primary-action: {background: "#4657DF", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 26}
  secondary-action: {background: "#FFFFFF", foreground: "#17181B", minHeight: 48, cornerRadius: 16}
  primary-card: {background: "#FFFFFF", foreground: "#17181B", cornerRadius: 22, padding: 16}
  navigation: {background: "transparent", selected: "#4657DF", unselected: "#747982"}
---

# Overview

Drinkit treats ordering as an image-led product experience. Large coffee and food photography occupies the main visual mass, while clean white or icy-blue transaction surfaces and electric cobalt controls keep the interface operational. The recognizable contrast is between editorial full-bleed media in discovery and dense translucent modifier controls over a darkened product image in customization.

# Non-negotiable visual invariants

- Product photography is the largest visual mass on discovery and detail screens, often occupying roughly the upper half.
- Electric cobalt or ultramarine owns primary actions, selected chips, price controls, map pins, and active toggles.
- White and very pale blue surfaces carry transactional content; they do not become a generic gray grouped form.
- Category navigation is a compact horizontal text rail, not a grid of oversized category cards.
- Product customization keeps the product image visible behind a dark gradient and translucent glass-like modifier tiles.
- Sticky bottom price, cart, and payment actions sit above the home indicator and remain visually dominant.
- Cards and sheets use generous 16–30-point rounding, while small icons and labels stay visually light.
- Product imagery, price, current selection, and nutrition or composition remain clearly separated even on dense builder screens.

# Color and surfaces

White and an almost white cool blue form the default canvas. Cobalt is the dominant interactive accent; a brighter cyan may support location or informational emphasis. Near-black leads product names and prices, while neutral gray carries ingredients, timing, nutrition, and inactive taxonomy.

Discovery imagery introduces warm brown, cream, seasonal red, winter blue, and other campaign colors, but these remain inside photography or promotional frames. Product detail and builder views add a dark photo scrim with translucent gray tiles and crisp white selected tiles. Cart and checkout use tall white sheets over dimmed content. Green confirms accepted or ready status; red remains local to destructive or error meaning. Default iOS blue used inconsistently with the cobalt system would visibly weaken the reference.

# Typography

Use SF Pro as the iOS-safe typeface. Product and status titles sit around 28–34 points with medium or semibold weight rather than extreme black weight. Section and product names are about 18–22 points; body, price, and control labels are 13–16 points; tab, nutrition, and supporting captions are 11–12 points.

Text over photography is sparse and protected by quiet image regions or gradients. Prices are compact and stable; nutrition values and additive prices align consistently. With Dynamic Type, supporting ingredient or nutrition text may wrap before the product title, price, current selection, or sticky action loses priority. Builder tiles can grow vertically or reflow rather than reducing labels below legibility.

# Screen composition

Use approximately 16-point side gutters for surfaced content, 12–16-point internal card spacing, and 20–28 points between major modules. Full-bleed product or campaign imagery may extend through the top safe area; operational content remains within readable insets.

Observed archetypes:

- Image-led discovery: a large photographic hero in the upper half, compact location/profile controls over or above it, a horizontal taxonomy near the hero boundary, and vertically stacked product sections below.
- Product grid: cutout drinks or food arranged in clean rounded cards with concise name, price, and add/disclosure affordance.
- Product detail: full-bleed editorial photo with close and favorite controls, followed by composition, nutrition, size, and a sticky cobalt price action.
- Modifier builder: darkened product photo behind translucent category tiles, selected white tiles, small ingredient imagery, live nutrition totals, and a fixed accumulating-price action.
- Cart and checkout: tall rounded white sheet with compact item rows, quantity steppers, recommendation rail, payment selection, and a broad bottom payment button.
- Order status: pale blue or image-backed status area with one dominant state title, order facts, and compact review or support actions.

Long lists and forms scroll vertically. Sticky actions reserve their own bottom inset rather than covering the final row.

# Navigation appearance

The top treatment is visually light: a small brand or coffee-shop mark and selected location on the left, with a circular profile, close, or contextual control on the right. Horizontal category labels provide selected-state emphasis through cobalt color or weight. Product detail commonly uses circular close and favorite controls directly over imagery.

Sheets and overlays use large rounded top corners, dimmed backgrounds, and a compact close control or drag affordance. Cart, price, or payment controls can become a sticky bottom bar. No generic heavy navigation container should be introduced; these rules define appearance only, not routes or destination architecture.

# Components

Primary actions are cobalt rounded rectangles or pills, about 48–52 points high, with white semibold labels. Pressed state deepens the cobalt; disabled state lowers contrast without changing geometry. Secondary actions use white or pale-blue fills with dark labels.

Product cards prioritize a cutout photograph, then a short name, price, and small chevron or plus. Detail controls pair translucent tiles with miniature ingredient images, additive prices, and a clear check or plus state. Selected modifier tiles become brighter and more opaque than their neighbors.

Cart rows combine product thumbnail, concise specification, current and crossed-out price when present, and a compact quantity stepper. Payment and shop selectors use broad rounded rows with a leading icon or mark, text stack, and trailing disclosure. Promo toggles, review stars, and chips use the same cobalt selected language. Every visible compact icon retains at least a 44-point target.

# Imagery and icons

Product photography is structural, not optional. Drinks and food appear as clean cutouts in catalog cards and as large editorial images on detail screens. Use contain for isolated products and deliberate cover crops for hero photography, preserving the cup, food silhouette, and text-safe region.

Seasonal campaign art may combine real or rendered products with gingerbread, snow, ornaments, gifts, or merchandise. Order/status characters and avatar-like 3D figures are isolated branded moments rather than a stable app-wide illustration system. Do not extrapolate them into every empty or status screen.

Functional icons are compact line or filled utility marks: close, heart, profile, location, cart, plus/minus, trash, dropdown, and payment. Keep weight consistent within one surface and avoid arbitrary mixed SF Symbols. While final imagery is pending, retain representative image blocks with the same crop, scale, lighting weight, and relationship to controls.

# States

Observed states include onboarding, location selection, populated catalog, selected category, product favorite, modifier selection, added-to-cart, quantity changes, promotional toggle, payment-method sheet, checkout, order tracking, review, support contact, and copy-confirmation toast.

Selected modifier and taxonomy states retain cobalt or white-on-glass contrast. Transaction sheets remain white and rounded over a dimmed context. Status screens preserve one dominant state and concise operational details rather than adding decorative copy. No dedicated empty or error screen was confirmed; adaptations must preserve the same photography, surface, and action hierarchy without inventing a new visual language.

# iOS adaptation

Allow full-bleed hero photography beneath the status bar when contrast is protected, while keeping controls within safe-area insets. Use vertical scrolling for catalogs, product detail, builder content, cart, and checkout. Reserve space above the home indicator for sticky price, cart, and payment controls.

Horizontal taxonomy, recommendations, and modifier rails may scroll without shrinking targets. Present keyboard, payment, location, and system permission transitions natively, then restore the same visual context. VoiceOver should announce product, selected options, price, nutrition, and action in a logical sequence. Dynamic Type may increase tile and row height; compact widths should stack secondary facts before reducing the main image or action. The observed system is light-first, with dark treatment confined to photo-backed builder surfaces.

# Anti-generic checklist

- Do not replace the image-led upper half with a generic white navigation header and card stack.
- Do not omit product photography or substitute flat placeholder gradients.
- Do not turn horizontal category labels into oversized rounded tiles.
- Do not remove the dark photo scrim and translucent modifier system from builder-style compositions.
- Do not make checkout as decorative as discovery; preserve white, focused transaction sheets.
- Do not use default blue tint, an unstyled `TabView`, or generic `Form` sections.
- Do not use one uniform radius for hero media, product cards, modifier tiles, and sheets.
- Do not scatter campaign-specific characters or seasonal props across ordinary operational states.

</design-context>
