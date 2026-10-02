<design-context>
---
version: 1
platform: iOS
name: MES-Diary-design-analysis
description: "A dense school utility on a pale lavender shell, organized with rounded white cards, compact Cyrillic typography, purple-blue controls, colorful gradient service icons, a persistent five-item tab bar, and data-first imagery."
colors:
  canvas: "#F6F3FB"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECE7F6"
  accent-primary: "#6750D8"
  accent-secondary: "#3975ED"
  text-primary: "#202027"
  text-secondary: "#777784"
  divider: "#E3DFEA"
  destructive: "#D94F58"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  schedule-card: {fill: "white", radius: 14, padding: 12, hierarchy: "time plus subject plus metadata"}
  service-tile: {fill: "white", icon: "small categorical gradient tile", label: "compact centered"}
  calendar-strip: {fill: "lavender shell", selection: "purple filled or tinted", density: "compact"}
  bottom-navigation: {fill: "white", items: 5, selection: "purple icon and label"}
---

# Overview

MES Diary is a dense but calm operational interface. A pale lavender shell occupies the viewport while rounded white cards organize schedules, tasks, services, settings, and school data. Purple and blue controls establish selection and action; small gradient service icons introduce categorical color without overpowering the information. Compact Russian-first type, an orange circular student avatar, and a persistent five-item bottom bar make it visually distinct from a generic grouped list.

# Non-negotiable visual invariants

- Keep the pale lavender shell visible around and between white content cards.
- Preserve dense information hierarchy inside compact cards: a strong subject or service label, then smaller time, room, status, or supporting data.
- Use purple or blue for selected controls and primary actions; do not default the product to system blue everywhere.
- Retain the orange circular student avatar as a recurring high-contrast identity anchor when a profile marker is needed.
- Keep the persistent bottom navigation to five evenly distributed items with a clearly purple selected state.
- Use small labeled service tiles with categorical gradient icons; icons must not become unlabeled decoration.
- Preserve the same geometry and hierarchy when switching to the observed dark appearance.
- Show transient success as a compact green bar near the top rather than as a new full-screen visual language.

# Color and surfaces

The light appearance uses a pale lavender canvas as a broad continuous mass. White is the primary card, form, and navigation surface; slightly deeper lavender distinguishes selected dates, secondary controls, and grouped areas. Purple is the main selection and action color, with a brighter blue used for informational and account-oriented controls. Small icon gradients supply orange, teal, blue, and magenta categorical accents.

Near-black carries titles and decisions, medium gray supports metadata, and pale dividers separate dense rows without boxing every element. Green is reserved for success or positive status, orange for identity and selected contextual markers, and muted red for destructive or problem states. In the observed dark appearance, the canvas becomes near-black and cards dark gray while typography, spacing, categorical icons, and purple-blue emphasis remain structurally consistent.

# Typography

Typography is compact, utilitarian, and optimized for Cyrillic labels and numeric school data. Page titles use 24-point bold display type, section heads about 18 points, card titles and controls 13–15 points with semibold emphasis, body details about 14 points, and times, rooms, dates, tab labels, and minor metadata about 11 points. Numeric grades, times, and balances should align cleanly and remain rapidly scannable.

Use SF Pro Display and SF Pro Text as the iOS-safe family. Preserve hierarchy through weight and grouping rather than oversized headings. Under Dynamic Type, let homework, teacher, and status detail wrap below primary labels; move trailing metrics to a new row before truncating core information. Compact captions may grow independently without making every card title equally large.

# Screen composition

Most screens begin beneath the top safe area with a compact title row that may include the student avatar, status, bell, or menu controls. The center is a vertically scrolling utility dashboard: a date strip, schedule timeline, card list, service grid, settings rows, or structured form. Twelve-point outer gutters and roughly 10–12 point gaps keep the pale shell visible. White cards span nearly the full width and use compact padding; informational density is high, but related fields stay grouped.

The visible archetypes are: a dated schedule with a compact horizontal calendar and one-column lesson cards; a data-rich lesson or task detail; a service dashboard combining a labeled icon grid with summary cards; a profile/settings list; a full-screen form with fixed or bottom-owned action; a modal filter with radio or checkbox controls; and a compact FAQ or knowledge list. Persistent bottom navigation reserves the lower safe area. Long views scroll vertically, while the date strip may scroll horizontally without shrinking day labels.

# Navigation appearance

The bottom bar is a solid white surface in light mode and a dark surface in dark mode, with five evenly spaced icon-and-label items. Inactive items are muted gray; the selected item is purple and visibly stronger. Top navigation uses compact back arrows, avatar/status markers, and small bell or menu actions rather than an oversized branded header. Filters and selectors appear as rounded modal sheets or compact overlays, with clear selected controls and restrained dividers.

# Components

Schedule cards are white rounded rectangles with about 12 points of padding. Time and duration form a compact anchor, while the subject uses stronger type and room, teacher, homework, or substitutions appear as smaller metadata. Calendar strips use compact day cells with purple filled or tinted selection.

Service tiles use white card surfaces, a small gradient icon container, and a short centered label. Dashboard cards group one metric or school status without nesting cards inside cards. Primary buttons and switches use purple or blue; secondary actions sit on pale lavender or white surfaces. Radio filters, checkboxes, text areas, rating bars, and compact charts keep the same tight spacing and rounded language. Pressed states deepen the existing accent; disabled states reduce contrast while preserving geometry.

# Imagery and icons

Imagery is functional and data-led. The strongest recurring visual assets are the circular student avatar, compact gradient service icons, small charts, rating bars, and occasional content-specific thumbnails. Icons sit in consistent bounded containers and remain paired with text labels. An isolated emoji empty state or character/avatar image does not define a reusable illustration system. Do not substitute large decorative art, stock photography, or arbitrary oversized symbols for information that is normally expressed through cards, icons, and charts.

# States

Observed light and dark appearances preserve card hierarchy, navigation placement, and categorical accents. Populated schedules and dashboards remain dense but separated by white or dark cards. Selected dates, tabs, radios, switches, and checkboxes use purple or blue. A successful action appears as a compact green top toast. Native permission prompts retain system presentation before returning to the same app context. Filter sheets, error reporting forms, and FAQ lists preserve the lavender shell, compact type, and rounded components rather than switching to an unstyled `Form`.

# iOS adaptation

Extend the lavender or dark canvas through the safe areas and keep cards within 12-point horizontal gutters. Place long dashboards, schedules, forms, and lists in vertical scroll containers; reserve space for the persistent bottom bar and any fixed action. Keep the horizontal calendar independently scrollable, and stack dashboard metrics or reduce service-grid columns before shrinking type on narrow devices.

All tab items, calendar cells, avatars, icon tiles, switches, and toolbar controls require at least 44-point targets. VoiceOver order should follow title and student context, date selection, then cards in reading order, with compound lesson information exposed coherently. Support keyboard avoidance in forms and native transitions into system permission UI. Dynamic Type should expand cards and reflow trailing metadata. Preserve both observed light and dark surface relationships rather than merely inverting colors.

# Anti-generic checklist

- Do not replace the lavender shell with the default grouped gray background.
- Do not flatten schedules, services, and dashboard metrics into identical generic white rows.
- Do not ship an unstyled `TabView`; preserve five labeled items and purple selection.
- Do not use arbitrary SF Symbols without the observed bounded, categorical icon treatment.
- Do not remove labels from service icons or rely on color alone for status and grades.
- Do not introduce large marketing illustrations where the reference uses data, compact icons, and cards.
- Do not use heavy shadows, oversized headings, or excessive empty space that destroys the compact school-dashboard density.
- Do not treat dark mode as a separate composition; keep hierarchy and geometry stable across appearances.

</design-context>
