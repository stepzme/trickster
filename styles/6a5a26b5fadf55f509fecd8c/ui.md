<design-context>
---
version: 1
platform: iOS
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
  restaurant-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  food-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0 }
  delivery-badge: { backgroundColor: "{colors.delivery}", textColor: "#FFFFFF", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [3, 6]}
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  quantity-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 8 }
  detail-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
---

# Overview

Yandex Eats is visually driven by food photography, compact delivery facts, and bright yellow conversion controls. Restaurant and product imagery carries personality; the surrounding UI stays white, black, and systematic.

**Key Characteristics:**
- White commerce canvas.
- Saturated yellow cart and purchase actions.
- Heavy condensed display headings.
- Green delivery and discount badges.
- Persistent order context and map tracking.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White commerce canvas.
- The reviewed screens show this treatment: Saturated yellow cart and purchase actions.
- The reviewed screens show this treatment: Heavy condensed display headings.
- The reviewed screens show this treatment: Green delivery and discount badges.
- The reviewed screens show this treatment: Persistent order context and map tracking.

# Color and surfaces

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

# Typography

### Font Family

- **Yandex Sans Display** — section headings and energetic marketplace statements.
- **YS Text** — restaurant facts, menu items, checkout, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38pt | 800 | Campaign statement |
| `{typography.display-md}` | 26pt | 800 | Major section title |
| `{typography.headline}` | 21pt | 800 | Menu and checkout section |
| `{typography.card-title}` | 15pt | 600 | Restaurant or dish title |
| `{typography.body}` | 14pt | 400 | Default facts |
| `{typography.caption}` | 11pt | 400 | Delivery badge and metadata |

### Principles

- Keep display headings compact and heavy.
- Use neutral text for transactional detail.
- Let price and delivery time outrank descriptive copy.
- Keep badges short and factual.

### Note on Font Substitutes

Use **Archivo Black** for display and **SF Pro / Inter** for body if Yandex fonts are unavailable.

# Screen composition

### Grid & Container

Home and restaurant lists use one wide card per row. Menu items use a two-column grid. Recommendations use horizontal carousels.

### Whitespace Philosophy

Keep space tight around product discovery and more generous around checkout decisions. Photography supplies visual separation.

# Navigation appearance

Home, Pickup, Eats AI, and Cart form the bottom bar. Restaurant pages replace global discovery with back, search, favorite, and sticky section tabs.

# Components

### Buttons

Primary purchase actions are wide yellow rectangles with rounded corners. Add and quantity actions use white circles over photography.

### Cards & Containers

Restaurant cards pair a large photo with name, rating, delivery time, cuisine, and green delivery badge. Dish cards pair photo, title, weight, price, and add control.

### Inputs & Forms

Address and search fields are pale rounded bars. Checkout uses stacked labeled rows for address, contact, handoff, and payment.

### Status & Build Page

Delivery conditions use green badges. Active order status uses a map, ETA headline, and a compact action group.

### Navigation

Home, Pickup, Eats AI, and Cart form the bottom bar. Restaurant pages replace global discovery with back, search, favorite, and sticky section tabs.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and checkout |
| 1 | Rounded food image | Restaurant and menu card |
| 2 | White sheet with shadow | Product details |
| 3 | Map plus tracking card | Active order |

### Decorative Depth

Use natural food depth and minimal UI shadow. Avoid decorative gradients around product imagery.

# States

Delivery conditions use green badges. Active order status uses a map, ETA headline, and a compact action group.

# iOS adaptation

| Wide | 768pt+ | Two-column restaurant grid and wider menu |
| Small | <390pt | Reduce category items and image height |

### Touch Targets

Keep filter chips, add controls, bottom tabs, and checkout rows at least 44pt.

### Collapsing Strategy

Scroll filters and menu tabs horizontally. Stack checkout rows and preserve the full-width purchase action.

### Image Behavior

Use cover for restaurant and dish photography. Preserve subject visibility and avoid cropping price-relevant pack detail.

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

</design-context>
