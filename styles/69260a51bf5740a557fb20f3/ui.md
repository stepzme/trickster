<design-context>
---
version: 1
platform: iOS
name: Moonly-design-analysis
description: "A mystical dark mobile system with warm editorial serif titles, violet-glowing controls, translucent charcoal cards, celestial 3D objects, and image-led personalized guidance."
colors: {primary: "#6A4BE8", on-primary: "#FFFFFF", primary-focus: "#5638C8", ink: "#F7F3F1", ink-muted: "#B1ABB8", ink-subtle: "#77727F", ink-tertiary: "#54505B", canvas: "#17181C", surface-1: "#202126", surface-2: "#282832", surface-3: "#343441", surface-4: "#41404D", hairline: "#343540", hairline-strong: "#4A4956", hairline-tertiary: "#5C5A68", inverse-canvas: "#F5F1EC", inverse-surface-1: "#E9E3DC", inverse-surface-2: "#DCD4CC", inverse-ink: "#17181C", brand-secure: "#FF9F45", semantic-success: "#52C99A", semantic-overlay: "#08090B"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 38, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: Georgia, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: Georgia, fontSize: 26, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: Georgia, fontSize: 24, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6, sm: 10, md: 16, lg: 22, xl: 28, xxl: 32, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 8 10}
---

# Overview

Moonly is a dark celestial interface where editorial cards, symbolic artwork, and a stable five-tab ritual navigation make dense spiritual content feel personal and browsable.

# Non-negotiable visual invariants

- Primary screens use near-black canvas.
- The sampled screens consistently show warm serif headings.
- The recurring color treatment uses violet glow.
- Characteristic content and controls use large visual cards.
- The sampled screens consistently show amber celestial accent.
- Navigation or control chrome uses softly translucent navigation.
- Preserve the dark celestial atmosphere and editorial hierarchy.
- Keep the primary task and current state immediately legible.

# Color and surfaces

Violet identifies selected practices and focused controls; warm amber marks lunar identity and important celestial details.

Use near-black for the canvas, charcoal for stacked cards, and slightly violet surfaces for segments and ritual containers.

Warm white leads titles; lavender-gray supports instructions, dates, and locked descriptions.

Green is reserved for positive progress; amber and violet remain brand signals rather than general warnings.

# Typography

Use Georgia for editorial headings and SF Pro Text for controls, content, and metadata.

- display-lg — 32 points — 700 — Hero or state
- headline — 24 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with the day, ritual, or reading.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

A high-contrast editorial serif may replace Georgia; pair it with a neutral system sans and preserve the strong contrast.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Calendar and practice views use one wide column, horizontal day strips, and edge-peeking card rails.

Use generous breathing room around symbolic content, while related daily cards can stack tightly.

Let celestial glows, translucent layers, and artwork create depth; ordinary controls stay restrained.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a floating dark rounded bar with five labeled symbols; warm or violet emphasis marks the active destination.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary ritual actions use violet with white labels; secondary actions use dark filled surfaces and subtle outlines.

Daily guidance cards combine a small category label, large editorial statement, artwork, and a clear chevron.

Onboarding fields stay minimal on the dark canvas, with warm focus accents and progress visible above.

Place locks, progress, timing, and completion close to the ritual or reading they affect.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Crop atmospheric scenes to rounded portrait cards; keep planets and tarot figures fully legible inside safe areas.

Preserve focal figures and celestial objects; use overlays only to protect text contrast.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Place locks, progress, timing, and completion close to the ritual or reading they affect.

Green is reserved for positive progress; amber and violet remain brand signals rather than general warnings.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Keep the symbolic subject and current reading, stack controls, and trim explanatory copy before shrinking type.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not turn every surface purple or use generic bright gradients.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
