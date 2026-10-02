<design-context>
---
version: 1
platform: iOS
name: ForteApp-design-analysis
description: "A light finance interface distinguished by raspberry-magenta actions, coral-pink gradient headers and cards, white modular surfaces, black financial type, and selective teal-blue chart accents."
colors:
  canvas: "#F5F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFEFF2"
  accent-primary: "#C51B6E"
  accent-secondary: "#FF746E"
  text-primary: "#161619"
  text-secondary: "#77777E"
  divider: "#E3E3E7"
  destructive: "#D84852"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "raspberry magenta", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "light gray", text: "near-black semibold", shape: "rounded rectangle"}
  primary-card: {fill: "white or coral-pink gradient", content: "balance, product or chart", shape: "medium rounded"}
  navigation: {fill: "white", selected: "raspberry magenta", accessory: "compact icon and label"}
---

# Overview

ForteApp combines conventional light banking structure with a recognizable raspberry and coral-pink identity. White cards carry account and history detail; gradients concentrate in headers, product art, and promotion, while teal and blue are reserved for charts and exchange information.

# Non-negotiable visual invariants

- A coral-pink or raspberry mass marks the top or principal product region.
- White finance cards sit on a quiet light-gray canvas.
- Raspberry magenta is the decisive action and selected-state color.
- Black balances and titles remain more prominent than gradient decoration.
- Service shortcuts form a compact icon grid.
- Charts and exchange modules use teal-blue accents rather than magenta-only data encoding.
- Promotional imagery remains bounded in carousel cards.

# Color and surfaces

Use light gray around white primary cards and slightly darker secondary controls. Raspberry is the primary action color; coral-pink gradients may occupy headers or major product surfaces. Black and medium gray carry hierarchy. Teal or blue supports quantitative charts and exchange values; cyan may mark advisory content. Red remains destructive or error-specific.

# Typography

Use SF Pro with bold major balances and screen titles, semibold module headings, regular form and history text, and quiet captions. Financial numerals need clear alignment. Gradient regions still use strong contrast. At larger Dynamic Type, allow labels to wrap and modules to grow without reducing the distinction between amounts and metadata.

# Screen composition

Home screens place a colored header or product summary above a white vertical dashboard containing promo rails, shortcut grids, and compact modules. Product screens lead with card art or balance, then actions and history. History is a dense list; transfer screens are focused forms. Exchange screens combine compact rates and chart areas. Bottom content clears the safe area and persistent tab bar.

# Navigation appearance

The bottom bar is white with a raspberry selected state. Top navigation is minimal over both white and gradient regions, using back controls and utility icons with sufficient contrast. Sheets are white with generous top rounding. The visual treatment can be reused without copying the source app's routes.

# Components

Primary buttons are raspberry rounded rectangles with white labels. Secondary controls are pale gray with dark text. Cards use medium rounding and restrained elevation. Shortcut tiles pair small colored icons with concise labels. Transaction rows align identity and amount. Charts are clean, thin, and teal-blue. Disabled controls become gray; selected chips gain magenta text or a pale pink fill.

# Imagery and icons

Use photography inside promo banners, branded card art on product surfaces, and flags or charts for exchange content. Functional icons are compact and colorful but consistently sized. These are media, branding, and icon assets rather than evidence of a stable authored illustration system.

# States

Observed states include first launch, populated home, debit-card details, transaction history, transfers, and foreign-exchange data. Across states, the light modular base, magenta actions, black hierarchy, and selective gradient remain constant.

# iOS adaptation

Use safe-area-aware scroll views, single-column forms, horizontal promo rails, and two-column service grids only where labels remain readable. Keep 44-point hit regions, keyboard avoidance, and VoiceOver order from summary to actions to detail. Dynamic Type increases card and row height; charts retain a minimum readable plot area. Native controls receive explicit magenta tint and surface styling.

# Anti-generic checklist

- No default blue primary actions.
- No magenta wash across every surface.
- No loss of the coral-pink top or product color mass.
- No generic white card stack without shortcut and data hierarchy.
- No decorative chart colors unrelated to teal-blue data accents.
- No unstyled tab bar, form, or progress control.
- No invented illustration system from promo photography or card art.
</design-context>
