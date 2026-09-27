<design-context>
---
version: alpha
name: Mycar-kz-design-analysis
description: "A vehicle marketplace system using cool light-gray background, crisp white cards, Mycar blue actions, large automotive photography, green contact controls, and compact 3D service icons."
colors: {primary: "#119AF1", on-primary: "#FFFFFF", primary-hover: "#31AAF5", primary-focus: "#087CC8", ink: "#141619", ink-muted: "#666A70", ink-subtle: "#989CA2", ink-tertiary: "#C0C4C9", canvas: "#F2F4F7", surface-1: "#FFFFFF", surface-2: "#E9EDF1", surface-3: "#DDE2E7", surface-4: "#D0D6DC", hairline: "#E1E5E9", hairline-strong: "#C9CFD5", hairline-tertiary: "#AFB7BF", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#2447D9", semantic-success: "#0DB954", semantic-overlay: "#17181C"}
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
rounded: {xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 28px, pill: 9999px, full: 9999px}
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

Mycar.kz combines image-first car commerce with a broad automotive-service grid, progressive seller forms, blue financing actions, and direct green contact controls.

**Key Characteristics:** large car photography, cool gray canvas, white cards, bright blue actions, green seller contact, two-column service grid, and compact rendered icons.

## Colors

### Brand & Accent

Bright blue drives platform actions and progress; deeper royal blue supports identity. Green is reserved for direct seller communication and positive state.

### Surface

Use cool light gray behind crisp white listing, service, and form cards.

### Text

Near-black carries vehicle names and prices; gray supports location, mileage, specification labels, and finance context.

### Semantic

Green marks call or message and success; yellow can highlight finance estimates; red is limited to destructive or urgent state.

## Typography

### Font Family

Use SF Pro Display for vehicle prices and section headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with vehicle, price, monthly estimate, or form decision.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular pricing and readable Kazakh or Russian labels.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home and listings use two image-led columns; service discovery uses two equal tiles; detail and selling use one column.

### Whitespace Philosophy

Keep catalog cards compact but give specs, finance, and form decisions clear separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use product photography, pale card contrast, and limited pedestal effects in icons rather than heavy shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 14px | Cards |
| rounded-lg | 18px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Vehicle imagery uses wide rounded crops; service renders sit in small rounded squares with ample white space.

## Components

### Buttons

Blue drives calculate, next, and platform actions; paired green buttons handle message and call.

### Pricing Tabs

Form choices use filled blue pills; navigation uses one dark active icon rather than colored tab backgrounds.

### Cards & Containers

Listing cards prioritize image, model, price, and seller; service cards combine a render, title, and short description.

### Inputs & Forms

Selling forms use grouped choices, clear progress, large blue continuation, and styled switches or selectors.

### Status & Build Page

Keep finance estimate, step count, listing draft, verification, and service state beside the affected action.

### Navigation

Use four bottom destinations with black active icon and pale gray inactive icons; keep Mycar mark centered at top.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the separation between blue platform actions and green contact.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't substitute illustration for real vehicle photography in listings.
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

Preserve car image, model, price, and action; stack specs and shorten service descriptions.

### Image Behavior

Use consistent vehicle crops and protect embedded campaign copy; never distort listing photos.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
