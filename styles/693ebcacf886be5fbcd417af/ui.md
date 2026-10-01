<design-context>
---
version: 1
platform: iOS
name: Magnit-design-analysis
description: "A vivid omnichannel grocery system on white, led by bright red commerce actions, warm orange-pink promotional gradients, dense product photography, compact prices and discounts, and loyalty-first navigation."
colors: {primary: "#F20D16", on-primary: "#FFFFFF", primary-focus: "#CF000A", ink: "#202025", ink-muted: "#77777E", ink-subtle: "#A6A6AD", ink-tertiary: "#CCCCD1", canvas: "#FFFFFF", surface-1: "#F6F6F7", surface-2: "#EEEEF1", surface-3: "#E4E4E8", surface-4: "#D8D8DD", hairline: "#E7E7EA", hairline-strong: "#D0D0D5", hairline-tertiary: "#B8B8BF", inverse-canvas: "#202025", inverse-surface-1: "#323238", inverse-surface-2: "#44444C", inverse-ink: "#FFFFFF", brand-secure: "#FF8A34", semantic-success: "#32A95F", semantic-overlay: "#202025"}
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
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8}
  promo-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  search-field: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 12}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7 8}
---

# Overview

Magnit is a dense grocery and loyalty storefront with red commitment, warm promotional color, and product-first shopping.

# Non-negotiable visual invariants

- Characteristic content and controls use red purchase actions; white catalog; warm campaign gradients; dense product cards; five business destinations.
- Preserve price clarity.
- Show delivery conditions early.
- Keep loyalty visible.
- Style native controls consistently.
- Home uses rails; delivery uses two-column products; checkout uses one column and sticky actions.
- Browsing is dense; payment and tracking receive more breathing room.

# Color and surfaces

Use red for commerce and loyalty emphasis; warm orange-pink gradients support campaigns.

White carries shopping; pale gray groups categories, checkout, and recommendations.

Near-black carries product and total; gray carries unit, old price, and conditions.

Green means success, yellow rating, violet promo codes, and red current price or action.

# Typography

Use SF Pro Display for headings and SF Pro Text for catalog and checkout data.

- display-lg — 30 points — 700 — Order state
- headline — 20 points — 700 — Section title
- card-title — 15 points — 600 — Product and total
- body — 12 points — 400 — Unit and detail
- caption — 9 points — 400 — Discount and rating

- Keep price, unit, discount, and quantity together.
- Use concise promotional copy.
- Align totals and fulfillment data.

Inter is suitable; preserve compact Cyrillic and tabular prices.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8 points product gaps, and 12 points gutters.

Home uses rails; delivery uses two-column products; checkout uses one column and sticky actions.

Browsing is dense; payment and tracking receive more breathing room.

Photography supplies depth; ordinary controls remain flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep Home, In Store, Delivery, Market, and Cosmetics fixed with red active state.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are red; secondary actions are white or pale gray with red labels.

Product cards combine image, price, old price, discount, rating, title, and quantity action.

Search and checkout fields are pale with red focus and large readable values.

Order confirmation and tracking use clear stages, map context, time, and support actions.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Contain pack shots and aspect-fill campaign food photography without obscuring copy.

Contain packages and preserve campaign focal subjects.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Order confirmation and tracking use clear stages, map context, time, and support actions.

Green means success, yellow rating, violet promo codes, and red current price or action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Search, favorites, quantity, cart, payment, and navigation remain at least 44 points.
- Keep two columns while prices remain readable and stack checkout decisions.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use red for neutral metadata.
- Do not crop packaging.
- Do not hide promo conditions.
- Do not add heavy shadows.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
