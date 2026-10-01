<design-context>
---
version: 1
platform: iOS
name: Burger-King-design-analysis
description: "A warm, playful fast-food ordering interface built from cream backgrounds, dark-brown headers, flame orange actions, bold retro display type, product cutouts, and crown-themed red-yellow promotion art. Menu, cart, checkout, delivery tracking, loyalty crowns, and coupons share chunky rounded cards and a persistent five-item navigation."
colors:
  primary: "#F58220"
  on-primary: "#FFFFFF"
  primary-soft: "#FFF0DF"
  accent: "#5B2416"
  accent-secondary: "#E2231A"
  ink: "#4A2015"
  ink-muted: "#806C65"
  ink-subtle: "#B5A59E"
  canvas: "#FFF4E8"
  surface-1: "#FFF9F2"
  surface-2: "#F3E5D8"
  hairline: "#E8D7C8"
  semantic-success: "#16A34A"
  semantic-danger: "#D7262E"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Cooper Black, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: Cooper Black, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: Cooper Black, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: Cooper Black, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
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

Burger King turns ordering and loyalty into one warm branded surface. Product cards remain transactional while crowns, coupons, challenges, and campaigns introduce a playful editorial layer.

# Non-negotiable visual invariants

- Primary screens use Cream canvas and dark-brown chrome.
- Preserve the cream-brown brand field.
- Keep delivery cost visible.
- Use orange locally for adding.
- Give loyalty its own space.
- Use illustration only for campaigns and rewards.
- Menu uses a horizontal category rail and two-column product grid.
- Checkout and tracking use stacked sheets; Crowns uses campaign cards and paired utility tiles.

# Color and surfaces

- **Primary** ({colors.primary}): Add, selected order controls, and product emphasis.
- **Accent** ({colors.accent}): Header, primary text, and navigation.
- **Secondary Accent** ({colors.accent-secondary}): Promotions, loyalty, and urgent offers.

- **Canvas** ({colors.canvas}): Menu, checkout, loyalty, and profile.
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

- **Cooper Black** — menu categories, campaigns, and totals.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

- Keep product name and price close.
- Use display type for short labels only.
- Make delivery cost and thresholds explicit.
- Separate food commerce from loyalty rewards.

Use **Inter** or the platform system sans when the reference display face is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

Menu uses a horizontal category rail and two-column product grid. Checkout and tracking use stacked sheets; Crowns uses campaign cards and paired utility tiles.

Use comfortable gaps between chunky cards while keeping products visually abundant.

Use subtle warm shadows and isolated food cutouts. Illustration adds depth only inside campaign cards.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

My addresses, Menu, Crowns, Coupons, and More remain persistent outside focused checkout and tracking.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Orange circular plus controls add items; green confirms payment; white outlined pills handle secondary actions.

Product cards pair cutout, name, price, portion, favorite, and add. Checkout groups items, suggestions, payment, address, and total.

Address, promo, card, and profile data use focused sheets with explicit confirmation.

Show accepted, preparing, courier assigned, en route, delivered, crown earned, coupon active, and challenge progress in text.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Food appears as clean cutouts or close product photography. Campaigns use flat crown characters and bold color fields with protected copy zones.

Contain product cutouts with clear edges; crop campaign art only inside its authored card and never through headline or CTA.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show accepted, preparing, courier assigned, en route, delivered, crown earned, coupon active, and challenge progress in text.

- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep every row, tab, selector, key, and primary action at least 44 points.
- Preserve category, product, basket total, address, and payment action. Collapse campaign cards before commerce state.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not place promo art behind order totals.
- Do not use green as a general brand color.
- Do not crowd product cutouts with badges.
- Do not hide crown earning rules.
- Do not flatten the retro type hierarchy.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
