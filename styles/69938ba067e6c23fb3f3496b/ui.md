<design-context>
---
version: 1
platform: iOS
name: Avito-design-analysis
description: "A broad classifieds marketplace built on white surfaces, bold black utility type, Avito cyan, and category photography. Five-tab navigation supports search, favorites, selling, messages, and profile; commerce flows introduce purple delivery actions while friendly multicolor illustrations soften empty, success, and promotion states."
colors:
  primary: "#00AAFF"
  on-primary: "#FFFFFF"
  primary-soft: "#E0F5FF"
  accent-purple: "#9654F4"
  accent-green: "#23C174"
  accent-yellow: "#FFD24A"
  accent-pink: "#FF6B8A"
  ink: "#111111"
  ink-muted: "#717171"
  ink-subtle: "#A8A8A8"
  canvas: "#FFFFFF"
  surface-1: "#F2F2F4"
  surface-2: "#E6E6E9"
  hairline: "#DDDEE1"
  semantic-success: "#23C174"
  semantic-danger: "#E83E52"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Arial, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: Arial, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: Arial, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: Arial, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: Arial, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Arial, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Arial, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Arial, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Arial, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Arial, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Arial, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Arial, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-delivery: { backgroundColor: "{colors.accent-purple}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  listing-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [3, 6]}
  order-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Avito keeps an enormous catalog understandable through direct search, photo-led listings, and stable bottom navigation. Cyan identifies the platform, black advances selling and forms, and purple is reserved for protected cart and delivery actions.

# Non-negotiable visual invariants

- The recurring color treatment uses White.
- Primary screens use information-dense marketplace canvas.
- Keep price and object identity immediately scannable.
- Preserve search context after details.
- Distinguish platform, selling, and delivery actions by color.
- Explain totals and protection before payment.
- Use illustration for guidance and closure.
- General search uses a two-column masonry-like grid.

# Color and surfaces

- **Avito Cyan** ({colors.primary}): Brand, active tab, and linked actions.
- **Delivery Purple** ({colors.accent-purple}): Buy with delivery, cart, and protected checkout.
- **Green** ({colors.accent-green}): Paid and service-success states.
- **Yellow/Pink**: Promotional and illustrative support only.

- **Canvas** ({colors.canvas}): Search, listing, profile, and forms.
- **Surface 1** ({colors.surface-1}): Filters, grouped panels, and order summaries.
- **Surface 2** ({colors.surface-2}): Disabled and nested areas.
- **Hairline** ({colors.hairline}): Quiet list separation.

- **Ink** ({colors.ink}): Prices, titles, and actions.
- **Ink Muted** ({colors.ink-muted}): Seller, location, and delivery metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and secondary labels.

- **Success** ({colors.semantic-success}): Paid, delivered, and service-level states.
- **Danger** ({colors.semantic-danger}): Complaint and destructive action.
- **Overlay** ({colors.semantic-overlay}): Sheets and focused onboarding.

# Typography

- **Arial / system sans** — listings, forms, headings, and navigation.
- **SF Mono** — listing IDs only.

- `{typography.display-xl}` — 36 points — 700 — Success or campaign heading
- `{typography.headline}` — 21 points — 700 — Section and form heading
- `{typography.card-title}` — 16 points — 600 — Price and listing title
- `{typography.body}` — 14 points — 400 — Metadata and forms
- `{typography.caption}` — 10 points — 400 — Badge and tab label
- `{typography.button}` — 14 points — 600 — Primary action

- Lead with price and object name.
- Use bold headings for task boundaries.
- Keep location and trust metadata compact.
- Reserve playful type for authored illustration assets.

Use **Inter** or the native platform sans.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 8 points listing gaps, and 12–16 points grouped-card padding.

General search uses a two-column masonry-like grid. Automotive results may become wide rows. Selling and checkout use one-column steps with pinned actions.

Favor density in results and larger quiet zones in forms, profile, and success states.

Use listing photography and soft, lightly dimensional illustration. UI cards themselves stay nearly flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Search, Favorites, Ads, Messages, and Profile form the bottom bar. Cart stays in search headers; task-specific flows use back or close.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Black buttons progress selling; cyan handles neutral platform actions; purple commits protected purchase and delivery. Secondary actions use pale blue fills.

Listing cards pair image, price, title, seller, rating, delivery, and saved state. Order and profile cards use grouped rows with explicit totals and status.

Search uses a soft gray field with filter access. Selling is stepwise, with plain inputs, helper text, optional generated description, and a fixed Continue action.

Discount, viewed, reliable seller, verified documents, publication review, paid, delivery, service level, and order state remain close to their object.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Listing photos use honest cover crops. Illustration is centered in open white or pastel space, with rounded simplified objects and Avito's multicolor accents.

Use consistent cover crops in grids and larger contained galleries on detail pages. Never alter seller evidence or distort aspect ratio.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Discount, viewed, reliable seller, verified documents, publication review, paid, delivery, service level, and order state remain close to their object.

- **Success** ({colors.semantic-success}): Paid, delivered, and service-level states.
- **Danger** ({colors.semantic-danger}): Complaint and destructive action.
- **Overlay** ({colors.semantic-overlay}): Sheets and focused onboarding.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep tabs, favorites, filters, steppers, chat, purchase, and selling actions at least 44 points.
- Truncate secondary metadata before price or image. Keep checkout and selling one-column; horizontal categories may scroll.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not color every CTA cyan.
- Do not hide seller trust or delivery conditions.
- Do not overcrop listing evidence.
- Do not mix promotion with order totals.
- Do not put decorative art inside dense result cards.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
