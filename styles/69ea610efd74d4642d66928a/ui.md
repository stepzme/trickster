<design-context>
---
version: alpha
name: Pillowtalk-design-analysis
description: "A cinematic dark journaling interface with a pure-black canvas, lowercase white typography, acid-lime moments, oversized ambient photo-blur panels, translucent circular capture controls, and a sparse four-tab shell."
colors: {primary: "#E5FF7C", on-primary: "#10110D", primary-hover: "#ECFF9B", primary-focus: "#C9E85C", ink: "#F5F5F2", ink-muted: "#C8C8C3", ink-subtle: "#8F918C", ink-tertiary: "#5F615D", canvas: "#050505", surface-1: "#111211", surface-2: "#1B1D1B", surface-3: "#282A27", surface-4: "#353834", hairline: "#292B29", hairline-strong: "#41443F", hairline-tertiary: "#565A53", inverse-canvas: "#F4F4F0", inverse-surface-1: "#E8E8E3", inverse-surface-2: "#DADBD4", inverse-ink: "#111210", brand-secure: "#D8F46A", semantic-success: "#DFFF72", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 42px, fontWeight: 400, lineHeight: 1.04, letterSpacing: -1.1px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 400, lineHeight: 1.08, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 400, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 23px, fontWeight: 400, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 28px, xxl: 36px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 48px}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 10px}
  journal-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 18px}
  capture-panel: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xl}", padding: 20px}
  text-input: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Pillowtalk is a moody voice-journal interface. Pure black creates a private space, large lowercase white type feels conversational, and acid lime appears as a brief reward or current-state signal rather than constant branding.

**Key Characteristics:** black canvas, lowercase white type, blurred atmospheric capture panel, translucent controls, acid-lime rewards, compact calendar rail, floating white add action, and four quiet destinations.

## Colors

### Brand & Accent

Acid lime marks unlocked insight, selected dates, and moments of progress. Most primary actions remain white or translucent so the accent stays rare.

### Surface

Black is continuous; charcoal panels and softly blurred imagery create capture and entry surfaces; white appears as the strongest inverse control.

### Text

White leads prompts and journal content, soft gray carries guidance and dates, and black is used on white or lime actions.

### Semantic

Lime indicates progress or insight; neutral white indicates capture or add; destructive states stay quiet until confirmation.

## Typography

### Font Family

Use SF Pro Display and Text with light-to-medium weights, large lowercase prompts, and compact supporting labels.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42px | 400 | Date or reflective state |
| display-lg | 34px | 400 | Capture prompt |
| headline | 23px | 400 | Entry title |
| body-lg | 17px | 400 | Reflection text |
| caption | 10px | 400 | Tab or date meta |

### Principles

- Favor calm lowercase language and generous leading.
- Let one prompt dominate each capture state.
- Keep utility labels compact and secondary.

### Note on Font Substitutes

Use a clean humanist system sans with light weights; avoid condensed or aggressively geometric display faces.

## Layout

### Spacing System

Use a 4px base, 16–20px card padding, 12px navigation rhythm, and large vertical breathing room around reflective content.

### Grid & Container

Today uses one oversized capture panel; Entries is a single calendar-led column; Patterns and Explore use stacked insight cards.

### Whitespace Philosophy

Dark empty space creates privacy and pacing. The interface should feel like one thought at a time, not a data dashboard.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pure black | Private journal canvas |
| 1 | Charcoal card | Entry and pattern |
| 2 | Ambient photo blur | Voice capture |
| 3 | Floating white circle | Add and confirm |

### Decorative Depth

Use soft photographic blur, translucency, and subtle glow; avoid crisp layered shadows or bright gradient chrome.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Tiny state |
| rounded-sm | 8px | Date control |
| rounded-md | 12px | Compact row |
| rounded-xl | 28px | Capture and entry panel |
| rounded-full | full | Add, mode, date controls |

### Photography & Illustration Geometry

Photography is enlarged and heavily blurred inside oversized rounded panels; organic brand marks stay small and isolated.

## Components

### Buttons

Use white pills for decisive continuation, white circles for add, and translucent round controls for Type, Yap, and Transcribe.

### Pricing Tabs

Mode and time choices use circular or text selection; paywall plans should inherit black, white, and scarce lime emphasis.

### Cards & Containers

Capture and entry cards are oversized and atmospheric; insight and pattern cards remain sparse with large text and minimal chrome.

### Inputs & Forms

Typed entries use dark rounded fields; voice capture uses centered microphone controls; native inputs retain platform behavior but inherit this dark, airy styling.

### Status & Build Page

Expose recording, transcript, reminder, mood, analysis, and unlocked-pattern states beside the relevant journal entry.

### Navigation

Use a four-item bottom bar for Today, Explore, Entries, and Patterns, plus a floating white add control.

### Footer

No footer; bottom navigation and the add or capture control own the safe area.

## Do's and Don'ts

### Do

- Preserve black space, oversized prompt, and atmospheric capture panel.
- Keep lime scarce and meaningful.
- Style native controls to inherit this visual system.

### Don't

- Don't turn reflection into dense analytics cards.
- Don't use multiple saturated accents or glossy gradients.
- Don't shrink the capture prompt beneath utility chrome.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten date rail and controls |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Increase panel and reading margins |

### Touch Targets

Capture modes, add, dates, tabs, entry rows, and pattern actions remain at least 44px.

### Collapsing Strategy

Preserve prompt, capture action, date, entry content, and current pattern; reduce secondary suggestions first.

### Image Behavior

Allow ambient imagery to crop and blur behind text, maintaining sufficient contrast and rounded panel edges.

## Iteration Guide

Tune Today and capture first, then transcript, Entries, Patterns, Explore, and settings.

## Known Gaps

- Several available screens were video-only and had no still preview.
- Subscription recovery and long-term pattern history were only partially reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
