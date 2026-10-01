<design-context>
---
version: 1
platform: iOS
name: Heros-Journey-design-analysis
description: "A gamified fitness product that combines a light utility interface with a 3D isometric journey map, saturated purple rewards, collectible chests, fantasy avatars, and visible program progression. Game layers are vivid; schedules and performance details remain mostly neutral and card-based."
colors: { primary: "#7A20F4", on-primary: "#FFFFFF", primary-soft: "#F0E5FF", accent: "#21B979", ink: "#17171A", ink-muted: "#77777F", ink-subtle: "#B0B0B7", canvas: "#F5F5F7", surface-1: "#FFFFFF", surface-2: "#ECECEF", hairline: "#DFDFE4", semantic-success: "#20B675", semantic-warning: "#F1A934", semantic-danger: "#E14E64", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  progress-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  reward-card: { backgroundColor: "#3A136A", textColor: "#FFFFFF", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
---

# Overview

Hero's Journey turns fitness programs into a map of levels, rewards, collectible items, and visible performance milestones.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A gamified fitness product that combines a light utility interface with a 3D isometric journey map, saturated purple rewards, collectible chests, fantasy avatars, and visible program progression.
- The source records this color relationship: Use electric purple for enrollment and rewards and green for completed fitness progress.
- The recorded display style is 38 points while the body style is 14 points.
- Navigation appears as follows: Home, Communities, Arena, Results, and Profile remain in the bottom bar.
- The reviewed screens use this hierarchy: Game layers are vivid; schedules and performance details remain mostly neutral and card-based.

# Color and surfaces

### Brand & Accent
Use electric purple for enrollment and rewards and green for completed fitness progress.

### Surface
Keep planning and reports on white or pale gray; use dark violet only for reward moments.

### Text
Use near-black for task content, gray for metadata, and white on saturated game surfaces.

### Semantic
Use green for completed, orange for calories or attention, red for pulse, and purple for progression.

# Typography

### Font Family
Use SF Pro Display for reward and program titles and SF Pro Text for schedules, tasks, and metrics.

### Principles
Make program level, progress, and next action stronger than supporting game currency.

### Note on Font Substitutes
Use the platform sans or Inter with tabular metrics.

# Screen composition

### Spacing System
Use a 4pt base, 14pt gutters, 12pt card gaps, and 16pt panel padding.

### Grid & Container
The home map fills the background; sheets contain task choices, while program detail stacks progress, shortcuts, schedule, and goals.

### Whitespace Philosophy
Let game scenes feel abundant but keep workout planning calm and vertically ordered.

# Navigation appearance

Home, Communities, Arena, Results, and Profile remain in the bottom bar.

# Components

### Buttons
Use purple filled buttons for progression and white filled buttons on dark reward screens.

Use week selectors, profile tabs, and compact calendar controls.

### Cards & Containers
Use program sheets, task cards, reward lists, chests, reports, and metric rows.

### Inputs & Forms
Keep enrollment and scheduling controls grouped, labeled, and visually quieter than rewards.

### Status & Build Page
Show current level, completed milestones, attendance, reward balance, and program deadlines.

### Navigation
Home, Communities, Arena, Results, and Profile remain in the bottom bar.

# Imagery and icons

Use raised sheets and cards over immersive scenes; reward reveals may use stronger glow and depth.

### Decorative Depth
Use isometric roads, buildings, chests, rays, 3D items, and fantasy avatars.

# States

Show current level, completed milestones, attendance, reward balance, and program deadlines.

# iOS adaptation

### Touch Targets
Keep map nodes, rewards, tasks, schedule, tabs, and close controls at least 44pt.

### Collapsing Strategy
Preserve program status, next workout, progress, and primary action; collapse decorative map context first.

### Image Behavior
Contain avatars and collectibles; scale map art without hiding the active route.

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
- Tie rewards to visible actions.
- Keep real workout progress explicit.
- Separate game reveal from planning.

### Don't
- Don't let currency obscure fitness goals.
- Don't use dark reward styling on long forms.
- Don't crop collectible objects.

</design-context>
