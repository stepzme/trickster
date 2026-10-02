<design-context>
---
version: 1
platform: iOS
name: Lenta-design-analysis
description: "A dense grocery-commerce interface on white, organized by deep-blue actions, yellow brand cues, red price emphasis, green fulfillment messages, compact SKU photography, rounded product modules, and a five-item edge-integrated tab bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F5F8"
  accent-primary: "#064CA8"
  accent-secondary: "#F7C900"
  text-primary: "#17171A"
  text-secondary: "#74747A"
  divider: "#E5E8EB"
  destructive: "#D93446"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
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
  primary-action: {background: "#064CA8", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 12}
  secondary-action: {background: "#FFFFFF", foreground: "#064CA8", minHeight: 48, cornerRadius: 12}
  primary-card: {background: "#FFFFFF", foreground: "#17171A", cornerRadius: 16, padding: 12}
  navigation: {background: "#FFFFFF", selected: "#064CA8", unselected: "#A0A4AA"}
---

# Overview

Lenta is a compact, photo-led grocery storefront. White carries a long modular commerce feed, deep blue anchors selection and commitment, red or pink makes prices and discounts immediately visible, and yellow plus green provide brand and fulfillment cues. The interface stays dense through small product cards and rails while checkout, profile, and state messaging become more spacious and vertically structured.

# Non-negotiable visual invariants

- White is the dominant canvas; pale blue-gray is limited to search, secondary panels, and grouped controls.
- Deep Lenta blue owns primary CTAs, cart controls, active navigation, selected radios, and important links.
- Current price and discount receive red or pink emphasis, while old price and unit metadata remain gray.
- Product cards keep SKU photo, rating, favorite, name, unit, current/old price, discount, and cart control visibly separate.
- Home remains a dense vertical feed of campaign modules and horizontal product rails rather than a generic two-column dashboard.
- Active bottom navigation combines blue with small yellow brand cues; inactive items are light gray.
- Green fulfillment or benefit strips appear near the affected order context, not as a general decorative accent.
- Sticky cart, total, filter, and checkout controls sit above the home indicator and preserve the last content row.

# Color and surfaces

The app uses a clean white field for shopping, product detail, cart, and profile. Pale blue or cool gray fills search fields, secondary modules, disabled actions, and dividers. Shadows are soft and sparse.

Deep blue is the primary action and selected-state color. Warm yellow or orange identifies brand, ratings, loyalty details, and occasional campaign accents. Red or hot pink leads current prices, discount pills, and promotional stories. Green marks free delivery, savings, cashback, eco, or other positive fulfillment conditions. Near-black carries product names, totals, and decisions; gray supports weight, address, unit price, old price, and helper copy. Generic iOS blue that ignores the yellow/red/green role separation would make the system visually flatter.

# Typography

Use SF Pro as the iOS-safe typeface. Page titles and major state headings are approximately 24–28 points and bold. Section headings are about 18–20 points; product and control labels 13–15 points; weights, addresses, old prices, and metadata 11–13 points.

Product names are compact and may wrap to two lines. Current prices use stronger weight and red emphasis; old prices are gray and struck through; unit or pack information is quieter. Checkout totals and decisions use bold black type. With Dynamic Type, metadata wraps or moves below the main row before price, quantity, order status, or primary action loses hierarchy; dense grids may reduce columns.

# Screen composition

Use about 12-point page gutters, 8–12-point gaps between product cards, and 20–28 points between major feed modules. Primary content scrolls vertically above an edge-integrated tab bar or sticky bottom strip.

Observed archetypes:

- Grocery home feed: address and fulfillment selector, pale search field, campaign carousel, repeated horizontal product rails, occasional full-width banners or recipe imagery, and persistent cart or delivery-status strip.
- Catalog grid: search above rounded category tiles with product or food imagery.
- Product listing: title and compact chips above a two-column grid, with floating filter/sort controls above the tab bar.
- Product detail: large centered package photo on white, rating and review marker, title and article metadata, related product rail, and sticky purchase controls.
- Cart and checkout: one-column rows with delivery/address information, progress or benefit strip, item steppers, comments and promo controls, summary, radio choices, and fixed total/actions.
- Profile and loyalty: promotional/summary cards followed by settings-style rows with left icons, right chevrons, and occasional badges.
- Empty state: centered character or small illustration, bold short title, restrained explanation, and a single blue recovery action.

The camera scanner intentionally switches to a dark full-screen surface. Other screens preserve clear iOS safe areas.

# Navigation appearance

The persistent bottom tab bar is a white edge-integrated surface with five observed icon-and-label positions. Selected items use blue with small yellow details; inactive icons and labels are light gray. Badges remain compact.

Top bars are minimal, with a centered title, back chevron on the left, and square or circular icon actions where needed. Search, scan, favorite, and contextual controls remain visually compact. Bottom sheets use dimmed background, white rounded top corners, a grab handle, and blue primary action. These properties describe appearance only, not navigation structure.

# Components

Primary actions are deep-blue rounded rectangles around 48–52 points high with white semibold text. Pressed state deepens blue; disabled state uses a pale lavender-gray fill. Secondary actions are white or pale gray with blue labels.

Product cards are dense photo-first modules: rating and favorite near the top, centered package image, compact name and unit, current and former price, discount or benefit label, and a square blue cart button. Added state replaces the button with a clear minus/quantity/plus stepper.

Search uses a pale-blue rounded field with search and optional scan access. Filter chips and radios show explicit blue selection. Cart rows include SKU thumbnail, price, quantity stepper, and relevant fulfillment state. Checkout uses row groups, step indicators, radio choices, and paired or single bottom actions. Loyalty surfaces include barcode, points or chips cards, and compact progress. All compact controls retain at least a 44-point target.

# Imagery and icons

Product packaging photography is structural and should be aspect-fit on white. Category tiles may use cropped food still lifes, while recipe/editorial modules use real food photography with deliberate cover crops. Campaign stories and banners combine photos, commercial graphics, bold embedded type, and occasional mascot imagery; they remain bounded campaign assets.

An orange cat recurs in empty cart, empty notifications, and some loyalty or promotional contexts, but the sampled breadth is insufficient to define a complete standalone illustration system. Do not extrapolate it into ordinary product cards or every status. Functional icons are simple filled or outlined glyphs with blue selected and gray inactive treatment. Missing final imagery must be replaced by a temporary asset that preserves crop, scale, color mass, and text-safe area.

# States

Observed states include onboarding, delivery/store selection, populated home and catalog, search with keyboard and suggestions, barcode scanner and loading, full-screen campaign story, selected filter/sort controls, product detail, favorite, added-to-cart quantity state, empty and filled cart, checkout with payment selection, order placed and courier status, authenticated and unauthenticated profile, loyalty barcode and progress, purchase history, payment methods, and empty notifications.

Empty cart and notifications use the orange cat centered above concise text. Filled and selected states retain the white canvas and introduce blue controls close to the affected item. Order status uses compact bottom toast or pill treatment rather than a new full-screen visual language. Broad error coverage was not visible; any error adaptation should stay local and use semantic color without replacing the brand hierarchy.

# iOS adaptation

Extend the active white, camera, or campaign field through safe areas while keeping readable controls inset. Use vertical scrolling for home, lists, detail, cart, checkout, loyalty, and profile. Reserve the lower safe area for the tab bar, filter controls, cart strip, or checkout actions.

Keep product rails and campaigns horizontally scrollable. Dense two-column grids may become one column under large Dynamic Type rather than shrinking labels and prices. Present keyboard, camera/barcode, notification, and other system permission transitions natively, then restore the same context. VoiceOver should announce SKU, rating, name, quantity/unit, current and old price, discount, and cart state in order. The observed package is light-first, with dark appearance limited to the scanner.

# Anti-generic checklist

- Do not use red as the primary action color; red belongs to price and promotion.
- Do not replace dense SKU rails with a loose stack of oversized cards.
- Do not hide unit, quantity, old price, discount, or fulfillment conditions.
- Do not omit package photography or use aspect-fill crops that cut off the product.
- Do not place the cat mascot inside ordinary product cards or every state.
- Do not replace the selected blue/yellow tab treatment with default blue `TabView` styling.
- Do not use generic `Form` chrome for checkout, filters, or profile rows.
- Do not collapse product cards, controls, state panels, and sheets to one corner radius.

</design-context>
