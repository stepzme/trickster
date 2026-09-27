<design-context>
---
version: alpha
name: L'etoile-design-analysis
description: "A high-energy beauty marketplace on white and soft gray, using black commitment controls, electric blue brand moments, and hot magenta for discounts and personal pricing. Editorial faces, glossy product photography, short video, and sculptural 3D campaign art create a dense but premium shopping feed."
colors:
  primary: "#151515"
  on-primary: "#FFFFFF"
  primary-hover: "#303030"
  primary-focus: "#050505"
  ink: "#151515"
  ink-muted: "#6F6F74"
  ink-subtle: "#A3A3A8"
  ink-tertiary: "#C8C8CC"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F6"
  surface-2: "#ECECEF"
  surface-3: "#E1E1E5"
  surface-4: "#D4D4D9"
  hairline: "#E5E5E8"
  hairline-strong: "#D0D0D5"
  hairline-tertiary: "#B8B8BF"
  inverse-canvas: "#172CFF"
  inverse-surface-1: "#1022D4"
  inverse-surface-2: "#0A179E"
  inverse-ink: "#FFFFFF"
  brand-secure: "#D6239A"
  semantic-success: "#2AAE65"
  semantic-overlay: "#121212"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  campaign-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  discount-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3px 6px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

L'etoile is a dense beauty-shopping system where black controls stabilize a highly visual feed of faces, products, video, and saturated campaigns.

**Key Characteristics:**
- White commerce canvas with editorial image blocks.
- Black primary actions and selected controls.
- Magenta discount, loyalty, and personal-price emphasis.
- Blue brand and sculptural campaign art.
- Persistent bottom navigation and product purchase bars.

## Colors

### Brand & Accent

Black is the action language. Electric blue identifies brand-led moments; hot magenta marks discounts, bonuses, and personalized value.

### Surface

White carries catalog and detail. Pale gray separates service tiles, cart groups, checkout sections, and neutral controls.

### Text

Near-black carries product, price, and heading hierarchy. Gray supports variants, former prices, and secondary descriptions.

### Semantic

Magenta is promotional, not error. Use conventional red only for destructive or failed states and green only for confirmed success.

## Typography

### Font Family

Use SF Pro Display for campaign and section headings and SF Pro Text for product, checkout, and navigation information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Campaign or onboarding claim |
| headline | 21px | 700 | Section and checkout title |
| card-title | 16px | 600 | Product and brand title |
| body | 13px | 400 | Variant and description |
| caption | 10px | 400 | Discount, rating, and navigation |

### Principles

- Give price and brand distinct lines.
- Use bold for campaigns and decisions, not all metadata.
- Keep long product education readable with standard body rhythm.

### Note on Font Substitutes

A neutral system sans is sufficient; preserve compact price numerals and strong Cyrillic display weight.

## Layout

### Spacing System

Use a 4px base, 8–12px product gaps, and 12–16px screen padding.

### Grid & Container

Home mixes full-width campaigns, horizontal rails, and short-video cards. Catalog uses asymmetric category tiles; product recommendations use horizontal rails.

### Whitespace Philosophy

Visual density is intentional. Use white breaks between campaign modules and wider spacing around checkout decisions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and product detail |
| 1 | Pale grouped surface | Cart and checkout |
| 2 | Sticky white action bar | Price and cart action |
| 3 | Rounded sheet over scrim | Sharing and focused choices |

### Decorative Depth

Photography and glossy 3D campaign objects provide depth; functional UI stays flat and sharp.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Discount badge |
| rounded-sm | 8px | Buttons and search |
| rounded-md | 12px | Product and category imagery |
| rounded-lg | 16px | Campaign and checkout cards |
| rounded-full | full | Favorite and compact action controls |

### Photography & Illustration Geometry

Product pack shots use clean white space. Editorial faces and video use tall crops; campaign art may fill full-width panels with embedded copy.

## Components

### Buttons

Primary actions are black with white type. Neutral secondary actions use pale gray; magenta appears in benefits and discount markers rather than every CTA.

### Pricing Tabs

Promotional filters and fulfillment modes use pill or wide segmented controls with black selected state and pale default state.

### Cards & Containers

Product cards keep image, current and former price, discount, brand, name, rating, and variants compact. Checkout groups stay full-width and rounded.

### Inputs & Forms

Search is a white bordered field with camera access. Payment and address rows use thin borders, radios, and black selected outlines.

### Status & Build Page

Personal pricing uses a persistent magenta strip. Order success uses a calm white summary with optional gift card and pickup details.

### Navigation

Keep five bottom destinations fixed and style active icons black. Badges are small magenta circles; product detail retains its custom black purchase bar.

### Footer

No footer; bottom navigation or a persistent checkout action owns the safe area.

## Do's and Don'ts

### Do

- Let product and editorial imagery dominate.
- Use black for commitment actions.
- Keep magenta tied to measurable value.
- Preserve quick access to search and cart.
- Restyle native controls to match the sharp monochrome system.

### Don't

- Don't use blue and magenta on every functional control.
- Don't bury price or discount beneath editorial copy.
- Don't add heavy card shadows.
- Don't mix campaign typography into checkout.
- Don't replace product photography with decorative art.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten rails and product metadata |
| Standard | 375–430px | Default campaign and catalog layout |
| Wide | 431px+ | Enlarge imagery and checkout gutters |

### Touch Targets

Search, filters, favorites, variants, purchase actions, and navigation remain at least 44px.

### Collapsing Strategy

Keep vertical modules full width and rails horizontally scrollable; stack checkout decisions when needed.

### Image Behavior

Contain product pack shots; aspect-fill editorial portraits and campaign panels while protecting embedded text.

## Iteration Guide

Tune product and price clarity first, then campaign rhythm, loyalty emphasis, and checkout confidence.

## Known Gaps

- Authorization and personal-account management were not visually sampled.
- Courier completion after payment was not shown.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
