<design-context>
---
version: 1
platform: iOS
name: WB-Chat-design-analysis
description: "A quiet monochrome messenger style built from white canvas, charcoal controls, pale gray input surfaces, thin separators, small circular avatars, compact text tabs, and a soft floating bottom dock. Visual identity stays restrained; color appears mainly through avatars, message content, online dots, and semantic feedback."

colors:
  primary: "#2D2D31"
  on-primary: "#FFFFFF"
  primary-pressed: "#171719"
  ink: "#18181A"
  ink-muted: "#77777D"
  ink-subtle: "#ABABB1"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F9"
  surface-2: "#EEEEF1"
  surface-3: "#F4F4F6"
  scrim: "#000000"
  accent-magenta: "#D36AD1"
  accent-orange: "#FF702D"
  accent-cyan: "#38C7D4"
  accent-lime: "#9BCB5A"
  hairline: "#E6E6E9"
  semantic-success: "#33B36B"
  semantic-danger: "#D8525D"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.4 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: SF Pro Display, fontSize: 24, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: SF Pro Text, fontSize: 18, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.15 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18] }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12] }
  list-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 12] }
  message-bubble: { backgroundColor: "#F0F3FF", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [8, 10] }
  message-composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14] }
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 52 }
---

# Overview

WB Chat's observed style is plain, fast, and low-decoration. The sampled screens rely on white space, charcoal actions, pale gray fields, circular avatars, light separators, and compact Russian text rather than illustrative branding.

# Non-negotiable visual invariants

- White canvas remains dominant; charcoal is reserved for primary actions, selected shell controls, and strong text.
- Search fields, composers, and docks are pale gray, softly rounded, and visually lighter than content rows.
- Lists are flat single-column structures with hairline separation, not card stacks.
- Avatars are circular initials or custom images; they are one of the few recurring color sources.
- Text tabs use compact labels with a thin black underline for the selected state.
- Bottom shell controls sit in a soft floating pill with subtle shadow and a larger selected segment.
- Bottom sheets use a gray scrim, white rounded top corners, centered or balanced header text, and sparse row content.

# Color and surfaces

### Brand & Accent

Use near-black charcoal for action weight and selected states. Use magenta, orange, cyan, lime, and other bright tones only where the sampled screens show identity color: avatars, online dots, reactions, and user content.

### Surface

Keep the main surface white. Use `surface-1` for search, message composer, floating dock, and low-emphasis containers. Use `surface-2` or a translucent gray scrim only behind modal sheets or native overlays.

### Text

Use near-black for names, sheet titles, button labels, and active tabs. Use medium gray for previews, placeholders, timestamps, inactive tabs, and status copy. Keep text contrast modest but readable.

### Semantic

Use green for online or positive state, red for failed or destructive state, and gray for neutral metadata. Do not turn semantic colors into decorative accents.

# Typography

### Font Family

Use SF Pro or another neutral iOS system sans with compact Cyrillic metrics.

### Principles

Keep typography small and utilitarian. Names and active titles are medium-bold; previews, timestamps, placeholder copy, and system notes stay lighter. Avoid large display type except for the centered logo/auth screens.

### Note on Font Substitutes

Inter may substitute for SF Pro if weights, compact Cyrillic rendering, and tabular metadata alignment are preserved.

# Screen composition

### Grid & Container

Use one clear vertical column for rows and settings. Place avatars at the leading edge, primary text next to them, and metadata at the trailing edge. Composer and bottom dock controls stay anchored near the bottom safe area.

### Whitespace Philosophy

Empty states are very sparse: centered short text, generous blank space, and one low, wide charcoal action when needed. Populated screens use alignment and separators rather than boxed regions.

# Navigation appearance

The visual shell uses compact monochrome glyphs, circular hit regions, and a floating pill dock. The selected state is indicated by a pale raised segment and dark icon; inactive items remain gray.

# Components

### Buttons

Primary buttons are wide charcoal rounded rectangles with white centered text. Header actions are small monochrome glyph buttons with no filled background unless inside the floating dock or a sheet control.

Text tabs are label-only controls with a thin selected underline. Keep inactive labels gray and do not add pills or heavy filled chips.

### Cards & Containers

Rows stay flat on white. Settings rows use full-width rounded pale groups only when the sampled screen groups several related rows together. Message and audio bubbles are lightly tinted rounded rectangles with compact metadata and no heavy shadow.

### Inputs & Forms

Search fields are short, pale, and rounded. The message composer is a low pill with placeholder text and adjacent attachment, emoji, and microphone controls. Focused fields may gain a thin dark outline.

### Status & Build Page

Status should be small and adjacent to the related object: online dots on avatars, last-seen copy under names, checkmarks near timestamps, pin indicators in message metadata, and concise red error text inside failed content.

### Navigation

Keep navigation glyphs visually subordinate to content. Use consistent stroke weight, compact geometry, gray inactive color, and black selected color. Do not use default iOS blue tint for shell controls.

# Imagery and icons

Observed imagery is limited to avatars, shared media, reactions, waveform-like audio content, and the text logo. There is no independently proven standalone illustration system in the sampled WB Chat screens.

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists, chats, settings |
| 1 | Pale gray rounded surface | Search, composer, dock, grouped settings |
| 2 | Light tinted rounded block | Message and audio content |
| 3 | Sheet over gray scrim | Selection, compose, settings details |

### Decorative Depth

Use almost no shadow. Reserve soft shadow for the floating bottom dock, sheets, and native overlays. Do not introduce gradients, decorative blobs, or promotional art into the messenger chrome.

# States

Represent selected, inactive, focused, online, last-seen, delivered, pinned, reaction, voice, failed transcription, destructive, empty, and sheet states with the small visual treatments above. Keep every state compact and tied to the relevant row or message.

# iOS adaptation

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without changing the low-decoration hierarchy. Restyle native sheets, text fields, buttons, and tab controls so their visible surfaces match the sampled screens.

### Touch Targets

Rows, tabs, header glyphs, composer actions, message bubbles, reaction controls, and dock items must retain at least 44pt hit areas even when their visible marks are small.

### Collapsing Strategy

Preserve the top identity area, main content column, composer, and bottom shell first. Move secondary controls into sheets or overflow menus before reducing row spacing below readable limits.

### Image Behavior

Use `cover` for avatars and shared photos. Use `contain` for files, stickers, and waveform-like audio or attachment thumbnails. Keep all image regions clipped to the observed circle or rounded-rectangle shapes.

# Anti-generic checklist

- Do not substitute default iOS blue for selected tabs, links, composer focus, or shell controls.
- Do not wrap every row or message in large cards.
- Do not introduce decorative gradients, hero art, or onboarding illustrations without direct visual evidence.
- Do not replace the floating pill dock with an unstyled `TabView`.
- Do not mix arbitrary SF Symbols with inconsistent stroke, fill, or size.
- Do not flatten avatars, reactions, shared media, or audio content into plain text.
- Do not use one radius for every surface; keep fields, bubbles, sheets, and dock visually distinct.

Source-specific guardrails retained from the review:

### Do

- Keep the chrome quiet and monochrome.
- Let avatars and message content carry most color.
- Keep rows flat and scannable.
- Use sparse empty states with one clear visual action.
- Preserve compact Russian text rhythm and gray metadata.

### Don't

- Do not add promotional illustration or brand gradients to chat surfaces.
- Do not overdecorate empty states.
- Do not leave native controls in default blue.
- Do not turn settings groups into nested cards.
- Do not replace observed avatars, reaction glyphs, or content media with emoji or arbitrary icons.

</design-context>
