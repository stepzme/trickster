<design-context>
---
version: alpha
name: Kulikov-design-analysis
description: "A playful food-and-loyalty experience built from frosted white surfaces, vivid Kulikov purple, soft pink and lilac haze, rounded floating navigation, and highly art-directed food photography. The interface feels promotional and tactile: pill controls, large category still lifes, soft cards, and full-width purple checkout actions."
colors:
  primary: "#A50DB5"
  on-primary: "#FFFFFF"
  primary-hover: "#BB31C8"
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
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Rounded, fontSize: 21px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Rounded, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 20px
  xl: 24px
  xxl: 30px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  product-card: {backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  info-panel: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 11px 14px}
  top-nav: {backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 48px}
  bottom-nav: {backgroundColor: "rgba(255,255,255,0.88)", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px}
---
## Overview

Kulikov is a vivid loyalty and shopping surface where photography, purple controls, and rounded translucent panels create a playful, confectionery feel.

**Key Characteristics:**
- Purple as the consistent action and navigation color.
- Soft gray-lilac canvas with white rounded groups.
- Large art-directed food photography.
- Floating pill navigation and anchored checkout actions.
- Dense promotion, reward, and game modules on the home screen.

## Colors

### Brand & Accent

Saturated purple drives primary buttons, prices, icons, and selected controls. Pink, lilac, cyan, and orange belong inside photography and campaign modules.

### Surface

The base is a cool mist-gray with a faint lilac cast. White cards and frosted bars float above it with soft separation.

### Text

Near-black is used for headings and product names; purple is reserved for price and action emphasis; gray supports details.

### Semantic

Green appears only in external payment or confirmation contexts. Purple remains the in-product success and progress language.

## Typography

### Font Family

Use a rounded display sans for headings and SF Pro Text for dense product and checkout information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Campaign claim |
| headline | 21px | 600 | Category and checkout heading |
| card-title | 16px | 600 | Product and module title |
| body | 13px | 400 | Details and form labels |
| caption | 10px | 400 | Navigation and supporting facts |

### Principles

- Keep headings friendly and rounded.
- Make price visible without overpowering imagery.
- Use centered headings for editorial modules and left alignment for commerce.

### Note on Font Substitutes

SF Pro Rounded or Nunito Sans approximates the soft display voice; retain SF Pro Text for controls and numbers.

## Layout

### Spacing System

Use a 4px base, 12px grid gaps, and 14–16px screen padding.

### Grid & Container

Categories and products use two columns. Recommendations and campaign cards scroll horizontally; checkout returns to one stacked column.

### Whitespace Philosophy

Keep catalog spacing compact, then open up nutrition, benefits, and checkout decisions inside larger white panels.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Mist-gray canvas | Catalog background |
| 1 | White rounded panel | Product information and checkout |
| 2 | Frosted translucent bar | Navigation and sticky actions |
| 3 | Modal white sheet | Payment and focused tasks |

### Decorative Depth

Use soft surface blur and photographic shadows. Avoid hard interface shadows or beveled control chrome.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Small labels |
| rounded-sm | 10px | Product image corners |
| rounded-md | 14px | Inputs and controls |
| rounded-lg | 20px | Category and info cards |
| rounded-pill | full | Navigation and primary actions |

### Photography & Illustration Geometry

Use square or near-square food still lifes with generous crops and pastel set backgrounds. Hero photography may run full width behind translucent controls.

## Components

### Buttons

Primary actions are full-width purple pills. Secondary actions are white or pale-lilac pills with purple labels; add controls are purple circles.

### Pricing Tabs

Category filters use compact wraparound pills: selected is purple with white type, default is white with gray type.

### Cards & Containers

Category tiles are photo-led and strongly rounded. Product lists stay visually open; information and checkout content is grouped into white rounded panels.

### Inputs & Forms

Search uses a white pill. Delivery, comment, date, and payment controls use white rounded rows with purple selected states.

### Status & Build Page

Order status appears as a compact purple capsule over the home hero. Bonuses and progress live in branded promotional panels.

### Navigation

Use a floating translucent pill with five purple icons. Preserve its custom rounded styling even when controls are implemented with native components.

### Footer

No footer; the floating navigation or checkout bar owns the lower safe area.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten category labels and cards |
| Standard | 375–430px | Default two-column shop |
| Wide | 431px+ | Expand photography and panel gutters |

### Touch Targets

Bottom navigation, filters, cart actions, quantity controls, and checkout stay at least 44px.

### Collapsing Strategy

Keep the two-column grid until labels become cramped, then move products to one column; checkout always remains stacked.

### Image Behavior

Use aspect-fill for editorial category tiles and contain for isolated product photography. Preserve the art-directed pastel background when present.

## Iteration Guide

Tune photographic scale and purple action clarity first, then floating navigation, catalog density, and loyalty modules.

## Known Gaps

- Loyalty redemption details were not opened.
- Store pickup was not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
