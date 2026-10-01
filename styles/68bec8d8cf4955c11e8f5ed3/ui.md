<design-context>
---
version: 1
platform: iOS
name: Clock-design-analysis
description: "A pure-black iOS utility with oversized precise time numerals, white and gray hierarchy, warm orange actions, green and red semantic controls, native dark lists and sheets, and a compact four-item bottom bar without decorative imagery."
colors:
  canvas: "#000000"
  surface-primary: "#1C1C1E"
  surface-secondary: "#2C2C2E"
  accent-primary: "#FF9F0A"
  accent-secondary: "#30D158"
  text-primary: "#FFFFFF"
  text-secondary: "#A0A0A6"
  divider: "#38383A"
  destructive: "#FF453A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 64, fontWeight: 300, lineHeight: 68}
  title: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 14
  sheet: 22
  pill: 999
components:
  text-action: {text: "#FF9F0A", height: 44}
  time-display: {fill: "#000000", text: "#FFFFFF", numeralStyle: "thin tabular"}
  grouped-row: {fill: "#2C2C2E", text: "#FFFFFF", height: 48, radius: 12}
  circular-control: {diameter: 72, fill: "#1C1C1E", active: "#30D158", destructive: "#FF453A"}
  navigation: {fill: "#000000", active: "#FF9F0A", inactive: "#8E8E93"}
---

# Overview

Clock is a sparse native dark utility where time values and direct manipulation carry nearly all visual weight. Large white titles and exceptionally large thin numerals sit on uninterrupted black. Orange marks navigation and editing actions; gray grouped surfaces appear only where configuration needs structure.

# Non-negotiable visual invariants

- True black fills the main viewport; gray is reserved for grouped controls, sheets, and overlays.
- Live time or countdown numerals are the largest visual object on instrument screens.
- Orange consistently marks active navigation and text actions.
- Main roots retain a compact black bottom bar with small icons and labels.
- Configuration uses native-looking grouped rows, wheels, switches, checkmarks, and thin separators.
- Stopwatch and timer actions are large separated circles, not a generic full-width button.
- Destructive actions are red; start and enabled states use green.
- Empty space remains black and calm, without promotional cards or decorative imagery.

# Color and surfaces

The canvas is pure black. White carries titles and critical values; medium gray supports labels, inactive tabs, and secondary data. Dark graphite surfaces organize grouped settings and sheets without shadows. Orange is the recurring interactive accent, green identifies start/enabled treatment, and red is limited to stop, remove, or delete. Automatic system blue, light grouped backgrounds, gradients, and ornamental textures would break the reference.

# Typography

Root titles are bold large-title scale. Timer and stopwatch values use very large, light-weight, tabular system numerals; row labels remain standard 17-point text with smaller gray support. Numeric alignment and stable widths matter more than decorative type. Dynamic Type may grow titles and rows vertically, while primary time readouts should use available-width fitting with a readable minimum rather than wrap.

# Screen composition

List archetypes place a large title at the top, full-width rows beneath it, and the fixed bottom bar at the safe-area edge. Sparse or empty states intentionally leave most of the black viewport open. Search and add surfaces introduce a keyboard or a rounded dark sheet. Alarm editing uses a centered picker wheel above grouped rounded rows. Stopwatch screens reserve the upper and middle field for a huge readout or dial, place two circular actions below, and use the remaining area for laps. Timer screens similarly center a wheel or circular countdown and keep primary circles clearly separated.

# Navigation appearance

The bottom bar is black with compact gray icons and labels; the selected item turns orange. Top actions such as edit, add, cancel, save, or done are orange text with generous hit areas. Detail stacks use white titles and restrained native back treatment. Sheets have rounded top corners, graphite fill, and dim the black content behind them. These properties do not prescribe product destinations.

# Components

Time rows are full-width black rows divided by hairlines, with primary values and gray context aligned to opposite edges. Grouped settings cells share a graphite container and use chevrons, checkmarks, switches, or trailing values. Picker wheels keep a dark field and centered selection band. Circular controls use concentric dark rings with green, red, orange, or gray state colors. Swipe actions and minus controls use solid red. Search fields are rounded graphite. Pressed and disabled states lower brightness while retaining geometry.

# Imagery and icons

There is no authored illustration or photographic system. Analog faces, circular progress, widgets, and tab glyphs are functional instruments, not decorative imagery. Icons are familiar monochrome system-style symbols at restrained scale. Do not introduce art, hero graphics, emoji, or symbol-filled cards.

# States

Observed states include empty and populated time lists, edit/reorder/delete, search results and no results, alarm creation and repeat selection, label and sound configuration, custom vibration recording, stopwatch running/paused/laps, timer running/paused/resumed, alerts, and a notification banner. The black canvas, orange actions, semantic green/red, and precise numeric hierarchy remain constant.

# iOS adaptation

Respect top and bottom safe areas and keep the bottom bar above the home indicator. Use scrollable grouped content and keyboard avoidance for search and labels. Native sheets and alerts may retain platform motion while using the recorded dark surfaces. Keep rows, tabs, wheel controls, and circles at least 44 points tappable. VoiceOver should announce the primary time before controls and supporting state. Dynamic Type expands lists and sheets; compact widths preserve the central readout and move secondary settings into scrolling content. Dark appearance is canonical and should not be automatically inverted.

# Anti-generic checklist

- No white cards, light forms, or decorative gradients on the black canvas.
- No default blue tint replacing orange actions.
- No ordinary full-width button replacing paired circular timer controls.
- No small bold number replacing the dominant thin time readout.
- No unstyled `TabView` with mismatched selected color or spacing.
- No card grid, photography, illustration, or arbitrary SF Symbols as decoration.
- No duplicate explanatory or mood-setting copy in sparse empty space.

</design-context>
