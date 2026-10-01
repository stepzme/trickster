<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: YS Text, fontSize: 38, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.9 }
  display-lg: { fontFamily: YS Text, fontSize: 31, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.6 }
  display-md: { fontFamily: YS Text, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4 }
  headline: { fontFamily: YS Text, fontSize: 22, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 17, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 15, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  confirm-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  order-button: { backgroundColor: "{colors.action-dark}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8 }
  destination-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [13, 16]}
  map-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  fare-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8 }
  feedback-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [8, 10]}
  map-control: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", size: 44 }
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16 }
---

# Overview

Yandex Go behaves as both service launcher and map-driven task UI. Home is a white dashboard of illustrated destinations, search, recent places, and offers. Taxi flows foreground cartography and place a rounded white task sheet over it.

**Key Characteristics:**
- Saturated yellow progress and confirmation.
- White dashboard and sheets over maps.
- 3D service miniatures.
- Horizontal fare comparison.
- Strong route and status visibility.

# Non-negotiable visual invariants

- The reference consistently shows saturated yellow progress and confirmation.
- The reference consistently shows white dashboard and sheets over maps.
- The reference consistently shows 3D service miniatures.
- The reference consistently shows horizontal fare comparison.
- The reference consistently shows strong route and status visibility.

# Color and surfaces

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

# Typography

### Font Family

- **YS Text** — all service, transport, map, and commerce surfaces.
- Brand wordmarks remain artwork rather than live interface type.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38 points | 700 | Campaign or annual result |
| `{typography.display-md}` | 26 points | 700 | Onboarding message |
| `{typography.headline}` | 22 points | 700 | Sheet status and feedback |
| `{typography.card-title}` | 16 points | 600 | Service and fare title |
| `{typography.body}` | 14 points | 400 | Address and details |
| `{typography.caption}` | 11 points | 400 | Tile and fare metadata |

### Principles

- Make addresses and ETA immediately scannable.
- Use compact type inside maps and fare cards.
- Keep guidance short and bold.
- Use yellow fill instead of yellow body text.

### Note on Font Substitutes

Use **SF Pro** on iOS or **Inter** when YS Text is unavailable.

# Screen composition

### Spacing System

Use a 4 points base. Home tiles use 8–12 points gaps; map sheets use 16 points gutters; major actions use 12–16 points outer spacing.

### Grid & Container

Home uses a four-column service grid and full-width search. Fare selection is horizontal. Trip state uses one bottom sheet over a full map.

### Whitespace Philosophy

Keep home modular but open. On maps, preserve enough uncovered area to understand location and route.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Map or white dashboard | Base |
| 1 | Pale service tile | Service entry |
| 2 | White rounded sheet | Ride task |
| 3 | Teaching modal on dimmed state | Timely guidance |

### Decorative Depth

Use shallow 3D object rendering in service tiles. Functional sheets rely on soft edge shadow and map contrast.

# Navigation appearance

Home relies on service tiles and a side menu rather than a persistent global tab bar. Map flows use back, location, and sheet gestures.

# Components

### Buttons

Yellow buttons advance or acknowledge. The final taxi order may use a dark filled action. Secondary controls are white or pale with dark icons.

### Cards & Containers

Service tiles combine a miniature and short label. Map sheets combine address, route, mode tabs, fares, and the primary action.

### Inputs & Forms

Destination and pickup fields are large pale bars. Address suggestions open in a white sheet above the keyboard.

# Imagery and icons

Use shallow 3D object rendering in service tiles. Functional sheets rely on soft edge shadow and map contrast.

Service miniatures sit centered in pale rounded tiles. Offer photography uses rounded cards. Driver photos and avatars are circular.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Ride status combines map marker, ETA, driver/car data, and contextual actions. Rating uses five yellow stars and optional attribute chips.

# iOS adaptation

### Touch Targets

Keep service tiles, map controls, fare cards, and sheet actions at least 44 points.

### Collapsing Strategy

Scroll fares and service rows horizontally. Keep addresses stacked and the primary action full width.

### Image Behavior

Contain service miniatures, cover offer photography, and crop driver portraits as circles. Never raster-scale the map UI.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't cover the whole map with a sheet.
- Don't mix multiple primary action colors in one state.
- Don't hide price until final confirmation.
- Don't turn service tiles into text-only menus.
- Don't use decorative map colors outside cartography.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Exact tokens and typeface metrics were inferred visually.
- The 35-flow inventory was complete; key taxi flows were sampled visually.
- Scooter flows were inventoried but not part of the visual sample.
- Tablet layouts were not present.

</design-context>
