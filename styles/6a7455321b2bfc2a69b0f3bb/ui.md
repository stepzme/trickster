<design-context>
---
version: 1
platform: iOS
name: Jomo-design-analysis
description: "An optimistic digital-wellbeing interface that pairs a white utility layer with immersive blue-sky photography, airy blue gradients, oversized rounded sheets, black pill actions, and a friendly app-shaped mascot. Data, blocking controls, and system permissions remain clear while the visual language feels restorative rather than punitive."
colors:
  primary: "#2F91F3"
  on-primary: "#FFFFFF"
  primary-focus: "#2478D0"
  ink: "#171719"
  ink-muted: "#67676E"
  ink-subtle: "#9B9BA3"
  ink-tertiary: "#C3C3CA"
  canvas: "#F9FAFC"
  surface-1: "#FFFFFF"
  surface-2: "#F0F2F6"
  surface-3: "#E4E8EF"
  surface-4: "#D6DDE8"
  hairline: "#E7E9EE"
  hairline-strong: "#D1D5DD"
  hairline-tertiary: "#B5BBC6"
  inverse-canvas: "#171719"
  inverse-surface-1: "#29292D"
  inverse-surface-2: "#3A3A40"
  inverse-ink: "#FFFFFF"
  brand-secure: "#8BD2FF"
  semantic-success: "#51C978"
  semantic-overlay: "#171719"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.2}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.8}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.5}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 18
  xl: 24
  xxl: 32
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
  section: 48
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [15, 22]}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 16]}
  button-inverse: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  gradient-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [15, 22]}
  progress-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20}
  rule-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 0}
  modal-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 20}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: [10, 12]}
---

# Overview

Jomo combines restorative blue-sky atmosphere with clear white utility surfaces. Rounded geometry, bold black actions, blue gradient blocking controls, and a small mascot keep restrictive tasks encouraging.

**Key Characteristics:**
- Sky photography or gradients behind the progress experience.
- Large white rounded panels over atmospheric backgrounds.
- Black pill buttons in onboarding; blue gradient actions in the product.
- Compact usage bars and recognizable app icons.
- Friendly mascot for loading and empty states.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Sky photography or gradients behind the progress experience.
- The reviewed screens show this treatment: Large white rounded panels over atmospheric backgrounds.
- The reviewed screens show this treatment: Black pill buttons in onboarding; blue gradient actions in the product.
- The reviewed screens show this treatment: Compact usage bars and recognizable app icons.
- The reviewed screens show this treatment: Friendly mascot for loading and empty states.

# Color and surfaces

### Brand & Accent
- Sky blue anchors blocking, progress, and brand identity.
- Pale cyan extends the gradient without adding a second competing accent.

### Surface
- White sheets carry controls and data.
- Light gray separates system-permission groups; sky imagery can fill the home background.

### Text
- Near-black carries headings and actions.
- Mid gray supports explanations; white text is reserved for sky or dark overlays.

### Semantic

- Green supports healthy progress and positive outcomes.
- Black provides decisive onboarding actions without implying danger.

# Typography

### Font Family

Use SF Pro Display for goals and outcomes, SF Pro Text for data, settings, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40pt | 700 | Goal value |
| display-lg | 32pt | 700 | Onboarding claim |
| display-md | 26pt | 700 | Setup question |
| headline | 22pt | 700 | Section title |
| card-title | 17pt | 600 | Rule or app name |
| body | 14pt | 400 | Explanation |
| caption | 10pt | 500 | Navigation and metrics |

### Principles

- Use bold, friendly statements during setup.
- Keep data labels compact and aligned with their bars.
- Let system permission copy remain plain and readable.

### Note on Font Substitutes

A neutral system sans is appropriate; preserve bold heading proportions and open counters.

# Screen composition

### Grid & Container

Home is one vertical data column over an atmospheric background. Rule templates use a horizontal card rail; setup sheets use a single column.

### Whitespace Philosophy

Maintain calm space around goals and mascot states. Dense app lists can tighten vertically but should not feel compressed.

# Navigation appearance

Keep four destinations fixed in a frosted white capsule. Active state is black; inactive icons remain simple outlines.

# Components

### Buttons

Onboarding uses full-width black pills. In-product blocking uses a wide blue-to-cyan pill; secondary choices remain white or pale gray.

### Cards & Containers

Progress cards are large white rounded rectangles. Template cards may use full-bleed atmospheric imagery with high-contrast overlaid text.

### Inputs & Forms

Text fields are outlined pills with sparse decoration. Complex app and website selection uses nested rounded sheets; native controls must be visually restyled to match Jomo's radius, spacing, and colors.

### Status & Build Page

Use thin blue usage bars, concise time values, and mascot-backed empty states. Loading copy stays short and reassuring.

### Navigation

Keep four destinations fixed in a frosted white capsule. Active state is black; inactive icons remain simple outlines.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Sky or pale canvas | Home background |
| 1 | White rounded card | Progress and empty states |
| 2 | Frosted navigation | Bottom bar |
| 3 | Large modal sheet | Blocking configuration |

### Decorative Depth

Use natural cloud depth, soft blur, and very light shadows. Avoid glossy artificial card effects.

# States

Use thin blue usage bars, concise time values, and mascot-backed empty states. Loading copy stays short and reassuring.

# iOS adaptation

### Touch Targets

Blocking, app selection, rules, and navigation controls remain at least 44pt high.

### Collapsing Strategy

Template rails scroll horizontally. App lists scroll vertically while the blocking action remains anchored above navigation.

### Image Behavior

Sky images use aspect-fill and preserve a calm center region. Rule art may crop boldly but must retain readable overlaid text.

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

- Keep restrictive actions emotionally positive.
- Use sky atmosphere behind progress, not behind dense settings.
- Make the blocking action persistent and obvious.
- Restyle native controls to inherit the Jomo system.
- Use the mascot only when it adds reassurance.

### Don't

- Don't turn the app into a warning-heavy utility.
- Don't place dense data directly over clouds.
- Don't use several competing gradient colors.
- Don't leave system sheets visually disconnected.
- Don't overdecorate active usage lists.

# Known gaps

- Blocking countdown and live-session motion were not represented.
- iPad layout was not available.
- Squad collaboration states were not deeply reviewed.

</design-context>
