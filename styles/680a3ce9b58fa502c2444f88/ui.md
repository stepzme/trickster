<design-context>
---
version: alpha
name: Lamoda-design-analysis
description: "A restrained monochrome fashion marketplace built on white, black selection and purchase controls, fine gray separators, and large studio photography. Editorial campaigns and outfit imagery carry personality while catalog, sizing, cart, and checkout remain precise, flat, and utilitarian."
colors:
  primary: "#050505"
  on-primary: "#FFFFFF"
  primary-hover: "#252525"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 600, lineHeight: 1.04, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 22px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  editorial-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  size-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 10px 12px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 48px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Lamoda is a minimal fashion marketplace where monochrome controls frame large studio and editorial photography.

**Key Characteristics:**
- White canvas with black selected and purchase states.
- Two-column product photography grid.
- Editorial campaigns and outfit modules.
- Compact sizing, rating, and price information.
- One-decision-per-step checkout with green progress.

## Colors

### Brand & Accent

Black is the identity and interaction anchor. Warm orange-red appears sparingly for sale taxonomy and markdowns.

### Surface

White dominates. Pale gray supports search, chips, empty imagery placeholders, and cart or checkout grouping.

### Text

Near-black carries product, brand, price, and headings. Gray carries secondary size, delivery, and former-price information.

### Semantic

Green marks checkout progress and favorable delivery facts. Red-orange is commercial emphasis, not a general action color.

## Typography

### Font Family

Use SF Pro Display and SF Pro Text with a restrained, neutral fashion-editorial voice.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 600 | Editorial or onboarding claim |
| headline | 21px | 600 | Catalog and checkout title |
| card-title | 15px | 500 | Product, brand, and price |
| body | 13px | 400 | Sizing and delivery detail |
| caption | 10px | 400 | Rating, color, and navigation |

### Principles

- Keep brand and product name separate.
- Use price weight rather than bright color for emphasis.
- Let editorial imagery provide expression.

### Note on Font Substitutes

Inter or Helvetica Neue works well; preserve neutral shapes and compact numerals.

## Layout

### Spacing System

Use a 4px base, 2–8px product-grid gaps, and 12px screen padding outside imagery.

### Grid & Container

Product discovery uses two equal columns. Category is a vertical text list; product detail and checkout use one full-width column.

### Whitespace Philosophy

Use wide white fields around photography and checkout choices while keeping the product grid compact.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and detail |
| 1 | Pale gray field | Search and neutral chips |
| 2 | Sticky white bar | Cart and purchase action |
| 3 | White sheet over scrim | Delivery conditions and selectors |

### Decorative Depth

Depth comes from fashion photography and occasional video; UI avoids noticeable shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 2px | Image and selected-size edges |
| rounded-sm | 4px | Buttons and search |
| rounded-md | 8px | Sheets and grouped controls |
| rounded-lg | 12px | Rare promotional panels |
| rounded-full | full | Favorite and compact icon controls |

### Photography & Illustration Geometry

Product grids use tall studio crops or isolated goods on pale backdrops. Editorial looks use larger portrait or collage compositions.

## Components

### Buttons

Primary actions are black full-width rectangles with minimal rounding. Secondary actions are white with black outlines or plain text.

### Pricing Tabs

Audience, filters, and size selections use compact segments or squared chips; selected is black with white type.

### Cards & Containers

Product cards are image-first and borderless. Outfit and related-product modules use simple image collages rather than raised containers.

### Inputs & Forms

Search uses a pale field with camera access. Checkout inputs use thin underline fields and native keyboards restyled by monochrome surrounding chrome.

### Status & Build Page

Low stock uses a muted warm label. Checkout progress is a thin green line rather than a large stepper.

### Navigation

Keep five bottom destinations fixed during shopping. Active state is black; inactive icons use thin gray outlines and small red badges when needed.

### Footer

No footer; bottom navigation or the persistent black action owns the lower safe area.

## Do's and Don'ts

### Do

- Let fashion photography lead.
- Use black for selection and commitment.
- Keep product metadata compact.
- Preserve clear size and availability choices.
- Restyle native controls into the monochrome system.

### Don't

- Don't add colorful decorative UI chrome.
- Don't place heavy cards around product imagery.
- Don't round every surface into pills.
- Don't hide delivery conditions or stock status.
- Don't substitute illustration for fashion imagery.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten grid labels and size rail |
| Standard | 375–430px | Default two-column catalog |
| Wide | 431px+ | Enlarge editorial media and gutters |

### Touch Targets

Search, filters, favorite, size, cart, delivery, and navigation targets remain at least 44px.

### Collapsing Strategy

Keep the product grid at two columns on phones; scroll size and color rails horizontally and stack checkout options.

### Image Behavior

Use aspect-fill for models and editorial campaigns; contain isolated shoes and accessories on their pale studio backgrounds.

## Iteration Guide

Tune photography scale and size selection first, then product-grid density, outfit discovery, and checkout clarity.

## Known Gaps

- Successful order confirmation was not present in the reviewed checkout sequence.
- Returns and review creation were not visually sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
