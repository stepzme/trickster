<design-context>
---
version: 1
platform: iOS
name: Chizhik-design-analysis
description: "A high-energy grocery interface with a vivid yellow brand field, heavy black display type, hot-pink promotion cards, white catalog surfaces, product cutouts, and a recurring red-black bird mascot. Home, catalog, scanner, cart, checkout, stores, promotions, and profile use bold rounded cards and a compact four-item navigation."
colors:
  primary: "#FFDD00"
  on-primary: "#111111"
  primary-soft: "#FFF7BF"
  accent: "#F23694"
  accent-secondary: "#111111"
  ink: "#171717"
  ink-muted: "#747474"
  ink-subtle: "#AAAAAA"
  canvas: "#F8F9FA"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F4"
  hairline: "#E1E3E5"
  semantic-success: "#32A852"
  semantic-danger: "#D9343A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Arial Black, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: Arial Black, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: Arial Black, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: Arial Black, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
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
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Chizhik combines promotional discovery, local store context, grocery catalog, scanner, and delivery ordering under a bold yellow-black retail identity.

# Non-negotiable visual invariants

- The recurring color treatment uses Vivid yellow brand areas.
- Keep yellow as the main retail signal.
- Show the selected store.
- Make price large.
- Use the mascot in branded moments.
- Keep basket total persistent.
- Home stacks hero stories, promos, store context, and shortcuts.
- Catalog uses two-column product grids; product and checkout switch to focused single-column layouts.

# Color and surfaces

- **Primary** ({colors.primary}): Add, basket, checkout, and selected navigation.
- **Accent** ({colors.accent}): Urgent promotional campaigns.
- **Secondary Accent** ({colors.accent-secondary}): Headline, CTA, and strong contrast.

- **Canvas** ({colors.canvas}): Catalog, search, checkout, and profile.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **Arial Black** — campaigns, category headings, and prices.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

- Make price and product unmistakable.
- Use heavy display type in short bursts.
- Keep availability tied to the selected store.
- Separate promotional color from status.

Use **Inter** or the platform system sans when the reference display face is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

Home stacks hero stories, promos, store context, and shortcuts. Catalog uses two-column product grids; product and checkout switch to focused single-column layouts.

Use large graphic blocks on home and tighter product density inside the catalog.

Use minimal shadow, large color fields, and isolated product cutouts. Mascot and promo art stay flat and graphic.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Catalog, Scanner, and Profile remain stable outside focused product, cart, and checkout screens.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Yellow full-width actions add to basket or continue checkout; compact yellow plus and minus controls sit on product cards.

Product cards pair cutout, title, price, favorite, and add. Checkout groups address, residence details, comments, timing, and payment.

Search, address, home details, courier notes, delivery slot, and card payment use clear labeled fields.

Show store selected, age required, minimum reached, processing, cancelled, ready, and delivered through text plus state.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Products use real cutouts. Promotional cards use bold geometric fields, mascot moments, and simple vector scenes.

Contain product cutouts on white; crop promotional artwork only inside authored cards and preserve mascot silhouette.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show store selected, age required, minimum reached, processing, cancelled, ready, and delivered through text plus state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every row, tab, selector, map control, and primary action at least 44 points.
- Preserve store, product, price, quantity, basket total, and checkout action. Collapse stories and campaigns first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use pink for functional status.
- Do not replace product photos with illustration.
- Do not hide minimum order.
- Do not overload cards with promo badges.
- Do not detach availability from store.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
