<design-context>
---
version: 1
platform: iOS
name: Pomosch-design-analysis
description: "A humane aid interface combining a white canvas, documentary photography, charcoal support actions, bright blue navigation, lavender progress bars, green completion states, and small pastel line illustrations."
colors: {primary: "#348EF4", on-primary: "#FFFFFF", primary-focus: "#2472C9", ink: "#171A1C", ink-muted: "#6C7075", ink-subtle: "#9DA1A6", ink-tertiary: "#C7CACD", canvas: "#FFFFFF", surface-1: "#F7F7F8", surface-2: "#F0EEF8", surface-3: "#E7E5EF", surface-4: "#DAD8E3", hairline: "#E7E8EA", hairline-strong: "#CDD1D5", hairline-tertiary: "#B6BCC1", inverse-canvas: "#293331", inverse-surface-1: "#36413F", inverse-surface-2: "#46514F", inverse-ink: "#FFFFFF", brand-secure: "#8C7CF4", semantic-success: "#7DD12E", semantic-overlay: "#111514"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 500, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 44}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  beneficiary-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  report-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Pomosch balances trust and warmth. Documentary photography makes aid concrete, white and pale lavender keep financial detail calm, charcoal anchors the support action, and blue marks navigation and project-level tools.

**Key Characteristics:** white canvas, documentary portraits, charcoal donation actions, blue navigation, lavender progress, lime completion, pastel line illustrations, and transparent reporting modules.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas.
- The reference consistently shows documentary portraits.
- The reference consistently shows charcoal donation actions.
- Navigation consistently uses blue navigation.
- The reference consistently shows lavender progress.
- The reference consistently shows lime completion.
- The reference consistently shows pastel line illustrations.
- The reference consistently shows transparent reporting modules.

# Color and surfaces

### Brand & Accent

Bright blue owns active navigation, project support shortcuts, and links. Charcoal is the primary donation action; lavender carries collection progress.

### Surface

White is continuous, pale gray and lavender group financial or reporting modules, and photography fills the top of beneficiary cards.

### Text

Near-black leads names, amounts, and headings; gray carries location, cadence, conditions, and explanatory copy.

### Semantic

Lime green confirms collected goals, blue marks action, lavender marks progress, and red flags urgent remaining time.

# Typography

### Font Family

Use SF Pro Display for headings and amounts and SF Pro Text for aid details, reports, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 500 | Project amount |
| headline | 21 points | 600 | Person or section |
| card-title | 16 points | 600 | Aid target |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Location and status |

### Principles

- Lead with person, need, amount, and progress.
- Keep evidence and reporting easy to scan.
- Use restrained weight and color to avoid sensationalizing aid.

### Note on Font Substitutes

Use the platform sans with clear Cyrillic, tabular amounts, and soft medium weights.

# Screen composition

### Spacing System

Use a 4 points base, 12–16 points card padding, 16 points gutters, and clear vertical gaps between need, progress, evidence, and action.

### Grid & Container

Help is a single feed of photo-led cards; Project is a vertically grouped information page; finances and reports use compact two-column summaries and lists.

### Whitespace Philosophy

Whitespace supports dignity and transparency. Avoid crowding a beneficiary profile with unrelated campaigns or gamified decoration.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Project and navigation |
| 1 | Pale rounded group | Progress and reports |
| 2 | Photo-led card | Beneficiary profile |
| 3 | Sheet over context | Transfer and focused detail |

### Decorative Depth

Use documentary photography and small pastel line art; keep financial surfaces nearly flat with subtle grouping.

# Navigation appearance

Use five destinations for Project, Payments, Help, Doing, and Awards, with blue active state and gray inactive icons.

# Components

### Buttons

Primary help actions use charcoal, project shortcuts use blue, and completed states use lime-accented pills.

### Cards & Containers

Beneficiary cards align photo, cadence, category, location, goal, progress, supporters, and action; report modules show explicit amounts and documents.

### Inputs & Forms

Search, filters, profile forms, and transfer sheets use pale grouped controls; native behavior remains intact while presentation follows this palette and spacing.

# Imagery and icons

Use documentary photography and small pastel line art; keep financial surfaces nearly flat with subtle grouping.

Use wide documentary portraits with a soft curved lower edge; place line illustrations inside compact pale rounded panels.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep remaining days, amount raised, collection status, supporter count, reporting, and payment outcome adjacent to the related aid action.

# iOS adaptation

### Touch Targets

Filters, map, beneficiary cards, support actions, tabs, and report rows remain at least 44 points.

### Collapsing Strategy

Preserve person, need, amount, progress, reports, and support action; reduce secondary stories and partner content first.

### Image Behavior

Crop portraits respectfully around the subject and preserve curved card transitions; never stretch reporting imagery.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't gamify urgent need with celebratory visual noise.
- Don't hide reports or transfer conditions behind promotional copy.
- Don't replace real beneficiary photography with generic illustration.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
