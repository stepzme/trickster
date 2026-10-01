<design-context>
---
version: 1
platform: iOS
name: krisha.kz-design-analysis
description: "A bright property marketplace built on white and mist-gray surfaces, black compact type, signature yellow trust markers, sky-blue utility links, and persistent green contact actions. Real-estate photography carries listings while rounded service tiles and restrained object illustrations make the home screen approachable."
colors:
  primary: "#FFE25B"
  on-primary: "#171717"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 24
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
  button-primary: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "#45AC27", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "#4396C7", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8}
  trust-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 6]}
  segmented-control: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 4}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

krisha.kz is a light, information-dense property marketplace. Yellow carries brand and trust, blue marks utilities, and green is reserved for direct seller contact.

**Key Characteristics:**
- White property feed with pale grouped sections.
- Compact cards led by price, dimensions, location, and photography.
- Yellow verification and seller labels.
- Persistent green contact actions on detail pages.
- Friendly illustrated service shortcuts on the home screen.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White property feed with pale grouped sections.
- The reviewed screens show this treatment: Compact cards led by price, dimensions, location, and photography.
- The reviewed screens show this treatment: Yellow verification and seller labels.
- The reviewed screens show this treatment: Persistent green contact actions on detail pages.
- The reviewed screens show this treatment: Friendly illustrated service shortcuts on the home screen.

# Color and surfaces

### Brand & Accent

Yellow is the identity layer: launch, service art, verification, badges, and map chips. Blue stays secondary for filters, links, and lightweight actions.

### Surface

White is the main canvas. Very pale gray separates feed groups, location blocks, and analytical sections without heavy cards.

### Text

Near-black carries price and titles; mid-gray carries addresses, dates, views, and explanatory labels.

### Semantic

Green means a direct contact or confirmed positive action. Warm red is limited to alerts and hot-listing indicators.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for listings, forms, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Campaign or launch claim |
| headline | 20pt | 700 | Property price and section title |
| card-title | 16pt | 600 | Listing title and key attribute |
| body | 13pt | 400 | Address and specifications |
| caption | 10pt | 400 | Date, views, and navigation |

### Principles

- Price is the strongest repeated type.
- Keep attribute rows short and scannable.
- Use weight before color to create hierarchy.

### Note on Font Substitutes

A neutral system sans is sufficient; preserve compact numerals and clear Cyrillic rendering.

# Screen composition

### Grid & Container

Home shortcuts form a two-column grid. Results are a single vertical feed; similar listings use a two-column grid.

### Whitespace Philosophy

Density supports comparison. Create separation with pale backgrounds and section headers, not oversized gaps.

# Navigation appearance

Keep five bottom destinations fixed. Active Home is black; Post is a blue filled circle; other destinations use quiet gray outlines.

# Components

### Buttons

Use full-width green for calling, bordered white with blue labels for messaging, and yellow pills for map or contextual actions.

Buy and Rent use a compact two-segment control; selected state is white with a border or subtle lift.

### Cards & Containers

Listing rows combine a landscape image, prominent price, key dimensions, location, badges, and recency. Detail content stacks full-width sections.

### Inputs & Forms

Filters and property-type lists use white rows, chevrons, and thin separators. Search-like controls remain pale and compact.

### Status & Build Page

Trust status is yellow and adjacent to the seller or listing. Price analytics uses a green-to-red horizontal scale with a marked position.

### Navigation

Keep five bottom destinations fixed. Active Home is black; Post is a blue filled circle; other destinations use quiet gray outlines.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and details |
| 1 | Pale grouped fill | Home and analytical sections |
| 2 | Subtle border or shadow | Sticky actions and floating map chip |
| 3 | Dark scrim | System prompts and overlays |

### Decorative Depth

Depth comes from property photography and softly shaded service objects; interface surfaces remain mostly flat.

# States

Trust status is yellow and adjacent to the seller or listing. Price analytics uses a green-to-red horizontal scale with a marked position.

# iOS adaptation

### Touch Targets

Filters, favorite, map, contact, and bottom-navigation targets remain at least 44pt.

### Collapsing Strategy

Keep the feed single-column; stack action pairs when width is tight and preserve the persistent primary action.

### Image Behavior

Use aspect-fill for property photos without aggressive crops; galleries remain swipeable and show the current image count.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
