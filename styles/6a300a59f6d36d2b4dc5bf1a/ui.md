<design-context>
---
version: 1
platform: iOS
name: Janymda-design-analysis
description: "A bright telecom super-app built on white and pale gray, with a blue-to-violet central action, yellow commercial CTAs, candy-colored 3D service icons, and dense modular content. Rounded banners, compact category grids, media rails, and card-like tariff sections keep many services approachable without hiding their breadth."
colors:
  primary: "#4457F2"
  on-primary: "#FFFFFF"
  primary-focus: "#3544D1"
  ink: "#17171C"
  ink-muted: "#5F6068"
  ink-subtle: "#9697A0"
  ink-tertiary: "#B9BAC2"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F9"
  surface-2: "#EFF0F4"
  surface-3: "#E4E6ED"
  surface-4: "#D7DAE4"
  hairline: "#E8E9ED"
  hairline-strong: "#D3D5DC"
  hairline-tertiary: "#B8BBC5"
  inverse-canvas: "#17171C"
  inverse-surface-1: "#292A31"
  inverse-surface-2: "#3A3B44"
  inverse-ink: "#FFFFFF"
  brand-secure: "#934EF5"
  semantic-success: "#2DBE73"
  semantic-overlay: "#17171C"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  service-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8}
  promo-banner: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  tariff-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  catalog-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 16}
  status-badge: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Janymda is a bright, modular super-app. It balances a dense service catalog with playful 3D icons, strong commercial banners, and conventional navigation.

**Key Characteristics:**
- White canvas with pale gray grouping surfaces.
- Blue-violet central launcher and yellow purchase actions.
- Four-column service icon grid.
- Rounded promotional banners and horizontal media rails.
- Card-stacked tariff details with a sticky CTA.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White canvas with pale gray grouping surfaces.
- The reviewed screens show this treatment: Blue-violet central launcher and yellow purchase actions.
- The reviewed screens show this treatment: Four-column service icon grid.
- The reviewed screens show this treatment: Rounded promotional banners and horizontal media rails.
- The reviewed screens show this treatment: Card-stacked tariff details with a sticky CTA.

# Color and surfaces

### Brand & Accent
- Blue and violet identify the launcher, onboarding progress, and selected service context.
- Yellow is reserved for major telecom offers and connect actions.

### Surface
- White dominates; pale gray blocks separate favorites, media, and commercial modules.
- Dark navy may anchor event or partner banners.

### Text
- Near-black carries labels and prices.
- Neutral gray supports explanations, inactive navigation, and long terms.

### Semantic
- Green is limited to success or availability.
- Red notification dots signal unread messages without becoming a general accent.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text throughout; the identity comes from color, imagery, and icon objects rather than a display face.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Onboarding message |
| display-md | 25pt | 700 | Offer heading |
| headline | 21pt | 700 | Section title |
| card-title | 17pt | 600 | Tariff and banner title |
| body | 14pt | 400 | Supporting copy |
| caption | 10pt | 400 | Service and navigation label |

### Principles

- Use strong weight to distinguish sections in dense feeds.
- Keep service labels short and center aligned.
- Keep prices and plan names visually separate from legal detail.

### Note on Font Substitutes

Use a neutral system sans with similar metrics when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 12pt gaps between modules, and 16pt horizontal screen padding.

### Grid & Container

Service shortcuts use four equal columns. Promos span the content width; media and store cards scroll horizontally.

### Whitespace Philosophy

Whitespace should clarify module boundaries, not reduce useful density. Preserve breathing room around tariff prices and CTAs.

# Navigation appearance

Keep five destinations fixed and emphasize the center launcher as a circular blue-violet action. The expanded state changes it to a close icon.

# Components

### Buttons

Use blue-violet for navigation-forward actions and saturated yellow for plan connection. Secondary actions use pale gray fill.

Plan variants use compact segmented controls or horizontal cards. Make the selected plan obvious through fill and weight.

### Cards & Containers

Modules are shallow rounded rectangles. Tariff detail stacks distinct benefit, price, and legal sections rather than one oversized card.

### Inputs & Forms

Inputs use pale fill, dark text, and minimal borders. Keep each commercial step focused on one selection.

### Status & Build Page

Use compact badges for bonuses, unread counts, and partner markers. Never cover the service label or primary price.

### Navigation

Keep five destinations fixed and emphasize the center launcher as a circular blue-violet action. The expanded state changes it to a close icon.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Main feed |
| 1 | Pale gray group | Favorites and plan sections |
| 2 | Rounded white card | Tariff benefits |
| 3 | Raised bottom sheet | Full catalog and support |

### Decorative Depth

Use subtle gray separation and 3D icon shading. Avoid heavy card shadows.

# States

Use compact badges for bonuses, unread counts, and partner markers. Never cover the service label or primary price.

# iOS adaptation

### Touch Targets

Grid items, launcher, settings, and bottom navigation retain at least 44pt hit areas.

### Collapsing Strategy

Media rails scroll horizontally. Catalog sheets scroll vertically; price and connect action remain reachable near the bottom edge.

### Image Behavior

Use aspect-fill for media and product imagery. Keep offer text baked into banners within a protected safe area.

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

- Keep the service grid consistent.
- Separate modules with surface color and headings.
- Reserve yellow for strong commercial intent.
- Pair dense offers with an obvious next action.
- Keep service icons friendly and recognizable.

### Don't

- Don't give every module a different layout.
- Don't hide core services inside banners.
- Don't mix long legal text with promotional headlines.
- Don't add dark outlines to 3D icons.
- Don't use the central gradient for ordinary buttons.

# Known gaps

- Motion of the central launcher was not measured.
- iPad and landscape states were not represented.
- Several secondary service flows were cataloged but not deeply reviewed.

</design-context>
