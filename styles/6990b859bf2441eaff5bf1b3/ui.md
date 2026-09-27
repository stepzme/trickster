<design-context>
---
version: alpha
name: Optima24-design-analysis
description: "A dark banking super-app combining near-black stacked modules, hot red line icons, gold card accents, orange QR, saturated 3D service tiles, and dense promotional panels."
colors: {primary: "#E9293A", on-primary: "#FFFFFF", primary-hover: "#F04453", primary-focus: "#C31C2C", ink: "#F5F5F6", ink-muted: "#A2A2A8", ink-subtle: "#707077", ink-tertiary: "#4E4F55", canvas: "#0D0E10", surface-1: "#1B1C1F", surface-2: "#27282C", surface-3: "#34353A", surface-4: "#414249", hairline: "#2B2C30", hairline-strong: "#43444A", hairline-tertiary: "#595A62", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#151619", brand-secure: "#F0A91B", semantic-success: "#3BC274", semantic-overlay: "#17181C"}
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
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 8px 10px}
---
## Overview

Optima24 uses a black modular dashboard, red service glyphs, gold product cues, and saturated campaigns to make a broad banking and partner-service range feel energetic.

**Key Characteristics:** near-black canvas, charcoal cards, red line icons, gold selected product, orange scanner, colorful service renders, and dense promotional modules.

## Colors

### Brand & Accent

Red drives active navigation, payment, and service icons. Gold identifies premium card and milestone value; orange belongs to the scanner.

### Surface

Use near-black for the canvas and layered charcoal for grouped banking cards, lists, and dock.

### Text

White leads balances and headings; gray supports masked products, descriptions, and metadata.

### Semantic

Green confirms product or money state; gold signals premium value; red should not replace warning semantics without context.

## Typography

### Font Family

Use SF Pro Display for balances and banking headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with balance, product, recipient, or payment amount.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with clear Cyrillic and stable currency numerals.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home mixes icon grids and two-column product tiles; My Bank uses a single stacked product list; Services uses asymmetrical colored tiles.

### Whitespace Philosophy

Dense Home content is intentional, but focused payment and product screens should simplify sharply.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use layered charcoal, colored tiles, and 3D objects; avoid light shadows that disappear on black.

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

Service renders live in rounded colored tiles; cards and campaigns use wide rectangles with cropped art.

## Components

### Buttons

Red drives payment and primary banking actions; secondary actions stay charcoal, while QR uses orange.

### Pricing Tabs

Product and operation modes use dark segments with one red, gold, or white selected state.

### Cards & Containers

Bank cards group balance and status; service tiles pair label with a distinct rendered object; campaigns remain bounded.

### Inputs & Forms

Dark amount and recipient forms use styled gray keypad or fields, red action, and clear source details.

### Status & Build Page

Keep fee, product state, operation result, notification, and balance impact beside the relevant action.

### Navigation

Use a floating dark five-item dock with a raised orange QR control and red active destination.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the dark red-gold banking hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't use every campaign color for ordinary transactional controls.
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

Keep product, balance, and primary action first; reduce campaigns and partner offers before core banking.

### Image Behavior

Contain promotional and service art in rounded modules; keep transaction data on calm dark surfaces.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
