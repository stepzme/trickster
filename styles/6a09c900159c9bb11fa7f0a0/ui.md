<design-context>
---
version: 1
platform: iOS
name: OZON-Select-design-analysis
description: "A black fashion-commerce interface using compact luxury-style branding, rounded white product islands, editorial product photography, dense marketplace metadata, hot-pink sale prices, gray search/filter chrome, and black pill purchase actions."
colors:
  canvas: "#09090B"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F4"
  accent-primary: "#E91E63"
  accent-secondary: "#2B2B30"
  text-primary: "#101012"
  text-secondary: "#66676C"
  divider: "#E4E4E7"
  destructive: "#D92D52"
  primary: "#1E1E22"
  on-primary: "#FFFFFF"
  primary-focus: "#000000"
  ink: "#101012"
  ink-muted: "#66676C"
  ink-subtle: "#9A9BA1"
  ink-tertiary: "#C7C8CE"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F4"
  surface-3: "#E8E8EB"
  surface-4: "#DADBDF"
  hairline: "#E4E4E7"
  hairline-strong: "#CCCDD2"
  hairline-tertiary: "#B5B6BC"
  inverse-canvas: "#09090B"
  inverse-surface-1: "#171719"
  inverse-surface-2: "#2B2B30"
  inverse-ink: "#FFFFFF"
  brand-secure: "#E91E63"
  semantic-success: "#2EA66A"
  semantic-overlay: "#000000"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
  display-xl: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: 0}
  display-lg: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0}
  display-md: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0}
  headline: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  card-title: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: "SF Mono", fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 36
rounded:
  control: 18
  card: 18
  sheet: 22
  pill: 999
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  full: 9999
components:
  primary-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  secondary-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 10}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-tertiary: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  product-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8}
  feature-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  text-input: {backgroundColor: "#1F1F23", textColor: "{colors.inverse-ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14]}
  filter-chip: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", padding: [8, 12]}
  status-badge: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

OZON Select is a dark fashion marketplace with white commerce islands placed on a black canvas. The viewed screens rely on product and editorial photography, brand logos, dense price/rating/delivery metadata, a compact black Select wordmark, pink sale signals, and black pill purchase controls.

**Key Characteristics:** black top and page fields, centered compact wordmark, gray search pill, horizontally moving brand/category strips, two-column white product cards, pink prices, white rounded cart/profile sheets, black bottom purchase pills, and a white bottom tab bar with restrained gray icons.

# Non-negotiable visual invariants

- The primary browsing canvas is black; product and account content appears as large white rounded islands on top of it.
- Product photography is the main visual mass. Do not replace it with illustration, decorative gradients, or icon tiles.
- Product grids use tight two-column cards with large image areas, small metadata, heart affordances, and pink price text.
- Purchase, checkout, and apply actions use black or very dark pill buttons with white text.
- The Select wordmark is small, centered, and luxury-like; do not scale it into a large marketing logo in app chrome.
- Pink is limited to prices, sale tags, favorites, scarcity badges, and notification dots.
- Search, filters, and secondary chips are neutral gray/white pills with black selected states.
- Rounded geometry is broad and soft for sheets/cards, but spacing remains dense and commerce-first.

# Color and surfaces

Black is the environmental color: top safe-area bars, browsing gaps, campaign sections, and checkout backgrounds. White surfaces are broad and rounded, often spanning the full screen width with only narrow black gutters between cards or sheets. Pale gray is used for search fields, disabled text, low-priority controls, old prices, and dividers.

Hot pink is the commercial accent. It marks current prices, sale labels, favorites, countdown badges, and small alert dots. It should never become the default CTA color. Success states use green sparingly, as seen in the completed-order checkmark. Destructive or removal states can use red/pink only when paired with clear text.

Generic light-mode grouped backgrounds, default blue selection, colorful category tiles, or heavy borders would break the reference. Keep the system monochrome first; accent only after price/status hierarchy is established.

# Typography

Use SF Pro Text and SF Pro Display for app content. The Select wordmark may use a compact high-contrast serif or logo asset, but ordinary headings and product text are clean sans. Letter spacing should remain normal in content; do not use luxury-style tracking for product names or controls.

Headings are short and bold, usually 20 pt or smaller in dense screens. Product cards prioritize price first, then old price, item title, rating, review count, and delivery. Prices use bold hot pink with compact ruble marks and struck-through old prices in gray. Descriptions and settings rows stay readable and left-aligned.

Dynamic Type should expand row heights and allow product names to wrap to two lines, but keep price, image, and purchase action visible before optional metadata. Long descriptions scroll; sticky buy pills remain legible and do not cover text.

# Screen composition

Home and search screens use a black top area with the wordmark, then a gray search pill, a narrow horizontal brand ticker or logo strip, a wide promotional image banner, round category tiles on black, and a two-column product grid. Product cards touch the black gutters closely; their rounded corners create the main rhythm.

Catalog and profile screens use large white sheets with very rounded top corners over black. Rows inside those sheets are dense, left-aligned, and separated mostly by whitespace rather than heavy lines. Brand-logo strips appear as white rounded panels.

Product detail screens start with a large product image on a pale field, overlay compact circular or pill controls at the top, then stack white rounded sheets for variants, tabs, description, brand, ratings, and store information. A black pill buy button sits near the bottom and may repeat while scrolling.

Cart and checkout screens keep the black environment visible at the top and between white order summary sheets. Totals, discounts, and delivery details are grouped tightly. The checkout action is a bottom dark pill with the amount inside a secondary dark capsule.

Settings screens use a black header, a large circular avatar placeholder, and white rounded sheets containing switches, row labels, and muted explanatory blocks. The bottom tab bar stays white and visually separate from the black page field.

# Navigation appearance

The bottom navigation is a fixed white bar with six compact icon destinations in the viewed commerce shell. Active icons are black; inactive icons are gray; notification badges are small pink circles. Labels are generally absent or visually minimal.

Back controls, search, share, and favorite actions are small circular or rounded gray controls over black or image fields. Search fields are pill-shaped and muted, with placeholder text in gray. Do not introduce a large top navigation title, web header, footer, or tab labels that compete with product cards.

Sheets and modals are native in behavior but visually simple: white rounded panels over the current screen, black text, gray secondary text, and dark primary actions. System permission dialogs can remain native; the underlying screen should still show the black commerce shell.

# Components

Product cards are rounded white rectangles in a two-column grid. Image area dominates the card; a heart icon sits in the upper right; price is pink and bold; old price is gray and struck through; item title is compact; rating uses a small star and count; delivery appears as a black pill with a bag icon and date.

Promotional banners are real product/editorial photography with soft rounded corners and white copy over image. They should feel like fashion campaign panels, not abstract gradients.

Category chips on home are black circular tiles with monochrome product/category imagery and small white labels. Filter chips are horizontal pills; selected state uses stronger black fill or black checkmark, while unselected remains light gray or white.

Primary buttons are dark pills, full width when committing to buy/apply/checkout, with white centered text. Secondary amount or installment capsules can sit inside or beside the main pill in a darker gray.

White account/cart sheets have very rounded top corners, compact headings, dense rows, small product thumbnails, and right-aligned amounts. Switches are monochrome; the on state uses dark fill rather than iOS green unless a system setting specifically requires it.

# Imagery and icons

Use high-quality raster product photos and brand logos. Crops are clean and commercial: centered garments, accessories, models, or beauty objects on white/light backgrounds inside cards; editorial campaign images can use warmer lighting and tighter crop. Do not obscure products with decorative stickers.

The app does not show a stable authored illustration system in the viewed evidence. Use product photography, brand marks, UI icons, and payment/bank images; do not create generic empty-state illustrations unless a future approved reference proves them.

Icons are compact monochrome line or filled glyphs: heart, bag, search, profile, share, trash, back, filter, and star. They must stay utilitarian and small. Avoid colorful icon sets, oversized SF Symbol art, and ornamental badges unrelated to price/status.

# States

Selected filter rows use a black filled check in a circular radio position. Filter pages keep the same white rounded panels, black header text, gray toggles, and bottom dark apply button. Search focus brings up the iOS keyboard while preserving the black header and product grid context.

Cart states show selected items with black checkboxes, pink discounts, small urgency badges, and a dark checkout pill. Completed order uses a green circular check above a white thank-you sheet, then returns to black-backed recommendation cards. App rating prompts may appear as native bottom panels over the commerce grid.

Settings states use monochrome switches, pale explanatory cards, and muted values such as currency. Notification badges remain pink and small. Disabled or secondary values use gray, not opacity-only pale text that fails contrast.

# iOS adaptation

Respect top and bottom safe areas while keeping black visible behind the wordmark and tab bar transitions. Grids stay two columns on standard iPhones; on very narrow widths, preserve product image and price first and let names truncate or wrap before reducing card gutters below readability.

Use native scroll views for long product details, filters, cart, and settings. Sticky bottom buy/apply/checkout bars must avoid the home indicator and must not cover the last content row. Keyboard search should keep the focused search field visible and preserve enough context to show results above the keyboard.

Touch targets for product cards, hearts, chips, radio rows, bottom nav, and purchase buttons remain at least 44 points. VoiceOver order should follow visual reading order: wordmark/search, category/filter context, product cards top-left to bottom-right, then bottom navigation.

Support light/dark only if the app shell preserves the observed black-commerce identity. A generic all-white light mode is not a valid adaptation of these references.

# Anti-generic checklist

- Do not replace the black canvas with a plain white SwiftUI `List` or `Form`.
- Do not use default iOS blue for search focus, filters, links, selected tabs, or buttons.
- Do not make buy/checkout buttons pink; pink is for prices and status.
- Do not shrink product photography to make room for decorative copy or marketing panels.
- Do not add authored illustrations, empty-state mascots, or emoji decoration without fresh evidence and user approval.
- Do not use heavy shadows, glass blur, or colorful card backgrounds in the product grid.
- Do not give every surface the same radius; product cards, broad sheets, pills, and tiny badges need distinct geometry.
- Do not turn the compact wordmark into a large hero headline or replace brand-logo strips with text-only lists.

</design-context>
