<design-context>
---
version: 1
platform: iOS
name: Lamoda-design-analysis
description: "A restrained monochrome fashion marketplace built on white, black selection and purchase controls, fine gray separators, and large studio photography. Editorial campaigns and outfit imagery carry personality while catalog, sizing, cart, and checkout remain precise, flat, and utilitarian."
colors:
  primary: "#050505"
  on-primary: "#FFFFFF"
  primary-focus: "#000000"
  ink: "#151515"
  ink-muted: "#747474"
  ink-subtle: "#A4A4A4"
  ink-tertiary: "#C8C8C8"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F6"
  surface-2: "#EEEEEE"
  surface-3: "#E3E3E3"
  surface-4: "#D7D7D7"
  hairline: "#E5E5E5"
  hairline-strong: "#CDCDCD"
  hairline-tertiary: "#B5B5B5"
  inverse-canvas: "#050505"
  inverse-surface-1: "#242424"
  inverse-surface-2: "#3A3A3A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#E45B3D"
  semantic-success: "#36A84C"
  semantic-overlay: "#050505"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 600, lineHeight: 1.04, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  xxl: 22
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  editorial-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  size-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [10, 12]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Lamoda is a minimal fashion marketplace where monochrome controls frame large studio and editorial photography.

**Key Characteristics:**
- White canvas with black selected and purchase states.
- Two-column product photography grid.
- Editorial campaigns and outfit modules.
- Compact sizing, rating, and price information.
- One-decision-per-step checkout with green progress.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas with black selected and purchase states.
- The reference consistently shows two-column product photography grid.
- The reference consistently shows editorial campaigns and outfit modules.
- The reference consistently shows compact sizing, rating, and price information.
- The reference consistently shows one-decision-per-step checkout with green progress.

# Color and surfaces

### Brand & Accent

Black is the identity and interaction anchor. Warm orange-red appears sparingly for sale taxonomy and markdowns.

### Surface

White dominates. Pale gray supports search, chips, empty imagery placeholders, and cart or checkout grouping.

### Text

Near-black carries product, brand, price, and headings. Gray carries secondary size, delivery, and former-price information.

### Semantic

Green marks checkout progress and favorable delivery facts. Red-orange is commercial emphasis, not a general action color.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text with a restrained, neutral fashion-editorial voice.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 600 | Editorial or onboarding claim |
| headline | 21 points | 600 | Catalog and checkout title |
| card-title | 15 points | 500 | Product, brand, and price |
| body | 13 points | 400 | Sizing and delivery detail |
| caption | 10 points | 400 | Rating, color, and navigation |

### Principles

- Keep brand and product name separate.
- Use price weight rather than bright color for emphasis.
- Let editorial imagery provide expression.

### Note on Font Substitutes

Inter or Helvetica Neue works well; preserve neutral shapes and compact numerals.

# Screen composition

### Spacing System

Use a 4 points base, 2–8 points product-grid gaps, and 12 points screen padding outside imagery.

### Grid & Container

Product discovery uses two equal columns. Category is a vertical text list; product detail and checkout use one full-width column.

### Whitespace Philosophy

Use wide white fields around photography and checkout choices while keeping the product grid compact.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale gray field | Search and neutral chips |
| 2 | Sticky white bar | Cart and purchase action |
| 3 | White sheet over scrim | Delivery conditions and selectors |

### Decorative Depth

Depth comes from fashion photography and occasional video; UI avoids noticeable shadows.

# Navigation appearance

Keep five bottom destinations fixed during shopping. Active state is black; inactive icons use thin gray outlines and small red badges when needed.

# Components

### Buttons

Primary actions are black full-width rectangles with minimal rounding. Secondary actions are white with black outlines or plain text.

### Cards & Containers

Product cards are image-first and borderless. Outfit and related-product modules use simple image collages rather than raised containers.

### Inputs & Forms

Search uses a pale field with camera access. Checkout inputs use thin underline fields and native keyboards restyled by monochrome surrounding chrome.

# Imagery and icons

Depth comes from fashion photography and occasional video; UI avoids noticeable shadows.

Product grids use tall studio crops or isolated goods on pale backdrops. Editorial looks use larger portrait or collage compositions.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Low stock uses a muted warm label. Checkout progress is a thin green line rather than a large stepper.

# iOS adaptation

### Touch Targets

Search, filters, favorite, size, cart, delivery, and navigation targets remain at least 44 points.

### Collapsing Strategy

Keep the product grid at two columns on phones; scroll size and color rails horizontally and stack checkout options.

### Image Behavior

Use aspect-fill for models and editorial campaigns; contain isolated shoes and accessories on their pale studio backgrounds.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add colorful decorative UI chrome.
- Don't place heavy cards around product imagery.
- Don't round every surface into pills.
- Don't hide delivery conditions or stock status.
- Don't substitute illustration for fashion imagery.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Successful order confirmation was not present in the reviewed checkout sequence.
- Returns and review creation were not visually sampled.
- Tablet and landscape layouts were not represented.

</design-context>
