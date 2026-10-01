<design-context>
---
version: 1
platform: iOS
name: Kino.kz-design-analysis
description: "A bright event-ticketing interface built on white, neon green identity marks, violet navigation and selection states, poster-led content rails, thin outlined filters, and compact ticket details. The system balances colorful entertainment artwork with calm utility screens for seats, orders, and saved tickets."
colors:
  primary: "#9145F5"
  on-primary: "#FFFFFF"
  primary-focus: "#7734D4"
  ink: "#202024"
  ink-muted: "#66666D"
  ink-subtle: "#9B9BA3"
  ink-tertiary: "#BFBFC6"
  canvas: "#FFFFFF"
  surface-1: "#FAF9FC"
  surface-2: "#F3F0F7"
  surface-3: "#E8E3EE"
  surface-4: "#DCD5E5"
  hairline: "#E7E4EA"
  hairline-strong: "#D1CBD8"
  hairline-tertiary: "#B6AEC0"
  inverse-canvas: "#1D1D22"
  inverse-surface-1: "#303037"
  inverse-surface-2: "#43434B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#00ED39"
  semantic-success: "#12B77A"
  semantic-overlay: "#1D1D22"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  event-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0}
  filter-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [6, 10]}
  seat-cell: {backgroundColor: "#DCC4FA", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12}
  ticket-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  status-badge: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Kino.kz is a clean event marketplace where colorful posters lead discovery and violet controls guide selection. Green identity marks and price badges add a distinct local-ticketing character.

**Key Characteristics:**
- White canvas with poster-rich horizontal rails.
- Neon green identity and ticket-price badges.
- Violet navigation, filters, seat selection, and CTAs.
- Four-item bottom navigation.
- Calm ticket and checkout utility screens.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White canvas with poster-rich horizontal rails.
- The reviewed screens show this treatment: Neon green identity and ticket-price badges.
- The reviewed screens show this treatment: Violet navigation, filters, seat selection, and CTAs.
- The reviewed screens show this treatment: Four-item bottom navigation.
- The reviewed screens show this treatment: Calm ticket and checkout utility screens.

# Color and surfaces

### Brand & Accent
- Violet marks active navigation, filters, selected seats, and forward actions.
- Neon green identifies the brand and price or loyalty benefits.

### Surface
- White dominates; pale lavender supports filters, alerts, and seat-map regions.
- Dark mode shifts surfaces without changing violet selection semantics.

### Text
- Near-black carries event titles and transactional facts.
- Gray supports venue, date, format, and secondary descriptions.

### Semantic
- Green price and age badges sit on poster imagery.
- Coral-red may appear only for mature age restrictions or warnings.

# Typography

### Font Family

Use SF Pro Display for event and page headings, SF Pro Text for listings, filters, and ticket facts.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Event hero statement |
| display-md | 25pt | 700 | Checkout or ticket title |
| headline | 21pt | 700 | Category heading |
| card-title | 16pt | 600 | Event name |
| body | 13pt | 400 | Venue and schedule |
| caption | 10pt | 400 | Price and navigation |

### Principles

- Let posters carry expressive typography.
- Keep venue and date metadata compact beneath the title.
- Use strong headings to separate varied event categories.

### Note on Font Substitutes

Use a neutral system sans with clear Cyrillic and numeric metrics.

# Screen composition

### Grid & Container

Home uses horizontal poster rails; filtered catalogs use a two-column poster grid. Ticket detail uses one stacked column.

### Whitespace Philosophy

Discovery may be dense; seat choice and ticket details need more separation around decisions and totals.

# Navigation appearance

Keep Events, Places, My Tickets, and Profile fixed. Active state is violet; city and utility actions stay in the top bar.

# Components

### Buttons

Primary actions are wide violet rectangles. Secondary actions use violet outlines on white or pale surfaces.

Session and seat choices use date strips and segmented time-versus-cinema controls, with violet fill for the active option.

### Cards & Containers

Event cards are poster-first with title and venue below. Service cards are compact white outlined rows with violet icons.

### Inputs & Forms

Use pills and simple fields with violet focus. Native date, seat, and payment controls must inherit the product's radius, spacing, and color system.

### Status & Build Page

Use green price and loyalty badges, violet selected seats, and explicit totals. Tickets show complete event facts before the order code.

### Navigation

Keep Events, Places, My Tickets, and Profile fixed. Active state is violet; city and utility actions stay in the top bar.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Event discovery |
| 1 | Pale lavender fill | Filters and seat map |
| 2 | White outlined card | Services and tickets |
| 3 | Fixed action area | Seat selection and checkout |

### Decorative Depth

Use poster imagery and mild surface contrast rather than shadows.

# States

Use green price and loyalty badges, violet selected seats, and explicit totals. Tickets show complete event facts before the order code.

# iOS adaptation

### Touch Targets

Filters, seats, navigation, and session times retain at least 44pt hit areas.

### Collapsing Strategy

Poster rails and filter rows scroll horizontally. Seat maps pan or zoom while the total and next action remain anchored.

### Image Behavior

Use aspect-fill for posters and wide hero media. Preserve embedded titles, faces, and age marks within safe crops.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Preserve consistent poster proportions.
- Keep date and category filters near listings.
- Use violet for selection and forward motion.
- Make seat price and count visible before continuing.
- Restyle native controls to match the UI.

### Don't

- Don't mix green and violet roles.
- Don't hide venue and schedule metadata.
- Don't add card chrome around every poster.
- Don't use illustration instead of event artwork.
- Don't leave default iOS controls unchanged.

# Known gaps

- Seat-map gestures and zoom timing were not measured.
- Payment confirmation screens were not represented in the reviewed flow.
- iPad and landscape layouts were not shown.

</design-context>
