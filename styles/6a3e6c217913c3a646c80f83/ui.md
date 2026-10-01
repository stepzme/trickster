<design-context>
---
version: 1
platform: iOS
name: Avtobys-design-analysis
description: "A transit-and-wallet interface combining vivid electric blue, white rounded cards, warm yellow service icons, a dark slate wallet action strip, and map-heavy route planning. Colorful flat-isometric illustrations introduce payments and services, while the everyday workspace stays compact and highly functional."
colors:
  primary: "#1478FF"
  on-primary: "#FFFFFF"
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  balance-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  wallet-actions: { backgroundColor: "{colors.accent-slate}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  service-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  route-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
---

# Overview

Avtobys treats the transport balance as the primary object, with QR, Bluetooth, number payment, routes, tickets, transfers, and intercity services arranged around it. Maps and transactions stay neutral; blue and yellow carry action and orientation.

**Key Characteristics:**
- Bright blue balance and central QR action.
- White rounded modules on a pale canvas.
- Yellow service icons and transaction marks.
- Route map with anchored bottom sheet.
- Friendly transit and wallet illustration.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Bright blue balance and central QR action.
- The reviewed screens show this treatment: White rounded modules on a pale canvas.
- The reviewed screens show this treatment: Yellow service icons and transaction marks.
- The reviewed screens show this treatment: Route map with anchored bottom sheet.
- The reviewed screens show this treatment: Friendly transit and wallet illustration.

# Color and surfaces

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

# Typography

### Font Family

- **SF Pro Display** — onboarding and major headings.
- **SF Pro Text** — balances, routes, lists, and controls.
- **SF Mono** — identifiers where necessary.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36pt | 700 | Onboarding statement |
| `{typography.headline}` | 21pt | 700 | Screen heading |
| `{typography.card-title}` | 16pt | 600 | Balance and service title |
| `{typography.body}` | 14pt | 400 | Transactions and routes |
| `{typography.caption}` | 10pt | 400 | Tab and timing data |
| `{typography.button}` | 14pt | 600 | Actions |

### Principles

- Make balance and fare amounts dominant.
- Use plain transport vocabulary.
- Keep timestamps and route descriptions secondary.
- Pair icons with short labels.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 12pt gutters, 12pt module gaps, and 16pt card padding.

### Grid & Container

Home stacks balance, payment modes, banner, services, offers, and navigation. Wallet is a single-column ledger. Routes combine full-screen map with a resizable list sheet.

### Whitespace Philosophy

Keep transaction and map spaces quiet; reserve dense color and imagery for the home dashboard.

# Navigation appearance

Avtobys, Routes, central QR, Notifications, and Menu form the bottom bar. The QR action is elevated and visually dominant.

# Components

### Buttons

Blue progresses payment and setup. Slate groups wallet actions. White outlined buttons close tutorials or secondary decisions.

Route modes, history periods, and service categories use underline tabs or compact selectors. Selection stays blue.

### Cards & Containers

Balance card leads home. Wallet action strip groups payment, transfer, and top-up. Transactions pair a yellow icon with route, time, and amount.

### Inputs & Forms

Search fields are soft gray and full width. Payment and transfer forms use one-column fields with explicit review and result states.

### Status & Build Page

Show wallet balance, tariff, payment result, transaction direction, favorite route, and notification state close to the relevant control.

### Navigation

Avtobys, Routes, central QR, Notifications, and Menu form the bottom bar. The QR action is elevated and visually dominant.

Bottom navigation remains persistent except inside focused payment, login, and settings subflows.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale canvas or map | Base workspace |
| 1 | White rounded card | Services and lists |
| 2 | Saturated balance/action card | Money and primary action |
| 3 | Modal over tinted scrim | Tutorial or decision |

### Decorative Depth

Use soft isometric objects in onboarding and promotions. Functional cards use minimal shadow.

# States

Show wallet balance, tariff, payment result, transaction direction, favorite route, and notification state close to the relevant control.

# iOS adaptation

| Wide | 768pt+ | Split map and route list |
| Small | <390pt | Shorten labels and banners |

### Touch Targets

Keep QR, wallet actions, route rows, tabs, menu rows, and bottom navigation at least 44pt.

### Collapsing Strategy

Move offers into horizontal scroll before reducing the balance card. Route sheet may collapse, but search and current route remain visible.

### Image Behavior

Contain illustrations and service objects; crop promotional photography inside bounded banners only. Maps adapt freely to viewport.

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

</design-context>
