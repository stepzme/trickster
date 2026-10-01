<design-context>
---
version: 1
platform: iOS
name: Wildberries-design-analysis
description: "A high-density marketplace built from hot magenta navigation, pale lilac search, white canvas, two-column product grids, large promotional carousels, compact discount metadata, and direct violet or orange purchase actions. Product photography carries most of the color while the chrome stays bright, fast, and conversion-oriented."

colors:
  primary: "#D900E5"
  on-primary: "#FFFFFF"
  primary-pressed: "#B500C2"
  ink: "#171719"
  ink-muted: "#77747C"
  ink-subtle: "#ABA8AF"
  canvas: "#FFFFFF"
  surface-1: "#F8F7FA"
  surface-2: "#F4E9FB"
  accent-orange: "#FF7B18"
  discount: "#EF2D89"
  price: "#D81BC9"
  hairline: "#E9E6EC"
  semantic-success: "#20A46E"
  semantic-warning: "#E4A331"
  semantic-danger: "#DC4C59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 9, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 9, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.15 }
  mono: { fontFamily: System Mono, fontSize: 11, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 16]}
  button-buy-now: { backgroundColor: "{colors.accent-orange}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 16]}
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [12, 14]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0 }
  promo-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.headline}", rounded: "{rounded.lg}", padding: 16 }
---

# Overview

Wildberries maximizes product density while preserving quick comparison. Search, discount, price, delivery date, rating, and cart action stay visible around every product image.

# Non-negotiable visual invariants

- Sampled screens consistently use comparison facts in stable card positions.
- The reference consistently shows distinguish cart and immediate purchase actions.
- The reference consistently shows make delivery timing visible early.
- The reference consistently shows recommendations without interrupting checkout.
- Navigation consistently uses a high-density marketplace built from hot magenta navigation.
- The reference consistently shows pale lilac search.
- Sampled screens consistently use white canvas.
- The reference consistently shows two-column product grids.

# Color and surfaces

### Brand & Accent

Hot magenta owns brand, active navigation, search tint, cart, and standard purchase. Orange distinguishes Buy now and final checkout.

### Surface

Use white canvas, pale lilac search and promotion shells, and very light gray grouped checkout cards.

### Text

Use near-black for product names and totals, magenta for current price or discount, gray for former price and metadata, and white on saturated actions.

### Semantic

Use green for price decrease or free return, amber for rating and urgency, red for problems, and magenta only for marketplace action.

# Typography

### Font Family

Use a compact modern system sans with tabular figures for prices, quantities, and dates.

### Hierarchy

Use 25–32 points page headings, 20 points section headings, 13–17 points key values, and 9–12 points dense product metadata.

### Principles

Prioritize current price, delivery date, product identity, rating, and quantity. Previous price and promotion labels remain smaller.

### Note on Font Substitutes

Use SF Pro or Inter with tight line-height and tabular numerals.

# Screen composition

### Spacing System

Use a 4 points base, 6–8 points product-grid gutters, 12–16 points page gutters, and 20–24 points between major modules.

### Grid & Container

Home and search use two-column product grids beneath search and banners. Product detail uses a large gallery and sticky split action; checkout uses one column.

### Whitespace Philosophy

Allow dense product browsing but keep each card's price and action zone consistent. Commitment screens should reduce recommendations around the primary task.

Surface hierarchy observed in the source:

Use light grouped cards, sticky action bars, and mild sheet shadow. Product photography and banner composition provide most depth.

### Decorative Depth

Use 3D objects, collage, or illustration only inside advertising banners. Keep product, cart, checkout, and tracking surfaces functional.

# Navigation appearance

Use a five-item bottom bar for Home/Search, Catalog, Wallet or services, Cart, and Profile. Keep counts as small magenta badges.

# Components

### Buttons

Standard cart actions are violet-magenta; Buy now and final checkout are orange. Native controls must inherit these fills, radii, and compact type.

### Cards & Containers

Product cards contain image, favorite, visual-search badge, discount, price, former price, seller, title, rating, review count, and delivery action.

### Inputs & Forms

Search is a wide pale-lilac field with camera action. Checkout groups address, delivery, payment, contact, and subscription choices into clear rows.

# Imagery and icons

Use 3D objects, collage, or illustration only inside advertising banners. Keep product, cart, checkout, and tracking surfaces functional.

Use consistent near-square product crops and wide promotional banners. Preserve product scale and leave overlays within safe corners.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Use delivery date, stock urgency, order processing, in-transit, pickup code, courier, cancellation, refund, rating, and cart count states in context.

# iOS adaptation

### Touch Targets

Search, camera, filters, product cards, favorites, cart actions, variants, address, payment, tracking, and navigation require at least 44 points targets.

### Collapsing Strategy

Keep image, price, variant, delivery, seller, and purchase action visible. Collapse description, history, reviews, questions, and recommendations.

### Image Behavior

Use `cover` for product and campaign media with consistent card ratios; use `contain` when product silhouette must remain complete.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not let ad styling leak into transactional forms.
- Do not hide previous price or discount conditions.
- Do not mix inconsistent product-image ratios.
- Do not leave default native blue accents.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

All 31 catalog flows were reviewed by structure with complete representative scenarios across launch, Home, search, product detail, checkout, and tracking. Advertising content varies widely and is not treated as one reusable illustration system.

</design-context>
