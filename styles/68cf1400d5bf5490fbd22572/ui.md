<design-context>
---
version: 1
platform: iOS
name: DeepSeek-design-analysis
description: "A restrained AI chat workspace built on white, dense black text, a single cobalt action accent, pale blue user bubbles, thin gray separators, compact mode chips, and an anchored composer. Long-form reasoning and answers remain the visual protagonist."
colors:
  primary: "#4D6BFE"
  on-primary: "#FFFFFF"
  primary-soft: "#EEF2FF"
  ink: "#15171B"
  ink-muted: "#777B84"
  ink-subtle: "#AEB2BA"
  canvas: "#FFFFFF"
  surface-1: "#F7F8FA"
  surface-2: "#EEF1F6"
  hairline: "#E7E9ED"
  semantic-success: "#28A66A"
  semantic-danger: "#D84C4C"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  display-md: { fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  headline: { fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.55, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: [12, 16]}
  message-user: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [12, 14]}
  mode-chip: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [6, 8]}
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [12, 14]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

DeepSeek reduces AI chat to a white reading canvas, compact mode selection, and a fixed composer. Reasoning is shown as a subdued intermediate layer before a darker final response.

**Key Characteristics:**
- White full-screen conversation canvas.
- Cobalt send, stop, mode selection, and whale mark.
- Pale-blue user message blocks.
- Dense readable long-form answers.
- Compact Deep Thinking and Search chips beside attachment.

# Non-negotiable visual invariants

- Sampled screens consistently use white full-screen conversation canvas.
- The reference consistently shows cobalt send, stop, mode selection, and whale mark.
- The reference consistently shows pale-blue user message blocks.
- The reference consistently shows dense readable long-form answers.
- The reference consistently shows compact Deep Thinking and Search chips beside attachment.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Send, stop, selected mode, and brand mark.
- **Primary Soft** ({colors.primary-soft}): User messages and selected-chip tint.

### Surface
- **Canvas** ({colors.canvas}): Conversation, drawer, and composer.
- **Surface 1** ({colors.surface-1}): Secondary states and settings groups.
- **Surface 2** ({colors.surface-2}): Disabled controls and subtle selection.
- **Hairline** ({colors.hairline}): Composer and list separation.

### Text
- **Ink** ({colors.ink}): Final answers, prompts, and titles.
- **Ink Muted** ({colors.ink-muted}): Reasoning, timestamps, and support copy.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Completed upload or account state.
- **Danger** ({colors.semantic-danger}): Error and destructive account action.
- **Overlay** ({colors.semantic-overlay}): Drawer and modal focus.

# Typography

### Font Family
- **SF Pro Display** — welcome and major headings.
- **SF Pro Text** — prompts, reasoning, answers, and controls.
- **SF Mono** — code and fixed-width technical output.

### Hierarchy
Use 20–24 points bold for welcome and answer headings, 16 points for conversation, 14 points for controls, and 10–12 points for modes and metadata.

### Principles
- Optimize long answers for reading.
- Separate reasoning through muted color, not tiny text.
- Keep prompt and answer voices distinct.
- Preserve code formatting and list structure.

### Note on Font Substitutes
Use the platform system sans or **Inter**; use **JetBrains Mono** for code when SF Mono is unavailable.

# Screen composition

### Spacing System
Use a 4 points base, 16 points conversation gutters, 12 points message padding, and 24 points between answer sections.

### Grid & Container
The conversation is a single readable column between a compact top bar and an anchored composer; the drawer contains history and account.

### Whitespace Philosophy
Leave broad quiet areas around short chats, then tighten rhythm inside long structured answers.

Surface hierarchy observed in the source:

Keep the conversation flat. Use thin separation and modal overlays only for drawer, settings, and attachment selection.

### Decorative Depth
The whale mark is the only decorative brand element; content and progress state create hierarchy.

# Navigation appearance

The header exposes drawer, current chat title, and new chat; history lives in the drawer and preserves the active conversation.

# Components

### Buttons

Use cobalt circular send or stop controls, compact mode chips, and neutral icon actions for copy, retry, feedback, and share.

### Cards & Containers

Use user-message blocks, reasoning columns, file chips, settings groups, and the anchored composer.

### Inputs & Forms

The composer supports text, file attachment, mode toggles, and send state while remaining readable above the keyboard.

# Imagery and icons

The whale mark is the only decorative brand element; content and progress state create hierarchy.

Treat uploaded images as content. Keep the whale mark small and centered; do not invent a decorative illustration system.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show thinking, searched, generating, stopped, uploaded, error, and completed states with label plus icon or progress control.

# iOS adaptation

### Touch Targets

Keep drawer, new chat, modes, attachment, send, feedback, and share controls at least 44 points.

### Collapsing Strategy

Preserve current conversation, composer, active modes, and new-chat access. Move secondary response actions into overflow.

### Image Behavior

Contain uploaded images and generated media inside the conversation; never use them as a page background.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't fill the chat with decorative cards.
- Don't make every inline action cobalt.
- Don't hide whether search or deep thinking is active.
- Don't collapse long answers into unreadably dense text.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
