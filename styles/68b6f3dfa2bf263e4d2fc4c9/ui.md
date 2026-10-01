<design-context>
---
version: 1
platform: iOS
name: Idoo-design-analysis
description: "An airy editorial city-discovery interface built on white, thin black typography, organic bubble selectors, cloud-like section silhouettes, and a vivid coral-red action color. Expressive wide display lettering, fashion-sketch illustration, playful chips, and large place photography make route planning feel more like browsing a culture magazine than operating a map utility."
colors:
  primary: "#FF3945"
  on-primary: "#FFFFFF"
  primary-focus: "#DD2632"
  ink: "#101014"
  ink-muted: "#4F4F55"
  ink-subtle: "#87878E"
  ink-tertiary: "#B0B0B6"
  canvas: "#FFFFFF"
  surface-1: "#F7F7FA"
  surface-2: "#EEF0F8"
  surface-3: "#E6E7F0"
  surface-4: "#DCDDE8"
  hairline: "#E4E4E8"
  hairline-strong: "#C7C7CE"
  hairline-tertiary: "#A8A8B0"
  inverse-canvas: "#111014"
  inverse-surface-1: "#242329"
  inverse-surface-2: "#33313A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#F8C7D0"
  semantic-success: "#74C88A"
  semantic-overlay: "#1A1A20"
typography:
  display-xl: {fontFamily: Unbounded, fontSize: 40, fontWeight: 400, lineHeight: 1.02, letterSpacing: -1.4}
  display-lg: {fontFamily: Unbounded, fontSize: 32, fontWeight: 400, lineHeight: 1.06, letterSpacing: -1.0}
  display-md: {fontFamily: Unbounded, fontSize: 26, fontWeight: 400, lineHeight: 1.10, letterSpacing: -0.6}
  headline: {fontFamily: SF Pro Display, fontSize: 23, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3}
  card-title: {fontFamily: Unbounded, fontSize: 19, fontWeight: 400, lineHeight: 1.15, letterSpacing: -0.3}
  subhead: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: -0.1}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: Unbounded, fontSize: 13, fontWeight: 400, lineHeight: 1.20, letterSpacing: -0.1}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 14
  lg: 20
  xl: 28
  xxl: 36
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 48
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 24]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 20]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 16]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 20]}
  interest-bubble: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 12}
  interest-bubble-selected: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 12}
  guide-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20}
  tag-pill: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  coach-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 24}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Idoo is a white, editorial route finder with playful variable-size bubbles and oversized typographic personality. Coral actions, organic silhouettes, fashion sketches, and place photography keep the system expressive while navigation remains sparse.

**Key Characteristics:**
- White canvas and thin black line work.
- Wide geometric display type for identity and editorial titles.
- Interest choices expressed as loose circles rather than a rigid grid.
- Coral-red full-width action pills.
- Cloud-edged guide surfaces and large rounded photography.
- Minimal three-item bottom navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas and thin black line work.
- Typography consistently uses wide geometric display type for identity and editorial titles.
- The reference consistently shows interest choices expressed as loose circles rather than a rigid grid.
- Sampled screens consistently use coral-red full-width action pills.
- The reference consistently shows cloud-edged guide surfaces and large rounded photography.
- Navigation consistently uses minimal three-item bottom navigation.

# Color and surfaces

### Brand & Accent
- Coral red marks the route action, accepted choice, and active destination.
- Soft peach, pink, and lavender support selected bubbles and editorial art.

### Surface
- White is dominant; pale lavender-gray supports sheets and guide silhouettes.
- Black inverse surfaces appear in tags and route decision controls.

### Text
- Near-black carries display and body.
- Cool grays distinguish secondary copy, inactive tabs, and progress.

### Semantic
- Success stays muted and never competes with coral.
- Dark overlays protect route text over place imagery.

# Typography

### Font Family

- Unbounded or a similar wide geometric face for logos, guide titles, and buttons.
- SF Pro for explanatory text and controls.
- SF Mono only for technical route metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40 points | 400 | Identity statement |
| display-lg | 32 points | 400 | Guide title |
| display-md | 26 points | 400 | Section opener |
| headline | 23 points | 700 | Sheet title |
| card-title | 19 points | 400 | Place title |
| body | 15 points | 400 | Editorial copy |
| caption | 11 points | 400 | Route facts and tabs |

### Principles

- Use display type in short lines with generous width.
- Keep longer explanations in a neutral system sans.
- Let typography define structure before adding dividers.

### Note on Font Substitutes

Unbounded is an appropriate open substitute; use SF Pro for all utility text.

# Screen composition

### Spacing System

Use a 4 points base with 16–24 points content padding and 32–48 points around identity moments.

### Grid & Container

Interest bubbles form an irregular field. Guides and places use one vertical editorial column with horizontal theme chips.

### Whitespace Philosophy

Generous white space is part of the playful composition. Do not align every bubble or card edge to a strict grid.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Discovery and guides |
| 1 | Pale fill or organic edge | Guide containers |
| 2 | Rounded white sheet over dimmed canvas | Coaching and choices |
| 3 | Image overlay | Route proposal |

### Decorative Depth

Use irregular silhouettes, light gradients, and overlapping illustration crops rather than shadows.

# Navigation appearance

Use three bottom destinations with a small expressive active icon. Search and history remain top-level contextual actions.

# Components

### Buttons

Primary buttons are wide coral pills with white display labels. Route decisions may pair coral and dark outlined circles.

### Cards & Containers

Guides combine an organic pale header, large editorial title, body copy, route facts, tags, and photography. Place details avoid generic card chrome.

### Inputs & Forms

Most input is choice-based. Starting-point search appears as a pale rounded field; keep text entry visually secondary.

# Imagery and icons

Use irregular silhouettes, light gradients, and overlapping illustration crops rather than shadows.

Photography uses large rounded crops. Illustration can extend beyond the frame; organic cloud masks may separate content sections.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Progress uses thin segmented bars at the top of onboarding and route proposals. Selection appears through fill, not checkmarks.

# iOS adaptation

### Touch Targets

Small bubbles retain enlarged invisible hit areas. CTAs and navigation remain at least 44 points high.

### Collapsing Strategy

Theme chips scroll horizontally. Long guide copy expands vertically; route actions stay fixed above the safe area.

### Image Behavior

Use aspect-fill and preserve architectural or human focal points. Avoid narrow banner crops for place details.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't force bubbles into equal cards.
- Don't turn guides into a conventional map list.
- Don't add heavy shadows or borders.
- Don't use multiple saturated CTA colors.
- Don't replace real places with illustration.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
