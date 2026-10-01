<design-context>
---
version: 1
platform: iOS
name: My-MTS-design-analysis
description: "A modular telecom dashboard built from soft white and lavender surfaces, MTS magenta actions, cyan financial utilities, rounded account cards, and compact promotional story tiles."
colors: {primary: "#FF0032", on-primary: "#FFFFFF", primary-focus: "#D9002B", ink: "#19191C", ink-muted: "#686970", ink-subtle: "#9B9CA3", ink-tertiary: "#C4C5CA", canvas: "#F7F6FB", surface-1: "#FFFFFF", surface-2: "#F0EEF5", surface-3: "#E5E2EA", surface-4: "#D8D4DE", hairline: "#E6E3EA", hairline-strong: "#CDC9D2", hairline-tertiary: "#B4AFBA", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#41424A", inverse-ink: "#FFFFFF", brand-secure: "#8872F4", semantic-success: "#2CCB8A", semantic-overlay: "#1A1B20"}
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
rounded: {xs: 6, sm: 12, md: 18, lg: 24, xl: 28, xxl: 32, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

My MTS is a broad service dashboard made manageable through large white modules, persistent bottom destinations, bright magenta actions, and color-coded utilities.

# Non-negotiable visual invariants

- Primary screens use soft lavender canvas.
- The recurring color treatment uses white rounded modules.
- The sampled screens consistently show MTS magenta.
- The recurring color treatment uses cyan money icons.
- The recurring color treatment uses purple premium states.
- The sampled screens consistently show story rails.
- The sampled screens consistently show generous dashboard spacing.
- Preserve the modular hierarchy and color-coded service domains.

# Color and surfaces

Magenta owns top-up, account emphasis, active navigation, and major commitments; cyan supports transfers and payment utilities; purple marks premium.

Use pale lavender-gray behind crisp white modules, with slightly tinted sheets for focused decisions.

Near-black leads balances and service titles; restrained gray carries allowance, account, and explanatory detail.

Green confirms payment or available status; blue communicates information; warning colors stay distinct from brand magenta.

# Typography

Use SF Pro Display for balances and service headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with balance, allowance, service status, or payment destination.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans with clear tabular numerals and robust small Cyrillic.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home uses one wide modular column and a compact story rail; Money uses action grids followed by wide payment sections.

Separate major service modules generously while keeping their internal rows concise.

Rely on grouped surface contrast and broad rounded forms; use soft glow or 3D art only inside bounded campaigns and receipts.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations with magenta for the active item and soft gray for inactive icons and labels.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Full-width magenta buttons drive top-up and service commitments; cyan icons identify money actions without replacing primary hierarchy.

Modules combine a heading, one decisive metric, short status, and a single action or disclosure affordance.

Search and payment fields use pale fills, clear labels, and magenta focus or confirmation styling.

Keep debt, allowance limits, payment outcome, connected services, and transfer destination close to the affected module.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Campaign tiles use compact rounded frames; service icons stay simple and contained in tinted rounded squares.

Keep promotional visuals within story or banner bounds and preserve text-safe areas; do not let them overtake operational modules.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep debt, allowance limits, payment outcome, connected services, and transfer destination close to the affected module.

Green confirms payment or available status; blue communicates information; warning colors stay distinct from brand magenta.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Retain balance, primary action, and tariff facts; fold secondary services and story content below the core account state.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not make every module promotional or use magenta for all secondary icons.
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
