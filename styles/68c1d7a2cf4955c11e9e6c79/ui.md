<design-context>
---
version: alpha
name: Calendar-design-analysis
description: "A restrained system calendar using white schedule space, thin gray time rules, coral-red navigation and current-time markers, black event text, and pale grouped sheets. Day, week strip, calendar list, event creation, search, inbox, widgets, and subscription management follow native iOS conventions."
colors:
  primary: "#FF3B30"
  on-primary: "#FFFFFF"
  primary-hover: "#D93229"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Calendar prioritizes time and event structure over branding. A compact week strip leads into a ruled day timeline; event creation and calendar management use native grouped sheets.

**Key Characteristics:**
- White schedule canvas.
- Coral-red navigation and today state.
- Thin hourly rules and current-time line.
- Pale grouped event form.
- System color dots for calendars.

## Colors

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

## Typography

### Font Family

- **SF Pro Display** — date and event headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep time alignment exact.
- Use color to identify calendars consistently.
- Make current day and time visible.
- Let event titles outrank metadata.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

The day view places a week strip above a full-width hourly grid. Event forms and calendar lists use grouped single-column sheets.

### Whitespace Philosophy

Keep empty time genuinely empty; use subtle rules rather than filled containers.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use flat schedule layers and native modal sheets; avoid decorative elevation.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

No photography or illustration. Color dots, icons, and timeline rules carry all visual state.

## Components

### Buttons

Text actions handle Today, Add, Done, and Cancel; toggles and inline selectors use native controls.

### Pricing Tabs

Today, Calendars, and Inbox form the bottom text navigation; day selection uses the week strip.

### Cards & Containers

Events occupy time-aligned blocks. Forms group title, time, repeat, calendar, invitees, alerts, attachments, URL, and notes.

### Inputs & Forms

Use labeled rows, date and time pickers, toggles, search, and system keyboard behavior.

### Status & Build Page

Show today, current time, all-day, busy/free, alert, invitation, hidden calendar, and offline subscription explicitly.

### Navigation

Back, list, search, and add sit at the top; Today, Calendars, and Inbox remain available below the schedule.

### Footer

Text navigation remains above the safe area; modal forms use top Cancel and Add or Done.

## Do's and Don'ts

### Do

- Preserve time alignment.
- Keep calendar colors stable.
- Use native grouped forms.
- Show current time.
- Keep destructive unsubscribe explicit.

### Don't

- Don't fill empty schedule space.
- Don't invent decorative illustrations.
- Don't rely on color without labels.
- Don't hide recurrence end rules.
- Don't overload the week strip.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, key, and primary action at least 44px.

### Collapsing Strategy

Preserve selected date, current time, event blocks, and add action. Reduce auxiliary labels before time precision.

### Image Behavior

No images are used; attachments appear as explicit event content rather than decoration.

## Iteration Guide

1. Build day timeline and week strip.
2. Add event creation and editing.
3. Add calendar management.
4. Add search and inbox.
5. Add widgets and subscriptions.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 42 available flow names were inventoried; main day, new event, and calendars were image-reviewed.
- Month layout, invitation response detail, and widget interaction were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
