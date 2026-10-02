<design-context>
---
version: 1
platform: iOS
name: Booking-design-analysis
description: "A photo-led travel interface combining royal-blue navigation bands, white transactional surfaces, bright-blue actions, yellow search emphasis, dense property cards, and sticky price or booking controls."
colors:
  canvas: "#F4F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF1F4"
  accent-primary: "#006CE4"
  accent-secondary: "#FFB700"
  text-primary: "#1A1A1A"
  text-secondary: "#6B6F75"
  divider: "#E0E3E6"
  destructive: "#D84A4A"
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
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "Booking blue", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "white", text: "Booking blue semibold", shape: "bordered rounded rectangle"}
  primary-card: {fill: "white", content: "large property photo, identity, rating, price", shape: "small-medium rounded"}
  navigation: {fill: "royal blue or white", selected: "blue and high contrast", accessory: "compact icon and label"}
---

# Overview

Booking is a photo-led transactional travel interface. Royal-blue bars establish brand and navigation; white lists and forms carry dense information; property photography and sticky price/action regions dominate decision screens.

# Non-negotiable visual invariants

- Royal blue occupies substantial header or navigation regions.
- Real destination and property photography is the main visual mass in discovery and detail.
- Search controls receive strong yellow outline or emphasis against blue.
- Property cards keep photo, rating, identity, and price in one scannable unit.
- Checkout becomes denser and more form-like without losing the blue action hierarchy.
- A sticky bottom price/action bar anchors decisive booking steps.
- Green is reserved for positive availability or cancellation information.

# Color and surfaces

Use royal blue for brand bars, bright blue for primary actions, white for cards and forms, and pale gray for the surrounding canvas. Yellow is a focused search accent, not a general decorative color. Black and gray carry dense travel details; green carries positive policies or success; red is destructive or error-specific. Dark blue may identify bounded loyalty content.

# Typography

Use SF Pro with bold page and property titles, semibold prices and actions, regular body text, and compact labels for policies and metadata. Hierarchy comes from weight more than dramatic scale. At larger Dynamic Type, wrap amenities and policies and expand cards without allowing price or action labels to truncate.

# Screen composition

Home and search screens place a blue header above search controls and photo-led results. Property lists use vertically stacked full-width cards. Detail screens combine a wide image region, title/rating block, information sections, and sticky action. Booking screens use dense one-column fields, accordions, payment selection, and a persistent bottom summary. Modal loading uses a centered white dialog over a dimmed screen.

# Navigation appearance

Primary navigation may use a blue top bar or a light bottom tab bar with blue selection. Deep screens use compact back, share, and help icons. Sheets and loading dialogs are white with restrained rounding. Tabs and segmented travel controls show clear blue selection. The style does not prescribe the source routing.

# Components

Primary actions are bright-blue rounded rectangles with white semibold text. Secondary actions are white with blue text or border. Search modules group several fields inside a yellow-emphasized container. Property cards use medium corners, a large photo, compact information, and little shadow. Form fields use pale borders, validation checks, checkboxes, accordions, and payment rows. Disabled or loading states preserve geometry and reduce contrast.

# Imagery and icons

Real property and destination photos are essential and cannot be omitted pending final assets. Use consistent aspect ratios, edge-to-edge card crops, and protected focal architecture. Icons are thin and utilitarian. Loyalty and survey spot art are isolated promotional assets, not a repeatable illustration system.

# States

Observed states include onboarding permission, populated home, search, property results, property detail, validated booking forms, payment selection, loading overlay, and rating prompt. Blue actions, white transactional surfaces, and photo prominence persist.

# iOS adaptation

Use safe-area-aware scrolling and reserve space for sticky bottom summaries and actions. Keep photo aspect ratios stable, give controls 44-point targets, and use keyboard avoidance for checkout fields. Dynamic Type expands rows and accordions; VoiceOver reads property identity and price before secondary amenities. Native permissions remain native, while app-owned sheets and validation use the reference palette.

# Anti-generic checklist

- No removal or shrinking of property photography.
- No default blue-only search field without yellow emphasis.
- No generic equal-weight card list missing rating and price hierarchy.
- No floating glass navigation.
- No oversized corner radii on transactional fields.
- No unstyled form or tab bar.
- No illustration system inferred from isolated loyalty art.
</design-context>
