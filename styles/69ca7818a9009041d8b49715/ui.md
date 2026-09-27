<design-context>
---
version: alpha
name: bushe-design-analysis
description: "An editorial food-and-culture interface that combines warm white space, oversized serif headlines, compact rounded sans-serif controls, and a charcoal floating tab bar. Real food photography drives the catalog, while hand-drawn pastel characters and collage-like story cards make the home, loyalty, and table-ordering experiences feel like an independent city magazine rather than a standard delivery app."

colors:
  primary: "#2D2B2D"
  on-primary: "#FFFFFF"
  primary-hover: "#171617"
  primary-soft: "#ECEAEC"
  ink: "#242124"
  ink-muted: "#777277"
  ink-subtle: "#AAA5AA"
  canvas: "#FBFAF8"
  surface-1: "#F3F1F2"
  surface-2: "#E8E5E7"
  surface-dark: "#302E31"
  hairline: "#DEDADC"
  accent-orange: "#FF965F"
  accent-pink: "#E9A5B5"
  accent-lavender: "#B7B9F2"
  accent-yellow: "#F4E89A"
  semantic-success: "#67BD62"
  semantic-danger: "#A83D4C"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 44px
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: -1.2px
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.8px
  display-md:
    fontFamily: Rounded Sans
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -0.4px
  headline:
    fontFamily: Rounded Sans
    fontSize: 23px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.2px
  card-title:
    fontFamily: Rounded Sans
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: 0
  subhead:
    fontFamily: Rounded Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: 0
  body-lg:
    fontFamily: Rounded Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body:
    fontFamily: Rounded Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: Rounded Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: 0
  caption:
    fontFamily: Rounded Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: Rounded Sans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Rounded Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 18px
  xl: 24px
  xxl: 30px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 20px
  intent-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 16px
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 0
  bottom-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: 6px
  loyalty-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    height: 52px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 24px 16px
---

## Overview

bushe merges commerce with an editorial home feed. The catalog is practical and photograph-led, while Home, Loyalty, stories, projects, and table ordering use oversized type, pastel illustration, and collage. A charcoal floating tab bar provides continuity between these modes.

**Key Characteristics:**
- Warm off-white canvas and charcoal primary controls.
- Large editorial serif headlines mixed with rounded sans-serif UI text.
- Real food photography in compact product and category cards.
- Hand-drawn pastel characters for intents, loyalty, and instruction.
- Dark floating five-tab bar with a raised light selected item.
- Full dark theme that preserves photography and pale text.

## Colors

### Brand & Accent
- **Charcoal** ({colors.primary}): Main actions, selected chips, and navigation shell.
- **Soft Charcoal** ({colors.primary-soft}): Quiet selected and disabled surfaces.
- **Orange** ({colors.accent-orange}): Home mascot and profile identity.
- **Pink**, **Lavender**, and **Yellow**: Editorial illustration and seasonal feature palette.

### Surface
- **Canvas** ({colors.canvas}): Default warm-white page.
- **Surface 1** ({colors.surface-1}): Intent cards, fields, basket groups, and loyalty details.
- **Surface 2** ({colors.surface-2}): Nested controls and disabled states.
- **Dark Surface** ({colors.surface-dark}): Floating navigation and dark-theme groups.
- **Hairline** ({colors.hairline}): Dividers in checkout and profile.

### Text
- **Ink** ({colors.ink}): Headlines, product names, amounts, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Delivery context, weight, and supporting copy.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled labels.

### Semantic
- **Success** ({colors.semantic-success}): Delivery progress and confirmed states.
- **Danger** ({colors.semantic-danger}): Logout, deletion, and cancellation.
- **Overlay** ({colors.semantic-overlay}): Scrim below instructions and dialogs.

## Typography

### Font Family

- **Editorial Serif** — home greeting, stories, campaign statements, and culture features.
- **Rounded Sans** — catalog, basket, profile, actions, metadata, and navigation.
- **System Mono** — only for receipt or technical identifiers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 44px | 400 | Editorial story title |
| `{typography.display-lg}` | 36px | 400 | Home greeting question |
| `{typography.display-md}` | 28px | 500 | Catalog and profile title |
| `{typography.headline}` | 23px | 500 | Checkout section |
| `{typography.card-title}` | 17px | 500 | Intent and product title |
| `{typography.body}` | 14px | 400 | Default interface copy |
| `{typography.caption}` | 11px | 400 | Weight, time, and tab labels |
| `{typography.button}` | 15px | 500 | Primary action |

### Principles

- Use serif to create editorial pauses, not inside transactional controls.
- Keep product metadata compact and left aligned.
- Let title scale vary more on stories than in catalog.
- Prefer lowercase and sentence case; avoid corporate all-caps styling.

### Note on Font Substitutes

Use **Cormorant Garamond** or **Bodoni Moda** for editorial display and **Manrope**, **Onest**, or **SF Pro Rounded** for UI. Preserve open counters and moderate sans weights.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 12–16px, catalog-card gaps 6–10px, form groups 16px, and editorial sections 24–32px. Floating navigation sits 12px from side and safe-area edges.

### Grid & Container

Home combines a wide hero, one wide intent card, and two-column intent tiles. Catalog uses a three-column category grid followed by a two-column product grid. Checkout and profile return to a single vertical column.

### Whitespace Philosophy

Warm white space is part of the editorial voice. Keep large pauses around the home question and culture stories; use denser spacing only in catalog and basket where comparison matters.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm white canvas | Base |
| 1 | Pale card or photographic tile | Intents, categories, products |
| 2 | Charcoal floating shell | Bottom navigation |
| 3 | Cream modal sheet over dimmed content | Table-order instructions |

### Decorative Depth

Use photographic depth, hand-drawn overlap, subtle paper-like tonal shifts, and very soft shadow. Avoid glossy surfaces and bright digital gradients.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Tags and small images |
| `{rounded.sm}` | 10px | Intent cards |
| `{rounded.md}` | 14px | Products and buttons |
| `{rounded.lg}` | 18px | Floating navigation |
| `{rounded.xl}` | 24px | Loyalty panels |
| `{rounded.xxl}` | 30px | Instruction sheets |
| `{rounded.pill}` | full | Filters and quantity controls |

### Photography & Illustration Geometry

Food photography fills rounded category and product tiles with subject-safe crop. Illustrations remain flat and fully visible inside pale banners or large sheets. Editorial collage may overlap images and type while preserving a clear reading column.

## Components

### Buttons

Primary actions use charcoal fill, white rounded-sans labels, and 14px corners. Secondary actions are pale or outlined. Quantity uses a compact horizontal minus/count/plus control.

### Pricing Tabs

No pricing-plan tabs were observed. Catalog filters use small rounded chips: selected is charcoal with white text, default is pale or white with dark text.

### Cards & Containers

Intent cards range from one wide illustrated banner to compact text-only tiles. Product cards lead with food photography, then name, weight, tags, and price. Loyalty uses an illustrated hero plus a white privilege card.

### Inputs & Forms

Search is an open field with a simple icon and minimal container. Checkout groups delivery method, pickup location, promo code, and comment using pale rounded rows and clear section headings.

### Status & Build Page

Delivery progress uses a green vehicle marker and labeled threshold bar. Loyalty level uses explicit number, percentage, cashback, points, and progress. Order state remains textual in history and tracking.

### Navigation

Home, Catalog, Loyalty, Basket, and Profile sit inside a charcoal floating bar. The selected tab rises on a light rounded tile. Counts appear on Basket without changing tab width.

### Footer

Checkout ends in a persistent order action when needed. Profile finishes with account actions and muted legal/version content; editorial stories use their own narrative ending.

## Do's and Don'ts

### Do

- Keep commerce practical and editorial discovery expressive.
- Let real food photography lead catalog and basket.
- Use serif for home and story statements.
- Keep the charcoal tab bar consistent across core flows.
- Reuse the pastel hand-drawn character language for guidance and loyalty.

### Don't

- Don't put decorative serif inside prices or form controls.
- Don't replace product photos with illustration.
- Don't turn pastel accents into competing action colors.
- Don't add glossy 3D art or heavy shadows.
- Don't overfill editorial pages with product cards.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center the mobile column; allow wider editorial images |
| Compact | 390–767px | Default three- and two-column grids |
| Small | <390px | Reduce to two category columns and one product column |

### Touch Targets

Keep tabs, category cards, filters, quantity controls, and checkout rows at least 44px. Separate basket delete from quantity adjustment and primary checkout action.

### Collapsing Strategy

Reduce catalog columns before shrinking text or food imagery. Stack delivery choices when labels wrap. Keep the floating tab bar as a single row and shorten low-priority labels only if unavoidable.

### Image Behavior

Use cover for food cards and contain for illustrated characters. Editorial story photography may crop vertically but should retain dish and headline focal areas. Dark theme should not dim product images.

## Iteration Guide

1. Establish warm canvas, charcoal navigation, and type pairing.
2. Build one category tile and one product card with real food imagery.
3. Add home intent cards and editorial spacing.
4. Implement basket and checkout before seasonal stories.
5. Validate illustration use against both light and dark themes.

## Known Gaps

- Exact proprietary font names and brand tokens were inferred visually.
- Re-launch video motion could not be assessed from still previews.
- Some editorial and profile child flows were sampled at representative steps.
- Tablet and desktop layouts were not available in the inspected scenarios.

</design-context>

Use the design system above for all UI you generate.
