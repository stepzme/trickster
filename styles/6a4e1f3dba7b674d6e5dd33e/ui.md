<design-context>
---
version: 1
platform: iOS
name: Magnum-GO-design-analysis
description: "A compact grocery marketplace on white with deep raspberry commerce actions, pale pink category tiles, strong black headings, product pack shots, outlined quantity steppers, and a simple five-item navigation bar."
colors: {primary: "#C91657", on-primary: "#FFFFFF", primary-focus: "#A80B43", ink: "#20232A", ink-muted: "#777A82", ink-subtle: "#A7A9AF", ink-tertiary: "#CCCDD1", canvas: "#FFFFFF", surface-1: "#FBF2F7", surface-2: "#F5E6EE", surface-3: "#EBD8E2", surface-4: "#DFC8D4", hairline: "#E8E8EB", hairline-strong: "#D0D0D5", hairline-tertiary: "#B8B8BF", inverse-canvas: "#20232A", inverse-surface-1: "#32353D", inverse-surface-2: "#454851", inverse-ink: "#FFFFFF", brand-secure: "#7A1746", semantic-success: "#33AA67", semantic-overlay: "#20232A"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 8}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8}
  quantity-stepper: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [8, 12]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Magnum GO is a straightforward grocery storefront where raspberry actions and pale-pink tiles organize catalog, basket, and order management.

**Key Characteristics:** white canvas; raspberry action color; two-column category and product grids; outlined steppers; typography-led empty states.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A compact grocery marketplace on white with deep raspberry commerce actions, pale pink category tiles, strong black headings, product pack shots.
- The source records this color relationship: Use raspberry for price, cart, selected navigation, and purchase actions.
- The recorded display style is 36 points while the body style is 12 points.
- Navigation keeps Catalog, Orders, Favorites, Profile, and Cart fixed.
- The reviewed screens use this hierarchy: Magnum GO is a straightforward grocery storefront where raspberry actions and pale-pink tiles organize catalog, basket, and order management.

# Color and surfaces

### Brand & Accent

Use raspberry for price, cart, selected navigation, and purchase actions.

### Surface

White is primary; pale pink distinguishes categories and recommendations.

### Text

Near-black leads; gray supports unit, old price, and profile detail.

### Semantic

Green means success, yellow caution, and raspberry commerce or selection.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for product and order detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Empty state |
| headline | 20pt | 700 | Cart and profile title |
| card-title | 15pt | 600 | Product and total |
| body | 12pt | 400 | Unit and metadata |
| caption | 9pt | 400 | Discount and navigation |

### Principles

- Keep price and pack size adjacent.
- Use strong titles and simple supporting copy.
- Align quantity controls across rows.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and tenge figures.

# Screen composition

### Spacing System

Use a 4pt base, 8pt grid gaps, and 12pt gutters.

### Grid & Container

Catalog uses two columns; cart and profile use single-column lists.

### Whitespace Philosophy

Keep browsing dense and empty/order states open.

# Navigation appearance

Keep Catalog, Orders, Favorites, Profile, and Cart fixed.

# Components

### Buttons

Primary actions are raspberry; secondary actions are white or pale pink.

Category and sort filters use pale segmented rows with raspberry selection.

### Cards & Containers

Product cards combine image, title, unit, current and old price, badges, and cart control.

### Inputs & Forms

Search and profile fields are pale gray with raspberry focus.

### Status & Build Page

Orders use large title, status, total, and time; empty states provide one recovery action.

### Navigation

Keep Catalog, Orders, Favorites, Profile, and Cart fixed.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog |
| 1 | Pale pink tile | Categories |
| 2 | Sticky raspberry action | Checkout |
| 3 | Sheet | Focused choice |

### Decorative Depth

Product imagery creates depth; UI stays flat.

# States

Orders use large title, status, total, and time; empty states provide one recovery action.

# iOS adaptation

### Touch Targets

Search, filters, favorite, stepper, checkout, and navigation remain at least 44pt.

### Collapsing Strategy

Keep two columns while titles remain readable and stack basket summaries.

### Image Behavior

Contain products and preserve category image balance.

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

- Keep quantity and total visible.
- Preserve clean pack shots.
- Show delivery threshold.
- Style native controls consistently.

### Don't

- Don't overdecorate empty states.
- Don't use raspberry for neutral metadata.
- Don't crop packaging.
- Don't add heavy shadows.

</design-context>
