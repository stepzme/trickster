<design-context>
---
version: 1
platform: iOS
name: Balance-Pay-design-analysis
description: "A compact digital-wallet interface built from white surfaces, very pale lavender grouped cards, a magenta-to-violet brand gradient, black utility type, and small purple line icons. Finance, payments, history, and support remain deliberately sparse, with balances and transaction amounts as the only strong hierarchy."
colors:
  primary: "#B72CF3"
  on-primary: "#FFFFFF"
  primary-soft: "#F3E7FF"
  accent-magenta: "#F018B6"
  accent-violet: "#6F26F5"
  ink: "#101010"
  ink-muted: "#77777E"
  ink-subtle: "#A9A9B0"
  canvas: "#FFFFFF"
  surface-1: "#F5F4F8"
  surface-2: "#ECEAF0"
  hairline: "#DFDDE4"
  semantic-success: "#16B768"
  semantic-danger: "#E44558"
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
  balance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  action-icon: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 12 }
  transaction-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  setting-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Balance Pay is intentionally small and calm: two financial products, clear transfer and top-up actions, a filtered history, settings, and support. Purple supplies identity while most everyday tasks remain monochrome and spacious.

**Key Characteristics:**
- White canvas with pale lavender grouped cards.
- Magenta-violet gradient reserved for brand moments.
- Sparse purple line icons.
- Balance-first finance screen.
- Four-item bottom navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas with pale lavender grouped cards.
- Sampled screens consistently use magenta-violet gradient reserved for brand moments.
- The reference consistently shows sparse purple line icons.
- The reference consistently shows balance-first finance screen.
- Navigation consistently uses four-item bottom navigation.

# Color and surfaces

### Brand & Accent
- **Pay Purple** ({colors.primary}): Active tab, actions, icons, and emphasis.
- **Magenta** ({colors.accent-magenta}) and **Violet** ({colors.accent-violet}): Launch and app-mark gradient.
- Keep everyday financial surfaces neutral.

### Surface
- **Canvas** ({colors.canvas}): Default screen background.
- **Surface 1** ({colors.surface-1}): Balance, payment, history, and settings groups.
- **Surface 2** ({colors.surface-2}): Disabled and selected segment background.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Supporting transaction copy.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and placeholder text.

### Semantic
- **Success** ({colors.semantic-success}): Incoming funds and enabled wallet.
- **Danger** ({colors.semantic-danger}): Blocking, logout, and failure.
- **Overlay** ({colors.semantic-overlay}): Confirmation focus.

# Typography

### Font Family

- **SF Pro Display** — screen headings and empty-state title.
- **SF Pro Text** — balances, rows, forms, and navigation.
- **SF Mono** — identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36 points | 700 | Launch or major state |
| `{typography.headline}` | 21 points | 700 | Screen heading |
| `{typography.card-title}` | 16 points | 600 | Product and amount |
| `{typography.body}` | 14 points | 400 | Row and form copy |
| `{typography.caption}` | 10 points | 400 | Tab and secondary metadata |
| `{typography.button}` | 14 points | 600 | Primary action |

### Principles

- Make balance and amount the strongest information.
- Keep product names and actions direct.
- Use purple in labels sparingly.
- Align amounts and dates consistently.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 10–12 points card gaps, and 12–16 points group padding.

### Grid & Container

Finance and Payments stack full-width product cards. History uses a segmented product switch, statistics summary, filters, and a one-column ledger. Settings use grouped rows.

### Whitespace Philosophy

Keep large open regions around the few primary tasks; do not fill unused space with promotions.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Default screen |
| 1 | Pale lavender card | Products and settings |
| 2 | Purple gradient | Brand launch only |
| 3 | Scrim plus confirmation | Blocking or logout |

### Decorative Depth

Use a smooth gradient only for launch and app icon. Functional screens remain flat.

# Navigation appearance

Finance, Payments, History, and Support form the bottom bar. Notifications and settings sit in the finance header.

# Components

### Buttons

Purple handles top-up and confirmation. Neutral gray can indicate unavailable transfer. Destructive wallet actions remain explicit and separated.

### Cards & Containers

Balance cards expose product, masked balance, certificate or limits, and gift balance. Payment cards group transfer and top-up actions. Transaction rows show direction, amount, time, and description.

### Inputs & Forms

Onboarding uses numeric code entry. Transfer, top-up, certificate, and support forms use one-column fields and clear submit actions.

# Imagery and icons

Use a smooth gradient only for launch and app icon. Functional screens remain flat.

The inspected product uses no expressive illustration system. Use only simple purple line icons or abstract gradient brand marks consistent with the interface.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show hidden balance, gift funds, income, expense, empty history, notification, wallet limit, and blocked state in direct text.

# iOS adaptation

### Touch Targets

Keep tabs, product actions, filters, toggles, settings rows, and support composer at least 44 points.

### Collapsing Strategy

Keep products stacked and amounts visible. Truncate descriptions before dates or transaction direction.

### Image Behavior

No content imagery is required. Preserve gradient aspect ratio for launch and contain simple product marks.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't add promotional modules to empty space.
- Don't use gradient behind transaction content.
- Don't hide balances without an obvious reveal gesture.
- Don't rely on color alone for income and expense.
- Don't invent decorative illustration.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
