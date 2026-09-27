<design-context>
---
version: alpha
name: MTS-Urent-design-analysis
description: "A map-first mobility system with a pale geographic canvas, charcoal vehicle markers, vivid purple scan and selection controls, mint success feedback, and rounded white bottom sheets."
colors: {primary: "#7138E8", on-primary: "#FFFFFF", primary-hover: "#8655EE", primary-focus: "#5D27C9", ink: "#18181B", ink-muted: "#66656D", ink-subtle: "#96949D", ink-tertiary: "#C0BEC6", canvas: "#F9F7FA", surface-1: "#FFFFFF", surface-2: "#F0EDF3", surface-3: "#E4E0E8", surface-4: "#D7D2DC", hairline: "#E5E1E8", hairline-strong: "#CCC7D1", hairline-tertiary: "#B2ACB8", inverse-canvas: "#42404A", inverse-surface-1: "#53515D", inverse-surface-2: "#666370", inverse-ink: "#FFFFFF", brand-secure: "#B39AF8", semantic-success: "#27D499", semantic-overlay: "#1D1B21"}
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
rounded: {xs: 6px, sm: 12px, md: 18px, lg: 24px, xl: 28px, xxl: 32px, pill: 9999px, full: 9999px}
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
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 8px 10px}
---
## Overview

MTS Urent treats the live map as the product, using a purple scanner, dark vehicle pins, compact overlays, and focused bottom sheets to guide rental decisions.

**Key Characteristics:** pale 2GIS map, charcoal markers, purple scanner, violet gradients, mint confirmation, circular controls, and large rounded sheets.

## Colors

### Brand & Accent

Purple identifies scanning, selected vehicles, tariffs, and paid mobility; pale lavender supports premium or secondary emphasis.

### Surface

The geographic canvas stays pale and readable; white sheets and circular controls float above it with restrained separation.

### Text

Near-black carries decisions; gray supports map detail, vehicle identifiers, and tariff conditions.

### Semantic

Mint confirms success and battery availability; red marks prohibited zones or blocking warnings only.

## Typography

### Font Family

Use SF Pro Display for ride states and sheet headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with vehicle, distance, tariff, and current ride state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans and keep map labels visually separate from app controls.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

The map fills the screen; controls orbit its edges and vehicle details rise from the bottom in one column.

### Whitespace Philosophy

Keep the map open enough to read spatial relationships; concentrate detail inside the active sheet.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use white floating circles, soft sheet elevation, and selected-marker color rather than decorative shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 12px | Buttons and fields |
| rounded-md | 18px | Cards |
| rounded-lg | 24px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Vehicle thumbnails and campaign imagery stay inside sheets; map pins remain compact and legible at multiple zoom levels.

## Components

### Buttons

The large circular scanner and full-width start action use purple; completion and return feedback use mint.

### Pricing Tabs

Tariffs use horizontal selectable pills or cards with a single purple selected state.

### Cards & Containers

Vehicle sheets group identity, battery, pricing, and next action; avoid covering more map than the decision requires.

### Inputs & Forms

Phone and verification fields use pale fills, large labels, and purple actions styled to the system.

### Status & Build Page

Show loading, map availability, ride checks, prohibited zones, and completion in compact banners or focused sheets.

### Navigation

There is no conventional tab bar; scanner, menu, location, layers, and map controls form the persistent navigation.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the map as the continuous spatial context.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't replace the map with card-heavy dashboard chrome.
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

Keep scanner and vehicle state fixed, stack tariff details, and collapse secondary map tools before spatial context.

### Image Behavior

Treat map tiles as functional imagery; contain vehicle photos and promo art within their sheets.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
