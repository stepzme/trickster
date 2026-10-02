<design-context>
---
version: 1
platform: iOS
name: mts-urent-design-analysis
description: "A map-first rental interface with a pale 2GIS canvas, charcoal mobility pins, a violet scan action, and white bottom sheets that stage vehicle choice, tariff, ride, and completion."
colors:
  canvas: "#F4F4F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F6F3F8"
  accent-primary: "#7B3FF2"
  accent-secondary: "#BCA4FF"
  text-primary: "#17171A"
  text-secondary: "#6E6B73"
  divider: "#E7E3EA"
  destructive: "#FF4965"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {height: 54, fill: "#7B3FF2", foreground: "#FFFFFF", radius: 14}
  secondary-action: {height: 54, fill: "#F6F3F8", foreground: "#17171A", radius: 14}
  primary-card: {fill: "#FFFFFF", foreground: "#17171A", radius: 18}
  navigation: {mapControls: "white circular controls over map", sheetHandle: "small gray centered capsule"}
---

# Overview

MTS Urent is visually led by an edge-to-edge pale 2GIS map rather than by a static dashboard. The recognizable layer is a set of small white floating controls, dense charcoal scooter and bike markers, dashed parking boundaries, a saturated violet scan control near the bottom center, and white bottom sheets with large top corners. Full white pages appear for focused account, payment, phone, wallet, and verification screens; black is reserved for camera scanning; violet gradient campaign screens are visually separate from the normal rental surfaces.

# Non-negotiable visual invariants

- The map remains the dominant visual field on discovery and active-rental screens, with app controls floating above it instead of sitting in a conventional header or tab shell.
- Vehicle and parking data uses compact charcoal, violet, mint, and red map objects that remain visually distinct from the light gray 2GIS geography.
- The QR scan action is the strongest persistent control: centered low in the viewport, violet, rounded, and larger than the surrounding white map controls.
- Contextual information appears in white sheets with 24-point top corners and a small handle, leaving meaningful map context visible when the sheet is not full-screen.
- Primary commitment actions use saturated violet; success and battery status use mint/green; restrictions and destructive ride-ending signals use red or dark charcoal with a red stop mark.
- Operational pages are quiet white surfaces with pale grouped rows, compact black text, and minimal shadows, not decorative gradient pages.
- Campaign and recap artwork may be large and glossy, but it stays in promotional surfaces and does not replace normal markers, icons, or empty states.

# Color and surfaces

The largest normal color mass is the pale map canvas: cool light gray streets, soft green parks, blue water, and thin dashed or dotted boundaries. App surfaces stay white so map content remains legible. Bottom sheets, account panels, wallet blocks, form fields, menu tiles, and payment rows use white or very pale lavender-gray fills with subtle separation and restrained shadows.

Violet is concentrated in the scan control, primary buttons, selected markers, premium badges, tariff cards, toggles, bonus currency, and active underline states. Lighter lavender appears as gradient support in promotional cards and subscription chips. Charcoal anchors dense vehicle markers and active ride ending controls. Mint green communicates battery and successful confirmation. Red-pink marks restrictions, stop/end details, notification dots, and warning symbols. Default iOS blue would visibly break the system except inside external payment or system-owned pages.

# Typography

The operational UI uses SF Pro with compact, high-contrast hierarchy. Full page titles sit around 20-24 points with bold weight; bottom sheet headings are around 20 points; normal body and row labels sit around 15-17 points; helper, metadata, timer notes, legal copy, and map-adjacent labels sit around 11-13 points. Text is mostly sentence case and left-aligned on operational screens.

Numbers are prominent where the user sees balance, bonus points, vehicle number, timer, cost, distance, battery, parking count, or tariff price. Use tabular numerals for timers, currency, and distances. Campaign stories are the exception: they use uppercase, extra-bold white display type over violet gradients, with very large numeric metrics occupying the lower half. With Dynamic Type, sheets and full pages should grow vertically and scroll; map controls and marker labels should not shrink below tappable or readable size.

# Screen composition

The repeated map composition is full-bleed: system status bar over the map, a small premium or bonus pill near the upper left, zoom and layers stacked on the right, menu near the lower left, current-location near the lower right, and the violet scan control centered above the home indicator. Vehicle markers and parking zones are embedded in the geography; the app avoids placing a persistent title bar over the map.

Selected vehicles, zones, filters, tariff decisions, restrictions, and ride states rise as bottom sheets. These sheets use a centered gray handle, 16-point horizontal padding, rounded top corners, and enough height to contain the immediate object or decision without turning the map into a small thumbnail. Full-screen white pages use a compact back control, centered title, wide empty margins, and grouped rows with soft fills. Camera scanning switches to a black or live-camera full screen with a large white QR-corner target and bottom-aligned round controls. Promotional and yearly recap screens are full-bleed violet gradients with large centered 3D assets and white display text.

# Navigation appearance

There is no visible persistent tab bar. The map state relies on floating controls: circular white buttons, a vertical zoom group, compact pills, selected map pins, and sheet handles. Selected marker state turns violet and can extend into a short label; dense clusters stay charcoal. Navigation bars on white pages are minimal, usually a plain back arrow on the left and a centered title, with generous white space below.

Sheets visually communicate level through height, dimming, and the drag handle rather than through a separate navigation chrome. Modal confirmations and system permissions keep the background dimmed and preserve the underlying pending screen. Close buttons in scanner, campaign, and story screens are simple circular or textless controls near safe-area edges.

# Components

Primary actions are 54-point rounded violet rectangles with white semibold text and a subtle vertical gradient or saturated fill. Secondary actions use pale fills with black text, while destructive or ride-ending actions use dark charcoal paired with a small red stop mark. Disabled controls are pale, low-contrast versions that keep the same footprint.

Map controls are 44-48 point white circles or compact pills with simple dark symbols and soft elevation. The scan control is a larger violet circle or pill with a QR-corner glyph. Vehicle markers are dark rounded pins containing a white scooter or bike pictogram and a mint battery strip; selected markers become violet and may show the vehicle number. Parking count markers are dark compact pills; restricted areas use red outlined signs.

Bottom sheets use white fill, 24-point top corners, a small gray handle, compact title/body hierarchy, and 8-12 point gaps between grouped rows. Menu tiles form a two-column grid with pale cards, violet circular icons, and black labels. Wallet and history rows combine violet bonus icons, bold numeric balance, segmented chips, date headings, thin dividers, and right-aligned amounts. Toggle rows use violet active switches and pale inactive tracks.

# Imagery and icons

The 2GIS map is functional imagery and must remain visually readable; app overlays should not tint it into a branded background. Vehicle thumbnails are small product cutouts used beside names and numbers in sheets. Camera screens display live camera imagery as task content, with white scan brackets and bottom controls above it.

Promotional visuals include realistic scooter renders on violet backgrounds, Mos ID and payment-service graphics, premium banners, and yearly recap stories with chrome-and-purple 3D medals or a furry purple mascot. These are campaign assets, not a consistent icon system for ordinary UI. Routine icons are simple filled or line symbols inside violet or white circles, but branded marks and vehicle markers need custom artwork rather than arbitrary SF Symbols.

# States

Observed visual states include loading map overlays, sparse and dense map marker states, selected vehicle labels, speed-control zone notices, map layer toggles, phone and SMS verification, native notification permission prompt, account-link confirmation sheet, empty and populated wallet, payment method selection, payment success, black scanner before camera content, live scanner with recognized vehicle sheet, active ride summary sheet, expanded ride controls, completion confirmation banner, profile menu sheet, and full-screen recap stories.

Across these states the system keeps the same visual anchors: white surfaces for information, violet for the next committed action, charcoal for markers and heavy controls, mint for positive readiness, and red for restrictions or stopping. Loading overlays are local and compact. Empty states are sparse, centered, pale, and icon-light rather than illustrated scenes.

# iOS adaptation

On current iPhones, let the map extend under the status bar and around the home indicator while keeping controls and sheets inside safe areas. Maintain 16-point horizontal sheet padding, 44-point minimum hit targets, and enough bottom inset for the violet scan or primary action to clear the home indicator. Compact widths should keep the map-control constellation intact; if text grows, expand or scroll sheets rather than shrinking markers, scan controls, or action buttons.

Use native map and camera primitives for the underlying image fields, then style the overlays to match the observed controls. Native system permission and keyboard presentations are acceptable, but the surrounding app screen must keep the same typography, colors, and spacing. Dark appearance is not a global theme in the observed screens; only scanner/camera and dimmed modal backdrops are dark. VoiceOver order should follow the visible stack: map controls, selected or nearby vehicles, then the active sheet content.

# Anti-generic checklist

- Do not replace the map-first composition with a generic white dashboard, card list, or tab bar.
- Do not use default iOS blue tint for primary actions, toggles, selected states, or links inside app-owned UI.
- Do not use standard map pins for scooters, bikes, parking, restrictions, and selected vehicles.
- Do not turn every promotional gradient or story asset into a product-wide illustration language.
- Do not build sheets as default `Form` sections with square grouped cells.
- Do not cover the map with a full-height panel when a partial sheet preserves the observed spatial composition.
- Do not substitute arbitrary SF Symbols for custom vehicle markers, QR scan glyphs, branded service marks, or bonus currency.
</design-context>
