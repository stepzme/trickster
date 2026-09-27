<design-context>
---
version: alpha
name: yandex-eats-design-analysis
description: "A photo-led food-delivery marketplace on a clean white canvas, anchored by saturated yellow purchase controls, black condensed display type, green delivery badges, and dense restaurant metadata. Large rounded food images, horizontal category and filter strips, sticky cart totals, and map-backed tracking keep commerce fast and legible."
colors:
  primary: "#FFE000"
  on-primary: "#171717"
  delivery: "#079B63"
  discount: "#00A66A"
  ink: "#171717"
  ink-muted: "#696A70"
  ink-subtle: "#A1A2A7"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F7"
  surface-2: "#EEEEF0"
  surface-3: "#E2E3E5"
  hairline: "#E5E5E7"
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
  restaurant-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  food-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  delivery-badge: { backgroundColor: "{colors.delivery}", textColor: "#FFFFFF", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 3px 6px }
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  quantity-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 8px }
  detail-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16px }
---

## Overview

Yandex Eats is visually driven by food photography, compact delivery facts, and bright yellow conversion controls. Restaurant and product imagery carries personality; the surrounding UI stays white, black, and systematic.

**Key Characteristics:**
- White commerce canvas.
- Saturated yellow cart and purchase actions.
- Heavy condensed display headings.
- Green delivery and discount badges.
- Persistent order context and map tracking.

## Colors

### Brand & Accent
- **Yellow** ({colors.primary}): Add, cart, checkout, and order confirmation.
- **Delivery Green** ({colors.delivery}): Free delivery, cashback, and favorable logistics.

### Surface
- **Canvas** ({colors.canvas}): Default catalog, restaurant, and checkout field.
- **Surface 1** ({colors.surface-1}): Chips, grouped rows, and inactive controls.
- **Surface 2/3**: Disabled, pressed, and nested areas.
- **Hairline** ({colors.hairline}): Checkout and detail separation.

### Text
- **Ink** ({colors.ink}): Restaurant names, prices, totals, and headings.
- **Ink Muted** ({colors.ink-muted}): Cuisines, times, weights, and nutrition.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and inactive navigation.

### Semantic
- **Danger** ({colors.semantic-danger}): Removal or warning.
- **Overlay** ({colors.semantic-overlay}): Product and detail sheet context.

## Typography

### Font Family

- **Yandex Sans Display** — section headings and energetic marketplace statements.
- **YS Text** — restaurant facts, menu items, checkout, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 800 | Campaign statement |
| `{typography.display-md}` | 26px | 800 | Major section title |
| `{typography.headline}` | 21px | 800 | Menu and checkout section |
| `{typography.card-title}` | 15px | 600 | Restaurant or dish title |
| `{typography.body}` | 14px | 400 | Default facts |
| `{typography.caption}` | 11px | 400 | Delivery badge and metadata |

### Principles

- Keep display headings compact and heavy.
- Use neutral text for transactional detail.
- Let price and delivery time outrank descriptive copy.
- Keep badges short and factual.

### Note on Font Substitutes

Use **Archivo Black** for display and **SF Pro / Inter** for body if Yandex fonts are unavailable.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 12px; image grids use 8–12px gaps; checkout groups use 16px interiors.

### Grid & Container

Home and restaurant lists use one wide card per row. Menu items use a two-column grid. Recommendations use horizontal carousels.

### Whitespace Philosophy

Keep space tight around product discovery and more generous around checkout decisions. Photography supplies visual separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and checkout |
| 1 | Rounded food image | Restaurant and menu card |
| 2 | White sheet with shadow | Product details |
| 3 | Map plus tracking card | Active order |

### Decorative Depth

Use natural food depth and minimal UI shadow. Avoid decorative gradients around product imagery.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Badges and small imagery |
| `{rounded.md}` | 14px | Product image and button |
| `{rounded.lg}` | 18px | Restaurant hero image |
| `{rounded.xl}` | 24px | Product sheet |
| `{rounded.full}` | full | Add and quantity controls |

### Photography & Illustration Geometry

Use cover-cropped food photography in rounded rectangles. Product detail recommendations use near-square crops. Logos remain secondary.

## Components

### Buttons

Primary purchase actions are wide yellow rectangles with rounded corners. Add and quantity actions use white circles over photography.

### Pricing Tabs

No pricing-plan tabs were observed. Restaurant categories use a horizontally scrolling text tab row with an underline or stronger label.

### Cards & Containers

Restaurant cards pair a large photo with name, rating, delivery time, cuisine, and green delivery badge. Dish cards pair photo, title, weight, price, and add control.

### Inputs & Forms

Address and search fields are pale rounded bars. Checkout uses stacked labeled rows for address, contact, handoff, and payment.

### Status & Build Page

Delivery conditions use green badges. Active order status uses a map, ETA headline, and a compact action group.

### Navigation

Home, Pickup, Eats AI, and Cart form the bottom bar. Restaurant pages replace global discovery with back, search, favorite, and sticky section tabs.

### Footer

The cart total and checkout action act as the functional footer. Active orders end in the tracking card.

## Do's and Don'ts

### Do

- Lead with appetizing real food photography.
- Keep cart value visible.
- Show delivery time and conditions together.
- Use yellow for decisions, not decoration.
- Keep checkout details explicit.

### Don't

- Don't replace food photos with generic illustrations.
- Don't hide fees behind the total.
- Don't overload cards with accent colors.
- Don't use heavy display type for long metadata.
- Don't remove persistent cart context.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Two-column restaurant grid and wider menu |
| Compact | 390–767px | Default mobile marketplace |
| Small | <390px | Reduce category items and image height |

### Touch Targets

Keep filter chips, add controls, bottom tabs, and checkout rows at least 44px.

### Collapsing Strategy

Scroll filters and menu tabs horizontally. Stack checkout rows and preserve the full-width purchase action.

### Image Behavior

Use cover for restaurant and dish photography. Preserve subject visibility and avoid cropping price-relevant pack detail.

## Iteration Guide

1. Establish white canvas and yellow action.
2. Build restaurant cards and category filters.
3. Build menu grid and quantity controls.
4. Add checkout groups and sticky total.
5. Add map tracking last.

## Known Gaps

- Exact typefaces and color tokens were inferred visually.
- The 87-flow inventory was surveyed; key purchase flows were sampled visually.
- Motion-only first-launch footage was not reviewed frame by frame.
- Tablet layouts were not present.

</design-context>

Use the design system above for all UI you generate.
