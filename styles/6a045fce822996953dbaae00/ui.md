<design-context>
---
version: 1
platform: iOS
name: Klarna-design-analysis
description: "An airy shopping-finance interface combining white cards, pale lavender-pink atmosphere, heavy rounded totals, dark navy pill actions, merchant photography, and a translucent four-item bottom dock."
colors:
  canvas: "#F4F0FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEEAF2"
  accent-primary: "#FFB3D3"
  accent-secondary: "#171329"
  text-primary: "#17151A"
  text-secondary: "#74717A"
  divider: "#E5E0E8"
  destructive: "#D94D5B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 42, fontWeight: 700, lineHeight: 46}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing: {screen-horizontal: 16, section-gap: 28, card-padding: 18, control-gap: 12}
rounded: {control: 16, card: 22, sheet: 30, pill: 999}
components:
  primary-action: {fill: "dark navy", shape: "pill", text: "white semibold"}
  secondary-action: {fill: "pink or pale neutral", shape: "pill", text: "near-black"}
  primary-card: {fill: "white", shape: "soft rounded rectangle", elevation: "diffuse"}
  navigation: {fill: "translucent floating dock", active: "soft filled capsule", inactive: "dark icon and label"}
---

# Overview

Klarna combines calm finance hierarchy with consumer shopping imagery. White cards float over pale lavender or pink gradients, heavy rounded totals dominate financial screens, and near-black pill actions create decisive contrast. Merchant logos, retail photos, and a translucent four-item dock supply variety without disturbing the spacious shell.

# Non-negotiable visual invariants

- Pale lavender/pink atmosphere surrounds white cards rather than filling every component.
- Major totals and headlines are much larger and heavier than supporting schedule text.
- Primary actions are near-black navy pills; pink is selective brand emphasis.
- Cards are soft, generous, and borderless with diffuse separation.
- Merchant logos and retail photography stay bounded inside calm white surfaces.
- Bottom navigation is a floating translucent four-item dock with a filled active capsule.
- Financial lists remain one-column and readable even when shopping grids or rails appear elsewhere.

# Color and surfaces

Use white and pale lavender/pink as the largest masses, with soft gradients behind dashboard content. Near-black navy carries primary actions and text; pink accents branded payment moments and selection. Secondary surfaces are cool lilac-grey with faint dividers. Green may mark positive value; destructive states use muted red. Hard borders, default blue, or dense saturated pink panels break the reference.

# Typography

Large totals and headings use heavy rounded SF Pro Display; payments, merchants, schedules, and controls use compact SF Pro Text. Amounts lead, with due date/status beneath. Campaign headings may be editorially large but remain bounded. Dynamic Type expands schedules and cards vertically while preserving amount and primary-action dominance.

# Screen composition

Dashboard screens place a large total or heading high, then spacious white cards, merchant grids, offer rails, or payment lists. Search is a floating pill. Checkout and setup use full-screen forms or large bottom sheets with a bottom CTA. Use 16-point gutters, 18-point card padding, and 24–32-point section gaps. Long payments scroll above the dock.

# Navigation appearance

The four-item bottom dock floats above content with translucency, icon-and-label items, and a pale active capsule. Top search is a pill or compact icon. Sheets have large top radii and grab handles; modal forms retain dark pill actions. Appearance only.

# Components

Dark navy primary pills use white semibold labels; pink or neutral pills are secondary. White finance cards combine one strong amount/status with compact detail. Merchant/store tiles use logos or photos with short labels. Payment schedules are stacked rows with clear dates and cost. Radio rows, badges, plus controls, and search fields preserve high-radius geometry.

# Imagery and icons

Merchant logos, retail/product photos, store assets, and simple line icons dominate. Occasional campaign imagery does not form a stable independent illustration system. Preserve logos uncropped and lifestyle imagery with intentional cover crop; imagery cannot be omitted where it carries the card. Do not replace merchants with arbitrary symbols.

# States

Observed states include first launch, country selection, home, checkout/order, payment history, wallet, account, radio selection, badges, and full-screen modal forms. Selected states use filled capsules or pink accents; primary commitment stays dark. Surface softness and spacious hierarchy remain constant.

# iOS adaptation

Extend gradient or white canvas through safe areas. Scroll dashboards, offers, payments, and forms; reserve bottom inset for the floating dock and CTAs. Use native keyboard/sheets while styling app surfaces. Targets are at least 44 points. VoiceOver reads amount/status before schedule detail and action. Dynamic Type expands cards without crowding the dock.

# Anti-generic checklist

- Do not replace lavender atmosphere with generic grouped grey.
- Do not use default blue, unstyled `TabView`, or `Form`.
- Do not make pink the color of every action.
- Do not crowd totals, schedules, and merchant imagery into identical cards.
- Do not remove the translucent floating dock or its active capsule.
- Do not invent illustrations where the reference uses retail photos and logos.

</design-context>
