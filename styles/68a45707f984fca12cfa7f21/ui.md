<design-context>
---
version: 1
platform: iOS
name: Auto-ru-design-analysis
description: "A dense automotive marketplace built from a white canvas, bold black utility type, vivid Auto.ru red, pale gray grouped surfaces, and vehicle photography. Search, listings, reports, selling, messages, and services share a compact card language; full-width black and green actions make high-consequence steps unmistakable."
colors:
  primary: "#F20D0D"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: YS Text, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: YS Text, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: YS Text, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: YS Text, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-contact: { backgroundColor: "{colors.accent-green}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  listing-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0 }
  filter-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  status-badge: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: [3, 6]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Auto.ru is a task-dense marketplace where car photos, price, year, and mileage lead. Red carries identity, black advances forms, green initiates seller contact, and pale grouped surfaces organize extensive search and service tools.

**Key Characteristics:**
- White utility canvas with compact typography.
- Photo-led two-column listing grid.
- Red brand marks and selected emphasis.
- Deep filter and multistep selling forms.
- Green seller-contact bar.

# Non-negotiable visual invariants

- Sampled screens consistently use white utility canvas with compact typography.
- Imagery consistently uses photo-led two-column listing grid.
- Red brand marks and selected emphasis.
- The reference consistently shows deep filter and multistep selling forms.
- The reference consistently shows green seller-contact bar.

# Color and surfaces

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

# Typography

### Font Family

- **YS Text** — headings, prices, listings, forms, and navigation.
- **SF Mono** — VIN or technical identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36 points | 700 | Launch statement |
| `{typography.headline}` | 21 points | 700 | Screen and form heading |
| `{typography.card-title}` | 16 points | 600 | Price or service title |
| `{typography.body}` | 14 points | 400 | Listing and form copy |
| `{typography.caption}` | 10 points | 400 | Badges and tab labels |
| `{typography.button}` | 14 points | 600 | Primary actions |

### Principles

- Lead each listing with price and vehicle identity.
- Use bold weight for headings and totals, not every fact.
- Keep helper text compact and gray.
- Treat vehicle specifications as scannable rows.

### Note on Font Substitutes

Use **Inter** or the platform system sans when YS Text is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8 points listing gaps, 12–16 points card padding, and 44 points form rows.

### Grid & Container

Search results use a two-column image grid. Filters and selling use one-column forms. Vehicle details stack media, facts, reports, recommendations, and a pinned contact bar.

### Whitespace Philosophy

Favor information density, using pale grouped cards and strong section headings to prevent visual noise.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listings and forms |
| 1 | Pale rounded group | Filters and services |
| 2 | Colored offer panel | Selling promotion |
| 3 | Scrim plus rounded sheet | Menu |

### Decorative Depth

Vehicle photography supplies depth. UI panels use little or no shadow.

# Navigation appearance

Search, Favorites, Place, Messages, and Logbook form the bottom bar. A separate menu sheet exposes account, reports, garage, insurance, credit, valuation, catalog, and settings.

# Components

### Buttons

Black full-width buttons advance forms and filters. Green buttons contact sellers. Pale blue buttons manage existing listings; red is not the default CTA fill.

### Cards & Containers

Listing cards combine photo, badge, price, model, year, and mileage. Service tiles pair compact artwork with title and explanation. Report sections use icon-led fact rows.

### Inputs & Forms

Forms are long, explicit, and step-numbered. Group related specs, retain a bottom Continue action, and show generated help without replacing editable input.

# Imagery and icons

Vehicle photography supplies depth. UI panels use little or no shadow.

Vehicle photos use landscape crops and rounded corners. Preserve the entire car where possible and avoid color treatments that distort condition.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Fair price, New, warranty, credit, report, views, calls, favorites, and listing age appear as compact status elements near the relevant content.

# iOS adaptation

### Touch Targets

Keep chips, favorites, tabs, filter rows, form controls, Call, Chat, and Continue at least 44 points.

### Collapsing Strategy

Truncate listing model text before price or photo. Preserve one-column filters and selling steps; service tiles may collapse to a list.

### Image Behavior

Use consistent landscape cover crops in result grids and larger contained media on details. Never stretch or recolor vehicle photos.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't use red for every action.
- Don't hide ownership or report caveats.
- Don't crop cars beyond recognition.
- Don't collapse long filters into ambiguous icons.
- Don't mix seller contact with purchase guarantees.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
