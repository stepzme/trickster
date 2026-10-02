<design-context>
---
version: 1
platform: iOS
name: WB-Taxi-design-analysis
description: "A map-first ride interface that layers compact white bottom sheets and floating address controls over full-screen cartography, using a vivid violet-to-magenta action gradient, bold fare hierarchy, and sparse vehicle imagery."
colors:
  canvas: "#F4F3F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEEAF2"
  accent-primary: "#8E24D6"
  accent-secondary: "#B51CF2"
  text-primary: "#151518"
  text-secondary: "#8E8E93"
  divider: "#E7E4EB"
  destructive: "#EF2323"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
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
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {background: "linear gradient #B51CF2 to #7B16DA", foreground: "#FFFFFF", radius: 16, minHeight: 54}
  secondary-action: {background: "#FFFFFF", foreground: "#151518", radius: 14, minHeight: 48}
  primary-card: {background: "#FFFFFF", radius: 16, padding: 16}
  navigation: {background: "#FFFFFF", radius: 14, height: 52}
---

# Overview

WB Taxi lets the map remain the largest surface and moves each decision into a compact white overlay. The recognisable rhythm is full-screen cartography, a floating address or search control, a rounded bottom sheet, and one vivid violet-to-magenta action. Bold fares, sparse vehicle cutouts, and functional route marks keep the interface focused rather than card-heavy.

# Non-negotiable visual invariants

- On ride-related screens, the map fills the viewport behind controls and remains visibly legible around the active sheet.
- The current decision is concentrated in one white bottom sheet with a 20–24-point top radius, not distributed across dashboard cards.
- A violet-to-magenta treatment marks the single primary action; secondary controls remain neutral.
- Pickup pins, destination marks, and route lines use the same purple family and read clearly over map tiles.
- Address controls float near the top edge while fare or confirmation content is anchored to the bottom safe area.
- Ride options are compact cards with a strong fare and small contained vehicle image rather than large lifestyle photography.
- Account, payment, and support surfaces stay pale and list-like, retaining the same rounded control geometry without imitating the map composition.

# Color and surfaces

Map tiles form the base on ride screens. White is the primary overlay surface for route fields, fare cards, and sheets; pale lavender-gray is the canvas for non-map utility screens. The main accent moves between route purple `#8E24D6` and a brighter magenta-violet gradient from approximately `#B51CF2` to `#7B16DA`. Use that color mass for the principal action, selected payment, route marks, and focused controls, not for every row.

Near-black carries addresses, fares, and headings; medium gray carries placeholders and helper text. Hairlines are faint and mainly separate service rows. Red is reserved for destructive account and cancellation states. Dimmed black scrims support modal sheets. Default iOS blue or an opaque full-screen purple background would break the observed system.

# Typography

Use SF Pro with bold 28-point screen titles, 20-point sheet headings, 15–17-point address and action text, and 13-point metadata. Fares can scale toward 28–38 points and use tabular numerals, creating a clear numeric focal point. Labels remain sentence case and left aligned. Supporting instructions are lighter and wrap beneath the relevant field rather than forming standalone prose blocks.

Dynamic Type should expand sheet height and wrap address details before reducing map labels, fare prominence, or the primary action. Preserve visible contrast between the fare or title, row label, and helper text.

# Screen composition

Map screens are full bleed. Floating controls keep roughly 12–16 points from the horizontal edges and safe-area top. The active bottom sheet uses 16-point internal padding, 8–12-point row gaps, and a 20–24-point top radius. Content outside map contexts uses a pale full-screen canvas with a single column of white rows or a focused form.

Observed archetypes include:

- A clean login or account form with broad rounded fields and one gradient completion action.
- A full-screen map with a floating top address/search pill, profile control, route pin, and low bottom sheet.
- An address search overlay with stacked pickup and destination fields followed by plain result rows.
- A selection sheet with compact fare cards, small contained car images, and a full-width bottom action.
- Focused payment, cancellation, settings, and delete-confirmation sheets over a dimmed or retained context.
- A tall support-chat surface with a sparse message area and anchored composer.
- Isolated branded launch or mandatory-update artwork on an otherwise simple centered screen.

The map remains the primary visual mass; sheets normally occupy only the lower portion until a task requires a focused, taller modal.

# Navigation appearance

No persistent tab bar was observed. Map navigation is composed from a floating top address control, a compact circular profile button, and bottom-sheet actions. Back and close controls are simple, high-contrast icons placed within the current surface. Sheets use a small centered drag handle and rounded top corners. This defines visual appearance only; routes and destinations belong to the approved product artifacts.

# Components

The primary button is a full-width rounded rectangle, about 54 points high, with a left-to-right magenta-violet gradient, white semibold label, and 14–18-point radius. Pressed state may deepen or compress the gradient; disabled state lowers saturation while preserving geometry. Secondary buttons use white, pale gray, or charcoal fills.

Address fields are broad white rounded rows with compact leading location marks and clear primary/secondary text. Fare cards use white surfaces, approximately 16-point radii, a bold price, a compact service label, and a small side-view vehicle image. Selected cards receive a purple border, tint, or mark without changing their size.

Payment and cancellation choices use full-width rows with radio or check states. Settings and profile screens use quiet grouped rows and thin separators rather than nested cards. Destructive confirmation uses red only for the destructive action. Map controls remain compact visually but keep 44-point hit regions.

# Imagery and icons

Native-looking map tiles, route lines, and location pins carry most of the visual information. Vehicle imagery is small, isolated, and contained within fare cards. Decorative branded artwork appears on a few launch or update screens but does not form a repeatable authored illustration system. Functional symbols should be restrained and consistent; arbitrary icon decoration would compete with the map.

Do not omit the map, car cutouts, or route marks when they define the sampled composition. Use realistic placeholder assets with the same crop and scale if final imagery is unavailable.

# States

The base ordering state shows an unobstructed map with floating controls. Route-building and selected-location states add purple pins and a clear polyline while retaining the same overlays. Selected fare and payment rows use purple emphasis. Cancellation uses a focused radio-list sheet. Card-binding failure appears as concise feedback without replacing the entire screen. Destructive profile deletion uses a dimmed scrim and red action. Empty support chat remains deliberately sparse. Mandatory update is a centered branded-art state with one clear action.

# iOS adaptation

Allow the map to extend beneath both safe areas, but keep interactive controls clear of the status bar and home indicator. Anchor sheets with detents or content-driven height so smaller iPhones retain visible map context whenever the task allows. Use scroll containers inside tall sheets and utility screens; never let a sheet exceed compact height without internal scrolling.

All pins, close controls, fare cards, payment rows, and actions require at least 44-point targets. Move focused address and chat inputs above the keyboard without losing the current selection. VoiceOver should read current address, destination, fare choice, price, and primary action in that order. Dynamic Type expands rows and sheets. Preserve the observed light appearance; the dimmed modal scrim is not evidence for a complete dark mode.

# Anti-generic checklist

- Do not replace the map-first composition with a generic list or dashboard.
- Do not cover most of the map with stacked white cards before a focused choice requires it.
- Do not use default blue tint or an unstyled `TabView`.
- Do not place several competing gradient buttons on one screen.
- Do not enlarge decorative artwork until it competes with route context.
- Do not replace vehicle images with arbitrary SF Symbols or emoji.
- Do not turn settings and payment rows into a promotional card grid.
- Do not use one uniform radius for fields, cards, sheets, and pills.

</design-context>
