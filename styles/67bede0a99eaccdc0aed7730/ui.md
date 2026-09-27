<design-context>
---
version: alpha
name: Yandex-Market-design-analysis
description: "A high-density mobile commerce system built on white surfaces, soft gray search and utility panels, vivid yellow purchase actions, green price emphasis, and image-led product cards. The shell stays neutral while promotional banners and product photography supply color."

colors:
  primary: "#FFCC00"
  on-primary: "#171717"
  primary-pressed: "#E6B800"
  price: "#159447"
  ink: "#171717"
  ink-muted: "#6F7074"
  ink-subtle: "#A7A8AC"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F5"
  surface-3: "#E8E9EB"
  hairline: "#DADCE0"
  semantic-success: "#159447"
  semantic-warning: "#F2A900"
  semantic-danger: "#E64242"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 34px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: YS Text, fontSize: 28px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5px }
  display-md: { fontFamily: YS Text, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: YS Text, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.15px }
  card-title: { fontFamily: YS Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 56px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Yandex Market uses a neutral, compact commerce shell so product photography, promotions, price, and delivery information can carry the decision.

## Colors

Keep structural UI white and pale gray. Use yellow for decisive purchase actions, green for favorable price and delivery value, and allow merchandising content to supply secondary color.

### Brand & Accent

Use Market red and yellow in identity and promotional moments; use yellow as the consistent interaction accent for cart and checkout.

### Surface

Use white pages, pale gray search and utility surfaces, and lightly separated product modules. Avoid tinted page backgrounds.

### Text

Use near-black for product names and current prices, medium gray for metadata, and subtle gray for former prices and secondary facts.

### Semantic

Use green for savings, availability, and positive delivery; amber for attention; red for errors and destructive states.

## Typography

Typography is compact, price-forward, and optimized for scanning many competing attributes.

### Font Family

Use YS Text or a neutral system grotesk with strong Cyrillic support.

### Hierarchy

Use 24–28px page titles, 18–20px section titles, 15–18px prices, 13–15px product names, and 11–12px metadata.

### Principles

Keep prices and primary actions visually stronger than promotional copy; clamp long names without obscuring the distinguishing words.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; preserve compact metrics and medium-to-bold price weights.

## Layout

Use two-column product grids, horizontal recommendation rails, full-width promotional strips, and single-column checkout forms.

### Spacing System

Use a 4px base, 8px inside product cards, 12px between compact modules, 16px page gutters, and 24px between major sections.

### Grid & Container

Product grids favor equal-width cards; product detail and checkout use a single reading column with sticky lower actions.

### Whitespace Philosophy

Density is intentional, but every price, image, and CTA needs a clear local group and consistent gutter.

## Elevation & Depth

Use shallow sheets, slight shadows, and surface contrast. Do not make every product tile float independently.

### Decorative Depth

Let promotional banners use gradients, cutout products, and branded campaign art; keep transaction surfaces flat and predictable.

## Shapes

Use rounded search fields, cards, image frames, pills, and circular cart controls.

### Border Radius Scale

Use 10px for chips, 14px for inputs and buttons, 18–22px for cards and sheets, and full circles for icon actions.

### Photography & Illustration Geometry

Show products on clean square or portrait stages with contain-fit where possible; preserve packaging and merchandising text.

## Components

Controls may use native mechanics but must inherit Market yellow, neutral surfaces, radii, density, and typography.

### Buttons

Use yellow filled buttons for Add to cart and checkout, pale gray for alternatives, and compact circular yellow buttons inside product grids.

### Pricing Tabs

Use rounded chips for filters, delivery modes, variants, and payment options; selected states gain stronger contrast rather than extra decoration.

### Cards & Containers

Product cards combine image, discount, current and former price, title, rating, and delivery. Order and profile cards use broader grouped rows.

### Inputs & Forms

Use a prominent pale search field, compact selector rows, and bottom sheets for filters, variants, delivery, and seller options.

### Status & Build Page

Show in-cart count, availability, delivery date, order progress, reward value, and payment status with explicit text and restrained color.

### Navigation

Use a five-item bottom bar for Home, Catalog, Cart, Orders, and Profile. Keep search visible on commerce browsing screens.

### Footer

There is no footer; support, settings, payments, addresses, and legal links belong to Profile.

## Do's and Don'ts

Prioritize trustworthy shopping decisions over promotional spectacle.

### Do

- Keep price, delivery, seller, and return facts readable.
- Preserve product image integrity.
- Keep the primary purchase action sticky when useful.
- Style native controls in the Market system.

### Don't

- Do not use default platform blue.
- Do not let ads obscure product structure.
- Do not hide total cost behind decoration.
- Do not crop packaging or key product details.

## Responsive Behavior

Scale the product grid and comparison density while retaining the search and purchase hierarchy.

### Breakpoints

Phones use two-column grids and horizontal rails; larger screens may add columns and a side-by-side product detail layout.

### Touch Targets

Search, filters, favorite, cart, variant, delivery, checkout, and navigation targets require at least 44px.

### Collapsing Strategy

Keep image, current price, title, rating, delivery, and primary CTA; collapse former price, badges, and secondary seller detail first.

### Image Behavior

Use contain for catalog product imagery, cover for lifestyle promotions, and stable aspect ratios to prevent grid jumps.

## Iteration Guide

Start with Home, search, results, product detail, cart, checkout, order confirmation, and Profile. Add loyalty, seller comparison, rich promotions, and advanced filters next.

## Known Gaps

Thirty-nine available flow structures and representative screens across launch, discovery, search, product detail, ordering, and Profile were reviewed. Merchant-specific media and every promotional variation were not exhaustively sampled.

</design-context>

Use the design system above for all UI you generate.
