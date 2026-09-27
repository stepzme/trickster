<design-context>
---
version: alpha
name: My-O-Bank-design-analysis
description: "A dense super-app system of pale gray background, bright white service modules, hot magenta ecosystem accents, cyan utility links, product imagery, and a floating translucent dock."
colors: {primary: "#EC008C", on-primary: "#FFFFFF", primary-hover: "#F22AA2", primary-focus: "#C60076", ink: "#17181B", ink-muted: "#65676D", ink-subtle: "#96989E", ink-tertiary: "#C1C3C8", canvas: "#F5F3F6", surface-1: "#FFFFFF", surface-2: "#EEEAF0", surface-3: "#E1DDE4", surface-4: "#D4CFD7", hairline: "#E5E1E7", hairline-strong: "#CCC7CF", hairline-tertiary: "#B3ACB6", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#00A9DF", semantic-success: "#68B94B", semantic-overlay: "#17181C"}
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
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8px 10px}
---
## Overview

My O! + Bank combines telecom, finance, services, rewards, and marketplace content through white modules, magenta identity, and persistent quick navigation.

**Key Characteristics:** white modular cards, hot magenta controls, cyan links, pale gray canvas, compact product grids, story rails, and a floating QR-centered dock.

## Colors

### Brand & Accent

Magenta owns the O! identity, QR scanner, active navigation, and selected ecosystem products; cyan identifies secondary links and some telecom utilities.

### Surface

Use pale gray behind crisp white modules, with subtly tinted fields and sheets for grouped choices.

### Text

Near-black leads balances, service titles, and product prices; gray supports account identifiers, financing, and allowance context.

### Semantic

Green confirms available allowance or success; blue communicates information; magenta should not replace error red.

## Typography

### Font Family

Use SF Pro Display for balances and service headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the current account, balance, service, or product price.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with stable currency metrics and readable Cyrillic.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home stacks full-width account modules and service icon grids; Market uses two-column products and horizontal category rails.

### Whitespace Philosophy

Keep related service groups compact, but separate telecom, bank, and commerce domains clearly.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use translucent dock blur, light module separation, and bounded product imagery rather than heavy card shadows.

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

Product photography stays contained in white cards; story and campaign imagery uses compact rounded frames.

## Components

### Buttons

Magenta drives primary ecosystem actions and scan; financial links may use cyan, while secondary controls remain white or pale.

### Pricing Tabs

Market and account modes use pale segmented controls with one white or magenta-selected state.

### Cards & Containers

Service modules combine one domain heading, decisive metric, and direct action; product cards align image, price, and term.

### Inputs & Forms

Search and payment fields use soft filled surfaces with magenta focus, matching the rounded system.

### Status & Build Page

Keep allowance, loan, bonus, transfer, and order status beside the module or transaction they affect.

### Navigation

Use a floating white translucent dock with four destinations and a central magenta QR scanner.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve clear separation among telecom, banking, and marketplace modules.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't use promotional color on every operational card.
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

Preserve account context, balance, and primary action; reduce campaign rails before operational tools.

### Image Behavior

Contain product and campaign imagery within stable aspect ratios and protect all embedded copy.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
