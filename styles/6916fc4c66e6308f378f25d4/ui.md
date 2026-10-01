<design-context>
---
version: 1
platform: iOS
name: Joi-design-analysis
description: "A sparse monochrome planner built on expansive warm-white or charcoal fields, oversized weekday type, hairline task structure, tiny coral time markers, tall rounded sheets, and softly translucent bottom navigation."
colors:
  canvas: "#FBF9FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EDEF"
  accent-primary: "#EF625E"
  accent-secondary: "#2F6FEF"
  text-primary: "#1C1A1C"
  text-secondary: "#817C80"
  divider: "#E5E1E4"
  destructive: "#E24B4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 22
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 30
  pill: 999
components:
  day-header: {fill: "clear", geometry: "oversized weekday with a tiny coral marker"}
  date-strip: {fill: "clear", geometry: "seven evenly spaced compact date cells"}
  timeline-row: {fill: "clear", geometry: "minimal row with circular checkbox and faint divider"}
  editor-sheet: {fill: "white or charcoal", geometry: "tall rounded bottom sheet with generous empty space"}
  bottom-dock: {fill: "soft translucent surface", geometry: "low floating icon dock"}
---

# Overview

Joi uses typography and empty space as its main visual material. An oversized weekday anchors the top, a compact date strip follows it, and minimal task rows sit directly on a warm-white canvas. Tall rounded sheets and a quiet translucent bottom dock supply the only substantial surfaces. The same sparse hierarchy inverts to charcoal and white in the observed dark appearance.

# Non-negotiable visual invariants

- Large quiet areas remain visible; the interface never fills unused space with cards or decorative copy.
- The current weekday is oversized and paired with a tiny coral dot or similarly small temporal marker.
- A seven-column horizontal date strip sits directly beneath the dominant day heading.
- Task rows remain visually minimal: circular checkbox or small icon, concise title, faint divider, and optional right-aligned time.
- Creation and editing use tall rounded bottom sheets with a focused top cluster and generous open space below.
- Primary onboarding or premium actions use solid black pills in light appearance and high-contrast inverse treatment in dark appearance.
- Small system-like icons and tiny status marks support the typography; illustrative scenes do not occupy the viewport.
- Dark appearance preserves the exact sparse composition while exchanging warm white for charcoal and primary text for white.

# Color and surfaces

The light canvas is a warm near-white field with white sheets and very pale gray translucent controls. Dark appearance uses charcoal rather than a colorful replacement and keeps text nearly white. Near-black carries the main day and task hierarchy; medium gray carries metadata and inactive dates; hairline gray creates barely visible row structure. Coral is a tiny day/status signal, not a broad button color. Blue is limited to focused system-like selection or upgrade emphasis, and green may appear in native toggles. Default grouped gray backgrounds, large colored panels, or pervasive iOS blue would overwhelm the reference.

# Typography

Use SF Pro Display for the oversized day and major onboarding headings, and SF Pro Text for task rows, metadata, and controls. Scale contrast establishes hierarchy: the day is roughly 40 points and bold; sheet titles are around 21–30 points; rows remain 15–17 points; date and metadata labels are 12 points. Keep copy concise and mostly left-aligned. Use tabular numerals for times and dates. Under Dynamic Type, let the date strip maintain equal columns and allow task titles to wrap before shrinking the day heading into the same scale as body text.

# Screen composition

Daily timeline archetype: use roughly 20–24-point horizontal insets, place the oversized day near the top safe area, align the seven-column date strip directly below, and let minimal rows occupy only as much height as their content requires. A large unfilled middle region is valid when the day is sparse; the low translucent dock remains clear of the home indicator.

Creation or edit archetype: raise a tall sheet from the bottom with large top corners. Cluster the segmented choice, title, and essential fields near the top, use compact native pickers or lists when needed, and preserve a calm open field rather than introducing decorative cards.

Calendar or settings archetype: use a restrained grid or direct list on the same warm-white/charcoal field. Focused rows may use soft gray fills, but the screen should still read as one continuous surface. Scroll long lists vertically and avoid stacking independent card containers.

# Navigation appearance

Top chrome is minimal: a small back chevron or text control sits apart from the dominant title. The bottom navigation is a low, softly translucent or blurred dock with three compact icons and a centered add affordance; selected states rely on contrast rather than a large colored capsule. Sheets use broad white or charcoal planes with large top radii and subdued dismiss controls. This section defines appearance only; routes and information architecture come from the consuming product.

# Components

The day header has no container: bold black or white type sits directly on the canvas with a tiny coral marker. Date cells are equal-width, compact, and mostly transparent, using type contrast for selection. Timeline rows use circular checkboxes, concise labels, faint dotted or hairline separation, and optional right-aligned time. Completed rows keep their position and become quieter through reduced opacity, checkmarks, or strike-through. Editor sheets use large top corners, minimal borders, generous spacing, and controls restyled into monochrome or pale-gray surfaces. Primary actions are solid black rounded pills in light appearance; secondary actions remain tonal or text-only. Native toggles, wheels, and rating prompts may remain behaviorally native but should sit within this restrained hierarchy.

# Imagery and icons

No independent authored illustration system is part of the observed visual language. Use tiny system-like calendar, location, list, sun/moon, and completion glyphs with consistent optical weight. App-icon choices may appear as small square previews, but they do not become decorative hero imagery. Blurred abstract panels remain subtle background surfaces. Do not introduce photography, character art, or large symbolic scenes to occupy deliberate empty space.

# States

Completed tasks remain in place with a checkmark, strike-through, or reduced opacity. Selected days and focused calendar values use concise contrast or limited blue emphasis while the coral current-day marker remains small. Empty days retain the same day header, date strip, and open canvas rather than adding explanatory artwork. Editing and premium states appear in rounded sheets; dark appearance changes canvas and text values but preserves geometry, spacing, and hierarchy. Native rating or legal views may appear as system surfaces without redefining the surrounding product style.

# iOS adaptation

Extend the warm-white or charcoal canvas through both safe areas. Keep day headings and date strips within readable top insets and place the bottom dock above the home indicator. Visible checkboxes and icons may be small, but every interactive target must reach at least 44 points. Use vertical scrolling for long timelines, settings, and sheets; keep the seven date columns stable on compact widths. Present keyboards, date wheels, rating prompts, and system sheets natively, then return to the same sparse context. VoiceOver order follows day, date strip, task rows, then bottom actions. Dynamic Type may increase row height and sheet scrolling without turning the timeline into cards. Support both observed light and charcoal appearances with identical composition.

# Anti-generic checklist

- Do not wrap every task or setting in a white card.
- Do not fill open space with mood copy, empty-state illustration, or promotional panels.
- Do not make coral the fill for every primary control.
- Do not use heavy shadows, visible gradients, or thick separators.
- Do not substitute a default labeled `TabView` for the low translucent icon dock.
- Do not use default `Form` section chrome for creation and settings surfaces.
- Do not make heading, task, metadata, and date text nearly the same size.
- Do not replace the oversized weekday and tiny temporal marker with a generic navigation title.

</design-context>
