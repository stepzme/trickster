<design-context>
---
version: 1
platform: iOS
name: Amie-design-analysis
description: "A radically sparse productivity workspace that stacks a white calendar pane over a white todo pane, joined by a black navigation strip. Fine gray grid lines, restrained pink selection, and soft event pastels create hierarchy without conventional tab chrome."
colors:
  primary: "#EF5B82"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 650, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.20, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.4 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.chrome}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  calendar-pane: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 14 }
  todo-pane: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  control-strip: { backgroundColor: "{colors.chrome}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
  settings-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
---

# Overview

Amie turns calendar and todos into one physical workspace. The black divider is both navigation and structural contrast; everything else stays white, fine-lined, and deliberately quiet.

**Key Characteristics:**
- Vertically split calendar and todo panes.
- Black central control strip and divider.
- Pink current-day and timeline accent.
- Pastel event blocks.
- Large areas of untouched white space.
- Rounded full-screen sheets without tab chrome.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Vertically split calendar and todo panes.
- The reviewed screens show this treatment: Black central control strip and divider.
- The reviewed screens show this treatment: Pink current-day and timeline accent.
- The reviewed screens show this treatment: Pastel event blocks.
- The reviewed screens show this treatment: Large areas of untouched white space.
- The reviewed screens show this treatment: Rounded full-screen sheets without tab chrome.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — calendar, todos, onboarding, search, and settings.
- **System Mono** — imported IDs only; not visible in primary UI.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38pt | 700 | Onboarding statement |
| `{typography.display-md}` | 24pt | 650 | Settings heading |
| `{typography.headline}` | 20pt | 650 | Sheet heading |
| `{typography.card-title}` | 15pt | 600 | Todo and setting title |
| `{typography.body}` | 14pt | 400 | Default content |
| `{typography.caption}` | 10pt | 400 | Time and calendar metadata |
| `{typography.button}` | 14pt | 500 | Actions |

### Principles

- Keep date and time metadata light.
- Let todo titles carry the primary reading weight.
- Use uppercase only for small onboarding eyebrows.
- Avoid oversized headings inside the workspace.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Helvetica Neue**.

# Screen composition

### Grid & Container

The upper pane is a day or week timeline. The lower pane is a task list. A resizable divider changes their ratio; both remain one-column on mobile.

### Whitespace Philosophy

Whitespace is the dominant organization tool. Avoid filling empty time or task areas with decorative content.

# Navigation appearance

Profile, search, calendar label, pane grabber, and creation live in the black central strip. No conventional bottom tabs are used.

# Components

### Buttons

Primary onboarding and Pro actions use black. Workspace actions are compact icon controls in the central strip; destructive actions use text labels.

### Cards & Containers

Calendar and todo panes are the primary containers. Event blocks use pastel fill and a stronger leading edge. Settings rows use icon, label, and chevron.

### Inputs & Forms

Search sits at the bottom above the keyboard and filters both data types. Onboarding forms use full-width rows and black continuation actions.

### Status & Build Page

Completion uses a check plus muted text and a collapsible Done group. Current time uses a fine pink rule across the calendar.

### Navigation

Profile, search, calendar label, pane grabber, and creation live in the black central strip. No conventional bottom tabs are used.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Light gray canvas | App background |
| 1 | White rounded pane | Calendar and todos |
| 2 | Black divider strip | Navigation and resize boundary |
| 3 | Blurred overlay | Search and modal state |

### Decorative Depth

Use rounded pane silhouettes and subtle shadow only at their edges. Avoid gradients and decorative illustrations.

# States

Completion uses a check plus muted text and a collapsible Done group. Current time uses a fine pink rule across the calendar.

# iOS adaptation

| Wide | 768pt+ | Place panes side by side if useful |
| Small | <390pt | Increase minimum pane height and wrap metadata |

### Touch Targets

Maintain 44pt for checkboxes, divider controls, search, creation, and settings rows.

### Collapsing Strategy

Preserve both panes and allow resizing. Collapse event metadata before hiding todo context; keep the control strip usable.

### Image Behavior

No content imagery is required. Avatars use cover; symbolic empty-state glyphs remain centered and faint.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

- Exact tokens and font names were inferred visually.
- The 44-flow inventory was complete and all top-level flows were inspected.
- Several previewed transitions were video-only; motion was not assessed.

</design-context>
