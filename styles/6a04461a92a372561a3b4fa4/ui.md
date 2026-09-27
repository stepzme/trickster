<design-context>
---
version: alpha
name: SOKOLOV-design-analysis
description: "A bright jewelry marketplace built from white surfaces, saturated electric-blue actions, compact product grids, rounded promotional banners, and crisp editorial photography. Loyalty modules add controlled blue-to-red gradients while the shopping chrome stays neutral and information-dense."

colors:
  primary: "#1688F4"
  on-primary: "#FFFFFF"
  primary-pressed: "#0875DA"
  accent-purple: "#9557E8"
  accent-red: "#F0445B"
  ink: "#17181B"
  ink-muted: "#74777D"
  ink-subtle: "#A8ABB0"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F4"
  hairline: "#E4E5E8"
  semantic-success: "#2CAF72"
  semantic-warning: "#F2B11E"
  semantic-danger: "#E94D5C"
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
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 3px, sm: 7px, md: 11px, lg: 16px, xl: 20px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px }
  promo-banner: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 0 }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 11px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

SOKOLOV uses bright marketplace density without losing a premium jewelry tone. White product space, blue interaction color, high-key cutouts, and editorial campaigns carry the system; loyalty gradients stay confined to membership modules.

## Colors

### Brand & Accent

Electric blue marks active navigation, filters, links, and checkout. Purple and red appear only in campaigns and loyalty gradients.

### Surface

White is the main shopping surface. Light gray separates search, chips, and grouped account modules.

### Text

Near-black carries names and prices; gray carries specifications, old prices, and review metadata.

### Semantic

Yellow is reserved for ratings, red for discounts or destructive actions, and green for success. Do not substitute campaign gradients for status.

## Typography

### Font Family

Use a neutral system sans. Product copy is compact; campaign typography may be bolder inside imagery.

### Hierarchy

Use 21px headings, 15–16px module titles, 14px body, and 10–12px catalog metadata. Prices use medium or bold weight.

### Principles

Keep product names readable, align old and current prices, and use uppercase sparingly for campaign labels.

### Note on Font Substitutes

SF Pro or Inter work well. Preserve compact line height in product grids and clear Cyrillic rendering.

## Layout

### Spacing System

Use a 4px base, 12px page gutters, 8px grid gaps, and 16–24px between major promotional modules.

### Grid & Container

Home stacks full-width banners, story circles, shortcut tiles, and collection mosaics. Catalog uses a two-column grid; account screens use grouped cards.

### Whitespace Philosophy

Keep jewelry imagery airy within each product cell while allowing home discovery to remain visually rich.

## Elevation & Depth

Depth comes from soft card shadows, light-gray grouping, and sheets lifted over a dimmed product screen.

### Decorative Depth

Use photographic color fields, soft bokeh, and controlled loyalty gradients. Avoid ornamental shadows around individual products.

## Shapes

### Border Radius Scale

Promotional cards use 16px, utility cards 11px, buttons 7–11px, and story avatars are circular.

### Photography & Illustration Geometry

Use clean jewelry cutouts on white for commerce, rectangular editorial crops for campaigns, and circular crops for stories. Preserve product scale and detail.

## Components

### Buttons

Primary purchase actions are blue with white text. Secondary controls are white or light gray; native controls must inherit this blue accent and package geometry.

### Pricing Tabs

Filters use compact blue selected chips and neutral inactive chips. Counts may sit in small dark badges.

### Cards & Containers

Product cards foreground image, price, name, rating, favorite, and cart actions. Account modules use larger white cards with colorful symbolic art.

### Inputs & Forms

Search fields are light gray and rounded. Checkout fields remain white, compact, and grouped by delivery, packaging, promo, and payment.

### Status & Build Page

Order status, bonus expiration, discounts, and review ratings stay adjacent to the affected item and use concise labels.

### Navigation

A six-item bottom bar supports shopping destinations. The active icon is blue; drill-down screens use back, share, and favorite actions in the top bar.

### Footer

There is no footer. Use the persistent navigation or a sticky blue checkout action above the safe area.

## Do's and Don'ts

### Do

- Let white space isolate jewelry.
- Use blue consistently for interaction.
- Keep price, rating, and availability scannable.
- Separate campaigns from transactional UI.

### Don't

- Do not tint every surface with the loyalty gradient.
- Do not crop product cutouts tightly.
- Do not hide specifications behind decorative content.
- Do not expose default platform-blue controls that differ from the brand blue.

## Responsive Behavior

### Breakpoints

Keep checkout and account flows single-column. Wider catalog layouts may add columns while keeping the same card anatomy.

### Touch Targets

Favorites, cart controls, filter chips, story circles, and bottom navigation require at least 44px targets.

### Collapsing Strategy

Allow stories, quick filters, and collections to scroll horizontally. Keep checkout totals and the primary action sticky.

### Image Behavior

Use `contain` for jewelry cutouts and `cover` for editorial banners. Do not distort product aspect ratios.

## Iteration Guide

Start with white surfaces, blue actions, search, bottom navigation, and the product-card grid. Add loyalty, campaigns, stores, and gifting after the shopping flow is stable.

## Known Gaps

The reviewed scenarios cover Home, Catalog, Search and filters, product details, reviews, Cart, checkout structure, Favorites, stores, gifting, and Profile. Tablet layouts and every error state were not visible.

</design-context>

Use the design system above for all UI you generate.
