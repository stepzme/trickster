<design-context>
---
version: alpha
name: Bolt-Food-design-analysis
description: "A photo-led food and grocery marketplace with white surfaces, dense horizontal merchandising rails, strong black hierarchy, forest-green actions, red promotional prices, and compact yellow rating badges. Search, restaurant menus, cart, checkout, and delivery tracking remain direct and information-rich."
colors:
  primary: "#2F8F5B"
  on-primary: "#FFFFFF"
  primary-hover: "#25764A"
  primary-soft: "#E8F6EF"
  accent: "#B41643"
  accent-secondary: "#F2C94C"
  ink: "#17191A"
  ink-muted: "#656A6D"
  ink-subtle: "#A4A8AA"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F1F3F3"
  hairline: "#E2E5E5"
  semantic-success: "#2F8F5B"
  semantic-danger: "#C83743"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.4px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Bolt Food combines high-density discovery with a short, explicit ordering funnel. Photography identifies stores and dishes; green controls commit actions; price, discount, ETA, and rating stay adjacent.

**Key Characteristics:**
- Photo-first restaurant and product cards.
- White canvas with pale-gray inputs.
- Green full-width order actions.
- Red prices and discount chips.
- Persistent five-tab navigation.

## Colors

### Brand & Accent
- **Bolt Green** ({colors.primary}): Basket, checkout, selection, and progress.
- **Offer Red** ({colors.accent}): Discounts and promotional price.
- **Rating Yellow** ({colors.accent-secondary}): Ratings and popular badges.

### Surface
- **Canvas** ({colors.canvas}): Marketplace and menu background.
- **Surface 1** ({colors.surface-1}): Lists, order summary, and tracking sheet.
- **Surface 2** ({colors.surface-2}): Search, filters, and address fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Display** — screen and section headings.
- **SF Pro Text** — controls and explanatory copy.
- **SF Pro Text** — compact labels and authored emphasis.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| {typography.display-xl} | 36px | 700 | Campaign or section title |
| {typography.headline} | 22px | 700 | Screen heading |
| {typography.card-title} | 16px | 600 | Restaurant, store, or item name |
| {typography.body} | 14px | 400 | Details and forms |
| {typography.caption} | 10px | 400 | Metadata |
| {typography.button} | 15px | 600 | Primary action |

### Principles

- Keep name, price, rating, and ETA scannable.
- Use red only for commercial emphasis or error.
- Truncate descriptions before hiding price.
- Pair every image with useful decision data.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference fonts are unavailable; preserve relative weight and scale.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Home and Stores use horizontal rails inside a vertical feed. Restaurant menus switch to sticky category tabs and one-column item rows; checkout and tracking use stacked sheets.

### Whitespace Philosophy

Keep section boundaries generous while allowing dense cards inside each merchandising rail.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White marketplace canvas | Base context |
| 1 | Photo card or pale field | Primary content |
| 2 | Rounded order sheet | Selected or promoted content |
| 3 | Modal over overlay | Confirmation and focus |

### Decorative Depth

Use only soft card separation and sticky-layer elevation. Food photography provides visual depth.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| {rounded.xs} | 8px | Small controls |
| {rounded.sm} | 12px | Inputs and icon wells |
| {rounded.md} | 16px | Action tiles |
| {rounded.lg} | 20px | Main cards |
| {rounded.pill} | full | Filters and chips |
| {rounded.full} | full | Progress, avatar, or status |

### Photography & Illustration Geometry

Use tightly cropped real food and storefront photography with consistent rounded rectangles. Protect rating, discount, and add controls from image detail.

## Components

### Buttons

Green filled pills commit basket, checkout, address, and reorder. Plus/minus controls stay compact and local to an item.

### Pricing Tabs

Category tabs, Home, Stores, Search, Orders, and Account use strong active labels and minimal color.

### Cards & Containers

Restaurant and store cards pair a 16:9 image with rating, fee, and ETA. Item rows prioritize dish photo, description, old price, current price, and add control.

### Inputs & Forms

Search and address fields use pale-gray blocks, leading icons, and filter affordances. Checkout keeps delivery notes and tips grouped.

### Status & Build Page

Show confirming, preparing, courier assigned, pickup, en route, delivered, cancelled, and ETA as a vertical timeline.

### Navigation

Bottom navigation anchors discovery and order history. Restaurant and checkout screens use back navigation with sticky category or summary areas.

### Footer

Persistent basket and checkout actions sit above the safe area; browsing retains the five-tab bar.

## Do's and Don'ts

### Do

- Keep decision data next to imagery.
- Expose total fees before payment.
- Use a visible delivery timeline.
- Retain category context while scrolling.
- Keep basket quantity editable.

### Don't

- Don't use generic illustrations instead of food photos.
- Don't hide delivery fee or ETA.
- Don't place multiple green primary actions together.
- Don't obscure item controls over busy photos.
- Don't merge tracking with browsing navigation.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Use a two-column catalog with a persistent basket summary |
| Compact | 390–767px | Default mobile composition |
| Small | <390px | Stack rails and shorten metadata before reducing image size |

### Touch Targets

Keep every interactive control at least 44px while preserving the reference density.

### Collapsing Strategy

Preserve search, selected restaurant, basket total, and checkout action. Collapse secondary promotions before order data.

### Image Behavior

Crop food photography consistently around the dish or storefront. Never crop rating, discount, price, or add controls into the image.

## Iteration Guide

1. Build discovery and search.
2. Add restaurant menus and item customization.
3. Add basket and checkout.
4. Add tracking and courier contact.
5. Add stores, orders, and account.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 46 available flow names were inventoried; onboarding, home, restaurant, ordering, tracking, and stores were image-reviewed.
- Courier map motion and live-activity behavior were not directly assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
