<design-context>
---
version: 1
platform: iOS
name: CDEK-design-analysis
description: "A logistics super-app combining light-gray canvases, white rounded modules, neon-green progression, black totals, 3D service icons, package diagrams, maps, order cards, and an embedded shopping feed. Sending, tracking, pickup points, payment, support, and commerce remain separated inside one modular shell."
colors:
  primary: "#32E85A"
  on-primary: "#101112"
  primary-soft: "#DFFFE7"
  accent: "#111214"
  accent-secondary: "#28B75A"
  ink: "#151617"
  ink-muted: "#74787B"
  ink-subtle: "#A9ADAF"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#EBECEF"
  hairline: "#DFE1E4"
  semantic-success: "#2DD257"
  semantic-danger: "#D83D48"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
---

# Overview

CDEK centers package sending and order tracking, then layers pickup points, business tools, fulfillment, and shopping around the same modular home.

**Key Characteristics:**
- Pale-gray app canvas.
- White rounded task modules.
- Neon-green continuation actions.
- Clay-like 3D service icons.
- Package size diagrams and explicit totals.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Pale-gray app canvas.
- The reviewed screens show this treatment: White rounded task modules.
- The reviewed screens show this treatment: Neon-green continuation actions.
- The reviewed screens show this treatment: Clay-like 3D service icons.
- The reviewed screens show this treatment: Package size diagrams and explicit totals.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Progress, selection, confirmation, and logistics success.
- **Accent** ({colors.accent}): Totals, headings, and secondary primary actions.
- **Secondary Accent** ({colors.accent-secondary}): Positive status and service emphasis.

### Surface
- **Canvas** ({colors.canvas}): Home, sending, tracking, and shopping.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family

- **SF Pro Display** — task headings and order totals.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36pt bold for major statements, 22pt bold for screen headings, 16pt semibold for cards, 14pt regular for detail, and 15pt semibold for primary actions.

### Principles

- Keep route, package, rate, and total visible.
- Use green for progression, not decoration.
- Separate shipping and shopping state.
- Pair package size with a concrete diagram.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt edge gutters, 12pt control gaps, and 16pt card padding.

### Grid & Container

Home uses story cards, a task grid, orders, and shopping feed. Sending is a linear stack of route, package, rate, people, review, and payment modules.

### Whitespace Philosophy

Separate logistics stages with clear module gaps; dense shopping cards stay inside their own section.

# Navigation appearance

Home and profile expose shipping, orders, pickup points, business, shopping, and support without merging active tasks.

# Components

### Buttons

Neon-green full-width buttons advance the shipment. Black buttons serve secondary high-commitment actions such as tracking.

Rate options and pickup choices use outlined cards with green selected state.

### Cards & Containers

Route, package, rate, total, order status, pickup point, and instruction modules remain independently scannable.

### Inputs & Forms

City, address, dimensions, value, sender, recipient, promo, and payment use focused sheets and labeled rows.

### Status & Build Page

Show draft, paid, awaiting drop-off, in transit, ready, delivered, undelivered, and repeated order with labels and guidance.

### Navigation

Home and profile expose shipping, orders, pickup points, business, shopping, and support without merging active tasks.

A persistent total and next action sit above the safe area during shipment creation.

# Imagery and icons

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use modest card shadow and soft 3D icons. Package renders clarify scale rather than decorate.

# States

Show draft, paid, awaiting drop-off, in transit, ready, delivered, undelivered, and repeated order with labels and guidance.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44pt.

### Collapsing Strategy

Preserve route, package, rate, total, and next action. Collapse stories and shopping promotions before logistics state.

### Image Behavior

Contain 3D service objects and package diagrams with their full silhouette. Crop retail photos only within product cards.

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

- Keep shipment total current.
- Show package dimensions visually.
- Separate route and package edits.
- Use green for progression.
- Keep shopping subordinate to logistics.

### Don't

- Don't mix shopping basket with parcel order.
- Don't hide pickup requirements.
- Don't use 3D icons behind form data.
- Don't rely on color alone for delivery status.
- Don't remove the review before payment.

</design-context>
