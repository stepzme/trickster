<design-context>
---
version: 1
platform: iOS
name: Mycar-kz-design-analysis
description: "A vehicle marketplace system using cool light-gray background, crisp white cards, Mycar blue actions, large automotive photography, green contact controls, and compact 3D service icons."
colors: {primary: "#119AF1", on-primary: "#FFFFFF", primary-focus: "#087CC8", ink: "#141619", ink-muted: "#666A70", ink-subtle: "#989CA2", ink-tertiary: "#C0C4C9", canvas: "#F2F4F7", surface-1: "#FFFFFF", surface-2: "#E9EDF1", surface-3: "#DDE2E7", surface-4: "#D0D6DC", hairline: "#E1E5E9", hairline-strong: "#C9CFD5", hairline-tertiary: "#AFB7BF", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#2447D9", semantic-success: "#0DB954", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Mycar.kz combines image-first car commerce with a broad automotive-service grid, progressive seller forms, blue financing actions, and direct green contact controls.

**Key Characteristics:** large car photography, cool gray canvas, white cards, bright blue actions, green seller contact, two-column service grid, and compact rendered icons.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: large car photography.
- The reviewed screens show this treatment: cool gray canvas.
- The reviewed screens show this treatment: white cards.
- The reviewed screens show this treatment: bright blue actions.
- The reviewed screens show this treatment: green seller contact.
- The reviewed screens show this treatment: two-column service grid.
- The reviewed screens show this treatment: compact rendered icons.

# Color and surfaces

### Brand & Accent

Bright blue drives platform actions and progress; deeper royal blue supports identity. Green is reserved for direct seller communication and positive state.

### Surface

Use cool light gray behind crisp white listing, service, and form cards.

### Text

Near-black carries vehicle names and prices; gray supports location, mileage, specification labels, and finance context.

### Semantic

Green marks call or message and success; yellow can highlight finance estimates; red is limited to destructive or urgent state.

# Typography

### Font Family

Use SF Pro Display for vehicle prices and section headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 21pt | 700 | Section title |
| card-title | 16pt | 600 | Primary item |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Metadata |

### Principles

- Lead with vehicle, price, monthly estimate, or form decision.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular pricing and readable Kazakh or Russian labels.

# Screen composition

### Grid & Container

Home and listings use two image-led columns; service discovery uses two equal tiles; detail and selling use one column.

### Whitespace Philosophy

Keep catalog cards compact but give specs, finance, and form decisions clear separation.

# Navigation appearance

Use four bottom destinations with black active icon and pale gray inactive icons; keep Mycar mark centered at top.

# Components

### Buttons

Blue drives calculate, next, and platform actions; paired green buttons handle message and call.

Form choices use filled blue pills; navigation uses one dark active icon rather than colored tab backgrounds.

### Cards & Containers

Listing cards prioritize image, model, price, and seller; service cards combine a render, title, and short description.

### Inputs & Forms

Selling forms use grouped choices, clear progress, large blue continuation, and styled switches or selectors.

### Status & Build Page

Keep finance estimate, step count, listing draft, verification, and service state beside the affected action.

### Navigation

Use four bottom destinations with black active icon and pale gray inactive icons; keep Mycar mark centered at top.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use product photography, pale card contrast, and limited pedestal effects in icons rather than heavy shadows.

# States

Keep finance estimate, step count, listing draft, verification, and service state beside the affected action.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Preserve car image, model, price, and action; stack specs and shorten service descriptions.

### Image Behavior

Use consistent vehicle crops and protect embedded campaign copy; never distort listing photos.

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

- Preserve the separation between blue platform actions and green contact.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't substitute illustration for real vehicle photography in listings.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- iPad and landscape layouts were not represented.

</design-context>
