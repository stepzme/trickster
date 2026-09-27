<design-context>
---
version: alpha
name: Love-Republic-design-analysis
description: "A restrained fashion-commerce system built around full-bleed editorial photography, high-contrast black and white controls, compact product grids, and sparse typography. The interface stays quiet so campaign imagery, silhouettes, material, and price define the experience."
colors:
  primary: "#141414"
  on-primary: "#FFFFFF"
  primary-hover: "#303030"
  primary-focus: "#000000"
  ink: "#141414"
  ink-muted: "#707070"
  ink-subtle: "#A1A1A1"
  ink-tertiary: "#C8C8C8"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#EFEFEF"
  surface-3: "#E5E5E5"
  surface-4: "#D9D9D9"
  hairline: "#E6E6E6"
  hairline-strong: "#CECECE"
  hairline-tertiary: "#B5B5B5"
  inverse-canvas: "#141414"
  inverse-surface-1: "#262626"
  inverse-surface-2: "#383838"
  inverse-ink: "#FFFFFF"
  brand-secure: "#A72E3A"
  semantic-success: "#4B8D63"
  semantic-overlay: "#141414"
typography:
  display-xl: {fontFamily: Helvetica Neue, fontSize: 36px, fontWeight: 500, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: Helvetica Neue, fontSize: 30px, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: Helvetica Neue, fontSize: 24px, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: Helvetica Neue, fontSize: 20px, fontWeight: 500, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: Helvetica Neue, fontSize: 15px, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: Helvetica Neue, fontSize: 14px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: Helvetica Neue, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: Helvetica Neue, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: Helvetica Neue, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: Helvetica Neue, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0.1px}
  button: {fontFamily: Helvetica Neue, fontSize: 12px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0.2px}
  eyebrow: {fontFamily: Helvetica Neue, fontSize: 9px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0.8px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 0px
  sm: 2px
  md: 4px
  lg: 6px
  xl: 10px
  xxl: 14px
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
  section: 48px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 17px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 12px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  editorial-hero: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.display-md}", rounded: "{rounded.xs}", padding: 0}
  filter-control: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 10px 12px}
  size-selector: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Love Republic is an editorial fashion storefront where full-bleed campaign photography and minimal monochrome controls keep attention on styling, product form, and material.

**Key Characteristics:**
- Full-screen campaign imagery on Home.
- Clean black-and-white interaction palette.
- Two-column product grids with sparse metadata.
- Square, outlined, or filled controls with little rounding.
- Structured size, delivery, basket, and checkout decisions.

## Colors

### Brand & Accent

Black is the primary brand and action color. Burgundy-red is reserved for sale pricing and promotional emphasis, not general navigation.

### Surface

White carries catalog and commerce. Light neutral gray separates filters, size information, delivery rows, and checkout groups.

### Text

Black carries product names, prices, and actions. Cool gray supports color, collection, fulfillment, and former-price metadata.

### Semantic

Muted green can mark delivery availability. Red identifies markdowns; validation should remain concise and avoid decorative color.

## Typography

### Font Family

Use Helvetica Neue or a similarly neutral grotesk across editorial, product, and transaction surfaces.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 500 | Campaign statement |
| headline | 20px | 500 | Catalog and checkout title |
| card-title | 15px | 500 | Product name and price |
| body | 12px | 400 | Color, size, and delivery detail |
| eyebrow | 9px | 500 | Collection and promotion label |

### Principles

- Keep copy short and visually secondary to imagery.
- Use medium weight instead of heavy bold.
- Preserve generous tracking for small uppercase campaign labels.

### Note on Font Substitutes

Arial or Inter may substitute; keep weights restrained and do not introduce expressive display type.

## Layout

### Spacing System

Use a 4px base, 8px grid gutters, and 16px screen margins.

### Grid & Container

Home uses full-width editorial panels. Catalog uses two columns; product, basket, and checkout use a single structured column.

### Whitespace Philosophy

Campaign screens are image-rich, while commerce screens use deliberate white space and fine dividers rather than decorative panels.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Fine border or pale fill | Size and delivery groups |
| 2 | Sticky white action bar | Product purchase and basket total |
| 3 | Dark scrim | Menu, filter, or image overlay |

### Decorative Depth

Lighting, fabric texture, and model photography create depth. Interface layers stay flat and precise.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 0px | Primary buttons and image frames |
| rounded-sm | 2px | Inputs and selectors |
| rounded-md | 4px | Compact neutral containers |
| rounded-lg | 6px | Rare sheet grouping |
| rounded-full | full | Favorite and utility icons only |

### Photography & Illustration Geometry

Campaign photography is full-bleed and portrait-led. Product shots use consistent vertical crops on neutral backgrounds; never add unrelated illustration.

## Components

### Buttons

Primary commerce actions are solid black. Secondary actions are white with black borders; image overlays may invert to white on dark photography.

### Pricing Tabs

Sizes and fulfillment choices use simple outlined rows or grids with black selected borders. Avoid colorful pills.

### Cards & Containers

Product cards are image-first with name, color, current price, and sale price beneath. Basket rows preserve the same quiet metadata hierarchy.

### Inputs & Forms

Checkout fields are white, rectangular, and divider-led. Focus and validation must adopt the monochrome system rather than default platform styling.

### Status & Build Page

Stock, delivery, and promotion states appear as short text close to the decision. Empty states remain typographic and restrained.

### Navigation

Use compact icon-led navigation and minimal labels. Active state is black; overlays adapt to campaign contrast without changing geometry.

### Footer

No footer; bottom navigation or the persistent commerce action owns the safe area.

## Do's and Don'ts

### Do

- Let editorial and product photography dominate.
- Keep controls monochrome and sharp.
- Show size and delivery before commitment.
- Preserve consistent product crops.
- Style native controls to match the fashion system.

### Don't

- Don't add rounded colorful marketplace cards.
- Don't overlay long copy on campaign imagery.
- Don't use heavy shadows or gradients on controls.
- Don't crop away garment silhouettes.
- Don't make sale red the primary navigation color.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten product metadata and labels |
| Standard | 375–430px | Default two-column catalog |
| Wide | 431px+ | Expand campaign crop and content gutters |

### Touch Targets

Menu, favorite, filter, size, purchase, checkout, and navigation controls remain at least 44px.

### Collapsing Strategy

Keep two product columns while names remain readable; stack size, delivery, and checkout decisions in one column.

### Image Behavior

Use aspect-fill for campaigns and consistent portrait product crops. Keep focal faces and full garments within safe areas.

## Iteration Guide

Tune campaign crop and product-grid rhythm first, then size clarity, delivery information, and checkout restraint.

## Known Gaps

- Order-success and returns states were not visually sampled.
- Search and profile account management were not opened in detail.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
