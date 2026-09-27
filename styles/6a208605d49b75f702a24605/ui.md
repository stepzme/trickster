<design-context>
---
version: alpha
name: OneTwoTrip-design-analysis
description: "A travel-commerce interface combining warm destination photography, white booking sheets, vivid violet actions, yellow brand labels, dense comparison cards, and thumb-level sticky filters."
colors: {primary: "#6948F5", on-primary: "#FFFFFF", primary-hover: "#8064F8", primary-focus: "#5234D1", ink: "#17181C", ink-muted: "#666970", ink-subtle: "#989BA2", ink-tertiary: "#C1C4C9", canvas: "#FFFFFF", surface-1: "#F5F5F7", surface-2: "#ECECF0", surface-3: "#E0E0E5", surface-4: "#D3D3D9", hairline: "#E3E3E7", hairline-strong: "#CACAD0", hairline-tertiary: "#B1B1B8", inverse-canvas: "#1B1C20", inverse-surface-1: "#2C2D32", inverse-surface-2: "#3D3E45", inverse-ink: "#FFFFFF", brand-secure: "#FFDC18", semantic-success: "#33B86D", semantic-overlay: "#17181C"}
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
rounded: {xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 26px, xxl: 30px, pill: 9999px, full: 9999px}
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

OneTwoTrip balances warm travel inspiration with precise white booking surfaces, purple continuation controls, yellow brand moments, and highly comparable results.

**Key Characteristics:** warm destination hero, white rounded sheets, purple CTAs, yellow brand chips, story rails, dense itinerary cards, and sticky filters.

## Colors

### Brand & Accent

Violet drives selection, filters, and booking continuation. Yellow belongs to the OneTwoTrip mark, loyalty, and small high-value highlights.

### Surface

White carries booking and results; pale gray groups fields and cards; warm photography is limited to inspiration and destination context.

### Text

Near-black leads route, hotel, price, and date; gray supports baggage, board, duration, and policy.

### Semantic

Green indicates favorable price or completed status; yellow shows loyalty value; red is reserved for exceptions.

## Typography

### Font Family

Use SF Pro Display for travel product and search headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with route, date, total price, rating, or booking state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular prices and clear compact itinerary labels.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home uses product tiles and story rails; search uses one column; hotel results use image-led stacked cards.

### Whitespace Philosophy

Search decisions need breathing room, while comparison results intentionally compress repeated facts.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use destination photography, white sheets, and anchored filters rather than decorative shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 14px | Cards |
| rounded-lg | 20px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Travel imagery uses wide rounded crops; stories are narrow portrait tiles; booking cards use broad rounded rectangles.

## Components

### Buttons

Primary continue and book actions use saturated violet; secondary actions use white or translucent gray.

### Pricing Tabs

Product switchers, trip type, and filters use dark or pale segments with a clear violet selection.

### Cards & Containers

Flight cards align airline, times, duration, baggage, and price; hotel cards combine image, score, board, distance, and total.

### Inputs & Forms

Dates, guests, and routes use large light fields and focused sheets that inherit violet selection styling.

### Status & Build Page

Keep booking, baggage, cancellation, cashback, and payment state adjacent to the affected itinerary or room.

### Navigation

Use five bottom destinations with violet for the active item and quiet gray for the others.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the transition from inspiring photography to precise booking comparison.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't place decorative photography behind dense fares or form fields.
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

Retain route, date, price, and booking action; stack policies and reduce story content first.

### Image Behavior

Preserve destination focal points and hotel ratios; use gradients only when text overlays photography.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
