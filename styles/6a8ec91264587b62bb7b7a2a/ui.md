<design-context>
---
version: alpha
name: Ozon-Bank-design-analysis
description: "A bright banking system built around saturated blue account stages, white modular finance cards, soft cyan actions, pastel benefit notices, bold numeric type, and polished 3D product art."
colors: {primary: "#006DFF", on-primary: "#FFFFFF", primary-hover: "#2986FF", primary-focus: "#0056CD", ink: "#17191C", ink-muted: "#686B71", ink-subtle: "#9A9DA3", ink-tertiary: "#C2C6CB", canvas: "#FFFFFF", surface-1: "#F4F8FC", surface-2: "#E8F2FA", surface-3: "#DCE8F1", surface-4: "#CFDCE6", hairline: "#E1E7EC", hairline-strong: "#C8D1D9", hairline-tertiary: "#AFBAC3", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#7854EE", semantic-success: "#35BF7A", semantic-overlay: "#17181C"}
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
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Ozon Bank combines a saturated blue account carousel with clean white operational modules, pastel benefit panels, bold balances, and polished product art.

**Key Characteristics:** blue account stage, white finance modules, cyan quick actions, pastel benefit bands, bold balances, 3D cards and gifts, and compact operation lists.

## Colors

### Brand & Accent

Ozon blue drives primary banking action and active navigation. Violet supports credit products; pastel green and yellow communicate benefit or guidance.

### Surface

Use white for operations and pale blue for grouped actions, analytics, and account details; blue gradient is reserved for product context.

### Text

Near-black leads balances and signed amounts; gray supports category, description, and terms.

### Semantic

Green indicates income or success, red indicates expense or failure, yellow offers guidance, and blue remains action.

## Typography

### Font Family

Use SF Pro Display for balances and product headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with account, balance, signed amount, or next money action.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular numerals and clear compact history rows.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home stacks product carousel, quick actions, reward modules, and operations; account detail uses one wide column.

### Whitespace Philosophy

Give balances and primary actions room, then keep history and settings rows compact.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use gradient product stages, broad rounded modules, and polished 3D promo art; avoid shadow on transaction lists.

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

Cards and gifts live inside wide rounded promo panels; receipt art centers in a full-screen result stage.

## Components

### Buttons

Primary actions use solid blue; quick money actions use pale blue groups; success completion stays blue with green status.

### Pricing Tabs

History periods, accounts, and filters use compact blue chips or simple labeled segments.

### Cards & Containers

Product cards combine account type, balance, term, and close affordance; operational modules group one finance purpose.

### Inputs & Forms

Transfer and payment forms use pale fields, blue focus, and clear source, destination, amount, and fee hierarchy.

### Status & Build Page

Keep cashback, application, account, transfer, analytics, and receipt state close to the relevant module.

### Navigation

Use five bottom destinations with blue active icon and quiet gray inactive icons.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the blue account context and clean white operational hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't extend promotional gradients behind dense history or settings.
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

Preserve account, balance, and money actions; stack benefits and reduce promotional cards before history.

### Image Behavior

Contain 3D product art in dedicated panels and keep transaction information on stable light surfaces.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
