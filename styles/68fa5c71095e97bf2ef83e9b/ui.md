<design-context>
---
version: 1
platform: iOS
name: Wink-design-analysis
description: "A cinematic near-black entertainment system with heavy extended display type, vivid orange-red action gradients, poster-led shelves, and rounded media cards. Content imagery provides most color while the interface stays dark, bold, and immersive."

colors:
  primary: "#FF5A2E"
  on-primary: "#FFFFFF"
  primary-pressed: "#E94725"
  ink: "#FFFFFF"
  ink-muted: "#B7ADB6"
  ink-subtle: "#777078"
  canvas: "#080006"
  surface-1: "#19161A"
  surface-2: "#242126"
  surface-3: "#302B31"
  hairline: "#3B353D"
  semantic-success: "#62C97A"
  semantic-warning: "#FFB547"
  semantic-danger: "#FF4D6A"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Wink Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0 }
  display-lg: { fontFamily: Wink Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7 }
  display-md: { fontFamily: Wink Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4 }
  headline: { fontFamily: Wink Sans, fontSize: 22, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: Wink Sans, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Wink Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Wink Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Wink Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: Wink Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Wink Sans, fontSize: 11, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Wink Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Wink Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
---

# Overview

Wink is a dark entertainment canvas where large expressive headings, cinematic imagery, and one warm action color organize films, series, television, music, books, and sport.

# Non-negotiable visual invariants

- Let one hero or title lead each screen.
- Keep the warm action unmistakable.
- Preserve partial shelves as browse cues.
- Style native controls to inherit Wink's visual language.
- Heroes span edge to edge; poster shelves show partial next items; title pages use one continuous vertical column.
- Preserve black breathing room around section titles and actions, but let visual catalogs remain dense.

# Color and surfaces

Use orange-to-coral for watch, confirm, purchase, and the Wink mark. Hot pink may label originals or editorial badges, but never compete with the primary action.

Use an ink-black canvas, charcoal navigation, and softly differentiated dark cards. Light surfaces are exceptional overlays only.

Use white for titles, pale gray for synopsis and metadata, and dim gray for inactive navigation.

Use green for available or complete, amber for time-sensitive access, and coral-red for destructive or unavailable states.

# Typography

Use a wide geometric display sans for titles and a neutral sans for body copy.

Use 26–40 points heavy section and hero titles, 16–18 points card titles, 13–15 points body text, and 11–12 points metadata.

Keep headings short, allow intentional line breaks, and avoid dense paragraphs over imagery.

Use Druk Wide or a widened heavy grotesk for display; use SF Pro or Inter for body text.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 18 points gutters, 12 points card gaps, and 28–36 points between shelves.

Heroes span edge to edge; poster shelves show partial next items; title pages use one continuous vertical column.

Preserve black breathing room around section titles and actions, but let visual catalogs remain dense.

Use dark-to-transparent scrims over hero imagery, warm action gradients, and occasional luminous music artwork.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a five-item dark bottom bar with white active icon and muted inactive items; keep search, trends, and profile visible above discovery.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use full-width orange gradient pills for watch and confirm; style native buttons with the same fill, radius, weight, and pressed state.

Media cards prioritize artwork, then concise title, year, rating, or progress. Account cards use charcoal surfaces with one clear action.

Use dark filled fields with pale text, minimal hairlines, and warm focus/action treatment.

Represent rating, age, original, downloaded, reminder, and subscription status as compact badges or labeled rows.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Crop stills in wide editorial frames and posters in tall ratios. Keep faces and title artwork visible beneath scrims.

Use cover for heroes and stills, preserve poster ratios, and apply bottom scrims where text overlaps.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Represent rating, age, original, downloaded, reminder, and subscription status as compact badges or labeled rows.

Use green for available or complete, amber for time-sensitive access, and coral-red for destructive or unavailable states.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Watch, play, save, share, download, episode, and navigation targets require at least 44 points.
- Keep title, watch action, progress, and current media mode visible; collapse cast, extras, and secondary metadata.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use default iOS blue.
- Do not brighten the canvas to generic gray.
- Do not place long text directly on busy imagery.
- Do not give every card a border or shadow.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

Forty flow structures and representative screens across onboarding, discovery, title detail, music, and account settings were reviewed. Motion and playback chrome were not exhaustively captured.

</design-context>
