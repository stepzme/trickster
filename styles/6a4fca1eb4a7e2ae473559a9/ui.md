<design-context>
---
version: 1
platform: iOS
name: Numo-design-analysis
description: "A black ADHD-support interface with condensed white display type, electric blue task actions, hot orange-red streak energy, sparse outlined controls, and saturated editorial story graphics."
colors: {primary: "#087CFF", on-primary: "#FFFFFF", primary-focus: "#0065D6", ink: "#F8F8F8", ink-muted: "#A4A5AA", ink-subtle: "#74757B", ink-tertiary: "#505157", canvas: "#000000", surface-1: "#151619", surface-2: "#25262A", surface-3: "#333439", surface-4: "#414248", hairline: "#2B2C31", hairline-strong: "#43444A", hairline-tertiary: "#585A61", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#FF3B20", semantic-success: "#35C878", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Numo is a stark black productivity system where a sparse daily task surface, bold condensed headings, blue creation controls, and saturated editorial learning covers create motivational intensity.

**Key Characteristics:** pure black canvas, condensed white type, electric blue actions, orange-red streaks, outlined filters, floating voice/add controls, and collage story covers.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: pure black canvas.
- The reviewed screens show this treatment: condensed white type.
- The reviewed screens show this treatment: electric blue actions.
- The reviewed screens show this treatment: orange-red streaks.
- The reviewed screens show this treatment: outlined filters.
- The reviewed screens show this treatment: floating voice/add controls.
- The reviewed screens show this treatment: collage story covers.

# Color and surfaces

### Brand & Accent

Electric blue owns task creation, active navigation, and primary story continuation. Orange-red carries streak, urgency, and motivational energy.

### Surface

Use pure black for primary screens, charcoal for completed tasks and filters, and deep blue-black for learning detail.

### Text

White leads dates, tasks, and collection headings; cool gray supports durations, prompts, and inactive navigation.

### Semantic

Green confirms completion; orange-red should remain a motivation signal and not replace destructive feedback.

# Typography

### Font Family

Use SF Pro Display for bold motivational headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 21pt | 700 | Section title |
| card-title | 16pt | 600 | Primary item |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Metadata |

### Principles

- Lead with the day, task, streak, or next learning story.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a narrow heavy display sans such as Impact or a condensed grotesk, paired with a neutral system sans.

# Screen composition

### Grid & Container

Do uses one sparse task column and horizontal date strip; Hack uses two-column graphic covers and single-column story detail.

### Whitespace Philosophy

Large black gaps are deliberate around short daily lists; learning and community screens can become denser.

# Navigation appearance

Use five icon-and-label destinations on black, with electric blue for the active destination.

# Components

### Buttons

Primary actions are electric blue pills; voice is white circular; filters are black outlined pills with white labels.

Routine, Health, and Relax use outlined pills; the selected date uses a thin white rounded outline with blue detail.

### Cards & Containers

Tasks use dark blue or charcoal full-width rows; learning collections are graphic covers rather than conventional cards.

### Inputs & Forms

Task capture should inherit the black canvas, strong white text, blue focus, and floating action language.

### Status & Build Page

Keep streak, completion, story progress, votes, and team state beside the content they affect.

### Navigation

Use five icon-and-label destinations on black, with electric blue for the active destination.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use saturated cover texture and floating bottom actions; ordinary task controls stay flat and sharply bounded.

# States

Keep streak, completion, story progress, votes, and team state beside the content they affect.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Keep current day, task action, and next story first; reduce community metadata before primary participation.

### Image Behavior

Allow cover type and collage to crop within tiles, but keep faces and video thumbnails legible.

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

- Preserve the sparse daily surface and energetic editorial learning language.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't fill all empty black space with generic cards or gradients.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- iPad and landscape layouts were not represented.

</design-context>
