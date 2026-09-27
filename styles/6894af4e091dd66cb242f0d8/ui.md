<design-context>
---
version: alpha
name: 4-lapy-design-analysis
description: "A playful pet-commerce interface built from pale blue-gray surfaces, white rounded cards, bold black actions, and a high-energy palette of orange, pink, violet, cyan, and yellow. Black animal silhouettes, sticker-like symbols, cropped pet photography, and campaign collage give the system a distinctive graphic voice while dense catalog and checkout screens remain conventional."
colors:
  primary: "#0B0B0D"
  on-primary: "#FFFFFF"
  accent-orange: "#FF7108"
  accent-pink: "#F3ABC5"
  accent-violet: "#8D78F7"
  accent-cyan: "#50CDEA"
  accent-yellow: "#FFD719"
  ink: "#111216"
  ink-muted: "#707681"
  ink-subtle: "#A7ADB6"
  canvas: "#F3F8FC"
  surface-1: "#FFFFFF"
  surface-2: "#EAF1F6"
  hairline: "#DFE7ED"
  semantic-success: "#43B869"
  semantic-danger: "#DC4D5B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Bold Grotesk, fontSize: 40px, fontWeight: 700, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: Bold Grotesk, fontSize: 32px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  promo-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  category-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 14px }
  cart-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  segmented-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 4px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 20px 16px }
---

## Overview

4 lapy combines retail and pet care in a bright graphic system. Pale blue-gray canvas supports white commerce cards, while campaigns and categories use black animal silhouettes, pet photography, and saturated color blocks.

**Key Characteristics:**
- Pale cool canvas with large white rounded groups.
- Black pill actions with strong contrast.
- Orange, pink, violet, cyan, and yellow graphic accents.
- Silhouette-based animal categories.
- Six-item bottom navigation.
- Photo collage and sticker language for campaigns.

## Colors

### Brand & Accent
- **Black** ({colors.primary}): Primary actions, selected service segment, and strong text.
- **Orange**, **Pink**, **Violet**, **Cyan**, and **Yellow**: Category identity, campaigns, and rewards.

### Surface
- **Canvas** ({colors.canvas}): Cool page background.
- **Surface 1** ({colors.surface-1}): Cards, rows, checkout, and navigation.
- **Surface 2** ({colors.surface-2}): Search, disabled, and nested surfaces.
- **Hairline** ({colors.hairline}): Quiet separation in dense groups.

### Text
- **Ink** ({colors.ink}): Titles, prices, totals, and controls.
- **Ink Muted** ({colors.ink-muted}): Delivery, bonus, and product metadata.
- **Ink Subtle** ({colors.ink-subtle}): Inactive navigation and placeholders.

### Semantic
- **Success** ({colors.semantic-success}): Confirmed and available state.
- **Danger** ({colors.semantic-danger}): Delete and error.
- **Overlay** ({colors.semantic-overlay}): Onboarding and modal scrim.

## Typography

### Font Family

- **Bold Grotesk** — campaign statements and brand moments.
- **System Sans** — catalog, services, pets, profile, cart, and navigation.
- **System Mono** — technical order identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 700 | Campaign statement |
| `{typography.display-md}` | 26px | 700 | Screen title |
| `{typography.headline}` | 22px | 700 | Section heading |
| `{typography.card-title}` | 16px | 600 | Category and product |
| `{typography.body}` | 14px | 400 | Default copy |
| `{typography.caption}` | 11px | 500 | Tabs and bonuses |
| `{typography.button}` | 15px | 600 | Primary action |

### Principles

- Keep campaign type bold and playful.
- Use compact neutral typography for care and commerce.
- Let price and final total outrank promotional copy at checkout.
- Keep animal names and service categories scannable.

### Note on Font Substitutes

Use **Arial Black** or **Archivo Black** for campaign display and **SF Pro / Inter** for system content.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 8–12px, card interiors 14–16px, and campaign gaps 12px.

### Grid & Container

Home uses two-column utility tiles and large campaign cards. Catalog is a single list of animal or need categories. Cart, pet, and profile screens use one vertical column.

### Whitespace Philosophy

Keep structural screens airy and card-led. Concentrate visual energy inside campaign artwork rather than coloring the entire canvas.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Base |
| 1 | White rounded card | Commerce and service rows |
| 2 | Saturated collage card | Campaigns |
| 3 | White story sheet on black | Onboarding |

### Decorative Depth

Use slight card shadows, photo cutouts, flat shapes, and sticker overlap. Avoid glossy realism outside product imagery.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Icons and chips |
| `{rounded.md}` | 14px | Buttons and fields |
| `{rounded.lg}` | 18px | Cards and rows |
| `{rounded.xl}` | 24px | Campaign frames |
| `{rounded.pill}` | full | Primary actions and segments |

### Photography & Illustration Geometry

Pet and product photos use rounded crops or cutouts. Category silhouettes sit in saturated circles. Campaign collage may overlap photography, type, and flat shapes.

## Components

### Buttons

Primary actions are full-width black pills with white text. Secondary controls use white or pale backgrounds. Quantity controls are compact circular minus and plus actions.

### Pricing Tabs

No pricing-plan tabs were observed. Pet Services and Pets use a bottom pill segment with black selected fill.

### Cards & Containers

Promo cards combine pets, people, text, and graphic shapes. Category rows pair silhouette icons with labels. Cart cards combine selection, product, quantity, bonus, and price.

### Inputs & Forms

Search and delivery address stay at the top of commerce screens. Checkout uses stacked white groups for address, delivery, payment, and comment.

### Status & Build Page

Discounts, bonuses, promo eligibility, order state, and service availability use explicit labels. Color reinforces but does not replace them.

### Navigation

Home, Catalog, Pets, Cart, Favorites, and Profile form the bottom bar. Selected state uses black while inactive items are blue-gray.

### Footer

Profile ends with support, information, and app details. Order completion uses a summary rather than a separate footer.

## Do's and Don'ts

### Do

- Keep black actions consistent.
- Use silhouettes to identify animal categories.
- Separate service discovery from saved pet profiles.
- Let campaigns carry the bright palette.
- Preserve delivery and total context in cart.

### Don't

- Don't place every card on a saturated background.
- Don't use playful display type in medical detail.
- Don't replace real products or pets with drawings.
- Don't hide bonus conditions.
- Don't add more bottom destinations.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center or use a two-column commerce grid |
| Compact | 390–767px | Default cards and bottom bar |
| Small | <390px | Stack home utility tiles |

### Touch Targets

Keep bottom tabs, category rows, pet-service accordions, and quantity controls at least 44px.

### Collapsing Strategy

Stack campaign and utility cards before shrinking labels. Pet categories remain single-column. Checkout groups expand vertically.

### Image Behavior

Use cover for campaign photography, contain for silhouettes and product packs, and circular crops for saved pets.

## Iteration Guide

1. Establish cool canvas and white cards.
2. Build black action and bottom navigation.
3. Add category silhouettes.
4. Implement catalog, cart, and pet profile.
5. Add campaign collage last.

## Known Gaps

- Exact typefaces and tokens were inferred visually.
- The 28-flow inventory was complete; long checkout states were sampled.
- No tablet layouts were present.
- Motion in promotional stories was not evaluated.

</design-context>

Use the design system above for all UI you generate.
