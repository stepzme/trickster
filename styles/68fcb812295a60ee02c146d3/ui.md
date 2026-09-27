<design-context>
---
version: alpha
name: Otello-design-analysis
description: "A hotel discovery system with electric green search and savings accents, white content canvas, black rating badges, image-led property rails, neighborhood maps, and small toy-like 3D state symbols."
colors: {primary: "#67E82F", on-primary: "#142112", primary-hover: "#7CEF4C", primary-focus: "#4FC21D", ink: "#17191B", ink-muted: "#696C71", ink-subtle: "#9B9EA3", ink-tertiary: "#C3C6CA", canvas: "#FFFFFF", surface-1: "#F6F6F5", surface-2: "#EDEFEA", surface-3: "#E2E5DF", surface-4: "#D5D9D2", hairline: "#E4E7E2", hairline-strong: "#CCD1C9", hairline-tertiary: "#B3B9B0", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#173C43", semantic-success: "#67E82F", semantic-overlay: "#17181C"}
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

Otello uses vivid green search and savings cues, crisp hotel photography, black comparison badges, and simple booking states to make accommodation discovery direct.

**Key Characteristics:** electric green accent, white canvas, black rating badges, horizontal property rails, map photo clusters, compact filter chips, and friendly 3D state objects.

## Colors

### Brand & Accent

Electric green owns search, savings, booking action, and favorable price. Charcoal provides contrast for ratings and selected segments.

### Surface

White is primary; light warm gray groups cards, chips, and empty booking panels.

### Text

Near-black leads property and destination titles; green may emphasize price; gray supports dates, location, and review count.

### Semantic

Green communicates favorable or primary action, while red and amber remain available for cancellation or warning.

## Typography

### Font Family

Use SF Pro Display for destination and property headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with destination, property, price, rating, or booking state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the system sans with compact rating and price numerals.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home and Super Prices use horizontal property rails; map clusters images by area; bookings use one wide column.

### Whitespace Philosophy

Allow search and empty states more space, while repeated hotel rails stay compact.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use photography, black badges, and restrained card contrast; 3D symbols remain small and centered.

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

Property photos use rounded landscape crops; map pins can be image clusters; state objects sit centered in white panels.

## Components

### Buttons

Primary search and booking use green with dark text; secondary actions use white or charcoal segments.

### Pricing Tabs

Bottom destinations and booking states use solid dark selection, while city discount chips stay pale.

### Cards & Containers

Property cards align image, discount, rating, reviews, dates, and price; booking cards emphasize state and recovery.

### Inputs & Forms

Destination search uses white rounded field with green focus or trailing action, styled consistently across map and Home.

### Status & Build Page

Keep discount, upgrade, availability, active or past booking, and sign-in requirement close to the item.

### Navigation

Use five labeled destinations on white, with black active icon and gray inactive icons.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve green savings emphasis and black factual badges.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't turn every card green or cover property photos with excessive chrome.
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

Preserve destination, photo, rating, price, and booking action; reduce collections before core comparison.

### Image Behavior

Use consistent hotel crops and protect focal interiors or facades; do not distort map thumbnails.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
