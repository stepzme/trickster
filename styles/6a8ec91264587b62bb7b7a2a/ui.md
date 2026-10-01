<design-context>
---
version: 1
platform: iOS
name: Ozon-Bank-design-analysis
description: "A bright banking system built around saturated blue account stages, white modular finance cards, soft cyan actions, pastel benefit notices, bold numeric type, and polished 3D product art."
colors: {primary: "#006DFF", on-primary: "#FFFFFF", primary-focus: "#0056CD", ink: "#17191C", ink-muted: "#686B71", ink-subtle: "#9A9DA3", ink-tertiary: "#C2C6CB", canvas: "#FFFFFF", surface-1: "#F4F8FC", surface-2: "#E8F2FA", surface-3: "#DCE8F1", surface-4: "#CFDCE6", hairline: "#E1E7EC", hairline-strong: "#C8D1D9", hairline-tertiary: "#AFBAC3", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#7854EE", semantic-success: "#35BF7A", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6, sm: 10, md: 16, lg: 22, xl: 28, xxl: 32, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Ozon Bank combines a saturated blue account carousel with clean white operational modules, pastel benefit panels, bold balances, and polished product art.

**Key Characteristics:** blue account stage, white finance modules, cyan quick actions, pastel benefit bands, bold balances, 3D cards and gifts, and compact operation lists.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: blue account stage.
- The reviewed screens show this treatment: white finance modules.
- The reviewed screens show this treatment: cyan quick actions.
- The reviewed screens show this treatment: pastel benefit bands.
- The reviewed screens show this treatment: bold balances.
- The reviewed screens show this treatment: 3D cards and gifts.
- The reviewed screens show this treatment: compact operation lists.

# Color and surfaces

### Brand & Accent

Ozon blue drives primary banking action and active navigation. Violet supports credit products; pastel green and yellow communicate benefit or guidance.

### Surface

Use white for operations and pale blue for grouped actions, analytics, and account details; blue gradient is reserved for product context.

### Text

Near-black leads balances and signed amounts; gray supports category, description, and terms.

### Semantic

Green indicates income or success, red indicates expense or failure, yellow offers guidance, and blue remains action.

# Typography

### Font Family

Use SF Pro Display for balances and product headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30pt | 700 | Hero or state |
| headline | 21pt | 700 | Section title |
| card-title | 16pt | 600 | Primary item |
| body | 13pt | 400 | Detail |
| caption | 10pt | 400 | Metadata |

### Principles

- Lead with account, balance, signed amount, or next money action.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular numerals and clear compact history rows.

# Screen composition

### Grid & Container

Home stacks product carousel, quick actions, reward modules, and operations; account detail uses one wide column.

### Whitespace Philosophy

Give balances and primary actions room, then keep history and settings rows compact.

# Navigation appearance

Use five bottom destinations with blue active icon and quiet gray inactive icons.

# Components

### Buttons

Primary actions use solid blue; quick money actions use pale blue groups; success completion stays blue with green status.

History periods, accounts, and filters use compact blue chips or simple labeled segments.

### Cards & Containers

Product cards combine account type, balance, term, and close affordance; operational modules group one finance purpose.

### Inputs & Forms

Transfer and payment forms use pale fields, blue focus, and clear source, destination, amount, and fee hierarchy.

### Status & Build Page

Keep cashback, application, account, transfer, analytics, and receipt state close to the relevant module.

### Navigation

Use five bottom destinations with blue active icon and quiet gray inactive icons.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use gradient product stages, broad rounded modules, and polished 3D promo art; avoid shadow on transaction lists.

# States

Keep cashback, application, account, transfer, analytics, and receipt state close to the relevant module.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44pt.

### Collapsing Strategy

Preserve account, balance, and money actions; stack benefits and reduce promotional cards before history.

### Image Behavior

Contain 3D product art in dedicated panels and keep transaction information on stable light surfaces.

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

- Preserve the blue account context and clean white operational hierarchy.
- Keep the primary task and current state immediately legible.
- Style native controls to inherit this visual system.

### Don't

- Don't extend promotional gradients behind dense history or settings.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.

</design-context>
