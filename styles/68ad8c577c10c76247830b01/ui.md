<design-context>
---
version: alpha
name: Sportmaster-design-analysis
description: "A content-rich sports marketplace built from white commerce surfaces, a strong cobalt action color, navy promotional frames, a floating pill-like navigation dock, and energetic product photography. Rounded service tiles and bright 3D icons add playfulness without weakening the practical product and checkout hierarchy."

colors:
  primary: "#1559E8"
  on-primary: "#FFFFFF"
  primary-pressed: "#0D47C7"
  navy: "#232B44"
  accent-coral: "#FF6D66"
  accent-violet: "#735DFF"
  ink: "#17191D"
  ink-muted: "#6F737B"
  ink-subtle: "#A6A9AF"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F0F2F5"
  hairline: "#E2E5E9"
  semantic-success: "#28AE62"
  semantic-warning: "#F0B52C"
  semantic-danger: "#E84C55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px }
  promo-card: { backgroundColor: "{colors.navy}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 12px }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 58px }
---

## Overview

Sportmaster is a practical sports marketplace with energetic campaign content. White shopping surfaces and cobalt actions provide consistency while navy promotional frames, large photography, and playful service icons carry activity and scale.

## Colors

### Brand & Accent

Cobalt is the operational accent; navy frames large promotions. Coral and violet belong to campaigns and service art.

### Surface

White supports products and forms. Cool gray separates modules, while navy may contain discovery content.

### Text

Near-black carries names, prices, and headings. Gray carries specifications, availability, and old prices.

### Semantic

Green confirms availability, yellow supports ratings and bonus currency, and red marks discounts or destructive actions.

## Typography

### Font Family

Use a neutral, sturdy system sans. Campaign art may contain bolder display lettering, but product UI remains restrained.

### Hierarchy

Use 21px screen headings, 15–17px card titles, 14px body, and 10–12px catalog and loyalty metadata.

### Principles

Keep product names, sizes, availability, and delivery easy to scan. Use bold weight for actions and current prices.

### Note on Font Substitutes

SF Pro or Inter are suitable. Maintain tabular clarity for prices and loyalty amounts.

## Layout

### Spacing System

Use a 4px base, 12px page gutters, 8–12px grid gaps, and 20–24px between editorial blocks.

### Grid & Container

Home stacks horizontal rails and large promos. Catalog uses a visual tile grid; product and checkout screens are long single columns.

### Whitespace Philosophy

Use dense discovery rails but keep product media and transaction summaries isolated on white.

## Elevation & Depth

The floating bottom dock, sticky action bars, and soft rounded cards create depth. Avoid strong shadow on product tiles.

### Decorative Depth

Use navy frames, saturated campaign fields, and toy-like 3D service objects. Keep commerce chrome flat and white.

## Shapes

### Border Radius Scale

Campaign and service cards use 16px, fields 8px, product media 12px, and the navigation dock is a full pill.

### Photography & Illustration Geometry

Use full-bleed lifestyle photography for product heroes, clean cutouts for catalog categories, and centered 3D objects for service tiles.

## Components

### Buttons

Primary actions are cobalt with white text and modest rounding. Native controls must inherit the same cobalt, geometry, and type weight.

### Pricing Tabs

Size selectors and category chips use compact outlined or pale cells; the selected option gains cobalt emphasis.

### Cards & Containers

Product cards foreground media and price. Promo cards pair large imagery with bold copy; account and service groups use white rounded panels.

### Inputs & Forms

Search and address fields are cool gray or white with clear outlines on focus. Checkout groups address, promo, bonuses, totals, and payment linearly.

### Status & Build Page

Availability, delivery timing, profile completion, discounts, and bonus accrual appear inline with the affected item and use explicit text.

### Navigation

Use a floating white five-item dock with an emphasized central Services action. Focused tasks use a simple top bar.

### Footer

There is no footer. End long commerce screens with a sticky cobalt action above the floating dock or safe area.

## Do's and Don'ts

### Do

- Keep cobalt as the action anchor.
- Use photography to show fit and activity.
- Preserve the floating navigation dock.
- Keep sizes, delivery, and totals explicit.

### Don't

- Do not let campaign colors leak into transaction states.
- Do not hide key commerce data beneath imagery.
- Do not overuse mascot art in product grids.
- Do not expose default platform-blue controls.

## Responsive Behavior

### Breakpoints

Keep product and checkout flows single-column. Wider storefront layouts may add catalog columns and increase rail visibility.

### Touch Targets

Size cells, favorite actions, dock items, service tiles, and checkout controls require at least 44px targets.

### Collapsing Strategy

Allow brands and sports to scroll horizontally. Keep price and purchase actions sticky on long product and checkout screens.

### Image Behavior

Use `cover` for lifestyle and campaign images and `contain` for product or category cutouts. Preserve garment and equipment proportions.

## Iteration Guide

Start with white commerce surfaces, cobalt actions, the floating dock, search, catalog, product detail, and checkout. Add services, loyalty, and campaigns afterward.

## Known Gaps

The reviewed scenarios cover Home, Catalog, product details, reviews, checkout, Services, activity tools, loyalty, and Account. Tablet behavior and all empty or error states were not visible.

</design-context>

Use the design system above for all UI you generate.
