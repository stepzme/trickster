<design-context>
---
version: 1
platform: iOS
name: Amazon-shopping-design-analysis
description: "A dense global marketplace built around a dark green commerce header, white content modules, yellow purchase actions, and highly variable campaign imagery. Search, delivery context, price, availability, and recommendations dominate every screen."
colors:
  primary: "#FFD814"
  on-primary: "#111111"
  buy-now: "#FFA41C"
  brand-green: "#007E59"
  brand-teal: "#B7F1E8"
  link: "#2162A1"
  ink: "#111111"
  ink-muted: "#565959"
  ink-subtle: "#8A8D8D"
  canvas: "#FFFFFF"
  surface-1: "#F3F3F3"
  surface-2: "#E7E7E7"
  hairline: "#D5D9D9"
  semantic-success: "#007600"
  semantic-danger: "#B12704"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Amazon Ember, fontSize: 40, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.8 }
  display-lg: { fontFamily: Amazon Ember, fontSize: 32, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.5 }
  display-md: { fontFamily: Amazon Ember, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: Amazon Ember, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: Amazon Ember, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Amazon Ember, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Amazon Ember, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Amazon Ember, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: Amazon Ember, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Amazon Ember, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Amazon Ember, fontSize: 15, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Amazon Ember, fontSize: 11, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  button-buy-now: { backgroundColor: "{colors.buy-now}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8 }
  category-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  basket-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12 }
  navigation-bar: { backgroundColor: "{colors.brand-green}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [10, 14]}
---

# Overview

Amazon Shopping uses stable green search chrome and yellow purchase actions to hold together highly varied seasonal, personalized, and category content. Product facts remain literal and dense.

# Non-negotiable visual invariants

- Navigation or control chrome uses Dark green header with persistent search.
- Keep search and delivery context visible.
- Show price, stock, delivery, seller, and returns.
- Preserve inline basket editing.
- Label assistant output and uncertainty.
- Use literal product imagery.
- Home mixes horizontal campaigns, two-column category tiles, and recommendation rails.
- Category menu uses three columns.

# Color and surfaces

- **Amazon Yellow** ({colors.primary}): Add to Basket and checkout.
- **Orange** ({colors.buy-now}): Buy Now.
- **Green** ({colors.brand-green}): Header, navigation context, and trust.
- **Teal** ({colors.brand-teal}): Light header gradients and context bands.

- **Canvas** ({colors.canvas}): Product and account base.
- **Surface 1** ({colors.surface-1}): Recommendation modules and grouped areas.
- **Surface 2** ({colors.surface-2}): Disabled and secondary surfaces.
- **Hairline** ({colors.hairline}): Cards, inputs, and separators.

- **Ink** ({colors.ink}): Price, product facts, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Supporting purchase information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled content.
- **Link** ({colors.link}): Details, support, and disclosure.

- **Success** ({colors.semantic-success}): Stock and delivery confirmation.
- **Danger** ({colors.semantic-danger}): Scarcity and price emphasis.
- **Overlay** ({colors.semantic-overlay}): Dialog and media scrim.

# Typography

- **Amazon Ember** — all commerce, account, assistant, and navigation UI.
- **System Mono** — order and tracking identifiers only.

- `{typography.display-xl}` — 40 points — 700 — Campaign statement
- `{typography.display-md}` — 26 points — 700 — Price or subtotal
- `{typography.headline}` — 21 points — 700 — Module heading
- `{typography.card-title}` — 15 points — 600 — Product or category title
- `{typography.body}` — 14 points — 400 — Default details
- `{typography.caption}` — 10 points — 400 — Navigation and metadata
- `{typography.button}` — 15 points — 500 — Purchase actions

- Prioritize current price, stock, and delivery date.
- Keep long product titles readable before truncation.
- Use bold for module titles and key purchase facts.
- Keep assistant answers at comfortable reading width.

Use **Arial**, **Inter**, or **Roboto** when Amazon Ember is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 8–12 points, product/module gaps 8 points, and basket rows use 12 points padding.

Home mixes horizontal campaigns, two-column category tiles, and recommendation rails. Category menu uses three columns. Detail, basket, account, and Rufus are single-column.

Use white separation between modules and pale gray bands between major commerce groups. Keep product detail spacious enough for long facts.

Use product photography, collage, and campaign color fields. Keep system chrome mostly flat and literal.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Account, Basket, and Menu form the bottom bar. Rufus has a separate assistant action. Search and location persist above commerce content.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use yellow for basket/checkout and orange for Buy Now. Outline buttons cover account, list, and secondary basket actions.

Product cards show image, title, rating, price, delivery, and action. Basket rows add quantity, delete, save, share, and similar-item controls.

Search supports text, voice, and camera. Delivery location acts as context input. Registration and country lists use large full-width rows.

Stock, scarcity, free delivery, Prime, seller, and return status are explicit text. Rufus identifies itself as beta and preserves feedback controls.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Product images use contain and preserve packaging. Lifestyle campaigns may use cover. Category tiles combine a short label with isolated product groups.

Contain product evidence and category objects. Cover lifestyle campaigns while preserving headline and featured products.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Stock, scarcity, free delivery, Prime, seller, and return status are explicit text. Rufus identifies itself as beta and preserves feedback controls.

- **Success** ({colors.semantic-success}): Stock and delivery confirmation.
- **Danger** ({colors.semantic-danger}): Scarcity and price emphasis.
- **Overlay** ({colors.semantic-overlay}): Dialog and media scrim.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Maintain 44 points for search, location, variant, quantity, account shortcuts, and purchase actions.
- Reduce category columns before truncating labels. Keep detail and basket single-column; horizontal campaigns may scroll.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use campaign color for transactional forms.
- Do not hide regional marketplace context.
- Do not replace product facts with Rufus copy.
- Do not crop packaging or variant identity.
- Do not merge Add to Basket and Buy Now.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
