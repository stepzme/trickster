<design-context>
---
version: 1
platform: iOS
name: Moonlitt-design-analysis
description: "An immersive lunar interface built from full-screen indigo-violet celestial fields, luminous 3D moon renders, orbital paths, glass panels, floating pill controls, and restrained white typography."
colors:
  canvas: "#070D38"
  surface-primary: "#182052"
  surface-secondary: "#252B61"
  accent-primary: "#8C72FF"
  accent-secondary: "#D9D5FF"
  text-primary: "#FFFFFF"
  text-secondary: "#B6B8CA"
  divider: "#394174"
  destructive: "#F06B78"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 650, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 550, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#8C72FF", textColor: "#FFFFFF", cornerRadius: 14, minHeight: 48}
  secondary-action: {fill: "rgba(255,255,255,0.12)", textColor: "#FFFFFF", cornerRadius: 999, minHeight: 44}
  primary-card: {fill: "rgba(24,32,82,0.78)", borderColor: "#394174", cornerRadius: 20, padding: 16}
  navigation: {fill: "rgba(24,32,82,0.72)", selectedColor: "#FFFFFF", unselectedColor: "#B6B8CA", cornerRadius: 999}
---

# Overview

Moonlitt is an immersive celestial interface rather than a dark card stack. Deep navy, indigo, and violet gradients fill the entire viewport; a luminous dimensional moon and its orbit dominate the center; translucent glass controls float around the perimeter. Calendar, settings, subscription, and modal states continue the same space-and-glass language.

# Non-negotiable visual invariants

- Deep blue-violet celestial color fills the whole screen, including both safe areas.
- A luminous 3D moon or moon-phase object is the dominant visual mass on primary and education surfaces.
- Elliptical orbital paths, sparse stars, markers, and violet haze reinforce spatial depth.
- Controls and panels use translucent dark glass with soft borders, not opaque gray cards.
- Navigation appears as a floating rounded glass cluster separated from screen edges.
- Typography remains restrained, white/pale, and subordinate to the lunar scene.
- Calendar phase thumbnails and status objects keep the same lighting/render language as the hero moon.

# Color and surfaces

The background is a full-screen gradient from deep navy through indigo and violet, sometimes with a restrained glow. Primary panels use translucent blue glass; secondary controls are lighter or darker glass steps with thin pale borders. Violet is the selected/action accent, moonlit white carries primary text, and pale lavender-blue carries metadata. Red appears only for error/destructive states. Pure black, system grouped gray, opaque white sheets, and default blue controls would visibly break the celestial material system.

# Typography

Use SF Pro. Titles are medium-to-bold but deliberately smaller than the moon scene; time/date and phase values may receive local numeric emphasis. Explanatory text is compact, centered or aligned inside glass panels, with generous line spacing and high contrast. At Dynamic Type sizes, let panels grow and explanatory copy wrap while keeping the moon and key phase/status visible. Do not create mood-setting copy beyond the necessary astronomical state or action.

# Screen composition

Onboarding and home are full-screen scenes: controls hug the top/side safe areas, a moon/orbit composition occupies the center, and a floating pill/control cluster sits above the home indicator. Phase detail uses the same scene with status labels and a glass information panel. Lunar calendar screens place phase thumbnails in a structured grid over the dark field. Settings use stacked translucent rows/cards, not a white list. Subscription uses large lunar/gradient art above glass tariff/benefit controls. Typical insets are 16 points, but the authored sky and orbit extend edge to edge.

Visible archetypes include authored onboarding/tutorial overlays; interactive lunar home; phase-status detail; moon-grid calendar; glass settings; and Pro subscription/purchase states.

# Navigation appearance

Primary navigation is a floating glass pill or compact cluster rather than an edge-to-edge tab bar. Selected items become brighter white/violet and may gain a luminous fill; inactive items remain pale. Top close, layer, and utility controls are small rounded glass buttons with ordinary hit areas. Sheets and gates remain dark/translucent with large rounding, while system permission or purchase alerts may retain native appearance during the transition.

# Components

Characteristic controls are translucent pills, circular glass icon buttons, segmented glass tabs, and broad violet actions. Glass cards combine soft blur, dark-blue tint, thin luminous edge, and white/pale text. Calendar cells pair a moon-phase thumbnail with compact date/type. Settings rows and tariff rows reuse glass surfaces, clear selection, and restrained dividers. Toggles may be native in behavior but must inherit the violet tint and dark surroundings. Loading placeholders preserve glass geometry; disabled controls reduce glow/contrast without becoming gray-white.

# Imagery and icons

The moon renders, orbital diagrams, sparse star field, haze, and celestial backgrounds are compositionally essential and follow the separate illustration specification. They cannot be replaced by gradients alone or drawn as approximate SwiftUI circles. Functional icons are compact monochrome marks inside glass controls and remain visually subordinate. Phase thumbnails use consistent lighting and lunar texture.

# States

Observed states include onboarding/tutorial overlay, notification permission prompt, toggle-off settings, selected calendar tab, phase detail, Pro gate, purchase loading rows, and purchase success alert. Selected state increases violet/white luminance; locked/Pro state adds a glass gate without abandoning the scene. Loading retains dark glass. System alerts may briefly appear native, but the underlying celestial field remains visible.

# iOS adaptation

Extend the celestial background beneath safe areas and place floating controls clear of sensor housing and home indicator. Preserve the moon’s central focal point across current iPhone aspect ratios, cropping peripheral haze/orbit before the body. Use scroll containers for calendar/settings/subscription, keyboard-aware handling where input exists, and 44-point hit regions around small glass buttons. VoiceOver should read current phase/status and meaningful controls; decorative stars/orbit may be hidden. At compact widths and Dynamic Type sizes, reduce moon scale moderately and stack panels rather than obscuring text. Provide Reduce Transparency fallbacks using opaque indigo surfaces with preserved borders.

# Anti-generic checklist

- Do not replace the full-screen celestial field with black or system grouped gray.
- Do not omit the luminous moon/orbit visual mass while assets are pending.
- Do not use opaque white cards, an unstyled `TabView`, or default settings `Form`.
- Do not recreate the moon, orbit, or space scene with SwiftUI shapes or SF Symbols.
- Do not make typography compete with the lunar focal object.
- Do not remove blur/glass hierarchy without an accessible indigo fallback.
- Do not apply one radius to floating pills, cards, sheets, and compact icon controls.

</design-context>
