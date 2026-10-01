<design-context>
---
version: 1
platform: iOS
name: flowwow-design-analysis
description: "A dense local-gifting marketplace with photo mosaics, soft gray utility surfaces, compact black actions, mint trust and bonus signals, coral loyalty accents, and expressive floral object art."
colors:
  canvas: "#FFFFFF"
  surface-soft: "#F5F5F5"
  surface-selected: "#ECECEC"
  ink: "#111111"
  ink-secondary: "#777777"
  ink-disabled: "#B8B8B8"
  divider: "#E7E7E7"
  trust-mint: "#84D9A5"
  trust-soft: "#DDF6D9"
  loyalty-coral: "#F2745F"
  rating: "#FFC22E"
  payment-violet: "#2C005B"
typography:
  display: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 34, letterSpacing: -0.5}
  page-title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27, letterSpacing: -0.2}
  section-title: {fontFamily: "SF Pro Display", fontSize: 20, fontWeight: 600, lineHeight: 25, letterSpacing: -0.2}
  product-title: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 500, lineHeight: 23, letterSpacing: -0.1}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 500, lineHeight: 17, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0}
  action: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19, letterSpacing: 0}
spacing: {micro: 4, compact: 8, control: 12, gutter: 16, section: 24, major: 32}
rounded: {small: 8, control: 12, card: 14, sheet: 24, circular: 999}
components:
  primary-action: {height: 52, fill: "{colors.ink}", foreground: "{colors.canvas}", radius: "{rounded.control}", typography: "{typography.action}"}
  search-field: {height: 40, fill: "{colors.surface-soft}", foreground: "{colors.ink}", radius: "{rounded.control}"}
  filter-chip: {height: 36, fill: "{colors.surface-soft}", foreground: "{colors.ink}", radius: "{rounded.small}"}
  product-card: {fill: "{colors.canvas}", foreground: "{colors.ink}", radius: "{rounded.small}"}
  bonus-strip: {minHeight: 28, fill: "{colors.trust-soft}", foreground: "{colors.ink}", radius: "{rounded.small}"}
  bottom-navigation: {height: 62, fill: "{colors.canvas}", selected: "{colors.ink}", unselected: "{colors.ink-secondary}"}
---

# Overview

Flowwow is visually dense but not heavy. Authentic product photography carries most of the page, while app-owned surfaces stay white or very light gray. Compact black actions, mint availability and bonus signals, coral loyalty marks, and tiny ratings or delivery facts make the marketplace operational without competing with the flowers, gifts, and store mosaics.

The transferable system is photo-first density, soft utility surfaces, compact trust metadata, rounded-but-controlled geometry, and the branded floral object language. Store hierarchies, delivery products, bonus rules, exact category taxonomy, and checkout charges are source product architecture and must be adapted rather than reproduced.

# Non-negotiable visual invariants

- Browsing surfaces remain white or very light gray so colorful merchandise photography supplies the dominant visual mass.
- Store discovery uses dense multi-image mosaics and compact commerce metadata rather than isolated hero cards with large empty margins.
- Primary purchase and progression actions are near-black with white labels.
- Mint labels communicate availability, accepted bonuses, or positive value; coral-orange marks the loyalty program and selected promotional moments.
- Controls and modules use moderate rounding, while photography keeps simple rectangular or softly rounded crops.
- Rating, delivery time, fee, bonus rate, and seller identity stay visually close to the item or store they describe.
- Custom floral, gift, and category artwork is distinct from thin conventional navigation and utility icons.

# Color and surfaces

White is the primary canvas. Soft gray groups search, filters, optional services, and inactive choices without turning the screen into stacked cards. Black anchors titles, totals, selected controls, and commitment actions. Gray recedes secondary seller and delivery information.

Mint and pale green are trust colors for confirmed availability, bonus acceptance, and value earned. Coral-orange belongs to the loyalty identity and occasional promotional emphasis. Yellow is limited to ratings. A deep violet may appear inside a branded payment action, but it is not the general interaction tint. Use color locally and semantically; merchandise photography should remain the richest layer.

# Typography

Use SF Pro or a metrically similar platform sans. The everyday hierarchy is compact: 20–22 point page and section titles, 15–18 point product or store labels, and 11–13 point commerce metadata. Large 30-point display text belongs to onboarding or exceptional promotional communication, not routine listings.

Weights move from medium product names to semibold totals and actions. Prices should use tabular figures. Preserve short line lengths in category labels and seller facts; allow descriptions and order comments to wrap naturally. Do not compress delivery and pricing metadata below legibility to keep a fixed card height.

# Screen composition

Routine screens use 12–16 point gutters and compact 8–12 point gaps. Home combines delivery context, search, shortcut categories, promotional modules, illustrated recipient or occasion shortcuts, and product or store sections. Category browsing moves quickly into filters and vertically repeated seller mosaics. Each seller block may combine a multi-image grid with name, rating, bonus, price, and timing.

Store detail begins with seller identity and trust facts, then category shortcuts and product rails. Product detail is a sheet-like surface over a darkened media backdrop: a large photographic crop leads into thumbnails, availability, title, rating, fulfillment facts, description, and price history. Cart and checkout use denser grouped rows, optional add-on rails, editable order facts, totals, and a persistent progression action. Tracking can layer a task sheet over a map.

These arrangements demonstrate density and hierarchy, not mandatory product modules. Preserve the relationship between task context, supporting facts, and the current action while substituting the adapted product's real content.

# Navigation appearance

Primary navigation is a white region with small line-style icons and short labels; the selected item becomes black while inactive items recede to gray. Store detail can replace the global destinations with store-specific sections. Secondary tasks use a back or close action and a compact centered title. Product detail behaves as an app-owned sheet and retains direct close, share, and save controls over the media.

Use the same restrained navigation emphasis, but only include destinations supported by the adapted product. Do not copy collections, self-pickup, inbox, cabinet, or store subsections as empty placeholders.

# Components

## Primary action

Use a near-black control about 52 points high with white semibold text and a 12-point radius. The label may share the row with the total when the amount is decision-critical. Disabled actions use a pale neutral fill and subdued text. A payment-provider action may use that provider's authored treatment only for the actual payment choice.

## Search and filters

Search uses a soft-gray field with a quiet leading search symbol. A separate compact filter action may sit beside it. Filter chips are pale, moderately rounded, and concise; selection changes through black fill, a border/check, or stronger text rather than a bright global accent.

## Store mosaic

A seller unit is led by a dense two- or three-column photo mosaic. Small labels may sit directly on the images for price or bonus acceptance. Store identity, rating, delivery, bonus rate, and timing follow as compact lines. Avoid lifting the entire seller unit with a prominent shadow.

## Product detail and cart row

Product detail gives the primary photograph most of the upper region and keeps dimensions or other essential facts attached to it. Thumbnail selection precedes title and fulfillment information. The cart row pairs a small product image with quantity, price, optional service state, and editable notes. Add-ons use a horizontal rail with an explicit selected state.

## Trust and status elements

Availability updates, earned bonuses, accepted-bonus marks, delivery estimates, and ratings use compact labels, strips, or icon-text pairs. Keep them attached to the relevant product, seller, or order instead of collecting them in a generic dashboard card.

# Imagery and icons

Photography is the core browsing asset. Preserve natural flower color, packaging detail, bouquet scale, and seller-specific presentation. Store mosaics intentionally show several products at once; product detail uses one dominant crop plus thumbnails. Editorial promotion art may be more stylised, but it must not overwrite product color accuracy.

The reference also uses authored floral and gift imagery: polished translucent 3D scenes for onboarding and promotions, plus a recurring set of colorful category and occasion objects. Those assets follow the separate illustration specification. Conventional controls such as back, close, share, favorite, search, filter, chat, disclosure, and delivery may use a coherent thin icon family. Do not treat ordinary interface icons as illustrations.

# States

Observed commerce states include loading skeletons, selected and unselected filters, saved items, confirmed recent availability, bonus eligibility, quantity changes, optional add-on selection, applied discounts, delivery versus pickup, delivery-time choices, payment selection, tip selection, contactless delivery, active tracking, editable order details, chat access, cancellation, and ratings.

Loading skeletons reserve the final content blocks and navigation context. Selection uses a clear check, border, or dark fill. Totals update immediately when quantity, add-ons, discount, delivery, or tip changes. Active tracking keeps the current status, planned time, recipient, address, comments, seller contact, and available actions recoverable from the same order context.

# iOS adaptation

Keep all tap targets at least 44 points even when visible filters and metadata are compact. Product sheets, checkout actions, and navigation must respect the lower safe area. A persistent action must not obscure totals or the final optional item. Map and media may extend edge-to-edge behind app-owned overlays.

Dynamic Type should expand names, delivery facts, comments, and actions; allow mosaics and paired choices to reflow before shrinking text. VoiceOver should group each product image with its name, price, rating, availability, and delivery fact, and expose selected states explicitly. Native permission dialogs, keyboards, maps, and payment handoffs retain system behavior. App-owned surfaces adopt the documented hierarchy and styling.

# Anti-generic checklist

- Do not replace seller mosaics with one oversized image and a generic elevated card.
- Do not wash the whole interface in mint or coral; keep both as local trust and loyalty signals.
- Do not hide delivery time, fee, seller, rating, availability, or bonus information away from the decision they qualify.
- Do not render every category and occasion as a monochrome SF Symbol when authored object art is required.
- Do not copy the source's exact categories, store sections, checkout charges, or navigation destinations into an unrelated product.
- Do not use one corner radius, one card density, or one image aspect ratio for every module.

</design-context>
