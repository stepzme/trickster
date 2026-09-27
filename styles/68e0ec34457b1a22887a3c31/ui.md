<design-context>
---
version: alpha
name: List.am-design-analysis
description: "A broad classifieds marketplace on bright white, organized by clear blue navigation, compact black type, rounded photo cards, pastel promotional tiles, and green or blue seller-contact actions. The system is calm and flexible enough for goods, vehicles, housing, jobs, and services."
colors:
  primary: "#168AF1"
  on-primary: "#FFFFFF"
  primary-hover: "#3BA0F5"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 26px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  promo-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  filter-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7px 10px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

List.am is a flexible classifieds system where blue navigation and photo-led cards support many marketplace verticals without changing interaction grammar.

**Key Characteristics:**
- White canvas with clear blue actions.
- Two-column cards across goods, cars, housing, and jobs.
- Pastel promotional tiles and business rails.
- Green Call and blue Message actions.
- Long stepped posting and promotion flows.

## Colors

### Brand & Accent

Bright blue carries brand, publishing, message, and active navigation. Green is reserved for direct phone contact and positive actions.

### Surface

White is the browsing canvas. Pale lavender-gray supports search, form groups, and promotion cards.

### Text

Near-black carries price and title. Gray supports category, location, seller, and specification metadata.

### Semantic

Green means call or confirmed positive state. Blue remains primary progress; campaign savings can use green, cyan, or violet badges.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for listing, filter, form, and profile information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Verification or promotion claim |
| headline | 20px | 700 | Detail and posting title |
| card-title | 15px | 600 | Price and listing title |
| body | 12px | 400 | Attributes and location |
| caption | 9px | 400 | Chips, badges, and navigation |

### Principles

- Price leads each listing card.
- Keep descriptions compact in grids and expansive on details.
- Maintain readable multilingual text without decorative type.

### Note on Font Substitutes

Inter is a suitable substitute; preserve Armenian, Cyrillic, and Latin coverage.

## Layout

### Spacing System

Use a 4px base, 8px grid gaps, and 10–12px screen padding.

### Grid & Container

Listings use two columns. Business pages and promotions use horizontal rails; details and posting use one column.

### Whitespace Philosophy

Browsing is dense but calm. Increase space for verification, policy, payment, and promotion decisions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Search and listing grid |
| 1 | Pale group fill | Forms and promotion cards |
| 2 | Sticky white action bar | Call and Message |
| 3 | Modal sheet | Focused account actions |

### Decorative Depth

Listing photography and soft 3D promo objects provide depth; ordinary cards stay flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small labels |
| rounded-sm | 8px | Buttons and search |
| rounded-md | 12px | Listing and promo tiles |
| rounded-lg | 16px | Verification and posting groups |
| rounded-full | full | Favorite and central Post control |

### Photography & Illustration Geometry

Listings use near-square aspect-fill photos. Promotional objects are contained inside pastel rounded tiles; verification drawings stay centered.

## Components

### Buttons

Primary progress uses blue filled buttons. Call uses green; Message uses blue. Secondary actions use white with dark or blue outlines.

### Pricing Tabs

Search filters use small pills and horizontal chips. Promotion durations use wide segmented controls with a dark selected state.

### Cards & Containers

Listing cards combine image, favorite, price, title, and location. Detail pages use full-width attribute sections with sticky contact actions.

### Inputs & Forms

Search is a pale field. Posting uses white form groups, dropdowns, validation, image grids, and blue anchored progress actions.

### Status & Build Page

Urgent and promoted status use colored labels. Promotion packages show price and savings in clean stacked cards.

### Navigation

Keep five bottom destinations fixed with an enlarged blue Post control. Native controls must inherit the blue focus and compact geometry.

### Footer

No footer; bottom navigation and sticky contact or posting actions own the safe area.

## Do's and Don'ts

### Do

- Preserve consistent cards across verticals.
- Keep price and contact visible.
- Use blue for progress and messaging.
- Use green only for calls and success.
- Adapt native forms into the shared compact system.

### Don't

- Don't over-brand seller content.
- Don't use heavy shadows around every listing.
- Don't hide location or category filters.
- Don't mix decorative art into ad galleries.
- Don't collapse long posting steps into one crowded screen.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten listing metadata and chips |
| Standard | 375–430px | Default two-column grid |
| Wide | 431px+ | Expand media and posting gutters |

### Touch Targets

Search, filters, favorite, call, message, post, and navigation remain at least 44px.

### Collapsing Strategy

Keep two-column browsing until labels become unreadable, then use one-column rows; forms remain stacked.

### Image Behavior

Use aspect-fill for listings, contain for promotional objects, and preserve full galleries on detail pages.

## Iteration Guide

Tune search and listing comparison first, then contact, posting progression, and promotion clarity.

## Known Gaps

- Final post publication confirmation was not sampled.
- Wallet funding and message deletion were not visually reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
