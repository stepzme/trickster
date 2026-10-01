<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: YS Text, fontSize: 34, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: YS Text, fontSize: 28, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }
  display-md: { fontFamily: YS Text, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: YS Text, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.15 }
  card-title: { fontFamily: YS Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 56 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8 }
  search-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Yandex Market uses a neutral, compact commerce shell so product photography, promotions, price, and delivery information can carry the decision.

# Non-negotiable visual invariants

- The reference consistently shows price, delivery, seller, and return facts readable.
- The reference consistently shows preserve product image integrity.
- Sampled screens consistently use the primary purchase action sticky when useful.
- The reference consistently shows style native controls in the Market system.
- The reference consistently shows a high-density mobile commerce system built on white surfaces.
- The reference consistently shows soft gray search and utility panels.
- The reference consistently shows vivid yellow purchase actions.
- The reference consistently shows green price emphasis.

# Color and surfaces

Keep structural UI white and pale gray. Use yellow for decisive purchase actions, green for favorable price and delivery value, and allow merchandising content to supply secondary color.

### Brand & Accent

Use Market red and yellow in identity and promotional moments; use yellow as the consistent interaction accent for cart and checkout.

### Surface

Use white pages, pale gray search and utility surfaces, and lightly separated product modules. Avoid tinted page backgrounds.

### Text

Use near-black for product names and current prices, medium gray for metadata, and subtle gray for former prices and secondary facts.

### Semantic

Use green for savings, availability, and positive delivery; amber for attention; red for errors and destructive states.

# Typography

Typography is compact, price-forward, and optimized for scanning many competing attributes.

### Font Family

Use YS Text or a neutral system grotesk with strong Cyrillic support.

### Hierarchy

Use 24–28 points page titles, 18–20 points section titles, 15–18 points prices, 13–15 points product names, and 11–12 points metadata.

### Principles

Keep prices and primary actions visually stronger than promotional copy; clamp long names without obscuring the distinguishing words.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; preserve compact metrics and medium-to-bold price weights.

# Screen composition

Use two-column product grids, horizontal recommendation rails, full-width promotional strips, and single-column checkout forms.

### Spacing System

Use a 4 points base, 8 points inside product cards, 12 points between compact modules, 16 points page gutters, and 24 points between major sections.

### Grid & Container

Product grids favor equal-width cards; product detail and checkout use a single reading column with sticky lower actions.

### Whitespace Philosophy

Density is intentional, but every price, image, and CTA needs a clear local group and consistent gutter.

Surface hierarchy observed in the source:

Use shallow sheets, slight shadows, and surface contrast. Do not make every product tile float independently.

### Decorative Depth

Let promotional banners use gradients, cutout products, and branded campaign art; keep transaction surfaces flat and predictable.

# Navigation appearance

Use a five-item bottom bar for Home, Catalog, Cart, Orders, and Profile. Keep search visible on commerce browsing screens.

# Components

### Buttons

Use yellow filled buttons for Add to cart and checkout, pale gray for alternatives, and compact circular yellow buttons inside product grids.

### Cards & Containers

Product cards combine image, discount, current and former price, title, rating, and delivery. Order and profile cards use broader grouped rows.

### Inputs & Forms

Use a prominent pale search field, compact selector rows, and bottom sheets for filters, variants, delivery, and seller options.

# Imagery and icons

Let promotional banners use gradients, cutout products, and branded campaign art; keep transaction surfaces flat and predictable.

Show products on clean square or portrait stages with contain-fit where possible; preserve packaging and merchandising text.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show in-cart count, availability, delivery date, order progress, reward value, and payment status with explicit text and restrained color.

# iOS adaptation

### Touch Targets

Search, filters, favorite, cart, variant, delivery, checkout, and navigation targets require at least 44 points.

### Collapsing Strategy

Keep image, current price, title, rating, delivery, and primary CTA; collapse former price, badges, and secondary seller detail first.

### Image Behavior

Use contain for catalog product imagery, cover for lifestyle promotions, and stable aspect ratios to prevent grid jumps.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not use default platform blue.
- Do not let ads obscure product structure.
- Do not hide total cost behind decoration.
- Do not crop packaging or key product details.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
