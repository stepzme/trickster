<design-context>
---
version: 1
platform: iOS
name: Perplexity-AI-design-analysis
description: "A quiet AI-search interface with a warm off-white canvas, deep green-black typography, teal voice and submit controls, soft floating composers, sparse hairlines, and photography-led discovery cards."
colors: {primary: "#2F98A3", on-primary: "#FFFFFF", primary-focus: "#227A84", ink: "#163536", ink-muted: "#6E7776", ink-subtle: "#9EA6A4", ink-tertiary: "#C7CCCA", canvas: "#FCFBF8", surface-1: "#FFFFFF", surface-2: "#F5F3EF", surface-3: "#ECE9E4", surface-4: "#E1DED8", hairline: "#E5E2DC", hairline-strong: "#CDC9C2", hairline-tertiary: "#B7B2A9", inverse-canvas: "#173536", inverse-surface-1: "#24484A", inverse-surface-2: "#315C5E", inverse-ink: "#FFFFFF", brand-secure: "#1D6268", semantic-success: "#2F9483", semantic-overlay: "#1B2525"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 500, lineHeight: 1.16, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 600, lineHeight: 1.22, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.34, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 48}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: [12, 16]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 10}
  discovery-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8}
  answer-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Perplexity uses a warm, almost paper-like canvas with deep green-black type and restrained teal actions. The interface is organized around a floating composer, readable long-form answers, and photography-led discovery cards.

**Key Characteristics:** warm off-white canvas, teal circular actions, floating white composer, sparse chrome, readable answer text, topical card feed, and voice waveform states.

# Non-negotiable visual invariants

- Sampled screens consistently use warm off-white canvas.
- The reference consistently shows teal circular actions.
- The reference consistently shows floating white composer.
- The reference consistently shows sparse chrome.
- Typography consistently uses readable answer text.
- Sampled screens consistently use topical card feed.
- The reference consistently shows voice waveform states.

# Color and surfaces

### Brand & Accent

Teal marks submit, voice, saved preference feedback, and selected settings. It is applied to small decisive elements rather than large surfaces.

### Surface

Warm off-white is the base; white lifts the composer and cards; pale beige-gray separates settings and skeleton states.

### Text

Deep green-black carries headings and answer text; warm grays support sources, metadata, and inactive categories.

### Semantic

Teal confirms an action or active mode; neutral red and orange are reserved for warnings not represented in the primary flows.

# Typography

### Font Family

Use SF Pro for the interface and readable answer text; a restrained editorial serif may appear in content labels such as further reading.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 500 | Empty or voice state |
| headline | 20 points | 600 | Page or answer section |
| card-title | 15 points | 600 | Story title |
| body | 13 points | 400 | Answer and settings detail |
| caption | 10 points | 400 | Sources and metadata |

### Principles

- Optimize for sustained reading rather than dashboard density.
- Keep the composer visually available but quiet.
- Use teal only to signal actionable AI input or completion.

### Note on Font Substitutes

Use a neutral system sans with excellent long-form legibility and a light-to-semibold range.

# Screen composition

### Spacing System

Use a 4 points base, 12–16 points card padding, 16 points gutters, and generous vertical breathing room around the composer.

### Grid & Container

Discovery is a single-column feed; answer pages are one readable text column; voice mode centers a single horizontal waveform and action.

### Whitespace Philosophy

Whitespace separates thought, source, and action. Avoid crowding the search surface with persistent navigation or promotional modules.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm canvas | Reading context |
| 1 | White hairline card | Composer and discovery |
| 2 | Soft floating control | Voice and follow-up action |
| 3 | Native sheet or permission | Focused system choice |

### Decorative Depth

Use subtle edge shadow on the floating composer and strong content photography in discovery; avoid glossy decoration.

# Navigation appearance

Rely on the composer, contextual back actions, and horizontal topics rather than a persistent multi-tab shell.

# Components

### Buttons

Use teal circles or rounded rectangles for submit, voice, and save; keep dismiss, attach, share, and favorite as quiet icon actions.

### Cards & Containers

Discovery cards combine a large image, title, source count, favorite, and overflow; answer content stays mostly unboxed.

### Inputs & Forms

The composer is a white rounded floating field with attach, search, microphone, and teal submit controls; native keyboard and permissions remain platform-correct but inherit surrounding teal emphasis.

# Imagery and icons

Use subtle edge shadow on the floating composer and strong content photography in discovery; avoid glossy decoration.

Discovery photography uses broad rounded crops; avatars stay small and circular; voice visualization remains a thin centered line.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Use small teal toasts, checks, or button states for saved preference, recording, and successful submission.

# iOS adaptation

### Touch Targets

Composer actions, category tabs, cards, voice controls, and settings rows remain at least 44 points.

### Collapsing Strategy

Preserve prompt, answer, sources, follow-up, and voice action; reduce secondary recommendations first.

### Image Behavior

Crop discovery media consistently and never stretch source or avatar imagery.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't turn answers into a stack of heavy dashboard cards.
- Don't add persistent navigation that competes with the composer.
- Don't use multiple bright accents or ornamental gradients.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
