<design-context>
---
version: 1
platform: iOS
name: ASOS-design-analysis
description: "A fashion-first shopping interface built on bright white surfaces, black editorial type, restrained hot-pink sale accents, and edge-to-edge model photography. Dense two-column product grids lead into long product pages, while a floating translucent bottom bar keeps discovery, search, bag, saved items, and account continuously available."
colors:
  primary: "#111111"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: Futura PT, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: 0.2 }
  display-lg: { fontFamily: Futura PT, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: 0.2 }
  display-md: { fontFamily: Futura PT, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0.1 }
  headline: { fontFamily: Futura PT, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  card-title: { fontFamily: Futura PT, fontSize: 14, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Futura PT, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Futura PT, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Futura PT, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: Futura PT, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Futura PT, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0.1 }
  button: { fontFamily: Futura PT, fontSize: 13, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.3 }
  eyebrow: { fontFamily: Futura PT, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.5 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 2, sm: 6, md: 10, lg: 16, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-purchase: { backgroundColor: "{colors.accent-buy}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 0 }
  filter-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [14, 12]}
  floating-tab-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 16]}
  notice-banner: { backgroundColor: "{colors.semantic-info}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: [10, 16]}
---

# Overview

ASOS is an editorial storefront: white chrome stays nearly invisible while model photography and product imagery carry the experience. Black is the default action color; sale pink and purchase green are reserved for price and conversion moments.

**Key Characteristics:**
- White, image-dense fashion canvas.
- Two-column product grids with compact price-first metadata.
- Bold uppercase section and action labels.
- Persistent floating five-item navigation.
- Pill purchase actions pinned near the bottom.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White, image-dense fashion canvas.
- The reviewed screens show this treatment: Two-column product grids with compact price-first metadata.
- The reviewed screens show this treatment: Bold uppercase section and action labels.
- The reviewed screens show this treatment: Persistent floating five-item navigation.
- The reviewed screens show this treatment: Pill purchase actions pinned near the bottom.

# Color and surfaces

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

# Typography

### Font Family

- **Futura PT** — geometric fashion voice across headings, product labels, and controls.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36pt | 700 | Campaign headline |
| `{typography.headline}` | 20pt | 700 | Section or product heading |
| `{typography.card-title}` | 14pt | 500 | Product price and label |
| `{typography.body}` | 14pt | 400 | Details and forms |
| `{typography.caption}` | 10pt | 400 | Tags and metadata |
| `{typography.button}` | 13pt | 700 | Uppercase actions |

### Principles

- Keep labels concise and often uppercase.
- Make price hierarchy stronger than product copy.
- Preserve generous tracking on compact action labels.
- Let campaign lettering live inside photography when supplied.

### Note on Font Substitutes

Use **Montserrat** or **Avenir Next** when Futura PT is unavailable.

# Screen composition

### Grid & Container

Discovery uses full-width campaign blocks and horizontal rails. Catalogs use a strict two-column product grid. Product details become a single scroll with a pinned dual action bar.

### Whitespace Philosophy

Keep structural chrome white and compact so large photography owns the visual rhythm.

# Navigation appearance

Search and notifications live at the top; Home, Search, Bag, Saved, and Account sit in a floating bottom pill.

# Components

### Buttons

Black pills cover general progression; green pills are reserved for add-to-bag and checkout. Secondary actions are white with a fine border.

Sort and Filter share a flat split row. Size, color, and quantity choices appear as compact selectors rather than decorative pills.

### Cards & Containers

Product cards are image-first with price, former price, name, and saved control beneath. Recommendation rails reuse the same anatomy at smaller scale.

### Inputs & Forms

Use white full-width rows with thin dividers. Checkout groups fields by delivery, billing, and payment while keeping totals visible.

### Status & Build Page

Use compact badges for Deal, Selling Fast, Highly Rated, and More Colours. Status never competes with the product image.

### Navigation

Search and notifications live at the top; Home, Search, Bag, Saved, and Account sit in a floating bottom pill.

The sticky action area holds Save and Add to Bag or checkout choices; it must not cover the last content row.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and product pages |
| 1 | Pale gray field | Search and filters |
| 2 | Frosted white pill | Floating navigation |
| 3 | Dark scrim | Sheets and modals |

### Decorative Depth

Use image scale, sticky chrome, and translucent navigation rather than shadows.

# States

Use compact badges for Deal, Selling Fast, Highly Rated, and More Colours. Status never competes with the product image.

# iOS adaptation

| Wide | 768pt+ | Increase columns while retaining image ratio |
| Small | <390pt | Tighten gutters and truncate descriptions |

### Touch Targets

Keep navigation, saved, sort, filter, size, and purchase targets at least 44pt.

### Collapsing Strategy

Reduce metadata before shrinking images. Keep two catalog columns on phones, then move to one only when product legibility fails.

### Image Behavior

Use cover crops in catalogs and contain detail-media when garment silhouette would otherwise be lost. Never distort photography.

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

</design-context>
