<design-context>
---
version: alpha
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
  display-xl: { fontFamily: YS Text, fontSize: 38px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.9px }
  display-lg: { fontFamily: YS Text, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: YS Text, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: YS Text, fontSize: 21px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 60px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px }
  finance-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  service-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Yandex Pay pairs calm financial hierarchy with playful iridescent surfaces, keeping one dark Pay action stable across cards, offers, services, and camera mode.

## Colors

Use white and graphite as the foundation, with pastel spectral gradients reserved for product identity, balances, and compact promotional moments.

### Brand & Accent

Use the black Pay wordmark and graphite actions as anchors. Pink, lime, cyan, and lilac gradients may identify cards, Split, Plus, and rewards.

### Surface

Use white pages, pale gray containers, and softly blended rainbow card surfaces without hard borders.

### Text

Use near-black for balances and titles, medium gray for explanation, and restrained colored text only for positive amounts or loyalty value.

### Semantic

Use green for incoming money and success, red for errors or risk, amber for attention, and iridescence as product identity rather than status.

## Typography

Large numbers and short labels make balances and transaction outcomes immediately scannable.

### Font Family

Use YS Text or a neutral grotesk with tabular-quality numerals.

### Hierarchy

Use 30–38px payment amounts, 22–26px page titles, 17–20px section titles, 14–16px card values, and 11–13px metadata.

### Principles

Keep currency adjacent to the value, align positive and negative amounts consistently, and avoid verbose labels inside compact finance cards.

### Note on Font Substitutes

Use SF Pro or Inter when YS Text is unavailable; enable tabular numerals in histories and balance lists.

## Layout

Use stacked product cards, two-column utility tiles, service-icon grids, and a single-column history.

### Spacing System

Use a 4px base, 8px inside dense histories, 12px tile gaps, 16px page gutters, and 24px between finance sections.

### Grid & Container

Cards span the main column; shortcuts use two or three columns; payment services use a compact icon grid with aligned labels.

### Whitespace Philosophy

Keep balances and confirmations spacious. Home can be denser, but each financial product must remain an independent readable group.

## Elevation & Depth

Use soft card shadows, translucent gradients, and raised bottom sheets. Critical actions stay flat and high-contrast.

### Decorative Depth

Use misty iridescent halos and small glossy 3D objects; avoid noisy multi-color backgrounds behind transaction text.

## Shapes

Use large rounded cards, rounded-rectangle actions, circular service icons, and pill filters.

### Border Radius Scale

Use 10px for compact icons, 14px for inputs and buttons, 18–24px for cards and sheets, and circles for profile and service marks.

### Photography & Illustration Geometry

Keep 3D service objects small and centered; merchant photography belongs to clearly bounded offer cards rather than finance surfaces.

## Components

Native input and camera mechanics are acceptable, but visible controls must inherit Pay gradients, graphite actions, radii, and number hierarchy.

### Buttons

Use graphite filled buttons for Pay and confirmation, pale gray alternatives, and small gradient selectors for cards or Split.

### Pricing Tabs

There is no pricing table. Use pills for history periods, account filters, and payment sources; selected states gain a stronger outline or fill.

### Cards & Containers

Product cards show source, balance, and action; history rows align merchant and amount; store cards combine photography with benefit badges.

### Inputs & Forms

Use pale fields, numeric keyboards, masked account details, and focused bottom sheets for funding source, transfer, and payment confirmation.

### Status & Build Page

Show pending, paid, incoming, declined, cashback, Split schedule, and credit warnings with explicit labels and aligned amounts.

### Navigation

Use a four-item bottom bar for Home, Stores, Payments, and History, with a centered persistent Pay action above it.

### Footer

There is no footer; identity, settings, security, support, and legal information belong to Profile.

## Do's and Don'ts

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

## Responsive Behavior

Use wider screens to expand grids and histories without inflating transaction controls.

### Breakpoints

Phones use stacked cards and four-column service icons; larger screens may place products beside history or expand offer grids.

### Touch Targets

Pay, scan, card, transfer, service, filter, history row, profile, and navigation targets require at least 44px.

### Collapsing Strategy

Keep amount, currency, source, recipient, status, and primary action; collapse promotion copy and secondary benefit detail first.

### Image Behavior

Use contain for service objects and logos, cover for merchant offers, and stable bounded gradients behind all text.

## Iteration Guide

Start with sign-in, Home products, QR payment, payment confirmation, service grid, History, and Profile. Add Stores, Split, credit, rewards, and advanced transfers next.

## Known Gaps

One hundred twenty-nine available flow structures and representative screens across sign-in, Home, QR payment, Stores, Payments, History, and Profile were sampled. Every transfer, credit, and subscription branch was not exhaustively viewed.

</design-context>

Use the design system above for all UI you generate.
