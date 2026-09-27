<design-context>
---
version: alpha
name: Grok-design-analysis
description: "A stark black AI workspace built from charcoal pills, compact white type, dark rounded composer surfaces, and occasional electric blue subscription emphasis. Conversation, voice, connectors, and image generation share one minimal shell with generated content providing nearly all visual color."
colors: {primary: "#F5F5F5", on-primary: "#111111", primary-hover: "#FFFFFF", primary-focus: "#D9D9D9", ink: "#F5F5F5", ink-muted: "#B0B0B0", ink-subtle: "#777777", ink-tertiary: "#4E4E4E", canvas: "#000000", surface-1: "#1D1D1D", surface-2: "#282828", surface-3: "#343434", surface-4: "#414141", hairline: "#343434", hairline-strong: "#4A4A4A", hairline-tertiary: "#5D5D5D", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F1", inverse-surface-2: "#E2E2E2", inverse-ink: "#111111", brand-secure: "#2F72FF", semantic-success: "#3DBB7C", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 600, lineHeight: 1.06, letterSpacing: -0.9px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 600, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 600, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.46, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 11px 16px}
  prompt-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 10px 14px}
  user-message: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 12px}
  media-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 2px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
---
## Overview

Grok is a deliberately stark AI workspace. Black canvas and charcoal controls recede behind prompts, long answers, voice, connectors, and generated media.

**Key Characteristics:** pure black canvas, white type, charcoal pills, large dark composer, segmented Ask and Imagine modes, generated-content color, compact icon actions, and occasional blue upgrade emphasis.

## Colors

### Brand & Accent

White is the primary high-contrast action and text color. Electric blue is rare and reserved for SuperGrok or subscription emphasis.

### Surface

Pure black anchors every screen. Charcoal steps define composer, suggestions, menus, user prompts, and controls without visible shadow.

### Text

Soft white carries answers and prompts. Mid-gray supports thoughts, timestamps, helper text, and secondary actions.

### Semantic

White indicates enabled or selected action, blue marks premium promotion, green confirms success, and red is reserved for destructive or failed states.

## Typography

### Font Family

Use SF Pro Display for sparse headings and SF Pro Text for prompts, answers, modes, controls, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 600 | Empty-state or mode title |
| headline | 21px | 600 | Answer section |
| card-title | 16px | 500 | Tool or media title |
| body | 14px | 400 | Prompt and answer |
| caption | 10px | 400 | Mode and timing |

### Principles

- Let the prompt and response dominate the reading order.
- Use white weight and spacing rather than many surface colors.
- Keep control labels short and conversational.

### Note on Font Substitutes

Use the platform sans with strong dark-mode rendering and readable long-form line spacing.

## Layout

### Spacing System

Use a 4px base, 10–14px chip padding, 16–20px response spacing, and generous empty canvas above the composer.

### Grid & Container

A minimal top bar holds menu, Ask or Imagine, and a contextual action. The conversation uses one column with the composer anchored at the bottom.

### Whitespace Philosophy

Black negative space is the visual system. Avoid adding panels unless they support a prompt, tool, or generated asset.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pure black | Conversation canvas |
| 1 | Charcoal pill | Mode and suggestion |
| 2 | Dark composer | Input and tools |
| 3 | Hairline media frame | Generated content |

### Decorative Depth

Use the Grok mark, tonal charcoal layers, generated images, and subtle edge lines. Avoid atmospheric gradients or decorative illustration.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Compact menu |
| rounded-md | 12px | Tool control |
| rounded-lg | 18px | User prompt and media |
| rounded-xl | 24px | Composer |
| rounded-full | full | Mode and suggestion pills |

### Photography & Illustration Geometry

Generated media uses large rectangles with rounded corners and a thin dark frame. It is output content, not persistent interface decoration.

## Components

### Buttons

Primary send, stop, or Speak actions use white with black content. Secondary tools and suggestions use charcoal pills with white labels.

### Pricing Tabs

Ask and Imagine use a compact top segment. Model, speed, voice, connector, and generation choices use pill controls with tonal selection.

### Cards & Containers

User prompts use charcoal bubbles. Answers remain unboxed; generated media sits in a bordered rounded frame with compact overlay actions.

### Inputs & Forms

The composer combines multiline text, add, model or speed, microphone, Speak, send, and stop. Native input behavior must inherit dark surfaces, radii, type, and spacing.

### Status & Build Page

Keep generation state, thoughts, stop, model, elapsed time, attachments, feedback, share, and retry near the response.

### Navigation

Use a minimal top shell. History, settings, tasks, companions, and connectors open from the menu rather than a bottom bar.

### Footer

No footer; the dark composer owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve pure black as the dominant canvas.
- Keep answers readable with generous line spacing.
- Let generated content supply visual color.

### Don't

- Don't introduce a colorful permanent UI palette.
- Don't box every answer section.
- Don't make premium blue the default action color.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten tool rail and composer |
| Standard | 375–430px | Default conversation |
| Wide | 431px+ | Cap reading width and expand media |

### Touch Targets

Menu, modes, tools, suggestions, voice, send, stop, feedback, and media controls remain at least 44px.

### Collapsing Strategy

Preserve prompt, answer, composer, model, send or stop, and active mode; collapse suggestions and secondary actions first.

### Image Behavior

Fit generated media to content width, preserve aspect ratio, and keep controls from obscuring the focal subject.

## Iteration Guide

Tune Home and text input first, then answer states, voice, connectors, image generation, attachments, history, tasks, and settings.

## Known Gaps

- Connector authorization and generation failure recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
