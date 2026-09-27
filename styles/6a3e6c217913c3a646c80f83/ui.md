<design-context>
---
version: alpha
name: Avtobys-design-analysis
description: "A transit-and-wallet interface combining vivid electric blue, white rounded cards, warm yellow service icons, a dark slate wallet action strip, and map-heavy route planning. Colorful flat-isometric illustrations introduce payments and services, while the everyday workspace stays compact and highly functional."
colors:
  primary: "#1478FF"
  on-primary: "#FFFFFF"
  primary-hover: "#0969E8"
  primary-soft: "#E7F1FF"
  accent-yellow: "#FFBC10"
  accent-slate: "#4E596B"
  accent-teal: "#10A9B7"
  ink: "#101318"
  ink-muted: "#737983"
  ink-subtle: "#A9AFB8"
  canvas: "#F5F6F8"
  surface-1: "#FFFFFF"
  surface-2: "#ECEFF3"
  hairline: "#E0E3E7"
  semantic-success: "#28B977"
  semantic-danger: "#E84A5F"
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
rounded: { xs: 7px, sm: 11px, md: 15px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  balance-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  wallet-actions: { backgroundColor: "{colors.accent-slate}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  service-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  route-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Avtobys treats the transport balance as the primary object, with QR, Bluetooth, number payment, routes, tickets, transfers, and intercity services arranged around it. Maps and transactions stay neutral; blue and yellow carry action and orientation.

**Key Characteristics:**
- Bright blue balance and central QR action.
- White rounded modules on a pale canvas.
- Yellow service icons and transaction marks.
- Route map with anchored bottom sheet.
- Friendly transit and wallet illustration.

## Colors

### Brand & Accent
- **Electric Blue** ({colors.primary}): Balance, selected navigation, and primary actions.
- **Service Yellow** ({colors.accent-yellow}): Menu icons, transit rows, and highlights.
- **Slate** ({colors.accent-slate}): Wallet action strip.
- **Teal** ({colors.accent-teal}): Map route and vehicle markers.

### Surface
- **Canvas** ({colors.canvas}): Home and transactional background.
- **Surface 1** ({colors.surface-1}): Cards, lists, and route sheet.
- **Surface 2** ({colors.surface-2}): Disabled and empty placeholders.
- **Hairline** ({colors.hairline}): List separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Transaction and route metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled navigation.

### Semantic
- **Success** ({colors.semantic-success}): Top-ups and successful payments.
- **Danger** ({colors.semantic-danger}): Failed transfer or payment.
- **Overlay** ({colors.semantic-overlay}): Tutorials and sheets.

## Typography

### Font Family

- **SF Pro Display** — onboarding and major headings.
- **SF Pro Text** — balances, routes, lists, and controls.
- **SF Mono** — identifiers where necessary.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Onboarding statement |
| `{typography.headline}` | 21px | 700 | Screen heading |
| `{typography.card-title}` | 16px | 600 | Balance and service title |
| `{typography.body}` | 14px | 400 | Transactions and routes |
| `{typography.caption}` | 10px | 400 | Tab and timing data |
| `{typography.button}` | 14px | 600 | Actions |

### Principles

- Make balance and fare amounts dominant.
- Use plain transport vocabulary.
- Keep timestamps and route descriptions secondary.
- Pair icons with short labels.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 12px module gaps, and 16px card padding.

### Grid & Container

Home stacks balance, payment modes, banner, services, offers, and navigation. Wallet is a single-column ledger. Routes combine full-screen map with a resizable list sheet.

### Whitespace Philosophy

Keep transaction and map spaces quiet; reserve dense color and imagery for the home dashboard.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas or map | Base workspace |
| 1 | White rounded card | Services and lists |
| 2 | Saturated balance/action card | Money and primary action |
| 3 | Modal over tinted scrim | Tutorial or decision |

### Decorative Depth

Use soft isometric objects in onboarding and promotions. Functional cards use minimal shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 7px | Small fields and icons |
| `{rounded.sm}` | 11px | Service rows |
| `{rounded.md}` | 15px | Balance and actions |
| `{rounded.lg}` | 20px | Route sheet and tutorial |
| `{rounded.pill}` | full | Tabs and map chips |
| `{rounded.full}` | full | Central QR and icon buttons |

### Photography & Illustration Geometry

Maps remain full bleed. Illustration uses flat-isometric objects and characters on pale abstract shapes, contained with clear margins.

## Components

### Buttons

Blue progresses payment and setup. Slate groups wallet actions. White outlined buttons close tutorials or secondary decisions.

### Pricing Tabs

Route modes, history periods, and service categories use underline tabs or compact selectors. Selection stays blue.

### Cards & Containers

Balance card leads home. Wallet action strip groups payment, transfer, and top-up. Transactions pair a yellow icon with route, time, and amount.

### Inputs & Forms

Search fields are soft gray and full width. Payment and transfer forms use one-column fields with explicit review and result states.

### Status & Build Page

Show wallet balance, tariff, payment result, transaction direction, favorite route, and notification state close to the relevant control.

### Navigation

Avtobys, Routes, central QR, Notifications, and Menu form the bottom bar. The QR action is elevated and visually dominant.

### Footer

Bottom navigation remains persistent except inside focused payment, login, and settings subflows.

## Do's and Don'ts

### Do

- Show balance before payment.
- Keep the central QR action persistent.
- Preserve map context with an anchored sheet.
- Use yellow consistently for service icons.
- Explain payment steps before commitment.

### Don't

- Don't overload maps with promotional art.
- Don't reuse blue and yellow without hierarchy.
- Don't hide transaction direction or time.
- Don't mix illustration into ledgers.
- Don't shrink route rows below touch size.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Split map and route list |
| Compact | 390–767px | Default stacked dashboard |
| Small | <390px | Shorten labels and banners |

### Touch Targets

Keep QR, wallet actions, route rows, tabs, menu rows, and bottom navigation at least 44px.

### Collapsing Strategy

Move offers into horizontal scroll before reducing the balance card. Route sheet may collapse, but search and current route remain visible.

### Image Behavior

Contain illustrations and service objects; crop promotional photography inside bounded banners only. Maps adapt freely to viewport.

## Iteration Guide

1. Establish bottom navigation and balance card.
2. Build wallet, payments, and history.
3. Add central QR modes.
4. Add route map and favorites.
5. Add promotional illustration and offers last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 50 flow names were inventoried; onboarding, home, wallet, payment, routes, and menu flows were image-reviewed.
- Bluetooth hardware behavior, map gestures, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
