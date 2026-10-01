<design-context>
---
version: 1
platform: iOS
name: MegaPay-design-analysis
description: "A mobile design system defined by navy confirmation, gradient balances, 3D service objects, structured receipts, and a central QR."
colors: {primary: "#182233", on-primary: "#FFFFFF", primary-focus: "#182233", ink: "#20242C", ink-muted: "#777981", ink-subtle: "#A7A8AE", ink-tertiary: "#CACBD0", canvas: "#FFFFFF", surface-1: "#F4F6F8", surface-2: "#F4F6F8", surface-3: "#E2E3E7", surface-4: "#D6D7DC", hairline: "#E5E6E9", hairline-strong: "#CFD0D5", hairline-tertiary: "#B6B8BF", inverse-canvas: "#17181C", inverse-surface-1: "#292A30", inverse-surface-2: "#3B3D45", inverse-ink: "#FFFFFF", brand-secure: "#38D98B", semantic-success: "#34A86B", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  compact-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [7, 10]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

MegaPay is defined by navy confirmation, gradient balances, 3D service objects, structured receipts, and a central QR.

**Key Characteristics:** navy confirmation, gradient balances, 3D service objects, structured receipts, and a central QR.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: navy confirmation.
- The reviewed screens show this treatment: gradient balances.
- The reviewed screens show this treatment: 3D service objects.
- The reviewed screens show this treatment: structured receipts.
- The reviewed screens show this treatment: a central QR.

# Color and surfaces

### Brand & Accent

Navy anchors payment; green and violet gradients distinguish telecom modules.

### Surface

Use the canvas for primary content and the grouped surface for controls, cards, and focused sections.

### Text

Primary text remains high-contrast; secondary metadata stays quieter than the current decision.

### Semantic

Use success, warning, and destructive colors only for their conventional meanings.

# Typography

### Font Family

Use SF Pro Display for headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 20pt | 700 | Section title |
| card-title | 15pt | 600 | Primary item |
| body | 12pt | 400 | Detail |
| caption | 9pt | 400 | Metadata |

### Principles

- Lead with the current task or value.
- Align repeated metadata.
- Reserve emphasis for real decisions.

### Note on Font Substitutes

Inter is suitable; preserve hierarchy, contrast, and numeric clarity.

# Screen composition

### Grid & Container

Home stacks balance and services; payments and history use one-column lists.

### Whitespace Philosophy

Dense content stays grouped; focused decisions receive more breathing room.

# Navigation appearance

Preserve the reference navigation hierarchy and make only the active destination prominent.

# Components

### Buttons

Primary actions use the brand color; secondary actions use grouped surfaces and clear labels.

Filters and modes use compact chips or segments with one unmistakable selected state.

### Cards & Containers

Balance cards lead with amount; transaction rows align party, time, and value.

### Inputs & Forms

Inputs inherit the brand focus, shared radius, and text hierarchy instead of generic native styling.

### Status & Build Page

Keep progress, result, and recovery close to the content or action they describe.

### Navigation

Preserve the reference navigation hierarchy and make only the active destination prominent.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary content |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Let content imagery and approved visual language provide depth; keep ordinary controls restrained.

# States

Keep progress, result, and recovery close to the content or action they describe.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Preserve the main decision, stack complex groups, and reduce secondary detail before shrinking type.

### Image Behavior

Preserve source aspect ratios and keep focal content inside safe areas.

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

- Preserve the defining color and content hierarchy.
- Keep primary actions easy to reach.
- Style native controls to inherit the visual system.

### Don't

- Don't introduce unrelated decorative styles.
- Don't hide status or secondary conditions.
- Don't use heavy shadows around every container.

</design-context>
