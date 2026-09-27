<design-context>
---
version: alpha
name: BCC-design-analysis
description: "A green-led universal banking interface built from white utility surfaces, soft gray grouped panels, emerald circular actions, product carousels, and dense account lists. Cards, transfers, payments, deposits, loans, exchange, services, and support share a compact system; glossy green 3D campaign art adds a distinctive acquisition layer."
colors:
  primary: "#00AE73"
  on-primary: "#FFFFFF"
  primary-hover: "#009561"
  primary-soft: "#E2F7EF"
  accent-dark: "#202328"
  accent-lime: "#84E76D"
  ink: "#17191D"
  ink-muted: "#74787F"
  ink-subtle: "#A8ACB2"
  canvas: "#F4F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#E9EBEE"
  hairline: "#DDE1E5"
  semantic-success: "#00AE73"
  semantic-danger: "#E34455"
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  account-group: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  quick-action: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12px }
  payment-banner: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  card-detail: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

BCC balances a dense universal-bank catalog with consistent emerald actions and compact white groups. Acquisition content is visually rich, while balances, transfer rails, payments, and services remain direct.

**Key Characteristics:**
- Emerald active state and circular actions.
- Expandable cards, deposits, and accounts.
- Five-tab financial navigation.
- Compact transfer and payment directories.
- Glossy green 3D campaigns.

## Colors

### Brand & Accent
- **BCC Emerald** ({colors.primary}): Active tab, actions, links, and success.
- **Dark Charcoal** ({colors.accent-dark}): High-commitment application CTA.
- **Lime** ({colors.accent-lime}): Campaign highlight only.

### Surface
- **Canvas** ({colors.canvas}): Dashboard base.
- **Surface 1** ({colors.surface-1}): Account groups and lists.
- **Surface 2** ({colors.surface-2}): Banners, segments, and secondary states.
- **Hairline** ({colors.hairline}): List separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Rates, terms, and details.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Completion and positive account state.
- **Danger** ({colors.semantic-danger}): Blocking and errors.
- **Overlay** ({colors.semantic-overlay}): Stories and confirmations.

## Typography

### Font Family

- **SF Pro Display** — campaign and major headings.
- **SF Pro Text** — accounts, transfers, payments, and services.
- **SF Mono** — masked identifiers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Campaign statement |
| `{typography.headline}` | 21px | 700 | Screen heading |
| `{typography.card-title}` | 16px | 600 | Account or product title |
| `{typography.body}` | 14px | 400 | Rows and conditions |
| `{typography.caption}` | 10px | 400 | Tabs and metadata |
| `{typography.button}` | 14px | 600 | Primary action |

### Principles

- Keep balances and account type easy to scan.
- Use compact secondary copy beneath transfer rails.
- Reserve large display type for campaigns.
- Align currencies and rates in columns.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 10–12px gutters, 12px group gaps, and 14–16px card padding.

### Grid & Container

Home stacks product stories, quick actions, services, expandable accounts, exchange, and useful links. Transfers and payments use one-column directories with circular favorites.

### Whitespace Philosophy

Use pale canvas between white groups; keep account lists compact and campaign art bounded.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Dashboard base |
| 1 | White rounded group | Accounts and directories |
| 2 | Card artwork | Product identity |
| 3 | Full-screen campaign story | Acquisition |

### Decorative Depth

Use metallic and glass 3D objects in stories and banners. Functional banking surfaces stay flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 7px | Tags and fields |
| `{rounded.sm}` | 11px | Banners and card media |
| `{rounded.md}` | 15px | Account groups |
| `{rounded.lg}` | 20px | Stories and dialogs |
| `{rounded.pill}` | full | Segments and tabs |
| `{rounded.full}` | full | Quick actions and avatar |

### Photography & Illustration Geometry

Cards preserve landscape ratio. Product campaigns use centered glossy objects on green or white studio sets, with text and CTA in protected zones.

## Components

### Buttons

Emerald handles banking actions; charcoal handles loan applications. Apple Wallet uses black. Secondary rows are white with icon and chevron.

### Pricing Tabs

Currency and gold use a segmented control. Card details use Current accounts, History, and Actions tabs.

### Cards & Containers

Account groups expand by product type. Card detail pairs card artwork, balance, top-up, transfer, Wallet, and account actions. Payment categories add cashback badges.

### Inputs & Forms

Forms use white fields and staged confirmation. Transfers begin with a rail directory; payment search stays at the top of categories.

### Status & Build Page

Show plus connection, hidden balance, cashback, recurring state, deposit progress, card block, and loan application status explicitly.

### Navigation

Home, Transfers, Payments, History, and Services form the bottom bar. Profile and bank chat remain in the header.

### Footer

Bottom navigation persists across top-level directories; product and application forms use focused back navigation.

## Do's and Don'ts

### Do

- Keep account types expandable and named.
- Separate transfers, payments, and services.
- Show exchange buy and sell rates together.
- Use green consistently for action and selection.
- Keep 3D art inside campaigns.

### Don't

- Don't use glossy art behind balances.
- Don't hide fees or country scope.
- Don't mix loan application with routine payment CTA.
- Don't overfill account groups.
- Don't use cashback badges without explanation.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add dashboard and directory columns |
| Compact | 390–767px | Default stacked groups |
| Small | <390px | Shorten quick-action labels |

### Touch Targets

Keep actions, account rows, transfer rails, categories, segments, and tabs at least 44px.

### Collapsing Strategy

Allow action and story rows to scroll horizontally. Keep accounts and exchange in a single readable column.

### Image Behavior

Contain 3D campaign objects and preserve card artwork ratio. Do not crop text embedded in authored banners.

## Iteration Guide

1. Establish bottom navigation and account groups.
2. Build card detail and exchange.
3. Add transfers, payments, and history.
4. Add loans, deposits, services, and profile.
5. Add 3D campaigns last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; unauthorized home, signed-in home, card, transfers, payments, and services were image-reviewed.
- QR hardware, Apple Pay handoff, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
