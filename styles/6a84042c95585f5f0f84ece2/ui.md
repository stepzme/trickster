<design-context>
---
version: 1
platform: iOS
name: Click-SuperApp-design-analysis
description: "A dense light financial super-app using pale blue-gray canvas, bright blue actions, white card modules, compact service-icon grids, promotional banners, structured forms, and a labeled bottom tab bar."
colors:
  canvas: "#EEF3F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E4ECF4"
  accent-primary: "#1685E6"
  accent-secondary: "#D9EEFF"
  text-primary: "#15171A"
  text-secondary: "#70767D"
  divider: "#DFE5EA"
  destructive: "#E14950"
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
  primary-action: {fill: "Click blue", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "pale blue-gray", text: "Click blue or black", shape: "rounded rectangle"}
  primary-card: {fill: "white", content: "balance, service grid, card or form", shape: "medium rounded"}
  navigation: {fill: "white", selected: "Click blue", accessory: "icon, label and optional badge"}
---

# Overview

Click SuperApp is a content-dense light financial dashboard. White balance, service, card, and form modules sit on a pale blue-gray base; bright blue establishes action and selection while icon grids and bounded promo banners provide variety.

# Non-negotiable visual invariants

- Pale blue-gray canvas remains visible around white modules.
- Bright Click blue is the sole dominant action and navigation accent.
- Home is a dense stack of balance, service grid, banners, and shortcuts.
- Service icons are colorful but standardized in size and placement.
- Forms use centered white modules and clear disabled or error states.
- Bottom navigation uses icon-plus-label items with blue selection and small badges.
- Promo photos and discount colors remain bounded inside banners.

# Color and surfaces

Use pale blue-gray for the canvas, white for primary modules, and slightly darker pale controls for secondary state. Bright blue carries actions, selected navigation, and links. Black and gray carry financial hierarchy. Green and red are limited to success, discounts, validation, and error. Saturated promo colors must not leak into core controls.

# Typography

Use SF Pro with bold centered titles and balances, semibold module labels, regular explanatory text, and compact gray captions. Cyrillic labels remain readable at dense sizes. Dynamic Type expands cards and rows; validation messages wrap without displacing the primary action from the form hierarchy.

# Screen composition

Sign-up uses a centered title, compact form, and bottom or in-card action. Home places search and profile utilities above a balance card, mini-app grid, promo carousel, and stacked modules. Card-add screens focus a white form card against the pale canvas. Payment screens use grouped category rows and icon-led service choices. All content clears the white bottom bar.

# Navigation appearance

The bottom tab bar is white, with blue selected icon/label and optional small badges. Top bars use centered or large black titles with back, profile, bell, or search controls. Sheets and focused forms are white with broad corners. The reference supplies appearance, not route or information architecture.

# Components

Primary actions are solid blue rounded rectangles; disabled actions turn gray while keeping dimensions. White cards use medium corners and subtle shadow. Balance modules include privacy controls and compact actions. Mini-app tiles pair colorful icons with short labels. Form fields use light borders, validation text, and clear focus/error state. Toggles, payment rows, add-card choices, and QR shortcuts follow the same blue selection language.

# Imagery and icons

Service/category icons, card-network logos, promo photography, discount chips, and the brand mark are separate asset classes. The icon set is important to density and recognition, but inspected screens do not establish a standalone authored illustration system. Do not generate decorative scenes to fill modules.

# States

Observed states include splash, disabled sign-up action, identity document choices, populated home, hidden balance, card-add selection, validation error, enabled form action, wallet controls, and service payment lists. White modules, pale canvas, and blue selection remain stable.

# iOS adaptation

Use safe-area-aware scroll views and keyboard avoidance. Preserve compact grids only while labels fit; reduce columns at larger Dynamic Type. Give all icon tiles and tab items 44-point targets. VoiceOver reads module heading before its grid or rows. Native toggles and input behavior may remain native, but their tint, fill, error, and disabled appearance must be explicit.

# Anti-generic checklist

- No default system blue substituted for the observed bright blue.
- No white-only background that erases the pale canvas.
- No generic list replacing balance and mini-app modules.
- No mismatched icon sizes or arbitrary symbol styles.
- No promo palette used for core navigation.
- No unstyled form, toggle, or tab bar.
- No invented illustration system from photos, logos, or icons.
</design-context>
