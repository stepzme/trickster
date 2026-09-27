<design-context>
---
version: alpha
name: ChatGPT-design-analysis
description: "A nearly monochrome conversational workspace with a white canvas, black text, pale-gray user bubbles and composer, sparse outline icons, black circular voice controls, and a faint violet upgrade accent. Chat, projects, library, GPTs, multimodal input, research, image generation, and settings remain quiet and content-first."
colors:
  primary: "#111111"
  on-primary: "#FFFFFF"
  primary-hover: "#2B2B2B"
  primary-soft: "#F2F2F2"
  accent: "#6C63D9"
  accent-secondary: "#10A37F"
  ink: "#111111"
  ink-muted: "#6F6F73"
  ink-subtle: "#A8A8AC"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F3F3"
  hairline: "#E6E6E6"
  semantic-success: "#10A37F"
  semantic-danger: "#D84A4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

ChatGPT keeps the conversation and composer dominant. Tools, projects, library, model choice, voice, and settings stay one layer away in drawers or compact controls.

**Key Characteristics:**
- White content-first canvas.
- Pale-gray message and suggestion surfaces.
- Black circular voice and stop controls.
- Sparse outline iconography.
- Subtle violet upgrade chip.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Voice, stop, and high-commitment actions.
- **Accent** ({colors.accent}): Upgrade and selected premium state.
- **Secondary Accent** ({colors.accent-secondary}): Positive completion and product identity.

### Surface
- **Canvas** ({colors.canvas}): Conversation, research, library, and settings.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Display** — conversation section headings and settings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Let the response be the main visual object.
- Keep the composer persistent.
- Use labels for non-obvious tools.
- Distinguish user content without heavy chrome.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Conversation is a single readable column with a bottom composer. The drawer groups search, ChatGPT, Library, GPTs, projects, recents, and account.

### Whitespace Philosophy

Use generous open space around short prompts and compact vertical rhythm for long responses.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use only subtle surface tint and sheet separation. Generated media may be visually rich but does not redefine the shell.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

User or generated images appear as content with full-screen review. The product shell has no decorative illustration language.

## Components

### Buttons

Black circular controls handle voice and stop. Text and outline icons handle copy, listen, feedback, share, and sources.

### Pricing Tabs

Model and tool choice use compact menus; the main product avoids persistent bottom tabs.

### Cards & Containers

Suggestion chips, user bubbles, processing cards, sources, and project rows use light neutral surfaces.

### Inputs & Forms

The composer supports text, voice, image, file, and tool selection with a single clear send or stop state.

### Status & Build Page

Show generating, researching, searching, listening, uploading, completed, failed, and saved through text plus control state.

### Navigation

The side drawer holds global destinations; each chat keeps model, edit, and overflow actions at the top.

### Footer

The composer stays above the safe area and expands with content without obscuring the latest response.

## Do's and Don'ts

### Do

- Keep content hierarchy dominant.
- Preserve a persistent composer.
- Label model and tool state.
- Separate sources from prose.
- Keep generated media as content.

### Don't

- Don't add decorative backgrounds.
- Don't use generated images as shell decoration.
- Don't crowd the composer.
- Don't hide stop or cancel.
- Don't over-card long responses.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44px.

### Collapsing Strategy

Preserve chat title, latest content, composer, send or stop, and drawer access. Collapse secondary actions into overflow.

### Image Behavior

Contain generated images in the conversation, then open full screen with save, share, select, and edit actions.

## Iteration Guide

1. Build conversation and composer.
2. Add drawer and history.
3. Add multimodal input and voice.
4. Add research, search, study, and image tools.
5. Add projects, library, subscription, and settings.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 30 available flow names were inventoried; home, text input, image generation, deep research, and settings were image-reviewed.
- Realtime voice animation, file rendering, and model-specific transitions were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
