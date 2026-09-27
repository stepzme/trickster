<design-context>
---
version: alpha
name: Mail-ru-design-analysis
description: "A multi-product productivity shell on white, organized by crisp blue actions, black type, pale-gray cards, pastel product accents, compact lists, and playful 3D empty-state artwork."
colors:
  primary: "#0787F5"
  on-primary: "#FFFFFF"
  primary-hover: "#2C9CFA"
  primary-focus: "#006ECD"
  ink: "#202024"
  ink-muted: "#7B7B83"
  ink-subtle: "#A8A8AF"
  ink-tertiary: "#CDCDD2"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F8"
  surface-2: "#EFEFF3"
  surface-3: "#E6E6EB"
  surface-4: "#DADAE0"
  hairline: "#E9E9ED"
  hairline-strong: "#D2D2D8"
  hairline-tertiary: "#BABAC2"
  inverse-canvas: "#202024"
  inverse-surface-1: "#303036"
  inverse-surface-2: "#42424A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#B67AF4"
  semantic-success: "#55C88A"
  semantic-overlay: "#202024"
typography:
  display-xl: {fontFamily: VK Sans Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: VK Sans Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: VK Sans Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: VK Sans Display, fontSize: 20px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: VK Sans Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: VK Sans Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: VK Sans Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: VK Sans Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: VK Sans Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: VK Sans Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: VK Sans Text, fontSize: 13px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: VK Sans Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 11px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  list-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 12px}
  note-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  tag-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7px 10px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Mail.ru is a calm productivity hub where blue actions and pastel product accents unify mail, cloud, tasks, notes, and account storage.

**Key Characteristics:**
- White list-led surfaces.
- Blue floating creation actions.
- Product-specific pastel accents.
- Compact bottom navigation.
- 3D empty-state illustration.

## Colors

### Brand & Accent

Blue identifies the suite and primary actions. Lavender, mint, cyan, and pink distinguish products without changing interaction priority.

### Surface

White is primary; very pale gray and tinted cards group cloud, notes, storage, and settings.

### Text

Near-black carries titles and message content; gray carries sender detail, dates, storage, and descriptions.

### Semantic

Green marks available capacity or success; red remains for destructive mail and account actions.

## Typography

### Font Family

Use VK Sans or a neutral system sans across lists, messages, tasks, notes, and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Empty-state title |
| headline | 20px | 600 | Product title |
| card-title | 15px | 500 | Sender or note title |
| body | 12px | 400 | Preview and description |
| caption | 9px | 400 | Date, tag, navigation |

### Principles

- Keep sender and title above preview metadata.
- Use consistent type across products.
- Keep empty-state guidance brief.

### Note on Font Substitutes

Inter is suitable; preserve compact Cyrillic and readable message previews.

## Layout

### Spacing System

Use a 4px base, 8–12px row rhythm, and 12px screen gutters.

### Grid & Container

Mail and contacts use lists; notes use stacked cards; cloud and services combine cards with short lists.

### Whitespace Philosophy

Keep operational lists compact and reserve open space for empty states and account overview.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Mail and lists |
| 1 | Pale card | Notes and storage |
| 2 | Floating blue action | Create or compose |
| 3 | Sheet | Filters and item actions |

### Decorative Depth

Use soft illustration shading; ordinary content remains flat with subtle separators.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Rows and badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Notes and product cards |
| rounded-lg | 16px | Storage panels |
| rounded-full | full | Avatar and floating action |

### Photography & Illustration Geometry

Attachments use compact rounded thumbnails. Empty-state objects stay centered and uncropped with generous white space.

## Components

### Buttons

Primary creation uses a blue pill; secondary actions are pale or textual.

### Pricing Tabs

Labels and product filters use pale chips; selected states gain a tint or blue emphasis.

### Cards & Containers

Mail rows remain flat; notes and cloud recommendations use pale rounded cards.

### Inputs & Forms

Search and compose inputs are white or pale gray with blue focus and compact controls.

### Status & Build Page

Empty states pair one illustration with short guidance and a visible blue create action.

### Navigation

Keep five product destinations fixed; active state is dark or blue while inactive items stay light gray.

### Footer

No footer; bottom navigation owns the safe area.

## Do's and Don'ts

### Do

- Preserve list scanning and product continuity.
- Use pastel accents sparingly.
- Keep creation easy to reach.
- Style native controls consistently.

### Don't

- Don't give every product a competing primary color.
- Don't over-round mail rows.
- Don't crowd empty states.
- Don't use heavy shadows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten previews and labels |
| Standard | 375–430px | Default list and card layout |
| Wide | 431px+ | Expand note and cloud gutters |

### Touch Targets

Folders, rows, attachments, compose, filters, and navigation remain at least 44px.

### Collapsing Strategy

Truncate previews before titles; stack card actions and scroll chips horizontally.

### Image Behavior

Contain illustrations, crop attachments predictably, and preserve avatar circles.

## Iteration Guide

Tune inbox scanning first, then creation, cross-product continuity, storage, and empty-state clarity.

## Known Gaps

- Calendar was not visually sampled.
- Complex compose attachment states were not represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
