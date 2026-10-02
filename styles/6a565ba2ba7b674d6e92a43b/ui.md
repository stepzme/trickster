<design-context>
---
version: 1
platform: iOS
name: Yandex-Lavka-design-analysis
description: "A bright grocery-commerce interface built from white space, dense product photography, yellow actions, blue brand accents, compact rounded controls, and persistent commerce bars."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F4"
  accent-primary: "#FFE000"
  accent-secondary: "#19AEE9"
  text-primary: "#171717"
  text-secondary: "#6C6D72"
  divider: "#E4E4E6"
  destructive: "#DE3F4E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 12
  control-gap: 8
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  yellow-checkout-action: {fill: "#FFE000", text: "#171717", shape: "full-width rounded rectangle"}
  product-photo-card: {fill: "#FFFFFF", image: "dominant top area", controls: "compact trailing or bottom stepper"}
  green-delivery-pill: {fill: "pale green", text: "dark green", shape: "capsule"}
  search-pill: {fill: "#F3F3F4", icon: "leading", shape: "capsule"}
  sticky-commerce-bar: {fill: "#FFFFFF", action: "yellow", position: "above bottom safe area"}
---

# Overview

Yandex Lavka is a bright, image-led commerce interface. White occupies most of the viewport, while dense grids of colorful product photography carry the visual weight. Yellow identifies decisive actions, cyan-blue provides brand recognition, and green capsules communicate delivery or completion. The result is compact and energetic rather than card-heavy: products, prices, and controls sit close together inside a disciplined rounded system.

# Non-negotiable visual invariants

- Product photography is the dominant content mass on catalog-like screens and must not be replaced by symbol tiles or text-only rows.
- Primary purchase actions use a saturated yellow fill with dark text; generic iOS blue is not the main action color.
- White remains the continuous canvas, with pale gray used locally for search, filters, inputs, and quiet grouping rather than for a stack of large cards.
- Product grids are compact and information-dense, combining large imagery with short labels, prominent prices, and small rounded add or quantity controls.
- A persistent commerce surface can anchor the lower edge, keeping delivery, cart, total, or payment information visually separate from scrolling content.
- Status accents are semantic and vivid: green for delivery or completion, red for discounts and destructive emphasis, and blue for brand-specific highlights.
- Rounded geometry varies by role: small controls are softly rounded, status and filter controls are capsules, and modal sheets have substantially larger top corners.
- Promotional or authored imagery occupies a meaningful portion of its container and is never reduced to a tiny decorative icon.

# Color and surfaces

The default canvas and primary surfaces are white. Pale neutral gray creates search fields, filter chips, input areas, skeleton placeholders, and lightweight list grouping without dividing the screen into heavy panels. Bright yellow is reserved for high-priority actions and selected commerce controls; cyan-blue appears in brand marks and supporting accents. Soft green surfaces with darker green text denote delivery or successful state. Red is used for discounted prices, badges, warnings, and destructive emphasis. Dividers are faint and secondary text stays medium gray.

Large color masses appear in promotional tiles, product imagery, and the dark appearance. In dark mode, the canvas becomes near-black while controls remain clearly layered and yellow retains its action role. Replacing yellow with system blue, turning every section into a gray card, or using low-contrast pastel text would visibly break the reference.

# Typography

The hierarchy uses bold, compact display titles and section headings, with smaller utilitarian product copy beneath. Prices and totals receive strong weight; old prices and supporting metadata are smaller and gray. Labels on yellow actions are semibold and centered. Category names, product names, and helper text wrap sparingly so the grid remains tight. Numerals are direct and high-contrast rather than decorative.

Use SF Pro Display for large titles and SF Pro Text for body, labels, and captions. Under Dynamic Type, allow titles and product names to wrap before shrinking them, preserve visible price prominence, and let fixed-height product tiles grow where necessary. Do not collapse several hierarchy levels into near-identical 16–17 point text.

# Screen composition

Screens commonly begin with a safe-area-aware top region containing a title, address or status control, and a wide rounded search field. The middle is a vertically scrolling collection of horizontal category strips, promotional banners, or two-column product grids. Content usually sits 16 points from the sides with narrow internal gaps so photography remains large. A compact tab bar or a sticky purchase surface occupies the bottom safe area.

Catalog archetype: a search and filter zone leads into category controls and a dense product grid; imagery takes most of each cell, followed by a short information stack and a compact add or stepper control.

Product-detail archetype: a large product image dominates the upper portion, followed by price, title, concise details, and a persistent yellow purchase action near the bottom.

Checkout archetype: grouped white list content uses pale-gray fields and restrained separators, while the total and yellow confirmation action form a visually anchored lower block.

Tracking archetype: a map fills most of the screen, with pins and controls overlaid and a large rounded white status panel rising from the bottom.

Account or settings archetype: compact full-width rows, toggles, and chevrons use white or pale-gray grouping, with modal sheets for focused choices.

# Navigation appearance

The bottom tab bar is light, compact, and icon-led, with dark or brand-accent emphasis for the selected item and muted gray for inactive items. Top bars remain visually quiet: back and utility controls are small, while the title or search surface carries the hierarchy. Sheets use a dimmed backdrop, generous rounded top corners, and often a small centered grabber. Back controls are ordinary compact controls, never oversized hero elements. Sticky commerce bars are visually distinct from navigation and sit immediately above the bottom safe area.

# Components

The search control is a wide pale-gray capsule with a leading search symbol, restrained placeholder text, and optional compact trailing affordance. Product cards have no heavy border: a large square or softly rounded photo area leads into short text, price, optional struck-through old price, and a small plus or quantity stepper. Add controls are compact rounded rectangles or circles and use yellow or quiet neutral fills depending on prominence.

Filter and category chips are horizontally scrolling capsules with tight padding; selected chips gain stronger fill or text contrast. Delivery and status pills use tinted green fill and dark green text. Promotional cards combine a saturated or pastel field with product or authored imagery and minimal copy. Primary actions are full-width yellow rounded rectangles with dark semibold labels; disabled states reduce contrast without changing geometry. Rows, toggles, payment cards, and address fields use restrained separators and larger tap areas than their visual bounds.

# Imagery and icons

Clean product photography is essential. Products are isolated or tightly cropped, centered within light photo fields, and large enough to scan before reading. Promotional banners use bolder crops and colored backdrops. Maps remain functional visual surfaces rather than decorative screenshots. Icons are compact, simple, and secondary to labels and imagery; arbitrary mixed-weight SF Symbols would create inconsistency.

Authored illustrations appear as meaningful visual masses in account or promotional contexts, including an object-led grocery composition and a playful character scene. These cannot be omitted or replaced by a small icon while awaiting final assets; use an approved image asset that preserves their scale and compositional role.

# States

Observed states include first-launch and permission prompts, address selection, signed-out account, populated home and catalog, product detail, empty and populated cart-related surfaces, checkout, order tracking, payment selection, settings, search results, AI-assisted search, loading skeletons, modal choices, and light and dark appearances. Selected chips, active steppers, enabled actions, and completed delivery status increase contrast without changing the underlying geometry. Permission dialogs and keyboards remain system-native transitions, while the app surfaces behind them keep the same yellow, white, and rounded visual grammar.

# iOS adaptation

Use safe-area-aware `ScrollView` or collection layouts for catalog content and reserve independent bottom insets for tab and commerce bars. Product grids should remain at least two columns on current compact iPhones while allowing text and price blocks to expand under Dynamic Type. Keep search, chips, and steppers visually compact but provide at least 44-point hit targets. Sheets should use native presentation behavior with reference-matched corner radii and custom content surfaces.

Move confirmation actions with the keyboard or keep them visible through native keyboard avoidance. VoiceOver order should follow title or address, search and filters, products row by row, then persistent cart or purchase action. Preserve the observed near-black dark canvas and high-contrast yellow actions rather than mechanically inverting every color. System permission prompts remain native and should transition back into the same styled surface.

# Anti-generic checklist

- Do not replace the product grid with a vertical stack of generic white cards.
- Do not use default blue tint for primary purchase actions.
- Do not ship an unstyled `TabView`, `Form`, `ProgressView`, or default grouped list.
- Do not omit product photography, promotional imagery, or authored illustrations that carry composition.
- Do not use arbitrary SF Symbols as product, category, or illustration substitutes.
- Do not apply one universal corner radius to chips, product media, sheets, and buttons.
- Do not inflate explanatory copy or duplicate information already visible in prices, status, and controls.
- Do not separate every section with borders or shadows; spacing and image rhythm provide most grouping.

</design-context>
