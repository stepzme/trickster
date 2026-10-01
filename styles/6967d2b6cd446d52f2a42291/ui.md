<design-context>
---
version: 1
platform: iOS
name: Monese-design-analysis
description: "A mobile design system defined by bright-blue branding, airy white surfaces, pale gradients, card-first banking, and compact transactions."
colors: {primary: "#1688E8", on-primary: "#FFFFFF", primary-focus: "#1688E8", ink: "#20242B", ink-muted: "#777981", ink-subtle: "#A7A8AE", ink-tertiary: "#CACBD0", canvas: "#FFFFFF", surface-1: "#F4F8FC", surface-2: "#F4F8FC", surface-3: "#E2E3E7", surface-4: "#D6D7DC", hairline: "#E5E6E9", hairline-strong: "#CFD0D5", hairline-tertiary: "#B6B8BF", inverse-canvas: "#17181C", inverse-surface-1: "#292A30", inverse-surface-2: "#3B3D45", inverse-ink: "#FFFFFF", brand-secure: "#7DD8F7", semantic-success: "#34A86B", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  compact-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7 10}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

Monese is defined by bright-blue branding, airy white surfaces, pale gradients, card-first banking, and compact transactions.

# Non-negotiable visual invariants

- The recurring color treatment uses bright-blue branding.
- The recurring color treatment uses airy white surfaces.
- The recurring color treatment uses pale gradients.
- Characteristic content and controls use card-first banking.
- The sampled screens consistently show compact transactions.
- Preserve the defining color and content hierarchy.
- Keep primary actions easy to reach.
- Style native controls to inherit the visual system.

# Color and surfaces

Bright blue carries brand, active navigation, and finance actions.

Use the canvas for primary content and the grouped surface for controls, cards, and focused sections.

Primary text remains high-contrast; secondary metadata stays quieter than the current decision.

Use success, warning, and destructive colors only for their conventional meanings.

# Typography

Use SF Pro Display for headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 20 points — 700 — Section title
- card-title — 15 points — 600 — Primary item
- body — 12 points — 400 — Detail
- caption — 9 points — 400 — Metadata

- Lead with the current task or value.
- Align repeated metadata.
- Reserve emphasis for real decisions.

Inter is suitable; preserve hierarchy, contrast, and numeric clarity.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points card gaps, and 12–16 points screen gutters.

Home and Card stack modules; payments use lists and focused forms.

Dense content stays grouped; focused decisions receive more breathing room.

Let content imagery and approved visual language provide depth; keep ordinary controls restrained.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Preserve the reference navigation hierarchy and make only the active destination prominent.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions use the brand color; secondary actions use grouped surfaces and clear labels.

Account cards group balance, card visual, allowances, fees, and actions.

Inputs inherit the brand focus, shared radius, and text hierarchy instead of generic native styling.

Keep progress, result, and recovery close to the content or action they describe.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Contain card artwork and partner imagery inside clean rounded crops.

Preserve source aspect ratios and keep focal content inside safe areas.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep progress, result, and recovery close to the content or action they describe.

Use success, warning, and destructive colors only for their conventional meanings.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Preserve the main decision, stack complex groups, and reduce secondary detail before shrinking type.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not introduce unrelated decorative styles.
- Do not hide status or secondary conditions.
- Do not use heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
