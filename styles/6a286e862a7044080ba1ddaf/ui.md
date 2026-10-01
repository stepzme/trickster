<design-context>
---
version: 1
platform: iOS
name: Banco-Plata-design-analysis
description: "A soft, futuristic banking interface built from mist-gray backgrounds, translucent white rounded cards, orange brand accents, violet controls, and high-contrast black totals. Credit, account, payments, cashback, installments, and savings share a floating modular dashboard; premium 3D product renders turn new financial products into tactile objects."
colors:
  primary: "#FF5B19"
  on-primary: "#FFFFFF"
  primary-soft: "#FFF0E8"
  accent-violet: "#3714E8"
  accent-blue: "#2563EB"
  accent-red: "#FF3B30"
  ink: "#101014"
  ink-muted: "#74747C"
  ink-subtle: "#A6A6AE"
  canvas: "#F2F2F5"
  surface-1: "#FFFFFF"
  surface-2: "#E8E8ED"
  hairline: "#DDDEE4"
  semantic-success: "#24B66F"
  semantic-danger: "#E54455"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.9 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 22, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  summary-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  action-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  transfer-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
---

# Overview

Banco Plata uses a soft floating-card system to unify credit, cash account, cards, cashback, installments, payments, transfers, savings, and investment. Orange identifies the brand and acquisition; violet emphasizes financial controls.

**Key Characteristics:**
- Mist-gray atmospheric canvas.
- Large white rounded account modules.
- Orange brand and acquisition actions.
- Floating pill navigation.
- Premium 3D financial product renders.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Mist-gray atmospheric canvas.
- The reviewed screens show this treatment: Large white rounded account modules.
- The reviewed screens show this treatment: Orange brand and acquisition actions.
- The reviewed screens show this treatment: Floating pill navigation.
- The reviewed screens show this treatment: Premium 3D financial product renders.

# Color and surfaces

### Brand & Accent
- **Plata Orange** ({colors.primary}): Wordmark, acquisition, and key product actions.
- **Violet** ({colors.accent-violet}): Transfers, toggles, and financial emphasis.
- **Blue** ({colors.accent-blue}): Linked utility actions.
- **Red** ({colors.accent-red}): Cashback and alerts.

### Surface
- **Canvas** ({colors.canvas}): Dashboard atmosphere.
- **Surface 1** ({colors.surface-1}): Accounts, summaries, and sheets.
- **Surface 2** ({colors.surface-2}): Disabled and secondary fields.
- **Hairline** ({colors.hairline}): Subtle separation.

### Text
- **Ink** ({colors.ink}): Balances, totals, and headings.
- **Ink Muted** ({colors.ink-muted}): Product terms and dates.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and empty state.

### Semantic
- **Success** ({colors.semantic-success}): Completed and positive state.
- **Danger** ({colors.semantic-danger}): Freeze, discard, and errors.
- **Overlay** ({colors.semantic-overlay}): Bottom-sheet focus.

# Typography

### Font Family

- **SF Pro Display** — balances, campaigns, and major headings.
- **SF Pro Text** — cards, payments, and forms.
- **SF Mono** — card suffixes and codes.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38pt | 700 | Balance or product campaign |
| `{typography.headline}` | 22pt | 700 | Screen and module heading |
| `{typography.card-title}` | 16pt | 600 | Account and payment title |
| `{typography.body}` | 14pt | 400 | Conditions and forms |
| `{typography.caption}` | 10pt | 400 | Navigation and metadata |
| `{typography.button}` | 14pt | 600 | Primary action |

### Principles

- Lead with amount and available balance.
- Keep credit and own-funds distinctions explicit.
- Use bold section labels, not dense bold body text.
- Keep campaign lettering inside authored assets.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt gutters, 12pt module gaps, and 16pt card padding.

### Grid & Container

Home stacks paired insight tiles, transaction summary, account modules, and product invitations. Payments use action pairs, favorites, and category grids. Details become one-column sheets.

### Whitespace Philosophy

Allow modules to float in open mist-gray space; avoid packing every viewport edge.

# Navigation appearance

Home, Pay, Invest, Invite amount, and Chat form a floating bottom pill. Product details keep the navigation reachable when safe.

# Components

### Buttons

Orange commits acquisition or savings. White action tiles handle pay, bill pay, transfer, freeze, and reissue. Violet controls indicate enabled financial permissions.

Card and account choices use small thumbnail selectors. Transfer rails appear as large sheet rows.

### Cards & Containers

Account cards expose amount, due state, linked cards, dates, and shortcuts. Summary tiles cover cashback, installments, and spending. Product campaigns are visually richer and isolated.

### Inputs & Forms

Authentication uses large code entry. Payment and transfer forms use one-column fields and review. Numeric keyboard remains visible where useful.

### Status & Build Page

Show due, available credit, own funds, cashback earned, months deferred, frozen, online payment, and ATM state explicitly.

### Navigation

Home, Pay, Invest, Invite amount, and Chat form a floating bottom pill. Product details keep the navigation reachable when safe.

The pill navigation floats above the safe area; sheets and forms replace it with a focused confirmation action.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Mist-gray atmosphere | Dashboard base |
| 1 | White rounded card | Accounts and summaries |
| 2 | Gradient orb or card | Dynamic finance signal |
| 3 | White bottom sheet over scrim | Transfer choice |

### Decorative Depth

Use translucent highlights, gradient spheres, and premium 3D product renders. Functional text remains high contrast.

# States

Show due, available credit, own funds, cashback earned, months deferred, frozen, online payment, and ATM state explicitly.

# iOS adaptation

| Wide | 768pt+ | Add dashboard columns |
| Small | <390pt | Stack insight tiles and shorten labels |

### Touch Targets

Keep tiles, card selectors, toggles, transfer rows, and bottom navigation at least 44pt.

### Collapsing Strategy

Stack insight pairs before shrinking text. Preserve balances, due state, and primary account above campaigns.

### Image Behavior

Contain 3D product objects and preserve card aspect ratio. Crop only authored campaign backgrounds, never banking data.

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

- Separate available credit from own funds.
- Keep due state and dates visible.
- Use orange for acquisition and high-value progression.
- Preserve the soft floating surface system.
- Use 3D art only for new products.

### Don't

- Don't reduce contrast to achieve translucency.
- Don't put product art behind balances.
- Don't merge bill payment and transfers.
- Don't hide card security toggles.
- Don't use orange for destructive actions.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; sign-in, home, card detail, transfers, payments, and deposit flows were image-reviewed.
- Animation, investment detail, and biometric behavior were not assessed.

</design-context>
