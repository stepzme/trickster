<design-context>
---
version: alpha
name: SmartMed-design-analysis
description: "A light medical super-app built from pale blue page chrome, white rounded sheets, turquoise actions, compact information cards, and soft aqua-lilac 3D service imagery. Dense care choices remain calm through clear section headings, generous card radii, and a persistent five-tab navigation."

colors:
  primary: "#18BFC2"
  on-primary: "#FFFFFF"
  primary-pressed: "#10A8AB"
  accent-blue: "#6483F0"
  accent-lilac: "#B7A7F3"
  ink: "#17191D"
  ink-muted: "#70747B"
  ink-subtle: "#A9ADB3"
  canvas: "#F4F6F8"
  surface-1: "#FFFFFF"
  surface-2: "#EEF9F9"
  hairline: "#E7EAED"
  semantic-success: "#18B883"
  semantic-warning: "#F2A33B"
  semantic-danger: "#E55A61"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  service-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  service-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62px }
---

## Overview

SmartMed is a calm, service-dense medical interface. Pale blue chrome frames white content sheets; teal anchors actions and selection; rounded cards and soft medical objects reduce the severity of appointments, diagnostics, and pharmacy tasks.

## Colors

### Brand & Accent

Turquoise is the sole operational accent. Periwinkle and lilac appear in service artwork and promotional cards, not as competing action colors.

### Surface

Use a cool gray canvas, white sheets, and very pale aqua tiles. Dense lists remain white and separate with spacing or faint dividers.

### Text

Near-black carries titles and prices; medium gray carries descriptions; light gray is reserved for placeholders and inactive navigation.

### Semantic

Green confirms status, amber marks attention, and coral-red marks errors or discounts. Preserve teal for navigation and primary actions.

## Typography

### Font Family

Use a neutral system sans with clear Cyrillic and numerals. The voice is clinical but friendly.

### Hierarchy

Large titles are rare. Use 21px section headings, 16px service titles, 14px body copy, and 10–12px metadata.

### Principles

Keep labels direct, wrap medical names cleanly, and keep price or appointment status visually adjacent to the related service.

### Note on Font Substitutes

SF Pro or Inter are suitable. Preserve compact card labels and high legibility at small sizes.

## Layout

### Spacing System

Use a 4px base, 16px page gutters, 8–12px card gaps, and 24px between major service groups.

### Grid & Container

Home uses horizontal carousels and compact two-column service tiles inside a single scrolling column. Detail and profile screens use full-width rows.

### Whitespace Philosophy

Keep air around headings and illustrative tiles while allowing administrative lists to remain compact.

## Elevation & Depth

Depth comes from white sheets on cool chrome, gentle shadows, and occasional overlapping carousels rather than hard borders.

### Decorative Depth

Use translucent aqua and lavender 3D objects, soft gradients, and small glossy highlights. Avoid heavy glass blur.

## Shapes

### Border Radius Scale

Sheets use 22px corners, cards 12–16px, inputs 12px, and avatars or status marks are circular.

### Photography & Illustration Geometry

Medical illustrations sit centered inside pastel landscape cards; pharmacy products use clean cutouts. Clinic maps remain rectangular and functional.

## Components

### Buttons

Primary actions are turquoise with white text and 12px corners. Native controls may be used, but their styling must inherit the same color, geometry, and typography.

### Pricing Tabs

Use compact pill filters or text links with teal selection. Inactive values stay neutral on white.

### Cards & Containers

Service hubs, packages, clinics, and products use white or pale-aqua rounded cards. Keep one clear action or destination per card.

### Inputs & Forms

Search and booking fields are pale or white rounded bars with gray placeholder text. Long booking tasks progress as simple single-column steps.

### Status & Build Page

Appointment, payment, loyalty, and medical-card status should appear close to the related title with compact semantic color and plain language.

### Navigation

Five bottom tabs persist across main areas. Teal identifies the active destination; focused tasks use a plain top bar and back action.

### Footer

There is no page footer. End screens with safe-area spacing or the persistent bottom navigation.

## Do's and Don'ts

### Do

- Keep teal as the interaction anchor.
- Use white sheets to organize dense care options.
- Pair friendly imagery with explicit medical labels.
- Preserve clear prices and appointment states.

### Don't

- Do not use decorative color for clinical severity.
- Do not crowd several primary actions into one tile.
- Do not expose default blue controls.
- Do not turn pharmacy photography into the illustration language.

## Responsive Behavior

### Breakpoints

Keep care flows single-column. Wider layouts may center the phone-width content or expand service grids without changing task order.

### Touch Targets

Tabs, rows, carousel cards, map controls, and booking actions require at least 44px targets.

### Collapsing Strategy

Allow service carousels to scroll horizontally. Keep booking actions visible after long clinic or specialty lists.

### Image Behavior

Use `contain` for service objects and product cutouts; use `cover` for promotional banners. Maps expand to available bounds.

## Iteration Guide

Start with the cool canvas, white main sheet, teal action system, five-tab navigation, and service-card rhythm. Add booking, pharmacy, medical record, and profile lists before promotional modules.

## Known Gaps

The reviewed scenarios cover Home, health services, appointment discovery, clinics and maps, pharmacy, medical record, and Profile. Tablet behavior, accessibility scaling, and every error state were not visible.

</design-context>

Use the design system above for all UI you generate.
