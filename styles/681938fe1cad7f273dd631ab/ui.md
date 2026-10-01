<design-context>
---
version: 1
platform: iOS
name: ozon-design-analysis
description: "A dense image-first marketplace language built from an electric-blue brand frame, white commerce surfaces, compact product metadata, pink promotional signals, and persistent purchase actions."
colors:
  brand-blue: "#005BFF"
  brand-blue-deep: "#2400B8"
  brand-blue-soft: "#EAF2FF"
  sale-pink: "#F91176"
  value-green: "#00A94F"
  rating-yellow: "#FFB800"
  ink: "#111318"
  ink-secondary: "#667085"
  ink-tertiary: "#9AA1AA"
  canvas: "#FFFFFF"
  surface-subtle: "#F3F5F8"
  surface-selected: "#E8F1FF"
  divider: "#E8EBEF"
  success: "#22C55E"
  destructive: "#E63E62"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 32, letterSpacing: -0.4}
  page-title: {fontFamily: "SF Pro Display", fontSize: 20, fontWeight: 700, lineHeight: 24, letterSpacing: -0.2}
  section-title: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 22, letterSpacing: -0.1}
  product-title: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17, letterSpacing: 0}
  price: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 700, lineHeight: 20, letterSpacing: -0.1}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17, letterSpacing: 0}
  metadata: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18, letterSpacing: 0}
spacing:
  unit: 4
  screen-horizontal: 12
  compact-gap: 6
  control-gap: 8
  section-gap: 20
  card-padding: 12
rounded:
  small: 8
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  search-field: {height: 44, fill: "#F3F5F8", foreground: "#667085", radius: 12}
  primary-action: {height: 48, fill: "#005BFF", foreground: "#FFFFFF", radius: 8}
  product-tile: {fill: "#FFFFFF", foreground: "#111318", imageTreatment: "edge-aligned", radius: 8}
  filter-chip: {height: 34, fill: "#F3F5F8", selectedFill: "#005BFF", radius: 999}
  information-panel: {fill: "#F3F5F8", foreground: "#111318", radius: 16, padding: 12}
  bottom-navigation: {height: 58, fill: "#FFFFFF", selected: "#005BFF", unselected: "#9AA1AA"}
---

# Overview

Ozon's visual language is built for fast comparison under high information density. Product photography occupies most of the browsing surface; price, discount, remaining stock, merchant assurance, rating, delivery timing, and purchase action are compressed directly beneath it. Electric blue anchors the brand frame and commitment actions, hot pink marks promotions, and green distinguishes price or benefit conditions tied to Ozon financial products. Operational steps such as identity, checkout, and order details become calmer white-and-gray compositions without losing the same compact hierarchy.

The transferable system is the relationship between image dominance, dense comparison metadata, restrained neutral surfaces, and highly legible actions. The literal marketplace departments, Ozon financial products, delivery network, promotions, destination count, and recommendation content belong to the source product and must not be copied into an unrelated application.

# Non-negotiable visual invariants

- Browsing surfaces give product or campaign imagery substantially more area than descriptive copy.
- Electric blue owns the brand frame, selected navigation, and primary purchase actions.
- Hot pink is reserved for promotion, discount, urgency, and favorite signals rather than ordinary navigation.
- Product lists expose price, condition, rating, and fulfillment metadata without enclosing every item in a raised card.
- White is the dominant reading surface; pale cool gray groups checkout, account, and order information.
- Search remains a visually persistent entry point across discovery and product evaluation.
- Commitment controls remain available at the active decision point while surrounding content can scroll.

# Color and surfaces

The home entry uses a saturated blue-to-violet brand field behind identity, location, search, and the first promotion. Once the user enters search, product detail, cart, checkout, orders, or profile, the canvas becomes white. This change separates discovery branding from operational reading rather than tinting the whole product blue.

Blue is the stable action color. Pink labels carry sale names, discount percentages, low-stock urgency, and favorites. Green is narrower: it identifies Ozon Card pricing, free delivery, positive value, or fulfilled states. Yellow appears in ratings and small reward accents. Black and near-black carry names, amounts, and totals; cool grays carry merchant, date, delivery, and review details.

Pale gray panels group related controls without visible elevation. Section boundaries rely on fill changes and whitespace; shadows are faint and uncommon. An adapted product should preserve these color roles, but it should map them to its own actions and states instead of reproducing Ozon-specific payment or sale programs.

# Typography

The hierarchy is compact and numeric. Page and section titles use bold display text, while product names remain regular and smaller so images and prices lead. Current prices are bold; previous prices and discount percentages are smaller and quieter. Delivery promises, seller assurance, stock, review counts, and legal conditions use short metadata lines.

Use the platform sans as a practical substitute. Keep Cyrillic and numerals clear at small sizes, use tabular figures where amounts update in place, and avoid oversized editorial headlines inside operational screens. Dynamic Type may increase vertical space, but price, product identity, and the associated action must remain grouped.

# Screen composition

Discovery begins with a branded top region, a wide search entry, horizontally scrolling campaign or service modules, and a dense two-column product feed. Search results preserve two columns and place filter and sort actions before the feed. Product detail changes to a single column: large media first, commercial terms next, then description, verification, seller information, and related content. A persistent action stays attached to the current product decision.

Cart, checkout, orders, and profile use full-width sections on white or pale-gray fields. These screens alternate compact rows with larger summary panels. Totals and the next commitment action are separated from editable choices. Success may introduce a large status mark, then resume the product grid with recommendations; this is a commerce-specific continuation pattern, not a requirement for every adapted completion state.

Use a 4-point base, approximately 12-point horizontal insets in dense feeds, 6–8-point gaps inside repeated product metadata, and 16–20-point separation between operational sections. Density is intentional, but unrelated controls must not collapse into one visual block.

# Navigation appearance

The persistent navigation is visually quiet on white, with compact monochrome destinations and one blue selected state. It may remain present through discovery, product, cart, and profile contexts when the task is not modal. Focused identity and checkout steps can replace it with a short top identity row and an explicit close action.

For adaptation, copy the distinction between persistent top-level destinations and focused tasks, not the source's destination count or marketplace-specific sections. Search can remain a repeated control when discovery is genuinely central; it should not be inserted into unrelated detail screens by imitation.

# Components

Search uses a wide pale field with a leading search affordance and optional trailing scan or media action. Filter chips are compact and mostly neutral; an applied filter becomes blue and carries a removal affordance. Product tiles are edge-aligned cells rather than boxed cards. Each cell combines media, favorite, promotional labels, current and previous price, stock or benefit text, title, assurance, rating, review count, delivery promise, and a compact blue action.

Product detail uses a large media stage followed by commercial information and a full-width action. Content sections can use segmented labels for description, specifications, and delivery, plus pale verification and seller panels. Cart rows add selection, quantity adjustment, favorite, removal, seller benefit, and fulfillment grouping without changing the product's identity.

Checkout uses readable selection rows for delivery, date, payment, promo code, personal data, and order summary. The final action states the consequence directly. Account and order surfaces use compact summary tiles and plain action rows; recommendation modules remain image-led and subordinate to the current order or account state.

# Imagery and icons

Product photography is the primary visual material. Result images use consistent white or very light backgrounds and generous containment so items remain comparable. Detail media becomes nearly full width. Campaign banners combine photography or rendered characters with embedded promotional lettering; treat those as supplied marketing assets, not as a reusable illustration grammar.

Icons are compact, familiar, and secondary to content. Conventional actions such as back, search, share, favorite, delete, disclosure, quantity, and close may use a coherent system-symbol set. Merchant marks and product badges remain authored assets. When final product media is unavailable, placeholders must preserve the intended crop, color mass, and image-to-text ratio instead of removing the media region.

# States

Selection is shown locally: checked items, active chips, changed quantities, or the selected payment option update without rebuilding the surrounding screen. Sale and stock state stays beside the affected product. Checkout preserves entered identity and delivery choices while validating or changing payment. Unpaid orders offer recovery actions; active orders update their stage, expected date, and available actions; completed and cancelled orders retain their outcome and next relevant action.

Success uses an explicit status result before the user continues or returns. Empty account sections explain what is missing and offer the next action. Errors and constraints remain attached to the affected row or summary, while the rest of the task stays available.

# iOS adaptation

Build dense feeds with custom lazy grids and rows rather than default `List` cards. Keep safe-area handling explicit for the branded header, persistent navigation, sticky action, keyboard, and focused checkout tasks. Interactive regions remain at least 44 points even when their visible icon or label is smaller. Product tiles should expose image, title, current price, previous price, discount, rating, delivery, and action as coherent VoiceOver groups.

At larger text sizes, allow metadata to wrap and product cells to grow; switch comparison layouts to one column before truncating essential terms. Keep the purchase action reachable without covering the last content. System keyboard and accessibility behavior remain native, while surrounding fields and states follow the documented surface and color roles.

# Anti-generic checklist

- Do not turn every product or order section into an elevated rounded card with a shadow.
- Do not replace the blue, pink, green, and yellow role separation with one undifferentiated accent color.
- Do not hide price conditions, stock, rating, or delivery information behind an extra detail step when comparison depends on it.
- Do not copy Ozon's departments, financial products, delivery labels, tab count, or promotional wording into another product.
- Do not remove image regions while waiting for assets or substitute unrelated decorative illustrations for product media.
- Do not apply default SwiftUI `List`, `Form`, `TabView`, or blue tint without restyling their visible presentation.

</design-context>
