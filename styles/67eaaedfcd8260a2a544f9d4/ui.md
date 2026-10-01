<design-context>
---
version: 1
platform: iOS
name: Sutochno-design-analysis
description: "A bright accommodation marketplace built from white sheets, near-black booking controls, a raspberry-pink brand accent, softly rounded photo cards, and dense travel metadata. Property photography is the visual protagonist while totals, ratings, dates, and conditions remain explicit."

colors:
  primary: "#EA315F"
  on-primary: "#FFFFFF"
  action: "#171717"
  on-action: "#FFFFFF"
  ink: "#18181A"
  ink-muted: "#747478"
  ink-subtle: "#A8A8AC"
  canvas: "#F5F6F8"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F3"
  hairline: "#E1E2E5"
  semantic-success: "#2CB66C"
  semantic-warning: "#EFAE2E"
  semantic-danger: "#E64E57"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.action}", textColor: "{colors.on-action}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  property-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 0 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  summary-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60 }
---

# Overview

Sutochno.ru is a photo-led travel marketplace with practical checkout. Pink identifies the service, while black actions and white information sheets keep booking decisions clear.

# Non-negotiable visual invariants

- The reference consistently shows let real accommodation photos lead.
- The reference consistently shows totals and conditions explicit.
- The reference consistently shows black for commitment.
- The reference consistently shows preserve pink for brand and selection.
- The reference consistently shows a bright accommodation marketplace built from white sheets.
- The reference consistently shows near-black booking controls.
- The reference consistently shows a raspberry-pink brand accent.
- Imagery consistently uses softly rounded photo cards.

# Color and surfaces

### Brand & Accent

Raspberry pink marks brand, active navigation, ratings, bonuses, and select toggles. Black is reserved for booking commitment.

### Surface

White cards and sheets sit on cool gray. Search headers may use a black band for high contrast.

### Text

Near-black carries property names, totals, and headings; gray carries location, attributes, and conditions.

### Semantic

Green confirms ratings or recommendations, red marks errors, and pink carries loyalty. Never use brand pink alone for destructive state.

# Typography

### Font Family

Use a neutral system sans with strong numerals and readable Cyrillic.

### Hierarchy

Use 21–27 points page headings, 15–17 points property titles, 14 points body, and 10–12 points travel metadata.

### Principles

Keep nightly and total prices distinct, pair ratings with review counts, and state dates and guests consistently.

### Note on Font Substitutes

SF Pro or Inter are suitable. Use tabular numerals for prices and dates.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–12 points card gaps, and 20–24 points between search, results, amenities, and payment groups.

### Grid & Container

Home uses horizontal destination and review rails. Results stack image-led cards; property and checkout screens are single-column.

### Whitespace Philosophy

Allow photography to breathe while keeping booking facts dense and aligned beneath or beside each image.

Surface hierarchy observed in the source:

White cards lift gently from gray. Sticky black booking bars and overlapping summary sheets create functional depth.

### Decorative Depth

Use accommodation and destination photography. Avoid gradients, generic travel illustrations, or ornamental shadows.

# Navigation appearance

Five bottom tabs persist across search, favorites, bookings, messages, and profile. Detail tasks use a compact top bar.

# Components

### Buttons

Primary booking actions are black with white text; pink appears in smaller brand actions. Native controls must inherit package color and geometry.

### Cards & Containers

Result cards combine photo, badges, rating, location, title, occupancy, and price. Checkout sheets group terms and totals.

### Inputs & Forms

Search uses rounded destination fields and explicit date and guest pickers. Checkout fields remain linear and labeled.

# Imagery and icons

Use accommodation and destination photography. Avoid gradients, generic travel illustrations, or ornamental shadows.

Use `cover` crops that show the room or destination clearly. Galleries are large and edge-to-edge; map pins remain functional.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Pending, active, past, canceled, cashback, promo, and payment states appear beside the relevant reservation or amount.

# iOS adaptation

### Touch Targets

Dates, guests, filters, cards, favorites, navigation, and booking actions require at least 44 points targets.

### Collapsing Strategy

Allow destination and review rails to scroll horizontally. Keep total and booking action pinned through long detail screens.

### Image Behavior

Use `cover` for property and destination photography. Preserve gallery aspect ratios and avoid hiding key room features.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not obscure price with badges.
- Do not use decorative travel art instead of photos.
- Do not hide cancellation terms.
- Do not expose default platform-blue controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

The reviewed scenarios cover search, dates, guests, filters, map, property detail, reviews, booking, checkout, messages, reservations, favorites, and profile. Tablet layouts and every payment error were not visible.

</design-context>
