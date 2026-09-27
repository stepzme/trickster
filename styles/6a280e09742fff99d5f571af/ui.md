<design-context>
---
version: alpha
name: ASOS-design-analysis
description: "A fashion-first shopping interface built on bright white surfaces, black editorial type, restrained hot-pink sale accents, and edge-to-edge model photography. Dense two-column product grids lead into long product pages, while a floating translucent bottom bar keeps discovery, search, bag, saved items, and account continuously available."
colors:
  primary: "#111111"
  on-primary: "#FFFFFF"
  primary-hover: "#2B2B2B"
  primary-soft: "#F1F1F1"
  accent-sale: "#D41455"
  accent-buy: "#1FA866"
  ink: "#111111"
  ink-muted: "#686868"
  ink-subtle: "#9A9A9A"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F4"
  surface-2: "#EAEAEA"
  hairline: "#DDDDDD"
  semantic-info: "#DDEFF7"
  semantic-danger: "#C70039"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Futura PT, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: 0.2px }
  display-lg: { fontFamily: Futura PT, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: 0.2px }
  display-md: { fontFamily: Futura PT, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0.1px }
  headline: { fontFamily: Futura PT, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  card-title: { fontFamily: Futura PT, fontSize: 14px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Futura PT, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Futura PT, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Futura PT, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: Futura PT, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Futura PT, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0.1px }
  button: { fontFamily: Futura PT, fontSize: 13px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.3px }
  eyebrow: { fontFamily: Futura PT, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.5px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 2px, sm: 6px, md: 10px, lg: 16px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  button-purchase: { backgroundColor: "{colors.accent-buy}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 0 }
  filter-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 14px 12px }
  floating-tab-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 16px }
  notice-banner: { backgroundColor: "{colors.semantic-info}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 10px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 16px }
---

## Overview

ASOS is an editorial storefront: white chrome stays nearly invisible while model photography and product imagery carry the experience. Black is the default action color; sale pink and purchase green are reserved for price and conversion moments.

**Key Characteristics:**
- White, image-dense fashion canvas.
- Two-column product grids with compact price-first metadata.
- Bold uppercase section and action labels.
- Persistent floating five-item navigation.
- Pill purchase actions pinned near the bottom.

## Colors

### Brand & Accent
- **Black** ({colors.primary}): Core actions, headers, and selection.
- **Sale Pink** ({colors.accent-sale}): Discounts and reduced prices only.
- **Purchase Green** ({colors.accent-buy}): Add-to-bag and checkout progression.

### Surface
- **Canvas** ({colors.canvas}): Product and checkout screens.
- **Surface 1** ({colors.surface-1}): Search, filter, and secondary panels.
- **Hairline** ({colors.hairline}): List and form separation.

### Text
- **Ink** ({colors.ink}): Prices, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Product descriptions and delivery metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and secondary information.

### Semantic
- **Info** ({colors.semantic-info}): Delivery threshold and service notices.
- **Danger** ({colors.semantic-danger}): Error or destructive state.
- **Overlay** ({colors.semantic-overlay}): Sheets and modal focus.

## Typography

### Font Family

- **Futura PT** — geometric fashion voice across headings, product labels, and controls.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Campaign headline |
| `{typography.headline}` | 20px | 700 | Section or product heading |
| `{typography.card-title}` | 14px | 500 | Product price and label |
| `{typography.body}` | 14px | 400 | Details and forms |
| `{typography.caption}` | 10px | 400 | Tags and metadata |
| `{typography.button}` | 13px | 700 | Uppercase actions |

### Principles

- Keep labels concise and often uppercase.
- Make price hierarchy stronger than product copy.
- Preserve generous tracking on compact action labels.
- Let campaign lettering live inside photography when supplied.

### Note on Font Substitutes

Use **Montserrat** or **Avenir Next** when Futura PT is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px content gutters, 8px grid gaps, and 16–24px between product sections.

### Grid & Container

Discovery uses full-width campaign blocks and horizontal rails. Catalogs use a strict two-column product grid. Product details become a single scroll with a pinned dual action bar.

### Whitespace Philosophy

Keep structural chrome white and compact so large photography owns the visual rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and product pages |
| 1 | Pale gray field | Search and filters |
| 2 | Frosted white pill | Floating navigation |
| 3 | Dark scrim | Sheets and modals |

### Decorative Depth

Use image scale, sticky chrome, and translucent navigation rather than shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Product tiles and dividers |
| `{rounded.sm}` | 6px | Search and compact controls |
| `{rounded.md}` | 10px | Sheets and banners |
| `{rounded.pill}` | full | Floating navigation and primary actions |
| `{rounded.full}` | full | Icon buttons |

### Photography & Illustration Geometry

Model and product imagery is rectangular, tightly cropped, and usually edge-to-edge. Keep garments fully legible and preserve editorial framing.

## Components

### Buttons

Black pills cover general progression; green pills are reserved for add-to-bag and checkout. Secondary actions are white with a fine border.

### Pricing Tabs

Sort and Filter share a flat split row. Size, color, and quantity choices appear as compact selectors rather than decorative pills.

### Cards & Containers

Product cards are image-first with price, former price, name, and saved control beneath. Recommendation rails reuse the same anatomy at smaller scale.

### Inputs & Forms

Use white full-width rows with thin dividers. Checkout groups fields by delivery, billing, and payment while keeping totals visible.

### Status & Build Page

Use compact badges for Deal, Selling Fast, Highly Rated, and More Colours. Status never competes with the product image.

### Navigation

Search and notifications live at the top; Home, Search, Bag, Saved, and Account sit in a floating bottom pill.

### Footer

The sticky action area holds Save and Add to Bag or checkout choices; it must not cover the last content row.

## Do's and Don'ts

### Do

- Lead with product photography.
- Keep pricing and discount arithmetic scannable.
- Preserve the two-column catalog rhythm.
- Keep primary purchase actions sticky.
- Use sale pink only for commerce emphasis.

### Don't

- Don't add decorative illustration behind products.
- Don't round product imagery heavily.
- Don't hide delivery or returns information.
- Don't overload cards with badges.
- Don't use green outside conversion actions.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Increase columns while retaining image ratio |
| Compact | 390–767px | Two-column catalog |
| Small | <390px | Tighten gutters and truncate descriptions |

### Touch Targets

Keep navigation, saved, sort, filter, size, and purchase targets at least 44px.

### Collapsing Strategy

Reduce metadata before shrinking images. Keep two catalog columns on phones, then move to one only when product legibility fails.

### Image Behavior

Use cover crops in catalogs and contain detail-media when garment silhouette would otherwise be lost. Never distort photography.

## Iteration Guide

1. Establish catalog grid and floating navigation.
2. Build the product detail with sticky actions.
3. Add filters, saved items, and bag.
4. Add checkout and account states.
5. Layer campaign photography and sale treatments last.

## Known Gaps

- Tokens were inferred visually from the inspected mobile screens.
- All 53 flow names were inventoried; representative onboarding, home, catalog, filter, product, and checkout flows were image-reviewed.
- Motion, video behavior, and accessibility labels were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
