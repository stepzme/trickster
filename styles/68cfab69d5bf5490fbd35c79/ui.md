<design-context>
---
version: alpha
name: MyAmeria-design-analysis
description: "A light modular banking interface built around vivid lime green, softly elevated white product panels, pale gray service tiles, compact account lists, and a prominent central QR scanner."
colors: {primary: "#73D04B", on-primary: "#102010", primary-hover: "#85DA61", primary-focus: "#59B936", ink: "#151719", ink-muted: "#696D6C", ink-subtle: "#9A9E9D", ink-tertiary: "#C2C6C4", canvas: "#F8F9F8", surface-1: "#FFFFFF", surface-2: "#F0F3F1", surface-3: "#E4E8E5", surface-4: "#D6DCD8", hairline: "#E3E7E4", hairline-strong: "#CBD1CD", hairline-tertiary: "#B1B9B4", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#322F37", semantic-success: "#73D04B", semantic-overlay: "#17181C"}
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
rounded: {xs: 6px, sm: 10px, md: 16px, lg: 22px, xl: 28px, xxl: 32px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

MyAmeria uses lime brand energy and customizable white modules to bring products, transfers, payments, apps, exchange rates, and QR actions into one calm banking workspace.

**Key Characteristics:** lime green accent, white modules, pale gray service tiles, product tabs, customizable Home, compact line icons, and a central scan action.

## Colors

### Brand & Accent

Lime marks active navigation, product identity, scanning, new badges, and primary payment. Dark olive text keeps bright actions legible.

### Surface

Use almost-white canvas and crisp white modules, with pale cool-gray tiles for services and app shortcuts.

### Text

Near-black leads products and amounts; neutral gray supports account identifiers and exchange or application detail.

### Semantic

Lime communicates positive or active state; specific warnings use amber or red rather than muddying the brand.

## Typography

### Font Family

Use SF Pro Display for product and transaction headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the product, amount, destination, or exchange value.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the system sans with stable tabular numbers and compact multilingual labels.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home mixes product tabs, horizontal shortcut rails, and wide modules; Services uses structured lists by type.

### Whitespace Philosophy

Give products and transactions breathing room while keeping large service catalogs compact.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use broad rounded panels and subtle surface contrast; avoid decorative shadow on every service tile.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 16px | Cards |
| rounded-lg | 22px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Campaign cards and app icons stay in bounded rounded frames; financial lists and QR states remain image-independent.

## Components

### Buttons

Primary payment uses full-width lime; secondary choices use white or pale gray with simple dark labels.

### Pricing Tabs

Products and service types use compact horizontal tabs with a thin or filled green selected state.

### Cards & Containers

Product panels combine account type, masked value, and overflow menu; modules group one financial domain.

### Inputs & Forms

Payment and transfer fields use clean white groups, green focus, and precise validation messaging.

### Status & Build Page

Place insufficient funds, technical issue, success, and application state beside the relevant account or action.

### Navigation

Use Home, Services, central QR, History, and Apps, with a glowing lime scan control at center.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the calm white banking hierarchy and selective lime emphasis.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't turn all product tiles green or hide amounts inside decorative cards.
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

Keep account, amount, and primary action first; stack shortcut rails and shorten customization prompts.

### Image Behavior

Keep campaigns and partner app art bounded; never overlay transaction data on promotional imagery.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
