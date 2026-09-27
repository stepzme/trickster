<design-context>
---
version: alpha
name: Oura-design-analysis
description: "A cinematic dark health interface that layers white metrics, translucent data cards, and delicate charts over immersive nature photography. Elegant serif status statements sit beside compact neutral sans-serif labels. Cool blue, teal, and violet glows distinguish health domains without turning the interface into a dashboard of bright colors; a frosted floating navigation bar keeps Today, Vitals, My Health, and logging within reach."

colors:
  primary: "#DDF5FF"
  on-primary: "#0A0B0E"
  accent-blue: "#78CFEA"
  accent-teal: "#63D7C4"
  accent-violet: "#A796D7"
  accent-rose: "#D37C9A"
  ink: "#FFFFFF"
  ink-muted: "#C8C9CF"
  ink-subtle: "#8F929B"
  canvas: "#07080B"
  surface-1: "#15171D"
  surface-2: "#20232B"
  surface-glass: "#25262BCC"
  hairline: "#383A42"
  inverse-canvas: "#FFFFFF"
  inverse-ink: "#101116"
  semantic-success: "#6AD1A9"
  semantic-warning: "#E2C070"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Editorial Serif
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -1.0px
  display-lg:
    fontFamily: Editorial Serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: -0.7px
  display-md:
    fontFamily: Editorial Serif
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -0.4px
  headline:
    fontFamily: System Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.2px
  card-title:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 500
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
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.3px
  button:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.7px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 20px
  xl: 26px
  xxl: 32px
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
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  metric-card:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  health-panel:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  bottom-nav:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.accent-blue}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 52px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 24px 16px
---

## Overview

Oura presents health as an interpreted daily story. Full-screen landscapes and night skies establish emotional context; scores, arcs, charts, and short explanations float above them in dark translucent layers. Dense longitudinal data moves into dedicated Vitals, Trends, Reports, and My Health screens.

**Key Characteristics:**
- Near-black canvas with immersive nature photography.
- Editorial serif for daily states, bedtime, and major numbers.
- Cool domain glows instead of hard color-coded panels.
- Large translucent metric cards with thin white charts.
- Floating pill navigation and adjacent circular plus action.
- Product photography reserved for ring and charger setup.

## Colors

### Brand & Accent
- **Pale Blue** ({colors.primary}): High-emphasis line work and quiet selected states.
- **Blue** ({colors.accent-blue}): Readiness and stress-related status.
- **Teal** ({colors.accent-teal}): Positive health and recovery.
- **Violet** ({colors.accent-violet}) and **Rose** ({colors.accent-rose}): Sleep and stress atmosphere.

### Surface
- **Canvas** ({colors.canvas}): Default black health canvas.
- **Surface 1** ({colors.surface-1}): Menus, forms, and education panels.
- **Surface 2** ({colors.surface-2}): Nested controls and selected states.
- **Glass** ({colors.surface-glass}): Cards and floating navigation over imagery.
- **Inverse Canvas** ({colors.inverse-canvas}): Primary onboarding buttons.

### Text
- **Ink** ({colors.ink}): Scores, titles, charts, and primary copy.
- **Ink Muted** ({colors.ink-muted}): Explanations and timestamps.
- **Ink Subtle** ({colors.ink-subtle}): Inactive navigation and low-priority metadata.
- **Inverse Ink** ({colors.inverse-ink}): Text on white actions.

### Semantic
- **Success** ({colors.semantic-success}): Optimal, thriving, and looking-good states.
- **Warning** ({colors.semantic-warning}): Attention and approaching limits.
- **Overlay** ({colors.semantic-overlay}): Full-screen educational overlays.

## Typography

### Font Family

- **Editorial Serif** — daily narrative, bedtime ranges, major progress statements.
- **System Sans** — metrics, charts, navigation, settings, and explanatory text.
- **System Mono** — only for identifiers or technical device information.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 44px | 400 | Primary health number |
| `{typography.display-lg}` | 36px | 400 | Daily state statement |
| `{typography.display-md}` | 30px | 400 | Bedtime range |
| `{typography.headline}` | 22px | 600 | Screen heading |
| `{typography.card-title}` | 17px | 500 | Metric title |
| `{typography.body}` | 14px | 400 | Default explanation |
| `{typography.caption}` | 11px | 500 | Time and chart labels |
| `{typography.button}` | 15px | 600 | Primary action |

### Principles

- Use serif only for the human interpretation, not every data label.
- Pair each score with a status word and scale or range.
- Keep chart labels compact and high contrast.
- Center hero narratives; left-align cards, reports, and settings.

### Note on Font Substitutes

Use **New York** or **Cormorant Garamond** for the editorial role and **SF Pro / Inter** for system sans. Keep serif weight regular and avoid ornate contrast at small sizes.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 16px, metric-card gaps 12px, card interiors 16px, and hero text groups 20–24px. Floating navigation stays 12–16px above the safe area.

### Grid & Container

The interface is one mobile column. Today uses full-width scenic heroes and stacked cards. Vitals uses a vertical card list; scores inside cards use a split layout between the value and horizontal range.

### Whitespace Philosophy

Photography supplies visual space. Keep overlays sparse enough that the landscape remains legible. Dense articles and reports move onto flat black rather than stacking over imagery.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas or full-bleed photograph | Base |
| 1 | Dark translucent panel | Metric and recommendation cards |
| 2 | Frosted pill with soft border | Navigation and floating controls |
| 3 | Black full-screen overlay | Detailed education |

### Decorative Depth

Use photography, dark vertical gradients, restrained blur, and subtle colored edge glow. Avoid bright drop shadows and glossy card borders.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Chart details |
| `{rounded.sm}` | 10px | Inputs and badges |
| `{rounded.md}` | 14px | Inline controls |
| `{rounded.lg}` | 20px | Health cards |
| `{rounded.xl}` | 26px | Navigation bar |
| `{rounded.xxl}` | 32px | Large modal surface |
| `{rounded.pill}` | full | Actions and navigation |

### Photography & Illustration Geometry

Landscape photography fills the hero and fades into black under text. Ring and charger renders remain centered, fully visible, and surrounded by black space. No distinct decorative illustration system was observed.

## Components

### Buttons

Primary onboarding actions are full-width white pills with dark labels. In-product secondary actions are translucent dark pills. Confirm and Edit share one compact detected-activity panel.

### Pricing Tabs

No pricing tabs were observed. Comparable period or view switching uses understated text tabs with a thin selected underline.

### Cards & Containers

Metric cards use dark translucent gradients, large scores, status labels, horizontal ranges, and a chevron. My Health panels add one colored atmospheric glow and a compact interpretation badge.

### Inputs & Forms

Onboarding fields sit on near-black rectangular surfaces with small leading icons. Validation uses an inline check. Forms keep one white bottom action and minimal decoration.

### Status & Build Page

States such as Optimal, Thriving, Looking Good, and Making Progress remain textual. Thin arcs, crowns, dots, and range markers reinforce the status without replacing it.

### Navigation

Today, Vitals, and My Health sit in a frosted bottom pill. A separate circular plus action opens logging. The top bar provides side menu, centered Oura mark, share, and ring/device status.

### Footer

Settings and membership screens finish with terms, privacy, or low-priority account information. Daily health screens do not add a footer.

## Do's and Don'ts

### Do

- Lead with one interpreted health story.
- Keep metrics readable over photography with controlled gradients.
- Pair every score with status and range context.
- Reserve serif for narrative emphasis.
- Move complex education to dedicated black overlays.

### Don't

- Don't show all health metrics as equally bright tiles.
- Don't use scenic photography behind dense reports.
- Don't make status color the only carrier of meaning.
- Don't add playful illustration to clinical data.
- Don't crowd the floating navigation with secondary actions.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center a bounded mobile column |
| Compact | 390–767px | Default scenic composition |
| Small | <390px | Reduce hero type and stack range metadata |

### Touch Targets

Keep navigation, plus, metric cards, share, and side-menu controls at least 44px. Educational-overlay close and previous/next controls need distinct safe-area spacing.

### Collapsing Strategy

Stack score and range when horizontal space becomes insufficient. Keep the hero statement centered and reduce type before cropping it. Side-menu rows remain a single scrollable column.

### Image Behavior

Use cover behavior for landscape heroes with the focal terrain kept behind the primary metric. Product renders use contain. Dark gradient overlays must maintain text contrast without obscuring the scene.

## Iteration Guide

1. Establish the black canvas and scenic hero.
2. Tune one translucent metric card and score range.
3. Add serif narrative type after metric hierarchy is stable.
4. Implement floating navigation and logging action.
5. Verify contrast across bright and dark photographs.

## Known Gaps

- Exact colors and typefaces were inferred from inspected screens.
- Video-only motion and ring animations were unavailable as still previews.
- Long health-detail flows were sampled at key steps rather than every repeated chart state.
- Tablet and landscape adaptations were not present.

</design-context>

Use the design system above for all UI you generate.
