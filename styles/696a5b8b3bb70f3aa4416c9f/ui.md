<design-context>
---
version: 1
platform: iOS
name: EMIAS-INFO-design-analysis
description: "A compact clinical utility built from saturated blue headers and actions, pale-gray page fields, rounded white service groups, dense black system type, small blue medical pictograms, and sparse icon-led status screens."
colors:
  canvas: "#F5F4F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF3F8"
  accent-primary: "#087EF5"
  accent-secondary: "#71C755"
  text-primary: "#1A1B1F"
  text-secondary: "#747981"
  divider: "#E2E4E8"
  destructive: "#DC4D57"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", height: 50, radius: "{rounded.control}"}
  secondary-action: {fill: "{colors.surface-primary}", text: "{colors.accent-primary}", height: 48, radius: "{rounded.control}"}
  primary-card: {fill: "{colors.surface-primary}", radius: "{rounded.card}", border: "none"}
  navigation: {headerFill: "{colors.accent-primary}", tabFill: "{colors.surface-primary}", active: "{colors.accent-primary}", inactive: "{colors.text-secondary}"}
  utility-row: {fill: "{colors.surface-primary}", leading: "blue pictogram", trailing: "chevron or edit control"}
  segmented-control: {fill: "{colors.surface-secondary}", selectedFill: "{colors.surface-primary}", accent: "{colors.accent-primary}"}
---

# Overview

EMIAS.INFO is a dense but orderly medical utility. Saturated blue establishes identity in launch, headers, actions, icons, links, and selected navigation; the working area is pale gray with compact white grouped cards. The screens prioritize lists, forms, dates, and explicit statuses rather than photography or decoration, with small functional pictograms providing orientation.

# Non-negotiable visual invariants

- Use saturated blue as the dominant navigation and action color, including headers, primary buttons, links, icons, and selected tabs.
- Place compact rounded white service groups on a very pale gray full-screen canvas.
- Keep information rows utilitarian: small leading icon, primary label, optional secondary text, and a right-side affordance.
- Use dense system typography with strong black labels and quieter gray metadata rather than oversized editorial display text.
- Build forms from segmented controls, labeled selection rows, and broad blue confirmation actions.
- Keep empty and success states centered, sparse, and led by one functional pictogram or checkmark.
- Maintain a white bottom tab bar with blue selected and gray inactive items.
- Reserve green for confirmed success and red/pale red for destructive or account-exit treatment.

# Color and surfaces

The main working canvas is a very pale neutral gray, while white rounded cards contain service groups, medical records, appointment information, and forms. Saturated blue forms the largest branded mass in the top header and is repeated in primary controls, links, and small pictograms. Black carries primary labels and values; medium gray carries dates, clinics, descriptions, and placeholders. Green appears only for confirmed success or completion. Red and pale red identify destructive, cancellation, or exit actions. Dividers are subtle cool gray within white groups. Generic iOS blue may be close in hue but default system components without the full blue-header/white-card hierarchy would still break the reference.

# Typography

Use SF Pro Display for a small number of page or confirmation titles and SF Pro Text for nearly all operational content. The hierarchy is compact: titles are bold but not promotional; grouped-row labels are semibold; dates, descriptions, and auxiliary values are regular gray text. Numeric codes and measurements should remain legible and may use tabular numerals within the system family. Text is predominantly left aligned, except centered navigation titles and sparse success/empty states. Under Dynamic Type, secondary lines wrap beneath their label before row icons or primary actions shrink; dense groups may increase vertically rather than truncate medical information.

# Screen composition

Typical screens use 16-point side insets, 12–16 point card padding, and roughly 20–24 points between major groups. A saturated blue header often occupies the top safe area and contains a centered title or compact identity/actions. The middle is a vertical pale-gray field of broad white groups, dense rows, segmented forms, or a centered status. A white three-item tab bar or a wide blue action occupies the lower safe area.

The observed visual archetypes are:

- Service dashboard: blue identity/header mass above several white rounded service groups, compact action tiles, and blue medical pictograms.
- Dense record list: centered or compact top title followed by white grouped categories and repeated rows with label, supporting information, and chevron.
- Appointment/detail card: a broad white status panel holding provider, location, date/time, and explicit controls, with secondary groups below.
- Step form: compact title, segmented selector or labeled choice rows, then a wide blue continuation action; selected values remain visible in the white card language.
- Search state: rounded light search field above list content, with the native keyboard reducing the visible working region.
- Sparse status: one centered checkmark or functional icon, concise title/supporting text, and a single blue action on the pale-gray field.
- Profile/settings: stacked white grouped rows with blue leading pictograms, small edit controls, gray detail, and visually isolated red exit/destructive treatment.

Long records and forms scroll vertically. Bottom navigation and fixed actions reserve space for the final group and home indicator.

# Navigation appearance

Primary sections use a white bottom bar with three evenly spaced compact icons and labels; the active item is saturated blue and inactive items are gray. Top navigation frequently uses a full-width blue header through the safe area, with white centered title and small white icon controls. Deeper white or pale-gray screens use a restrained back control and compact centered title. Modal and confirmation content retains rounded white panels or sheets with explicit actions. This section describes appearance only, not the original destinations or product flow.

# Components

Primary actions are wide blue rounded rectangles about 50 points high with white semibold labels. Secondary actions are white or pale-blue with blue text. Destructive/account-exit actions use red text or a pale-red surface and remain spatially separate from ordinary rows.

Service cards and grouped lists are white, moderately rounded, and mostly borderless. Rows use a small blue leading pictogram, black label, optional gray second line, and a right chevron, toggle, edit pencil, or value. Segmented controls use a quiet gray track, white selected segment, and blue emphasis. Search uses a rounded pale field with a small leading icon. Success panels use a green checkmark and restrained text rather than a large colored illustration. Pressed/selected states deepen blue or add a pale-blue fill; disabled states reduce contrast while retaining layout. Every control remains at least 44 points.

# Imagery and icons

No photography or decorative lifestyle imagery dominates the sampled screens. Visual orientation comes from small, consistent blue medical/service pictograms, line icons, document marks, edit controls, rating stars, and a green success checkmark. Icons sit inside rows or centered status regions and remain subordinate to labels and medical data. Treat them as a functional icon system, not a standalone illustration language. Use clear, optically consistent symbols rather than arbitrary mismatched SF Symbols; avoid decorative anatomy art and stock health imagery.

# States

The blue splash state fills the screen before the pale-gray utility layout appears. Authorization and code-entry states use white form content and the native keyboard. Selected tabs, segmented options, links, and actions use blue. Success is centered and sparse with a green checkmark. Empty medical/referral areas use one lightweight icon and explicit text rather than a decorative card stack. Populated appointments and records retain the same white grouped geometry. Destructive or logout actions shift to red/pale red, and cancellation remains explicit in text. No separate dark appearance was established in the inspected screens.

# iOS adaptation

Extend the blue header or pale-gray canvas through the appropriate safe area and keep grouped content inside 16-point compact-width insets. Use vertical scroll containers for dashboards, records, appointments, and forms, with bottom inset for the tab bar or fixed action. Focused search and code inputs must lift or scroll above the native keyboard. Native permissions, calendar handoff, or Apple Health authorization may appear as system UI, then return to the same blue/gray context. Keep row controls, segmented options, edit buttons, tabs, and actions at least 44 points. VoiceOver order follows screen title, group heading, row label, secondary value, then trailing action. Dynamic Type expands row height and may stack trailing values below labels rather than clipping medical data.

# Anti-generic checklist

- Do not replace the blue-header/pale-gray composition with a plain white default `Form`.
- Do not use an unstyled `TabView`; preserve the white bar and blue/gray selected hierarchy.
- Do not turn small functional medical pictograms into large decorative illustrations.
- Do not hide medical labels, statuses, dates, or destructive meaning behind icon-only controls.
- Do not add photography, anatomy art, gradients, or mood copy to fill sparse states.
- Do not make every group a floating shadow card; depth is restrained and structural.
- Do not collapse rows, service cards, segmented controls, actions, and status panels to one geometry.
- Do not use color alone for confirmation, cancellation, or unavailable states; retain explicit text.

</design-context>
