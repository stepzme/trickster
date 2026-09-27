<design-context>
---
version: alpha
name: Tips-design-analysis
description: "A calm Apple-style reference interface built from white and pale-gray grouped surfaces, large black system headlines, blue actions, colorful category heroes, and crisp device screenshots. The visual language is native, instructional, and content-first."

colors:
  primary: "#007AFF"
  on-primary: "#FFFFFF"
  primary-pressed: "#0062CC"
  ink: "#111113"
  ink-muted: "#6E6E73"
  ink-subtle: "#A1A1A6"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F7"
  hairline: "#D1D1D6"
  accent-orange: "#FF9F0A"
  accent-pink: "#FF375F"
  accent-purple: "#AF52DE"
  semantic-success: "#34C759"
  semantic-warning: "#FF9F0A"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  display-lg: { fontFamily: System Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2px }
  display-md: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px }
  collection-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 16px }
  list-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 12px 16px }
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px 12px }
  category-hero: { backgroundColor: "{colors.accent-purple}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.xl}", padding: 24px }
---

## Overview

Tips uses restrained system chrome for browsing and reading, then gives each collection a bright gradient hero. Large typography, generous spacing, and exact screenshots keep instructions immediately legible.

## Colors

### Brand & Accent

System blue owns links, selection, search focus, and bookmark state. Orange, pink, purple, and yellow gradients are reserved for collection heroes.

### Surface

White is the reading canvas; pale grouped gray separates search, settings-like lists, and secondary panels.

### Text

Near-black carries titles and instructions. Medium gray carries summaries, labels, and supporting detail.

### Semantic

Green confirms completion, orange warns, and red marks destructive or failed states. Do not reuse category gradients as semantic status.

## Typography

### Font Family

Use a neutral system sans with Apple-like proportions and clear optical sizing.

### Hierarchy

Use 28–34px top-level titles, 20–22px article headings, 17px rows and body, and 11–13px metadata.

### Principles

Keep headings compact, instructions conversational, and step labels visually stronger than explanatory text.

### Note on Font Substitutes

Use SF Pro where available; Inter or Arial are acceptable substitutes with native weight and spacing.

## Layout

### Spacing System

Use a 4px base, 16px side gutters, 12–16px row spacing, and 24–32px between instructional sections.

### Grid & Container

Collections use a single-column grouped list. Articles use a centered reading column with full-width screenshots inside the gutter.

### Whitespace Philosophy

Leave clear breathing room around large titles and screenshots. Dense copy should be broken into short numbered steps.

## Elevation & Depth

The interface is mostly flat. Grouping comes from background changes, hairlines, and overlapping device screenshots rather than prominent shadow.

### Decorative Depth

Use smooth category gradients and crisp screenshot framing. Avoid glass effects, heavy shadow, or ornamental texture.

## Shapes

### Border Radius Scale

Use 8–12px for fields and rows, 16px for collection cards, and 22px for large category heroes.

### Photography & Illustration Geometry

Center device and UI screenshots with `contain` so controls remain visible. Use edge-to-edge feature imagery only when the crop is intentional; there is no separate illustration language to imitate.

## Components

### Buttons

Use blue text actions or filled blue buttons with system typography. Native controls may be used, but their color, weight, and geometry must inherit this visual system.

### Pricing Tabs

Use compact system segments for collection or result switching, with blue selection and a quiet gray track.

### Cards & Containers

Collection cards use white surfaces, concise labels, and clear disclosure. Category heroes use saturated gradients with white type and simple symbolic imagery.

### Inputs & Forms

Search uses a pale-gray rounded field with a leading magnifier and clear action. Keep placeholder and focus states visibly distinct.

### Status & Build Page

Bookmark, download, completion, and availability states appear beside the relevant article or action, never on a separate dashboard.

### Navigation

Use large-title navigation for collections and compact bars for articles, with back, share, and bookmark actions. Avoid unnecessary persistent tabs.

### Footer

There is no global footer. Articles end with related tips or a return path inside the reading flow.

## Do's and Don'ts

### Do

- Preserve calm system hierarchy.
- Use real screenshots as instruction evidence.
- Keep actions unmistakably blue.
- Make category heroes colorful but contained.

### Don't

- Do not expose unstyled default controls.
- Do not crop away important screenshot UI.
- Do not turn every panel into a gradient.
- Do not add an unrelated illustration style.

## Responsive Behavior

### Breakpoints

Keep a single reading column on phones. On wider screens, center it at a comfortable width and allow collections to form a modest grid.

### Touch Targets

Rows, navigation actions, bookmarks, search controls, and related-tip links require at least 44px targets.

### Collapsing Strategy

Keep article steps linear. Collapse secondary collection controls into menus while preserving the title and search entry point.

### Image Behavior

Use `contain` for device screenshots and instructional UI; use `cover` only for decorative feature imagery and category backgrounds.

## Iteration Guide

Start with white and grouped-gray surfaces, large system titles, blue actions, collection rows, and screenshot-led articles. Add gradient category heroes after the instructional skeleton works.

## Known Gaps

Screen Gallery exposes 37 image screens but no flow sequences. Collections, search, saved tips, category pages, and instructional articles are visually documented; exact transitions remain unverified.

</design-context>

Use the design system above for all UI you generate.
