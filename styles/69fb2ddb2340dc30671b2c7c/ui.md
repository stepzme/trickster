<design-context>
---
version: 1
platform: iOS
name: Tiimo-design-analysis
description: "A warm, spacious planner combining editorial serif headings, neutral sans controls, pastel task fields, circular progress, a floating pill navigation dock, and friendly lavender-and-linework illustrations on near-white surfaces."
colors:
  canvas: "#FFFEFB"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1EFF0"
  accent-primary: "#7459E6"
  accent-secondary: "#E7DDF8"
  text-primary: "#19171B"
  text-secondary: "#77737B"
  divider: "#E8E4E7"
  destructive: "#D85B67"
typography:
  hero: {fontFamily: "Georgia", fontSize: 42, fontWeight: 400, lineHeight: 46}
  title: {fontFamily: "Georgia", fontSize: 32, fontWeight: 400, lineHeight: 38}
  section: {fontFamily: "Georgia", fontSize: 23, fontWeight: 400, lineHeight: 29}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 22
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "near-black", shape: "pill", text: "white semibold"}
  secondary-action: {fill: "soft lavender", shape: "pill", text: "near-black"}
  primary-card: {fill: "white or categorical pastel", shape: "large rounded rectangle", border: "none"}
  navigation: {fill: "floating white pill", active: "near-black filled state", companion: "small violet circular mascot"}
---

# Overview

Tiimo makes planning feel calm through generous spacing, large editorial serif headings, soft categorical pastels, and rounded floating controls. Near-white screens hold clear task structures, circular focus graphics, and friendly authored imagery without becoming a generic card dashboard. The floating white navigation pill and small violet mascot control form a recognizable lower-screen signature.

# Non-negotiable visual invariants

- Pair editorial serif display text with neutral sans-serif body and control text.
- Keep the canvas warm white and reserve lavender and pastels for bounded tasks, cards, progress, and imagery.
- Preserve generous negative space around headings, task groups, timers, and floating controls.
- Use pastel yellow, pink, blue, green, and lilac to distinguish categories, not semantic severity.
- Focus views center a large circular timer or progress mass rather than a rectangular metric card.
- Bottom navigation is a floating white pill with a dark active treatment and a separate small violet mascot control.
- Authored illustrations and small task imagery remain present wherever they carry the sampled composition.

# Color and surfaces

Warm near-white fills the viewport, while pure white creates cards, sheets, and the floating dock. Neutral grey supports inactive or disabled controls and subtle grouping. Violet is the main brand accent for focus, selection, the mascot, and soft glows; pale lavender is the common supporting field. Pastel yellow, blush, aqua, green, and lilac appear as bounded task or content zones.

Primary text is near black and secondary information muted grey. Dividers are faint because spacing and surface color do most grouping. Green, amber, and red remain semantic for success, warning, and destructive states; categorical pastels are not alerts. Default blue, saturated full-screen panels, and cool grouped-table grey break the reference.

# Typography

Dates, focus statements, and major headings use a soft editorial serif with relatively light weight and large scale. Task names, labels, durations, and settings use a system sans. Typography is sentence case, with left-aligned planning content and centered focus or onboarding statements.

Use Georgia as the iOS-safe serif substitute and SF Pro Text for operational UI. Map dates or focus titles to large title, section framing to title 2/title 3, task names to body/headline, and durations to caption. Dynamic Type should increase vertical space and wrap descriptions before compressing task names, time values, or primary controls.

# Screen composition

Screens begin with a generous heading zone, followed by one clear planning, task, statistics, or focus region, and end above floating bottom controls. Use about 16-point side insets, 8–12-point local gaps, and 24–32-point separation between major groups. Cards often span the usable width, while chips, date items, or suggestions may form horizontal rails.

Observed archetypes include full-bleed onboarding media with overlaid content and bottom action; a vertical planner with pastel task sections; a clean task-editor sheet with fields and choices; a focus screen dominated by a circular timer; statistics built from a few large progress/streak cards; and settings lists on white. The layout stays airy when populated, and floating controls never obscure the last item.

# Navigation appearance

Primary navigation is a floating white pill above the home indicator, with evenly spaced icons, compact labels where present, and a near-black active treatment. A small circular violet mascot control visually partners with the dock. Top controls are compact circles or pills rather than a heavy bar. Sheets use large rounded top corners and warm white surfaces. This governs appearance only, not destinations or flow order.

# Components

Primary actions are near-black pills with white semibold labels; disabled actions become neutral grey. Secondary controls use lavender or white fills and near-black labels. Task rows are spacious rounded fields combining a small image, task name, duration, and completion control; category color fills the bounded row or section rather than the page.

Focus components use a broad circular ring, lavender field, and centered serif time. Statistics cards combine one metric with progress graphics and authored imagery. Menus and popovers use white rounded containers with clear radio/check selection. Theme choices use large color swatches with selected markers. Native text entry remains native but inherits the package typography and surfaces.

# Imagery and icons

Imagery ranges from small pastel task symbols to larger black-line and lavender illustrations, a recurring purple mascot face, circular progress art, and occasional photographed device scenes. Larger art occupies a meaningful fraction of onboarding or promotional cards and keeps broad negative space. Small images stay padded and aligned with task text rather than acting like arbitrary leading symbols.

When imagery is part of the composition, it cannot be omitted while final assets are pending. Preserve placement, crop, scale, palette, and visual weight with an approved temporary raster asset. Navigation symbols must form a coherent set rather than an arbitrary SF Symbols mix.

# States

Observed states include selected radio/check controls, active near-black and disabled grey CTAs, pastel categorized tasks, completed or progress-bearing content, popovers, keyboard entry, paused/active focus presentations, streak/statistics cards, and selected theme colors. Selection uses dark emphasis or violet; completion may use green; destructive actions use muted red. Warm canvas, serif/sans hierarchy, high radii, and generous spacing remain constant.

# iOS adaptation

Extend the warm canvas or observed photo background through safe areas. Use vertical scrolling for schedules, editors, statistics, and settings; horizontally scroll date or suggestion rails without reducing targets. Reserve bottom inset for the floating dock and companion control, and pad final content so neither overlaps rows. Present sheets and keyboards natively while retaining warm surfaces and rounded geometry.

Keep task actions, completion controls, top pills, dock items, and swatches at least 44 points. VoiceOver order follows visible structure: time or section, task title, duration, then state/action. Dynamic Type may expand rows and cards vertically. Preserve the observed light appearance rather than inventing an unrelated dark palette.

# Anti-generic checklist

- Do not replace the serif/sans pairing with one default system style.
- Do not turn the schedule into a generic `List` or `Form` with standard separators.
- Do not use an unstyled `TabView`, default blue tint, or rectangular bottom bar.
- Do not replace the centered circular focus mass with a generic progress bar.
- Do not collapse pastels into one accent or use them as arbitrary decoration.
- Do not omit authored imagery or substitute random SF Symbols, emoji, or programmatic doodles.
- Do not apply one radius to task rows, cards, sheets, and navigation.
- Do not add mood-setting copy that repeats a visible date, task, timer, or state.

</design-context>
