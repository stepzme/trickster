<design-context>
---
version: 1
platform: iOS
name: Ozon-Fresh-design-analysis
description: "A dense photo-led iOS grocery interface framed by a black delivery header, rounded white shopping sheets, teal purchase controls, pink promotion signals, compact five-tab navigation, and product-first imagery."
colors:
  canvas: "#F3F4F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEFF1"
  accent-primary: "#12C9C2"
  accent-secondary: "#F53F87"
  text-primary: "#141518"
  text-secondary: "#666A70"
  divider: "#E6E8EA"
  destructive: "#D94C58"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  black-delivery-header: {}
  product-photo-card: {}
  teal-basket-control: {}
  pink-discount-badge: {}
  five-item-tab-bar: {}
---

# Overview

Ozon Fresh is a dense, fast-moving grocery storefront built around product photography and compact commerce controls. A black delivery-context header creates a strong top color mass, while the shopping area begins as a large rounded white sheet and continues through white cards separated by pale gray gutters. Teal controls identify basket, continuation, selection, and delivery progress; hot pink marks discounts and small promotional signals. Product names, prices, quantities, and delivery facts are tightly packed but clearly ranked.

# Non-negotiable visual invariants

- Main commerce screens pair a black safe-area/header mass with a large rounded white shopping surface below it.
- Product photography is the primary content of catalog and product modules and must remain large enough for fast visual recognition.
- Teal/cyan owns purchase, basket, continuation, progress, and selected commerce controls.
- Hot pink is reserved for discounts, rewards, badges, and promotional emphasis rather than general actions.
- Product cards keep a compact price-first hierarchy with old price, discount, name, rating, and basket control close to the image.
- Dense grids and horizontal rails use consistent pale gutters without placing heavy borders or shadows around every item.
- Top-level navigation is a compact white five-item bar with black selected, gray inactive, and a magenta cart badge when present.
- Checkout, profile, tracking, and support become structured single-column surfaces while retaining the teal/pink semantic roles.

# Color and surfaces

The general canvas is pale gray, while the dominant shopping and form surfaces are white. A black header occupies the top safe-area region on commerce screens and carries location or delivery context in white/gray text. `accent-primary` is bright teal/cyan for purchase actions, quantity controls, selected options, progress rings, focus outlines, and fulfillment status. `accent-secondary` is hot pink for discount chips, badges, profile gradients, and promotional highlights. Primary text is nearly black; secondary product, delivery, and review facts are gray. Red is reserved for destructive or error states, while green may confirm completion.

Cards and sheets are broad and rounded, separated by quiet gray gutters rather than strong elevation. Dark mode replaces large white/gray surfaces with charcoal and black while keeping teal controls legible. Ozon blue may appear in account/login identity contexts but should not displace teal commerce actions. Default blue tint, pink primary buttons, or shadows around every product would visibly break the system.

# Typography

Use SF Pro for clear small Cyrillic and stable numeric alignment. Login and product titles are large and bold; section headings are semibold. Product names are compact and usually limited to a few lines. Current prices are bold and visually dominant; old prices are smaller gray text with strikethrough, while discount badges use small bold white text. Quantity, rating, weight, delivery, and review metadata stays compact and gray. Order state and ETA receive stronger weight on tracking surfaces.

Dynamic Type must preserve the order of image, price, product name, supporting facts, and basket action. Allow product names and checkout labels to wrap and cards to grow; use tabular numerals for prices and quantities. Dense grids may reduce columns at accessibility sizes rather than shrinking text. Avoid decorative marketing copy that repeats visible products, offers, or order status.

# Screen composition

Main commerce screens begin with the black safe-area/header and transition into a white content sheet with a large rounded top. Beneath it, a prominent search field, horizontal category or promotion rail, and dense product sections scroll vertically above the bottom bar. Catalogs commonly use a two-column product grid. Product detail expands photography and uses a single-column information sheet. Cart, checkout, profile, support, and review screens switch to stacked full-width rows and cards. Tracking uses a map as the background with white overlay cards and circular progress.

Observed archetypes:

- **Storefront:** black delivery header, rounded white shopping sheet, search, category shortcuts, promo strips, product rails or grids, and persistent tab bar.
- **Catalog/search:** prominent pale search field, compact filter chips, dense photo grid, and in-place basket controls.
- **Product detail:** large product photo, favorites control, bold current/old price, compact product facts, reviews/media, and sticky teal purchase action.
- **Cart:** grouped product rows with photo, price, quantity stepper, promotion cues, and sticky checkout summary.
- **Checkout:** centered navigation title, stacked white form-like sections, radio/toggle rows, payment tiles, and fixed teal continuation.
- **Tracking:** map background, white status overlay, teal circular progress, and concise courier/order details.
- **Profile/settings:** flat or gently grouped rows with black titles, gray values, switches, and light/dark appearance controls.
- **Support/review:** single-column chat or rating content with disabled/enabled submission states.

# Navigation appearance

Top-level screens use a compact white five-item tab bar on the bottom safe area. Selected icon and label are black, inactive items are gray, and the cart may carry a small magenta badge. Inner screens use simple back chevrons or close controls with centered titles, especially in checkout and settings. Bottom sheets rise as broad white rounded surfaces over a dim scrim. Sticky teal action bars remain visually separated from scroll content. The black delivery header is content framing, not a generic navigation template for unrelated routes.

# Components

- **Black delivery header:** full-width black top mass including the safe area, compact white primary context, gray supporting timing/location, and minimal utility icons.
- **Product photo card:** borderless or lightly separated white/pale tile, large contained product photo, bold price, optional struck-through old price, small pink badge, compact name and facts, and local basket control.
- **Teal basket control:** compact rounded add button that becomes a quantity stepper, with saturated teal fill or outline, high-contrast label/icons, and at least a 44-point target.
- **Pink discount badge:** small pill or compact rounded label with hot-pink fill and bold white percentage/value, positioned near price or image without obscuring the product.
- **Search field:** wide pale rounded bar with leading search symbol, dark query text, and restrained placeholder.
- **Category/promo rail:** horizontal sequence of image-led rounded tiles with controlled crop and concise labels.
- **Checkout row:** full-width white row or card with dark label, gray value/description, and radio, toggle, or trailing disclosure control.
- **Tracking status card:** white rounded overlay on the map with bold order state, teal progress ring, and concise supporting details.

# Imagery and icons

Product photography is central and should be contained without distortion so packaging, food, quantity, and variants remain legible. Promo and category tiles mix product photos, packaging, colorful brand media, and occasional decorative mascot or object art. Reviews may include compact media strips. Tracking uses map tiles as a full contextual background. Functional icons are simple line or filled glyphs for search, favorites, cart, categories, payment, profile, support, and settings.

The sample does not confirm a stable standalone authored illustration system. Occasional mascots, promotional art, logos, gradients, and dimensional category decorations are campaign or UI media, not sufficient grounds for `illustrations.md`. Photography and promotional media remain compositionally important and cannot be removed or replaced by arbitrary symbols.

# States

Permission prompts appear as system UI over the same storefront context. Search and login states accommodate the iOS keyboard without changing the visual hierarchy. Product and cart states preserve image/price placement while the basket control changes from add to quantity stepper. Checkout rows show selected radio/toggle/payment states through teal and contrast. Disabled review submission remains pale and fixed in geometry. Tracking progresses through map and status overlays, with teal rings and concise state text. Light/dark selection is explicit; observed dark search and product screens use charcoal surfaces while retaining teal actions and legible product media. Modal promotion and choice sheets preserve the large white rounded surface.

# iOS adaptation

Use safe-area-aware containers so the black header includes the top inset and the white sheet begins with its rounded transition below. Use vertical `ScrollView` content, horizontal rails, adaptive product grids, and `safeAreaInset(edge: .bottom)` for the tab bar and sticky basket/checkout actions. Keep product images contained and reserve at least 44 points for steppers, hearts, tabs, chips, and sheet choices. Scroll focused fields above the keyboard.

VoiceOver should combine product image description, current and old price, discount, name, quantity, and basket state in a logical sequence. Do not rely on teal or pink alone to communicate state. Dynamic Type may reduce a two-column grid to one column and increase row height. Support the observed charcoal dark appearance with asset-aware surfaces; do not invert product photography, packaging, promotional media, or semantic colors.

# Anti-generic checklist

- Do not remove the black-header-to-rounded-white-sheet composition on main commerce screens.
- Do not replace product photography with arbitrary SF Symbols, generic gradients, or empty placeholders.
- Do not use default blue as the commerce accent or hot pink as the universal action color.
- Do not wrap every product, row, and section in a shadowed generic card.
- Do not ship an unstyled `TabView`, `Form`, picker, stepper, or sheet.
- Do not enlarge whitespace until the dense shopping rhythm and rapid comparison are lost.
- Do not flatten current price, old price, product name, quantity, and metadata into one type scale.
- Do not add decorative copy that repeats the visible product, discount, delivery state, or available action.
</design-context>
