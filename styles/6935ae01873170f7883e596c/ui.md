<design-context>
---
version: 1
platform: iOS
name: Joom-design-analysis
description: "A fast, promotion-dense marketplace on a bright white canvas, organized by coral-red commerce actions, compact black type, rounded category thumbnails, two-column product grids, and playful 3D reward moments. Product photography carries browsing while hot coral, pink, violet, and deep blue promotional panels create momentum."
colors:
  primary: "#FF3F4E"
  on-primary: "#FFFFFF"
  primary-focus: "#DB2F3D"
  ink: "#17171A"
  ink-muted: "#66666D"
  ink-subtle: "#96969E"
  ink-tertiary: "#BDBDC4"
  canvas: "#FFFFFF"
  surface-1: "#F8F8FA"
  surface-2: "#F1F1F5"
  surface-3: "#E7E7EC"
  surface-4: "#DCDCE3"
  hairline: "#E8E8ED"
  hairline-strong: "#D1D1D8"
  hairline-tertiary: "#B6B6BF"
  inverse-canvas: "#111114"
  inverse-surface-1: "#28282D"
  inverse-surface-2: "#3A3A41"
  inverse-ink: "#FFFFFF"
  brand-secure: "#913A97"
  semantic-success: "#24B974"
  semantic-overlay: "#111114"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0}
  category-tile: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 12}
  reward-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 20}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3 6}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Joom is a white, high-density marketplace that layers product photography with frequent promotional and reward moments. Coral actions keep purchase intent clear amid varied content.

# Non-negotiable visual invariants

- Navigation or control chrome uses Fixed search and shopping tabs.
- Keep comparison facts close to imagery.
- Preserve persistent purchase actions on long pages.
- Use coral for commerce intent.
- Separate reward art from product content.
- Keep favorites accessible in the grid.
- Products use two equal columns.
- Categories and campaigns use horizontal rails or two-column feature blocks.

# Color and surfaces

- Coral-red drives cart, purchase, discount, and active promotional emphasis.
- Pink, violet, and blue support bounded campaign artwork rather than general controls.

- White is the default shopping canvas; pale gray separates inputs and checkout groups.
- Saturated promotional panels remain self-contained.

- Near-black carries price and primary labels.
- Neutral gray supports shipping, order volume, and secondary metadata.

- Green marks favorable delivery or price facts.
- Red rating stars and discount labels share the commerce accent.

# Typography

Use SF Pro Display for campaign headings and SF Pro Text for the dense catalog and checkout UI.

- display-lg — 30 points — 700 — Onboarding claim
- display-md — 25 points — 700 — Reward message
- headline — 21 points — 700 — Checkout or collection title
- card-title — 16 points — 600 — Product and section title
- body — 13 points — 400 — Detail copy
- caption — 10 points — 400 — Grid metadata

- Give price and purchase status priority over prose.
- Keep grid metadata compact but readable.
- Use bold promotional type only inside campaign modules.

A neutral system sans is sufficient; preserve tight number metrics and strong price weight.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points grid gaps, and 12–16 points horizontal screen padding.

Products use two equal columns. Categories and campaigns use horizontal rails or two-column feature blocks.

Catalog density is intentional. Reserve wider space for checkout decisions and reward explanations.

Use 3D illustration shadows and subtle sheet separation; product cards themselves stay flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep five bottom destinations fixed, with black active icons and pale inactive lines. Preserve search above category tabs on catalog screens.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary cart and purchase buttons are full-width coral rectangles. Black buttons support claim, continue, or secondary promotional actions.

Product cards are image-first and largely borderless. Checkout uses full-width grouped rows with hairline or surface separation.

Search is a pale filled bar with image-search access. Address, delivery, and payment controls use radio rows and collapsible groups.

Discounts, delivery promises, ratings, and order counts stay adjacent to their product. Success uses a single branded icon and direct next actions.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Product images use consistent near-square crops. Promotional illustration can crop beyond a white or saturated panel, never into catalog metadata.

Use aspect-fill for lifestyle photography and aspect-fit when product shape or packaging must remain complete.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Discounts, delivery promises, ratings, and order counts stay adjacent to their product. Success uses a single branded icon and direct next actions.

- Green marks favorable delivery or price facts.
- Red rating stars and discount labels share the commerce accent.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Favorites, tabs, payment choices, and navigation retain at least 44 points hit areas.
- Category rails scroll horizontally. Product details and checkout expand vertically while the main action remains anchored.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not wrap every product in a heavy card.
- Do not use campaign colors for ordinary navigation.
- Do not hide shipping and payment choices.
- Do not overcrowd success states.
- Do not replace real product imagery with illustration.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
