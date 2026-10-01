<design-context>
---
version: 1
platform: iOS
name: Choco-design-analysis
description: "A broad lifestyle super-app with a white canvas, black hierarchy, warm-orange grocery actions, coral-red restaurant actions, pale rounded service cards, real listing photography, and playful 3D object collages. Grocery, restaurant delivery, takeaway, coupons, entertainment, QR payment, orders, messages, and profile retain distinct accent cues inside one shared shell."
colors:
  primary: "#FFA800"
  on-primary: "#171717"
  primary-soft: "#FFF3CF"
  accent: "#EF3D5D"
  accent-secondary: "#1596D2"
  ink: "#171719"
  ink-muted: "#74777B"
  ink-subtle: "#A9ADB1"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F4F6"
  hairline: "#E3E5E7"
  semantic-success: "#26A269"
  semantic-danger: "#D83C4B"
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

Choco connects food, groceries, takeaway, entertainment, coupons, QR payment, and lifestyle services through one home while allowing each vertical a clear accent and task model.

**Key Characteristics:**
- White shared shell.
- Orange grocery actions.
- Coral restaurant actions.
- Photo-led listings and products.
- Playful 3D service collages.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White shared shell.
- The reviewed screens show this treatment: Orange grocery actions.
- The reviewed screens show this treatment: Coral restaurant actions.
- The reviewed screens show this treatment: Photo-led listings and products.
- The reviewed screens show this treatment: Playful 3D service collages.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Grocery checkout, selection, and progress.
- **Accent** ({colors.accent}): Restaurant ordering and Chocofood identity.
- **Secondary Accent** ({colors.accent-secondary}): Informational services and payment.

### Surface
- **Canvas** ({colors.canvas}): Home, vertical catalogs, orders, and profile.
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

- **SF Pro Display** — vertical and section headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36pt bold for major statements, 22pt bold for screen headings, 16pt semibold for cards, 14pt regular for detail, and 15pt semibold for primary actions.

### Principles

- Keep vertical identity visible.
- Use one primary accent within a task.
- Show fees before payment.
- Let photos identify merchants and offers.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt edge gutters, 12pt control gaps, and 16pt card padding.

### Grid & Container

Home stacks large service cards and smaller category tiles. Grocery uses dense product rails and grids; restaurant and coupon views use large photo listings; checkout uses stacked sheets.

### Whitespace Philosophy

Separate verticals on home, then tighten density within the selected catalog.

# Navigation appearance

Home routes into groceries, restaurants, takeaway, entertainment, QR payment, messages, and profile; each vertical narrows navigation.

# Components

### Buttons

Orange commits grocery tasks; coral-red commits restaurant tasks. Secondary controls remain neutral and compact.

Each vertical gets its own relevant bottom navigation while the shared home remains visually consistent.

### Cards & Containers

Home cards introduce services; product, restaurant, entertainment, and coupon cards combine imagery with price, rating, discount, or ETA.

### Inputs & Forms

Address, delivery notes, promo, bonuses, payment, and profile fields use simple one-column forms.

### Status & Build Page

Show confirmed, assembling, courier assigned, delayed, cancelled, delivered, and rated through a clear staged timeline.

### Navigation

Home routes into groceries, restaurants, takeaway, entertainment, QR payment, messages, and profile; each vertical narrows navigation.

Basket or pay action stays above the safe area; vertical browsing uses its dedicated bottom bar.

# Imagery and icons

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use pale cards, soft object shadows, and selective 3D collages. Transaction screens remain mostly flat.

# States

Show confirmed, assembling, courier assigned, delayed, cancelled, delivered, and rated through a clear staged timeline.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44pt.

### Collapsing Strategy

Preserve vertical, address, basket total, and primary action. Collapse cross-sell and promotional modules first.

### Image Behavior

Contain 3D objects on home cards; crop real listing photos around the subject and keep price or status outside imagery.

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

- Keep the current vertical explicit.
- Use its accent consistently.
- Expose delivery and service fees.
- Use 3D collages only for discovery.
- Keep order progress staged.

### Don't

- Don't merge grocery and restaurant baskets.
- Don't let vertical colors compete.
- Don't use 3D art in order details.
- Don't hide address requirements.
- Don't replace listing photography with icons.

</design-context>
