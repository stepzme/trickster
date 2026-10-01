<design-context>
---
version: 1
platform: iOS
name: Moy-Auchan-design-analysis
description: "A bright, practical grocery interface combining Auchan red, purchase green, white space, compact product grids, loyalty modules, and sticky cart actions."
colors: {primary: "#00A66A", on-primary: "#FFFFFF", primary-focus: "#008B58", ink: "#19191B", ink-muted: "#66686D", ink-subtle: "#9A9CA2", ink-tertiary: "#C2C4C9", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#EDF0F1", surface-3: "#E2E5E7", surface-4: "#D5D9DC", hairline: "#E5E7E9", hairline-strong: "#CDD1D4", hairline-tertiary: "#B4B9BD", inverse-canvas: "#1B1C1E", inverse-surface-1: "#2A2C2F", inverse-surface-2: "#3A3D41", inverse-ink: "#FFFFFF", brand-secure: "#E60027", semantic-success: "#00A66A", semantic-overlay: "#151619"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24, pill: 9999, full: 9999}
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

Moy Auchan is a high-density grocery system where loyalty, personalized promotions, product imagery, and fast add-to-cart controls coexist on a clean white canvas.

**Key Characteristics:** green purchase actions, Auchan red loyalty emphasis, compact cards, barcode access, seasonal rails, and persistent order totals.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: green purchase actions.
- The reviewed screens show this treatment: Auchan red loyalty emphasis.
- The reviewed screens show this treatment: compact cards.
- The reviewed screens show this treatment: barcode access.
- The reviewed screens show this treatment: seasonal rails.
- The reviewed screens show this treatment: persistent order totals.

# Color and surfaces

### Brand & Accent

Green owns selection and purchase. Auchan red identifies loyalty, discounts, active navigation, and branded promotion.

### Surface

White carries the catalog; pale gray separates search, nutrition, recommendations, and checkout groups.

### Text

Near-black prioritizes products and prices; gray supports unit price, stock, delivery, and reviews.

### Semantic

Use green for available and successful states, red for discounts or loyalty urgency, and amber for ratings.

# Typography

### Font Family

Use SF Pro Display for section and commerce headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 20pt | 700 | Section title |
| card-title | 16pt | 600 | Primary item |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Metadata |

### Principles

- Lead with product name, price, and availability.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans; preserve compact price metrics and clear Cyrillic at small sizes.

# Screen composition

### Grid & Container

Discovery uses horizontal offer rails and two-column products; detail and checkout use one structured column.

### Whitespace Philosophy

Catalog density is intentional, but sticky actions and checkout decisions need clear separation.

# Navigation appearance

Use five bottom destinations with Auchan red for the active item and quiet gray elsewhere.

# Components

### Buttons

Green buttons add or advance; red is reserved for branded loyalty actions and discount labels.

Category and filter modes use compact chips, with a single filled or underlined selection.

### Cards & Containers

Product cards align image, name, rating, unit detail, current price, and stepper without heavy framing.

### Inputs & Forms

Search is a wide pale field with scan access; address and checkout rows use simple filled or bordered groups.

### Status & Build Page

Keep stock, delivery threshold, discount validity, and order progress adjacent to the affected item or total.

### Navigation

Use five bottom destinations with Auchan red for the active item and quiet gray elsewhere.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use light surface contrast and sticky bars rather than pronounced shadows.

# States

Keep stock, delivery threshold, discount validity, and order progress adjacent to the affected item or total.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Retain price, add control, and delivery facts; reduce secondary offers before primary commerce content.

### Image Behavior

Contain product packs consistently and preserve campaign copy inside its original safe area.

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

- Preserve the division between green commerce and red loyalty.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't use red as the default purchase color or over-card the catalog.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

</design-context>
