<design-context>
---
version: 1
platform: iOS
name: Translate-design-analysis
description: "A calm translation iOS utility with a pale grouped canvas, large white language cards, black multilingual type, aqua-teal translated content and voice controls, a compact three-item bottom bar, and no decorative imagery beyond functional audio feedback."
colors:
  canvas: "#F2F2F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9E9EE"
  accent-primary: "#58AFC0"
  accent-secondary: "#3AA873"
  text-primary: "#111214"
  text-secondary: "#7A7C80"
  divider: "#D8D9DD"
  destructive: "#D84B57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 24}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  translation-card: {fill: "#FFFFFF", radius: 16, padding: 16}
  language-selector: {fill: "#FFFFFF", text: "#111214", radius: 10}
  microphone: {fill: "#58AFC0", text: "#FFFFFF", diameter: 64}
  conversation-bubble: {fill: "#FFFFFF", translated: "#58AFC0", radius: 16}
  navigation: {fill: "#FFFFFF", active: "#58AFC0", inactive: "#8E8E93"}
---

# Overview

Translate reduces chrome so entered and translated language remain central. Large white cards float on pale gray, aqua-teal distinguishes output and primary voice actions, and generous blank space accommodates typing or listening without decorative content.

# Non-negotiable visual invariants

- Pale neutral gray fills the page while white rounded cards contain language content.
- Source and translated content remain visually distinct through hierarchy and teal, not two identical text blocks.
- Language selectors stay compact and prominent above the translation surface.
- Voice input uses an oversized circular teal control relative to secondary actions.
- Secondary copy/share/play/favorite actions are small icon-only controls and low contrast until active.
- Conversation surfaces use paired bubbles and clear dual-language or dual-microphone treatment.
- The bottom bar is white with teal selected and gray inactive items.
- Empty space remains intentional; no promotional art or prose fills an empty translation state.

# Color and surfaces

The canvas is iOS grouped gray; white cards and selectors provide the working surfaces. Aqua-teal is the only persistent product accent and marks translated text, selected navigation, microphones, playback, and favorites. Near-black carries source content, gray carries hints and metadata, while green, amber, and red remain local semantic states. Default blue, gradients, and colorful card backgrounds would disrupt the quiet system.

# Typography

Use a neutral system sans with reliable script fallbacks. Entered and translated phrases are large, readable, and allowed to wrap; language labels and metadata are much smaller. Teal output may be equal or slightly stronger than source text without relying on casing. Dynamic Type grows cards vertically and preserves script-specific glyph metrics rather than shrinking text or clipping long languages.

# Screen composition

The primary archetype stacks a compact language selector row, a large white input region, a translated result region, and sparse action icons above the bottom bar. Dictionary detail rises in a sheet beneath the result. Language choice appears as a white list or popover. Conversation screens use alternating or side-by-side bubbles and prominent mic controls; face-to-face mode divides the viewport clearly. Listening becomes an immersive sparse screen with a central voice control and waveform. Favorites/history use a simple vertical list of paired phrases.

# Navigation appearance

The bottom bar is white with three compact icon-label items; aqua-teal marks selection and gray marks inactivity. Top controls are minimal, usually language selectors and small utility glyphs. Sheets and popovers remain native light surfaces with rounded corners and dimmed context. Navigation appearance must not prescribe destinations beyond the approved product structure.

# Components

Translation cards are broad white rounded rectangles with 16-point internal padding and fine separation between source and output. Language selectors are compact white controls with short labels and chevrons. Primary microphones are teal circles with white glyphs; secondary glyphs use gray or teal without colored tiles. Conversation bubbles use moderate rounding and preserve clear speaker/language distinction. Language lists use checkmarks; share, confirmation, keyboard, menu, and swipe-delete states retain native geometry. Disabled controls reduce saturation and opacity.

# Imagery and icons

There is no independent illustration system. Functional line icons, language glyphs, waveform/audio feedback, and live camera content are the only visual media. Camera content, when present, is full-screen functional imagery with safe overlay controls. Do not add illustrations, decorative flags, emoji, or arbitrary symbols to represent languages.

# States

Observed states include empty input, keyboard typing, suggestions, translated result, dictionary sheet, favorite selected, language detection/list, share sheet, side-by-side and face-to-face conversation, clear confirmation, live waveform listening, and favorite-list swipe actions. Pale canvas, white cards, teal actions, and quiet gray secondary controls remain constant.

# iOS adaptation

Use safe-area-aware vertical layout and keyboard avoidance so selectors and edited text remain visible. Cards grow with multilingual Dynamic Type and scroll when content exceeds the viewport. Keep selectors, microphones, tab items, and icon controls at least 44 points tappable. VoiceOver reads source language/content before target language/content and then actions. Face-to-face layout must preserve orientation and adequate type size on compact widths. Light appearance is canonical; any dark mode requires deliberate remapping rather than inversion.

# Anti-generic checklist

- No default-blue accent replacing aqua-teal.
- No dense settings table replacing large translation cards.
- No small ordinary button replacing the dominant circular microphone.
- No decorative imagery, flags, slogans, or duplicated instructions in empty space.
- No unstyled `TabView`, generic `Form`, or colored icon tiles.
- No identical hierarchy for source, translated result, language labels, and metadata.
- No illustration file inferred from line icons, waveform, or camera content.

</design-context>
