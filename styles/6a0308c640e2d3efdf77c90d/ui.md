<design-context>
---
version: 1
platform: iOS
name: 585-Gold-design-analysis
description: "A promotion-driven jewelry marketplace on a soft white-gray canvas, using bright orange-red for conversion, black for value contrast, and polished product photography as the visual focus. Large campaign banners, compact shortcut chips, two-column product grids, explicit discount math, and a persistent five-icon bottom bar create a dense but familiar shopping experience."
colors:
  primary: "#FF432D"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 42, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.2 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  campaign-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8 }
  discount-banner: { backgroundColor: "{colors.accent-black}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [8, 12]}
  cart-group: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
---

# Overview

585 Gold places campaigns and discount value before brand restraint. Orange-red actions and black contrast panels sit around high-key jewelry photography, while the underlying browse, favorite, cart, and profile patterns remain familiar.

**Key Characteristics:**
- Large sale banners and promotion carousels.
- Orange-red primary actions and selected navigation.
- White product cards on a soft gray-white canvas.
- Polished jewelry cutouts with little visual chrome.
- Explicit old price, current price, and discount.
- Five-icon bottom navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Large sale banners and promotion carousels.
- The reviewed screens show this treatment: Orange-red primary actions and selected navigation.
- The reviewed screens show this treatment: White product cards on a soft gray-white canvas.
- The reviewed screens show this treatment: Polished jewelry cutouts with little visual chrome.
- The reviewed screens show this treatment: Explicit old price, current price, and discount.
- The reviewed screens show this treatment: Five-icon bottom navigation.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — campaigns, products, prices, profile, and navigation.
- **System Mono** — identifiers and barcode detail only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 42pt | 800 | Campaign discount |
| `{typography.display-md}` | 27pt | 700 | Screen heading |
| `{typography.headline}` | 22pt | 700 | Category heading |
| `{typography.card-title}` | 15pt | 500 | Product name |
| `{typography.body}` | 14pt | 400 | Default content |
| `{typography.caption}` | 11pt | 500 | Discount and review |
| `{typography.button}` | 15pt | 600 | Purchase action |

### Principles

- Make current price stronger than product copy.
- Keep previous price and discount adjacent.
- Use heavy display only inside campaigns.
- Keep product grids compact and neutral.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Manrope**. Preserve strong numeric weights and clear Cyrillic at small sizes.

# Screen composition

### Grid & Container

Home uses full-width campaign cards and horizontal shortcuts. Explore uses a three-column category grid. Search results use a two-column product grid; cart and profile use one column.

### Whitespace Philosophy

Leave jewelry photography on clean white. Concentrate promotion color in banners and buttons rather than the entire page.

# Navigation appearance

Home, Explore, Favorites, Profile, and Cart form the bottom bar. Selected icon turns orange-red; notification counts sit above relevant icons.

# Components

### Buttons

Primary actions are full-width orange-red pills with white text. Secondary actions use white or pale gray. Heart and bag actions remain compact icon controls.

### Cards & Containers

Product cards combine jewelry image, badge, rating, name, old price, discount, current price, heart, and bag. Campaign cards use larger type and product imagery. Cart groups separate item, promo, and bonus logic.

### Inputs & Forms

Search is a pale rounded field. Address and phone entry use sequential setup. Product filters appear above the grid; checkout moves to a dedicated flow.

### Status & Build Page

Hit, discount, rating, review count, bonus, and delivery state use explicit labels. Favorite and cart counts appear on bottom navigation.

### Navigation

Home, Explore, Favorites, Profile, and Cart form the bottom bar. Selected icon turns orange-red; notification counts sit above relevant icons.

Product detail uses a fixed price-and-purchase bar. Profile and service pages end with account and legal rows.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Soft canvas | Base |
| 1 | White rounded card | Products and cart |
| 2 | Saturated campaign panel | Sale and exchange |
| 3 | Fixed white action bar | Product purchase |

### Decorative Depth

Use polished product rendering, campaign gradients, and limited shadow. Ordinary product cards remain flat.

# States

Hit, discount, rating, review count, bonus, and delivery state use explicit labels. Favorite and cart counts appear on bottom navigation.

# iOS adaptation

| Wide | 768pt+ | Expand product grid to three columns |
| Small | <390pt | One-column product cards when prices wrap |

### Touch Targets

Maintain 44pt for bottom navigation, filters, hearts, bag actions, and checkout.

### Collapsing Strategy

Reduce category and product columns before shrinking jewelry imagery. Stack price breakdown when necessary. Keep purchase action full width.

### Image Behavior

Use contain for jewelry cutouts and cover for campaign photography. Never crop product clasps, stones, or full silhouettes.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Exact tokens and fonts were inferred visually.
- Onboarding video motion was not available as a still.
- The 44-flow inventory was complete; representative product and checkout states were sampled.
- iPad layouts were not present.

</design-context>
