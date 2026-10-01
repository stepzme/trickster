<design-context>
---
version: 1
platform: iOS
name: MTS-Urent-design-analysis
description: "A map-first mobility system with a pale geographic canvas, charcoal vehicle markers, vivid purple scan and selection controls, mint success feedback, and rounded white bottom sheets."
colors: {primary: "#7138E8", on-primary: "#FFFFFF", primary-focus: "#5D27C9", ink: "#18181B", ink-muted: "#66656D", ink-subtle: "#96949D", ink-tertiary: "#C0BEC6", canvas: "#F9F7FA", surface-1: "#FFFFFF", surface-2: "#F0EDF3", surface-3: "#E4E0E8", surface-4: "#D7D2DC", hairline: "#E5E1E8", hairline-strong: "#CCC7D1", hairline-tertiary: "#B2ACB8", inverse-canvas: "#42404A", inverse-surface-1: "#53515D", inverse-surface-2: "#666370", inverse-ink: "#FFFFFF", brand-secure: "#B39AF8", semantic-success: "#27D499", semantic-overlay: "#1D1B21"}
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
rounded: {xs: 6, sm: 12, md: 18, lg: 24, xl: 28, xxl: 32, pill: 9999, full: 9999}
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
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: [8, 10]}
---

# Overview

MTS Urent treats the live map as the product, using a purple scanner, dark vehicle pins, compact overlays, and focused bottom sheets to guide rental decisions.

**Key Characteristics:** pale 2GIS map, charcoal markers, purple scanner, violet gradients, mint confirmation, circular controls, and large rounded sheets.

# Non-negotiable visual invariants

- The reference consistently shows pale 2GIS map.
- The reference consistently shows charcoal markers.
- The reference consistently shows purple scanner.
- The reference consistently shows violet gradients.
- The reference consistently shows mint confirmation.
- The reference consistently shows circular controls.
- The reference consistently shows large rounded sheets.

# Color and surfaces

### Brand & Accent

Purple identifies scanning, selected vehicles, tariffs, and paid mobility; pale lavender supports premium or secondary emphasis.

### Surface

The geographic canvas stays pale and readable; white sheets and circular controls float above it with restrained separation.

### Text

Near-black carries decisions; gray supports map detail, vehicle identifiers, and tariff conditions.

### Semantic

Mint confirms success and battery availability; red marks prohibited zones or blocking warnings only.

# Typography

### Font Family

Use SF Pro Display for ride states and sheet headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with vehicle, distance, tariff, and current ride state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans and keep map labels visually separate from app controls.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

The map fills the screen; controls orbit its edges and vehicle details rise from the bottom in one column.

### Whitespace Philosophy

Keep the map open enough to read spatial relationships; concentrate detail inside the active sheet.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use white floating circles, soft sheet elevation, and selected-marker color rather than decorative shadows.

# Navigation appearance

There is no conventional tab bar; scanner, menu, location, layers, and map controls form the persistent navigation.

# Components

### Buttons

The large circular scanner and full-width start action use purple; completion and return feedback use mint.

### Cards & Containers

Vehicle sheets group identity, battery, pricing, and next action; avoid covering more map than the decision requires.

### Inputs & Forms

Phone and verification fields use pale fills, large labels, and purple actions styled to the system.

# Imagery and icons

Use white floating circles, soft sheet elevation, and selected-marker color rather than decorative shadows.

Vehicle thumbnails and campaign imagery stay inside sheets; map pins remain compact and legible at multiple zoom levels.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show loading, map availability, ride checks, prohibited zones, and completion in compact banners or focused sheets.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Keep scanner and vehicle state fixed, stack tariff details, and collapse secondary map tools before spatial context.

### Image Behavior

Treat map tiles as functional imagery; contain vehicle photos and promo art within their sheets.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't replace the map with card-heavy dashboard chrome.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
