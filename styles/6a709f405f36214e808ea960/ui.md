<design-context>
---
version: 1
platform: iOS
name: Kompanion-design-analysis
description: "A bright banking dashboard on an off-white canvas, using vivid royal blue actions, rounded white account cards, pale-blue icon containers, compact financial rows, promotional photography, and a light labeled tab bar."
colors:
  canvas: "#F5F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF3FF"
  accent-primary: "#2354E8"
  accent-secondary: "#DCE7FF"
  text-primary: "#15171A"
  text-secondary: "#73777D"
  divider: "#E5E7EB"
  destructive: "#D94C55"
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
  primary-action: {fill: "royal blue", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "pale blue", text: "royal blue semibold", shape: "rounded rectangle"}
  primary-card: {fill: "white", content: "balance, product, compact actions", shape: "medium rounded"}
  navigation: {fill: "white", selected: "royal blue", accessory: "icon and compact label"}
---

# Overview

Kompanion is a dense but orderly light banking interface. Royal blue provides a consistent action spine while white account cards, compact rows, service grids, and occasional promotional photography organize the pale workspace.

# Non-negotiable visual invariants

- Off-white fills the screen around full-width white finance cards.
- Royal blue owns primary actions, active navigation, and key links.
- Balances and product names outrank supporting account metadata.
- Service shortcuts appear as tidy icon grids with pale-blue containers.
- Transaction and notification content remains compact and list-led.
- A blue bottom action may anchor focused transfer or payment screens.
- Promotional photography stays inside dedicated banners rather than becoming the canvas.

# Color and surfaces

Use off-white for the canvas, white for primary modules, and pale blue for icon wells and selected secondary controls. Royal blue is the only dominant action color. Black carries titles and balances; gray carries dates and explanations. Green and orange remain success and processing signals, while destructive red is rare. Purple or teal promotional accents do not replace the core blue hierarchy.

# Typography

Use SF Pro with bold balances and titles, semibold module labels, regular body copy, and compact captions. Numeric values align cleanly and remain higher contrast than product metadata. Dynamic Type should grow row height and wrap descriptions without making captions compete with balances.

# Screen composition

Home screens use a vertical dashboard: product carousel or balance card, action shortcuts, service grids, banners, and recent activity. Card details lead with a wide product surface and place controls and history below. Payments use grouped icon grids; transfers use focused single-column fields and a bottom CTA. Notifications are plain grouped rows. All scrolling content clears the light tab bar and bottom safe area.

# Navigation appearance

The bottom bar is white with compact black/gray icons and a royal-blue selected state. Top bars use large or compact black titles with small utility icons. Deep screens use a blue or black back control without decorative chrome. Sheets are white with broad top rounding and a dim background. Routes and labels remain product-defined elsewhere.

# Components

Primary actions are solid blue rounded rectangles; secondary actions use pale-blue fill and blue labels. Finance cards use medium corners, 16-point padding, and subtle separation rather than heavy shadows. Shortcut tiles pair a colored icon well with a short label. Rows align leading identity, secondary metadata, and trailing value. Form fields are light bordered or filled controls; disabled states use gray text and reduced blue saturation.

# Imagery and icons

Photography and branded card art appear in bounded promo or product regions. Functional icons are simple, consistently weighted, and frequently placed in pale-blue circles or rounded squares. These assets do not form a reusable illustration system; do not invent one from banners, card art, or isolated icons.

# States

Observed states include first launch, populated home, card details, payment selection, phone transfer entry, and notifications. Blue action semantics, white modular surfaces, and black financial hierarchy remain stable; success and processing add green or orange only where needed.

# iOS adaptation

Keep forms single-column and dashboard tiles two-column only while text fits. Use safe-area-aware scroll views, keyboard avoidance, 44-point row and icon targets, and VoiceOver ordering from financial summary through actions to history. At larger Dynamic Type, expand cards and convert dense grids to fewer columns. Native sheets and controls must inherit the blue tint and surface styling.

# Anti-generic checklist

- No default iOS blue substituted for the observed royal blue.
- No generic white list with all dashboard grouping removed.
- No heavy glass or shadows around every card.
- No equal type weight for balance and metadata.
- No unlabeled miscellaneous SF Symbols.
- No promotional color leaking into core navigation.
- No invented illustration language.
</design-context>
