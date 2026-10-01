<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: Bold Grotesk, fontSize: 40, fontWeight: 700, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: Bold Grotesk, fontSize: 32, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  promo-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  category-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 14 }
  cart-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  segmented-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 4 }
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [20, 16]}
---

# Overview

4 lapy combines retail and pet care in a bright graphic system. Pale blue-gray canvas supports white commerce cards, while campaigns and categories use black animal silhouettes, pet photography, and saturated color blocks.

**Key Characteristics:**
- Pale cool canvas with large white rounded groups.
- Black pill actions with strong contrast.
- Orange, pink, violet, cyan, and yellow graphic accents.
- Silhouette-based animal categories.
- Six-item bottom navigation.
- Photo collage and sticker language for campaigns.

# Non-negotiable visual invariants

- Pale cool canvas with large white rounded groups.
- Sampled screens consistently use black pill actions with strong contrast.
- Imagery consistently uses orange, pink, violet, cyan, and yellow graphic accents.
- The reference consistently shows silhouette-based animal categories.
- Navigation consistently uses six-item bottom navigation.
- Imagery consistently uses photo collage and sticker language for campaigns.

# Color and surfaces

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

# Typography

### Font Family

- **Bold Grotesk** — campaign statements and brand moments.
- **System Sans** — catalog, services, pets, profile, cart, and navigation.
- **System Mono** — technical order identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40 points | 700 | Campaign statement |
| `{typography.display-md}` | 26 points | 700 | Screen title |
| `{typography.headline}` | 22 points | 700 | Section heading |
| `{typography.card-title}` | 16 points | 600 | Category and product |
| `{typography.body}` | 14 points | 400 | Default copy |
| `{typography.caption}` | 11 points | 500 | Tabs and bonuses |
| `{typography.button}` | 15 points | 600 | Primary action |

### Principles

- Keep campaign type bold and playful.
- Use compact neutral typography for care and commerce.
- Let price and final total outrank promotional copy at checkout.
- Keep animal names and service categories scannable.

### Note on Font Substitutes

Use **Arial Black** or **Archivo Black** for campaign display and **SF Pro / Inter** for system content.

# Screen composition

### Spacing System

Use a 4 points base. Screen gutters are 8–12 points, card interiors 14–16 points, and campaign gaps 12 points.

### Grid & Container

Home uses two-column utility tiles and large campaign cards. Catalog is a single list of animal or need categories. Cart, pet, and profile screens use one vertical column.

### Whitespace Philosophy

Keep structural screens airy and card-led. Concentrate visual energy inside campaign artwork rather than coloring the entire canvas.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Base |
| 1 | White rounded card | Commerce and service rows |
| 2 | Saturated collage card | Campaigns |
| 3 | White story sheet on black | Onboarding |

### Decorative Depth

Use slight card shadows, photo cutouts, flat shapes, and sticker overlap. Avoid glossy realism outside product imagery.

# Navigation appearance

Home, Catalog, Pets, Cart, Favorites, and Profile form the bottom bar. Selected state uses black while inactive items are blue-gray.

# Components

### Buttons

Primary actions are full-width black pills with white text. Secondary controls use white or pale backgrounds. Quantity controls are compact circular minus and plus actions.

### Cards & Containers

Promo cards combine pets, people, text, and graphic shapes. Category rows pair silhouette icons with labels. Cart cards combine selection, product, quantity, bonus, and price.

### Inputs & Forms

Search and delivery address stay at the top of commerce screens. Checkout uses stacked white groups for address, delivery, payment, and comment.

# Imagery and icons

Use slight card shadows, photo cutouts, flat shapes, and sticker overlap. Avoid glossy realism outside product imagery.

Pet and product photos use rounded crops or cutouts. Category silhouettes sit in saturated circles. Campaign collage may overlap photography, type, and flat shapes.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Discounts, bonuses, promo eligibility, order state, and service availability use explicit labels. Color reinforces but does not replace them.

# iOS adaptation

### Touch Targets

Keep bottom tabs, category rows, pet-service accordions, and quantity controls at least 44 points.

### Collapsing Strategy

Stack campaign and utility cards before shrinking labels. Pet categories remain single-column. Checkout groups expand vertically.

### Image Behavior

Use cover for campaign photography, contain for silhouettes and product packs, and circular crops for saved pets.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't place every card on a saturated background.
- Don't use playful display type in medical detail.
- Don't replace real products or pets with drawings.
- Don't hide bonus conditions.
- Don't add more bottom destinations.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
