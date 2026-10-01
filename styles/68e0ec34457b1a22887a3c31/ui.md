<design-context>
---
version: 1
platform: iOS
name: List.am-design-analysis
description: "A broad classifieds marketplace on bright white, organized by clear blue navigation, compact black type, rounded photo cards, pastel promotional tiles, and green or blue seller-contact actions. The system is calm and flexible enough for goods, vehicles, housing, jobs, and services."
colors:
  primary: "#168AF1"
  on-primary: "#FFFFFF"
  primary-focus: "#0B70C8"
  ink: "#17171B"
  ink-muted: "#74747C"
  ink-subtle: "#A8A8AF"
  ink-tertiary: "#CACACF"
  canvas: "#FFFFFF"
  surface-1: "#F7F6F8"
  surface-2: "#EFEEF1"
  surface-3: "#E5E4E8"
  surface-4: "#DAD9DE"
  hairline: "#E7E6EA"
  hairline-strong: "#D2D1D7"
  hairline-tertiary: "#B9B8C0"
  inverse-canvas: "#0B263A"
  inverse-surface-1: "#17384E"
  inverse-surface-2: "#254B62"
  inverse-ink: "#FFFFFF"
  brand-secure: "#71A9FF"
  semantic-success: "#00D96B"
  semantic-overlay: "#17171B"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 26
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  promo-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  filter-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [7, 10]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

List.am is a flexible classifieds system where blue navigation and photo-led cards support many marketplace verticals without changing interaction grammar.

**Key Characteristics:**
- White canvas with clear blue actions.
- Two-column cards across goods, cars, housing, and jobs.
- Pastel promotional tiles and business rails.
- Green Call and blue Message actions.
- Long stepped posting and promotion flows.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas with clear blue actions.
- The reference consistently shows two-column cards across goods, cars, housing, and jobs.
- The reference consistently shows pastel promotional tiles and business rails.
- The reference consistently shows green Call and blue Message actions.
- The reference consistently shows long stepped posting and promotion flows.

# Color and surfaces

### Brand & Accent

Bright blue carries brand, publishing, message, and active navigation. Green is reserved for direct phone contact and positive actions.

### Surface

White is the browsing canvas. Pale lavender-gray supports search, form groups, and promotion cards.

### Text

Near-black carries price and title. Gray supports category, location, seller, and specification metadata.

### Semantic

Green means call or confirmed positive state. Blue remains primary progress; campaign savings can use green, cyan, or violet badges.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for listing, filter, form, and profile information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Verification or promotion claim |
| headline | 20 points | 700 | Detail and posting title |
| card-title | 15 points | 600 | Price and listing title |
| body | 12 points | 400 | Attributes and location |
| caption | 9 points | 400 | Chips, badges, and navigation |

### Principles

- Price leads each listing card.
- Keep descriptions compact in grids and expansive on details.
- Maintain readable multilingual text without decorative type.

### Note on Font Substitutes

Inter is a suitable substitute; preserve Armenian, Cyrillic, and Latin coverage.

# Screen composition

### Spacing System

Use a 4 points base, 8 points grid gaps, and 10–12 points screen padding.

### Grid & Container

Listings use two columns. Business pages and promotions use horizontal rails; details and posting use one column.

### Whitespace Philosophy

Browsing is dense but calm. Increase space for verification, policy, payment, and promotion decisions.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Search and listing grid |
| 1 | Pale group fill | Forms and promotion cards |
| 2 | Sticky white action bar | Call and Message |
| 3 | Modal sheet | Focused account actions |

### Decorative Depth

Listing photography and soft 3D promo objects provide depth; ordinary cards stay flat.

# Navigation appearance

Keep five bottom destinations fixed with an enlarged blue Post control. Native controls must inherit the blue focus and compact geometry.

# Components

### Buttons

Primary progress uses blue filled buttons. Call uses green; Message uses blue. Secondary actions use white with dark or blue outlines.

### Cards & Containers

Listing cards combine image, favorite, price, title, and location. Detail pages use full-width attribute sections with sticky contact actions.

### Inputs & Forms

Search is a pale field. Posting uses white form groups, dropdowns, validation, image grids, and blue anchored progress actions.

# Imagery and icons

Listing photography and soft 3D promo objects provide depth; ordinary cards stay flat.

Listings use near-square aspect-fill photos. Promotional objects are contained inside pastel rounded tiles; verification drawings stay centered.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Urgent and promoted status use colored labels. Promotion packages show price and savings in clean stacked cards.

# iOS adaptation

### Touch Targets

Search, filters, favorite, call, message, post, and navigation remain at least 44 points.

### Collapsing Strategy

Keep two-column browsing until labels become unreadable, then use one-column rows; forms remain stacked.

### Image Behavior

Use aspect-fill for listings, contain for promotional objects, and preserve full galleries on detail pages.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't over-brand seller content.
- Don't use heavy shadows around every listing.
- Don't hide location or category filters.
- Don't mix decorative art into ad galleries.
- Don't collapse long posting steps into one crowded screen.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Final post publication confirmation was not sampled.
- Wallet funding and message deletion were not visually reviewed.
- Tablet and landscape layouts were not represented.

</design-context>
