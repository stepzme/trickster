<design-context>
---
version: 1
platform: iOS
name: Arbuz-design-analysis
description: "A bright grocery marketplace built from fresh green actions, white commerce surfaces, reward-currency teal, generous product photography, and cheerful food mascots. Promotional hero scenes remain expressive while product cards stay compact and factual."
colors:
  primary: "#46D45C"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 13, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 6 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  reward-banner: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  cart-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 }
---

# Overview

Arbuz.kz balances a playful brand layer with a practical grocery grid. Green carries action, teal carries rewards value, and product photography remains the purchase evidence.

**Key Characteristics:**
- Fresh green purchase and selected states.
- Teal rewards pricing beside regular price.
- Dense horizontal product rails and category grids.
- Persistent five-item bottom navigation.
- Address and delivery context before products.
- Smiling food and shopping characters.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Fresh green purchase and selected states.
- The reviewed screens show this treatment: Teal rewards pricing beside regular price.
- The reviewed screens show this treatment: Dense horizontal product rails and category grids.
- The reviewed screens show this treatment: Persistent five-item bottom navigation.
- The reviewed screens show this treatment: Address and delivery context before products.
- The reviewed screens show this treatment: Smiling food and shopping characters.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — commerce, promotion, forms, and navigation.
- **System Mono** — order identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40pt | 800 | Campaign statement |
| `{typography.display-md}` | 26pt | 700 | Screen or total heading |
| `{typography.headline}` | 21pt | 700 | Product-section heading |
| `{typography.card-title}` | 13pt | 500 | Product title |
| `{typography.body}` | 13pt | 400 | Default details |
| `{typography.caption}` | 10pt | 500 | Badge and navigation |
| `{typography.button}` | 15pt | 600 | Checkout and add |

### Principles

- Make current price stronger than old price.
- Keep reward and regular prices clearly labeled.
- Use heavy display type only in campaigns.
- Keep category labels short and readable.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with compact numerals.

# Screen composition

### Grid & Container

Home stacks a large hero, search, shortcuts, and horizontal product rails. Catalog uses three-column category tiles. Favorites and cart use two-column products plus full-width actions.

### Whitespace Philosophy

Use white space to separate product groups and character states. Keep promotions bounded so shopping remains scannable.

# Navigation appearance

Home, Catalog, Cart, Favorites, and Profile form the bottom bar. Selected destination receives a soft-green capsule.

# Components

### Buttons

Primary add and checkout actions use green with white text. Secondary actions use white, outline, or soft-green fields.

No plan tabs were observed. Address and delivery timing use compact selectors; subscription appears as a promotional card.

### Cards & Containers

Product cards combine photo, discount, favorite, title, weight, reward price, regular price, and add. Category tiles pair object with concise label.

### Inputs & Forms

Search remains prominent. Authentication uses phone and code. Cart keeps address, threshold, quantity, and total in one scroll.

### Status & Build Page

Discount, free delivery, rewards, stock, and order state use explicit text plus color. Empty cart and favorites use character art with one recovery action.

### Navigation

Home, Catalog, Cart, Favorites, and Profile form the bottom bar. Selected destination receives a soft-green capsule.

The bottom bar is persistent. Cart adds a fixed green total action above it.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Commerce base |
| 1 | Pale rounded tile | Search and categories |
| 2 | Saturated campaign art | Hero and rewards |
| 3 | Fixed green action | Cart and checkout |

### Decorative Depth

Use softly shaded character art, isolated product photography, and selective campaign compositing. Avoid heavy shadows.

# States

Discount, free delivery, rewards, stock, and order state use explicit text plus color. Empty cart and favorites use character art with one recovery action.

# iOS adaptation

| Wide | 768pt+ | Expand rails and category columns |
| Small | <390pt | Reduce grid columns and stack prices |

### Touch Targets

Maintain 44pt for navigation, add controls, address, favorites, quantity, and checkout.

### Collapsing Strategy

Reduce category and product columns before truncating labels. Keep checkout full width and product metadata aligned.

### Image Behavior

Contain product packs and mascots. Cover campaign backgrounds while preserving featured products and brand characters.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
