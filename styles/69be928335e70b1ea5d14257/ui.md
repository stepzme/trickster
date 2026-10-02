<design-context>
---
version: 1
platform: iOS
name: InDrive-design-analysis
description: "A map-first mobility interface built from pale geographic fields, large white layered sheets, bold black typography, acid-lime action blocks, compact floating controls, factual vehicle imagery, and authored black-line illustrations set against irregular lime shapes."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F7F7F8"
  surface-secondary: "#EFEFF1"
  accent-primary: "#B9F600"
  accent-secondary: "#89AFFF"
  text-primary: "#161616"
  text-secondary: "#535357"
  divider: "#E0E0E3"
  destructive: "#E3483E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#B9F600", text: "#161616", radius: 12, minHeight: 52}
  secondary-action: {fill: "#F7F7F8", text: "#161616", radius: 12, minHeight: 48}
  primary-card: {fill: "#FFFFFF", text: "#161616", radius: 20, padding: 16}
  navigation: {fill: "#FFFFFF", active: "#161616", inactive: "#535357", height: 52}
---

# Overview

InDrive places geographic context or a single decision surface ahead of decorative chrome. Map screens are dominated by a pale, functional map with one large white bottom sheet; form, onboarding, guide, and safety screens use the same white and light-gray base with bold black headings and acid-lime actions. Irregular lime shapes behind black-line authored illustrations form the recognisable expressive layer.

# Non-negotiable visual invariants

- Map-based screens keep a meaningful portion of the map visible behind or above one dominant white sheet.
- Acid lime is reserved for primary actions, selected controls, and brand emphasis; it is not used as a generic page background.
- Primary decisions live in one coherent sheet or panel rather than being split across many floating cards.
- Headings and important values use bold near-black type with strong scale contrast against compact gray guidance.
- Location, amount, service, and status controls use pale neutral fills, modest radii, and minimal borders.
- Floating map controls are few, compact, and visually separate from the primary sheet.
- Authored explanatory art uses black linework over one irregular lime block on an otherwise sparse field.
- Red appears only for destructive, offline, cancellation, or emergency emphasis and never competes with lime as a general accent.

# Color and surfaces

White is the dominant sheet and form canvas. Pale grays distinguish input rows, secondary panels, disabled areas, and grouped information without heavy outlines. Maps remain muted beige-gray so route, location, and controls remain readable. Near-black carries headings, values, and core actions; medium gray carries descriptions and secondary metadata.

Acid lime creates the strongest controlled color mass in primary buttons, selected states, and illustration backdrops. It should not be replaced with system green or used across every neutral surface. Blue is secondary and limited to map/location or trust-related accents where observed. Red is narrowly reserved for destructive or urgent states. Heavy gradients, glass effects, or card shadows would contradict the flat, direct material treatment.

# Typography

The hierarchy is blunt and legible: 28–40-point heavy titles or important values, 22-point section headings, 15-point body copy, and compact 12–14-point labels or metadata. Large amounts, arrival information, or decisive prompts use SF Pro Display with heavy weight; forms, guidance, and control labels use SF Pro Text.

Alignment is predominantly leading, with centered treatment reserved for isolated onboarding or explanatory states. Labels use normal casing and short phrases. Dynamic Type should allow guidance and secondary facts to wrap before reducing the dominance of the primary title, value, or action. On map sheets, growing text increases sheet height or internal scroll rather than covering the action or collapsing the visible geographic context entirely.

# Screen composition

Typical map screens fill the viewport with muted geographic context, place a small number of circular controls near safe-area edges, and anchor one large white sheet to the bottom. The sheet uses 16-point horizontal padding, 12-point control gaps, and 24-point separation between major content groups. Its top corners are markedly larger than the radii of fields and buttons.

The observed archetypes are:

- Map and sheet: map as the background field, sparse floating controls above it, and one white planning, status, or detail sheet occupying the lower portion.
- Form or setup: white canvas, compact top control, bold leading title, stacked pale input rows, and a full-width lime action near the lower content edge.
- Status panel: bold value or state first, supporting route or person information beneath, grouped compact actions, and a persistent primary action.
- Safety or guide surface: sparse white or pale-gray field, black-line/lime illustration as a substantial focal mass, short text, and restrained actions.
- Driver or service list: repeated neutral rows or tiles with factual thumbnails, primary values, secondary metadata, and localized status emphasis.

Scrolling remains vertical and sectional. Bottom actions and sheets respect the home indicator; forms do not pad the screen with mood-setting copy or decorative cards.

# Navigation appearance

Map contexts use compact floating circular menu, back, close, or recenter controls with white or dark fills and simple black or white glyphs. Form and guide screens use a restrained top bar with a single back or close control and no oversized decorative navigation. Large sheets have pronounced top corners and may include a subtle grabber. Where local segmented or tab controls appear, selection relies on contrast and lime emphasis rather than a generic iOS blue. These rules govern appearance only; routes and information architecture come from approved product artifacts.

# Components

- Primary action: full-width acid-lime rectangle with dark semibold label, 12-point radius, and at least 52-point height. Pressed state slightly darkens the lime; disabled state reduces saturation and text contrast without changing geometry.
- Secondary action: white or pale-gray control with dark label, modest radius, and minimal or no border. Destructive actions use red text or a restrained red treatment.
- Map sheet: white surface with 28-point top corners, clear internal grouping, little or no shadow, and enough exposed map to preserve context.
- Location or input row: pale-gray fill, 12-point radius, leading functional icon or marker, one- or two-line text stack, and optional compact trailing control.
- Amount or stepper control: bold central numeric value with clearly separated decrement and increment targets on the same neutral surface.
- Service or driver row: factual image or avatar, concise title/value stack, secondary metadata, and a localized action or status; avoid turning every row into a promotional card.
- Floating control: compact circular white or black surface with high-contrast glyph and a 44-point minimum target.

# Imagery and icons

Maps, route marks, avatars, vehicle photographs or thumbnails, and service objects are factual content and should retain their functional clarity. Keep vehicles and people recognisable, use contained or source-appropriate crops, and avoid stylizing live geographic information as decoration. Icons are simple, dark, and compact; lime is applied through selection or backing surfaces rather than arbitrary symbol coloring.

The independent authored illustration language uses black outlined people or objects over irregular acid-lime geometric blocks. It appears at meaningful scale in onboarding, location education, passenger selection, guide, and safety contexts. This art cannot be dropped while waiting for final assets: use an approved generated image that preserves line weight, lime mass, negative space, and crop instead of rebuilding it from SwiftUI shapes or SF Symbols.

# States

Observed states include empty or initial forms, completed fields, selected service or option, map-based planning, active or ongoing status, permission and geolocation education, safety guidance, modal confirmation, offline or unavailable conditions, and destructive or emergency actions. Selection and readiness rely on lime and dark contrast; disabled or incomplete controls reduce saturation; urgent states use red sparingly. Across states, the same white/gray surfaces, bold leading hierarchy, modest field radii, and single dominant action remain constant.

# iOS adaptation

Let the map or white canvas extend through safe areas as appropriate, while keeping floating controls clear of the status bar and bottom sheet clear of the home indicator. Use a map container behind a height-adaptive sheet; when content grows, scroll inside the sheet before eliminating all map context. Standard form screens use a vertical scroll container and keep the primary action reachable above the keyboard.

All compact map, stepper, close, back, and row actions retain at least 44-point targets. VoiceOver order should read the current context, primary title or value, fields and supporting details, primary action, then secondary controls. Announce changing status and map-related selections without requiring visual color recognition. Dynamic Type may expand sheets, rows, and buttons; never shrink the lime action label or critical value below legibility. Compact widths reduce grid columns or stack metadata before truncating location, safety, or price information.

# Anti-generic checklist

- Do not replace the map-and-sheet composition with a generic white card dashboard.
- Do not use system blue as the primary tint or system green as a substitute for acid lime.
- Do not add a conventional five-tab bar when the reference uses contextual map and top controls.
- Do not ship unstyled `Form`, `List`, `ProgressView`, sheets, or text fields.
- Do not scatter many independent floating cards across the map.
- Do not apply the sheet radius to every field, row, and button.
- Do not substitute arbitrary SF Symbols or SwiftUI drawings for the authored black-line/lime illustrations.
- Do not add gradients, glass materials, heavy shadows, or decorative copy that competes with decisions and geographic context.

</design-context>
