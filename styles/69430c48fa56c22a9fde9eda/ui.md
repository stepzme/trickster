<design-context>
---
version: alpha
name: My-MTS-design-analysis
description: "A modular telecom dashboard built from soft white and lavender surfaces, MTS magenta actions, cyan financial utilities, rounded account cards, and compact promotional story tiles."
colors: {primary: "#FF0032", on-primary: "#FFFFFF", primary-hover: "#FF3158", primary-focus: "#D9002B", ink: "#19191C", ink-muted: "#686970", ink-subtle: "#9B9CA3", ink-tertiary: "#C4C5CA", canvas: "#F7F6FB", surface-1: "#FFFFFF", surface-2: "#F0EEF5", surface-3: "#E5E2EA", surface-4: "#D8D4DE", hairline: "#E6E3EA", hairline-strong: "#CDC9D2", hairline-tertiary: "#B4AFBA", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#41424A", inverse-ink: "#FFFFFF", brand-secure: "#8872F4", semantic-success: "#2CCB8A", semantic-overlay: "#1A1B20"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6px, sm: 12px, md: 18px, lg: 24px, xl: 28px, xxl: 32px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

My MTS is a broad service dashboard made manageable through large white modules, persistent bottom destinations, bright magenta actions, and color-coded utilities.

**Key Characteristics:** soft lavender canvas, white rounded modules, MTS magenta, cyan money icons, purple premium states, story rails, and generous dashboard spacing.

## Colors

### Brand & Accent

Magenta owns top-up, account emphasis, active navigation, and major commitments; cyan supports transfers and payment utilities; purple marks premium.

### Surface

Use pale lavender-gray behind crisp white modules, with slightly tinted sheets for focused decisions.

### Text

Near-black leads balances and service titles; restrained gray carries allowance, account, and explanatory detail.

### Semantic

Green confirms payment or available status; blue communicates information; warning colors stay distinct from brand magenta.

## Typography

### Font Family

Use SF Pro Display for balances and service headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with balance, allowance, service status, or payment destination.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with clear tabular numerals and robust small Cyrillic.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home uses one wide modular column and a compact story rail; Money uses action grids followed by wide payment sections.

### Whitespace Philosophy

Separate major service modules generously while keeping their internal rows concise.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Rely on grouped surface contrast and broad rounded forms; use soft glow or 3D art only inside bounded campaigns and receipts.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 6px | Badges |
| rounded-sm | 12px | Buttons and fields |
| rounded-md | 18px | Cards |
| rounded-lg | 24px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Campaign tiles use compact rounded frames; service icons stay simple and contained in tinted rounded squares.

## Components

### Buttons

Full-width magenta buttons drive top-up and service commitments; cyan icons identify money actions without replacing primary hierarchy.

### Pricing Tabs

Number, card, and payment modes use pale segmented controls with one clear filled selection.

### Cards & Containers

Modules combine a heading, one decisive metric, short status, and a single action or disclosure affordance.

### Inputs & Forms

Search and payment fields use pale fills, clear labels, and magenta focus or confirmation styling.

### Status & Build Page

Keep debt, allowance limits, payment outcome, connected services, and transfer destination close to the affected module.

### Navigation

Use four bottom destinations with magenta for the active item and soft gray for inactive icons and labels.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve the modular hierarchy and color-coded service domains.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't make every module promotional or use magenta for all secondary icons.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten secondary metadata |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44px.

### Collapsing Strategy

Retain balance, primary action, and tariff facts; fold secondary services and story content below the core account state.

### Image Behavior

Keep promotional visuals within story or banner bounds and preserve text-safe areas; do not let them overtake operational modules.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
