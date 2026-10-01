<design-context>
---
version: 1
platform: iOS
name: Tinkoff-Investments-design-analysis
description: "A dark trading interface built from pure-black canvas, charcoal account cards, white financial typography, green and red market movement, clear blue actions, and a small Tinkoff-yellow brand marker. Charts and data dominate; sparse graphite-yellow 3D objects appear only in empty or explanatory states."

colors:
  primary: "#4C83F3"
  on-primary: "#FFFFFF"
  brand-yellow: "#FFDD2D"
  market-up: "#3BC96B"
  market-down: "#E65063"
  ink: "#F5F5F7"
  ink-muted: "#A0A1A6"
  ink-subtle: "#63656A"
  canvas: "#000000"
  surface-1: "#1A1A1C"
  surface-2: "#2B2B2E"
  hairline: "#343438"
  semantic-success: "#3BC96B"
  semantic-warning: "#D5AA22"
  semantic-danger: "#E65063"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 10, lg: 14, xl: 18, xxl: 24, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  portfolio-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  quote-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 10 0 }
  range-tab: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [7, 10]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Tinkoff Investments is a data-first dark system. Black and charcoal recede behind quotes, charts, positions, and warnings while blue, green, red, and yellow retain precise roles.

# Non-negotiable visual invariants

- The reference consistently shows reserve green and red for movement.
- The reference consistently shows risk and commission explicit.
- The reference consistently shows blue for commitment.
- The reference consistently shows align all numeric data.
- Sampled screens consistently use a dark trading interface built from pure-black canvas.
- The reference consistently shows charcoal account cards.
- The reference consistently shows white financial typography.
- The reference consistently shows green and red market movement.

# Color and surfaces

### Brand & Accent

Blue marks trading actions and selection; yellow is a small identity marker. Green and red are reserved for market movement.

### Surface

Black is the canvas; charcoal cards group portfolio, discovery, alerts, and order details.

### Text

White carries values and titles; gray carries instrument metadata, labels, and secondary calculations.

### Semantic

Green means positive movement, red negative or destructive state, and yellow warns about qualification or risk.

# Typography

### Font Family

Use a system sans with tabular numerals. A compact mono may support chart annotations.

### Hierarchy

Use 22–28 points values and headings, 16 points instrument names, 14 points data rows, and 10–12 points exchange metadata.

### Principles

Align numbers, preserve signs and units, and keep account, lot, commission, and total explicit.

### Note on Font Substitutes

Use SF Pro or Inter with tabular numerals. JetBrains Mono is suitable for dense annotations.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–12 points row gaps, and 20–24 points between portfolio, chart, warnings, and order sections.

### Grid & Container

Home and discovery use stacked cards and lists. Security detail and analytics use a chart-led single column; orders use focused forms.

### Whitespace Philosophy

Density is appropriate, but charts and headline values need clear surrounding space.

Surface hierarchy observed in the source:

Charcoal cards and modal sheets create depth over black. Avoid visible shadow; surface contrast is sufficient.

### Decorative Depth

Use charts as decoration and sparse graphite-yellow objects only in empty states.

# Navigation appearance

Use five bottom destinations for Home, What to buy, Pulse, Chat, and More. Selected state uses a small red or blue accent.

# Components

### Buttons

Buy and primary actions are blue; Sell may be white or outlined. Native controls must inherit dark surfaces and package typography.

### Cards & Containers

Portfolio cards show account value, positions, movement, and shortcuts. Quote rows align logo, name, price, and change.

### Inputs & Forms

Trade forms group account, instrument, lot, price, commission, and total. Search uses a dark rounded field.

# Imagery and icons

Use charts as decoration and sparse graphite-yellow objects only in empty states.

Charts remain sharp and full width. Security logos are compact circles; educational illustrations stay centered with ample black space.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Qualification, liquidity, market state, alert, order, and forecast status appear directly beside the relevant data.

# iOS adaptation

### Touch Targets

Rows, tabs, range controls, chart actions, and Buy or Sell require at least 44 points targets.

### Collapsing Strategy

Allow instrument tabs and ranges to scroll horizontally. Keep trading actions visible below long charts.

### Image Behavior

Charts scale to width without distorting time or value. Use `contain` for security logos and empty-state objects.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not decorate the black canvas.
- Do not hide warnings behind tooltips only.
- Do not use yellow as a generic CTA.
- Do not expose light native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

The reviewed scenarios cover onboarding, Home, portfolio, analytics, security detail, charts, order book, Pulse, screeners, buying, and selling. Tablet layouts and every order failure were not visible.

</design-context>
