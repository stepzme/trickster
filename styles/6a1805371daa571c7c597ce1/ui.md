<design-context>
---
version: alpha
name: Heros-Journey-design-analysis
description: "A gamified fitness product that combines a light utility interface with a 3D isometric journey map, saturated purple rewards, collectible chests, fantasy avatars, and visible program progression. Game layers are vivid; schedules and performance details remain mostly neutral and card-based."
colors: { primary: "#7A20F4", on-primary: "#FFFFFF", primary-hover: "#6417D1", primary-soft: "#F0E5FF", accent: "#21B979", ink: "#17171A", ink-muted: "#77777F", ink-subtle: "#B0B0B7", canvas: "#F5F5F7", surface-1: "#FFFFFF", surface-2: "#ECECEF", hairline: "#DFDFE4", semantic-success: "#20B675", semantic-warning: "#F1A934", semantic-danger: "#E14E64", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  progress-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  reward-card: { backgroundColor: "#3A136A", textColor: "#FFFFFF", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Hero's Journey turns fitness programs into a map of levels, rewards, collectible items, and visible performance milestones.

## Colors

### Brand & Accent
Use electric purple for enrollment and rewards and green for completed fitness progress.

### Surface
Keep planning and reports on white or pale gray; use dark violet only for reward moments.

### Text
Use near-black for task content, gray for metadata, and white on saturated game surfaces.

### Semantic
Use green for completed, orange for calories or attention, red for pulse, and purple for progression.

## Typography

### Font Family
Use SF Pro Display for reward and program titles and SF Pro Text for schedules, tasks, and metrics.

### Hierarchy
Use 27–32px for reward moments, 22px for screens, 16px for cards, 14px body, and 10–12px metadata.

### Principles
Make program level, progress, and next action stronger than supporting game currency.

### Note on Font Substitutes
Use the platform sans or Inter with tabular metrics.

## Layout

### Spacing System
Use a 4px base, 14px gutters, 12px card gaps, and 16px panel padding.

### Grid & Container
The home map fills the background; sheets contain task choices, while program detail stacks progress, shortcuts, schedule, and goals.

### Whitespace Philosophy
Let game scenes feel abundant but keep workout planning calm and vertically ordered.

## Elevation & Depth
Use raised sheets and cards over immersive scenes; reward reveals may use stronger glow and depth.

### Decorative Depth
Use isometric roads, buildings, chests, rays, 3D items, and fantasy avatars.

## Shapes

### Border Radius Scale
Use 10px for chips, 14px for cards, 18px for sheets, and circles for progression markers.

### Photography & Illustration Geometry
Keep game objects fully visible; frame program art and avatar scenes inside clear bounded areas.

## Components

### Buttons
Use purple filled buttons for progression and white filled buttons on dark reward screens.

### Pricing Tabs
Use week selectors, profile tabs, and compact calendar controls.

### Cards & Containers
Use program sheets, task cards, reward lists, chests, reports, and metric rows.

### Inputs & Forms
Keep enrollment and scheduling controls grouped, labeled, and visually quieter than rewards.

### Status & Build Page
Show current level, completed milestones, attendance, reward balance, and program deadlines.

### Navigation
Home, Communities, Arena, Results, and Profile remain in the bottom bar.

### Footer
Keep the utility footer neutral so the illustrated map and profile art stay dominant.

## Do's and Don'ts

### Do
- Tie rewards to visible actions.
- Keep real workout progress explicit.
- Separate game reveal from planning.

### Don't
- Don't let currency obscure fitness goals.
- Don't use dark reward styling on long forms.
- Don't crop collectible objects.

## Responsive Behavior

### Breakpoints
Use a full-bleed phone map, expanded side panels on tablet, and a capped utility column on wide screens.

### Touch Targets
Keep map nodes, rewards, tasks, schedule, tabs, and close controls at least 44px.

### Collapsing Strategy
Preserve program status, next workout, progress, and primary action; collapse decorative map context first.

### Image Behavior
Contain avatars and collectibles; scale map art without hiding the active route.

## Iteration Guide
1. Build program enrollment, detail, schedule, and progress.
2. Add map levels, currencies, and rewards.
3. Add profiles, reports, communities, and advanced game states.

## Known Gaps
- Tokens were inferred visually from sampled mobile screens.
- Dumbbells, Enroll in the program, and Visiting calendar were image-reviewed.
- Community and arena flows were not deeply sampled.

</design-context>
