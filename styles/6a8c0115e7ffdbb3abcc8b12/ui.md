<design-context>
---
version: alpha
name: Amie-design-analysis
description: "A radically sparse productivity workspace that stacks a white calendar pane over a white todo pane, joined by a black navigation strip. Fine gray grid lines, restrained pink selection, and soft event pastels create hierarchy without conventional tab chrome."
colors:
  primary: "#EF5B82"
  on-primary: "#FFFFFF"
  primary-hover: "#DB466E"
  primary-soft: "#FCE8EE"
  ink: "#1D1D1F"
  ink-muted: "#77777A"
  ink-subtle: "#B5B5B8"
  canvas: "#F1F1F1"
  surface-1: "#FFFFFF"
  surface-2: "#F5F5F5"
  chrome: "#050505"
  hairline: "#E7E7E8"
  event-blue: "#C9F2F7"
  event-yellow: "#FFF1A8"
  event-orange: "#FFE2BF"
  semantic-success: "#7A7A7A"
  semantic-danger: "#E45561"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 650, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.20, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.4px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.chrome}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  calendar-pane: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 14px }
  todo-pane: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  control-strip: { backgroundColor: "{colors.chrome}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px }
  settings-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", height: 48px }
  footer: { backgroundColor: "{colors.chrome}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Amie turns calendar and todos into one physical workspace. The black divider is both navigation and structural contrast; everything else stays white, fine-lined, and deliberately quiet.

**Key Characteristics:**
- Vertically split calendar and todo panes.
- Black central control strip and divider.
- Pink current-day and timeline accent.
- Pastel event blocks.
- Large areas of untouched white space.
- Rounded full-screen sheets without tab chrome.

## Colors

### Brand & Accent
- **Pink** ({colors.primary}): Current date, timeline, and small brand emphasis.
- **Black** ({colors.chrome}): Structural divider, navigation, and primary action.
- **Event Pastels**: Calendar differentiation without saturation.

### Surface
- **Canvas** ({colors.canvas}): Gap and background around floating panes.
- **Surface 1** ({colors.surface-1}): Calendar, todos, and settings.
- **Surface 2** ({colors.surface-2}): Selected row and quiet group.
- **Hairline** ({colors.hairline}): Calendar grid and separators.

### Text
- **Ink** ({colors.ink}): Todos, dates, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Times, metadata, and secondary labels.
- **Ink Subtle** ({colors.ink-subtle}): Completed and disabled content.

### Semantic
- **Success** ({colors.semantic-success}): Completed todo check and de-emphasis.
- **Danger** ({colors.semantic-danger}): Logout or destructive action.
- **Overlay** ({colors.semantic-overlay}): Search blur and modal scrim.

## Typography

### Font Family

- **System Sans** — calendar, todos, onboarding, search, and settings.
- **System Mono** — imported IDs only; not visible in primary UI.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Onboarding statement |
| `{typography.display-md}` | 24px | 650 | Settings heading |
| `{typography.headline}` | 20px | 650 | Sheet heading |
| `{typography.card-title}` | 15px | 600 | Todo and setting title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 10px | 400 | Time and calendar metadata |
| `{typography.button}` | 14px | 500 | Actions |

### Principles

- Keep date and time metadata light.
- Let todo titles carry the primary reading weight.
- Use uppercase only for small onboarding eyebrows.
- Avoid oversized headings inside the workspace.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Helvetica Neue**.

## Layout

### Spacing System

Use a 4px base. Pane gutters are 14–16px, todo rows 10–12px, and calendar grid follows hour-based vertical rhythm.

### Grid & Container

The upper pane is a day or week timeline. The lower pane is a task list. A resizable divider changes their ratio; both remain one-column on mobile.

### Whitespace Philosophy

Whitespace is the dominant organization tool. Avoid filling empty time or task areas with decorative content.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Light gray canvas | App background |
| 1 | White rounded pane | Calendar and todos |
| 2 | Black divider strip | Navigation and resize boundary |
| 3 | Blurred overlay | Search and modal state |

### Decorative Depth

Use rounded pane silhouettes and subtle shadow only at their edges. Avoid gradients and decorative illustrations.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Event block and date chip |
| `{rounded.sm}` | 10px | Rows and buttons |
| `{rounded.md}` | 14px | Search and settings group |
| `{rounded.lg}` | 20px | Calendar and todo panes |
| `{rounded.pill}` | full | Control strip and Pro banner |

### Photography & Illustration Geometry

The core workspace uses no imagery. Avatars remain circular; empty search uses one faint symbolic glyph behind the query field.

## Components

### Buttons

Primary onboarding and Pro actions use black. Workspace actions are compact icon controls in the central strip; destructive actions use text labels.

### Pricing Tabs

No pricing tabs were observed. Calendar switching occurs through the central strip; Pro is one compact banner in profile.

### Cards & Containers

Calendar and todo panes are the primary containers. Event blocks use pastel fill and a stronger leading edge. Settings rows use icon, label, and chevron.

### Inputs & Forms

Search sits at the bottom above the keyboard and filters both data types. Onboarding forms use full-width rows and black continuation actions.

### Status & Build Page

Completion uses a check plus muted text and a collapsible Done group. Current time uses a fine pink rule across the calendar.

### Navigation

Profile, search, calendar label, pane grabber, and creation live in the black central strip. No conventional bottom tabs are used.

### Footer

The lower todo pane reaches the safe area. In search, the query field becomes the functional footer above the keyboard.

## Do's and Don'ts

### Do

- Keep calendar and todos visible together.
- Make the divider clearly draggable.
- Use fine grid lines and restrained pastels.
- Preserve completed tasks in context.
- Leave empty schedule space empty.

### Don't

- Don't add a conventional tab bar.
- Don't saturate event colors.
- Don't fill blank time with recommendations.
- Don't hide the current-time rule.
- Don't separate search by data type.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Place panes side by side if useful |
| Compact | 390–767px | Default vertical split |
| Small | <390px | Increase minimum pane height and wrap metadata |

### Touch Targets

Maintain 44px for checkboxes, divider controls, search, creation, and settings rows.

### Collapsing Strategy

Preserve both panes and allow resizing. Collapse event metadata before hiding todo context; keep the control strip usable.

### Image Behavior

No content imagery is required. Avatars use cover; symbolic empty-state glyphs remain centered and faint.

## Iteration Guide

1. Establish the two-pane structure and divider.
2. Build calendar grid and event blocks.
3. Add todo list and completion state.
4. Add unified search and profile settings.
5. Apply pink and event pastels last.

## Known Gaps

- Exact tokens and font names were inferred visually.
- The 44-flow inventory was complete and all top-level flows were inspected.
- Several previewed transitions were video-only; motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
