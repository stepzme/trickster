<design-context>
---
version: alpha
name: Arbuz-design-analysis
description: "A bright grocery marketplace built from fresh green actions, white commerce surfaces, reward-currency teal, generous product photography, and cheerful food mascots. Promotional hero scenes remain expressive while product cards stay compact and factual."
colors:
  primary: "#46D45C"
  on-primary: "#FFFFFF"
  primary-hover: "#34BC49"
  primary-soft: "#E8FAEC"
  reward-teal: "#22AEB1"
  accent-yellow: "#FFD83D"
  accent-orange: "#FF9C38"
  ink: "#171A18"
  ink-muted: "#747A76"
  ink-subtle: "#A9AEA9"
  canvas: "#FFFFFF"
  surface-1: "#F6F8F6"
  surface-2: "#ECF2ED"
  hairline: "#E1E7E2"
  semantic-success: "#35B94B"
  semantic-danger: "#E6534F"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 13px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 6px }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  reward-banner: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  cart-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 10px 12px }
---

## Overview

Arbuz.kz balances a playful brand layer with a practical grocery grid. Green carries action, teal carries rewards value, and product photography remains the purchase evidence.

**Key Characteristics:**
- Fresh green purchase and selected states.
- Teal rewards pricing beside regular price.
- Dense horizontal product rails and category grids.
- Persistent five-item bottom navigation.
- Address and delivery context before products.
- Smiling food and shopping characters.

## Colors

### Brand & Accent
- **Fresh Green** ({colors.primary}): Add, checkout, selection, and progress.
- **Reward Teal** ({colors.reward-teal}): Freedom price and bonus value.
- **Yellow / Orange**: Discounts, subscription, and mascot support.

### Surface
- **Canvas** ({colors.canvas}): Product, catalog, cart, and profile base.
- **Surface 1** ({colors.surface-1}): Search, category tiles, and grouped controls.
- **Surface 2** ({colors.surface-2}): Disabled and nested surfaces.
- **Soft Green** ({colors.primary-soft}): Reward and success education.

### Text
- **Ink** ({colors.ink}): Product names, prices, and actions.
- **Ink Muted** ({colors.ink-muted}): Weight, timing, and metadata.
- **Ink Subtle** ({colors.ink-subtle}): Old price and disabled content.

### Semantic
- **Success** ({colors.semantic-success}): Delivery and confirmed states.
- **Danger** ({colors.semantic-danger}): Removal and error.
- **Overlay** ({colors.semantic-overlay}): Modal and age-gate scrim.

## Typography

### Font Family

- **System Sans** — commerce, promotion, forms, and navigation.
- **System Mono** — order identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 800 | Campaign statement |
| `{typography.display-md}` | 26px | 700 | Screen or total heading |
| `{typography.headline}` | 21px | 700 | Product-section heading |
| `{typography.card-title}` | 13px | 500 | Product title |
| `{typography.body}` | 13px | 400 | Default details |
| `{typography.caption}` | 10px | 500 | Badge and navigation |
| `{typography.button}` | 15px | 600 | Checkout and add |

### Principles

- Make current price stronger than old price.
- Keep reward and regular prices clearly labeled.
- Use heavy display type only in campaigns.
- Keep category labels short and readable.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with compact numerals.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 8–12px, product gaps 6px, and grouped controls use 12–16px padding.

### Grid & Container

Home stacks a large hero, search, shortcuts, and horizontal product rails. Catalog uses three-column category tiles. Favorites and cart use two-column products plus full-width actions.

### Whitespace Philosophy

Use white space to separate product groups and character states. Keep promotions bounded so shopping remains scannable.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Commerce base |
| 1 | Pale rounded tile | Search and categories |
| 2 | Saturated campaign art | Hero and rewards |
| 3 | Fixed green action | Cart and checkout |

### Decorative Depth

Use softly shaded character art, isolated product photography, and selective campaign compositing. Avoid heavy shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Discounts and small badges |
| `{rounded.sm}` | 10px | Product and category cards |
| `{rounded.md}` | 14px | Reward banners and controls |
| `{rounded.lg}` | 20px | Empty-state and campaign panels |
| `{rounded.pill}` | full | Navigation, tags, and progress |

### Photography & Illustration Geometry

Contain product packs and mascot characters. Campaign scenes may use cover, but preserve featured products and headline.

## Components

### Buttons

Primary add and checkout actions use green with white text. Secondary actions use white, outline, or soft-green fields.

### Pricing Tabs

No plan tabs were observed. Address and delivery timing use compact selectors; subscription appears as a promotional card.

### Cards & Containers

Product cards combine photo, discount, favorite, title, weight, reward price, regular price, and add. Category tiles pair object with concise label.

### Inputs & Forms

Search remains prominent. Authentication uses phone and code. Cart keeps address, threshold, quantity, and total in one scroll.

### Status & Build Page

Discount, free delivery, rewards, stock, and order state use explicit text plus color. Empty cart and favorites use character art with one recovery action.

### Navigation

Home, Catalog, Cart, Favorites, and Profile form the bottom bar. Selected destination receives a soft-green capsule.

### Footer

The bottom bar is persistent. Cart adds a fixed green total action above it.

## Do's and Don'ts

### Do

- Keep delivery context visible.
- Label reward and cash prices.
- Use green consistently for conversion.
- Preserve product packaging.
- Use mascots for recovery and education.

### Don't

- Don't replace product evidence with mascot art.
- Don't hide threshold or cashback rules.
- Don't overfill catalog tiles with copy.
- Don't use discount color alone.
- Don't crop labels needed for purchase.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand rails and category columns |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Reduce grid columns and stack prices |

### Touch Targets

Maintain 44px for navigation, add controls, address, favorites, quantity, and checkout.

### Collapsing Strategy

Reduce category and product columns before truncating labels. Keep checkout full width and product metadata aligned.

### Image Behavior

Contain product packs and mascots. Cover campaign backgrounds while preserving featured products and brand characters.

## Iteration Guide

1. Establish search, delivery context, and bottom navigation.
2. Build one complete product card.
3. Add catalog, favorites, and cart.
4. Add profile rewards and subscription.
5. Layer characters and campaign scenes last.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 81-flow inventory was complete and all top-level flows were inspected.
- Some campaign previews were video-only; motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
