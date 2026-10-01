<design-context>
---
version: 1
platform: iOS
name: Bolt-design-analysis
description: "A map-first mobility interface built from quiet white sheets, pale-gray controls, near-black text, and restrained dark-green actions. Ride, delivery, scooter, and send services share the same direct task structure, while friendly 3D service icons and characters add recognition without competing with live maps, prices, or pickup decisions."
colors:
  primary: "#2F8B57"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [15, 18]}
  location-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  service-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 12 }
  ride-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 16]}
  map-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Bolt uses live maps as the operational layer and white sheets as the decision layer. Dark green marks the main commitment, while neutral surfaces keep pickup, destination, price, and service choice dominant.

**Key Characteristics:**
- Map-first task context.
- White rounded decision sheets.
- Restrained dark-green actions.
- Large destination and pickup fields.
- Friendly 3D service imagery.

# Non-negotiable visual invariants

- The reference consistently shows map-first task context.
- The reference consistently shows white rounded decision sheets.
- The reference consistently shows restrained dark-green actions.
- The reference consistently shows large destination and pickup fields.
- Imagery consistently uses friendly 3D service imagery.

# Color and surfaces

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

# Typography

### Font Family

- **SF Pro Display** — onboarding and major task headings.
- **SF Pro Text** — locations, ride options, prices, and controls.
- **SF Mono** — verification codes where needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36 points | 700 | Onboarding statement |
| `{typography.headline}` | 22 points | 700 | Task or sheet heading |
| `{typography.card-title}` | 16 points | 600 | Service and ride option |
| `{typography.body}` | 14 points | 400 | ETA and conditions |
| `{typography.caption}` | 10 points | 400 | Metadata |
| `{typography.button}` | 16 points | 600 | Booking action |

### Principles

- Lead with destination, pickup, ETA, and price.
- Keep vehicle and capacity labels compact.
- Use bold weight for the chosen option and next action.
- Keep decorative lettering inside authored assets.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 16 points sheet gutters, 12 points option gaps, and 16 points card padding.

### Grid & Container

Home pairs a destination field with service cards. Booking overlays pickup, route, ride selection, and confirmation sheets on a persistent map.

### Whitespace Philosophy

Keep sheets compact enough to preserve map context, but give each decision row enough height for quick one-handed scanning.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Live map or pale canvas | Task context |
| 1 | White service card | Home choices |
| 2 | Rounded map sheet with shadow | Booking decisions |
| 3 | Modal over dimmed map | Confirmation or warning |

### Decorative Depth

Use elevation to separate controls from the map. Reserve modeled volume for service icons and onboarding characters.

# Navigation appearance

Home prioritizes services and destination entry. A side menu contains account, trips, payments, support, safety, and settings.

# Components

### Buttons

Green full-width buttons commit booking or continuation. Secondary controls use gray surfaces; cancellation stays visually separated and red only when destructive.

### Cards & Containers

Home cards identify Ride, Send, and Scooters. Booking sheets group route summary, ride options, payment, and confirmation without obscuring the whole map.

### Inputs & Forms

Pickup and destination use large searchable fields, recent locations, and map selection. Parcel details and contact data follow a short single-column form.

# Imagery and icons

Use elevation to separate controls from the map. Reserve modeled volume for service icons and onboarding characters.

Service art uses isolated 3D vehicles, parcels, scooters, or characters. Maps, route lines, and real location data remain functional and unobstructed.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show searching, driver assigned, ETA, pickup, in progress, delivered, completed, and cancelled with explicit labels and live context.

# iOS adaptation

### Touch Targets

Keep fields, ride rows, map controls, menu items, and primary actions at least 44 points.

### Collapsing Strategy

Reduce secondary ride metadata before shrinking price or ETA. Preserve map, route, selected option, and booking action.

### Image Behavior

Contain service objects inside cards. Let the map crop fluidly around the active route while keeping pickup, destination, and vehicle markers visible.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't cover the route with oversized decoration.
- Don't hide price changes or cancellation terms.
- Don't mix account navigation into the booking sheet.
- Don't use map color as the only state cue.
- Don't add multiple competing primary buttons.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
