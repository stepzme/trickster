<design-context>
---
version: alpha
name: Haptic-design-analysis
description: "A lightweight activity journal built from bright white surfaces, a saturated violet gradient, softly blurred backdrops, rounded bottom sheets, colorful category icons, and sparse statistics. Logging is kept fast through large action bars, icon grids, and minimal text."
colors: { primary: "#713CFA", on-primary: "#FFFFFF", primary-hover: "#5F2EE2", primary-soft: "#EEE7FF", accent: "#FF4F59", ink: "#171719", ink-muted: "#7D7D84", ink-subtle: "#B9BBC0", canvas: "#FFFFFF", surface-1: "#F7F7F8", surface-2: "#EFEFF2", hairline: "#E4E4E7", semantic-success: "#47B56C", semantic-warning: "#F3B546", semantic-danger: "#E1515C", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.5px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  activity-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  icon-tile: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 12px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Haptic is a fast activity journal that turns life events into colorful icons, ratings, streaks, and simple timelines.

## Colors

### Brand & Accent
Use a violet-to-purple gradient for primary logging actions; assign bright colors to activity categories.

### Surface
Keep main screens white and use pale gray for search, disabled controls, and secondary cards.

### Text
Use near-black for titles and values, gray for metadata, and very light gray for unavailable choices.

### Semantic
Use green for granted or completed state, red for destructive or denied state, and system blue for permission actions.

## Typography

### Font Family
Use SF Pro Display for onboarding and activity titles and SF Pro Text for controls, notes, and statistics.

### Hierarchy
Use 27–32px for onboarding statements, 22px for screen titles, 16px for activities, 14px body, and 10–12px labels.

### Principles
Keep activity name, date, rating, and streak instantly scannable; avoid long instructional copy after onboarding.

### Note on Font Substitutes
Use the platform sans or Inter.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px grid gaps, and 16px sheet padding.

### Grid & Container
Use full-screen timelines and statistics with rounded bottom sheets for choosing, logging, or editing an activity.

### Whitespace Philosophy
Leave generous blank space around the current logging task and keep dense icon grids visually even.

## Elevation & Depth
Use soft blur and lifted white sheets over dimmed content; avoid heavy card shadows.

### Decorative Depth
Use translucent violet gradients and blurred activity color rather than illustration or texture.

## Shapes

### Border Radius Scale
Use 10px for search and chips, 14px for activity tiles, 20px for sheets, and full circles for compact actions.

### Photography & Illustration Geometry
Contain album art and activity symbols inside small rounded squares; do not introduce decorative scenes.

## Components

### Buttons
Use wide violet gradient actions for Save or rating submission and pale circular confirmation controls.

### Pricing Tabs
Use two-part segmented controls for Symbol and Color and compact date selectors.

### Cards & Containers
Use activity rows, icon tiles, statistic cards, timeline entries, and rounded editing sheets.

### Inputs & Forms
Keep search, rename, comments, rating, date, icon, and color editing inside focused sheets.

### Status & Build Page
Show today, weekly, monthly, yearly, streak, best streak, permission, and saved state explicitly.

### Navigation
Use the timeline or activity overview as the stable base; open logging and editing in sheets.

### Footer
Keep persistent chrome minimal so the primary logging bar can occupy the bottom action area.

## Do's and Don'ts

### Do
- Make logging possible in one focused sheet.
- Keep category color consistent.
- Show streak and rating near the activity.

### Don't
- Don't decorate blank space unnecessarily.
- Don't mix multiple gradients in one action.
- Don't hide permission requirements until save.

## Responsive Behavior

### Breakpoints
Use one focused column on phones, a wider centered sheet on tablet, and a capped journal column on desktop.

### Touch Targets
Keep icons, ratings, dates, segmented controls, save, and confirmation actions at least 44px.

### Collapsing Strategy
Preserve activity, date, rating, note, and save; collapse secondary statistics and symbol choices first.

### Image Behavior
Contain album art and system icons without crop; allow gradient backgrounds to scale fluidly.

## Iteration Guide
1. Build activities, timeline, logging sheet, and save action.
2. Add custom symbols, colors, comments, and ratings.
3. Add statistics, streaks, health access, and integrations.

## Known Gaps
- Tokens were inferred visually from representative mobile screens.
- All 112 image screens were inventoried through the screens fallback; 13 evenly distributed screens were image-reviewed.
- Preview entries were video-only, and named flow metadata was unavailable.

</design-context>
