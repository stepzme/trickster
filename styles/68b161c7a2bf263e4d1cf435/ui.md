<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }

rounded: { xs: 3px, sm: 6px, md: 10px, lg: 14px, xl: 18px, xxl: 24px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  portfolio-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  quote-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 10px 0 }
  range-tab: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 7px 10px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Tinkoff Investments is a data-first dark system. Black and charcoal recede behind quotes, charts, positions, and warnings while blue, green, red, and yellow retain precise roles.

## Colors

### Brand & Accent

Blue marks trading actions and selection; yellow is a small identity marker. Green and red are reserved for market movement.

### Surface

Black is the canvas; charcoal cards group portfolio, discovery, alerts, and order details.

### Text

White carries values and titles; gray carries instrument metadata, labels, and secondary calculations.

### Semantic

Green means positive movement, red negative or destructive state, and yellow warns about qualification or risk.

## Typography

### Font Family

Use a system sans with tabular numerals. A compact mono may support chart annotations.

### Hierarchy

Use 22–28px values and headings, 16px instrument names, 14px data rows, and 10–12px exchange metadata.

### Principles

Align numbers, preserve signs and units, and keep account, lot, commission, and total explicit.

### Note on Font Substitutes

Use SF Pro or Inter with tabular numerals. JetBrains Mono is suitable for dense annotations.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px row gaps, and 20–24px between portfolio, chart, warnings, and order sections.

### Grid & Container

Home and discovery use stacked cards and lists. Security detail and analytics use a chart-led single column; orders use focused forms.

### Whitespace Philosophy

Density is appropriate, but charts and headline values need clear surrounding space.

## Elevation & Depth

Charcoal cards and modal sheets create depth over black. Avoid visible shadow; surface contrast is sufficient.

### Decorative Depth

Use charts as decoration and sparse graphite-yellow objects only in empty states.

## Shapes

### Border Radius Scale

Cards use 14px, fields and buttons 10px, chips and time ranges are pills, and logos or avatars are circular.

### Photography & Illustration Geometry

Charts remain sharp and full width. Security logos are compact circles; educational illustrations stay centered with ample black space.

## Components

### Buttons

Buy and primary actions are blue; Sell may be white or outlined. Native controls must inherit dark surfaces and package typography.

### Pricing Tabs

Time ranges, analytics views, and instrument sections use compact pills or underlined tabs with high-contrast selection.

### Cards & Containers

Portfolio cards show account value, positions, movement, and shortcuts. Quote rows align logo, name, price, and change.

### Inputs & Forms

Trade forms group account, instrument, lot, price, commission, and total. Search uses a dark rounded field.

### Status & Build Page

Qualification, liquidity, market state, alert, order, and forecast status appear directly beside the relevant data.

### Navigation

Use five bottom destinations for Home, What to buy, Pulse, Chat, and More. Selected state uses a small red or blue accent.

### Footer

There is no footer. Security pages end with sticky Buy and Sell actions; lists end above navigation.

## Do's and Don'ts

### Do

- Reserve green and red for movement.
- Keep risk and commission explicit.
- Use blue for commitment.
- Align all numeric data.

### Don't

- Do not decorate the black canvas.
- Do not hide warnings behind tooltips only.
- Do not use yellow as a generic CTA.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Keep order forms single-column. Wider layouts may pair a watchlist with chart and order ticket.

### Touch Targets

Rows, tabs, range controls, chart actions, and Buy or Sell require at least 44px targets.

### Collapsing Strategy

Allow instrument tabs and ranges to scroll horizontally. Keep trading actions visible below long charts.

### Image Behavior

Charts scale to width without distorting time or value. Use `contain` for security logos and empty-state objects.

## Iteration Guide

Start with black canvas, portfolio card, quote rows, chart detail, five-tab navigation, and trade ticket. Add analytics, Pulse, screeners, and education afterward.

## Known Gaps

The reviewed scenarios cover onboarding, Home, portfolio, analytics, security detail, charts, order book, Pulse, screeners, buying, and selling. Tablet layouts and every order failure were not visible.

</design-context>

Use the design system above for all UI you generate.
