<design-context>
---
version: alpha
name: Vkusno-I-tochka-design-analysis
description: "A fast-food loyalty and ordering interface built from dark forest-green branding, vivid orange actions, bold black headings, white commerce surfaces, real food photography, and friendly flat service illustrations. It feels energetic, practical, and promotional."

colors:
  primary: "#F58200"
  on-primary: "#FFFFFF"
  primary-pressed: "#D76C00"
  brand-green: "#174F35"
  ink: "#171816"
  ink-muted: "#6E716D"
  ink-subtle: "#A5A8A3"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F5F2"
  hairline: "#E1E3DF"
  semantic-success: "#2F9C5C"
  semantic-warning: "#F2A536"
  semantic-danger: "#D94A56"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 750, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  promo-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px }
  loyalty-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.brand-green}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Vkusno I Tochka combines a forest-green brand frame, orange conversion actions, real food photography, and cheerful flat service art. Loyalty and ordering remain clearly separated but visually connected.

## Colors

### Brand & Accent

Orange owns add, redeem, price badge, and campaign emphasis. Forest green anchors headers, logos, and loyalty identity.

### Surface

Use white for menus and promotions, pale gray for grouped utilities, and green for persistent brand bars.

### Text

Near-black carries product and promotion titles; gray carries conditions and location. White appears on green and orange.

### Semantic

Green confirms success, amber warns, and red marks errors. Orange remains conversion and reward, not failure.

## Typography

### Font Family

Use a bold friendly system sans with strong Cyrillic support.

### Hierarchy

Use 24–38px onboarding and campaign titles, 16–20px sections, 14–16px products, and 10–12px conditions.

### Principles

Make price, product name, benefit, and expiration scannable. Keep legal promotion copy subordinate but readable.

### Note on Font Substitutes

Use Inter or SF Pro with 700–800 headings and tabular price figures.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 10–12px card gaps, and 24px between home sections.

### Grid & Container

Home stacks loyalty, promo rails, and order entry. Menu uses a two-column product grid below fulfillment and category controls.

### Whitespace Philosophy

Keep food cards bright and open. Use stronger density only in promotion lists and cart rows.

## Elevation & Depth

Use light card shadow, white sheets, and sticky bottom actions. Food photography provides most depth.

### Decorative Depth

Flat green-orange illustrations and real food imagery may share a campaign card, but avoid glossy or glass-heavy effects.

## Shapes

### Border Radius Scale

Use 8px promo and product cards, 12–16px loyalty panels and sheets, and circular price or bonus badges.

### Photography & Illustration Geometry

Product photography uses clean cutouts on white. Illustrations use centered rounded shapes and generous safe space.

## Components

### Buttons

Add, redeem, and order actions are orange rectangles or compact plus buttons. Native controls must inherit orange focus and brand typography.

### Pricing Tabs

Pickup/Delivery, promo groups, and menu categories use light segments or text tabs with orange selection.

### Cards & Containers

Promo cards keep offer, short value, expiry, and media together. Product cards pair cutout food, name, price, and add action.

### Inputs & Forms

Phone, promo code, location, and checkout fields use simple underlined or pale filled styling with clear errors.

### Status & Build Page

Bonus balance, QR readiness, location eligibility, stock, cart quantity, order state, and promotion expiry appear in context.

### Navigation

Use five bottom destinations for Home, Promotions, Menu, Map, and More. Keep fulfillment controls inside Menu.

### Footer

There is no footer. More contains legal, account, support, and restaurant information.

## Do's and Don'ts

### Do

- Keep food photography accurate.
- Make offer conditions visible.
- Reserve orange for conversion.
- Reuse the flat brand illustration family.

### Don't

- Do not replace product photos with drawings.
- Do not crowd loyalty and order actions together.
- Do not hide location eligibility.
- Do not use unstyled native controls.

## Responsive Behavior

### Breakpoints

Use two product columns on phones when legible; collapse to one for detailed modifiers. Wider screens may expand menu grids.

### Touch Targets

Promo cards, product add controls, tabs, QR actions, navigation, and checkout require at least 44px targets.

### Collapsing Strategy

Keep fulfillment, restaurant, product, price, and cart visible. Collapse long promotion terms into details.

### Image Behavior

Use `contain` for food cutouts and illustrations; use `cover` for lifestyle campaign photography.

## Iteration Guide

Start with loyalty home, promotions, menu grid, cart, fulfillment, and QR redemption. Add referral, delivery, map, and advanced account support afterward.

## Known Gaps

The inspected catalog documents 18 flows across onboarding, home, promotions, menu, and More. Complete delivery checkout and live order tracking are less represented.

</design-context>

Use the design system above for all UI you generate.
