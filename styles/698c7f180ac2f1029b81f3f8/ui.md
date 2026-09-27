<design-context>
---
version: alpha
name: Trading-212-design-analysis
description: "A crisp finance interface combining white analytical surfaces, black typography, electric-cyan actions, compact market data, and dark atmospheric account headers. Rounded cards and restrained charts make a feature-dense trading product feel approachable."

colors:
  primary: "#12B5DD"
  on-primary: "#FFFFFF"
  primary-pressed: "#0696BD"
  ink: "#111214"
  ink-muted: "#696B70"
  ink-subtle: "#A5A7AB"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F5F6"
  surface-dark: "#101A22"
  hairline: "#E1E3E5"
  semantic-success: "#16A765"
  semantic-warning: "#F2A932"
  semantic-danger: "#D94A5B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 450, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.5px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  metric-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  instrument-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  order-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58px }
---

## Overview

Trading 212 places calm white market tools over a dark account-summary backdrop. Cyan actions, compact numbers, and rounded analytical cards create clarity without making the product feel institutional.

## Colors

### Brand & Accent

Electric cyan is reserved for deposits, buy actions, selection, and chart emphasis. Dark navy supports account context and promotional headers.

### Surface

Use white for research and transactions, pale gray for grouped metrics, and charcoal navy for the account header.

### Text

Near-black carries prices and titles; gray carries labels and supporting copy. White is used on dark account surfaces.

### Semantic

Green and red are strictly directional market colors. Amber communicates pending or caution states; cyan remains action, not profit.

## Typography

### Font Family

Use a clean geometric sans with tabular numerals for financial values.

### Hierarchy

Use 32–40px account values, 20–25px instrument prices, 14–17px content, and 10–12px metadata.

### Principles

Keep labels compact, align numeric columns, and separate value from change. Avoid bolding every market row.

### Note on Font Substitutes

Use Inter or SF Pro with tabular figures enabled for prices, percentages, and order values.

## Layout

### Spacing System

Use a 4px base, 12–16px gutters, 8–12px row gaps, and 20–24px between research sections.

### Grid & Container

The dashboard stacks a dark summary area over a rounded white sheet. Lists use aligned logo, label, sparkline, and value columns.

### Whitespace Philosophy

Preserve open white space around key totals and order values. Dense research should be split into contained sections.

## Elevation & Depth

Use rounded sheet overlap and subtle gray card separation. Shadows are minimal and never used around every row.

### Decorative Depth

Allow subdued dark gradients and restrained product artwork in promotions. Keep analytical surfaces flat and crisp.

## Shapes

### Border Radius Scale

Use 8px rows, 12–16px metric cards, 22px sheets, and fully rounded primary buttons.

### Photography & Illustration Geometry

Company logos stay circular or square at small scale. Promotional artwork may use compact dark banners; charts remain unclipped and edge-aligned.

## Components

### Buttons

Primary Buy, Deposit, and Review actions are cyan pills. Native controls must inherit cyan selection, rounded geometry, and the same numeral styling.

### Pricing Tabs

Use underline or pale segmented tabs for order type, portfolio view, social mode, and time range. Selection is cyan or black, never ambiguous gray.

### Cards & Containers

Metric cards pair one label, one value, and at most one micro-chart. Research cards keep their own heading and action.

### Inputs & Forms

Registration uses clean underlined fields; order entry enlarges the amount and keeps keypad or slider access nearby.

### Status & Build Page

Verification steps, market open state, order status, alerts, and funding progress appear in context with clear next actions.

### Navigation

Use six persistent bottom destinations for core areas. Instrument and order flows use close/back while keeping transaction actions pinned.

### Footer

There is no footer. Regulatory notes and risk disclosures appear near the relevant action or at the end of a research section.

## Do's and Don'ts

### Do

- Align numeric values precisely.
- Reserve cyan for action and focus.
- Separate market direction from brand color.
- Chunk dense research into cards.

### Don't

- Do not decorate every row with shadow.
- Do not make gains cyan.
- Do not hide order type or execution timing.
- Do not expose default native styling.

## Responsive Behavior

### Breakpoints

Keep transaction flows single-column on phones. Wider screens may show watchlist and instrument detail side by side.

### Touch Targets

Instrument rows, bottom navigation, order tabs, chart controls, and actions require at least 44px targets.

### Collapsing Strategy

Keep price, position, and Buy/Sell visible. Collapse secondary analysis into sections or horizontal rails.

### Image Behavior

Use `contain` for logos and promotional product art. Charts scale to available width without distorting axes or labels.

## Iteration Guide

Start with the account summary, market list, bottom navigation, instrument page, and order sheet. Add pies, social research, card features, and advanced chart tools later.

## Known Gaps

Several catalog steps are video-only, so motion and chart interaction timing are not fully inspectable. Complete flows establish registration, funding, portfolio, research, buying, social, card, and settings behavior.

</design-context>

Use the design system above for all UI you generate.
