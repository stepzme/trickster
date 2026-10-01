<design-context>
---
version: 1
platform: iOS
name: Yandex-Pay-design-analysis
description: "A bright financial system combining white space, graphite actions, and soft iridescent card surfaces in pink, lime, cyan, and lilac. Large balance figures and calm rounded modules make complex payment products feel approachable, while the persistent black Pay control remains the stable action anchor."

colors:
  primary: "#26272A"
  on-primary: "#FFFFFF"
  primary-pressed: "#111214"
  accent-pink: "#F36BA5"
  accent-lime: "#A8F273"
  accent-cyan: "#9CEAF2"
  accent-lilac: "#B9A7FF"
  ink: "#171719"
  ink-muted: "#6C6D72"
  ink-subtle: "#A3A4A9"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F5"
  surface-3: "#E8E9EB"
  hairline: "#DADCE0"
  semantic-success: "#23965A"
  semantic-warning: "#E3A316"
  semantic-danger: "#E14747"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 38, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.9 }
  display-lg: { fontFamily: YS Text, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: YS Text, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: YS Text, fontSize: 21, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 60 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  finance-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  service-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Yandex Pay pairs calm financial hierarchy with playful iridescent surfaces, keeping one dark Pay action stable across cards, offers, services, and camera mode.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A bright financial system combining white space, graphite actions, and soft iridescent card surfaces in pink, lime, cyan, and lilac.
- The dominant canvas token is #FFFFFF and the primary accent token is #26272A.
- The recorded display style is 38 points while the body style is 14 points.
- Navigation uses a four-item bottom bar for Home, Stores, Payments, and History, with a centered persistent Pay action above it.
- The reviewed screens use this hierarchy: Large balance figures and calm rounded modules make complex payment products feel approachable, while the persistent black Pay control remains the stable action anchor.

# Color and surfaces

Use white and graphite as the foundation, with pastel spectral gradients reserved for product identity, balances, and compact promotional moments.

### Brand & Accent

Use the black Pay wordmark and graphite actions as anchors. Pink, lime, cyan, and lilac gradients may identify cards, Split, Plus, and rewards.

### Surface

Use white pages, pale gray containers, and softly blended rainbow card surfaces without hard borders.

### Text

Use near-black for balances and titles, medium gray for explanation, and restrained colored text only for positive amounts or loyalty value.

### Semantic

Use green for incoming money and success, red for errors or risk, amber for attention, and iridescence as product identity rather than status.

# Typography

Large numbers and short labels make balances and transaction outcomes immediately scannable.

### Font Family

Use YS Text or a neutral grotesk with tabular-quality numerals.

### Principles

Keep currency adjacent to the value, align positive and negative amounts consistently, and avoid verbose labels inside compact finance cards.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; enable tabular numerals in histories and balance lists.

# Screen composition

Use stacked product cards, two-column utility tiles, service-icon grids, and a single-column history.

### Spacing System

Use a 4pt base, 8pt inside dense histories, 12pt tile gaps, 16pt page gutters, and 24pt between finance sections.

### Grid & Container

Cards span the main column; shortcuts use two or three columns; payment services use a compact icon grid with aligned labels.

### Whitespace Philosophy

Keep balances and confirmations spacious. Home can be denser, but each financial product must remain an independent readable group.

# Navigation appearance

Use a four-item bottom bar for Home, Stores, Payments, and History, with a centered persistent Pay action above it.

# Components

Native input and camera mechanics are acceptable, but visible controls must inherit Pay gradients, graphite actions, radii, and number hierarchy.

### Buttons

Use graphite filled buttons for Pay and confirmation, pale gray alternatives, and small gradient selectors for cards or Split.

### Cards & Containers

Product cards show source, balance, and action; history rows align merchant and amount; store cards combine photography with benefit badges.

### Inputs & Forms

Use pale fields, numeric keyboards, masked account details, and focused bottom sheets for funding source, transfer, and payment confirmation.

### Status & Build Page

Show pending, paid, incoming, declined, cashback, Split schedule, and credit warnings with explicit labels and aligned amounts.

### Navigation

Use a four-item bottom bar for Home, Stores, Payments, and History, with a centered persistent Pay action above it.

# Imagery and icons

Use soft card shadows, translucent gradients, and raised bottom sheets. Critical actions stay flat and high-contrast.

### Decorative Depth

Use misty iridescent halos and small glossy 3D objects; avoid noisy multi-color backgrounds behind transaction text.

# States

Show pending, paid, incoming, declined, cashback, Split schedule, and credit warnings with explicit labels and aligned amounts.

# iOS adaptation

Use wider screens to expand grids and histories without inflating transaction controls.

Phones use stacked cards and four-column service icons; larger screens may place products beside history or expand offer grids.

### Touch Targets

Pay, scan, card, transfer, service, filter, history row, profile, and navigation targets require at least 44pt.

### Collapsing Strategy

Keep amount, currency, source, recipient, status, and primary action; collapse promotion copy and secondary benefit detail first.

### Image Behavior

Use contain for service objects and logos, cover for merchant offers, and stable bounded gradients behind all text.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

Make money movement legible before making it delightful.

### Do

- Keep amounts, source, recipient, and status explicit.
- Preserve the stable dark Pay action.
- Limit gradients to bounded product surfaces.
- Style native controls in the Pay system.

### Don't

- Do not use default platform blue.
- Do not rely on gradients for semantic status.
- Do not obscure fees or schedules.
- Do not mix merchant imagery into balance cards.

</design-context>
