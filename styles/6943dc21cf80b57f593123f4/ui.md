<design-context>
---
version: alpha
name: Ohmywishes-design-analysis
description: "A light social wishlist system defined by bold black type, product photography, translucent white navigation, soft gray tiles, black save actions, and restrained pink-to-lilac creation accents."
colors: {primary: "#111111", on-primary: "#FFFFFF", primary-hover: "#2A2A2A", primary-focus: "#000000", ink: "#141416", ink-muted: "#6E6E73", ink-subtle: "#A1A1A6", ink-tertiary: "#C8C8CC", canvas: "#FFFFFF", surface-1: "#F4F4F5", surface-2: "#ECECEE", surface-3: "#DFDFE2", surface-4: "#D2D2D6", hairline: "#E5E5E7", hairline-strong: "#CDCDD0", hairline-tertiary: "#B5B5BA", inverse-canvas: "#1B1C20", inverse-surface-1: "#2C2D32", inverse-surface-2: "#3D3E45", inverse-ink: "#FFFFFF", brand-secure: "#8D9CFF", semantic-success: "#5EBB69", semantic-overlay: "#17181C"}
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

Ohmywishes is a nearly colorless social-shopping canvas where product photos, editorial collections, large profile type, and a floating dock keep gift discovery and wish management friendly.

**Key Characteristics:** white canvas, bold black headings, pale gray tiles, image grids, black pill actions, frosted dock, and small pink-lilac creation accents.

## Colors

### Brand & Accent

Black is the primary action and content anchor. Warm pink-red and blue-lilac gradients appear sparingly on add, create, and social game moments.

### Surface

White carries primary content; pale gray organizes profile categories, gift topics, and inactive controls.

### Text

Near-black leads names, gift titles, and prices; medium gray supports descriptions, reservation, and list metadata.

### Semantic

Green marks active game or confirmed state; blue may indicate discovery links; red remains distinct from the soft creation gradient.

## Typography

### Font Family

Use SF Pro Display for profile and collection headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the person, gift title, price, or social state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a rounded modern system sans; preserve the friendly oversized headings and compact commerce copy.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Gift ideas and wishlists use two image-led columns; profiles and Secret Santa use wide tiles and horizontal category rails.

### Whitespace Philosophy

Keep generous space around profile identity and social creation, while allowing dense product grids below.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use frosted navigation, soft gray tiles, and image content rather than visible card shadows.

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

Product images use tall rounded crops; avatars are circular; social tiles use broad rounded rectangles.

## Components

### Buttons

Primary save uses a black full-width pill; create actions may use a subtle red-to-lilac gradient; secondary buttons stay gray.

### Pricing Tabs

Wishlist categories use compact horizontal tiles; the floating dock uses one soft tinted active capsule.

### Cards & Containers

Gift cards are image-first with title, price, add, and overflow; social games use large simple tiles with avatar stacks.

### Inputs & Forms

Search floats above navigation in a white pill, and forms inherit the same soft rounded treatment.

### Status & Build Page

Keep reserved count, game state, ownership, and save status next to the relevant wish or group.

### Navigation

Use a floating translucent four-item dock with soft active capsule and minimal line icons.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve photography-led discovery and almost colorless chrome.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't wrap every wish in heavy borders or use gradients on ordinary controls.
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

Preserve identity, item image, price, and save action; reduce collection metadata before core wish content.

### Image Behavior

Use consistent portrait or square crops and keep product focal objects clear; never stretch source photography.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
