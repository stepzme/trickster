<design-context>
---
version: 1
platform: iOS
name: Kompanion-design-analysis
description: "A pale blue-white retail banking interface centered on saturated royal-blue cards and actions, rounded white service tiles, colorful circular story badges, soft promotional banners, and a prominent QR tab. Financial screens are orderly and spacious, with blue line icons and green confirmation states."
colors:
  primary: "#2167DF"
  on-primary: "#FFFFFF"
  primary-focus: "#174FB8"
  ink: "#202126"
  ink-muted: "#686B73"
  ink-subtle: "#9DA1AA"
  ink-tertiary: "#C0C4CC"
  canvas: "#F7F8FF"
  surface-1: "#FFFFFF"
  surface-2: "#EFF2FA"
  surface-3: "#E4E9F4"
  surface-4: "#D7DFEE"
  hairline: "#E4E7EE"
  hairline-strong: "#CDD2DC"
  hairline-tertiary: "#B3BAC7"
  inverse-canvas: "#202126"
  inverse-surface-1: "#34363C"
  inverse-surface-2: "#484B53"
  inverse-ink: "#FFFFFF"
  brand-secure: "#8B55F4"
  semantic-success: "#49B95C"
  semantic-overlay: "#202126"
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
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  bank-card: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12}
  transaction-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Kompanion is a soft, light banking system anchored by royal-blue cards, white service tiles, and a central QR action.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A pale blue-white retail banking interface centered on saturated royal-blue cards and actions, rounded white service tiles, colorful circular story badges.
- The dominant canvas token is #F7F8FF and the primary accent token is #2167DF.
- The recorded display style is 38 points while the body style is 13 points.
- Navigation keeps five destinations fixed and emphasize the central QR action as a blue circle.
- The reviewed screens use this hierarchy: Financial screens are orderly and spacious, with blue line icons and green confirmation states.

# Color and surfaces

### Brand & Accent
- Royal blue identifies cards, primary actions, links, and the QR control.
- Violet and pastel colors stay inside stories, cashback, or promotions.

### Surface
- Pale blue-white is the page canvas; white cards group actions and details.

### Text
- Near-black carries amounts and headings; gray supports account and transaction metadata.

### Semantic
- Green confirms successful payments. Red remains limited to warnings and notification dots.

# Typography

### Font Family

Use SF Pro Display for amounts and outcomes, SF Pro Text for banking labels and forms.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Payment outcome |
| display-md | 25pt | 700 | Amount or authorization title |
| headline | 21pt | 700 | Page heading |
| card-title | 16pt | 600 | Product or service title |
| body | 13pt | 400 | Banking detail |
| caption | 9pt | 400 | Navigation |

### Principles

- Lead with amount and account identity.
- Keep frequent action labels short.
- Use color icons only inside bounded service tiles.

### Note on Font Substitutes

Use a neutral system sans with clear Cyrillic and numeric metrics.

# Screen composition

### Grid & Container

Cards use a horizontal carousel; frequent actions use four columns; details and transfers use one column.

### Whitespace Philosophy

Keep the dashboard compact but give forms, success states, and account detail more vertical space.

# Navigation appearance

Keep five destinations fixed and emphasize the central QR action as a blue circle. Active state uses blue.

# Components

### Buttons

Primary actions are wide royal-blue rectangles. Secondary actions are white with blue labels.

Loan and deposit terms use simple segmented or stacked options with one blue selection.

### Cards & Containers

Bank cards are saturated rounded rectangles; service tiles are white and compact; detail lists use full-width white groups.

### Inputs & Forms

Use outlined or white filled fields with blue focus. Native controls must inherit Kompanion spacing, radius, and action color.

### Status & Build Page

Success centers a green check, timestamp, amount, and recipient, followed by repeat, save, and receipt actions.

### Navigation

Keep five destinations fixed and emphasize the central QR action as a blue circle. Active state uses blue.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Dashboard |
| 1 | White tile | Services and detail |
| 2 | Saturated card | Account identity |
| 3 | Focused sheet | Selectors and confirmation |

### Decorative Depth

Use mild card shadows and photographic card backgrounds; avoid heavy elevation.

# States

Success centers a green check, timestamp, amount, and recipient, followed by repeat, save, and receipt actions.

# iOS adaptation

### Touch Targets

Tiles, QR, cards, and navigation retain at least 44pt hit areas.

### Collapsing Strategy

Cards and stories scroll horizontally; forms grow vertically; primary actions stay near the safe area.

### Image Behavior

Use aspect-fill for card and promotional imagery while protecting balance and card-number regions.

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

- Keep balances and cards easy to scan.
- Use blue consistently for commitment.
- Keep frequent actions in predictable tiles.
- Provide receipts and repeat paths after transfer.
- Restyle native controls.

### Don't

- Don't overfill the pale canvas with color.
- Don't use story colors for transactions.
- Don't hide account identity in generic lists.
- Don't add decorative illustration.
- Don't leave default iOS form styling.

# Known gaps

- Identification camera states were not reviewed.
- iPad layouts were not represented.
- Loan and deposit detail variants were not visually sampled.

</design-context>
