<design-context>
---
version: alpha
name: Ostrovok-design-analysis
description: "A bright travel interface built from lime brand fields, royal-blue search and booking actions, large destination photography, clean white result cards, map price pins, and playful travel-object art."
colors: {primary: "#1355DE", on-primary: "#FFFFFF", primary-hover: "#2D6AE4", primary-focus: "#0C42B4", ink: "#18191C", ink-muted: "#666A70", ink-subtle: "#989CA2", ink-tertiary: "#C2C5CA", canvas: "#FFFFFF", surface-1: "#F4F6F7", surface-2: "#EAF0ED", surface-3: "#DDE5E0", surface-4: "#D0D9D3", hairline: "#E2E7E4", hairline-strong: "#C9D1CC", hairline-tertiary: "#AFBAB3", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#91F36B", semantic-success: "#41B866", semantic-overlay: "#17181C"}
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
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Ostrovok pairs energetic lime identity and blue booking actions with large travel photography, clear property facts, and friendly trip states.

**Key Characteristics:** lime brand backdrop, royal-blue actions, white search field, large editorial destination cards, map price pins, clean booking cards, and 3D travel objects.

## Colors

### Brand & Accent

Royal blue drives search, booking, active navigation, and payment. Lime owns identity, campaign framing, and positive travel energy.

### Surface

White carries results and trips; pale mint-gray separates grouped controls; lime may frame the Home header and campaign context.

### Text

Near-black leads destination, date, and property title; gray supports distance, review, guests, and policy.

### Semantic

Green confirms rating or availability, orange highlights payment deadline, and blue remains action.

## Typography

### Font Family

Use SF Pro Display for destination and booking headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with destination, dates, property, total, or booking state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with clear prices and compact Russian travel metadata.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home uses one wide editorial column and horizontal shelves; results use list or map; Trips uses one booking column.

### Whitespace Philosophy

Give editorial photography breathing room, then tighten repeated property facts for comparison.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use photography, map layering, and light card elevation; illustration remains bounded to campaigns and empty states.

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

Destination cards use wide rounded crops; property cards pair wide image and facts; price pins stay compact.

## Components

### Buttons

Primary search, pay, and booking actions use full-width blue; secondary actions use white or translucent blue.

### Pricing Tabs

Trips uses hotel and transfer segments with filled blue selection; result modes use compact toggles.

### Cards & Containers

Property cards align photo, rating, reviews, price, and dates; booking cards expose payment timing and one next action.

### Inputs & Forms

Search, dates, and guests use white rounded fields with blue focus and clear sheet-based selection.

### Status & Build Page

Keep availability, payment deadline, confirmation, cancellation, and booking status beside the trip.

### Navigation

Use five labeled destinations on white, with blue active icon and gray inactive icons.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the lime-blue brand split and photography-led travel hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't place text-heavy booking details directly on destination photography.
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

Preserve destination, dates, price, and action; reduce editorial shelves before search and trip state.

### Image Behavior

Preserve destination and property focal points; use subtle dark gradients only behind overlaid titles.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
