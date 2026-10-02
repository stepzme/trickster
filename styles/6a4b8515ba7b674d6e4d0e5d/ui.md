<design-context>
---
version: 1
platform: iOS
name: Green-SM-design-analysis
description: "A light electric-mobility interface with turquoise CTAs, airy white screens, soft 3D transport objects, map-first booking states, rounded bottom sheets, compact profile rows, and a floating frosted pill tab bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F8F8"
  accent-primary: "#28C7C9"
  accent-secondary: "#BFEFEC"
  text-primary: "#15171A"
  text-secondary: "#687076"
  divider: "#E4E9EA"
  destructive: "#D84A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 28}
  section: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 700, lineHeight: 22}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 16
  section-gap: 22
  card-padding: 14
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "#28C7C9", textColor: "#FFFFFF", height: 48, cornerRadius: 10}
  secondary-action: {backgroundColor: "#FFFFFF", textColor: "#15171A", height: 46, cornerRadius: 10, borderColor: "#E4E9EA"}
  primary-card: {backgroundColor: "#FFFFFF", cornerRadius: 14, borderColor: "#D8E7E7"}
  navigation: {backgroundColor: "#EEF6F5", selectedColor: "#28C7C9", unselectedColor: "#7B858A"}
---

# Overview

Green SM is a bright, friendly mobility UI. It uses turquoise as the only strong transaction color, keeps most screens white and airy, and adds identity through soft 3D vehicles, map routes, circular environmental artwork, and rounded bottom sheets. The trip screens are operational and map-led; profile and payment screens stay sparse and white.

# Non-negotiable visual invariants

- Turquoise around `#28C7C9` owns primary actions, route highlights, active tab glow, focused fields, and selected controls.
- White is the main surface; mint and pale aqua are light accents, not page-wide color blocks except for subtle profile glow backgrounds.
- Use soft-rendered 3D mobility objects where the reference uses them: cars, scooters, payment/passcode/security objects, and small service illustrations.
- Booking/trip states are map-first: the map fills most of the viewport and information sits in rounded white sheets layered above it.
- Home and profile use floating, rounded, translucent or frosted bottom navigation rather than a default full-width tab bar.
- CTAs are simple turquoise rounded rectangles with white semibold labels; secondary buttons are white or pale with restrained borders.
- Promotional imagery and vehicle artwork must remain raster/image-based when visible.

# Color and surfaces

The palette is clean white plus turquoise. Primary turquoise is vivid but not neon; use it for only the current action or active state. Pale aqua, mint, and soft cyan appear as glows behind profile headers, service cards, selected markers, route lines, and small illustration shadows.

Text is near black for titles and trip facts, medium gray for descriptions, addresses, metadata, and inactive navigation. Dividers are hairline and low contrast. The trip map introduces real map colors; do not recolor the map into a brand gradient. Emergency and destructive states use red sparingly. Apple login remains black as observed.

Avoid competing saturated blues, purples, or greens. A generic gray grouped background would make the interface feel heavier than the reference.

# Typography

Use SF Pro. Onboarding uses the largest type: 28 to 32 pt bold turquoise/black display copy with generous line height. Operational screens use compact titles around 17 to 22 pt, semibold/bold. Address, payment, profile, and trip rows use 13 to 15 pt text with muted secondary lines.

Fare and route facts should use tabular numerals when available. Buttons use 14 to 15 pt semibold. Labels in service tiles and quick actions are compact and should not overpower the illustrations. Dynamic Type should expand sheets vertically while preserving the map-first composition and the primary CTA at the bottom of the sheet.

# Screen composition

Onboarding and login screens place illustration high in the viewport, text in the middle, and controls near the bottom. Large negative space is intentional. The recurring composition uses a circular orbit of small 3D objects around the main headline, then a turquoise CTA.

The main service screen uses a rounded search field at the top, two large service tiles, a smaller service tile row, a rectangular map/availability banner, and promotional image tiles. The floating bottom navigation sits above the home indicator in a rounded pill with a soft blur/glow.

Address selection and trip screens use a full-screen map. Search fields, back controls, map pins, route lines, ride cards, payment rows, and action buttons float above the map. Bottom sheets have rounded top corners, white fill, and shallow elevation; they can occupy the lower third to half of the screen depending on trip state.

Profile screens switch from map to a white/pale aqua scroll. A soft aqua glow sits behind the avatar and top cards. Quick actions are four rounded tiles in a two-by-two grid. Settings rows are sparse and full width with small left icons and right chevrons.

# Navigation appearance

Navigation chrome is minimal. Top bars use white background or float over the map with simple back arrows, close icons, search fields, and small plus buttons. The bottom navigation on non-map screens is a compact rounded pill with soft translucency; selected item gets a turquoise glow and filled icon treatment, while inactive items stay gray.

Map screens reduce navigation to contextual floating controls and bottom sheets. Do not keep the home pill over active map booking states unless a sampled screen explicitly shows it.

# Components

Primary buttons are turquoise rounded rectangles, usually full width, 44 to 50 pt high. Disabled buttons are pale gray or very pale aqua with low-contrast text. Apple sign-in is a black full-width button; Google sign-in is white with a thin border.

Inputs are rounded, light fields with a turquoise focus border. Phone inputs pair a country selector with a text field. OTP and passcode controls use outlined circles or boxes with generous spacing, centered in sparse white screens.

Ride cards are white rounded rectangles with a thin aqua border when selected. They contain a small 3D car thumbnail, ride label, rating, and fare aligned to the right. Payment and promotion controls use small icon-plus-label rows below the ride card.

Bottom sheets use white fill, rounded top corners, and grouped rows. Safety sheets dim the underlying trip sheet/map and slide up as a compact white panel with a close button, black support row, and red emergency row.

Profile quick-action tiles are pale, rounded, and icon-led; settings rows are flatter with hairline separation and small gray/turquoise icons.

# Imagery and icons

Imagery is part of the product language. Use soft 3D turquoise cars, scooters, lock/payment/account objects, environmental orbit objects, and promotional raster images featuring vehicles. Keep these assets bright, glossy, and lightly shadowed on white or pale mint backgrounds.

Map visuals should remain legible: thin turquoise route line, standard map labels, black and colored pins, small car markers, and white callout pills. Avoid decorative overlays that obscure map labels.

SF Symbols may support generic row icons only when styled to the observed weight and color. They are not acceptable substitutes for vehicles, onboarding art, payment/passcode illustrations, promotion images, or the branded service tile art.

# States

Observed states include app tracking and notification permission alerts, phone entry with keyboard, OTP method bottom sheet, OTP entry, profile completion, passcode creation/login, home with notification prompt, address search results, map pickup selection, ride selection, trip confirmation, driver search/progress sheets, safety center bottom sheet, empty payment method, populated payment method, and editable profile fields.

Across these states, turquoise focus, white surfaces, soft 3D/raster imagery, rounded sheets, and sparse typography remain consistent. Loading uses a small turquoise spinner or dimmed overlay rather than a heavy branded interstitial.

# iOS adaptation

Respect top safe area over maps and keep floating controls clear of the status bar. Bottom sheets must clear the home indicator and remain scrollable when content grows. Map screens should keep the route and current callout visible above the sheet whenever possible.

For keyboard states, move only the active input/form content enough to remain visible; do not compress the art into unreadable fragments. For native permission alerts and app tracking prompts, keep native iOS styling and dim/blur the app behind it.

Use 44 pt minimum tap targets for search, plus, back, ride cards, payment rows, safety actions, profile rows, bottom navigation, and CTAs. At larger Dynamic Type sizes, let rows and sheets grow vertically and preserve the primary action after the content it submits.

# Anti-generic checklist

- Do not replace turquoise with default system blue.
- Do not remove the 3D vehicle/payment/passcode imagery or rebuild it with SwiftUI shapes.
- Do not use an unstyled full-width `TabView`; the reference uses a floating rounded pill.
- Do not cover the map with large decorative cards before a sheet is needed.
- Do not turn bottom sheets into generic grouped `Form` sections.
- Do not introduce multicolor category icon sets unrelated to the turquoise/mint system.
- Do not use flat emoji or SF Symbols as substitutes for the authored 3D/raster objects.
- Do not crop vehicle promotional images so tightly that the car and headline relationship is lost.

</design-context>
