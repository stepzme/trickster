<design-context>
---
version: 1
platform: iOS
name: Kuper-design-analysis
description: "A dense multi-store delivery marketplace on white and cool-gray grouped surfaces, anchored by near-black pill controls and a sharp electric-green accent. Product cutouts, merchant logos, and compact horizontal rails carry discovery; checkout becomes a calm sequence of rounded white sections with persistent dark actions."
colors:
  primary: "#171518"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.9}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  merchant-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  department-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [11, 14]}
  checkout-section: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Kuper is a compact delivery marketplace with strong black controls, electric-green brand moments, and image-led departments across restaurants, groceries, and general goods.

**Key Characteristics:**
- Address-first discovery.
- Dense horizontal rails and merchant lists.
- Dark pill controls and cart actions.
- Cool-gray grouped surfaces with rounded white sections.
- Isolated product objects and merchant photography.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Address-first discovery.
- The reviewed screens show this treatment: Dense horizontal rails and merchant lists.
- The reviewed screens show this treatment: Dark pill controls and cart actions.
- The reviewed screens show this treatment: Cool-gray grouped surfaces with rounded white sections.
- The reviewed screens show this treatment: Isolated product objects and merchant photography.

# Color and surfaces

### Brand & Accent

Near-black is the main control color. Electric green is a selective brand, positive-state, and feedback accent rather than a general surface fill.

### Surface

White carries content; cool pale gray separates home modules, cart groups, and checkout sections.

### Text

Near-black carries headings, prices, and actions. Mid-gray supports delivery terms and secondary facts; green highlights benefits.

### Semantic

Green marks favorable delivery, bonuses, selected positive states, and confirmation. Merchant campaign colors remain confined to their own assets.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for dense catalog, delivery, and checkout information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Empty-state or campaign claim |
| headline | 20pt | 700 | Store and checkout heading |
| card-title | 16pt | 600 | Merchant, product, or section title |
| body | 13pt | 400 | Terms and form values |
| caption | 10pt | 400 | Times, badges, and navigation |

### Principles

- Lead with merchant, price, and delivery time.
- Keep labels compact and left aligned.
- Use bold selectively for decisions and totals.

### Note on Font Substitutes

Inter is a suitable cross-platform substitute; preserve dense numeral spacing and clear Cyrillic.

# Screen composition

### Grid & Container

Home combines horizontal shortcut rails with vertical merchant lists. Checkout switches to a single stacked column of rounded groups.

### Whitespace Philosophy

Discovery is deliberately dense. Increase space only around checkout decisions, totals, and empty-state messages.

# Navigation appearance

Home navigation is shortcut-led; store pages use a dedicated five-item bottom bar. All native controls must inherit Kuper's black pills, rounded sections, and green accent.

# Components

### Buttons

Primary actions are near-black full-width pills. White secondary pills use black labels; electric green is reserved for positive or branded actions.

Delivery and pickup use a wide two-segment control: selected is black with white type, default is pale with black type.

### Cards & Containers

Merchant rows combine logo, rating, delivery time, and offer. Cart items remain compact; checkout decisions are grouped in separate white rounded sections.

### Inputs & Forms

Search is a pale pill. Address and payment inputs use thin rules or white rows, while selected cards receive a dark outline.

### Status & Build Page

Delivery benefits and bonuses use green. Feedback uses a white bottom sheet with expressive emoji choices and a green response action.

### Navigation

Home navigation is shortcut-led; store pages use a dedicated five-item bottom bar. All native controls must inherit Kuper's black pills, rounded sections, and green accent.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Merchant and product content |
| 1 | Pale grouped fill | Home modules and checkout background |
| 2 | Floating dark pill | Cart and anchored actions |
| 3 | White modal sheet over scrim | Feedback and focused selectors |

### Decorative Depth

Use merchant photography, object cutouts, and soft shadows. Interface elevation remains subtle except for the floating cart.

# States

Delivery benefits and bonuses use green. Feedback uses a white bottom sheet with expressive emoji choices and a green response action.

# iOS adaptation

### Touch Targets

Address, rails, quantity controls, cart, payment, and bottom navigation remain at least 44pt.

### Collapsing Strategy

Keep rails horizontally scrollable; stack checkout choices and preserve a full-width persistent action.

### Image Behavior

Contain products and category objects; aspect-fill merchant banners and promotional artwork while protecting embedded copy.

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

# Known gaps

- Product-detail interactions were not sampled in this batch.
- Live order tracking was not reviewed.
- iPad and landscape layouts were not represented.

</design-context>
