<design-context>
---
version: 1
platform: iOS
name: OZON-Select-design-analysis
description: "A monochrome fashion-commerce interface built from a black canvas, large white product cards, editorial photography, compact serif branding, hot-pink price signals, and pill-shaped black purchase controls."
colors: {primary: "#151517", on-primary: "#FFFFFF", primary-focus: "#000000", ink: "#101012", ink-muted: "#66676C", ink-subtle: "#9B9CA1", ink-tertiary: "#C6C7CB", canvas: "#09090B", surface-1: "#FFFFFF", surface-2: "#F3F3F5", surface-3: "#E8E8EB", surface-4: "#DCDDE1", hairline: "#E4E4E7", hairline-strong: "#CDCDD2", hairline-tertiary: "#B6B7BD", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F7F7F8", inverse-surface-2: "#ECECEF", inverse-ink: "#101012", brand-secure: "#E91E63", semantic-success: "#30A96B", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  product-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 10}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

OZON Select is a black-and-white fashion marketplace. Large white product cards and editorial imagery dominate; pink is restricted to prices and sale urgency, while actions remain black.

**Key Characteristics:** black canvas, white rounded product islands, editorial fashion photography, compact product metadata, pink sale prices, pill purchase controls, and minimal icon navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: black canvas.
- The reviewed screens show this treatment: white rounded product islands.
- The reviewed screens show this treatment: editorial fashion photography.
- The reviewed screens show this treatment: compact product metadata.
- The reviewed screens show this treatment: pink sale prices.
- The reviewed screens show this treatment: pill purchase controls.
- The reviewed screens show this treatment: minimal icon navigation.

# Color and surfaces

### Brand & Accent

Black is the controlling action and navigation color. Hot pink marks price reductions, favorites, and scarcity without becoming a general-purpose CTA.

### Surface

The black page makes white product cards read as isolated display plinths; pale gray appears inside search, filters, and secondary rows.

### Text

Black leads product and totals on white; white leads section labels on black; gray carries brands, old prices, ratings, and logistics.

### Semantic

Pink marks sale and desire; green is reserved for success; selection otherwise relies on monochrome contrast.

# Typography

### Font Family

Use SF Pro for interface copy, with a restrained high-contrast serif treatment only for the compact Select wordmark character.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Major campaign state |
| headline | 20pt | 700 | Section title |
| card-title | 15pt | 600 | Product or total |
| body | 13pt | 400 | Description |
| caption | 10pt | 400 | Rating and delivery |

### Principles

- Let imagery and price lead.
- Keep product metadata dense but calm.
- Maintain crisp black/white hierarchy before adding accent.

### Note on Font Substitutes

Use the platform sans; pair with a compact Didone only where a brand-like editorial label is required.

# Screen composition

### Grid & Container

Discovery and search use two columns; product details and cart use single wide rounded sheets over the black canvas.

### Whitespace Philosophy

White cards supply breathing room, while the black gaps keep the dense grid visually separated.

# Navigation appearance

Use a white bottom bar with black active icon and muted gray inactive destinations.

# Components

### Buttons

Use black pill buttons with white labels for buy and checkout; pale controls handle filters and secondary actions.

Filters and size or delivery options form horizontally scrolling pills with high-contrast selected states.

### Cards & Containers

Cards pair large media with favorite, price, sale, brand, rating, and delivery; cart groups become broad white rounded sheets.

### Inputs & Forms

Search uses a low-contrast gray pill; native controls inherit monochrome styling and visible black focus.

### Status & Build Page

Keep sale countdown, availability, delivery date, installment, and cart total close to the item or action.

### Navigation

Use a white bottom bar with black active icon and muted gray inactive destinations.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Browsing field |
| 1 | White rounded island | Product and cart group |
| 2 | Sticky black pill | Purchase commitment |
| 3 | Sheet over context | Focused choice |

### Decorative Depth

Use polished product photography and alternating black/white masses rather than shadows or atmospheric effects.

# States

Keep sale countdown, availability, delivery date, installment, and cart total close to the item or action.

# iOS adaptation

### Touch Targets

Product cards, favorites, filters, navigation, and checkout remain at least 44pt.

### Collapsing Strategy

Preserve product media, price, variant, delivery, and purchase action; reduce campaign density first.

### Image Behavior

Use consistent portrait or square crops and avoid obscuring the garment with overlay chrome.

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

- Preserve the black field and white product islands.
- Let fashion photography dominate product discovery.
- Style native controls to inherit this visual system.

### Don't

- Don't use pink as the default purchase control.
- Don't add heavy borders or colorful card backgrounds.
- Don't shrink product media to make room for decorative chrome.

</design-context>
