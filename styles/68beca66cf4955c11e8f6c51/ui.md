<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.0, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 10, lg: 14, xl: 18, xxl: 24, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 16]}
  quote-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10 0 }
  quote-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  range-tab: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [6, 8]}
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10 }
---

# Overview

Stocks is a native-feeling data utility with almost no decorative chrome. Dense white text, thin green or red charts, black lists, and graphite sheets make market movement the visual system.

# Non-negotiable visual invariants

- The reference consistently shows reserve green and red for movement.
- The reference consistently shows align numeric data carefully.
- The reference consistently shows charts thin and readable.
- The reference consistently shows native dark interaction patterns consistently.
- Sampled screens consistently use a native dark market utility built from pure-black canvas.
- The reference consistently shows graphite sheets.
- The reference consistently shows white condensed information hierarchy.
- The reference consistently shows vivid green and red quote movement.

# Color and surfaces

### Brand & Accent

System blue marks links, Done, Add, and contextual actions. Green and red are reserved for market direction.

### Surface

Pure black carries lists and widgets; graphite surfaces carry quote details, alerts, menus, and selected ranges.

### Text

White carries symbols and values; medium gray carries company names, labels, timestamps, and inactive controls.

### Semantic

Green means positive movement and red negative movement. These colors must not be repurposed as arbitrary brand accents.

# Typography

### Font Family

Use the platform system sans and system mono-like numeral alignment. The interface depends on compact, highly legible data.

### Hierarchy

Use 22–26 points page and quote headings, 16 points symbols, 14 points values and news headlines, and 10–12 points market metadata.

### Principles

Align numeric columns, preserve signs and units, and keep symbol, company, value, and change distinguishable at a glance.

### Note on Font Substitutes

Use SF Pro on Apple platforms or Inter elsewhere. Enable tabular numerals for values and chart annotations.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–10 points within rows, and 16–24 points between watchlist, chart, metrics, and news blocks.

### Grid & Container

Watchlists use full-width rows; quote detail uses a single chart-led column. Widgets use compact two-column value layouts.

### Whitespace Philosophy

Density is intentional. Use thin separators and alignment rather than large card gaps, but keep chart labels from colliding.

Surface hierarchy observed in the source:

Graphite sheets lift above black with rounded top corners. Menus and alerts use the next surface step and subtle separators.

### Decorative Depth

Charts and data are the decoration. Avoid gradients, illustration, ornamental glow, or branded texture.

# Navigation appearance

The inspected screens use watchlist drill-down, quote sheets, edit mode, and overflow menus rather than a persistent tab bar.

# Components

### Buttons

Use text-led blue actions, compact blue pills, and native dark menus. Native controls are appropriate only when styled consistently with the black and graphite system.

### Cards & Containers

Quote sheets group symbol, value, chart, metrics, and news. Widgets use black rounded rectangles with tightly aligned data.

### Inputs & Forms

Search uses a graphite rounded field. Naming a watchlist uses a dark alert with one field and explicit Cancel and Save actions.

# Imagery and icons

Charts and data are the decoration. Avoid gradients, illustration, ornamental glow, or branded texture.

No photography or illustration is part of the reviewed interface. Charts remain thin, sharp, and bounded by clear axes.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Market open or closed, positive or negative change, and selected watchlist membership appear beside the relevant symbol or quote.

# iOS adaptation

### Touch Targets

Rows, range tabs, overflow actions, edit controls, and widget configuration require at least 44 points targets.

### Collapsing Strategy

Allow ticker strips and chart ranges to scroll horizontally if needed. Keep symbol identity and current value visible above long news content.

### Image Behavior

There are no content images in the reviewed screens. Charts scale to width without distorting time or value relationships.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not decorate the black canvas.
- Do not use color without market meaning.
- Do not hide units, ranges, or source attribution.
- Do not round every list row into a card.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

Screen Gallery contains 37 inspectable Stocks images but no flow sequences. Screen relationships, watchlist editing, quote ranges, news, widgets, and menus are visually documented; exact transition order and unshown states remain unverified.

</design-context>
