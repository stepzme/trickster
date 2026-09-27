<design-context>
---
version: alpha
name: BakAi-design-analysis
description: "A broad mobile-banking dashboard built from white rounded surfaces, bright azure actions, deep navy payment cards, and soft blue atmospheric backdrops. Product tabs, card carousels, widgets, transfer sheets, services, profile, and statements form a dense but modular home; glossy 3D financial objects give products a recognizable visual identity."
colors:
  primary: "#0A8CFF"
  on-primary: "#FFFFFF"
  primary-hover: "#0078DD"
  primary-soft: "#E5F3FF"
  accent-navy: "#001A5C"
  accent-gold: "#D5A437"
  accent-green: "#22B573"
  ink: "#0E1B2E"
  ink-muted: "#737B87"
  ink-subtle: "#A8AFB8"
  canvas: "#F7F8FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF1F5"
  hairline: "#DFE4EA"
  semantic-success: "#22B573"
  semantic-danger: "#E54557"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  bank-card: { backgroundColor: "{colors.accent-navy}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  product-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  transfer-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  service-icon: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 10px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

BakAi organizes a large banking product set through cards, product tabs, widget sections, and contextual sheets. Azure carries action and selection, navy anchors card products, and small 3D objects make deposits, savings, appointments, and services recognizable.

**Key Characteristics:**
- Product tabs and horizontal card carousel.
- Azure primary actions and pale blue icon fields.
- Deep navy card-detail atmosphere.
- Modular home widgets and service grids.
- Glossy 3D financial product imagery.

## Colors

### Brand & Accent
- **BakAi Azure** ({colors.primary}): Selection, actions, icons, and bottom navigation.
- **Card Navy** ({colors.accent-navy}): Premium card surfaces and detail atmosphere.
- **Gold** ({colors.accent-gold}): Premium card world map and card status.
- **Green** ({colors.accent-green}): Incoming funds and verified success.

### Surface
- **Canvas** ({colors.canvas}): Dashboard and profile background.
- **Surface 1** ({colors.surface-1}): Widgets, sheets, and product tiles.
- **Surface 2** ({colors.surface-2}): Secondary and disabled fields.
- **Hairline** ({colors.hairline}): List separation.

### Text
- **Ink** ({colors.ink}): Balance, product, and action labels.
- **Ink Muted** ({colors.ink-muted}): Rates, dates, and supporting copy.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Incoming transfers and verified identity.
- **Danger** ({colors.semantic-danger}): Blocking, failure, and destructive closure.
- **Overlay** ({colors.semantic-overlay}): Bottom sheets and confirmation.

## Typography

### Font Family

- **SF Pro Display** — screen and product headings.
- **SF Pro Text** — balances, transfers, widgets, and settings.
- **SF Mono** — card and account identifiers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Product campaign heading |
| `{typography.headline}` | 21px | 700 | Screen or sheet heading |
| `{typography.card-title}` | 16px | 600 | Product and balance label |
| `{typography.body}` | 14px | 400 | Transaction and form copy |
| `{typography.caption}` | 10px | 400 | Tab and widget metadata |
| `{typography.button}` | 14px | 600 | Primary action |

### Principles

- Make balances and product names dominant.
- Keep rates and conditions readable but secondary.
- Use blue labels for actionable navigation.
- Align transaction amounts consistently.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 10–12px gutters, 12px widget gaps, and 14–16px card padding.

### Grid & Container

Home stacks product tabs, card carousel, new-product action, campaign banner, frequent payments, widgets, news, and rates. Details use a card header over a rounded statement sheet.

### Whitespace Philosophy

Keep each banking domain inside a white module; avoid one continuous dense ledger on the home screen.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Dashboard base |
| 1 | White rounded module | Widgets and services |
| 2 | Navy atmospheric header | Card detail |
| 3 | White sheet over scrim | Transfer and product choice |

### Decorative Depth

Use gradients and glossy 3D product objects for discovery. Ledgers and forms remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Fields and small cards |
| `{rounded.sm}` | 12px | Service and widget tiles |
| `{rounded.md}` | 16px | Cards and product panels |
| `{rounded.lg}` | 22px | Bottom sheets |
| `{rounded.pill}` | full | Product tabs |
| `{rounded.full}` | full | Service icons and avatar |

### Photography & Illustration Geometry

Payment cards use a fixed landscape ratio. Product art uses isolated glossy 3D objects centered within white tiles; campaign photography stays within rounded banners.

## Components

### Buttons

Azure full-width actions progress login and forms. Icon-led card actions handle top-up, transfer, card, and limits. Destructive actions require confirmation.

### Pricing Tabs

Cards, Accounts, Deposits, Loans, and All use a compact segmented row. Product and statement periods use pills or sheet rows.

### Cards & Containers

Bank cards expose masked number, expiry, type, balance, and favorite. Product tiles pair title, rate summary, and one 3D object. Statements use aligned amount rows.

### Inputs & Forms

Forms use white rounded fields with visible labels. Transfers begin in a sheet that separates own account, client, card, requisites, services, Visa+, and QR.

### Status & Build Page

Show verified identity, card status, Visa+ state, favorites, limits, application state, deposit state, and incoming/outgoing amount explicitly.

### Navigation

Home, Payments, BakAi Chat, Services, and History form the bottom bar. Profile, notifications, support, and bonus sit in the header.

### Footer

Bottom navigation stays persistent on dashboard domains; focused forms and card settings use back navigation and pinned confirmation.

## Do's and Don'ts

### Do

- Keep balances and product identity clear.
- Separate transfer rails before asking for details.
- Show rates, limits, and statement periods explicitly.
- Use 3D art only for product discovery.
- Keep receipts and history downloadable.

### Don't

- Don't place promotional art inside ledgers.
- Don't merge cards, accounts, deposits, and loans into one ambiguous list.
- Don't hide fees or currency.
- Don't use navy for ordinary forms.
- Don't signal transaction direction by color alone.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add widget columns or split detail |
| Compact | 390–767px | Default stacked dashboard |
| Small | <390px | Shorten widget labels and tabs |

### Touch Targets

Keep tabs, card actions, transfer rows, service icons, settings, and bottom navigation at least 44px.

### Collapsing Strategy

Allow product and frequent-payment carousels to scroll. Keep balances, primary card, and new-product action before campaign widgets.

### Image Behavior

Contain 3D objects and preserve card ratio. Crop campaign photography within bounded banners only; do not distort product art.

## Iteration Guide

1. Establish product tabs, card carousel, and bottom navigation.
2. Build card detail, history, and transfers.
3. Add new-product flows and statements.
4. Add services, profile, branches, and widgets.
5. Add 3D product art and campaigns last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; sign-in, home, card detail, transfer, new product, and profile flows were image-reviewed.
- Hardware wallets, Apple Pay handoff, charts, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
