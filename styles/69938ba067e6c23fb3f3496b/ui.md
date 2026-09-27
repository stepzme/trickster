<design-context>
---
version: alpha
name: Avito-design-analysis
description: "A broad classifieds marketplace built on white surfaces, bold black utility type, Avito cyan, and category photography. Five-tab navigation supports search, favorites, selling, messages, and profile; commerce flows introduce purple delivery actions while friendly multicolor illustrations soften empty, success, and promotion states."
colors:
  primary: "#00AAFF"
  on-primary: "#FFFFFF"
  primary-hover: "#0096E6"
  primary-soft: "#E0F5FF"
  accent-purple: "#9654F4"
  accent-green: "#23C174"
  accent-yellow: "#FFD24A"
  accent-pink: "#FF6B8A"
  ink: "#111111"
  ink-muted: "#717171"
  ink-subtle: "#A8A8A8"
  canvas: "#FFFFFF"
  surface-1: "#F2F2F4"
  surface-2: "#E6E6E9"
  hairline: "#DDDEE1"
  semantic-success: "#23C174"
  semantic-danger: "#E83E52"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Arial, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: Arial, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: Arial, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: Arial, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: Arial, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Arial, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Arial, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Arial, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Arial, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Arial, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Arial, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Arial, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  button-delivery: { backgroundColor: "{colors.accent-purple}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  listing-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 3px 6px }
  order-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Avito keeps an enormous catalog understandable through direct search, photo-led listings, and stable bottom navigation. Cyan identifies the platform, black advances selling and forms, and purple is reserved for protected cart and delivery actions.

**Key Characteristics:**
- White, information-dense marketplace canvas.
- Two-column listings with photo, price, location, and favorites.
- Cyan brand and selected navigation.
- Purple cart and delivery conversion layer.
- Friendly illustrated empty, promo, and success states.

## Colors

### Brand & Accent
- **Avito Cyan** ({colors.primary}): Brand, active tab, and linked actions.
- **Delivery Purple** ({colors.accent-purple}): Buy with delivery, cart, and protected checkout.
- **Green** ({colors.accent-green}): Paid and service-success states.
- **Yellow/Pink**: Promotional and illustrative support only.

### Surface
- **Canvas** ({colors.canvas}): Search, listing, profile, and forms.
- **Surface 1** ({colors.surface-1}): Filters, grouped panels, and order summaries.
- **Surface 2** ({colors.surface-2}): Disabled and nested areas.
- **Hairline** ({colors.hairline}): Quiet list separation.

### Text
- **Ink** ({colors.ink}): Prices, titles, and actions.
- **Ink Muted** ({colors.ink-muted}): Seller, location, and delivery metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and secondary labels.

### Semantic
- **Success** ({colors.semantic-success}): Paid, delivered, and service-level states.
- **Danger** ({colors.semantic-danger}): Complaint and destructive action.
- **Overlay** ({colors.semantic-overlay}): Sheets and focused onboarding.

## Typography

### Font Family

- **Arial / system sans** — listings, forms, headings, and navigation.
- **SF Mono** — listing IDs only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Success or campaign heading |
| `{typography.headline}` | 21px | 700 | Section and form heading |
| `{typography.card-title}` | 16px | 600 | Price and listing title |
| `{typography.body}` | 14px | 400 | Metadata and forms |
| `{typography.caption}` | 10px | 400 | Badge and tab label |
| `{typography.button}` | 14px | 600 | Primary action |

### Principles

- Lead with price and object name.
- Use bold headings for task boundaries.
- Keep location and trust metadata compact.
- Reserve playful type for authored illustration assets.

### Note on Font Substitutes

Use **Inter** or the native platform sans.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8px listing gaps, and 12–16px grouped-card padding.

### Grid & Container

General search uses a two-column masonry-like grid. Automotive results may become wide rows. Selling and checkout use one-column steps with pinned actions.

### Whitespace Philosophy

Favor density in results and larger quiet zones in forms, profile, and success states.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listings and forms |
| 1 | Pale rounded group | Filters and summaries |
| 2 | Colored promotion card | Seller tools and benefits |
| 3 | Scrim plus sheet | Selection and guidance |

### Decorative Depth

Use listing photography and soft, lightly dimensional illustration. UI cards themselves stay nearly flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Badges and fields |
| `{rounded.sm}` | 10px | Listing media |
| `{rounded.md}` | 14px | Actions and groups |
| `{rounded.lg}` | 18px | Promo panels |
| `{rounded.pill}` | full | Filter chips |
| `{rounded.full}` | full | Profile and favorite controls |

### Photography & Illustration Geometry

Listing photos use honest cover crops. Illustration is centered in open white or pastel space, with rounded simplified objects and Avito's multicolor accents.

## Components

### Buttons

Black buttons progress selling; cyan handles neutral platform actions; purple commits protected purchase and delivery. Secondary actions use pale blue fills.

### Pricing Tabs

Search facets appear as black selected chips and pale unselected chips. Cart quantity uses a compact stepper.

### Cards & Containers

Listing cards pair image, price, title, seller, rating, delivery, and saved state. Order and profile cards use grouped rows with explicit totals and status.

### Inputs & Forms

Search uses a soft gray field with filter access. Selling is stepwise, with plain inputs, helper text, optional generated description, and a fixed Continue action.

### Status & Build Page

Discount, viewed, reliable seller, verified documents, publication review, paid, delivery, service level, and order state remain close to their object.

### Navigation

Search, Favorites, Ads, Messages, and Profile form the bottom bar. Cart stays in search headers; task-specific flows use back or close.

### Footer

Commerce screens pin checkout totals and actions. Selling pins Continue or Place ad above the safe area.

## Do's and Don'ts

### Do

- Keep price and object identity immediately scannable.
- Preserve search context after details.
- Distinguish platform, selling, and delivery actions by color.
- Explain totals and protection before payment.
- Use illustration for guidance and closure.

### Don't

- Don't color every CTA cyan.
- Don't hide seller trust or delivery conditions.
- Don't overcrop listing evidence.
- Don't mix promotion with order totals.
- Don't put decorative art inside dense result cards.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add listing columns or split details |
| Compact | 390–767px | Two-column results and stacked flows |
| Small | <390px | Tighten labels and optional metadata |

### Touch Targets

Keep tabs, favorites, filters, steppers, chat, purchase, and selling actions at least 44px.

### Collapsing Strategy

Truncate secondary metadata before price or image. Keep checkout and selling one-column; horizontal categories may scroll.

### Image Behavior

Use consistent cover crops in grids and larger contained galleries on detail pages. Never alter seller evidence or distort aspect ratio.

## Iteration Guide

1. Establish bottom navigation and search grid.
2. Build listing detail and seller trust.
3. Add cart, delivery, and order tracking.
4. Add selling and ad management.
5. Add profile, jobs, and illustrations last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; home, category search, product, order, ad placement, and profile flows were image-reviewed.
- Video, map gestures, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
