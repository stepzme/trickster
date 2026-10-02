<design-context>
---
version: 1
platform: iOS
name: Wildberries-design-analysis
description: "A high-density marketplace interface built from a white canvas, purple search and navigation chrome, two-column merchandise grids, image-led promotion, compact price metadata, and orange checkout commitment."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F3F8"
  accent-primary: "#A91CDB"
  accent-secondary: "#FF8617"
  text-primary: "#171419"
  text-secondary: "#767078"
  divider: "#ECE8ED"
  destructive: "#D91D54"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 18}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {height: 48, fill: "#FF8617", foreground: "#FFFFFF", radius: 12}
  secondary-action: {height: 44, fill: "#C51EF0", foreground: "#FFFFFF", radius: 12}
  primary-card: {fill: "#FFFFFF", imageRadius: 12, columnGap: 6, metadataGap: 4}
  navigation: {height: 58, fill: "#FFFFFF", selected: "#A91CDB", unselected: "#B7B1B9"}
---

# Overview

Wildberries uses a compact commerce visual system: white screens, lilac search fields, purple brand chrome, magenta purchase controls, orange checkout buttons, and image-heavy merchandise cells. The first viewport is rarely empty; it is filled by a search surface, carousel or product media, and a dense stack of prices, discounts, ratings, delivery labels, and small action icons. The recognizable character comes from high information density around real product photography rather than from spacious native iOS lists.

# Non-negotiable visual invariants

- Browsing screens keep a two-column merchandise grid with narrow gutters, rounded product-photo frames, and metadata directly below each image.
- A pale lilac rounded search field with a camera affordance anchors discovery surfaces, while deeper search screens use a saturated purple top region.
- Purple and magenta identify navigation, filters, add-to-cart actions, selected states, badges, and small commerce links.
- Orange is reserved for checkout commitment and immediate purchase; it must not be blended with the magenta cart action.
- Product detail gives the first viewport to large product media and pins paired orange and magenta purchase controls above the bottom safe area.
- Cart, checkout, delivery, and profile surfaces remain mostly white with light grouped rows, compact thumbnails, and purple accents instead of large decorative panels.
- Promotional and merchandise imagery can be saturated and text-heavy, but it stays inside banners, product photos, or modal artwork rather than becoming a background system.

# Color and surfaces

The dominant field is white. Secondary surfaces are very pale lilac or warm gray, used for search fields, grouped order rows, disabled controls, input backgrounds, and quantity controls. Dividers are faint and low contrast; separation mostly comes from spacing, card edges, image crops, and localized grouped panels rather than heavy outlines or shadows.

Purple spans several roles: the launch gradient moves through pink, magenta, and violet; search-result headers use saturated violet; selected navigation, link-like actions, plus controls, notification affordances, and cart buttons use purple or magenta. Orange appears on `Купить сейчас`, `К оформлению`, and similar commitment bars. Pink price and discount marks sit near product metadata. Green is local to savings or positive delivery notes, and warm orange stars mark ratings.

Default iOS blue, grouped-gray form slabs, heavy separators, or broad dark surfaces would visibly break this reference. Campaign banners may use their own saturated palettes, but address, payment, delivery, quantity, and account rows stay quiet and white-led.

# Typography

The hierarchy is compressed. Page titles and section labels are bold but not oversized; product data relies on small SF Pro Text sizes with strong weight changes instead of large type. Prices use bold numerals and compact ruble marks; old prices are gray and struck through; discount and promotion tags are tiny uppercase or all-caps badges attached to the image or price stack.

Product names, seller names, delivery dates, ratings, review counts, payment details, and address snippets are small and often truncated. The system should preserve scan density under Dynamic Type: text can wrap and lengthen the cell, but price, discount context, rating, delivery timing, and action must remain visually attached to the same product image. Do not inflate every label into a card title.

# Screen composition

Home and listing screens use 12-point side insets, a top safe-area logo or location row, a wide rounded search field, horizontal banners or filter chips, and then a two-column feed. Product cards are borderless; the image frame is the largest element, followed by a tight metadata stack and a full-width magenta action. The bottom tab bar remains white with small outline icons and count badges.

Product detail starts with a nearly full-width media gallery that can be still image or video. Price, wallet discount, previous price, variant thumbnails, rating blocks, delivery notes, and item details are packed below the media. A sticky bottom action area splits orange purchase and magenta cart controls.

Cart, checkout, delivery, and profile screens shift to single-column composition. They use compact item thumbnails, rounded white or pale lilac rows, wide bottom commitment bars, purple toggles or pills, and occasional recommendation grids below the primary task area. Map screens are full-screen map fields with purple point markers, white floating controls, and a bottom search panel. Permission and notification prompts use centered system alerts or rounded bottom sheets over a dimmed product screen.

# Navigation appearance

The bottom navigation is a white bar with five small outline icons and minimal labels. The active item turns purple; inactive icons and labels are light gray. Cart, delivery, and profile states can show small circular magenta count badges. The bar sits above the home indicator without a raised card look.

Top navigation alternates between a minimal white safe-area header and a saturated purple header. White headers use a centered small Wildberries pill, thin back chevrons, favorite/share/search icons, and short centered titles. Purple headers contain white titles and controls, with the search field inset below or inside the region. Sheets have large top corners, a dim scrim when modal, and clear row separation without decorative chrome.

# Components

Product cells use rounded image frames, upper-corner favorite and visual-search controls, tiny overlapping offer labels, bold pink current price, gray struck-through old price, seller or wallet context, short title, orange star rating, review count, delivery date, and a magenta add-to-cart button. The skeleton stays the same whether a product has a missing rating, low-stock copy, or alternate delivery date.

Search fields are wide rounded rectangles with pale lilac fill, purple-tinted icons, placeholder text, and a trailing camera action. Search results add compact query chips, sorting, and filter icons in the purple top region. Quantity controls are short pale grouped capsules with gray minus, centered count, and purple plus. Toggles appear as compact iOS switches placed in pale rows, sometimes with a purple or campaign-tinted backing strip.

Checkout and cart commitment bars are wide orange buttons at the bottom safe area with centered white semibold labels and optional amount text. Product detail uses paired buttons: orange on the left for immediate purchase and magenta on the right for cart. System permission alerts keep native behavior, but surrounding app-owned sheets use the Wildberries colors, rounded white surface, and magenta primary action.

# Imagery and icons

Real product and campaign imagery is the main visual mass. Product photos and seller graphics must remain legible inside consistent rounded frames; many listing images include embedded sale typography that is part of the observed marketplace look. Promotional banners use saturated gradients, product cutouts, travel or seasonal visuals, and occasional character or 3D-like campaign objects, but these are campaign media rather than a stable standalone authored illustration system.

The observed custom notification sheet contains a single cheerful shopping illustration, while other screens rely on product photos, ad banners, maps, QR codes, thumbnails, and small utility glyphs. This isolated image does not establish a reusable illustration language. Preserve the dominant role, crop, and density of product and promotional photography instead of replacing it with generic symbols.

Interface icons stay compact, mostly outline-based, and functional: search, camera, filter, favorite, share, cart, profile, notification, QR, disclosure, close, and back. They support the commerce layout and should not replace product media, campaign banners, seller marks, or map pins.

# States

Visible states include first-launch gradient, country selection, tracking permission, notification permission, populated feed, active search with keyboard, search suggestions, product listing, media playback, full-screen video, cart quantity editing, phone login, SMS code entry, checkout without address, pickup-map selection, checkout with address, delivery tracking, profile/account panels, count badges, and rating or order-action surfaces.

Across states, the constants are white or purple top chrome, small SF Pro type, compact rows, pale lilac control fills, purple selected states, and clear orange commitment. Disabled or unavailable controls become pale and low contrast but keep their geometry. Modal and permission states dim the underlying screen while preserving enough context to show the product-grid or checkout surface beneath.

# iOS adaptation

Use custom SwiftUI or UIKit cells for the dense merchandise grid; default `List`, `Form`, unstyled `TabView`, and standard blue-tint controls will not match the reference. Keep search/header regions inside the top safe area and reserve bottom inset for tab bars or sticky purchase controls. Icons may remain visually small, but their tap targets need to be at least 44 points.

On compact iPhone widths, preserve two product columns unless an accessibility text size makes product identity and action unreadable. Dynamic Type can increase card height, wrap product titles, and move delivery metadata to an extra line, but price, discount, rating, delivery timing, and purchase action must remain grouped with the relevant image. Keyboard-driven search should retain the purple or lilac header appearance and the compact suggestion list above the keyboard.

VoiceOver order should follow the visible commerce stack: product image or title, current price, previous price or discount, seller or wallet context, rating, delivery timing, and action. Light appearance is the observed base; do not invent a dark theme unless the target product separately defines one.

# Anti-generic checklist

- Do not replace the two-column feed with a one-column stack of roomy elevated cards.
- Do not remove wallet price, old price, discount tags, rating, review count, delivery date, or seller context to make cells cleaner.
- Do not make add-to-cart and checkout commitment the same color.
- Do not use default iOS blue tint, generic SF Symbol placeholders, or unstyled native tab/form/list appearances.
- Do not turn campaign banners or product media into decorative full-screen backgrounds for checkout, address, payment, or profile rows.
- Do not create `illustrations.md` from one-off campaign graphics, product photos, emoji-like marks, or a single permission-sheet drawing.

</design-context>
