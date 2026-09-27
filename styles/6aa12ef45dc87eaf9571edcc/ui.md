<design-context>
---
version: alpha
name: Pool-design-analysis
description: "A playful screenshot-organizer interface built on airy white space, fluid cyan controls, and tactile 3D brand objects. Editorial serif headings give the library character while a neutral system sans keeps actions legible. Screenshot mosaics are the primary content; frosted edge controls, rounded cards, and a yellow duck mascot create a soft, spatial layer above them."

colors:
  primary: "#63BCF5"
  on-primary: "#FFFFFF"
  primary-strong: "#2D8FE8"
  primary-soft: "#DDF3FF"
  ink: "#15151B"
  ink-muted: "#77777D"
  ink-subtle: "#AAAAB0"
  canvas: "#FFFFFF"
  surface-1: "#F6F6F5"
  surface-2: "#EEEEED"
  surface-dark: "#171719"
  hairline: "#E2E2E0"
  glass: "#F7F7F2CC"
  mascot-yellow: "#FFC21C"
  accent-pink: "#FF5DA8"
  semantic-success: "#1EAF62"
  semantic-danger: "#E84855"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.8px
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.6px
  display-md:
    fontFamily: Editorial Serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.4px
  headline:
    fontFamily: Editorial Serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.2px
  card-title:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 20px
  xl: 28px
  xxl: 36px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 72px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  floating-control:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 16px
  onboarding-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xxl}"
    padding: 24px
  pool-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12px
  settings-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 4px 12px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.xs}"
    height: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 24px 16px
---

## Overview

Pool makes user screenshots the visual material of the interface. White library screens stay intentionally sparse, while screenshot grids, small 3D objects, and translucent blue controls carry the identity. Onboarding inverts the balance: an atmospheric blue field sits behind one large white question sheet.

**Key Characteristics:**
- Dense screenshot mosaics on an open white canvas.
- Editorial serif for titles; compact system sans for all actions and metadata.
- Cyan-blue pill controls with soft blur and glow.
- Oversized white sheets with rounded corners for sequential setup.
- Yellow duck, pink number, and other tactile objects as navigation landmarks.
- A true dark theme using charcoal grouped surfaces.

## Colors

### Brand & Accent
- **Pool Blue** ({colors.primary}): Primary actions, selected tabs, add and search controls.
- **Strong Blue** ({colors.primary-strong}): Active emphasis and compact links.
- **Soft Blue** ({colors.primary-soft}): Quiet selected and informational surfaces.
- **Mascot Yellow** ({colors.mascot-yellow}) and **Accent Pink** ({colors.accent-pink}): Reserved for the duck and 3D brand objects.

### Surface
- **Canvas** ({colors.canvas}): Main library and settings background.
- **Surface 1** ({colors.surface-1}): Settings groups, text areas, empty pool covers.
- **Surface 2** ({colors.surface-2}): Pressed or nested neutral controls.
- **Glass** ({colors.glass}): Floating navigation and edge controls over content.
- **Dark Surface** ({colors.surface-dark}): Dark-mode canvas and grouped rows.

### Text
- **Ink** ({colors.ink}): Titles, counts, primary labels.
- **Ink Muted** ({colors.ink-muted}): Supporting copy and row descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and disabled controls.

### Semantic
- **Success** ({colors.semantic-success}): Granted permissions and positive confirmation.
- **Danger** ({colors.semantic-danger}): Delete account, trash, and destructive actions.
- **Overlay** ({colors.semantic-overlay}): Dimmed content under sheets.

## Typography

### Font Family

- **Editorial Serif** — app titles, onboarding questions, recaps, and pool headings.
- **System Sans** — buttons, rows, metadata, forms, and screenshot labels.
- **System Mono** — only if source metadata requires fixed-width text.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 500 | Recap emphasis |
| `{typography.display-lg}` | 34px | 500 | Onboarding question |
| `{typography.display-md}` | 28px | 500 | Primary page title |
| `{typography.headline}` | 24px | 500 | Sheet heading |
| `{typography.card-title}` | 17px | 600 | Group and card title |
| `{typography.body}` | 15px | 400 | Default copy |
| `{typography.caption}` | 11px | 400 | Counts and hints |
| `{typography.button}` | 15px | 500 | Actions |

### Principles

- Let serif titles feel expressive without increasing density.
- Keep labels short and neutral; the image grid remains dominant.
- Use centered type for onboarding and page titles, left alignment for settings and forms.
- Avoid all-caps except the small POOL.DAY wordmark.

### Note on Font Substitutes

Use **DM Serif Display** or **Fraunces** for the editorial role and **SF Pro / Inter** for system sans. Preserve the restrained serif weight and compact mobile proportions.

## Layout

### Spacing System

Use a 4px base. Content gutters are 12–16px; grouped rows use 12–16px interiors; onboarding sheets use 24px. Floating controls sit 12–20px from safe-area edges.

### Grid & Container

The home library uses a user-selectable 2-, 3-, or 4-column image grid. Pools use asymmetrical cover sizes but align to the same horizontal gutters. Focused screens keep one centered mobile column.

### Whitespace Philosophy

Empty white space is functional: it separates image clusters and gives floating controls room to remain visible. Do not fill sparse pool or settings screens with decoration.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White or charcoal canvas | Base screens |
| 1 | Pale rounded group | Settings and form clusters |
| 2 | Translucent blur with soft shadow | Bottom navigation and edge controls |
| 3 | White oversized sheet over blue field | Onboarding |

### Decorative Depth

Use blur, broad low-opacity shadow, and translucent fills. Tactile 3D symbols add depth; borders should remain faint and secondary.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Small media corners |
| `{rounded.sm}` | 10px | Compact controls |
| `{rounded.md}` | 14px | Rows and inputs |
| `{rounded.lg}` | 20px | Pool cards and groups |
| `{rounded.xl}` | 28px | Floating bars |
| `{rounded.xxl}` | 36px | Onboarding sheet |
| `{rounded.pill}` | full | Primary actions |

### Photography & Illustration Geometry

User screenshots keep their native ratio and form irregular visual mosaics. Brand objects remain small, isolated, and fully visible; they are not cropped into abstract backgrounds.

## Components

### Buttons

Primary actions are wide cyan pills with white text and a diffuse blue shadow. Secondary actions are white or frosted pills. Circular close, add, share, and delete controls use the same floating treatment.

### Pricing Tabs

No pricing control was observed. For segmented choices, follow the settings appearance control: a neutral rounded track with one light raised selection.

### Cards & Containers

Pool covers are pale rounded fields containing miniature screenshot collages. Settings groups stack rows inside one rounded gray container. Onboarding places all choices inside one oversized white sheet.

### Inputs & Forms

Text entry uses large pale rounded areas with understated placeholders. Keyboard states keep the primary Continue button visible above the keyboard when space permits.

### Status & Build Page

Permission state is shown inline with a green circled check. Counts sit directly under pool names; progress in onboarding uses short horizontal marks rather than numeric steps.

### Navigation

The top bar centers POOL.DAY and places tactile brand objects at the edges. A floating bottom bar switches Home and Pools, with adjacent search or add controls. Detail screens use a top-left close and top-right contextual actions.

### Footer

Settings ends with quiet acknowledgements and small gray attribution text on the canvas. No persistent marketing footer was observed.

## Do's and Don'ts

### Do

- Let screenshots dominate the library.
- Keep primary controls cyan, rounded, and spatially detached from content.
- Pair expressive serif headings with neutral sans labels.
- Preserve generous white space around sparse collections.
- Use 3D brand objects only as purposeful landmarks.

### Don't

- Don't place heavy borders around every screenshot.
- Don't introduce dense toolbars over the grid.
- Don't turn the mascot palette into a general multicolor UI.
- Don't flatten onboarding into a conventional settings form.
- Don't use strong shadows on ordinary grouped rows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center the mobile canvas; allow wider gutters |
| Compact | 390–767px | Default mobile composition |
| Small | <390px | Reduce sheet padding and serif scale |

### Touch Targets

Maintain at least 44px for floating icons, segmented options, and rows. Keep the bottom controls above the safe area and avoid narrow hit regions between translucent pills.

### Collapsing Strategy

Reduce screenshot columns before shrinking individual items below useful recognition. Let option grids collapse from two columns to one only when labels wrap. Keep the dominant bottom action full width.

### Image Behavior

Screenshot thumbnails preserve aspect ratio and may vary in height. Detail views fit the full capture without destructive crop. Pool collages may overlap or fan thumbnails but should retain recognizable edges.

## Iteration Guide

1. Start with the screenshot grid and safe-area controls.
2. Establish the serif/sans hierarchy before adding brand objects.
3. Tune blue blur and shadow on one floating control, then reuse it.
4. Check white and dark themes separately.
5. Validate 2-, 3-, and 4-column grid density with real screenshots.

## Known Gaps

- Exact typeface names and color values were inferred visually from the inspected screens.
- Motion of the duck and video-only interactions could not be assessed from still frames.
- Hover behavior is not applicable to the inspected iOS interface.
- Tablet-specific layouts were not present in the available scenarios.

</design-context>

Use the design system above for all UI you generate.
