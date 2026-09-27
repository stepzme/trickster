<design-context>
---
version: alpha
name: Not-Boring-Vibes-design-analysis
description: "An immersive focus and sound interface presented as a navigable low-poly world. Full-screen landscapes shift from misty forests to luminous pastel fields, while sparse translucent controls, condensed display type, and tiny status marks keep attention on atmosphere rather than app chrome."
colors:
  primary: "#F6C944"
  on-primary: "#111111"
  primary-hover: "#FFE073"
  primary-soft: "#40391F"
  accent: "#F2A7C5"
  accent-secondary: "#A8F2E4"
  ink: "#FFFFFF"
  ink-muted: "#C7C4C7"
  ink-subtle: "#77747A"
  canvas: "#08090A"
  surface-1: "#171719"
  surface-2: "#2B2A2D"
  hairline: "#454349"
  semantic-success: "#B9F0A5"
  semantic-danger: "#F16C75"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: DIN Condensed, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: DIN Condensed, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: DIN Condensed, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: DIN Condensed, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: DIN Condensed, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.4px }
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

(Not Boring) Vibes makes focus modes feel like places. Energy, presence, sound, and timer settings alter a full-screen low-poly environment instead of filling a conventional control panel.

**Key Characteristics:**
- Full-screen animated landscape.
- Mode-specific color and weather.
- Sparse translucent circular controls.
- Condensed all-caps guidance.
- Small bottom-corner vibe control.

## Colors

### Brand & Accent
- **Energy Gold** ({colors.primary}): Focus energy, sunlight, and active marks.
- **Atmosphere Pink** ({colors.accent}): Calmer sky and presence shifts.
- **Iridescent Mint** ({colors.accent-secondary}): Onboarding energy traces and cool modes.

### Surface
- **Canvas** ({colors.canvas}): Deep backdrop behind each generated world.
- **Surface 1** ({colors.surface-1}): Settings, membership, and support.
- **Surface 2** ({colors.surface-2}): Translucent in-world controls.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting information.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **DIN Condensed** — mode names and onboarding statements.
- **SF Pro Text** — controls and explanatory copy.
- **DIN Condensed** — compact labels and authored emphasis.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| {typography.display-xl} | 36px | 700 | Mode statement |
| {typography.headline} | 22px | 700 | Screen heading |
| {typography.card-title} | 16px | 600 | Vibe, timer, or setting label |
| {typography.body} | 14px | 400 | Details and forms |
| {typography.caption} | 10px | 400 | Metadata |
| {typography.button} | 15px | 600 | Primary action |

### Principles

- Keep mode names terse and atmospheric.
- Use tall condensed type for authored statements.
- Let the environment communicate energy before copy.
- Keep utility copy outside the visual focal point.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference fonts are unavailable; preserve relative weight and scale.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

The active vibe is a full-bleed world with a slim vertical control rail and one bottom-corner mode tile. Settings switch to a conventional single-column list.

### Whitespace Philosophy

In-world UI should feel sparse; open landscape and sky replace card spacing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Full-bleed 3D world | Base context |
| 1 | Translucent circular control | Primary content |
| 2 | Illuminated mode tile | Selected or promoted content |
| 3 | Modal over overlay | Confirmation and focus |

### Decorative Depth

Use layered low-poly terrain, fog, soft sunlight, and slow parallax. Chrome should appear suspended above the world.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| {rounded.xs} | 8px | Small controls |
| {rounded.sm} | 12px | Inputs and icon wells |
| {rounded.md} | 16px | Action tiles |
| {rounded.lg} | 20px | Main cards |
| {rounded.pill} | full | Filters and chips |
| {rounded.full} | full | Progress, avatar, or status |

### Photography & Illustration Geometry

The landscape is the interface. Preserve horizon, route, and atmospheric depth; position controls in stable edge zones.

## Components

### Buttons

Primary choices are large scene or mode tiles. In-world controls stay translucent and circular; membership actions use a clear pill.

### Pricing Tabs

Rise, Focus, Relax, Sleep, and Move behave as distinct environmental modes rather than text-heavy tabs.

### Cards & Containers

Use cards only for settings, guide, shop, membership, and widgets. The active session remains full bleed.

### Inputs & Forms

Energy, presence, sound, and timer use short direct controls with immediate environmental feedback.

### Status & Build Page

Show selected mode, energy level, timer, sound, and session progress with compact icon-plus-label cues.

### Navigation

The live scene owns the primary experience; settings, guide, achievements, icons, widgets, wallpapers, shop, and membership sit outside it.

### Footer

Keep the active vibe tile and safe-area controls clear of the scene's focal route.

## Do's and Don'ts

### Do

- Let atmosphere carry mode meaning.
- Keep controls sparse and stable.
- Use a coherent low-poly world.
- Give every mode a distinct palette.
- Preserve readable edge contrast.

### Don't

- Don't place opaque panels over the landscape.
- Don't mix realistic photography into the world.
- Don't overload sessions with metrics.
- Don't use long paragraphs in-world.
- Don't flatten modes into ordinary tabs.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Keep the world full bleed and move settings into a side panel |
| Compact | 390–767px | Default mobile composition |
| Small | <390px | Reduce secondary controls before cropping the horizon |

### Touch Targets

Keep every interactive control at least 44px while preserving the reference density.

### Collapsing Strategy

Preserve the full scene, selected vibe, timer, and exit. Move guide and secondary sound controls into a sheet.

### Image Behavior

Fill the viewport while keeping the horizon and main path visible. Crop peripheral terrain, never the scene's focal landmark.

## Iteration Guide

1. Establish one live environment.
2. Add mode switching and energy.
3. Add presence, sound, and timer.
4. Add settings and membership.
5. Add achievements, wallpapers, and shop.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 28 available flow names were inventoried; onboarding, home, energy, focusing modes, settings, and shop were image-reviewed.
- Audio transitions, parallax speed, and haptics were not directly assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
