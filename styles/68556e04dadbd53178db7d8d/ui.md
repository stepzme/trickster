<design-context>
---
version: alpha
name: VkusVill-design-analysis
description: "A bright grocery and loyalty interface built from fresh green actions, bold black headings, white commerce cards, yellow price highlights, pastel product collages, and dense but friendly catalog grids. It feels wholesome, practical, and personal."

colors:
  primary: "#27B667"
  on-primary: "#FFFFFF"
  primary-pressed: "#1C9653"
  ink: "#171916"
  ink-muted: "#70746F"
  ink-subtle: "#A6AAA4"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F6F3"
  accent-yellow: "#FFD84A"
  accent-lavender: "#8A68F3"
  hairline: "#E0E4DE"
  semantic-success: "#27B667"
  semantic-warning: "#F0A637"
  semantic-danger: "#D94B58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 750, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  loyalty-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  category-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

VkusVill uses bright white shopping surfaces, confident green actions, yellow price emphasis, and pastel product collages. Dense catalog content stays approachable through clear card hierarchy.

## Colors

### Brand & Accent

Fresh green owns add, loyalty, delivery, and active navigation. Yellow highlights prices or savings; lavender marks in-store scanning.

### Surface

Use white for shopping and loyalty, pale gray for fields and grouped utilities, and pastel fields for category imagery.

### Text

Near-black carries product names and totals; gray carries unit price, availability, and supporting copy.

### Semantic

Green confirms availability and success, amber warns, and red marks removal or failure. Yellow price highlights are not warnings.

## Typography

### Font Family

Use a bold friendly system sans with tabular figures for prices and quantities.

### Hierarchy

Use 24–38px campaign titles, 20px sections, 14–16px products and actions, and 10–12px rating or unit detail.

### Principles

Keep product, quantity, current price, old price, and discount distinguishable. Avoid excessive weight inside dense grids.

### Note on Font Substitutes

Use Inter or SF Pro with tabular numerals and strong 700–800 page headings.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–10px product gaps, and 20–24px between catalog sections.

### Grid & Container

Catalog uses horizontal product rails and a two-column category grid. Cart and checkout use a full-width sheet with stacked rows.

### Whitespace Philosophy

Use compact product cards but generous section boundaries. Keep checkout calmer than discovery.

## Elevation & Depth

Use soft card lift, large rounded sheets, and sticky delivery or checkout bars. Product cutouts provide subtle depth.

### Decorative Depth

Use pastel product collages, flat benefit symbols, and minimal soft shadow. Avoid glossy or cinematic effects.

## Shapes

### Border Radius Scale

Use 8px product cards and fields, 12px category tiles, 16px loyalty cards, and 22px cart sheets.

### Photography & Illustration Geometry

Product images use clean `contain` cutouts. Category collages arrange real products on pastel tiles with safe text space.

## Components

### Buttons

Add-to-cart and checkout actions are green rectangles; scan uses lavender. Native controls must inherit brand accents and compact commerce geometry.

### Pricing Tabs

Fulfillment, sort, filter, and benefit choices use light segments, chips, or rows with green selected state.

### Cards & Containers

Product cards pair image, rating, stock, name, price, discount, and add. Loyalty cards explain one benefit with one action.

### Inputs & Forms

Search, address, recipient, and payment fields use pale fills with strong focus and clear validation.

### Status & Build Page

Availability, favorite, cart quantity, discount, delivery window, substitution, preparation, and courier state appear in context.

### Navigation

Use five bottom destinations for My Card, Catalog, Stores, Profile, and Support. Keep cart and fulfillment within shopping context.

### Footer

There is no footer. Sticky delivery value or checkout action closes shopping surfaces.

## Do's and Don'ts

### Do

- Keep product photography color-accurate.
- Show unit and current price clearly.
- Preserve fulfillment context.
- Reuse pastel collage art direction.

### Don't

- Do not crowd product cards with promotions.
- Do not hide substitutions or stock.
- Do not use yellow as an error.
- Do not expose default native styling.

## Responsive Behavior

### Breakpoints

Use two product columns on phones where readable. Wider screens may expand category and product grids while keeping cart in a side panel.

### Touch Targets

Product cards, add controls, quantities, filters, benefits, navigation, and checkout require at least 44px targets.

### Collapsing Strategy

Keep product, price, quantity, fulfillment, and total visible. Collapse nutrition, long descriptions, and secondary benefits.

### Image Behavior

Use `contain` for product cutouts and category collages; use `cover` only for editorial lifestyle banners.

## Iteration Guide

Start with loyalty home, catalog search, category grid, product cards, cart, checkout, and tracking. Add personalized discounts, scanning, favorites, stores, and support afterward.

## Known Gaps

The inspected catalog documents 41 flows across onboarding, home, favorites, catalog, checkout, tracking, and settings. Some substitution and failed-delivery branches are less represented.

</design-context>

Use the design system above for all UI you generate.
