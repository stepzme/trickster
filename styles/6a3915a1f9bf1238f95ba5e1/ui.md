<design-context>
---
version: alpha
name: Temu-design-analysis
description: "A maximalist discount marketplace built from white canvas, saturated orange commerce actions, green trust messaging, dense two-column product photography, compact black type, and constant urgency badges. Information density is intentional: price, rating, sales, stock, discount, and delivery remain visible together."

colors:
  primary: "#FF5A00"
  on-primary: "#FFFFFF"
  primary-pressed: "#E34D00"
  trust: "#159447"
  ink: "#151515"
  ink-muted: "#696A6E"
  ink-subtle: "#A3A4A8"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F3"
  hairline: "#DCDDDF"
  semantic-success: "#159447"
  semantic-warning: "#F2A516"
  semantic-danger: "#E43E36"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 13px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 15px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 2px, sm: 5px, md: 9px, lg: 12px, xl: 16px, xxl: 22px, pill: 9999px, full: 9999px }
spacing: { xxs: 2px, xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 40px, section: 56px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 4px }
  trust-strip: { backgroundColor: "#EAF8EC", textColor: "{colors.trust}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 6px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 9px 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
---

## Overview

Temu deliberately maximizes commerce signals. Orange prices and actions, green trust strips, compact labels, and image-heavy grids keep deals and urgency continuously visible.

## Colors

### Brand & Accent

Orange carries purchase, price, discount, and active navigation. Green is reserved for delivery, protection, and guarantee messaging.

### Surface

White dominates; pale gray separates filters, checkout groups, and secondary controls. Borders remain thin and functional.

### Text

Black carries product and total data; gray supports seller, sales, crossed prices, and terms.

### Semantic

Green confirms trust and free delivery, red flags scarcity, and amber marks ratings. Pair every color with text.

## Typography

### Font Family

Use a compact system sans with strong numerals and reliable multilingual support.

### Hierarchy

Use 20–26px page headings, 13–16px product titles, 13px body, and 9–11px dense marketplace metadata.

### Principles

Keep current price dominant, old price subordinate, and urgency readable without obscuring product names.

### Note on Font Substitutes

SF Pro or Inter work well. Use tabular numerals for prices, countdowns, and quantities.

## Layout

### Spacing System

Use a 2px base, 8px gutters, 2–6px grid gaps, and 12–20px between commerce groups.

### Grid & Container

Discovery uses dense two-column image grids. Categories combine a narrow taxonomy rail with product tiles; cart and checkout use lists.

### Whitespace Philosophy

Density is the visual strategy. Preserve only enough whitespace to keep image ownership and price hierarchy clear.

## Elevation & Depth

Most cards are flat. Sticky orange actions, black payment bars, and sheets create task depth.

### Decorative Depth

Photography, price badges, and promotion strips provide decoration. Avoid added illustration or atmospheric gradients.

## Shapes

### Border Radius Scale

Product grids are nearly square; filters use 5–9px corners; search and purchase actions are pills.

### Photography & Illustration Geometry

Use high-coverage product photography with `cover` crops in grid cells and larger galleries on detail screens.

## Components

### Buttons

Purchase actions are orange pills; final payment may use a black pill. Native controls must inherit the same commerce hierarchy.

### Pricing Tabs

Category, sorting, size, and color controls use compact text tabs or chips with black or orange selection.

### Cards & Containers

Product cards combine image, title, rating, sales, price, scarcity, and cart. Checkout groups totals, coupons, guarantees, and terms.

### Inputs & Forms

Search is a bordered pill with camera and search actions. Address and payment fields remain compact and explicitly labeled.

### Status & Build Page

Stock, last-day price, delivery, tracking, return, receipt, and order states stay adjacent to the affected product.

### Navigation

Use five bottom destinations with orange active state. Detail and checkout tasks use simple back-led top bars.

### Footer

There is no footer. End commerce tasks with a sticky total and purchase or payment action.

## Do's and Don'ts

### Do

- Preserve dense deal information.
- Keep orange as purchase anchor.
- Use green only for trust and delivery.
- Make totals explicit.

### Don't

- Do not add spacious editorial layouts.
- Do not hide urgency behind menus.
- Do not invent decorative illustration.
- Do not crop products ambiguously.

## Responsive Behavior

### Breakpoints

Keep cart and checkout single-column. Wider discovery layouts may add product columns while preserving card density.

### Touch Targets

Filters, variants, cart controls, bottom navigation, and sticky actions require at least 44px hit areas.

### Collapsing Strategy

Allow category and filter rails to scroll horizontally. Keep cart total and payment action pinned.

### Image Behavior

Use `cover` for product photography and `contain` for isolated goods where scale matters. Preserve gallery ratios.

## Iteration Guide

Start with search, trust strips, two-column products, orange prices, navigation, product detail, Cart, and checkout. Add rewards and profile utilities afterward.

## Known Gaps

All 90 flow records were surveyed; representative discovery, category, product, cart, checkout, order, and profile screens were inspected. Tablet behavior and every payment failure were not visible.

</design-context>

Use the design system above for all UI you generate.
