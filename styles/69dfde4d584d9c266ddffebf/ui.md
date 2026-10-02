<design-context>
---
version: 1
platform: iOS
name: PayPal-design-analysis
description: "A restrained financial interface with pale blue-lilac app canvas, white task cards, heavy black headings, PayPal blue links and navigation accents, black pill commitments, sparse transaction rows, and occasional authored onboarding or permission artwork."
colors:
  primary: "#0070E0"
  on-primary: "#FFFFFF"
  primary-deep: "#003087"
  primary-soft: "#EAF3FF"
  ink: "#0B0C0F"
  ink-muted: "#5F6368"
  ink-subtle: "#8E949B"
  ink-tertiary: "#C1C7D0"
  canvas: "#F2F4FF"
  canvas-plain: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F7F8FB"
  surface-3: "#EEF1F7"
  hairline: "#E1E5EC"
  hairline-strong: "#C9CED8"
  inverse-canvas: "#000000"
  inverse-surface-1: "#1B1B1F"
  inverse-surface-2: "#2D2F34"
  inverse-ink: "#FFFFFF"
  semantic-success: "#2E936F"
  semantic-attention: "#E85D1F"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: PayPal Open, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: 0}
  display-lg: {fontFamily: PayPal Open, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: 0}
  display-md: {fontFamily: PayPal Open, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0}
  headline: {fontFamily: PayPal Open, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0}
  card-title: {fontFamily: PayPal Open, fontSize: 16, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: PayPal Open, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: PayPal Open, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: PayPal Open, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: PayPal Open, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: PayPal Open, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: PayPal Open, fontSize: 13, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: PayPal Open, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 48
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13 18}
  button-blue: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12 16}
  card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  transaction-row: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12 14}
  text-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14 12}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 12}
---

# Overview

PayPal is visually quiet and financial. The core screen language is a pale blue-lilac canvas, white rounded cards, strong black type, compact transaction metadata, PayPal blue for links and selected context, and black pills for decisive actions.

# Non-negotiable visual invariants

- Use the pale blue-lilac canvas on signed-in financial screens.
- Keep account, wallet, and transaction content inside white rounded cards or white sheets.
- Use black, high-weight headings and amounts; do not make PayPal blue the default text color.
- Reserve PayPal blue for links, balance marks, focus rings, and the raised center transfer affordance.
- Use black pill buttons for final commitments and selected segmented states.
- Keep bottom navigation sparse, white, and three-item when the reference surface shows it.
- Preserve large empty fields in focused payment screens; do not fill them with unrelated content.
- Use thin gray separators inside detail views instead of heavy cards for every row.

# Color and surfaces

The dominant signed-in surface is `canvas` with white cards. Login and focused modal screens may use a plain white canvas, while onboarding may use saturated PayPal blue fields behind authored artwork.

Black carries commitment and financial emphasis: primary buttons, selected segmented controls, large balances, and important titles. Blue is a supporting identity color: links, focus outlines, small balance marks, and the center Send/Request nav control. Gray is structural only: inactive labels, dividers, placeholders, and disabled states.

Do not introduce broad gradients, tinted card stacks, or multicolor accents outside authored imagery. Orange appears only as a tiny notification dot. Green appears only where the screen needs a confirmed or safe state.

# Typography

Use PayPal Open when available; otherwise use SF Pro with the same weight and size hierarchy.

- `display-lg` for large amounts such as wallet balance.
- `headline` for screen titles like Send and Request or permission headings.
- `card-title` for counterparty names, card names, and balance labels.
- `body` for transaction metadata, secondary details, and explanatory copy.
- `caption` for tab labels, dates, and compact supporting metadata.
- `button` for pill actions and segmented controls.

Keep headings short and heavy. Amounts should use tabular numerals where possible. Supporting copy may wrap before amount, counterparty, or primary action hierarchy is reduced.

# Screen composition

Use a 4 point base grid, 16 point side gutters, 12 to 16 point card padding, and 16 to 20 point vertical gaps between card groups. Signed-in screens are mostly one-column stacks with generous blank canvas below the visible work area.

Home-like compositions place circular menu/profile controls near the top safe area, then stack a balance card, setup or status card, and a transaction card. Wallet-like compositions use top tabs, a large balance card, a fixed-ratio payment card image, and grouped preference rows. Activity-like compositions use top tabs, a rounded search field, then date-grouped transaction cards.

Focused transfer screens use a top title, a single search field, centered instructional copy, and a bottom segmented pill. Preserve the open middle of the screen; it is part of the visual system.

Transaction detail screens use a white canvas, a compact top bar, an identity row with amount, then full-width sections separated by hairlines. Actions in details are icon-above-label cells with a lot of breathing room.

# Navigation appearance

Bottom navigation is white and minimal. Inactive items use black outlined icons and small labels. The active item uses black text; the center transfer item can become a raised PayPal-blue or black circular control with white glyphs. Keep the home indicator area clear and do not let cards sit beneath the bar.

This section governs appearance only. Product structure and destinations come from approved product artifacts.

# Components

Primary commitment buttons are full-width or half-width black pills, 48 to 56 points tall, with white centered text. Secondary pills are white with thin gray outlines and black text. Disabled buttons reduce contrast through pale gray fill and low-opacity text, not through blur.

Text fields are white rounded rectangles with thin gray outlines. The active field uses a strong PayPal-blue outline. Login fields may use 8 to 12 point radius rectangles; search fields use pill radius with a leading search glyph and muted placeholder.

Cards use `surface-1`, 12 point radius, very light shadow or no visible shadow, and thin internal separators only when row density requires it. Transaction rows pair a circular avatar/icon at left, label and date in the middle, and amount aligned right.

Tabs are text-first: selected state is black and underlined; inactive state is muted gray. Segmented controls are low, pill-shaped, and anchored near the bottom when they choose between Send and Request.

Native keyboard and system permission prompts should remain native; the underlying PayPal screen should keep the same canvas, button style, and field positions.

# Imagery and icons

Use small circular avatars for people and circular blue icon disks for merchants. Wallet cards are raster card artwork in a fixed rectangular ratio with rounded corners; do not recreate issuer cards from generic rectangles unless a temporary raster placeholder preserves crop, contrast, and weight.

Authored onboarding and permission art must remain raster artwork. Do not replace it with SF Symbols, emoji, or simple SwiftUI shapes. The PayPal monogram can appear as a small centered outline mark on login screens and as a small mark inside balance cards.

Icon strokes are simple, black or blue, and secondary to text. Keep icons compact and do not create decorative icon grids.

# States

Focused input state uses a blue border and keeps field fill white. Loading inside a primary black pill uses a small white spinner centered in the button. Disabled actions use pale gray fill with subdued text.

Notification or profile attention is shown as a small orange dot. Completed and safe states may use muted green, but green must not become a global accent.

Only the visual states documented here are specified. Additional states must preserve the same canvas, typography, surface, and color hierarchy.

# iOS adaptation

- Extend the canvas through safe areas and keep readable content inside 16 point horizontal insets.
- Keep bottom navigation, segmented controls, inputs, and buttons at least 44 points tall.
- Use a vertical scroll container when wallet or detail content exceeds viewport height.
- Preserve the balance, amount, counterparty, transaction date, and primary commitment hierarchy before preserving secondary explanatory text.
- Let native system UI appear above the app without restyling it.
- Support Dynamic Type by wrapping supporting copy and keeping primary numbers and actions visually dominant.
- Use raster assets for authored art and wallet imagery; integrate them through the asset catalog before treating screens as final.

# Anti-generic checklist

- Do not replace the pale blue-lilac app canvas with a generic grouped gray background.
- Do not make every action PayPal blue; black is the observed commitment color.
- Do not fill focused payment screens with extra cards or promotions.
- Do not hide the selected tab underline or the raised center transfer control.
- Do not make transaction cards dense tables; keep the sparse card rhythm.
- Do not substitute SF Symbols for observed authored art, merchant icons, wallet card art, or avatar imagery.
- Do not collapse all radii into one value; fields, cards, pills, and wallet cards have distinct shapes.

</design-context>
