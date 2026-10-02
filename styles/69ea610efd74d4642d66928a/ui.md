<design-context>
---
version: 1
platform: iOS
name: Pillowtalk-design-analysis
description: "An immersive near-black journaling interface pairs lowercase white typography, acid-lime selection, large blurred photographic cards, organic vector art, and navigation that dissolves into the dark canvas."
colors:
  canvas: "#080808"
  surface-primary: "#151515"
  surface-secondary: "#EFEDE7"
  accent-primary: "#D9FF35"
  accent-secondary: "#8B63E6"
  text-primary: "#FFFFFF"
  text-secondary: "#9A9A9A"
  divider: "#303030"
  destructive: "#FF6B5F"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 40, fontWeight: 500, lineHeight: 45}
  title: {fontFamily: "SF Pro Rounded", fontSize: 30, fontWeight: 500, lineHeight: 35}
  section: {fontFamily: "SF Pro Rounded", fontSize: 21, fontWeight: 500, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 20
  section-gap: 30
  card-padding: 20
  control-gap: 12
rounded:
  control: 18
  card: 30
  sheet: 30
  pill: 999
components:
  white-primary-pill: {}
  blurred-content-card: {}
  lime-choice-pill: {}
  dark-integrated-tab-bar: {}
  organic-graphic-panel: {}
---

# Overview

Pillowtalk is an immersive dark interface rather than a conventional card-on-gray utility. Near-black screens carry subtle glossy banding, soft lowercase typography, oversized blurred photo cards, and high-contrast organic graphics. Acid lime identifies progress and choice; white pills carry decisive actions. Navigation and chrome recede into the black canvas so photography, symbolic illustration, or one recording focal shape can dominate each screen.

# Non-negotiable visual invariants

- The base is near-black with subtle tonal banding or vignette, not flat system black or grouped gray.
- Large lowercase headlines use relaxed wrapping and regular-to-medium weight rather than heavy title styling.
- Acid lime is reserved for selection, progress, active emphasis, and authored graphic forms.
- Primary actions are broad white or off-white pills on black, with dark text and generous height.
- Content imagery appears as very large, highly rounded, softly blurred or tightly cropped cards that occupy substantial viewport area.
- Bottom navigation blends into the dark canvas; active content is white, inactive content is gray, and a floating white circular add control is visually separate.
- Organic authored illustrations remain large symbolic compositions, never generic icons or decorative afterthoughts.

# Color and surfaces

Use near-black as the continuous canvas, with slight vertical bands, vignette, or glow creating depth. Charcoal supports lists, disabled controls, and translucent overlays. White or warm off-white forms the strongest action and selected-segment contrast. Acid lime is the signature accent, while violet, lavender, orange, peach, olive, muted blue-green, and coral appear in authored graphics and atmospheric content surfaces. Pattern dashboards may introduce off-white metric cards and a dark-green heatmap without turning the whole app light. Dividers are thin dark gray. Destructive coral should remain semantic. Default iOS blue, flat white navigation bars, and generic grouped backgrounds visibly contradict this system.

# Typography

Use SF Pro Rounded as the closest iOS-safe display substitute and SF Pro Text for compact labels and body copy. Headlines are large, frequently lowercase, and rely on generous scale and placement more than bold weight. Body text stays compact and high contrast in white or gray. Navigation and control labels are small, clean, and medium weight. Preserve deliberate short line lengths and natural wrapping rather than filling space with extra copy. With Dynamic Type, allow titles to grow vertically, keep one dominant message per screen, and move artwork or controls below rather than compressing type.

# Screen composition

Onboarding places a slim progress treatment and quiet back or skip control below the top safe area, followed by a large headline, a central authored illustration, and a bottom stack of pill choices or a full-width CTA. It uses large negative space and one visual idea at a time.

Feed-like screens stack oversized rounded image cards vertically, often letting the next card crop at the viewport edge to signal scrolling. Gallery screens use a two-column image composition with a fine divider. Entry/history screens pair a horizontal date strip with large dark or image-backed entry cards and preserve generous empty space when unpopulated.

Pattern dashboards place a pill segment below the title and then mix off-white metric cards, heatmap modules, and saturated authored graphic panels. Recording and analysis become full-screen color or glow environments with one central form and sparse edge controls; bottom navigation disappears. Typical horizontal inset is about 20 points, card gaps are 12–16 points, and major sections use 28–32 points.

# Navigation appearance

Primary navigation has four icon-and-label items directly on the dark lower canvas plus a prominent floating white circular add button. The active item is white, inactive items are medium gray, and there is no light tab-bar slab. Detail, recording, and settings screens use compact circular back or close controls near the top safe area. Segmented controls are pill-shaped with a white or light-gray selected segment and muted dark alternatives. Modal sheets and native permission or sign-in panels can interrupt the immersive surface, but surrounding custom chrome remains black. Destinations and routes are not defined here.

# Components

- **Primary action:** full-width white or warm off-white pill with centered dark medium label; disabled treatment is a dark translucent pill with muted text.
- **Choice pill:** stacked large-radius row; selected state becomes acid lime with a dark checkmark or label, while unselected rows remain dark or outlined.
- **Blurred content card:** very large radius, photographic or gradient fill, close crop, minimal overlay text, and strong vertical scale.
- **Floating add control:** white circle visually offset from the four-item bottom navigation, with a compact black plus.
- **Segmented control:** dark rounded track with a light selected capsule and dark label; unselected labels stay subdued.
- **Passcode input:** four large outlined capsules paired with an open custom numeric keypad using oversized white numerals.
- **Recording control:** sparse circular monochrome buttons around one central glowing or graphic focal mass; avoid toolbars and card containers.

# Imagery and icons

Photography is a major surface, not thumbnail decoration: use soft focus, close crops, and blurred color so cards read atmospherically. Authored illustration is a separate system of large biomorphic filled forms used in onboarding, locked or success moments, processing, and pattern panels; its reserved space must not be removed while awaiting final assets. Functional icons remain small white monochrome glyphs. The three-lobed brand mark may act as a logo or processing glyph but should not be substituted for every illustration. Heatmaps, weekly bars, and counters are data visuals with their own restrained geometry. Keep photography, illustration, brand mark, icons, and charts distinct.

# States

Loading and processing use the organic brand form or a restrained pulsing/glowing focal shape on the dark canvas. Empty entry and pattern states preserve extensive negative space with a single clear message and, where observed, symbolic art. Selected choice rows turn acid lime. Disabled actions stay dark and translucent. Microphone permission and Apple sign-in use native iOS panels above the custom black surface. Suggestion and sharing use sheets or sheet-like overlays. Keyboard, paste, and autofill states remain visually sparse. No explicit error screen was observed, so an error-specific composition should not be inferred.

# iOS adaptation

Extend the near-black canvas behind both safe areas while placing titles and controls below the status bar and above the home indicator. Use vertical scrolling for feed, history, onboarding, and dashboard content; retain the large card crop rather than fitting every module onscreen. Reserve a stable bottom inset for the integrated four-item navigation and floating add control. Recording screens should hide that navigation and protect edge actions from system gestures. Keyboard avoidance must keep the active field and bottom action visible. Use native permission and sign-in behavior, 44-point targets, semantic VoiceOver order, and reduced-motion alternatives for pulsing states. On compact widths, preserve one dominant visual mass and allow headline wrapping; do not shrink illustrations, cards, or controls into desktop-like grids. The sampled system is dark-first; do not generate a generic automatic light theme.

# Anti-generic checklist

- Do not use a white or grouped-gray `NavigationStack`/`Form` shell.
- Do not apply default blue tint to links, selection, toggles, or navigation.
- Do not place content in many uniform white cards; preserve dark continuity and a few large media surfaces.
- Do not ship an unstyled `TabView` with a material bar or evenly weighted five-tab layout.
- Do not replace blurred photography or large illustration with arbitrary SF Symbols.
- Do not make every heading bold, title-cased, and nearly the same size.
- Do not use one generic radius across pills, media cards, sheets, and passcode capsules.
- Do not add explanatory or mood-setting copy when the current image, state, or action already communicates it.

</design-context>
