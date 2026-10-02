<design-context>
---
version: 1
platform: iOS
name: M-Video-design-analysis
description: "A dense white electronics marketplace driven by vivid red commerce actions, large product photography, compact black technical type, light-gray grouping, and persistent purchase/navigation controls."
colors:
  canvas: "#F6F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEEEF1"
  accent-primary: "#F20D1B"
  accent-secondary: "#171719"
  text-primary: "#171719"
  text-secondary: "#77777D"
  divider: "#E4E4E8"
  destructive: "#C90012"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "#F20D1B", textColor: "#FFFFFF", cornerRadius: 10, minHeight: 48}
  secondary-action: {fill: "#FFFFFF", textColor: "#F20D1B", borderColor: "#F20D1B", cornerRadius: 10, minHeight: 44}
  primary-card: {fill: "#FFFFFF", cornerRadius: 14, padding: 12}
  navigation: {fill: "#FFFFFF", selectedColor: "#F20D1B", unselectedColor: "#77777D"}
---

# Overview

M.Video is a promotion-heavy electronics storefront whose identity comes from white retail density, saturated red actions, black prices/specifications, and large product photography. Cards, forms, and transaction states are practical and compact; brand red consistently marks selection, cart, loyalty, and commitment.

# Non-negotiable visual invariants

- White and very light gray form the dominant commerce canvas.
- Saturated red is the stable selected, cart, loyalty, and primary-action color.
- Product photography remains the largest element in product cards and detail heroes.
- Price, discount, cashback, rating, availability, and fulfillment facts stay visually adjacent.
- Search, category, and product layouts remain dense, using light dividers and minimal shadow.
- Sticky purchase/checkout controls keep the red action close to price and totals.
- Bottom navigation is a white five-item bar with a clear red selected state.

# Color and surfaces

The main field alternates white surfaces and faint cool-gray grouping. Red appears in large buttons, selected tabs, badges, cart controls, loyalty cards, and launch branding. Near-black carries prices, titles, and technical facts; medium gray carries delivery, service, unit, and helper metadata. Dividers are pale and thin. Green is reserved for positive availability or confirmation, while destructive/error red is differentiated by context and darker tone. Default blue and heavily shadowed card stacks would break the observed retail identity.

# Typography

Use SF Pro. Prices and major headings are bold; product names, service choices, and totals use semibold; ratings, cashback, fulfillment, and specification labels use compact body/caption styles. Hierarchy must remain readable despite density: current price leads, old price/discount and conditions follow, then technical metadata. At Dynamic Type sizes, expand cards and stack secondary facts rather than shrinking text or separating price from the purchase action.

# Screen composition

Top safe areas lead into minimal white headers, a rounded search field, and sometimes horizontal promotional/story strips. Catalog and recommendations use dense two-column product grids or horizontal carousels. Product detail is led by a large contained product image, then price, bonuses, options, services, and fulfillment, with a sticky red buy bar near the bottom. Cart and delivery checkout become one-column grouped sections with totals and a persistent action. Profile uses white rows and a large red loyalty card. Insets are generally 16 points and vertical gaps economical.

Visible archetypes include red/white launch and login; catalog/search grids; photo-led product detail; delivery checkout with forms and selection rows; and profile/loyalty lists.

# Navigation appearance

The bottom bar is flat white with compact icons/labels and red selected emphasis. Top bars use ordinary-scale back, close, chat, and notification controls on white. Bottom sheets are white with broad rounded top corners and a dim scrim. Product detail and checkout can pin a red action bar above the home indicator. Native behavior is acceptable, but tint, spacing, and backgrounds must be explicitly styled.

# Components

Primary actions are full-width red rounded rectangles with white semibold labels. Secondary actions are white/red outline or pale-gray controls. Product cards combine contained photography, badges, rating, title, dense price cluster, cashback/service notes, and cart action. Search fields are pale rounded rectangles. Category controls, radio rows, toggles, delivery choices, quantity steppers, and accordions use compact geometry and red selected states. Forms use explicit labels and white rows rather than default `Form`. Disabled actions preserve shape and become pale gray/red.

# Imagery and icons

Product photography is compositionally required and cannot be omitted. Use contain scaling for electronics and packaged products so silhouettes and screens remain visible; promotional banners may use aspect-fill room/product scenes with branded overlays. Marketing art, loyalty treatment, and small badges are campaign assets, not evidence of an independent illustration system. Icons are compact, functional, and secondary to product evidence.

# States

Observed states include selected and disabled delivery choices, quantity changes, toggles, radio selections, keyboard-active forms, incomplete/validation-like checkout, populated product/cart content, and profile/loyalty modules. Red remains the action/selection color; pale gray communicates disabled/inactive; green appears only for positive availability or confirmation. Sticky actions and dense evidence persist across states.

# iOS adaptation

Keep white headers and tab bars within safe areas and sticky buy/checkout bars above the home indicator. Use vertical scrolling for catalog/detail/checkout, horizontal scrolling for stories and product rails, and keyboard-aware insets for forms. Maintain 44-point targets for compact chips, steppers, tabs, radio rows, and cart controls. VoiceOver order should follow product image → title → price/discount → rating/status → fulfillment → action. At compact widths, preserve two-column grids only when price/title remain legible; otherwise use one-column rows. Dynamic Type expands rows and groups. The observed light appearance is primary.

# Anti-generic checklist

- Do not replace brand red with default iOS blue.
- Do not omit product photography or use SF Symbols as product placeholders.
- Do not turn the dense catalog into sparse oversized shadow cards.
- Do not flatten price, discount, cashback, rating, and availability into one text level.
- Do not use an unstyled `TabView`, `Form`, search field, or sticky action bar.
- Do not invent a standalone illustration language from promotional banners.
- Do not apply one corner radius to grid cards, buttons, sheets, and compact rows.

</design-context>
