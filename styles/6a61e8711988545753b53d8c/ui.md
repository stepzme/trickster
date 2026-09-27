<design-context>
---
version: alpha
name: ATTO-design-analysis
description: "A bright transit super-app that combines a teal-to-blue shell, white rounded content sheets, high-saturation action tiles, map surfaces, and polished 3D transport objects. Payment cards and route maps anchor the signed-in experience; friendly rendered buses, trains, tickets, and city services make onboarding and the service hub immediately legible."
colors:
  primary: "#22B8A7"
  on-primary: "#FFFFFF"
  primary-hover: "#159B91"
  primary-soft: "#DDF7F2"
  accent-blue: "#3478F6"
  accent-violet: "#5B4EE8"
  accent-green: "#24BE69"
  ink: "#0C1630"
  ink-muted: "#687184"
  ink-subtle: "#9CA4B2"
  canvas: "#F4F7FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF2F6"
  hairline: "#DDE3EA"
  semantic-success: "#25C46A"
  semantic-danger: "#E74B55"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  transport-card: { backgroundColor: "{colors.accent-violet}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  action-tile: { backgroundColor: "{colors.accent-blue}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 16px }
  bottom-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

ATTO combines payments, transport, routes, and city services inside a cheerful card system. Teal gradients frame white content, while blue, violet, and green action blocks clearly separate payment modes.

**Key Characteristics:**
- Teal gradient shell with large white sheets.
- Rounded financial cards and square service tiles.
- Bright, semantic action colors.
- Map-first route and metro tools.
- Friendly 3D transport imagery.

## Colors

### Brand & Accent
- **ATTO Teal** ({colors.primary}): Brand shell and primary progression.
- **Blue** ({colors.accent-blue}): NFC and transit utilities.
- **Violet** ({colors.accent-violet}): Card and top-up actions.
- **Green** ({colors.accent-green}): Fare purchase and success.

### Surface
- **Canvas** ({colors.canvas}): Neutral transport workspace.
- **Surface 1** ({colors.surface-1}): Service tiles, sheets, and controls.
- **Surface 2** ({colors.surface-2}): Grouped settings and disabled regions.
- **Hairline** ({colors.hairline}): Quiet separators.

### Text
- **Ink** ({colors.ink}): Headings, balances, and actions.
- **Ink Muted** ({colors.ink-muted}): Supporting route and payment text.
- **Ink Subtle** ({colors.ink-subtle}): Disabled navigation and hints.

### Semantic
- **Success** ({colors.semantic-success}): Completed payments and enabled state.
- **Danger** ({colors.semantic-danger}): Errors and destructive account actions.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet scrim.

## Typography

### Font Family

- **SF Pro Display** — onboarding and destination headings.
- **SF Pro Text** — cards, routes, maps, and settings.
- **SF Mono** — card identifiers where needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Onboarding statement |
| `{typography.headline}` | 21px | 700 | Screen heading |
| `{typography.card-title}` | 16px | 600 | Tile and balance title |
| `{typography.body}` | 14px | 400 | Route and payment copy |
| `{typography.caption}` | 10px | 400 | Tab and map metadata |
| `{typography.button}` | 14px | 600 | Actions |

### Principles

- Use bold, compact headings with plain supporting copy.
- Keep money and card numbers visually distinct.
- Keep map labels native to the map layer.
- Pair each service icon with a short noun label.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 12px tile gaps, and 16px card padding.

### Grid & Container

The service hub uses a two- and three-column bento grid. Transport uses a full-width card carousel over a 2×2 action grid. Route tools layer pill controls over maps.

### Whitespace Philosophy

White rounded sheets create calm zones inside the energetic gradient and multicolor service system.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas or map | Base workspace |
| 1 | White rounded tile | Services and controls |
| 2 | Colored card with soft shadow | Payment action |
| 3 | Scrim plus white sheet | Modal choice |

### Decorative Depth

Use softly rendered 3D objects and light shadows. Do not add glossy effects to text or forms.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Small controls |
| `{rounded.sm}` | 12px | Map buttons |
| `{rounded.md}` | 16px | Cards and service tiles |
| `{rounded.lg}` | 22px | Sheets and onboarding panels |
| `{rounded.pill}` | full | Route controls and chips |
| `{rounded.full}` | full | Circular map controls |

### Photography & Illustration Geometry

Render transport objects as isolated three-quarter 3D forms on pale or transparent backgrounds. Maps remain full bleed and functional.

## Components

### Buttons

Primary progression uses teal or the action tile's semantic color. Map and sheet actions use white pill controls with high-contrast icons.

### Pricing Tabs

Route, stop, fare, and mode choices use paired pills or large sheet rows. Selected states rely on color and icon together.

### Cards & Containers

Transport cards expose balance and number first. Service tiles combine one large object with a short label. Action tiles use icon, title, and contextual subtitle.

### Inputs & Forms

Authentication and payment forms use white fields on neutral sheets. Keep phone, card, PIN, and amount inputs grouped and explicit.

### Status & Build Page

Show card state, balance, auto-renewal, transaction state, and payment result close to the initiating control.

### Navigation

The hub uses menu and support in the header. Signed-in transport uses Main, Trip history, Transport, and Menu in the bottom bar.

### Footer

Bottom navigation remains on card surfaces; map flows replace it with anchored route and station controls.

## Do's and Don'ts

### Do

- Give each payment mode a stable color.
- Keep map actions reachable above the safe area.
- Pair 3D service objects with plain labels.
- Show current balance before payment.
- Use sheets for mode selection.

### Don't

- Don't place decorative objects over map labels.
- Don't reuse action colors arbitrarily.
- Don't hide fare or card state.
- Don't shrink map controls below touch size.
- Don't mix photographic and rendered object styles in one tile.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand tile grid and map pane |
| Compact | 390–767px | Default card and bento layout |
| Small | <390px | Reduce tile columns and shorten labels |

### Touch Targets

Keep all payment tiles, map controls, tabs, menu rows, and bottom-sheet choices at least 44px.

### Collapsing Strategy

Move minor service tiles to horizontal scroll before reducing object size. Keep payment actions in two columns until labels no longer fit.

### Image Behavior

Contain rendered objects with breathing room; never crop vehicle identity. Maps crop naturally to viewport and keep user controls inset.

## Iteration Guide

1. Establish teal shell and white sheet.
2. Build transport card and action grid.
3. Add bottom navigation and payment sheets.
4. Add route and metro map modes.
5. Add rendered service imagery last.

## Known Gaps

- Tokens were inferred visually from the inspected mobile screens.
- All 59 flow names were inventoried; onboarding, hub, transport, routes, metro, and QR payment flows were image-reviewed.
- Map gestures, payment hardware behavior, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
