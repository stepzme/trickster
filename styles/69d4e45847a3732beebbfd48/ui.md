<design-context>
---
version: 1
platform: iOS
name: Glovo-design-analysis
description: "A delivery marketplace interface with a warm yellow discovery field, teal transactional buttons, white commerce and checkout surfaces, rounded photography-led cards, friendly heavy text, bottom icon navigation, and authored service illustrations in circular badges."
colors:
  canvas: "#FFC244"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F5F5F3"
  surface-tertiary: "#ECEDEA"
  accent-primary: "#00A082"
  accent-primary-dark: "#008B70"
  accent-promo: "#F6C84C"
  text-primary: "#1D1D1F"
  text-secondary: "#65676A"
  text-tertiary: "#97999C"
  divider: "#E5E6E2"
  outline: "#CBCFC8"
  destructive: "#D84A3A"
  overlay: "#161817"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Rounded", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 700, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 500, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", padding: [14, 18]}
  secondary-action: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", borderColor: "{colors.divider}", padding: [12, 16]}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.card}", padding: 14}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-tertiary}", selectedColor: "{colors.text-primary}", typography: "{typography.caption}", height: 56}
---

# Overview

Glovo's sampled iOS screens start with a bright yellow branded world and become progressively more white and information-led in lists, product detail, cart, checkout, tracking, and profile. The app is recognisable through the yellow canvas, teal commitment buttons, rounded white surfaces, circular illustrated category badges, food photography, bold friendly headings, and compact receipt-like commerce rows.

# Non-negotiable visual invariants

- The discovery surface uses a full yellow upper field with white content rising from the bottom in a soft curved transition.
- Primary transactional actions are teal, pill-shaped, full-width or wide, and use white bold labels.
- Service categories appear as authored multicolor illustrations inside white circular badges on yellow.
- Restaurant and dish browsing is photography-led, with rounded image corners and compact timing, rating, fee, and promo badges.
- Cart and checkout abandon yellow decoration and use mostly white surfaces with receipt-like grouping, totals, dividers, and fixed bottom actions.
- Bottom navigation is a white four-item icon bar with dark selected emphasis and small teal notification dots.
- Sheets and modals use large rounded top corners, white or cream fills, dim overlays, and a close control at the upper right.

# Color and surfaces

Yellow is the atmospheric brand canvas on splash, login header, home, profile header, and category discovery. It should occupy large areas only where the reference uses it as environment; checkout and tracking are not yellow. Teal-green is the only primary transaction color for SMS, order, cart, payment, help, and positive progress. White is the dominant surface for lists, sheets, restaurant pages, cart, checkout, and profile content. Pale cream or gray groups search fields, disabled options, and checkout summaries.

Mustard promo badges mark discounts and free delivery. Text is near-black for titles, restaurant names, dish names, prices, totals, and selected tabs; gray is used for descriptions, timing, conditions, and inactive tab items. Generic blue controls, playful yellow checkout buttons, or a gray grouped iOS background would visibly break the reference.

# Typography

Use SF Pro Rounded for large greetings, page titles, and section headings; use SF Pro Text for dense commerce copy. Titles are heavy and friendly, typically 21 to 28 points. Restaurant names, dish names, cart totals, and checkout totals use bold weight. Descriptions, ETA ranges, service fees, and conditions use smaller regular text. Promo badges use compact all-caps or condensed labels in dark text on mustard.

Numbers and prices should align cleanly to the right edge in cart and checkout rows. Long dish descriptions wrap to two or three lines and then truncate, preserving price and add controls. With Dynamic Type, keep address, item name, price, total, ETA, and primary action visible before campaigns or recommendations.

# Screen composition

Home uses a yellow top field through the safe area, a centered rounded address pill, two rows of circular service badges, then a white lower surface with rails of brand tiles and promotional content. The boundary between yellow and white is soft and wavy rather than a hard divider. Food browsing switches to a white canvas with a back control, address pill, large title, rounded search field, horizontal illustrated cuisine chips, filter chips, section titles, restaurant cards, and a persistent bottom tab bar.

Restaurant pages use a wide food or brand hero image at the top, floating round controls over the image, then a white content stack with title, promo badges, metric row, sticky category tabs, product grids or rows, and compact fee messaging near the bottom. Dish detail screens use an oversized product photo on a pale colored panel occupying roughly the upper half, then title, price, description, quantity stepper, and a fixed teal add button.

Cart, checkout, and profile use clean vertical stacks with 16 point gutters, sparse dividers, and wide bottom CTAs. Tracking screens are map-led: the map fills most of the viewport, while ETA, progress, help, courier status, and ad cards sit above or over it with white or translucent surfaces.

# Navigation appearance

The bottom bar is white, flat, and persistent on discovery, browsing, orders, and profile screens. Items use simple line icons with small labels; the selected item becomes darker and may sit on a subtle yellow highlight or show a teal dot. Top navigation is minimal: circular back buttons, address pills, search fields, and floating icon buttons over photos. Sheets rise from the bottom with rounded top corners and keep the background visibly dimmed.

# Components

Primary action: teal pill, white bold label, wide horizontal padding, and at least 44 point height. It anchors login, dish add, cart, payment, and help states.

Service badge: white circle with a soft shadow or glow on yellow, centered authored illustration, and a tiny rounded text label below or overlapping the badge.

Search and address fields: pale rounded pills with compact iconography, gray placeholder text, and a centered or leading layout depending on context.

Filter chip: light gray or white pill, small icon when needed, bold compact label, and down chevron for expandable filters.

Restaurant card: wide rounded food photo, dark title, rating and time metadata, heart outline on the trailing side, and mustard promo badges over or below the image.

Dish row: square or rounded product image on a pale pink or neutral tile, bold dish name, gray multiline description, price, and a small circular plus control aligned to the trailing edge.

Checkout group: white or pale panel with section heading, rows with left icons, right chevrons, gray disabled rows, fee strikethroughs, mustard free labels, and bold total near the bottom action.

# Imagery and icons

Food photography is essential in browsing, restaurant, dish, and promo contexts. Photos are cropped close, saturated, and appetizing, with rounded corners and enough clear area for discount badges when present. Category and service icons are authored illustrations rather than generic symbols: food baskets, supermarket carts, pharmacy items, courier package art, and cuisine objects sit inside circular badges or horizontal chips.

Do not omit imagery while waiting for final assets. Temporary images must preserve the same crop ratio, scale, saturation, and text-safe zones; temporary category art must preserve circular placement and hand-drawn visual weight.

# States

Observed states include splash, phone/social login, native Apple sign-in sheet over dimmed login, loading spinner overlay, home discovery, info sheet, food category popup, filtered and scrolled lists, restaurant detail, selected dish quantity, cart, checkout with disabled payment rows, fee summary, active order list, map-based order tracking, profile settings, and delete/logout rows. Across these states, rounded surfaces, teal actions, dark commerce text, and compact metadata remain constant.

Unavailable or inactive options appear pale gray with reduced text contrast. Promo and free-delivery states use mustard labels. Tracking progress uses teal bars and map pins while preserving white readable status surfaces.

# iOS adaptation

Extend the yellow discovery field into the top safe area and the white bottom navigation through the lower safe area. Use vertical `ScrollView` containers for lists, restaurant menus, cart, checkout, profile, and order history. Keep fixed bottom CTAs and the tab bar outside scrolling content with enough inset so totals and rows are not covered.

Use native Apple sign-in, maps, keyboard, and permission transitions where relevant, but style surrounding fields, sheets, buttons, and rows to match this package. Touch targets for service badges, chips, dish rows, plus controls, back buttons, and tab items must be at least 44 points. Dynamic Type may stack metadata and wrap descriptions, but item title, price, ETA, total, and primary action retain priority on compact widths. VoiceOver order should follow visible commerce priority: address or status, title, item details, price or ETA, options, total, action.

# Anti-generic checklist

- Do not render discovery as a plain white list; the yellow field and circular service badges are defining.
- Do not make checkout or cart playful yellow; these screens are white, receipt-like, and teal-actioned.
- Do not replace food photos with flat icons or generic placeholders in restaurant and dish surfaces.
- Do not replace authored service illustrations with SF Symbols, emoji, or monochrome line icons.
- Do not use default blue tint, default SwiftUI `Form`, or unstyled `TabView` selected states.
- Do not flatten every component to one radius; Glovo mixes circular badges, pill CTAs, rounded photos, and large-radius sheets.

</design-context>
