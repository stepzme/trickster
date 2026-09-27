<design-context>
---
version: alpha
name: Glovo-design-analysis
description: "A cheerful delivery marketplace with a warm yellow discovery field, teal-green transactional actions, white restaurant surfaces, rounded image-led cards, and hand-drawn multicolor category icons. Friendly type and receipt-like checkout details keep a broad service catalog approachable."
colors: {primary: "#00A082", on-primary: "#FFFFFF", primary-hover: "#19AF93", primary-focus: "#008B70", ink: "#1D1D1F", ink-muted: "#65676A", ink-subtle: "#97999C", ink-tertiary: "#C7C9CB", canvas: "#FFC244", surface-1: "#FFFFFF", surface-2: "#F5F5F3", surface-3: "#ECEDEA", surface-4: "#DEE1DC", hairline: "#E5E6E2", hairline-strong: "#CBCFC8", hairline-tertiary: "#B3B9B0", inverse-canvas: "#00A082", inverse-surface-1: "#1EAE92", inverse-surface-2: "#43BEA5", inverse-ink: "#FFFFFF", brand-secure: "#00A082", semantic-success: "#25A969", semantic-overlay: "#161817"}
typography:
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Rounded, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px}
  restaurant-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px}
  category-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px}
  status-badge: {backgroundColor: "#E9B83D", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Glovo pairs a warm yellow discovery world with clean white restaurant and checkout surfaces. Teal drives commitment, while colorful hand-drawn icons keep many delivery categories friendly and distinct.

**Key Characteristics:** warm yellow home, teal transactional CTAs, white content surfaces, circular illustrated services, photo-led restaurant cards, rounded chips, mustard promo badges, and receipt-like checkout grouping.

## Colors

### Brand & Accent

Yellow owns discovery and brand atmosphere. Teal-green owns add, continue, checkout, and selected transactional states.

### Surface

White is used for restaurant lists, menus, product detail, cart, and checkout. Pale neutral fields group search, options, and order detail.

### Text

Near-black leads restaurant, item, price, and total. Gray supports timing, fees, descriptions, and conditions.

### Semantic

Teal confirms action and positive state, mustard marks promotion, and red is reserved for genuine errors or unavailable items.

## Typography

### Font Family

Use a friendly rounded display sans for greetings and category emphasis, with SF Pro Text for menu, cart, and checkout detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Greeting or discovery state |
| headline | 21px | 700 | Restaurant or section |
| card-title | 16px | 600 | Dish or service |
| body | 13px | 400 | Detail and checkout |
| caption | 10px | 400 | Timing, fee, promo meta |

### Principles

- Keep discovery language playful but transactional copy direct.
- Put item, price, timing, and fee in repeatable positions.
- Use bold weight sparingly for decision-critical totals.

### Note on Font Substitutes

Use SF Pro Rounded or Nunito Sans for display and the platform sans for dense commerce text.

## Layout

### Spacing System

Use a 4px base, 8–12px card gaps, 16px module padding, and 20–24px between discovery rails.

### Grid & Container

Home uses circular service shortcuts and image-led horizontal rails. Restaurant, dish, cart, and checkout use a focused vertical stack.

### Whitespace Philosophy

Keep the yellow home energetic, then progressively simplify surfaces as the user approaches payment.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Yellow or white canvas | Discovery or transaction |
| 1 | White rounded card | Category and restaurant |
| 2 | Image-led panel | Restaurant and dish |
| 3 | Sticky teal action | Add, continue, checkout |

### Decorative Depth

Use hand-drawn icons, wavy yellow-to-white transitions, food photography, and soft card shadow. Avoid glossy or metallic visual effects.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small badge |
| rounded-sm | 8px | Option row |
| rounded-md | 12px | Input and button |
| rounded-lg | 18px | Restaurant card |
| rounded-full | full | Service icon and chip |

### Photography & Illustration Geometry

Crop restaurant imagery wide and appetizing. Place service illustrations inside simple circular fields with generous breathing room.

## Components

### Buttons

Primary transactional buttons use teal with white type. Secondary controls stay white or pale, while yellow is not used as the main checkout action.

### Pricing Tabs

Delivery categories, filters, dish options, and fulfillment choices use rounded chips or rows with teal selection.

### Cards & Containers

Restaurant cards lead with photography and compact timing. Dish cards align image, title, description, and price; checkout groups read like a clear receipt.

### Inputs & Forms

Address and search fields are prominent and rounded. Native controls may be used but must inherit the teal focus, radii, type, and spacing of this system.

### Status & Build Page

Keep ETA, delivery fee, minimum, unavailable items, substitutions, total, payment, and courier state near the next action.

### Navigation

Use four bottom destinations for Home, Discover, Orders, and Profile, with teal or dark active emphasis.

### Footer

No footer; bottom navigation or the current teal action owns the safe area.

## Do's and Don'ts

### Do

- Preserve yellow for discovery and teal for commitment.
- Use illustration to clarify service categories.
- Simplify progressively from home to checkout.

### Don't

- Don't make checkout yellow or visually playful at the expense of trust.
- Don't mix multiple illustration styles.
- Don't let restaurant photography hide timing, price, or fees.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten service rail and metadata |
| Standard | 375–430px | Default delivery composition |
| Wide | 431px+ | Expand images and gutters |

### Touch Targets

Service icons, filters, dish rows, options, navigation, cart, and checkout remain at least 44px.

### Collapsing Strategy

Preserve address, restaurant, item, price, ETA, fee, total, and primary action; reduce campaigns and recommendations first.

### Image Behavior

Use fixed aspect ratios for restaurant and dish imagery, with center crops and protected text-safe areas for badges.

## Iteration Guide

Tune Home and Discover first, then restaurant, dish options, cart, checkout, tracking, order history, and profile.

## Known Gaps

- Courier tracking and failure recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
