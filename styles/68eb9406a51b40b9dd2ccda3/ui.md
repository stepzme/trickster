<design-context>
---
version: 1
platform: iOS
name: Le-Chat-design-analysis
description: "A near-black AI workspace with charcoal composer surfaces, bright orange creation actions, cyan research states, and a retro pixel-art mascot. The interface is sparse and tool-like: conversation text carries most of the screen, the composer remains anchored, and projects, history, modes, and upgrade controls stay compact."
colors:
  primary: "#FF4A1C"
  on-primary: "#FFFFFF"
  primary-focus: "#D93610"
  ink: "#F6F4F7"
  ink-muted: "#B6B1B8"
  ink-subtle: "#817C84"
  ink-tertiary: "#5E5961"
  canvas: "#211F24"
  surface-1: "#2B292E"
  surface-2: "#353238"
  surface-3: "#403C43"
  surface-4: "#4A464E"
  hairline: "#3C3940"
  hairline-strong: "#514D55"
  hairline-tertiary: "#66616A"
  inverse-canvas: "#FFF8F3"
  inverse-surface-1: "#F3ECE8"
  inverse-surface-2: "#E7DFDB"
  inverse-ink: "#201D22"
  brand-secure: "#46BDD7"
  semantic-success: "#7FB348"
  semantic-overlay: "#0D0C0E"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded:
  xs: 4
  sm: 7
  md: 10
  lg: 14
  xl: 18
  xxl: 24
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [11, 16]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [9, 12]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [11, 16]}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  user-message: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [10, 12]}
  project-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12}
  mode-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.brand-secure}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [5, 8]}
  sidebar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 16}
---

# Overview

Le Chat is a dark, composer-first AI workspace where orange creation actions and a pixel mascot add identity without interrupting long-form work.

**Key Characteristics:**
- Near-black canvas with charcoal input surfaces.
- Anchored composer across home, chats, and projects.
- Orange primary actions and cyan Research mode.
- Minimal message chrome and readable long responses.
- Retro pixel-art mascot and onboarding world.

# Non-negotiable visual invariants

- Sampled screens consistently use near-black canvas with charcoal input surfaces.
- The reference consistently shows anchored composer across home, chats, and projects.
- The reference consistently shows orange primary actions and cyan Research mode.
- The reference consistently shows minimal message chrome and readable long responses.
- Imagery consistently uses retro pixel-art mascot and onboarding world.

# Color and surfaces

### Brand & Accent

Orange-red drives sign-in, new-chat, upgrade, and active voice or generation cues. Cyan identifies Research and linked advanced work.

### Surface

Near-black is the canvas. Charcoal steps distinguish composer, user messages, sidebar search, projects, and modal controls.

### Text

Off-white carries content; soft gray carries labels, timestamps, disclaimers, and inactive utilities.

### Semantic

Cyan is informational mode state, green is positive feedback, and red is destructive. Keep semantic color compact.

# Typography

### Font Family

Use SF Pro Display for onboarding and subscription headings and SF Pro Text for conversation, projects, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Onboarding and upgrade claim |
| headline | 20 points | 600 | Project and modal title |
| card-title | 16 points | 600 | Conversation section title |
| body | 13 points | 400 | Prompt and response text |
| caption | 10 points | 400 | Mode, disclaimer, and utility labels |

### Principles

- Optimize body rhythm for long answers.
- Keep interface labels compact and quiet.
- Use display weight only for onboarding and plan comparison.

### Note on Font Substitutes

Inter is a close cross-platform substitute; use a bitmap font only inside pixel-art assets, never for conversation text.

# Screen composition

### Spacing System

Use a 4 points base, 12 points composer padding, 16 points content gutters, and 20–24 points between answer sections.

### Grid & Container

Chats are one readable column. The sidebar is a vertical history list; upgrade uses one centered plan card.

### Whitespace Philosophy

Keep large calm fields around the mascot and composer. Long answers use paragraph spacing instead of card separation.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-black canvas | Home and conversation |
| 1 | Charcoal fill | Composer and user message |
| 2 | Stronger charcoal outline | Project and modal fields |
| 3 | Scrim plus focused sheet | Rename, delete, and upgrade tasks |

### Decorative Depth

Depth comes from small surface steps and generated media. Pixel art remains flat with crisp edges.

# Navigation appearance

Use a slide-out sidebar for history, projects, plan, and New chat. Keep conversation title and one contextual action in the header.

# Components

### Buttons

Primary actions are orange full-width rectangles. Secondary actions use charcoal fills; compact answer utilities stay icon-only and gray.

### Cards & Containers

Assistant responses are mostly borderless. User prompts use charcoal bubbles; projects use simple outlined dark fields; upgrade uses one bounded card.

### Inputs & Forms

The composer combines attachments, mode selection, voice, and submit in one charcoal panel. Focus changes border and icon state without introducing a light native field.

# Imagery and icons

Depth comes from small surface steps and generated media. Pixel art remains flat with crisp edges.

Generated images use rounded landscape rectangles. The pixel mascot remains small, centered, and unblurred against the dark field.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Generation progress appears inline with the assistant avatar and stop control. Research keeps a cyan mode chip visible in the composer.

# iOS adaptation

### Touch Targets

Composer actions, sidebar rows, feedback, mode chips, and subscription controls remain at least 44 points.

### Collapsing Strategy

Keep chat single-column; collapse secondary composer tools behind one menu before reducing the prompt area.

### Image Behavior

Generated images use aspect-fill previews and open to full detail. Pixel art scales only by integer multiples where practical.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't wrap every assistant paragraph in a card.
- Don't use orange as a large conversation background.
- Don't mix pixel typography into functional text.
- Don't leave native inputs light or rounded like generic iOS controls.
- Don't crowd the home mascot with navigation chrome.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
