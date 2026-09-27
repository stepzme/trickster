<design-context>
---
version: alpha
name: Anytime-design-analysis
description: "A map-first car-sharing interface anchored by vivid turquoise, white floating controls, translucent map overlays, and compact bottom sheets. Real vehicle photography and the live map carry trust; onboarding uses full-screen mobility imagery with a thin turquoise route motif."
colors:
  primary: "#23D7B2"
  on-primary: "#10201D"
  primary-hover: "#14BE9C"
  primary-soft: "#DDF9F3"
  ink: "#151919"
  ink-muted: "#6F7775"
  ink-subtle: "#A7ADAB"
  canvas: "#EEF1F0"
  surface-1: "#FFFFFF"
  surface-2: "#F1F4F3"
  hairline: "#DFE4E2"
  map-water: "#6CCDF0"
  map-land: "#D8EBDD"
  semantic-success: "#25C779"
  semantic-danger: "#E65D56"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.00, letterSpacing: -0.9px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px }
  vehicle-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  status-banner: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  drawer-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px 16px }
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 12px 16px }
---

## Overview

Anytime keeps navigation subordinate to the map. White circular controls and bottom sheets float above soft map colors; turquoise signals availability, progress, and remote car actions.

**Key Characteristics:**
- Full-screen live map as home.
- Turquoise primary actions and route motif.
- White circular floating controls.
- Rounded vehicle and confirmation sheets.
- Real vehicle images and map markers.
- Side drawer that preserves map context.

## Colors

### Brand & Accent
- **Turquoise** ({colors.primary}): Remote car action, progress, route motif, and active emphasis.
- **Soft Turquoise** ({colors.primary-soft}): Selected or informational support.
- **Map Blue / Green**: Geographic context, not brand action.

### Surface
- **Canvas** ({colors.canvas}): Neutral fallback behind map.
- **Surface 1** ({colors.surface-1}): Controls, sheets, and drawer.
- **Surface 2** ({colors.surface-2}): Disabled and nested content.
- **Hairline** ({colors.hairline}): Sheet and form separators.

### Text
- **Ink** ({colors.ink}): Vehicle, action, and navigation labels.
- **Ink Muted** ({colors.ink-muted}): Range, status, and supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and placeholder text.

### Semantic
- **Success** ({colors.semantic-success}): Completed command or verification.
- **Danger** ({colors.semantic-danger}): Rental issue and destructive action.
- **Overlay** ({colors.semantic-overlay}): Command and drawer scrim.

## Typography

### Font Family

- **System Sans** — map, vehicle, registration, and profile UI.
- **System Mono** — plate fragments and technical identifiers where needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 750 | Onboarding statement |
| `{typography.display-md}` | 26px | 700 | Registration heading |
| `{typography.headline}` | 21px | 700 | Vehicle or confirmation title |
| `{typography.card-title}` | 15px | 600 | Vehicle model and drawer group |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 10px | 400 | Status and metadata |
| `{typography.button}` | 16px | 500 | Remote actions |

### Principles

- Keep map labels secondary to vehicle actions.
- Make model, plate, fuel/range, and rental status scan together.
- Use concise remote-command verbs.
- Keep onboarding copy readable over photography.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto**.

## Layout

### Spacing System

Use a 4px base. Floating controls keep 12px spacing, sheets use 16px padding, and full-width actions use 14px vertical padding.

### Grid & Container

The map fills the viewport. Controls align vertically at the edges. Vehicle detail and active rental use a bottom sheet; profile uses a left drawer.

### Whitespace Philosophy

Whitespace lives inside sheets and controls. The map remains visually open; avoid covering more geography than the current task requires.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Live map | Primary canvas |
| 1 | Shadowed white circle | Map control |
| 2 | White rounded sheet | Vehicle and rental |
| 3 | Dimmed map plus modal | Command confirmation |

### Decorative Depth

Use soft control shadows and literal vehicle renders. Onboarding may layer turquoise route lines over mobility photography.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Tags and compact status |
| `{rounded.sm}` | 10px | Actions and form controls |
| `{rounded.md}` | 14px | Status banners |
| `{rounded.xl}` | 28px | Bottom sheets and drawer corners |
| `{rounded.full}` | full | Map controls and markers |

### Photography & Illustration Geometry

Vehicle images use contain and preserve branding. Onboarding photography uses cover with a readable route overlay. Map markers stay legible at multiple zoom levels.

## Components

### Buttons

Primary remote actions use turquoise fill. End rental uses a turquoise outline or explicit secondary styling. Confirmation sheets use one full-width return action.

### Pricing Tabs

No pricing tabs were observed. Tariff and vehicle options use compact chips or drawer rows when needed.

### Cards & Containers

Vehicle sheets combine model, plate, range, user state, issue chips, car image, and remote actions. Status banners remain pinned above the map.

### Inputs & Forms

Registration uses direct conversational prompts with explicit document capture. Camera actions name the required identity side or page.

### Status & Build Page

Remote commands show loading in place, then a clear success sheet. Active rental stays visible through a persistent banner and bottom sheet.

### Navigation

Map controls replace a tab bar. The menu opens a left drawer for account, pricing, and support destinations.

### Footer

The vehicle or rental bottom sheet is the functional footer. Its primary actions remain above the safe area.

## Do's and Don'ts

### Do

- Preserve map context during actions.
- Keep active-rental status persistent.
- Separate Open from End rental.
- Confirm remote commands.
- Use real vehicle imagery for identification.

### Don't

- Don't cover the map with permanent chrome.
- Don't use map color as action color.
- Don't hide plate or range information.
- Don't combine destructive and routine controls.
- Don't make document capture ambiguous.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Constrain sheet width and keep map visible |
| Compact | 390–767px | Default mobile map layout |
| Small | <390px | Stack issue chips and vehicle metadata |

### Touch Targets

Maintain 44px for map controls, markers, issue chips, drawer rows, and remote actions.

### Collapsing Strategy

Keep the map full viewport. Constrain sheets before increasing height; stack vehicle actions only on the narrowest screens.

### Image Behavior

Contain vehicle renders and identity evidence. Use cover for onboarding photography while preserving people, car, logo, and route line.

## Iteration Guide

1. Establish map and floating controls.
2. Build vehicle and active-rental sheets.
3. Add remote-command progress and confirmation.
4. Implement registration and profile drawer.
5. Add onboarding photography and route motif last.

## Known Gaps

- Exact tokens and font names were inferred visually.
- The 25-flow inventory was complete and all top-level flows were inspected.
- Map transitions and remote-command motion were not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
