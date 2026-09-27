<design-context>
---
version: alpha
name: Dodo-Pizza-design-analysis
description: "A photo-led food ordering interface with a white canvas, vivid orange purchase actions, black editorial product names, soft pink and orange food backdrops, oversized dish photography, horizontal category strips, stacked checkout sheets, and playful map markers for live order tracking."
colors:
  primary: "#FF6900"
  on-primary: "#FFFFFF"
  primary-hover: "#E85E00"
  primary-soft: "#FFF0E7"
  accent: "#F05BA6"
  ink: "#171717"
  ink-muted: "#747474"
  ink-subtle: "#B0B0B0"
  canvas: "#FFFFFF"
  surface-1: "#F5F6F8"
  surface-2: "#FFF5F0"
  hairline: "#E7E7E8"
  semantic-success: "#1FAD59"
  semantic-danger: "#E44D4D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 18px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px }
  story-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px }
  order-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Dodo Pizza makes food photography the interface. Large dishes sit on clean white or softly colored fields, while orange consistently marks add, order, and configuration actions.

**Key Characteristics:**
- White photo-led ordering canvas.
- Orange purchase and configuration actions.
- Large isolated dish photography.
- Horizontal story and category navigation.
- Layered white sheets for cart and delivery.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Add, order, customize, and active state.
- **Primary Soft** ({colors.primary-soft}): Selected or supporting food surfaces.
- **Pink Accent** ({colors.accent}): New items and dessert atmospheres.

### Surface
- **Canvas** ({colors.canvas}): Menu, cart, and order screens.
- **Surface 1** ({colors.surface-1}): Product cards and neutral selection.
- **Surface 2** ({colors.surface-2}): Warm food and promotion background.
- **Hairline** ({colors.hairline}): Checkout and settings boundaries.

### Text
- **Ink** ({colors.ink}): Dish names, prices, and totals.
- **Ink Muted** ({colors.ink-muted}): Ingredients and delivery metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled categories and notes.

### Semantic
- **Success** ({colors.semantic-success}): Accepted, completed, or available state.
- **Danger** ({colors.semantic-danger}): Removal, error, and cancel state.
- **Overlay** ({colors.semantic-overlay}): Product and checkout sheets.

## Typography

### Font Family
- **SF Pro Display** — campaign and product headings.
- **SF Pro Text** — descriptions, checkout, and order status.
- **SF Mono** — order number and verification code.

### Hierarchy
Use 32–38px heavy for campaign statements, 22px for sheet titles, 18px for product names, 14px body, and 10–12px metadata.

### Principles
- Let dish name and price follow the image.
- Keep ingredient copy readable but secondary.
- Make add and total actions unmistakable.
- Avoid dense typography over food photography.

### Note on Font Substitutes
Use the platform system sans or **Inter** with strong display weights and tabular prices.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px product gaps, 16px sheet padding, and 24px between menu categories.

### Grid & Container
Home stacks address, stories, category rails, and large product cards. Product detail becomes immersive media; checkout stacks sliding sheets.

### Whitespace Philosophy
Give each dish enough open space to feel appetizing; use denser grouping only in cart, add-ons, and checkout.

## Elevation & Depth
Use large photography and layered sheets rather than card shadows. Tracking gains depth through map markers and a white status panel.

### Decorative Depth
Food photography, colored studio backdrops, and occasional map miniatures carry the visual depth.

## Shapes

### Border Radius Scale
Use 10px for controls, 14px for stories, 18px for product cards, 24px for sheets, and full pills for add or price actions.

### Photography & Illustration Geometry
Shoot or render food as an isolated hero on soft colored fields. Preserve natural proportions, texture, and generous negative space.

## Components

### Buttons
Use orange filled pills for adding, ordering, and configuring; white or neutral controls handle close, address, and secondary choice.

### Pricing Tabs
Use horizontal category labels and compact chips for size, dough, ingredients, delivery time, or payment choice.

### Cards & Containers
Use story tiles, hero product cards, immersive product detail, cart rows, add-on rails, and layered checkout sheets.

### Inputs & Forms
Address, delivery time, payment, promo code, and recipient settings live in separate readable rows or sheets.

### Status & Build Page
Show minimum order, accepted, cooking, courier, delivered, bonus, promo, and verification state with explicit labels.

### Navigation
Menu category navigation stays near the top; profile and order status remain reachable without obscuring the menu.

### Footer
Contextual sticky orange actions replace a heavy persistent tab bar during product and checkout tasks.

## Do's and Don'ts

### Do
- Make food the visual protagonist.
- Keep orange consistent for purchase action.
- Show address before ordering.
- Separate add-ons from the current cart.

### Don't
- Don't crop dishes so aggressively that portions are unclear.
- Don't cover food with long text.
- Don't hide minimum order or final total.
- Don't turn every food background orange.

## Responsive Behavior

### Breakpoints
Use one large product column on phones, two columns from 768px, and a menu plus sticky cart summary above 1024px.

### Touch Targets
Keep address, stories, categories, products, modifiers, quantity, checkout, and tracking actions at least 44px.

### Collapsing Strategy
Preserve address, active category, current product, cart total, and primary order action. Move stories and promotions below the menu task.

### Image Behavior
Use cover only for designed full-bleed product scenes; otherwise contain dishes and preserve plate or packaging boundaries.

## Iteration Guide
1. Build address and menu browsing.
2. Add product detail and modifiers.
3. Add cart, add-ons, promo, and checkout.
4. Add tracking, rating, and order history.
5. Add stories, games, bonuses, and profile.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 23 flow names were inventoried; Home, Product details, and Checking out were image-reviewed.
- Games, support, widgets, and secret-order verification were not deeply sampled.
- Product photography dominates; no separate broad illustration specification was warranted.

</design-context>

Use the design system above for all UI you generate.
