<design-context>
---
version: 1
platform: iOS
name: Open-design-analysis
description: "A cinematic wellbeing system built on pure black, full-bleed warm photography, widely spaced white type, hairline geometry, tiny red signals, and sparse outlined or white pill actions."
colors: {primary: "#F5F3EE", on-primary: "#111111", primary-focus: "#DCD9D2", ink: "#F7F6F3", ink-muted: "#A7A6A4", ink-subtle: "#747473", ink-tertiary: "#50504F", canvas: "#000000", surface-1: "#121313", surface-2: "#202121", surface-3: "#2E2F2F", surface-4: "#3C3D3D", hairline: "#2A2B2B", hairline-strong: "#424343", hairline-tertiary: "#585959", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#121316", brand-secure: "#D1483F", semantic-success: "#BFD6B8", semantic-overlay: "#000000"}
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
rounded: {xs: 4, sm: 10, md: 16, lg: 22, xl: 28, xxl: 32, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Open makes daily wellbeing feel cinematic and contemplative by placing minimal white controls over warm blurred photography and highly restrained black content lists.

**Key Characteristics:** pure black canvas, warm cinematic photography, widely spaced wordmark, thin white outlines, sparse red detail, minimal navigation, and large quiet type.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: pure black canvas.
- The reviewed screens show this treatment: warm cinematic photography.
- The reviewed screens show this treatment: widely spaced wordmark.
- The reviewed screens show this treatment: thin white outlines.
- The reviewed screens show this treatment: sparse red detail.
- The reviewed screens show this treatment: minimal navigation.
- The reviewed screens show this treatment: large quiet type.

# Color and surfaces

### Brand & Accent

Warm white is the primary interface color. Tiny muted red signals are reserved for notification or studio status, not general action.

### Surface

Black carries nearly every screen; imagery can fill the background, while content sections remain borderless or separated by hairlines.

### Text

Warm white leads practice titles; gray supports teacher, duration, intent, and secondary modes.

### Semantic

Use muted red for attention, soft green only for completion, and keep ordinary navigation monochrome.

# Typography

### Font Family

Use SF Pro Display for practice and program titles and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 21pt | 700 | Section title |
| card-title | 16pt | 600 | Primary item |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Metadata |

### Principles

- Lead with the practice, teacher, duration, or felt intent.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a refined neutral grotesk with light display weights; preserve wide tracking in the wordmark and mode labels.

# Screen composition

### Grid & Container

Today uses one full-screen feature; programs use cinematic cards; Discover uses a sparse list and horizontal media rail.

### Whitespace Philosophy

Large dark fields and slow visual rhythm are essential; avoid filling space around a single daily practice.

# Navigation appearance

Use small monochrome symbols with Today centered; the active destination is bright white and others remain subdued.

# Components

### Buttons

Use outlined pills for exploration and a warm-white filled pill for trial or decisive commitment.

Meditate, Breathe, Move, and Sound use quiet text labels; selection is shown by contrast rather than filled chips.

### Cards & Containers

Program and practice cards rely on photography and type, with almost no visible container chrome.

### Inputs & Forms

Search is a thin outlined field on black; onboarding fields use sparse typography and minimal circular progression.

### Status & Build Page

Keep offline, life score, streak, trial, playback, and completion close to the active practice.

### Navigation

Use small monochrome symbols with Today centered; the active destination is bright white and others remain subdued.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use moving photography, blur, glowing play ring, and subtle dark overlays rather than card elevation.

# States

Keep offline, life score, streak, trial, playback, and completion close to the active practice.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Preserve the daily practice, play action, and mode; reduce program previews and supporting prose first.

### Image Behavior

Allow full-bleed crop and motion blur, protect faces and gestures, and use dark overlays only for legibility.

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

- Preserve cinematic negative space and minimal monochrome control language.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't introduce bright app-style cards or dense utility chrome.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- iPad and landscape layouts were not represented.

</design-context>
