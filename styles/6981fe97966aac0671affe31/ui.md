<design-context>
---
version: 1
platform: iOS
name: Oura-design-analysis
description: "A cinematic dark health interface that layers white metrics, translucent data cards, and delicate charts over immersive nature photography. Elegant serif status statements sit beside compact neutral sans-serif labels. Cool blue, teal, and violet glows distinguish health domains without turning the interface into a dashboard of bright colors; a frosted floating navigation bar keeps Today, Vitals, My Health, and logging within reach."

colors:
  primary: "#DDF5FF"
  on-primary: "#0A0B0E"
  accent-blue: "#78CFEA"
  accent-teal: "#63D7C4"
  accent-violet: "#A796D7"
  accent-rose: "#D37C9A"
  ink: "#FFFFFF"
  ink-muted: "#C8C9CF"
  ink-subtle: "#8F929B"
  canvas: "#07080B"
  surface-1: "#15171D"
  surface-2: "#20232B"
  surface-glass: "#25262BCC"
  hairline: "#383A42"
  inverse-canvas: "#FFFFFF"
  inverse-ink: "#101116"
  semantic-success: "#6AD1A9"
  semantic-warning: "#E2C070"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 44
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -1.0
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 36
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: -0.7
  display-md:
    fontFamily: Editorial Serif
    fontSize: 30
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -0.4
  headline:
    fontFamily: System Sans
    fontSize: 22
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.3
  button:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.7
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 20
  xl: 26
  xxl: 32
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  metric-card:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16
  health-panel:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16
  bottom-nav:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: [8, 12]
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.accent-blue}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: [4, 8]
  navigation-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 52
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: [24, 16]
---

# Overview

Oura presents health as an interpreted daily story. Full-screen landscapes and night skies establish emotional context; scores, arcs, charts, and short explanations float above them in dark translucent layers. Dense longitudinal data moves into dedicated Vitals, Trends, Reports, and My Health screens.

# Non-negotiable visual invariants

- Primary screens use Near-black canvas with immersive nature photography.
- Lead with one interpreted health story.
- Keep metrics readable over photography with controlled gradients.
- Pair every score with status and range context.
- Reserve serif for narrative emphasis.
- Move complex education to dedicated black overlays.
- The interface is one mobile column.
- Today uses full-width scenic heroes and stacked cards.

# Color and surfaces

- **Pale Blue** ({colors.primary}): High-emphasis line work and quiet selected states.
- **Blue** ({colors.accent-blue}): Readiness and stress-related status.
- **Teal** ({colors.accent-teal}): Positive health and recovery.
- **Violet** ({colors.accent-violet}) and **Rose** ({colors.accent-rose}): Sleep and stress atmosphere.

- **Canvas** ({colors.canvas}): Default black health canvas.
- **Surface 1** ({colors.surface-1}): Menus, forms, and education panels.
- **Surface 2** ({colors.surface-2}): Nested controls and selected states.
- **Glass** ({colors.surface-glass}): Cards and floating navigation over imagery.
- **Inverse Canvas** ({colors.inverse-canvas}): Primary onboarding buttons.

- **Ink** ({colors.ink}): Scores, titles, charts, and primary copy.
- **Ink Muted** ({colors.ink-muted}): Explanations and timestamps.
- **Ink Subtle** ({colors.ink-subtle}): Inactive navigation and low-priority metadata.
- **Inverse Ink** ({colors.inverse-ink}): Text on white actions.

- **Success** ({colors.semantic-success}): Optimal, thriving, and looking-good states.
- **Warning** ({colors.semantic-warning}): Attention and approaching limits.
- **Overlay** ({colors.semantic-overlay}): Full-screen educational overlays.

# Typography

- **Editorial Serif** — daily narrative, bedtime ranges, major progress statements.
- **System Sans** — metrics, charts, navigation, settings, and explanatory text.
- **System Mono** — only for identifiers or technical device information.

- `{typography.display-xl}` — 44 points — 400 — Primary health number
- `{typography.display-lg}` — 36 points — 400 — Daily state statement
- `{typography.display-md}` — 30 points — 400 — Bedtime range
- `{typography.headline}` — 22 points — 600 — Screen heading
- `{typography.card-title}` — 17 points — 500 — Metric title
- `{typography.body}` — 14 points — 400 — Default explanation
- `{typography.caption}` — 11 points — 500 — Time and chart labels
- `{typography.button}` — 15 points — 600 — Primary action

- Use serif only for the human interpretation, not every data label.
- Pair each score with a status word and scale or range.
- Keep chart labels compact and high contrast.
- Center hero narratives; left-align cards, reports, and settings.

Use **New York** or **Cormorant Garamond** for the editorial role and **SF Pro / Inter** for system sans. Keep serif weight regular and avoid ornate contrast at small sizes.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 16 points, metric-card gaps 12 points, card interiors 16 points, and hero text groups 20–24 points. Floating navigation stays 12–16 points above the safe area.

The interface is one mobile column. Today uses full-width scenic heroes and stacked cards. Vitals uses a vertical card list; scores inside cards use a split layout between the value and horizontal range.

Photography supplies visual space. Keep overlays sparse enough that the landscape remains legible. Dense articles and reports move onto flat black rather than stacking over imagery.

Use photography, dark vertical gradients, restrained blur, and subtle colored edge glow. Avoid bright drop shadows and glossy card borders.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Today, Vitals, and My Health sit in a frosted bottom pill. A separate circular plus action opens logging. The top bar provides side menu, centered Oura mark, share, and ring/device status.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary onboarding actions are full-width white pills with dark labels. In-product secondary actions are translucent dark pills. Confirm and Edit share one compact detected-activity panel.

Metric cards use dark translucent gradients, large scores, status labels, horizontal ranges, and a chevron. My Health panels add one colored atmospheric glow and a compact interpretation badge.

Onboarding fields sit on near-black rectangular surfaces with small leading icons. Validation uses an inline check. Forms keep one white bottom action and minimal decoration.

States such as Optimal, Thriving, Looking Good, and Making Progress remain textual. Thin arcs, crowns, dots, and range markers reinforce the status without replacing it.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Landscape photography fills the hero and fades into black under text. Ring and charger renders remain centered, fully visible, and surrounded by black space. No distinct decorative illustration system was observed.

Use cover behavior for landscape heroes with the focal terrain kept behind the primary metric. Product renders use contain. Dark gradient overlays must maintain text contrast without obscuring the scene.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

States such as Optimal, Thriving, Looking Good, and Making Progress remain textual. Thin arcs, crowns, dots, and range markers reinforce the status without replacing it.

- **Success** ({colors.semantic-success}): Optimal, thriving, and looking-good states.
- **Warning** ({colors.semantic-warning}): Attention and approaching limits.
- **Overlay** ({colors.semantic-overlay}): Full-screen educational overlays.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep navigation, plus, metric cards, share, and side-menu controls at least 44 points. Educational-overlay close and previous/next controls need distinct safe-area spacing.
- Stack score and range when horizontal space becomes insufficient. Keep the hero statement centered and reduce type before cropping it. Side-menu rows remain a single scrollable column.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not show all health metrics as equally bright tiles.
- Do not use scenic photography behind dense reports.
- Do not make status color the only carrier of meaning.
- Do not add playful illustration to clinical data.
- Do not crowd the floating navigation with secondary actions.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact colors and typefaces were inferred from inspected screens.
- Video-only motion and ring animations were unavailable as still previews.
- Long health-detail flows were sampled at key steps rather than every repeated chart state.
- Tablet and landscape adaptations were not present.

</design-context>
