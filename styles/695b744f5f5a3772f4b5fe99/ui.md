<design-context>
---
version: alpha
name: MTBank-Moby-design-analysis
description: "A bright mobile-banking system with saturated blue account headers, white rounded product cards, cool gray grouped backgrounds, fine line icons, and a cyan-magenta Moby brand accent."
colors: {primary: "#1677E8", on-primary: "#FFFFFF", primary-hover: "#2D8AF0", primary-focus: "#0B61C5", ink: "#17191C", ink-muted: "#697079", ink-subtle: "#969DA6", ink-tertiary: "#C3C8CE", canvas: "#FFFFFF", surface-1: "#F2F3F4", surface-2: "#E8EBEE", surface-3: "#DDE1E5", surface-4: "#CFD5DB", hairline: "#E2E5E8", hairline-strong: "#CBD0D5", hairline-tertiary: "#AFB6BE", inverse-canvas: "#0A1830", inverse-surface-1: "#102949", inverse-surface-2: "#173B62", inverse-ink: "#FFFFFF", brand-secure: "#E31E55", semantic-success: "#2FB978", semantic-overlay: "#101820"}
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
rounded: {xs: 6px, sm: 12px, md: 18px, lg: 24px, xl: 28px, xxl: 32px, pill: 9999px, full: 9999px}
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
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 8px 10px}
---
## Overview

MTBank Moby uses a saturated blue account stage and soft white product cards to make balances, actions, cards, deposits, and applications feel direct and approachable.

**Key Characteristics:** blue gradient headers, generous rounded cards, line icons, account carousels, white quick-action tiles, and a small cyan-magenta identity.

## Colors

### Brand & Accent

Electric blue drives active navigation, action icons, and financial focus; cyan-magenta belongs to the Moby mark and rare brand moments.

### Surface

White owns operational content, while cool light gray groups stacked products and blue gradients frame account context.

### Text

Near-black carries balances and product titles; blue may emphasize actions, dates, and favorable product facts.

### Semantic

Green indicates positive money movement and success; red is reserved for warnings or destructive decisions.

## Typography

### Font Family

Use SF Pro Display for balances and section headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 20px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with balance, product status, and next action.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the system sans with tabular numerals; keep currency and masked account identifiers stable.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home stacks full-width account and deposit cards; Products uses simple vertical rows beneath a promotion rail.

### Whitespace Philosophy

Give money values and quick actions room, then keep settings and product lists compact.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use gradient headers, nested card layers, and restrained soft shadows only where a product floats above the grouped canvas.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 12px | Buttons and fields |
| rounded-md | 18px | Cards |
| rounded-lg | 24px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Keep cards, account art, and promotional imagery within generous rounded rectangles; avoid decorative cropping near financial data.

## Components

### Buttons

Primary actions use blue; the three core money actions appear as equal white tiles within the blue header.

### Pricing Tabs

History, settings, and information use a thin segmented row with a precise colored indicator.

### Cards & Containers

Product cards combine balance, masked identifier, status, bonuses, and one clear expansion or action affordance.

### Inputs & Forms

Inputs and keypads remain light and sparse, with blue focus and no generic default styling.

### Status & Build Page

Attach transaction direction, pending state, balance impact, and product availability to the relevant card or row.

### Navigation

Use four bottom destinations in a white rounded bar; the active icon may use the Moby gradient while labels remain crisp.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the blue account stage and calm white product hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't extend cosmic launch art into every transactional surface.
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

Preserve balances and money actions first, then stack product metadata and shorten promotional content.

### Image Behavior

Contain promotional art in dedicated banners and keep it away from balances, limits, and control labels.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
