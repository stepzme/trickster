<design-context>
---
version: 1
platform: iOS
name: kolesa.kz-design-analysis
description: "A utilitarian vehicle marketplace on white and very pale blue, structured by bright blue actions, yellow financing badges, green call buttons, dense listing cards, rectangular vehicle photography, and persistent seller contact controls. Information density is high but predictable, with price and core specifications always near the image."
colors:
  primary: "#2486E3"
  on-primary: "#FFFFFF"
  primary-focus: "#176DBE"
  ink: "#202124"
  ink-muted: "#676A70"
  ink-subtle: "#9CA0A6"
  ink-tertiary: "#C0C3C8"
  canvas: "#FFFFFF"
  surface-1: "#F6F9FC"
  surface-2: "#EDF4FA"
  surface-3: "#E1ECF5"
  surface-4: "#D3E2EE"
  hairline: "#E4E8EC"
  hairline-strong: "#CDD3D9"
  hairline-tertiary: "#B2BAC2"
  inverse-canvas: "#202124"
  inverse-surface-1: "#33353A"
  inverse-surface-2: "#474A50"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FFD83D"
  semantic-success: "#19B73B"
  semantic-overlay: "#202124"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.9}
  display-lg: {fontFamily: SF Pro Display, fontSize: 29, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 3, sm: 7, md: 11, lg: 15, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [11, 16]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 18]}
  listing-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  category-tile: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10}
  finance-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [3, 6]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

kolesa.kz is an information-dense vehicle marketplace with blue utility controls, yellow finance facts, green calls, and consistent photo-led listings.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A utilitarian vehicle marketplace on white and very pale blue, structured by bright blue actions, yellow financing badges, green call buttons, dense listing cards.
- The dominant canvas token is #FFFFFF and the primary accent token is #2486E3.
- The recorded display style is 36 points while the body style is 13 points.
- Navigation keeps five bottom destinations fixed with a prominent blue Post action.
- The reviewed screens use this hierarchy: Information density is high but predictable, with price and core specifications always near the image.

# Color and surfaces

### Brand & Accent
- Blue marks navigation, filters, messages, and marketplace actions.
- Yellow is reserved for down-payment and installment badges; green means call.

### Surface
- White dominates; pale blue groups categories, results, and promoted rows.

### Text
- Dark gray carries price and model; mid gray supports location, date, and specifications.

### Semantic
- Green indicates direct phone contact. Red is limited to alerts or promoted markers.

# Typography

### Font Family

Use SF Pro Display for prices and page headings, SF Pro Text for dense listing data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-md | 24pt | 700 | Listing price |
| headline | 20pt | 700 | Page heading |
| card-title | 15pt | 500 | Vehicle model |
| subhead | 14pt | 600 | Detail section |
| body | 13pt | 400 | Specifications |
| caption | 9pt | 400 | Views and date |

### Principles

- Put model and price before description.
- Keep key specifications in a compact line block.
- Use badges only for financing or status.

### Note on Font Substitutes

Use a neutral system sans with clear numbers and Cyrillic.

# Screen composition

### Grid & Container

Home categories use a four-column grid; listings use one vertical column with image and text side by side.

### Whitespace Philosophy

Favor comparison density in results; give detail modules and contact actions more breathing room.

# Navigation appearance

Keep five bottom destinations fixed with a prominent blue Post action. Filters and sorting remain in the result header.

# Components

### Buttons

Blue buttons message or continue; green buttons call. Secondary actions are white with blue labels.

### Cards & Containers

Listing cards combine photo, model, price, finance, specifications, location, and favorite action in one predictable block.

### Inputs & Forms

Filters use staged fields and blue focus. Native inputs must inherit compact spacing, pale surfaces, and blue actions.

### Status & Build Page

Use view, favorite, and date metadata quietly. Price reductions and search subscriptions receive concise banners.

### Navigation

Keep five bottom destinations fixed with a prominent blue Post action. Filters and sorting remain in the result header.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Navigation and detail |
| 1 | Pale blue background | Results |
| 2 | White rounded card | Listing |
| 3 | Fixed contact bar | Seller actions |

### Decorative Depth

Use surface contrast and photography; avoid decorative shadows.

# States

Use view, favorite, and date metadata quietly. Price reductions and search subscriptions receive concise banners.

# iOS adaptation

### Touch Targets

Favorites, filters, seller contacts, and navigation retain at least 44pt hit areas.

### Collapsing Strategy

Category promos scroll horizontally; listings stay vertical; contact actions remain anchored.

### Image Behavior

Use aspect-fill only when the complete vehicle remains visible; prefer stable landscape ratios.

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

- Keep comparison facts near the photo.
- Preserve consistent listing structure.
- Separate message and call by color.
- Keep contact actions persistent.
- Restyle native filter controls.

### Don't

- Don't hide price behind descriptive copy.
- Don't use yellow as a general accent.
- Don't crop vehicles too tightly.
- Don't add decorative illustration.
- Don't leave default iOS form styling.

# Known gaps

- Ad-publishing screens were cataloged but not visually sampled here.
- iPad layouts were not represented.
- Map-based browsing was not reviewed.

</design-context>
