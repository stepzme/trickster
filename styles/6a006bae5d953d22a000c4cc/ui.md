<design-context>
---
version: alpha
name: ONAY-design-analysis
description: "A bright transit-payment system using vivid yellow cards and actions, black icons, cool white surfaces, softly colored 3D service objects, and a glowing central QR scanner."
colors: {primary: "#FFD600", on-primary: "#111111", primary-hover: "#FFE233", primary-focus: "#E8C000", ink: "#141518", ink-muted: "#676A70", ink-subtle: "#999CA2", ink-tertiary: "#C2C5CA", canvas: "#F8F9FB", surface-1: "#FFFFFF", surface-2: "#F0F2F5", surface-3: "#E4E7EB", surface-4: "#D7DBE0", hairline: "#E4E7EA", hairline-strong: "#CCD1D6", hairline-tertiary: "#B3BAC1", inverse-canvas: "#1B1C20", inverse-surface-1: "#2C2D32", inverse-surface-2: "#3D3E45", inverse-ink: "#FFFFFF", brand-secure: "#15172B", semantic-success: "#28B86A", semantic-overlay: "#17181C"}
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8px 10px}
---
## Overview

ONAY uses bright yellow mobility cards, white grouped surfaces, friendly rendered objects, and a central scanner to make transit payment and route discovery immediately approachable.

**Key Characteristics:** ONAY yellow, large balance card, central glowing QR, rounded white panels, black route type, colorful service objects, and compact commerce surface.

## Colors

### Brand & Accent

Yellow owns transit cards, scanner, active selections, and primary actions. Black provides necessary contrast and strong wayfinding.

### Surface

Use cool near-white for the canvas and crisp white for cards, route grids, and shortcut tiles.

### Text

Near-black leads balances, route numbers, and product prices; gray supports trip count and instructions.

### Semantic

Green confirms successful payment or eligibility; red is reserved for errors and service interruption.

## Typography

### Font Family

Use SF Pro Display for balance and route headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with card balance, route number, or fare action.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with strong numerals and clear Cyrillic or Kazakh labels.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Cards use one wide carousel; routes use a four-column number grid; shop uses two product columns.

### Whitespace Philosophy

Keep route and payment actions spacious while allowing marketplace shelves to become denser.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use a soft yellow scanner glow, light card elevation, and illustrated object shadow rather than heavy containers.

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

Transit cards are wide rounded rectangles; QR is circular; service illustrations live in centered rounded tiles.

## Components

### Buttons

Primary payment and add actions use yellow pills with black labels; secondary actions stay white and outlined.

### Pricing Tabs

My cards and Other cards use a pale segment with one white selected state; transport modes use compact chips.

### Cards & Containers

Balance cards combine city, trips, QR, and details; route cells focus on the number; shop cards remain image-first.

### Inputs & Forms

Search and phone fields use pale fills, yellow continuation, and system-aligned validation.

### Status & Build Page

Keep balance, trip count, ticket, payment, and city state close to the active card or route.

### Navigation

Use Routes, Cards, a raised yellow QR scanner, Shop, and Menu in a rounded white bottom bar.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve yellow mobility focus and scannable numeric hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't use yellow as a broad background behind dense route or shop content.
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

Preserve card balance, scanner, and current route tools; reduce promotions before transit essentials.

### Image Behavior

Contain product photos in the shop and rendered objects in educational or service modules.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
