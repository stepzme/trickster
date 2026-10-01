<design-context>
---
version: 1
platform: iOS
name: My-Rostelecom-design-analysis
description: "A telecom account system pairing a deep navy-to-violet dashboard header with white grouped cards, vivid violet navigation, orange payment actions, and occasional hand-painted campaign art."
colors: {primary: "#8200FF", on-primary: "#FFFFFF", primary-focus: "#6900D1", ink: "#17181C", ink-muted: "#6D6E75", ink-subtle: "#9FA0A6", ink-tertiary: "#C6C7CC", canvas: "#F6F6F7", surface-1: "#FFFFFF", surface-2: "#EFEEF2", surface-3: "#E3E2E7", surface-4: "#D6D5DB", hairline: "#E5E4E8", hairline-strong: "#CCC9D0", hairline-tertiary: "#B3AFB8", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#FF5B20", semantic-success: "#45C77C", semantic-overlay: "#17181C"}
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
rounded: {xs: 4, sm: 10, md: 14, lg: 18, xl: 24, xxl: 28, pill: 9999, full: 9999}
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

My Rostelecom uses a dark branded account stage above bright operational service cards, keeping balance, payment, connectivity, equipment, and offers easy to scan.

# Non-negotiable visual invariants

- The recurring color treatment uses navy-violet gradient.
- Navigation or control chrome uses violet navigation.
- The recurring color treatment uses orange payment.
- The recurring color treatment uses thick white service groups.
- The sampled screens consistently show outlined actions.
- The principal image treatment uses seasonal editorial art.
- Preserve the split between dark account context and white service operations.
- Keep the primary task and current state immediately legible.

# Color and surfaces

Violet identifies navigation, connection, and brand focus. Orange is reserved for top-up and secondary outlined commerce actions.

White cards group services over light gray; the account header uses a deep navy-violet field for balance and quick actions.

Near-black carries tariff and service facts; gray supports recurring price, equipment, and inactive status.

Green indicates active service; red remains reserved for errors or destructive actions.

# Typography

Use SF Pro Display for account and tariff headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with balance, monthly fee, active status, or next connection step.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans and preserve the bold, plain Cyrillic hierarchy.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home stacks wide grouped cards; Connect uses a two-column offer grid and tariff detail uses one column.

Use strong gaps between service families while keeping rows inside each group compact.

Let the gradient account stage and white grouped blocks establish layers; ordinary rows stay flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations, with violet for the active item and very light gray for inactive items.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Violet drives connection and confirmation; orange handles top-up and selected outlined prompts.

Service cards group active products, options, and equipment with visible recurring price and state.

Registration and payment fields use sparse light surfaces with violet focus and disabled-state clarity.

Place active, loading, promised-payment, autopay, and connection states beside their specific account or service.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Seasonal art stays full-bleed at launch or inside story cards; service icons remain simple line symbols.

Keep campaign art bounded and preserve its focal subject; service UI should not depend on imagery.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Place active, loading, promised-payment, autopay, and connection states beside their specific account or service.

Green indicates active service; red remains reserved for errors or destructive actions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Keep balance, payment, and active services first; stack package choices and defer survey content.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not mix orange and violet indiscriminately across all controls.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
