<design-context>
---
version: alpha
name: Okko-design-analysis
description: "A cinematic black streaming system built from oversized key art, vivid posters, heavy white headings, quiet outline navigation, and violet gradient subscription actions."
colors: {primary: "#7A18F5", on-primary: "#FFFFFF", primary-hover: "#913BFA", primary-focus: "#5D0EC6", ink: "#F7F7F8", ink-muted: "#ABABB0", ink-subtle: "#74747A", ink-tertiary: "#4F5056", canvas: "#000000", surface-1: "#171719", surface-2: "#252529", surface-3: "#333338", surface-4: "#414147", hairline: "#29292D", hairline-strong: "#414147", hairline-tertiary: "#57575E", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#121316", brand-secure: "#26C46A", semantic-success: "#2BC66F", semantic-overlay: "#000000"}
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
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Okko lets film, series, channels, and sport artwork dominate a pure black interface while white editorial type and violet subscription actions maintain a clear viewing hierarchy.

**Key Characteristics:** pure black canvas, oversized key art, poster rails, heavy white headings, violet purchase gradient, dark utility circles, and live sports cards.

## Colors

### Brand & Accent

Violet identifies subscription and major commerce actions; title artwork supplies nearly all other color.

### Surface

Use black for the canvas, deep charcoal for filters and schedules, and transparent overlays on key art.

### Text

White leads titles and section headings; gray supports genre, duration, season, age, and schedule status.

### Semantic

Green indicates rating or availability, red marks live state, and violet remains commercial rather than semantic.

## Typography

### Font Family

Use SF Pro Display for content and editorial headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Hero or state |
| headline | 21px | 700 | Section title |
| card-title | 16px | 600 | Primary item |
| body | 13px | 400 | Detail |
| caption | 10px | 400 | Metadata |

### Principles

- Lead with the title, live event, or playback decision.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a heavy neutral system sans; preserve compact poster metadata and large Cyrillic headings.

## Layout

### Spacing System

Use a 4px base, 8–12px internal gaps, and 16px horizontal screen gutters.

### Grid & Container

Home and Sport use horizontal poster rails; Catalog uses a two-column category grid and vertical genre list.

### Whitespace Philosophy

Let hero art breathe, but keep poster rails and event schedules visually dense.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use full-bleed art, gradients for text protection, and dark raised utility circles rather than card shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Buttons and fields |
| rounded-md | 12px | Cards |
| rounded-lg | 16px | Feature panels |
| rounded-full | full | Circular controls |

### Photography & Illustration Geometry

Posters remain portrait, sport banners stay wide, and full detail art may crop edge-to-edge.

## Components

### Buttons

Major subscription or purchase actions use a full-width violet gradient; media utilities use dark circular controls.

### Pricing Tabs

Genre and sport filters use compact dark chips with one light or content-specific selection.

### Cards & Containers

Posters carry title imagery; match and schedule cards align time, teams, state, and reminder without excess decoration.

### Inputs & Forms

Search uses a high-contrast light field on black, styled to the system rather than default platform chrome.

### Status & Build Page

Keep live, upcoming, rating, age, price, subscription, and season status adjacent to content art.

### Navigation

Use five outline destinations on black, with solid white icon and label for the active destination.

### Footer

No footer; persistent navigation or the current action owns the bottom safe area.

## Do's and Don'ts

### Do

- Preserve content art as the main source of color and atmosphere.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't place unrelated gradients behind every list or poster rail.
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

Preserve hero, title, and watch or subscribe action; reduce secondary metadata and rail previews first.

### Image Behavior

Maintain poster and banner ratios, protect faces, and use dark gradients only where typography needs contrast.

## Iteration Guide

Tune the core task first, then state clarity, navigation rhythm, secondary tools, and edge cases.

## Known Gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
