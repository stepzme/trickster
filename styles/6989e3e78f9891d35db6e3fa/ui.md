<design-context>
---
version: 1
platform: iOS
name: Haptic-design-analysis
description: "A lightweight activity journal built from bright white surfaces, a saturated violet gradient, softly blurred backdrops, rounded bottom sheets, colorful category icons, and sparse statistics. Logging is kept fast through large action bars, icon grids, and minimal text."
colors: { primary: "#713CFA", on-primary: "#FFFFFF", primary-soft: "#EEE7FF", accent: "#FF4F59", ink: "#171719", ink-muted: "#7D7D84", ink-subtle: "#B9BBC0", canvas: "#FFFFFF", surface-1: "#F7F7F8", surface-2: "#EFEFF2", hairline: "#E4E4E7", semantic-success: "#47B56C", semantic-warning: "#F3B546", semantic-danger: "#E1515C", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.5 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  activity-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  icon-tile: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 12 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Haptic is a fast activity journal that turns life events into colorful icons, ratings, streaks, and simple timelines.

# Non-negotiable visual invariants

- Make logging possible in one focused sheet.
- Keep category color consistent.
- Show streak and rating near the activity.
- Use full-screen timelines and statistics with rounded bottom sheets for choosing, logging, or editing an activity.
- Leave generous blank space around the current logging task and keep dense icon grids visually even.

# Color and surfaces

Use a violet-to-purple gradient for primary logging actions; assign bright colors to activity categories.

Keep main screens white and use pale gray for search, disabled controls, and secondary cards.

Use near-black for titles and values, gray for metadata, and very light gray for unavailable choices.

Use green for granted or completed state, red for destructive or denied state, and system blue for permission actions.

# Typography

Use SF Pro Display for onboarding and activity titles and SF Pro Text for controls, notes, and statistics.

Use 27–32 points for onboarding statements, 22 points for screen titles, 16 points for activities, 14 points body, and 10–12 points labels.

Keep activity name, date, rating, and streak instantly scannable; avoid long instructional copy after onboarding.

Use the platform sans or Inter.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 12 points grid gaps, and 16 points sheet padding.

Use full-screen timelines and statistics with rounded bottom sheets for choosing, logging, or editing an activity.

Leave generous blank space around the current logging task and keep dense icon grids visually even.

Use translucent violet gradients and blurred activity color rather than illustration or texture.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use the timeline or activity overview as the stable base; open logging and editing in sheets.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use wide violet gradient actions for Save or rating submission and pale circular confirmation controls.

Use activity rows, icon tiles, statistic cards, timeline entries, and rounded editing sheets.

Keep search, rename, comments, rating, date, icon, and color editing inside focused sheets.

Show today, weekly, monthly, yearly, streak, best streak, permission, and saved state explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Contain album art and activity symbols inside small rounded squares; do not introduce decorative scenes.

Contain album art and system icons without crop; allow gradient backgrounds to scale fluidly.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show today, weekly, monthly, yearly, streak, best streak, permission, and saved state explicitly.

Use green for granted or completed state, red for destructive or denied state, and system blue for permission actions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep icons, ratings, dates, segmented controls, save, and confirmation actions at least 44 points.
- Preserve activity, date, rating, note, and save; collapse secondary statistics and symbol choices first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not decorate blank space unnecessarily.
- Do not mix multiple gradients in one action.
- Do not hide permission requirements until save.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
