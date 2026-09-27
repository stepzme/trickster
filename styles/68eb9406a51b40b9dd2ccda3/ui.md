<design-context>
---
version: alpha
name: Le-Chat-design-analysis
description: "A near-black AI workspace with charcoal composer surfaces, bright orange creation actions, cyan research states, and a retro pixel-art mascot. The interface is sparse and tool-like: conversation text carries most of the screen, the composer remains anchored, and projects, history, modes, and upgrade controls stay compact."
colors:
  primary: "#FF4A1C"
  on-primary: "#FFFFFF"
  primary-hover: "#FF6A42"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.44, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 7px
  md: 10px
  lg: 14px
  xl: 18px
  xxl: 24px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 11px 16px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 9px 12px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 11px 16px}
  composer: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px}
  user-message: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px 12px}
  project-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px}
  mode-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.brand-secure}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 5px 8px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 48px}
  sidebar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 16px}
---
## Overview

Le Chat is a dark, composer-first AI workspace where orange creation actions and a pixel mascot add identity without interrupting long-form work.

**Key Characteristics:**
- Near-black canvas with charcoal input surfaces.
- Anchored composer across home, chats, and projects.
- Orange primary actions and cyan Research mode.
- Minimal message chrome and readable long responses.
- Retro pixel-art mascot and onboarding world.

## Colors

### Brand & Accent

Orange-red drives sign-in, new-chat, upgrade, and active voice or generation cues. Cyan identifies Research and linked advanced work.

### Surface

Near-black is the canvas. Charcoal steps distinguish composer, user messages, sidebar search, projects, and modal controls.

### Text

Off-white carries content; soft gray carries labels, timestamps, disclaimers, and inactive utilities.

### Semantic

Cyan is informational mode state, green is positive feedback, and red is destructive. Keep semantic color compact.

## Typography

### Font Family

Use SF Pro Display for onboarding and subscription headings and SF Pro Text for conversation, projects, and controls.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding and upgrade claim |
| headline | 20px | 600 | Project and modal title |
| card-title | 16px | 600 | Conversation section title |
| body | 13px | 400 | Prompt and response text |
| caption | 10px | 400 | Mode, disclaimer, and utility labels |

### Principles

- Optimize body rhythm for long answers.
- Keep interface labels compact and quiet.
- Use display weight only for onboarding and plan comparison.

### Note on Font Substitutes

Inter is a close cross-platform substitute; use a bitmap font only inside pixel-art assets, never for conversation text.

## Layout

### Spacing System

Use a 4px base, 12px composer padding, 16px content gutters, and 20–24px between answer sections.

### Grid & Container

Chats are one readable column. The sidebar is a vertical history list; upgrade uses one centered plan card.

### Whitespace Philosophy

Keep large calm fields around the mascot and composer. Long answers use paragraph spacing instead of card separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-black canvas | Home and conversation |
| 1 | Charcoal fill | Composer and user message |
| 2 | Stronger charcoal outline | Project and modal fields |
| 3 | Scrim plus focused sheet | Rename, delete, and upgrade tasks |

### Decorative Depth

Depth comes from small surface steps and generated media. Pixel art remains flat with crisp edges.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Pixel-art frame and tiny badges |
| rounded-sm | 7px | Buttons and sidebar search |
| rounded-md | 10px | Composer and messages |
| rounded-lg | 14px | Upgrade card and modal panels |
| rounded-full | full | Avatar and compact mode status |

### Photography & Illustration Geometry

Generated images use rounded landscape rectangles. The pixel mascot remains small, centered, and unblurred against the dark field.

## Components

### Buttons

Primary actions are orange full-width rectangles. Secondary actions use charcoal fills; compact answer utilities stay icon-only and gray.

### Pricing Tabs

Monthly and Yearly use a dark segmented control with the selected plan lifted; discount value is cyan.

### Cards & Containers

Assistant responses are mostly borderless. User prompts use charcoal bubbles; projects use simple outlined dark fields; upgrade uses one bounded card.

### Inputs & Forms

The composer combines attachments, mode selection, voice, and submit in one charcoal panel. Focus changes border and icon state without introducing a light native field.

### Status & Build Page

Generation progress appears inline with the assistant avatar and stop control. Research keeps a cyan mode chip visible in the composer.

### Navigation

Use a slide-out sidebar for history, projects, plan, and New chat. Keep conversation title and one contextual action in the header.

### Footer

No footer; the anchored composer and device safe area close every working screen.

## Do's and Don'ts

### Do

- Keep the composer persistent.
- Use orange for creation and upgrade.
- Preserve long-form readability.
- Keep mode selection inside the composer.
- Render pixel art with crisp edges.

### Don't

- Don't wrap every assistant paragraph in a card.
- Don't use orange as a large conversation background.
- Don't mix pixel typography into functional text.
- Don't leave native inputs light or rounded like generic iOS controls.
- Don't crowd the home mascot with navigation chrome.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten composer actions and answer utilities |
| Standard | 375–430px | Default single-column chat |
| Wide | 431px+ | Widen text measure modestly and expand sidebar |

### Touch Targets

Composer actions, sidebar rows, feedback, mode chips, and subscription controls remain at least 44px.

### Collapsing Strategy

Keep chat single-column; collapse secondary composer tools behind one menu before reducing the prompt area.

### Image Behavior

Generated images use aspect-fill previews and open to full detail. Pixel art scales only by integer multiples where practical.

## Iteration Guide

Tune composer clarity and answer readability first, then mode visibility, history organization, and brand moments.

## Known Gaps

- Voice-mode listening and interruption states were not viewable as still images.
- Account deletion completion was not sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
