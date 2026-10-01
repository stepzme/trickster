<design-context>
---
version: 1
platform: iOS
name: My-Viva-design-analysis
description: "A bright telecom utility built from white and pale-gray fields, compact account cards, bold functional sans-serif hierarchy, Viva-red actions and selected navigation, blue usage meters, and secondary promotional photography."
colors:
  canvas: "#F6F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECECEF"
  accent-primary: "#E60022"
  accent-secondary: "#269BD3"
  text-primary: "#1B1C20"
  text-secondary: "#74767C"
  divider: "#E2E2E6"
  destructive: "#D83B45"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 10
  card: 16
  sheet: 24
  pill: 999
components:
  account-card: {fill: "white", geometry: "full-width rounded module with compact metrics"}
  usage-meter: {fill: "pale track with blue progress", geometry: "thin horizontal bar"}
  utility-row: {fill: "white", geometry: "icon-label-chevron row"}
  promotional-card: {fill: "image and white text area", geometry: "rounded wide crop"}
  bottom-tab-bar: {fill: "white", geometry: "low standard icon-and-label bar"}
---

# Overview

My Viva is a practical account interface dominated by white and very pale gray surfaces. Compact modules organize balances, allowances, payments, services, and forms; strong red actions and blue usage bars carry most of the color. Promotional photography and occasional pale spot art are secondary to the operational hierarchy.

# Non-negotiable visual invariants

- White or pale gray fills the full screen and leaves clear space between compact account modules.
- Viva red is reserved for primary actions, active navigation, and key brand emphasis.
- Blue appears in thin allowance or consumption meters rather than competing with red as a general action color.
- Account and service modules use white rounded rectangles with restrained shadow or tonal separation.
- Operational lists use a left icon, concise label, optional metadata, and a right chevron.
- Payment and form screens end in a prominent full-width red action.
- The bottom tab bar stays visually light, with gray inactive items and a red active item.
- Photography, phone mockups, and small spot art remain secondary to balances, statuses, and controls.

# Color and surfaces

The main canvas is a pale neutral gray or white field. White primary cards lift from it through a soft shadow or subtle tonal edge; secondary inputs and grouped controls use cooler light gray. Viva red marks the current tab, primary button, and brand-critical emphasis. Blue is functional for allowance progress and selected consumption data. Near-black carries amounts and page titles; medium gray carries timestamps, package details, and inactive labels. Green may confirm success, while destructive red must remain distinguishable from brand-red actions through context. Default iOS blue actions or heavy dark surfaces would visibly break the reference.

# Typography

Use SF Pro Display for large balances and page titles and SF Pro Text for rows, controls, and metadata. Titles are bold but not editorial; account values receive the strongest numeric emphasis. Section labels sit around 18–20 points, operational rows around 14–16 points, and metadata around 12 points. Use tabular numerals for balances, allowances, dates, and payment amounts. Multilingual strings may wrap, but amounts and units should remain paired. Dynamic Type increases card and row height while keeping the primary metric before supporting details.

# Screen composition

Account dashboard archetype: use approximately 16-point side insets, place the primary account or balance card near the top, follow it with compact utilities and allowance modules, then secondary recommendations. Modules occupy full width or a simple two-column grid; the hierarchy remains operational rather than promotional.

List or settings archetype: place a bold title below the safe area, then use direct white rows separated by hairlines or grouped in restrained rounded surfaces. Keep icons and chevrons aligned and avoid nested cards.

Payment or form archetype: stack sparse fields, amount or keypad content, and summaries on the pale canvas, with the large red action near the bottom safe area. Promotion archetypes may use a wide image crop followed by concise text, but do not place account data over the image.

# Navigation appearance

The bottom navigation is a low white icon-and-label bar with minimal separation from the content; inactive items are gray and the selected item is red. Detail screens use a small dark back chevron and bold title on the light canvas. Action sheets and modals use white surfaces, restrained rounding, and standard dimming. This section governs appearance only; routes and information architecture come from the consuming product.

# Components

Account cards are white rounded rectangles with 14–18-point radii, compact padding, bold values, small gray metadata, and little or no border. Usage meters are thin pale tracks with blue progress and adjacent numeric labels. Utility rows combine a simple left icon, medium-weight label, optional secondary line, and gray chevron. Primary buttons are full-width red rectangles with white semibold text and a moderate radius; pressed states deepen the red and disabled states reduce saturation. Toggles may retain native geometry but must sit within the quiet neutral palette. Promotional cards use rounded photographic crops with their copy in a separate readable region.

# Imagery and icons

Imagery supports rather than defines the interface. Use wide rounded promotional photography, compact story thumbnails, onboarding phone mockups, and occasional small pastel spot art. Preserve image crops where a promotion is visibly image-led, but never place critical balance or service status over photography. Operational icons are simple, consistent, and aligned to list rows. The sampled screens do not establish a broad independent authored illustration system, so do not extrapolate isolated spot assets into a dominant illustrated language.

# States

Active navigation and actionable confirmations retain red emphasis; allowance progress remains blue. Populated account cards keep bold values and muted timestamps. Forms, keypad states, and payment summaries preserve the same light surface hierarchy and culminate in the red action. Action sheets use white modal surfaces. Native permission or PIN prompts may appear during onboarding without changing the surrounding visual system. Theme-selection evidence should be represented only when directly required; the dominant sampled appearance remains light.

# iOS adaptation

Extend the white or pale-gray canvas through safe areas, keep titles below the status bar, and reserve the lower inset for the tab bar or primary payment action. Long account, service, and promotion pages scroll vertically. Two-column modules collapse to one column when Dynamic Type or localization makes labels collide. Buttons, rows, icons, and tab items need at least 44-point hit targets. Use native keyboards, numeric keypads, sheets, and permission transitions, then return to the same light context. VoiceOver order follows title, primary metric, status, actions, supporting modules, then navigation. Dynamic Type may expand modules without hiding amounts, units, or action labels.

# Anti-generic checklist

- Do not replace the red action hierarchy with default iOS blue.
- Do not add heavy shadows or thick borders around every white module.
- Do not turn operational lists into oversized marketing cards.
- Do not place balances, usage, or service status over promotional photography.
- Do not use an unstyled `Form` or grouped system background for account screens.
- Do not use an unstyled `TabView` whose active state ignores Viva red.
- Do not make isolated pastel spot art the dominant visual language.
- Do not hide units, timestamps, chevrons, or usage-meter labels that make compact modules scannable.

</design-context>
