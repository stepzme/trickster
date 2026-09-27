<design-context>
---
version: alpha
name: T-Bank-design-analysis
description: "A modular finance-and-lifestyle super-app built from white rounded cards, pale gray canvas, bright yellow commitment actions, light blue utility accents, and friendly graphite-yellow 3D product objects. A five-tab structure supports dense banking, shopping, travel, and support without losing clarity."

colors:
  primary: "#FFDD2D"
  on-primary: "#171717"
  primary-pressed: "#EBC600"
  accent-blue: "#56A8F7"
  accent-violet: "#8D54E8"
  ink: "#1A1A1C"
  ink-muted: "#74767B"
  ink-subtle: "#A8ABB0"
  canvas: "#F3F4F6"
  surface-1: "#FFFFFF"
  surface-2: "#EAF4FF"
  hairline: "#E1E4E8"
  semantic-success: "#29B36B"
  semantic-warning: "#E7A91D"
  semantic-danger: "#E94F58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  product-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12px }
  input-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60px }
---

## Overview

T-Bank is a broad but controlled super-app. White modular cards, yellow actions, blue utilities, and a consistent 3D product language let banking and lifestyle content coexist.

## Colors

### Brand & Accent

Yellow marks brand and commitment. Blue supports selected navigation, links, scanners, and utility actions; violet appears in rewards.

### Surface

Pale gray canvas separates white cards and sheets. Occasional dark hero panels introduce premium products.

### Text

Near-black carries balances and titles; gray carries dates, terms, and secondary details.

### Semantic

Green confirms incoming value and success, red marks errors or debt, and amber warns. Yellow must not replace explicit status labels.

## Typography

### Font Family

Use a neutral system sans with clear numerals and strong Cyrillic.

### Hierarchy

Use 22–28px page headings, 16–17px card titles, 14px body, and 10–12px transaction metadata.

### Principles

Keep amounts prominent, terms explicit, and promotional claims separate from account data.

### Note on Font Substitutes

SF Pro or Inter are suitable. Use tabular numerals for money and percentages.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px card gaps, and 20–24px between product groups.

### Grid & Container

Home stacks account modules and shortcut rows. City and Showcase use mixed tile grids; payments and transactions remain single-column.

### Whitespace Philosophy

Keep account and payment content calm; lifestyle shelves may be denser and more image-led.

## Elevation & Depth

White cards lift softly from gray. Bottom sheets and dark promotional heroes create stronger, task-specific elevation.

### Decorative Depth

Use graphite-yellow 3D objects, soft platforms, and restrained gradients. Avoid decorative treatment inside financial forms.

## Shapes

### Border Radius Scale

Cards use 18px, sheets 24px, inputs 12px, buttons 12px, and avatars or shortcuts are circular.

### Photography & Illustration Geometry

Travel and shopping use rounded photographic crops; products use clean cutouts; service illustrations center on pale platforms.

## Components

### Buttons

Primary actions are yellow with dark text. Blue pills support utilities; native controls must inherit the same hierarchy and geometry.

### Pricing Tabs

Payment modes, travel filters, and product options use compact pills or segments with clear yellow or blue selection.

### Cards & Containers

Finance cards foreground amount and action. City and Showcase tiles pair short labels with photography or a single 3D object.

### Inputs & Forms

Search and transfer fields are white rounded bars. Multi-step financial forms keep amount, source, fee, and confirmation linear.

### Status & Build Page

Payment, trip, order, cashback, card, and support states remain adjacent to the relevant item and use explicit text.

### Navigation

Five bottom tabs persist across Home, Payments, City, Chat, and Showcase. Blue identifies the active destination.

### Footer

There is no footer. Tasks end with persistent navigation or a safe-area-aware yellow action.

## Do's and Don'ts

### Do

- Reserve yellow for brand and commitment.
- Keep account data explicit.
- Use one 3D object family.
- Separate lifestyle promotion from finance state.

### Don't

- Do not make every card yellow.
- Do not hide fees or terms behind friendly art.
- Do not mix unrelated illustration styles.
- Do not expose default platform-blue controls.

## Responsive Behavior

### Breakpoints

Keep payment tasks single-column. Wider City and Showcase layouts may add columns while finance remains centered.

### Touch Targets

Shortcuts, cards, tabs, chat rows, and financial actions require at least 44px targets.

### Collapsing Strategy

Allow story and offer rails to scroll horizontally. Keep totals and confirmation actions visible through long tasks.

### Image Behavior

Use `cover` for travel and campaigns and `contain` for product cutouts and 3D objects.

## Iteration Guide

Start with Home, yellow actions, five-tab navigation, payments, account cards, and Chat. Add City, Showcase, travel, and product education afterward.

## Known Gaps

All 209 available flow records were surveyed; representative Home, Payments, City, Chat, Showcase, travel, and product screens were inspected. Tablet layouts and every failure state were not visible.

</design-context>

Use the design system above for all UI you generate.
