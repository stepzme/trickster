<design-context>
---
version: 1
platform: iOS
name: FocusPomo-design-analysis
description: "A warm focus timer built from cream and beige fields, orange-coral actions, muted brown rounded type, softly shadowed cards, oversized timer numerals, and expressive tomato mascots that recur through progress and rewards."
colors:
  canvas: "#FFF4E8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EAE3"
  accent-primary: "#F18452"
  accent-secondary: "#F6D64A"
  text-primary: "#514A44"
  text-secondary: "#8B837D"
  divider: "#E5DDD5"
  destructive: "#DF6758"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 58, fontWeight: 400, lineHeight: 62}
  title: {fontFamily: "SF Pro Rounded", fontSize: 32, fontWeight: 700, lineHeight: 38}
  section: {fontFamily: "SF Pro Rounded", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Rounded", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Rounded", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Rounded", fontSize: 12, fontWeight: 400, lineHeight: 17}
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
  primary-action: {fill: "orange-coral or dark taupe", shape: "wide pill", text: "high-contrast semibold"}
  secondary-action: {fill: "pale beige or white", shape: "pill", text: "muted brown"}
  primary-card: {fill: "white or cream", shape: "large rounded rectangle", elevation: "soft diffuse"}
  navigation: {fill: "light unobtrusive controls", selected: "orange or dark taupe", geometry: "pills and circles"}
---

# Overview

FocusPomo turns a timer into a warm collectible scene. Cream and beige fill most of the viewport, oversized rounded numerals remain the strongest information, and orange tomato characters accumulate beneath or around time and progress. White cards, muted brown text, pastel charts, and very soft shadows keep statistics, calendar, settings, and forms coherent without losing the playful mascot world.

# Non-negotiable visual invariants

- The active timer is the dominant typographic mass, centered with generous calm space around it.
- Warm cream or beige is the large background field; pure white is reserved for cards, sheets, and inputs.
- Orange-coral is the main action and mascot accent, paired with muted brown text rather than black.
- Rounded tomato characters visibly recur in timer, completion, reward, and progress contexts.
- Controls, cards, sheets, charts, and selectors use soft high-radius geometry and diffuse separation.
- Statistics and calendar screens increase information density but retain warm palette, rounded type, and playful progress marks.
- Primary actions remain high contrast and readable even when mascot imagery is prominent.

# Color and surfaces

The canvas is warm cream-to-peach, occasionally deepening around promotional or reward content. Pure white and pale beige form elevated cards, grouped settings, inputs, and sheets. Orange-coral anchors active actions and tomato imagery; yellow supports breaks, rewards, and attention. Text is dark warm taupe, with medium brown-grey for secondary labels and pale neutral for disabled content.

Charts may add restrained green, pink, blue, or yellow series while remaining pastel. Green signals positive progress; coral-red marks destructive or abandoned states. Dividers are low-contrast and often replaced by spacing. Cool system grey, default blue, stark black text, or saturated full-screen orange would break the observed warmth.

# Typography

Rounded sans typography is used throughout. Timer numerals are dramatically oversized and lighter in weight; section and reward headings are chunky and bold; controls and explanatory copy are smaller and muted. Time, counts, and durations use clear proportional or tabular alignment. Most content is centered in timer/reward contexts and left-aligned in cards, settings, and forms.

Use SF Pro Rounded for the hierarchy. Map timer numerals to a custom large-title style, major summaries to title, card headings to title 3/headline, controls to callout, and metadata to caption. Dynamic Type should expand supporting cards and form rows while keeping time, current selection, and primary action visually dominant.

# Screen composition

Timer screens use a sparse upper and middle field: small top controls, huge centered time, and a tomato pile or mascot zone below, followed by a prominent action. Onboarding combines a central mascot or device/watch mockup with a bottom orange pill. Statistics stack large rounded metric and chart cards; calendars place a compact day rail above vertically stacked colored blocks; settings use rounded grouped panels; forms and pickers rise in large bottom sheets.

Use about 16-point side insets, 12–16-point gaps within groups, and 24–32-point gaps between timer, imagery, cards, and actions. Scroll longer analytics, settings, and forms while reserving safe-area space for bottom actions. Dense progress views may use more characters or marks, but active focus screens remain calm and open.

# Navigation appearance

Navigation chrome is visually light: small circular or pill top controls, a rounded day selector, compact plus actions, and contextual sheet controls. Modal sheets are white or cream with large top radii and grab handles. Selectors and dropdowns are rounded popovers with clear orange or dark selected state. Native switches live inside soft cards. This defines appearance only, not destinations or sequence.

# Components

Primary actions are wide orange-coral or dark taupe pills with high-contrast semibold labels. Secondary controls use white or beige fills. Timer composition combines oversized time, short context, mascot imagery, and one clear action rather than nesting them in a generic card. Statistics cards use large radii, pale chart fills, compact legends, and one strong number.

Calendar blocks are softly colored rounded rectangles beneath a pill day selector. Tag rows use a small color cue, label, and explicit checkmark selection. Settings groups use spacious rows, muted icons, and native switches. Add-session forms and date/time pickers appear in large sheets, with white rounded fields and clear orange focus. Disabled or locked content becomes pale but retains structure.

# Imagery and icons

The authored tomato characters are a structural visual layer, not decoration. Soft rounded tomatoes with tiny faces and limbs appear singly as a mascot, in piles beneath the timer, as repeated progress marks, and alongside rewards or trophies. They use warm orange-red bodies, green leaves, cream highlights, and simple dimensional shading. Product mockups in onboarding are separate photographic/rendered content.

Mascot imagery may occupy roughly a quarter of a timer or reward screen and must not be omitted while assets are pending. Any temporary asset must preserve placement, count/density, crop, palette, and visual weight. Utility icons remain small and quiet so they do not compete with time or characters.

# States

Observed states include notification permission, active focus, completion/reward, subscription offer, locked chart/calendar banners, selected tag rows, settings toggles, add-session forms, and date/time pickers. Active states use orange or dark taupe; disabled and locked states use pale beige/grey; positive progress may use green or yellow; destructive actions use coral-red. The warm canvas, rounded typography, and mascot language remain consistent.

# iOS adaptation

Extend the warm canvas through safe areas. Keep active time and primary action visible on compact heights, reducing nonessential gaps before shrinking the timer. Scroll analytics, calendars, settings, and forms; reserve bottom inset for sheet actions or persistent controls. Present notification prompts, keyboards, and pickers natively, then return to the same warm visual context.

All icon buttons, day items, tag rows, switches, and timer controls need at least 44-point targets. VoiceOver order should announce timer/state, current tag or context, primary action, then mascot/progress summary. Dynamic Type expands cards vertically. Preserve the observed warm light appearance rather than inventing a cool or unrelated dark theme.

# Anti-generic checklist

- Do not replace the warm cream field with a generic grouped-system grey background.
- Do not hide the exact timer behind mascot art or a generic progress ring.
- Do not omit tomato imagery or substitute emoji, SF Symbols, or programmatic fruit shapes.
- Do not use default blue tint, unstyled `TabView`, or sharp rectangular controls.
- Do not turn every section into the same white card or use one radius everywhere.
- Do not over-saturate the calm focus surface or make charts louder than the timer.
- Do not add motivational copy that duplicates visible time, progress, tags, or completion state.

</design-context>
