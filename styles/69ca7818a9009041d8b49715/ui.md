<design-context>
---
version: 1
platform: iOS
name: bushe-design-analysis
description: "A white, photography-led food commerce interface with distinctive rounded lowercase type, flat text-led lists, charcoal actions, a floating dark pill tab bar with a white inset selection, and warm custom mascot art reserved for brand, empty, rating, and modal moments."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F6F4"
  accent-primary: "#2B2B2B"
  accent-secondary: "#FF8A45"
  text-primary: "#202020"
  text-secondary: "#777277"
  divider: "#EDEDED"
  destructive: "#9B3345"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 36, fontWeight: 600, lineHeight: 41}
  title: {fontFamily: "SF Pro Rounded", fontSize: 29, fontWeight: 600, lineHeight: 34}
  section: {fontFamily: "SF Pro Rounded", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Rounded", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Rounded", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Rounded", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 8
  card: 12
  sheet: 28
  pill: 999
components:
  product-card: {fill: "white", image: "rounded food crop", hierarchy: "name then price", radius: 12}
  primary-action: {fill: "charcoal", text: "white medium", radius: 8, minHeight: 50}
  quantity-stepper: {fill: "light gray", controls: "minus count plus", radius: 8}
  floating-navigation: {fill: "dark charcoal pill", selected: "white inset chip", center: "outlined cart with badge"}
---

# Overview

bushe is primarily a white, flat food-commerce interface. Real food photography drives catalog and product detail, while distinctive rounded lowercase type gives headings and prices a recognizable voice. Charcoal buttons and a prominent floating dark navigation pill provide the strongest UI mass. Warm orange mascot and character art appears selectively in brand, empty, rating, logout, and decorative home moments rather than replacing product evidence.

# Non-negotiable visual invariants

- Keep white or warm off-white as the dominant page field, with color supplied mainly by food photography and selective mascot art.
- Preserve the rounded lowercase type character and large loose headings; do not substitute an editorial serif hierarchy.
- Let real food photography lead catalog cards and product detail, with prices immediately scannable.
- Use charcoal for primary actions instead of a bright accent color.
- Preserve the floating dark pill tab bar with a white inset selected item and emphasized central cart control.
- Keep lists flat, text-led, and separated by thin pale dividers rather than nested cards.
- Present ratings, logout, and related decisions in large-radius bottom sheets over a dim backdrop.
- Use custom mascot/character art for sparse brand and empty moments, not throughout dense commerce screens.

# Color and surfaces

White is the dominant canvas; a warm near-white and pale gray support fields, secondary buttons, checkout grouping, and subtle selected areas. Charcoal fills the primary action and floating navigation shell. Warm orange identifies mascot and brand moments, while green communicates successful order progress, muted red destructive actions, and subdued gold rating emphasis.

Near-black carries headings, prices, and primary labels; medium gray carries weights, descriptions, and timestamps. Thin pale-gray dividers structure rows without creating cards. Bright generic accent buttons, glossy gradients, or tinted page backgrounds would disrupt the restrained photographic system.

# Typography

Typography is a distinctive rounded sans with open counters, high x-height, and frequent lowercase Russian headings. Major home or profile titles use roughly 29–36 points with moderate weight and generous spacing; sections use about 21 points; product names, prices, and actions use 15–17 points; metadata uses 12–13 points. Price is heavier than weight or description.

Use SF Pro Rounded as an iOS-safe fallback. Preserve sentence case and lowercase voice rather than all caps. Under Dynamic Type, let product names, checkout labels, and menu rows wrap and grow vertically; keep price and primary action prominent. Reduce catalog columns before making text or images too small.

# Screen composition

The home screen uses open white space, banners, and compact action tiles above the floating navigation. Catalog screens use a dense photo grid with 12–16 point outer gutters. Product detail leads with a large rounded food photograph, then name, description, options, and a sticky price/action. Checkout and profile use a single vertical column of flat rows or pale groups. Bottom sheets cover the lower portion of the screen for rating, logout, or selection.

Observed archetypes include logo splash, home dashboard, photo catalog and search with keyboard, product detail, checkout list/form, payment-card form, profile menu, store or address list, order receipt and status tracking, rating sheet, destructive logout/delete sheet, and a sparse empty notifications state. The floating bar and sticky actions reserve the lower safe area.

# Navigation appearance

The persistent navigation is a dark charcoal floating pill inset from the screen edges. Five items sit inside it; the selected item appears on a white rounded inset chip. The center cart action has a stronger circular outline and may carry a count badge. Deeper screens use compact back controls and minimal top chrome. Sheets have large rounded upper corners and a dimmed backdrop.

# Components

Primary actions are full-width charcoal buttons with white medium-weight labels, approximately 8-point radii, and at least 50-point height. Secondary actions and fields use light gray fill. Product cards are visually led by rounded food photography, followed by short name and heavier price. Search uses a pale field and native keyboard context.

Delivery/self-pickup selection uses a compact segmented control. Basket quantity uses a horizontal minus/count/plus stepper. Promo entry combines a field and inline apply action. Checkout rows, payment fields, store lists, and profile menu rows remain flat with thin dividers. Rating controls appear inside a large-radius sheet; completed and awaiting-payment states use explicit text and restrained green or warning accents.

# Imagery and icons

Food photography is essential and must preserve honest subject-safe crops in catalog and detail. Authored mascot and character art appears in branded home cards, empty notifications, rating flowers, logout, and similar modal moments. The typographic logo remains distinct. Interface icons are thin line glyphs. Do not replace product photography with illustration or use arbitrary symbols as substitutes for the custom character assets.

# States

Search exposes keyboard and filtered content without changing the white canvas. Cart and checkout show quantities, promo application, and explicit totals. Orders distinguish awaiting payment, active tracking, completion, and evaluation with text plus restrained semantic color. Empty notifications use a large centered custom character and sparse copy. Rating, logout, and deletion appear in rounded bottom sheets over a dimmed context.

# iOS adaptation

Extend the white or warm-white canvas through safe areas. Place catalog, checkout, profile, addresses, and order history in vertical scroll containers; inset the last content for the floating bar or sticky CTA. Keep product photography at useful aspect ratios and reduce grid columns on compact widths. Keyboard avoidance must preserve active search, promo, payment, and form controls.

All tab items, product cards, quantity controls, segments, menu rows, and CTAs need at least 44-point targets. VoiceOver should announce product image description, name, price, then actions; checkout rows should expose label and value together. Dynamic Type should expand rows and bottom sheets. Do not invent an unrelated dark page theme; the dark navigation remains a contained control.

# Anti-generic checklist

- Do not replace the floating charcoal pill with a standard full-width `TabView` bar.
- Do not use default blue or orange for primary commerce actions; keep them charcoal.
- Do not replace real food photos with illustrations, icons, or placeholders in visual review.
- Do not introduce serif display type or corporate all-caps styling.
- Do not turn flat divided lists into stacks of identical rounded cards.
- Do not fill dense catalog and checkout screens with mascot decoration.
- Do not substitute the mascot with emoji, SF Symbols, or SwiftUI shapes.
- Do not add glossy gradients, heavy shadows, or oversized corner radii to every control.

</design-context>
