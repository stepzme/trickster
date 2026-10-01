<design-context>
---
version: 1
platform: iOS
name: Vivid-design-analysis
description: "A bright premium-finance interface built from white space, bold black headings, saturated violet actions, pale-lilac cards, and glossy 3D product metaphors. It makes banking, rewards, and investing feel approachable and collectible."

colors:
  primary: "#8A32F4"
  on-primary: "#FFFFFF"
  primary-pressed: "#6F22D1"
  ink: "#242426"
  ink-muted: "#747478"
  ink-subtle: "#A9A9AE"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F6F4F7"
  accent-lilac: "#E7D9FA"
  hairline: "#E6E4E8"
  semantic-success: "#35B978"
  semantic-warning: "#E9A337"
  semantic-danger: "#E05762"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 750, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  pocket-tile: { backgroundColor: "{colors.accent-lilac}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 0 }
  action-row: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  promo-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58 }
---

# Overview

Vivid pairs strong black headlines and white canvas with saturated violet action and collectible 3D financial objects. Product breadth is organized through pockets, search, and clear bottom navigation.

# Non-negotiable visual invariants

- The reference consistently shows give product objects clear visual ownership.
- The reference consistently shows transactional lists simple.
- Sampled screens consistently use reserve violet for action and brand.
- The reference consistently shows align balances and returns.
- The reference consistently shows a bright premium-finance interface built from white space.
- The reference consistently shows bold black headings.
- The reference consistently shows saturated violet actions.
- The reference consistently shows pale-lilac cards.

# Color and surfaces

### Brand & Accent

Violet owns primary actions, active navigation, and promotional emphasis. Lilac supports product tiles and icon backgrounds.

### Surface

Use white as the default canvas and very pale gray or lavender for grouped rows, search, and cards.

### Text

Charcoal carries headings and values; gray carries account labels and helper copy. White appears on violet promotions and buttons.

### Semantic

Green and red show financial direction or result, amber warns, and violet remains brand action.

# Typography

### Font Family

Use a bold geometric sans with tabular figures for money and rates.

### Hierarchy

Use 32–40 points product messages, 20–25 points page headings, 16–17 points card titles, and 10–14 points detail.

### Principles

Use heavy headings sparingly, align monetary values, and keep supporting copy short inside product tiles.

### Note on Font Substitutes

Use Inter or SF Pro with 700–800 headline weights and tabular numerals.

# Screen composition

### Spacing System

Use a 4 points base, 16 points gutters, 12 points card gaps, and 24–32 points between product sections.

### Grid & Container

Pockets use a two-column tile grid above cards. Payments use grouped actions; Rewards and Invest use vertical sections and horizontal rails.

### Whitespace Philosophy

Give headings and product art room to breathe. Dense transaction data should stay in flat lists rather than decorative tiles.

Surface hierarchy observed in the source:

Use subtle card lift and soft contact shadow beneath 3D assets. Most transactional surfaces remain flat.

### Decorative Depth

Use violet gradients, translucent glows, and glossy miniature objects in product and promo cards. Avoid decorative depth in timeline rows.

# Navigation appearance

Use five bottom destinations for Pockets, Timeline, Payments, Rewards, and Invest. Keep local categories inside each destination.

# Components

### Buttons

Primary actions are filled violet rectangles; secondary actions are white or pale rows. Native controls must inherit violet focus and rounded geometry.

### Cards & Containers

Pocket tiles pair one 3D object, product name, and balance or benefit. Transaction rows are flatter and denser.

### Inputs & Forms

Registration and payments use pale filled fields with strong focus. Search remains full-width and quiet.

# Imagery and icons

Use violet gradients, translucent glows, and glossy miniature objects in product and promo cards. Avoid decorative depth in timeline rows.

Center glossy 3D objects on square gradient tiles with safe margins. Marketing photography, when present, uses restrained rounded crops.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Pocket balance, card availability, reward earned, planned payment, verification, and order state appear beside the related product.

# iOS adaptation

### Touch Targets

Pocket tiles, payment actions, filters, category chips, navigation, and order controls require at least 44 points targets.

### Collapsing Strategy

Keep balances, primary payment actions, and current product visible. Collapse secondary benefits and analysis into detail pages.

### Image Behavior

Use `contain` for 3D product metaphors and logos; use `cover` only for lifestyle reward photography.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not add 3D art to every row.
- Do not make gains violet.
- Do not crowd product tiles with copy.
- Do not expose default native accents.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

The inspected catalog documents 45 flows across onboarding, pockets, timeline, payments, rewards, investing, support, and account states. Some transactional confirmations are video-only or less represented.

</design-context>
