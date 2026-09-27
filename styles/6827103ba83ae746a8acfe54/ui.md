<design-context>
---
version: alpha
name: Gold-Apple-design-analysis
description: "An editorial beauty-commerce interface with white and cool-gray space, near-black typography, acid chartreuse highlights, fashion-forward campaign photography, and austere black purchase actions. Fine dividers and low-chrome product pages make merchandising feel premium without becoming precious."
colors: {primary: "#111111", on-primary: "#FFFFFF", primary-hover: "#2D2D2D", primary-focus: "#000000", ink: "#111111", ink-muted: "#686868", ink-subtle: "#979797", ink-tertiary: "#C6C6C6", canvas: "#FFFFFF", surface-1: "#F6F6F4", surface-2: "#EFEFEC", surface-3: "#E4E4E0", surface-4: "#D7D7D2", hairline: "#E7E7E3", hairline-strong: "#CCCCCC", hairline-tertiary: "#B5B5B2", inverse-canvas: "#111111", inverse-surface-1: "#292929", inverse-surface-2: "#414141", inverse-ink: "#FFFFFF", brand-secure: "#CCFF00", semantic-success: "#36A66A", semantic-overlay: "#111111"}
typography:
  display-xl: {fontFamily: Helvetica Neue, fontSize: 40px, fontWeight: 500, lineHeight: 1.04, letterSpacing: -1.1px}
  display-lg: {fontFamily: Helvetica Neue, fontSize: 32px, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.7px}
  display-md: {fontFamily: Helvetica Neue, fontSize: 26px, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: Helvetica Neue, fontSize: 21px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: Helvetica Neue, fontSize: 15px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: Helvetica Neue, fontSize: 14px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: Helvetica Neue, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: Helvetica Neue, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: Helvetica Neue, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: Helvetica Neue, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: Helvetica Neue, fontSize: 13px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: Helvetica Neue, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 2px, sm: 6px, md: 10px, lg: 14px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 44px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 15px 18px}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 16px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8px}
  editorial-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "#CCFF00", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Gold Apple treats beauty commerce like an editorial catalog. White space and fashion photography establish tone, black controls make purchase unambiguous, and acid chartreuse punctuates only high-value promotional moments.

**Key Characteristics:** white editorial canvas, black typography and CTAs, acid chartreuse labels, fashion and beauty photography, fine dividers, restrained radii, image-dominant product pages, and low-chrome navigation.

## Colors

### Brand & Accent

Black owns action, selection, and core brand presence. Acid chartreuse is a sharp promotional highlight, never the default surface or purchase button.

### Surface

White dominates. Cool light gray groups search, product imagery, and editorial content; borders stay fine and neutral.

### Text

Near-black leads brand, product, price, and headings. Medium gray carries description, size, old price, and service detail.

### Semantic

Chartreuse signals promotion or special editorial emphasis, green confirms success, and red is reserved for errors or genuine urgency.

## Typography

### Font Family

Use Helvetica Neue or a similarly neutral neo-grotesk for both editorial titles and commerce detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32px | 500 | Campaign title |
| headline | 21px | 600 | Section or product |
| card-title | 15px | 500 | Brand and item |
| body | 13px | 400 | Detail and description |
| caption | 10px | 400 | Size, promo, service meta |

### Principles

- Let scale and whitespace create premium hierarchy.
- Keep product names and editorial labels concise.
- Use medium weights rather than heavy display typography.

### Note on Font Substitutes

Use Helvetica Neue, Arial, or the platform sans with neutral proportions and clean Cyrillic.

## Layout

### Spacing System

Use a 4px base, 12–16px card gaps, 16–24px content gutters, and 32–44px between editorial sections.

### Grid & Container

Home alternates full-width campaigns, circular shortcuts, and product rails. Product detail uses one dominant image followed by price, action, and fine-rule information rows.

### Whitespace Philosophy

Whitespace is part of the luxury signal. Avoid filling every gap with badges, frames, or recommendations.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Primary storefront |
| 1 | Cool-gray field | Search and image area |
| 2 | Photography | Editorial emphasis |
| 3 | Black sticky action | Add or checkout |

### Decorative Depth

Use campaign and product photography as the depth system. Prefer fine rules and tonal fields to visible shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 2px | CTA and promo label |
| rounded-sm | 6px | Input or chip |
| rounded-md | 10px | Editorial tile |
| rounded-lg | 14px | Large media card |
| rounded-full | full | Circular category image |

### Photography & Illustration Geometry

Use clean product cutouts in large square or portrait fields and full-bleed editorial crops. Circular crops are reserved for category navigation.

## Components

### Buttons

Primary purchase actions are black rectangular controls with white labels. Secondary actions are white or pale with hairline boundaries.

### Pricing Tabs

Categories, brands, filters, sizes, and shades use compact text chips or rows with black selection and occasional chartreuse emphasis.

### Cards & Containers

Product cards minimize chrome around image, brand, name, price, and favorite. Editorial cards use strong photography with sparse overlaid or adjacent copy.

### Inputs & Forms

Search is broad and pale. Native controls may remain native in code but must inherit black focus, restrained radii, neutral type, and exact spacing.

### Status & Build Page

Keep availability, shade or size, price, discount, loyalty benefit, delivery, cart total, and order state near the decision.

### Navigation

Use a light five-item bottom bar with thin line icons and a black active state. Search, favorites, and bag remain visually quiet until needed.

### Footer

No footer; bottom navigation or the current black transaction action owns the safe area.

## Do's and Don'ts

### Do

- Let photography and whitespace carry the premium tone.
- Reserve chartreuse for sharp promotional emphasis.
- Keep the purchase action black and unmistakable.

### Don't

- Don't turn the interface into a neon-green theme.
- Don't add soft bubbly styling to every control.
- Don't surround every product with borders or shadows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten metadata and gutters |
| Standard | 375–430px | Default editorial commerce |
| Wide | 431px+ | Expand imagery and whitespace |

### Touch Targets

Category circles, filters, favorites, shade and size choices, navigation, add, and checkout remain at least 44px.

### Collapsing Strategy

Preserve product image, brand, price, variant, availability, and purchase action; reduce editorial modules and recommendations first.

### Image Behavior

Keep product cutouts fully visible and preserve campaign focal points; do not stretch or over-crop packaging.

## Iteration Guide

Tune Home and Search first, then catalog, product detail, variants, bag, checkout, order state, and profile.

## Known Gaps

- Returns and out-of-stock recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
