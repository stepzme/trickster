<design-context>
---
version: 1
platform: iOS
name: Tinkoff-Journal-design-analysis
description: "A bright editorial iOS system built from white reading fields, heavy black headlines, cobalt actions, wide rounded media cards, restrained navigation chrome, and a deliberate mix of photography and pastel learning illustrations."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F3F5"
  accent-primary: "#302DE8"
  accent-secondary: "#A8E8BC"
  text-primary: "#111113"
  text-secondary: "#696B70"
  divider: "#E0E1E4"
  destructive: "#D84F57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 750, lineHeight: 35}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 25}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 20
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 14
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#302DE8", text: "#FFFFFF", height: 52, radius: 14}
  secondary-action: {fill: "#F2F3F5", text: "#111113", height: 48, radius: 14}
  primary-card: {fill: "#FFFFFF", radius: 24, mediaPlacement: "full-width top"}
  navigation: {fill: "#FFFFFF", active: "#111113", inactive: "#8B8D92"}
---

# Overview

The screens read as a mobile editorial publication rather than a utility dashboard. Large black headlines, generous white space, wide image-led cards, and long-form reading blocks dominate. Cobalt is reserved for actions and selected controls; photography gives articles their subject matter, while pastel cartoon art gives learning surfaces a lighter identity.

# Non-negotiable visual invariants

- White or very light gray occupies most of the viewport; cobalt is an accent, not a full-screen wash.
- The first meaningful headline is visibly larger and heavier than every supporting label.
- Editorial cards are image-led: a wide rounded crop sits above a white text block.
- Long-form screens preserve generous line height, narrow readable measure, and distinct title, metadata, body, and media spacing.
- Controls are broad and rounded; small standalone icon buttons use pale circular containers.
- Bottom navigation is white with black selected content and quiet gray inactive content.
- Learning surfaces retain substantial authored pastel illustrations, never symbols or empty placeholders.
- Secondary metadata stays compact and low contrast so it cannot compete with titles and imagery.

# Color and surfaces

Clean white dominates; `#F2F3F5` groups inputs, chips, and quiet containers. Actions use blue-violet cobalt rather than system blue. Mint, sky, yellow, and lavender live mainly in learning artwork. Text is near-black, metadata neutral gray, separators pale and sparse, and destructive red remains local. Large gradients or glossy materials would break the flat editorial character.

# Typography

Headlines use an iOS-safe heavy display face, tight leading, and sentence case. Multi-line article and lesson titles remain the anchor. Section headings are bold but smaller; body copy is regular with generous leading. Labels and metadata are compact, never decorative uppercase. Dynamic Type must allow vertical growth and wrapping without flattening the hierarchy.

# Screen composition

Feed-like screens use one vertical scroll, about 20-point insets, a spacious header, then full-width editorial cards separated by 24–32 points. Article screens use one reading column: headline and metadata first, then body and media. Learning screens use large illustrated cards, simple progress, and single-question or single-lesson compositions, sometimes ending in a rounded bottom sheet. Forms, permissions, and empty discussions stay sparse with one dominant action rather than dashboard density.

# Navigation appearance

Top chrome is minimal: black back, close, search, or profile glyphs often sit in pale circles. Bottom navigation is white, rounded or visually floating, with black active and gray inactive states. Sheets have large top corners, light fill, and a compact drag indicator. These properties do not prescribe product destinations.

# Components

Article cards have 20–24 point corners, a broad photographic crop, bold multi-line title, and restrained metadata. Learning cards give a large pastel illustration the dominant region. Primary buttons are cobalt, about 52 points tall, with white semibold text; secondary actions are pale gray with black text. Chips are compact pills. Quiz answers are roomy rounded rows with clear selected, correct, and incorrect treatments. Comment and form fields are light filled rectangles. Disabled states lower contrast without changing geometry.

# Imagery and icons

Editorial photography is broad, cleanly cropped, and content-specific, commonly occupying half or more of a card. Learning artwork follows `illustrations.md` and is compositionally required where that archetype appears. Icons are simple monochrome glyphs of consistent weight. Do not scatter symbols as decoration or replace imagery with colored icon circles.

# States

Observed states include tracking and notification permission transitions, empty and populated comments, author chips, destructive account forms, unanswered/correct/incorrect quiz answers, lesson ratings, progress dots, and a compact media player. White canvas, heavy hierarchy, rounded controls, and restrained cobalt remain constant; success and error stay local to the relevant control.

# iOS adaptation

Use safe-area-aware scroll containers and preserve media crops across compact iPhones. Keep reading text within comfortable insets. Bottom navigation and mini-player clear the home indicator; sheets use native presentation behavior with custom styling. Keyboard-driven forms scroll focused fields into view. Keep 44-point targets, logical VoiceOver order, and Dynamic Type reflow. Any dark appearance needs a designed editorial palette rather than automatic inversion.

# Anti-generic checklist

- No uniform white dashboard cards on a gray canvas.
- No default iOS blue, unstyled `TabView`, `Form`, or system separators.
- No near-identical sizes for headline, section, body, and metadata.
- No missing photography or authored learning art.
- No arbitrary SF Symbols used as card illustrations.
- No single radius applied to cards, buttons, chips, sheets, and icon controls.
- No mood-setting copy, slogans, or duplicated visible context.

</design-context>
