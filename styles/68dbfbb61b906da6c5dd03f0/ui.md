<design-context>
---
version: 1
platform: iOS
name: Perekrestok-design-analysis
description: "A bright white grocery interface where product photography and campaign banners provide most of the color, fresh green is reserved for brand, selection, quantity, and purchase actions, flat rounded cards keep dense commerce content approachable, and a lightweight five-item tab bar anchors the screen."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F3"
  accent-primary: "#39B54A"
  accent-secondary: "#1F8E46"
  text-primary: "#202020"
  text-secondary: "#676A6E"
  divider: "#E5E8E5"
  destructive: "#D94B4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#39B54A", text: "#FFFFFF", height: 52, radius: 12}
  product-card: {fill: "#FFFFFF", radius: 16, imageRatio: "1:1"}
  quantity-stepper: {fill: "#39B54A", text: "#FFFFFF", radius: 999}
  navigation: {fill: "#FFFFFF", selected: "#39B54A", unselected: "#777A7C"}
---

# Overview

Perekrestok is a bright, product-led grocery interface rather than a green-themed dashboard. White dominates the viewport, while real product photography, category imagery, and campaign-specific promotional banners supply most of the visual variety. Fresh green is concentrated in the brand, selected navigation, add and quantity controls, loyalty emphasis, and purchase actions. Dense retail information remains approachable through flat rounded cards, concise dark type, and a lightweight persistent tab bar.

# Non-negotiable visual invariants

- Keep white as the dominant full-screen field; green is an action and brand accent rather than a large universal background.
- Give real product photography primary visual weight in discovery and detail surfaces; never reduce the experience to text cards and symbols.
- Preserve the light five-item bottom navigation with neutral icons, green selected state, small labels, and compact badges when needed.
- Use flat, softly rounded cards and light-gray group surfaces with little or no shadow; separation comes from spacing and surface tone.
- Keep green add pills, quantity steppers, and full-width purchase actions visually consistent and immediately distinguishable from passive content.
- In product detail compositions, lead with a large image, then price and benefit information, then the purchase control; do not reverse that hierarchy.
- Let promotional banners use their own blue, orange, yellow, or photographic campaign palette while keeping navigation and commerce controls consistently green.
- Present checkout choices in white rounded sheets and keep the current purchase action visible as a sticky green control above the safe area.

# Color and surfaces

The canvas and primary surface are white. Soft gray (`#F3F3F3`) creates search fields, quiet groups, empty-state panels, and selected backgrounds without making the screen look card-heavy. Brand green (`#39B54A`) marks the logo, active tab, loyalty emphasis, add controls, quantity steppers, selected choices, and primary checkout actions. A deeper green can support pressed states or secondary brand contrast. Primary text is near-black; metadata and old prices use medium gray; dividers are faint.

Promotional artwork may introduce strong local color fields, including blue, orange, and yellow, but those colors belong to the image or campaign card rather than the global control system. Destructive actions use red and should not be confused with promotional color. Default iOS blue, automatic grouped-list gray, large green page backgrounds outside a loyalty-led composition, and heavy card shadows would all break the observed system.

# Typography

Page titles are bold and compact at roughly 27–30 points. Section headings and product names use 16–20 point semibold or bold type; prices and purchase values carry strong weight while supporting weights, quantities, delivery details, and old prices remain 11–15 points. Bottom navigation labels are small, around 10–11 points. Text is primarily left aligned, with tightly grouped price and metadata rows. Monetary values should use tabular figures where live changes need alignment, and old prices use muted color with a restrained strikethrough.

Use SF Pro Display and SF Pro Text as the iOS-safe typography. Under Dynamic Type, allow product names, address rows, benefit text, and sheet options to wrap, and let cards grow vertically. Keep the image and price hierarchy intact rather than shrinking type. Do not write decorative or mood-setting copy: labels should identify a product, value, state, or action without repeating information already visible in the photograph, title, or control.

# Screen composition

Standard horizontal insets are about 16 points, reduced to 8–12 points inside dense product grids. The upper region contains a compact title, delivery or pickup context, search, and occasionally a loyalty barcode; it should not expand into a marketing hero by default. The middle is a vertical feed of promotional banners, horizontal categories, product grids, or structured checkout rows. The bottom is either the white five-item tab bar or a sticky green purchase action, sometimes paired with a modal sheet.

Observed archetypes include:

- **Discovery feed:** compact location/search region, wide promotional carousel, circular or tile-like categories, then horizontally scrolling or gridded product cards with visible photos and add controls.
- **Catalog listing:** title and search/filter controls followed by dense two-column product cards whose images dominate their upper half and whose prices and controls align near the bottom.
- **Product detail:** large isolated product photograph on white, concise product identity and price block, benefit or loyalty details, then a prominent add or quantity action.
- **Cart and checkout:** vertical rows with small product thumbnails, aligned quantity and price data, grouped delivery/payment choices, summary values, and a sticky full-width green action above the lower safe area.
- **Loyalty surface:** stronger green band or field, barcode or QR code as the focal object, concise status and level information, then white supporting cards.
- **Map or address selection:** map as the main field, white search and location controls layered above it, and a raised white sheet or action surface near the bottom.
- **Empty or result state:** generous white or pale-gray space, one restrained supporting image, a short bold title, concise necessary explanation, and one clear action.

Long retail feeds scroll vertically. Product rails may scroll horizontally, but core checkout choices should remain in a predictable vertical order. Preserve edge-to-edge white continuity around the safe areas.

# Navigation appearance

The bottom bar is white, full width, and visually light. Five evenly spaced neutral icons with small labels sit above the home indicator; the selected item turns green and a compact badge may appear on a cart-related destination. It is not a floating glass pill and does not need a heavy divider or shadow. This appearance must not be interpreted as reusable product information architecture.

Top bars use a simple title with small back, close, search, or utility controls. Back controls are ordinary compact chevrons rather than branded oversized buttons. Checkout and address choices appear in white bottom sheets with large rounded top corners, clear row separators, and a dimmed underlying view. Selection uses a green check or radio. Avoid default blue navigation tint and unstyled system tab imagery.

# Components

- **Product card:** flat white or very lightly grouped surface with 16-point radius, square or near-square product image, compact name and metadata, bold price, and a green add pill or stepper near the lower edge. Maintain aligned control baselines across a grid.
- **Add pill:** green capsule with a concise white label or plus mark, at least 44 points tappable even if the visible capsule is smaller. Pressed state deepens the green; unavailable state becomes neutral gray.
- **Quantity stepper:** elongated green pill with clear minus and plus targets and a centered count. It replaces the add control without changing the card's footprint dramatically.
- **Primary purchase action:** roughly 52 points high, full width above the safe area, green fill, 12-point radius, centered semibold white label, and optional price aligned within the same control when observed.
- **Promotion card:** wide image-led rounded banner with campaign-specific color and art. Keep native text minimal if the banner already carries campaign typography; do not recreate it as a generic colored rectangle.
- **Loyalty code card:** high-contrast barcode or QR on a clean light surface, framed by concise value or level information. The code remains the primary visual object.
- **Checkout choice row:** white rounded or grouped row with a leading label, supporting value, and trailing chevron, radio, or check. Selected state is green; missing required data uses concise destructive feedback.
- **Bottom sheet:** white surface with 28-point top radius, small grabber where appropriate, generous title spacing, and vertically stacked native rows above a safe-area-aware action.

# Imagery and icons

Real product photography is essential. Products are isolated cleanly against white or pale neutral backgrounds, consistently scaled within square crops, and remain legible at grid size. Do not substitute generic food icons, gradients, or placeholders when a product image is compositionally expected. Promotional banners are authored campaign images with varied palettes and stronger typography or art; retain their image-led role rather than trying to reproduce them with system components.

Operational icons are simple and mostly monochrome, turning green when selected. Cart badges are compact and high contrast. Maps use the visible map provider's native cartography beneath custom white search and selection surfaces. A one-off mascot and a few pale empty or success images were observed, but they do not establish a reusable independent illustration system; do not infer a global mascot or illustration language from them.

# States

Observed states include splash/onboarding, populated home and catalog, product detail, empty and filled cart, checkout with payment choice, missing delivery address, address entry, loyalty-level modal, payment-card and cashback views, delete-card confirmation, no saved card, success confirmation, pickup map, and overloaded-store feedback. Across these states, the white field, dark compact type, green commerce controls, flat rounded surfaces, product photography, and light navigation remain stable.

Empty states use generous white or pale-gray space, restrained imagery, concise information, and one clear next action. Required or unavailable delivery information is explicit but should not fill the screen with redundant prose. Destructive confirmation is presented as a focused modal rather than a globally red screen. Do not invent permission, dark-mode, or skeleton styling beyond the observed evidence.

# iOS adaptation

Keep white continuous through the status-bar and bottom safe areas. Use vertical scroll containers for feeds and checkout, lazy grids for product collections, and horizontal scroll containers only for genuine rails. Sticky purchase controls must remain above the home indicator and keyboard. In address or payment forms, scroll the focused field into view and preserve the action when the keyboard is raised. Present choice surfaces with native sheet behavior but custom white fill, radius, spacing, and green selection.

Every icon, add control, quantity segment, and compact utility button needs a 44-point hit target. VoiceOver should announce product name, quantity or weight, current and old price, promotion, and add/quantity action in a useful order; do not merge multiple product cards into one element. Dynamic Type should expand rows and cards, with product grids reducing columns if necessary rather than truncating essential labels. On compact widths, keep the product image legible and reduce gaps before reducing type. The evidence is light appearance; do not claim an observed dark theme. If dark appearance is required, preserve product-photo fidelity, green action contrast, and the hierarchy between base and secondary surfaces.

# Anti-generic checklist

- Do not turn the app into a green full-screen dashboard; white and product imagery must dominate.
- Do not replace product photography, promotion artwork, barcodes, or maps with arbitrary SF Symbols, emoji, or code-drawn placeholders.
- Do not ship an unstyled `TabView`, default blue tint, generic `Form`, or stock grouped settings cards.
- Do not use one universal card radius or heavy shadow for products, banners, sheets, and controls.
- Do not separate every row into a floating white card; preserve flat grouped retail density and light dividers.
- Do not hide add, quantity, or checkout actions behind decorative content; green commerce controls stay visually immediate.
- Do not infer a reusable illustration or mascot system from isolated empty-state and kids-club artwork.
- Do not add promotional-sounding, mood-setting, or context-duplicating copy to fill open space.

</design-context>
