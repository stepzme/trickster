<design-context>
---
version: 1
platform: iOS
name: Headspace-design-analysis
description: "A warm meditation interface that pairs white content surfaces with saturated yellow, orange, purple, and pink illustration fields. Friendly editorial cards, soft curves, and oversized playback controls make wellness content feel approachable rather than clinical."
colors: { primary: "#FFB800", on-primary: "#202020", primary-soft: "#FFF0C7", accent: "#6C2DA8", ink: "#242427", ink-muted: "#6E6E73", ink-subtle: "#A4A4AA", canvas: "#FFFFFF", surface-1: "#F7F4F2", surface-2: "#F1ECE8", hairline: "#E8E2DD", semantic-success: "#3EA779", semantic-warning: "#FFB800", semantic-danger: "#D95D5D", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Headspace Apercu, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: Headspace Apercu, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: Headspace Apercu, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: Headspace Apercu, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Headspace Apercu, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Headspace Apercu, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Headspace Apercu, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Headspace Apercu, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Headspace Apercu, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Headspace Apercu, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Headspace Apercu, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Headspace Apercu, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 36, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.full}", padding: [14, 20]}
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  player: { backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xs}", padding: 20 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Headspace turns meditation discovery and playback into a friendly editorial experience with warm color and expressive flat illustration.

# Non-negotiable visual invariants

- Let illustration carry mood.
- Keep duration visible before starting.
- Make pause and close unmistakable.
- Discovery stacks recents, horizontal content rails, and categories; playback becomes a focused full-screen canvas.
- Let each practice breathe while keeping enough neighboring content visible to invite exploration.

# Color and surfaces

Use yellow and orange for active practice; purple and pink distinguish sleep and editorial content.

Keep discovery on white and reserve full-bleed color for content art and playback.

Use charcoal for primary copy, warm gray for metadata, and white only on sufficiently dark art.

Use green for completion, yellow for active practice, and red sparingly for errors.

# Typography

Use a friendly rounded grotesk; fall back to Avenir Next or system sans.

Use 27–32 points for practice titles, 22 points for sections, 16 points cards, 14 points body, and 10–12 points metadata.

Keep titles conversational, time labels compact, and playback state immediately legible.

Use Avenir Next, Nunito Sans, or the platform sans without exaggerated rounding.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 18 points gutters, 12 points card gaps, and 24 points between content rails.

Discovery stacks recents, horizontal content rails, and categories; playback becomes a focused full-screen canvas.

Let each practice breathe while keeping enough neighboring content visible to invite exploration.

Layer broad organic color bands and flat characters instead of physical shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Today, Explore, and Profile stay in the bottom bar; playback uses a clear close action.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use large charcoal circular playback controls and simple pill actions.

Use illustrated practice cards with title, type, and duration under or over the artwork.

Keep account and preference fields calm, lightly filled, and clearly labeled.

Show loading, playing, paused, progress, favorite, and completion without interrupting the calm surface.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Crop flat illustrations into consistent rounded cards; allow playback color bands to fill the screen.

Use consistent aspect ratios for discovery art and crop only within large quiet color fields.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show loading, playing, paused, progress, favorite, and completion without interrupting the calm surface.

Use green for completion, yellow for active practice, and red sparingly for errors.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep cards, menus, tabs, playback, progress, and close controls at least 44 points.
- Preserve practice title, duration, playback, progress, and exit; reduce secondary artwork details first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use clinical wellness imagery.
- Do not overcrowd the player.
- Do not mix many accent palettes in one card.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Tokens were inferred visually from sampled mobile screens.
- Complete Lesson was reviewed as a five-screen flow.
- Subscription and onboarding states were not sampled.

</design-context>
