<design-context>
---
version: alpha
name: Amazon-shopping-design-analysis
description: "A dense global marketplace built around a dark green commerce header, white content modules, yellow purchase actions, and highly variable campaign imagery. Search, delivery context, price, availability, and recommendations dominate every screen."
colors:
  primary: "#FFD814"
  on-primary: "#111111"
  primary-hover: "#F2C900"
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
  display-xl: { fontFamily: Amazon Ember, fontSize: 40px, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.8px }
  display-lg: { fontFamily: Amazon Ember, fontSize: 32px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.5px }
  display-md: { fontFamily: Amazon Ember, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: Amazon Ember, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: Amazon Ember, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Amazon Ember, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Amazon Ember, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Amazon Ember, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: Amazon Ember, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Amazon Ember, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Amazon Ember, fontSize: 15px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Amazon Ember, fontSize: 11px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 18px }
  button-buy-now: { backgroundColor: "{colors.buy-now}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8px }
  category-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  basket-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px }
  top-nav: { backgroundColor: "{colors.brand-green}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 10px 14px }
---

## Overview

Amazon Shopping uses stable green search chrome and yellow purchase actions to hold together highly varied seasonal, personalized, and category content. Product facts remain literal and dense.

**Key Characteristics:**
- Dark green header with persistent search.
- Delivery location directly below search.
- Yellow Add to Basket and orange Buy Now.
- Dense personalized home modules.
- Product-led category grid.
- Four-item navigation plus Rufus entry.

## Colors

### Brand & Accent
- **Amazon Yellow** ({colors.primary}): Add to Basket and checkout.
- **Orange** ({colors.buy-now}): Buy Now.
- **Green** ({colors.brand-green}): Header, navigation context, and trust.
- **Teal** ({colors.brand-teal}): Light header gradients and context bands.

### Surface
- **Canvas** ({colors.canvas}): Product and account base.
- **Surface 1** ({colors.surface-1}): Recommendation modules and grouped areas.
- **Surface 2** ({colors.surface-2}): Disabled and secondary surfaces.
- **Hairline** ({colors.hairline}): Cards, inputs, and separators.

### Text
- **Ink** ({colors.ink}): Price, product facts, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Supporting purchase information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled content.
- **Link** ({colors.link}): Details, support, and disclosure.

### Semantic
- **Success** ({colors.semantic-success}): Stock and delivery confirmation.
- **Danger** ({colors.semantic-danger}): Scarcity and price emphasis.
- **Overlay** ({colors.semantic-overlay}): Dialog and media scrim.

## Typography

### Font Family

- **Amazon Ember** — all commerce, account, assistant, and navigation UI.
- **System Mono** — order and tracking identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 700 | Campaign statement |
| `{typography.display-md}` | 26px | 700 | Price or subtotal |
| `{typography.headline}` | 21px | 700 | Module heading |
| `{typography.card-title}` | 15px | 600 | Product or category title |
| `{typography.body}` | 14px | 400 | Default details |
| `{typography.caption}` | 10px | 400 | Navigation and metadata |
| `{typography.button}` | 15px | 500 | Purchase actions |

### Principles

- Prioritize current price, stock, and delivery date.
- Keep long product titles readable before truncation.
- Use bold for module titles and key purchase facts.
- Keep assistant answers at comfortable reading width.

### Note on Font Substitutes

Use **Arial**, **Inter**, or **Roboto** when Amazon Ember is unavailable.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 8–12px, product/module gaps 8px, and basket rows use 12px padding.

### Grid & Container

Home mixes horizontal campaigns, two-column category tiles, and recommendation rails. Category menu uses three columns. Detail, basket, account, and Rufus are single-column.

### Whitespace Philosophy

Use white separation between modules and pale gray bands between major commerce groups. Keep product detail spacious enough for long facts.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Product and account |
| 1 | Gray grouped band | Recommendations |
| 2 | Bordered white card | Category and basket item |
| 3 | Saturated campaign panel | Seasonal discovery |

### Decorative Depth

Use product photography, collage, and campaign color fields. Keep system chrome mostly flat and literal.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Cards and selectors |
| `{rounded.sm}` | 8px | Search and category tiles |
| `{rounded.md}` | 12px | Assistant prompts and groups |
| `{rounded.lg}` | 16px | Campaign cards |
| `{rounded.pill}` | full | Purchase actions and quantity |

### Photography & Illustration Geometry

Product images use contain and preserve packaging. Lifestyle campaigns may use cover. Category tiles combine a short label with isolated product groups.

## Components

### Buttons

Use yellow for basket/checkout and orange for Buy Now. Outline buttons cover account, list, and secondary basket actions.

### Pricing Tabs

Variants and quantities use bordered selectors. Category and account shortcuts use outlined pills; selected state relies on border and context.

### Cards & Containers

Product cards show image, title, rating, price, delivery, and action. Basket rows add quantity, delete, save, share, and similar-item controls.

### Inputs & Forms

Search supports text, voice, and camera. Delivery location acts as context input. Registration and country lists use large full-width rows.

### Status & Build Page

Stock, scarcity, free delivery, Prime, seller, and return status are explicit text. Rufus identifies itself as beta and preserves feedback controls.

### Navigation

Home, Account, Basket, and Menu form the bottom bar. Rufus has a separate assistant action. Search and location persist above commerce content.

### Footer

The bottom bar stays visible. Detail and basket add full-width purchase actions above it.

## Do's and Don'ts

### Do

- Keep search and delivery context visible.
- Show price, stock, delivery, seller, and returns.
- Preserve inline basket editing.
- Label assistant output and uncertainty.
- Use literal product imagery.

### Don't

- Don't use campaign color for transactional forms.
- Don't hide regional marketplace context.
- Don't replace product facts with Rufus copy.
- Don't crop packaging or variant identity.
- Don't merge Add to Basket and Buy Now.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand module grid and center detail column |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Reduce category grid columns |

### Touch Targets

Maintain 44px for search, location, variant, quantity, account shortcuts, and purchase actions.

### Collapsing Strategy

Reduce category columns before truncating labels. Keep detail and basket single-column; horizontal campaigns may scroll.

### Image Behavior

Contain product evidence and category objects. Cover lifestyle campaigns while preserving headline and featured products.

## Iteration Guide

1. Establish header, search, location, and navigation.
2. Build one complete product card and detail.
3. Add basket and account modules.
4. Add category menu and Rufus.
5. Layer seasonal campaigns last.

## Known Gaps

- Exact tokens were inferred visually; Amazon Ember is proprietary.
- The 37-flow inventory was complete and all top-level flows were inspected.
- Campaign motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
