<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-lg: { fontFamily: System Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  display-md: { fontFamily: System Sans, fontSize: 23, fontWeight: 650, lineHeight: 1.18, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: [14, 18]}
  language-selector: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  translation-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 16 }
  microphone: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58 }
---

# Overview

Translate uses familiar system structure, large white language cards, and soft aqua actions. The design minimizes chrome so source and translated text remain the focus.

# Non-negotiable visual invariants

- The reference consistently shows source and target visually distinct.
- The reference consistently shows support all scripts with proper fonts.
- The reference consistently shows preserve large speech targets.
- The reference consistently shows open space intentionally.
- Sampled screens consistently use a quiet translation utility built from pale-gray grouped canvas.
- The reference consistently shows large white input cards.
- The reference consistently shows black system typography.
- The reference consistently shows a soft aqua-teal accent. Generous empty space and simple icon actions keep language exchange immediate and calm.

# Color and surfaces

### Brand & Accent

Aqua-teal marks output text, microphone actions, playback, favorites, and active navigation.

### Surface

Use pale grouped gray behind white selectors, translation panels, conversation bubbles, and favorite cards.

### Text

Near-black carries source language and primary content; teal carries translated output; gray carries hints and inactive navigation.

### Semantic

Use green for successful downloads, amber for limited availability, and red for errors. Teal remains the interaction accent.

# Typography

### Font Family

Use a neutral system sans with excellent multilingual coverage.

### Hierarchy

Use 23–34 points translated phrases, 17–20 points source text and section headings, and 10–15 points controls and language labels.

### Principles

Prioritize script legibility, allow dynamic type, and never rely on case or weight alone to distinguish languages.

### Note on Font Substitutes

Use SF Pro, Inter, or Noto Sans with the correct script-specific fallback for every supported language.

# Screen composition

### Spacing System

Use a 4 points base, 12 points page gutters, 12–16 points within cards, and 24 points around microphone actions.

### Grid & Container

Place two equal language selectors at the top. Stack source and result inside a large white card above input and bottom navigation.

### Whitespace Philosophy

Keep generous blank space for typing and speech. Avoid filling the canvas when no translation exists.

Surface hierarchy observed in the source:

Use tonal grouping and minimal shadow. Language menus and text-selection overlays may float above the base surface.

### Decorative Depth

The interface has no decorative depth beyond soft rounded surfaces and a subtle waveform. Avoid gradients and ornamental art.

# Navigation appearance

Use three bottom destinations for Translation, Conversation, and Favorites. Keep language selectors persistent across the first two modes.

# Components

### Buttons

Primary speech actions are circular teal buttons; secondary actions use teal icons. Native controls must inherit the aqua accent and calm rounded styling.

### Cards & Containers

Translation cards separate source and target with a fine divider. Favorite cards group language labels and paired phrases.

### Inputs & Forms

Text input is a large borderless white region. Language selection uses checked list menus and clear source/target placement.

# Imagery and icons

The interface has no decorative depth beyond soft rounded surfaces and a subtle waveform. Avoid gradients and ornamental art.

Camera translation uses the live image full-screen with legible controls over it. No separate illustration language is present.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Listening, playback, offline language availability, favorite state, and camera capture appear near the associated control.

# iOS adaptation

### Touch Targets

Language selectors, microphones, playback, favorites, and navigation require at least 44 points targets.

### Collapsing Strategy

Keep language pair and primary microphone visible. Move less-used camera, expand, or copy actions into a compact overflow group when space is tight.

### Image Behavior

Camera mode uses `cover` for the live view and keeps overlays within safe areas. UI previews remain `contain` when shown in help.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not add decorative imagery.
- Do not make language menus tiny.
- Do not use teal for errors.
- Do not expose default accent colors.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

Screen Gallery exposes 65 image screens but no flow sequences. Text, voice, camera, conversation, face-to-face, language selection, and favorites are visually documented; exact transitions remain unverified.

</design-context>
