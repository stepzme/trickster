<design-context>
---
version: 1
platform: iOS
name: Gold-Apple-design-analysis
description: "An editorial beauty-commerce interface with white and cool-gray space, near-black typography, acid chartreuse highlights, fashion-forward campaign photography, and austere black purchase actions. Fine dividers and low-chrome product pages make merchandising feel premium without becoming precious."
colors: {primary: "#111111", on-primary: "#FFFFFF", primary-focus: "#000000", ink: "#111111", ink-muted: "#686868", ink-subtle: "#979797", ink-tertiary: "#C6C6C6", canvas: "#FFFFFF", surface-1: "#F6F6F4", surface-2: "#EFEFEC", surface-3: "#E4E4E0", surface-4: "#D7D7D2", hairline: "#E7E7E3", hairline-strong: "#CCCCCC", hairline-tertiary: "#B5B5B2", inverse-canvas: "#111111", inverse-surface-1: "#292929", inverse-surface-2: "#414141", inverse-ink: "#FFFFFF", brand-secure: "#CCFF00", semantic-success: "#36A66A", semantic-overlay: "#111111"}
typography:
  display-xl: {fontFamily: Helvetica Neue, fontSize: 40, fontWeight: 500, lineHeight: 1.04, letterSpacing: -1.1}
  display-lg: {fontFamily: Helvetica Neue, fontSize: 32, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.7}
  display-md: {fontFamily: Helvetica Neue, fontSize: 26, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.4}
  headline: {fontFamily: Helvetica Neue, fontSize: 21, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: Helvetica Neue, fontSize: 15, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: Helvetica Neue, fontSize: 14, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: Helvetica Neue, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: Helvetica Neue, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: Helvetica Neue, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: Helvetica Neue, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: Helvetica Neue, fontSize: 13, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: Helvetica Neue, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 2, sm: 6, md: 10, lg: 14, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 44}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [15, 18]}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [13, 16]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8}
  editorial-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "#CCFF00", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Gold Apple treats beauty commerce like an editorial catalog. White space and fashion photography establish tone, black controls make purchase unambiguous, and acid chartreuse punctuates only high-value promotional moments.

**Key Characteristics:** white editorial canvas, black typography and CTAs, acid chartreuse labels, fashion and beauty photography, fine dividers, restrained radii, image-dominant product pages, and low-chrome navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use white editorial canvas.
- The reference consistently shows black typography and CTAs.
- The reference consistently shows acid chartreuse labels.
- The reference consistently shows fashion and beauty photography.
- The reference consistently shows fine dividers.
- The reference consistently shows restrained radii.
- The reference consistently shows image-dominant product pages.
- Navigation consistently uses low-chrome navigation.

# Color and surfaces

### Brand & Accent

Black owns action, selection, and core brand presence. Acid chartreuse is a sharp promotional highlight, never the default surface or purchase button.

### Surface

White dominates. Cool light gray groups search, product imagery, and editorial content; borders stay fine and neutral.

### Text

Near-black leads brand, product, price, and headings. Medium gray carries description, size, old price, and service detail.

### Semantic

Chartreuse signals promotion or special editorial emphasis, green confirms success, and red is reserved for errors or genuine urgency.

# Typography

### Font Family

Use Helvetica Neue or a similarly neutral neo-grotesk for both editorial titles and commerce detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32 points | 500 | Campaign title |
| headline | 21 points | 600 | Section or product |
| card-title | 15 points | 500 | Brand and item |
| body | 13 points | 400 | Detail and description |
| caption | 10 points | 400 | Size, promo, service meta |

### Principles

- Let scale and whitespace create premium hierarchy.
- Keep product names and editorial labels concise.
- Use medium weights rather than heavy display typography.

### Note on Font Substitutes

Use Helvetica Neue, Arial, or the platform sans with neutral proportions and clean Cyrillic.

# Screen composition

### Spacing System

Use a 4 points base, 12–16 points card gaps, 16–24 points content gutters, and 32–44 points between editorial sections.

### Grid & Container

Home alternates full-width campaigns, circular shortcuts, and product rails. Product detail uses one dominant image followed by price, action, and fine-rule information rows.

### Whitespace Philosophy

Whitespace is part of the luxury signal. Avoid filling every gap with badges, frames, or recommendations.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Primary storefront |
| 1 | Cool-gray field | Search and image area |
| 2 | Photography | Editorial emphasis |
| 3 | Black sticky action | Add or checkout |

### Decorative Depth

Use campaign and product photography as the depth system. Prefer fine rules and tonal fields to visible shadows.

# Navigation appearance

Use a light five-item bottom bar with thin line icons and a black active state. Search, favorites, and bag remain visually quiet until needed.

# Components

### Buttons

Primary purchase actions are black rectangular controls with white labels. Secondary actions are white or pale with hairline boundaries.

### Cards & Containers

Product cards minimize chrome around image, brand, name, price, and favorite. Editorial cards use strong photography with sparse overlaid or adjacent copy.

### Inputs & Forms

Search is broad and pale. Native controls may remain native in code but must inherit black focus, restrained radii, neutral type, and exact spacing.

# Imagery and icons

Use campaign and product photography as the depth system. Prefer fine rules and tonal fields to visible shadows.

Use clean product cutouts in large square or portrait fields and full-bleed editorial crops. Circular crops are reserved for category navigation.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep availability, shade or size, price, discount, loyalty benefit, delivery, cart total, and order state near the decision.

# iOS adaptation

### Touch Targets

Category circles, filters, favorites, shade and size choices, navigation, add, and checkout remain at least 44 points.

### Collapsing Strategy

Preserve product image, brand, price, variant, availability, and purchase action; reduce editorial modules and recommendations first.

### Image Behavior

Keep product cutouts fully visible and preserve campaign focal points; do not stretch or over-crop packaging.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't turn the interface into a neon-green theme.
- Don't add soft bubbly styling to every control.
- Don't surround every product with borders or shadows.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
