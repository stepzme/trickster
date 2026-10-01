<design-context>
---
version: 1
platform: iOS
name: AliExpress-design-analysis
description: "A dense white marketplace interface where product photography, bold prices, red active navigation, lime checkout actions, yellow immediate-purchase controls, compact metadata, and campaign-specific promotional color create a high-conversion visual hierarchy."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F5"
  accent-primary: "#B8F43B"
  accent-secondary: "#FF4747"
  text-primary: "#171717"
  text-secondary: "#777777"
  divider: "#E2E3E5"
  destructive: "#E84A45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 25, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 10
  section-gap: 22
  card-padding: 10
  control-gap: 8
rounded:
  control: 10
  card: 12
  sheet: 26
  pill: 999
components:
  checkout-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 50}
  buy-now-action: {backgroundColor: "#FFE052", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}", minHeight: 50}
  product-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-secondary}", cornerRadius: "{rounded.pill}", minHeight: 42}
  filter-chip: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.pill}", minHeight: 36}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.accent-secondary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

AliExpress is a visually dense marketplace in which product photography and complete purchase evidence dominate. White and pale-gray surfaces hold two-column grids, large media-led details, compact price metadata, and store-grouped cart rows. Conversion uses several deliberately distinct accents: red identifies brand and active navigation, lime marks major cart or checkout actions, yellow marks immediate purchase, and black appears on selected pills or focused sheet actions.

# Non-negotiable visual invariants

- White is the dominant commerce canvas, with pale gray reserved for gutters, search, chips, and grouped panels.
- Discovery uses a dense two-column product grid with narrow spacing and image-first cards.
- Current price is the strongest text; old price, discount, rating, purchase count, and delivery remain adjacent as smaller evidence.
- Red marks brand and active navigation, lime marks decisive checkout actions, and yellow distinguishes immediate purchase.
- Product details begin with a large media region and keep paired purchase actions persistent near the bottom.
- Cart content remains grouped by seller and shows selection, variant, quantity, price, and delivery context together.
- Campaign colors remain bounded to banners and sale modules rather than recoloring ordinary forms.

# Color and surfaces

The base canvas and most cards are white. Very light gray separates gutters, grouped checkout regions, search fields, skeletons, and inactive controls; thin gray lines divide dense rows. Saturated red fills splash and brand moments and tints the active tab or sale labels. Bright lime is the strongest conversion fill in cart and checkout. Yellow marks a distinct immediate-purchase action. Black or dark charcoal appears on selected chips, prominent sheet actions, and primary text. Green can communicate favorable delivery or stock; destructive and scarcity states use red with explicit labels. Violet, mint, or other saturated fields belong to campaign-specific modules only. Default iOS blue or a single accent applied to every commerce state would erase the reference hierarchy.

# Typography

Use SF Pro Display and SF Pro Text. Campaign claims may reach 25–30 points in bold or extra-bold; section headings are around 17–21 points; current prices are large and bold, commonly 18–24 points; product titles and body details are around 13–16 points; delivery, legal text, ratings, and counters are around 10–13 points in gray. Dense grids use tight line height and controlled two-line truncation. Prices should use tabular figures when aligned. Dynamic Type should wrap delivery and product titles, then switch the grid to rows before price, variant, or action hierarchy becomes ambiguous.

# Screen composition

Discovery archetypes place a pale rounded search field and compact top controls above campaign rails or banners and a long two-column product grid. Horizontal insets and gutters are intentionally narrow, commonly around 6–10 points. Detail archetypes dedicate the upper region to large product media or gallery, then stack price, promotion, variants, ratings, purchase count, delivery, seller, reviews, and recommendations above a sticky two-action bar. Search and filter archetypes use compact chips, sort controls, and skeleton-loading grids. Cart archetypes group rows by store and keep selection, thumbnail, variant, quantity, and totals visible. Checkout archetypes use calmer one-column white groups for recipient, address, delivery, payment, promo code, and total, with a sticky lime action. Profile, orders, and review archetypes use list or card rows with status labels and compact imagery. Sheets handle filters, promo codes, card entry, and other focused decisions.

# Navigation appearance

The bottom bar is white with gray inactive icons and labels; selected content turns saturated red. Top bars remain compact, using a back chevron, pale pill search field, visual-search/camera action, heart, share, or centered title depending on the surface. Detail screens keep a small overlay or top action group over media. Bottom sheets use a dark dimmed backdrop, white panel with large top corners, short grab handle, and close control. Sticky purchase and checkout regions sit above the home indicator with strong color separation from the scroll content.

# Components

Product cards combine a large photo, discount or campaign badge, bold current price, smaller old price, rating, purchase count, compact title, and delivery line. Search fields are pale pills with text and visual-search action. Filter chips are short neutral pills that become dark or accented when selected. Skeleton states preserve the exact product-grid geometry. Variant controls use photo, color, or size swatches with a strong selected outline or check. Detail purchase controls pair a lime add-to-cart action with a yellow buy-now action. Cart rows use circular selection, product thumbnail, seller grouping, variant text, quantity stepper, and price. Checkout rows use white grouped surfaces with radio or disclosure controls. Promo-code surfaces use ticket-like banners or a focused sheet. Review cards include avatar, stars, text, photo thumbnails, and a small like action.

# Imagery and icons

Product photography overwhelmingly defines the interface. Use aspect-fit where packaging or product shape is purchase evidence and aspect-fill for lifestyle or campaign imagery. Large detail media and grid photography cannot be omitted while final assets are pending. Campaign art varies by sale and can include product composites, saturated backgrounds, confetti, sparkles, or simple promotional figures, but it does not establish a reusable illustration system. Empty address and promo-success art are isolated symbols rather than a family. Functional icons mix simple outline and filled commerce symbols, while service and payment marks may retain their own colors.

# States

Selected tabs, checkmarks, filters, and variants change color or border without changing layout. Search loading uses skeleton blocks matching the grid. Cart selection uses clear circular marks and preserves seller grouping. Discount, stock, free-delivery, and campaign states pair color with explicit labels. Checkout and payment keep the lime CTA fixed; disabled states lower saturation. Permission prompts use native alerts. Filters, promo codes, and card entry appear in white sheets over dimmed content. Payment failure is a focused transactional state with clear recovery action rather than decorative art. Empty address and sparse profile/order states retain the same white canvas. Media gallery uses a darker focused overlay while preserving safe-area controls.

# iOS adaptation

Extend white through the safe areas and keep bottom navigation or sticky conversion actions above the home indicator. Use lazy grids for discovery and switch to one-column rows at accessibility text sizes. Put details, cart, checkout, orders, and reviews in vertical scroll containers. Present filters, variants, promo entry, and card forms as native-behaving sheets with the documented scrim and radius. Move checkout fields and actions with the keyboard while keeping the active field visible. Maintain at least 44-point targets around hearts, swatches, chips, steppers, selection circles, tabs, gallery actions, and sheet controls. VoiceOver order should follow image description, price, discount/old price, title, delivery, options, then purchase actions. A separate dark appearance was not established and should not be introduced by default components.

# Anti-generic checklist

- Do not replace the two-column discovery grid with uniform full-width cards.
- Do not use one generic accent color for brand, checkout, and buy-now actions.
- Do not hide old price, delivery, rating, purchase count, or seller grouping behind extra taps.
- Do not crop packaging or product shape when it is purchase evidence.
- Do not let campaign colors leak into ordinary checkout and account forms.
- Do not use an unstyled `TabView`, visible default `Form`, or arbitrary SF Symbols.
- Do not remove the large gallery, skeleton geometry, or sticky purchase region.
- Do not infer a decorative illustration system from isolated promo graphics.

</design-context>
