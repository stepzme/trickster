<design-context>
---
version: alpha
name: Gosuslugi-design-analysis
description: "A civic-services interface that pairs a deep cobalt gradient home with crisp white service panels, saturated blue actions, colorful document cards, and a compact assistant layer. Dense public-service content becomes approachable through strong grouping, familiar icons, and one clear action per step."
colors: {primary: "#0D5BD7", on-primary: "#FFFFFF", primary-hover: "#2872E0", primary-focus: "#0848AE", ink: "#17191D", ink-muted: "#656A72", ink-subtle: "#969BA3", ink-tertiary: "#C4C8CD", canvas: "#FFFFFF", surface-1: "#F6F8FB", surface-2: "#EDF1F7", surface-3: "#E0E6F0", surface-4: "#CDD6E5", hairline: "#E3E7ED", hairline-strong: "#C6CDD7", hairline-tertiary: "#AEB8C5", inverse-canvas: "#05276B", inverse-surface-1: "#0B3E91", inverse-surface-2: "#1558BC", inverse-ink: "#FFFFFF", brand-secure: "#0D5BD7", semantic-success: "#12A36B", semantic-overlay: "#101A2E"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  service-panel: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  document-card: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Gosuslugi combines a confident cobalt civic identity with white, highly structured service surfaces. Colorful documents and service icons make a large administrative catalog feel personal and navigable.

**Key Characteristics:** deep blue gradient home, white rounded panels, saturated blue CTAs, multicolor document cards, compact assistant, dense structured forms, five-item navigation, and clear application status.

## Colors

### Brand & Accent

Cobalt owns the home atmosphere, primary actions, active navigation, links, and focus. Red, green, and orange remain localized to document identity or status.

### Surface

White is the working surface for forms, documents, services, and messages. Pale blue-gray groups secondary information and loading states.

### Text

Near-black leads services, documents, application steps, and personal data. Gray supports explanations, dates, requirements, and inactive controls.

### Semantic

Blue means action or official navigation, green means successful or available, yellow highlights caution, and red identifies critical or document-specific information.

## Typography

### Font Family

Use SF Pro Display for service and application headings and SF Pro Text for forms, documents, status, and assistant content.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Major service state |
| headline | 21px | 700 | Page or application step |
| card-title | 16px | 600 | Document or service |
| body | 13px | 400 | Form and explanation |
| caption | 10px | 400 | Status and metadata |

### Principles

- Lead with the service, current step, or application status.
- Keep legal and administrative detail readable, not visually dominant.
- Use consistent labels and stable field order across long forms.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic support and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 12–16px field gaps, 16px panel padding, and 24–32px between service sections.

### Grid & Container

Home stacks horizontal service stories, document shortcuts, and service groups. Applications use one focused vertical column with a persistent next action.

### Whitespace Philosophy

Dense information is acceptable when strongly grouped. Separate official requirements, personal data, warnings, and actions into distinct blocks.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White or cobalt canvas | Work or home |
| 1 | White rounded panel | Service and document group |
| 2 | Colored document card | Identity object |
| 3 | Sticky blue action | Continue or submit |

### Decorative Depth

Use the cobalt gradient, assistant character, document silhouettes, and compact service artwork. Keep form screens visually restrained.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Status label |
| rounded-sm | 8px | Input and button |
| rounded-md | 12px | Document card |
| rounded-lg | 16px | Service panel |
| rounded-full | full | Assistant and icon action |

### Photography & Illustration Geometry

Use simple graphic objects inside square tiles or wide story cards. Documents may use stacked full-width colored cards with faint symbolic silhouettes.

## Components

### Buttons

Primary actions are saturated blue with white text. Secondary actions are pale or white with blue text; destructive actions are clearly separated.

### Pricing Tabs

Service categories, filters, document types, and appointment options use chips, compact tabs, or structured lists with blue selection.

### Cards & Containers

Service panels group related entry points. Document cards preserve a stable title and identity color; status cards pair current state with the next available action.

### Inputs & Forms

Forms use clear labels, white or pale fields, inline validation, and one blue continuation action. Native controls must inherit the same color, radius, type, and spacing.

### Status & Build Page

Keep application step, agency, deadline, payment, appointment, document validity, and result close to the affected service.

### Navigation

Use five bottom destinations for Home, Services, assistant, Payments, and Documents, with blue active emphasis.

### Footer

No footer; bottom navigation or the current blue action owns the safe area.

## Do's and Don'ts

### Do

- Separate civic complexity into clear panels and steps.
- Preserve cobalt as the official action and navigation color.
- Keep documents and statuses recognizable at a glance.

### Don't

- Don't decorate long forms with unnecessary gradients.
- Don't mix document colors into generic actions.
- Don't hide legal requirements or data review before submission.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten service and form spacing |
| Standard | 375–430px | Default civic layout |
| Wide | 431px+ | Expand panels and content gutters |

### Touch Targets

Services, documents, search, fields, assistant actions, navigation, and submit controls remain at least 44px.

### Collapsing Strategy

Preserve service, current step, required data, warning, status, and next action; collapse stories and recommendations first.

### Image Behavior

Scale symbolic artwork without cropping labels and preserve text-safe space in service stories and document cards.

## Iteration Guide

Tune Home and Services first, then search, application forms, documents, notifications, payments, appointments, assistant, and results.

## Known Gaps

- Payment failure and complex appeal recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
