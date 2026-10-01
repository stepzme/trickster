<design-context>
---
version: 1
platform: iOS
name: Calendar-design-analysis
description: "A white-first native iOS calendar with coral-red actions, precise date grids and time rules, compact black system type, pale grouped forms, centered modal titles, and color dots as the only recurring visual marks."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#FF3B30"
  accent-secondary: "#007AFF"
  text-primary: "#111111"
  text-secondary: "#73777C"
  divider: "#E2E2E7"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 10
  card: 14
  sheet: 22
  pill: 999
components:
  calendar-grid: {fill: "#FFFFFF", today: "#FF3B30", divider: "#E2E2E7"}
  grouped-row: {fill: "#FFFFFF", text: "#111111", height: 48, radius: 10}
  text-action: {text: "#FF3B30", height: 44}
  search-field: {fill: "#F2F2F7", text: "#111111", radius: 10}
  navigation: {fill: "#FFFFFF", active: "#FF3B30", inactive: "#73777C"}
---

# Overview

Calendar is a restrained native utility in which date structure, time alignment, and form controls provide the visual identity. White schedule space dominates, coral red identifies actions and current context, and pale grouped surfaces organize editing without decorative cards or imagery.

# Non-negotiable visual invariants

- White fills the main calendar and form surfaces; grouped areas use only a very pale gray.
- Coral red consistently marks actionable text, current date/time, and selected emphasis.
- Date grids and time-based views use precise alignment, thin rules, and deliberately empty schedule space.
- Forms are single-column grouped rows with compact labels, trailing values, switches, checkmarks, and color dots.
- Modal screens use centered bold titles with red cancel/done actions at opposite edges.
- Secondary explanations and inactive content remain small neutral gray.
- Sheets, keyboards, alerts, file pickers, and share surfaces retain recognizable iOS geometry.
- No photographic or authored illustration layer competes with calendar structure.

# Color and surfaces

The canvas and primary surfaces are white; `#F2F2F7` separates grouped forms and search fields. Coral red is the defining accent, while blue and other hues appear only as local calendar identities or native linked content. Black carries primary information, gray supports explanations and placeholders, and pale dividers structure lists and schedules. Destructive red may share the accent hue but must be explicit in context. Heavy shadows, gradients, or a generic system-blue action palette would break the reference.

# Typography

Typography uses the iOS system family: bold large titles or centered sheet headings, regular 17-point rows, compact gray metadata, and tabular numeric dates and times. Event titles outrank time and calendar metadata without becoming display typography. Dynamic Type grows rows and form sections vertically; date grids and time columns preserve alignment through fixed numeric cells and accessible alternative labels.

# Screen composition

Calendar archetypes use a white full-height field with top controls, a month grid or time ruler occupying the main region, and sparse bottom text actions. Empty dates remain visibly empty. List and management screens use flat or grouped single columns with color dots and thin separators. Creation and editing appear as stacked sheets: centered title, grouped fields, inline date/time controls, and keyboard-driven text areas. Search, inbox, subscription details, popover menus, action sheets, file selection, and sharing reuse the same native white-and-pale-gray hierarchy.

# Navigation appearance

Top bars use red text or thin red glyphs for back, cancel, done, add, and search, with black centered titles where modal. Main calendar shortcuts are compact red text near the bottom rather than a filled tab bar. Sheets have rounded top corners and white fill; popovers and action sheets use native light surfaces over a dimmed background. Appearance does not prescribe destinations or source-product routes.

# Components

Date cells are compact numeric targets with a red filled or outlined current state and small colored event marks. Schedule rulers use faint horizontal lines and narrow time labels. Grouped rows are white within pale-gray sections, with hairline dividers, trailing chevrons, switches, checkmarks, or color dots. Search fields are pale rounded rectangles. Segmented controls, keyboards, date pickers, file pickers, share sheets, and destructive action rows retain native proportions. Disabled states reduce contrast while keeping structure.

# Imagery and icons

No authored illustration or photography system is present. Thin system-style icons, calendar color dots, date numerals, and schedule rules carry visual meaning. Attachments appear as user content rather than decoration. Do not introduce hero art, decorative symbols, emoji, or image cards to fill empty schedule space.

# States

Observed states include launch/onboarding, widgets, calendar grid and event views, search, today selection, visible/hidden calendar groups, edit and subscription forms, offline warning, preview and color selection, subscribed/unsubscribed confirmation, inbox, event creation, location/time/travel/repeat/end-date selection, invitees, alerts, availability, attachments, URL, notes, keyboards, file picker, share sheet, and destructive action sheet. White surfaces, red actions, gray support, and native control geometry remain constant.

# iOS adaptation

Respect status, sheet, keyboard, and home-indicator safe areas. Calendar grids should fit compact widths without shrinking below readable date sizes; time views scroll vertically and grouped forms scroll the focused row above the keyboard. Maintain 44-point hit regions around small dates, icons, and text actions. VoiceOver should announce date, event count/state, then actions. Dynamic Type may increase row height and wrap supporting copy but should not collapse time alignment. Light appearance is canonical; dark mode requires an intentionally mapped schedule palette rather than automatic inversion.

# Anti-generic checklist

- No generic card dashboard replacing the flat date grid or time ruler.
- No default blue action tint replacing coral red.
- No filled promotional buttons where the reference uses text actions.
- No decorative imagery, slogans, or copy filling empty schedule space.
- No unstyled `Form` that loses centered sheet titles, grouped rhythm, or trailing control alignment.
- No arbitrary symbols replacing color dots, checkmarks, and familiar native controls.
- No uniform corner radius applied to grid cells, rows, sheets, and search.

</design-context>
