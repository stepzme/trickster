<design-context>
---
version: 1
platform: iOS
name: Wildberries-design-analysis
description: "A high-density marketplace interface built from a white canvas, purple search and navigation chrome, two-column merchandise grids, image-led promotion, compact price metadata, and orange checkout commitment."
colors:
  canvas: "#FFFFFF"
  surface-soft: "#F7F5F8"
  surface-search: "#F6EAFE"
  surface-control: "#F2EFF4"
  brand-purple: "#A91CDB"
  brand-violet: "#7D1CB8"
  action-magenta: "#C51EF0"
  action-orange: "#FF8617"
  text-primary: "#171419"
  text-secondary: "#767078"
  text-tertiary: "#AAA4AC"
  divider: "#ECE8ED"
  discount: "#E91E8D"
  positive: "#13A66E"
  warning: "#F19A17"
typography:
  page-title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29, letterSpacing: -0.3}
  section-title: {fontFamily: "SF Pro Display", fontSize: 19, fontWeight: 700, lineHeight: 23, letterSpacing: -0.1}
  price-large: {fontFamily: "SF Pro Display", fontSize: 18, fontWeight: 700, lineHeight: 22, letterSpacing: -0.2}
  title: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 18, letterSpacing: 0}
  product: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 15, letterSpacing: 0}
  metadata: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0}
  badge: {fontFamily: "SF Pro Text", fontSize: 9, fontWeight: 600, lineHeight: 11, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18, letterSpacing: 0}
spacing:
  grid: 4
  compact: 8
  control: 12
  screen-horizontal: 12
  section: 20
  major: 28
rounded:
  badge: 4
  control: 10
  product-image: 12
  search: 18
  banner: 16
  sheet: 24
  pill: 999
components:
  search-field: {height: 48, fill: "#F6EAFE", foreground: "#7D1CB8", radius: 18}
  product-card: {fill: "#FFFFFF", imageRadius: 12, columnGap: 6, rowGap: 4}
  add-to-cart: {height: 36, fill: "#C51EF0", foreground: "#FFFFFF", radius: 10}
  buy-now: {height: 48, fill: "#FF8617", foreground: "#FFFFFF", radius: 12}
  bottom-navigation: {height: 58, fill: "#FFFFFF", selected: "#A91CDB", unselected: "#B7B1B9"}
---

# Overview

Wildberries is visually optimized for scanning many offers quickly. Product photography occupies most of each card; discount, wallet price, previous price, seller, truncated title, rating, review count, delivery date, and cart action form a compact stack beneath it. Purple owns navigation and routine commerce actions, while orange marks the step that commits the order.

# Non-negotiable visual invariants

- Merchandise browsing uses a two-column grid with narrow gutters and consistent rounded image frames.
- Every product card keeps price, discount context, identity, rating, delivery timing, and purchase action close to its image.
- Search is a prominent rounded control near the top and includes a camera entry action.
- Purple-to-magenta chrome identifies navigation, filters, and adding to cart; orange is reserved for immediate purchase and checkout commitment.
- Promotional banners may be saturated and image-heavy, but transactional rows remain white or very lightly grouped.
- Product detail gives the media gallery most of the first viewport and pins two contrasting purchase actions at the bottom.
- Bottom navigation stays visible through browsing, cart, order processing, and delivery contexts.

# Color and surfaces

The base canvas is white. Search, quantity controls, grouped order rows, and inactive controls use pale lilac or neutral gray fills. Dividers are faint; separation comes mainly from spacing, image boundaries, and occasional light grouping rather than elevated cards.

The upper browsing chrome moves between violet and magenta, including full-width header fields on search results. Current wallet-linked prices and discount labels use saturated pink. Orange appears on `Купить сейчас` and `К оформлению`, making final commitment distinct from the magenta `В корзину` and per-card cart buttons. Green is local to savings or positive delivery information, while star ratings use warm orange.

# Typography

Use SF Pro Display for compact page and section headings and SF Pro Text for products, controls, and metadata. Price figures use bold weight and tabular numerals. Product titles and seller names are smaller and may truncate; old prices are quieter and struck through. Delivery timing remains small but high enough in contrast to scan below the product identity.

The hierarchy is intentionally compressed: 24/29-point page titles, 19/23-point section titles, 18/22-point prominent prices, 14/18-point body and actions, 12/15-point product copy, 11/14-point metadata, and 9/11-point offer badges. Do not enlarge every label into a card title or loosen line spacing until cards stop reading as a marketplace grid.

# Screen composition

Browsing screens use 12-point outer insets, about 6 points between product columns, and 4–8-point internal card gaps. A location or title row and the search field anchor the top; promotional banners or contextual filter controls follow; the two-column feed occupies the remaining scroll.

Product detail begins with an edge-to-edge square or tall media region. Price and offer strips sit directly below it, variant thumbnails continue the gallery language, and the bottom action region splits orange immediate purchase from magenta cart addition. Cart and order screens switch to a single-column task structure: item summary first, recommendations second, and a wide commitment action near the bottom safe area. Processing and delivery screens retain recommendations below the primary status instead of converting the whole page into a sparse confirmation screen.

# Navigation appearance

The five-item bottom bar uses thin outline symbols and very small labels on white. The active item turns purple; cart or delivery counts appear as small circular badges. Search results can use a saturated purple top region with back, title, sorting, and filtering actions. Deeper task screens use a simple back action and centered short title without introducing a second branded header style.

# Components

Product cards are borderless. The image frame carries favorite and visual-search controls in its upper corners; offer labels can overlap the lower image edge. The metadata stack aligns predictably below the image, followed by a full-width magenta cart button whose label may be the delivery day.

Search fields are wide rounded rectangles with leading search and trailing camera actions. Filter and sorting controls form compact text rows or chips rather than large cards. Quantity controls use a small pale grouped control with minus, count, and purple plus. Cart items use a compact thumbnail beside product and delivery information. Commitment bars use a single wide orange control, while product detail uses paired orange and magenta controls.

Sheets and focused selectors should keep large top corners, white surfaces, clear selection rows, and one primary action. Native inputs may provide editing behavior, keyboard support, focus, and accessibility, but their fills, spacing, type, and tint must match this system.

# Imagery and icons

Product photography is the main visual material. Keep stable crop ratios within a grid, preserve the full selling silhouette when the listing relies on pack photography, and allow advertising typography already embedded in merchandise images to remain legible. Promotional banners mix campaign text with product, character, or 3D object imagery, but their campaign-specific art must not become a generic illustration layer on transactional screens.

Interface icons are compact, mostly outlined, and conventional: search, camera, filter, favorite, share, cart, profile, disclosure, and back. Do not replace product media, campaign content, or seller marks with symbols.

## Visual Style

When an adapted product genuinely needs reference-defining campaign or merchandise imagery, generate the required raster asset with an image-generation tool and add the result to the Xcode asset catalog. Do not draw that imagery in SwiftUI, do not replace it with a symbol, and do not pause for approval before integrating the generated asset into the running build. If the final asset is unavailable, preserve its intended footprint, crop, and color mass with a temporary raster asset.

# States

Selected navigation and filters use purple. A product can show discount, wallet price, previous price, low-stock copy, rating, missing rating, and a delivery-date action without changing the card skeleton. Cart state adds quantity editing and count badges. Checkout and delivery expose address, payment, processing, payment-due, cancellation, pickup, courier, and rating states inside the affected task rather than through a global status color.

Disabled controls use pale fills and muted text while keeping their size. Loading should preserve image and metadata geometry. Empty or failed results keep the search query and relevant filters available so the user can revise the request.

# iOS adaptation

Implement the dense grid with explicit custom cells rather than default `List` or `Form` styling. Keep the search/header region and bottom navigation inside safe areas, and reserve enough bottom inset for persistent purchase actions. Make compact visible icons part of at least a 44-point hit area without visually enlarging them.

Dynamic Type may increase card height and wrap delivery or product copy, but price and primary action must stay adjacent to the product they affect. On narrow screens preserve two columns while the product text remains legible; switch to one column only when an accessibility size makes the card hierarchy unusable. VoiceOver should read product identity, current price, previous price or discount, rating, delivery timing, and action as a coherent sequence.

# Anti-generic checklist

- Do not rebuild the feed as a loose one-column collection of elevated cards.
- Do not remove discount, previous-price, delivery, rating, or wallet-price information to make a card look cleaner.
- Do not use the same color for adding to cart and committing checkout.
- Do not place campaign art, gradients, or 3D objects behind address, payment, quantity, or delivery controls.
- Do not use default blue tint, an unstyled `TabView`, or arbitrary SF Symbols as the product identity.
- Do not vary product-image ratios or metadata order from card to card.

</design-context>
