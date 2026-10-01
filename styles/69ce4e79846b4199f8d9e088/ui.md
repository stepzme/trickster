<design-context>
---
version: 1
platform: iOS
name: Not-Boring-Vibes-design-analysis
description: "An immersive focus and sound interface presented as a navigable low-poly world. Full-screen landscapes shift from misty forests to luminous pastel fields, while sparse translucent controls, condensed display type, and tiny status marks keep attention on atmosphere rather than app chrome."
colors:
  primary: "#F6C944"
  on-primary: "#111111"
  primary-soft: "#40391F"
  accent: "#F2A7C5"
  accent-secondary: "#A8F2E4"
  ink: "#FFFFFF"
  ink-muted: "#C7C4C7"
  ink-subtle: "#77747A"
  canvas: "#08090A"
  surface-1: "#171719"
  surface-2: "#2B2A2D"
  hairline: "#454349"
  semantic-success: "#B9F0A5"
  semantic-danger: "#F16C75"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: DIN Condensed, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: DIN Condensed, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: DIN Condensed, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: DIN Condensed, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: DIN Condensed, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.4 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

(Not Boring) Vibes makes focus modes feel like places. Energy, presence, sound, and timer settings alter a full-screen low-poly environment instead of filling a conventional control panel.

# Non-negotiable visual invariants

- The sampled screens consistently show Full-screen animated landscape.
- Let atmosphere carry mode meaning.
- Keep controls sparse and stable.
- Use a coherent low-poly world.
- Give every mode a distinct palette.
- Preserve readable edge contrast.
- The active vibe is a full-bleed world with a slim vertical control rail and one bottom-corner mode tile.
- Settings switch to a conventional single-column list.

# Color and surfaces

- **Energy Gold** ({colors.primary}): Focus energy, sunlight, and active marks.
- **Atmosphere Pink** ({colors.accent}): Calmer sky and presence shifts.
- **Iridescent Mint** ({colors.accent-secondary}): Onboarding energy traces and cool modes.

- **Canvas** ({colors.canvas}): Deep backdrop behind each generated world.
- **Surface 1** ({colors.surface-1}): Settings, membership, and support.
- **Surface 2** ({colors.surface-2}): Translucent in-world controls.
- **Hairline** ({colors.hairline}): Quiet separation.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **DIN Condensed** — mode names and onboarding statements.
- **SF Pro Text** — controls and explanatory copy.
- **DIN Condensed** — compact labels and authored emphasis.

- {typography.display-xl} — 36 points — 700 — Mode statement
- {typography.headline} — 22 points — 700 — Screen heading
- {typography.card-title} — 16 points — 600 — Vibe, timer, or setting label
- {typography.body} — 14 points — 400 — Details and forms
- {typography.caption} — 10 points — 400 — Metadata
- {typography.button} — 15 points — 600 — Primary action

- Keep mode names terse and atmospheric.
- Use tall condensed type for authored statements.
- Let the environment communicate energy before copy.
- Keep utility copy outside the visual focal point.

Use **Inter** or the platform system sans when the reference fonts are unavailable; preserve relative weight and scale.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

The active vibe is a full-bleed world with a slim vertical control rail and one bottom-corner mode tile. Settings switch to a conventional single-column list.

In-world UI should feel sparse; open landscape and sky replace card spacing.

Use layered low-poly terrain, fog, soft sunlight, and slow parallax. Chrome should appear suspended above the world.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

The live scene owns the primary experience; settings, guide, achievements, icons, widgets, wallpapers, shop, and membership sit outside it.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary choices are large scene or mode tiles. In-world controls stay translucent and circular; membership actions use a clear pill.

Use cards only for settings, guide, shop, membership, and widgets. The active session remains full bleed.

Energy, presence, sound, and timer use short direct controls with immediate environmental feedback.

Show selected mode, energy level, timer, sound, and session progress with compact icon-plus-label cues.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

The landscape is the interface. Preserve horizon, route, and atmospheric depth; position controls in stable edge zones.

Fill the viewport while keeping the horizon and main path visible. Crop peripheral terrain, never the scene's focal landmark.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show selected mode, energy level, timer, sound, and session progress with compact icon-plus-label cues.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every interactive control at least 44 points while preserving the reference density.
- Preserve the full scene, selected vibe, timer, and exit. Move guide and secondary sound controls into a sheet.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not place opaque panels over the landscape.
- Do not mix realistic photography into the world.
- Do not overload sessions with metrics.
- Do not use long paragraphs in-world.
- Do not flatten modes into ordinary tabs.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
