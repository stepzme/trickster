<design-context>
---
version: alpha
name: Yandex-Translate-design-analysis
description: "A utility-first translation interface built from white and pale-gray surfaces, dark slate typography, restrained orange accents, simple line icons, and large focused text areas. Mode switching stays persistent while history, favorites, cards, and settings remain intentionally plain."
colors: { primary: "#F39A24", on-primary: "#FFFFFF", primary-hover: "#DF8515", primary-soft: "#FFF1D9", accent: "#3A89D8", ink: "#242B31", ink-muted: "#777E84", ink-subtle: "#B6BBC0", canvas: "#F5F7FA", surface-1: "#FFFFFF", surface-2: "#EEF1F4", hairline: "#E0E4E8", semantic-success: "#3CAA6D", semantic-warning: "#F39A24", semantic-danger: "#D95454", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Yandex Sans, fontSize: 40px, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: Yandex Sans, fontSize: 32px, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: Yandex Sans, fontSize: 27px, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: Yandex Sans, fontSize: 22px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Yandex Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Yandex Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Yandex Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Yandex Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Yandex Sans, fontSize: 15px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Yandex Sans, fontSize: 11px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 18px }
  translation-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 16px }
  history-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Yandex Translate keeps language input, output, and mode switching dominant while learning and history stay one tap away.

## Colors

### Brand & Accent
Use orange for learning actions and chosen accents; keep translation controls slate or system blue.

### Surface
Use a pale gray canvas with white translation panels, lists, cards, and sheets.

### Text
Use dark slate for entered and translated text, gray for pronunciation and metadata, and pale gray for placeholders.

### Semantic
Use blue for enabled settings, orange for study actions, and red for destructive confirmation.

## Typography

### Font Family
Use Yandex Sans for interface and translated text, with script-appropriate fallback fonts.

### Hierarchy
Use 32–40px for focused word display, 22px for page titles, 16px for entries, 14px body, and 10–12px labels.

### Principles
Give source and target text equal clarity while keeping language direction visible.

### Note on Font Substitutes
Use the platform sans or Inter and preserve native-script coverage.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px gaps, and 16px translation-panel padding.

### Grid & Container
Place language selectors above a large input/output panel and keep five modes in the bottom bar.

### Whitespace Philosophy
Leave generous empty space around the active translation and keep history denser.

## Elevation & Depth
Use subtle surface separation and sheets; avoid decorative shadow.

### Decorative Depth
Depth is functional: modals, cards, and dimmed overlays only.

## Shapes

### Border Radius Scale
Use 8px for inputs, 12px for panels, 16px for sheets, and circles for voice or camera controls.

### Photography & Illustration Geometry
Contain camera results and site thumbnails; rely on icons rather than decorative imagery.

## Components

### Buttons
Use compact icon controls in translation and one full-width orange action for learning.

### Pricing Tabs
Use language selectors, theme choices, and mode tabs with clear selected state.

### Cards & Containers
Use translation panels, history rows, flashcards, favorites, and configuration sheets.

### Inputs & Forms
Support text, URL, voice, camera, and dialogue input with visible clear and swap actions.

### Status & Build Page
Show listening, loading, offline package, saved, remembered, and deleted state in context.

### Navigation
Favorites, Photo, Text, Sites, and Dialogue stay in the bottom bar.

### Footer
Keep the footer white and mark the active translation mode with a filled slate icon.

## Do's and Don'ts

### Do
- Keep source and target languages visible.
- Preserve input when switching modes.
- Make audio and save actions discoverable.

### Don't
- Don't decorate the translation canvas.
- Don't hide offline limitations.
- Don't make destructive history actions immediate.

## Responsive Behavior

### Breakpoints
Use stacked translation on phones, side-by-side panels on tablet, and a capped workspace on desktop.

### Touch Targets
Keep language, swap, voice, camera, save, and footer actions at least 44px.

### Collapsing Strategy
Preserve languages, current text, translation, and input actions; collapse history metadata first.

### Image Behavior
Contain camera captures and recognition crops without obscuring detected text.

## Iteration Guide
1. Build text translation, language swap, and audio.
2. Add history, favorites, cards, and offline mode.
3. Add camera, dialogue, site translation, and settings.

## Known Gaps
- Tokens were inferred visually from representative mobile screens.
- All 74 image screens were inventoried; 8 distributed screens were image-reviewed.
- Named flow metadata was unavailable through the gallery.

</design-context>
