<design-context>
---
version: 1
platform: iOS
name: Love-Republic-design-analysis
description: "A restrained fashion-commerce system built around full-bleed editorial photography, high-contrast black and white controls, compact product grids, and sparse typography. The interface stays quiet so campaign imagery, silhouettes, material, and price define the experience."
colors:
  primary: "#141414"
  on-primary: "#FFFFFF"
  primary-focus: "#000000"
  ink: "#141414"
  ink-muted: "#707070"
  ink-subtle: "#A1A1A1"
  ink-tertiary: "#C8C8C8"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#EFEFEF"
  surface-3: "#E5E5E5"
  surface-4: "#D9D9D9"
  hairline: "#E6E6E6"
  hairline-strong: "#CECECE"
  hairline-tertiary: "#B5B5B5"
  inverse-canvas: "#141414"
  inverse-surface-1: "#262626"
  inverse-surface-2: "#383838"
  inverse-ink: "#FFFFFF"
  brand-secure: "#A72E3A"
  semantic-success: "#4B8D63"
  semantic-overlay: "#141414"
typography:
  display-xl: {fontFamily: Helvetica Neue, fontSize: 36, fontWeight: 500, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: Helvetica Neue, fontSize: 30, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: Helvetica Neue, fontSize: 24, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: Helvetica Neue, fontSize: 20, fontWeight: 500, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: Helvetica Neue, fontSize: 15, fontWeight: 500, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: Helvetica Neue, fontSize: 14, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: Helvetica Neue, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: Helvetica Neue, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  body-sm: {fontFamily: Helvetica Neue, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: Helvetica Neue, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0.1}
  button: {fontFamily: Helvetica Neue, fontSize: 12, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0.2}
  eyebrow: {fontFamily: Helvetica Neue, fontSize: 9, fontWeight: 500, lineHeight: 1.18, letterSpacing: 0.8}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 0
  sm: 2
  md: 4
  lg: 6
  xl: 10
  xxl: 14
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
  section: 48
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13 17}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 12 16}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0}
  editorial-hero: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.display-md}", rounded: "{rounded.xs}", padding: 0}
  filter-control: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 10 12}
  size-selector: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

Love Republic is an editorial fashion storefront where full-bleed campaign photography and minimal monochrome controls keep attention on styling, product form, and material.

# Non-negotiable visual invariants

- The principal image treatment uses Full-screen campaign imagery on Home.
- Let editorial and product photography dominate.
- Keep controls monochrome and sharp.
- Show size and delivery before commitment.
- Preserve consistent product crops.
- Style native controls to match the fashion system.
- Home uses full-width editorial panels.
- Catalog uses two columns; product, basket, and checkout use a single structured column.

# Color and surfaces

Black is the primary brand and action color. Burgundy-red is reserved for sale pricing and promotional emphasis, not general navigation.

White carries catalog and commerce. Light neutral gray separates filters, size information, delivery rows, and checkout groups.

Black carries product names, prices, and actions. Cool gray supports color, collection, fulfillment, and former-price metadata.

Muted green can mark delivery availability. Red identifies markdowns; validation should remain concise and avoid decorative color.

# Typography

Use Helvetica Neue or a similarly neutral grotesk across editorial, product, and transaction surfaces.

- display-lg — 30 points — 500 — Campaign statement
- headline — 20 points — 500 — Catalog and checkout title
- card-title — 15 points — 500 — Product name and price
- body — 12 points — 400 — Color, size, and delivery detail
- eyebrow — 9 points — 500 — Collection and promotion label

- Keep copy short and visually secondary to imagery.
- Use medium weight instead of heavy bold.
- Preserve generous tracking for small uppercase campaign labels.

Arial or Inter may substitute; keep weights restrained and do not introduce expressive display type.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8 points grid gutters, and 16 points screen margins.

Home uses full-width editorial panels. Catalog uses two columns; product, basket, and checkout use a single structured column.

Campaign screens are image-rich, while commerce screens use deliberate white space and fine dividers rather than decorative panels.

Lighting, fabric texture, and model photography create depth. Interface layers stay flat and precise.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use compact icon-led navigation and minimal labels. Active state is black; overlays adapt to campaign contrast without changing geometry.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary commerce actions are solid black. Secondary actions are white with black borders; image overlays may invert to white on dark photography.

Product cards are image-first with name, color, current price, and sale price beneath. Basket rows preserve the same quiet metadata hierarchy.

Checkout fields are white, rectangular, and divider-led. Focus and validation must adopt the monochrome system rather than default platform styling.

Stock, delivery, and promotion states appear as short text close to the decision. Empty states remain typographic and restrained.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Campaign photography is full-bleed and portrait-led. Product shots use consistent vertical crops on neutral backgrounds; never add unrelated illustration.

Use aspect-fill for campaigns and consistent portrait product crops. Keep focal faces and full garments within safe areas.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Stock, delivery, and promotion states appear as short text close to the decision. Empty states remain typographic and restrained.

Muted green can mark delivery availability. Red identifies markdowns; validation should remain concise and avoid decorative color.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Menu, favorite, filter, size, purchase, checkout, and navigation controls remain at least 44 points.
- Keep two product columns while names remain readable; stack size, delivery, and checkout decisions in one column.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not add rounded colorful marketplace cards.
- Do not overlay long copy on campaign imagery.
- Do not use heavy shadows or gradients on controls.
- Do not crop away garment silhouettes.
- Do not make sale red the primary navigation color.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
