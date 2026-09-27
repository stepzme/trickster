<design-context>
---
version: alpha
name: DeepSeek-design-analysis
description: "A restrained AI chat workspace built on white, dense black text, a single cobalt action accent, pale blue user bubbles, thin gray separators, compact mode chips, and an anchored composer. Long-form reasoning and answers remain the visual protagonist."
colors:
  primary: "#4D6BFE"
  on-primary: "#FFFFFF"
  primary-hover: "#3C58DE"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  display-md: { fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  headline: { fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.55, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px }
  message-user: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 12px 14px }
  mode-chip: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 6px 8px }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

DeepSeek reduces AI chat to a white reading canvas, compact mode selection, and a fixed composer. Reasoning is shown as a subdued intermediate layer before a darker final response.

**Key Characteristics:**
- White full-screen conversation canvas.
- Cobalt send, stop, mode selection, and whale mark.
- Pale-blue user message blocks.
- Dense readable long-form answers.
- Compact Deep Thinking and Search chips beside attachment.

## Colors

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

## Typography

### Font Family
- **SF Pro Display** — welcome and major headings.
- **SF Pro Text** — prompts, reasoning, answers, and controls.
- **SF Mono** — code and fixed-width technical output.

### Hierarchy
Use 20–24px bold for welcome and answer headings, 16px for conversation, 14px for controls, and 10–12px for modes and metadata.

### Principles
- Optimize long answers for reading.
- Separate reasoning through muted color, not tiny text.
- Keep prompt and answer voices distinct.
- Preserve code formatting and list structure.

### Note on Font Substitutes
Use the platform system sans or **Inter**; use **JetBrains Mono** for code when SF Mono is unavailable.

## Layout

### Spacing System
Use a 4px base, 16px conversation gutters, 12px message padding, and 24px between answer sections.

### Grid & Container
The conversation is a single readable column between a compact top bar and an anchored composer; the drawer contains history and account.

### Whitespace Philosophy
Leave broad quiet areas around short chats, then tighten rhythm inside long structured answers.

## Elevation & Depth
Keep the conversation flat. Use thin separation and modal overlays only for drawer, settings, and attachment selection.

### Decorative Depth
The whale mark is the only decorative brand element; content and progress state create hierarchy.

## Shapes

### Border Radius Scale
Use 10px for chips, 14px for user messages, 18px for composer, 24px for sheets, and full circles for send and stop.

### Photography & Illustration Geometry
Treat uploaded images as content. Keep the whale mark small and centered; do not invent a decorative illustration system.

## Components

### Buttons
Use cobalt circular send or stop controls, compact mode chips, and neutral icon actions for copy, retry, feedback, and share.

### Pricing Tabs
Use compact chips for Deep Thinking and Search; selected state uses a pale cobalt fill and cobalt icon or text.

### Cards & Containers
Use user-message blocks, reasoning columns, file chips, settings groups, and the anchored composer.

### Inputs & Forms
The composer supports text, file attachment, mode toggles, and send state while remaining readable above the keyboard.

### Status & Build Page
Show thinking, searched, generating, stopped, uploaded, error, and completed states with label plus icon or progress control.

### Navigation
The header exposes drawer, current chat title, and new chat; history lives in the drawer and preserves the active conversation.

### Footer
The composer is the footer and keeps modes, attachment, and send visible above the safe area.

## Do's and Don'ts

### Do
- Keep answer text visually dominant.
- Show reasoning as a distinct muted layer.
- Keep modes visible before submission.
- Preserve structured content and code.

### Don't
- Don't fill the chat with decorative cards.
- Don't make every inline action cobalt.
- Don't hide whether search or deep thinking is active.
- Don't collapse long answers into unreadably dense text.

## Responsive Behavior

### Breakpoints
Use the single-column reference up to 767px, a centered 720px reading column on tablet, and drawer plus conversation above 1024px.

### Touch Targets
Keep drawer, new chat, modes, attachment, send, feedback, and share controls at least 44px.

### Collapsing Strategy
Preserve current conversation, composer, active modes, and new-chat access. Move secondary response actions into overflow.

### Image Behavior
Contain uploaded images and generated media inside the conversation; never use them as a page background.

## Iteration Guide
1. Build the conversation and composer.
2. Add streaming, stop, retry, and feedback.
3. Add Deep Thinking and Search.
4. Add files, sharing, and history.
5. Add account and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 9 flows were inventoried; Home screen, Chatting, and Deep Thinking Generation were image-reviewed.
- Search citations, file rendering, and error recovery were not deeply sampled.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
