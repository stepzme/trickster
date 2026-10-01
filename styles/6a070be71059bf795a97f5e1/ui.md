<design-context>
---
version: 1
platform: iOS
name: Gosuslugi-design-analysis
description: "A civic-services interface that pairs a deep cobalt gradient home with crisp white service panels, saturated blue actions, colorful document cards, and a compact assistant layer. Dense public-service content becomes approachable through strong grouping, familiar icons, and one clear action per step."
colors: {primary: "#0D5BD7", on-primary: "#FFFFFF", primary-focus: "#0848AE", ink: "#17191D", ink-muted: "#656A72", ink-subtle: "#969BA3", ink-tertiary: "#C4C8CD", canvas: "#FFFFFF", surface-1: "#F6F8FB", surface-2: "#EDF1F7", surface-3: "#E0E6F0", surface-4: "#CDD6E5", hairline: "#E3E7ED", hairline-strong: "#C6CDD7", hairline-tertiary: "#AEB8C5", inverse-canvas: "#05276B", inverse-surface-1: "#0B3E91", inverse-surface-2: "#1558BC", inverse-ink: "#FFFFFF", brand-secure: "#0D5BD7", semantic-success: "#12A36B", semantic-overlay: "#101A2E"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  service-panel: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  document-card: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Gosuslugi combines a confident cobalt civic identity with white, highly structured service surfaces. Colorful documents and service icons make a large administrative catalog feel personal and navigable.

**Key Characteristics:** deep blue gradient home, white rounded panels, saturated blue CTAs, multicolor document cards, compact assistant, dense structured forms, five-item navigation, and clear application status.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: deep blue gradient home.
- The reviewed screens show this treatment: white rounded panels.
- The reviewed screens show this treatment: saturated blue CTAs.
- The reviewed screens show this treatment: multicolor document cards.
- The reviewed screens show this treatment: compact assistant.
- The reviewed screens show this treatment: dense structured forms.
- The reviewed screens show this treatment: five-item navigation.
- The reviewed screens show this treatment: clear application status.

# Color and surfaces

### Brand & Accent

Cobalt owns the home atmosphere, primary actions, active navigation, links, and focus. Red, green, and orange remain localized to document identity or status.

### Surface

White is the working surface for forms, documents, services, and messages. Pale blue-gray groups secondary information and loading states.

### Text

Near-black leads services, documents, application steps, and personal data. Gray supports explanations, dates, requirements, and inactive controls.

### Semantic

Blue means action or official navigation, green means successful or available, yellow highlights caution, and red identifies critical or document-specific information.

# Typography

### Font Family

Use SF Pro Display for service and application headings and SF Pro Text for forms, documents, status, and assistant content.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Major service state |
| headline | 21pt | 700 | Page or application step |
| card-title | 16pt | 600 | Document or service |
| body | 13pt | 400 | Form and explanation |
| caption | 10pt | 400 | Status and metadata |

### Principles

- Lead with the service, current step, or application status.
- Keep legal and administrative detail readable, not visually dominant.
- Use consistent labels and stable field order across long forms.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic support and tabular numerals.

# Screen composition

### Grid & Container

Home stacks horizontal service stories, document shortcuts, and service groups. Applications use one focused vertical column with a persistent next action.

### Whitespace Philosophy

Dense information is acceptable when strongly grouped. Separate official requirements, personal data, warnings, and actions into distinct blocks.

# Navigation appearance

Use five bottom destinations for Home, Services, assistant, Payments, and Documents, with blue active emphasis.

# Components

### Buttons

Primary actions are saturated blue with white text. Secondary actions are pale or white with blue text; destructive actions are clearly separated.

Service categories, filters, document types, and appointment options use chips, compact tabs, or structured lists with blue selection.

### Cards & Containers

Service panels group related entry points. Document cards preserve a stable title and identity color; status cards pair current state with the next available action.

### Inputs & Forms

Forms use clear labels, white or pale fields, inline validation, and one blue continuation action. Native controls must inherit the same color, radius, type, and spacing.

### Status & Build Page

Keep application step, agency, deadline, payment, appointment, document validity, and result close to the affected service.

### Navigation

Use five bottom destinations for Home, Services, assistant, Payments, and Documents, with blue active emphasis.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White or cobalt canvas | Work or home |
| 1 | White rounded panel | Service and document group |
| 2 | Colored document card | Identity object |
| 3 | Sticky blue action | Continue or submit |

### Decorative Depth

Use the cobalt gradient, assistant character, document silhouettes, and compact service artwork. Keep form screens visually restrained.

# States

Keep application step, agency, deadline, payment, appointment, document validity, and result close to the affected service.

# iOS adaptation

### Touch Targets

Services, documents, search, fields, assistant actions, navigation, and submit controls remain at least 44pt.

### Collapsing Strategy

Preserve service, current step, required data, warning, status, and next action; collapse stories and recommendations first.

### Image Behavior

Scale symbolic artwork without cropping labels and preserve text-safe space in service stories and document cards.

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

- Separate civic complexity into clear panels and steps.
- Preserve cobalt as the official action and navigation color.
- Keep documents and statuses recognizable at a glance.

### Don't

- Don't decorate long forms with unnecessary gradients.
- Don't mix document colors into generic actions.
- Don't hide legal requirements or data review before submission.

</design-context>
