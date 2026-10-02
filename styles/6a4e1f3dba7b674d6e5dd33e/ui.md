<design-context>
---
version: 1
platform: iOS
name: Magnum-GO-design-analysis
description: "A white-first grocery marketplace defined by saturated magenta actions and prices, bold compact headings, dense product photography, pale search and form surfaces, rounded sheets, and a magenta-selected bottom bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F5"
  accent-primary: "#D41473"
  accent-secondary: "#F3A62F"
  text-primary: "#18181B"
  text-secondary: "#74747B"
  divider: "#E1E1E5"
  destructive: "#D9414A"
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
  card-padding: 12
  control-gap: 8
rounded:
  control: 14
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "surface-secondary", text: "text-primary", shape: "rounded rectangle"}
  primary-card: {fill: "surface-primary", imagery: "contained product photo", density: "high"}
  navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-secondary"}
---

# Overview

Magnum GO is a dense grocery interface in which white gives merchandise room, saturated magenta makes actions and prices immediately visible, and bold compact headings organize product-heavy screens. Pale-gray search and form surfaces, rounded top sheets, and thin outline navigation keep the system functional rather than decorative.

# Non-negotiable visual invariants

- White remains the dominant commerce surface across browsing, detail, cart, and profile screens.
- Saturated magenta consistently marks primary actions, selected navigation, active controls, and important price emphasis.
- Real product photography occupies most catalog and product-card area.
- Browsing stays dense through multi-column products, compact labels, badges, and horizontal category content.
- Search, form, and inactive controls use pale gray rather than elevated decorative cards.
- Modal decisions appear in white sheets with rounded top corners over a dimmed backdrop.
- Bottom navigation uses thin outline icons and a clear magenta selected state.

# Color and surfaces

White is both canvas and principal product surface. Pale cool gray separates search, form groups, inactive controls, and list backgrounds. Magenta is the dominant app-owned accent for CTAs, prices, selection, and quantity controls; warm orange or red may appear in sale badges but does not compete with magenta. Near-black carries product names and totals, gray carries units and fulfillment details, and thin light-gray separators organize lists. Default iOS blue would visibly break the established purchase hierarchy.

# Typography

Use SF Pro Display for 28–34 point bold page titles and SF Pro Text for dense catalog information. Section headings are around 20 point bold; product names, price controls, and actions use 14 point regular or semibold; ratings, old prices, unit information, and navigation use 11–13 point captions. Prices rely on magenta color and weight. Dynamic Type should expand rows and cards, allow supporting data to wrap, and reduce grid columns before it erases the distinction between title, price, and metadata.

# Screen composition

Launch and address states use a simple single-column structure below the safe area. Home begins with search or location context, then promotional content, horizontal categories, and dense product rails. Catalog and search use tight multi-column grids with about 16-point outer insets and 8–12 point gaps. Product detail puts a large contained image above price and information, followed by a sticky purchase region. Cart and checkout use single-column rows and grouped forms with a persistent magenta action. Profile and settings use compact list rows with small line icons.

# Navigation appearance

The bottom bar is white with compact outline icon-label pairs; magenta marks the selected destination and gray recedes the others. Detail and focused forms use small black back or close controls. Categories and fulfillment choices use compact tabs or chips with magenta selection. App-owned sheets have a pronounced top radius, a small close control, and a dimmed background; native permission alerts retain their iOS appearance.

# Components

Primary actions are magenta rounded rectangles with white semibold labels and at least 44-point height. Secondary actions and inputs use pale-gray fill or fine neutral borders. Search is a broad pale rounded field. Product cards combine a consistent photo box, title, current and old price, sale badge, favorite, and cart or quantity stepper without ornamental chrome. Checkout rows use compact labels, dividers, and explicit values. Pressed magenta controls deepen slightly; disabled controls use gray fill and text rather than opacity alone.

# Imagery and icons

Product packshots, grocery photography, promotional banners, and category thumbnails are indispensable. Contain packaged goods in consistent image areas and crop food scenes more assertively. Logos, badges, and promo graphics remain content assets; they do not establish a separate illustration system. Icons are small, thin, and functional, usually gray or black until the active state turns magenta. Do not replace merchandise or banners with arbitrary symbols.

# States

Observed states include first launch, native notification permission, active address/search with keyboard, populated catalog, product detail, add and quantity states, cart, checkout, payment methods, profile, language, and support. The white base, magenta commitment color, compact type, and product-media hierarchy remain stable. Errors attach to the affected field or payment row; modal states preserve the rounded white sheet language.

# iOS adaptation

Respect top and bottom safe areas and keep persistent purchase controls above the home indicator. Use vertical scroll containers for home, catalog, detail, cart, checkout, and profile; keep the focused input visible above the keyboard. Preserve native system permissions while styling app-owned sheets. Search, favorite, cart, stepper, back, and navigation require 44-point hit areas. VoiceOver should announce product identity and current price before secondary metadata and action. At large Dynamic Type or compact widths, reduce grid columns rather than clipping product data. The observed experience is light-first; do not auto-generate a dark version.

# Anti-generic checklist

- Do not replace magenta action and price emphasis with default iOS blue.
- Do not turn dense catalog screens into spacious generic card stacks.
- Do not omit real product photography or promotional media.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default search control.
- Do not flatten heading, price, product, and unit information into one text hierarchy.
- Do not apply one radius or shadow to product cards, inputs, controls, and sheets.
- Do not invent illustrations from category thumbnails, badges, or promotional graphics.

</design-context>
