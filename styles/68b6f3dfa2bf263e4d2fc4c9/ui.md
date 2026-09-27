<design-context>
---
version: alpha
name: Idoo-design-analysis
description: "An airy editorial city-discovery interface built on white, thin black typography, organic bubble selectors, cloud-like section silhouettes, and a vivid coral-red action color. Expressive wide display lettering, fashion-sketch illustration, playful chips, and large place photography make route planning feel more like browsing a culture magazine than operating a map utility."
colors:
  primary: "#FF3945"
  on-primary: "#FFFFFF"
  primary-hover: "#FF5963"
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
  display-xl: {fontFamily: Unbounded, fontSize: 40px, fontWeight: 400, lineHeight: 1.02, letterSpacing: -1.4px}
  display-lg: {fontFamily: Unbounded, fontSize: 32px, fontWeight: 400, lineHeight: 1.06, letterSpacing: -1.0px}
  display-md: {fontFamily: Unbounded, fontSize: 26px, fontWeight: 400, lineHeight: 1.10, letterSpacing: -0.6px}
  headline: {fontFamily: SF Pro Display, fontSize: 23px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3px}
  card-title: {fontFamily: Unbounded, fontSize: 19px, fontWeight: 400, lineHeight: 1.15, letterSpacing: -0.3px}
  subhead: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: -0.1px}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: Unbounded, fontSize: 13px, fontWeight: 400, lineHeight: 1.20, letterSpacing: -0.1px}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 28px
  xxl: 36px
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 24px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 20px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 16px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 20px}
  interest-bubble: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 12px}
  interest-bubble-selected: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 12px}
  guide-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20px}
  tag-pill: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  coach-sheet: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 24px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px}
---
## Overview

Idoo is a white, editorial route finder with playful variable-size bubbles and oversized typographic personality. Coral actions, organic silhouettes, fashion sketches, and place photography keep the system expressive while navigation remains sparse.

**Key Characteristics:**
- White canvas and thin black line work.
- Wide geometric display type for identity and editorial titles.
- Interest choices expressed as loose circles rather than a rigid grid.
- Coral-red full-width action pills.
- Cloud-edged guide surfaces and large rounded photography.
- Minimal three-item bottom navigation.

## Colors

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

## Typography

### Font Family

- Unbounded or a similar wide geometric face for logos, guide titles, and buttons.
- SF Pro for explanatory text and controls.
- SF Mono only for technical route metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40px | 400 | Identity statement |
| display-lg | 32px | 400 | Guide title |
| display-md | 26px | 400 | Section opener |
| headline | 23px | 700 | Sheet title |
| card-title | 19px | 400 | Place title |
| body | 15px | 400 | Editorial copy |
| caption | 11px | 400 | Route facts and tabs |

### Principles

- Use display type in short lines with generous width.
- Keep longer explanations in a neutral system sans.
- Let typography define structure before adding dividers.

### Note on Font Substitutes

Unbounded is an appropriate open substitute; use SF Pro for all utility text.

## Layout

### Spacing System

Use a 4px base with 16–24px content padding and 32–48px around identity moments.

### Grid & Container

Interest bubbles form an irregular field. Guides and places use one vertical editorial column with horizontal theme chips.

### Whitespace Philosophy

Generous white space is part of the playful composition. Do not align every bubble or card edge to a strict grid.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Discovery and guides |
| 1 | Pale fill or organic edge | Guide containers |
| 2 | Rounded white sheet over dimmed canvas | Coaching and choices |
| 3 | Image overlay | Route proposal |

### Decorative Depth

Use irregular silhouettes, light gradients, and overlapping illustration crops rather than shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Tags |
| rounded-md | 14px | Compact surfaces |
| rounded-lg | 20px | Sheets |
| rounded-xl | 28px | Place images |
| rounded-pill | full | CTAs and chips |
| rounded-full | full | Interest bubbles |

### Photography & Illustration Geometry

Photography uses large rounded crops. Illustration can extend beyond the frame; organic cloud masks may separate content sections.

## Components

### Buttons

Primary buttons are wide coral pills with white display labels. Route decisions may pair coral and dark outlined circles.

### Pricing Tabs

No pricing selector was observed. Use the same compact theme-chip language when segmented choice is needed.

### Cards & Containers

Guides combine an organic pale header, large editorial title, body copy, route facts, tags, and photography. Place details avoid generic card chrome.

### Inputs & Forms

Most input is choice-based. Starting-point search appears as a pale rounded field; keep text entry visually secondary.

### Status & Build Page

Progress uses thin segmented bars at the top of onboarding and route proposals. Selection appears through fill, not checkmarks.

### Navigation

Use three bottom destinations with a small expressive active icon. Search and history remain top-level contextual actions.

### Footer

No footer; preserve safe-area space below the bottom navigation.

## Do's and Don'ts

### Do

- Keep the interest field loose and varied.
- Use coral only for forward motion.
- Pair factual place photography with expressive editorial type.
- Teach unusual gestures with focused sheets.
- Preserve generous negative space.

### Don't

- Don't force bubbles into equal cards.
- Don't turn guides into a conventional map list.
- Don't add heavy shadows or borders.
- Don't use multiple saturated CTA colors.
- Don't replace real places with illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Reduce bubble size and display scale |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Increase negative space and image width |

### Touch Targets

Small bubbles retain enlarged invisible hit areas. CTAs and navigation remain at least 44px high.

### Collapsing Strategy

Theme chips scroll horizontally. Long guide copy expands vertically; route actions stay fixed above the safe area.

### Image Behavior

Use aspect-fill and preserve architectural or human focal points. Avoid narrow banner crops for place details.

## Iteration Guide

Tune type width and bubble rhythm first, then coral prominence and organic masks. If the design feels like a utility app, remove grid chrome.

## Known Gaps

- Motion timing for route swipes was not visible in stills.
- Dark theme and tablet behavior were not present.
- Map navigation after accepting a route was not fully represented.
</design-context>
