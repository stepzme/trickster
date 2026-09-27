<design-context>
---
version: alpha
name: gg-design-analysis
description: "A map-first mobility interface with pale cartography, crisp white bottom sheets, near-black actions, restrained blue links, and friendly illustrated service icons. Large rounded panels and compact type keep location, vehicle, fare, and driver states calm and legible."
colors: {primary: "#111214", on-primary: "#FFFFFF", primary-hover: "#292B2E", primary-focus: "#000000", ink: "#15171A", ink-muted: "#656A70", ink-subtle: "#969BA1", ink-tertiary: "#C2C6CA", canvas: "#F3F4F2", surface-1: "#FFFFFF", surface-2: "#F4F5F5", surface-3: "#EAECED", surface-4: "#DDE1E3", hairline: "#E2E5E7", hairline-strong: "#C8CDD1", hairline-tertiary: "#AEB5BA", inverse-canvas: "#111214", inverse-surface-1: "#232529", inverse-surface-2: "#35383D", inverse-ink: "#FFFFFF", brand-secure: "#2F7EF7", semantic-success: "#2AAA64", semantic-overlay: "#111214"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.22, letterSpacing: -0.1px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px}
  bottom-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20px}
  service-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 13px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  map-pin: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 8px}
---
## Overview

gg is a restrained map-first mobility system. Pale maps supply context while large white sheets, black controls, compact blue links, and illustrated service shortcuts guide the next decision.

**Key Characteristics:** pale cartography, white floating sheets, black primary actions, sparse blue links, large corner radii, compact service cards, clear vehicle and fare hierarchy, and friendly transport icons.

## Colors

### Brand & Accent

Near-black owns the logo, map pin, primary action, and selected state. Blue is secondary and appears only on links, optional actions, and focused information.

### Surface

The map is a quiet gray-green canvas. White sheets and cards sit above it; pale gray fills separate search, services, and secondary controls.

### Text

Near-black carries destinations, prices, and titles. Mid-gray handles labels and trip detail; lighter gray is reserved for inactive or unavailable information.

### Semantic

Green confirms successful trip states, blue marks optional interaction, and black indicates the committed action. Keep warnings localized and high contrast.

## Typography

### Font Family

Use SF Pro Display for large route or state headings and SF Pro Text for addresses, fares, vehicle detail, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28px | 700 | Major trip state |
| headline | 20px | 700 | Sheet title or fare |
| card-title | 16px | 600 | Destination or service |
| body | 14px | 400 | Address and trip detail |
| caption | 10px | 400 | ETA and helper meta |

### Principles

- Lead with destination, pickup state, fare, or driver status.
- Keep labels short and use weight before color for hierarchy.
- Align repeated vehicle facts and prices for quick comparison.

### Note on Font Substitutes

Use the platform sans with excellent map-label contrast and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 12–16px control gaps, 20px sheet padding, and generous separation between route decisions.

### Grid & Container

The map fills the viewport. A single bottom sheet holds search, service choice, fare, driver, rating, or trip actions.

### Whitespace Philosophy

Let the map breathe above the sheet; keep the decision area compact and avoid stacking unrelated controls.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale map | Location context |
| 1 | White rounded card | Search and service shortcut |
| 2 | Large white sheet | Active trip decision |
| 3 | Black floating action | Commitment or map control |

### Decorative Depth

Use map texture, route geometry, small illustrated service objects, and restrained sheet shadow. Do not add ornamental gradients.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Compact icon control |
| rounded-md | 12px | Input and service tile |
| rounded-lg | 18px | Fare or driver card |
| rounded-xl | 24px | Bottom sheet |
| rounded-full | full | Pin, avatar, rating |

### Photography & Illustration Geometry

Keep vehicles and service illustrations isolated inside soft square or circular fields; maps and route lines remain full bleed beneath the sheet.

## Components

### Buttons

Primary actions are near-black with white labels and moderate rounding. Secondary actions use white or pale gray; optional links may use blue text.

### Pricing Tabs

Vehicle classes and service modes use horizontally scrollable cards with a clear black selection state, visible price, and ETA.

### Cards & Containers

Use one dominant sheet per state. Nested cards are pale, lightly separated, and reserved for route, vehicle, driver, or payment facts.

### Inputs & Forms

Pickup and destination inputs use pale fills, leading location marks, and clear focus. Native controls may remain native in code but must inherit these colors, radii, type, and spacing.

### Status & Build Page

Keep arrival time, driver identity, vehicle, fare, pickup point, cancellation, and rating state near the current action.

### Navigation

Primary navigation is contextual: the map and bottom sheet stay persistent while menu and support open as focused overlays.

### Footer

No footer; the active trip sheet and safe-area action close the viewport.

## Do's and Don'ts

### Do

- Preserve the map-first composition and one active sheet.
- Use black for commitment and blue only for optional interaction.
- Make destination, ETA, price, and driver state immediately scannable.

### Don't

- Don't cover most of the map before a decision requires it.
- Don't add competing brand colors or decorative gradients.
- Don't let illustrated shortcuts overpower route information.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten service-card width |
| Standard | 375–430px | Default map and sheet |
| Wide | 431px+ | Expand sheet gutters and map controls |

### Touch Targets

Map controls, service cards, destination rows, rating stars, and primary actions remain at least 44px.

### Collapsing Strategy

Preserve destination, pickup, ETA, fare, driver, and primary action; collapse tips, promotions, and secondary service detail first.

### Image Behavior

Keep map labels readable, crop vehicle art as isolated objects, and preserve a clear text-safe area in every service tile.

## Iteration Guide

Tune map plus search first, then service selection, fare choice, driver state, trip progress, rating, menu, and support.

## Known Gaps

- Payment-method setup and cancellation recovery were not fully sampled.
- Most evaluated layouts were portrait phone screens.

</design-context>

Use the design system above for all UI you generate.
