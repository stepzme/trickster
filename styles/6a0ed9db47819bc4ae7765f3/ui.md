<design-context>
---
version: alpha
name: kolesa.kz-design-analysis
description: "A utilitarian vehicle marketplace on white and very pale blue, structured by bright blue actions, yellow financing badges, green call buttons, dense listing cards, rectangular vehicle photography, and persistent seller contact controls. Information density is high but predictable, with price and core specifications always near the image."
colors:
  primary: "#2486E3"
  on-primary: "#FFFFFF"
  primary-hover: "#4A9CE9"
  primary-focus: "#176DBE"
  ink: "#202124"
  ink-muted: "#676A70"
  ink-subtle: "#9CA0A6"
  ink-tertiary: "#C0C3C8"
  canvas: "#FFFFFF"
  surface-1: "#F6F9FC"
  surface-2: "#EDF4FA"
  surface-3: "#E1ECF5"
  surface-4: "#D3E2EE"
  hairline: "#E4E8EC"
  hairline-strong: "#CDD3D9"
  hairline-tertiary: "#B2BAC2"
  inverse-canvas: "#202124"
  inverse-surface-1: "#33353A"
  inverse-surface-2: "#474A50"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FFD83D"
  semantic-success: "#19B73B"
  semantic-overlay: "#202124"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.9px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 29px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 3px, sm: 7px, md: 11px, lg: 15px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 11px 16px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  category-tile: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px}
  finance-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

kolesa.kz is an information-dense vehicle marketplace with blue utility controls, yellow finance facts, green calls, and consistent photo-led listings.

## Colors

### Brand & Accent
- Blue marks navigation, filters, messages, and marketplace actions.
- Yellow is reserved for down-payment and installment badges; green means call.

### Surface
- White dominates; pale blue groups categories, results, and promoted rows.

### Text
- Dark gray carries price and model; mid gray supports location, date, and specifications.

### Semantic
- Green indicates direct phone contact. Red is limited to alerts or promoted markers.

## Typography

### Font Family

Use SF Pro Display for prices and page headings, SF Pro Text for dense listing data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-md | 24px | 700 | Listing price |
| headline | 20px | 700 | Page heading |
| card-title | 15px | 500 | Vehicle model |
| subhead | 14px | 600 | Detail section |
| body | 13px | 400 | Specifications |
| caption | 9px | 400 | Views and date |

### Principles

- Put model and price before description.
- Keep key specifications in a compact line block.
- Use badges only for financing or status.

### Note on Font Substitutes

Use a neutral system sans with clear numbers and Cyrillic.

## Layout

### Spacing System

Use a 4px base, 10–12px card padding, and 10–12px screen gutters.

### Grid & Container

Home categories use a four-column grid; listings use one vertical column with image and text side by side.

### Whitespace Philosophy

Favor comparison density in results; give detail modules and contact actions more breathing room.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Navigation and detail |
| 1 | Pale blue background | Results |
| 2 | White rounded card | Listing |
| 3 | Fixed contact bar | Seller actions |

### Decorative Depth

Use surface contrast and photography; avoid decorative shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 3px | Finance badges |
| rounded-sm | 7px | Buttons and photos |
| rounded-md | 11px | Listings and categories |
| rounded-pill | full | Compact filters |

### Photography & Illustration Geometry

Vehicle photography uses landscape crops with the full vehicle visible. No expressive illustration language was observed.

## Components

### Buttons

Blue buttons message or continue; green buttons call. Secondary actions are white with blue labels.

### Pricing Tabs

No pricing tabs were observed. Financing is shown as yellow badges beside the cash price.

### Cards & Containers

Listing cards combine photo, model, price, finance, specifications, location, and favorite action in one predictable block.

### Inputs & Forms

Filters use staged fields and blue focus. Native inputs must inherit compact spacing, pale surfaces, and blue actions.

### Status & Build Page

Use view, favorite, and date metadata quietly. Price reductions and search subscriptions receive concise banners.

### Navigation

Keep five bottom destinations fixed with a prominent blue Post action. Filters and sorting remain in the result header.

### Footer

No footer; contact actions and navigation occupy the bottom safe area.

## Do's and Don'ts

### Do

- Keep comparison facts near the photo.
- Preserve consistent listing structure.
- Separate message and call by color.
- Keep contact actions persistent.
- Restyle native filter controls.

### Don't

- Don't hide price behind descriptive copy.
- Don't use yellow as a general accent.
- Don't crop vehicles too tightly.
- Don't add decorative illustration.
- Don't leave default iOS form styling.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten listing text and category labels |
| Standard | 375–430px | Default card layout |
| Wide | 431px+ | Enlarge vehicle photo and detail gutters |

### Touch Targets

Favorites, filters, seller contacts, and navigation retain at least 44px hit areas.

### Collapsing Strategy

Category promos scroll horizontally; listings stay vertical; contact actions remain anchored.

### Image Behavior

Use aspect-fill only when the complete vehicle remains visible; prefer stable landscape ratios.

## Iteration Guide

Tune price scan speed and listing consistency first, then badge density and surface contrast.

## Known Gaps

- Ad-publishing screens were cataloged but not visually sampled here.
- Tablet layouts were not represented.
- Map-based browsing was not reviewed.

</design-context>

Use the design system above for all UI you generate.
