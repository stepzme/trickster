<design-context>
---
version: 1
platform: iOS
name: Clock-design-analysis
description: "A pure-black iOS utility shell with oversized white titles, thin separators, warm amber actions, precise time numerals, native grouped sheets, and an unwavering four-tab structure. The visual language is nearly decoration-free: hierarchy comes from type scale, spacing, system controls, and direct manipulation."
colors:
  primary: "#FF9F0A"
  on-primary: "#000000"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 40, fontWeight: 300, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 15, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 10, lg: 14, xl: 18, xxl: 24, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  time-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: [12, 16]}
  grouped-list: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [4, 12]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [8, 10]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Clock is a native dark utility in which time values, direct actions, and platform controls do all the visual work. Amber marks selection and creation; everything else stays black, white, and gray.

**Key Characteristics:**
- True-black full-screen canvas.
- Large bold navigation titles and light time numerals.
- Warm amber active tabs and actions.
- Native lists, pickers, toggles, search, and swipe actions.
- No decorative imagery in the app shell.

# Non-negotiable visual invariants

- Sampled screens consistently use true-black full-screen canvas.
- Navigation consistently uses large bold navigation titles and light time numerals.
- The reference consistently shows warm amber active tabs and actions.
- The reference consistently shows native lists, pickers, toggles, search, and swipe actions.
- Imagery consistently uses no decorative imagery in the app shell.

# Color and surfaces

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

# Typography

### Font Family
- **SF Pro Display** — screen titles and large time values.
- **SF Pro Text** — actions, city labels, settings, and tab labels.
- **SF Mono** — optional substitute for aligned numeric readouts only.

### Hierarchy
Use 34 points bold for screen titles, 40 points light for times, 17 points for rows and actions, 13 points for supporting values, and 10 points for tab labels.

### Principles
- Give live values the largest visual weight.
- Keep action labels short and familiar.
- Use tabular numerals where alignment matters.
- Preserve Dynamic Type without truncating critical values.

### Note on Font Substitutes
Use the platform system sans. **Inter** is acceptable off Apple platforms if numeric widths are controlled.

# Screen composition

### Spacing System
Use a 4 points base, 16 points screen gutters, 12 points row padding, and 24–32 points separation between functional groups.

### Grid & Container
Each tab is a single full-height list or instrument above a fixed four-item tab bar. Modal configuration uses centered sheets and grouped rows.

### Whitespace Philosophy
Allow large black empty fields around sparse utility states. Do not fill unused space with cards or promotion.

Surface hierarchy observed in the source:

Keep the main interface flat. Sheets, search, and grouped settings gain depth from gray surfaces rather than shadows.

### Decorative Depth
The only decorative depth is native blur behind overlays and the analog clock face; avoid added gradients or artwork.

# Navigation appearance

World Clock, Alarm, Stopwatch, and Timer remain fixed in the bottom tab bar; detail screens use native back, cancel, and save actions.

# Components

### Buttons

Use amber text actions for Add, Save, Done, and Set Up; reserve filled buttons for rare modal confirmation.

### Cards & Containers

Use full-width time rows, thin separators, grouped settings blocks, and modal sheets; avoid generic card grids.

### Inputs & Forms

Use native dark search fields, wheels, toggles, checkmarks, and labeled settings rows.

# Imagery and icons

The only decorative depth is native blur behind overlays and the analog clock face; avoid added gradients or artwork.

Do not introduce photography or illustration. Analog clock faces are functional instruments and stay within a square or circular frame.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Express no clocks, no alarm, active alarm, running stopwatch, countdown, and selected weekdays with direct text or native state indicators.

# iOS adaptation

### Touch Targets

Keep tabs, add, edit, rows, picker controls, toggles, and swipe actions at least 44 points.

### Collapsing Strategy

Preserve current time or timer state, primary control, and tab navigation. Move secondary configuration to a sheet rather than compressing rows.

### Image Behavior

Keep clock faces and widgets aspect-fit. No content imagery should be introduced.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add promotional cards.
- Don't place white panels on the main canvas.
- Don't replace direct labels with novel icons.
- Don't animate a clock at the expense of legibility.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
