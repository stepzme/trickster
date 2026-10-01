<design-context>
---
version: 1
platform: iOS
name: Flip-design-analysis
description: "A dense general marketplace on white with cyan-blue navigation, yellow cart actions, bright category tiles, compact product grids, prominent discount labels, image-first discovery, and a floating five-destination navigation bar."
colors: { primary: "#18A8E1", on-primary: "#FFFFFF", primary-soft: "#E4F7FF", accent: "#FFC814", ink: "#17181B", ink-muted: "#767A82", ink-subtle: "#B0B4BA", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#EDF8FC", hairline: "#E2E4E7", semantic-success: "#26A960", semantic-warning: "#FFC814", semantic-danger: "#E8475A", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.accent}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 8 }
  category-tile: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10 }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
---

# Overview

Flip is a high-density marketplace where cyan organizes discovery and yellow marks cart intent.

# Non-negotiable visual invariants

- The reviewed screens use this composition: Flip is a high-density marketplace where cyan organizes discovery and yellow marks cart intent.
- The source records this color relationship: Use cyan for navigation and category identity, yellow for cart and checkout, and pink-red for discounts.
- The recorded display style is 36 points while the body style is 14 points.
- Navigation appears as follows: Home, Search, Cart, Favorites, and Profile remain in the bottom bar.
- The reviewed screens use this hierarchy: Flip is a high-density marketplace where cyan organizes discovery and yellow marks cart intent.

# Color and surfaces

### Brand & Accent
Use cyan for navigation and category identity, yellow for cart and checkout, and pink-red for discounts.

### Surface
Keep product grids white, secondary controls light gray, and selection pale cyan.

### Text
Use black for price and product, gray for metadata, and pale gray for old or disabled values.

### Semantic
Use green for paid or verified, yellow for attention, and red for discounts or destructive action.

# Typography

### Font Family
Use SF Pro Display for campaigns and SF Pro Text for products, reviews, and checkout.

### Principles
Prioritize price, discount, rating, delivery, and product name within compact cards.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

# Screen composition

### Spacing System
Use a 4pt base, 8pt product gaps, 12pt module gaps, and 16pt gutters.

### Whitespace Philosophy
Use tight retail rhythm but separate campaigns, grids, and checkout clearly.

# Navigation appearance

Home, Search, Cart, Favorites, and Profile remain in the bottom bar.

# Components

### Buttons
Use yellow cart pills and checkout blocks; cyan identifies selected navigation and links.

Use compact category, sort, and filter chips with clear selection.

### Cards & Containers
Use product tiles, category blocks, campaign banners, cart rows, order summaries, and floating navigation.

### Inputs & Forms
Search supports photo input; checkout groups address, payment, promo, and recipient.

### Status & Build Page
Show discount, verified, delivery date, cart count, paid, tracking, and canceled state explicitly.

### Navigation
Home, Search, Cart, Favorites, and Profile remain in the bottom bar.

# Imagery and icons

Keep cards flat and use the floating tab bar and modal sheets for depth.

### Decorative Depth
Product photography and campaign tile lettering provide visual interest.

# States

Show discount, verified, delivery date, cart count, paid, tracking, and canceled state explicitly.

# iOS adaptation

### Touch Targets
Keep search, tiles, favorite, cart, filters, and tabs at least 44pt.

### Collapsing Strategy
Preserve search, product, cart, total, and checkout; move campaigns below active shopping.

### Image Behavior
Contain product photography and preserve gallery aspect ratios.

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
- Keep price and discount scannable.
- Preserve photo search and favorites.
- Show delivery timing before purchase.

### Don't
- Don't let campaign colors redefine core actions.
- Don't hide seller or verification context.
- Don't crowd checkout with discovery modules.

</design-context>
