<design-context>
---
version: 1
platform: iOS
name: Wise-design-analysis
description: "A high-contrast global-finance interface built from warm white or near-black canvases, acid-green pill actions, oversized condensed black headings, calm gray account surfaces, explicit financial rows, and selective tactile 3D object imagery."
colors:
  canvas: "#F7F7F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEDEA"
  accent-primary: "#9FE870"
  accent-secondary: "#163300"
  text-primary: "#12130F"
  text-secondary: "#5D6258"
  divider: "#D2D5CF"
  destructive: "#C94747"
typography:
  hero: {fontFamily: "Archivo Black", fontSize: 40, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "Archivo Black", fontSize: 30, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
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
  primary-action: {fill: "acid green", text: "near-black semibold", height: 52, radius: 999}
  balance-card: {fill: "white or pale gray", padding: 16, radius: 20, content: "currency and large amount"}
  financial-row: {fill: "flat or white", height: 56, divider: "thin gray", metadata: "explicit label and value"}
  navigation: {fill: "white or near-black", selected: "soft filled island", unselected: "muted icon and label"}
---

# Overview

Wise is a high-contrast, spacious finance interface. Warm white and pale gray form the default canvas; dark appearance replaces them with near-black and charcoal while keeping the same acid-green actions. Oversized condensed black headings give brand moments a distinctive voice, while transactional surfaces use calm sans-serif type, explicit labeled values, and clear row structure. Tactile marbled 3D objects appear selectively in onboarding, empty, educational, and promotional contexts without entering critical financial review rows.

# Non-negotiable visual invariants

- Acid green is the decisive brand mass, used for primary pill actions, selected emphasis, and occasional large branded fields.
- Warm white or near-black fills the full viewport; pale gray or charcoal creates secondary surfaces with little shadow.
- Brand and onboarding moments use oversized condensed headings, while financial data stays in a neutral, highly legible sans-serif hierarchy.
- Amount, currency, fee, timing, and status information is displayed in explicit labeled rows with strong value alignment.
- Primary actions are full-width green pills with near-black labels and clear separation from surrounding information.
- Bottom navigation contains four compact items, with the selected item placed on a soft filled island rather than marked by default blue.
- Selective marbled 3D object imagery owns substantial open space in authored states and cannot be replaced by generic symbols.
- Dark appearance preserves green actions, high contrast, and the same card and navigation geometry rather than becoming a different design system.

# Color and surfaces

The light canvas is a warm near-white. Primary cards may be white, while pale gray secondary surfaces hold inputs, list groups, chips, and disabled controls. Thin gray dividers support explicit row structure. In dark appearance, the canvas becomes near-black and cards become charcoal; text turns warm white while the acid-green action remains unchanged.

Acid green is the main active color and may fill a control, selected chip, promotional field, or small focus indication. Deep green acts as a supporting brand field and high-contrast text partner. Near-black carries light-mode headings and financial values; medium gray carries labels, dates, and explanations. A distinct darker green communicates positive state without confusing it with brand lime; amber indicates review or warning and red is reserved for destructive or failed states. Default iOS blue, cool corporate gradients, and indiscriminate green tinting would break the reference.

# Typography

Use Archivo Black or another condensed heavy grotesk as the iOS-safe substitute for branded hero and campaign headings; use SF Pro Display/Text for balances, rows, forms, and controls. Hero headings sit around 34–40 points, page titles around 28–32, section titles around 20–24, controls and body around 15–17, and metadata around 11–13.

Display titles are dense, bold, and often multi-line. Financial information uses neutral open letterforms, tabular figures, and clear value alignment. Amount and currency remain visually attached; labels are separated from values by weight and spacing rather than many colors. With Dynamic Type, row labels wrap above values, multi-column cards stack, and display titles gain height without overlapping the illustration or primary action.

# Screen composition

Screens typically use 16-point horizontal insets, 12–16 points inside cards and controls, and 24–32 points between financial groups. Large open top regions appear around display headings or authored 3D objects. Warm white, green, or near-black extends through the safe areas. Long lists and forms scroll vertically; the four-item tab bar or a lower full-width action reserves the bottom safe area.

Observed archetypes include:

- Brand composition: oversized condensed title and a single isolated 3D object occupy much of the upper and middle viewport, with concise supporting text and one green pill action below.
- Balance composition: one or more wide rounded account surfaces lead, followed by compact circular or pill actions and a single-column transaction or task list.
- Amount-entry composition: large numeric value, attached currency selector, short explanatory context, native numeric keyboard, and one green lower action.
- Review composition: calm white or gray surface with a sequence of full-width labeled rows, explicit values, thin dividers, and a single decisive action after the facts.
- Utility-list composition: bold black title above tall rows with compact icon, label, optional secondary value, switch, or chevron.
- Card composition: a physical card render preserves its ratio and is surrounded by circular actions, clear status, and dense control rows.
- Empty or educational composition: a centered tactile object or compact branded panel replaces dense data while retaining substantial negative space.
- Modal composition: rounded bottom sheet or system dialog appears over a muted scrim, using the same green action and black/gray hierarchy.

# Navigation appearance

The primary bottom bar contains four evenly spaced icon-and-label items on a white or near-black base. The selected item gains a soft rounded filled island and stronger weight; inactive items remain simple and muted. Detail screens use minimal leading back or close controls, black titles in light mode, and warm-white titles in dark mode. Sheets use large top corners and a subtle drag indicator. Segmented controls, chips, and compact circular actions use pale-gray or charcoal fills with green reserved for selected or decisive state.

# Components

- Primary action: 50–54 points tall, full or near-full width, acid-green fill, pill radius, and centered near-black semibold label. Pressing darkens the green; disabled state uses muted gray while preserving size.
- Balance card: white or pale-gray surface in light mode, charcoal in dark mode, 18–22 point radius, 16-point padding, compact currency identity, and prominent tabular amount.
- Financial row: approximately 52–60 points tall with black or white primary label, muted descriptor, aligned trailing value, and thin divider or spacing. Status remains explicit in text.
- Amount field: oversized tabular input, compact attached currency chip, generous vertical space, and a visible focus state that does not use system blue.
- Selector chip: pill-shaped pale-gray, white, charcoal, or green control with compact label and optional flag or icon. Selected state has unambiguous fill contrast.
- Circular action: at least 44 points, pale or green-tinted fill, simple dark icon, and optional short caption below.
- Authored object panel: one centered 3D prop on a quiet white, green, or dark-green field, with no competing controls placed over the object.

# Imagery and icons

The recurring authored imagery uses isolated tactile 3D objects with glossy hand-painted or marbled surfaces. Locks, calendars, wallets, bells, paper planes, and payment-card objects appear as simple symbolic props under soft studio light. Saturated cyan, pink, orange, yellow, violet, and green textures contrast with quiet white or dark-green fields. The object typically occupies a central upper region and is surrounded by substantial negative space.

Physical card renders retain their natural ratio; flags and avatars stay circular or uncropped; QR, passkey, and social-login icons remain functional. A small number of travel stamp graphics and editorial photographs act as contextual exceptions rather than redefining the core imagery. The authored objects cannot be omitted where they define the composition. Temporary imagery must preserve object scale, placement, texture density, and palette.

# States

Observed states include empty or low-data lists, blurred personal values, disabled send actions, active toggles, selected bottom tabs, modal scrims, destructive delete actions, native sign-in prompts, card-control states, and a complete dark appearance. These preserve the same rounded surfaces, explicit labeled facts, green action priority, and restrained secondary color.

Disabled actions become gray; destructive actions use red; active toggles and selected chips use green. Empty and educational states may introduce the authored 3D object while critical review rows remain illustration-free. Dark appearance swaps surface and text values without changing hierarchy or component geometry.

# iOS adaptation

Extend warm white, deep green, or near-black through the safe areas and reserve the lower inset for the tab bar or primary action. Use vertical scroll containers for account lists, forms, controls, and review surfaces. Keep pinned actions clear of the keyboard and final row. On compact widths, stack cards and move trailing metadata below labels before reducing type.

All chips, circular actions, tab items, switches, and rows need at least 44-point targets. VoiceOver should announce amount, currency, label, state, and action in a stable order; authored decorative fragments should not become separate accessibility elements. Preserve native numeric keyboards, sign-in prompts, QR/camera surfaces, permission dialogs, and sheets. Support both observed light and dark appearances with matched contrast and unchanged green action priority.

# Anti-generic checklist

- Do not replace acid green with default blue or a generic fintech purple.
- Do not turn explicit financial rows into unlabeled decorative cards.
- Do not use one neutral sans-serif hierarchy for branded hero moments; preserve the condensed display contrast.
- Do not replace tactile marbled 3D objects with SF Symbols, generic vector people, or flat spot illustrations.
- Do not apply green to every card, icon, and data value.
- Do not ship an unstyled `TabView`; preserve the four-item bar and selected filled island.
- Do not use uniform corner radii for pills, cards, sheets, and circular actions.
- Do not place illustration inside critical amount, fee, review, or confirmation rows.

</design-context>
