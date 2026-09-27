<design-context>
---
version: alpha
name: Lalafo-design-analysis
description: "A dense classifieds marketplace built on white with vivid green posting actions, hot magenta seller-contact controls, and gray utility chrome. Rounded photo cards, compact two-column listings, 3D category objects, and persistent action bars make browsing and selling feel fast and direct."
colors:
  primary: "#00D747"
  on-primary: "#FFFFFF"
  primary-hover: "#24E362"
  primary-focus: "#00B73C"
  ink: "#15151A"
  ink-muted: "#75757D"
  ink-subtle: "#A6A6AE"
  ink-tertiary: "#C6C6CC"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F8"
  surface-2: "#EEEEF2"
  surface-3: "#E4E4E9"
  surface-4: "#D8D8DE"
  hairline: "#E7E7EB"
  hairline-strong: "#D3D3D9"
  hairline-tertiary: "#B9B9C1"
  inverse-canvas: "#17171B"
  inverse-surface-1: "#2C2C32"
  inverse-surface-2: "#424249"
  inverse-ink: "#FFFFFF"
  brand-secure: "#F50069"
  semantic-success: "#00C943"
  semantic-overlay: "#15151A"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.9px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 5px
  sm: 9px
  md: 13px
  lg: 17px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 16px}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 6px}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  vip-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 2px 5px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 48px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Lalafo is a high-density classifieds feed where green accelerates posting and subscriptions while magenta accelerates seller contact.

**Key Characteristics:**
- Two-column photo-led listing grid.
- Green post, publish, and subscribe actions.
- Magenta contact controls and VIP badges.
- Compact search, filters, tags, and price metadata.
- 3D category objects on pale rounded tiles.

## Colors

### Brand & Accent

Vivid green is the primary progress color. Hot magenta marks direct seller contact, promoted inventory, and selected price emphasis.

### Surface

White is the default canvas; pale gray fills search, filters, tags, and grouped seller tools.

### Text

Near-black carries price and title. Gray carries old price, location, metadata, and secondary controls.

### Semantic

Green communicates active, available, and forward. Orange warns about low ad reach; blue is limited to professional or analytics labels.

## Typography

### Font Family

Use SF Pro Display for page headings and SF Pro Text for compact listings, filters, and forms.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Seller or campaign claim |
| headline | 20px | 700 | Form and detail heading |
| card-title | 15px | 600 | Listing price and title |
| body | 12px | 400 | Attributes and descriptions |
| caption | 9px | 400 | Badges, actions, and navigation |

### Principles

- Price is the strongest repeated element.
- Keep listing titles compact and truncate when needed.
- Reserve bold display type for forms and seller tools.

### Note on Font Substitutes

Inter is a suitable substitute; preserve compact Cyrillic and tabular price numerals.

## Layout

### Spacing System

Use a 4px base, 8px grid gaps, and 12px screen padding.

### Grid & Container

Listings use two columns. Categories and brands use horizontal rails or compact grids; detail and posting flows switch to one column.

### Whitespace Philosophy

Browsing favors density. Create space around contact, publishing, budget, and profile decisions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listing feed |
| 1 | Pale filled field | Search, filter, form groups |
| 2 | Floating green pill | Subscribe or publish action |
| 3 | Sticky action bar | Contact and creation progress |

### Decorative Depth

Listing photography and category-object shadows provide depth; ordinary surfaces remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 5px | VIP and Pro badges |
| rounded-sm | 9px | Search and compact controls |
| rounded-md | 13px | Listing photos and category tiles |
| rounded-lg | 17px | Promotion and form groups |
| rounded-full | full | Post, subscribe, and contact buttons |

### Photography & Illustration Geometry

Listing images use near-square aspect-fill crops. Category objects are centered and contained in pastel rounded tiles.

## Components

### Buttons

Primary green pills publish, continue, or subscribe. Magenta filled or outlined pills call and message; muted gray supports low-priority choices.

### Pricing Tabs

Recommended/New and search filters use compact segments or chips; selected states use white or green outlines without heavy decoration.

### Cards & Containers

Listing cards are borderless image-first columns with badges, price, currency, title, seller, message, and favorite actions.

### Inputs & Forms

Search and filter fields use pale fills. Posting forms use green focus rings, compact tags, dropdown rows, and an anchored submit action.

### Status & Build Page

VIP is a magenta badge; Pro is cyan. Seller analytics use blue actions and orange reach warnings without changing the main green workflow.

### Navigation

Keep five bottom destinations fixed with the central green Post control enlarged. Native controls must inherit the green-magenta action hierarchy.

### Footer

No footer; bottom navigation and sticky seller or publishing actions own the safe area.

## Do's and Don'ts

### Do

- Keep price and contact visible.
- Use green for creation and subscription.
- Preserve dense two-column browsing.
- Let seller photography remain authentic.
- Separate consumer and seller tools clearly.

### Don't

- Don't use magenta for ordinary navigation.
- Don't wrap every listing in a raised card.
- Don't hide quick message and favorite actions.
- Don't enlarge prose inside the feed.
- Don't leave native form controls visually generic.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten card metadata and action icons |
| Standard | 375–430px | Default two-column feed |
| Wide | 431px+ | Enlarge photo grid and form gutters |

### Touch Targets

Search, filters, favorite, message, call, posting, and navigation targets remain at least 44px.

### Collapsing Strategy

Keep two columns until titles become unreadable, then switch to one-column rows; forms always remain stacked.

### Image Behavior

Use aspect-fill for listings and contain for category objects. Preserve full galleries on detail screens.

## Iteration Guide

Tune listing density and contact clarity first, then search filters, publishing progress, and seller analytics.

## Known Gaps

- Registration and wallet payment completion were not sampled visually.
- Chat conversation content was not opened.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
