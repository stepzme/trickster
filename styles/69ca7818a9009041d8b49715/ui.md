<design-context>
---
version: 1
platform: iOS
name: bushe-design-analysis
description: "An editorial food-and-culture interface that combines warm white space, oversized serif headlines, compact rounded sans-serif controls, and a charcoal floating tab bar. Real food photography drives the catalog, while hand-drawn pastel characters and collage-like story cards make the home, loyalty, and table-ordering experiences feel like an independent city magazine rather than a standard delivery app."

colors:
  primary: "#2D2B2D"
  on-primary: "#FFFFFF"
  primary-soft: "#ECEAEC"
  ink: "#242124"
  ink-muted: "#777277"
  ink-subtle: "#AAA5AA"
  canvas: "#FBFAF8"
  surface-1: "#F3F1F2"
  surface-2: "#E8E5E7"
  surface-dark: "#302E31"
  hairline: "#DEDADC"
  accent-orange: "#FF965F"
  accent-pink: "#E9A5B5"
  accent-lavender: "#B7B9F2"
  accent-yellow: "#F4E89A"
  semantic-success: "#67BD62"
  semantic-danger: "#A83D4C"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 44
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: -1.2
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 36
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.8
  display-md:
    fontFamily: Rounded Sans
    fontSize: 28
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: -0.4
  headline:
    fontFamily: Rounded Sans
    fontSize: 23
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.2
  card-title:
    fontFamily: Rounded Sans
    fontSize: 17
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: 0
  subhead:
    fontFamily: Rounded Sans
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: 0
  body-lg:
    fontFamily: Rounded Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body:
    fontFamily: Rounded Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: Rounded Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: 0
  caption:
    fontFamily: Rounded Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: Rounded Sans
    fontSize: 15
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Rounded Sans
    fontSize: 12
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 30
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: [14, 20]
  intent-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.sm}"
    padding: 16
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 0
  bottom-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: 6
  loyalty-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12
  navigation-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    height: 52
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: [24, 16]
---

# Overview

bushe merges commerce with an editorial home feed. The catalog is practical and photograph-led, while Home, Loyalty, stories, projects, and table ordering use oversized type, pastel illustration, and collage. A charcoal floating tab bar provides continuity between these modes.

# Non-negotiable visual invariants

- Primary screens use Warm off-white canvas and charcoal primary controls.
- Keep commerce practical and editorial discovery expressive.
- Let real food photography lead catalog and basket.
- Use serif for home and story statements.
- Keep the charcoal tab bar consistent across core flows.
- Reuse the pastel hand-drawn character language for guidance and loyalty.
- Home combines a wide hero, one wide intent card, and two-column intent tiles.
- Catalog uses a three-column category grid followed by a two-column product grid.

# Color and surfaces

- **Charcoal** ({colors.primary}): Main actions, selected chips, and navigation shell.
- **Soft Charcoal** ({colors.primary-soft}): Quiet selected and disabled surfaces.
- **Orange** ({colors.accent-orange}): Home mascot and profile identity.
- **Pink**, **Lavender**, and **Yellow**: Editorial illustration and seasonal feature palette.

- **Canvas** ({colors.canvas}): Default warm-white page.
- **Surface 1** ({colors.surface-1}): Intent cards, fields, basket groups, and loyalty details.
- **Surface 2** ({colors.surface-2}): Nested controls and disabled states.
- **Dark Surface** ({colors.surface-dark}): Floating navigation and dark-theme groups.
- **Hairline** ({colors.hairline}): Dividers in checkout and profile.

- **Ink** ({colors.ink}): Headlines, product names, amounts, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Delivery context, weight, and supporting copy.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled labels.

- **Success** ({colors.semantic-success}): Delivery progress and confirmed states.
- **Danger** ({colors.semantic-danger}): Logout, deletion, and cancellation.
- **Overlay** ({colors.semantic-overlay}): Scrim below instructions and dialogs.

# Typography

- **Editorial Serif** — home greeting, stories, campaign statements, and culture features.
- **Rounded Sans** — catalog, basket, profile, actions, metadata, and navigation.
- **System Mono** — only for receipt or technical identifiers.

- `{typography.display-xl}` — 44 points — 400 — Editorial story title
- `{typography.display-lg}` — 36 points — 400 — Home greeting question
- `{typography.display-md}` — 28 points — 500 — Catalog and profile title
- `{typography.headline}` — 23 points — 500 — Checkout section
- `{typography.card-title}` — 17 points — 500 — Intent and product title
- `{typography.body}` — 14 points — 400 — Default interface copy
- `{typography.caption}` — 11 points — 400 — Weight, time, and tab labels
- `{typography.button}` — 15 points — 500 — Primary action

- Use serif to create editorial pauses, not inside transactional controls.
- Keep product metadata compact and left aligned.
- Let title scale vary more on stories than in catalog.
- Prefer lowercase and sentence case; avoid corporate all-caps styling.

Use **Cormorant Garamond** or **Bodoni Moda** for editorial display and **Manrope**, **Onest**, or **SF Pro Rounded** for UI. Preserve open counters and moderate sans weights.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 12–16 points, catalog-card gaps 6–10 points, form groups 16 points, and editorial sections 24–32 points. Floating navigation sits 12 points from side and safe-area edges.

Home combines a wide hero, one wide intent card, and two-column intent tiles. Catalog uses a three-column category grid followed by a two-column product grid. Checkout and profile return to a single vertical column.

Warm white space is part of the editorial voice. Keep large pauses around the home question and culture stories; use denser spacing only in catalog and basket where comparison matters.

Use photographic depth, hand-drawn overlap, subtle paper-like tonal shifts, and very soft shadow. Avoid glossy surfaces and bright digital gradients.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Catalog, Loyalty, Basket, and Profile sit inside a charcoal floating bar. The selected tab rises on a light rounded tile. Counts appear on Basket without changing tab width.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions use charcoal fill, white rounded-sans labels, and 14 points corners. Secondary actions are pale or outlined. Quantity uses a compact horizontal minus/count/plus control.

Intent cards range from one wide illustrated banner to compact text-only tiles. Product cards lead with food photography, then name, weight, tags, and price. Loyalty uses an illustrated hero plus a white privilege card.

Search is an open field with a simple icon and minimal container. Checkout groups delivery method, pickup location, promo code, and comment using pale rounded rows and clear section headings.

Delivery progress uses a green vehicle marker and labeled threshold bar. Loyalty level uses explicit number, percentage, cashback, points, and progress. Order state remains textual in history and tracking.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Food photography fills rounded category and product tiles with subject-safe crop. Illustrations remain flat and fully visible inside pale banners or large sheets. Editorial collage may overlap images and type while preserving a clear reading column.

Use cover for food cards and contain for illustrated characters. Editorial story photography may crop vertically but should retain dish and headline focal areas. Dark theme should not dim product images.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Delivery progress uses a green vehicle marker and labeled threshold bar. Loyalty level uses explicit number, percentage, cashback, points, and progress. Order state remains textual in history and tracking.

- **Success** ({colors.semantic-success}): Delivery progress and confirmed states.
- **Danger** ({colors.semantic-danger}): Logout, deletion, and cancellation.
- **Overlay** ({colors.semantic-overlay}): Scrim below instructions and dialogs.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep tabs, category cards, filters, quantity controls, and checkout rows at least 44 points. Separate basket delete from quantity adjustment and primary checkout action.
- Reduce catalog columns before shrinking text or food imagery. Stack delivery choices when labels wrap. Keep the floating tab bar as a single row and shorten low-priority labels only if unavoidable.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not put decorative serif inside prices or form controls.
- Do not replace product photos with illustration.
- Do not turn pastel accents into competing action colors.
- Do not add glossy 3D art or heavy shadows.
- Do not overfill editorial pages with product cards.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
