<design-context>
---
version: 1
platform: iOS
name: Yandex-Afisha-design-analysis
description: "A photo-led entertainment interface built on white and pale-gray surfaces, neon-yellow pill actions, compact black type, a visually light five-item tab bar, rounded photographic cards, and bold yellow-black character art in supporting states."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F7F9"
  accent-primary: "#FFF200"
  accent-secondary: "#171717"
  text-primary: "#111111"
  text-secondary: "#858585"
  divider: "#E2E2E4"
  destructive: "#D94A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 600, lineHeight: 21}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 14
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", height: 48, radius: 999, text: "text-primary semibold"}
  event-card: {fill: "surface-primary", radius: 14, imageRole: "dominant photographic area"}
  selection-tile: {fill: "surface-primary", radius: 14, selectedBorder: "text-primary", selectedBadge: "yellow-black check"}
  bottom-navigation: {fill: "surface-primary", selected: "filled black icon", unselected: "black outline icon"}
  ticket-card: {fill: "surface-primary", radius: 18, imageRole: "photographic header", edge: "perforated lower section"}
---

# Overview

Yandex Afisha combines an editorial photography-first content field with restrained black-and-white utility chrome. White and very light gray dominate operational screens; neon yellow appears as a concentrated brand and action color in low pill buttons, selected accents, and full-screen onboarding moments. Event photography creates the largest visual masses, while compact black type, small metadata, and a light tab bar keep the interface dense without looking like a generic list. Supporting empty and onboarding states introduce a distinct yellow-black illustrated character language.

# Non-negotiable visual invariants

- Real event photography remains the dominant visual mass on discovery and detail cards, with dark gradients where light text overlays an image.
- Neon yellow is concentrated in primary pill actions, brand moments, and small selected accents; it does not become a body-text color on white.
- Functional screens stay predominantly white or pale gray with near-black type and minimal borders.
- The bottom bar remains visually light: white base, five compact black icons, tiny labels, and selection shown by a bolder or filled icon rather than a colored rail.
- Primary actions are wide yellow pills approximately 44-52 points high with dark semibold labels.
- Selected preference tiles use a dark outline plus a small circular yellow-black check indicator, not a fully colored selected fill.
- Navigation titles remain compact and centered while event and section titles use larger left-aligned bold type.
- Character illustration uses thick black contours, yellow fills, white details, and very little shading; it must not be replaced with generic outline symbols.

# Color and surfaces

Operational canvases are white, with pale gray around `#F7F7F9` separating form groups, filters, inactive controls, and sheet regions. Neon yellow around `#FFF200` forms full-screen brand fields during onboarding and strong horizontal or pill-shaped action masses in functional screens. Near-black text and icons provide the primary contrast; medium gray carries dates, places, prices, and secondary metadata.

Photographic surfaces introduce their own colors but often receive a dark lower gradient or dim overlay to keep white text legible. White rounded sheets can sit over blurred or dimmed imagery. Fine gray dividers organize dense payment and form content. Default iOS blue, yellow text on white, or decorative gradients unrelated to photography would break the observed system.

# Typography

Use SF Pro as the iOS-safe substitute for the observed Yandex-style sans. The practical hierarchy is compact: 20-24 point bold section or sheet titles, 16-18 point bold or semibold event titles, 15-17 point centered navigation titles, 14-16 point semibold CTA labels, 12-14 point metadata, and 9-11 point tab labels. Promotional and onboarding headings may rise toward 30 points and use extra-bold weight.

Text is left-aligned around event content and centered in top navigation or focused empty states. Numerals and prices should remain easy to distinguish from venue and date metadata. Dynamic Type may grow card and row height, but the image, event title, metadata, and action must retain separate levels rather than converging into similarly sized copy.

# Screen composition

Full-height screens preserve the iOS status and home-indicator safe areas. A common operational composition uses compact white top chrome, a vertically scrolling content field with 16 point horizontal insets, and a persistent white bottom bar. Major sections are separated by roughly 24-32 points, while related card content uses 8-12 point gaps.

The discovery archetype uses large rounded photographs or two-up photographic cards followed by bold titles, short metadata, and compact price actions. The detail archetype may begin with a full-width hero photo, a dark lower scrim, and circular translucent controls floating over imagery before continuing into white content. The purchase archetype uses pale-gray grouped sections, white rounded sheets, compact rows, and a sticky low yellow action. The ticket archetype centers one large card with a photographic top, pale lower data region, rounded corners, and perforation-like separation. Empty and onboarding archetypes reserve a large central or lower field for character illustration.

Photography should occupy substantially more area than supporting text on editorial screens. Utility rows remain flat and dense rather than being wrapped in repeated elevated cards.

# Navigation appearance

Top navigation is minimal: a simple back chevron, compact centered semibold title, and optional small right-side actions. Over photographic heroes, back and utility icons sit inside translucent or light circular controls. Map-like surfaces use isolated circular controls rather than a standard toolbar.

The persistent bottom navigation uses an opaque white base, five evenly spaced black line icons with very small labels, and a filled or heavier selected icon. Rounded sheets use large top corners and may retain a low fixed action. The adapted product takes destinations and structure from approved Research and Planning rather than copying the reference application's tabs.

# Components

Primary actions are neon-yellow pills approximately 44-52 points high with near-black semibold labels. Secondary high-emphasis actions may use a very dark fill with white text; pale-gray buttons indicate lower emphasis or disabled state.

Event cards combine a rounded photographic field with bold title, compact gray metadata, and price or action treatment. Hero images span most or all of the width and use bottom gradients beneath overlaid copy. Selection tiles are white or pale gray rounded rectangles; selected state adds a black outline and small circular check badge at the upper corner.

Bottom sheets use white or pale-gray fill, large top corners, and a sticky low action. Search and promo inputs are pale rounded fields. Ticket cards are unusually large and centered, with a photograph above a white information region, rounded silhouette, perforation cue, and restrained shadow or glow.

# Imagery and icons

Real event photography and poster-like imagery are the primary visual system. Use edge-to-edge or large rounded crops, preserve faces and performance focal points, and apply a dark gradient only where text needs contrast. Imagery cannot be omitted while final assets are pending; placeholders must preserve its dominant area, crop, and luminance.

Supporting illustrations use high-contrast black linework, yellow fills, white facial or hand details, simple mascot proportions, thick strokes, and minimal shading. Navigation and category icons use compact black linework that harmonizes with this language without imitating character art. Do not replace either photography or authored characters with arbitrary SF Symbols.

# States

Observed states include yellow splash/onboarding fields, native permission dialogs, selected tiles with outline and check badge, keyboard-open search, empty favorites with a yellow character, logged-in and logged-out profile surfaces, a discounted purchase state with struck-through old price, and a feedback sheet over dimmed event detail. Across states, white/gray functional surfaces, black type, yellow action emphasis, and rounded geometry remain stable.

# iOS adaptation

Keep top controls below the current status safe area and place persistent navigation or low actions above the home indicator. Use vertical scroll containers for editorial and purchase content; sheets must allow internal scrolling when Dynamic Type increases height. Image cards should use `cover` while preserving subjects, and ticket imagery should keep its header proportion.

Maintain at least 44-point targets for small tab items, favorite controls, filters, circular hero controls, and selection tiles. On compact widths, move two-up event cards to a single wider card when titles or imagery become cramped; do not shrink metadata below legibility. VoiceOver order should follow top navigation, image and title, metadata, actions, then persistent bottom navigation. Preserve the observed light appearance unless the approved product explicitly defines a dark state.

# Anti-generic checklist

- Do not replace photo-led discovery with identical text-first white cards.
- Do not use default blue tint for primary actions, selected controls, or navigation emphasis.
- Do not ship an unstyled `TabView`; preserve the white bar, compact black iconography, tiny labels, and weight-based selected state.
- Do not turn purchase and profile surfaces into default `Form` sections with system spacing.
- Do not remove dark image scrims when light copy overlays photography.
- Do not apply one large corner radius to photographs, controls, sheets, tickets, and selection tiles.
- Do not replace authored yellow-black characters with emoji, arbitrary SF Symbols, or thin generic outline art.
- Do not fill selected tiles solid yellow when the observed state uses outline and a small check badge.

</design-context>
