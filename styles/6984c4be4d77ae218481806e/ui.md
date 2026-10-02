<design-context>
---
version: 1
platform: iOS
name: Fix-Price-design-analysis
description: "A dense discount-retail interface with lime-green navigation and actions, white commerce surfaces, saturated-blue informational accents, compact product photography, seasonal campaign bands, and a recurring mascot in branded moments."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F5F6"
  accent-primary: "#7BC52B"
  accent-secondary: "#2E7AD9"
  text-primary: "#202124"
  text-secondary: "#74777D"
  divider: "#E1E3E6"
  destructive: "#DF3F4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 800, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#7BC52B", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 12}
  secondary-action: {background: "#FFFFFF", foreground: "#2E7AD9", minHeight: 48, cornerRadius: 12}
  primary-card: {background: "#FFFFFF", foreground: "#202124", cornerRadius: 16, padding: 12}
  navigation: {background: "#FFFFFF", selected: "#7BC52B", unselected: "#9B9FA5"}
---

# Overview

Fix Price combines a dense value-shopping layout with an unmistakable lime-and-blue brand shell. White product surfaces and compact typography carry most retail content; lime owns global navigation and commitment actions; blue supports loyalty, information, selection, and product-page utility. Product photography dominates commerce, while seasonal campaign art and a recurring lime mascot appear in onboarding, promotions, and success moments.

# Non-negotiable visual invariants

- Bright lime green fills the global top bar or primary actions and identifies selected bottom navigation.
- White remains the main commerce surface, with pale gray limited to search, grouped lists, and disabled states.
- Saturated blue is a secondary system for informational banners, loyalty surfaces, selected filter chips, links, and product-page utility icons.
- Product name, price, availability, and cart action remain immediately visible in dense cards or rows.
- Home is a vertical sequence of fulfillment strip, broad campaign imagery, category rail, feature modules, and product sections.
- Product and category screens preserve compact 12–16-point gutters and tight retail rhythm.
- Sticky totals and lime order actions sit above the home indicator in cart and checkout.
- Mascot and campaign graphics remain bounded branded moments rather than replacing routine product photography or forms.

# Color and surfaces

White dominates catalog, product detail, cart, checkout, profile, and settings. Light gray fills search, secondary group backgrounds, disabled actions, and separators. Lime is the main color mass in splash, top bars, primary CTAs, selected navigation, pins, and some campaign scenes.

Blue carries brand identity, informational cards, loyalty/card surfaces, selected filter chips, links, and outline utilities. Seasonal banners may introduce pink, lavender, mint, orange, or deeper blue within their own bounds. Near-black carries product names and prices; gray carries metadata and inactive navigation. Red appears only in destructive cancellation and badges; green/lime indicates positive or primary state. Generic iOS blue used as the main purchase color would reverse the observed lime-first hierarchy.

# Typography

Use SF Pro as the iOS-safe typeface. Onboarding and campaign headings are roughly 24–32 points and bold or extra-bold. Working page titles are 16–20 points; product and section labels 14–17 points; body and metadata 12–14 points. Prices are heavier and larger than product copy.

Top-bar titles are centered and compact. Product names truncate or wrap within dense rows; availability and loyalty benefit remain close to price and action. With Dynamic Type, product rows grow vertically and metadata wraps before price, cart action, order total, or primary CTA loses hierarchy. Horizontal rails may reduce visible cards rather than compressing text.

# Screen composition

Use approximately 12–16-point side margins, 8–12-point local gaps, and 20–28 points between major modules. Main commerce surfaces scroll vertically above a persistent tab bar.

Observed archetypes:

- Onboarding: pale atmospheric scene with large centered mascot or 3D object, bold centered heading, short copy, and a broad lime action near the bottom.
- Home feed: lime header, fulfillment strip, large campaign banner, rounded category rail, feature tiles, then dense product sections.
- Catalog entry: two-column image category grid; product results become compact rows with thumbnail, name, price, bookmark, and lime cart action.
- Product detail: large image carousel on white, title and price, availability, lime CTA, blue utility actions, description, and specification rows.
- Loyalty content: long white page with blue cards, barcode or benefit surfaces, rounded informational blocks, and graphic panels.
- Cart and checkout: grouped rows, quantity controls, comment and offer modules, sticky summary, and strong lime order action.
- Map/store locator: full map with pins and clustered counters, plus a bottom list or provider sheet.
- Order outcome: branded mascot splash followed by a structured white order summary.

Sheets have rounded tops and dimmed context; safe areas remain clear.

# Navigation appearance

The primary shell often uses a lime top/status bar above a white page. The persistent bottom tab bar is white with five simple icon-and-label items in the observed sample; selected state turns lime and inactive items stay gray. Red circular badges may appear on cart, profile, or notification controls.

Inner pages use either a lime or white navigation bar with a back chevron. Product detail uses blue back, share, and bookmark controls over a white image area. Bottom sheets have a grab handle, rounded white top, dimmed background, and color-coded primary action. These observations define appearance only, not routes.

# Components

Primary buttons are lime rounded rectangles around 48–52 points high with white semibold type. Pressed state deepens lime; disabled state uses light gray. Secondary controls are white, outlined, or blue text.

Product cards and rows combine a contained photo, truncated name, strong price, availability or loyalty note, lime cart action, and blue bookmark or detail controls. Added state may show a quantity stepper. Category modules use rounded image tiles or compact horizontal cards.

Search uses a pale-gray rounded field with recent/popular queries and chips. Filters use pills with blue selected state; sorting appears in a compact bottom sheet with a checkmark. Cart rows include selection, delete, quantity, comments, and add-on rail. Checkout groups address, payment, promo, loyalty, and fulfillment in labeled rounded blocks with sticky total/action. Loyalty uses blue card surfaces, barcode, benefit tiles, and explanatory text. Compact controls retain at least a 44-point target.

# Imagery and icons

SKU photography is structural in catalog, detail, cart, and order history; use contain and preserve the full package. Campaign banners mix product photography, bold embedded copy, seasonal colors, and branded 3D props. A lime character with blue spikes recurs in onboarding, some home campaigns, and order success, but the sampled system does not show a comprehensive standalone illustration family for every state.

Functional icons are simple line glyphs or native map/system marks. Keep active/informational icons blue or lime according to context and avoid arbitrary mixed symbol weights. Campaign or product imagery cannot be omitted while final assets are pending; temporary assets must preserve crop, scale, negative space, and overall color mass.

# States

Observed states include onboarding, delivery/store selection, populated home and catalog, search with keyboard, selected sorting/filter chips, product detail, cart, checkout, order placed, order summary, destructive order-cancellation sheet, loyalty/card information, profile, settings, store map/list, permission alerts, and dimmed loading overlay with a green-active three-dot spinner.

Order success introduces a full-screen mascot scene before returning to structured white details. Cancellation uses a rounded modal sheet with red destructive CTA. Loading retains existing layout under a gray dim layer. Explicit full empty and network-error screens were not visible; adaptations should remain local and semantic rather than inventing a new illustration family.

# iOS adaptation

Extend the active lime, pale campaign, white, or map field through safe areas while keeping controls inset. Use vertical scrolling for home, loyalty, detail, cart, checkout, profile, and settings; reserve the lower safe area for tab, cart summary, or primary action.

Let categories and product rails scroll horizontally. Under Dynamic Type or compact widths, let rows and groups grow rather than shrinking price or availability. Present keyboard, permissions, map providers, and system sheets natively, then return to the same visual context. VoiceOver should announce product, price, availability or benefit, quantity, and cart state in order. The observed system is light-first.

# Anti-generic checklist

- Do not replace lime purchase controls with default blue buttons.
- Do not use mascot scenes inside routine product rows, filters, or checkout fields.
- Do not hide price, availability, loyalty benefit, quantity, or total.
- Do not crop package photography or replace it with generic decorative art.
- Do not let seasonal campaign colors spill across operational screens.
- Do not replace the lime/gray selected tab treatment with an unstyled `TabView`.
- Do not use generic `Form` sections for cart, checkout, loyalty, or profile.
- Do not collapse product cards, filters, top bars, and sheets to one radius.

</design-context>
