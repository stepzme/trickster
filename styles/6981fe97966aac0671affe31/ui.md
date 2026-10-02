<design-context>
---
version: 1
platform: iOS
name: Oura-design-analysis
description: "A cinematic dark health interface that combines full-bleed landscape photography, serif daily narratives, oversized white scores, translucent rounded metric cards, delicate blue-teal-violet data accents, and a floating three-item navigation pill with a separate circular add action."
colors:
  canvas: "#07080B"
  surface-primary: "#15171D"
  surface-secondary: "#20232B"
  accent-primary: "#78CFEA"
  accent-secondary: "#63D7C4"
  text-primary: "#FFFFFF"
  text-secondary: "#C8C9CF"
  divider: "#383A42"
  destructive: "#D75A68"
typography:
  hero: {fontFamily: "New York", fontSize: 42, fontWeight: 400, lineHeight: 45}
  title: {fontFamily: "New York", fontSize: 32, fontWeight: 400, lineHeight: 36}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 600, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 22
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "white", text: "near-black semibold", height: 52, radius: 999}
  metric-card: {fill: "dark translucent", padding: 16, radius: 22, content: "large score, state label, range or chart"}
  score-chip: {fill: "dark or colored translucent", diameter: 52, content: "tabular score and status arc"}
  navigation: {fill: "frosted dark pill", selected: "white icon and label", unselected: "muted gray"}
---

# Overview

Oura presents health information as a cinematic daily narrative. Near-black and dark navy dominate, while full-bleed landscapes, mountain photography, product renders, and restrained health-color glows provide atmosphere. Large white scores and editorial serif statements float above imagery or sit inside translucent rounded cards. Dense longitudinal metrics move into stacked dark panels with fine charts and compact sans-serif labels. A frosted three-item bottom pill and separate circular add action keep navigation visually light over the dark field.

# Non-negotiable visual invariants

- Near-black or dark navy fills the full viewport; light grouped backgrounds and white cards are absent from in-product health surfaces.
- A single interpreted score or serif status statement dominates the upper portion of narrative screens.
- Landscape photography or a controlled health-gradient field occupies a substantial background mass and cannot be omitted where observed.
- Metric cards use translucent or tonal dark surfaces, large white values, compact state labels, and delicate charts or ranges.
- Blue, teal, violet, rose, green, and yellow remain restrained domain or status accents rather than equal-brightness tile colors.
- The bottom navigation is a floating frosted pill with three items; a separate circular add control remains visually distinct.
- Editorial serif type is reserved for narrative statements and major values, while labels, charts, forms, and utility content remain sans-serif.
- Status is always expressed with text or numeric context in addition to color, arc, dot, or range position.

# Color and surfaces

The canvas is a near-black field with subtle navy variation. Primary panels use dark charcoal; secondary controls and selected surfaces use a slightly lighter charcoal. Cards over photography may be translucent or gradient-backed, but text contrast stays high. Dividers and chart guides are quiet gray lines.

Pale blue and cyan mark readiness, stress, or other health-domain emphasis; teal supports positive recovery; violet and rose create sleep or stress atmosphere. White carries primary scores, titles, charts, and controls; cool gray carries explanations, timestamps, and inactive navigation. Green confirms positive state, yellow or warm gold signals attention, and red is reserved for destructive or adverse state. Default iOS blue, bright card borders, white grouped forms, and rainbow dashboards would break the reference.

# Typography

Use New York as the iOS-safe editorial serif for primary daily statements, bedtime-like ranges, and selected hero values. Use SF Pro Display/Text for section headings, scores inside dense cards, chart labels, forms, and navigation. Hero statements sit around 32–42 points, section headings around 20–24, metric values around 26–36, body text around 14–16, and chart or timestamp labels around 11–13.

Hero narratives are often centered; cards, reports, settings, and lists are left-aligned. Serif remains regular rather than heavy, while numeric values use clear tabular figures. With Dynamic Type, cards and ranges stack, supporting explanations wrap, and centered hero groups gain height before imagery or controls are cropped.

# Screen composition

Screens typically use 16-point horizontal insets, 12-point gaps between cards, 16 points inside panels, and 24–32 points between major groups. Dark or photographic fields extend through the top safe area. Narrative and health feeds scroll vertically; the floating navigation stays 12–16 points above the home indicator and reserves enough space below the last card.

Observed archetypes include:

- Scenic narrative composition: full-width landscape or atmospheric health image fills much of the upper viewport, with centered serif status, large score, concise explanation, and dark gradient protection.
- Vitals composition: one-column stack of dark rounded cards, each pairing a strong score or value with state text, compact range, chart, or progress scale.
- Health-panel composition: dark flat background with large serif interpretation, restrained colored edge glow, supporting sans-serif explanation, and one compact action.
- Product setup composition: centered ring or charger render on black with generous negative space, concise title and body copy, and a white pill action near the bottom.
- Form and selection composition: dark rectangular fields, radio rows, toggles, searchable lists, and one high-contrast lower action, with native keyboard when needed.
- Drawer composition: dark side panel overlays the current screen and presents tall monochrome rows, profile context, and clear close or back controls.
- Modal composition: dark rounded card, bottom sheet, or informational overlay appears over a dimmed health or photographic context.

# Navigation appearance

The primary bottom navigation is a frosted dark pill containing three evenly spaced icon-and-label items. The selected item is white and higher contrast; inactive items remain gray. A separate circular add button sits adjacent or above the pill and uses a clear white symbol. Top controls are compact circular or icon-only buttons for menu, sharing, and device/status context. Detail screens use white back labels or chevrons and close controls on black. Sheets retain dark surfaces and large top corners.

# Components

- Primary action: 50–54 points tall, full or near-full width, white fill, pill radius, and centered near-black semibold label. Disabled or loading state reduces contrast while preserving geometry.
- Metric card: dark translucent or tonal fill, 20–24 point radius, 16-point padding, large white tabular score, textual state, and a delicate range, chart, or chevron.
- Score chip: circular or near-circular dark surface with score, thin colored arc or mark, and small status context. Color does not replace the label.
- Health panel: large dark card with one serif interpretation, subtle blue/teal/violet/rose glow, supporting explanation, and minimal chrome.
- Floating navigation: frosted dark pill with three compact items and strong white selected state; the add button remains a separate circle.
- Selection row: dark surface with white label, muted description, and trailing radio, toggle, or disclosure. Selected state uses a restrained pale accent.
- Product render stage: centered ring or charger, `contain` crop, black field, and ample empty space around the object.

# Imagery and icons

Landscape and mountain photography is compositionally important on narrative surfaces and should retain a clear horizon or focal terrain behind the main score. Dark vertical gradients protect white type without erasing the scene. Ring and charger renders are centered, fully visible, and surrounded by black negative space. Some health surfaces use abstract dark gradients or atmospheric glows instead of photography.

The sample does not establish a recurring standalone authored illustration family. Visual identity comes from photography, product renders, gradients, fine data graphics, and white outline icons. Icons are delicate and mostly monochrome, with domain color used sparingly. Temporary media must preserve the observed focal crop, darkness, scale, and visual weight.

# States

Observed states include selected radio rows, enabled toggles, disabled or loading actions, overlay modals, open side drawer, active bottom tabs, expanded add menu, dense populated metrics, and sparse setup or informational surfaces. These states retain the dark canvas, high-contrast white hierarchy, rounded panels, and restrained accent colors.

Positive, attention, and adverse states use green, yellow, or red alongside explicit words, scores, ranges, or markers. Loading does not introduce a new palette. Educational overlays flatten imagery into black when dense reading is required. Modal focus dims the underlying photographic or data context.

# iOS adaptation

Extend near-black, landscape imagery, or the active health gradient through the safe areas. Use vertical scroll containers for narratives, vitals, reports, forms, and drawers; keep the final content clear of the floating navigation and add control. Scenic crops should preserve the focal terrain behind text on compact heights.

All navigation items, circular icons, score cards, toggles, and close controls need at least 44-point targets. VoiceOver should announce the health metric, score, unit, textual state, range context, and action in that order; decorative gradients and landscape details should not become separate elements. Preserve native keyboards, health permission, device pairing, payment, and sheets. With Dynamic Type or compact widths, stack score and range layouts before reducing type. Maintain the observed dark appearance rather than introducing generic light panels.

# Anti-generic checklist

- Do not replace the cinematic dark canvas with a light grouped dashboard.
- Do not display every health metric as an equally bright colored tile.
- Do not omit landscape photography or product renders where they define the composition.
- Do not use serif type for small data labels, controls, or dense explanatory copy.
- Do not make color the only indicator of health state.
- Do not ship an unstyled `TabView`; preserve the frosted three-item pill and separate circular add action.
- Do not use arbitrary SF Symbols with inconsistent stroke weight in place of the delicate icon system.
- Do not give metric cards, sheets, pills, score chips, and floating controls one uniform radius.

</design-context>
