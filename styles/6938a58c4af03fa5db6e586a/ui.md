<design-context>
---
version: 1
platform: iOS
name: Bolt-Food-design-analysis
description: "A photo-led food and grocery marketplace with white surfaces, dense horizontal merchandising rails, strong black hierarchy, forest-green actions, red promotional prices, and compact yellow rating badges. Search, restaurant menus, cart, checkout, and delivery tracking remain direct and information-rich."
colors:
  primary: "#2F8F5B"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F6EF"
  accent: "#B41643"
  accent-secondary: "#F2C94C"
  ink: "#17191A"
  ink-muted: "#656A6D"
  ink-subtle: "#A4A8AA"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F1F3F3"
  hairline: "#E2E5E5"
  semantic-success: "#2F8F5B"
  semantic-danger: "#C83743"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.4 }
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

Bolt Food combines high-density discovery with a short, explicit ordering funnel. Photography identifies stores and dishes; green controls commit actions; price, discount, ETA, and rating stay adjacent.

# Non-negotiable visual invariants

- Characteristic content and controls use Photo-first restaurant and product cards.
- Keep decision data next to imagery.
- Expose total fees before payment.
- Use a visible delivery timeline.
- Retain category context while scrolling.
- Keep basket quantity editable.
- Home and Stores use horizontal rails inside a vertical feed.
- Restaurant menus switch to sticky category tabs and one-column item rows; checkout and tracking use stacked sheets.

# Color and surfaces

- **Bolt Green** ({colors.primary}): Basket, checkout, selection, and progress.
- **Offer Red** ({colors.accent}): Discounts and promotional price.
- **Rating Yellow** ({colors.accent-secondary}): Ratings and popular badges.

- **Canvas** ({colors.canvas}): Marketplace and menu background.
- **Surface 1** ({colors.surface-1}): Lists, order summary, and tracking sheet.
- **Surface 2** ({colors.surface-2}): Search, filters, and address fields.
- **Hairline** ({colors.hairline}): Quiet separation.

- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

- **SF Pro Display** — screen and section headings.
- **SF Pro Text** — controls and explanatory copy.
- **SF Pro Text** — compact labels and authored emphasis.

- {typography.display-xl} — 36 points — 700 — Campaign or section title
- {typography.headline} — 22 points — 700 — Screen heading
- {typography.card-title} — 16 points — 600 — Restaurant, store, or item name
- {typography.body} — 14 points — 400 — Details and forms
- {typography.caption} — 10 points — 400 — Metadata
- {typography.button} — 15 points — 600 — Primary action

- Keep name, price, rating, and ETA scannable.
- Use red only for commercial emphasis or error.
- Truncate descriptions before hiding price.
- Pair every image with useful decision data.

Use **Inter** or the platform system sans when the reference fonts are unavailable; preserve relative weight and scale.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

Home and Stores use horizontal rails inside a vertical feed. Restaurant menus switch to sticky category tabs and one-column item rows; checkout and tracking use stacked sheets.

Keep section boundaries generous while allowing dense cards inside each merchandising rail.

Use only soft card separation and sticky-layer elevation. Food photography provides visual depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Bottom navigation anchors discovery and order history. Restaurant and checkout screens use back navigation with sticky category or summary areas.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Green filled pills commit basket, checkout, address, and reorder. Plus/minus controls stay compact and local to an item.

Restaurant and store cards pair a 16:9 image with rating, fee, and ETA. Item rows prioritize dish photo, description, old price, current price, and add control.

Search and address fields use pale-gray blocks, leading icons, and filter affordances. Checkout keeps delivery notes and tips grouped.

Show confirming, preparing, courier assigned, pickup, en route, delivered, cancelled, and ETA as a vertical timeline.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use tightly cropped real food and storefront photography with consistent rounded rectangles. Protect rating, discount, and add controls from image detail.

Crop food photography consistently around the dish or storefront. Never crop rating, discount, price, or add controls into the image.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show confirming, preparing, courier assigned, pickup, en route, delivered, cancelled, and ETA as a vertical timeline.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every interactive control at least 44 points while preserving the reference density.
- Preserve search, selected restaurant, basket total, and checkout action. Collapse secondary promotions before order data.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use generic illustrations instead of food photos.
- Do not hide delivery fee or ETA.
- Do not place multiple green primary actions together.
- Do not obscure item controls over busy photos.
- Do not merge tracking with browsing navigation.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
