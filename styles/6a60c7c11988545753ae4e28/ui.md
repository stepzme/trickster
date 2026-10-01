<design-context>
---
version: 1
platform: iOS
name: GO-Club-design-analysis
description: "A vivid full-screen iOS habit environment built from electric cobalt fields, oversized white type, translucent blue layers, floating pill navigation, and large lemon illustrated cards that carry essential visual weight."
colors:
  canvas: "#3626FF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#3C78F4"
  accent-primary: "#FFFF00"
  accent-secondary: "#B8F25B"
  text-primary: "#FFFFFF"
  text-on-light: "#0A0B0D"
  divider: "#8C86FF"
  decorative-orange: "#FF6B45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 52, fontWeight: 700, lineHeight: 54}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 600, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 18
  card: 28
  sheet: 32
  pill: 999
components:
  primary-action: {fill: "#FFFFFF", text: "#0A0B0D", shape: pill}
  progress-accent: {fill: "#FFFF00", text: "#0A0B0D", shape: pill}
  primary-card: {fill: "#FFFFFF", text: "#0A0B0D", radius: 28}
  navigation: {fill: "translucent pale blue", selected: "lighter nested pill", shape: floating-pill}
---

# Overview

GO Club is not a neutral dashboard with blue accents. Cobalt fills the entire app environment, white type and controls sit directly on it, and large yellow or pale-blue cards create the main rhythm. Oversized metrics, graphic progress objects, and a floating translucent navigation pill make the interface feel athletic, playful, and theatrical.

# Non-negotiable visual invariants

- Cobalt or violet-blue occupies nearly the full viewport; it is not limited to a header.
- The upper portion of a primary screen contains one dominant message, countdown, or metric in oversized white type.
- Supporting controls use blue translucency, while decisive controls use high-contrast white or yellow fills.
- Yellow-to-mint progress areas are large visual masses, not thin standard progress bars.
- Promotional or contextual cards reserve roughly one third of their area for bold custom illustration.
- Cards use very large radii and generous internal spacing, but the screen does not become a stack of interchangeable white cards.
- Bottom navigation floats above content as a translucent pill with a nested selected state.
- Each screen has one visual protagonist; secondary metadata remains compact.

# Color and surfaces

Electric cobalt is the environment. Slight violet or deeper-blue shifts may create depth, but the app should still read as one saturated field. White carries major copy, primary actions, and the clearest metric surfaces. Lemon yellow is a major product surface for progress and promotional cards; mint signals completion or momentum. Orange and black belong mainly to illustration details.

Default light-gray iOS canvas, system grouped backgrounds, default blue tint, and multiple unrelated accent colors visibly break this language.

# Typography

Primary metrics and countdown values use SF Pro Display with extreme scale contrast, tight line height, and bold weight. Screen titles and greetings remain large enough to read as composition, not navigation chrome. Units, timestamps, and tab labels are compact SF Pro Text. Use tabular numerals for countdowns and metrics.

With Dynamic Type, preserve the metric's dominance and allow labels to wrap or move below it. Do not uniformly scale every text style until all hierarchy disappears.

# Screen composition

Primary screens begin inside the colored safe-area field rather than below a white navigation bar. The top third is reserved for the current message, countdown, or metric. The middle holds one progress/control surface and compact supporting data. Large contextual or illustrated cards follow in the scroll. The floating navigation pill overlaps the lower content region while respecting the home indicator.

Habit-dashboard archetype: one dominant number, a short label or goal, a graphic progress treatment, and one direct action.

Plan archetype: a prominent target or countdown, compact attributes, one large progress surface, and an illustrated contextual card.

Permission or setup archetype: retain the saturated environment and direct hierarchy; do not fall back to `Form` rows or a generic white onboarding sheet.

# Navigation appearance

Bottom navigation is a wide translucent pale-blue capsule floating above the bottom safe area. Destinations use bold simple icons; the selected destination receives a brighter nested capsule rather than only a tint change. Navigation must not render as the default opaque `TabView` bar.

Sheets and detail screens keep the blue environment or use a deliberate high-contrast card; they do not automatically switch to grouped gray backgrounds.

# Components

Primary action: wide white pill, black semibold label, generous vertical padding, no thin outline.

Progress action: thick yellow or yellow-to-mint pill or block that reads as a major surface.

Metric card: one oversized number, compact unit, short goal, and a minimal chart or progress cue. Avoid filling it with unrelated rows.

Segmented control: pale or translucent blue capsule with a high-contrast selected fill. Do not use the default system segmented appearance unchanged.

Countdown tile: saturated blue tile with a fine lighter edge, very large white digits, compact uppercase unit, and generous radius.

# Imagery and icons

Use custom graphic objects or loose orange-and-black line scenes, not arbitrary SF Symbols as the main artwork. Illustration may occupy 25–45% of a large contextual card and should visually balance the headline. Temporary art must preserve the final asset's scale, crop, palette, and negative space; omitting the artwork is not an acceptable placeholder.

Functional symbols may use SF Symbols when their weight and enclosure are customized to match the bold graphic system.

# States

Selected navigation and controls become brighter and more solid. Completed progress uses lemon or mint with an unmistakable filled mass. Empty and permission states retain the blue environment and use illustration or a bold object to avoid becoming generic settings screens. Modal states keep the same radius, type contrast, and saturated palette.

# iOS adaptation

Draw the cobalt background through all safe areas. Place scroll content above a reserved bottom inset for the floating navigation pill. Use native navigation, sheets, buttons, and accessibility semantics, but style their visible surfaces explicitly. Maintain 44-point targets and logical VoiceOver order. On compact iPhones, reduce horizontal padding and illustration crop before collapsing the primary hierarchy. Support Dynamic Type without shrinking the main metric into ordinary body content.

# Anti-generic checklist

- No light-gray app canvas with a blue header.
- No universal stack of white rounded cards.
- No default `Form` for primary product screens.
- No unstyled `TabView` bar.
- No thin standard `ProgressView` where the reference uses a large yellow mass.
- No arbitrary SF Symbol standing in for a large illustration.
- No omission of illustration cards because final assets are unfinished.
- No default iOS blue used as the only sign of selection.

# Known gaps

Dark appearance, landscape, iPad, long-term history, and every permission-denial state were not sampled. Adapt them by preserving the invariants above rather than inventing a second neutral theme.

</design-context>
