<design-context>
---
version: 1
platform: iOS
name: METRO-design-analysis
description: "A high-density grocery interface on white and cool-gray surfaces, using deep navy actions, yellow brand markers, red price emphasis, compact system type, floating navigation, and tightly controlled product photography."
colors:
  canvas: "#F5F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF0F3"
  accent-primary: "#123A7A"
  accent-secondary: "#FFD429"
  text-primary: "#17191D"
  text-secondary: "#737780"
  divider: "#E1E4E8"
  destructive: "#D93636"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 37}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle or pill"}
  secondary-action: {fill: "surface-secondary", text: "text-primary", shape: "compact pill"}
  primary-card: {fill: "surface-primary", imagery: "contained product packshot", density: "high"}
  navigation: {fill: "surface-primary", selected: "accent-primary with yellow marker", unselected: "text-secondary"}
---

# Overview

METRO is a dense grocery storefront in which product packshots dominate a white shopping surface, deep navy controls anchor commitment, yellow supplies recognisable brand selection, and red makes discounts and current prices immediately scannable. Cool-gray grouping and a floating rounded navigation dock distinguish the app from a default catalog grid.

# Non-negotiable visual invariants

- Product packshots occupy consistent image boxes and dominate catalog and detail cards.
- Deep navy is the primary interaction color for cart, checkout, selected controls, and focused fields.
- Yellow is a selective brand and loyalty marker, not the default color for every action.
- Current prices and discounts use red emphasis while product identity remains near-black.
- Browsing layouts remain information-dense through horizontal rails and two-column product grids.
- Bottom navigation reads as a rounded floating white dock with a distinct selected treatment.
- Checkout and fulfillment shift to calmer grouped rows without abandoning the navy/yellow/red hierarchy.

# Color and surfaces

A cool pale-gray canvas supports white catalog cards, search, checkout groups, and sheets. Deep navy is the dominant app-owned action and selection color. Bright yellow appears in the brand mark, loyalty or attention moments, and selected navigation detail. Red is reserved for discount badges and current price emphasis; green may confirm availability or success. Near-black carries names and totals, muted gray carries unit price and fulfillment details, and light dividers organize dense lists. Generic bright-blue tint or yellow used for every button would visibly break the reference.

# Typography

Use SF Pro Display for 26–32 point bold screen titles and SF Pro Text for dense commerce information. Section headings are around 19 point bold; product names, prices, and controls use 14 point regular or semibold; unit data, ratings, discounts, and navigation use 11–13 point text. Price numerals are weighty and often red; supporting unit or old-price data is smaller and gray. At Dynamic Type sizes, allow rows and cards to grow and metadata to wrap, preserving clear separation among price, product name, and fulfillment information.

# Screen composition

The home surface begins with a compact safe-area header and search field, then moves into promotional or category modules and horizontal product rails. Catalog and search results use dense multi-column tiles with approximately 12-point side insets and 8-point gaps. Detail places a large contained packshot in the upper region, followed by price and product information in a single scrolling column. Cart and checkout stack white grouped sections for items, fulfillment, substitutions, payment, and totals, keeping a navy action anchored above the bottom safe area. Modal choices use top-rounded sheets; navigation floats slightly above the lower edge.

# Navigation appearance

The bottom navigation is a white rounded dock with soft separation from the canvas. Compact icon-label pairs use muted gray when inactive; the selected destination combines navy with a recognisable yellow brand marker. Top bars use small back, search, scan, favorite, or cart controls rather than a large branded header. Filters, categories, and delivery modes use compact chips or segmented selection in navy. Sheets keep a pronounced top radius over a subdued scrim.

# Components

Primary actions are deep-navy rounded rectangles or pills with white semibold labels. Secondary actions and filters use pale-gray fill with dark text and navy selection. Search is a white rounded field with subtle elevation and compact scan/search controls. Product cards combine a consistent contained image, discount, favorite, current and old price, unit, rating, title, and navy cart action with very little unused space. Category tiles use photo or icon above a concise label. Checkout rows are white, clearly grouped, and use navy focus. Disabled controls use gray fill and text; pressed navy controls deepen rather than switching hue.

# Imagery and icons

Product photography and package packshots are compositionally essential and cannot be omitted. Contain packaging so labels and object boundaries remain visible, while food scenes and promotional banners may use aspect-fill crops. Maintain a consistent image region across product tiles so price rows align. Category and functional icons are restrained line or filled symbols, subordinate to products. Promotional graphics and category artwork are content assets, not a coherent independent illustration system and should not be extrapolated into new character scenes.

# States

Observed states include native permission prompts, selected filters and categories, search with keyboard, favorite and add/cart controls, discounted pricing, populated cart, checkout choices, and profile or order content. The product image box, navy commitment color, yellow brand cue, red price hierarchy, and cool surface grouping remain constant. Errors attach to fulfillment or payment decisions; disabled actions recede to gray while keeping their labels explicit.

# iOS adaptation

Respect safe areas for status content, the floating dock, and sticky checkout controls. Catalog, detail, cart, and checkout require vertical scrolling; horizontal rails should retain stable item sizes. Keep the focused search or checkout field visible above the keyboard. System permissions remain native; app-owned choices use the documented rounded sheet and control styling. Maintain 44-point targets for search, scan, favorite, cart, steppers, chips, and navigation. VoiceOver should announce image description, product identity, price/unit context, then action. At large Dynamic Type or very narrow widths, move grids from two columns to one rather than cropping labels or packshots. Treat the observed UI as light-first rather than automatically inverting it.

# Anti-generic checklist

- Do not replace the dense product grid with a spacious stack of generic cards.
- Do not tint primary actions default iOS blue or make yellow the universal action color.
- Do not omit or inconsistently crop product packshots.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default search bar.
- Do not hide red price and discount context behind neutral typography.
- Do not apply the same large radius or shadow to tiles, controls, sheets, and the navigation dock.
- Do not invent illustrations from isolated promo graphics or category icons.

</design-context>
