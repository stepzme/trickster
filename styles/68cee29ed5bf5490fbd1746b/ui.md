<design-context>
---
version: 1
platform: iOS
name: Detsky-Mir-design-analysis
description: "A playful family marketplace on a pale icy-blue canvas with bright blue commerce actions, bold black headings, white rounded product cards, red discount signals, colorful category tiles, dense catalog grids, and a friendly blue bear mascot used across loyalty and promotional guidance."
colors:
  primary: "#078CE5"
  on-primary: "#FFFFFF"
  primary-soft: "#E5F4FF"
  accent: "#6C35DB"
  ink: "#111318"
  ink-muted: "#737984"
  ink-subtle: "#AEB4BE"
  canvas: "#EFF6FF"
  surface-1: "#FFFFFF"
  surface-2: "#E4F0FA"
  hairline: "#DCE5EE"
  semantic-success: "#22A866"
  semantic-warning: "#FFB21A"
  semantic-danger: "#F04438"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 800, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 750, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 750, lineHeight: 1.20, letterSpacing: -0.1 }
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [10, 8]}
  promo-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Detsky Mir combines a dense family catalog with cheerful loyalty and promotion. Blue anchors navigation and purchase, while a friendly bear and toy-like graphics make benefits approachable.

**Key Characteristics:**
- Pale blue retail canvas and white rounded modules.
- Bright blue purchase actions and selected navigation.
- Red discount prices with crossed-out history.
- Dense two-column product cards and horizontal offers.
- Blue bear mascot across loyalty and guidance.

# Non-negotiable visual invariants

- Sampled screens consistently use pale blue retail canvas and white rounded modules.
- Navigation consistently uses bright blue purchase actions and selected navigation.
- The reference consistently shows red discount prices with crossed-out history.
- The reference consistently shows dense two-column product cards and horizontal offers.
- Imagery consistently uses blue bear mascot across loyalty and guidance.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Catalog, cart actions, active navigation, and links.
- **Primary Soft** ({colors.primary-soft}): Selected or informational modules.
- **Purple Accent** ({colors.accent}): Zoo and special campaign entry points.

### Surface
- **Canvas** ({colors.canvas}): Home and catalog background.
- **Surface 1** ({colors.surface-1}): Cards, forms, and checkout sections.
- **Surface 2** ({colors.surface-2}): Secondary bands and selection.
- **Hairline** ({colors.hairline}): Product and form boundaries.

### Text
- **Ink** ({colors.ink}): Product names, headings, and current prices.
- **Ink Muted** ({colors.ink-muted}): Specifications and fulfillment metadata.
- **Ink Subtle** ({colors.ink-subtle}): Old price and disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Availability and completed status.
- **Warning** ({colors.semantic-warning}): Rating and limited attention.
- **Danger** ({colors.semantic-danger}): Discounts, failures, and destructive action.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family
- **SF Pro Display** — store headings and benefit statements.
- **SF Pro Text** — product cards, specifications, and checkout.
- **SF Mono** — order numbers and payment references.

### Hierarchy
Use 32–38 points heavy for campaign statements, 22 points for sections, 16 points semibold for cards, 14 points body, and 10–12 points dense product metadata.

### Principles
- Keep current price strongest in product cards.
- Limit labels to readable short lines.
- Use bold headings for family-friendly clarity.
- Keep checkout copy calmer than campaigns.

### Note on Font Substitutes
Use the platform system sans or **Inter** with a heavy display weight and tabular prices.

# Screen composition

### Spacing System
Use a 4 points base, 12 points module gaps, 16 points gutters, 10 points product-card padding, and 16 points checkout section padding.

### Grid & Container
Home stacks search, utility tiles, promotions, product rails, and the fixed four-tab bar. Catalog and recommendations use dense two-column grids.

### Whitespace Philosophy
Keep retail density high but separate discovery, product comparison, and checkout into clear white zones.

Surface hierarchy observed in the source:

Use white cards and pale-blue bands with light boundaries. Reserve stronger elevation for sticky cart actions and payment confirmation.

### Decorative Depth
Mascot art, toy icons, product photography, and bright campaign fields supply depth while the commerce shell stays flat.

# Navigation appearance

Home, Catalog, Profile, and Cart remain in the tab bar; search and support are surfaced near the top of Home.

# Components

### Buttons

Use blue filled purchase buttons, blue text links, and outlined filters. Keep sticky Add to cart and Pay controls full-width.

### Cards & Containers

Use product cards, campaign banners, utility tiles, bonus cards, recommendation rails, cart items, and checkout sections.

### Inputs & Forms

Search stays globally prominent with barcode scan. Checkout groups fulfillment, payment, recipient, and certificate fields.

# Imagery and icons

Mascot art, toy icons, product photography, and bright campaign fields supply depth while the commerce shell stays flat.

Use isolated product photography on white cards and rounded mascot scenes with generous light-blue negative space.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show discount, rating, exclusive price, availability, cart count, payment confirmation, canceled order, and bonus state explicitly.

# iOS adaptation

### Touch Targets

Keep search, scan, tiles, products, favorite, quantity, fulfillment, payment, and navigation at least 44 points.

### Collapsing Strategy

Preserve search, catalog, cart, price, fulfillment, and pay. Move campaigns and recommendation rails below active shopping tasks.

### Image Behavior

Contain product photography without crop; crop mascot banners only within their designed rounded frames and preserve embedded copy.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't mix mascot art into dense product rows.
- Don't hide old price or unit context.
- Don't let campaign color overtake checkout.
- Don't rely on icons alone for family-critical actions.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
