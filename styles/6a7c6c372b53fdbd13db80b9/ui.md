<design-context>
---
version: alpha
name: Craft-design-analysis
description: "A calm document workspace on a misty white-gray canvas with soft translucent chrome, black typography, pale cyan selection, rounded floating navigation, miniature document previews, sparse line icons, and a small multicolor assistant accent. Content stays dominant while organization and creation controls hover lightly around it."
colors:
  primary: "#22A8E8"
  on-primary: "#FFFFFF"
  primary-hover: "#138FC9"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px }
  document-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  grouped-list: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8px 0 }
  floating-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px }
---

## Overview

Craft keeps documents and tasks central while navigation floats in soft white capsules. A quiet gray-white canvas, black type, cyan selection, and miniature page previews make a spacious productivity shell.

**Key Characteristics:**
- Misty white-gray canvas with nearly borderless groups.
- Floating rounded bottom controls.
- Cyan selection and small multicolor assistant accent.
- Document thumbnails as the primary visual content.
- Calm line icons and generous editable space.

## Colors

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

## Typography

### Font Family
- **SF Pro Display** — screen and document headings.
- **SF Pro Text** — navigation, tasks, folders, and document body.
- **SF Mono** — code blocks and technical content inside documents.

### Hierarchy
Use 36px bold for exceptional document statements, 22px for screen headings, 16px semibold for rows and cards, 14–17px for content, and 10–12px metadata.

### Principles
- Let authored content define its own hierarchy.
- Keep shell labels compact and quiet.
- Use strong black only for current context.
- Preserve comfortable reading line height.

### Note on Font Substitutes
Use the platform system sans or **Inter**. Use **JetBrains Mono** for code when SF Mono is unavailable.

## Layout

### Spacing System
Use a 4px base, 16px screen gutters, 12px row rhythm, 16px card gaps, and large open writing areas.

### Grid & Container
Home stacks search, horizontally scrolling recent documents, structured groups, and floating navigation. Document view becomes a mostly empty editable canvas.

### Whitespace Philosophy
Whitespace is functional writing space. Avoid filling empty document or task states with decorative panels.

## Elevation & Depth
Use soft surface contrast and restrained blur for floating navigation, menus, and controls; avoid pronounced shadows.

### Decorative Depth
Document previews and subtle translucent chrome create depth. The shell does not need atmospheric imagery.

## Shapes

### Border Radius Scale
Use 10px for previews and search, 14–18px for contextual groups, 24px for sheets, and full pills for floating navigation.

### Photography & Illustration Geometry
Treat images as document content or folder identity. Keep previews aspect-fit in rounded page thumbnails, not as decorative backgrounds.

## Components

### Buttons
Use black circular create controls, white floating icon groups, and cyan selected icons. Text buttons remain understated.

### Pricing Tabs
Task views and filters use soft pill segments with a cyan active state; subscription choices may reuse the same selection logic.

### Cards & Containers
Use document previews, folder rows, task groups, empty placeholders, and floating control capsules.

### Inputs & Forms
Search uses a pale field with a keyword selector. Document editing keeps the canvas clear and moves formatting into contextual tools.

### Status & Build Page
Show starred, shared, connected, due, completed, reminder, sync, and download state with icon plus concise metadata.

### Navigation
Home, Tasks, and Calendar live in the left floating capsule; assistant and create actions occupy a separate right capsule.

### Footer
Floating navigation remains above the safe area and never covers editable content or the current task.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints
Use the reference single column up to 767px, sidebar plus content on tablet, and persistent navigation with wider editor columns above 1024px.

### Touch Targets
Keep navigation, preview cards, folder rows, task checks, overflow, and creation controls at least 44px.

### Collapsing Strategy
Preserve current document or task, create, search, and navigation. Move organization controls into a sidebar or sheet as width changes.

### Image Behavior
Contain document thumbnails and inline media with readable aspect ratios; avoid decorative cropping of authored content.

## Iteration Guide
1. Build Home, search, and recent documents.
2. Add document reading and editing.
3. Add folders, tags, sharing, and connections.
4. Add tasks, calendar, reminders, and daily notes.
5. Add assistant, publishing, integrations, and settings.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 153 flow names were inventoried; Home, Document details, and Tasks were image-reviewed.
- Rich editor formatting, collaboration, publishing, and assistant interactions were not deeply sampled.
- No coherent decorative illustration language appeared in reviewed screens.

</design-context>

Use the design system above for all UI you generate.
