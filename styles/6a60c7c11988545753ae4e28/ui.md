<design-context>
---
version: 1
platform: iOS
name: GO-Club-design-analysis
description: "A full-screen electric-blue fitness dashboard with oversized metrics, white and near-black rounded sheets, translucent pill navigation, neon yellow and mint accents, and sparse rendered habit objects."
colors:
  canvas: "#1748E8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#83B4FF"
  accent-primary: "#2457F5"
  accent-secondary: "#DDF34F"
  text-primary: "#0A0B0D"
  text-secondary: "#5B6470"
  divider: "#A6C6FF"
  destructive: "#D84B56"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 52, fontWeight: 700, lineHeight: 54}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 20
  control-gap: 12
rounded:
  control: 16
  card: 26
  sheet: 34
  pill: 999
components:
  oversized-metric-card: {fill: "#FFFFFF or near-black", value: "52-point bold", corners: "large"}
  white-pill-action: {fill: "#FFFFFF", text: "#0A0B0D", shape: "capsule"}
  translucent-segment: {fill: "translucent blue", selected: "white or strong contrast", shape: "capsule"}
  neon-progress-card: {fill: "#DDF34F", text: "#0A0B0D", corners: "large"}
  glass-pill-tab-bar: {fill: "translucent pale blue", selected: "brighter nested pill"}
---

# Overview

GO Club turns habit metrics into saturated full-screen environments. Electric cobalt and blue-purple gradients fill the safe areas, while one oversized number, one large rounded white or dark sheet, and a small set of pill controls dominate each screen. Neon yellow and mint punctuate plans, progress, and promotional cards. Sparse rendered objects and card art support the metric rather than forming a continuous illustration language.

# Non-negotiable visual invariants

- Electric blue or a blue-purple gradient is a full-screen environment, not a small header accent.
- One primary metric or countdown uses very large bold numerals and visually outranks every supporting label.
- Core metric content sits in a large white rounded card or bottom sheet; dark appearance changes this mass to near-black while preserving the blue field.
- Primary completion actions are white pills with dark text, while secondary controls use translucent or pale blue layers.
- Neon yellow or mint creates a large progress or promotional mass and is not diluted into generic pastel decoration.
- Bottom navigation is a floating translucent pill with a brighter nested selected state, not a standard edge-to-edge tab bar.
- Primary screens remain sparse: one habit, one major metric, and only a few supporting modules are visible at once.
- Settings and modal controls retain the same large radii, blue context, and high-contrast selection rather than reverting to an unstyled iOS form.

# Color and surfaces

The main canvas is saturated cobalt, often deepening through a vertical blue or black-to-blue gradient. White forms the clearest metric sheets, primary buttons, and selected pills. Pale and translucent blues create secondary controls, charts, sliders, and navigation. Neon lemon-yellow and mint mark energetic progress, subscription, weather, or program content. Dark appearance changes major sheets and cards to near-black with white and gray text while retaining the saturated blue background.

Black text is used on white, pale blue, or neon surfaces; white text sits on blue or black. Dividers are subtle blue-white lines or dots. Generic system blue on a white canvas, gray grouped backgrounds, or multicolor semantic noise would remove the reference's dominant color-mass structure.

# Typography

Metrics, countdowns, and progress values use oversized bold display numerals, often occupying much of the upper or central screen. Habit titles are compact bold headings. Units, dates, range labels, and navigation captions are much smaller, with restrained weight. White or black text changes according to the surface rather than relying on outlines. Copy blocks remain short and factual.

Use SF Pro Display with tabular numerals for hero values and SF Pro Text for labels and controls. Under Dynamic Type, preserve metric dominance, let supporting labels wrap, and scroll the full content rather than shrinking the main number until it resembles body text. Avoid several near-equal title sizes that blur the hierarchy.

# Screen composition

Primary dashboards fill the entire safe-area-backed canvas with blue. A compact top zone holds close/back, title, status, or time-range controls. The main metric occupies the upper or middle region, often followed by a large rounded white or dark card containing progress, chart, goal, or controls. A floating pill tab bar or completion control sits above the bottom safe area. Typical horizontal inset is about 20 points.

Metric archetype: one huge value and compact unit sit against the blue field or inside a large rounded sheet, supported by a chart, target line, or short status row.

Input archetype: a large current amount or target is paired with a slider, stepper, or add control; secondary options remain in translucent pill groups.

Plan archetype: countdown or schedule information shares the screen with a large neon or image-led program card and a strong bottom action.

Statistics archetype: time-range segments sit above a chart or dense metric rows while the primary value remains dominant.

Settings archetype: rows, toggles, confirmation dialogs, and theme pickers appear on white or dark rounded surfaces while the cobalt environment remains visible around them.

# Navigation appearance

Primary-level navigation is a translucent rounded pill floating above the bottom safe area. Selected content sits in a brighter or more opaque nested pill; inactive icons and labels remain legible but quieter. Top controls are compact circular back or close buttons, often light or translucent against blue. Time ranges and pricing options use pill segments with a strong filled selection. Popovers and alerts can use native blur and dimming but preserve the saturated context and rounded geometry.

# Components

The primary metric card is a very large white or near-black rounded rectangle with a hero number, compact label, and only necessary chart or goal detail. Primary actions are white capsules with dark semibold text. Secondary buttons and add controls use translucent blue, pale blue, or high-contrast circular fills. Segmented controls sit inside blue capsules with a white or brighter selected segment.

Charts use thin high-contrast lines, bars, or dotted guides and avoid heavy axes. Water and goal controls use large sliders, steppers, toggles, and centered values. Neon plan or promo cards use large rounded corners, black text, and contained object or card art. Subscription selectors, customization grids, theme popovers, sign-in controls, settings rows, loading indicators, and confirmation alerts reuse the same strong radii and sparse spacing. Disabled states reduce opacity while preserving size.

# Imagery and icons

No photography appears in the sampled screens. Visual assets include a runner-and-city onboarding scene, isolated shoe and bottle renders, a circular weather graphic, neon promotional card art, subscription graphics, widget previews, logos, and small line icons. These assets are compositionally important inside their specific screens and should not be dropped when final assets are pending, but they vary in medium and role rather than forming one stable standalone illustration system.

Keep object renders large, isolated, and surrounded by negative space. Icons are simple, high-contrast, and subordinate to metrics. Do not replace shoes, bottles, weather art, onboarding art, or subscription graphics with arbitrary SF Symbols when their visual mass is required.

# States

Observed states include onboarding goals and steppers, populated steps and water metrics, statistics ranges, water-entry sliders, subscription selection and countdown, plan and plan-breakdown cards, trend views, profile and settings, light/dark theme selection, shoe and bottle customization, loading spinner, success alert, sign-in sheets, confirmation dialogs, deletion and logout warnings, toggles, and external-link rows. Dark appearance retains the cobalt environment and changes large sheets to near-black. Selected pills and options use strong white or brighter fills rather than thin outlines.

# iOS adaptation

Use full-bleed backgrounds that extend under both safe areas, then inset interactive content. Keep hero metrics and large cards responsive to height; on compact screens, place secondary rows in a vertical `ScrollView` while leaving the main value visually dominant. Floating navigation and actions need independent bottom safe-area padding. Provide at least 44-point hit areas for circular buttons, segments, steppers, toggles, and tab items.

VoiceOver order should follow screen title or context, primary metric and unit, goal or chart summary, controls, supporting cards, then bottom navigation. Charts need textual summaries and color-independent meaning. Dynamic Type may expand white or dark sheets and settings rows. Implement the observed dark surfaces explicitly rather than applying automatic inversion. Native alerts, sign-in, and permission transitions can remain native while returning to the same blue environment.

# Anti-generic checklist

- Do not reduce cobalt to a header over a generic white card stack.
- Do not shrink the hero metric to make room for secondary copy or modules.
- Do not use a standard edge-to-edge `TabView` bar instead of the floating glass pill.
- Do not use default blue buttons on white; preserve white actions and translucent blue controls.
- Do not turn primary habit screens into dense settings dashboards.
- Do not replace specific object or card artwork with arbitrary SF Symbols or emoji.
- Do not flatten white, translucent blue, neon, and near-black surfaces into one card style.
- Do not add motivational prose that duplicates a visible metric, goal, countdown, or status.

</design-context>
