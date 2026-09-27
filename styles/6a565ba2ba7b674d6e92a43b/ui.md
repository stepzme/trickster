<design-context>
---
version: alpha
name: yandex-lavka-design-analysis
description: "A rapid-grocery storefront on a white canvas, combining sky-blue service identity, saturated yellow checkout controls, green delivery promises, black heavy headings, and dense product photography. Pastel photographic category tiles, compact discount badges, sticky delivery bars, and circular add controls keep a large assortment fast to scan."
colors:
  primary: "#FFE000"
  on-primary: "#171717"
  brand-blue: "#17AEEF"
  delivery: "#079B63"
  discount: "#F15B5C"
  ink: "#171717"
  ink-muted: "#6C6D72"
  ink-subtle: "#A4A5AA"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F5"
  surface-2: "#ECECEE"
  surface-3: "#DEE0E2"
  hairline: "#E4E4E6"
  semantic-danger: "#DE3F4E"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Yandex Sans Display, fontSize: 38px, fontWeight: 800, lineHeight: 0.98, letterSpacing: -1.0px }
  display-lg: { fontFamily: Yandex Sans Display, fontSize: 31px, fontWeight: 800, lineHeight: 1.02, letterSpacing: -0.6px }
  display-md: { fontFamily: Yandex Sans Display, fontSize: 26px, fontWeight: 800, lineHeight: 1.06, letterSpacing: -0.4px }
  headline: { fontFamily: Yandex Sans Display, fontSize: 21px, fontWeight: 800, lineHeight: 1.10, letterSpacing: -0.25px }
  card-title: { fontFamily: YS Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  checkout-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 16px }
  campaign-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.lg}", padding: 0 }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0 }
  quantity-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 8px }
  delivery-bar: { backgroundColor: "{colors.delivery}", textColor: "#FFFFFF", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 6px 12px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16px }
---

## Overview

Yandex Lavka is a high-density grocery interface that stays visually light. White space and product photography dominate; sky blue identifies the service, green carries delivery promises, red marks discounts, and yellow closes transactions.

**Key Characteristics:**
- Product-first white storefront.
- Sky-blue service identity.
- Yellow checkout action.
- Green persistent delivery promise.
- Pastel photographic category tiles.

## Colors

### Brand & Accent
- **Yellow** ({colors.primary}): Cart, payment, and decisive checkout actions.
- **Brand Blue** ({colors.brand-blue}): Logo, assistant entry, and service markers.
- **Delivery Green** ({colors.delivery}): Time and free-delivery status.
- **Discount Red** ({colors.discount}): Markdown badges and sale prices.

### Surface
- **Canvas** ({colors.canvas}): Catalog, product, cart, and checkout.
- **Surface 1** ({colors.surface-1}): Search, segment, and grouped row backgrounds.
- **Surface 2/3**: Pressed, disabled, and nested areas.
- **Hairline** ({colors.hairline}): Checkout and product-detail separation.

### Text
- **Ink** ({colors.ink}): Titles, prices, totals, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Weight, prior price, composition, and hints.
- **Ink Subtle** ({colors.ink-subtle}): Inactive navigation and placeholders.

### Semantic
- **Danger** ({colors.semantic-danger}): Removal and warning.
- **Overlay** ({colors.semantic-overlay}): System prompts and detail context.

## Typography

### Font Family

- **Yandex Sans Display** — campaign and category headings.
- **YS Text** — products, delivery, checkout, profile, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 800 | Campaign statement |
| `{typography.display-md}` | 26px | 800 | Major screen title |
| `{typography.headline}` | 21px | 800 | Catalog section |
| `{typography.card-title}` | 15px | 600 | Product title |
| `{typography.body}` | 14px | 400 | Product and checkout copy |
| `{typography.caption}` | 11px | 400 | Price metadata and navigation |

### Principles

- Use heavy type for section scanning.
- Keep product data neutral and compact.
- Make current price stronger than old price.
- Keep delivery promises short and visible.

### Note on Font Substitutes

Use **Archivo Black** for display and **SF Pro / Inter** for body when Yandex fonts are unavailable.

## Layout

### Spacing System

Use a 4px base. Product grids use 8–12px gaps; screen gutters are 12px; checkout groups use 16px interiors.

### Grid & Container

Home mixes two-column campaigns and two-column products. Catalog uses an irregular two-column category mosaic. Cart and checkout use one vertical column.

### Whitespace Philosophy

Keep cards visually open but product-dense. Use white space around packaging so assortment remains legible.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale rounded tile | Search, campaign, category |
| 2 | Sticky white bar | Delivery and cart |
| 3 | White sheet over map | Completed order detail |

### Decorative Depth

Use real pack photography, soft shadows, and cutout compositions. UI shadows remain minimal.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Badge and small pack tile |
| `{rounded.md}` | 14px | Product and category tile |
| `{rounded.lg}` | 18px | Campaign card |
| `{rounded.xl}` | 24px | Order sheet |
| `{rounded.full}` | full | Add control and delivery bar |

### Photography & Illustration Geometry

Product packs sit on white with contained crops. Category cards use cutout food and packaging on pastel fields. Campaigns use larger photographic collages.

## Components

### Buttons

Primary checkout and payment actions are yellow. Product add controls are small white circles over cards. Secondary choice controls use outlined or pale fills.

### Pricing Tabs

No pricing-plan tabs were observed. Home switches between regular and expanded assortment using a rounded segmented control.

### Cards & Containers

Product cards pair pack image, discount, price, old price, title, weight, and add control. Campaign cards combine a large offer with colored or photographic art.

### Inputs & Forms

Search is a full-width gray pill. Checkout uses grouped rows for address, payment, tips, promo codes, and donation rounding.

### Status & Build Page

Delivery time stays in a green pill above navigation. Completed order state uses yellow milestones, map context, and contact actions.

### Navigation

Home, Catalog, prepared food, Cart, and Profile form the bottom bar. Cart badge shows item count; selected item is dark.

### Footer

Delivery time, total, and checkout action form a sticky transactional footer.

## Do's and Don'ts

### Do

- Let product packaging remain readable.
- Keep delivery time persistent.
- Use yellow only for decisive actions.
- Show discount and prior price together.
- Keep category tiles photographic.

### Don't

- Don't place products on noisy backgrounds.
- Don't hide minimum order or fees.
- Don't use blue as a second checkout action.
- Don't make every campaign full bleed.
- Don't remove add controls from product cards.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Three- or four-column product grid |
| Compact | 390–767px | Default two-column storefront |
| Small | <390px | Tighten metadata and campaign height |

### Touch Targets

Keep product add, bottom tabs, search, checkout rows, and sticky actions at least 44px.

### Collapsing Strategy

Reduce product metadata before reducing image size. Stack checkout rows and preserve sticky time/total.

### Image Behavior

Contain packaged goods, cover prepared food, and use cutout compositions for category tiles. Avoid stretching labels.

## Iteration Guide

1. Establish white storefront and search.
2. Build product grid and add controls.
3. Add campaigns and category mosaic.
4. Add sticky delivery and cart.
5. Build checkout and order status last.

## Known Gaps

- Exact tokens and typeface metrics were inferred visually.
- The 104-flow inventory was surveyed; key shopping flows were sampled visually.
- Video promotions and motion-only entry states were not evaluated frame by frame.
- Tablet layouts were not present.

</design-context>

Use the design system above for all UI you generate.
