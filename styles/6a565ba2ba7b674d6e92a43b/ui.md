<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: Yandex Sans Display, fontSize: 38, fontWeight: 800, lineHeight: 0.98, letterSpacing: -1.0 }
  display-lg: { fontFamily: Yandex Sans Display, fontSize: 31, fontWeight: 800, lineHeight: 1.02, letterSpacing: -0.6 }
  display-md: { fontFamily: Yandex Sans Display, fontSize: 26, fontWeight: 800, lineHeight: 1.06, letterSpacing: -0.4 }
  headline: { fontFamily: Yandex Sans Display, fontSize: 21, fontWeight: 800, lineHeight: 1.10, letterSpacing: -0.25 }
  card-title: { fontFamily: YS Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  checkout-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [12, 16]}
  campaign-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.lg}", padding: 0 }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0 }
  quantity-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 8 }
  delivery-bar: { backgroundColor: "{colors.delivery}", textColor: "#FFFFFF", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [6, 12]}
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
---

# Overview

Yandex Lavka is a high-density grocery interface that stays visually light. White space and product photography dominate; sky blue identifies the service, green carries delivery promises, red marks discounts, and yellow closes transactions.

**Key Characteristics:**
- Product-first white storefront.
- Sky-blue service identity.
- Yellow checkout action.
- Green persistent delivery promise.
- Pastel photographic category tiles.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Product-first white storefront.
- The reviewed screens show this treatment: Sky-blue service identity.
- The reviewed screens show this treatment: Yellow checkout action.
- The reviewed screens show this treatment: Green persistent delivery promise.
- The reviewed screens show this treatment: Pastel photographic category tiles.

# Color and surfaces

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

# Typography

### Font Family

- **Yandex Sans Display** — campaign and category headings.
- **YS Text** — products, delivery, checkout, profile, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38pt | 800 | Campaign statement |
| `{typography.display-md}` | 26pt | 800 | Major screen title |
| `{typography.headline}` | 21pt | 800 | Catalog section |
| `{typography.card-title}` | 15pt | 600 | Product title |
| `{typography.body}` | 14pt | 400 | Product and checkout copy |
| `{typography.caption}` | 11pt | 400 | Price metadata and navigation |

### Principles

- Use heavy type for section scanning.
- Keep product data neutral and compact.
- Make current price stronger than old price.
- Keep delivery promises short and visible.

### Note on Font Substitutes

Use **Archivo Black** for display and **SF Pro / Inter** for body when Yandex fonts are unavailable.

# Screen composition

### Grid & Container

Home mixes two-column campaigns and two-column products. Catalog uses an irregular two-column category mosaic. Cart and checkout use one vertical column.

### Whitespace Philosophy

Keep cards visually open but product-dense. Use white space around packaging so assortment remains legible.

# Navigation appearance

Home, Catalog, prepared food, Cart, and Profile form the bottom bar. Cart badge shows item count; selected item is dark.

# Components

### Buttons

Primary checkout and payment actions are yellow. Product add controls are small white circles over cards. Secondary choice controls use outlined or pale fills.

### Cards & Containers

Product cards pair pack image, discount, price, old price, title, weight, and add control. Campaign cards combine a large offer with colored or photographic art.

### Inputs & Forms

Search is a full-width gray pill. Checkout uses grouped rows for address, payment, tips, promo codes, and donation rounding.

### Status & Build Page

Delivery time stays in a green pill above navigation. Completed order state uses yellow milestones, map context, and contact actions.

### Navigation

Home, Catalog, prepared food, Cart, and Profile form the bottom bar. Cart badge shows item count; selected item is dark.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale rounded tile | Search, campaign, category |
| 2 | Sticky white bar | Delivery and cart |
| 3 | White sheet over map | Completed order detail |

### Decorative Depth

Use real pack photography, soft shadows, and cutout compositions. UI shadows remain minimal.

# States

Delivery time stays in a green pill above navigation. Completed order state uses yellow milestones, map context, and contact actions.

# iOS adaptation

| Wide | 768pt+ | Three- or four-column product grid |
| Small | <390pt | Tighten metadata and campaign height |

### Touch Targets

Keep product add, bottom tabs, search, checkout rows, and sticky actions at least 44pt.

### Collapsing Strategy

Reduce product metadata before reducing image size. Stack checkout rows and preserve sticky time/total.

### Image Behavior

Contain packaged goods, cover prepared food, and use cutout compositions for category tiles. Avoid stretching labels.

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

</design-context>
