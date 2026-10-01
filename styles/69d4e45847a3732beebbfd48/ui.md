<design-context>
---
version: 1
platform: iOS
name: Glovo-design-analysis
description: "A cheerful delivery marketplace with a warm yellow discovery field, teal-green transactional actions, white restaurant surfaces, rounded image-led cards, and hand-drawn multicolor category icons. Friendly type and receipt-like checkout details keep a broad service catalog approachable."
colors: {primary: "#00A082", on-primary: "#FFFFFF", primary-focus: "#008B70", ink: "#1D1D1F", ink-muted: "#65676A", ink-subtle: "#97999C", ink-tertiary: "#C7C9CB", canvas: "#FFC244", surface-1: "#FFFFFF", surface-2: "#F5F5F3", surface-3: "#ECEDEA", surface-4: "#DEE1DC", hairline: "#E5E6E2", hairline-strong: "#CBCFC8", hairline-tertiary: "#B3B9B0", inverse-canvas: "#00A082", inverse-surface-1: "#1EAE92", inverse-surface-2: "#43BEA5", inverse-ink: "#FFFFFF", brand-secure: "#00A082", semantic-success: "#25A969", semantic-overlay: "#161817"}
typography:
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Rounded, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14 18}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12 16}
  restaurant-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12}
  category-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 14}
  status-badge: {backgroundColor: "#E9B83D", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Glovo pairs a warm yellow discovery world with clean white restaurant and checkout surfaces. Teal drives commitment, while colorful hand-drawn icons keep many delivery categories friendly and distinct.

# Non-negotiable visual invariants

- The recurring color treatment uses warm yellow home.
- The sampled screens consistently show teal transactional CTAs.
- The recurring color treatment uses white content surfaces.
- The sampled screens consistently show circular illustrated services.
- Characteristic content and controls use photo-led restaurant cards.
- Characteristic content and controls use rounded chips.
- The sampled screens consistently show mustard promo badges.
- The sampled screens consistently show receipt-like checkout grouping.

# Color and surfaces

Yellow owns discovery and brand atmosphere. Teal-green owns add, continue, checkout, and selected transactional states.

White is used for restaurant lists, menus, product detail, cart, and checkout. Pale neutral fields group search, options, and order detail.

Near-black leads restaurant, item, price, and total. Gray supports timing, fees, descriptions, and conditions.

Teal confirms action and positive state, mustard marks promotion, and red is reserved for genuine errors or unavailable items.

# Typography

Use a friendly rounded display sans for greetings and category emphasis, with SF Pro Text for menu, cart, and checkout detail.

- display-lg — 30 points — 700 — Greeting or discovery state
- headline — 21 points — 700 — Restaurant or section
- card-title — 16 points — 600 — Dish or service
- body — 13 points — 400 — Detail and checkout
- caption — 10 points — 400 — Timing, fee, promo meta

- Keep discovery language playful but transactional copy direct.
- Put item, price, timing, and fee in repeatable positions.
- Use bold weight sparingly for decision-critical totals.

Use SF Pro Rounded or Nunito Sans for display and the platform sans for dense commerce text.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points card gaps, 16 points module padding, and 20–24 points between discovery rails.

Home uses circular service shortcuts and image-led horizontal rails. Restaurant, dish, cart, and checkout use a focused vertical stack.

Keep the yellow home energetic, then progressively simplify surfaces as the user approaches payment.

Use hand-drawn icons, wavy yellow-to-white transitions, food photography, and soft card shadow. Avoid glossy or metallic visual effects.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations for Home, Discover, Orders, and Profile, with teal or dark active emphasis.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary transactional buttons use teal with white type. Secondary controls stay white or pale, while yellow is not used as the main checkout action.

Restaurant cards lead with photography and compact timing. Dish cards align image, title, description, and price; checkout groups read like a clear receipt.

Address and search fields are prominent and rounded. Native controls may be used but must inherit the teal focus, radii, type, and spacing of this system.

Keep ETA, delivery fee, minimum, unavailable items, substitutions, total, payment, and courier state near the next action.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Crop restaurant imagery wide and appetizing. Place service illustrations inside simple circular fields with generous breathing room.

Use fixed aspect ratios for restaurant and dish imagery, with center crops and protected text-safe areas for badges.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep ETA, delivery fee, minimum, unavailable items, substitutions, total, payment, and courier state near the next action.

Teal confirms action and positive state, mustard marks promotion, and red is reserved for genuine errors or unavailable items.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Service icons, filters, dish rows, options, navigation, cart, and checkout remain at least 44 points.
- Preserve address, restaurant, item, price, ETA, fee, total, and primary action; reduce campaigns and recommendations first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not make checkout yellow or visually playful at the expense of trust.
- Do not mix multiple illustration styles.
- Do not let restaurant photography hide timing, price, or fees.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
