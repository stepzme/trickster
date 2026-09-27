<design-context>
---
version: alpha
name: Asia-Online-design-analysis
description: "A grocery loyalty interface anchored by forest green, bright leaf accents, yellow actions, a prominent QR card, and surreal product campaigns. White utility surfaces keep points, cashback, store data, and profile actions legible beneath expressive promotional imagery."
colors:
  primary: "#08753C"
  on-primary: "#FFFFFF"
  primary-hover: "#055F31"
  primary-bright: "#54CE35"
  primary-soft: "#C8FFD2"
  accent-yellow: "#FFE000"
  accent-aqua: "#59D9C8"
  ink: "#151817"
  ink-muted: "#747A76"
  ink-subtle: "#AAAFAB"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F6"
  surface-2: "#ECEEEF"
  hairline: "#E0E3E1"
  semantic-success: "#25AE48"
  semantic-danger: "#D94B4B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.accent-yellow}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  loyalty-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 18px }
  promo-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  store-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  catalog-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 10px 12px }
---

## Overview

Asia Online frames practical loyalty tools with highly expressive grocery campaigns. Forest green owns identity, yellow owns decisive action, and white modules hold QR, cashback, store, and profile data.

**Key Characteristics:**
- Prominent QR loyalty card and points balance.
- Forest and leaf-green brand system.
- Yellow store and subscription actions.
- Five-item bottom navigation.
- Two-column promotion catalogue.
- Surreal food scenes and glossy loyalty objects.

## Colors

### Brand & Accent
- **Forest Green** ({colors.primary}): Brand, store identity, and campaign base.
- **Bright Green** ({colors.primary-bright}): Selected navigation and rewards.
- **Yellow** ({colors.accent-yellow}): Route, scan, login, and subscription actions.
- **Aqua** ({colors.accent-aqua}): Glossy loyalty-object support.

### Surface
- **Canvas** ({colors.canvas}): Loyalty, discounts, stores, and profile base.
- **Surface 1** ({colors.surface-1}): Store rows and grouped settings.
- **Surface 2** ({colors.surface-2}): Disabled and nested surfaces.
- **Soft Green** ({colors.primary-soft}): Referral and reward banners.

### Text
- **Ink** ({colors.ink}): Points, cashback, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Hours, distance, and descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled content.

### Semantic
- **Success** ({colors.semantic-success}): Active benefits and earned rewards.
- **Danger** ({colors.semantic-danger}): Error and destructive action.
- **Overlay** ({colors.semantic-overlay}): Age gate and system dialog scrim.

## Typography

### Font Family

- **System Sans** — loyalty, promotion, stores, forms, and navigation.
- **System Mono** — loyalty or receipt identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 800 | Campaign or points figure |
| `{typography.display-md}` | 26px | 700 | QR balance or cashback |
| `{typography.headline}` | 21px | 700 | Screen heading |
| `{typography.card-title}` | 15px | 600 | Promo or store title |
| `{typography.body}` | 14px | 400 | Default details |
| `{typography.caption}` | 10px | 400 | Navigation and metadata |
| `{typography.button}` | 15px | 600 | Decisive actions |

### Principles

- Make points, cashback, and discount independently legible.
- Use heavy type inside campaign art only.
- Keep store name, hours, and distance in one scan path.
- Preserve readable QR quiet space.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with Cyrillic support.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 10–12px, card gaps 8–12px, and loyalty modules use 16–18px padding.

### Grid & Container

Home stacks a campaign hero, loyalty card, utilities, and promo grid. Discounts use two columns. Stores use one-column rows or a map. Profile uses banners plus settings rows.

### Whitespace Philosophy

Keep utility modules clean and open. Confine expressive imagery to heroes and banners so QR and store data remain trustworthy.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Utility base |
| 1 | Pale rounded row | Stores and settings |
| 2 | Green or mint banner | Benefits and referral |
| 3 | Full photographic scene | Campaign hero |

### Decorative Depth

Use photoreal compositing, glossy objects, and saturated green gradients in campaigns. Keep core controls flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Tags and small controls |
| `{rounded.sm}` | 10px | Store rows and catalogue cards |
| `{rounded.md}` | 14px | Promo and referral cards |
| `{rounded.lg}` | 20px | Loyalty card and bottom sheet |
| `{rounded.pill}` | full | List/map switch and profile action |

### Photography & Illustration Geometry

Campaign imagery uses cover with a centered hero object. Glossy loyalty objects stay fully visible on green or mint banners. Product packs remain literal in catalogue cards.

## Components

### Buttons

Primary route, scan, sign-in, and subscription actions use yellow. Green pills support secondary loyalty actions; ordinary rows remain white or gray.

### Pricing Tabs

No pricing tabs were observed. Stores use a list/map segmented control; cashback and discount appear as separate values, not tabs.

### Cards & Containers

Loyalty card combines logo, points, QR, and savings prompt. Promo cards use campaign art. Store rows combine name, address, hours, and distance.

### Inputs & Forms

Registration uses phone, name, and birthday with a date sheet. Store search uses a full-width field. Age-restricted promotions use a clear yes/no gate.

### Status & Build Page

Points, cashback, discount, subscription, birthday reward, and active login state are explicit labels. QR remains high-contrast and unobstructed.

### Navigation

Home, Discounts, My benefit, Stores, and Profile form the bottom bar. Selected state uses forest or bright green.

### Footer

The bottom navigation is persistent. Store detail adds full-width yellow route and scan actions above the safe area.

## Do's and Don'ts

### Do

- Keep QR and points immediately visible.
- Separate cashback from discount.
- Gate restricted promotions.
- Preserve store list/map context.
- Use expressive art only in bounded campaigns.

### Don't

- Don't place art behind the QR code.
- Don't use yellow for passive decoration.
- Don't merge store hours and distance.
- Don't replace product packs in the catalogue.
- Don't hide subscription terms.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center loyalty column and expand promo grid |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Stack QR benefit details and use one promo column |

### Touch Targets

Maintain 44px for navigation, QR actions, catalogue cards, list/map, store rows, and forms.

### Collapsing Strategy

Reduce promo columns before shrinking text. Keep loyalty card and store rows full width; stack action pairs on small screens.

### Image Behavior

Cover campaign heroes while preserving the central scene and headline. Contain loyalty objects and literal product packs.

## Iteration Guide

1. Establish QR loyalty card and five-tab navigation.
2. Build benefits and store list/map.
3. Add registration and profile settings.
4. Add discount catalogue and age gate.
5. Layer campaign imagery and glossy objects last.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 35-flow inventory was complete and all top-level flows were inspected.
- Some entry and campaign screens were video-only; motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
