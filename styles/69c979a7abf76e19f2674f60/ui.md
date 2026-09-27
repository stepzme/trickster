<design-context>
---
version: alpha
name: Headspace-design-analysis
description: "A warm meditation interface that pairs white content surfaces with saturated yellow, orange, purple, and pink illustration fields. Friendly editorial cards, soft curves, and oversized playback controls make wellness content feel approachable rather than clinical."
colors: { primary: "#FFB800", on-primary: "#202020", primary-hover: "#F5A900", primary-soft: "#FFF0C7", accent: "#6C2DA8", ink: "#242427", ink-muted: "#6E6E73", ink-subtle: "#A4A4AA", canvas: "#FFFFFF", surface-1: "#F7F4F2", surface-2: "#F1ECE8", hairline: "#E8E2DD", semantic-success: "#3EA779", semantic-warning: "#FFB800", semantic-danger: "#D95D5D", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Headspace Apercu, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: Headspace Apercu, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: Headspace Apercu, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: Headspace Apercu, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Headspace Apercu, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Headspace Apercu, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Headspace Apercu, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Headspace Apercu, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Headspace Apercu, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Headspace Apercu, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Headspace Apercu, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Headspace Apercu, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 36px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.full}", padding: 14px 20px }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  player: { backgroundColor: "{colors.primary}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xs}", padding: 20px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Headspace turns meditation discovery and playback into a friendly editorial experience with warm color and expressive flat illustration.

## Colors

### Brand & Accent
Use yellow and orange for active practice; purple and pink distinguish sleep and editorial content.

### Surface
Keep discovery on white and reserve full-bleed color for content art and playback.

### Text
Use charcoal for primary copy, warm gray for metadata, and white only on sufficiently dark art.

### Semantic
Use green for completion, yellow for active practice, and red sparingly for errors.

## Typography

### Font Family
Use a friendly rounded grotesk; fall back to Avenir Next or system sans.

### Hierarchy
Use 27–32px for practice titles, 22px for sections, 16px cards, 14px body, and 10–12px metadata.

### Principles
Keep titles conversational, time labels compact, and playback state immediately legible.

### Note on Font Substitutes
Use Avenir Next, Nunito Sans, or the platform sans without exaggerated rounding.

## Layout

### Spacing System
Use a 4px base, 18px gutters, 12px card gaps, and 24px between content rails.

### Grid & Container
Discovery stacks recents, horizontal content rails, and categories; playback becomes a focused full-screen canvas.

### Whitespace Philosophy
Let each practice breathe while keeping enough neighboring content visible to invite exploration.

## Elevation & Depth
Use light cards and almost no shadow; illustration color provides hierarchy.

### Decorative Depth
Layer broad organic color bands and flat characters instead of physical shadows.

## Shapes

### Border Radius Scale
Use 10px for chips, 14px for cards, 20px for panels, and full circles for playback controls.

### Photography & Illustration Geometry
Crop flat illustrations into consistent rounded cards; allow playback color bands to fill the screen.

## Components

### Buttons
Use large charcoal circular playback controls and simple pill actions.

### Pricing Tabs
Use compact text tabs or pills for Recents, Favorites, duration, and teacher.

### Cards & Containers
Use illustrated practice cards with title, type, and duration under or over the artwork.

### Inputs & Forms
Keep account and preference fields calm, lightly filled, and clearly labeled.

### Status & Build Page
Show loading, playing, paused, progress, favorite, and completion without interrupting the calm surface.

### Navigation
Today, Explore, and Profile stay in the bottom bar; playback uses a clear close action.

### Footer
Keep the footer white and quiet with the active tab in charcoal.

## Do's and Don'ts

### Do
- Let illustration carry mood.
- Keep duration visible before starting.
- Make pause and close unmistakable.

### Don't
- Don't use clinical wellness imagery.
- Don't overcrowd the player.
- Don't mix many accent palettes in one card.

## Responsive Behavior

### Breakpoints
Use horizontal rails on phones, wider multi-card grids on tablet, and a capped reading width on desktop.

### Touch Targets
Keep cards, menus, tabs, playback, progress, and close controls at least 44px.

### Collapsing Strategy
Preserve practice title, duration, playback, progress, and exit; reduce secondary artwork details first.

### Image Behavior
Use consistent aspect ratios for discovery art and crop only within large quiet color fields.

## Iteration Guide
1. Build Today, discovery rails, and navigation.
2. Add playback, progress, favorites, and completion.
3. Add sleep content, personalization, and account states.

## Known Gaps
- Tokens were inferred visually from sampled mobile screens.
- Complete Lesson was reviewed as a five-screen flow.
- Subscription and onboarding states were not sampled.

</design-context>
