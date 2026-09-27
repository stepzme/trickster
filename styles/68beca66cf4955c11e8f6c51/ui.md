<design-context>
---
version: alpha
name: Stocks-design-analysis
description: "A native dark market utility built from pure-black canvas, graphite sheets, white condensed information hierarchy, vivid green and red quote movement, blue system actions, thin chart lines, and dense watchlist rows. Visual character comes from financial data rather than decoration."

colors:
  primary: "#0A84FF"
  on-primary: "#FFFFFF"
  primary-pressed: "#006EDB"
  market-up: "#54C76A"
  market-down: "#F05A55"
  ink: "#F5F5F7"
  ink-muted: "#A7A7AC"
  ink-subtle: "#68686D"
  canvas: "#000000"
  surface-1: "#1C1C1E"
  surface-2: "#2C2C2E"
  surface-3: "#3A3A3C"
  hairline: "#38383A"
  semantic-success: "#54C76A"
  semantic-warning: "#F2B84B"
  semantic-danger: "#F05A55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.0, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 3px, sm: 6px, md: 10px, lg: 14px, xl: 18px, xxl: 24px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 16px }
  quote-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 0 }
  quote-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px }
  range-tab: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 6px 8px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px }
---

## Overview

Stocks is a native-feeling data utility with almost no decorative chrome. Dense white text, thin green or red charts, black lists, and graphite sheets make market movement the visual system.

## Colors

### Brand & Accent

System blue marks links, Done, Add, and contextual actions. Green and red are reserved for market direction.

### Surface

Pure black carries lists and widgets; graphite surfaces carry quote details, alerts, menus, and selected ranges.

### Text

White carries symbols and values; medium gray carries company names, labels, timestamps, and inactive controls.

### Semantic

Green means positive movement and red negative movement. These colors must not be repurposed as arbitrary brand accents.

## Typography

### Font Family

Use the platform system sans and system mono-like numeral alignment. The interface depends on compact, highly legible data.

### Hierarchy

Use 22–26px page and quote headings, 16px symbols, 14px values and news headlines, and 10–12px market metadata.

### Principles

Align numeric columns, preserve signs and units, and keep symbol, company, value, and change distinguishable at a glance.

### Note on Font Substitutes

Use SF Pro on Apple platforms or Inter elsewhere. Enable tabular numerals for values and chart annotations.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–10px within rows, and 16–24px between watchlist, chart, metrics, and news blocks.

### Grid & Container

Watchlists use full-width rows; quote detail uses a single chart-led column. Widgets use compact two-column value layouts.

### Whitespace Philosophy

Density is intentional. Use thin separators and alignment rather than large card gaps, but keep chart labels from colliding.

## Elevation & Depth

Graphite sheets lift above black with rounded top corners. Menus and alerts use the next surface step and subtle separators.

### Decorative Depth

Charts and data are the decoration. Avoid gradients, illustration, ornamental glow, or branded texture.

## Shapes

### Border Radius Scale

Search and alerts use 10px, quote sheets 14px, range tabs 6px, and change badges use compact 3–6px rounding.

### Photography & Illustration Geometry

No photography or illustration is part of the reviewed interface. Charts remain thin, sharp, and bounded by clear axes.

## Components

### Buttons

Use text-led blue actions, compact blue pills, and native dark menus. Native controls are appropriate only when styled consistently with the black and graphite system.

### Pricing Tabs

Chart ranges form a compact horizontal selector. The selected range uses a graphite capsule and white label.

### Cards & Containers

Quote sheets group symbol, value, chart, metrics, and news. Widgets use black rounded rectangles with tightly aligned data.

### Inputs & Forms

Search uses a graphite rounded field. Naming a watchlist uses a dark alert with one field and explicit Cancel and Save actions.

### Status & Build Page

Market open or closed, positive or negative change, and selected watchlist membership appear beside the relevant symbol or quote.

### Navigation

The inspected screens use watchlist drill-down, quote sheets, edit mode, and overflow menus rather than a persistent tab bar.

### Footer

There is no footer. News attribution and market status terminate quote content above the safe area.

## Do's and Don'ts

### Do

- Reserve green and red for movement.
- Align numeric data carefully.
- Keep charts thin and readable.
- Use native dark interaction patterns consistently.

### Don't

- Do not decorate the black canvas.
- Do not use color without market meaning.
- Do not hide units, ranges, or source attribution.
- Do not round every list row into a card.

## Responsive Behavior

### Breakpoints

Keep watchlists and quote detail single-column on phones. Wider layouts may place a watchlist beside detail while preserving data alignment.

### Touch Targets

Rows, range tabs, overflow actions, edit controls, and widget configuration require at least 44px targets.

### Collapsing Strategy

Allow ticker strips and chart ranges to scroll horizontally if needed. Keep symbol identity and current value visible above long news content.

### Image Behavior

There are no content images in the reviewed screens. Charts scale to width without distorting time or value relationships.

## Iteration Guide

Start with black canvas, quote rows, green and red movement, search, chart detail, and range tabs. Add edit mode, watchlists, news, widgets, and menus afterward.

## Known Gaps

Screen Gallery contains 37 inspectable Stocks images but no flow sequences. Screen relationships, watchlist editing, quote ranges, news, widgets, and menus are visually documented; exact transition order and unshown states remain unverified.

</design-context>

Use the design system above for all UI you generate.
