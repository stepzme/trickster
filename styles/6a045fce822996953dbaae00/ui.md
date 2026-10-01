<design-context>
---
version: 1
platform: iOS
name: Klarna-design-analysis
description: "A light shopping-finance interface combining white surfaces, a lavender atmospheric gradient, Klarna pink labels, near-black rounded actions, large financial totals, soft elevated cards, and a translucent floating dock. Merchant photography and logos supply variety while the product chrome remains calm and spacious."
colors:
  primary: "#FFB3D3"
  on-primary: "#111014"
  primary-focus: "#ED92BA"
  ink: "#17151A"
  ink-muted: "#69656E"
  ink-subtle: "#A19CA7"
  ink-tertiary: "#C5C0CA"
  canvas: "#FFFFFF"
  surface-1: "#FAF8FB"
  surface-2: "#F2EEF5"
  surface-3: "#E8E1ED"
  surface-4: "#DCD3E2"
  hairline: "#E8E3EA"
  hairline-strong: "#D3CDD7"
  hairline-tertiary: "#B8B0BE"
  inverse-canvas: "#130B28"
  inverse-surface-1: "#2B174E"
  inverse-surface-2: "#44266D"
  inverse-ink: "#FFFFFF"
  brand-secure: "#C2A8FF"
  semantic-success: "#2CB676"
  semantic-overlay: "#17151A"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 42, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.4}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0}
  display-md: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 48}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  finance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 18}
  store-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [12, 16]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: [10, 16]}
---

# Overview

Klarna is an airy shopping-finance system with lavender atmosphere, soft elevated cards, large totals, and decisive black pill actions.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A light shopping-finance interface combining white surfaces, a lavender atmospheric gradient, Klarna pink labels, near-black rounded actions, large financial totals.
- The dominant canvas token is #FFFFFF and the primary accent token is #FFB3D3.
- The recorded display style is 42 points while the body style is 14 points.
- Navigation keeps the four-item translucent dock floating above content.
- The reviewed screens use this hierarchy: Merchant photography and logos supply variety while the product chrome remains calm and spacious.

# Color and surfaces

### Brand & Accent
- Klarna pink labels branded payment moments; lavender creates the ambient financial background.
- Near-black is the primary action color.

### Surface
- White cards sit on white or lavender-gradient canvases; pale gray supports embedded checkout information.

### Text
- Near-black carries totals and headings; gray supports schedules, store metadata, and status.

### Semantic
- Green marks cashback or positive status. Pink never substitutes for warning or success.

# Typography

### Font Family

Use SF Pro Display for totals and campaign claims, SF Pro Text for commerce and payment detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42pt | 700 | Amount owed |
| display-lg | 34pt | 700 | Campaign claim |
| headline | 22pt | 700 | Section title |
| card-title | 17pt | 600 | Store or payment title |
| body | 14pt | 400 | Supporting detail |
| caption | 10pt | 500 | Navigation |

### Principles

- Lead financial screens with the total.
- Keep merchant labels short and logo-supported.
- Use large editorial claims only in campaign cards.

### Note on Font Substitutes

Use a neutral system sans with bold, compact numeric forms.

# Screen composition

### Grid & Container

Store logos use three columns; offers use horizontal rails; payments use one stacked column.

### Whitespace Philosophy

Generous space reinforces trust. Do not compress totals, payment schedules, or checkout decisions.

# Navigation appearance

Keep the four-item translucent dock floating above content. Active state uses a pale filled segment.

# Components

### Buttons

Primary actions are near-black pills; Klarna payment actions may use pink pills inside merchant context.

Payment plans use clear stacked options with schedule and cost rather than decorative tabs.

### Cards & Containers

Cards are soft white rectangles with generous radius. Campaign cards mix editorial copy and small photography collages.

### Inputs & Forms

Search is a white pill. Checkout fields inherit the Klarna spacing and pink/black action hierarchy even when embedded in a merchant flow.

### Status & Build Page

Use large totals, scheduled-payment labels, compact delivery status, and three-dot loading indicators.

### Navigation

Keep the four-item translucent dock floating above content. Active state uses a pale filled segment.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White or lavender canvas | Main screens |
| 1 | Soft white card | Stores and payments |
| 2 | Translucent capsule | Bottom dock |
| 3 | Embedded merchant browser | Checkout |

### Decorative Depth

Use soft shadows, blur, and ambient gradients; avoid hard borders.

# States

Use large totals, scheduled-payment labels, compact delivery status, and three-dot loading indicators.

# iOS adaptation

### Touch Targets

Dock items, store tiles, and payment actions retain at least 44pt hit areas.

### Collapsing Strategy

Offer rails scroll horizontally; payments expand vertically; the dock stays fixed.

### Image Behavior

Use aspect-fill for lifestyle offers and preserve merchant logos without cropping.

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

- Keep totals visually dominant.
- Use lavender as atmosphere, not dense fill.
- Preserve merchant identity inside bounded media.
- Keep actions pill-shaped and decisive.
- Integrate embedded checkout visually.

### Don't

- Don't use pink for every action.
- Don't crowd financial cards.
- Don't introduce hard card borders.
- Don't replace merchant photography with illustration.
- Don't let embedded browser chrome dominate.

# Known gaps

- Checkout verification motion was not measured.
- iPad layouts were not represented.
- Dark appearance was not reviewed in this sample.

</design-context>
