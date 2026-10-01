<design-context>
---
version: 1
platform: iOS
name: Alice-AI-assistant-design-analysis
description: "A sparse chat-first assistant built from near-white surfaces, black text, soft gray controls, and a single violet-to-blue brand gradient. Conversation, attachments, generation controls, and Pro states remain readable through generous whitespace and compact rounded actions."
colors:
  primary: "#7A4CF5"
  on-primary: "#FFFFFF"
  primary-soft: "#EEE8FF"
  accent-blue: "#30BCEB"
  ink: "#19171D"
  ink-muted: "#77747D"
  ink-subtle: "#AAA7AF"
  canvas: "#FCFAFD"
  surface-1: "#FFFFFF"
  surface-2: "#F2F0F3"
  hairline: "#E6E3E8"
  semantic-success: "#28B56C"
  semantic-danger: "#E34D58"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 13, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 36, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  button-dark: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [10, 12]}
  mode-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 10]}
  settings-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [12, 16]}
---

# Overview

Alice keeps AI interaction visually quiet: a near-white chat canvas, black typography, soft controls, and one violet brand signal. Gradient moments are reserved for entry and Pro education.

**Key Characteristics:**
- Spacious conversation canvas.
- Violet circular send action and mode chips.
- Minimal black line icons.
- Soft rounded composer and settings cards.
- Full-screen blue-violet Pro gradient.
- Generated media shown as content, not decoration.

# Non-negotiable visual invariants

- Sampled screens consistently use spacious conversation canvas.
- Sampled screens consistently use violet circular send action and mode chips.
- The reference consistently shows minimal black line icons.
- The reference consistently shows soft rounded composer and settings cards.
- Sampled screens consistently use full-screen blue-violet Pro gradient.
- The reference consistently shows generated media shown as content, not decoration.

# Color and surfaces

### Brand & Accent
- **Alice Violet** ({colors.primary}): Send, active modes, Pro, and selected toggles.
- **Blue** ({colors.accent-blue}): Gradient support and brand glow.
- **Soft Violet** ({colors.primary-soft}): Active mode and Pro chip background.

### Surface
- **Canvas** ({colors.canvas}): Conversation and settings base.
- **Surface 1** ({colors.surface-1}): Composer, cards, and menus.
- **Surface 2** ({colors.surface-2}): Quiet buttons and inactive controls.
- **Hairline** ({colors.hairline}): Dividers and input boundaries.

### Text
- **Ink** ({colors.ink}): Prompts, responses, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Explanations and timestamps.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled text.

### Semantic
- **Success** ({colors.semantic-success}): Completed upload or copied state.
- **Danger** ({colors.semantic-danger}): Deletion and error.
- **Overlay** ({colors.semantic-overlay}): Media preview and context menu scrim.

# Typography

### Font Family

- **System Sans** — all chat, authentication, generation, and settings UI.
- **System Mono** — code fragments inside assistant output only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40 points | 800 | Launch or Pro statement |
| `{typography.display-md}` | 26 points | 700 | Page heading |
| `{typography.headline}` | 22 points | 700 | Empty chat or setting section |
| `{typography.card-title}` | 16 points | 600 | Mode or plan title |
| `{typography.body}` | 15 points | 400 | Conversation |
| `{typography.caption}` | 11 points | 400 | Metadata and disclaimer |
| `{typography.button}` | 15 points | 600 | Actions |

### Principles

- Optimize response text for long reading.
- Keep prompt and answer hierarchy distinct without heavy bubbles.
- Use bold inside structured answers sparingly.
- Reserve display type for entry and subscription moments.

### Note on Font Substitutes

Use **YS Text**, **SF Pro**, **Inter**, or **Roboto**. Use a system mono for code.

# Screen composition

### Spacing System

Use a 4 points base. Chat gutters are 12–16 points, paragraph spacing 12 points, and composer controls use 8–10 points gaps.

### Grid & Container

Conversation is one column with a fixed composer. Attachment menus use vertical lists. Generated image variants may use a two-column grid inside the result.

### Whitespace Philosophy

Whitespace is functional: it separates turns, preserves reading focus, and prevents the composer from competing with generated content.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-white canvas | Conversation |
| 1 | Soft white or gray control | Composer and settings |
| 2 | Floating popover | Attachment choice and context menu |
| 3 | Dark media overlay | Generated-image preview |

### Decorative Depth

Use subtle violet glow and gradient only around the Alice mark or Pro screens. Avoid decorative shadows in the conversation.

# Navigation appearance

History opens from the top-left; new chat from the top-right. Profile and Pro sit at the bottom of history. Conversation has no bottom tab bar.

# Components

### Buttons

Chat actions use violet circles or quiet icon buttons. Authentication uses dark full-width buttons. Pro actions use white over a gradient or violet on white.

### Cards & Containers

Conversation avoids heavy bubbles. Settings uses large white rounded cards. Generated images sit in a compact variant grid with parameters below.

### Inputs & Forms

The composer combines prompt, attachment, media, active-mode chip, and send. Authentication fields use bold outlines and large touch areas.

# Imagery and icons

Use subtle violet glow and gradient only around the Alice mark or Pro screens. Avoid decorative shadows in the conversation.

Generated media uses its requested aspect ratio and opens into an edge-to-edge preview. Avatar photos remain circular; brand glow remains centered and fully visible.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Uploads, processing, copied links, and generation progress use concise inline or toast feedback. Disclaimers remain visible near chat history and answers.

# iOS adaptation

### Touch Targets

Maintain 44 points for composer actions, attachment menu rows, history items, toggles, and media controls.

### Collapsing Strategy

Keep chat one-column. Collapse generated variants from two columns to one before cropping. Allow mode chips to wrap above the composer.

### Image Behavior

Contain uploaded and generated media until opened. Preview at the requested ratio; allow a full-screen viewer for inspection and download.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't wrap every answer in a colored bubble.
- Don't hide active mode state in an icon.
- Don't crop generated media without user intent.
- Don't mix Pro upsell into ordinary answers.
- Don't crowd chat with persistent navigation chrome.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
