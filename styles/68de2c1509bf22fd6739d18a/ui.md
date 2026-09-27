<design-context>
---
version: alpha
name: Pomosch-design-analysis
description: "A humane aid interface combining a white canvas, documentary photography, charcoal support actions, bright blue navigation, lavender progress bars, green completion states, and small pastel line illustrations."
colors: {primary: "#348EF4", on-primary: "#FFFFFF", primary-hover: "#55A4F7", primary-focus: "#2472C9", ink: "#171A1C", ink-muted: "#6C7075", ink-subtle: "#9DA1A6", ink-tertiary: "#C7CACD", canvas: "#FFFFFF", surface-1: "#F7F7F8", surface-2: "#F0EEF8", surface-3: "#E7E5EF", surface-4: "#DAD8E3", hairline: "#E7E8EA", hairline-strong: "#CDD1D5", hairline-tertiary: "#B6BCC1", inverse-canvas: "#293331", inverse-surface-1: "#36413F", inverse-surface-2: "#46514F", inverse-ink: "#FFFFFF", brand-secure: "#8C7CF4", semantic-success: "#7DD12E", semantic-overlay: "#111514"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 500, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 44px}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  beneficiary-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px}
  report-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.semantic-success}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Pomosch balances trust and warmth. Documentary photography makes aid concrete, white and pale lavender keep financial detail calm, charcoal anchors the support action, and blue marks navigation and project-level tools.

**Key Characteristics:** white canvas, documentary portraits, charcoal donation actions, blue navigation, lavender progress, lime completion, pastel line illustrations, and transparent reporting modules.

## Colors

### Brand & Accent

Bright blue owns active navigation, project support shortcuts, and links. Charcoal is the primary donation action; lavender carries collection progress.

### Surface

White is continuous, pale gray and lavender group financial or reporting modules, and photography fills the top of beneficiary cards.

### Text

Near-black leads names, amounts, and headings; gray carries location, cadence, conditions, and explanatory copy.

### Semantic

Lime green confirms collected goals, blue marks action, lavender marks progress, and red flags urgent remaining time.

## Typography

### Font Family

Use SF Pro Display for headings and amounts and SF Pro Text for aid details, reports, and navigation.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 500 | Project amount |
| headline | 21px | 600 | Person or section |
| card-title | 16px | 600 | Aid target |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Location and status |

### Principles

- Lead with person, need, amount, and progress.
- Keep evidence and reporting easy to scan.
- Use restrained weight and color to avoid sensationalizing aid.

### Note on Font Substitutes

Use the platform sans with clear Cyrillic, tabular amounts, and soft medium weights.

## Layout

### Spacing System

Use a 4px base, 12–16px card padding, 16px gutters, and clear vertical gaps between need, progress, evidence, and action.

### Grid & Container

Help is a single feed of photo-led cards; Project is a vertically grouped information page; finances and reports use compact two-column summaries and lists.

### Whitespace Philosophy

Whitespace supports dignity and transparency. Avoid crowding a beneficiary profile with unrelated campaigns or gamified decoration.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Project and navigation |
| 1 | Pale rounded group | Progress and reports |
| 2 | Photo-led card | Beneficiary profile |
| 3 | Sheet over context | Transfer and focused detail |

### Decorative Depth

Use documentary photography and small pastel line art; keep financial surfaces nearly flat with subtle grouping.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small state |
| rounded-sm | 8px | Buttons and chips |
| rounded-md | 12px | Report card |
| rounded-lg | 18px | Beneficiary card |
| rounded-full | full | Avatar, supporter stack, status pill |

### Photography & Illustration Geometry

Use wide documentary portraits with a soft curved lower edge; place line illustrations inside compact pale rounded panels.

## Components

### Buttons

Primary help actions use charcoal, project shortcuts use blue, and completed states use lime-accented pills.

### Pricing Tabs

Beneficiary categories, payment history, and subscription history use compact chips or underlined text tabs.

### Cards & Containers

Beneficiary cards align photo, cadence, category, location, goal, progress, supporters, and action; report modules show explicit amounts and documents.

### Inputs & Forms

Search, filters, profile forms, and transfer sheets use pale grouped controls; native behavior remains intact while presentation follows this palette and spacing.

### Status & Build Page

Keep remaining days, amount raised, collection status, supporter count, reporting, and payment outcome adjacent to the related aid action.

### Navigation

Use five destinations for Project, Payments, Help, Doing, and Awards, with blue active state and gray inactive icons.

### Footer

No footer; bottom navigation or the current support action owns the safe area.

## Do's and Don'ts

### Do

- Keep progress, evidence, and beneficiary context visible.
- Use photography and illustration for different roles.
- Style native controls to inherit this visual system.

### Don't

- Don't gamify urgent need with celebratory visual noise.
- Don't hide reports or transfer conditions behind promotional copy.
- Don't replace real beneficiary photography with generic illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten financial summaries |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand cards and gutters |

### Touch Targets

Filters, map, beneficiary cards, support actions, tabs, and report rows remain at least 44px.

### Collapsing Strategy

Preserve person, need, amount, progress, reports, and support action; reduce secondary stories and partner content first.

### Image Behavior

Crop portraits respectfully around the subject and preserve curved card transitions; never stretch reporting imagery.

## Iteration Guide

Tune Help and beneficiary detail first, then transfer, Project reporting, Payments, Doing, and Awards.

## Known Gaps

- Failed transfer recovery was only partially sampled.
- Long-term recurring-payment management was not deeply reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
