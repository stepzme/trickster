<design-context>
---
version: alpha
name: krisha.kz-design-analysis
description: "A bright property marketplace built on white and mist-gray surfaces, black compact type, signature yellow trust markers, sky-blue utility links, and persistent green contact actions. Real-estate photography carries listings while rounded service tiles and restrained object illustrations make the home screen approachable."
colors:
  primary: "#FFE25B"
  on-primary: "#171717"
  primary-hover: "#FFE875"
  primary-focus: "#F2CB2F"
  ink: "#171717"
  ink-muted: "#77777B"
  ink-subtle: "#A6A6AA"
  ink-tertiary: "#C6C6CA"
  canvas: "#FFFFFF"
  surface-1: "#F7F8F9"
  surface-2: "#F0F2F4"
  surface-3: "#E6E9EC"
  surface-4: "#D9DDE1"
  hairline: "#E5E7E9"
  hairline-strong: "#D2D5D8"
  hairline-tertiary: "#B9BDC1"
  inverse-canvas: "#171717"
  inverse-surface-1: "#2A2A2A"
  inverse-surface-2: "#3B3B3B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FFD733"
  semantic-success: "#59C936"
  semantic-overlay: "#171717"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
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
  button-primary: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "#45AC27", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "#6BD64B", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "#4396C7", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px}
  trust-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  segmented-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 4px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 48px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

krisha.kz is a light, information-dense property marketplace. Yellow carries brand and trust, blue marks utilities, and green is reserved for direct seller contact.

**Key Characteristics:**
- White property feed with pale grouped sections.
- Compact cards led by price, dimensions, location, and photography.
- Yellow verification and seller labels.
- Persistent green contact actions on detail pages.
- Friendly illustrated service shortcuts on the home screen.

## Colors

### Brand & Accent

Yellow is the identity layer: launch, service art, verification, badges, and map chips. Blue stays secondary for filters, links, and lightweight actions.

### Surface

White is the main canvas. Very pale gray separates feed groups, location blocks, and analytical sections without heavy cards.

### Text

Near-black carries price and titles; mid-gray carries addresses, dates, views, and explanatory labels.

### Semantic

Green means a direct contact or confirmed positive action. Warm red is limited to alerts and hot-listing indicators.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for listings, forms, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Campaign or launch claim |
| headline | 20px | 700 | Property price and section title |
| card-title | 16px | 600 | Listing title and key attribute |
| body | 13px | 400 | Address and specifications |
| caption | 10px | 400 | Date, views, and navigation |

### Principles

- Price is the strongest repeated type.
- Keep attribute rows short and scannable.
- Use weight before color to create hierarchy.

### Note on Font Substitutes

A neutral system sans is sufficient; preserve compact numerals and clear Cyrillic rendering.

## Layout

### Spacing System

Use a 4px base, 12px list gaps, and 12–16px screen padding.

### Grid & Container

Home shortcuts form a two-column grid. Results are a single vertical feed; similar listings use a two-column grid.

### Whitespace Philosophy

Density supports comparison. Create separation with pale backgrounds and section headers, not oversized gaps.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and details |
| 1 | Pale grouped fill | Home and analytical sections |
| 2 | Subtle border or shadow | Sticky actions and floating map chip |
| 3 | Dark scrim | System prompts and overlays |

### Decorative Depth

Depth comes from property photography and softly shaded service objects; interface surfaces remain mostly flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Trust badge |
| rounded-sm | 8px | Buttons and photo corners |
| rounded-md | 12px | Service tiles and grouped controls |
| rounded-lg | 16px | Promo panels |
| rounded-full | full | Map and compact icon actions |

### Photography & Illustration Geometry

Listing photos use landscape crops with modest rounding. Service art fills rounded pale tiles without competing with labels.

## Components

### Buttons

Use full-width green for calling, bordered white with blue labels for messaging, and yellow pills for map or contextual actions.

### Pricing Tabs

Buy and Rent use a compact two-segment control; selected state is white with a border or subtle lift.

### Cards & Containers

Listing rows combine a landscape image, prominent price, key dimensions, location, badges, and recency. Detail content stacks full-width sections.

### Inputs & Forms

Filters and property-type lists use white rows, chevrons, and thin separators. Search-like controls remain pale and compact.

### Status & Build Page

Trust status is yellow and adjacent to the seller or listing. Price analytics uses a green-to-red horizontal scale with a marked position.

### Navigation

Keep five bottom destinations fixed. Active Home is black; Post is a blue filled circle; other destinations use quiet gray outlines.

### Footer

No footer; persistent contact or bottom navigation owns the safe area.

## Do's and Don'ts

### Do

- Keep price and property facts visible at a glance.
- Use yellow for trust and brand recognition.
- Keep contact actions persistent on long details.
- Let real photography carry inventory.
- Preserve clear filter and map access.

### Don't

- Don't turn every section into a raised card.
- Don't use green decoratively.
- Don't hide seller identity or listing provenance.
- Don't mix illustrated service art into property galleries.
- Don't leave generic iOS styling on segmented controls or contact buttons.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten listing metadata |
| Standard | 375–430px | Default single-column feed |
| Wide | 431px+ | Enlarge imagery and similar-listing cards |

### Touch Targets

Filters, favorite, map, contact, and bottom-navigation targets remain at least 44px.

### Collapsing Strategy

Keep the feed single-column; stack action pairs when width is tight and preserve the persistent primary action.

### Image Behavior

Use aspect-fill for property photos without aggressive crops; galleries remain swipeable and show the current image count.

## Iteration Guide

Tune listing density and contact prominence first, then trust badges, map access, and supporting services.

## Known Gaps

- Posting a listing was not reviewed.
- Messaging behavior was not opened.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
