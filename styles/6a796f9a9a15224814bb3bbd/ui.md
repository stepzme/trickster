<design-context>
---
version: alpha
name: TradingView-design-analysis
description: "A professional dark market interface built from black canvases, fine graphite dividers, compact white data typography, teal and coral price movement, and tool-dense charts. The aesthetic is precise, utilitarian, and optimized for continuous monitoring."

colors:
  primary: "#2962FF"
  on-primary: "#FFFFFF"
  primary-pressed: "#1E4BD1"
  ink: "#F1F3F5"
  ink-muted: "#8D9199"
  ink-subtle: "#62666E"
  canvas: "#000000"
  surface-1: "#0C0D0F"
  surface-2: "#18191C"
  surface-3: "#2A2B2F"
  hairline: "#2A2C30"
  semantic-success: "#26A69A"
  semantic-warning: "#F2A33A"
  semantic-danger: "#EF5350"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 650, lineHeight: 1.05, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 650, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.1px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.4px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 3px, sm: 6px, md: 10px, lg: 14px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  market-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8px 12px }
  chart-panel: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.xs}", padding: 0 }
  plan-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

TradingView uses a nearly black workspace, compact lists, and maximized chart area. Visual noise is controlled through precise alignment, fine dividers, and a small set of functional colors.

## Colors

### Brand & Accent

Blue marks primary action and active tooling. Instrument logos may retain brand color, but never override market semantics.

### Surface

Use pure black for watchlists and charts, near-black for navigation, and graphite cards for account and subscription surfaces.

### Text

Off-white carries primary prices and labels; cool gray carries company names, axis labels, and inactive tools.

### Semantic

Teal-green indicates positive movement and coral-red negative movement. Amber is limited to warnings or market timing.

## Typography

### Font Family

Use a compact system sans plus tabular or mono numerals for prices, axes, and timestamps.

### Hierarchy

Use 24–38px plan messaging, 16–20px section titles, 14–16px market values, and 10–12px chart metadata.

### Principles

Keep market rows scannable, align decimals, and avoid decorative typography. Data density should not reduce contrast.

### Note on Font Substitutes

Use Inter or SF Pro with tabular figures; use SF Mono or IBM Plex Mono for dense chart labels when needed.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8px row spacing, and 16–24px between account or plan sections.

### Grid & Container

Watchlists use four aligned columns: symbol, description, price, and change. Charts fill the viewport between header and tool rails.

### Whitespace Philosophy

Whitespace is functional and tight. Reserve larger gaps for mode changes, not between every data row.

## Elevation & Depth

Use tonal separation and hairlines instead of shadow. Modals and sheets may lift with a slightly lighter graphite surface.

### Decorative Depth

Only subscription marketing may use a faint cosmic texture or gradient. Charts and lists stay strictly functional.

## Shapes

### Border Radius Scale

Use 3–6px for data controls, 10–14px for cards, and 20px for modal sheets. Avoid overly soft pills in dense tools.

### Photography & Illustration Geometry

Charts are edge-to-edge and preserve exact axes. Logos stay inside small circles; decorative media is confined to plan headers.

## Components

### Buttons

Primary actions are blue or high-contrast white rectangles with modest rounding. Native controls must inherit the dark palette and compact tool geometry.

### Pricing Tabs

Subscription tiers use a horizontal selector; chart timeframes and display modes use compact text tabs with unmistakable active state.

### Cards & Containers

Account cards use graphite blocks with thin dividers. Market data remains in flat rows and chart overlays.

### Inputs & Forms

Search and symbol entry use dark fields with bright text, subdued placeholder, and clear cancel actions.

### Status & Build Page

Market open state, live connection, alerts, plan limits, and saved-chart status appear beside the related symbol or tool.

### Navigation

Use five bottom destinations for Watchlist, Chart, Explore, Community, and Menu. The chart uses local tool rails rather than nested pages.

### Footer

There is no footer. Legal and plan information belongs inside account or purchase screens.

## Do's and Don'ts

### Do

- Preserve alignment and tabular numerals.
- Maximize chart area.
- Reserve green and red for movement.
- Use hairlines instead of card shadows.

### Don't

- Do not add decorative gradients to data views.
- Do not round every row into a card.
- Do not enlarge controls at the expense of charts.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Phones prioritize one active watchlist or chart. Wider screens may show watchlist, chart, and instrument details in resizable columns.

### Touch Targets

Rows, bottom navigation, chart tools, timeframe controls, and overflow menus require at least 44px hit regions even when icons stay compact.

### Collapsing Strategy

Keep current symbol, price, chart, and essential tools visible. Move secondary indicators and layout controls into drawers.

### Image Behavior

Scale charts responsively without raster blur. Use `contain` for logos and keep plan textures cropped behind readable foreground content.

## Iteration Guide

Start with the dark watchlist, five-item navigation, full-screen chart, symbol search, and basic tool rail. Add community, advanced indicators, layouts, and subscription comparison afterward.

## Known Gaps

The catalog contains 154 flows but some entry and transition moments are video-only. Complete inspected flows establish onboarding, subscriptions, watchlists, charts, and account surfaces.

</design-context>

Use the design system above for all UI you generate.
