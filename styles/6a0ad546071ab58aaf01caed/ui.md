<design-context>
---
version: 1
platform: iOS
name: Buy-am-design-analysis
description: "A broad commerce and delivery super-app with a white canvas, pale-gray search fields, black hierarchy, hot-pink actions, retailer photography, and compact five-tab navigation. Restaurants, supermarkets, stores, pharmacy, services, mall, checkout, wallet, and order tracking use familiar cards and sheets."
colors:
  primary: "#E91E63"
  on-primary: "#FFFFFF"
  primary-soft: "#FDE8F0"
  accent: "#B51E55"
  accent-secondary: "#F5C542"
  ink: "#202124"
  ink-muted: "#74777B"
  ink-subtle: "#A9ACAF"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F5"
  hairline: "#E3E5E7"
  semantic-success: "#2E9B63"
  semantic-danger: "#D63A45"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
---

# Overview

Buy.am presents several commerce verticals through one search, address, category, basket, and order model. Photography and merchant branding carry discovery; pink controls carry commitment.

**Key Characteristics:**
- White marketplace canvas.
- Hot-pink commerce actions.
- Photo-led merchant and product cards.
- Pale-gray search and address fields.
- Home, Restaurants, Mall, Basket, and Profile navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White marketplace canvas.
- The reviewed screens show this treatment: Hot-pink commerce actions.
- The reviewed screens show this treatment: Photo-led merchant and product cards.
- The reviewed screens show this treatment: Pale-gray search and address fields.
- The reviewed screens show this treatment: Home, Restaurants, Mall, Basket, and Profile navigation.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Checkout, basket, selection, and active navigation.
- **Accent** ({colors.accent}): Price and focused commerce links.
- **Secondary Accent** ({colors.accent-secondary}): Ratings and tracking milestones.

### Surface
- **Canvas** ({colors.canvas}): All discovery and transaction surfaces.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family

- **SF Pro Display** — section and merchant headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36pt bold for major statements, 22pt bold for screen headings, 16pt semibold for cards, 14pt regular for detail, and 15pt semibold for primary actions.

### Principles

- Lead with vertical, merchant, and address.
- Keep price, ETA, and rating together.
- Use merchant photography for recognition.
- Expose fees before checkout.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt edge gutters, 12pt control gaps, and 16pt card padding.

### Grid & Container

Home stacks search, address, vertical pills, banners, favorite brands, and recommendations. Category views use photo cards; checkout and tracking use one-column sheets.

### Whitespace Philosophy

Keep top-level verticals separated, but allow dense merchant and product lists within each section.

# Navigation appearance

Home, Restaurants, Mall, Basket, and Profile are stable; vertical search and checkout stay focused.

# Components

### Buttons

Pink full-width pills commit checkout and payment. Small plus/minus controls stay local to products.

Commerce verticals use outline pills; the five bottom destinations use a pink selected state.

### Cards & Containers

Merchant cards pair image, rating, fee, and ETA. Basket cards keep quantity, price, delivery, packaging, and total visible.

### Inputs & Forms

Search, address, comment, promo, gift card, and payment use large pale fields with clear labels.

### Status & Build Page

Show accepted, processing, delivery stages, completed, cancelled, and rating state as text plus a simple timeline.

### Navigation

Home, Restaurants, Mall, Basket, and Profile are stable; vertical search and checkout stay focused.

Persistent navigation supports browsing; basket and payment actions replace it during checkout.

# Imagery and icons

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use soft card borders and occasional sheet elevation. Merchant photography provides visual richness.

# States

Show accepted, processing, delivery stages, completed, cancelled, and rating state as text plus a simple timeline.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44pt.

### Collapsing Strategy

Preserve address, vertical, basket total, and primary action. Remove secondary promotions before product data.

### Image Behavior

Crop around the merchant, dish, or product; keep ratings, delivery metadata, price, and controls in the card body.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Keep vertical context visible.
- Show all order fees.
- Use real merchant imagery.
- Retain order history and reorder.
- Keep basket badge current.

### Don't

- Don't invent a separate visual system per vertical.
- Don't hide delivery windows.
- Don't place text over busy photos.
- Don't use promotional banners as status.
- Don't merge wallet balance with order total.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 38 available flow names were inventoried; main page, ordering, and order tracking were image-reviewed.
- Live courier map, cross-vertical fulfillment, and payment completion were not fully assessed.

</design-context>
