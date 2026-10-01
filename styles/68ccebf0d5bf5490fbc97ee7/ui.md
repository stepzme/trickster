<design-context>
---
version: 1
platform: iOS
name: Claude-design-analysis
description: "A warm, editorial conversational workspace with an off-white paper canvas, dark ink, restrained terracotta actions, serif headings, fine outline icons, neutral rounded composers, and compact blue system toggles. Chats, artifacts, image and file input, code, voice, capabilities, privacy, subscription, and settings remain calm and text-led."
colors:
  primary: "#D97757"
  on-primary: "#FFFFFF"
  primary-soft: "#F7EAE5"
  accent: "#191714"
  accent-secondary: "#2F80ED"
  ink: "#1C1A18"
  ink-muted: "#706D68"
  ink-subtle: "#AAA69F"
  canvas: "#F8F7F3"
  surface-1: "#FFFFFF"
  surface-2: "#EFEEE9"
  hairline: "#DFDDD6"
  semantic-success: "#3A9B6C"
  semantic-danger: "#C94A47"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Georgia, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: Georgia, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: Georgia, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: Georgia, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
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

Claude treats chat like an editorial document. Warm paper tones, serif titles, modest terracotta actions, and a large rounded composer keep conversation, artifacts, and code approachable.

**Key Characteristics:**
- Warm off-white paper canvas.
- Serif product and model headings.
- Terracotta primary actions.
- Fine black outline icons.
- Large rounded bottom composer.

# Non-negotiable visual invariants

- Sampled screens consistently use warm off-white paper canvas.
- The reference consistently shows serif product and model headings.
- The reference consistently shows terracotta primary actions.
- The reference consistently shows fine black outline icons.
- The reference consistently shows large rounded bottom composer.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): New chat, send, and selected product actions.
- **Accent** ({colors.accent}): Body ink, voice, and strong controls.
- **Secondary Accent** ({colors.accent-secondary}): Native capability toggles and links.

### Surface
- **Canvas** ({colors.canvas}): Chat, drawer, artifacts, and settings.
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

- **Georgia** — product name, model, and editorial headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

### Principles

- Keep prose readable and calm.
- Use serif type for identity, not long body text.
- Let artifacts remain distinct from chat.
- Keep capability state explicit.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

### Grid & Container

Chat is a single readable column above a large composer. The drawer groups New chat, Chats, Artifacts, recents, account, and settings.

### Whitespace Philosophy

Use paper-like margins and generous breathing room around short responses; tighten only for code and structured output.

Surface hierarchy observed in the source:

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use nearly flat warm surfaces and light modal sheets. Content and typography create hierarchy.

# Navigation appearance

The drawer holds global chat and artifact destinations; settings opens as a focused native sheet.

# Components

### Buttons

Terracotta circles send or start a new chat; black circular voice controls and neutral text actions handle secondary behavior.

### Cards & Containers

Composer, recent row, artifact chip, incognito notice, and settings sections use restrained rounded surfaces.

### Inputs & Forms

The composer supports text, image, file, voice, tools, and app connections with clear send state.

# Imagery and icons

Use nearly flat warm surfaces and light modal sheets. Content and typography create hierarchy.

User images and generated artifacts appear as content. Small ghost and capability icons are functional, not a separate illustration system.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show incognito, generating, artifact created, connected app, upload, voice, error, and capability enabled through label plus icon.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44 points.

### Collapsing Strategy

Preserve model, content, composer, send or voice, and drawer access. Move secondary response actions into overflow.

### Image Behavior

Contain uploaded images and artifacts as conversation content; never use them as page background or decoration.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add glossy gradients.
- Don't use decorative illustrations in the shell.
- Don't make every action terracotta.
- Don't crowd the composer.
- Don't render long code as body prose.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 11 available flow names were inventoried; home, code, image and file input, voice, capabilities, and settings were image-reviewed.
- Artifact editing, realtime voice animation, and connected-app authorization were not fully assessed.
- No tablet or desktop captures were present.

</design-context>
