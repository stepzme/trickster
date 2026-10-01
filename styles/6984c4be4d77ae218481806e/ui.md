<design-context>
---
version: 1
platform: iOS
name: Fix-Price-design-analysis
description: "A value-retail marketplace led by vivid lime green, white commerce surfaces, blue informational accents, dense product rails, bold campaign banners, and a friendly lime hedgehog mascot used for loyalty, seasonal discovery, and order confirmation."
colors: { primary: "#7BC52B", on-primary: "#FFFFFF", primary-soft: "#EBFFD7", accent: "#2E7AD9", ink: "#202124", ink-muted: "#74777D", ink-subtle: "#ADB1B7", canvas: "#FFFFFF", surface-1: "#F5F5F5", surface-2: "#EFF8E7", hairline: "#E1E3E6", semantic-success: "#4AAE38", semantic-warning: "#F2B423", semantic-danger: "#DF4B4B", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 10 }
  promo-banner: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
  navigation-bar: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Fix Price combines dense value shopping with a bright lime identity and a friendly mascot that carries loyalty and order moments.

# Non-negotiable visual invariants

- Keep fulfillment and price visible.
- Use the mascot for guidance and celebration.
- Preserve search and cart state.
- Home stacks fulfillment, banners, categories, product rails, loyalty, and a five-tab footer; catalog becomes a compact list or grid.
- Maintain retail density while separating discovery, product, and checkout into clear bands.

# Color and surfaces

Use lime for primary shopping actions and blue for informational links or secondary emphasis.

Keep the canvas white, search and forms pale gray, and category modules lightly tinted.

Use near-black for product and price, gray for metadata, and pale gray for disabled state.

Use green for success, yellow for attention, and red for errors or destructive action.

# Typography

Use SF Pro Display for campaigns and SF Pro Text for products, forms, and checkout.

Use 32–38 points heavy for campaigns, 22 points for sections, 16 points for cards, 14 points body, and 10–12 points metadata.

Keep current price strongest, old price secondary, and product names readable within dense rails.

Use the platform sans or Inter with tabular prices.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 12 points module gaps, and 10 points card padding.

Home stacks fulfillment, banners, categories, product rails, loyalty, and a five-tab footer; catalog becomes a compact list or grid.

Maintain retail density while separating discovery, product, and checkout into clear bands.

Product photography, campaign props, and mascot scenes create depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Catalog, Cart, Stores, and Profile remain in the bottom bar.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use lime filled Add to cart and checkout controls; secondary actions remain white, outlined, or blue text.

Use product cards, campaign banners, category rails, loyalty blocks, cart rows, and checkout groups.

Search, recipient, payment, promo, loyalty, and fulfillment fields stay clearly grouped and labeled.

Show availability, discount, cart count, placed, assembling, canceled, and loyalty status explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Contain product photography and place the mascot in rounded banners with generous negative space.

Contain products without crop and keep mascot campaign copy unobstructed.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show availability, discount, cart count, placed, assembling, canceled, and loyalty status explicitly.

Use green for success, yellow for attention, and red for errors or destructive action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep product, favorite, quantity, fulfillment, payment, and tabs at least 44 points.
- Preserve search, fulfillment, product, cart, total, and checkout; move banners below the shopping task.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not let campaign color enter checkout forms.
- Do not obscure unit or availability.
- Do not mix mascot art into dense product cards.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
