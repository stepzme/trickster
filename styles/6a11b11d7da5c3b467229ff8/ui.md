<design-context>
---
version: 1
platform: iOS
name: Grok-design-analysis
description: "A stark black AI workspace built from charcoal pills, compact white type, dark rounded composer surfaces, and occasional electric blue subscription emphasis. Conversation, voice, connectors, and image generation share one minimal shell with generated content providing nearly all visual color."
colors: {primary: "#F5F5F5", on-primary: "#111111", primary-focus: "#D9D9D9", ink: "#F5F5F5", ink-muted: "#B0B0B0", ink-subtle: "#777777", ink-tertiary: "#4E4E4E", canvas: "#000000", surface-1: "#1D1D1D", surface-2: "#282828", surface-3: "#343434", surface-4: "#414141", hairline: "#343434", hairline-strong: "#4A4A4A", hairline-tertiary: "#5D5D5D", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F1", inverse-surface-2: "#E2E2E2", inverse-ink: "#111111", brand-secure: "#2F72FF", semantic-success: "#3DBB7C", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 600, lineHeight: 1.06, letterSpacing: -0.9}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 600, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 600, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.46, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [11, 16]}
  prompt-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [10, 14]}
  user-message: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 12}
  media-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 2}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
---

# Overview

Grok is a deliberately stark AI workspace. Black canvas and charcoal controls recede behind prompts, long answers, voice, connectors, and generated media.

**Key Characteristics:** pure black canvas, white type, charcoal pills, large dark composer, segmented Ask and Imagine modes, generated-content color, compact icon actions, and occasional blue upgrade emphasis.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: pure black canvas.
- The reviewed screens show this treatment: white type.
- The reviewed screens show this treatment: charcoal pills.
- The reviewed screens show this treatment: large dark composer.
- The reviewed screens show this treatment: segmented Ask and Imagine modes.
- The reviewed screens show this treatment: generated-content color.
- The reviewed screens show this treatment: compact icon actions.
- The reviewed screens show this treatment: occasional blue upgrade emphasis.

# Color and surfaces

### Brand & Accent

White is the primary high-contrast action and text color. Electric blue is rare and reserved for SuperGrok or subscription emphasis.

### Surface

Pure black anchors every screen. Charcoal steps define composer, suggestions, menus, user prompts, and controls without visible shadow.

### Text

Soft white carries answers and prompts. Mid-gray supports thoughts, timestamps, helper text, and secondary actions.

### Semantic

White indicates enabled or selected action, blue marks premium promotion, green confirms success, and red is reserved for destructive or failed states.

# Typography

### Font Family

Use SF Pro Display for sparse headings and SF Pro Text for prompts, answers, modes, controls, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 600 | Empty-state or mode title |
| headline | 21pt | 600 | Answer section |
| card-title | 16pt | 500 | Tool or media title |
| body | 14pt | 400 | Prompt and answer |
| caption | 10pt | 400 | Mode and timing |

### Principles

- Let the prompt and response dominate the reading order.
- Use white weight and spacing rather than many surface colors.
- Keep control labels short and conversational.

### Note on Font Substitutes

Use the platform sans with strong dark-mode rendering and readable long-form line spacing.

# Screen composition

### Grid & Container

A minimal top bar holds menu, Ask or Imagine, and a contextual action. The conversation uses one column with the composer anchored at the bottom.

### Whitespace Philosophy

Black negative space is the visual system. Avoid adding panels unless they support a prompt, tool, or generated asset.

# Navigation appearance

Use a minimal top shell. History, settings, tasks, companions, and connectors open from the menu rather than a bottom bar.

# Components

### Buttons

Primary send, stop, or Speak actions use white with black content. Secondary tools and suggestions use charcoal pills with white labels.

Ask and Imagine use a compact top segment. Model, speed, voice, connector, and generation choices use pill controls with tonal selection.

### Cards & Containers

User prompts use charcoal bubbles. Answers remain unboxed; generated media sits in a bordered rounded frame with compact overlay actions.

### Inputs & Forms

The composer combines multiline text, add, model or speed, microphone, Speak, send, and stop. Native input behavior must inherit dark surfaces, radii, type, and spacing.

### Status & Build Page

Keep generation state, thoughts, stop, model, elapsed time, attachments, feedback, share, and retry near the response.

### Navigation

Use a minimal top shell. History, settings, tasks, companions, and connectors open from the menu rather than a bottom bar.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pure black | Conversation canvas |
| 1 | Charcoal pill | Mode and suggestion |
| 2 | Dark composer | Input and tools |
| 3 | Hairline media frame | Generated content |

### Decorative Depth

Use the Grok mark, tonal charcoal layers, generated images, and subtle edge lines. Avoid atmospheric gradients or decorative illustration.

# States

Keep generation state, thoughts, stop, model, elapsed time, attachments, feedback, share, and retry near the response.

# iOS adaptation

### Touch Targets

Menu, modes, tools, suggestions, voice, send, stop, feedback, and media controls remain at least 44pt.

### Collapsing Strategy

Preserve prompt, answer, composer, model, send or stop, and active mode; collapse suggestions and secondary actions first.

### Image Behavior

Fit generated media to content width, preserve aspect ratio, and keep controls from obscuring the focal subject.

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

- Preserve pure black as the dominant canvas.
- Keep answers readable with generous line spacing.
- Let generated content supply visual color.

### Don't

- Don't introduce a colorful permanent UI palette.
- Don't box every answer section.
- Don't make premium blue the default action color.

# Known gaps

- Connector authorization and generation failure recovery were not fully sampled.
- iPad and landscape layouts were not represented.

</design-context>
