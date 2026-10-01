<design-context>
---
version: 1
platform: iOS
name: Halyk-Kazakhstan-design-analysis
description: "A service-heavy financial super-app organized through white surfaces, Halyk green line icons, compact category grids, commerce banners, and yellow insurance accents. The system favors direct access and visible breadth over spacious minimalism."
colors: { primary: "#11A85A", on-primary: "#FFFFFF", primary-soft: "#EAF8F0", accent: "#FFB719", ink: "#17191B", ink-muted: "#73777C", ink-subtle: "#AEB2B6", canvas: "#F5F6F6", surface-1: "#FFFFFF", surface-2: "#F0F3F2", hairline: "#E2E5E4", semantic-success: "#13A85B", semantic-warning: "#FFB719", semantic-danger: "#DE5555", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10 }
  promo-banner: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
---

# Overview

Halyk Kazakhstan presents banking, government, travel, market, cinema, and insurance as a compact green service hub.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A service-heavy financial super-app organized through white surfaces, Halyk green line icons, compact category grids, commerce banners, and yellow insurance accents.
- The source records this color relationship: Use Halyk green for navigation and actions; reserve warm yellow for insurance and urgent service emphasis.
- The recorded display style is 36 points while the body style is 14 points.
- Navigation and primary actions follow this source observation: Use Halyk green for navigation and actions; reserve warm yellow for insurance and urgent service emphasis.
- The reviewed screens use this hierarchy: The system favors direct access and visible breadth over spacious minimalism.

# Color and surfaces

### Brand & Accent
Use Halyk green for navigation and actions; reserve warm yellow for insurance and urgent service emphasis.

### Surface
Keep the canvas pale gray and service areas white, with subtle green-tinted icon tiles.

### Text
Use near-black for titles, gray for metadata, and muted gray for unavailable fields.

### Semantic
Use green for available or completed state, yellow for attention, and red for failures.

# Typography

### Font Family
Use SF Pro Display for section titles and SF Pro Text for services, forms, and metadata.

### Principles
Keep labels brief and consistent so dense service grids remain scannable.

### Note on Font Substitutes
Use the platform sans or Inter with tabular financial values.

# Screen composition

### Grid & Container

### Whitespace Philosophy
Accept high density but separate banking, marketplace, and insurance contexts with clear cards and headers.

# Navigation appearance

Preserve the navigation type and selected-state treatment documented in the component tokens and overview. Keep navigation visually subordinate to the screen's primary content.

# Components

### Buttons
Use green filled buttons for primary actions and yellow filled buttons inside insurance context.

Use compact segmented controls for categories, documents, applications, and contracts.

### Cards & Containers
Use service tiles, banner carousels, media cards, insurance cards, and grouped form panels.

### Inputs & Forms
Stack labeled fields with clear separators, dropdown affordances, and a persistent save action.

### Status & Build Page
Show application, contract, insurance, payment, and empty-list state directly in context.

### Navigation

Keep active navigation green; insurance may use a yellow central action without recoloring the whole shell.

# Imagery and icons

Use light card shadows and dividers; keep forms flatter than promotional modules.

### Decorative Depth
Use compact 3D objects inside service banners and empty states.

# States

Show application, contract, insurance, payment, and empty-list state directly in context.

# iOS adaptation

### Collapsing Strategy
Preserve search, frequent services, current task, and action; move media and promotions lower.

### Image Behavior
Contain service artwork and crop posters consistently without covering labels.

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
- Keep service categories predictable.
- Preserve search near the top.
- Make context changes explicit.

### Don't
- Don't mix yellow insurance actions with ordinary banking confirmation.
- Don't overcrowd form labels.
- Don't let banners displace the primary service grid.

# Known gaps

- Tokens were inferred visually from sampled mobile screens.
- Main page, Insurance, and All services were image-reviewed.
- Transfers and authenticated account states were not deeply sampled.

</design-context>
