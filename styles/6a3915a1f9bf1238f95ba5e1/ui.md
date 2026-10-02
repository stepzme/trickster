<design-context>
---
version: 1
platform: iOS
name: Temu-design-analysis
description: "A deliberately dense white marketplace interface driven by orange prices and purchase actions, green trust strips, compact utility typography, persistent navigation, and near-continuous product photography."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F3"
  accent-primary: "#FF5A00"
  accent-secondary: "#168F45"
  text-primary: "#151515"
  text-secondary: "#6F7074"
  divider: "#DDDEE0"
  destructive: "#E43E36"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 18}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 10
  control-gap: 8
rounded:
  control: 12
  card: 8
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "pill or sticky bar"}
  secondary-action: {fill: "text-primary", text: "white semibold", shape: "compact pill"}
  primary-card: {fill: "surface-primary", imagery: "edge-to-edge product photo", density: "high"}
  navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-primary"}
---

# Overview

Temu treats density as a defining visual property. The viewport is filled with product images, prices, discount badges, ratings, delivery claims, and compact controls on a white base. Orange establishes purchase and deal priority, green isolates trust and delivery claims, and black controls create a secondary point of commitment. The result should feel like a busy discount marketplace, not a spacious editorial shop.

# Non-negotiable visual invariants

- Two-column product photography and tightly packed deal metadata occupy most browsing viewports.
- Orange consistently marks current prices, discounts, selected commerce states, and primary purchase actions.
- Green is limited to trust, protection, delivery, and savings messages rather than general decoration.
- Product cards expose multiple commerce signals together instead of hiding them behind a detail view.
- Search, filters, category controls, and bottom navigation remain compact so merchandise dominates the screen.
- Sticky purchase or checkout controls form a strong orange or black band near the bottom safe area.
- White remains the dominant surface; pale gray is used only for grouping, disabled controls, and secondary rows.

# Color and surfaces

White is both canvas and principal card surface, keeping competing product imagery legible. Pale gray separates filters, form groups, variant selectors, and checkout rows. Saturated orange is the primary commerce accent, while green appears in narrow trust and delivery strips. Near-black carries search controls, important text, and occasional payment actions; gray supports seller data, crossed-out prices, and terms. Red is reserved for warnings or scarcity distinct from orange. Default system blue would introduce an unobserved hierarchy and should not tint app-owned controls.

# Typography

The hierarchy uses a compact system sans rather than dramatic editorial type. SF Pro is an appropriate iOS match. Section headings are usually 18–24 point bold; product titles, price context, rating, sales, and delivery labels cluster between 11 and 14 points. Current price uses increased weight and orange color, with old price smaller, gray, and struck through where present. Use tabular numerals for prices, countdowns, and quantities. Under Dynamic Type, allow metadata to wrap or stack within a card while preserving price dominance and keeping the product name readable.

# Screen composition

Browsing screens place a search field and narrow navigation or promo strips near the top, followed quickly by dense two-column photo grids. Side insets are about 8–12 points and inter-card gaps are narrow. Category views may pair a slim taxonomy rail with a larger merchandise area. Product detail is photo-first, followed by compact price, urgency, guarantee, variant, and seller sections, with a sticky action region. Cart and checkout switch to single-column grouped rows while keeping totals and commitment controls pinned near the bottom. Promotional bands interrupt the grid but do not create generous empty space.

# Navigation appearance

The bottom bar is white with five compact icon-label destinations; orange indicates the selected state. Top controls combine a prominent search field with small back, search, camera, share, or cart actions. Filters and product sections use narrow text tabs or chips with black or orange selection. Sheets use rounded top corners over a dimmed context, while system authentication and permission panels keep native appearance.

# Components

Primary purchase buttons are orange with white semibold labels, usually pill-shaped or integrated into a sticky bottom bar. A black pill or bar may signal a final or alternate commitment. Product cards have little ornamental chrome: the image owns most of the upper card, followed by a short title, rating/sales line, current and old price, delivery or scarcity label, and compact cart affordance. Trust strips use pale green fill with green text. Search uses a bordered or white pill with tightly spaced utility icons. Filters, variants, checkboxes, radio rows, steppers, and dropdowns remain compact but keep 44-point hit regions. Disabled controls use pale gray, not lowered opacity alone.

# Imagery and icons

Product and seller photography is the dominant content and cannot be omitted. Use aspect-fill for lifestyle and seller images, and controlled contain treatment where an isolated product must remain fully visible. Promotional campaign graphics can be visually loud, but they stay subordinate to the merchandise and commerce hierarchy. Icons are small, functional, and high-contrast. Golden-egg and similar campaign overlays are isolated promotion assets, not evidence for a general illustration language and must not be used as a substitute for product imagery.

# States

Observed states include signed-out authentication sheets, selected and unselected variants, populated cart with checked items, checkout payment/security modal, discount and countdown emphasis, delivery/trust labels, and disabled or unavailable controls. Price, product image, and commitment hierarchy remain visible across these states. Errors and scarcity stay adjacent to the affected item; modal decisions preserve the white, compact, commerce-heavy visual system.

# iOS adaptation

Respect top and bottom safe areas while keeping search and sticky commerce actions visually anchored. Use scroll containers for product grids, detail, cart, and checkout; keep focused fields visible above the keyboard. App sheets should use the documented top radius, while Apple or other system authentication stays native. All compact-looking icons, chips, variants, and cart controls still need 44-point hit targets. VoiceOver should announce product identity and price before secondary sales or delivery metadata, followed by the action. Retain two columns where legibility permits; at large Dynamic Type or narrow compact widths, use one column rather than clipping price and delivery information. The observed experience is light-first; a dark mode must be separately designed rather than automatically inverted.

# Anti-generic checklist

- Do not reinterpret the interface as a spacious editorial storefront.
- Do not replace orange commerce emphasis with default iOS blue.
- Do not use an unstyled `TabView`, `Form`, `List`, or default search field.
- Do not remove product photography, discount context, ratings, or delivery signals to make cards cleaner.
- Do not give every surface the same large corner radius or elevated shadow.
- Do not replace campaign graphics or product media with arbitrary SF Symbols, emoji, or generated decoration.
- Do not flatten price, old price, product name, rating, and delivery into a single text hierarchy.

</design-context>
