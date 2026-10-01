<design-context>
---
version: 1
platform: iOS
name: Shop-design-analysis
description: "A visual shopping interface built from soft off-white space, frosted floating navigation, large rounded brand canvases, and a saturated violet purchase accent. Brand photography tints whole sections, while product tiles, chips, and checkout remain clean, compact, and highly rounded."

colors:
  primary: "#5B2AF2"
  on-primary: "#FFFFFF"
  primary-soft: "#E7DEFF"
  ink: "#111113"
  ink-muted: "#6C6C72"
  ink-subtle: "#A1A1A7"
  canvas: "#FBF9FC"
  surface-1: "#FFFFFF"
  surface-2: "#F0EDF2"
  surface-dark: "#19151B"
  glass: "#F7F5F8"
  hairline: "#E2DEE5"
  semantic-success: "#32B767"
  semantic-warning: "#E9A42A"
  semantic-danger: "#E14850"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded:
  xs: 4
  sm: 8
  md: 12
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-secondary: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 8 }
  brand-canvas: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.xl}", padding: 12 }
  filter-chip: { backgroundColor: "{colors.glass}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  cart-sheet: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  checkout-section: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  floating-nav: { backgroundColor: "{colors.glass}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 54 }
---

# Overview

Shop is an image-first marketplace that lets each merchant's photography tint the browsing environment while keeping the shared interface neutral. Large rounded brand canvases, white product tiles, frosted floating navigation, and violet purchase actions create a fluid editorial-commerce feel.

# Non-negotiable visual invariants

- The recurring color treatment uses Saturated violet is the shared purchase and saved-state accent.
- Let merchant photography shape each browsing area.
- Keep shared actions violet and consistent.
- Maintain readable glass contrast over imagery.
- Switch cart and checkout into focused transaction modes.
- Keep product grids image-led and compact.
- Home uses a vertical feed of large brand canvases with horizontal product strips.
- Brand shops and saved views use two-column grids.

# Color and surfaces

- **Shop Violet** ({colors.primary}) marks add-to-cart, purchase, cart count, and saved state.
- **Soft Violet** ({colors.primary-soft}) supports disabled or secondary purchase states.

- **Canvas** ({colors.canvas}) is the shared marketplace background.
- **Surface 1** ({colors.surface-1}) carries products, checkout, and account sections.
- **Surface 2** ({colors.surface-2}) supports neutral brand collections.
- **Dark Surface** ({colors.surface-dark}) carries the cart sheet.
- **Glass** ({colors.glass}) defines floating navigation and chips.

- **Ink** ({colors.ink}) carries brand, product, price, and total.
- **Muted** ({colors.ink-muted}) carries reviews and descriptions.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and inactive controls.

Use green, amber, and red only for delivery, warning, and error states. Merchant colors may enter imagery and background sampling but must not replace shared action semantics.

# Typography

Use a neutral system sans with bold editorial headings and clear price numerals. Merchant logos remain supplied imagery, not substitute interface type.

- `{typography.display-xl}` — 40 points — 700 — Brand shop title
- `{typography.display-lg}` — 32 points — 700 — Home or collection title
- `{typography.display-md}` — 26 points — 700 — Product or saved title
- `{typography.headline}` — 22 points — 700 — Section heading
- `{typography.card-title}` — 16 points — 600 — Merchant or product title
- `{typography.body}` — 14 points — 400 — Price, options, and details
- `{typography.caption}` — 10 points — 400 — Ratings, discounts, and metadata

- Let brand names and product imagery lead.
- Keep price and option labels compact.
- Use bold large type sparingly over merchant hero imagery.
- Keep checkout typography neutral and transaction-focused.

Use SF Pro or Inter. Preserve clear numerals and compact product metadata; avoid decorative store-specific fonts in shared controls.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points screen gutters, 8–12 points product gaps, and 20–24 points between merchant collections. Floating navigation needs at least 12 points edge clearance.

Home uses a vertical feed of large brand canvases with horizontal product strips. Brand shops and saved views use two-column grids. Product detail and checkout use one column.

Use generous breathing room around merchant imagery and compact spacing inside product grids. Checkout removes most atmospheric styling to reduce transaction noise.

Sample color from merchant photography, blur it behind content, and layer white product tiles above it. Use violet glow only around purchase actions, not as a page-wide effect.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a floating pill for back, home, search, bag, and overflow. Top chips expose profile, notifications, Following, Minis, and Saved. Maintain readable contrast over changing merchant backgrounds.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary purchase actions use violet pills; Buy Now may use black. Secondary actions use translucent or white pills. Native controls must inherit these colors, blur, geometry, and typography.

Brand canvases combine merchant identity, product carousel, and Shop All. Product cards show image, price, rating, discount, and heart. Saved collections group products without introducing a new card language.

Search is the main discovery field. Product options use chips and swatches. Checkout groups shipping, delivery, payment, discount, total, and marketing consent into clean white rows.

Delivery cards show merchant, state, and small product preview. Order progress and maps stay practical. Loading uses the violet mark without adding an ornamental full-screen state.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use merchant and product photography as the dominant visual language. Isolated products sit on white tiles; campaign imagery may fill a rounded canvas and tint its background.

Use `contain` for isolated products and `cover` for merchant hero or campaign imagery. Sample backgrounds from imagery without reducing text contrast.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Delivery cards show merchant, state, and small product preview. Order progress and maps stay practical. Loading uses the violet mark without adding an ornamental full-screen state.

Use green, amber, and red only for delivery, warning, and error states. Merchant colors may enter imagery and background sampling but must not replace shared action semantics.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Navigation, hearts, swatches, size chips, quantity controls, and purchase actions require at least 44 points targets.
- Allow brand and product carousels to scroll horizontally. Keep floating navigation and active cart access visible while browsing.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not force every merchant into one background color.
- Do not let sampled colors replace action semantics.
- Do not overload floating navigation with labels.
- Do not carry atmospheric blur into dense checkout rows.
- Do not expose default blue platform controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
