<design-context>
---
version: 1
platform: iOS
name: Banco-Plata-design-analysis
description: "A soft futuristic banking interface with mist-gray atmospheric fields, frosted white rounded modules, orange brand actions, bold financial numerals, floating pill navigation, and scoped glossy 3D product objects."
colors:
  canvas: "#F2F2F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E8E8ED"
  accent-primary: "#FF5B19"
  accent-secondary: "#3714E8"
  text-primary: "#101014"
  text-secondary: "#74747C"
  divider: "#DDDEE4"
  destructive: "#E54455"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 750, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 31, fontWeight: 700, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 22
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "#FF5B19", textColor: "#FFFFFF", cornerRadius: 14, minHeight: 50}
  secondary-action: {fill: "#FFFFFF", textColor: "#101014", cornerRadius: 14, minHeight: 46}
  primary-card: {fill: "rgba(255,255,255,0.9)", cornerRadius: 22, padding: 16}
  navigation: {fill: "rgba(255,255,255,0.92)", selectedColor: "#FF5B19", unselectedColor: "#74747C", cornerRadius: 999}
---

# Overview

Banco Plata uses a soft atmospheric banking shell: large mist-gray/white fields with blurred blue-orange light, floating frosted modules, orange brand actions, and high-contrast financial numerals. A rounded navigation pill and circular top controls make the dashboard feel modular. Scoped 3D coins, gradient orbs, and product objects add tactile brand moments without entering every operational screen.

# Non-negotiable visual invariants

- Mist-gray/white atmosphere with blurred blue-orange color masses fills the background.
- Account, metric, and action modules are broadly rounded, white/frosted, and visually floating.
- Orange is the stable brand/acquisition/primary-action accent.
- Financial balances and key amounts use large bold black numerals.
- Bottom navigation appears as a floating rounded white/frosted pill with badges where needed.
- Top back/search/utility controls often appear as separate circular floating buttons.
- Scoped product moments use glossy orange/white 3D objects and soft gradient orbs.

# Color and surfaces

The canvas is mist gray with soft white and blurred blue/orange atmosphere. Primary modules are white or translucent white; secondary groups use pale gray. Orange anchors the logo chip, primary actions, selection, and acquisition. Violet/blue may identify specific controls or products but remain secondary. Near-black carries amounts/titles, gray carries metadata, green confirms success, and red is destructive. Flat system gray, default blue, or hard-bordered rectangular banking panels would break the soft modular system.

# Typography

Use SF Pro. Balances, cashback totals, rates, and simulator values receive large bold numeric treatment. Page titles are bold; account/product labels and list-row text are compact; helper copy is gray. Preserve a clear amount → product/status → action hierarchy. Dynamic Type expands cards and list rows, stacks secondary values, and keeps the main amount readable without overlapping floating controls.

# Screen composition

The top safe area continues the atmospheric field and often contains a centered orange logo chip plus circular controls. Home stacks large account/balance cards, metric modules, and action tiles above a floating navigation pill. Cashback/partner/product screens can use a photo or 3D hero followed by white cards. Transaction history and credit detail use one-column rows/cards. Payments use a grid of action tiles. Transfers and deposit simulators use large rounded bottom sheets or stacked white forms. Insets are around 16 points with generous gaps.

Visible archetypes include sign-in and permission rationale; home dashboard; cashback and success/rating sheet; partner promotion; transaction summary/history; credit-card detail; payments grid; transfer sheet; and deposit simulator.

# Navigation appearance

The bottom navigation is a detached rounded white/frosted pill with orange selected emphasis and small badges. The top may use a centered orange PLATA mark and separate circular back/search buttons. Sheets are large, white, and deeply rounded over a soft scrim. Segmented controls use compact rounded selection. Native system permission/Face ID prompts may remain native during transition, while app-owned surfaces retain the atmospheric background.

# Components

Primary actions are orange rounded rectangles with white semibold labels. Account cards, summary tiles, and action grids use white/frosted fill, broad rounding, and minimal border. Transaction rows pair simple line icons, label/metadata, and amount. Cashback options and partner cards use photo/logo content plus selected states. Transfers use a large rounded sheet with account/value rows and bottom action. Deposit simulators combine large numerals, sliders/controls, and result modules. Disabled states keep geometry and lose saturation.

# Imagery and icons

Partner/store logos and photos are content assets. Authored 3D cashback coins, glossy product objects, and abstract gradient orbs follow the separate illustration specification. They are used for brand/product/promo moments, not as decoration behind balances or transaction lists. Functional icons are clean black line symbols. Authored objects cannot be replaced by SF Symbols, emoji, or SwiftUI shapes.

# States

Observed states include splash, permission rationale, contact permission, phone keyboard, Face ID enable, populated dashboard, cashback selection/success/rating, partner promo, transaction summary, card details, payments grid, transfer sheet, and deposit simulator. Orange remains primary, white/frosted modules persist, and system alerts overlay without changing the underlying atmosphere.

# iOS adaptation

Extend the atmospheric field beneath safe areas and keep floating navigation above the home indicator. Use vertical scrolling for dashboards/history, keyboard-aware sign-in/transfers, and bottom sheets sized for current iPhones. Maintain 44-point hit targets for circular controls, tiles, segments, and navigation. VoiceOver should read account/product → amount → status/metadata → action; decorative orbs can be hidden. Dynamic Type expands modules and sheets. Compact widths stack metric tiles before reducing the main number. Provide opaque white/gray fallbacks when Reduce Transparency is enabled.

# Anti-generic checklist

- Do not replace the atmospheric mist/blur field with flat grouped gray.
- Do not use default blue instead of orange brand/action emphasis.
- Do not use an edge-to-edge `TabView` instead of the floating pill.
- Do not flatten balances, rates, labels, and actions into one text level.
- Do not use default `Form`, grid, segment, or bottom-sheet styling.
- Do not recreate glossy objects/orbs with SwiftUI shapes, SF Symbols, or emoji.
- Do not place 3D objects behind financial values or dense transaction content.

</design-context>
