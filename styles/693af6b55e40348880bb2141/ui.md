<design-context>
---
version: alpha
name: My-Rostelecom-design-analysis
description: "A telecom account system pairing a deep navy-to-violet dashboard header with white grouped cards, vivid violet navigation, orange payment actions, and occasional hand-painted campaign art."
colors: {primary: "#8200FF", on-primary: "#FFFFFF", primary-hover: "#972BFF", primary-focus: "#6900D1", ink: "#17181C", ink-muted: "#6D6E75", ink-subtle: "#9FA0A6", ink-tertiary: "#C6C7CC", canvas: "#F6F6F7", surface-1: "#FFFFFF", surface-2: "#EFEEF2", surface-3: "#E3E2E7", surface-4: "#D6D5DB", hairline: "#E5E4E8", hairline-strong: "#CCC9D0", hairline-tertiary: "#B3AFB8", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#FF5B20", semantic-success: "#45C77C", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 28px, pill: 9999px, full: 9999px}
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

My Rostelecom uses a dark branded account stage above bright operational service cards, keeping balance, payment, connectivity, equipment, and offers easy to scan.

**Key Characteristics:** navy-violet gradient, violet navigation, orange payment, thick white service groups, outlined actions, and seasonal editorial art.

## Colors

### Brand & Accent

Violet identifies navigation, connection, and brand focus. Orange is reserved for top-up and secondary outlined commerce actions.

### Surface

White cards group services over light gray; the account header uses a deep navy-violet field for balance and quick actions.

### Text

Near-black carries tariff and service facts; gray supports recurring price, equipment, and inactive status.

### Semantic

Green indicates active service; red remains reserved for errors or destructive actions.

## Typography

### Font Family

Use SF Pro Display for account and tariff headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with balance, monthly fee, active status, or next connection step.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans and preserve the bold, plain Cyrillic hierarchy.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home stacks wide grouped cards; Connect uses a two-column offer grid and tariff detail uses one column.

### Whitespace Philosophy

Use strong gaps between service families while keeping rows inside each group compact.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Let the gradient account stage and white grouped blocks establish layers; ordinary rows stay flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 14px | Cards |
| rounded-lg | 18px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Seasonal art stays full-bleed at launch or inside story cards; service icons remain simple line symbols.

## Components

### Buttons

Violet drives connection and confirmation; orange handles top-up and selected outlined prompts.

### Pricing Tabs

Account, bonus, connection, and settings destinations remain fixed; carousel dots indicate tariff options.

### Cards & Containers

Service cards group active products, options, and equipment with visible recurring price and state.

### Inputs & Forms

Registration and payment fields use sparse light surfaces with violet focus and disabled-state clarity.

### Status & Build Page

Place active, loading, promised-payment, autopay, and connection states beside their specific account or service.

### Navigation

Use four bottom destinations, with violet for the active item and very light gray for inactive items.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the split between dark account context and white service operations.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't mix orange and violet indiscriminately across all controls.
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

Keep balance, payment, and active services first; stack package choices and defer survey content.

### Image Behavior

Keep campaign art bounded and preserve its focal subject; service UI should not depend on imagery.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
