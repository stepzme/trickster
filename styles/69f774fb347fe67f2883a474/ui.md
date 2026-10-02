<design-context>
---
version: 1
platform: iOS
name: BelkaCar-design-analysis
description: "A map-first mobility interface layering crisp white rounded sheets, realistic vehicle imagery, compact black utility type, and royal-blue actions over cool gray-blue cartography, with sparse floating controls and an icon-led bottom tool strip."
colors:
  canvas: "#EEF2F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E8EDF3"
  accent-primary: "#0B5FE8"
  accent-secondary: "#159EEB"
  text-primary: "#111318"
  text-secondary: "#737984"
  divider: "#DCE1EA"
  destructive: "#E74747"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
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
  control: 14
  card: 20
  sheet: 24
  pill: 999
components:
  primary-action: {background: "#0B5FE8", foreground: "#FFFFFF", radius: 14, minHeight: 52}
  secondary-action: {background: "#FFFFFF", foreground: "#111318", radius: 14, minHeight: 48}
  primary-card: {background: "#FFFFFF", radius: 20, padding: 16}
  navigation: {background: "#FFFFFF", radius: 16, minHeight: 56}
---

# Overview

BelkaCar keeps cool map tiles as the largest visual field and places current information in white sheets and floating controls. Royal blue establishes the primary action hierarchy, realistic vehicle cutouts create the main object focus, and compact black type keeps operational screens readable without turning them into a dashboard.

# Non-negotiable visual invariants

- Map tiles remain visible across the main operational composition and occupy most of the viewport behind controls.
- Current vehicle or status content rises in a white bottom sheet with 20–24-point top corners.
- Royal blue is the dominant actionable color; disabled controls preserve geometry in pale gray.
- Realistic vehicle photography or renders provide the principal object imagery and retain the complete silhouette.
- Map controls are compact white or translucent floating shapes with visually quiet shadows.
- A low white tool strip uses four compact icon-and-label items rather than a conventional colored tab bar.
- Dense lists and checklists use clear row rhythm, thin dividers, and restrained icon color rather than nested cards.

# Color and surfaces

Cool gray-blue map tiles form the base. White carries sheets, list panels, controls, and menu surfaces; pale gray-blue separates disabled or secondary content. Royal blue around `#0B5FE8` owns primary CTAs and selected progress, while brighter cyan-blue appears in secondary promotional or account surfaces. Orange from vehicle paint or isolated campaign material is imagery-led, not a control semantic. Black leads text and icons; gray handles metadata. Red is reserved for destructive or problem states. Default iOS blue without the deeper brand tone, generic grouped gray, or broad decorative gradients would break the reference.

# Typography

Use SF Pro Display for 22–28-point screen and vehicle titles and SF Pro Text for 15–17-point rows and 12–13-point metadata. Buttons use centered semibold labels. Numeric time or status values may scale toward 36 points but remain compact and tabular. Titles are sentence case and left aligned inside sheets. Dynamic Type expands rows and sheets while preserving the current title, vehicle image, and primary action as the main scan targets.

# Screen composition

Map screens extend edge to edge. Floating controls sit 12–16 points from screen edges, while a white bottom sheet or tool strip owns the lower safe area. Sheets use 16-point padding and 8–12-point internal gaps.

Observed archetypes include a photo-led onboarding screen with centered copy and a bottom action; a full-screen map with stacked floating controls and a low tool strip; a vehicle detail sheet with a large contained car render; an expanded status or reservation sheet with compact rows and a fixed action; and a tall white menu panel with a blue-toned header followed by a single vertical list. Supporting screens remain one-column and operational.

# Navigation appearance

No standard tab bar was observed. The map uses a low white strip with four black icon-and-label items, plus separate floating circular map controls. Menu content appears as a tall modal drawer or sheet with rounded upper corners. Back and close controls are compact and high contrast. Selection uses blue icon or label emphasis. This section governs appearance only.

# Components

Primary actions are full-width royal-blue rounded rectangles, about 52 points high, with white semibold type. Disabled actions use pale gray with muted text. Map controls are white circular or pill shapes with compact black icons. Vehicle sheets combine a prominent realistic car render, bold title, smaller status metadata, and grouped rows. Progress and checklist rows use blue checks or plus marks; promo and tariff choices use compact segmented chips. Toggles remain native in behavior but inherit the blue accent. Countdown or active-status headers use large numbers above concise metadata.

# Imagery and icons

Map tiles and realistic vehicle renders are essential. Vehicle imagery is contained rather than cropped, with its full silhouette visible above sheet content; map markers are small and readable against the cool base. Onboarding may use a real photographic hero. Utility icons are solid or simple outlined black forms with blue only for active or positive status. The sampled screens do not establish a reusable authored illustration system, so isolated decorative stickers must not be expanded into one.

# States

Enabled and disabled CTAs keep identical size and placement. Selected chips and checklist progress use blue emphasis. Active status introduces prominent time or state information while retaining map context. Menu panels preserve white surfaces and compact list rows. Toggle states use blue for on and gray for off. Error or destructive states introduce red locally without recoloring the whole sheet.

# iOS adaptation

Extend map and onboarding imagery through safe areas while keeping controls clear of the status bar and home indicator. Use adaptive bottom sheets and internal scrolling on compact heights; preserve visible map context before reducing the vehicle image or main action. All map buttons, tool-strip items, checklist rows, and CTAs need 44-point hit regions. Keyboard and system permission UI remain native and return to the same context. VoiceOver reads current vehicle or status before actions. Dynamic Type expands sheets and list rows. Preserve the observed light appearance.

# Anti-generic checklist

- Do not replace the map-first canvas with a generic list dashboard.
- Do not omit or crop the realistic vehicle image when it is the sheet focal point.
- Do not use an unstyled `TabView` or default blue tint.
- Do not fill the map with opaque cards or ornamental shadows.
- Do not use arbitrary SF Symbols as vehicle imagery or campaign decoration.
- Do not make every field, card, sheet, and map control share one radius.
- Do not invent a decorative illustration system from isolated stickers.

</design-context>
