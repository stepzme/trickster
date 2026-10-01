<design-context>
---
version: 1
platform: iOS
name: Manus-AI-design-analysis
description: "A quiet editorial AI workspace on warm gray, combining elegant serif prompts, neutral sans-serif controls, white rounded composers and task cards, black selected states, sparse blue guidance, and embedded artifact previews."
colors: {primary: "#151515", on-primary: "#FFFFFF", primary-focus: "#000000", ink: "#1B1A1C", ink-muted: "#77747A", ink-subtle: "#A7A3AA", ink-tertiary: "#CBC7CD", canvas: "#F2F0F3", surface-1: "#FFFFFF", surface-2: "#EAE7EC", surface-3: "#E0DCE2", surface-4: "#D4CFD6", hairline: "#E2DEE4", hairline-strong: "#CCC7CE", hairline-tertiary: "#B4AEB7", inverse-canvas: "#171617", inverse-surface-1: "#29272A", inverse-surface-2: "#3B393D", inverse-ink: "#FFFFFF", brand-secure: "#078DEA", semantic-success: "#3BA66D", semantic-overlay: "#1B1A1C"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 36, fontWeight: 400, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: Georgia, fontSize: 30, fontWeight: 400, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: Georgia, fontSize: 24, fontWeight: 400, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: Georgia, fontSize: 20, fontWeight: 400, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 13 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12}
  task-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 12}
  artifact-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

Manus is an editorial AI workspace where one calm composer grows into a visible chain of thinking, tasks, and artifacts.

# Non-negotiable visual invariants

- Primary screens use warm-gray canvas; serif prompts; white rounded composer; black selection; embedded artifact previews.
- Keep task state visible.
- Let generated artifacts lead.
- Preserve the serif/sans contrast.
- Style native controls into the system.
- Home uses one centered prompt and bottom composer; task history is a list; results stack messages and artifacts.
- Reserve large open areas before a task begins; compress only as progress and output accumulate.

# Color and surfaces

Black carries selection and submission. Blue is limited to links, upgrade, guidance, and active progress.

Warm gray is the workspace; white isolates composer, task, artifact, and account cards.

Near-black carries prompts and output; gray carries time, status, credits, and helper text.

Blue means guidance or active work, green success, and red destructive account action.

# Typography

Use a restrained serif for prompts and brand titles; use SF Pro Text for controls and task data.

- display-lg — 30 points — 400 — Central prompt
- headline — 20 points — 400 — Task claim
- card-title — 15 points — 600 — Task and artifact title
- body — 12 points — 400 — Output and metadata
- caption — 9 points — 400 — Progress and credits

- Give the current question visual priority.
- Keep progress plain and chronological.
- Use serif sparingly outside prompts.

Use Georgia for editorial display and Inter for interface text.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points card gaps, and 12 points screen gutters.

Home uses one centered prompt and bottom composer; task history is a list; results stack messages and artifacts.

Reserve large open areas before a task begins; compress only as progress and output accumulate.

Use stacked sheets and subtle borders, not shadows or gradients.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep model and credits at top, composer at bottom, and task history one step away.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are black circles or pills; secondary actions are white or gray with black text.

Task rows pair a small glyph with title, excerpt, time, and status; artifacts show name, progress, and preview.

The composer is a white rounded field with add, tools, voice, and submit controls.

Thinking, substeps, duration, and completion stay embedded chronologically in the conversation.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Generated media preserves its native aspect ratio inside rounded artifact frames; avoid unrelated illustration.

Contain generated artifacts and preserve document or slide ratios.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Thinking, substeps, duration, and completion stay embedded chronologically in the conversation.

Blue means guidance or active work, green success, and red destructive account action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Composer tools, submit, filters, artifacts, and settings remain at least 44 points.
- Collapse tool labels before icons and stack artifact controls under previews.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not fill empty space with decoration.
- Do not hide credit cost or progress.
- Do not over-card every message.
- Do not make blue the dominant surface color.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
