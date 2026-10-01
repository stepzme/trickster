<design-context>
---
version: 1
platform: iOS
name: ChatGPT-design-analysis
description: "A nearly monochrome conversational workspace with a white canvas, black text, pale-gray user bubbles and composer, sparse outline icons, black circular voice controls, and a faint violet upgrade accent. Chat, projects, library, GPTs, multimodal input, research, image generation, and settings remain quiet and content-first."
colors:
  primary: "#111111"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

ChatGPT keeps the conversation and composer dominant. Tools, projects, library, model choice, voice, and settings stay one layer away in drawers or compact controls.

**Key Characteristics:**
- White content-first canvas.
- Pale-gray message and suggestion surfaces.
- Black circular voice and stop controls.
- Sparse outline iconography.
- Subtle violet upgrade chip.

# Non-negotiable visual invariants

- Sampled screens consistently use white content-first canvas.
- The reference consistently shows pale-gray message and suggestion surfaces.
- The reference consistently shows black circular voice and stop controls.
- The reference consistently shows sparse outline iconography.
- Sampled screens consistently use subtle violet upgrade chip.

# Color and surfaces

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

# Typography

### Font Family

- **SF Pro Display** — conversation section headings and settings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

### Principles

- Let the response be the main visual object.
- Keep the composer persistent.
- Use labels for non-obvious tools.
- Distinguish user content without heavy chrome.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

### Grid & Container

Conversation is a single readable column with a bottom composer. The drawer groups search, ChatGPT, Library, GPTs, projects, recents, and account.

### Whitespace Philosophy

Use generous open space around short prompts and compact vertical rhythm for long responses.

Surface hierarchy observed in the source:

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use only subtle surface tint and sheet separation. Generated media may be visually rich but does not redefine the shell.

# Navigation appearance

The side drawer holds global destinations; each chat keeps model, edit, and overflow actions at the top.

# Components

### Buttons

Black circular controls handle voice and stop. Text and outline icons handle copy, listen, feedback, share, and sources.

### Cards & Containers

Suggestion chips, user bubbles, processing cards, sources, and project rows use light neutral surfaces.

### Inputs & Forms

The composer supports text, voice, image, file, and tool selection with a single clear send or stop state.

# Imagery and icons

Use only subtle surface tint and sheet separation. Generated media may be visually rich but does not redefine the shell.

User or generated images appear as content with full-screen review. The product shell has no decorative illustration language.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show generating, researching, searching, listening, uploading, completed, failed, and saved through text plus control state.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44 points.

### Collapsing Strategy

Preserve chat title, latest content, composer, send or stop, and drawer access. Collapse secondary actions into overflow.

### Image Behavior

Contain generated images in the conversation, then open full screen with save, share, select, and edit actions.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add decorative backgrounds.
- Don't use generated images as shell decoration.
- Don't crowd the composer.
- Don't hide stop or cancel.
- Don't over-card long responses.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
