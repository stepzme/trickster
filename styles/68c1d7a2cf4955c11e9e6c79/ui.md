<design-context>
---
version: 1
platform: iOS
name: Calendar-design-analysis
description: "A restrained system calendar using white schedule space, thin gray time rules, coral-red navigation and current-time markers, black event text, and pale grouped sheets. Day, week strip, calendar list, event creation, search, inbox, widgets, and subscription management follow native iOS conventions."
colors:
  primary: "#FF3B30"
  on-primary: "#FFFFFF"
  primary-soft: "#FDECEA"
  accent: "#007AFF"
  accent-secondary: "#AF52DE"
  ink: "#111111"
  ink-muted: "#73777C"
  ink-subtle: "#A9ADB2"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F7"
  hairline: "#E2E2E7"
  semantic-success: "#34C759"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Calendar prioritizes time and event structure over branding. A compact week strip leads into a ruled day timeline; event creation and calendar management use native grouped sheets.

**Key Characteristics:**
- White schedule canvas.
- Coral-red navigation and today state.
- Thin hourly rules and current-time line.
- Pale grouped event form.
- System color dots for calendars.

# Non-negotiable visual invariants

- Sampled screens consistently use white schedule canvas.
- Navigation consistently uses coral-red navigation and today state.
- The reference consistently shows thin hourly rules and current-time line.
- The reference consistently shows pale grouped event form.
- Sampled screens consistently use system color dots for calendars.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Today, add, done, and current-time emphasis.
- **Accent** ({colors.accent}): System calendar identity and linked actions.
- **Secondary Accent** ({colors.accent-secondary}): Alternative calendar color.

### Surface
- **Canvas** ({colors.canvas}): Day, search, inbox, and calendar management.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family

- **SF Pro Display** — date and event headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36 points bold for major statements, 22 points bold for screen headings, 16 points semibold for cards, 14 points regular for detail, and 15 points semibold for primary actions.

### Principles

- Keep time alignment exact.
- Use color to identify calendars consistently.
- Make current day and time visible.
- Let event titles outrank metadata.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 16 points edge gutters, 12 points control gaps, and 16 points card padding.

### Grid & Container

The day view places a week strip above a full-width hourly grid. Event forms and calendar lists use grouped single-column sheets.

### Whitespace Philosophy

Keep empty time genuinely empty; use subtle rules rather than filled containers.

Surface hierarchy observed in the source:

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use flat schedule layers and native modal sheets; avoid decorative elevation.

# Navigation appearance

Back, list, search, and add sit at the top; Today, Calendars, and Inbox remain available below the schedule.

# Components

### Buttons

Text actions handle Today, Add, Done, and Cancel; toggles and inline selectors use native controls.

### Cards & Containers

Events occupy time-aligned blocks. Forms group title, time, repeat, calendar, invitees, alerts, attachments, URL, and notes.

### Inputs & Forms

Use labeled rows, date and time pickers, toggles, search, and system keyboard behavior.

# Imagery and icons

Use flat schedule layers and native modal sheets; avoid decorative elevation.

No photography or illustration. Color dots, icons, and timeline rules carry all visual state.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show today, current time, all-day, busy/free, alert, invitation, hidden calendar, and offline subscription explicitly.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44 points.

### Collapsing Strategy

Preserve selected date, current time, event blocks, and add action. Reduce auxiliary labels before time precision.

### Image Behavior

No images are used; attachments appear as explicit event content rather than decoration.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't fill empty schedule space.
- Don't invent decorative illustrations.
- Don't rely on color without labels.
- Don't hide recurrence end rules.
- Don't overload the week strip.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
