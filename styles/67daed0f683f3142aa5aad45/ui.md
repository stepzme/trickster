<design-context>
---
version: 1
platform: iOS
name: Yandex-Travel-design-analysis
description: "A broad travel marketplace built from white booking surfaces, high-impact destination photography, bright yellow primary actions, violet brand moments, compact filters, and rounded bottom sheets. Commerce remains utilitarian while seasonal campaigns introduce playful geometric and 3D artwork."
colors: { primary: "#FFD633", on-primary: "#161616", primary-soft: "#FFF3B6", accent: "#7352E8", ink: "#171719", ink-muted: "#73767B", ink-subtle: "#B0B3B7", canvas: "#FFFFFF", surface-1: "#F5F5F6", surface-2: "#ECEDEF", hairline: "#DFE1E3", semantic-success: "#43A94F", semantic-warning: "#F1B72A", semantic-danger: "#D84E58", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: Yandex Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: Yandex Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: Yandex Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  travel-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 11]}
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [13, 14]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Yandex Travel combines lodging, transport, events, and city discovery in a photo-led booking system with clear yellow actions.

# Non-negotiable visual invariants

- The reference consistently shows total and payment timing explicit.
- The reference consistently shows show cancellation conditions before confirmation.
- Imagery consistently uses let destination imagery support comparison.
- The reference consistently shows a broad travel marketplace built from white booking surfaces.
- The reference consistently shows high-impact destination photography.
- The reference consistently shows bright yellow primary actions.
- The reference consistently shows violet brand moments.
- The reference consistently shows compact filters.

# Color and surfaces

### Brand & Accent
Use yellow for booking decisions and violet for brand campaigns, travel categories, and playful highlights.

### Surface
Keep booking surfaces white and filters pale gray; use black overlays only for camera or immersive media.

### Text
Use near-black for price and destination, gray for conditions, and white on photography.

### Semantic
Use green for ratings and confirmed state, yellow for actions, red for favorites or cancellation warnings.

# Typography

### Font Family
Use Yandex Sans for navigation, booking, and editorial discovery.

### Hierarchy
Use 28–34 points for campaigns, 22 points for sections, 16 points for cards, 14 points body, and 10–12 points metadata.

### Principles
Keep price, date, cancellation, and payment timing more prominent than promotional copy.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

# Screen composition

### Spacing System
Use a 4 points base, 16 points gutters, 12 points gaps, and 16 points sheet padding.

### Grid & Container
Home stacks category shortcuts, campaigns, city search, and discovery; booking uses lists, filters, detail, and review sheets.

### Whitespace Philosophy
Use generous imagery in discovery and tighter grouping for booking terms and payment details.

Surface hierarchy observed in the source:

Use rounded sheets over dimmed detail pages and light elevation for filters and booking controls.

### Decorative Depth
Use destination photography, seasonal 3D objects, and bold geometric campaign backdrops.

# Navigation appearance

Keep travel categories near the top and use back or close controls for deep booking steps.

# Components

### Buttons

Use wide yellow buttons for apply, book, continue, and keep-booking actions.

### Cards & Containers

Use hotel, transport, event, excursion, payment, recommendation, and cancellation cards.

### Inputs & Forms

Group destination, dates, travelers, filters, payment, and cancellation reasons in focused sheets.

# Imagery and icons

Use destination photography, seasonal 3D objects, and bold geometric campaign backdrops.

Crop destinations to rounded cards; keep campaign objects fully visible against simple color fields.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show recommended, available, prepaid, deferred, refundable, canceled, and document state beside the booking.

# iOS adaptation

### Touch Targets

Keep categories, filters, favorites, dates, booking, and close controls at least 44 points.

### Collapsing Strategy

Preserve search, price, dates, conditions, and primary action; move editorial discovery below.

### Image Behavior

Crop destination photography consistently and contain campaign objects without covering copy.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't let campaigns obscure search.
- Don't hide refund value.
- Don't overload filter sheets with decoration.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Tokens were inferred visually from representative mobile screens.
- All 204 image screens were inventoried; 9 distributed screens were image-reviewed.
- Named flow metadata was unavailable through the gallery.

</design-context>
