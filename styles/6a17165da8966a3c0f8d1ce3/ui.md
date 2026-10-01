<design-context>
---
version: 1
platform: iOS
name: Asia-Online-design-analysis
description: "A grocery loyalty interface anchored by forest green, bright leaf accents, yellow actions, a prominent QR card, and surreal product campaigns. White utility surfaces keep points, cashback, store data, and profile actions legible beneath expressive promotional imagery."
colors:
  primary: "#08753C"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.accent-yellow}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  loyalty-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 18 }
  promo-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  store-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  catalog-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
---

# Overview

Asia Online frames practical loyalty tools with highly expressive grocery campaigns. Forest green owns identity, yellow owns decisive action, and white modules hold QR, cashback, store, and profile data.

**Key Characteristics:**
- Prominent QR loyalty card and points balance.
- Forest and leaf-green brand system.
- Yellow store and subscription actions.
- Five-item bottom navigation.
- Two-column promotion catalogue.
- Surreal food scenes and glossy loyalty objects.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Prominent QR loyalty card and points balance.
- The reviewed screens show this treatment: Forest and leaf-green brand system.
- The reviewed screens show this treatment: Yellow store and subscription actions.
- The reviewed screens show this treatment: Five-item bottom navigation.
- The reviewed screens show this treatment: Two-column promotion catalogue.
- The reviewed screens show this treatment: Surreal food scenes and glossy loyalty objects.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — loyalty, promotion, stores, forms, and navigation.
- **System Mono** — loyalty or receipt identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40pt | 800 | Campaign or points figure |
| `{typography.display-md}` | 26pt | 700 | QR balance or cashback |
| `{typography.headline}` | 21pt | 700 | Screen heading |
| `{typography.card-title}` | 15pt | 600 | Promo or store title |
| `{typography.body}` | 14pt | 400 | Default details |
| `{typography.caption}` | 10pt | 400 | Navigation and metadata |
| `{typography.button}` | 15pt | 600 | Decisive actions |

### Principles

- Make points, cashback, and discount independently legible.
- Use heavy type inside campaign art only.
- Keep store name, hours, and distance in one scan path.
- Preserve readable QR quiet space.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with Cyrillic support.

# Screen composition

### Grid & Container

Home stacks a campaign hero, loyalty card, utilities, and promo grid. Discounts use two columns. Stores use one-column rows or a map. Profile uses banners plus settings rows.

### Whitespace Philosophy

Keep utility modules clean and open. Confine expressive imagery to heroes and banners so QR and store data remain trustworthy.

# Navigation appearance

Home, Discounts, My benefit, Stores, and Profile form the bottom bar. Selected state uses forest or bright green.

# Components

### Buttons

Primary route, scan, sign-in, and subscription actions use yellow. Green pills support secondary loyalty actions; ordinary rows remain white or gray.

### Cards & Containers

Loyalty card combines logo, points, QR, and savings prompt. Promo cards use campaign art. Store rows combine name, address, hours, and distance.

### Inputs & Forms

Registration uses phone, name, and birthday with a date sheet. Store search uses a full-width field. Age-restricted promotions use a clear yes/no gate.

### Status & Build Page

Points, cashback, discount, subscription, birthday reward, and active login state are explicit labels. QR remains high-contrast and unobstructed.

### Navigation

Home, Discounts, My benefit, Stores, and Profile form the bottom bar. Selected state uses forest or bright green.

The bottom navigation is persistent. Store detail adds full-width yellow route and scan actions above the safe area.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Utility base |
| 1 | Pale rounded row | Stores and settings |
| 2 | Green or mint banner | Benefits and referral |
| 3 | Full photographic scene | Campaign hero |

### Decorative Depth

Use photoreal compositing, glossy objects, and saturated green gradients in campaigns. Keep core controls flat.

# States

Points, cashback, discount, subscription, birthday reward, and active login state are explicit labels. QR remains high-contrast and unobstructed.

# iOS adaptation

| Wide | 768pt+ | Center loyalty column and expand promo grid |
| Small | <390pt | Stack QR benefit details and use one promo column |

### Touch Targets

Maintain 44pt for navigation, QR actions, catalogue cards, list/map, store rows, and forms.

### Collapsing Strategy

Reduce promo columns before shrinking text. Keep loyalty card and store rows full width; stack action pairs on small screens.

### Image Behavior

Cover campaign heroes while preserving the central scene and headline. Contain loyalty objects and literal product packs.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Exact brand tokens and font names were inferred visually.
- The 35-flow inventory was complete and all top-level flows were inspected.
- Some entry and campaign screens were video-only; motion was not assessed.

</design-context>
