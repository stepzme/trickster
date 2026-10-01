<design-context>
---
version: 1
platform: iOS
name: Lalafo-design-analysis
description: "A dense classifieds marketplace built on white with vivid green posting actions, hot magenta seller-contact controls, and gray utility chrome. Rounded photo cards, compact two-column listings, 3D category objects, and persistent action bars make browsing and selling feel fast and direct."
colors:
  primary: "#00D747"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.9}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 5
  sm: 9
  md: 13
  lg: 17
  xl: 22
  xxl: 28
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 16]}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  category-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 6}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  vip-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [2, 5]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Lalafo is a high-density classifieds feed where green accelerates posting and subscriptions while magenta accelerates seller contact.

**Key Characteristics:**
- Two-column photo-led listing grid.
- Green post, publish, and subscribe actions.
- Magenta contact controls and VIP badges.
- Compact search, filters, tags, and price metadata.
- 3D category objects on pale rounded tiles.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Two-column photo-led listing grid.
- The reviewed screens show this treatment: Green post, publish, and subscribe actions.
- The reviewed screens show this treatment: Magenta contact controls and VIP badges.
- The reviewed screens show this treatment: Compact search, filters, tags, and price metadata.
- The reviewed screens show this treatment: 3D category objects on pale rounded tiles.

# Color and surfaces

### Brand & Accent

Vivid green is the primary progress color. Hot magenta marks direct seller contact, promoted inventory, and selected price emphasis.

### Surface

White is the default canvas; pale gray fills search, filters, tags, and grouped seller tools.

### Text

Near-black carries price and title. Gray carries old price, location, metadata, and secondary controls.

### Semantic

Green communicates active, available, and forward. Orange warns about low ad reach; blue is limited to professional or analytics labels.

# Typography

### Font Family

Use SF Pro Display for page headings and SF Pro Text for compact listings, filters, and forms.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Seller or campaign claim |
| headline | 20pt | 700 | Form and detail heading |
| card-title | 15pt | 600 | Listing price and title |
| body | 12pt | 400 | Attributes and descriptions |
| caption | 9pt | 400 | Badges, actions, and navigation |

### Principles

- Price is the strongest repeated element.
- Keep listing titles compact and truncate when needed.
- Reserve bold display type for forms and seller tools.

### Note on Font Substitutes

Inter is a suitable substitute; preserve compact Cyrillic and tabular price numerals.

# Screen composition

### Spacing System

Use a 4pt base, 8pt grid gaps, and 12pt screen padding.

### Grid & Container

Listings use two columns. Categories and brands use horizontal rails or compact grids; detail and posting flows switch to one column.

### Whitespace Philosophy

Browsing favors density. Create space around contact, publishing, budget, and profile decisions.

# Navigation appearance

Keep five bottom destinations fixed with the central green Post control enlarged. Native controls must inherit the green-magenta action hierarchy.

# Components

### Buttons

Primary green pills publish, continue, or subscribe. Magenta filled or outlined pills call and message; muted gray supports low-priority choices.

Recommended/New and search filters use compact segments or chips; selected states use white or green outlines without heavy decoration.

### Cards & Containers

Listing cards are borderless image-first columns with badges, price, currency, title, seller, message, and favorite actions.

### Inputs & Forms

Search and filter fields use pale fills. Posting forms use green focus rings, compact tags, dropdown rows, and an anchored submit action.

### Status & Build Page

VIP is a magenta badge; Pro is cyan. Seller analytics use blue actions and orange reach warnings without changing the main green workflow.

### Navigation

Keep five bottom destinations fixed with the central green Post control enlarged. Native controls must inherit the green-magenta action hierarchy.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listing feed |
| 1 | Pale filled field | Search, filter, form groups |
| 2 | Floating green pill | Subscribe or publish action |
| 3 | Sticky action bar | Contact and creation progress |

### Decorative Depth

Listing photography and category-object shadows provide depth; ordinary surfaces remain flat.

# States

VIP is a magenta badge; Pro is cyan. Seller analytics use blue actions and orange reach warnings without changing the main green workflow.

# iOS adaptation

### Touch Targets

Search, filters, favorite, message, call, posting, and navigation targets remain at least 44pt.

### Collapsing Strategy

Keep two columns until titles become unreadable, then switch to one-column rows; forms always remain stacked.

### Image Behavior

Use aspect-fill for listings and contain for category objects. Preserve full galleries on detail screens.

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

</design-context>
