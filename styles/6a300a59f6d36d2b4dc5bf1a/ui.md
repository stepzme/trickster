<design-context>
---
version: alpha
name: Janymda-design-analysis
description: "A bright telecom super-app built on white and pale gray, with a blue-to-violet central action, yellow commercial CTAs, candy-colored 3D service icons, and dense modular content. Rounded banners, compact category grids, media rails, and card-like tariff sections keep many services approachable without hiding their breadth."
colors:
  primary: "#4457F2"
  on-primary: "#FFFFFF"
  primary-hover: "#6574FF"
  primary-focus: "#3544D1"
  ink: "#17171C"
  ink-muted: "#5F6068"
  ink-subtle: "#9697A0"
  ink-tertiary: "#B9BAC2"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F9"
  surface-2: "#EFF0F4"
  surface-3: "#E4E6ED"
  surface-4: "#D7DAE4"
  hairline: "#E8E9ED"
  hairline-strong: "#D3D5DC"
  hairline-tertiary: "#B8BBC5"
  inverse-canvas: "#17171C"
  inverse-surface-1: "#292A31"
  inverse-surface-2: "#3A3B44"
  inverse-ink: "#FFFFFF"
  brand-secure: "#934EF5"
  semantic-success: "#2DBE73"
  semantic-overlay: "#17171C"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 28px
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
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  service-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px}
  promo-banner: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  tariff-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  catalog-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 16px}
  status-badge: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Janymda is a bright, modular super-app. It balances a dense service catalog with playful 3D icons, strong commercial banners, and conventional navigation.

**Key Characteristics:**
- White canvas with pale gray grouping surfaces.
- Blue-violet central launcher and yellow purchase actions.
- Four-column service icon grid.
- Rounded promotional banners and horizontal media rails.
- Card-stacked tariff details with a sticky CTA.

## Colors

### Brand & Accent
- Blue and violet identify the launcher, onboarding progress, and selected service context.
- Yellow is reserved for major telecom offers and connect actions.

### Surface
- White dominates; pale gray blocks separate favorites, media, and commercial modules.
- Dark navy may anchor event or partner banners.

### Text
- Near-black carries labels and prices.
- Neutral gray supports explanations, inactive navigation, and long terms.

### Semantic
- Green is limited to success or availability.
- Red notification dots signal unread messages without becoming a general accent.

## Typography

### Font Family

Use SF Pro Display and SF Pro Text throughout; the identity comes from color, imagery, and icon objects rather than a display face.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding message |
| display-md | 25px | 700 | Offer heading |
| headline | 21px | 700 | Section title |
| card-title | 17px | 600 | Tariff and banner title |
| body | 14px | 400 | Supporting copy |
| caption | 10px | 400 | Service and navigation label |

### Principles

- Use strong weight to distinguish sections in dense feeds.
- Keep service labels short and center aligned.
- Keep prices and plan names visually separate from legal detail.

### Note on Font Substitutes

Use a neutral system sans with similar metrics when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gaps between modules, and 16px horizontal screen padding.

### Grid & Container

Service shortcuts use four equal columns. Promos span the content width; media and store cards scroll horizontally.

### Whitespace Philosophy

Whitespace should clarify module boundaries, not reduce useful density. Preserve breathing room around tariff prices and CTAs.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Main feed |
| 1 | Pale gray group | Favorites and plan sections |
| 2 | Rounded white card | Tariff benefits |
| 3 | Raised bottom sheet | Full catalog and support |

### Decorative Depth

Use subtle gray separation and 3D icon shading. Avoid heavy card shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Buttons and media thumbnails |
| rounded-md | 12px | Banners and fields |
| rounded-lg | 16px | Tariff sections |
| rounded-xxl | 28px | Bottom sheets |
| rounded-pill | full | Status and account pills |

### Photography & Illustration Geometry

Media thumbnails use compact landscape crops. Service illustrations sit on transparent or faint tinted square tiles.

## Components

### Buttons

Use blue-violet for navigation-forward actions and saturated yellow for plan connection. Secondary actions use pale gray fill.

### Pricing Tabs

Plan variants use compact segmented controls or horizontal cards. Make the selected plan obvious through fill and weight.

### Cards & Containers

Modules are shallow rounded rectangles. Tariff detail stacks distinct benefit, price, and legal sections rather than one oversized card.

### Inputs & Forms

Inputs use pale fill, dark text, and minimal borders. Keep each commercial step focused on one selection.

### Status & Build Page

Use compact badges for bonuses, unread counts, and partner markers. Never cover the service label or primary price.

### Navigation

Keep five destinations fixed and emphasize the center launcher as a circular blue-violet action. The expanded state changes it to a close icon.

### Footer

No footer; maintain safe-area padding below the tab bar.

## Do's and Don'ts

### Do

- Keep the service grid consistent.
- Separate modules with surface color and headings.
- Reserve yellow for strong commercial intent.
- Pair dense offers with an obvious next action.
- Keep service icons friendly and recognizable.

### Don't

- Don't give every module a different layout.
- Don't hide core services inside banners.
- Don't mix long legal text with promotional headlines.
- Don't add dark outlines to 3D icons.
- Don't use the central gradient for ordinary buttons.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten service labels and banner padding |
| Standard | 375–430px | Default four-column service grid |
| Wide | 431px+ | Widen banners and media cards |

### Touch Targets

Grid items, launcher, settings, and bottom navigation retain at least 44px hit areas.

### Collapsing Strategy

Media rails scroll horizontally. Catalog sheets scroll vertically; price and connect action remain reachable near the bottom edge.

### Image Behavior

Use aspect-fill for media and product imagery. Keep offer text baked into banners within a protected safe area.

## Iteration Guide

Tune module order and service scan speed first, then accent balance, banner density, and tariff emphasis.

## Known Gaps

- Motion of the central launcher was not measured.
- Tablet and landscape states were not represented.
- Several secondary service flows were cataloged but not deeply reviewed.

</design-context>

Use the design system above for all UI you generate.
