<design-context>
---
version: 1
platform: iOS
name: Dixy-design-analysis
description: "A bright grocery-commerce style built from white retail pages, a saturated orange loyalty and checkout system, compact product photography grids, purple promotional panels, lime benefit accents, and a repeated cheerful mascot used around delivery and savings."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F6F4F5"
  accent-primary: "#FF8200"
  accent-secondary: "#6E2BB8"
  accent-lime: "#7ED321"
  accent-yellow: "#FFD800"
  text-primary: "#171717"
  text-secondary: "#737373"
  text-tertiary: "#B6B6B6"
  divider: "#E8E5E5"
  success: "#1FAE4B"
  destructive: "#E24A3B"
  overlay: "#000000"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 800, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  productName: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 15}
  price: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
  navLabel: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 500, lineHeight: 12}
spacing:
  screen-horizontal: 12
  section-gap: 18
  card-padding: 12
  control-gap: 8
  grid-gap: 8
rounded:
  control: 12
  card: 14
  promo: 12
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "#FFFFFF", typography: "{typography.label}", rounded: "{rounded.control}", padding: [14, 18]}
  payment-action: {backgroundColor: "{colors.success}", textColor: "#FFFFFF", typography: "{typography.label}", rounded: "{rounded.control}", padding: [14, 18]}
  product-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.productName}", rounded: "{rounded.card}", padding: 8}
  promo-banner: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.promo}", padding: 12}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-secondary}", selectedColor: "{colors.accent-primary}", rounded: 0}
---

# Overview

Dixy's iOS visual system is a dense grocery retail interface with a white base, an unmistakable orange action layer, and frequent product imagery. The home and profile screens begin with a large orange loyalty/barcode surface, while catalog and checkout screens become plainer and more transactional.

The recognizable character comes from the contrast between clean commerce structure and cheerful promotional imagery: product cutouts, fruit and food still lifes, purple campaign panels, lime benefit labels, and a repeating mascot near delivery, cart, and empty-state moments. The UI should feel energetic and useful, not like a generic marketplace template.

# Non-negotiable visual invariants

- Orange fills the loyalty header, active navigation, cart button, checkout bar, quantity accents, and primary app CTAs.
- The main canvas is white, with very light gray search fields, input fields, and transactional info panels.
- Product discovery uses dense two-column cards with large product photos, small names, visible unit prices, and orange add controls.
- The loyalty barcode is a large high-contrast object inside an orange rounded card, not a small secondary detail.
- Purple promotional blocks and chips appear as campaign accents alongside orange and lime, especially around savings.
- A small floating orange cart pill persists above the bottom safe area when basket context is visible.
- Forms are plain white screens with restrained borders and bottom action bars, not grouped default iOS forms.
- Repeated mascot and food/produce illustration assets support delivery, savings, and empty states without covering product data.

# Color and surfaces

Use white `#FFFFFF` as the dominant canvas and card color. Unlike Beeline, the page should not become a gray dashboard; gray `#F6F4F5` is used for search fields, skeleton loaders, input backgrounds, and soft info panels only.

Orange `#FF8200` is the strongest brand/action color. It fills the loyalty card, splash screen, cart pill, checkout button, selected nav icon/label, quantity stepper borders, active toggles, and primary form CTA. Green `#1FAE4B` is reserved for SberPay/payment confirmation or benefit badges, while lime `#7ED321` appears in delivery and promo artwork. Purple `#6E2BB8` is a repeated campaign color for "buy together", favorite goods, and promotional banners.

Text should be nearly black for headings and product names. Secondary text is neutral gray, not tinted blue. Old prices and unavailable amounts are light gray and struck through where visible; current prices are black or orange depending on context. Use thin dividers only for cart and form separation.

Avoid blue system accents, gray-only grocery grids, dark dashboards, beige backgrounds, or using purple/lime as the default CTA. Orange must stay the dominant interactive color.

# Typography

Dixy uses bold, practical SF Pro hierarchy. Section headers such as cart, catalog, profile, and product groups are 20-24 point bold. The splash and campaign text can be heavier and more playful, but app chrome remains compact.

Product cards need a retail hierarchy: product name in small regular text, old price in tiny muted text with strike, current price larger and bold, unit suffix smaller. Cart rows use compact names and prices with the quantity stepper as the largest control in the row. Loyalty values are small but bold enough to sit over orange.

Forms use clear 15-16 point labels and input text. Error hints appear below fields in smaller red text. At larger Dynamic Type sizes, product grids should increase card height rather than squeeze prices or truncate the only product name line too aggressively.

# Screen composition

Home composition: a full-width orange loyalty/barcode header occupies the top, with shortcut icons beneath it, then address, search with scan, promotional banners, product rails, and bottom navigation. Vertical density is high, but each section starts with a clear label or banner edge. The bottom cart pill floats over content and must not cover product prices.

Catalog composition: search remains pinned near the top visual area, followed by categories or product tiles. Category views use three-column still-life cutouts on white, while product results use two-column cards with images consuming roughly the upper half of each tile.

Product detail composition: large product photography dominates the upper half, with a back control, share/bookmark utilities, carousel indicator, rating row, title, favorite outline button, related products, product facts, and a sticky orange add-to-cart bar. Information panels are white and typographic; photography is the main visual mass.

Cart composition: a white sheet-like full screen with title and close control, address line, segmented delivery/pickup control, product rows, orange-outlined steppers, promo sections, and a sticky orange checkout bar at the bottom. The cart list is dense but separated by whitespace rather than heavy dividers.

Checkout composition: a plain white form with 12-16 point horizontal margins, address/time/email/payment groups, bordered selection cards, pale gray explanatory panels, and a sticky bottom payment/action bar. Skeleton loading states are wide pale gray rounded blocks in the same positions as the final content.

Profile composition: a top identity row, orange loyalty barcode card, shortcut row, offer banner, and a simple icon list. Icons are black outline strokes; selected bottom-nav state is orange.

# Navigation appearance

The bottom navigation is a flat white bar with five compact items, thin outline icons, 10 point labels, and orange selected state. It is visually lighter than the floating cart pill, which is a separate orange rounded capsule hovering just above the nav/home-indicator zone.

Back and close controls are simple black line icons on white, with no colored circular backgrounds. Product detail utilities use black outline share/bookmark icons near the top right. Segmented controls use thin orange borders for the active segment and pale borders for inactive options.

Sheets and full-screen transactional views use white surfaces. Native permission alerts may appear over dimmed content, but the surrounding app UI stays white/orange and should not inherit default blue accents for app-owned actions.

# Components

Primary action: orange filled rounded rectangle, 48-56 points tall, white semibold text, often sticky at the bottom. The checkout version combines total and action label in one bar.

Payment action: green filled rounded rectangle only when the payment provider state is explicitly shown. Do not use green for ordinary cart or catalog actions.

Product card: white rounded card with product photo or cutout taking most of the top, small product name, discount badge when present, old price muted/struck, current price bold, and an orange outlined circular plus in the lower-right. Cards are compact and grid-based.

Quantity stepper: orange-outlined pill with minus, count/weight, and plus. The stepper is horizontally compact, with orange controls and black center value. Disabled sides fade to pale gray.

Loyalty card: large orange rounded rectangle, white text, barcode strip, tier/cashback values, and coin counter. The barcode should be wide and visually dominant.

Search and scan: pale gray rounded search field with icon and placeholder text, paired with a small scan icon area at the right. Keep it flat and light.

Form input: white or pale gray rounded rectangle with thin border; error state uses a red border and small red hint text below. Selected payment/address cards use orange border.

Promo banner: rectangular card with product art or mascot, orange/lime/purple copy blocks, and rounded corners. Embedded campaign text can be colorful; do not flatten it into a generic text-only card.

# Imagery and icons

Product imagery is mandatory in catalog, search, product detail, cart, and recommendation modules. Use isolated product pack shots or food cutouts on white, sized large enough to identify the item. Category imagery uses small still-life arrangements centered above labels.

Promotional imagery uses the mascot, gift props, fruit/vegetable characters, purple savings panels, and orange/lime delivery graphics. The mascot often sits at a lower edge near cart or product modules; it should guide the eye without covering names, prices, quantity controls, or totals.

Iconography is thin, black, and utilitarian for profile rows, bottom nav, scan, close, share, and bookmark. Do not substitute the product and promo image system with SF Symbols, emoji, abstract blobs, or generic grocery illustrations.

# States

Observed loading uses pale gray skeleton blocks on the white checkout screen, with rounded rectangles matching final content positions. Observed authentication loading uses a dim overlay and centered small brand mark/text.

Observed selected states include orange active nav labels, orange segmented borders, orange toggle fill, orange field focus border, selected payment card borders, and orange checkbox fills. Disabled primary actions turn pale gray with low-contrast text.

Observed empty state uses a centered authored food/character illustration and a bold friendly message on an otherwise white screen. Observed permission state uses the native iOS alert over a dimmed app screen; do not redesign the system alert, but keep the underlying app controls in Dixy styling.

# iOS adaptation

Respect iPhone safe areas and keep the bottom nav and floating cart pill from overlapping the home indicator. Scroll views need bottom padding at least equal to the sticky cart/checkout bar plus safe area. Product add buttons, steppers, segment controls, and bottom CTAs must remain at least 44 points tall or wide.

On compact widths, keep the product grid two columns where possible; if text grows, increase card height before reducing imagery below recognizability. Checkout and cart rows may wrap names to two lines, but price, quantity, and CTA totals must remain readable.

Dynamic Type should expand transactional sections vertically and allow form hints to wrap. Do not scale promotional banner text independently from the image if the banner is a raster asset; instead crop/fit the approved raster to its card.

Use light appearance as the source-supported base. A dark mode should not be inferred from these screens. Avoid web concepts such as hover states, desktop breakpoints, top navigation, footers, or marketing landing sections.

# Anti-generic checklist

- Do not replace orange app-owned controls with default iOS blue.
- Do not remove product photos, category still lifes, promo art, or the mascot where imagery is compositionally expected.
- Do not turn cart and checkout into default `Form` sections with blue toggles and grouped gray headers.
- Do not make the catalog airy like a lifestyle app; it needs compact retail density and visible prices.
- Do not use lime or purple as the main action color; they are campaign accents.
- Do not hide unit pricing, old price treatment, quantity stepper, or sticky total bars.
- Do not use a floating bottom cart pill without preserving the white five-item nav underneath.
- Do not add UX flows, product navigation decisions, desktop layouts, or unverified source/runtime behavior to the style.
</design-context>
