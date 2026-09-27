<design-context>
---
version: alpha
name: 585-Gold-design-analysis
description: "A promotion-driven jewelry marketplace on a soft white-gray canvas, using bright orange-red for conversion, black for value contrast, and polished product photography as the visual focus. Large campaign banners, compact shortcut chips, two-column product grids, explicit discount math, and a persistent five-icon bottom bar create a dense but familiar shopping experience."
colors:
  primary: "#FF432D"
  on-primary: "#FFFFFF"
  primary-hover: "#E93422"
  accent-black: "#101012"
  accent-gold: "#D5A63C"
  ink: "#151519"
  ink-muted: "#77777F"
  ink-subtle: "#A8A8AE"
  canvas: "#F7F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F0EEF1"
  hairline: "#E3E0E4"
  semantic-success: "#35A965"
  semantic-warning: "#FFC21C"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 42px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.2px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  campaign-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px }
  discount-banner: { backgroundColor: "{colors.accent-black}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px 12px }
  cart-group: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 20px 16px }
---

## Overview

585 Gold places campaigns and discount value before brand restraint. Orange-red actions and black contrast panels sit around high-key jewelry photography, while the underlying browse, favorite, cart, and profile patterns remain familiar.

**Key Characteristics:**
- Large sale banners and promotion carousels.
- Orange-red primary actions and selected navigation.
- White product cards on a soft gray-white canvas.
- Polished jewelry cutouts with little visual chrome.
- Explicit old price, current price, and discount.
- Five-icon bottom navigation.

## Colors

### Brand & Accent
- **Orange Red** ({colors.primary}): Purchase, checkout, active navigation, and sale emphasis.
- **Black** ({colors.accent-black}): Premium value contrast and discount banners.
- **Gold** ({colors.accent-gold}): Loyalty, rating, and jewelry context.

### Surface
- **Canvas** ({colors.canvas}): Browse and profile background.
- **Surface 1** ({colors.surface-1}): Product, cart, and bonus cards.
- **Surface 2** ({colors.surface-2}): Search, disabled, and nested controls.
- **Hairline** ({colors.hairline}): Dividers and quiet boundaries.

### Text
- **Ink** ({colors.ink}): Product names, prices, and headings.
- **Ink Muted** ({colors.ink-muted}): Reviews, old prices, and explanatory detail.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and low-priority metadata.

### Semantic
- **Success** ({colors.semantic-success}): Savings and available benefit.
- **Warning** ({colors.semantic-warning}): Rating and attention.
- **Overlay** ({colors.semantic-overlay}): Gallery and modal scrim.

## Typography

### Font Family

- **System Sans** — campaigns, products, prices, profile, and navigation.
- **System Mono** — identifiers and barcode detail only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 42px | 800 | Campaign discount |
| `{typography.display-md}` | 27px | 700 | Screen heading |
| `{typography.headline}` | 22px | 700 | Category heading |
| `{typography.card-title}` | 15px | 500 | Product name |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 11px | 500 | Discount and review |
| `{typography.button}` | 15px | 600 | Purchase action |

### Principles

- Make current price stronger than product copy.
- Keep previous price and discount adjacent.
- Use heavy display only inside campaigns.
- Keep product grids compact and neutral.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Manrope**. Preserve strong numeric weights and clear Cyrillic at small sizes.

## Layout

### Spacing System

Use a 4px base. Browse gutters are 12px, product-card gaps 8px, and cart-group padding 14–16px.

### Grid & Container

Home uses full-width campaign cards and horizontal shortcuts. Explore uses a three-column category grid. Search results use a two-column product grid; cart and profile use one column.

### Whitespace Philosophy

Leave jewelry photography on clean white. Concentrate promotion color in banners and buttons rather than the entire page.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Soft canvas | Base |
| 1 | White rounded card | Products and cart |
| 2 | Saturated campaign panel | Sale and exchange |
| 3 | Fixed white action bar | Product purchase |

### Decorative Depth

Use polished product rendering, campaign gradients, and limited shadow. Ordinary product cards remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Badges and chips |
| `{rounded.md}` | 14px | Buttons and product cards |
| `{rounded.lg}` | 18px | Campaign and cart cards |
| `{rounded.pill}` | full | Primary action and filter |

### Photography & Illustration Geometry

Jewelry uses isolated high-resolution cutouts with generous white space. Campaigns may place jewelry over gradient or fabric photography. No consistent standalone illustration system was observed.

## Components

### Buttons

Primary actions are full-width orange-red pills with white text. Secondary actions use white or pale gray. Heart and bag actions remain compact icon controls.

### Pricing Tabs

No pricing-plan tabs were observed. Filters and shortcut categories use small outlined or white chips.

### Cards & Containers

Product cards combine jewelry image, badge, rating, name, old price, discount, current price, heart, and bag. Campaign cards use larger type and product imagery. Cart groups separate item, promo, and bonus logic.

### Inputs & Forms

Search is a pale rounded field. Address and phone entry use sequential setup. Product filters appear above the grid; checkout moves to a dedicated flow.

### Status & Build Page

Hit, discount, rating, review count, bonus, and delivery state use explicit labels. Favorite and cart counts appear on bottom navigation.

### Navigation

Home, Explore, Favorites, Profile, and Cart form the bottom bar. Selected icon turns orange-red; notification counts sit above relevant icons.

### Footer

Product detail uses a fixed price-and-purchase bar. Profile and service pages end with account and legal rows.

## Do's and Don'ts

### Do

- Keep jewelry photography clean and large.
- Show complete discount math.
- Reserve orange-red for conversion and active state.
- Keep promotional cards visually contained.
- Use one fixed purchase action.

### Don't

- Don't place jewelry on noisy card backgrounds.
- Don't hide original price or discount conditions.
- Don't make every surface orange-red.
- Don't use decorative icons as product evidence.
- Don't crowd the bottom bar with labels.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand product grid to three columns |
| Compact | 390–767px | Default two-column grid |
| Small | <390px | One-column product cards when prices wrap |

### Touch Targets

Maintain 44px for bottom navigation, filters, hearts, bag actions, and checkout.

### Collapsing Strategy

Reduce category and product columns before shrinking jewelry imagery. Stack price breakdown when necessary. Keep purchase action full width.

### Image Behavior

Use contain for jewelry cutouts and cover for campaign photography. Never crop product clasps, stones, or full silhouettes.

## Iteration Guide

1. Establish product image and price hierarchy.
2. Build the two-column product card.
3. Add campaign banners and shortcuts.
4. Implement detail, favorite, and cart.
5. Verify discount consistency across surfaces.

## Known Gaps

- Exact tokens and fonts were inferred visually.
- Onboarding video motion was not available as a still.
- The 44-flow inventory was complete; representative product and checkout states were sampled.
- Tablet layouts were not present.

</design-context>

Use the design system above for all UI you generate.
