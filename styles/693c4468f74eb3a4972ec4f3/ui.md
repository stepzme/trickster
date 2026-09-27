<design-context>
---
version: alpha
name: AliExpress-design-analysis
description: "A dense promotional marketplace where white product grids are punctuated by lime conversion actions, yellow buy-now buttons, coral navigation, and campaign-specific violet or mint shells. Product photography, price hierarchy, and delivery evidence carry the interface."
colors:
  primary: "#B8F43B"
  on-primary: "#151515"
  primary-hover: "#A4DE2C"
  buy-now: "#FFE052"
  brand-coral: "#FF4B4F"
  combo-violet: "#8063E8"
  market-mint: "#42E3A7"
  ink: "#171717"
  ink-muted: "#777777"
  ink-subtle: "#AAAAAA"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F7"
  surface-2: "#ECEDEF"
  hairline: "#E2E3E5"
  semantic-success: "#18A957"
  semantic-danger: "#E84A45"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 13px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 18px }
  button-buy-now: { backgroundColor: "{colors.buy-now}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 6px }
  campaign-strip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.sm}", padding: 10px }
  cart-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 10px 12px }
---

## Overview

AliExpress is visually dense but rule-driven: white product cards expose complete purchase evidence, while bright campaign shells and conversion actions create urgency without replacing product information.

**Key Characteristics:**
- Two-column product grid with dense metadata.
- Lime add/checkout and yellow buy-now actions.
- Coral active navigation and sale emphasis.
- Violet Combo and mint Below Market environments.
- Persistent search with image lookup.
- Product photography as primary visual evidence.

## Colors

### Brand & Accent
- **Lime** ({colors.primary}): Cart, checkout, and decisive conversion.
- **Yellow** ({colors.buy-now}): Immediate purchase.
- **Coral** ({colors.brand-coral}): Brand navigation and sale emphasis.
- **Violet / Mint**: Dedicated campaign environments.

### Surface
- **Canvas** ({colors.canvas}): Product and checkout base.
- **Surface 1** ({colors.surface-1}): Search, recommendations, and grouped panels.
- **Surface 2** ({colors.surface-2}): Disabled and nested controls.
- **Hairline** ({colors.hairline}): Dense product separation.

### Text
- **Ink** ({colors.ink}): Price, product title, and actions.
- **Ink Muted** ({colors.ink-muted}): Old price, shipping detail, and seller metadata.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled content.

### Semantic
- **Success** ({colors.semantic-success}): Free delivery and stock.
- **Danger** ({colors.semantic-danger}): Discount, scarcity, and destructive action.
- **Overlay** ({colors.semantic-overlay}): List creation and information sheets.

## Typography

### Font Family

- **System Sans** — all commerce, campaign, form, and navigation UI.
- **System Mono** — order numbers and tracking identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 800 | Campaign claim |
| `{typography.display-md}` | 25px | 700 | Checkout total |
| `{typography.headline}` | 21px | 700 | Section heading |
| `{typography.card-title}` | 13px | 500 | Product title |
| `{typography.body}` | 13px | 400 | Default details |
| `{typography.caption}` | 9px | 500 | Badges and navigation |
| `{typography.button}` | 14px | 600 | Conversion actions |

### Principles

- Make current price stronger than old price and discount.
- Keep delivery and purchase count adjacent to product evidence.
- Use compressed display type only in campaign artwork.
- Allow two-line product titles before truncation.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with compact numerals and Cyrillic support.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 6–10px, product gaps 6px, and checkout groups use 12–16px padding.

### Grid & Container

Discovery uses two-column product grids, horizontal campaign rails, and full-width banners. Product detail, cart, and checkout are single-column with fixed actions.

### Whitespace Philosophy

Use whitespace between content groups, not inside product metadata. Keep forms calmer than discovery surfaces.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Product grids and forms |
| 1 | Pale grouped panel | Search and cart sections |
| 2 | Saturated campaign shell | Combo and Below Market |
| 3 | Fixed conversion action | Cart and checkout |

### Decorative Depth

Use promotional backgrounds, product crops, and compact badges. Avoid decorative shadows that compete with pricing.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Product cards and badges |
| `{rounded.sm}` | 8px | Search and campaign strips |
| `{rounded.md}` | 12px | Sheets and checkout groups |
| `{rounded.lg}` | 16px | Promotional panels |
| `{rounded.pill}` | full | Filters and categories |

### Photography & Illustration Geometry

Product images use contain when shape or packaging matters and cover for promotional lifestyle cards. Keep sale labels outside critical product details.

## Components

### Buttons

Use lime for add/checkout and yellow for buy now. Secondary actions use outline or plain text. Avoid merging the two purchase intents.

### Pricing Tabs

Campaign, filter, delivery, and sort options use compact scrollable pills. Selected state may inherit the campaign color.

### Cards & Containers

Product cards combine photo, discount, price, rating, purchase count, title, and delivery. Cart rows add seller grouping, variant, quantity, and selection.

### Inputs & Forms

Search supports text and image input. Checkout groups recipient, address, payment, and delivery with a persistent total action.

### Status & Build Page

Sale, Combo, Below Market, free delivery, stock, and order states use explicit labels plus color. Campaign rules remain available from information sheets.

### Navigation

Home, Combo, Below Market, Cart, and Profile form the bottom bar. Search remains high in discovery and campaign screens.

### Footer

The bottom bar is persistent. Product, cart, and checkout add a fixed conversion row above the safe area.

## Do's and Don'ts

### Do

- Show full price and delivery context.
- Preserve seller and variant identity in cart.
- Explain campaign eligibility.
- Keep add and buy-now actions distinct.
- Use product imagery as decision evidence.

### Don't

- Don't hide old price or delivery terms behind badges.
- Don't let campaign colors recolor checkout forms.
- Don't crop product packaging when it matters.
- Don't remove seller grouping.
- Don't use discount color alone to communicate meaning.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand grid and center checkout column |
| Compact | 390–767px | Default two-column grid |
| Small | <390px | Reduce metadata density or use one column |

### Touch Targets

Maintain 44px for search, filters, variant choices, quantity, favorites, and fixed actions.

### Collapsing Strategy

Reduce discovery grid columns before shrinking product text. Stack checkout choices and keep total action full width.

### Image Behavior

Use contain for products and cover for lifestyle campaigns. Never crop labels, variants, or real purchase evidence.

## Iteration Guide

1. Build one complete product card.
2. Add search, filters, and discovery grid.
3. Implement detail, cart, and checkout.
4. Add profile and loyalty.
5. Layer campaign shells last.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 29-flow inventory was complete and all top-level flows were inspected.
- Several recorded entry steps were video-only; motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
