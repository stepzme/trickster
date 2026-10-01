<design-context>
---
version: 1
platform: iOS
name: Ostrovok-design-analysis
description: "A bright travel interface built from lime brand fields, royal-blue search and booking actions, large destination photography, clean white result cards, map price pins, and playful travel-object art."
colors: {primary: "#1355DE", on-primary: "#FFFFFF", primary-focus: "#0C42B4", ink: "#18191C", ink-muted: "#666A70", ink-subtle: "#989CA2", ink-tertiary: "#C2C5CA", canvas: "#FFFFFF", surface-1: "#F4F6F7", surface-2: "#EAF0ED", surface-3: "#DDE5E0", surface-4: "#D0D9D3", hairline: "#E2E7E4", hairline-strong: "#C9D1CC", hairline-tertiary: "#AFBAB3", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#91F36B", semantic-success: "#41B866", semantic-overlay: "#17181C"}
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
rounded: {xs: 6, sm: 10, md: 16, lg: 20, xl: 26, xxl: 30, pill: 9999, full: 9999}
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

Ostrovok pairs energetic lime identity and blue booking actions with large travel photography, clear property facts, and friendly trip states.

**Key Characteristics:** lime brand backdrop, royal-blue actions, white search field, large editorial destination cards, map price pins, clean booking cards, and 3D travel objects.

# Non-negotiable visual invariants

- The reference consistently shows lime brand backdrop.
- The reference consistently shows royal-blue actions.
- The reference consistently shows white search field.
- The reference consistently shows large editorial destination cards.
- The reference consistently shows map price pins.
- The reference consistently shows clean booking cards.
- The reference consistently shows 3D travel objects.

# Color and surfaces

### Brand & Accent

Royal blue drives search, booking, active navigation, and payment. Lime owns identity, campaign framing, and positive travel energy.

### Surface

White carries results and trips; pale mint-gray separates grouped controls; lime may frame the Home header and campaign context.

### Text

Near-black leads destination, date, and property title; gray supports distance, review, guests, and policy.

### Semantic

Green confirms rating or availability, orange highlights payment deadline, and blue remains action.

# Typography

### Font Family

Use SF Pro Display for destination and booking headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with destination, dates, property, total, or booking state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with clear prices and compact Russian travel metadata.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

Home uses one wide editorial column and horizontal shelves; results use list or map; Trips uses one booking column.

### Whitespace Philosophy

Give editorial photography breathing room, then tighten repeated property facts for comparison.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use photography, map layering, and light card elevation; illustration remains bounded to campaigns and empty states.

# Navigation appearance

Use five labeled destinations on white, with blue active icon and gray inactive icons.

# Components

### Buttons

Primary search, pay, and booking actions use full-width blue; secondary actions use white or translucent blue.

### Cards & Containers

Property cards align photo, rating, reviews, price, and dates; booking cards expose payment timing and one next action.

### Inputs & Forms

Search, dates, and guests use white rounded fields with blue focus and clear sheet-based selection.

# Imagery and icons

Use photography, map layering, and light card elevation; illustration remains bounded to campaigns and empty states.

Destination cards use wide rounded crops; property cards pair wide image and facts; price pins stay compact.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep availability, payment deadline, confirmation, cancellation, and booking status beside the trip.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Preserve destination, dates, price, and action; reduce editorial shelves before search and trip state.

### Image Behavior

Preserve destination and property focal points; use subtle dark gradients only behind overlaid titles.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't place text-heavy booking details directly on destination photography.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
