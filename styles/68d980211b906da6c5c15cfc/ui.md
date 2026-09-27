<design-context>
---
version: alpha
name: OTP-Bank-design-analysis
description: "A light modular banking system using neon lime brand actions, white cards on pale lavender-gray, black product type, colorful 3D finance objects, and restrained bottom navigation."
colors: {primary: "#B6F52B", on-primary: "#17200E", primary-hover: "#C7FA55", primary-focus: "#95D30F", ink: "#1A1B1F", ink-muted: "#6B6D73", ink-subtle: "#9DA0A6", ink-tertiary: "#C5C7CC", canvas: "#F7F6FA", surface-1: "#FFFFFF", surface-2: "#EEEFF4", surface-3: "#E2E3E9", surface-4: "#D5D7DE", hairline: "#E4E5EA", hairline-strong: "#CCCED4", hairline-tertiary: "#B3B6BD", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#173F4D", semantic-success: "#73C63C", semantic-overlay: "#17181C"}
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
rounded: {xs: 6px, sm: 10px, md: 16px, lg: 20px, xl: 26px, xxl: 30px, pill: 9999px, full: 9999px}
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

OTP Bank places cards, exchange rates, transfers, payments, and product applications in bright white modules, using neon lime sparingly and friendly 3D objects to explain breadth.

**Key Characteristics:** pale lavender-gray canvas, white rounded modules, neon lime brand, black type, story rail, 3D product objects, and line-icon navigation.

## Colors

### Brand & Accent

Neon lime marks brand, active navigation, application, and positive call to action. Deep teal may anchor serious calculations.

### Surface

Use pale lavender-gray for the canvas, white for cards and lists, and slightly tinted panels for transfers or templates.

### Text

Near-black leads balances, products, and payments; gray supports rates, terms, and explanations.

### Semantic

Lime signals brand or positive state, while blue, amber, and red retain conventional informational meanings.

## Typography

### Font Family

Use SF Pro Display for banking and product headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with product, balance, transfer destination, or application value.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular currency and sturdy compact Cyrillic.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

My Bank stacks wide product modules; Payments uses a transfer panel plus two-column service tiles; Products is a vertical list.

### Whitespace Philosophy

Keep financial lists compact but give application decisions and results clear breathing room.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use soft surface separation and small 3D objects; promotional stories can be saturated but must stay bounded.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 16px | Cards |
| rounded-lg | 20px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

3D objects sit to the right of wide product rows; result symbols center above amount; stories are rounded squares.

## Components

### Buttons

Lime drives application and active selection; dark teal or charcoal may anchor calculation and return actions.

### Pricing Tabs

Navigation and product modes use lime selected state without heavy filled tab bars.

### Cards & Containers

White banking cards align product, amount, masked details, or exchange columns; product rows pair copy with an object.

### Inputs & Forms

Transfer and application fields use pale rounded fills, lime focus or continuation, and precise validation.

### Status & Build Page

Keep application, transfer, fee, product, and chat state beside the affected card or action.

### Navigation

Use five line-icon destinations on the pale canvas, with lime active icon and label.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve selective neon-lime emphasis on a calm light base.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't use 3D decoration behind balances or dense financial forms.
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

Preserve product, amount, destination, and action; reduce stories before operational banking.

### Image Behavior

Keep 3D objects contained in rows and promotional photography inside stories; protect financial copy.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
