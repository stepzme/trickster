<design-context>
---
version: alpha
name: Shop-design-analysis
description: "A visual shopping interface built from soft off-white space, frosted floating navigation, large rounded brand canvases, and a saturated violet purchase accent. Brand photography tints whole sections, while product tiles, chips, and checkout remain clean, compact, and highly rounded."

colors:
  primary: "#5B2AF2"
  on-primary: "#FFFFFF"
  primary-hover: "#754CF6"
  primary-soft: "#E7DEFF"
  ink: "#111113"
  ink-muted: "#6C6C72"
  ink-subtle: "#A1A1A7"
  canvas: "#FBF9FC"
  surface-1: "#FFFFFF"
  surface-2: "#F0EDF2"
  surface-dark: "#19151B"
  glass: "#F7F5F8"
  hairline: "#E2DEE5"
  semantic-success: "#32B767"
  semantic-warning: "#E9A42A"
  semantic-danger: "#E14850"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 30px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px }
  brand-canvas: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.xl}", padding: 12px }
  filter-chip: { backgroundColor: "{colors.glass}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  cart-sheet: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  checkout-section: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  floating-nav: { backgroundColor: "{colors.glass}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 54px }
---

## Overview

Shop is an image-first marketplace that lets each merchant's photography tint the browsing environment while keeping the shared interface neutral. Large rounded brand canvases, white product tiles, frosted floating navigation, and violet purchase actions create a fluid editorial-commerce feel.

**Key Characteristics:**
- Saturated violet is the shared purchase and saved-state accent.
- Merchant photography and sampled background color define each brand section.
- Product tiles are white, softly rounded, and image-led.
- Navigation floats in a translucent pill near the bottom.
- Cart becomes a dark sheet; checkout returns to a clean white transaction surface.

## Colors

### Brand & Accent

- **Shop Violet** ({colors.primary}) marks add-to-cart, purchase, cart count, and saved state.
- **Soft Violet** ({colors.primary-soft}) supports disabled or secondary purchase states.

### Surface

- **Canvas** ({colors.canvas}) is the shared marketplace background.
- **Surface 1** ({colors.surface-1}) carries products, checkout, and account sections.
- **Surface 2** ({colors.surface-2}) supports neutral brand collections.
- **Dark Surface** ({colors.surface-dark}) carries the cart sheet.
- **Glass** ({colors.glass}) defines floating navigation and chips.

### Text

- **Ink** ({colors.ink}) carries brand, product, price, and total.
- **Muted** ({colors.ink-muted}) carries reviews and descriptions.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and inactive controls.

### Semantic

Use green, amber, and red only for delivery, warning, and error states. Merchant colors may enter imagery and background sampling but must not replace shared action semantics.

## Typography

### Font Family

Use a neutral system sans with bold editorial headings and clear price numerals. Merchant logos remain supplied imagery, not substitute interface type.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 40px | 700 | Brand shop title |
| `{typography.display-lg}` | 32px | 700 | Home or collection title |
| `{typography.display-md}` | 26px | 700 | Product or saved title |
| `{typography.headline}` | 22px | 700 | Section heading |
| `{typography.card-title}` | 16px | 600 | Merchant or product title |
| `{typography.body}` | 14px | 400 | Price, options, and details |
| `{typography.caption}` | 10px | 400 | Ratings, discounts, and metadata |

### Principles

- Let brand names and product imagery lead.
- Keep price and option labels compact.
- Use bold large type sparingly over merchant hero imagery.
- Keep checkout typography neutral and transaction-focused.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve clear numerals and compact product metadata; avoid decorative store-specific fonts in shared controls.

## Layout

### Spacing System

Use a 4px base, 12px screen gutters, 8–12px product gaps, and 20–24px between merchant collections. Floating navigation needs at least 12px edge clearance.

### Grid & Container

Home uses a vertical feed of large brand canvases with horizontal product strips. Brand shops and saved views use two-column grids. Product detail and checkout use one column.

### Whitespace Philosophy

Use generous breathing room around merchant imagery and compact spacing inside product grids. Checkout removes most atmospheric styling to reduce transaction noise.

## Elevation & Depth

Blurred material, layered imagery, rounded sheets, and shallow shadows create depth. Avoid strong card shadows; the brand canvas and floating nav already establish layers.

### Decorative Depth

Sample color from merchant photography, blur it behind content, and layer white product tiles above it. Use violet glow only around purchase actions, not as a page-wide effect.

## Shapes

### Border Radius Scale

- Product tiles use 12px corners.
- Brand canvases and cart sheets use 24px corners.
- Chips, navigation, and purchase actions are pill-shaped.
- Option swatches may be circular.

### Photography & Illustration Geometry

Use merchant and product photography as the dominant visual language. Isolated products sit on white tiles; campaign imagery may fill a rounded canvas and tint its background.

## Components

### Buttons

Primary purchase actions use violet pills; Buy Now may use black. Secondary actions use translucent or white pills. Native controls must inherit these colors, blur, geometry, and typography.

### Pricing Tabs

Size, color, category, Following, Minis, and Saved use compact pills or swatches. Selection is shown with outline, fill, or a check while preserving the merchant backdrop.

### Cards & Containers

Brand canvases combine merchant identity, product carousel, and Shop All. Product cards show image, price, rating, discount, and heart. Saved collections group products without introducing a new card language.

### Inputs & Forms

Search is the main discovery field. Product options use chips and swatches. Checkout groups shipping, delivery, payment, discount, total, and marketing consent into clean white rows.

### Status & Build Page

Delivery cards show merchant, state, and small product preview. Order progress and maps stay practical. Loading uses the violet mark without adding an ornamental full-screen state.

### Navigation

Use a floating pill for back, home, search, bag, and overflow. Top chips expose profile, notifications, Following, Minis, and Saved. Maintain readable contrast over changing merchant backgrounds.

### Footer

Profile may end with support and Shopify attribution. Commerce flows end with the floating navigation or a safe-area-aware purchase action.

## Do's and Don'ts

### Do

- Let merchant photography shape each browsing area.
- Keep shared actions violet and consistent.
- Maintain readable glass contrast over imagery.
- Switch cart and checkout into focused transaction modes.
- Keep product grids image-led and compact.

### Don't

- Do not force every merchant into one background color.
- Do not let sampled colors replace action semantics.
- Do not overload floating navigation with labels.
- Do not carry atmospheric blur into dense checkout rows.
- Do not expose default blue platform controls.

## Responsive Behavior

### Breakpoints

Keep two product columns where price and title remain readable. Brand carousels may show partial next items. Checkout remains a single column at phone sizes.

### Touch Targets

Navigation, hearts, swatches, size chips, quantity controls, and purchase actions require at least 44px targets.

### Collapsing Strategy

Allow brand and product carousels to scroll horizontally. Keep floating navigation and active cart access visible while browsing.

### Image Behavior

Use `contain` for isolated products and `cover` for merchant hero or campaign imagery. Sample backgrounds from imagery without reducing text contrast.

## Iteration Guide

Start with the neutral canvas, floating glass navigation, brand canvases, and violet action system. Add product detail, cart, checkout, saved, and delivery states before optional discovery surfaces.

## Known Gaps

The reviewed scenarios cover login, home, brand shops, product detail, cart, checkout, following, saved, delivery, profile, and search variants. Tablet behavior, accessibility scaling, dark mode, and every external merchant checkout were not visible.
