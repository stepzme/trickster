<design-context>
---
version: 1
platform: iOS
name: L'etoile-design-analysis
description: "A high-energy beauty marketplace on white and soft gray, using black commitment controls, electric blue brand moments, and hot magenta for discounts and personal pricing. Editorial faces, glossy product photography, short video, and sculptural 3D campaign art create a dense but premium shopping feed."
colors:
  primary: "#151515"
  on-primary: "#FFFFFF"
  primary-focus: "#050505"
  ink: "#151515"
  ink-muted: "#6F6F74"
  ink-subtle: "#A3A3A8"
  ink-tertiary: "#C8C8CC"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F6"
  surface-2: "#ECECEF"
  surface-3: "#E1E1E5"
  surface-4: "#D4D4D9"
  hairline: "#E5E5E8"
  hairline-strong: "#D0D0D5"
  hairline-tertiary: "#B8B8BF"
  inverse-canvas: "#172CFF"
  inverse-surface-1: "#1022D4"
  inverse-surface-2: "#0A179E"
  inverse-ink: "#FFFFFF"
  brand-secure: "#D6239A"
  semantic-success: "#2AAE65"
  semantic-overlay: "#121212"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  campaign-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 12}
  discount-badge: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3 6}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

L'etoile is a dense beauty-shopping system where black controls stabilize a highly visual feed of faces, products, video, and saturated campaigns.

# Non-negotiable visual invariants

- Primary screens use White commerce canvas with editorial image blocks.
- Let product and editorial imagery dominate.
- Use black for commitment actions.
- Keep magenta tied to measurable value.
- Preserve quick access to search and cart.
- Restyle native controls to match the sharp monochrome system.
- Home mixes full-width campaigns, horizontal rails, and short-video cards.
- Catalog uses asymmetric category tiles; product recommendations use horizontal rails.

# Color and surfaces

Black is the action language. Electric blue identifies brand-led moments; hot magenta marks discounts, bonuses, and personalized value.

White carries catalog and detail. Pale gray separates service tiles, cart groups, checkout sections, and neutral controls.

Near-black carries product, price, and heading hierarchy. Gray supports variants, former prices, and secondary descriptions.

Magenta is promotional, not error. Use conventional red only for destructive or failed states and green only for confirmed success.

# Typography

Use SF Pro Display for campaign and section headings and SF Pro Text for product, checkout, and navigation information.

- display-lg — 30 points — 700 — Campaign or onboarding claim
- headline — 21 points — 700 — Section and checkout title
- card-title — 16 points — 600 — Product and brand title
- body — 13 points — 400 — Variant and description
- caption — 10 points — 400 — Discount, rating, and navigation

- Give price and brand distinct lines.
- Use bold for campaigns and decisions, not all metadata.
- Keep long product education readable with standard body rhythm.

A neutral system sans is sufficient; preserve compact price numerals and strong Cyrillic display weight.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points product gaps, and 12–16 points screen padding.

Home mixes full-width campaigns, horizontal rails, and short-video cards. Catalog uses asymmetric category tiles; product recommendations use horizontal rails.

Visual density is intentional. Use white breaks between campaign modules and wider spacing around checkout decisions.

Photography and glossy 3D campaign objects provide depth; functional UI stays flat and sharp.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep five bottom destinations fixed and style active icons black. Badges are small magenta circles; product detail retains its custom black purchase bar.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are black with white type. Neutral secondary actions use pale gray; magenta appears in benefits and discount markers rather than every CTA.

Product cards keep image, current and former price, discount, brand, name, rating, and variants compact. Checkout groups stay full-width and rounded.

Search is a white bordered field with camera access. Payment and address rows use thin borders, radios, and black selected outlines.

Personal pricing uses a persistent magenta strip. Order success uses a calm white summary with optional gift card and pickup details.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Product pack shots use clean white space. Editorial faces and video use tall crops; campaign art may fill full-width panels with embedded copy.

Contain product pack shots; aspect-fill editorial portraits and campaign panels while protecting embedded text.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Personal pricing uses a persistent magenta strip. Order success uses a calm white summary with optional gift card and pickup details.

Magenta is promotional, not error. Use conventional red only for destructive or failed states and green only for confirmed success.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Search, filters, favorites, variants, purchase actions, and navigation remain at least 44 points.
- Keep vertical modules full width and rails horizontally scrollable; stack checkout decisions when needed.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use blue and magenta on every functional control.
- Do not bury price or discount beneath editorial copy.
- Do not add heavy card shadows.
- Do not mix campaign typography into checkout.
- Do not replace product photography with decorative art.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
