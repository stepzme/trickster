<design-context>
---
version: alpha
name: Auto-ru-design-analysis
description: "A dense automotive marketplace built from a white canvas, bold black utility type, vivid Auto.ru red, pale gray grouped surfaces, and vehicle photography. Search, listings, reports, selling, messages, and services share a compact card language; full-width black and green actions make high-consequence steps unmistakable."
colors:
  primary: "#F20D0D"
  on-primary: "#FFFFFF"
  primary-hover: "#D80C0C"
  primary-soft: "#FFE4E4"
  accent-green: "#31C55B"
  accent-blue: "#DCEEFF"
  accent-orange: "#FFAA00"
  ink: "#111111"
  ink-muted: "#777777"
  ink-subtle: "#A8A8A8"
  canvas: "#FFFFFF"
  surface-1: "#F3F3F5"
  surface-2: "#E8E8EB"
  hairline: "#DEDEE2"
  semantic-success: "#31C55B"
  semantic-danger: "#F20D0D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: YS Text, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: YS Text, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: YS Text, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: YS Text, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  button-contact: { backgroundColor: "{colors.accent-green}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  listing-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0 }
  filter-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  status-badge: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 3px 6px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Auto.ru is a task-dense marketplace where car photos, price, year, and mileage lead. Red carries identity, black advances forms, green initiates seller contact, and pale grouped surfaces organize extensive search and service tools.

**Key Characteristics:**
- White utility canvas with compact typography.
- Photo-led two-column listing grid.
- Red brand marks and selected emphasis.
- Deep filter and multistep selling forms.
- Green seller-contact bar.

## Colors

### Brand & Accent
- **Auto Red** ({colors.primary}): Wordmark, launch, and branded highlights.
- **Contact Green** ({colors.accent-green}): Call, chat, verified, and successful actions.
- **Service Blue** ({colors.accent-blue}): Edit and management actions.
- **Promotion Orange** ({colors.accent-orange}): Paid selling packages.

### Surface
- **Canvas** ({colors.canvas}): Listings and detail pages.
- **Surface 1** ({colors.surface-1}): Search, filters, services, and grouped panels.
- **Surface 2** ({colors.surface-2}): Disabled or nested areas.
- **Hairline** ({colors.hairline}): Form and list separation.

### Text
- **Ink** ({colors.ink}): Prices, headings, and primary facts.
- **Ink Muted** ({colors.ink-muted}): Year, mileage, and helper text.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and placeholder text.

### Semantic
- **Success** ({colors.semantic-success}): Verified, fair price, and contact.
- **Danger** ({colors.semantic-danger}): Brand and critical state.
- **Overlay** ({colors.semantic-overlay}): Menus and sheets.

## Typography

### Font Family

- **YS Text** — headings, prices, listings, forms, and navigation.
- **SF Mono** — VIN or technical identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Launch statement |
| `{typography.headline}` | 21px | 700 | Screen and form heading |
| `{typography.card-title}` | 16px | 600 | Price or service title |
| `{typography.body}` | 14px | 400 | Listing and form copy |
| `{typography.caption}` | 10px | 400 | Badges and tab labels |
| `{typography.button}` | 14px | 600 | Primary actions |

### Principles

- Lead each listing with price and vehicle identity.
- Use bold weight for headings and totals, not every fact.
- Keep helper text compact and gray.
- Treat vehicle specifications as scannable rows.

### Note on Font Substitutes

Use **Inter** or the platform system sans when YS Text is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8px listing gaps, 12–16px card padding, and 44px form rows.

### Grid & Container

Search results use a two-column image grid. Filters and selling use one-column forms. Vehicle details stack media, facts, reports, recommendations, and a pinned contact bar.

### Whitespace Philosophy

Favor information density, using pale grouped cards and strong section headings to prevent visual noise.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listings and forms |
| 1 | Pale rounded group | Filters and services |
| 2 | Colored offer panel | Selling promotion |
| 3 | Scrim plus rounded sheet | Menu |

### Decorative Depth

Vehicle photography supplies depth. UI panels use little or no shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Badges and compact fields |
| `{rounded.sm}` | 10px | Listing photos |
| `{rounded.md}` | 14px | Filters, buttons, and services |
| `{rounded.lg}` | 18px | Menu sheet |
| `{rounded.pill}` | full | Chips and owner selectors |
| `{rounded.full}` | full | Favorite and profile controls |

### Photography & Illustration Geometry

Vehicle photos use landscape crops and rounded corners. Preserve the entire car where possible and avoid color treatments that distort condition.

## Components

### Buttons

Black full-width buttons advance forms and filters. Green buttons contact sellers. Pale blue buttons manage existing listings; red is not the default CTA fill.

### Pricing Tabs

Filters use chips for owner type and feature flags. Selection becomes black with white text; unselected chips stay pale gray.

### Cards & Containers

Listing cards combine photo, badge, price, model, year, and mileage. Service tiles pair compact artwork with title and explanation. Report sections use icon-led fact rows.

### Inputs & Forms

Forms are long, explicit, and step-numbered. Group related specs, retain a bottom Continue action, and show generated help without replacing editable input.

### Status & Build Page

Fair price, New, warranty, credit, report, views, calls, favorites, and listing age appear as compact status elements near the relevant content.

### Navigation

Search, Favorites, Place, Messages, and Logbook form the bottom bar. A separate menu sheet exposes account, reports, garage, insurance, credit, valuation, catalog, and settings.

### Footer

Detail pages pin Call and Chat; selling flows pin Continue. Keep these actions above safe area and keyboard.

## Do's and Don'ts

### Do

- Keep price, model, year, and mileage scannable.
- Use real vehicle photography.
- Separate search, report, and selling tasks.
- Pin the next high-value action.
- Explain paid promotion clearly.

### Don't

- Don't use red for every action.
- Don't hide ownership or report caveats.
- Don't crop cars beyond recognition.
- Don't collapse long filters into ambiguous icons.
- Don't mix seller contact with purchase guarantees.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add columns and optional split detail pane |
| Compact | 390–767px | Two-column results and single-column forms |
| Small | <390px | Tighten labels and reduce service columns |

### Touch Targets

Keep chips, favorites, tabs, filter rows, form controls, Call, Chat, and Continue at least 44px.

### Collapsing Strategy

Truncate listing model text before price or photo. Preserve one-column filters and selling steps; service tiles may collapse to a list.

### Image Behavior

Use consistent landscape cover crops in result grids and larger contained media on details. Never stretch or recolor vehicle photos.

## Iteration Guide

1. Establish listing grid and search header.
2. Build vehicle detail and pinned contact.
3. Add filters and saved search.
4. Add the multistep selling flow.
5. Add reports, garage, and service menu.

## Known Gaps

- Tokens were inferred visually from the inspected mobile screens.
- All 51 flow names were inventoried; first launch, main, search, listing, selling, and menu flows were image-reviewed.
- Video listing media, map behavior, and transitions were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
