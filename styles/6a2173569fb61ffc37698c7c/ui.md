<design-context>
---
version: alpha
name: Strava-design-analysis
description: "A bright, disciplined sports-social interface built on white, near-black type, light gray grouping surfaces, and a single high-energy orange accent. Bold sans-serif headings and large metric numerals make performance data immediate. Rounded selection tiles, compact progress indicators, activity photography, route maps, and simple line icons create a practical athletic tone without making the interface feel like a dashboard."

colors:
  primary: "#FC4C02"
  on-primary: "#FFFFFF"
  primary-hover: "#FF641F"
  primary-focus: "#D94100"
  ink: "#111111"
  ink-muted: "#4F4F4F"
  ink-subtle: "#777777"
  ink-tertiary: "#A0A0A0"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F2"
  surface-2: "#EBEBE8"
  surface-3: "#DEDEDA"
  surface-4: "#D2D2CE"
  hairline: "#E3E3E0"
  hairline-strong: "#C8C8C3"
  hairline-tertiary: "#AFAFAA"
  inverse-canvas: "#0A0A0A"
  inverse-surface-1: "#1D1D1D"
  inverse-surface-2: "#292929"
  inverse-ink: "#FFFFFF"
  brand-secure: "#FFB28C"
  semantic-success: "#66C92B"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: SF Pro Display
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -1.2px
  display-lg:
    fontFamily: SF Pro Display
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.10
    letterSpacing: -0.8px
  display-md:
    fontFamily: SF Pro Display
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  headline:
    fontFamily: SF Pro Display
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.3px
  card-title:
    fontFamily: SF Pro Display
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  subhead:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.1px
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body:
    fontFamily: SF Pro Text
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: SF Pro Text
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: SF Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  xxl: 28px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 48px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 13px 24px
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 11px 18px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
  activity-choice:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 14px 12px
  activity-choice-selected:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 14px 12px
  activity-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  metric-panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 16px
  filter-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
  status-badge:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 52px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 6px 8px
---

## Overview

Strava uses a disciplined white interface to make activity data, progress, and community content easy to scan. Orange supplies energy and direction but stays concentrated on primary actions and active navigation. Photography and maps provide context; charts and bold numerals provide proof.

**Key Characteristics:**
- White canvas with black type and light gray grouping surfaces.
- High-energy orange reserved for forward actions and selected destinations.
- Strong bold headlines and large metric numerals.
- Two-column selectable activity tiles.
- Activity photography, maps, charts, and progress rings.
- Persistent five-item bottom navigation with a centered Record action.

## Colors

### Brand & Accent
- Orange is the sole product accent for continue, join, connect, underline, and active navigation.
- Lighter orange supports pressed or subtle outlined states.

### Surface
- White remains dominant across feeds, details, and metrics.
- Light warm gray groups onboarding choices and checklist tasks.
- Black is used as an inverse selected state and photo overlay.

### Text
- Near-black carries titles and performance numerals.
- Mid-gray handles descriptions and labels.
- Tertiary gray marks inactive or unavailable data.

### Semantic
- Bright green communicates completed goals and progress success.
- Dark overlays support text on photography and contextual coach marks.

## Typography

### Font Family

- SF Pro Display for large onboarding questions, activity titles, and metrics.
- SF Pro Text for descriptions, labels, and controls.
- SF Mono may be used sparingly for live numeric readouts.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40px | 800 | Hero metric or onboarding title |
| display-lg | 32px | 800 | Community/photo message |
| display-md | 26px | 700 | Main section |
| headline | 22px | 700 | Activity title |
| card-title | 18px | 700 | Challenge or task title |
| body | 15px | 400 | Main copy |
| caption | 11px | 400 | Metric labels and nav text |

### Principles

- Pair large bold numbers with much smaller labels.
- Keep descriptions readable and neutral rather than sporty or italic.
- Use orange text only for actionable labels.

### Note on Font Substitutes

Use the Apple system family; it reproduces the compact metric hierarchy and familiar control behavior.

## Layout

### Spacing System

Use a 4px base with 12–16px inside choice tiles and 20–32px between major sections.

### Grid & Container

Onboarding uses two equal columns. Feed and activity details are single-column. Activity media may form a three-image strip. Challenge recommendations can return to two columns.

### Whitespace Philosophy

White space separates metrics and actions more often than enclosing cards. Keep data clusters close, then use thin dividers or larger gaps between unrelated sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Feed, metrics, navigation |
| 1 | Light gray fill | Choices, setup tasks, acknowledgements |
| 2 | Thin border or subtle shadow | Focused metric cards and controls |
| 3 | Black coach mark | Contextual guidance |

### Decorative Depth

Depth comes from maps, photo strips, challenge banners, and small progress graphics. Avoid ornamental gradients behind data.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Compact metric groups |
| rounded-md | 12px | Choice and task tiles |
| rounded-lg | 16px | Recommendation cards |
| rounded-xl | 22px | Large panels |
| rounded-pill | full | Primary buttons and filter chips |
| rounded-full | full | Record action and progress rings |

### Photography & Illustration Geometry

Use edge-to-edge landscape banners for community and challenges, tall activity photos in equal gutters, and neutral map crops. Keep route and chart geometry crisp.

## Components

### Buttons

Primary actions are full-width orange pills with white semibold labels. Secondary actions use orange outlines or orange text on white. Inverse black appears for selected choices rather than the main CTA.

### Pricing Tabs

No pricing tabs appeared in the reviewed flows. If needed, use compact orange-underlined tabs or outlined pills.

### Cards & Containers

Setup tasks use pale gray rounded rows. Activity content mostly lives directly on white. Challenge cards combine a strong banner, concise metadata, and an orange join action.

### Inputs & Forms

The sampled flows emphasize choices and filters rather than text entry. When input is needed, use white or pale-gray fields with a visible border and system typography.

### Status & Build Page

Goals use rings and progress bars. Completion becomes green. Live and historical metrics prioritize numerals; status decoration remains small.

### Navigation

Use a five-item bottom bar for Home, Maps, Record, Groups, and You. Active destinations become orange; Record remains a strong centered circle. Nested group destinations use an underlined top tab row.

### Footer

Do not add a footer. Continue the white canvas to the safe area beneath the bottom navigation.

## Do's and Don'ts

### Do

- Reserve orange for action and selection.
- Keep metric numerals bold and labels compact.
- Use maps and photography as evidence, not decoration.
- Preserve two-column choices where comparison matters.
- Attach social actions directly to the activity.

### Don't

- Don't place every metric inside a raised card.
- Don't introduce multiple bright accent colors.
- Don't use dark mode as the default system.
- Don't hide progress behind decorative charts.
- Don't make the Record action visually equal to the other tabs.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighter two-column choices and metric labels |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Wider media and chart plots, same primary columns |

### Touch Targets

Buttons, choice tiles, nav items, and chart info controls retain at least 44px hit areas.

### Collapsing Strategy

Activity and filter chips scroll horizontally. Metric clusters wrap to two rows before reducing type. Photo strips may become horizontally scrollable when narrow.

### Image Behavior

Use aspect-fill for photography and stable fixed heights for map or chart sections. Preserve the route, subject, or challenge mark in the crop.

## Iteration Guide

Tune metric hierarchy and orange restraint first, then photography crops, then chart density. If the screen feels like enterprise analytics, remove borders and simplify labels.

## Known Gaps

- Live recording controls beyond the sampled lock-screen summary were not observed.
- Dark-mode variants were not present in the reviewed flows.
- Tablet, landscape, and accessibility text-size behavior was not shown.
</design-context>
