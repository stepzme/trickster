<design-context>
---
version: alpha
name: Bolt-design-analysis
description: "A map-first mobility interface built from quiet white sheets, pale-gray controls, near-black text, and restrained dark-green actions. Ride, delivery, scooter, and send services share the same direct task structure, while friendly 3D service icons and characters add recognition without competing with live maps, prices, or pickup decisions."
colors:
  primary: "#2F8B57"
  on-primary: "#FFFFFF"
  primary-hover: "#267548"
  primary-soft: "#E8F5EE"
  accent-lime: "#A8DDBA"
  accent-blue: "#2864DC"
  ink: "#1D1F20"
  ink-muted: "#6D7275"
  ink-subtle: "#A3A8AA"
  canvas: "#F3F4F5"
  surface-1: "#FFFFFF"
  surface-2: "#ECEEEF"
  hairline: "#E0E3E4"
  semantic-success: "#2F8B57"
  semantic-danger: "#D83B45"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 15px 18px }
  location-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  service-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 12px }
  ride-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 16px }
  map-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Bolt uses live maps as the operational layer and white sheets as the decision layer. Dark green marks the main commitment, while neutral surfaces keep pickup, destination, price, and service choice dominant.

**Key Characteristics:**
- Map-first task context.
- White rounded decision sheets.
- Restrained dark-green actions.
- Large destination and pickup fields.
- Friendly 3D service imagery.

## Colors

### Brand & Accent
- **Bolt Green** ({colors.primary}): Booking, continuation, and active state.
- **Soft Lime** ({colors.accent-lime}): Positive and promotional support.
- **Blue** ({colors.accent-blue}): Map and informational emphasis.

### Surface
- **Canvas** ({colors.canvas}): Neutral non-map background.
- **Surface 1** ({colors.surface-1}): Sheets, cards, and navigation.
- **Surface 2** ({colors.surface-2}): Location fields and secondary controls.
- **Hairline** ({colors.hairline}): List and option separation.

### Text
- **Ink** ({colors.ink}): Destination, fare, and headings.
- **Ink Muted** ({colors.ink-muted}): ETA, capacity, and support text.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Confirmed booking and safe completion.
- **Danger** ({colors.semantic-danger}): Cancellation and blocking errors.
- **Overlay** ({colors.semantic-overlay}): Modal focus over maps.

## Typography

### Font Family

- **SF Pro Display** — onboarding and major task headings.
- **SF Pro Text** — locations, ride options, prices, and controls.
- **SF Mono** — verification codes where needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Onboarding statement |
| `{typography.headline}` | 22px | 700 | Task or sheet heading |
| `{typography.card-title}` | 16px | 600 | Service and ride option |
| `{typography.body}` | 14px | 400 | ETA and conditions |
| `{typography.caption}` | 10px | 400 | Metadata |
| `{typography.button}` | 16px | 600 | Booking action |

### Principles

- Lead with destination, pickup, ETA, and price.
- Keep vehicle and capacity labels compact.
- Use bold weight for the chosen option and next action.
- Keep decorative lettering inside authored assets.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px sheet gutters, 12px option gaps, and 16px card padding.

### Grid & Container

Home pairs a destination field with service cards. Booking overlays pickup, route, ride selection, and confirmation sheets on a persistent map.

### Whitespace Philosophy

Keep sheets compact enough to preserve map context, but give each decision row enough height for quick one-handed scanning.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Live map or pale canvas | Task context |
| 1 | White service card | Home choices |
| 2 | Rounded map sheet with shadow | Booking decisions |
| 3 | Modal over dimmed map | Confirmation or warning |

### Decorative Depth

Use elevation to separate controls from the map. Reserve modeled volume for service icons and onboarding characters.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Map chips and tags |
| `{rounded.sm}` | 12px | Fields and icon wells |
| `{rounded.md}` | 16px | Ride rows and actions |
| `{rounded.lg}` | 20px | Service cards |
| `{rounded.pill}` | full | Filters and map controls |
| `{rounded.full}` | full | Vehicle marker and avatar |

### Photography & Illustration Geometry

Service art uses isolated 3D vehicles, parcels, scooters, or characters. Maps, route lines, and real location data remain functional and unobstructed.

## Components

### Buttons

Green full-width buttons commit booking or continuation. Secondary controls use gray surfaces; cancellation stays visually separated and red only when destructive.

### Pricing Tabs

Ride classes appear as selectable rows with vehicle, ETA, capacity, and price. Service modes use image-led cards.

### Cards & Containers

Home cards identify Ride, Send, and Scooters. Booking sheets group route summary, ride options, payment, and confirmation without obscuring the whole map.

### Inputs & Forms

Pickup and destination use large searchable fields, recent locations, and map selection. Parcel details and contact data follow a short single-column form.

### Status & Build Page

Show searching, driver assigned, ETA, pickup, in progress, delivered, completed, and cancelled with explicit labels and live context.

### Navigation

Home prioritizes services and destination entry. A side menu contains account, trips, payments, support, safety, and settings.

### Footer

Booking actions sit inside the bottom sheet above the safe area; menu and detail screens use a conventional bottom-safe action region.

## Do's and Don'ts

### Do

- Preserve map context through each booking step.
- Keep pickup and destination unambiguous.
- Show ETA, capacity, and price together.
- Use green for the single next action.
- Use 3D art to distinguish service modes.

### Don't

- Don't cover the route with oversized decoration.
- Don't hide price changes or cancellation terms.
- Don't mix account navigation into the booking sheet.
- Don't use map color as the only state cue.
- Don't add multiple competing primary buttons.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Use side-by-side map and decision panel |
| Compact | 390–767px | Default bottom-sheet composition |
| Small | <390px | Shorten service labels and collapse metadata |

### Touch Targets

Keep fields, ride rows, map controls, menu items, and primary actions at least 44px.

### Collapsing Strategy

Reduce secondary ride metadata before shrinking price or ETA. Preserve map, route, selected option, and booking action.

### Image Behavior

Contain service objects inside cards. Let the map crop fluidly around the active route while keeping pickup, destination, and vehicle markers visible.

## Iteration Guide

1. Establish map, location fields, and service home.
2. Build pickup and destination search.
3. Add ride selection, price, and confirmation.
4. Add Send, Scooters, and trip state.
5. Add illustration and campaigns last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 75 available flow names were inventoried; onboarding, home, ride booking, Bolt Send, scooters, and side navigation were image-reviewed.
- Live map motion, driver tracking cadence, and accessibility settings were not assessed.
- Some selected flow entries were video-only; static screens were used as visual evidence.

</design-context>

Use the design system above for all UI you generate.
