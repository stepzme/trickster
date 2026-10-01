<design-context>
---
version: 1
platform: iOS
name: Pyaterochka-design-analysis
description: "A high-density grocery interface with a white product canvas, red purchase and navigation accents, green loyalty worlds, pastel category matrices, direct product photography, and compact checkout summaries."
colors:
  brand-red: "#ED1C24"
  brand-red-pressed: "#CF151C"
  brand-green: "#12933A"
  brand-green-bright: "#42B84F"
  lime-action: "#CFFF38"
  discount-yellow: "#FFD426"
  text-primary: "#1F2022"
  text-secondary: "#6F7277"
  text-tertiary: "#A4A7AB"
  canvas: "#FFFFFF"
  surface-soft: "#F5F6F7"
  surface-muted: "#ECEFF1"
  divider: "#E5E7E9"
  success: "#55A945"
  disabled: "#F2A4A7"
  overlay: "#000000"
typography:
  campaign: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 34}
  price-large: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 32}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  product: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 19}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
spacing:
  screen-horizontal: 12
  section-gap: 20
  grid-gap: 8
  card-padding: 12
  control-gap: 8
rounded:
  compact: 8
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {height: 54, fill: "#ED1C24", foreground: "#FFFFFF", radius: 14}
  secondary-action: {height: 44, fill: "#FFFFFF", foreground: "#1F2022", radius: 999}
  search-field: {height: 44, fill: "#F5F6F7", foreground: "#1F2022", radius: 12}
  category-tile: {minHeight: 104, fill: "#ECEFF1", foreground: "#1F2022", radius: 14, padding: 10}
  checkout-group: {minHeight: 60, fill: "#FFFFFF", foreground: "#1F2022", radius: 16, padding: 12}
  bottom-navigation: {height: 58, fill: "#FFFFFF", selected: "#ED1C24", unselected: "#92969A"}
---

# Overview

Pyaterochka separates shopping clarity from promotional energy. Catalog, search, product detail, cart, and order tracking sit on a flat white canvas with compact typography and direct product photography. Red forms the transaction spine through selected navigation, cart controls, and final actions. Green becomes a much larger color field for loyalty, coupons, and games, where mascots and prize objects can dominate the screen.

# Non-negotiable visual invariants

- Catalog and checkout use a flat white canvas with minimal shadows; products, prices, quantity, and totals remain the strongest reading targets.
- Red marks purchase commitment, active primary navigation, and selected controls; it is not used as a background for the whole catalog.
- Green expands into full campaign fields for loyalty, coupons, and games while transactional shopping returns to white.
- Category discovery uses dense three-column pastel tiles with contained product cutouts, not a monochrome icon list.
- Product detail gives the isolated pack shot a large upper region and anchors the current price with a yellow highlight.
- Cart and checkout preserve an explicit running breakdown for goods, delivery, packing, savings, and total near the final action.
- Mascots and prize objects are authored campaign assets and never substitute for the actual product image or price.

# Color and surfaces

White is the dominant commerce surface. Product rows usually have no enclosing card; alignment, spacing, and thin separators establish structure. Search, address, replacement preferences, and checkout choices use pale-gray grouped fields. A very soft gray page background may appear around the cart, but the total and final action remain on a clear reading surface.

Red is a concentrated interaction color: active tab, add-to-cart, checkout, radio selection, promotion label, and progress emphasis. Yellow sits directly behind sale prices or discounts. Green marks brand campaigns, savings, confirmed order state, and loyalty actions. Category tiles use local pastel families—mint, peach, pink, lilac, sky, and butter yellow—so the product cutouts remain distinguishable.

# Typography

Use SF Pro Display for 24–30 point page, campaign, and large-price text; use SF Pro Text for 18-point section headings, 15-point product names, 14-point body, 12-point labels, and 10-point metadata. Prices need tabular numerals, compact superscript-like kopecks where appropriate, and clear separation between current and struck-through old values.

Product names may wrap to two or three lines without pushing the price away from the item. Checkout rows use regular-weight labels and right-aligned values; the final total increases to bold display weight. Promotion headings may become heavy and multiline, but routine nutrition, delivery, payment, and replacement text should remain compact and neutral.

# Screen composition

Use approximately 12-point screen insets and 8-point grid gaps. Catalog discovery keeps mode and address at the top, followed by search, a broad campaign banner, three compact shortcuts, horizontal promotional tiles, and tightly stacked category sections. Category matrices typically use three equal columns, each with a short label in the upper area and a contained product cutout below.

Search changes to a focused top field with Back and scan entry, then shows suggestions or grouped results. Product results use three narrow columns with image, rating, name, size, and price. Product detail reserves much of the upper viewport for one centered pack shot, then places discount, rating, title, quantity, current and old price, and a wide cart action before factual tabs and recommendations.

Cart uses one dense vertical column. Address and an occasional campaign banner precede product rows; replacement choices, promo code, payment method, cost breakdown, savings, total, and final action follow. Order detail keeps status and delivery information first, then an optional add-to-order action and the item list. Promotional and game screens may invert this restraint with a full green field, large mascot, and prize art.

# Navigation appearance

The observed app uses a compact four-item white bottom bar for its actual peer destinations. Red identifies the selected destination; inactive line icons and labels are gray. Use the same visual treatment only if the adapted product genuinely needs persistent peer navigation, and populate it with that product's destinations rather than copying these labels.

Catalog and Home preserve the bar while browsing. Product detail uses Back but may retain the bottom bar in the observed composition. Cart is a focused destination with Close, centered title and item count, and a trailing delete action. Checkout options and order details use Back. Promotional overlays may use Close or Help without introducing a second navigation system.

# Components

## Product card and row

The image is the largest element, followed by rating or discount, product name, size, and current price. Old price is smaller and struck through. Grid cards stay visually open; cart rows add inline minus, quantity, plus, and remove controls. Never hide price or unit behind promotional art.

## Category tile

A pastel rounded rectangle contains a short top-left label and one or more clean product cutouts in the lower half. Neighboring tiles vary hue by category but share geometry and text placement. Advertising badges remain small and explicit.

## Search field

A pale full-width control contains search text, with barcode or scan entry at the trailing edge. Active search keeps Back visible and allows native keyboard suggestions. Filters and query chips appear close to results and remain secondary to the product list.

## Primary action

A wide red rounded rectangle around 54 points high carries cart, continue, done, or checkout. Loading preserves the same footprint with a centered activity indicator. Disabled state becomes pale red with white or low-contrast text, not a different interaction color.

## Checkout group

A white rounded group contains one decision or summary: replacements, promo code, payment, delivery, or loyalty. Disclosure rows keep their current selection or requirement visible. The monetary breakdown remains unboxed and aligned immediately above the total.

## Status and feedback

Confirmed orders use a short segmented progress line and explicit status text. Changed quantities or substitutions open a bottom sheet that lists affected items, old and new totals, and two clear choices. Savings and unavailable items use text and numbers, not color alone.

# Imagery and icons

Product photography is factual: isolate the real package or food item, use contain rather than crop, keep backgrounds clean, and preserve enough resolution for recognition. Category compositions combine several cutouts on a pastel field. Campaign banners may mix products, large type, and prize objects, but still leave readable text-safe areas.

The authored character system belongs to loyalty, coupons, games, and branded promotion. System symbols remain appropriate for Back, Close, disclosure, search, scan, delete, help, and radio controls. Do not use mascots for nutrition facts, payment methods, replacement settings, or order totals, and do not replace a product pack shot with a generic grocery icon.

# States

Observed states include notification permission, signed-out home modules, changing story content, game authorization, coupon authorization, active search keyboard, suggestions, result lists, product detail, add-to-cart loading, updated quantity, cart totals, disabled checkout, X5ID sign-in, promo savings, replacement preferences, payment selection, payment loading, changed cart quantities, confirmed order, and add-to-order availability.

State changes keep the shopping context. Adding an item changes the control without losing product position; search preserves the query; checkout choices return to the same cart; sign-in resumes the pending checkout; changed quantities are reviewed before continuing. Green savings values, red selection, and disabled pale-red actions always retain text labels.

# iOS adaptation

Use custom SwiftUI grids and rows rather than default Form or inset-grouped lists. Keep product images in aspect-fit containers with stable heights so text and prices align. Pin the final cart or checkout action to the safe-area bottom only when it does not cover totals, replacement warnings, or the last item. Persistent navigation needs a matching content inset.

Every quantity control, tab, tile, disclosure, and primary action needs at least a 44-point hit area. VoiceOver should read product name, quantity or size, current price, old price, and discount as one ordered group before exposing cart controls. With Dynamic Type, reduce grid columns before truncating essential product or checkout text; category labels may wrap, and product rows may become wider. Preserve the running total, savings, and final action at all sizes.

# Anti-generic checklist

- Do not style the catalog as a feed of elevated white cards with large empty gaps.
- Do not recolor every category tile red or green; the pastel matrix is a defining discovery surface.
- Do not replace product pack shots with symbols, emoji, or illustrative grocery silhouettes.
- Do not let loyalty mascots displace price, quantity, delivery, replacement, or payment information.
- Do not collapse the checkout breakdown into one unexplained total.
- Do not copy the observed four destinations when the adapted product has different peer areas.

</design-context>
