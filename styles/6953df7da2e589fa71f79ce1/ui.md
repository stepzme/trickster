<design-context>
---
version: 1
platform: iOS
name: Drinkit-design-analysis
description: "An immersive coffee ordering experience led by editorial product photography, warm full-bleed color atmospheres, clean black typography, cobalt-violet actions, horizontal taxonomy, spacious product storytelling, and whimsical 3D barista characters used for order status, predictions, and seasonal moments."
colors:
  primary: "#4657DF"
  on-primary: "#FFFFFF"
  primary-soft: "#E8EAFF"
  accent: "#27A7E8"
  ink: "#17181B"
  ink-muted: "#747982"
  ink-subtle: "#ADB1B8"
  canvas: "#F7FAFC"
  surface-1: "#FFFFFF"
  surface-2: "#EAF7FA"
  hairline: "#E4E8EC"
  semantic-success: "#20A96A"
  semantic-warning: "#F0B323"
  semantic-danger: "#D94D4D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 33, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 23, fontWeight: 650, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 18, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  editorial-banner: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.xl}", padding: 16 }
  order-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Drinkit treats the menu as an editorial feed: large product still lifes, warm atmospheric color, and quiet category text precede transactional detail. Order status shifts into a whimsical 3D character world.

# Non-negotiable visual invariants

- The principal image treatment uses Full-bleed editorial product photography.
- Lead with carefully art-directed product imagery.
- Keep the active shop visible.
- Use character art for emotional moments.
- Make ingredients and allergens accessible.
- Home is a vertical editorial feed with a floating location header and horizontal taxonomy.
- Checkout uses layered sheets and compact product summaries.
- Preserve gallery-like breathing room around hero products; tighten only in builder, cart, and payment steps.

# Color and surfaces

- **Primary** ({colors.primary}): Purchase, order status, favorite, and prediction actions.
- **Primary Soft** ({colors.primary-soft}): Selection and low-emphasis controls.
- **Accent** ({colors.accent}): Supporting location and informational emphasis.

- **Canvas** ({colors.canvas}): Neutral ordering and sheet background.
- **Surface 1** ({colors.surface-1}): Product detail, forms, and cards.
- **Surface 2** ({colors.surface-2}): Editorial and seasonal modules.
- **Hairline** ({colors.hairline}): Form and order separation.

- **Ink** ({colors.ink}): Product names, headings, and prices.
- **Ink Muted** ({colors.ink-muted}): Ingredients and operational detail.
- **Ink Subtle** ({colors.ink-subtle}): Inactive taxonomy and placeholder.

- **Success** ({colors.semantic-success}): Accepted or ready state.
- **Warning** ({colors.semantic-warning}): Limited gifts and attention.
- **Danger** ({colors.semantic-danger}): Error or destructive action.
- **Overlay** ({colors.semantic-overlay}): Product and order sheets.

# Typography

- **SF Pro Display** — product storytelling and campaign headings.
- **SF Pro Text** — menu, composition, checkout, and status.
- **SF Mono** — order identifiers and verification references.

Use 33–40 points for editorial statements, 23 points for product detail, 18 points for cards, 14–17 points body, and 10–12 points metadata.

- Let photography precede product explanation.
- Keep names concise and confident.
- Use restrained weights over atmospheric imagery.
- Keep composition and allergens highly readable.

Use the platform system sans or **Inter** with medium display weights and tabular prices.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 16 points card padding, 24 points between editorial modules, and generous full-bleed media height.

Home is a vertical editorial feed with a floating location header and horizontal taxonomy. Checkout uses layered sheets and compact product summaries.

Preserve gallery-like breathing room around hero products; tighten only in builder, cart, and payment steps.

Use studio still lifes, miniature seasonal scenes, and softly rendered 3D characters rather than generic gradients.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Location and profile remain at the top; taxonomy moves within the feed; cart and current order appear contextually.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use cobalt-violet filled pills for purchase, favorite, and status actions; neutral icons handle close, profile, and overflow.

Use full-bleed hero media, editorial banners, product cards, builder controls, cart rows, order sheets, and character status cards.

Builder and checkout expose size, ingredients, modifiers, payment, shop, recipient, and pickup details without covering media context.

Show shop availability, accepted, preparing, ready, gift, favorite, payment, and prediction state with explicit text and character cues.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Compose drinks as central still-life subjects with tactile props and soft light; frame character scenes in rounded cards with uncluttered backgrounds.

Crop editorial scenes intentionally while protecting the product silhouette; contain character cards and never stretch embedded artwork.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show shop availability, accepted, preparing, ready, gift, favorite, payment, and prediction state with explicit text and character cues.

- **Success** ({colors.semantic-success}): Accepted or ready state.
- **Warning** ({colors.semantic-warning}): Limited gifts and attention.
- **Danger** ({colors.semantic-danger}): Error or destructive action.
- **Overlay** ({colors.semantic-overlay}): Product and order sheets.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep shop, taxonomy, product, modifier, favorite, cart, payment, and status controls at least 44 points.
- Preserve shop, active product, price, cart, and order status. Move campaigns and predictions below the current transaction.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not place dense copy over busy imagery.
- Do not reuse one background color for every product.
- Do not make checkout as decorative as discovery.
- Do not mix unrelated illustration styles.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
