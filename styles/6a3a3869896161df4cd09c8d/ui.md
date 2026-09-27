<design-context>
---
version: alpha
name: Kuper-design-analysis
description: "A dense multi-store delivery marketplace on white and cool-gray grouped surfaces, anchored by near-black pill controls and a sharp electric-green accent. Product cutouts, merchant logos, and compact horizontal rails carry discovery; checkout becomes a calm sequence of rounded white sections with persistent dark actions."
colors:
  primary: "#171518"
  on-primary: "#FFFFFF"
  primary-hover: "#302D31"
  primary-focus: "#090809"
  ink: "#19171A"
  ink-muted: "#747176"
  ink-subtle: "#A5A2A7"
  ink-tertiary: "#C6C3C8"
  canvas: "#FFFFFF"
  surface-1: "#F6F5F7"
  surface-2: "#EFEEF1"
  surface-3: "#E5E3E7"
  surface-4: "#DAD7DC"
  hairline: "#E9E7EB"
  hairline-strong: "#D5D2D7"
  hairline-tertiary: "#BBB7BE"
  inverse-canvas: "#171518"
  inverse-surface-1: "#2B282C"
  inverse-surface-2: "#403C41"
  inverse-ink: "#FFFFFF"
  brand-secure: "#00E982"
  semantic-success: "#00EA80"
  semantic-overlay: "#171518"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.9px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 18px
  xl: 22px
  xxl: 28px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  merchant-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  department-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 11px 14px}
  checkout-section: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Kuper is a compact delivery marketplace with strong black controls, electric-green brand moments, and image-led departments across restaurants, groceries, and general goods.

**Key Characteristics:**
- Address-first discovery.
- Dense horizontal rails and merchant lists.
- Dark pill controls and cart actions.
- Cool-gray grouped surfaces with rounded white sections.
- Isolated product objects and merchant photography.

## Colors

### Brand & Accent

Near-black is the main control color. Electric green is a selective brand, positive-state, and feedback accent rather than a general surface fill.

### Surface

White carries content; cool pale gray separates home modules, cart groups, and checkout sections.

### Text

Near-black carries headings, prices, and actions. Mid-gray supports delivery terms and secondary facts; green highlights benefits.

### Semantic

Green marks favorable delivery, bonuses, selected positive states, and confirmation. Merchant campaign colors remain confined to their own assets.

## Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for dense catalog, delivery, and checkout information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Empty-state or campaign claim |
| headline | 20px | 700 | Store and checkout heading |
| card-title | 16px | 600 | Merchant, product, or section title |
| body | 13px | 400 | Terms and form values |
| caption | 10px | 400 | Times, badges, and navigation |

### Principles

- Lead with merchant, price, and delivery time.
- Keep labels compact and left aligned.
- Use bold selectively for decisions and totals.

### Note on Font Substitutes

Inter is a suitable cross-platform substitute; preserve dense numeral spacing and clear Cyrillic.

## Layout

### Spacing System

Use a 4px base, 8–12px rail gaps, and 12–16px screen padding.

### Grid & Container

Home combines horizontal shortcut rails with vertical merchant lists. Checkout switches to a single stacked column of rounded groups.

### Whitespace Philosophy

Discovery is deliberately dense. Increase space only around checkout decisions, totals, and empty-state messages.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Merchant and product content |
| 1 | Pale grouped fill | Home modules and checkout background |
| 2 | Floating dark pill | Cart and anchored actions |
| 3 | White modal sheet over scrim | Feedback and focused selectors |

### Decorative Depth

Use merchant photography, object cutouts, and soft shadows. Interface elevation remains subtle except for the floating cart.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Small tags |
| rounded-sm | 10px | Product rows and inputs |
| rounded-md | 14px | Department and merchant tiles |
| rounded-lg | 18px | Checkout sections |
| rounded-pill | full | Buttons, segments, cart chip |

### Photography & Illustration Geometry

Departments use isolated product objects within pale rounded tiles. Merchant assets stay in their original rectangles; catalog items use contained pack shots.

## Components

### Buttons

Primary actions are near-black full-width pills. White secondary pills use black labels; electric green is reserved for positive or branded actions.

### Pricing Tabs

Delivery and pickup use a wide two-segment control: selected is black with white type, default is pale with black type.

### Cards & Containers

Merchant rows combine logo, rating, delivery time, and offer. Cart items remain compact; checkout decisions are grouped in separate white rounded sections.

### Inputs & Forms

Search is a pale pill. Address and payment inputs use thin rules or white rows, while selected cards receive a dark outline.

### Status & Build Page

Delivery benefits and bonuses use green. Feedback uses a white bottom sheet with expressive emoji choices and a green response action.

### Navigation

Home navigation is shortcut-led; store pages use a dedicated five-item bottom bar. All native controls must inherit Kuper's black pills, rounded sections, and green accent.

### Footer

No footer; bottom navigation or a persistent total/action row owns the lower safe area.

## Do's and Don'ts

### Do

- Keep address and delivery terms visible.
- Use black pills for commitment actions.
- Preserve dense but structured discovery rails.
- Confine merchant colors to merchant content.
- Keep totals and next steps persistent.

### Don't

- Don't flood ordinary UI with green.
- Don't wrap every merchant in a heavy shadow.
- Don't hide delivery mode or time.
- Don't mix cart decisions into discovery rails.
- Don't leave segmented controls in generic native styling.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten rails and merchant details |
| Standard | 375–430px | Default dense layout |
| Wide | 431px+ | Expand merchant cards and checkout gutters |

### Touch Targets

Address, rails, quantity controls, cart, payment, and bottom navigation remain at least 44px.

### Collapsing Strategy

Keep rails horizontally scrollable; stack checkout choices and preserve a full-width persistent action.

### Image Behavior

Contain products and category objects; aspect-fill merchant banners and promotional artwork while protecting embedded copy.

## Iteration Guide

Tune merchant discoverability and cart clarity first, then checkout grouping, delivery facts, and green emphasis.

## Known Gaps

- Product-detail interactions were not sampled in this batch.
- Live order tracking was not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
