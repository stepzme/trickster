<design-context>
---
version: 1
platform: iOS
name: AliExpress-design-analysis
description: "A dense promotional marketplace where white product grids are punctuated by lime conversion actions, yellow buy-now buttons, coral navigation, and campaign-specific violet or mint shells. Product photography, price hierarchy, and delivery evidence carry the interface."
colors:
  primary: "#B8F43B"
  on-primary: "#151515"
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 800, lineHeight: 1.00, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 13, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [13, 18]}
  button-buy-now: { backgroundColor: "{colors.buy-now}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 6 }
  campaign-strip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.sm}", padding: 10 }
  cart-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [10, 12]}
---

# Overview

AliExpress is visually dense but rule-driven: white product cards expose complete purchase evidence, while bright campaign shells and conversion actions create urgency without replacing product information.

# Non-negotiable visual invariants

- The sampled screens consistently show Two-column product grid with dense metadata.
- Show full price and delivery context.
- Preserve seller and variant identity in cart.
- Explain campaign eligibility.
- Keep add and buy-now actions distinct.
- Use product imagery as decision evidence.
- Discovery uses two-column product grids, horizontal campaign rails, and full-width banners.
- Product detail, cart, and checkout are single-column with fixed actions.

# Color and surfaces

- **Lime** ({colors.primary}): Cart, checkout, and decisive conversion.
- **Yellow** ({colors.buy-now}): Immediate purchase.
- **Coral** ({colors.brand-coral}): Brand navigation and sale emphasis.
- **Violet / Mint**: Dedicated campaign environments.

- **Canvas** ({colors.canvas}): Product and checkout base.
- **Surface 1** ({colors.surface-1}): Search, recommendations, and grouped panels.
- **Surface 2** ({colors.surface-2}): Disabled and nested controls.
- **Hairline** ({colors.hairline}): Dense product separation.

- **Ink** ({colors.ink}): Price, product title, and actions.
- **Ink Muted** ({colors.ink-muted}): Old price, shipping detail, and seller metadata.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled content.

- **Success** ({colors.semantic-success}): Free delivery and stock.
- **Danger** ({colors.semantic-danger}): Discount, scarcity, and destructive action.
- **Overlay** ({colors.semantic-overlay}): List creation and information sheets.

# Typography

- **System Sans** — all commerce, campaign, form, and navigation UI.
- **System Mono** — order numbers and tracking identifiers only.

- `{typography.display-xl}` — 38 points — 800 — Campaign claim
- `{typography.display-md}` — 25 points — 700 — Checkout total
- `{typography.headline}` — 21 points — 700 — Section heading
- `{typography.card-title}` — 13 points — 500 — Product title
- `{typography.body}` — 13 points — 400 — Default details
- `{typography.caption}` — 9 points — 500 — Badges and navigation
- `{typography.button}` — 14 points — 600 — Conversion actions

- Make current price stronger than old price and discount.
- Keep delivery and purchase count adjacent to product evidence.
- Use compressed display type only in campaign artwork.
- Allow two-line product titles before truncation.

Use **SF Pro**, **Inter**, or **Roboto** with compact numerals and Cyrillic support.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 6–10 points, product gaps 6 points, and checkout groups use 12–16 points padding.

Discovery uses two-column product grids, horizontal campaign rails, and full-width banners. Product detail, cart, and checkout are single-column with fixed actions.

Use whitespace between content groups, not inside product metadata. Keep forms calmer than discovery surfaces.

Use promotional backgrounds, product crops, and compact badges. Avoid decorative shadows that compete with pricing.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Combo, Below Market, Cart, and Profile form the bottom bar. Search remains high in discovery and campaign screens.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use lime for add/checkout and yellow for buy now. Secondary actions use outline or plain text. Avoid merging the two purchase intents.

Product cards combine photo, discount, price, rating, purchase count, title, and delivery. Cart rows add seller grouping, variant, quantity, and selection.

Search supports text and image input. Checkout groups recipient, address, payment, and delivery with a persistent total action.

Sale, Combo, Below Market, free delivery, stock, and order states use explicit labels plus color. Campaign rules remain available from information sheets.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Product images use contain when shape or packaging matters and cover for promotional lifestyle cards. Keep sale labels outside critical product details.

Use contain for products and cover for lifestyle campaigns. Never crop labels, variants, or real purchase evidence.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Sale, Combo, Below Market, free delivery, stock, and order states use explicit labels plus color. Campaign rules remain available from information sheets.

- **Success** ({colors.semantic-success}): Free delivery and stock.
- **Danger** ({colors.semantic-danger}): Discount, scarcity, and destructive action.
- **Overlay** ({colors.semantic-overlay}): List creation and information sheets.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Maintain 44 points for search, filters, variant choices, quantity, favorites, and fixed actions.
- Reduce discovery grid columns before shrinking product text. Stack checkout choices and keep total action full width.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not hide old price or delivery terms behind badges.
- Do not let campaign colors recolor checkout forms.
- Do not crop product packaging when it matters.
- Do not remove seller grouping.
- Do not use discount color alone to communicate meaning.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact brand tokens and font names were inferred visually.
- The 29-flow inventory was complete and all top-level flows were inspected.
- Several recorded entry steps were video-only; motion was not assessed.
- No tablet or desktop screens were present.

</design-context>
