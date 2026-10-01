<design-context>
---
version: 1
platform: iOS
name: Detsky-Mir-design-analysis
description: "A dense family-commerce interface built on a pale blue canvas with white rounded modules, bright blue navigation and actions, loud red sale pricing, product-led photography, a persistent four-item tab bar, and recurring blue-bear state illustrations."
colors:
  canvas: "#EEF6FF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E4F0FA"
  accent-primary: "#078DF2"
  accent-secondary: "#FF3530"
  text-primary: "#111318"
  text-secondary: "#737984"
  divider: "#DCE5EE"
  destructive: "#F04438"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 750, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 10
rounded:
  control: 14
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#078DF2", text: "#FFFFFF", radius: 14, height: 50}
  product-card: {fill: "#FFFFFF", radius: 16, media: "contained product photo", price: "bold red when discounted"}
  search-field: {fill: "#FFFFFF", radius: 14, icon: "blue or dark utility symbol"}
  navigation: {fill: "#FFFFFF", selected: "#078DF2", unselected: "#737984"}
---

# Overview

Detsky Mir combines high retail density with a light, family-oriented shell. Pale icy blue fills the page behind white rounded modules; bright blue anchors navigation, search, and purchase actions; red creates deliberate pressure around discounts and current prices. Product photography is the dominant content imagery across grids and rails. A recurring blue bear and related spot art appear on onboarding, authentication, notification, and empty-state surfaces without replacing the commerce-first structure.

# Non-negotiable visual invariants

- The base shell is pale blue with white rounded cards, fields, and content sections layered above it.
- Bright blue identifies primary navigation, purchase actions, links, and selected controls.
- Discounted prices, sale badges, and crossed previous prices use conspicuous red emphasis.
- Product photography remains central and generously sized inside catalog cards and product-detail surfaces.
- Dense commerce discovery uses repeated two-column cards, horizontal rails, and compact metadata rather than oversized editorial blocks.
- A large rounded search field remains a prominent top control on discovery surfaces.
- The persistent bottom bar uses four evenly spaced icon-and-label items with blue selected and gray inactive states.
- Blue-bear mascot or related authored spot art remains a substantial visual mass on the specific state and guidance surfaces where it appears.

# Color and surfaces

Pale blue is the large background field, while white carries product cards, search, profile groups, checkout sections, and modal content. A slightly stronger pale blue separates selected or informational areas. Bright blue is the structural brand color for tabs, main actions, links, and active controls. Red is intentionally loud for sale price, discount badges, old-price contrast, and destructive meaning; context must distinguish promotion from error. Green appears on selected authentication or success actions, while yellow and orange remain small supporting accents in ratings and pictograms.

Primary text is almost black and supporting metadata is medium gray. Dividers are cool pale blue-gray and usually subtle. Generic system grouped gray, default purple tint, muted discount colors, or applying red to ordinary navigation would destroy the observed hierarchy.

# Typography

Section titles are bold and slightly rounded in character, with strong black-on-light contrast. Product cards compress hierarchy into bold current price, smaller previous price, medium product name, and tiny rating, size, or delivery metadata. Utility, profile, support, and checkout rows use readable medium-weight labels rather than display typography. Promotional statements may become heavier and larger, but transactional screens remain compact.

Use SF Pro Display for heavy campaign or section headings and SF Pro Text for products, forms, and rows. Use tabular numerals for aligned prices, quantities, bonuses, and payment totals. Under Dynamic Type, let product names and row details wrap or move below the primary line; keep the current price visibly stronger than old price and metadata rather than shrinking everything to one compact size.

# Screen composition

The typical commerce screen has a utility-heavy safe-area top containing location or support detail and a large rounded search or catalog control. The middle is a vertically scrolling sequence of full-width white sections, promotional tiles, horizontal product rails, or dense two-column grids. The white bottom tab bar occupies a stable band above the home indicator. Screen gutters are around 12–16 points, card gaps about 8–12 points, and product cards devote their upper half or more to imagery.

Observed archetypes include a discovery surface with search, banners, category tiles, and product rails; a catalog or search-results grid; a filter sheet or full-height filter form with chips and rows; a product-detail surface dominated by large product imagery followed by price and action; an empty or filled cart with sticky purchase control; checkout built from stacked white transactional sections; account and support lists; support chat with rounded message bubbles; and sparse state screens where a mascot or spot illustration sits above concise text and an action. Product photography remains dominant in shopping contexts, while illustration dominates only the relevant guidance or empty state.

# Navigation appearance

The bottom navigation is a persistent white bar with four evenly spaced compact icons and labels; the selected item is bright blue and inactive items are gray. Top controls use a modest back arrow, rounded search field, and small share, favorite, scan, or support icons. Filter and selection surfaces appear as white rounded sheets or light full-page lists with clear blue selected treatments. Native permission or Settings handoffs retain their system appearance rather than being visually imitated.

# Components

Product cards are white rounded rectangles with a large contained product image, compact favorite control, bold price, muted old price, short product title, and small rating or availability information. Discount states add red badges and pricing without recoloring the whole card. Category and promotion tiles use brighter campaign imagery but retain rounded framing.

The search field is wide, white, and rounded, with short placeholder text and compact utility icons. Filter chips are outlined or softly filled pills; selected chips shift to blue or a clearly marked state. Primary purchase and continue actions are full-width blue controls with white semibold labels, while authentication can use the observed green affirmative treatment. Cart, checkout, payment, and profile sections use white full-width cards with 12–16-point padding, restrained dividers, trailing values, selectors, or chevrons. Chat uses compact rounded bubbles and a bottom input without importing product-card styling.

# Imagery and icons

Product photography is compositionally essential: keep products large, fully inspectable, and generally contained against clean light backgrounds rather than cropping them into decorative fragments. Discovery rails and grids depend on the repetition of these images, and product-detail imagery should remain the largest mass near the top. Promotional banners are campaign graphics, not a reusable illustration specification.

The recurring blue bear and related spot scenes are authored state imagery, distinct from products and small UI pictograms. On onboarding, authentication, notifications, and empty states, preserve their generous blue or white negative space and prominent central or upper placement. Icons in the commerce shell are compact, friendly pictograms; selected navigation icons turn blue while inactive icons stay gray. Do not substitute required product or mascot imagery with arbitrary SF Symbols.

# States

Observed states include unauthenticated account, authentication choices, notification permission prompt, native Settings handoff, search suggestions with keyboard, selected filter, empty cart, populated cart, selected payment method, payment-pending order card, support chat, and ordinary profile or catalog content. Empty and guidance states retain the pale blue and white shell but allocate more space to mascot art. Selection uses blue fill, outline, check, or label emphasis. Commerce states keep red price pressure and stable product imagery even as quantities, availability, or totals change.

# iOS adaptation

Respect safe areas for the utility header and keep the persistent tab bar above the home indicator. Use vertical scroll containers for dense catalog, product, profile, and checkout content; maintain sticky purchase actions without covering the final rows. Native keyboard, notification prompt, Settings handoff, and modal presentation should remain platform-correct. Keep search, scan, favorite, quantity, filter, purchase, support, and tab items at least 44 points even when their visible glyphs are compact.

VoiceOver order should follow the visible retail hierarchy: page and search controls, section heading, product image and essential product information, actions, then navigation. On compact widths, preserve two columns only while product image, price, and name remain legible; otherwise move to one column rather than reducing tap targets. Dynamic Type should expand cards and rows vertically. The sampled shell is light; if dark appearance is required without direct evidence, preserve blue selection, red price distinction, product-image clarity, and surface hierarchy instead of simply inverting campaign artwork.

# Anti-generic checklist

- Do not replace the pale-blue retail shell with a plain white or system-gray `List`.
- Do not use default blue buttons without the recorded rounded geometry and surrounding commerce hierarchy.
- Do not reduce product photography to tiny thumbnails or crop away the product.
- Do not flatten current price, old price, sale badge, product name, and metadata into one typographic level.
- Do not use an unstyled `TabView`; selected blue icons and gray inactive labels are part of the visual identity.
- Do not turn dense grids and rails into a loose stack of oversized generic cards.
- Do not mix the bear mascot into every product row or replace it with emoji and arbitrary SF Symbols.
- Do not omit mascot or spot imagery from observed guidance and empty-state archetypes while final assets are pending.

</design-context>
