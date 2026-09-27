<design-context>
---
version: alpha
name: Flowwow-design-analysis
description: "A premium local-gifting marketplace with a white canvas, black primary actions, mint bonus labels, product-first floral photography, editorial store grids, compact price and delivery metadata, and layered checkout sheets for gifts, postcards, timing, tips, and live tracking."
colors: { primary: "#111111", on-primary: "#FFFFFF", primary-hover: "#2B2B2B", primary-soft: "#F1F1F1", accent: "#45C58B", ink: "#171717", ink-muted: "#747474", ink-subtle: "#B0B0B0", canvas: "#FFFFFF", surface-1: "#F6F6F6", surface-2: "#EEF9F3", hairline: "#E4E4E4", semantic-success: "#36AD72", semantic-warning: "#F3B61F", semantic-danger: "#D94C55", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  store-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Flowwow is a photo-led gifting marketplace where black actions and mint bonus labels stay secondary to flowers, desserts, and store quality.

## Colors

### Brand & Accent
Use black for purchase and mint for bonuses, verified availability, and positive commerce cues.

### Surface
Keep browsing white, filters pale gray, and bonus panels very light mint.

### Text
Use black for product and price, gray for delivery and store metadata, and pale gray for inactive state.

### Semantic
Use green for confirmed, yellow for rating, and red for error or cancel.

## Typography

### Font Family
Use SF Pro Display for sections and SF Pro Text for products, stores, and checkout.

### Hierarchy
Use 26–36px for major headings, 22px for sections, 16px for cards, 14px body, and 10–12px metadata.

### Principles
Keep product name, price, delivery time, rating, and store readable without competing with photography.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

## Layout

### Spacing System
Use a 4px base, 8px grid gaps, 16px gutters, and 16px checkout padding.

### Grid & Container
Home stacks search, categories, stores, and product rails; store and product views use two-column image grids.

### Whitespace Philosophy
Let photography breathe while keeping gifting configuration compact and sequential.

## Elevation & Depth
Use image depth and layered white sheets; avoid heavy shadow.

### Decorative Depth
Flowers, desserts, packaging, and postcards provide all decorative richness.

## Shapes

### Border Radius Scale
Use 10px for filters, 14px for product media, 18px for sheets, and full pills for labels.

### Photography & Illustration Geometry
Use authentic product photography with consistent crops, true color, and visible scale where useful.

## Components

### Buttons
Use full-width black purchase controls and neutral outline actions for edit, cancel, or contact.

### Pricing Tabs
Use horizontal chips for price, rating, discount, category, and delivery.

### Cards & Containers
Use product cards, store mosaics, bonus labels, price-history chart, cart rows, add-on rails, and tracking sheets.

### Inputs & Forms
Address, postcard, seller comment, delivery time, payment, tips, and recipient stay in separate steps.

### Status & Build Page
Show confirmed availability, delivery estimate, bonus accrual, scheduled, courier, delivered, and canceled states.

### Navigation
Home, Collections, Self-pickup, Inbox, and Cabinet remain in the bottom bar.

### Footer
The white tab bar remains quiet while contextual black actions anchor product and checkout.

## Do's and Don'ts

### Do
- Keep seller and delivery confidence visible.
- Use authentic product photography.
- Preserve gifting notes and timing.

### Don't
- Don't over-process flower colors.
- Don't hide add-on or tip costs.
- Don't add decorative illustration to the shell.

## Responsive Behavior

### Breakpoints
Use two product columns on phones, three on tablet, and store plus cart summary above 1024px.

### Touch Targets
Keep filters, products, favorite, quantity, add-ons, delivery, and contact at least 44px.

### Collapsing Strategy
Preserve address, product, price, timing, total, and order action; move discovery below the active gift task.

### Image Behavior
Use consistent cover crops for product grids and aspect-fit for detail galleries when scale matters.

## Iteration Guide
1. Build search, categories, stores, and product grids.
2. Add product detail, cart, add-ons, and checkout.
3. Add tracking, chat, bonuses, and reviews.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 26 flows were inventoried; Home, Product selection, and Making an order were image-reviewed.
- Courier communication and post-delivery branches were not deeply sampled.
- The style is photography-led, so no illustration file was created.

</design-context>

Use the design system above for all UI you generate.
