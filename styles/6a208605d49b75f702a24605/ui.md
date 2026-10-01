<design-context>
---
version: 1
platform: iOS
name: OneTwoTrip-design-analysis
description: "A travel-commerce interface combining warm destination photography, white booking sheets, vivid violet actions, yellow brand labels, dense comparison cards, and thumb-level sticky filters."
colors: {primary: "#6948F5", on-primary: "#FFFFFF", primary-focus: "#5234D1", ink: "#17181C", ink-muted: "#666970", ink-subtle: "#989BA2", ink-tertiary: "#C1C4C9", canvas: "#FFFFFF", surface-1: "#F5F5F7", surface-2: "#ECECF0", surface-3: "#E0E0E5", surface-4: "#D3D3D9", hairline: "#E3E3E7", hairline-strong: "#CACAD0", hairline-tertiary: "#B1B1B8", inverse-canvas: "#1B1C20", inverse-surface-1: "#2C2D32", inverse-surface-2: "#3D3E45", inverse-ink: "#FFFFFF", brand-secure: "#FFDC18", semantic-success: "#33B86D", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6, sm: 10, md: 14, lg: 20, xl: 26, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

OneTwoTrip balances warm travel inspiration with precise white booking surfaces, purple continuation controls, yellow brand moments, and highly comparable results.

**Key Characteristics:** warm destination hero, white rounded sheets, purple CTAs, yellow brand chips, story rails, dense itinerary cards, and sticky filters.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: warm destination hero.
- The reviewed screens show this treatment: white rounded sheets.
- The reviewed screens show this treatment: purple CTAs.
- The reviewed screens show this treatment: yellow brand chips.
- The reviewed screens show this treatment: story rails.
- The reviewed screens show this treatment: dense itinerary cards.
- The reviewed screens show this treatment: sticky filters.

# Color and surfaces

### Brand & Accent

Violet drives selection, filters, and booking continuation. Yellow belongs to the OneTwoTrip mark, loyalty, and small high-value highlights.

### Surface

White carries booking and results; pale gray groups fields and cards; warm photography is limited to inspiration and destination context.

### Text

Near-black leads route, hotel, price, and date; gray supports baggage, board, duration, and policy.

### Semantic

Green indicates favorable price or completed status; yellow shows loyalty value; red is reserved for exceptions.

# Typography

### Font Family

Use SF Pro Display for travel product and search headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 21pt | 700 | Section title |
| card-title | 16pt | 600 | Primary item |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Metadata |

### Principles

- Lead with route, date, total price, rating, or booking state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular prices and clear compact itinerary labels.

# Screen composition

### Grid & Container

Home uses product tiles and story rails; search uses one column; hotel results use image-led stacked cards.

### Whitespace Philosophy

Search decisions need breathing room, while comparison results intentionally compress repeated facts.

# Navigation appearance

Use five bottom destinations with violet for the active item and quiet gray for the others.

# Components

### Buttons

Primary continue and book actions use saturated violet; secondary actions use white or translucent gray.

Product switchers, trip type, and filters use dark or pale segments with a clear violet selection.

### Cards & Containers

Flight cards align airline, times, duration, baggage, and price; hotel cards combine image, score, board, distance, and total.

### Inputs & Forms

Dates, guests, and routes use large light fields and focused sheets that inherit violet selection styling.

### Status & Build Page

Keep booking, baggage, cancellation, cashback, and payment state adjacent to the affected itinerary or room.

### Navigation

Use five bottom destinations with violet for the active item and quiet gray for the others.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use destination photography, white sheets, and anchored filters rather than decorative shadow.

# States

Keep booking, baggage, cancellation, cashback, and payment state adjacent to the affected itinerary or room.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Retain route, date, price, and booking action; stack policies and reduce story content first.

### Image Behavior

Preserve destination focal points and hotel ratios; use gradients only when text overlays photography.

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

- Preserve the transition from inspiring photography to precise booking comparison.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't place decorative photography behind dense fares or form fields.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- iPad and landscape layouts were not represented.

</design-context>
