<design-context>
---
version: alpha
name: InDrive-design-analysis
description: "A map-first mobility interface with white layered sheets, bold black type, simple gray dividers, and an unmistakable acid-lime action color. Live location and route context stay visible behind large rounded planning panels. Safety, driver contact, and price negotiation receive equal visual weight, supported by black-and-white character illustration and compact 3D transport scenes."
colors:
  primary: "#B9F600"
  on-primary: "#111111"
  primary-hover: "#C8FF27"
  primary-focus: "#9FD600"
  ink: "#161616"
  ink-muted: "#535357"
  ink-subtle: "#85858B"
  ink-tertiary: "#B0B0B6"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F8"
  surface-2: "#EFEFF1"
  surface-3: "#E3E3E6"
  surface-4: "#D6D6DA"
  hairline: "#E0E0E3"
  hairline-strong: "#C5C5CA"
  hairline-tertiary: "#AAAAAF"
  inverse-canvas: "#151515"
  inverse-surface-1: "#292929"
  inverse-surface-2: "#3B3B3B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#89AFFF"
  semantic-success: "#20C987"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 42px, fontWeight: 800, lineHeight: 1.04, letterSpacing: -1.3px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 800, lineHeight: 1.08, letterSpacing: -0.9px}
  display-md: {fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.5px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 13px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
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
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 44px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 18px}
  map-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px}
  location-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px 16px}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10px}
  driver-action: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12px}
  price-stepper: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.md}", padding: 12px}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px}
---
## Overview

InDrive keeps the map as persistent spatial context while white rounded sheets carry planning, offers, driver details, and safety. Acid lime makes key actions instantly recognizable without coloring the whole interface.

**Key Characteristics:**
- Map-first composition with layered white sheets.
- Acid-lime primary action and safety emphasis.
- Bold black headings and large price numerals.
- Compact service cards with simple 3D scenes.
- Driver, contact, and safety actions grouped as circles.
- Side-menu rather than a persistent bottom tab bar.

## Colors

### Brand & Accent
- Acid lime marks primary actions, safe-state controls, and brand moments.
- Blue is limited to current location on the map.

### Surface
- White sheets and controls float over a pale neutral map.
- Light gray groups fields, steppers, and service tiles.
- Black appears in launch branding and high-contrast illustration.

### Text
- Near-black carries destination, price, and driver data.
- Mid-gray handles guidance and secondary route facts.
- Red is reserved for cancellation and emergency.

### Semantic
- Lime communicates proactive safety and action, not success alone.
- Green confirms completion where needed.

## Typography

### Font Family

- SF Pro Display for destination, offer price, and arrival time.
- SF Pro Text for forms, route details, and safety copy.
- SF Mono for countdowns, codes, and price increments.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42px | 800 | Offered price |
| display-lg | 34px | 800 | Arrival or status |
| display-md | 27px | 700 | Sheet title |
| headline | 22px | 700 | Destination prompt |
| card-title | 17px | 600 | Driver or service |
| body | 14px | 400 | Route and safety copy |
| caption | 10px | 400 | Service labels |

### Principles

- Keep price and time visually dominant.
- Use short labels beneath circular actions.
- Avoid condensed typography on map labels or safety content.

### Note on Font Substitutes

Use Apple system fonts for consistent map and form rendering.

## Layout

### Spacing System

Use a 4px base with 12–16px inside controls and 20–24px between major sheet groups.

### Grid & Container

The map occupies the viewport. Planning content uses one large bottom sheet; service options use a compact grid inside it.

### Whitespace Philosophy

White space must keep location and price decisions legible. Avoid filling the map with independent floating controls.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Map | Spatial base |
| 1 | White rounded sheet | Planning and active ride |
| 2 | Gray inset field | Location and price controls |
| 3 | Floating circular control | Menu, recenter, safety |

### Decorative Depth

Use soft sheet separation and compact 3D service scenes. Do not add heavy shadows to every row.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Service and price controls |
| rounded-lg | 18px | Driver groups |
| rounded-xl | 24px | Bottom sheets |
| rounded-pill | full | Banners |
| rounded-full | full | Safety and contact actions |

### Photography & Illustration Geometry

Character illustrations use angular lime backdrops. Service vehicles are small 3D scenes. Avatars remain circular; map and route graphics stay factual.

## Components

### Buttons

Primary buttons are full-width lime rectangles with dark labels. Secondary actions use light gray or white. Cancellation uses red text without filling the whole panel.

### Pricing Tabs

Fare or service choice uses compact cards rather than tabs. Selected choice gains lime emphasis and clear price.

### Cards & Containers

Planning and ride state live in one continuous sheet. Promotional services use small image-led tiles; safety information uses simple rows and circular actions.

### Inputs & Forms

Location fields are large pale rows. Price negotiation uses a central bold amount with decrement and increment controls.

### Status & Build Page

Search progress combines a countdown, number of drivers viewing, and an optional automatic-accept toggle. Arrival state promotes driver and vehicle information.

### Navigation

Use a floating menu button over the map. Contextual back, close, and recenter controls are circular and remain separated from the main sheet.

### Footer

No footer; the bottom sheet and safe area form the screen end.

## Do's and Don'ts

### Do

- Preserve visible map context.
- Make price negotiation explicit.
- Keep safety reachable throughout the ride.
- Reserve lime for action and trust.
- Group driver contact choices together.

### Don't

- Don't cover the entire map before destination selection.
- Don't use lime as a large text background repeatedly.
- Don't bury safety in settings.
- Don't separate price and timer.
- Don't add a conventional five-tab bottom bar.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Shorter sheet and tighter service grid |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Wider map and sheet with same hierarchy |

### Touch Targets

Map controls, location rows, driver actions, and steppers retain at least 44px hit areas.

### Collapsing Strategy

The sheet scrolls internally when ride detail grows. Service grids reduce columns before labels shrink.

### Image Behavior

Keep illustrations contained without clipping hands or vehicles. Map content remains fully interactive behind the sheet.

## Iteration Guide

Tune map-to-sheet balance first, then price hierarchy, lime density, and safety grouping.

## Known Gaps

- Live map motion and driver-position updates were not represented by stills.
- Dark theme was not reviewed.
- Tablet and landscape behavior were not shown.
</design-context>
