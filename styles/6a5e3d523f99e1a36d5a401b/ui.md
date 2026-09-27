<design-context>
---
version: alpha
name: Halyk-Kazakhstan-design-analysis
description: "A service-heavy financial super-app organized through white surfaces, Halyk green line icons, compact category grids, commerce banners, and yellow insurance accents. The system favors direct access and visible breadth over spacious minimalism."
colors: { primary: "#11A85A", on-primary: "#FFFFFF", primary-hover: "#078C4A", primary-soft: "#EAF8F0", accent: "#FFB719", ink: "#17191B", ink-muted: "#73777C", ink-subtle: "#AEB2B6", canvas: "#F5F6F6", surface-1: "#FFFFFF", surface-2: "#F0F3F2", hairline: "#E2E5E4", semantic-success: "#13A85B", semantic-warning: "#FFB719", semantic-danger: "#DE5555", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10px }
  promo-banner: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Halyk Kazakhstan presents banking, government, travel, market, cinema, and insurance as a compact green service hub.

## Colors

### Brand & Accent
Use Halyk green for navigation and actions; reserve warm yellow for insurance and urgent service emphasis.

### Surface
Keep the canvas pale gray and service areas white, with subtle green-tinted icon tiles.

### Text
Use near-black for titles, gray for metadata, and muted gray for unavailable fields.

### Semantic
Use green for available or completed state, yellow for attention, and red for failures.

## Typography

### Font Family
Use SF Pro Display for section titles and SF Pro Text for services, forms, and metadata.

### Hierarchy
Use 26–30px for key numbers, 21px for page titles, 15–16px for cards, 14px body, and 10–12px labels.

### Principles
Keep labels brief and consistent so dense service grids remain scannable.

### Note on Font Substitutes
Use the platform sans or Inter with tabular financial values.

## Layout

### Spacing System
Use a 4px base, 12–16px gutters, 8–12px grid gaps, and 14px form padding.

### Grid & Container
Home uses search, banners, a four-column service grid, category rails, and a five-tab footer.

### Whitespace Philosophy
Accept high density but separate banking, marketplace, and insurance contexts with clear cards and headers.

## Elevation & Depth
Use light card shadows and dividers; keep forms flatter than promotional modules.

### Decorative Depth
Use compact 3D objects inside service banners and empty states.

## Shapes

### Border Radius Scale
Use 9px for fields and chips, 13px for banners and cards, 18px for sheets, and circles for primary shortcuts.

### Photography & Illustration Geometry
Keep posters and promo art in rounded rectangles; contain 3D objects on uncluttered fields.

## Components

### Buttons
Use green filled buttons for primary actions and yellow filled buttons inside insurance context.

### Pricing Tabs
Use compact segmented controls for categories, documents, applications, and contracts.

### Cards & Containers
Use service tiles, banner carousels, media cards, insurance cards, and grouped form panels.

### Inputs & Forms
Stack labeled fields with clear separators, dropdown affordances, and a persistent save action.

### Status & Build Page
Show application, contract, insurance, payment, and empty-list state directly in context.

### Navigation
Home, My Bank, Transfers, and Payments anchor the shell; contextual products may use their own five-tab footer.

### Footer
Keep active navigation green; insurance may use a yellow central action without recoloring the whole shell.

## Do's and Don'ts

### Do
- Keep service categories predictable.
- Preserve search near the top.
- Make context changes explicit.

### Don't
- Don't mix yellow insurance actions with ordinary banking confirmation.
- Don't overcrowd form labels.
- Don't let banners displace the primary service grid.

## Responsive Behavior

### Breakpoints
Use four service columns on phones, six on tablet, and a capped multi-column hub on wide screens.

### Touch Targets
Keep tiles, tabs, form rows, and footer actions at least 44px.

### Collapsing Strategy
Preserve search, frequent services, current task, and action; move media and promotions lower.

### Image Behavior
Contain service artwork and crop posters consistently without covering labels.

## Iteration Guide
1. Build search, service grid, and navigation.
2. Add product contexts, forms, and application states.
3. Add marketplace, media, and promotional modules.

## Known Gaps
- Tokens were inferred visually from sampled mobile screens.
- Main page, Insurance, and All services were image-reviewed.
- Transfers and authenticated account states were not deeply sampled.

</design-context>
