<design-context>
---
version: 1
platform: iOS
name: Mail-ru-design-analysis
description: "A multi-product productivity shell on white, organized by crisp blue actions, black type, pale-gray cards, pastel product accents, compact lists, and playful 3D empty-state artwork."
colors:
  primary: "#0787F5"
  on-primary: "#FFFFFF"
  primary-focus: "#006ECD"
  ink: "#202024"
  ink-muted: "#7B7B83"
  ink-subtle: "#A8A8AF"
  ink-tertiary: "#CDCDD2"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F8"
  surface-2: "#EFEFF3"
  surface-3: "#E6E6EB"
  surface-4: "#DADAE0"
  hairline: "#E9E9ED"
  hairline-strong: "#D2D2D8"
  hairline-tertiary: "#BABAC2"
  inverse-canvas: "#202024"
  inverse-surface-1: "#303036"
  inverse-surface-2: "#42424A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#B67AF4"
  semantic-success: "#55C88A"
  semantic-overlay: "#202024"
typography:
  display-xl: {fontFamily: VK Sans Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: VK Sans Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: VK Sans Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: VK Sans Display, fontSize: 20, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: VK Sans Text, fontSize: 15, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: VK Sans Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: VK Sans Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: VK Sans Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: VK Sans Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: VK Sans Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: VK Sans Text, fontSize: 13, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: VK Sans Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 11 16}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  list-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10 12}
  note-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  tag-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7 10}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

Mail.ru is a calm productivity hub where blue actions and pastel product accents unify mail, cloud, tasks, notes, and account storage.

# Non-negotiable visual invariants

- The recurring color treatment uses White list-led surfaces.
- Preserve list scanning and product continuity.
- Use pastel accents sparingly.
- Keep creation easy to reach.
- Style native controls consistently.
- Mail and contacts use lists; notes use stacked cards; cloud and services combine cards with short lists.
- Keep operational lists compact and reserve open space for empty states and account overview.

# Color and surfaces

Blue identifies the suite and primary actions. Lavender, mint, cyan, and pink distinguish products without changing interaction priority.

White is primary; very pale gray and tinted cards group cloud, notes, storage, and settings.

Near-black carries titles and message content; gray carries sender detail, dates, storage, and descriptions.

Green marks available capacity or success; red remains for destructive mail and account actions.

# Typography

Use VK Sans or a neutral system sans across lists, messages, tasks, notes, and settings.

- display-lg — 30 points — 700 — Empty-state title
- headline — 20 points — 600 — Product title
- card-title — 15 points — 500 — Sender or note title
- body — 12 points — 400 — Preview and description
- caption — 9 points — 400 — Date, tag, navigation

- Keep sender and title above preview metadata.
- Use consistent type across products.
- Keep empty-state guidance brief.

Inter is suitable; preserve compact Cyrillic and readable message previews.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points row rhythm, and 12 points screen gutters.

Mail and contacts use lists; notes use stacked cards; cloud and services combine cards with short lists.

Keep operational lists compact and reserve open space for empty states and account overview.

Use soft illustration shading; ordinary content remains flat with subtle separators.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep five product destinations fixed; active state is dark or blue while inactive items stay light gray.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary creation uses a blue pill; secondary actions are pale or textual.

Mail rows remain flat; notes and cloud recommendations use pale rounded cards.

Search and compose inputs are white or pale gray with blue focus and compact controls.

Empty states pair one illustration with short guidance and a visible blue create action.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Attachments use compact rounded thumbnails. Empty-state objects stay centered and uncropped with generous white space.

Contain illustrations, crop attachments predictably, and preserve avatar circles.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Empty states pair one illustration with short guidance and a visible blue create action.

Green marks available capacity or success; red remains for destructive mail and account actions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Folders, rows, attachments, compose, filters, and navigation remain at least 44 points.
- Truncate previews before titles; stack card actions and scroll chips horizontally.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not give every product a competing primary color.
- Do not over-round mail rows.
- Do not crowd empty states.
- Do not use heavy shadows.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Calendar was not visually sampled.
- Complex compose attachment states were not represented.
- Tablet and landscape layouts were not represented.

</design-context>
