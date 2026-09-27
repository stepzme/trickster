<design-context>
---
version: alpha
name: FocusPomo-design-analysis
description: "A soft playful focus timer with a warm cream-to-peach canvas, dark taupe controls, white pill panels, rounded pastel charts, and a growing crowd of expressive tomato characters that turns sessions, breaks, goals, and statistics into a collectible visual ritual."
colors: { primary: "#5B5249", on-primary: "#FFFFFF", primary-hover: "#463F39", primary-soft: "#EEE8E1", accent: "#F28755", accent-yellow: "#F6D94A", ink: "#514B45", ink-muted: "#8C8580", ink-subtle: "#BBB5B0", canvas: "#FFF4E8", surface-1: "#FFFFFF", surface-2: "#F1EDE8", hairline: "#E5DED7", semantic-success: "#89B84A", semantic-warning: "#F4C84B", semantic-danger: "#E46C5D", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Rounded, fontSize: 56px, fontWeight: 400, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: SF Pro Rounded, fontSize: 38px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Rounded, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: SF Pro Rounded, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Rounded, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Rounded, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Rounded, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Rounded, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Rounded, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Rounded, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Rounded, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Rounded, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 28px, xxl: 36px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  timer-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.xl}", padding: 24px }
  stat-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 48px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px }
---

## Overview

FocusPomo turns focused time into a warm collectible garden of expressive tomatoes and soft statistics.

## Colors

### Brand & Accent
Use dark taupe for primary control, tomato orange for personality, and yellow for breaks or achievements.

### Surface
Use peach-cream canvas, white cards, and pale taupe secondary controls.

### Text
Use dark warm gray for time and headings, medium gray for metadata, and pale gray for disabled state.

### Semantic
Use green for positive trend, yellow for attention, and coral for abandoned or blocked state.

## Typography

### Font Family
Use SF Pro Rounded for the whole experience and SF Mono only for technical values.

### Hierarchy
Use 56px for the timer, 28–38px for achievements, 22px for sections, 14–17px for controls and stats.

### Principles
Keep time dominant, labels warm and concise, and statistics readable despite the playful treatment.

### Note on Font Substitutes
Use Nunito Sans or Arial Rounded when SF Pro Rounded is unavailable.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 16px card padding, and generous vertical space around the timer.

### Grid & Container
Timer centers time above a tomato field; summary stacks rounded metric, chart, tag, and detail cards.

### Whitespace Philosophy
Use calm open space during focus and denser playful collections only in progress views.

## Elevation & Depth
Use soft white cards, light blur, and very subtle shadow.

### Decorative Depth
Tomato crowds, trophy cards, soft gradients, and pastel stacked bars create depth.

## Shapes

### Border Radius Scale
Use 12px for small controls, 16px for fields, 22px for cards, and full pills for primary actions.

### Photography & Illustration Geometry
Use flat rounded fruit characters with simple faces, tiny limbs, and varied scale to show accumulated sessions.

## Components

### Buttons
Use dark taupe pills for Start, Break, and confirmation; secondary actions use pale rounded fills.

### Pricing Tabs
Use compact pills for date range, cycle, break length, and tag selection.

### Cards & Containers
Use timer stage, trophy card, summary metrics, stacked chart, tag legend, tomato grid, and subscription banner.

### Inputs & Forms
Tag and schedule forms use soft white fields, colored swatches, and clear duration controls.

### Status & Build Page
Show focusing, break, completed, abandoned, goal, archived tag, blocked apps, and subscription states explicitly.

### Navigation
Timer, summary, calendar, and settings remain directly reachable through light floating controls.

### Footer
Keep the main session action centered and clear above the safe area.

## Do's and Don'ts

### Do
- Keep time and current tag visible.
- Use tomato count as a secondary progress signal.
- Make session interruption explicit.

### Don't
- Don't animate characters during deep focus.
- Don't hide exact duration behind illustration.
- Don't over-saturate the calm canvas.

## Responsive Behavior

### Breakpoints
Use one centered column on phones, two summary columns on tablet, and dashboard plus timer above 1024px.

### Touch Targets
Keep timer, start, break, tags, dates, and settings at least 44px.

### Collapsing Strategy
Preserve time, tag, start or stop, and session state; move analytics below the active timer.

### Image Behavior
Keep fruit characters fully visible and trophy art contained in its card.

## Iteration Guide
1. Build timer and session lifecycle.
2. Add tags, cycles, and breaks.
3. Add summary, calendar, and blocking.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 36 flows were inventoried; Timer, Start focus session, and Statistics were image-reviewed.
- Some timer steps were video-only; app blocking and subscription were not deeply sampled.

</design-context>

Use the design system above for all UI you generate.
