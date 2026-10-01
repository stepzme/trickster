<design-context>
---
version: 1
platform: iOS
name: Yandex-Translate-design-analysis
description: "A utility-first translation interface built from white and pale-gray surfaces, dark slate typography, restrained orange accents, simple line icons, and large focused text areas. Mode switching stays persistent while history, favorites, cards, and settings remain intentionally plain."
colors: { primary: "#F39A24", on-primary: "#FFFFFF", primary-soft: "#FFF1D9", accent: "#3A89D8", ink: "#242B31", ink-muted: "#777E84", ink-subtle: "#B6BBC0", canvas: "#F5F7FA", surface-1: "#FFFFFF", surface-2: "#EEF1F4", hairline: "#E0E4E8", semantic-success: "#3CAA6D", semantic-warning: "#F39A24", semantic-danger: "#D95454", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 40, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: Yandex Sans, fontSize: 32, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: Yandex Sans, fontSize: 27, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: Yandex Sans, fontSize: 22, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [13, 18]}
  translation-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 16 }
  history-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Yandex Translate keeps language input, output, and mode switching dominant while learning and history stay one tap away.

# Non-negotiable visual invariants

- The reference consistently shows source and target languages visible.
- The reference consistently shows preserve input when switching modes.
- The reference consistently shows make audio and save actions discoverable.
- The reference consistently shows a utility-first translation interface built from white and pale-gray surfaces.
- The reference consistently shows dark slate typography.
- The reference consistently shows restrained orange accents.
- The reference consistently shows simple line icons.
- Large focused text areas. Mode switching stays persistent while history.

# Color and surfaces

### Brand & Accent
Use orange for learning actions and chosen accents; keep translation controls slate or system blue.

### Surface
Use a pale gray canvas with white translation panels, lists, cards, and sheets.

### Text
Use dark slate for entered and translated text, gray for pronunciation and metadata, and pale gray for placeholders.

### Semantic
Use blue for enabled settings, orange for study actions, and red for destructive confirmation.

# Typography

### Font Family
Use Yandex Sans for interface and translated text, with script-appropriate fallback fonts.

### Hierarchy
Use 32–40 points for focused word display, 22 points for page titles, 16 points for entries, 14 points body, and 10–12 points labels.

### Principles
Give source and target text equal clarity while keeping language direction visible.

### Note on Font Substitutes
Use the platform sans or Inter and preserve native-script coverage.

# Screen composition

### Spacing System
Use a 4 points base, 16 points gutters, 12 points gaps, and 16 points translation-panel padding.

### Grid & Container
Place language selectors above a large input/output panel and keep five modes in the bottom bar.

### Whitespace Philosophy
Leave generous empty space around the active translation and keep history denser.

Surface hierarchy observed in the source:

Use subtle surface separation and sheets; avoid decorative shadow.

### Decorative Depth
Depth is functional: modals, cards, and dimmed overlays only.

# Navigation appearance

Favorites, Photo, Text, Sites, and Dialogue stay in the bottom bar.

# Components

### Buttons

Use compact icon controls in translation and one full-width orange action for learning.

### Cards & Containers

Use translation panels, history rows, flashcards, favorites, and configuration sheets.

### Inputs & Forms

Support text, URL, voice, camera, and dialogue input with visible clear and swap actions.

# Imagery and icons

Depth is functional: modals, cards, and dimmed overlays only.

Contain camera results and site thumbnails; rely on icons rather than decorative imagery.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show listening, loading, offline package, saved, remembered, and deleted state in context.

# iOS adaptation

### Touch Targets

Keep language, swap, voice, camera, save, and bottom navigation actions at least 44 points.

### Collapsing Strategy

Preserve languages, current text, translation, and input actions; collapse history metadata first.

### Image Behavior

Contain camera captures and recognition crops without obscuring detected text.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't decorate the translation canvas.
- Don't hide offline limitations.
- Don't make destructive history actions immediate.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
