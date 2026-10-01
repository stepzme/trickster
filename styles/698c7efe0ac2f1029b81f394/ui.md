<design-context>
---
version: 1
platform: iOS
name: bunq-design-analysis
description: "A colorful modular banking dashboard built from white and pale-lavender groups, strong black totals, mint acquisition cards, bright blue links, and small color-coded action pills. Accounts, cards, savings, stocks, crypto, and profile utilities remain dense but scannable through consistent grouped rows."
colors:
  primary: "#149FF2"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F6FE"
  accent: "#38D8A0"
  accent-secondary: "#C34AD9"
  ink: "#101113"
  ink-muted: "#73777D"
  ink-subtle: "#A8ABB0"
  canvas: "#FFFFFF"
  surface-1: "#F8F7FC"
  surface-2: "#EEEFF5"
  hairline: "#E0E1E7"
  semantic-success: "#2FC28A"
  semantic-danger: "#E23C62"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  navigation-bar: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

bunq combines daily banking, savings, cards, investments, and lifestyle benefits in one colorful modular shell. Large totals and consistent rows stabilize the otherwise broad product range.

# Non-negotiable visual invariants

- The recurring color treatment uses White and pale-lavender grouped modules.
- Keep totals dominant.
- Separate banking and investment risk.
- Use consistent action colors.
- Show limits before payment.
- Keep account rows comparable.
- Home stacks acquisition, net wealth, quick actions, accounts, transactions, and extras.
- Cards, savings, stocks, and crypto use dedicated vertical sections with grouped rows.

# Color and surfaces

- **Primary** ({colors.primary}): Links, selected navigation, and important utility actions.
- **Accent** ({colors.accent}): Funding, positive change, and acquisition.
- **Secondary Accent** ({colors.accent-secondary}): Request and secondary money actions.

- **Canvas** ({colors.canvas}): Primary dashboard and product sections.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary fields and controls.
- **Hairline** ({colors.hairline}): Quiet grouping.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **SF Pro Display** — balances and product headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

- Lead with available amount and account.
- Keep each action color consistent.
- Use bold labels for totals, not long copy.
- Separate banking state from benefits.

Use **Inter** or the platform system sans when SF Pro is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

Home stacks acquisition, net wealth, quick actions, accounts, transactions, and extras. Cards, savings, stocks, and crypto use dedicated vertical sections with grouped rows.

Use space between modules to offset dense product breadth; keep related rows compact inside each group.

Use soft tinted backgrounds and subtle shadows. Glossy icons identify products but should not overpower balances.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

The five product tabs stay stable; profile holds support, settings, personal data, accounting, eSIM, and lifestyle benefits.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Bright pills distinguish Pay, Request, and Add Money. Full-width blue or mint buttons commit setup and product actions.

Modules group net wealth, accounts, transactions, benefits, market assets, and card data with consistent padding and row height.

Money flows use amount-first entry, visible source and destination, and review. Security and identity forms remain single-column.

Show funded, pending, scheduled, interest earned, market change, card limit, country access, and closed state as text plus color.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use compact glossy product icons and real card renders inside stable wells. Keep money values and security controls outside imagery.

Contain glossy icons and card renders. Never crop card security data, charts, or account totals into imagery.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show funded, pending, scheduled, interest earned, market change, card limit, country access, and closed state as text plus color.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every row, tab, selector, and primary action at least 44 points.
- Preserve total, selected product, next action, and status. Collapse benefits and promotional extras before financial data.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not let benefits outrank balances.
- Do not use icon color alone for state.
- Do not merge card and account controls.
- Do not hide fees or market movement.
- Do not overload one module with every product.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
