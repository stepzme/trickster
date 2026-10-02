<design-context>
---
version: 1
platform: iOS
name: Amie-design-analysis
description: "A stark productivity workspace where white calendar and todo panes are separated by black floating chrome, with thin gray grid lines, restrained pink time accents, compact system typography, and almost no decorative imagery."
colors:
  canvas: "#F4F4F4"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F7F7"
  accent-primary: "#EF5B82"
  accent-secondary: "#14B8C8"
  text-primary: "#111111"
  text-secondary: "#77777A"
  divider: "#E5E5E7"
  destructive: "#E44855"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 14
  section-gap: 24
  card-padding: 16
  control-gap: 8
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.text-primary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.control}"}
  secondary-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.control}"}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}"}
  navigation: {backgroundColor: "{colors.text-primary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.pill}"}
---

# Overview

Amie's current iOS screens are defined by an almost colorless calendar/todo workspace. The recognizable elements are the vertical split between panes, black floating controls, a fine calendar grid, pink current-day/time accents, and pastel event bars used sparingly against large white space.

The source app card reviewed was the current `amie` Screen Gallery card dated 2026-08-24, with latest set to `null`. Freshly inspected screens included onboarding, home, todo creation, todo details, calendar, todo list, profile/settings, and dark appearance.

# Non-negotiable visual invariants

- White is the dominant viewport mass; gray appears mainly as hairlines, disabled controls, and subtle shadows.
- Calendar and todo areas behave visually like two rounded white panes separated by black chrome rather than a standard app page.
- The center/bottom navigation chrome is black, pill-shaped, compact, and icon-led; it must not become a conventional iOS tab bar.
- The current date and time indicator use a narrow saturated pink accent; do not replace it with default iOS blue.
- Calendar content uses thin grid lines and lightly tinted event blocks, not heavy cards.
- Todo rows are text-first, with small square checks, faint metadata, and extensive empty space.
- Full-screen editing sheets have large white surfaces, black surrounding gutters, and compact bottom action strips.
- Dark mode keeps the same geometry, but changes the canvas to near-black and preserves restrained accent use.

# Color and surfaces

Use white as the primary surface for calendar grids, todo lists, onboarding questions, profile rows, and edit sheets. Use a very pale gray canvas only where the app exposes the space around floating panes or grouped controls.

Black is structural. It appears as the pane divider, floating navigation pill, modal gutters, and primary onboarding action. It should read as app chrome, not merely text color.

Pink is narrowly scoped to current-day chips, current-time rules, and small brand emphasis. Cyan/turquoise appears as individual event or calendar color, not as a global CTA system. Event colors are quiet pastels: pale cyan, pale yellow, pale peach, and light red.

Dividers are thin and low contrast. Avoid heavy borders, shadows, saturated gradients, and broad colored backgrounds in ordinary workspace screens.

# Typography

Use SF Pro as the iOS-safe system substitute. The workspace typography is compact and functional: small captions for times and weekday labels, medium-weight todo titles, and muted microcopy for secondary details.

Onboarding uses larger bold type for the product statement, but most app screens avoid hero typography. Settings titles are centered or top-aligned with a modest bold title scale. Calendar labels and times stay small and should never compete with todo titles or event names.

Dynamic Type should wrap row labels and descriptions while preserving compact metadata. Do not use negative letter spacing. Keep uppercase limited to small labels such as onboarding survey/category labels when visible in the source.

# Screen composition

The main workspace is a vertical composition: a top calendar pane, a black control strip/divider, and a bottom todo pane. The ratio can vary by state, but both panes retain rounded white edges and a single-column mobile layout.

Calendar screens allocate most space to a sparse time grid. Todo-list screens shift visual weight to the lower pane, leaving the upper pane clipped or reduced. Populated calendars use horizontal event bars aligned to the grid; populated todo screens remain list-like with no decorative fill.

Creation and detail screens use a large rounded white sheet over black gutters. The text input/editor area occupies the upper portion; compact controls and keyboard or action strips sit at the bottom. Settings and profile screens are full-height white lists with colored circular row icons and a black Pro banner.

Typical horizontal inset is tight, around 12-18 points. Large empty regions are intentional and should not be filled with recommendations, decoration, or explanatory copy.

# Navigation appearance

Navigation is visually embedded in the black floating strip. The visible elements are small person/search symbols, a centered label pill such as Calendar or Todos, a short grab handle, and a compact plus action. Selected state is expressed through white text/icons on black and sometimes a small dot.

Back controls in sheets are minimal text or simple glyph controls on white. Settings rows use a right chevron, but the list should not become a default `Form` with grouped gray sections.

# Components

Primary actions are black rounded rectangles with white centered text. Disabled actions become gray with muted text. Secondary workspace actions are compact black or white pills depending on surrounding surface.

Todo rows use a small square checkbox, a primary line, optional description/date metadata, and occasional tiny colored indicators. Completed rows use checked boxes, muted gray text, and remain visible in context.

Calendar event blocks are flat pastel rectangles aligned to the time grid, often with a stronger colored leading edge and tiny duration/status metadata. The current-time rule is a hairline pink stroke spanning the calendar.

Selection controls in onboarding and settings are full-width rounded white rows with subtle dividers or borders. Selected rows use a faint gray fill or a compact checkmark/indicator rather than large custom decoration.

Modals and bottom sheets use black outer gutters, large white rounded panels, compact segmented actions, and clear destructive red only for delete/logout.

# Imagery and icons

Imagery is not a dominant Amie system. The inspected onboarding contains product/task-card imagery and a small avatar-style invite card, but repeated authored illustration language was not independently proven across app states. Do not invent a mascot or broad illustration set for this style.

Icons are minimal line or filled symbols: checkboxes, search, person, plus, calendar, lock, repeat, trash, chevrons, and colored settings row glyphs. Use the source geometry and weight; arbitrary SF Symbols are acceptable only after being styled to match size, stroke, fill, and color.

# States

Observed empty states leave space empty: an empty schedule shows only grid/time labels and a small "Nothing upcoming" style message; empty todo areas show list headers and create-list affordances without illustration.

Populated states add pastel event blocks and text rows without changing the basic pane structure. Completed states use muted checked rows and a "done" grouping. Selected states use small filled dots, checkmarks, or thin colored outlines.

Permission and system prompts appear over dimmed app content. Dark appearance preserves the same pane layout and control strip while moving surfaces to charcoal/black and keeping event colors subdued.

# iOS adaptation

Preserve safe-area spacing around the status bar and home indicator. The black control strip must remain reachable and visually separate from the panes. Touch targets for checkboxes, plus controls, profile/search icons, settings rows, and bottom sheet actions must be at least 44 points even when the visible glyph is smaller.

Use scroll containers for long settings lists and editable detail sheets. With keyboard visible, keep the bottom action strip and current input visible while retaining the black gutter/sheet relationship. At larger Dynamic Type sizes, wrap todo titles and settings labels before increasing chrome height.

Use native permission transitions only for system prompts; app-owned sheets and controls must be explicitly styled to match the observed white/black Amie language. Do not add desktop hover states, top web navigation, marketing cards, or unverified animation behavior.

# Anti-generic checklist

- Do not replace pink current-time/current-day accents with default iOS blue.
- Do not use a standard `TabView` bottom bar.
- Do not render the workspace as a generic stack of white cards; preserve the split pane and black control strip.
- Do not fill empty calendar or todo space with decorative artwork.
- Do not make every component share one uniform corner radius.
- Do not use `Form` section chrome for settings.
- Do not add broad gradients, stock imagery, emoji, or mascot art.
- Do not describe or implement product navigation scenarios from this style document; this file only defines visual treatment.

</design-context>
