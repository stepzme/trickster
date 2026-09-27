<design-context>
---
version: alpha
name: Cian-design-analysis
description: "A map- and photography-led real-estate marketplace with white surfaces, vivid blue actions, pale-blue service panels, cyan header gradients, compact green trust labels, and dense listing data. Search, filters, map, property detail, favorites, messages, listing creation, wallet, and office tools stay utilitarian and comparable."
colors:
  primary: "#087BEE"
  on-primary: "#FFFFFF"
  primary-hover: "#0566C7"
  primary-soft: "#EAF4FF"
  accent: "#35B8F3"
  accent-secondary: "#2FAF63"
  ink: "#17191C"
  ink-muted: "#6F7479"
  ink-subtle: "#A7ACB1"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F5F8"
  hairline: "#DFE4E8"
  semantic-success: "#2FAF63"
  semantic-danger: "#D83A4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Cian prioritizes geographic search, comparable listing data, and direct contact. Secondary tools support saved searches, property management, listing creation, messaging, and wallet administration.

**Key Characteristics:**
- Map-first search surface.
- Vivid blue actions.
- Cyan gradient home header.
- Photo-heavy listings.
- Dense property and price data.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Search, save, call, publish, and continuation.
- **Accent** ({colors.accent}): Header atmosphere and service emphasis.
- **Secondary Accent** ({colors.accent-secondary}): Trust, new, super-agent, and positive labels.

### Surface
- **Canvas** ({colors.canvas}): Results, listing, creation, favorites, and office.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Display** — prices and section headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep location and price dominant.
- Show property attributes in consistent order.
- Use photos for evidence, not decoration.
- Keep contact action persistent.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Search overlays filters on a map and raises a listing sheet from below. Detail uses a photo gallery followed by dense sections; creation uses a linear form.

### Whitespace Philosophy

Allow map and photos to breathe, while keeping comparable listing metadata tightly grouped.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use sheets over maps, subtle cards, and mild blue gradient only on home. Photography provides most depth.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

Use real property, room, building, and neighborhood photos. Small service icons stay functional and secondary.

## Components

### Buttons

Blue full-width actions save search, call, create, publish, and continue. Favorite uses a separate heart state.

### Pricing Tabs

Rent or buy, property type, location, rooms, sort, filter, and map use compact chips with explicit selection.

### Cards & Containers

Listing cards pair photo, price, core attributes, location, transport time, labels, and contact. Similar listings use a compact photo grid.

### Inputs & Forms

Location, parameters, photos, features, description, price, terms, and payment use stepwise labeled controls.

### Status & Build Page

Show new, advertisement, verified, super-agent, price changed, draft, published, paid, archived, and deleted as text labels.

### Navigation

Home, Search, Favorites, Messages, and Office form the base; map and listing preserve search context.

### Footer

Contact or continuation remains above the safe area; base navigation returns outside focused tasks.

## Do's and Don'ts

### Do

- Preserve search context.
- Keep price and area comparable.
- Use real photos.
- Make contact obvious.
- Show listing state.

### Don't

- Don't hide filters behind opaque imagery.
- Don't use illustration instead of property evidence.
- Don't bury price history.
- Don't mix owner tools into buyer search.
- Don't rely on map dots without list access.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44px.

### Collapsing Strategy

Preserve location, filters, listing summary, price, and contact. Collapse secondary services before property evidence.

### Image Behavior

Crop property photos consistently but preserve spatial context. Keep price, attributes, trust labels, and CTA outside the image.

## Iteration Guide

1. Build map and search filters.
2. Add results and listing detail.
3. Add favorites and messages.
4. Add listing creation and publishing.
5. Add office, wallet, property tools, and alerts.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 120 available flow names were inventoried; search, filters, listing detail, similar listings, listing creation, and office were image-reviewed.
- 3D tours, video access, payment completion, and smart-camera behavior were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
