<design-context>
---
version: alpha
name: Airba-fresh-design-analysis
description: "A dense grocery marketplace anchored by vivid fresh green, white commerce surfaces, compact product cards, and a cheerful avocado mascot. High-energy promotional banners coexist with practical category tiles, barcode search, unit pricing, delivery-service switching, and a fixed green checkout action."
colors:
  primary: "#62CB32"
  on-primary: "#FFFFFF"
  primary-hover: "#4FB824"
  primary-soft: "#EAF8DF"
  accent-blue: "#58A7EF"
  accent-yellow: "#FFD43A"
  accent-orange: "#F59B2F"
  ink: "#171A18"
  ink-muted: "#747A75"
  ink-subtle: "#A5AAA6"
  canvas: "#FFFFFF"
  surface-1: "#F5F7F5"
  surface-2: "#EEF2EE"
  hairline: "#E2E7E2"
  semantic-success: "#45B82E"
  semantic-danger: "#E64F4F"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 6px }
  category-tile: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.sm}", padding: 8px }
  service-switch: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 4px }
  cart-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 20px 16px }
---

## Overview

Airba fresh prioritizes range, promotion, and delivery context. White dense commerce surfaces are held together by fresh green actions and selected navigation, while the avocado mascot handles empty, loyalty, and promotional moments.

**Key Characteristics:**
- Vivid green brand and conversion color.
- Dense product rows with discount, rating, bonus, and unit price.
- Address, delivery time, search, and barcode tools at the top.
- Category and recommendation grids built from food photography.
- Five-item bottom navigation.
- Avocado mascot and colorful reward graphics.

## Colors

### Brand & Accent
- **Fresh Green** ({colors.primary}): Cart, checkout, selection, and loyalty.
- **Blue** ({colors.accent-blue}): Secondary information and recovery action.
- **Yellow** and **Orange**: Bonuses, ratings, promotions, and mascot props.

### Surface
- **Canvas** ({colors.canvas}): Product and profile base.
- **Surface 1** ({colors.surface-1}): Search, cart rows, and grouped controls.
- **Surface 2** ({colors.surface-2}): Disabled and nested surfaces.
- **Soft Green** ({colors.primary-soft}): Category and success emphasis.

### Text
- **Ink** ({colors.ink}): Products, prices, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Weight, unit price, timing, and support text.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and disabled metadata.

### Semantic
- **Success** ({colors.semantic-success}): Free delivery and confirmed state.
- **Danger** ({colors.semantic-danger}): Removal and error.
- **Overlay** ({colors.semantic-overlay}): Modal scrim.

## Typography

### Font Family

- **System Sans** — all commerce, promotion, forms, and navigation.
- **System Mono** — order or barcode identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 800 | Launch campaign |
| `{typography.display-md}` | 26px | 700 | Screen heading |
| `{typography.headline}` | 21px | 700 | Category heading |
| `{typography.card-title}` | 14px | 500 | Product title |
| `{typography.body}` | 13px | 400 | Default details |
| `{typography.caption}` | 10px | 500 | Unit and bonus metadata |
| `{typography.button}` | 15px | 600 | Cart and checkout |

### Principles

- Keep product facts compact but complete.
- Make final price stronger than old price and unit metadata.
- Use heavy type only in launch and promotion banners.
- Keep category labels readable over food imagery.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with strong Cyrillic and compact numerals.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 8–12px, product gaps 6px, and cart-row padding 10–12px.

### Grid & Container

Home stacks horizontal product rails and three-column promo tiles. Catalog uses two- or three-column category tiles. Product card is a single detail column; cart uses dense vertical rows.

### Whitespace Philosophy

Use white space to separate product groups, not individual metadata. Keep promotional artwork bounded so shopping remains scannable.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Base |
| 1 | Pale rounded group | Search and cart |
| 2 | Saturated banner | Promotion and loyalty |
| 3 | Fixed green action | Product and checkout |

### Decorative Depth

Use product photography, soft card separation, glossy reward icons, and lightly shaded mascot art. Avoid heavy shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Price and rating badges |
| `{rounded.sm}` | 10px | Product and category cards |
| `{rounded.md}` | 14px | Banners and controls |
| `{rounded.lg}` | 18px | Empty-state panels |
| `{rounded.pill}` | full | Tags and progress |

### Photography & Illustration Geometry

Product packs use contain; category food photos use cover. The avocado mascot stays fully visible in open white or pale-green space.

## Components

### Buttons

Primary cart and checkout actions use green fill with white text. Secondary recovery actions may use blue. Product cards use compact plus controls beside price.

### Pricing Tabs

No pricing-plan tabs were observed. Cart uses a two-option delivery-service switch with green selected emphasis.

### Cards & Containers

Product cards combine image, discount, rating, bonus, old price, current price, unit price, and add control. Category tiles use food imagery and concise labels. Profile uses simple row groups.

### Inputs & Forms

Search supports text and barcode. Checkout groups address, time, substitution, payment, and contact. Fixed actions retain total or unit context.

### Status & Build Page

Discount, rating, dietary tags, bonus accrual, weight, free-delivery progress, and stock state use explicit labels plus color.

### Navigation

Home, Catalog, At Home, Cart, and Profile form the bottom bar. Selected state turns green; cart shows a count badge.

### Footer

Checkout uses a fixed total action. Profile ends with history, addresses, personal data, and settings rows.

## Do's and Don'ts

### Do

- Keep delivery address and timing visible.
- Show complete unit and discount context.
- Use green for conversion and selected state.
- Use mascot art for recovery and loyalty.
- Preserve dense but aligned product grids.

### Don't

- Don't use mascot art instead of product evidence.
- Don't hide service choice in cart.
- Don't make every promotion full-screen.
- Don't rely on discount color alone.
- Don't remove unit-price context.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand product rails and category grid |
| Compact | 390–767px | Default dense mobile layout |
| Small | <390px | Reduce grid columns and stack cart metadata |

### Touch Targets

Maintain 44px for navigation, add controls, service switch, barcode, and checkout.

### Collapsing Strategy

Reduce grid columns before truncating product names. Stack price and unit metadata when narrow. Keep checkout full width.

### Image Behavior

Use contain for product packs and mascot, cover for category food and campaign photography. Never crop package labels when they are purchase evidence.

## Iteration Guide

1. Establish green action and bottom navigation.
2. Build one dense product card.
3. Add search, barcode, and category grid.
4. Implement cart service switch and checkout.
5. Add mascot and promotions last.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 43-flow inventory was complete; repeated product rails were sampled.
- No large-screen layouts were present.
- Promotional motion was not represented.

</design-context>

Use the design system above for all UI you generate.
