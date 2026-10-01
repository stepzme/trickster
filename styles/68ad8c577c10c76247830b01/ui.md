<design-context>
---
version: 1
platform: iOS
name: Sportmaster-design-analysis
description: "A content-rich sports marketplace built from white commerce surfaces, a strong cobalt action color, navy promotional frames, a floating pill-like navigation dock, and energetic product photography. Rounded service tiles and bright 3D icons add playfulness without weakening the practical product and checkout hierarchy."

colors:
  primary: "#1559E8"
  on-primary: "#FFFFFF"
  primary-pressed: "#0D47C7"
  navy: "#232B44"
  accent-coral: "#FF6D66"
  accent-violet: "#735DFF"
  ink: "#17191D"
  ink-muted: "#6F737B"
  ink-subtle: "#A6A9AF"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F0F2F5"
  hairline: "#E2E5E9"
  semantic-success: "#28AE62"
  semantic-warning: "#F0B52C"
  semantic-danger: "#E84C55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8 }
  promo-card: { backgroundColor: "{colors.navy}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 12 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 58 }
---

# Overview

Sportmaster is a practical sports marketplace with energetic campaign content. White shopping surfaces and cobalt actions provide consistency while navy promotional frames, large photography, and playful service icons carry activity and scale.

# Non-negotiable visual invariants

- Sampled screens consistently use cobalt as the action anchor.
- The reference consistently shows photography to show fit and activity.
- Navigation consistently uses preserve the floating navigation dock.
- The reference consistently shows sizes, delivery, and totals explicit.
- The reference consistently shows a content-rich sports marketplace built from white commerce surfaces.
- Sampled screens consistently use a strong cobalt action color.
- The reference consistently shows navy promotional frames.
- Navigation consistently uses a floating pill-like navigation dock.

# Color and surfaces

### Brand & Accent

Cobalt is the operational accent; navy frames large promotions. Coral and violet belong to campaigns and service art.

### Surface

White supports products and forms. Cool gray separates modules, while navy may contain discovery content.

### Text

Near-black carries names, prices, and headings. Gray carries specifications, availability, and old prices.

### Semantic

Green confirms availability, yellow supports ratings and bonus currency, and red marks discounts or destructive actions.

# Typography

### Font Family

Use a neutral, sturdy system sans. Campaign art may contain bolder display lettering, but product UI remains restrained.

### Hierarchy

Use 21 points screen headings, 15–17 points card titles, 14 points body, and 10–12 points catalog and loyalty metadata.

### Principles

Keep product names, sizes, availability, and delivery easy to scan. Use bold weight for actions and current prices.

### Note on Font Substitutes

SF Pro or Inter are suitable. Maintain tabular clarity for prices and loyalty amounts.

# Screen composition

### Spacing System

Use a 4 points base, 12 points page gutters, 8–12 points grid gaps, and 20–24 points between editorial blocks.

### Grid & Container

Home stacks horizontal rails and large promos. Catalog uses a visual tile grid; product and checkout screens are long single columns.

### Whitespace Philosophy

Use dense discovery rails but keep product media and transaction summaries isolated on white.

Surface hierarchy observed in the source:

The floating bottom dock, sticky action bars, and soft rounded cards create depth. Avoid strong shadow on product tiles.

### Decorative Depth

Use navy frames, saturated campaign fields, and toy-like 3D service objects. Keep commerce chrome flat and white.

# Navigation appearance

Use a floating white five-item dock with an emphasized central Services action. Focused tasks use a simple top bar.

# Components

### Buttons

Primary actions are cobalt with white text and modest rounding. Native controls must inherit the same cobalt, geometry, and type weight.

### Cards & Containers

Product cards foreground media and price. Promo cards pair large imagery with bold copy; account and service groups use white rounded panels.

### Inputs & Forms

Search and address fields are cool gray or white with clear outlines on focus. Checkout groups address, promo, bonuses, totals, and payment linearly.

# Imagery and icons

Use navy frames, saturated campaign fields, and toy-like 3D service objects. Keep commerce chrome flat and white.

Use full-bleed lifestyle photography for product heroes, clean cutouts for catalog categories, and centered 3D objects for service tiles.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Availability, delivery timing, profile completion, discounts, and bonus accrual appear inline with the affected item and use explicit text.

# iOS adaptation

### Touch Targets

Size cells, favorite actions, dock items, service tiles, and checkout controls require at least 44 points targets.

### Collapsing Strategy

Allow brands and sports to scroll horizontally. Keep price and purchase actions sticky on long product and checkout screens.

### Image Behavior

Use `cover` for lifestyle and campaign images and `contain` for product or category cutouts. Preserve garment and equipment proportions.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not let campaign colors leak into transaction states.
- Do not hide key commerce data beneath imagery.
- Do not overuse mascot art in product grids.
- Do not expose default platform-blue controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

The reviewed scenarios cover Home, Catalog, product details, reviews, checkout, Services, activity tools, loyalty, and Account. Tablet behavior and all empty or error states were not visible.

</design-context>
