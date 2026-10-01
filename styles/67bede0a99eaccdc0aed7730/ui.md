<design-context>
---
version: 1
platform: iOS
name: yandex-market-design-analysis
description: "A dense white commerce interface where pale-gray utilities, product photography, green prices, and saturated yellow commitment actions organize high-volume shopping information."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F4F4F2"
  surface-secondary: "#ECEDEB"
  accent-primary: "#FFE500"
  accent-pressed: "#F2D900"
  price-primary: "#0A8F52"
  brand-red: "#FF3B30"
  text-primary: "#171717"
  text-secondary: "#6F7074"
  text-tertiary: "#A4A5A8"
  divider: "#E3E4E2"
  danger: "#E5484D"
  overlay: "#000000"
typography:
  title: {fontFamily: "YS Text", fontSize: 24, fontWeight: 700, lineHeight: 28}
  section: {fontFamily: "YS Text", fontSize: 20, fontWeight: 700, lineHeight: 24}
  price: {fontFamily: "YS Text", fontSize: 18, fontWeight: 700, lineHeight: 21}
  body: {fontFamily: "YS Text", fontSize: 14, fontWeight: 400, lineHeight: 18}
  label: {fontFamily: "YS Text", fontSize: 13, fontWeight: 600, lineHeight: 16}
  caption: {fontFamily: "YS Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 12
  section-gap: 20
  grid-gap: 8
  module-gap: 8
  card-padding: 12
rounded:
  utility: 12
  card: 16
  sheet: 20
  pill: 999
components:
  primary-action: {minHeight: 52, fill: "#FFE500", foreground: "#171717", radius: 14}
  secondary-action: {minHeight: 52, fill: "#F4F4F2", foreground: "#171717", radius: 14}
  search-field: {minHeight: 44, fill: "#F4F4F2", foreground: "#171717", radius: 12}
  filter-chip: {minHeight: 34, fill: "#ECEDEB", foreground: "#171717", radius: 17}
  product-card: {fill: "#FFFFFF", foreground: "#171717", imageRadius: 14, padding: 4}
  information-panel: {fill: "#F4F4F2", foreground: "#171717", radius: 16, padding: 12}
---

# Overview

Yandex Market is a high-density commerce interface with a neutral structural shell. White occupies most of the screen; pale-gray fields group search, delivery, seller, payment, and account information. Product photography and advertising provide varied color, while green prices and yellow purchase actions create a stable decision hierarchy. Cards are packed tightly and separated mainly by whitespace, image bounds, and shallow surface changes rather than elevation.

# Non-negotiable visual invariants

- Product imagery is the largest repeated visual mass and remains undistorted inside stable image stages.
- Price, title, rating, delivery, seller, and purchase state are visually grouped so they can be scanned independently of surrounding promotions.
- White is the default canvas; pale gray is reserved for utilities and grouped facts, not used as a universal page background.
- Current or favorable prices use green; the final cart or payment action uses saturated yellow with dark text.
- Browsing screens are intentionally dense and use two-column product grids, horizontal recommendation rails, and embedded campaign modules.
- Transaction screens reduce merchandising density and use one clear reading sequence plus a persistent commitment action.
- The source's category names, commerce destinations, and card fields are product architecture, not mandatory content for an adapted product.

# Color and surfaces

The interface shell stays white. Search, filter, sign-in prompts, delivery facts, seller rows, totals, and account summaries use warm or neutral very-light gray. Dividers are faint and often replaced by spacing. Near-black carries titles and primary facts; medium gray carries labels and supporting conditions.

Green is reserved for price and favorable monetary values. Yellow identifies add-to-cart, payment, barcode, or another decisive commerce action. Red appears in the launch identity, discount labels, notifications, and errors, but does not become the default interaction color. A contextual header may temporarily take on a campaign or order-status color while the content modules remain readable.

Advertising and merchandising assets may introduce strong red, orange, yellow, green, pink, or photographic fields. Treat these as bounded content modules. Do not derive the general control palette from an individual advertisement.

# Typography

The typography is compact and optimized for Cyrillic commerce content. Product titles commonly use regular or medium body text across two or three lines. Current prices are bold and more prominent; former prices and benefit details are smaller and quieter. Section headings use clear semibold or bold labels without oversized display treatment.

Search suggestions and filter labels are short. Product detail pages increase the title and price only enough to lead the local hierarchy, then return to compact specifications, reviews, delivery facts, and seller information. Transaction totals use a larger bold value while line-item discounts and conditions remain aligned as supporting text.

Use YS Text when licensed and available. SF Pro Text is the iOS substitute; preserve the narrow vertical rhythm and strong numeric weights. With Dynamic Type, allow names, delivery terms, and totals to wrap. Do not truncate the distinguishing part of a product name merely to retain a rigid card height.

# Screen composition

The source uses 12–16 point outer insets, narrow grid gutters, and small gaps between related modules. Density changes by task:

## Discovery feed

Location and account context precede search. Campaign media and a compact category or mode selector lead into a two-column product grid. Editorial or category modules may span the grid, then regular products resume. Persistent navigation remains available while content scrolls.

## Search and results

Search entry is followed by suggestions and the system keyboard. Results keep the query available, then show a horizontal strip of filters and a two-column product grid. Helpful explanatory content may appear before results but does not displace the query or filtering context.

## Product detail

A large image stage leads into product identity, rating, variants, price, delivery, seller, and all-offer facts. Recommendations form horizontal rails. Specifications and reviews continue in a single reading column. Purchase actions remain available while the user reviews the long page.

## Checkout

A focused single-column screen groups the selected item, benefit or payment choices, line-item calculation, promotion, installment option, and total. One commitment action closes the sequence. Completion returns to a feed-like recommendation context only after the order result is explicit.

## Order tracking

Status, pickup or delivery instruction, product summary, and relevant actions form broad full-width groups. A pickup code or barcode receives dedicated space. Secondary changes such as extending storage appear as a focused confirmation sheet.

## Profile

Identity and a small set of account summaries precede sectioned destination rows. Icons are sparse and conventional; counters attach to the relevant row. This screen is denser than a marketing profile and does not need product photography.

# Navigation appearance

Persistent navigation is a flat white continuation of the page with five compact line-style items in the observed source. Selected state is dark; inactive items recede to light gray, and small badges attach locally. An adapted product should use only its real top-level destinations rather than copying five commerce categories.

Focused search retains the query and a back action. Product, order, and profile drill-downs use a compact top row with back plus only relevant contextual actions such as favorite, compare, share, or close. Checkout and confirmation tasks use close when the correct outcome is to leave the task rather than traverse page history.

# Components

## Search field

A full-width pale-gray control with a text query, a leading search or back symbol, and an optional trailing scanner or clear action. It remains part of browsing context rather than becoming a decorative hero component.

## Product card

An image stage occupies most of the card width. Discount or stock badges attach to the image edge; favorite remains a lightweight overlay. Current price, previous price, product name, rating, and delivery facts follow in a compact order. A small yellow cart action may overlay the image edge while keeping the product visible.

## Filter chip

A short rounded control containing one filter, its active value, and optional removal or disclosure. Active chips become darker or show an explicit selected value. Chips scroll as a single row instead of wrapping into a large control block.

## Information panel

A pale-gray rounded group for delivery, seller, sign-in benefit, payment, promotion, or order facts. Rows stay flat within the shared surface and use an icon only when it speeds recognition. Do not elevate every row into its own card.

## Purchase actions

The decisive action is yellow with dark semibold text. A neutral alternative may sit beside it. Both remain available on long product pages and disappear only when the task state no longer permits purchase. Product-grid cart controls use the same yellow role at compact scale.

## Promotional module

Advertising and category modules can span the content width or grid. Their own art, typography, and color are contained within the module. An ad marker remains legible. Editorial modules may group two or more related product tiles inside a tinted field.

## Confirmation sheet

A white sheet over a dimmed context presents one consequence, optional supporting condition, and cancel/confirm actions. The confirm action retains the yellow decision role. The sheet should not add unrelated choices.

# Imagery and icons

Product photography is the primary imagery system. Catalog images use contain-fit or careful cropping so packaging, color, and distinguishing features remain visible. Detail galleries may switch to a black media viewer for zoomed imagery, while the surrounding product page remains white.

Promotional banners, merchant creatives, brand logos, and editorial category photography are sourced content with different art directions; they do not form one reusable illustration language. Conventional navigation, favorite, share, compare, location, disclosure, and seller actions use a coherent thin icon set. Do not invent custom illustrations where the observed source uses product imagery or familiar controls.

# States

Observed states include launch, skeleton loading, personalized and alternate discovery feeds, empty and populated search entry, suggestions, filtered results, product gallery, variant and offer selection, expanded specifications, reviews and questions, checkout with discounts and payment choices, order confirmation, assembly, pickup availability, delivered order, storage extension confirmation, notifications, and profile sections.

Loading preserves the eventual module geometry with pale skeleton blocks. Applied filters remain removable and update results in context. Adding a product changes its cart state without obscuring the card. Checkout recalculates discounts and total in place. Order states replace the previous fulfillment status while retaining access to relevant support, financial, pickup, or review actions. Confirmation sheets preserve the underlying context.

# iOS adaptation

Use custom SwiftUI grids and modules rather than default `List` or `Form` appearance. Keep product images at stable aspect ratios to prevent layout jumps. Reserve safe-area space for persistent navigation and purchase controls, and ensure the final grid row or specification line can scroll above them.

Controls require at least 44-point hit regions even when their visible icon is compact. VoiceOver should read each product as one ordered group: title, current and former price, rating, delivery, favorite state, then cart action. Expose total, discount, delivery condition, and payment commitment as separate meaningful phrases. With larger text, allow chips to scroll, stack paired checkout actions when necessary, and expand product-card text rather than shrinking it below legibility.

# Anti-generic checklist

- Do not rebuild browsing as a low-density list of elevated white cards.
- Do not use yellow for every icon, label, and selected state; reserve it for decisive commerce actions.
- Do not hide price, seller, delivery, or total behind promotional decoration.
- Do not crop product packaging or distinguishing details to fill an arbitrary ratio.
- Do not restyle every advertisement into one invented visual language.
- Do not replace dense specifications and order facts with vague summaries.
- Do not copy the source's five destinations, commerce entities, or card schema into an unrelated product; transfer only the visual treatment appropriate to real content.
</design-context>
