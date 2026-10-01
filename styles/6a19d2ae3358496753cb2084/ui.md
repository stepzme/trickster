<design-context>
---
version: 1
platform: iOS
name: Ozon-Travel-design-analysis
description: "A vivid travel-booking interface with electric-blue and violet headers, large rounded white search panels, magenta promotional cards, photographic destination tiles, and compact structured order details."
colors: {primary: "#0868F7", on-primary: "#FFFFFF", primary-focus: "#0053C9", ink: "#17191D", ink-muted: "#686C73", ink-subtle: "#9A9FA7", ink-tertiary: "#C4C8CE", canvas: "#F4F6F8", surface-1: "#FFFFFF", surface-2: "#EEF2F6", surface-3: "#E3E8EE", surface-4: "#D7DDE4", hairline: "#E4E8EC", hairline-strong: "#CBD2D9", hairline-tertiary: "#B5BEC7", inverse-canvas: "#075FD8", inverse-surface-1: "#6455E8", inverse-surface-2: "#D62AB5", inverse-ink: "#FFFFFF", brand-secure: "#E72AAD", semantic-success: "#22AF67", semantic-overlay: "#10131A"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  booking-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  feature-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Ozon Travel pairs an energetic branded discovery header with calm white booking surfaces. Electric blue owns search and ticket actions; violet and magenta create campaign energy; order details return to a dense, highly legible card system.

**Key Characteristics:** gradient travel header, mode icons, white search sheet, blue full-width actions, magenta campaign banners, destination photography, and compact itinerary cards.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: gradient travel header.
- The reviewed screens show this treatment: mode icons.
- The reviewed screens show this treatment: white search sheet.
- The reviewed screens show this treatment: blue full-width actions.
- The reviewed screens show this treatment: magenta campaign banners.
- The reviewed screens show this treatment: destination photography.
- The reviewed screens show this treatment: compact itinerary cards.

# Color and surfaces

### Brand & Accent

Electric blue carries search, download, selected modes, and trust. Magenta and violet are promotional accents rather than transactional colors.

### Surface

Pale gray is the app canvas; white rounded panels hold search, forms, results, and orders; saturated gradients remain above or between these surfaces.

### Text

Near-black leads destinations, dates, and totals; gray supports labels and conditions; white is reserved for saturated headers and promotions.

### Semantic

Green confirms paid or completed orders, blue marks active booking, and pink flags campaign opportunities.

# Typography

### Font Family

Use SF Pro Display for destination and campaign emphasis and SF Pro Text for booking facts and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Campaign or state |
| headline | 20pt | 700 | Search or order section |
| card-title | 16pt | 600 | Route or property |
| body | 13pt | 400 | Booking fact |
| caption | 10pt | 400 | Conditions and metadata |

### Principles

- Lead with route, destination, date, and current booking state.
- Keep critical itinerary values aligned and compact.
- Separate promotional voice from operational detail.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic and tabular times and prices.

# Screen composition

### Grid & Container

Search is a single rounded block; destinations may form two-column media tiles; results and orders use one structured column.

### Whitespace Philosophy

Campaigns can be visually dense, while forms and confirmed itineraries need clear group separation.

# Navigation appearance

Use five compact bottom destinations, with strong selected icon and subdued inactive labels.

# Components

### Buttons

Primary search, save, and ticket actions use blue; secondary choices use pale blue or neutral surfaces.

Travel modes and fare options use compact icon tiles or chips with blue selected state.

### Cards & Containers

Search cards group route, date, and travelers; order cards align route, times, duration, carriage, seat, and ticket action.

### Inputs & Forms

Inputs are wide, pale, and lightly grouped; bottom sheets handle calendars, traveler counts, and focused selections.

### Status & Build Page

Paid state, departure timing, fare condition, promotion, and support entry remain near the related booking.

### Navigation

Use five compact bottom destinations, with strong selected icon and subdued inactive labels.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Base context |
| 1 | White rounded panel | Search and booking data |
| 2 | Sticky blue action | Primary commitment |
| 3 | Bottom sheet over scrim | Dates and travelers |

### Decorative Depth

Use glossy dimensional campaign graphics and photography; functional cards rely on surface separation rather than heavy shadow.

# States

Paid state, departure timing, fare condition, promotion, and support entry remain near the related booking.

# iOS adaptation

### Touch Targets

Mode selectors, date fields, passenger steppers, navigation, and primary actions remain at least 44pt.

### Collapsing Strategy

Preserve route, dates, travelers, price, status, and ticket action; reduce campaigns and suggestions first.

### Image Behavior

Crop destination media consistently and keep embedded promotional copy within generous safe areas.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Separate expressive discovery from calm booking surfaces.
- Keep route, dates, travelers, and next action visible.
- Style native controls to inherit this visual system.

### Don't

- Don't place essential booking text inside busy campaign artwork.
- Don't use magenta as the primary payment or search action.
- Don't flatten itinerary facts into unstructured prose.

</design-context>
