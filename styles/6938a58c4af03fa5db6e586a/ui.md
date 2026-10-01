<design-context>
---
version: 1
platform: iOS
name: Bolt-Food-design-analysis
description: "A bright photo-led marketplace built on white and mist-gray surfaces, where dense food and product imagery is organized by black rounded type, pill filters, compact metadata, a five-item tab bar, and decisive Bolt-green actions."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1F3F3"
  accent-primary: "#2F8F5B"
  accent-secondary: "#F2C94C"
  text-primary: "#17191A"
  text-secondary: "#656A6D"
  divider: "#E2E5E5"
  destructive: "#C83743"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "Bolt green", text: "white semibold", height: 52, radius: 14}
  photo-card: {fill: "white", image: "large aspect-fill crop", radius: 20, metadata: "compact black and gray"}
  search-filter: {fill: "mist gray", height: 44, radius: 999, icon: "black line"}
  navigation: {fill: "white", selected: "green icon and label", unselected: "gray or black"}
---

# Overview

Bolt Food is a bright, image-dense iOS marketplace. White and very pale gray keep the chrome quiet while real food, restaurant, grocery, and product photography provides most of the color. Black rounded headings, compact metadata, pill-shaped search and filters, and large green actions create a direct hierarchy. The interface stays visually busy without becoming card-heavy: imagery leads discovery surfaces, list rows become denser in utility contexts, and maps or bottom sheets can temporarily become the dominant viewport layer.

# Non-negotiable visual invariants

- White is the dominant full-screen field; pale gray separates controls and grouped utility surfaces without turning the screen into stacked floating cards.
- Real food and product photography is the primary visual mass on browsing and item surfaces and cannot be omitted.
- Bolt green is reserved for primary actions, selected controls, active toggles, progress, and the selected tab state.
- Headings use a bold rounded sans character, while prices, timings, ratings, and supporting facts remain compact and easy to scan.
- Search bars, filters, category controls, and many selectors use pill geometry; image cards use a visibly larger but non-pill radius.
- The bottom navigation contains five evenly spaced items on a white surface, with the selected item marked in green.
- Wide green actions occupy a clear lower action region on decision screens and remain separate from dense imagery.
- Yellow badges and red promotional or destructive marks are small semantic accents, not competing page-level color fields.

# Color and surfaces

The canvas and primary surfaces are clean white. Mist gray fills search fields, filters, address controls, disabled actions, and grouped utility areas. Thin cool-gray dividers organize dense rows without enclosing every group. Modal dimming uses black with restrained opacity; maps retain their pale geographic palette.

Bolt green owns decisive actions and active state. White text sits on green controls. Yellow appears in small popularity or rating badges, while red marks discounts, changed commercial values, or destructive actions. Black carries headings and primary facts; medium gray carries descriptions, ETA-like metadata, placeholders, and inactive navigation. Default iOS blue, tinted grouped backgrounds, large decorative gradients, or multiple competing accent colors would break the reference.

# Typography

Use SF Pro Rounded as the iOS-safe match for prominent headings and SF Pro Display/Text for sections, controls, metadata, and dense rows. Page titles sit around 28–34 points, section headings around 20–22, card titles around 15–17, and metadata around 11–14. Headings are bold and compact; supporting text is regular, with medium or semibold used selectively for price and action labels.

Most text is left-aligned. Prices, ratings, timing, fees, and short status labels stay visually adjacent to the image or item name they qualify. Numeric information uses tabular figures where comparison matters. Descriptions wrap before price or action controls are displaced. With Dynamic Type, horizontal metadata groups wrap, item rows grow vertically, and multi-column product layouts reduce their column count before text is truncated.

# Screen composition

Most screens use 16-point horizontal insets, 8–12 points between compact controls, and about 24–28 points between major content groups. White extends through the safe areas. Long discovery and menu surfaces scroll vertically; selected category or action regions may remain visually anchored, while the five-item tab bar or lower action reserves the bottom safe area.

Observed archetypes include:

- Discovery composition: location and search controls lead, followed by horizontal chips or category tabs and a vertical feed containing wide photo cards or horizontal merchandising rails.
- Catalog composition: a compact header and pill filters sit above repeated photo-led cards. Each card keeps title, rating, timing, and commercial metadata close to its image.
- Item-detail composition: a large food or product photograph occupies the upper portion, followed by title, short metadata, customization rows, and a wide green action near the bottom.
- Dense list composition: utility rows, settings, payment choices, support entries, or past items use white surfaces, thin dividers, compact leading icons, and restrained chevrons.
- Checkout composition: stacked white or pale-gray groups summarize selections and controls, with a persistent lower total/action region and native keyboard where required.
- Tracking composition: a pale map may fill much of the upper viewport, while a rounded white bottom sheet carries status, timeline, courier, and action information.
- Modal composition: rounded bottom sheets, centered dialogs, and permission prompts sit over a dimmed version of the current white or map context.

# Navigation appearance

The primary bottom bar is white and contains five compact icon-and-label items. The selected item becomes green; inactive items remain black or muted gray. Inner surfaces use minimal leading back controls, occasional close buttons, and short black titles on white. Bottom sheets have white surfaces, large top corners, and a small drag indicator where observed. Horizontal category and filter controls behave visually as secondary navigation through filled or outlined pills, with the selected item gaining green or stronger black emphasis.

# Components

- Primary action: approximately 52 points tall, full or near-full width, Bolt-green fill, 14–16 point radius, and centered white semibold label. Pressed state darkens the green; disabled state becomes pale gray while preserving geometry.
- Search field: 44–48 points tall, pale-gray fill, pill radius, black leading search icon, gray placeholder, and optional compact trailing control.
- Filter or category chip: 34–40 points tall, pill shape, gray or white fill with subtle outline; selected state uses green fill, green border, or stronger text contrast according to context.
- Photo card: wide or portrait aspect-fill image with 16–20 point radius, followed by tightly grouped title and metadata. Badges remain small and avoid covering the image focal subject.
- Item row: image thumbnail, title and description, price information, and compact add or quantity control aligned in one dense row. The action maintains a 44-point target without becoming the dominant visual mass.
- Selection row: white surface with compact label, optional subtitle, and trailing radio, checkmark, switch, or disclosure. Green marks the selected or enabled state.
- Tracking sheet: large rounded white surface over a map, with bold status, compact timeline or facts, and clearly separated contextual actions.

# Imagery and icons

Real photography is essential. Food and restaurant images use close, appetizing crops; grocery and product images remain recognizable and materially specific. Images occupy most of discovery cards and the upper region of detail surfaces rather than acting as small decoration. Use aspect-fill with focal positioning, and keep badges, price, and action controls outside busy image areas or on controlled overlays.

A small number of custom 3D courier or branded prop assets appear on splash and promotional surfaces, but the sample does not establish one reusable standalone illustration system. Treat these as campaign imagery rather than a general drawing language. Utility icons are compact line symbols; category labels may include emoji-like pictograms. Maps preserve familiar geographic styling. If final imagery is unavailable, temporary assets must preserve the documented subject scale, crop, density, and compositional weight.

# States

Observed states include selected and unselected tabs, chips, radios, and toggles; notification and live-activity permission prompts; loading or disabled cart actions; confirmation dialogs; an added-item snackbar; order-status timelines; rating controls; populated and empty utility lists; and native keyboard or chat-input states. Across them, the white canvas, green active color, rounded controls, and compact black/gray hierarchy remain constant.

Disabled actions use gray rather than a new accent. Selected controls turn green with a clear check, radio, or switch position. Modals preserve the underlying context through dimming. Status progression uses ordered rows, marks, or compact labels rather than a decorative redesign of the screen.

# iOS adaptation

Extend white or map content through the appropriate safe area and reserve the lower inset for the documented tab bar or primary action. Use vertical scroll containers for discovery, item, checkout, and utility surfaces; use horizontal scrolling only for the observed rails and pill groups. Keep pinned controls from covering the last item or keyboard-focused field.

All icon buttons, quantity controls, chips, and row actions need at least 44-point targets. VoiceOver should announce the image subject or item name first, then price, rating or timing, selected state, and action. Preserve native keyboard, map, permission, live-activity, and sheet presentations. On compact widths or large Dynamic Type, stack metadata and reduce grids before shrinking type or damaging image crops. The sampled system is light-first; do not invent a dark appearance unless the consuming product explicitly requires one.

# Anti-generic checklist

- Do not replace food and product photography with generic symbols, gradients, or empty placeholders.
- Do not turn every section into an elevated white card on gray.
- Do not use default iOS blue where active controls require Bolt green.
- Do not ship an unstyled `TabView`; the five-item white bar needs the documented green selected state.
- Do not make chips, image cards, sheets, and action buttons share one uniform radius.
- Do not obscure the focal food or product subject with badges and controls.
- Do not let promotional red or yellow become page-level background colors.
- Do not omit the lower action region or allow it to cover scroll content and the home indicator.

</design-context>
