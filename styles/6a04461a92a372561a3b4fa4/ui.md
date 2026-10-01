<design-context>
---
version: 1
platform: iOS
name: SOKOLOV-design-analysis
description: "A bright jewelry marketplace built from white surfaces, saturated electric-blue actions, compact product grids, rounded promotional banners, and crisp editorial photography. Loyalty modules add controlled blue-to-red gradients while the shopping chrome stays neutral and information-dense."

colors:
  primary: "#1688F4"
  on-primary: "#FFFFFF"
  primary-pressed: "#0875DA"
  accent-purple: "#9557E8"
  accent-red: "#F0445B"
  ink: "#17181B"
  ink-muted: "#74777D"
  ink-subtle: "#A8ABB0"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F4"
  hairline: "#E4E5E8"
  semantic-success: "#2CAF72"
  semantic-warning: "#F2B11E"
  semantic-danger: "#E94D5C"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 3, sm: 7, md: 11, lg: 16, xl: 20, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8 }
  promo-banner: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 0 }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 11 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

SOKOLOV uses bright marketplace density without losing a premium jewelry tone. White product space, blue interaction color, high-key cutouts, and editorial campaigns carry the system; loyalty gradients stay confined to membership modules.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A bright jewelry marketplace built from white surfaces, saturated electric-blue actions, compact product grids, rounded promotional banners, and crisp editorial photography.
- The dominant canvas token is #F5F5F7 and the primary accent token is #1688F4.
- The recorded display style is 38 points while the body style is 14 points.
- Navigation appears as follows: A six-item bottom bar supports shopping destinations.
- The reviewed screens use this hierarchy: Loyalty modules add controlled blue-to-red gradients while the shopping chrome stays neutral and information-dense.

# Color and surfaces

### Brand & Accent

Electric blue marks active navigation, filters, links, and checkout. Purple and red appear only in campaigns and loyalty gradients.

### Surface

White is the main shopping surface. Light gray separates search, chips, and grouped account modules.

### Text

Near-black carries names and prices; gray carries specifications, old prices, and review metadata.

### Semantic

Yellow is reserved for ratings, red for discounts or destructive actions, and green for success. Do not substitute campaign gradients for status.

# Typography

### Font Family

Use a neutral system sans. Product copy is compact; campaign typography may be bolder inside imagery.

### Principles

Keep product names readable, align old and current prices, and use uppercase sparingly for campaign labels.

### Note on Font Substitutes

SF Pro or Inter work well. Preserve compact line height in product grids and clear Cyrillic rendering.

# Screen composition

### Grid & Container

Home stacks full-width banners, story circles, shortcut tiles, and collection mosaics. Catalog uses a two-column grid; account screens use grouped cards.

### Whitespace Philosophy

Keep jewelry imagery airy within each product cell while allowing home discovery to remain visually rich.

# Navigation appearance

A six-item bottom bar supports shopping destinations. The active icon is blue; drill-down screens use back, share, and favorite actions in the top bar.

# Components

### Buttons

Primary purchase actions are blue with white text. Secondary controls are white or light gray; native controls must inherit this blue accent and package geometry.

Filters use compact blue selected chips and neutral inactive chips. Counts may sit in small dark badges.

### Cards & Containers

Product cards foreground image, price, name, rating, favorite, and cart actions. Account modules use larger white cards with colorful symbolic art.

### Inputs & Forms

Search fields are light gray and rounded. Checkout fields remain white, compact, and grouped by delivery, packaging, promo, and payment.

### Status & Build Page

Order status, bonus expiration, discounts, and review ratings stay adjacent to the affected item and use concise labels.

### Navigation

A six-item bottom bar supports shopping destinations. The active icon is blue; drill-down screens use back, share, and favorite actions in the top bar.

# Imagery and icons

Depth comes from soft card shadows, light-gray grouping, and sheets lifted over a dimmed product screen.

### Decorative Depth

Use photographic color fields, soft bokeh, and controlled loyalty gradients. Avoid ornamental shadows around individual products.

# States

Order status, bonus expiration, discounts, and review ratings stay adjacent to the affected item and use concise labels.

# iOS adaptation

Keep checkout and account flows single-column. Wider catalog layouts may add columns while keeping the same card anatomy.

### Touch Targets

Favorites, cart controls, filter chips, story circles, and bottom navigation require at least 44pt targets.

### Collapsing Strategy

Allow stories, quick filters, and collections to scroll horizontally. Keep checkout totals and the primary action sticky.

### Image Behavior

Use `contain` for jewelry cutouts and `cover` for editorial banners. Do not distort product aspect ratios.

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

- Let white space isolate jewelry.
- Use blue consistently for interaction.
- Keep price, rating, and availability scannable.
- Separate campaigns from transactional UI.

### Don't

- Do not tint every surface with the loyalty gradient.
- Do not crop product cutouts tightly.
- Do not hide specifications behind decorative content.
- Do not expose default platform-blue controls that differ from the brand blue.

# Known gaps

The reviewed scenarios cover Home, Catalog, Search and filters, product details, reviews, Cart, checkout structure, Favorites, stores, gifting, and Profile. iPad layouts and every error state were not visible.

</design-context>
