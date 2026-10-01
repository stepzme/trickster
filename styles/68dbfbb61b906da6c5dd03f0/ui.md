<design-context>
---
version: 1
platform: iOS
name: Perekrestok-design-analysis
description: "A clean grocery-retail interface with a white canvas, layered fresh greens, loyalty-first home content, food photography, compact campaign tiles, circular quantity controls, and restrained gray utility structure."
colors: {primary: "#49BF45", on-primary: "#FFFFFF", primary-focus: "#339A32", ink: "#17191B", ink-muted: "#676A6E", ink-subtle: "#9B9EA3", ink-tertiary: "#C7C9CD", canvas: "#FFFFFF", surface-1: "#F6F7F7", surface-2: "#EDF0EE", surface-3: "#E1E5E2", surface-4: "#D5DAD6", hairline: "#E5E8E5", hairline-strong: "#CCD2CD", hairline-tertiary: "#B6BDB7", inverse-canvas: "#1D512E", inverse-surface-1: "#2D7040", inverse-surface-2: "#3D8D50", inverse-ink: "#FFFFFF", brand-secure: "#1F8E46", semantic-success: "#43B94A", semantic-overlay: "#171A18"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Perekrestok uses a straightforward white grocery canvas with fresh green actions. Loyalty, offers, food photography, and a familiar cart hierarchy create a practical supermarket rhythm rather than a decorative lifestyle experience.

**Key Characteristics:** white canvas, fresh green actions, loyalty barcode, compact campaign rails, food photography, circular cart controls, clear payment sheets, and five-tab navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas.
- The reference consistently shows fresh green actions.
- The reference consistently shows loyalty barcode.
- The reference consistently shows compact campaign rails.
- The reference consistently shows food photography.
- The reference consistently shows circular cart controls.
- The reference consistently shows clear payment sheets.
- Navigation consistently uses five-tab navigation.

# Color and surfaces

### Brand & Accent

Fresh green owns selection, add-to-cart, checkout, active navigation, and loyalty. Deeper greens support branding and secondary emphasis.

### Surface

White carries most content; pale gray groups shortcuts, cards, checkout sections, and selected payment rows.

### Text

Near-black leads headings, products, and totals; gray carries labels, crossed prices, conditions, and inactive navigation.

### Semantic

Green confirms action and success, yellow marks discount, and red is limited to destructive or attention states.

# Typography

### Font Family

Use SF Pro Display for section and total emphasis and SF Pro Text for catalog, loyalty, and checkout detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28 points | 700 | Major state |
| headline | 20 points | 700 | Screen or section title |
| card-title | 15 points | 600 | Product or choice |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Price and delivery meta |

### Principles

- Lead with the current task, product, or total.
- Keep loyalty and offer facts compact.
- Align repeated price and quantity information.

### Note on Font Substitutes

Use the platform sans with clear small Cyrillic and stable numeric widths.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points screen gutters.

### Grid & Container

Home uses horizontal campaign and product rails; cart and checkout use a single vertically structured column.

### Whitespace Philosophy

Retail density is expected on Home and Catalog; checkout reduces noise and separates each commitment.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and cart |
| 1 | Pale grouped panel | Shortcut and checkout section |
| 2 | Sticky green action | Checkout commitment |
| 3 | Bottom sheet over scrim | Payment choice |

### Decorative Depth

Use food photography and softly tinted campaigns; keep functional rows flat and avoid heavy shadows.

# Navigation appearance

Use five compact bottom destinations with green active icon and gray inactive items.

# Components

### Buttons

Primary cart and checkout use solid green; quantity changes use green circles; secondary actions remain pale or text-only.

### Cards & Containers

Product rows align image, label, price, discount, quantity, and removal; home campaigns use small rounded tinted cards.

### Inputs & Forms

Search, wishes, delivery, and payment rows use grouped pale surfaces; native controls inherit green selection and platform behavior.

# Imagery and icons

Use food photography and softly tinted campaigns; keep functional rows flat and avoid heavy shadows.

Food photography uses clean square or landscape crops; campaign tiles stay compact; empty-state graphics remain centered and utilitarian.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep cart count, total, discount, delivery, payment, and order state visible near the affected action.

# iOS adaptation

### Touch Targets

Quantity controls, navigation, campaign tiles, payment rows, and checkout remain at least 44 points.

### Collapsing Strategy

Preserve product, price, quantity, total, payment, and checkout action; reduce campaigns and recommendations first.

### Image Behavior

Contain product imagery without distortion and preserve text-safe areas in campaign tiles.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't turn campaign colors into permanent navigation accents.
- Don't add card outlines and shadows to every catalog item.
- Don't hide fees or payment choices behind decorative layouts.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Substitution and refund recovery were not fully sampled.
- Long-tail empty and error states were only partially reviewed.
- Tablet and landscape layouts were not represented.

</design-context>
