<design-context>
---
version: 1
platform: iOS
name: L-etoile-design-analysis
description: "A dense beauty-commerce interface on white and pale gray, stabilized by black purchase controls, electric-blue brand panels, hot-pink value accents, compact product data, and dominant product and editorial photography."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F4F6"
  accent-primary: "#151515"
  accent-secondary: "#172CFF"
  text-primary: "#151515"
  text-secondary: "#707076"
  divider: "#E5E5E8"
  destructive: "#D92F45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#151515", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 12}
  secondary-action: {background: "#F4F4F6", foreground: "#151515", minHeight: 48, cornerRadius: 12}
  primary-card: {background: "#FFFFFF", foreground: "#151515", cornerRadius: 16, padding: 14}
  navigation: {background: "#FFFFFF", selected: "#151515", unselected: "#9A9AA0"}
---

# Overview

L’etoile is a highly visual beauty marketplace whose dense product information is held together by a sharp monochrome transaction layer. White and pale-gray commerce surfaces carry compact packshots, prices, discounts, ratings, and variants; black owns commitment actions; electric blue and hot pink appear in bounded brand and value moments. Large editorial faces and campaign imagery give the home feed most of its visual energy.

# Non-negotiable visual invariants

- White remains the dominant commerce canvas, interrupted by large editorial or campaign image blocks rather than generic colored cards.
- Primary purchase, cart, checkout, and confirmation actions are black with white labels.
- Electric blue is reserved for large brand/account surfaces and campaign objects, not every interactive control.
- Hot pink marks discounts, personal price, badges, and measurable benefit rather than error or general navigation.
- Product cards remain compact and data-rich: image, brand, name, rating, current price, old price, discount, and variant have distinct positions.
- Product and editorial photography is compositionally essential and often occupies at least half of its card or module.
- Bottom navigation is visually light with dark selected and gray inactive states; badges are small hot-pink circles.
- Sheets use a dimmed backdrop, white rounded top surface, grab handle, and black primary action.

# Color and surfaces

White dominates pages, navigation bars, product detail, and product cards. Pale neutral gray separates category tiles, filters, cart groups, checkout modules, and secondary controls; dividers are subtle and do not outline every element.

Near-black leads headings, prices, selected navigation, and all commitment controls. Electric blue creates occasional full-width account, onboarding, or campaign fields. Hot magenta or pink marks discounts, personalized value, benefit strips, and notification badges. Conventional red remains reserved for destructive or failed states; green is limited to confirmed positive status. Default iOS blue used for ordinary links or purchase actions would visibly break the black-led control hierarchy.

# Typography

Use SF Pro Display for major campaign and page titles and SF Pro Text for products, controls, and transaction detail. Page or campaign titles sit around 24–30 points with bold weight; section headings are roughly 18–22 points; product and control labels 14–16 points; metadata, variants, ratings, and tab labels 11–13 points.

Brand names frequently use uppercase or stronger weight. Prices are bold and visually isolated; old prices are muted and struck through; discount values use pink. Dense product names may wrap to two or three lines without displacing price. With Dynamic Type, metadata and descriptions wrap before price, selected variant, or primary action loses priority; product grids may reduce columns rather than shrink text below readability.

# Screen composition

Use about 12–16-point side insets, 8–12-point gaps within product collections, and 20–28 points between major modules. Content scrolls vertically above a persistent tab bar or bottom-owned purchase action.

Observed archetypes:

- Editorial commerce feed: large campaign photos, short-video or portrait cards, horizontal product rails, brand chips, and promotional banners separated by white space.
- Category browser: rounded pale-gray tiles with blue-toned object photography arranged in a compact two-column field.
- Product results: sticky search field and result controls above a dense two-column grid.
- Product detail: large packshot area followed by variants, price and benefit, delivery card, specifications, rating, brand content, and a sticky purchase bar.
- Cart and checkout: one-column rounded groups containing item controls, fulfillment choices, map or address content, customer details, benefit inputs, payment, summary, and fixed total/action.
- Account surface: a saturated blue header above white list rows and compact promotional or benefit cards.
- Modal choice: radio or destructive options inside a rounded bottom sheet over dimmed content.

Bottom bars reserve the home-indicator inset and do not cover the last item or checkout row.

# Navigation appearance

The persistent tab bar is white with thin outline icons and short labels. The selected item becomes near-black; inactive items remain gray; hot-pink circular badges may appear on cart, favorites, or account items.

Top bars stay simple with a centered title or wordmark, a back arrow on the left, and lightweight search, heart, share, bell, support, or QR controls on the right. Bottom sheets have large rounded top corners, a gray handle, and a darkened backdrop. Navigation appearance remains separate from product routes or information architecture.

# Components

Primary actions are black rounded rectangles or compact pills, generally 48–52 points high, with semibold white type. Pressed state deepens black; disabled state reduces contrast while preserving geometry. Secondary actions use pale gray or white surfaces with dark labels.

Product cards are flat or lightly surfaced. The product image occupies the upper region; favorite control overlays a corner; brand, truncated name, rating, current price, former price, discount pill, and variant sit below in a tight vertical stack. Add-to-cart is a compact black pill or bottom control.

Search uses a broad light field with leading search mark and optional smart-search treatment. Filter chips, switches, price ranges, and sort radios have explicit selected states. Cart rows include selection, favorite/delete actions, quantity stepper, and aligned prices. Checkout modules use segmented fulfillment, address or store cards, map, radios, benefit toggles, and a persistent payment bar. All visible compact controls retain at least a 44-point target.

# Imagery and icons

Product packshots are crisp and isolated on white or pale-gray fields; use contain and preserve packaging silhouette. Editorial portraits, fragrance scenes, and campaign panels use deliberate cover crops and protected text areas. Home depends on these images for its density and hierarchy; do not omit them while assets are pending.

Campaign graphics may use glossy blue objects, sparkles, hearts, sale markers, or futuristic props, but they are campaign-specific rather than one reusable illustration language. A single ghost-like empty-search figure and isolated gift imagery do not define a family. Functional icons are thin line glyphs; maintain consistent weight and avoid arbitrary filled SF Symbol substitutions. Temporary media must preserve crop, scale, color mass, and relationship to nearby text.

# States

Observed states include onboarding and native permission prompts, city selection, populated home/catalog/results, search with keyboard, no-results search, selected sort and filter controls, favorites, product added to cart, populated cart, sharing sheet, destructive removal confirmation, checkout with address/map and certificate input, signed-out authentication choices, unauthenticated account, and authenticated blue-header account.

Across states, white remains the transaction canvas, black retains commitment priority, pink remains benefit-oriented, and sheets preserve rounded white geometry over dimmed content. The no-results state uses a small subdued character and concise text rather than a full decorative scene. No server or network error screen was observed; error adaptations should remain local and use conventional semantic color.

# iOS adaptation

Extend white or the active saturated campaign field through safe areas while keeping readable controls inset. Use vertical scrolling for feeds, product detail, filters, cart, checkout, and account; reserve the lower safe area for the tab bar or sticky purchase/payment action.

Keep product rails, brand chips, and variant collections horizontally scrollable where necessary. Present keyboard and system permission alerts natively, then restore the same visual context. VoiceOver should announce product image, brand, name, rating, price, discount, variant, and action in logical order. Dynamic Type may increase card height or reduce columns. The observed system is light-first; do not invent a general dark appearance.

# Anti-generic checklist

- Do not replace the editorial feed with a loose stack of identical white cards.
- Do not use electric blue or magenta as universal action colors; purchase hierarchy is black.
- Do not omit product and editorial imagery or replace it with decorative gradients.
- Do not flatten brand, name, rating, price, old price, discount, and variant into one text block.
- Do not add heavy shadows around every card or checkout group.
- Do not use a default blue `TabView`, generic `Form`, or arbitrary mixed icon styles.
- Do not use campaign typography or glossy props inside checkout and account forms.
- Do not collapse product tiles, controls, checkout groups, and sheets to one radius.

</design-context>
