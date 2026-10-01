<design-context>
---
version: 1
platform: iOS
name: Home-Credit-Bank-design-analysis
description: "A white, modular banking interface with near-black navigation, a vivid red-magenta action core, colorful product cards, precise finance charts, and playful dimensional payment-category objects. Rounded modules keep cards, transfers, payments, and analytics compact without sacrificing trust."
colors: {primary: "#EC0A46", on-primary: "#FFFFFF", primary-focus: "#C90036", ink: "#17191F", ink-muted: "#676C74", ink-subtle: "#989DA5", ink-tertiary: "#C5C9CF", canvas: "#FFFFFF", surface-1: "#F7F7F9", surface-2: "#EFEFF3", surface-3: "#E4E5EA", surface-4: "#D6D8DF", hairline: "#E5E6EA", hairline-strong: "#C9CCD3", hairline-tertiary: "#B1B6C0", inverse-canvas: "#181B23", inverse-surface-1: "#292D38", inverse-surface-2: "#3C414E", inverse-ink: "#FFFFFF", brand-secure: "#EC0A46", semantic-success: "#1EC95B", semantic-overlay: "#15171D"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  product-card: {backgroundColor: "#890044", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  finance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "#E7FAED", textColor: "#169A47", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 10]}
---

# Overview

Home Credit Bank uses a light modular shell with a vivid red-magenta action center. Dark navigation, colorful financial products, analytical charts, and dimensional payment icons make a broad banking suite easy to scan.

**Key Characteristics:** white banking canvas, red-magenta primary action, near-black controls, colorful card carousel, rounded finance modules, green income cues, clean charts, 3D payment objects, and five-item navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: white banking canvas.
- The reviewed screens show this treatment: red-magenta primary action.
- The reviewed screens show this treatment: near-black controls.
- The reviewed screens show this treatment: colorful card carousel.
- The reviewed screens show this treatment: rounded finance modules.
- The reviewed screens show this treatment: green income cues.
- The reviewed screens show this treatment: clean charts.
- The reviewed screens show this treatment: 3D payment objects.

# Color and surfaces

### Brand & Accent

Red-magenta owns the central action, active payment state, and urgent brand emphasis. Near-black supports strong secondary actions and selected tabs.

### Surface

White is the base. Pale cool gray groups products, transfer modes, payment categories, analytics, and sheets.

### Text

Near-black leads balances, amounts, product names, and headings. Gray supports rates, dates, account detail, and explanations.

### Semantic

Green represents income and success, coral marks spending, violet supports finance categories, and red-magenta remains the core action color.

# Typography

### Font Family

Use SF Pro Display for balances and financial states and SF Pro Text for products, transfers, payments, charts, and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Balance or total |
| headline | 21pt | 700 | Page or product |
| card-title | 16pt | 600 | Card and payment |
| body | 13pt | 400 | Financial detail |
| caption | 10pt | 400 | Rate and transaction meta |

### Principles

- Lead with amount, source, recipient, or current product.
- Use tabular numerals and stable alignment.
- Separate informational color from transactional action.

### Note on Font Substitutes

Use the platform sans with tabular numerals and strong Cyrillic or Kazakh support.

# Screen composition

### Grid & Container

Home stacks category tabs, product carousel, quick actions, finance summary, and transfer entry. Detail and analytics use focused vertical modules or sheets.

### Whitespace Philosophy

Keep banking modules compact but distinct. Never let promotional content interrupt the amount-to-action reading path.

# Navigation appearance

Use five bottom destinations for Home, All accounts, Transfers, Payments, and For me, with a red circular active action and gray inactive icons.

# Components

### Buttons

Primary banking actions use red-magenta with white text; dark buttons support conversion or secondary commitment. Pale buttons handle utility actions.

Products, transfer method, payment catalog, account filter, period, and chart range use compact tabs or segments with black or red active state.

### Cards & Containers

Product cards align name, balance, rewards, and brand artwork. Finance cards align income, spending, category chart, period, and drill-down.

### Inputs & Forms

Amount, phone, card, account, and payment fields use pale grouped surfaces with clear validation. Native controls must inherit brand focus, radii, type, and spacing.

### Status & Build Page

Keep balance, fee, rate, limit, recipient, source, pending or failed state, receipt, and confirmation near the affected transaction.

### Navigation

Use five bottom destinations for Home, All accounts, Transfers, Payments, and For me, with a red circular active action and gray inactive icons.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Banking shell |
| 1 | Pale rounded module | Quick action and analytics |
| 2 | Saturated product card | Account or card |
| 3 | Red floating action | Primary destination |

### Decorative Depth

Use colorful card artwork, precise charts, dimensional payment-category objects, and restrained tonal panels. Avoid heavy shadow.

# States

Keep balance, fee, rate, limit, recipient, source, pending or failed state, receipt, and confirmation near the affected transaction.

# iOS adaptation

### Touch Targets

Product cards, quick actions, tabs, amount fields, payment cells, filters, navigation, and confirmation remain at least 44pt.

### Collapsing Strategy

Preserve amount, source, recipient, fee, rate, status, and confirmation; reduce promotions and education first.

### Image Behavior

Keep card artwork legible, contain payment objects without cropping, and preserve chart labels at compact widths.

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

- Keep amounts, sources, recipients, fees, and confirmation explicit.
- Reserve red-magenta for brand and primary action.
- Use dimensional illustration to distinguish payment categories.

### Don't

- Don't color every financial module red.
- Don't use decorative art behind critical numbers.
- Don't let native controls ignore the surrounding custom visual language.

</design-context>
