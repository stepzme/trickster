<design-context>
---
version: alpha
name: yandex-go-design-analysis
description: "A multi-service mobility hub that combines a white dashboard and cart-like commerce modules with detailed maps, draggable white sheets, saturated yellow confirmations, black primary text, and friendly 3D service miniatures. Rounded service tiles, fare cards, route overlays, and feedback controls make complex transport tasks feel direct."
colors:
  primary: "#FFE600"
  on-primary: "#161616"
  action-dark: "#252525"
  route-blue: "#1877F2"
  route-green: "#38B66A"
  ink: "#171717"
  ink-muted: "#6D6E73"
  ink-subtle: "#A4A5AA"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F5"
  surface-2: "#EDEDEF"
  surface-3: "#DFE0E2"
  hairline: "#E3E3E5"
  semantic-danger: "#E24A4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: YS Text, fontSize: 38px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.9px }
  display-lg: { fontFamily: YS Text, fontSize: 31px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.6px }
  display-md: { fontFamily: YS Text, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px }
  headline: { fontFamily: YS Text, fontSize: 22px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  confirm-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  order-button: { backgroundColor: "{colors.action-dark}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px }
  destination-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 13px 16px }
  map-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  fare-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px }
  feedback-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px 10px }
  map-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", size: 44px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16px }
---

## Overview

Yandex Go behaves as both service launcher and map-driven task UI. Home is a white dashboard of illustrated destinations, search, recent places, and offers. Taxi flows foreground cartography and place a rounded white task sheet over it.

**Key Characteristics:**
- Saturated yellow progress and confirmation.
- White dashboard and sheets over maps.
- 3D service miniatures.
- Horizontal fare comparison.
- Strong route and status visibility.

## Colors

### Brand & Accent
- **Yellow** ({colors.primary}): Continue, learn, confirm, rating stars, and highlighted service state.
- **Action Dark** ({colors.action-dark}): Final order action when contrast over white is needed.
- **Route Blue/Green**: Route line, navigation, and traffic alternatives.

### Surface
- **Canvas** ({colors.canvas}): Dashboard and sheets.
- **Surface 1** ({colors.surface-1}): Service tiles, search, chips, and feedback controls.
- **Surface 2/3**: Disabled and selected utility states.
- **Hairline** ({colors.hairline}): Sheet and row separation.

### Text
- **Ink** ({colors.ink}): Addresses, fares, status, and primary actions.
- **Ink Muted** ({colors.ink-muted}): Time, secondary address, and trip metadata.
- **Ink Subtle** ({colors.ink-subtle}): Inactive modes and placeholders.

### Semantic
- **Danger** ({colors.semantic-danger}): Cancellation and disruption.
- **Overlay** ({colors.semantic-overlay}): Modal teaching prompts.

## Typography

### Font Family

- **YS Text** — all service, transport, map, and commerce surfaces.
- Brand wordmarks remain artwork rather than live interface type.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Campaign or annual result |
| `{typography.display-md}` | 26px | 700 | Onboarding message |
| `{typography.headline}` | 22px | 700 | Sheet status and feedback |
| `{typography.card-title}` | 16px | 600 | Service and fare title |
| `{typography.body}` | 14px | 400 | Address and details |
| `{typography.caption}` | 11px | 400 | Tile and fare metadata |

### Principles

- Make addresses and ETA immediately scannable.
- Use compact type inside maps and fare cards.
- Keep guidance short and bold.
- Use yellow fill instead of yellow body text.

### Note on Font Substitutes

Use **SF Pro** on iOS or **Inter** when YS Text is unavailable.

## Layout

### Spacing System

Use a 4px base. Home tiles use 8–12px gaps; map sheets use 16px gutters; major actions use 12–16px outer spacing.

### Grid & Container

Home uses a four-column service grid and full-width search. Fare selection is horizontal. Trip state uses one bottom sheet over a full map.

### Whitespace Philosophy

Keep home modular but open. On maps, preserve enough uncovered area to understand location and route.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Map or white dashboard | Base |
| 1 | Pale service tile | Service entry |
| 2 | White rounded sheet | Ride task |
| 3 | Teaching modal on dimmed state | Timely guidance |

### Decorative Depth

Use shallow 3D object rendering in service tiles. Functional sheets rely on soft edge shadow and map contrast.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Fare and feedback chip |
| `{rounded.md}` | 14px | Tile, input, and button |
| `{rounded.lg}` | 18px | Commerce card |
| `{rounded.xl}` | 24px | Map sheet and modal |
| `{rounded.full}` | full | Map controls and avatars |

### Photography & Illustration Geometry

Service miniatures sit centered in pale rounded tiles. Offer photography uses rounded cards. Driver photos and avatars are circular.

## Components

### Buttons

Yellow buttons advance or acknowledge. The final taxi order may use a dark filled action. Secondary controls are white or pale with dark icons.

### Pricing Tabs

Fare cards form a horizontal selector with vehicle image, arrival time, service name, and price. Selected fare uses stronger border or surface.

### Cards & Containers

Service tiles combine a miniature and short label. Map sheets combine address, route, mode tabs, fares, and the primary action.

### Inputs & Forms

Destination and pickup fields are large pale bars. Address suggestions open in a white sheet above the keyboard.

### Status & Build Page

Ride status combines map marker, ETA, driver/car data, and contextual actions. Rating uses five yellow stars and optional attribute chips.

### Navigation

Home relies on service tiles and a side menu rather than a persistent global tab bar. Map flows use back, location, and sheet gestures.

### Footer

The active sheet's order or confirmation action acts as the footer. Home continues into commerce modules rather than a formal footer.

## Do's and Don'ts

### Do

- Keep map context visible.
- Reserve yellow for progress and confirmation.
- Make fare differences comparable.
- Use illustrated tiles for service recognition.
- Keep ETA and address persistent.

### Don't

- Don't cover the whole map with a sheet.
- Don't mix multiple primary action colors in one state.
- Don't hide price until final confirmation.
- Don't turn service tiles into text-only menus.
- Don't use decorative map colors outside cartography.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Wider map sheet and more service columns |
| Compact | 390–767px | Default dashboard and bottom sheet |
| Small | <390px | Three-column service grid and tighter fares |

### Touch Targets

Keep service tiles, map controls, fare cards, and sheet actions at least 44px.

### Collapsing Strategy

Scroll fares and service rows horizontally. Keep addresses stacked and the primary action full width.

### Image Behavior

Contain service miniatures, cover offer photography, and crop driver portraits as circles. Never raster-scale the map UI.

## Iteration Guide

1. Build service grid and destination field.
2. Add map and sheet foundation.
3. Add address and fare selection.
4. Add ride status and rating.
5. Apply miniature illustration polish last.

## Known Gaps

- Exact tokens and typeface metrics were inferred visually.
- The 35-flow inventory was complete; key taxi flows were sampled visually.
- Scooter flows were inventoried but not part of the visual sample.
- Tablet layouts were not present.

</design-context>

Use the design system above for all UI you generate.
