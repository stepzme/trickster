<design-context>
---
version: alpha
name: Cofix-Club-design-analysis
description: "A high-energy coffee loyalty and preorder app with a near-black shell, stark white wordmark, condensed display typography, saturated orange and purple campaign blocks, product photography on bold color fields, oversized numeric rewards, and a three-destination bottom bar."
colors:
  primary: "#FF6B00"
  on-primary: "#FFFFFF"
  primary-hover: "#E75D00"
  primary-soft: "#FFE0CA"
  accent: "#7650E8"
  accent-green: "#83C93A"
  ink: "#FFFFFF"
  ink-dark: "#171518"
  ink-muted: "#A9A5AA"
  canvas: "#171518"
  surface-1: "#242124"
  surface-2: "#353236"
  hairline: "#4B474C"
  semantic-success: "#83C93A"
  semantic-danger: "#F05246"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Bebas Neue, fontSize: 52px, fontWeight: 400, lineHeight: 0.95, letterSpacing: 0.2px }
  display-lg: { fontFamily: Bebas Neue, fontSize: 40px, fontWeight: 400, lineHeight: 1.00, letterSpacing: 0.2px }
  display-md: { fontFamily: Bebas Neue, fontSize: 32px, fontWeight: 400, lineHeight: 1.05, letterSpacing: 0.2px }
  headline: { fontFamily: Bebas Neue, fontSize: 26px, fontWeight: 400, lineHeight: 1.05, letterSpacing: 0.2px }
  card-title: { fontFamily: Bebas Neue, fontSize: 22px, fontWeight: 400, lineHeight: 1.10, letterSpacing: 0.2px }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2px }
  button: { fontFamily: Bebas Neue, fontSize: 20px, fontWeight: 400, lineHeight: 1.10, letterSpacing: 0.3px }
  eyebrow: { fontFamily: Bebas Neue, fontSize: 15px, fontWeight: 400, lineHeight: 1.10, letterSpacing: 0.4px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px }
  campaign-card: { backgroundColor: "{colors.accent}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  menu-tile: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 12px }
  wallet-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Cofix Club mixes a dark hospitality shell with loud retail campaigns, bright product grids, and a reward wallet. Condensed display type creates the distinct menu-board voice.

**Key Characteristics:**
- Near-black navigation shell and white wordmark.
- Saturated orange as loyalty and purchase anchor.
- Condensed all-caps display typography.
- Coffee photography isolated on flat color tiles.
- Oversized reward figures and coupon sections.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Wallet, checkout, promotions, and dominant loyalty surfaces.
- **Purple Accent** ({colors.accent}): Partnership campaigns.
- **Green Accent** ({colors.accent-green}): Completed orders and positive progress.

### Surface
- **Canvas** ({colors.canvas}): Home and payment shell.
- **Surface 1** ({colors.surface-1}): Forms and dark content panels.
- **Surface 2** ({colors.surface-2}): Elevated field groups.
- **Hairline** ({colors.hairline}): Menu dividers and input rules.

### Text
- **Ink** ({colors.ink}): Headings and labels on dark or colored fields.
- **Ink Dark** ({colors.ink-dark}): Product copy on light surfaces.
- **Ink Muted** ({colors.ink-muted}): Payment hints and secondary metadata.

### Semantic
- **Success** ({colors.semantic-success}): Ready order and reward progress.
- **Danger** ({colors.semantic-danger}): Form error or destructive action.
- **Overlay** ({colors.semantic-overlay}): Checkout and modal focus.

## Typography

### Font Family
- **Bebas Neue** — close substitute for tall condensed menu-board headings and CTAs.
- **SF Pro Text** — forms, metadata, and explanatory copy.
- **SF Mono** — order identifiers and payment references.

### Hierarchy
Use 52px condensed type for rewards and order numbers, 32px for section links, 22–26px for campaign cards, 14px body, and 10–12px metadata.

### Principles
- Let condensed headlines carry brand energy.
- Keep form copy in a conventional sans.
- Use strong size contrast, not many weights.
- Keep product names readable over bold color.

### Note on Font Substitutes
Use **Bebas Neue** or **Oswald** for the display voice and the platform sans for body.

## Layout

### Spacing System
Use a 4px base, 8px between campaign tiles, 16px gutters, and 16px inside loyalty or order cards.

### Grid & Container
Home stacks barcode, hero carousel, two-up campaigns, large menu links, and a fixed three-way footer. Menu uses a two-column product grid.

### Whitespace Philosophy
Favor bold filled blocks and tight retail rhythm; keep enough separation that campaigns, menu, and wallet remain distinct.

## Elevation & Depth
Use color contrast and photography rather than shadow. Sheets and checkout forms lift through darker grouped panels.

### Decorative Depth
Campaigns use photographed products, branded partner images, and flat color fields; operational screens stay direct.

## Shapes

### Border Radius Scale
Use 8px for controls, 12px for product and campaign tiles, 16px for wallet or order cards, and full circles for location and close controls.

### Photography & Illustration Geometry
Cut out food and drink photography onto saturated rectangles. Preserve product silhouette, cup branding, and generous padding around the object.

## Components

### Buttons
Use full-width high-contrast purchase and order-state buttons. Close, back, search, and filter remain icon-led but familiar.

### Pricing Tabs
Category chips and filter controls are compact pills; selected state uses stronger fill and white text.

### Cards & Containers
Use campaign cards, product tiles, wallet panels, coupon tickets, order-status cards, and dark payment groups.

### Inputs & Forms
Payment fields sit in a dark rounded group with underline-like divisions and an unmistakable disabled or enabled pay state.

### Status & Build Page
Show order ready, order identifier, wallet points, cashback, coupon count, and campaign progress with oversized values and explicit labels.

### Navigation
Keep Wallet, Location, and Menu for points in the bottom bar; profile and notifications remain in the header.

### Footer
The three-destination footer uses the dark shell and lets orange indicate the current section.

## Do's and Don'ts

### Do
- Keep the condensed brand voice prominent.
- Use saturated blocks for retail campaigns.
- Pair product images with price and volume.
- Make order status impossible to miss.

### Don't
- Don't turn body or form text into condensed display type.
- Don't layer photography directly on busy app chrome.
- Don't soften the palette into muted pastels.
- Don't hide wallet points behind generic account settings.

## Responsive Behavior

### Breakpoints
Use a two-column product grid on phones, three columns from 768px, and a centered storefront layout with wider campaign modules above 1024px.

### Touch Targets
Keep campaign cards, category chips, products, purchase buttons, and footer destinations at least 44px.

### Collapsing Strategy
Preserve loyalty identity, menu access, active order, and checkout. Move lower-priority campaigns below the task content.

### Image Behavior
Contain cut-out products and crop campaign photography to its designed banner frame; never stretch cups or embedded copy.

## Iteration Guide
1. Build the dark shell and three destinations.
2. Add loyalty barcode and wallet.
3. Add menu browsing and product selection.
4. Add preorder, payment, and order status.
5. Add campaigns and coupons.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 26 flow names were inventoried; Home, Making pre-order, and Wallet full were image-reviewed.
- Campaign carousels and location edge cases were not exhaustively assessed.
- Campaigns are photography-led, so no separate illustration specification was created.

</design-context>

Use the design system above for all UI you generate.
