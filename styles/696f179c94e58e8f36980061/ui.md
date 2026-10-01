<design-context>
---
version: 1
platform: iOS
name: Lenta-design-analysis
description: "A dense grocery-delivery system on white, anchored by deep Lenta blue, price red, sunny yellow ratings, and green fulfillment messages. Product pack shots, compact two-column cards, promotion banners, and a friendly orange cat mascot make shopping energetic while checkout remains structured and direct."
colors:
  primary: "#064CA8"
  on-primary: "#FFFFFF"
  primary-focus: "#003B85"
  ink: "#17171A"
  ink-muted: "#74747A"
  ink-subtle: "#A6A6AC"
  ink-tertiary: "#C7C7CC"
  canvas: "#FFFFFF"
  surface-1: "#F6F7F8"
  surface-2: "#EEF1F4"
  surface-3: "#E3E7EB"
  surface-4: "#D6DCE1"
  hairline: "#E5E8EB"
  hairline-strong: "#CFD5DA"
  hairline-tertiary: "#B6BDC4"
  inverse-canvas: "#063D85"
  inverse-surface-1: "#052F67"
  inverse-surface-2: "#04244E"
  inverse-ink: "#FFFFFF"
  brand-secure: "#F7C900"
  semantic-success: "#20B878"
  semantic-overlay: "#17171A"
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
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 26
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8}
  category-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 6}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 12}
  discount-badge: {backgroundColor: "#ED3446", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3 6}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

Lenta is a dense grocery storefront where blue actions, red pricing, product imagery, and mascot-led feedback create a fast everyday rhythm.

# Non-negotiable visual invariants

- The sampled screens consistently show Address and mode-first Home.
- Keep price, weight, and discount adjacent.
- Use blue for commitment.
- Show fulfillment constraints early.
- Keep replacement preferences explicit.
- Use the mascot for state communication.
- Products and categories use two columns or horizontal rails.
- Checkout uses one column with a bottom action pair.

# Color and surfaces

Deep blue is the primary action and navigation color. Yellow supports brand, ratings, and loyalty; red highlights pricing and discounts.

White carries shopping. Cool pale gray separates search, checkout steps, replacement settings, and information panels.

Near-black carries product names and decisions. Gray supports weight, former price, and conditions; red gives price priority.

Green marks free delivery and successful conditions. Blue radios and progress indicate active checkout decisions.

# Typography

Use SF Pro Display for section titles and SF Pro Text for compact product, price, and checkout data.

- display-lg — 30 points — 700 — Empty or success claim
- headline — 20 points — 700 — Catalog and checkout title
- card-title — 15 points — 600 — Product and section title
- body — 12 points — 400 — Weight, composition, conditions
- caption — 9 points — 400 — Rating, discount, unit price

- Price and quantity lead repeated cards.
- Keep product names to a few readable lines.
- Use bold for decisions and totals.

Inter works well; preserve compact Cyrillic and tabular price figures.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8 points product gaps, and 12 points screen padding.

Products and categories use two columns or horizontal rails. Checkout uses one column with a bottom action pair.

Shopping stays dense. Use larger gaps only for state messaging and checkout decisions.

Use product pack shots and mascot renders. Ordinary catalog cards remain nearly flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep five bottom destinations fixed. Active state combines blue and yellow; cart count and profile rewards use compact badges.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are blue with white type. Secondary actions use white with blue labels; yellow is reserved for loyalty and select brand moments.

Product cards include rating, favorite, pack shot, title, weight, current and former price, discount, and blue cart button.

Search is a white field with QR access. Checkout comments and preferences use sheets, radios, and blue focus outlines.

Minimum-order and delivery conditions appear as tinted strips. Success uses the mascot with delivery facts and a single blue acknowledgment action.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Pack shots are contained on white. Category food uses clipped still life; mascot scenes sit centered with generous white space.

Contain product packaging and aspect-fill food category crops; mascot art scales proportionally without edge cropping.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Minimum-order and delivery conditions appear as tinted strips. Success uses the mascot with delivery facts and a single blue acknowledgment action.

Green marks free delivery and successful conditions. Blue radios and progress indicate active checkout decisions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Search, QR, favorite, cart, quantity, payment, and navigation remain at least 44 points.
- Keep two columns on phones; scroll rails horizontally and stack checkout choices.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use red for primary actions.
- Do not hide unit price or minimum order.
- Do not add heavy card shadows.
- Do not put mascot art inside ordinary product cards.
- Do not leave checkout radios in generic native styling.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
