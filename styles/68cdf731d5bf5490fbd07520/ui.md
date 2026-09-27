<design-context>
---
version: alpha
name: Perplexity-AI-design-analysis
description: "A quiet AI-search interface with a warm off-white canvas, deep green-black typography, teal voice and submit controls, soft floating composers, sparse hairlines, and photography-led discovery cards."
colors: {primary: "#2F98A3", on-primary: "#FFFFFF", primary-hover: "#48AAB4", primary-focus: "#227A84", ink: "#163536", ink-muted: "#6E7776", ink-subtle: "#9EA6A4", ink-tertiary: "#C7CCCA", canvas: "#FCFBF8", surface-1: "#FFFFFF", surface-2: "#F5F3EF", surface-3: "#ECE9E4", surface-4: "#E1DED8", hairline: "#E5E2DC", hairline-strong: "#CDC9C2", hairline-tertiary: "#B7B2A9", inverse-canvas: "#173536", inverse-surface-1: "#24484A", inverse-surface-2: "#315C5E", inverse-ink: "#FFFFFF", brand-secure: "#1D6268", semantic-success: "#2F9483", semantic-overlay: "#1B2525"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 500, lineHeight: 1.16, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 600, lineHeight: 1.22, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.34, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 48px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 10px}
  discovery-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px}
  answer-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Perplexity uses a warm, almost paper-like canvas with deep green-black type and restrained teal actions. The interface is organized around a floating composer, readable long-form answers, and photography-led discovery cards.

**Key Characteristics:** warm off-white canvas, teal circular actions, floating white composer, sparse chrome, readable answer text, topical card feed, and voice waveform states.

## Colors

### Brand & Accent

Teal marks submit, voice, saved preference feedback, and selected settings. It is applied to small decisive elements rather than large surfaces.

### Surface

Warm off-white is the base; white lifts the composer and cards; pale beige-gray separates settings and skeleton states.

### Text

Deep green-black carries headings and answer text; warm grays support sources, metadata, and inactive categories.

### Semantic

Teal confirms an action or active mode; neutral red and orange are reserved for warnings not represented in the primary flows.

## Typography

### Font Family

Use SF Pro for the interface and readable answer text; a restrained editorial serif may appear in content labels such as further reading.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 500 | Empty or voice state |
| headline | 20px | 600 | Page or answer section |
| card-title | 15px | 600 | Story title |
| body | 13px | 400 | Answer and settings detail |
| caption | 10px | 400 | Sources and metadata |

### Principles

- Optimize for sustained reading rather than dashboard density.
- Keep the composer visually available but quiet.
- Use teal only to signal actionable AI input or completion.

### Note on Font Substitutes

Use a neutral system sans with excellent long-form legibility and a light-to-semibold range.

## Layout

### Spacing System

Use a 4px base, 12–16px card padding, 16px gutters, and generous vertical breathing room around the composer.

### Grid & Container

Discovery is a single-column feed; answer pages are one readable text column; voice mode centers a single horizontal waveform and action.

### Whitespace Philosophy

Whitespace separates thought, source, and action. Avoid crowding the search surface with persistent navigation or promotional modules.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm canvas | Reading context |
| 1 | White hairline card | Composer and discovery |
| 2 | Soft floating control | Voice and follow-up action |
| 3 | Native sheet or permission | Focused system choice |

### Decorative Depth

Use subtle edge shadow on the floating composer and strong content photography in discovery; avoid glossy decoration.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Toast and label |
| rounded-sm | 8px | Settings row |
| rounded-md | 12px | Discovery card |
| rounded-lg | 16px | Composer |
| rounded-full | full | Submit, voice, avatar |

### Photography & Illustration Geometry

Discovery photography uses broad rounded crops; avatars stay small and circular; voice visualization remains a thin centered line.

## Components

### Buttons

Use teal circles or rounded rectangles for submit, voice, and save; keep dismiss, attach, share, and favorite as quiet icon actions.

### Pricing Tabs

Topic categories and settings modes use text rails or grouped rows with teal selected indicators rather than heavy pills.

### Cards & Containers

Discovery cards combine a large image, title, source count, favorite, and overflow; answer content stays mostly unboxed.

### Inputs & Forms

The composer is a white rounded floating field with attach, search, microphone, and teal submit controls; native keyboard and permissions remain platform-correct but inherit surrounding teal emphasis.

### Status & Build Page

Use small teal toasts, checks, or button states for saved preference, recording, and successful submission.

### Navigation

Rely on the composer, contextual back actions, and horizontal topics rather than a persistent multi-tab shell.

### Footer

No footer; the follow-up composer owns the lower safe area on answer screens.

## Do's and Don'ts

### Do

- Preserve the warm canvas, readable column, and teal input hierarchy.
- Keep sources, follow-up, and voice entry accessible.
- Style native controls to inherit this visual system.

### Don't

- Don't turn answers into a stack of heavy dashboard cards.
- Don't add persistent navigation that competes with the composer.
- Don't use multiple bright accents or ornamental gradients.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten composer actions |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Widen reading margins carefully |

### Touch Targets

Composer actions, category tabs, cards, voice controls, and settings rows remain at least 44px.

### Collapsing Strategy

Preserve prompt, answer, sources, follow-up, and voice action; reduce secondary recommendations first.

### Image Behavior

Crop discovery media consistently and never stretch source or avatar imagery.

## Iteration Guide

Tune composer and answer readability first, then sources, discovery, voice, settings, and secondary states.

## Known Gaps

- Subscription and payment flows were not deeply sampled.
- Citation error and answer-failure recovery were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
