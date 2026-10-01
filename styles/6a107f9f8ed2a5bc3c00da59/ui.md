<design-context>
---
version: 1
platform: iOS
name: Kulikov-design-analysis
description: "A playful food-and-loyalty experience built from frosted white surfaces, vivid Kulikov purple, soft pink and lilac haze, rounded floating navigation, and highly art-directed food photography. The interface feels promotional and tactile: pill controls, large category still lifes, soft cards, and full-width purple checkout actions."
colors:
  primary: "#A50DB5"
  on-primary: "#FFFFFF"
  primary-focus: "#850491"
  ink: "#171319"
  ink-muted: "#706A73"
  ink-subtle: "#A39DA5"
  ink-tertiary: "#C5C0C7"
  canvas: "#F1F4F6"
  surface-1: "#FFFFFF"
  surface-2: "#F8F1FA"
  surface-3: "#EFE5F2"
  surface-4: "#E3D8E7"
  hairline: "#EBE7ED"
  hairline-strong: "#D8D1DB"
  hairline-tertiary: "#C2BAC5"
  inverse-canvas: "#211F22"
  inverse-surface-1: "#363138"
  inverse-surface-2: "#4C4550"
  inverse-ink: "#FFFFFF"
  brand-secure: "#7D2A87"
  semantic-success: "#3AAE45"
  semantic-overlay: "#171319"
typography:
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Rounded, fontSize: 21, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Rounded, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 20
  xl: 24
  xxl: 30
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  product-card: {backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  info-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [11, 14]}
  bottom-nav: {backgroundColor: "rgba(255,255,255,0.88)", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
---

# Overview

Kulikov is a vivid loyalty and shopping surface where photography, purple controls, and rounded translucent panels create a playful, confectionery feel.

**Key Characteristics:**
- Purple as the consistent action and navigation color.
- Soft gray-lilac canvas with white rounded groups.
- Large art-directed food photography.
- Floating pill navigation and anchored checkout actions.
- Dense promotion, reward, and game modules on the home screen.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Purple as the consistent action and navigation color.
- The reviewed screens show this treatment: Soft gray-lilac canvas with white rounded groups.
- The reviewed screens show this treatment: Large art-directed food photography.
- The reviewed screens show this treatment: Floating pill navigation and anchored checkout actions.
- The reviewed screens show this treatment: Dense promotion, reward, and game modules on the home screen.

# Color and surfaces

### Brand & Accent

Saturated purple drives primary buttons, prices, icons, and selected controls. Pink, lilac, cyan, and orange belong inside photography and campaign modules.

### Surface

The base is a cool mist-gray with a faint lilac cast. White cards and frosted bars float above it with soft separation.

### Text

Near-black is used for headings and product names; purple is reserved for price and action emphasis; gray supports details.

### Semantic

Green appears only in external payment or confirmation contexts. Purple remains the in-product success and progress language.

# Typography

### Font Family

Use a rounded display sans for headings and SF Pro Text for dense product and checkout information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Campaign claim |
| headline | 21pt | 600 | Category and checkout heading |
| card-title | 16pt | 600 | Product and module title |
| body | 13pt | 400 | Details and form labels |
| caption | 10pt | 400 | Navigation and supporting facts |

### Principles

- Keep headings friendly and rounded.
- Make price visible without overpowering imagery.
- Use centered headings for editorial modules and left alignment for commerce.

### Note on Font Substitutes

SF Pro Rounded or Nunito Sans approximates the soft display voice; retain SF Pro Text for controls and numbers.

# Screen composition

### Grid & Container

Categories and products use two columns. Recommendations and campaign cards scroll horizontally; checkout returns to one stacked column.

### Whitespace Philosophy

Keep catalog spacing compact, then open up nutrition, benefits, and checkout decisions inside larger white panels.

# Navigation appearance

Use a floating translucent pill with five purple icons. Preserve its custom rounded styling even when controls are implemented with native components.

# Components

### Buttons

Primary actions are full-width purple pills. Secondary actions are white or pale-lilac pills with purple labels; add controls are purple circles.

Category filters use compact wraparound pills: selected is purple with white type, default is white with gray type.

### Cards & Containers

Category tiles are photo-led and strongly rounded. Product lists stay visually open; information and checkout content is grouped into white rounded panels.

### Inputs & Forms

Search uses a white pill. Delivery, comment, date, and payment controls use white rounded rows with purple selected states.

### Status & Build Page

Order status appears as a compact purple capsule over the home hero. Bonuses and progress live in branded promotional panels.

### Navigation

Use a floating translucent pill with five purple icons. Preserve its custom rounded styling even when controls are implemented with native components.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Mist-gray canvas | Catalog background |
| 1 | White rounded panel | Product information and checkout |
| 2 | Frosted translucent bar | Navigation and sticky actions |
| 3 | Modal white sheet | Payment and focused tasks |

### Decorative Depth

Use soft surface blur and photographic shadows. Avoid hard interface shadows or beveled control chrome.

# States

Order status appears as a compact purple capsule over the home hero. Bonuses and progress live in branded promotional panels.

# iOS adaptation

### Touch Targets

Bottom navigation, filters, cart actions, quantity controls, and checkout stay at least 44pt.

### Collapsing Strategy

Keep the two-column grid until labels become cramped, then move products to one column; checkout always remains stacked.

### Image Behavior

Use aspect-fill for editorial category tiles and contain for isolated product photography. Preserve the art-directed pastel background when present.

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

- Let food photography supply most of the color.
- Keep purple consistent across action states.
- Use rounded, soft surfaces throughout.
- Separate product facts into digestible panels.
- Keep the final checkout action persistent.

### Don't

- Don't replace photography with generic food icons.
- Don't square off navigation or primary controls.
- Don't add harsh black borders to ordinary cards.
- Don't use multiple campaign colors on functional controls.
- Don't leave native iOS styling visually unadapted.

</design-context>
