<design-context>
---
version: 1
platform: iOS
name: MegaPay-design-analysis
description: "A white iOS payments interface combining MegaPay green accents, dark decisive controls, compact numeric hierarchy, a raised central QR control, and glossy 3D object imagery on pale modular surfaces."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F6F8"
  accent-primary: "#38C98B"
  accent-secondary: "#182233"
  text-primary: "#20242C"
  text-secondary: "#777981"
  divider: "#E5E6E9"
  destructive: "#D94A50"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 18
  control-gap: 12
rounded:
  control: 14
  card: 22
  sheet: 28
  pill: 999
components:
  gradient-wallet-card: {}
  raised-qr-control: {}
  dark-primary-action: {}
  service-object-tile: {}
  transaction-row: {}
---

# Overview

MegaPay is a bright, modular payments interface dominated by white space, pale gray input and tile surfaces, vivid green brand accents, and dark navy controls. Dense home and payment areas use compact grids, balances, service objects, and banners, while transfer and payment tasks become sparse single-column forms with a fixed bottom action. A raised green QR control gives the bottom navigation a recognizable silhouette. Glossy 3D objects act as content anchors rather than ornamental filler.

# Non-negotiable visual invariants

- White remains the dominant full-screen field; pale gray surfaces organize content without turning the interface into a gray card stack.
- MegaPay green is concentrated in brand accents, progress, wallet gradients, success cues, and the raised central QR control.
- Dark navy or near-black fills decisive actions and selected compact controls, creating a deliberate counterweight to green.
- Balance, amount, allowance, and transaction totals carry the strongest typographic emphasis.
- Form screens keep generous empty space and a fixed full-width bottom action instead of filling the viewport with explanatory cards.
- Top-level navigation has a protruding green center control that visibly interrupts the otherwise flat white tab bar.
- Service and product tiles may use glossy 3D object imagery; imagery cannot be replaced by arbitrary line symbols where it defines the tile.
- Modal menus and confirmations use a dim scrim and a large white sheet with a pronounced top radius.

# Color and surfaces

The application canvas and primary surface are white. Pale cool gray defines fields, secondary cards, icon wells, and list grouping. `accent-primary` is a clear mint-green used for brand recognition, progress, selected states, success, and soft gradient wallet surfaces. `accent-secondary` is deep navy, used for decisive buttons, selected pills, and high-contrast camera or QR contexts. Primary copy is dark charcoal; secondary copy is neutral gray. Debits, failures, and destructive actions use restrained red, while success remains green.

Wallet and payment cards can carry diffuse mint gradients or blurred green light, but ordinary screens remain flat and quiet. Purple or blue may appear inside authored campaign or object artwork, not as an extra interface tint. Default system blue, thick card borders, strong material blur on every surface, or colorful rows would visibly break the reference.

# Typography

Use SF Pro for an iOS-safe rendering of the observed compact sans-serif hierarchy. Titles are bold and high contrast; section headings are semibold. Balances, entered amounts, data allowances, minutes, and transaction totals use larger bold numerals with tabular figures when columns align. Body and helper text stay compact, regular, and gray. Buttons and selected pills use concise semibold labels.

Preserve large-to-small contrast under Dynamic Type. Allow descriptions and row metadata to wrap, keep critical values legible with controlled scaling, and expand vertical spacing rather than truncating meaning. Avoid long decorative prose, all-caps display copy, or near-identical sizes for title, total, label, and caption.

# Screen composition

Screens use a generous top safe-area buffer and about 20 points of horizontal inset. Detail views commonly center the navigation title. Content follows a single vertical axis: dense dashboards combine horizontally aligned tiles and banners; task screens use a title, a few pale controls, a deliberately open middle region, and a fixed bottom CTA. Cards align to the same full content width and use consistent but not universal radii.

Observed archetypes:

- **Home or account dashboard:** prominent balance or usage summary followed by compact service tiles, product cards, banners, and recent activity above the bottom bar.
- **Payment directory:** search or category heading, dense grid/list of services, compact icon or 3D-object tiles, and clear grouping by pale surfaces.
- **Transfer or payment form:** centered title, progress cue when present, amount or destination field, sparse supporting details, and fixed dark action above the safe area or keyboard.
- **Wallet detail:** large balance and wallet card treatment, small clustered actions, then full-width detail and transaction rows.
- **History or profile list:** stacked rows with leading glyph wells, dark labels, gray metadata, and subtle dividers.
- **Scanner:** high-contrast dark capture area with a clear framing device and minimal controls.
- **Result state:** single outcome focus, bold amount or status, concise details, and one dominant continuation control.

# Navigation appearance

The bottom bar is a low white surface with thin gray inactive icons and dark active labels. Its center QR action rises above the bar as a green hexagonal or circular control, establishing a distinct silhouette and stronger visual priority than adjacent tabs. Inner screens use simple back chevrons or close controls and centered titles. Transfer and payment sequences may show a thin green progress bar near the top. Bottom sheets use a dim background, white surface, large top corners, and stacked rows with ample touch height. These are appearance rules only; destinations and sequence come from the product specification.

# Components

- **Gradient wallet card:** broad rounded rectangle with soft mint/green light, large balance, compact supporting labels, and minimal controls; avoid hard borders.
- **Raised QR control:** green centered circular or faceted button, visually elevated above the white tab bar, with a high-contrast scanner mark and at least a 44-point target.
- **Dark primary action:** near-full-width, 52–56 points tall, deep navy fill, white semibold label, and rounded corners; disabled state lightens substantially while retaining geometry.
- **Service object tile:** pale or white rounded tile with one centered glossy 3D object, concise label beneath or beside it, and generous internal negative space.
- **Input field:** pale gray rounded surface, compact label/value hierarchy, minimal outline, and clear focus/validation treatment.
- **Segment or pill:** compact rounded selector with dark selected fill and light unselected surfaces; selected text reverses to white.
- **Transaction row:** small leading category mark, dark primary label, muted timestamp or metadata, and a trailing signed amount using red or green only when semantically required.
- **Bottom-sheet menu:** vertically stacked action rows inside a broad white sheet over a darkened scrim.

# Imagery and icons

Functional icons are restrained gray line or solid glyphs, often centered in pale rounded-square wells. Selected navigation icons become darker without acquiring unrelated colors. Partner and provider marks can remain recognizable inside payment directories.

Glossy 3D objects are a characteristic visual layer: cards, folders or documents, gift bags, service props, cars, cameras, investment arrows, and wallet objects appear isolated on white or pale tiles, commonly from a front-three-quarter or isometric angle. They should hold meaningful visual weight inside their module and cannot be omitted when that object defines the category or empty state. Use approved generated raster assets following `illustrations.md`; do not recreate them with symbols or programmatic shapes.

# States

Hidden and visible balance states preserve the same card geometry and typographic hierarchy. Focused amount fields and numeric keyboards compress the lower layout while keeping the action reachable. Transfer/payment progress uses restrained green progress and consistent white surfaces through entry, confirmation, processing, and success. Debit amounts and alerts use red sparingly; successful outcomes reinforce green without flooding the canvas. Empty wallet or product states may use a single glossy object as the focal anchor. Scanner states shift to a dark capture field while retaining the green brand cue. Profile verification variants, settings selections, and modal support menus keep the same row geometry and muted surface system.

# iOS adaptation

Use safe-area-aware vertical scrolling and `safeAreaInset(edge: .bottom)` for fixed actions and the customized bottom bar. The raised center control must remain clear of the home indicator and not obstruct neighboring 44-point targets. When the keyboard appears, scroll the active field into view and keep the decisive action reachable without changing its visual style. Native sheets may supply interaction and detents while the content preserves the broad white surface and observed radius.

VoiceOver should announce balances with currency, combine transaction rows into meaningful units, and place the center QR action in logical navigation order. Dynamic Type may turn compact grids into taller rows or fewer columns; imagery should retain a stable optical size and not crowd labels. The evidence is light-first. Do not invent a dark mode unless required, and do not auto-invert 3D raster artwork or mint gradients.

# Anti-generic checklist

- Do not replace the green-and-dark hierarchy with default blue controls.
- Do not render the bottom bar as an unstyled `TabView` without its raised central QR control.
- Do not turn sparse task screens into stacked explanatory cards.
- Do not use identical white rounded cards for every row, input, banner, and section.
- Do not substitute arbitrary SF Symbols for characteristic 3D service or empty-state objects.
- Do not overuse gradients; they belong to wallet/payment emphasis, not every surface.
- Do not flatten numeric balances, section titles, row labels, and captions into one scale.
- Do not add decorative copy that repeats visible amounts, states, or available actions.
</design-context>
