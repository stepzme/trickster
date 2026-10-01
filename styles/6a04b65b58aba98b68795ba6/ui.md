<design-context>
---
version: 1
platform: iOS
name: BCC-design-analysis
description: "A green-led universal banking interface built from white utility surfaces, soft gray grouped panels, emerald circular actions, product carousels, and dense account lists. Cards, transfers, payments, deposits, loans, exchange, services, and support share a compact system; glossy green 3D campaign art adds a distinctive acquisition layer."
colors:
  primary: "#00AE73"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 7, sm: 11, md: 15, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  account-group: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  quick-action: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12 }
  payment-banner: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  card-detail: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
---

# Overview

BCC balances a dense universal-bank catalog with consistent emerald actions and compact white groups. Acquisition content is visually rich, while balances, transfer rails, payments, and services remain direct.

**Key Characteristics:**
- Emerald active state and circular actions.
- Expandable cards, deposits, and accounts.
- Five-tab financial navigation.
- Compact transfer and payment directories.
- Glossy green 3D campaigns.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Emerald active state and circular actions.
- The reviewed screens show this treatment: Expandable cards, deposits, and accounts.
- The reviewed screens show this treatment: Five-tab financial navigation.
- The reviewed screens show this treatment: Compact transfer and payment directories.
- The reviewed screens show this treatment: Glossy green 3D campaigns.

# Color and surfaces

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

# Typography

### Font Family

- **SF Pro Display** — campaign and major headings.
- **SF Pro Text** — accounts, transfers, payments, and services.
- **SF Mono** — masked identifiers.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36pt | 700 | Campaign statement |
| `{typography.headline}` | 21pt | 700 | Screen heading |
| `{typography.card-title}` | 16pt | 600 | Account or product title |
| `{typography.body}` | 14pt | 400 | Rows and conditions |
| `{typography.caption}` | 10pt | 400 | Tabs and metadata |
| `{typography.button}` | 14pt | 600 | Primary action |

### Principles

- Keep balances and account type easy to scan.
- Use compact secondary copy beneath transfer rails.
- Reserve large display type for campaigns.
- Align currencies and rates in columns.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Grid & Container

Home stacks product stories, quick actions, services, expandable accounts, exchange, and useful links. Transfers and payments use one-column directories with circular favorites.

### Whitespace Philosophy

Use pale canvas between white groups; keep account lists compact and campaign art bounded.

# Navigation appearance

Home, Transfers, Payments, History, and Services form the bottom bar. Profile and bank chat remain in the header.

# Components

### Buttons

Emerald handles banking actions; charcoal handles loan applications. Apple Wallet uses black. Secondary rows are white with icon and chevron.

Currency and gold use a segmented control. Card details use Current accounts, History, and Actions tabs.

### Cards & Containers

Account groups expand by product type. Card detail pairs card artwork, balance, top-up, transfer, Wallet, and account actions. Payment categories add cashback badges.

### Inputs & Forms

Forms use white fields and staged confirmation. Transfers begin with a rail directory; payment search stays at the top of categories.

### Status & Build Page

Show plus connection, hidden balance, cashback, recurring state, deposit progress, card block, and loan application status explicitly.

### Navigation

Home, Transfers, Payments, History, and Services form the bottom bar. Profile and bank chat remain in the header.

Bottom navigation persists across top-level directories; product and application forms use focused back navigation.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas | Dashboard base |
| 1 | White rounded group | Accounts and directories |
| 2 | Card artwork | Product identity |
| 3 | Full-screen campaign story | Acquisition |

### Decorative Depth

Use metallic and glass 3D objects in stories and banners. Functional banking surfaces stay flat.

# States

Show plus connection, hidden balance, cashback, recurring state, deposit progress, card block, and loan application status explicitly.

# iOS adaptation

| Wide | 768pt+ | Add dashboard and directory columns |
| Small | <390pt | Shorten quick-action labels |

### Touch Targets

Keep actions, account rows, transfer rails, categories, segments, and tabs at least 44pt.

### Collapsing Strategy

Allow action and story rows to scroll horizontally. Keep accounts and exchange in a single readable column.

### Image Behavior

Contain 3D campaign objects and preserve card artwork ratio. Do not crop text embedded in authored banners.

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

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; unauthorized home, signed-in home, card, transfers, payments, and services were image-reviewed.
- QR hardware, Apple Pay handoff, and motion were not assessed.

</design-context>
