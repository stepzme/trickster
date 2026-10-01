<design-context>
---
version: 1
platform: iOS
name: SUNLIGHT-design-analysis
description: "A dense jewelry hypermarket built from white canvas, vivid red branding, black transactional controls, fine gray dividers, compact catalog typography, and high-detail product photography. Square category grids and underlined utility links create a practical retail tone; large campaign banners bring most decorative color."

colors:
  primary: "#F10D16"
  on-primary: "#FFFFFF"
  primary-pressed: "#CF0810"
  action: "#050505"
  on-action: "#FFFFFF"
  ink: "#111111"
  ink-muted: "#717174"
  ink-subtle: "#A5A5A8"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F4F5"
  hairline: "#DEDEE0"
  semantic-success: "#2CA96A"
  semantic-warning: "#EFAE2E"
  semantic-danger: "#F10D16"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.5 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 0, sm: 3, md: 6, lg: 10, xl: 14, xxl: 20, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 60 }

components:
  button-primary: { backgroundColor: "{colors.action}", textColor: "{colors.on-action}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 8 }
  category-cell: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 8 }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

SUNLIGHT is a broad, dense retail system. White surfaces and black actions keep commerce legible while red establishes the brand and high-impact campaign imagery supplies category color.

# Non-negotiable visual invariants

- Keep commerce surfaces white and direct.
- Use black for commitment actions.
- Reserve red for brand and promotion.
- Preserve dense but aligned product data.
- Home stacks campaign banners and rails.
- Catalog combines a narrow vertical taxonomy with a multi-column product-category grid; detail and cart are single-column.
- Favor breadth and scan density, but keep each jewelry cutout on a clean white field with unambiguous ownership of labels.

# Color and surfaces

Red identifies the wordmark, loyalty, badges, and selective promotion. Black carries the main checkout and purchase actions.

White is dominant; pale gray separates search, grouped utilities, and minor panels. Borders are fine and visible.

Black carries product data and headings; gray supports details, old prices, and inactive navigation.

Red may mark both brand and discount, so destructive states need explicit labels. Green confirms success; gold-yellow supports ratings.

# Typography

Use a neutral system sans with compact retail metrics. The brand wordmark may use tracked uppercase lettering.

Use 21–26 points screen titles, 15–17 points module headings, 14 points product data, and 10–12 points catalog labels and metadata.

Keep price, metal, size, rating, and availability scannable. Underlining may clarify utility links but should not decorate headings.

SF Pro or Inter are suitable. Preserve tabular clarity for prices and dense category labels.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points page gutters, 6–8 points catalog gaps, and 16–20 points between major sections.

Home stacks campaign banners and rails. Catalog combines a narrow vertical taxonomy with a multi-column product-category grid; detail and cart are single-column.

Favor breadth and scan density, but keep each jewelry cutout on a clean white field with unambiguous ownership of labels.

Use jewelry photography, packaging, and campaign color as decoration. Keep transactional surfaces crisp and flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five persistent bottom destinations. Active navigation is black; the red logo or small badge may remain visible without replacing active state.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary transactional actions are black rectangles with white text. Red is appropriate for brand or promotional actions; native controls must inherit the same square geometry.

Product and category cells are flat and image-led. Loyalty uses a large red card; cart summaries use white rows and separators.

Search is a pale rectangular field with photo-search access. Checkout fields use compact white or gray rows with visible labels.

Order, bonus, gift, discount, and cart states appear close to their affected item, with explicit copy and restrained color.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use centered jewelry cutouts and square category images. Campaign banners use landscape crops; the rare line drawing should remain confined to its promotion.

Use `contain` for jewelry and product cutouts; use `cover` for campaigns. Preserve fine product detail on high-density screens.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Order, bonus, gift, discount, and cart states appear close to their affected item, with explicit copy and restrained color.

Red may mark both brand and discount, so destructive states need explicit labels. Green confirms success; gold-yellow supports ratings.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Bottom navigation, category rail items, favorites, sizes, photo search, and cart actions require at least 44 points targets.
- Allow promotional rails and filters to scroll horizontally. Keep checkout total and action pinned on long carts.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not round every category into a soft card.
- Do not use red alone to communicate destructive meaning.
- Do not crop jewelry so tightly that scale is lost.
- Do not introduce pastel marketplace styling.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

The reviewed scenarios cover onboarding, Home, Search, Catalog, product details, sizes, reviews, Cart, checkout structure, stores, discounts, and Profile. Tablet layouts and every payment failure were not visible.

</design-context>
