<design-context>
---
version: 1
platform: iOS
name: Sportmaster-design-analysis
description: "A dense blue-led iPhone sports retailer combining white commerce surfaces, dark-navy discovery headers, saturated cobalt actions, product and athlete photography, colorful campaign blocks, a raised-center bottom bar, and playful service artwork."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F3F5F8"
  surface-secondary: "#E8ECF2"
  accent-primary: "#1559E8"
  accent-secondary: "#232B44"
  text-primary: "#17191D"
  text-secondary: "#6F737B"
  divider: "#E2E5E9"
  destructive: "#E84C55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
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
  primary-action: {fill: "cobalt blue", text: "white", height: 52, radius: 12}
  secondary-action: {fill: "white or pale gray", text: "near-black", height: 48, radius: 12}
  product-card: {fill: "white", image: "product photography", radius: 12}
  service-card: {fill: "white or dark navy", art: "mascot or utility illustration", radius: 16}
  navigation: {fill: "white", active: "cobalt", center: "raised circular action"}
---

# Overview

Sportmaster is a dense sports-commerce interface with a stable white shopping shell and strong cobalt controls. Dark-navy search and promotional zones, saturated campaign blocks, product photography, and cutout athletes create energy above practical catalog, product, checkout, profile, and service surfaces. A raised center item distinguishes the bottom navigation. Utility illustrations add playfulness to activity and wellness tools without replacing the photography-led store.

# Non-negotiable visual invariants

- Cobalt blue is the operational anchor for filled CTAs, active controls, selected navigation, and key brand blocks.
- Shopping surfaces remain white and information-dense; dark navy is concentrated in discovery, search, and selected service contexts.
- Product grids use real product photography or clean cutouts, with bold current price and much smaller rating, old price, and metadata.
- Home and promotional screens alternate large campaign imagery with compact rails and tiles rather than uniform dashboard cards.
- Bottom navigation is a white five-zone bar with a visibly raised circular center action above the baseline.
- Product and checkout pages are long single-column scrolls with sticky price/purchase controls above the home indicator.
- Filters, sizes, explanations, and order actions use rounded bottom sheets with drag handles and dimmed backdrops.
- Activity and wellness services use recurring playful mascot/utility art, while catalog and sizing stay photographic.

# Color and surfaces

White is the main commerce canvas; cool light gray separates search, forms, product tiles, and grouped account rows. Cobalt blue owns primary actions and selection. Dark navy forms large top/search or service fields and provides contrast for campaign content.

Red marks discounts, timers, delete, or sale urgency; green is reserved for availability, payment, or success; yellow can support ratings and rewards. Stories and promotions may introduce cyan, violet, orange, and red as contained campaign masses. Default platform blue, muddy gradients, and campaign colors leaking into checkout states would break the hierarchy.

# Typography

Most UI uses SF Pro with bold section headings, restrained 15–17-point form labels, small product metadata, and clearly heavier current prices. Authentication or promotional prompts sometimes use condensed or italic display treatment; stories can use large campaign lettering, but transactional screens remain neutral.

Allow product names and form validation to wrap under Dynamic Type while keeping price and CTA prominent. Ratings, old price, delivery notes, and loyalty metadata stay subordinate. Do not reuse display lettering for catalog metadata or make all product facts equally bold.

# Screen composition

Home begins with a dark-navy search/promotional block below the safe area, then stacks carousels, stories, brand chips, category tiles, and product rails on white. Catalog uses image-led category grids; product results use a dense two-column grid with narrow gaps and compact filters/sort controls.

Product detail gives the image carousel the upper mass, followed by title, price, variants, delivery, characteristics, recommendations, and a sticky price/cart bar. Checkout, profile, personal-data, and address archetypes are long white single columns with grouped rows and full-width blue actions. Map pickup uses a full map field with overlays.

Service and tracker screens may switch to dark navy or colorful hero panels, progress rings, habit cards, and authored mascot artwork. Bottom navigation stays above the home indicator; focused flows use a compact push-style top bar.

# Navigation appearance

The persistent bottom bar is white with five compact zones, muted inactive glyphs, cobalt selection, and an elevated circular center button. Shopping surfaces keep a prominent rounded search field near the top. Push headers use ordinary back controls plus compact search, share, favorite, or chat icons.

Sheets rise with large rounded upper corners, a drag handle, and a dim scrim. Filter chips, view toggles, and size cells use pale tracks with cobalt selection. This visual shell does not prescribe the source app's routes.

# Components

Product cards pair a large image or cutout with favorite control, compact title, rating, bold price, optional old price, and discount badge. Category tiles use pale backgrounds and contained product/person cutouts. Primary actions are broad cobalt rectangles with white semibold labels.

Characteristic components include story frames, promo carousels, chips, two-column grids, image carousels, size selectors, sticky cart bars, swipe actions, payment action stacks, address fields, profile rows with badges, QR/bonus cards, service tiles, progress rings, and habit/water/calorie cards. Disabled controls lower saturation while retaining geometry.

# Imagery and icons

Product and athlete photography is central. Use aspect-fit for merchandise and category cutouts, aspect-fill for lifestyle and story media, and preserve garment or equipment proportions. Campaign graphics may be bold, but cannot replace the product image footprint while assets are pending.

Icons are clear commerce and activity glyphs with consistent weight. Service areas also use recurring authored fire, food, water, map, and location characters or objects. Keep those distinct from product photography and one-off marketing story artwork.

# States

Observed states include unauthenticated and phone/SMS entry, profile completion, story slides, store/geolocation empty state, catalog grid and list modes, filter and size sheets, product recommendations, cart swipe actions, checkout/contact forms, map pickup, activity dashboard, calorie empty/progress state, profile menu, order countdown, edit sheet, empty/filled addresses, and validation warnings.

White/cobalt commerce hierarchy remains constant across populated and form states. Service states can increase navy and illustration weight; error/destructive states use local red without recoloring the entire screen.

# iOS adaptation

Use safe-area-aware vertical scrolls for long store, product, checkout, and profile content. Keep the raised center navigation and sticky action bars clear of the home indicator. Two-column product grids may collapse to full-width rows when Dynamic Type or compact width makes price/title unreadable.

Maintain 44-point targets for sizes, filters, favorites, nav, and service cards; label unusual icons for VoiceOver; keep product title, price, variants, delivery, then action in logical order. Handle keyboard, swipe actions, map overlays, and sheet detents natively. Preserve the observed light commerce appearance and dark-navy service accents rather than inventing global dark mode.

# Anti-generic checklist

- Do not replace product photography and dense price metadata with generic equal cards.
- Do not expose default blue controls, an unstyled `TabView`, or grouped `Form` sections.
- Do not flatten cobalt operation color, dark-navy discovery fields, and campaign colors into one accent.
- Do not hide sizes, availability, delivery, totals, or sticky purchase actions beneath imagery.
- Do not apply mascot artwork inside routine product tiles or checkout rows.
- Do not crop merchandise, garments, athletes, or campaign focal subjects carelessly.
- Do not remove the raised center navigation geometry or use five identical tab items.
- Do not apply one corner radius and heavy shadow to every card, chip, sheet, and field.

</design-context>
