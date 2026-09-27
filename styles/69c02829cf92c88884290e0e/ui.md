<design-context>
---
version: alpha
name: Manus-AI-design-analysis
description: "A quiet editorial AI workspace on warm gray, combining elegant serif prompts, neutral sans-serif controls, white rounded composers and task cards, black selected states, sparse blue guidance, and embedded artifact previews."
colors: {primary: "#151515", on-primary: "#FFFFFF", primary-hover: "#303030", primary-focus: "#000000", ink: "#1B1A1C", ink-muted: "#77747A", ink-subtle: "#A7A3AA", ink-tertiary: "#CBC7CD", canvas: "#F2F0F3", surface-1: "#FFFFFF", surface-2: "#EAE7EC", surface-3: "#E0DCE2", surface-4: "#D4CFD6", hairline: "#E2DEE4", hairline-strong: "#CCC7CE", hairline-tertiary: "#B4AEB7", inverse-canvas: "#171617", inverse-surface-1: "#29272A", inverse-surface-2: "#3B393D", inverse-ink: "#FFFFFF", brand-secure: "#078DEA", semantic-success: "#3BA66D", semantic-overlay: "#1B1A1C"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 36px, fontWeight: 400, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: Georgia, fontSize: 30px, fontWeight: 400, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: Georgia, fontSize: 24px, fontWeight: 400, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: Georgia, fontSize: 20px, fontWeight: 400, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px}
  task-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  artifact-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Manus is an editorial AI workspace where one calm composer grows into a visible chain of thinking, tasks, and artifacts.

**Key Characteristics:** warm-gray canvas; serif prompts; white rounded composer; black selection; embedded artifact previews.

## Colors

### Brand & Accent

Black carries selection and submission. Blue is limited to links, upgrade, guidance, and active progress.

### Surface

Warm gray is the workspace; white isolates composer, task, artifact, and account cards.

### Text

Near-black carries prompts and output; gray carries time, status, credits, and helper text.

### Semantic

Blue means guidance or active work, green success, and red destructive account action.

## Typography

### Font Family

Use a restrained serif for prompts and brand titles; use SF Pro Text for controls and task data.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 400 | Central prompt |
| headline | 20px | 400 | Task claim |
| card-title | 15px | 600 | Task and artifact title |
| body | 12px | 400 | Output and metadata |
| caption | 9px | 400 | Progress and credits |

### Principles

- Give the current question visual priority.
- Keep progress plain and chronological.
- Use serif sparingly outside prompts.

### Note on Font Substitutes

Use Georgia for editorial display and Inter for interface text.

## Layout

### Spacing System

Use a 4px base, 12px card gaps, and 12px screen gutters.

### Grid & Container

Home uses one centered prompt and bottom composer; task history is a list; results stack messages and artifacts.

### Whitespace Philosophy

Reserve large open areas before a task begins; compress only as progress and output accumulate.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm-gray canvas | Workspace |
| 1 | White card | Composer and artifact |
| 2 | Floating black action | New task and submit |
| 3 | Layered sheet | Profile and settings |

### Decorative Depth

Use stacked sheets and subtle borders, not shadows or gradients.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Rows and chips |
| rounded-md | 12px | Artifact cards |
| rounded-lg | 16px | Composer and sheets |
| rounded-full | full | Submit and new-task controls |

### Photography & Illustration Geometry

Generated media preserves its native aspect ratio inside rounded artifact frames; avoid unrelated illustration.

## Components

### Buttons

Primary actions are black circles or pills; secondary actions are white or gray with black text.

### Pricing Tabs

All, Favorites, and Scheduled use pale pills with a black selected state.

### Cards & Containers

Task rows pair a small glyph with title, excerpt, time, and status; artifacts show name, progress, and preview.

### Inputs & Forms

The composer is a white rounded field with add, tools, voice, and submit controls.

### Status & Build Page

Thinking, substeps, duration, and completion stay embedded chronologically in the conversation.

### Navigation

Keep model and credits at top, composer at bottom, and task history one step away.

### Footer

No footer; composer owns the safe area.

## Do's and Don'ts

### Do

- Keep task state visible.
- Let generated artifacts lead.
- Preserve the serif/sans contrast.
- Style native controls into the system.

### Don't

- Don't fill empty space with decoration.
- Don't hide credit cost or progress.
- Don't over-card every message.
- Don't make blue the dominant surface color.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten composer actions |
| Standard | 375–430px | Default task layout |
| Wide | 431px+ | Expand artifact measure |

### Touch Targets

Composer tools, submit, filters, artifacts, and settings remain at least 44px.

### Collapsing Strategy

Collapse tool labels before icons and stack artifact controls under previews.

### Image Behavior

Contain generated artifacts and preserve document or slide ratios.

## Iteration Guide

Tune prompting first, then progress transparency, artifact review, task retrieval, and connector setup.

## Known Gaps

- Error recovery during generation was not fully sampled.
- Connector authorization was not reviewed end to end.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
