<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.5px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 0px, sm: 3px, md: 6px, lg: 10px, xl: 14px, xxl: 20px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 60px }

components:
  button-primary: { backgroundColor: "{colors.action}", textColor: "{colors.on-action}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 8px }
  category-cell: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 8px }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

SUNLIGHT is a broad, dense retail system. White surfaces and black actions keep commerce legible while red establishes the brand and high-impact campaign imagery supplies category color.

## Colors

### Brand & Accent

Red identifies the wordmark, loyalty, badges, and selective promotion. Black carries the main checkout and purchase actions.

### Surface

White is dominant; pale gray separates search, grouped utilities, and minor panels. Borders are fine and visible.

### Text

Black carries product data and headings; gray supports details, old prices, and inactive navigation.

### Semantic

Red may mark both brand and discount, so destructive states need explicit labels. Green confirms success; gold-yellow supports ratings.

## Typography

### Font Family

Use a neutral system sans with compact retail metrics. The brand wordmark may use tracked uppercase lettering.

### Hierarchy

Use 21–26px screen titles, 15–17px module headings, 14px product data, and 10–12px catalog labels and metadata.

### Principles

Keep price, metal, size, rating, and availability scannable. Underlining may clarify utility links but should not decorate headings.

### Note on Font Substitutes

SF Pro or Inter are suitable. Preserve tabular clarity for prices and dense category labels.

## Layout

### Spacing System

Use a 4px base, 12px page gutters, 6–8px catalog gaps, and 16–20px between major sections.

### Grid & Container

Home stacks campaign banners and rails. Catalog combines a narrow vertical taxonomy with a multi-column product-category grid; detail and cart are single-column.

### Whitespace Philosophy

Favor breadth and scan density, but keep each jewelry cutout on a clean white field with unambiguous ownership of labels.

## Elevation & Depth

Most surfaces are flat. Sticky black bars, campaign imagery, and occasional pale panels create hierarchy without visible shadow.

### Decorative Depth

Use jewelry photography, packaging, and campaign color as decoration. Keep transactional surfaces crisp and flat.

## Shapes

### Border Radius Scale

Most controls and cards are square or minimally rounded. Reserve circles for icons, avatars, and small status marks.

### Photography & Illustration Geometry

Use centered jewelry cutouts and square category images. Campaign banners use landscape crops; the rare line drawing should remain confined to its promotion.

## Components

### Buttons

Primary transactional actions are black rectangles with white text. Red is appropriate for brand or promotional actions; native controls must inherit the same square geometry.

### Pricing Tabs

Cart or inventory modes use simple segmented text tabs with black selected fills. Filters and sizes use compact outlined cells.

### Cards & Containers

Product and category cells are flat and image-led. Loyalty uses a large red card; cart summaries use white rows and separators.

### Inputs & Forms

Search is a pale rectangular field with photo-search access. Checkout fields use compact white or gray rows with visible labels.

### Status & Build Page

Order, bonus, gift, discount, and cart states appear close to their affected item, with explicit copy and restrained color.

### Navigation

Use five persistent bottom destinations. Active navigation is black; the red logo or small badge may remain visible without replacing active state.

### Footer

There is no footer. Long screens end with bottom navigation or a sticky black purchase action.

## Do's and Don'ts

### Do

- Keep commerce surfaces white and direct.
- Use black for commitment actions.
- Reserve red for brand and promotion.
- Preserve dense but aligned product data.

### Don't

- Do not round every category into a soft card.
- Do not use red alone to communicate destructive meaning.
- Do not crop jewelry so tightly that scale is lost.
- Do not introduce pastel marketplace styling.

## Responsive Behavior

### Breakpoints

Keep product, cart, and profile tasks single-column. Wider catalog layouts may expand category and product columns.

### Touch Targets

Bottom navigation, category rail items, favorites, sizes, photo search, and cart actions require at least 44px targets.

### Collapsing Strategy

Allow promotional rails and filters to scroll horizontally. Keep checkout total and action pinned on long carts.

### Image Behavior

Use `contain` for jewelry and product cutouts; use `cover` for campaigns. Preserve fine product detail on high-density screens.

## Iteration Guide

Start with white canvas, black actions, red identity, search, five-tab navigation, Catalog, product detail, and Cart. Add loyalty, stores, trade-in, and promotions afterward.

## Known Gaps

The reviewed scenarios cover onboarding, Home, Search, Catalog, product details, sizes, reviews, Cart, checkout structure, stores, discounts, and Profile. Tablet layouts and every payment failure were not visible.

</design-context>

Use the design system above for all UI you generate.
