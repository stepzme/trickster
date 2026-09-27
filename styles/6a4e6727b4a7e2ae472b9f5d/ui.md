<design-context>
---
version: alpha
name: Moy-Auchan-design-analysis
description: "A bright, practical grocery interface combining Auchan red, purchase green, white space, compact product grids, loyalty modules, and sticky cart actions."
colors: {primary: "#00A66A", on-primary: "#FFFFFF", primary-hover: "#13B77C", primary-focus: "#008B58", ink: "#19191B", ink-muted: "#66686D", ink-subtle: "#9A9CA2", ink-tertiary: "#C2C4C9", canvas: "#FFFFFF", surface-1: "#F5F6F7", surface-2: "#EDF0F1", surface-3: "#E2E5E7", surface-4: "#D5D9DC", hairline: "#E5E7E9", hairline-strong: "#CDD1D4", hairline-tertiary: "#B4B9BD", inverse-canvas: "#1B1C1E", inverse-surface-1: "#2A2C2F", inverse-surface-2: "#3A3D41", inverse-ink: "#FFFFFF", brand-secure: "#E60027", semantic-success: "#00A66A", semantic-overlay: "#151619"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 24px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Moy Auchan is a high-density grocery system where loyalty, personalized promotions, product imagery, and fast add-to-cart controls coexist on a clean white canvas.

**Key Characteristics:** green purchase actions, Auchan red loyalty emphasis, compact cards, barcode access, seasonal rails, and persistent order totals.

## Colors

### Brand & Accent

Green owns selection and purchase. Auchan red identifies loyalty, discounts, active navigation, and branded promotion.

### Surface

White carries the catalog; pale gray separates search, nutrition, recommendations, and checkout groups.

### Text

Near-black prioritizes products and prices; gray supports unit price, stock, delivery, and reviews.

### Semantic

Use green for available and successful states, red for discounts or loyalty urgency, and amber for ratings.

## Typography

### Font Family

Use SF Pro Display for section and commerce headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 20px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with product name, price, and availability.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans; preserve compact price metrics and clear Cyrillic at small sizes.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Discovery uses horizontal offer rails and two-column products; detail and checkout use one structured column.

### Whitespace Philosophy

Catalog density is intentional, but sticky actions and checkout decisions need clear separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use light surface contrast and sticky bars rather than pronounced shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Cards |
| rounded-lg | 16px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Product photography stays isolated on white or pale cards; campaign images use bounded rounded frames.

## Components

### Buttons

Green buttons add or advance; red is reserved for branded loyalty actions and discount labels.

### Pricing Tabs

Category and filter modes use compact chips, with a single filled or underlined selection.

### Cards & Containers

Product cards align image, name, rating, unit detail, current price, and stepper without heavy framing.

### Inputs & Forms

Search is a wide pale field with scan access; address and checkout rows use simple filled or bordered groups.

### Status & Build Page

Keep stock, delivery threshold, discount validity, and order progress adjacent to the affected item or total.

### Navigation

Use five bottom destinations with Auchan red for the active item and quiet gray elsewhere.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the division between green commerce and red loyalty.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't use red as the default purchase color or over-card the catalog.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten secondary metadata |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44px.

### Collapsing Strategy

Retain price, add control, and delivery facts; reduce secondary offers before primary commerce content.

### Image Behavior

Contain product packs consistently and preserve campaign copy inside its original safe area.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
