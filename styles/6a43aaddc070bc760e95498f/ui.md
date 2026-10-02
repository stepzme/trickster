<design-context>
---
version: 1
platform: iOS
name: Flip-design-analysis
description: "A dense white marketplace visual system with cyan-blue discovery chrome, yellow purchase actions, photo-heavy product grids, compact category tiles, red discount labels, pale green benefit chips, and translucent iOS bars."
colors:
  primary: "#1599D6"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F7FF"
  accent: "#FFC516"
  accent-pressed: "#E7AE00"
  ink: "#111317"
  ink-muted: "#6E737A"
  ink-subtle: "#A9AFB6"
  canvas: "#FFFFFF"
  surface-1: "#F4F5F6"
  surface-2: "#EEF1F3"
  surface-blue: "#EAF8FF"
  surface-green: "#DDF5E7"
  hairline: "#E2E5E8"
  semantic-success: "#20A663"
  semantic-warning: "#FFC516"
  semantic-danger: "#E84E62"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 800, lineHeight: 1.05, letterSpacing: 0 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 750, lineHeight: 1.10, letterSpacing: 0 }
  display-md: { fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: 0 }
  headline: { fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.26, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  price: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 800, lineHeight: 1.10, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18] }
  search-field: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12] }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 6 }
  category-tile: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8 }
  checkout-panel: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
---

# Overview

Flip looks like a busy retail catalog, not a sparse lifestyle app. The dominant impression is white space packed with product photography, blue discovery controls, yellow buying actions, and small factual labels that keep price, discount, rating, and delivery information visible.

# Non-negotiable visual invariants

- Use a white canvas with pale gray page gutters and hairlines; avoid dark shells or tinted full-screen backgrounds.
- Preserve dense product-card rhythm: two-column grids, cropped product photos, compact text, visible price, strikethrough old price, red discount badge, rating, review count, and date or delivery note.
- Use cyan-blue for discovery chrome: selected bottom-bar state, category buttons, link text, compact icons, and some informational badges.
- Use yellow only for purchase intent: floating cart buttons on products, cart affordances, and the main checkout/confirm action.
- Keep promotional banners and product images as bitmap content. The UI frame stays restrained while retail imagery supplies most of the color.
- Keep app-owned surfaces flat and clean; depth comes from iOS translucent bars, subtle page shadows, and image contrast, not heavy card elevation.

# Color and surfaces

### Brand and action

Primary blue is saturated cyan-blue. It appears in category squares, selected tab labels, profile list icons, links, and checkbox/radio selection. Do not replace it with default iOS system blue when building app-owned controls.

Yellow is warm and solid. Use it for circular product-cart buttons and large rounded purchase bars. Text on yellow is black or very dark, never white unless contrast is independently checked.

Discount red is used in small rectangular percentage labels and occasional destructive or cancellation text. Green appears in verification, payment-success, delivery-reservation, and benefit chips.

### Surfaces

Use `canvas` for product cards, checkout cards, profile rows, and form panels. Use `surface-1` for page backgrounds, cart empty space, and separators between modules. Search fields are white with a light border or a soft shadow. Bottom bars are translucent white capsules sitting above the home indicator.

### Borders and dividers

Use thin light-gray dividers inside checkout summaries and detail tables. Product cards mostly separate through gutters, photo bounds, and text density rather than visible outlines. Category tiles can be separated by narrow white gutters.

# Typography

### Font family

Use SF Pro Text for most UI and SF Pro Display only for large campaign or title moments. Product and checkout screens should feel compact and data-oriented, not editorial.

### Scale

Prices use the boldest small text in the interface. Product names, seller names, delivery dates, and category labels stay smaller than price. Screen titles are centered or near-centered at roughly 16-17pt with semibold weight. Search placeholders and helper metadata are 12-13pt.

### Numeric treatment

Use tabular numbers where available for prices, quantities, order totals, percentages, and dates. Old prices are muted gray with strikethrough. Percent badges are white text on red rectangles.

# Screen composition

### Density

Use a 4pt base grid, 8pt product gutters, 12pt module gaps, and 16pt horizontal page padding for forms. Home and catalog pages deliberately feel full: search, banners, category strips, and product tiles can all be visible in one viewport.

### Marketplace hierarchy

The first visible layer is discovery: search field, image banner, category shortcuts, then products. Product tiles should dedicate most of their area to photography. Text blocks under product images are compact and left-aligned, with the yellow cart button floating at the lower-right of the image/content boundary.

### Detail and checkout hierarchy

Product detail pages give the image large vertical space, then title, rating, tags, variants, price, seller, and the yellow add-to-cart button. Checkout and order pages use stacked white panels with clear section titles, right-aligned totals, and a persistent bottom purchase/action area when needed.

# Navigation appearance

When a bottom bar is present, render it as a white floating pill with five small line icons, compact labels, a blue selected state, and red cart badge support. Keep the home indicator separated below it. Do not let the bar become a full-height opaque toolbar.

Top chrome uses rounded back buttons, simple share or filter icons, and search fields. The search bar may include camera/photo input; keep it part of the field rather than a decorative standalone icon.

# Components

### Buttons

Primary buying buttons are yellow pills or wide rounded rectangles. Secondary icon buttons are white or pale gray circles/squares with minimal shadows. Destructive text actions use red text without oversized warning styling.

### Product cards

Product cards are flat white blocks with image-first composition. Required visual ingredients: product photo, favorite heart, yellow cart button, bold price, muted old price, red discount badge, product name, rating row, review count, and small date/delivery text when available. Keep the favorite heart a thin outline until selected; selected favorites use red.

### Category and shortcut tiles

Shortcut tiles are compact rounded squares or cells with blue backgrounds for standard categories and occasional yellow/red/blue variants for special retail buckets. Labels are tiny and may wrap to two lines. Use simple retail imagery or pictograms only when the source screen supports it.

### Chips and filters

Sort, section, and filter controls are low-height pills or small rectangular chips in white or pale gray. Selected chips use pale blue or blue text. Filter icons are thin and technical; avoid oversized icon buttons.

### Forms and lists

Profile and checkout rows use white rounded panels on pale gray with colored square icons at the leading edge and chevrons at the trailing edge. Forms are grouped by business meaning with subdued helper text and thin dividers.

### Alerts and permissions

Native iOS permission alerts may remain native, but the background visible behind them must retain the Flip retail screen: blurred search, banner, categories, and products. App-owned modal sheets should use rounded white panels, compact text, and clear blue/yellow action hierarchy.

# Imagery and icons

Use real product photography, campaign banner bitmaps, category product cutouts, and store screenshots as raster assets. Do not replace catalog images with flat SwiftUI placeholders, SF Symbols, emoji, gradients, or generic ecommerce illustrations.

Product images should use `fit` behavior inside card photo regions, with white or very pale backgrounds. Campaign banners may crop edge-to-edge inside rounded rectangles. Detail gallery images should preserve product aspect ratio with white space rather than forced cover cropping.

# States

Empty states are quiet and mostly text-led on white or pale gray. Loading and disabled controls use muted gray fills and lower-contrast text. Selected checkboxes and radios use blue. Quantity steppers use pale gray square controls with dark text. Paid, verified, and reserved statuses use green text or small green badges. Cart count appears as a red circular badge over the cart tab.

# iOS adaptation

Respect safe areas while keeping the UI visually close to the screenshot density. Top search and bottom tab surfaces can sit under translucent status or home areas when the content remains legible.

At larger Dynamic Type sizes, keep price and action labels dominant, allow product names and metadata to wrap, and avoid expanding cards so much that the grid loses its retail rhythm. Targets for search, filter, favorite, cart, quantity, checkout, and profile rows must remain at least 44pt.

# Anti-generic checklist

- Do not turn Flip into a minimal white-card shopping template; it must remain dense, bright, and retail-photo driven.
- Do not replace yellow purchase actions with blue primary buttons.
- Do not apply one radius to every element; use tighter product cards, rounded search fields, circular purchase buttons, and pill purchase bars.
- Do not hide old prices, red discounts, ratings, seller/verification, delivery/reservation, or totals when the relevant surface includes commerce data.
- Do not use generic placeholder illustrations while assets are pending; use approved raster product or campaign imagery.
- Do not invent UX flows, navigation destinations, or product scenarios from these style notes. This file defines visual treatment only.

</design-context>
