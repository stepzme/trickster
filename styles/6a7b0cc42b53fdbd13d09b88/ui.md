<design-context>
---
version: 1
platform: iOS
name: Russian-Post-design-analysis
description: "A light logistics dashboard using cool gray canvas, rounded white modules, strong postal blue, cyan actions, dense service grids, map-and-list compositions, tracking timelines, and recurring blue-yellow postal-object illustrations."
colors:
  canvas: "#F2F4F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E8EEF6"
  accent-primary: "#1269D3"
  accent-secondary: "#33B7E8"
  text-primary: "#17191C"
  text-secondary: "#71767D"
  divider: "#E1E5EA"
  destructive: "#DF4B53"
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
  primary-action: {fill: "postal blue or cyan", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "pale blue", text: "postal blue semibold", shape: "rounded rectangle"}
  primary-card: {fill: "white", content: "service, shipment, timeline or object art", shape: "medium rounded"}
  navigation: {fill: "white", selected: "postal blue", accessory: "compact icon and label"}
---

# Overview

Russian Post is a dense light logistics dashboard. White modules, service shortcuts, forms, maps, and tracking timelines sit on a cool gray canvas; postal blue creates continuity, while authored blue-yellow parcel and delivery objects give service cards a recognizable identity.

# Non-negotiable visual invariants

- Cool light-gray canvas remains visible around rounded white modules.
- Postal blue is the dominant navigation and service accent.
- Home combines search, shortcut grid, banner rail, and service cards at dashboard density.
- Map screens devote a major viewport region to the map and keep list or callout context attached.
- Sending screens use stacked rounded panels, selectable options, and a sticky price/action area.
- Tracking progress is expressed as a clear vertical timeline.
- Blue-yellow postal-object art recurs in service and operational cards and cannot be replaced by symbols.

# Color and surfaces

Use cool gray behind white cards and pale blue nested controls. Postal blue leads navigation, links, and important service state; cyan supports primary actions. Dark-blue banners are bounded feature surfaces. Black and gray carry logistics data. Green marks completed progress, red marks alerts or destructive state, and yellow belongs mainly to the authored postal palette.

# Typography

Use SF Pro with bold page titles, semibold shipment and service labels, regular descriptions, and compact metadata. Tracking IDs, prices, and status require clear contrast and alignment. Dynamic Type expands cards, timeline steps, and option rows while keeping status adjacent to the relevant shipment.

# Screen composition

Home is a vertical dashboard with search, icon shortcuts, promo rail, and white service modules above a light tab bar. Post-office screens combine a large map with results or callouts and floating controls. Sending screens stack option cards, selectors, chips, and form panels above a sticky price/action bar. Tracking uses an ordered timeline. Profile and help remain grouped list screens with branded surfaces.

# Navigation appearance

The bottom tab bar is white with postal-blue selection. Top bars carry bold or compact titles plus location, notification, chat, barcode, filter, share, or copy controls. Map controls float as white circles. Sheets are white with broad top corners. Visual appearance does not copy product routing.

# Components

Primary actions are blue or cyan rounded rectangles. Secondary controls use pale-blue fill and blue labels. Search fields are broad and lightly filled. Shortcut grids pair icons with short labels. Sending option cards combine label, value, and optional authored object art. Weight or size chips use compact pills. Tracking uses colored nodes, connecting lines, and aligned detail. Disabled states reduce saturation; selected cards gain blue outline or fill.

# Imagery and icons

The system separates functional line icons, promotional banners, map assets, and recurring authored postal-object art. Parcel, courier, vehicle, bag, box, and letter motifs appear as soft 3D/vector-like objects in blue-yellow palettes. These are compositionally important in service choices and should not be omitted while assets are pending.

# States

Observed states include first launch and permission, populated dashboard, unauthenticated prompt, map pins and callouts, selected sending options, shipment progress, profile toggles, and notification badges. Blue hierarchy and white modular surfaces remain stable.

# iOS adaptation

Keep map controls and callouts within safe areas, give icons and rows 44-point targets, and reserve bottom clearance for tab or sticky action bars. At compact width, stack option cards and let chips scroll. Dynamic Type expands timeline and form content. VoiceOver reads shipment identity, status, detail, then action. Native permission dialogs remain native; app-owned prompts and sheets use the postal palette.

# Anti-generic checklist

- No default blue substituted for the observed postal blue-cyan pairing.
- No plain list replacing the dashboard/service composition.
- No map reduced to a decorative thumbnail.
- No generic progress bar replacing the tracking timeline.
- No SF Symbols or emoji replacing postal-object art.
- No unstyled form, tab bar, or sheet.
- No promotional banner palette spread across core controls.
</design-context>
