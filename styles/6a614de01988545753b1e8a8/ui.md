<design-context>
---
version: 1
platform: iOS
name: Arc-Search-design-analysis
description: "A rounded iOS browser style that alternates between vivid blue-purple-pink gradient onboarding, pale frosted browser canvases, cobalt AI emphasis, translucent bottom sheets, compact floating docks, and recognizable web-page screenshots."
colors:
  canvas: "#F4F3FA"
  canvas-gradient-blue: "#2038FF"
  canvas-gradient-purple: "#4B05C9"
  canvas-gradient-pink: "#FF4B85"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9E9EE"
  surface-translucent: "#F4F4F7"
  accent-primary: "#2F35FF"
  accent-purple: "#5D20D6"
  accent-lavender: "#EEE9FF"
  text-primary: "#17171B"
  text-secondary: "#6F7078"
  text-on-color: "#FFFFFF"
  divider: "#D8D8DE"
  destructive: "#FF3B55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 800, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 25, fontWeight: 800, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
  small: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13}
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
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-on-color}", typography: "{typography.label}", rounded: "{rounded.control}", padding: [14, 20]}
  floating-dock: {backgroundColor: "{colors.surface-translucent}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", padding: [8, 14]}
  browser-sheet: {backgroundColor: "{colors.surface-translucent}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.sheet}", padding: 12}
  settings-group: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.control}", padding: 12}
  source-chip: {backgroundColor: "{colors.accent-lavender}", textColor: "{colors.accent-purple}", typography: "{typography.label}", rounded: "{rounded.pill}", padding: [8, 12]}
---

# Overview

Arc Search's visible iOS style is split between high-saturation onboarding and a quiet browser surface. Onboarding fills the screen with blurred blue, purple, and pink gradients, oversized white or cobalt headlines, large logo/app-icon objects, and a full-width cobalt action near the bottom safe area. Browser screens are mostly pale gray-white, with live web pages or AI-generated text occupying the full viewport and a compact floating dock pinned above the home indicator.

The app's most recognizable visual move is layering: web pages dim behind frosted sheets, search fields sit inside rounded panels, tab previews appear as offset cards on a lavender field, and AI generation briefly returns to the gradient environment with tiny page snapshots in the center.

# Non-negotiable visual invariants

- Onboarding and promotional setup screens use a full-screen soft gradient field, with blue and purple on one side and pink glow on the other.
- Primary actions are cobalt rounded rectangles spanning most of the screen width near the bottom safe area, with centered white semibold text.
- Browser views keep a pale gray-white canvas, visible web content, and a floating bottom dock with a centered gray plus pill.
- AI answer screens use saturated purple headings and lavender chips while keeping source cards, web skeletons, or page text visible in the same scroll.
- Page tools appear as frosted bottom sheets over a dimmed web page, with a pill URL row above square icon tiles and gray list rows.
- Settings use grouped rounded gray rows on a white sheet, colorful square icons at the row leading edge, and iOS-green toggles when enabled.
- Tab overview uses overlapping rounded page snapshots on a faint lavender-pink background, not a plain list of titles.

# Color and surfaces

The most saturated color mass is the onboarding and generated-progress gradient: electric blue, deep violet, magenta, and warm pink blur into each other without hard edges. White text and cobalt buttons sit directly on this color field.

The browser canvas is much quieter. It is an off-white or pale lavender-gray viewport, often occupied by a real page screenshot. Bottom controls use translucent, milky surfaces that let the page tint show through. Disabled or secondary rows are soft gray rather than bordered white cards.

Cobalt is the primary app accent: it appears in big onboarding CTAs, generated headings, sync/sign-in buttons, selected chips, and rating prompts. Lavender is used for AI category chips and blurred loading bands. Destructive moments are red/pink only when the underlying iOS alert or clearing action needs emphasis.

Default iOS blue would visibly break the reference when used for the main brand accent; default grouped-table white would break settings and page tools by removing the soft gray row mass and translucent layering.

# Typography

The type is system-based, heavy, and rounded-feeling through weight and scale rather than through a custom font. Onboarding headlines are large, white or cobalt, centered, and tightly stacked, with selected words sometimes italicized for emphasis. Browser AI headings are bold purple and can wrap into two lines while staying smaller than the onboarding hero scale.

Body text in AI answers is compact and readable, often black with emoji-like leading markers. Source labels and domains are much smaller and muted. Settings rows use regular iOS list scale with semibold titles, small gray secondary values, and blue Done/Edit actions in the navigation area.

Dynamic Type should preserve the contrast between hero/title, section heading, row label, and source caption. Long browser or generated text can wrap vertically; headline weight and cobalt/purple color are more important than fitting every line into a fixed height.

# Screen composition

Onboarding screens place status bar content over the gradient, then reserve the upper or middle area for the Arc mark, icon grid, or a product screenshot. The main headline sits around the vertical middle or lower-middle, and the primary button aligns close to the bottom with wide horizontal margins.

Browser result screens are full-bleed page views: the top search field or webpage header stays near the status area, content scrolls underneath, and the bottom dock floats above a subtle translucent band. AI results use a one-column reading flow with source chips, purple headings, compact paragraphs, and occasional lavender segmented chips.

Bottom sheets occupy the lower half to lower two-thirds of the screen. They have large top corner radii, a bright pill URL/search field at the top, icon tiles in the middle, and full-width gray list rows below. The web page behind remains readable but dimmed.

Settings screens are presented as a white rounded sheet under a black safe-area cap. Content is grouped in inset gray rounded rectangles with generous vertical gaps between groups. Promotional rows, such as the friend invite gradient, are full-width within the settings inset and reuse the blue-purple-pink palette.

# Navigation appearance

The persistent browser navigation is a compact bottom dock rather than a standard tab bar. Its center is a gray pill with a black plus; side controls are small translucent circular or pill buttons. The active search/assistant pill can show a purple Arc icon next to a Google mark inside a white rounded capsule.

Top navigation is minimal and contextual: browser pages mostly show webpage chrome or a search field, while settings sheets use a centered title with blue Done/Edit text actions. Modal prompts use native alert geometry over the app's blurred or dimmed background.

Selected states are visible through filled cobalt buttons, lavender selected chips, blue/purple marks, green switches, or a tiny blue selection dot under an app icon. Unavailable states are pale gray and lower contrast, as seen in page menu rows.

# Components

Primary buttons are cobalt, nearly full-width, medium height, and softly rounded. Secondary actions can be plain centered text beneath the primary button, often cobalt on white or gradient backgrounds.

Search fields are white or very pale rounded pills with a leading magnifier and optional mic/camera controls. In sheet states they can sit inside a larger frosted panel; with the keyboard visible they align tightly above the keyboard and keep their rounded capsule shape.

AI source chips are compact lavender pills with purple text. Source cards are small white rectangles with favicon, title, and domain, arranged horizontally above generated headings. Rating prompts appear as cobalt rounded bars with thumb icons in separate rounded segments.

Page menu controls use a frosted sheet with a URL capsule, four square gray icon tiles, and stacked gray list rows. Tile icons are thin black line symbols, with labels at a very small caption size below each tile.

Settings rows are grouped gray rounded bands. Each row has a colorful square icon, black title, optional gray value, and a light chevron or toggle. Toggle-on states use native green, not the app's cobalt.

# Imagery and icons

The main imagery is interface-native: Arc logos, app icon variants, widget previews, web-page screenshots, source favicons, and live webpage media. These objects are treated as product surfaces, often enlarged and floated over gradient or pale fields.

The Arc mark has a white outline and overlapping blue-to-pink ribbon shapes. App icon selection screens show this mark inside multiple rounded-square icon treatments. Widget and sync screens use small centered product renderings or logos with large surrounding whitespace.

No stable standalone illustration language appears in the reviewed still screens. The visible image language is made from product marks, UI miniatures, screenshots, favicons, and webpage content rather than reusable characters or authored narrative illustrations.

# States

Loading and generation states use blurred skeleton blocks, fading source names, or a centered page snapshot on a gradient background. The bottom dock usually remains visible unless a modal or keyboard takes over the lower screen.

Empty/new-tab states simplify to a pale gradient field with a large translucent Arc mark centered above the dock. Settings and history states remain list-like, with the same rounded gray grouping even when the list is short.

Modal states use iOS alert or sheet geometry while retaining Arc's backdrop treatment: the page behind is dimmed and blurred, and the active surface stays rounded and bright. Permission/confirmation prompts use centered white alert cards with blue action text.

# iOS adaptation

Preserve top and bottom safe areas as visible composition zones: the status bar sits directly over gradients or pale page backgrounds, and bottom controls float above the home indicator with a translucent base. Use vertical scrolling for AI answers, web pages, settings groups, and histories instead of compressing text or rows.

Maintain 44-point minimum targets for dock buttons, icon tiles, settings rows, search fields, and primary actions. When the keyboard appears, keep the search or find field pinned above it and allow the background page to remain visible in the upper area.

For compact widths, keep the one-column browser and settings layouts. Source chips may wrap or horizontally scroll, tab previews may reduce their offset, and onboarding headlines may wrap, but the large gradient field, cobalt CTA, and floating dock proportions should remain recognizable.

Support light appearance as the observed base. If a dark system context surrounds a sheet, keep Arc-owned cards, rows, and controls in the same pale frosted language visible in the reference rather than converting them into a generic dark grouped form.

# Anti-generic checklist

- Do not replace the blue-purple-pink gradient onboarding screens with plain white onboarding cards.
- Do not use default iOS blue for Arc's main CTA, generated headings, chips, or rating prompt.
- Do not turn the floating bottom dock into a standard `TabView` bar with equal labels.
- Do not present page tools as a generic `Form`; preserve the frosted sheet, URL capsule, icon tiles, and gray rows.
- Do not flatten tab overview into a text list; keep overlapping rounded page snapshots on a pale tinted field.
- Do not remove visible webpage screenshots, favicons, UI miniatures, or Arc marks and substitute decorative illustration.
- Do not apply one radius to every surface; pills, icon tiles, sheets, grouped rows, and app icons have distinct rounding.
</design-context>
