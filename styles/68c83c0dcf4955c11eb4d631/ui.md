<design-context>
---
version: 1
platform: iOS
name: gg-design-analysis
description: "A map-first mobility interface with pale cartography, crisp white bottom sheets, near-black actions, restrained blue links, and friendly illustrated service icons. Large rounded panels and compact type keep location, vehicle, fare, and driver states calm and legible."
colors: {primary: "#111214", on-primary: "#FFFFFF", primary-focus: "#000000", ink: "#15171A", ink-muted: "#656A70", ink-subtle: "#969BA1", ink-tertiary: "#C2C6CA", canvas: "#F3F4F2", surface-1: "#FFFFFF", surface-2: "#F4F5F5", surface-3: "#EAECED", surface-4: "#DDE1E3", hairline: "#E2E5E7", hairline-strong: "#C8CDD1", hairline-tertiary: "#AEB5BA", inverse-canvas: "#111214", inverse-surface-1: "#232529", inverse-surface-2: "#35383D", inverse-ink: "#FFFFFF", brand-secure: "#2F7EF7", semantic-success: "#2AAA64", semantic-overlay: "#111214"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.22, letterSpacing: -0.1}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  bottom-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20}
  service-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [13, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  map-pin: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 8}
---

# Overview

gg is a restrained map-first mobility system. Pale maps supply context while large white sheets, black controls, compact blue links, and illustrated service shortcuts guide the next decision.

**Key Characteristics:** pale cartography, white floating sheets, black primary actions, sparse blue links, large corner radii, compact service cards, clear vehicle and fare hierarchy, and friendly transport icons.

# Non-negotiable visual invariants

- The reference consistently shows pale cartography.
- The reference consistently shows white floating sheets.
- The reference consistently shows black primary actions.
- The reference consistently shows sparse blue links.
- The reference consistently shows large corner radii.
- The reference consistently shows compact service cards.
- The reference consistently shows clear vehicle and fare hierarchy.
- The reference consistently shows friendly transport icons.

# Color and surfaces

### Brand & Accent

Near-black owns the logo, map pin, primary action, and selected state. Blue is secondary and appears only on links, optional actions, and focused information.

### Surface

The map is a quiet gray-green canvas. White sheets and cards sit above it; pale gray fills separate search, services, and secondary controls.

### Text

Near-black carries destinations, prices, and titles. Mid-gray handles labels and trip detail; lighter gray is reserved for inactive or unavailable information.

### Semantic

Green confirms successful trip states, blue marks optional interaction, and black indicates the committed action. Keep warnings localized and high contrast.

# Typography

### Font Family

Use SF Pro Display for large route or state headings and SF Pro Text for addresses, fares, vehicle detail, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28 points | 700 | Major trip state |
| headline | 20 points | 700 | Sheet title or fare |
| card-title | 16 points | 600 | Destination or service |
| body | 14 points | 400 | Address and trip detail |
| caption | 10 points | 400 | ETA and helper meta |

### Principles

- Lead with destination, pickup state, fare, or driver status.
- Keep labels short and use weight before color for hierarchy.
- Align repeated vehicle facts and prices for quick comparison.

### Note on Font Substitutes

Use the platform sans with excellent map-label contrast and tabular numerals.

# Screen composition

### Spacing System

Use a 4 points base, 12–16 points control gaps, 20 points sheet padding, and generous separation between route decisions.

### Grid & Container

The map fills the viewport. A single bottom sheet holds search, service choice, fare, driver, rating, or trip actions.

### Whitespace Philosophy

Let the map breathe above the sheet; keep the decision area compact and avoid stacking unrelated controls.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale map | Location context |
| 1 | White rounded card | Search and service shortcut |
| 2 | Large white sheet | Active trip decision |
| 3 | Black floating action | Commitment or map control |

### Decorative Depth

Use map texture, route geometry, small illustrated service objects, and restrained sheet shadow. Do not add ornamental gradients.

# Navigation appearance

Primary navigation is contextual: the map and bottom sheet stay persistent while menu and support open as focused overlays.

# Components

### Buttons

Primary actions are near-black with white labels and moderate rounding. Secondary actions use white or pale gray; optional links may use blue text.

### Cards & Containers

Use one dominant sheet per state. Nested cards are pale, lightly separated, and reserved for route, vehicle, driver, or payment facts.

### Inputs & Forms

Pickup and destination inputs use pale fills, leading location marks, and clear focus. Native controls may remain native in code but must inherit these colors, radii, type, and spacing.

# Imagery and icons

Use map texture, route geometry, small illustrated service objects, and restrained sheet shadow. Do not add ornamental gradients.

Keep vehicles and service illustrations isolated inside soft square or circular fields; maps and route lines remain full bleed beneath the sheet.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep arrival time, driver identity, vehicle, fare, pickup point, cancellation, and rating state near the current action.

# iOS adaptation

### Touch Targets

Map controls, service cards, destination rows, rating stars, and primary actions remain at least 44 points.

### Collapsing Strategy

Preserve destination, pickup, ETA, fare, driver, and primary action; collapse tips, promotions, and secondary service detail first.

### Image Behavior

Keep map labels readable, crop vehicle art as isolated objects, and preserve a clear text-safe area in every service tile.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't cover most of the map before a decision requires it.
- Don't add competing brand colors or decorative gradients.
- Don't let illustrated shortcuts overpower route information.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Payment-method setup and cancellation recovery were not fully sampled.
- Most evaluated layouts were portrait phone screens.

</design-context>
