<design-context>
---
version: alpha
name: Drinkit-design-analysis
description: "An immersive coffee ordering experience led by editorial product photography, warm full-bleed color atmospheres, clean black typography, cobalt-violet actions, horizontal taxonomy, spacious product storytelling, and whimsical 3D barista characters used for order status, predictions, and seasonal moments."
colors:
  primary: "#4657DF"
  on-primary: "#FFFFFF"
  primary-hover: "#3546C3"
  primary-soft: "#E8EAFF"
  accent: "#27A7E8"
  ink: "#17181B"
  ink-muted: "#747982"
  ink-subtle: "#ADB1B8"
  canvas: "#F7FAFC"
  surface-1: "#FFFFFF"
  surface-2: "#EAF7FA"
  hairline: "#E4E8EC"
  semantic-success: "#20A96A"
  semantic-warning: "#F0B323"
  semantic-danger: "#D94D4D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 33px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 23px, fontWeight: 650, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 18px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px }
  editorial-banner: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.xl}", padding: 16px }
  order-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Drinkit treats the menu as an editorial feed: large product still lifes, warm atmospheric color, and quiet category text precede transactional detail. Order status shifts into a whimsical 3D character world.

**Key Characteristics:**
- Full-bleed editorial product photography.
- Warm beige, mint, pink, and winter campaign atmospheres.
- Cobalt-violet purchase and status actions.
- Spacious lowercase-feeling category rhythm.
- 3D barista characters and seasonal miniature scenes.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Purchase, order status, favorite, and prediction actions.
- **Primary Soft** ({colors.primary-soft}): Selection and low-emphasis controls.
- **Accent** ({colors.accent}): Supporting location and informational emphasis.

### Surface
- **Canvas** ({colors.canvas}): Neutral ordering and sheet background.
- **Surface 1** ({colors.surface-1}): Product detail, forms, and cards.
- **Surface 2** ({colors.surface-2}): Editorial and seasonal modules.
- **Hairline** ({colors.hairline}): Form and order separation.

### Text
- **Ink** ({colors.ink}): Product names, headings, and prices.
- **Ink Muted** ({colors.ink-muted}): Ingredients and operational detail.
- **Ink Subtle** ({colors.ink-subtle}): Inactive taxonomy and placeholder.

### Semantic
- **Success** ({colors.semantic-success}): Accepted or ready state.
- **Warning** ({colors.semantic-warning}): Limited gifts and attention.
- **Danger** ({colors.semantic-danger}): Error or destructive action.
- **Overlay** ({colors.semantic-overlay}): Product and order sheets.

## Typography

### Font Family
- **SF Pro Display** — product storytelling and campaign headings.
- **SF Pro Text** — menu, composition, checkout, and status.
- **SF Mono** — order identifiers and verification references.

### Hierarchy
Use 33–40px for editorial statements, 23px for product detail, 18px for cards, 14–17px body, and 10–12px metadata.

### Principles
- Let photography precede product explanation.
- Keep names concise and confident.
- Use restrained weights over atmospheric imagery.
- Keep composition and allergens highly readable.

### Note on Font Substitutes
Use the platform system sans or **Inter** with medium display weights and tabular prices.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 16px card padding, 24px between editorial modules, and generous full-bleed media height.

### Grid & Container
Home is a vertical editorial feed with a floating location header and horizontal taxonomy. Checkout uses layered sheets and compact product summaries.

### Whitespace Philosophy
Preserve gallery-like breathing room around hero products; tighten only in builder, cart, and payment steps.

## Elevation & Depth
Photography and colored atmosphere create depth. Sheets use clear white separation with little shadow.

### Decorative Depth
Use studio still lifes, miniature seasonal scenes, and softly rendered 3D characters rather than generic gradients.

## Shapes

### Border Radius Scale
Use 10px for controls, 14px for product cards, 18–24px for editorial banners and sheets, and full pills for purchase and status actions.

### Photography & Illustration Geometry
Compose drinks as central still-life subjects with tactile props and soft light; frame character scenes in rounded cards with uncluttered backgrounds.

## Components

### Buttons
Use cobalt-violet filled pills for purchase, favorite, and status actions; neutral icons handle close, profile, and overflow.

### Pricing Tabs
Use a thin horizontal taxonomy for For you, coffee, not coffee, food, and home; active labels become dark while inactive remain muted.

### Cards & Containers
Use full-bleed hero media, editorial banners, product cards, builder controls, cart rows, order sheets, and character status cards.

### Inputs & Forms
Builder and checkout expose size, ingredients, modifiers, payment, shop, recipient, and pickup details without covering media context.

### Status & Build Page
Show shop availability, accepted, preparing, ready, gift, favorite, payment, and prediction state with explicit text and character cues.

### Navigation
Location and profile remain at the top; taxonomy moves within the feed; cart and current order appear contextually.

### Footer
Use contextual purchase or order controls rather than a visually heavy permanent tab bar.

## Do's and Don'ts

### Do
- Lead with carefully art-directed product imagery.
- Keep the active shop visible.
- Use character art for emotional moments.
- Make ingredients and allergens accessible.

### Don't
- Don't place dense copy over busy imagery.
- Don't reuse one background color for every product.
- Don't make checkout as decorative as discovery.
- Don't mix unrelated illustration styles.

## Responsive Behavior

### Breakpoints
Use one editorial column on phones, two product columns from 768px, and a wide feed with sticky cart or order summary above 1024px.

### Touch Targets
Keep shop, taxonomy, product, modifier, favorite, cart, payment, and status controls at least 44px.

### Collapsing Strategy
Preserve shop, active product, price, cart, and order status. Move campaigns and predictions below the current transaction.

### Image Behavior
Crop editorial scenes intentionally while protecting the product silhouette; contain character cards and never stretch embedded artwork.

## Iteration Guide
1. Build shop selection and editorial menu.
2. Add product detail, builder, and favorites.
3. Add cart, payment, and pickup.
4. Add order tracking and review.
5. Add gifts, merch, predictions, and seasonal campaigns.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 36 flow names were inventoried; Home screen, Product card, and Checking out were image-reviewed.
- Several sampled steps were video-only; modifier and payment behavior were not fully visible.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
