<design-context>
---
version: 1
platform: iOS
name: Opal-design-analysis
description: "An immersive black focus system with translucent glass controls, mint creation accents, electric-blue permission guidance, iridescent imagery, soft neon edges, and stable thumb-level timer actions."
colors: {primary: "#B9FFD0", on-primary: "#102018", primary-focus: "#8CE8AC", ink: "#F7F8F8", ink-muted: "#B0B2B5", ink-subtle: "#797B80", ink-tertiary: "#515359", canvas: "#000000", surface-1: "#171719", surface-2: "#242529", surface-3: "#323338", surface-4: "#404147", hairline: "#2A2B2F", hairline-strong: "#42444A", hairline-tertiary: "#585A61", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#121316", brand-secure: "#147BFF", semantic-success: "#B9FFD0", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 8, sm: 12, md: 18, lg: 24, xl: 30, xxl: 34, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10 14}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Opal frames focus as a premium immersive state through black glass, glowing atmospheric cards, stable duration controls, and restrained mint or blue emphasis.

# Non-negotiable visual invariants

- The recurring color treatment uses black glass.
- The principal image treatment uses soft neon imagery.
- Characteristic content and controls use mint add controls.
- The recurring color treatment uses blue instructional arrows.
- Characteristic content and controls use translucent pills.
- Characteristic content and controls use rounded preset cards.
- Navigation or control chrome uses an icon-only dock.
- Preserve the premium dark atmosphere and selective luminous emphasis.

# Color and surfaces

Mint identifies creation, positive focus, and primary start states. Electric blue is used for system permission guidance and instructional emphasis.

Use black as the canvas, translucent charcoal for controls, and blurred dark imagery behind focus modules.

White carries timer and preset titles; cool gray supports schedules, descriptions, and inactive tools.

Mint marks constructive state, blue guides setup, and amber flame indicates streak without competing with primary action.

# Typography

Use SF Pro Display for focus and timer headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with duration, blocked scope, schedule, or focus state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans with calm proportions and legible small schedule metadata.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home uses horizontal preset rails and two-column soundscapes; Blocks uses a single vertical schedule list.

Allow dark negative space around score and timer state, while preset libraries can become visually dense.

Use translucent glass, blur, emitted light, and restrained neon borders; avoid conventional opaque card shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five line icons on black with a subtle white glow for the active destination.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Start Timer uses a wide translucent mint-tinted pill; Add uses compact dark pills and mint circular creation.

Preset cards combine atmospheric art, title, benefit, schedule, and one Add action; block rows remain plain and dark.

System permission and block selection controls should inherit glass surfaces, blue guidance, and rounded geometry.

Keep loading, active timer, next start, streak, and blocked scope close to the relevant focus control.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Preset imagery sits in rounded portrait cards; soundscapes use wide rounded thumbnails; primary controls are pills.

Preserve luminous subjects and horizons inside rounded crops, with enough dark area for labels.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep loading, active timer, next start, streak, and blocked scope close to the relevant focus control.

Mint marks constructive state, blue guides setup, and amber flame indicates streak without competing with primary action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Keep timer duration, block scope, and Start fixed; reduce descriptive copy and preset previews first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not flatten atmospheric imagery into generic gradient cards.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>
