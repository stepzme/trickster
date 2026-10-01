<design-context>
---
version: 1
platform: iOS
name: Drivee-design-analysis
description: "A map-first transport interface where pale cartography remains visible behind white rounded bottom sheets, vivid lime actions, compact dense rows, blue location markers, floating controls, and occasional flat driver illustrations."
colors:
  canvas: "#F6F7F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F1F3"
  accent-primary: "#8EF12A"
  accent-secondary: "#32A9EE"
  text-primary: "#202126"
  text-secondary: "#777C84"
  divider: "#E2E4E7"
  destructive: "#C94E59"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#8EF12A", text: "#202126", radius: 14, height: 52}
  map-control: {fill: "#FFFFFF", icon: "#202126", radius: 999, shadow: "soft and restrained"}
  route-field: {fill: "#F0F1F3", radius: 10, marker: "blue or green endpoint dot"}
  navigation: {fill: "#FFFFFF", selected: "#202126 with lime emphasis", unselected: "#777C84"}
---

# Overview

Drivee is recognizable by the tension between a pale operational map and a dense white control surface rising from the bottom. The map occupies the largest color field on ride screens, while vivid lime identifies the dominant action. Rounded sheets, floating circular map controls, endpoint markers, compact transport selectors, and tightly set status rows create an active utility interface rather than a generic lifestyle dashboard. Driver and courier education screens temporarily replace the map with white space and flat outlined illustrations.

# Non-negotiable visual invariants

- A pale, low-contrast map remains the dominant canvas wherever location is the primary context.
- White control surfaces rise as rounded bottom sheets and preserve a visible band of map above them.
- Vivid lime is reserved for the main affirmative action, active control, or brand emphasis.
- Large primary actions are full-width rounded rectangles with dark text, not default blue buttons.
- Floating map controls are compact white circles with dark symbols and restrained shadow.
- Dense list and status rows use minimal dividers, strong left alignment, and trailing values or states.
- Safety surfaces use a darkened backdrop, shield-led emphasis, and clearly separated emergency actions.
- Driver and courier surfaces retain the same lime, radii, and typography while adding tabs, toggles, order cards, or flat instructional artwork.

# Color and surfaces

The map is a low-saturation field of off-white, pale gray, and muted road colors so markers and sheets remain dominant. White is the primary card and sheet surface; soft gray fills inputs, inactive selectors, and quiet rows. The brand lime is a large, high-energy accent used on confirmation buttons and active states. Blue distinguishes current or pickup location, while green appears on destination and successful status cues. Text is near-black with medium gray for supporting detail; dividers are light and economical. Destructive actions use muted red, and safety overlays use translucent black behind the focused sheet.

The strongest color masses should remain the map, white sheet, and lime CTA. Default iOS blue buttons, saturated multicolor maps, heavy grouped gray backgrounds, or colored cards competing with the lime action would break the reference.

# Typography

Use SF Pro Display for large price, ETA, or status values and SF Pro Text for controls, addresses, and dense lists. Titles are bold but compact; rows depend on 15-point body and semibold labels rather than oversized headings. Fare and time values receive the strongest scale contrast and should use tabular numerals when alignment changes. Secondary addresses, vehicle details, and helper text remain visibly gray.

Maintain left alignment and short line lengths in sheets. With Dynamic Type, allow address and status text to wrap, keep the lime action label intact, and move trailing metadata below the primary label before reducing type size. Do not make titles and body copy nearly identical in scale or weight.

# Screen composition

The core archetype divides the viewport vertically: map across the top and middle, then a white sheet with rounded top corners occupying roughly the lower third to two-thirds depending on content. Floating menu, location, share, or safety controls sit over the map inside safe-area margins. Sheets use about 16-point side and inner padding, 8–12-point control gaps, and a clear drag handle where observed.

Observed archetypes include a map with compact route-entry sheet; a taller selection or status sheet with address fields, transport choices, fare, and a lime action; a safety focus state over a darkened map; a side drawer made from a white panel over dimmed content; dense history, profile, and payment lists on light canvases; driver or courier order cards with tabs and availability controls; and centered onboarding or verification screens where a flat illustration occupies the upper-middle region above concise text and a bottom action. Web payment content remains visually enclosed rather than restyled as a native card stack.

# Navigation appearance

Map screens use a white circular menu control and other floating circular controls rather than a persistent top navigation bar. The side drawer is a broad white panel with vertically aligned rows, black labels, restrained icons, and clear spacing between groups. Full-page utility screens use compact back controls and modest titles. Driver and courier modes may show a white bottom bar with evenly spaced icon-and-label items; selected items gain dark or lime emphasis while unselected items stay gray. Sheets keep rounded top corners and a short centered drag indicator.

# Components

The primary action is a wide lime rectangle, approximately 52 points high, with medium rounding and a dark semibold label. Secondary actions are white or soft-gray, while destructive actions use red text or a clearly separated emergency treatment.

Route fields are compact rounded rows with blue or green endpoint markers, black address text, and subdued helper information. Transport selectors combine small vehicle silhouettes with short labels in a horizontal rail. Fare controls give the numeric value strong weight and use compact increment or choice controls. Map buttons are white circles with dark simple symbols and soft shadow. History and profile rows use little or no card elevation, pale dividers, and trailing metadata. Courier and driver cards are white rounded containers with dense order information, status tags, and a lime accept or active-state control. Native toggles keep their platform behavior but align with the lime brand state.

# Imagery and icons

The map is compositionally essential on location-focused archetypes and cannot be replaced by an empty gray rectangle while assets or data are pending. Preserve its pale visual density, route context, and the high contrast of endpoint pins. Driver avatars remain circular and photographic; vehicle depictions are small functional silhouettes rather than decorative art.

Driver and courier onboarding and verification screens use flat authored vector scenes: rounded human figures, vehicles, phones, bags, or work equipment drawn with dark teal-green outlines, minimal interior detail, and sparse lime accents on a white background. These illustrations are a substantial upper-middle visual mass and must not be omitted from those archetypes. General interface symbols remain compact and functional rather than playful.

# States

Observed states include location entry, selected transport or payment method, adjusted fare, searching or waiting, active driver or courier status, completed or canceled order, safety focus, empty and populated history, form validation, account deletion confirmation, and payment web content. Active selections use lime, dark text, or a clear check without changing the whole surface. Error and destructive states preserve the white sheet language while introducing red text or controls. Safety states retain the underlying spatial context through a dimmed map and foreground emergency sheet.

# iOS adaptation

Keep map content edge-to-edge while floating controls respect top and side safe areas. Place bottom sheets and bottom navigation above the home indicator, and use scrollable sheet content when Dynamic Type or a compact screen would otherwise hide the primary action. Native sheets, web payment, keyboards, alerts, and permission transitions should keep platform behavior; surrounding headers, fields, and actions should maintain the documented lime-and-white language.

Maintain 44-point targets for map controls, route rows, selectors, toggles, and emergency actions. VoiceOver should encounter the screen title or current status, route and map summary, sheet controls, then the primary action. On compact widths, wrap addresses and stack secondary metadata rather than compressing the map to irrelevance. When adapting to dark appearance without sampled evidence, preserve lime contrast, endpoint distinction, and sheet hierarchy instead of mechanically inverting the map.

# Anti-generic checklist

- Do not replace the map-and-sheet composition with a vertical stack of generic white cards.
- Do not let a sheet cover the entire map when the observed archetype preserves route context.
- Do not use default blue tint for the main action or selected state.
- Do not substitute an unstyled `Form`, `List`, or `TabView` for the compact rows and branded navigation.
- Do not make every control the same radius; circles, fields, cards, and sheets have distinct geometry.
- Do not use lime for destructive, warning, or emergency-cancel actions.
- Do not remove endpoint labels and rely on pins alone.
- Do not replace required map or onboarding illustration mass with arbitrary SF Symbols, emoji, or blank placeholders.

</design-context>
