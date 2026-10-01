<design-context>
---
version: 1
platform: iOS
name: Airba-fresh-design-analysis
description: "A dense grocery marketplace anchored by vivid fresh green, white commerce surfaces, compact product cards, and a cheerful avocado mascot. High-energy promotional banners coexist with practical category tiles, barcode search, unit pricing, delivery-service switching, and a fixed green checkout action."
colors:
  primary: "#62CB32"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 6 }
  category-tile: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.sm}", padding: 8 }
  service-switch: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 4 }
  cart-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [20, 16]}
---

# Overview

Airba fresh prioritizes range, promotion, and delivery context. White dense commerce surfaces are held together by fresh green actions and selected navigation, while the avocado mascot handles empty, loyalty, and promotional moments.

# Non-negotiable visual invariants

- The recurring color treatment uses Vivid green brand and conversion color.
- Keep delivery address and timing visible.
- Show complete unit and discount context.
- Use green for conversion and selected state.
- Use mascot art for recovery and loyalty.
- Preserve dense but aligned product grids.
- Home stacks horizontal product rails and three-column promo tiles.
- Catalog uses two- or three-column category tiles.

# Color and surfaces

- **Fresh Green** ({colors.primary}): Cart, checkout, selection, and loyalty.
- **Blue** ({colors.accent-blue}): Secondary information and recovery action.
- **Yellow** and **Orange**: Bonuses, ratings, promotions, and mascot props.

- **Canvas** ({colors.canvas}): Product and profile base.
- **Surface 1** ({colors.surface-1}): Search, cart rows, and grouped controls.
- **Surface 2** ({colors.surface-2}): Disabled and nested surfaces.
- **Soft Green** ({colors.primary-soft}): Category and success emphasis.

- **Ink** ({colors.ink}): Products, prices, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Weight, unit price, timing, and support text.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and disabled metadata.

- **Success** ({colors.semantic-success}): Free delivery and confirmed state.
- **Danger** ({colors.semantic-danger}): Removal and error.
- **Overlay** ({colors.semantic-overlay}): Modal scrim.

# Typography

- **System Sans** — all commerce, promotion, forms, and navigation.
- **System Mono** — order or barcode identifiers only.

- `{typography.display-xl}` — 40 points — 800 — Launch campaign
- `{typography.display-md}` — 26 points — 700 — Screen heading
- `{typography.headline}` — 21 points — 700 — Category heading
- `{typography.card-title}` — 14 points — 500 — Product title
- `{typography.body}` — 13 points — 400 — Default details
- `{typography.caption}` — 10 points — 500 — Unit and bonus metadata
- `{typography.button}` — 15 points — 600 — Cart and checkout

- Keep product facts compact but complete.
- Make final price stronger than old price and unit metadata.
- Use heavy type only in launch and promotion banners.
- Keep category labels readable over food imagery.

Use **SF Pro**, **Inter**, or **Roboto** with strong Cyrillic and compact numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 8–12 points, product gaps 6 points, and cart-row padding 10–12 points.

Home stacks horizontal product rails and three-column promo tiles. Catalog uses two- or three-column category tiles. Product card is a single detail column; cart uses dense vertical rows.

Use white space to separate product groups, not individual metadata. Keep promotional artwork bounded so shopping remains scannable.

Use product photography, soft card separation, glossy reward icons, and lightly shaded mascot art. Avoid heavy shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Catalog, At Home, Cart, and Profile form the bottom bar. Selected state turns green; cart shows a count badge.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary cart and checkout actions use green fill with white text. Secondary recovery actions may use blue. Product cards use compact plus controls beside price.

Product cards combine image, discount, rating, bonus, old price, current price, unit price, and add control. Category tiles use food imagery and concise labels. Profile uses simple row groups.

Search supports text and barcode. Checkout groups address, time, substitution, payment, and contact. Fixed actions retain total or unit context.

Discount, rating, dietary tags, bonus accrual, weight, free-delivery progress, and stock state use explicit labels plus color.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Product packs use contain; category food photos use cover. The avocado mascot stays fully visible in open white or pale-green space.

Use contain for product packs and mascot, cover for category food and campaign photography. Never crop package labels when they are purchase evidence.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Discount, rating, dietary tags, bonus accrual, weight, free-delivery progress, and stock state use explicit labels plus color.

- **Success** ({colors.semantic-success}): Free delivery and confirmed state.
- **Danger** ({colors.semantic-danger}): Removal and error.
- **Overlay** ({colors.semantic-overlay}): Modal scrim.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Maintain 44 points for navigation, add controls, service switch, barcode, and checkout.
- Reduce grid columns before truncating product names. Stack price and unit metadata when narrow. Keep checkout full width.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use mascot art instead of product evidence.
- Do not hide service choice in cart.
- Do not make every promotion full-screen.
- Do not rely on discount color alone.
- Do not remove unit-price context.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact brand tokens and font names were inferred visually.
- The 43-flow inventory was complete; repeated product rails were sampled.
- No large-screen layouts were present.
- Promotional motion was not represented.

</design-context>
