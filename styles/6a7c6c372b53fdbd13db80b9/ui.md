<design-context>
---
version: 1
platform: iOS
name: Craft-design-analysis
description: "A calm document workspace on a misty white-gray canvas with soft translucent chrome, black typography, pale cyan selection, rounded floating navigation, miniature document previews, sparse line icons, and a small multicolor assistant accent. Content stays dominant while organization and creation controls hover lightly around it."
colors:
  primary: "#22A8E8"
  on-primary: "#FFFFFF"
  primary-soft: "#DDF4FF"
  accent: "#EF4EC4"
  ink: "#17181B"
  ink-muted: "#74777F"
  ink-subtle: "#A9ADB5"
  canvas: "#F8F8FB"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F5"
  hairline: "#E4E5EA"
  semantic-success: "#27B89A"
  semantic-warning: "#F0C419"
  semantic-danger: "#D94B4B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: [12, 16]}
  document-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  grouped-list: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [8, 0]}
  floating-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
---

# Overview

Craft keeps documents and tasks central while navigation floats in soft white capsules. A quiet gray-white canvas, black type, cyan selection, and miniature page previews make a spacious productivity shell.

**Key Characteristics:**
- Misty white-gray canvas with nearly borderless groups.
- Floating rounded bottom controls.
- Cyan selection and small multicolor assistant accent.
- Document thumbnails as the primary visual content.
- Calm line icons and generous editable space.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Misty white-gray canvas with nearly borderless groups.
- The reviewed screens show this treatment: Floating rounded bottom controls.
- The reviewed screens show this treatment: Cyan selection and small multicolor assistant accent.
- The reviewed screens show this treatment: Document thumbnails as the primary visual content.
- The reviewed screens show this treatment: Calm line icons and generous editable space.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Selected navigation, active folder, and contextual emphasis.
- **Primary Soft** ({colors.primary-soft}): Selection halos and focused document outlines.
- **Accent** ({colors.accent}): One edge of the multicolor assistant control.

### Surface
- **Canvas** ({colors.canvas}): Home, task lists, and navigation background.
- **Surface 1** ({colors.surface-1}): Floating controls and document previews.
- **Surface 2** ({colors.surface-2}): Search and secondary selection.
- **Hairline** ({colors.hairline}): Minimal list separation.

### Text
- **Ink** ({colors.ink}): Screen headings, document titles, and task labels.
- **Ink Muted** ({colors.ink-muted}): Secondary metadata.
- **Ink Subtle** ({colors.ink-subtle}): Empty-state guidance.

### Semantic
- **Success** ({colors.semantic-success}): Completed task or connected state.
- **Warning** ({colors.semantic-warning}): Starred and reminder emphasis.
- **Danger** ({colors.semantic-danger}): Destructive actions.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family
- **SF Pro Display** — screen and document headings.
- **SF Pro Text** — navigation, tasks, folders, and document body.
- **SF Mono** — code blocks and technical content inside documents.

### Principles
- Let authored content define its own hierarchy.
- Keep shell labels compact and quiet.
- Use strong black only for current context.
- Preserve comfortable reading line height.

### Note on Font Substitutes
Use the platform system sans or **Inter**. Use **JetBrains Mono** for code when SF Mono is unavailable.

# Screen composition

### Spacing System
Use a 4pt base, 16pt screen gutters, 12pt row rhythm, 16pt card gaps, and large open writing areas.

### Grid & Container
Home stacks search, horizontally scrolling recent documents, structured groups, and floating navigation. Document view becomes a mostly empty editable canvas.

### Whitespace Philosophy
Whitespace is functional writing space. Avoid filling empty document or task states with decorative panels.

# Navigation appearance

Home, Tasks, and Calendar live in the left floating capsule; assistant and create actions occupy a separate right capsule.

# Components

### Buttons
Use black circular create controls, white floating icon groups, and cyan selected icons. Text buttons remain understated.

Task views and filters use soft pill segments with a cyan active state; subscription choices may reuse the same selection logic.

### Cards & Containers
Use document previews, folder rows, task groups, empty placeholders, and floating control capsules.

### Inputs & Forms
Search uses a pale field with a keyword selector. Document editing keeps the canvas clear and moves formatting into contextual tools.

### Status & Build Page
Show starred, shared, connected, due, completed, reminder, sync, and download state with icon plus concise metadata.

### Navigation
Home, Tasks, and Calendar live in the left floating capsule; assistant and create actions occupy a separate right capsule.

Floating navigation remains above the safe area and never covers editable content or the current task.

# Imagery and icons

Use soft surface contrast and restrained blur for floating navigation, menus, and controls; avoid pronounced shadows.

### Decorative Depth
Document previews and subtle translucent chrome create depth. The shell does not need atmospheric imagery.

# States

Show starred, shared, connected, due, completed, reminder, sync, and download state with icon plus concise metadata.

# iOS adaptation

### Touch Targets
Keep navigation, preview cards, folder rows, task checks, overflow, and creation controls at least 44pt.

### Collapsing Strategy
Preserve current document or task, create, search, and navigation. Move organization controls into a sidebar or sheet as width changes.

### Image Behavior
Contain document thumbnails and inline media with readable aspect ratios; avoid decorative cropping of authored content.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do
- Keep content visually dominant.
- Use soft floating controls around the canvas.
- Make document and task state explicit.
- Preserve generous writing space.

### Don't
- Don't wrap every row in a card.
- Don't use strong gradients across the workspace.
- Don't turn the assistant accent into a page background.
- Don't cover document content with persistent controls.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 153 flow names were inventoried; Home, Document details, and Tasks were image-reviewed.
- Rich editor formatting, collaboration, publishing, and assistant interactions were not deeply sampled.
- No coherent decorative illustration language appeared in reviewed screens.

</design-context>
