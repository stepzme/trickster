<design-context>
---
version: 1
platform: iOS
name: Whoosh-design-analysis
description: "A cinematic dark mobility interface built from charcoal maps, smoked translucent sheets, brushed-metal controls, ember-orange primary actions, compact white telemetry, and an industrial sci-fi campaign layer. Vehicle discovery and active rides stay on the map while pricing, insurance, parking, and subscription details rise in dense rounded panels."

colors:
  primary: "#FF6548"
  on-primary: "#FFFFFF"
  primary-pressed: "#E44D34"
  ink: "#FFFFFF"
  ink-muted: "#B7B5B8"
  ink-subtle: "#807E82"
  canvas: "#171719"
  surface-1: "#302E31"
  surface-2: "#403D40"
  metallic-light: "#A8A6A5"
  metallic-dark: "#5D5A5B"
  map: "#16181A"
  accent-blue: "#2B91FF"
  hairline: "#FFFFFF1F"
  semantic-success: "#31B97D"
  semantic-warning: "#F3B34D"
  semantic-danger: "#FF5E55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42, fontWeight: 800, lineHeight: 1.0, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 18]}
  vehicle-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 14 }
  tariff-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  map-control: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Whoosh uses a dark map and smoked metal interface so vehicle state and ride action remain visible at night. Ember-orange decisions and industrial campaign objects provide the only strong warmth.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A cinematic dark mobility interface built from charcoal maps, smoked translucent sheets, brushed-metal controls, ember-orange primary actions, compact white telemetry.
- The dominant canvas token is #171719 and the primary accent token is #FF6548.
- The recorded display style is 42 points while the body style is 14 points.
- Navigation uses bottom destinations for Menu, Map, and traffic rules.
- The reviewed screens use this hierarchy: Vehicle discovery and active rides stay on the map while pricing, insurance, parking, and subscription details rise in dense rounded panels.

# Color and surfaces

### Brand & Accent

Use ember orange or coral-red for Start, Finish, verify parking, and active promotion. Electric blue marks current location; white marks the selected vehicle.

### Surface

Use near-black map and canvas, translucent graphite sheets, mid-gray tariff tiles, and brushed-silver secondary controls.

### Text

Use white for titles and ride data, cool gray for terms and helper text, and black only on the lightest metal surfaces.

### Semantic

Use green for completed steps and safe parking, amber for low charge or caution, red for problems, and blue strictly for location.

# Typography

### Font Family

Use a compact modern system sans; campaign moments may use a squared display face without changing form text.

### Principles

Prioritize vehicle ID, charge, time, price, parking, and the current ride action. Keep conditions and insurance visually secondary.

### Note on Font Substitutes

Use Inter or SF Pro for the product UI and a restrained squared sans only for campaign headlines.

# Screen composition

### Grid & Container

The map fills the screen. Vehicle data and active ride controls occupy a bottom sheet; three tariff options form a horizontal row.

### Whitespace Philosophy

Keep map controls compact and clustered. Inside sheets, allow each ride fact and safety action its own row.

# Navigation appearance

Use bottom destinations for Menu, Map, and traffic rules. Map actions include search, wallet, layers, zoom, location, and scan.

# Components

### Buttons

Primary ride actions are orange-red textured pills; secondary reserve, pause, or finish variants are brushed gray. Native controls must inherit this material, radius, and contrast.

Tariffs and subscription offers use compact dark cards with time, included value, and price. Selected state uses green or orange emphasis.

### Cards & Containers

Vehicle sheets combine circular thumbnail, charge, ID, tariff row, insurance, payment, promo, support, and action bar.

### Inputs & Forms

Phone and code entry use dark native-style fields with white type. Promo, payment, and profile forms remain simple charcoal rows.

### Status & Build Page

Show charge, lock state, reservation, ride time, price, parking validation, trip completion, balance, and subscription status directly.

### Navigation

Use bottom destinations for Menu, Map, and traffic rules. Map actions include search, wallet, layers, zoom, location, and scan.

# Imagery and icons

Use smoked translucency, metallic gradients, inner highlights, and dark scrims. Sheets should feel physical without obscuring the map.

### Decorative Depth

Use original mechanical emblems, ember glow, weathered steel, and focused campaign light around scan, parking, and special-mode moments.

# States

Show charge, lock state, reservation, ride time, price, parking validation, trip completion, balance, and subscription status directly.

# iOS adaptation

Phones use full map plus bottom sheet. Wider screens may place the ride sheet at the side while preserving a large interactive map.

### Touch Targets

Markers, scan, map controls, tariffs, insurance, payment, start, pause, finish, parking, and navigation require at least 44pt targets.

### Collapsing Strategy

Keep vehicle ID, charge, time, price, safety state, and current action visible. Collapse tariff detail, support, and terms.

### Image Behavior

Maps fill the viewport. Use `contain` for mechanical emblems and vehicle art, and `cover` only for campaign character backgrounds.

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

- Keep the map visible across the ride lifecycle.
- Use orange for the current decisive action.
- Distinguish ride state through the bottom sheet.
- Keep safety and parking explicit.

### Don't

- Do not apply campaign art to payment or legal text.
- Do not use multiple bright actions at once.
- Do not hide vehicle charge or price.
- Do not leave mismatched native blue controls.

</design-context>
