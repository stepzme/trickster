<design-context>
---
version: 1
platform: iOS
name: Anytime-design-analysis
description: "A map-first car-sharing interface anchored by vivid turquoise, white floating controls, translucent map overlays, and compact bottom sheets. Real vehicle photography and the live map carry trust; onboarding uses full-screen mobility imagery with a thin turquoise route motif."
colors:
  primary: "#23D7B2"
  on-primary: "#10201D"
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.00, letterSpacing: -0.9 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  map-control: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12 }
  vehicle-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  status-banner: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  drawer-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 16]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: [12, 16]}
---

# Overview

Anytime keeps navigation subordinate to the map. White circular controls and bottom sheets float above soft map colors; turquoise signals availability, progress, and remote car actions.

**Key Characteristics:**
- Full-screen live map as home.
- Turquoise primary actions and route motif.
- White circular floating controls.
- Rounded vehicle and confirmation sheets.
- Real vehicle images and map markers.
- Side drawer that preserves map context.

# Non-negotiable visual invariants

- The reference consistently shows full-screen live map as home.
- The reference consistently shows turquoise primary actions and route motif.
- The reference consistently shows white circular floating controls.
- The reference consistently shows rounded vehicle and confirmation sheets.
- The reference consistently shows real vehicle images and map markers.
- The reference consistently shows side drawer that preserves map context.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — map, vehicle, registration, and profile UI.
- **System Mono** — plate fragments and technical identifiers where needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40 points | 750 | Onboarding statement |
| `{typography.display-md}` | 26 points | 700 | Registration heading |
| `{typography.headline}` | 21 points | 700 | Vehicle or confirmation title |
| `{typography.card-title}` | 15 points | 600 | Vehicle model and drawer group |
| `{typography.body}` | 14 points | 400 | Default content |
| `{typography.caption}` | 10 points | 400 | Status and metadata |
| `{typography.button}` | 16 points | 500 | Remote actions |

### Principles

- Keep map labels secondary to vehicle actions.
- Make model, plate, fuel/range, and rental status scan together.
- Use concise remote-command verbs.
- Keep onboarding copy readable over photography.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto**.

# Screen composition

### Spacing System

Use a 4 points base. Floating controls keep 12 points spacing, sheets use 16 points padding, and full-width actions use 14 points vertical padding.

### Grid & Container

The map fills the viewport. Controls align vertically at the edges. Vehicle detail and active rental use a bottom sheet; profile uses a left drawer.

### Whitespace Philosophy

Whitespace lives inside sheets and controls. The map remains visually open; avoid covering more geography than the current task requires.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Live map | Primary canvas |
| 1 | Shadowed white circle | Map control |
| 2 | White rounded sheet | Vehicle and rental |
| 3 | Dimmed map plus modal | Command confirmation |

### Decorative Depth

Use soft control shadows and literal vehicle renders. Onboarding may layer turquoise route lines over mobility photography.

# Navigation appearance

Map controls replace a tab bar. The menu opens a left drawer for account, pricing, and support destinations.

# Components

### Buttons

Primary remote actions use turquoise fill. End rental uses a turquoise outline or explicit secondary styling. Confirmation sheets use one full-width return action.

### Cards & Containers

Vehicle sheets combine model, plate, range, user state, issue chips, car image, and remote actions. Status banners remain pinned above the map.

### Inputs & Forms

Registration uses direct conversational prompts with explicit document capture. Camera actions name the required identity side or page.

# Imagery and icons

Use soft control shadows and literal vehicle renders. Onboarding may layer turquoise route lines over mobility photography.

Vehicle images use contain and preserve branding. Onboarding photography uses cover with a readable route overlay. Map markers stay legible at multiple zoom levels.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Remote commands show loading in place, then a clear success sheet. Active rental stays visible through a persistent banner and bottom sheet.

# iOS adaptation

### Touch Targets

Maintain 44 points for map controls, markers, issue chips, drawer rows, and remote actions.

### Collapsing Strategy

Keep the map full viewport. Constrain sheets before increasing height; stack vehicle actions only on the narrowest screens.

### Image Behavior

Contain vehicle renders and identity evidence. Use cover for onboarding photography while preserving people, car, logo, and route line.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't cover the map with permanent chrome.
- Don't use map color as action color.
- Don't hide plate or range information.
- Don't combine destructive and routine controls.
- Don't make document capture ambiguous.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Exact tokens and font names were inferred visually.
- The 25-flow inventory was complete and all top-level flows were inspected.
- Map transitions and remote-command motion were not assessed.
- No tablet or desktop screens were present.

</design-context>
