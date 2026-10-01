<design-context>
---
version: 1
platform: iOS
name: Samokat-design-analysis
description: "A playful quick-commerce interface built on near-white and pale lilac surfaces, bold black headings, hot-pink actions, and dense product photography. Organic color blobs frame assortment imagery, while commerce controls stay compact, rounded, and direct."

colors:
  primary: "#F82768"
  on-primary: "#FFFFFF"
  primary-soft: "#FFE3EC"
  ink: "#202124"
  ink-muted: "#6E7075"
  ink-subtle: "#A1A3A8"
  canvas: "#FCFAFD"
  surface-1: "#F5F2F6"
  surface-2: "#EEEAF0"
  surface-dark: "#171419"
  hairline: "#E4E0E6"
  semantic-success: "#20A84B"
  semantic-warning: "#F2A92C"
  semantic-danger: "#E9434B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 18
  xl: 24
  xxl: 30
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 16]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8 }
  price-pill: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [7, 10]}
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 10 }
  checkout-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [12, 16]}
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60 }
---

# Overview

Samokat combines a very light grocery canvas with hot-pink commerce actions, bold black hierarchy, organic color shapes, and tightly cropped product photography. Dense assortment stays approachable because cards and controls remain small, rounded, and predictable.

**Key Characteristics:**
- Hot pink marks add, pay, search-assistant, and active action states.
- Pale lilac-gray surfaces organize products and order details.
- Product photography supplies nearly all content color.
- Organic blobs sit behind category imagery and campaign assortments.
- Checkout becomes a rounded sheet over a darkened context.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Hot pink marks add, pay, search-assistant, and active action states.
- The reviewed screens show this treatment: Pale lilac-gray surfaces organize products and order details.
- The reviewed screens show this treatment: Product photography supplies nearly all content color.
- The reviewed screens show this treatment: Organic blobs sit behind category imagery and campaign assortments.
- The reviewed screens show this treatment: Checkout becomes a rounded sheet over a darkened context.

# Color and surfaces

### Brand & Accent

- **Hot Pink** ({colors.primary}) is the decisive commerce accent.
- **Soft Pink** ({colors.primary-soft}) supports prices, selection, and low-emphasis actions.

### Surface

- **Canvas** ({colors.canvas}) is the catalog and profile background.
- **Surface 1** ({colors.surface-1}) carries tiles, fields, and order groups.
- **Surface 2** ({colors.surface-2}) separates nested controls.
- **Dark Surface** ({colors.surface-dark}) is limited to modal checkout context.

### Text

- **Ink** ({colors.ink}) carries titles, product names, and totals.
- **Muted** ({colors.ink-muted}) carries descriptions and metadata.
- **Subtle** ({colors.ink-subtle}) is for placeholders and inactive information.

### Semantic

Green marks delivered or benefit states, while warning and danger colors appear only for service conditions and validation. Do not use them as extra category accents.

# Typography

### Font Family

Use a neutral system sans with rounded, friendly proportions. Keep headings bold and compact; product detail and prices remain highly legible.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 38pt | 700 | Campaign title |
| `{typography.display-lg}` | 30pt | 700 | Major catalog heading |
| `{typography.display-md}` | 25pt | 700 | Product or sheet title |
| `{typography.headline}` | 21pt | 700 | Section heading |
| `{typography.card-title}` | 15pt | 600 | Product and category title |
| `{typography.body}` | 14pt | 400 | Default content |
| `{typography.caption}` | 10pt | 400 | Weight, discount, and metadata |

### Principles

- Use bold headings for quick scanning.
- Keep price, discount, and quantity visually grouped.
- Do not shrink product names below readable mobile size.
- Let photography provide personality instead of decorative type.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve friendly proportions and strong headline weight; avoid condensed or formal serif substitutes.

# Screen composition

### Grid & Container

Product results use a two-column grid. Category browsing may use a three-column tile grid, while home mixes horizontal collections and campaign cards. Checkout and profile use one column.

### Whitespace Philosophy

Keep whitespace compact around assortment and larger around section headings. Avoid thick card chrome; pale surfaces and product cutouts already define grouping.

# Navigation appearance

Home uses prominent shortcuts for Catalog, Discounts, New, Ordered Before, and Saved. Deeper views rely on back navigation, while search and cart remain easy to reach.

# Components

### Buttons

Primary actions are hot-pink pills with white text. Secondary actions are pale neutral pills. Native controls may be used internally, but must inherit the pink accent, soft geometry, and system typography.

Home shortcuts and filters use compact chips or circular icon tiles. The selected filter gains a white or pink state; avoid heavy tab bars inside assortment pages.

### Cards & Containers

Product cards show image, discount if present, name, measure, price, favorite, and add. Campaign cards combine a short line with a product cutout and organic background. Checkout groups remain white or pale against the modal surface.

### Inputs & Forms

Search, phone, address, comment, and promo inputs are single-column and lightly framed. Keep address subfields progressive and anchor the payment action above the keyboard or safe area.

### Status & Build Page

Order tracking centers the current fulfillment message, contact and cancel actions, address, item summary, and delivery state. Toasts confirm collection and delivery without interrupting browsing.

### Navigation

Home uses prominent shortcuts for Catalog, Discounts, New, Ordered Before, and Saved. Deeper views rely on back navigation, while search and cart remain easy to reach.

# Imagery and icons

Most hierarchy is tonal. Bottom sheets use a dark overlay and slight shadow; product controls float through contrast, not strong elevation.

### Decorative Depth

Use overlapping product cutouts, organic blobs, and modal sheets. Avoid glossy gradients or deep shadow stacks.

# States

Order tracking centers the current fulfillment message, contact and cancel actions, address, item summary, and delivery state. Toasts confirm collection and delivery without interrupting browsing.

# iOS adaptation

Retain two product columns on standard phones and collapse only when names and prices no longer fit. Checkout and tracking remain single-column.

### Touch Targets

Add, quantity, favorite, filter, back, and payment actions require at least 44pt targets.

### Collapsing Strategy

Allow home collections and chips to scroll horizontally. Keep payment and cart actions pinned while item lists and form groups scroll.

### Image Behavior

Use `contain` for isolated product packs and `cover` for editorial or recipe imagery. Never stretch packaging or crop away the identifying label.

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

- Keep product photography dominant.
- Use pink only for action and selection.
- Preserve compact assortment density.
- Use organic shapes to frame categories.
- Keep order progress clear and recoverable.

### Don't

- Do not wrap every product in a heavy white card.
- Do not add unrelated accent colors to controls.
- Do not hide price or quantity state.
- Do not overload checkout with promotional chrome.
- Do not expose default blue platform controls.

# Known gaps

The reviewed scenarios cover login, home, catalog, search, products, cart, checkout, tracking, recipes, history, and profile. iPad layouts, dark mode, accessibility scaling, and rare delivery failures were not visible.

</design-context>
