<design-context>
---
version: alpha
name: Alice-AI-assistant-design-analysis
description: "A sparse chat-first assistant built from near-white surfaces, black text, soft gray controls, and a single violet-to-blue brand gradient. Conversation, attachments, generation controls, and Pro states remain readable through generous whitespace and compact rounded actions."
colors:
  primary: "#7A4CF5"
  on-primary: "#FFFFFF"
  primary-hover: "#6938E7"
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
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15px, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 13px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 36px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  button-dark: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 10px 12px }
  mode-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 10px }
  settings-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 12px 16px }
---

## Overview

Alice keeps AI interaction visually quiet: a near-white chat canvas, black typography, soft controls, and one violet brand signal. Gradient moments are reserved for entry and Pro education.

**Key Characteristics:**
- Spacious conversation canvas.
- Violet circular send action and mode chips.
- Minimal black line icons.
- Soft rounded composer and settings cards.
- Full-screen blue-violet Pro gradient.
- Generated media shown as content, not decoration.

## Colors

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

## Typography

### Font Family

- **System Sans** — all chat, authentication, generation, and settings UI.
- **System Mono** — code fragments inside assistant output only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 800 | Launch or Pro statement |
| `{typography.display-md}` | 26px | 700 | Page heading |
| `{typography.headline}` | 22px | 700 | Empty chat or setting section |
| `{typography.card-title}` | 16px | 600 | Mode or plan title |
| `{typography.body}` | 15px | 400 | Conversation |
| `{typography.caption}` | 11px | 400 | Metadata and disclaimer |
| `{typography.button}` | 15px | 600 | Actions |

### Principles

- Optimize response text for long reading.
- Keep prompt and answer hierarchy distinct without heavy bubbles.
- Use bold inside structured answers sparingly.
- Reserve display type for entry and subscription moments.

### Note on Font Substitutes

Use **YS Text**, **SF Pro**, **Inter**, or **Roboto**. Use a system mono for code.

## Layout

### Spacing System

Use a 4px base. Chat gutters are 12–16px, paragraph spacing 12px, and composer controls use 8–10px gaps.

### Grid & Container

Conversation is one column with a fixed composer. Attachment menus use vertical lists. Generated image variants may use a two-column grid inside the result.

### Whitespace Philosophy

Whitespace is functional: it separates turns, preserves reading focus, and prevents the composer from competing with generated content.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-white canvas | Conversation |
| 1 | Soft white or gray control | Composer and settings |
| 2 | Floating popover | Attachment choice and context menu |
| 3 | Dark media overlay | Generated-image preview |

### Decorative Depth

Use subtle violet glow and gradient only around the Alice mark or Pro screens. Avoid decorative shadows in the conversation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Small controls |
| `{rounded.sm}` | 10px | Auth buttons and fields |
| `{rounded.md}` | 14px | Menus and media tiles |
| `{rounded.lg}` | 20px | Composer and settings card |
| `{rounded.pill}` | full | Send, mode chips, and Pro action |

### Photography & Illustration Geometry

Generated media uses its requested aspect ratio and opens into an edge-to-edge preview. Avatar photos remain circular; brand glow remains centered and fully visible.

## Components

### Buttons

Chat actions use violet circles or quiet icon buttons. Authentication uses dark full-width buttons. Pro actions use white over a gradient or violet on white.

### Pricing Tabs

No multi-tier pricing tabs were observed. Pro uses a single plan path and a clear status chip when active.

### Cards & Containers

Conversation avoids heavy bubbles. Settings uses large white rounded cards. Generated images sit in a compact variant grid with parameters below.

### Inputs & Forms

The composer combines prompt, attachment, media, active-mode chip, and send. Authentication fields use bold outlines and large touch areas.

### Status & Build Page

Uploads, processing, copied links, and generation progress use concise inline or toast feedback. Disclaimers remain visible near chat history and answers.

### Navigation

History opens from the top-left; new chat from the top-right. Profile and Pro sit at the bottom of history. Conversation has no bottom tab bar.

### Footer

The fixed composer is the functional footer. Generated-media actions appear above it or on the result preview.

## Do's and Don'ts

### Do

- Keep the composer visible and calm.
- Show active modes as removable chips.
- Preserve readable long-form answers.
- Put generation parameters beside results.
- Reserve gradient for brand and Pro moments.

### Don't

- Don't wrap every answer in a colored bubble.
- Don't hide active mode state in an icon.
- Don't crop generated media without user intent.
- Don't mix Pro upsell into ordinary answers.
- Don't crowd chat with persistent navigation chrome.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center readable chat column |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Stack media parameters and reduce grid columns |

### Touch Targets

Maintain 44px for composer actions, attachment menu rows, history items, toggles, and media controls.

### Collapsing Strategy

Keep chat one-column. Collapse generated variants from two columns to one before cropping. Allow mode chips to wrap above the composer.

### Image Behavior

Contain uploaded and generated media until opened. Preview at the requested ratio; allow a full-screen viewer for inspection and download.

## Iteration Guide

1. Establish readable chat and fixed composer.
2. Add explicit mode chips and attachment menu.
3. Implement history and settings.
4. Add generated-media result controls.
5. Apply gradient only to brand entry and Pro.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 25-flow inventory was complete; representative full leaf flows were inspected.
- Video and audio playback motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
