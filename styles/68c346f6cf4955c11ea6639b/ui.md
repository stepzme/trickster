<design-context>
---
version: alpha
name: Translate-design-analysis
description: "A quiet translation utility built from pale-gray grouped canvas, large white input cards, black system typography, and a soft aqua-teal accent. Generous empty space and simple icon actions keep language exchange immediate and calm."

colors:
  primary: "#58AFC0"
  on-primary: "#FFFFFF"
  primary-pressed: "#438E9E"
  ink: "#111214"
  ink-muted: "#7A7C80"
  ink-subtle: "#B5B7BA"
  canvas: "#F2F2F7"
  surface-1: "#FFFFFF"
  surface-2: "#E9E9EE"
  hairline: "#D8D9DD"
  semantic-success: "#3AA873"
  semantic-warning: "#E0A23A"
  semantic-danger: "#D84B57"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-lg: { fontFamily: System Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  display-md: { fontFamily: System Sans, fontSize: 23px, fontWeight: 650, lineHeight: 1.18, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 14px 18px }
  language-selector: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  translation-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 16px }
  microphone: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58px }
---

## Overview

Translate uses familiar system structure, large white language cards, and soft aqua actions. The design minimizes chrome so source and translated text remain the focus.

## Colors

### Brand & Accent

Aqua-teal marks output text, microphone actions, playback, favorites, and active navigation.

### Surface

Use pale grouped gray behind white selectors, translation panels, conversation bubbles, and favorite cards.

### Text

Near-black carries source language and primary content; teal carries translated output; gray carries hints and inactive navigation.

### Semantic

Use green for successful downloads, amber for limited availability, and red for errors. Teal remains the interaction accent.

## Typography

### Font Family

Use a neutral system sans with excellent multilingual coverage.

### Hierarchy

Use 23–34px translated phrases, 17–20px source text and section headings, and 10–15px controls and language labels.

### Principles

Prioritize script legibility, allow dynamic type, and never rely on case or weight alone to distinguish languages.

### Note on Font Substitutes

Use SF Pro, Inter, or Noto Sans with the correct script-specific fallback for every supported language.

## Layout

### Spacing System

Use a 4px base, 12px page gutters, 12–16px within cards, and 24px around microphone actions.

### Grid & Container

Place two equal language selectors at the top. Stack source and result inside a large white card above input and bottom navigation.

### Whitespace Philosophy

Keep generous blank space for typing and speech. Avoid filling the canvas when no translation exists.

## Elevation & Depth

Use tonal grouping and minimal shadow. Language menus and text-selection overlays may float above the base surface.

### Decorative Depth

The interface has no decorative depth beyond soft rounded surfaces and a subtle waveform. Avoid gradients and ornamental art.

## Shapes

### Border Radius Scale

Use 8px selectors, 12px translation and favorite cards, 16px bubbles, and fully round microphones.

### Photography & Illustration Geometry

Camera translation uses the live image full-screen with legible controls over it. No separate illustration language is present.

## Components

### Buttons

Primary speech actions are circular teal buttons; secondary actions use teal icons. Native controls must inherit the aqua accent and calm rounded styling.

### Pricing Tabs

Use simple segments only for translation modes; active state is teal with clear label contrast.

### Cards & Containers

Translation cards separate source and target with a fine divider. Favorite cards group language labels and paired phrases.

### Inputs & Forms

Text input is a large borderless white region. Language selection uses checked list menus and clear source/target placement.

### Status & Build Page

Listening, playback, offline language availability, favorite state, and camera capture appear near the associated control.

### Navigation

Use three bottom destinations for Translation, Conversation, and Favorites. Keep language selectors persistent across the first two modes.

### Footer

There is no footer. The bottom navigation closes each primary surface.

## Do's and Don'ts

### Do

- Keep source and target visually distinct.
- Support all scripts with proper fonts.
- Preserve large speech targets.
- Use open space intentionally.

### Don't

- Do not add decorative imagery.
- Do not make language menus tiny.
- Do not use teal for errors.
- Do not expose default accent colors.

## Responsive Behavior

### Breakpoints

Phones stack translation regions. Wider screens may place source and target side by side while retaining equal importance.

### Touch Targets

Language selectors, microphones, playback, favorites, and navigation require at least 44px targets.

### Collapsing Strategy

Keep language pair and primary microphone visible. Move less-used camera, expand, or copy actions into a compact overflow group when space is tight.

### Image Behavior

Camera mode uses `cover` for the live view and keeps overlays within safe areas. UI previews remain `contain` when shown in help.

## Iteration Guide

Start with two language selectors, text input, translated output, speech control, and three-item navigation. Add conversation, camera, favorites, and offline states afterward.

## Known Gaps

Screen Gallery exposes 65 image screens but no flow sequences. Text, voice, camera, conversation, face-to-face, language selection, and favorites are visually documented; exact transitions remain unverified.

</design-context>

Use the design system above for all UI you generate.
