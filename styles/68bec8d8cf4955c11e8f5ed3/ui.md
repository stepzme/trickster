<design-context>
---
version: alpha
name: Clock-design-analysis
description: "A pure-black iOS utility shell with oversized white titles, thin separators, warm amber actions, precise time numerals, native grouped sheets, and an unwavering four-tab structure. The visual language is nearly decoration-free: hierarchy comes from type scale, spacing, system controls, and direct manipulation."
colors:
  primary: "#FF9F0A"
  on-primary: "#000000"
  primary-hover: "#FFB340"
  primary-soft: "#3B2C13"
  ink: "#FFFFFF"
  ink-muted: "#A0A0A6"
  ink-subtle: "#636366"
  canvas: "#000000"
  surface-1: "#1C1C1E"
  surface-2: "#2C2C2E"
  hairline: "#2D2D30"
  semantic-success: "#30D158"
  semantic-danger: "#FF453A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 300, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 15px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 10px, lg: 14px, xl: 18px, xxl: 24px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px }
  time-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 12px 16px }
  grouped-list: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 4px 12px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 8px 10px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 44px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Clock is a native dark utility in which time values, direct actions, and platform controls do all the visual work. Amber marks selection and creation; everything else stays black, white, and gray.

**Key Characteristics:**
- True-black full-screen canvas.
- Large bold navigation titles and light time numerals.
- Warm amber active tabs and actions.
- Native lists, pickers, toggles, search, and swipe actions.
- No decorative imagery in the app shell.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Active tab, add, save, and edit actions.
- **Primary Soft** ({colors.primary-soft}): Low-emphasis amber tint when needed.

### Surface
- **Canvas** ({colors.canvas}): Main World Clock, Alarm, Stopwatch, and Timer screens.
- **Surface 1** ({colors.surface-1}): Modal sheets and picker backgrounds.
- **Surface 2** ({colors.surface-2}): Grouped controls, fields, and selected picker rows.
- **Hairline** ({colors.hairline}): Row separators.

### Text
- **Ink** ({colors.ink}): Titles, times, and selected values.
- **Ink Muted** ({colors.ink-muted}): Secondary settings and inactive tabs.
- **Ink Subtle** ({colors.ink-subtle}): Empty-state and disabled text.

### Semantic
- **Success** ({colors.semantic-success}): Enabled switches.
- **Danger** ({colors.semantic-danger}): Delete and remove actions.
- **Overlay** ({colors.semantic-overlay}): Sheet backdrop.

## Typography

### Font Family
- **SF Pro Display** — screen titles and large time values.
- **SF Pro Text** — actions, city labels, settings, and tab labels.
- **SF Mono** — optional substitute for aligned numeric readouts only.

### Hierarchy
Use 34px bold for screen titles, 40px light for times, 17px for rows and actions, 13px for supporting values, and 10px for tab labels.

### Principles
- Give live values the largest visual weight.
- Keep action labels short and familiar.
- Use tabular numerals where alignment matters.
- Preserve Dynamic Type without truncating critical values.

### Note on Font Substitutes
Use the platform system sans. **Inter** is acceptable off Apple platforms if numeric widths are controlled.

## Layout

### Spacing System
Use a 4px base, 16px screen gutters, 12px row padding, and 24–32px separation between functional groups.

### Grid & Container
Each tab is a single full-height list or instrument above a fixed four-item tab bar. Modal configuration uses centered sheets and grouped rows.

### Whitespace Philosophy
Allow large black empty fields around sparse utility states. Do not fill unused space with cards or promotion.

## Elevation & Depth
Keep the main interface flat. Sheets, search, and grouped settings gain depth from gray surfaces rather than shadows.

### Decorative Depth
The only decorative depth is native blur behind overlays and the analog clock face; avoid added gradients or artwork.

## Shapes

### Border Radius Scale
Use 8px for search, 10px for grouped controls, 14px for sheets, and full circles for analog dials and compact controls.

### Photography & Illustration Geometry
Do not introduce photography or illustration. Analog clock faces are functional instruments and stay within a square or circular frame.

## Components

### Buttons
Use amber text actions for Add, Save, Done, and Set Up; reserve filled buttons for rare modal confirmation.

### Pricing Tabs
Not a commerce pattern. Use native segmented or tab selection when switching utility modes.

### Cards & Containers
Use full-width time rows, thin separators, grouped settings blocks, and modal sheets; avoid generic card grids.

### Inputs & Forms
Use native dark search fields, wheels, toggles, checkmarks, and labeled settings rows.

### Status & Build Page
Express no clocks, no alarm, active alarm, running stopwatch, countdown, and selected weekdays with direct text or native state indicators.

### Navigation
World Clock, Alarm, Stopwatch, and Timer remain fixed in the bottom tab bar; detail screens use native back, cancel, and save actions.

### Footer
The bottom tab bar sits on black and respects the home-indicator safe area.

## Do's and Don'ts

### Do
- Keep the black canvas uninterrupted.
- Use amber only for active and actionable state.
- Make time values instantly scannable.
- Preserve native edit and swipe conventions.

### Don't
- Don't add promotional cards.
- Don't place white panels on the main canvas.
- Don't replace direct labels with novel icons.
- Don't animate a clock at the expense of legibility.

## Responsive Behavior

### Breakpoints
Use the native phone layout up to 767px, a centered utility column on tablet, and split navigation/detail only above 1024px when the platform expects it.

### Touch Targets
Keep tabs, add, edit, rows, picker controls, toggles, and swipe actions at least 44px.

### Collapsing Strategy
Preserve current time or timer state, primary control, and tab navigation. Move secondary configuration to a sheet rather than compressing rows.

### Image Behavior
Keep clock faces and widgets aspect-fit. No content imagery should be introduced.

## Iteration Guide
1. Build the four-tab shell.
2. Add World Clock list, search, and editing.
3. Add Alarm creation and repeat settings.
4. Add Stopwatch and Timer instruments.
5. Add widgets and accessibility states.

## Known Gaps
- Tokens were inferred visually from 55 image screens.
- The catalog exposed no formal flows, so review used the screen fallback across World Clock and Alarm states.
- Stopwatch, Timer, widgets, and live motion were not sampled as deeply as World Clock and Alarm.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
