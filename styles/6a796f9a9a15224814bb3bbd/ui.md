<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 650, lineHeight: 1.05, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 650, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.1 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.4 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 10, lg: 14, xl: 20, xxl: 26, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  market-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [8, 12]}
  chart-panel: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.xs}", padding: 0 }
  plan-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

TradingView uses a nearly black workspace, compact lists, and maximized chart area. Visual noise is controlled through precise alignment, fine dividers, and a small set of functional colors.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A professional dark market interface built from black canvases, fine graphite dividers, compact white data typography, teal and coral price movement, and tool-dense charts.
- The dominant canvas token is #000000 and the primary accent token is #2962FF.
- The recorded display style is 38 points while the body style is 14 points.
- Navigation uses five bottom destinations for Watchlist, Chart, Explore, Community, and Menu.
- The reviewed screens use this hierarchy: The aesthetic is precise, utilitarian, and optimized for continuous monitoring.

# Color and surfaces

### Brand & Accent

Blue marks primary action and active tooling. Instrument logos may retain brand color, but never override market semantics.

### Surface

Use pure black for watchlists and charts, near-black for navigation, and graphite cards for account and subscription surfaces.

### Text

Off-white carries primary prices and labels; cool gray carries company names, axis labels, and inactive tools.

### Semantic

Teal-green indicates positive movement and coral-red negative movement. Amber is limited to warnings or market timing.

# Typography

### Font Family

Use a compact system sans plus tabular or mono numerals for prices, axes, and timestamps.

### Principles

Keep market rows scannable, align decimals, and avoid decorative typography. Data density should not reduce contrast.

### Note on Font Substitutes

Use Inter or SF Pro with tabular figures; use SF Mono or IBM Plex Mono for dense chart labels when needed.

# Screen composition

### Grid & Container

Watchlists use four aligned columns: symbol, description, price, and change. Charts fill the viewport between header and tool rails.

### Whitespace Philosophy

Whitespace is functional and tight. Reserve larger gaps for mode changes, not between every data row.

# Navigation appearance

Use five bottom destinations for Watchlist, Chart, Explore, Community, and Menu. The chart uses local tool rails rather than nested pages.

# Components

### Buttons

Primary actions are blue or high-contrast white rectangles with modest rounding. Native controls must inherit the dark palette and compact tool geometry.

Subscription tiers use a horizontal selector; chart timeframes and display modes use compact text tabs with unmistakable active state.

### Cards & Containers

Account cards use graphite blocks with thin dividers. Market data remains in flat rows and chart overlays.

### Inputs & Forms

Search and symbol entry use dark fields with bright text, subdued placeholder, and clear cancel actions.

### Status & Build Page

Market open state, live connection, alerts, plan limits, and saved-chart status appear beside the related symbol or tool.

### Navigation

Use five bottom destinations for Watchlist, Chart, Explore, Community, and Menu. The chart uses local tool rails rather than nested pages.

# Imagery and icons

Use tonal separation and hairlines instead of shadow. Modals and sheets may lift with a slightly lighter graphite surface.

### Decorative Depth

Only subscription marketing may use a faint cosmic texture or gradient. Charts and lists stay strictly functional.

# States

Market open state, live connection, alerts, plan limits, and saved-chart status appear beside the related symbol or tool.

# iOS adaptation

Phones prioritize one active watchlist or chart. Wider screens may show watchlist, chart, and instrument details in resizable columns.

### Touch Targets

Rows, bottom navigation, chart tools, timeframe controls, and overflow menus require at least 44pt hit regions even when icons stay compact.

### Collapsing Strategy

Keep current symbol, price, chart, and essential tools visible. Move secondary indicators and layout controls into drawers.

### Image Behavior

Scale charts responsively without raster blur. Use `contain` for logos and keep plan textures cropped behind readable foreground content.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
