<design-context>
---
version: 1
platform: iOS
name: MBANK-design-analysis
description: "A modular super-app dashboard on pale gray, built from white rounded cards, emerald finance actions, a yellow central QR control, vivid multicolor service tiles, dense campaign rails, and compact aligned financial data."
colors: {primary: "#08A36A", on-primary: "#FFFFFF", primary-focus: "#007D50", ink: "#202127", ink-muted: "#777981", ink-subtle: "#A6A8AE", ink-tertiary: "#CACBD0", canvas: "#F3F4F4", surface-1: "#FFFFFF", surface-2: "#EDEFEF", surface-3: "#E2E5E5", surface-4: "#D6DADA", hairline: "#E5E7E7", hairline-strong: "#CED2D2", hairline-tertiary: "#B5BBBB", inverse-canvas: "#1D2E28", inverse-surface-1: "#29443A", inverse-surface-2: "#355B4C", inverse-ink: "#FFFFFF", brand-secure: "#FFD51F", semantic-success: "#08A36A", semantic-overlay: "#202127"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
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
  button-inverse: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12 16}
  finance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10}
  campaign-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

MBANK is a colorful super-app where white modules and green banking actions organize finance, rewards, payments, and lifestyle services.

# Non-negotiable visual invariants

- Primary screens use pale-gray canvas; white rounded modules; emerald finance actions; yellow central QR; vivid service art.
- Keep finance distinct from lifestyle art.
- Align amounts and balances.
- Label all service icons.
- Style native controls consistently.
- Home stacks modular cards and horizontal rails; payments use tile grids and lists; analysis uses aligned rows.
- Keep modules dense but separated by clear gray gutters.

# Color and surfaces

Emerald anchors banking and selection. Yellow is reserved for the central QR and hub identity; services may use vivid local palettes.

Pale gray canvas with bright white cards and minimal separators.

Near-black carries balances and titles; gray carries account, transaction, and helper metadata.

Green means success or finance, yellow attention, red debt/error, and multicolor bars encode categories.

# Typography

Use SF Pro Display for dashboard headings and SF Pro Text for financial detail.

- display-lg — 30 points — 700 — Product claim
- headline — 20 points — 700 — Payments and services title
- card-title — 15 points — 600 — Balance and product
- body — 12 points — 400 — Transaction detail
- caption — 9 points — 400 — Status and navigation

- Make balances and amounts scannable.
- Keep service labels explicit.
- Use campaign typography only inside campaigns.

Inter is suitable; preserve Cyrillic and tabular financial figures.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 10–12 points module gaps, and 12 points gutters.

Home stacks modular cards and horizontal rails; payments use tile grids and lists; analysis uses aligned rows.

Keep modules dense but separated by clear gray gutters.

Use dimensional service scenes inside campaigns; core banking stays flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep Home, Payments, QR, Services, and More fixed; QR remains visually dominant.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary finance actions are green; central QR is yellow; secondary actions are white or pale gray.

Finance cards group balance and products; service tiles combine one icon, label, and optional badge.

Search and payment fields are pale gray with green focus and large amounts.

Transfers and payments use clear review, processing, and result states close to amount and recipient.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Campaigns use rounded wide crops; service scenes sit inside compact rounded tiles; partner logos remain contained.

Contain service scenes and partner marks; preserve wide campaign focal areas.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Transfers and payments use clear review, processing, and result states close to amount and recipient.

Green means success or finance, yellow attention, red debt/error, and multicolor bars encode categories.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Cards, services, payment routes, QR, and navigation remain at least 44 points.
- Scroll campaign rails horizontally and stack financial modules before shrinking values.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not let campaigns obscure balances.
- Do not use yellow for ordinary actions.
- Do not encode categories by color alone.
- Do not add heavy shadows.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Transfer confirmation was not visually sampled.
- Loan application was not reviewed end to end.
- Tablet and landscape layouts were not represented.

</design-context>
