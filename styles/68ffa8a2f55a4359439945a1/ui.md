<design-context>
---
version: 1
platform: iOS
name: Teremok-design-analysis
description: "A warm restaurant loyalty app built from white canvas, burgundy-red actions, peach loyalty cards, real food photography, and a charming hand-drawn pancake mascot universe. The interface is simple and airy, with friendly promotional art separated from practical ordering."

colors:
  primary: "#B3132F"
  on-primary: "#FFFFFF"
  primary-pressed: "#941026"
  wheat: "#E8B66E"
  peach: "#F6C79F"
  ink: "#171719"
  ink-muted: "#747579"
  ink-subtle: "#AAA9AC"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F5F5F6"
  hairline: "#E5E3E4"
  semantic-success: "#2CAE69"
  semantic-warning: "#E7A62A"
  semantic-danger: "#D83C49"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 33, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  loyalty-card: { backgroundColor: "{colors.peach}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  menu-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60 }
---

# Overview

Teremok separates playful loyalty from practical ordering. Pancake characters and peach cards make the brand friendly, while red actions, white lists, and food photography keep purchase tasks direct.

# Non-negotiable visual invariants

- Keep mascot art warm and handmade.
- Use real food photography for menu items.
- Reserve red for action and identity.
- Preserve loyalty progress.
- Home stacks loyalty and horizontal campaign rails.
- Menu uses horizontal categories and a two-column product grid; map fills the viewport.
- Keep loyalty modules airy.
- Ordering may be denser, but food cards need clean separation.

# Color and surfaces

Burgundy red carries active navigation, links, outlines, and cart actions. Wheat and peach support loyalty and mascot scenes.

White is the primary surface; light gray separates fields and inactive controls. Loyalty uses warm peach panels.

Near-black carries headings and prices; gray supports location, time, and secondary labels.

Green confirms order progress, amber supports rewards, and red marks both brand and error, so destructive copy must be explicit.

# Typography

Use a neutral system sans for UI. Hand-drawn lettering belongs only inside campaign artwork.

Use 22–27 points page headings, 16–17 points section titles, 14 points body, and 10–12 points loyalty or order metadata.

Keep level, cashback, coins, price, and restaurant context explicit. Avoid handwritten UI labels.

SF Pro or Inter are suitable. Preserve strong Cyrillic and clear price numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 12 points card gaps, and 20–24 points between loyalty, coupon, campaign, and menu groups.

Home stacks loyalty and horizontal campaign rails. Menu uses horizontal categories and a two-column product grid; map fills the viewport.

Keep loyalty modules airy. Ordering may be denser, but food cards need clean separation.

Use hand-drawn characters, flat pastel banners, and warm restaurant scenes. Keep forms and map chrome flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Five bottom destinations persist across Home, Promotions, Order, Teremki, and Help. Red marks the active section.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary order actions are burgundy-red with white text. Secondary controls use white with red outlines; native controls inherit this styling.

Loyalty cards show level and progress; promo cards use illustration; menu cards foreground photo, name, and price.

Restaurant search, coupon, and order fields use pale rounded inputs with direct labels.

Order status, achievement progress, loyalty level, coupon validity, and restaurant availability appear near their related item.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Use centered character scenes in banners and real food photography in rounded rectangles. Maps remain full bleed.

Use `cover` for food photography and `contain` for mascot artwork. Preserve map labels and pins.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Order status, achievement progress, loyalty level, coupon validity, and restaurant availability appear near their related item.

Green confirms order progress, amber supports rewards, and red marks both brand and error, so destructive copy must be explicit.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Navigation, coupons, menu cards, map controls, and order actions require at least 44 points targets.
- Allow promotions and categories to scroll horizontally. Keep cart total and action pinned.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not put mascots inside checkout forms.
- Do not use handwritten fonts for UI data.
- Do not mix unrelated illustration styles.
- Do not hide restaurant context.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
