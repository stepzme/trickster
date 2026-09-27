<design-context>
---
version: alpha
name: Google-Gemini-design-analysis
description: "A quiet AI conversation interface with an expansive white canvas, a blue-to-violet greeting accent, soft gray prompt chips, pale blue user messages, and a large rounded composer anchored to the bottom. Minimal chrome keeps the prompt, generated answer, tools, and source-rich content in focus."
colors: {primary: "#4285F4", on-primary: "#FFFFFF", primary-hover: "#5A95F5", primary-focus: "#2B6ED7", ink: "#1F1F1F", ink-muted: "#5F6368", ink-subtle: "#8A8D91", ink-tertiary: "#BDC1C6", canvas: "#FFFFFF", surface-1: "#F8F9FA", surface-2: "#F1F3F4", surface-3: "#E8EAED", surface-4: "#DADCE0", hairline: "#E4E6E8", hairline-strong: "#C9CDD2", hairline-tertiary: "#ADB3BA", inverse-canvas: "#202124", inverse-surface-1: "#303134", inverse-surface-2: "#46484C", inverse-ink: "#FFFFFF", brand-secure: "#7B61FF", semantic-success: "#34A853", semantic-overlay: "#202124"}
typography:
  display-xl: {fontFamily: Google Sans, fontSize: 38px, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: Google Sans, fontSize: 30px, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: Google Sans, fontSize: 25px, fontWeight: 500, lineHeight: 1.16, letterSpacing: -0.2px}
  headline: {fontFamily: Google Sans, fontSize: 21px, fontWeight: 500, lineHeight: 1.22, letterSpacing: -0.1px}
  card-title: {fontFamily: Google Sans Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0}
  subhead: {fontFamily: Google Sans Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: Google Sans Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0}
  body: {fontFamily: Google Sans Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body-sm: {fontFamily: Google Sans Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: Google Sans Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  button: {fontFamily: Google Sans Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: Google Sans Text, fontSize: 11px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: Roboto Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 11px 16px}
  prompt-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px}
  user-message: {backgroundColor: "#F0F4FC", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 14px 12px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  tool-menu: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px}
---
## Overview

Google Gemini is an expansive, low-chrome conversation canvas. A soft blue-violet greeting establishes identity, while the prompt, response, generated media, and bottom composer remain calm and utilitarian.

**Key Characteristics:** white canvas, gradient greeting, pale prompt chips, rounded bottom composer, pale blue user bubbles, compact tool menu, minimal header, rich answer content, and sparse icon actions.

## Colors

### Brand & Accent

Google blue anchors active controls and blends toward violet or pink only in the greeting and Gemini sparkle. Most interaction remains neutral.

### Surface

White fills the conversation. Very pale gray groups prompt chips, menus, and composer controls; pale blue separates the user prompt.

### Text

Near-black carries prompts, answers, and titles. Medium gray supports helper text, model labels, and disclaimers.

### Semantic

Blue indicates active or send state, multicolor sparkle identifies AI generation, green confirms completion, and red is reserved for errors.

## Typography

### Font Family

Use Google Sans for greetings and headings and Google Sans Text for prompts, answers, controls, citations, and disclaimers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 500 | Greeting |
| headline | 21px | 500 | Answer section |
| card-title | 16px | 500 | Tool or suggestion |
| body | 14px | 400 | Prompt and answer |
| caption | 10px | 400 | Model and disclaimer |

### Principles

- Keep the prompt and answer as the primary reading sequence.
- Use moderate weights and generous line height for long responses.
- Let content type, not decorative chrome, create hierarchy.

### Note on Font Substitutes

Use Google Sans where licensed; otherwise use Roboto or the platform sans with open shapes and neutral proportions.

## Layout

### Spacing System

Use a 4px base, 12–16px control gaps, 16–20px answer spacing, and generous empty space above the initial composer.

### Grid & Container

The header stays minimal, content uses one readable column, and a wide rounded composer remains anchored near the bottom safe area.

### Whitespace Philosophy

Whitespace keeps the system calm and leaves room for unpredictable answer length. Avoid framing every response block as a card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Conversation |
| 1 | Pale chip or bubble | Prompt and suggestion |
| 2 | Rounded composer | Input and tools |
| 3 | Floating tool menu | Mode selection |

### Decorative Depth

Use a restrained gradient wordmark or sparkle, soft surface contrast, generated media, maps, and source-rich answer content. Avoid ornamental background gradients.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Menu row |
| rounded-md | 12px | Prompt chip |
| rounded-lg | 18px | User message |
| rounded-xl | 24px | Composer |
| rounded-full | full | Model and voice controls |

### Photography & Illustration Geometry

Generated images, maps, and media use large edge-aligned rectangles with modest rounding. Do not treat generated content as the interface illustration style.

## Components

### Buttons

Send uses a compact high-contrast icon action. Secondary actions are neutral icon buttons or pale pills; active generation may use blue.

### Pricing Tabs

Model choice and tools use compact pills or a floating menu with icon, label, and clear selected state.

### Cards & Containers

Suggestion chips are lightly outlined or tonal. User prompts use pale blue bubbles; answers generally remain unboxed in the reading column.

### Inputs & Forms

The composer combines multiline text, add, tools, model, voice, and send. Native input behavior must inherit these surfaces, radii, typography, spacing, and blue focus.

### Status & Build Page

Keep generating state, stop action, model, attached media, citations, feedback, and accuracy disclaimer near the response they affect.

### Navigation

Use a minimal top bar with menu, conversation title or Gemini label, and avatar. Conversation history lives behind the menu rather than a persistent bottom bar.

### Footer

No footer; the rounded composer owns the bottom safe area.

## Do's and Don'ts

### Do

- Keep the conversation canvas quiet and content-led.
- Use the gradient accent sparingly for Gemini identity.
- Preserve readable answer width and generous line height.

### Don't

- Don't wrap every paragraph in a card.
- Don't use generated imagery as permanent UI decoration.
- Don't let tool controls compete with the prompt field.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten chips and composer tools |
| Standard | 375–430px | Default conversation |
| Wide | 431px+ | Widen reading column with capped line length |

### Touch Targets

Menu, suggestions, add, tools, model, voice, send, feedback, and media actions remain at least 44px.

### Collapsing Strategy

Preserve prompt, answer, composer, model, send or stop, and citations; collapse suggestion chips and secondary response actions first.

### Image Behavior

Fit generated images and maps to content width, preserve their aspect ratio, and keep actions and captions outside the visual.

## Iteration Guide

Tune empty Home and text input first, then streaming answer, tool menu, image generation, maps, citations, history, and attachments.

## Known Gaps

- Source expansion, history management, and error recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
