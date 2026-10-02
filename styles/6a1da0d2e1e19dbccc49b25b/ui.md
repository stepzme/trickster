<design-context>
---
version: 1
platform: iOS
name: Arbuz-design-analysis
description: "A bright grocery-commerce interface with white shopping surfaces, fresh green conversion controls, teal reward prices, real product photography, and cheerful authored food characters used only for brand and promotional moments."
colors:
  primary: "#46D65C"
  on-primary: "#FFFFFF"
  primary-soft: "#E7F9EB"
  primary-tint: "#CFF5D6"
  reward-teal: "#20AEB4"
  accent-yellow: "#FFE27A"
  accent-orange: "#FF9C3A"
  accent-sky: "#BFEAF4"
  ink: "#171A18"
  ink-muted: "#686E69"
  ink-subtle: "#A6ACA7"
  canvas: "#FFFFFF"
  surface-1: "#F5F7F5"
  surface-2: "#EEF3EF"
  surface-3: "#E3EAE4"
  hairline: "#E2E7E2"
  semantic-success: "#35B94B"
  semantic-warning: "#FFD13B"
  semantic-danger: "#E34D4A"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 1.02, letterSpacing: 0}
  display-lg: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 800, lineHeight: 1.08, letterSpacing: 0}
  display-md: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0}
  headline: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 700, lineHeight: 1.22, letterSpacing: 0}
  card-title: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0}
  subhead: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: "SF Mono", fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 28, xxl: 40, section: 34}
rounded: {xs: 6, sm: 10, md: 14, lg: 20, xl: 28, sheet: 26, pill: 9999, full: 9999}
components:
  primary-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  secondary-action: {backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 6}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8}
  reward-banner: {backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  bottom-navigation: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: [8, 10]}
---

# Overview

Arbuz.kz is a light grocery shopping system where products stay literal and shoppable, while the brand layer is playful. The dominant screens are white, densely merchandised, and built around product pack photography, compact prices, a soft gray search field, green conversion controls, and a floating five-item tab bar. Promotional moments use yellow, green, blue, and pink authored art with smiling fruit or shopping-bag characters, but ordinary product decisions remain photographic and factual.

# Non-negotiable visual invariants

- Product grids and rails use real isolated pack photography on white or very pale rounded tiles.
- Fresh green is the only dominant conversion color for selected filters, add actions, checkout bars, and confirmed states.
- Teal reward prices sit close to regular prices and must remain visually distinct from sale discounts.
- Search and form fields are pale gray rounded rectangles with minimal borders and black or muted gray text.
- Discount badges are compact dark or colored pills placed directly on product imagery, not separated into banners.
- The bottom navigation appears as a soft floating white pill area with a green selected capsule.
- Authored food characters and shopping-bag art appear in onboarding, loyalty, subscription, and promo education, not as product substitutes.

# Color and surfaces

The base canvas is white. Arbuz uses negative space and very pale gray panels rather than a tinted full-page background. Product cards often read as white cells with only subtle separation, while category tiles and search fields use `surface-1` or `surface-2`.

Green is the action system: login/skip buttons in onboarding, selected category chips, selected filter chips, checkout bars, delivery confirmation, and bottom-tab selection. Keep it saturated and friendly, closer to fresh produce than finance green. Do not replace it with default iOS blue or a generic emerald.

Teal marks reward value, especially "to Freedom" prices and cashback-related value. It should look secondary to the green CTA but more prominent than gray metadata. Yellow and orange carry discounts, "friends" subscription value, food mascots, and promotional warmth. Sky blue appears in referral and cashback banners.

Text is near-black for product names, totals, section titles, and sheet headers. Use muted gray for weights, addresses, timestamps, old prices, and explanatory lines. Hairlines are faint; visible boxed borders are rare except on selected time/date slots and numeric filter fields. Modal scrims are black with high opacity, with white sheets over them.

# Typography

Use SF Pro Display for large campaign or screen statements and SF Pro Text for commerce UI. The strongest type appears in onboarding and promo pages: large, heavy, black, left-aligned headline blocks on saturated yellow or blue backgrounds. In shopping screens, hierarchy is tighter: section headings around 19 to 22 points, product names around 13 points, prices and reward lines compact but readable.

Product-card copy should wrap naturally at two lines before truncation. Current price is stronger than old price; old price is gray and struck or visually de-emphasized. Reward prices are small but colored teal and explicitly labeled. Quantity, order identifiers, and short codes may use tabular alignment but should not become a technical monospace aesthetic outside identifiers.

Dynamic Type should expand rows and cards vertically. Preserve priority in this order: section title, product image, product title, current price, reward price, then metadata. Heavy display type belongs to campaign and onboarding assets; do not use it for dense forms or product grids.

# Screen composition

Arbuz uses a vertical feed with 12 to 16 point side gutters, dense product modules, and a persistent safe-area-aware bottom navigation. Home starts with a large image or campaign area, then a rounded search field, a compact address prompt, three icon shortcuts, and multiple horizontal product rails. Product rails use two to three visible cards at a time, with images occupying the upper half and pricing below.

Catalog screens use a search field followed by compact category rows and two or three column category tiles. Category tiles place a real object or product group on a pastel background, with a short label beneath or inside the tile. Product category screens switch to a denser two-column grid with a small title bar, horizontal chips, and filter/sort icons in the top area.

Product detail screens give the product image the top half of the viewport and overlay app controls in translucent white circles. The lower sheet-like content area contains title, rating, tags, description, and a fixed bottom purchase bar. The purchase bar uses a green action surface with quantity and price, and a separate teal reward strip beneath when relevant.

Cart and checkout screens are scroll views with a centered title, small utility icons, address or delivery context near the top, product rows, reward education banners, recommendations, and a fixed green total action. Checkout uses grouped section headings, pill date selectors, outlined time slots, rounded text inputs, and radio-style payment rows.

Profile and loyalty surfaces are more promotional: profile cards mix order status, rating prompts, cashback banners, bonuses, and subscription panels. These still keep white cards and rounded promotional strips, but illustration and color blocks become larger than on ordinary product pages.

# Navigation appearance

Navigation bars are minimal, usually a centered title with a soft circular back or close control at the leading side and compact line icons at the trailing side. Product details use translucent or white circular controls over imagery. Modal sheets have large rounded top corners, a small close icon, and a black scrim.

The bottom navigation is a floating white rounded capsule with five compact destinations. Icons are thin black line symbols; the selected item sits inside a pale green pill and uses green icon/text. Badge counts are small red circles. Avoid a default `TabView` look with flat full-width separators or blue active tint.

# Components

Primary buttons are green rounded rectangles, roughly full width on forms and sticky bars, with white semibold text. Secondary buttons are pale green or white with green text. Disabled or loading action bars keep the green rectangle but may show a centered spinner or softened text.

Search fields are light gray rounded rectangles with a magnifier, low-contrast placeholder, and no heavy border. When the keyboard is present, the field remains near the top and results compress above the system keyboard. Suggestions use simple rows with magnifier icons and thin dividers.

Product cards contain a photo area, discount badge, heart control, title, rating/weight metadata, teal reward price, gray old price, black current price, and a small green plus. Keep the plus minimal, not a large filled button. Sold-out or unavailable states gray the image area and replace conversion with direct status text.

Chips are pill-shaped and shallow. Selected chips are green with white or high-contrast text; unselected chips are pale gray. Filter sheets use grouped chip fields, light input boxes, green sliders, and a sticky green confirm button. Sorting uses a white bottom sheet over a dimmed catalog, with wheel-like centered choices and a green confirm button.

Reward and subscription banners use rounded pastel or saturated cards, short explanatory copy, and authored art anchored to an edge. Do not use generic "card inside card" nesting; each card should have one clear surface boundary.

# Imagery and icons

Shopping imagery is literal: use clean cutout photos of packaged goods, produce, and prepared foods. Photos should preserve labels and scale, sit on white or pastel tile backgrounds, and avoid decorative crops that hide the item. Hero sale imagery can composite large fruit, price tags, and soft shadows, but must remain bright and inspectable.

Icons are small, thin, black or green line icons. Use them as controls and category aids, not as decorative replacements for product photos. The brand illustration layer uses smiling fruits, vegetables, bags, coins, and small food characters with soft shading. When final illustration assets are unavailable, the UI should reserve image slots and require raster assets rather than replacing the art with SF Symbols or SwiftUI shapes.

# States

Observed states include onboarding, search with keyboard, populated product grids, selected filters, sorting sheet, cart with item, cart quantity removal/loading, checkout form, delivery date/time selection, message list, profile order status, loyalty subscription, and system notification permission. Across these states, white surfaces, green conversion controls, compact chips, and muted metadata remain consistent.

Selected controls turn green or purple-blue only when the screen is a Freedom SuperApp embedded view; in native Arbuz shopping surfaces, selection should remain green. Modal states dim the underlying screen with a dark overlay and keep the active sheet white. Permission alerts are native iOS, but surrounding screens still retain authored photography or brand art behind them.

# iOS adaptation

Respect the iPhone safe areas: status bar over clean backgrounds, bottom navigation above the home indicator, and sticky checkout actions above the tab bar or replacing it when focus is required. Use `ScrollView`-style vertical expansion instead of shrinking content. Product grids can reduce visible columns on narrow devices, but product photos, prices, and add controls must remain legible.

Keyboard states should keep the search title, input, and first results visible above the keyboard. Bottom sheets should use native sheet mechanics with custom rounded white surfaces, custom chips, and green commit buttons. All add, chip, filter, favorite, back, close, quantity, and checkout controls need at least 44 point hit areas even when the visual mark is small.

Dynamic Type may increase row/card height and turn horizontal metadata into stacked lines. Do not shrink product photos below recognition size to preserve a fixed grid. Support light appearance as the primary style; a dark-mode adaptation may dim the canvas but must preserve white commerce surfaces unless a specific dark reference exists.

# Anti-generic checklist

- Do not replace Arbuz green with default iOS blue or a desaturated generic green.
- Do not build the catalog from plain `List` or `Form` rows; it needs image-led grocery cards and chip filters.
- Do not omit product photography while waiting for final assets.
- Do not use mascot art inside product cards where a purchasable product photo is required.
- Do not use one universal corner radius; search, chips, product cards, sheets, and nav pills have different radii.
- Do not turn sale badges, reward prices, and old/current price into uniform text rows.
- Do not substitute arbitrary SF Symbols for the observed bottom-nav and category icon styling.
- Do not add web-like headers, footers, hover states, or desktop navigation.

</design-context>
