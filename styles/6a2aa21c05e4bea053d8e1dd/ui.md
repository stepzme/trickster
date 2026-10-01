<design-context>
---
version: 1
platform: iOS
name: Simply-design-analysis
description: "A bright wallet-and-benefits interface built on a cool off-white canvas, white elevated cards, black text, yellow financial accents, and violet promotional objects. Core payments remain native and restrained, while loyalty and installment areas become more graphic and colorful."

colors:
  primary: "#FFD514"
  on-primary: "#111111"
  primary-soft: "#FFF6BE"
  accent-violet: "#7B43D9"
  accent-blue: "#2288D8"
  ink: "#14151A"
  ink-muted: "#6B6E75"
  ink-subtle: "#A2A5AA"
  canvas: "#F5F6F8"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F3"
  surface-dark: "#29282B"
  hairline: "#E3E5E8"
  semantic-success: "#55B66B"
  semantic-warning: "#EEA82B"
  semantic-danger: "#D94A50"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  wallet-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  shortcut-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 12 }
  promo-banner: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.surface-1}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  benefit-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

Simply combines a wallet, card, payments, transfers, bonuses, installments, promotions, and telecom-linked benefits. Core tasks use restrained white cards on a cool gray canvas; yellow marks the financial brand while violet 3D objects add energy to offers.

**Key Characteristics:**
- Cool off-white shell with softly elevated white cards.
- Yellow brand and selection accent.
- Four square shortcuts for top-up, payments, history, and transfer.
- Dark promotional banners and glossy violet benefit objects.
- Three-tab navigation for Home, Promotions, and Profile.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Cool off-white shell with softly elevated white cards.
- The reviewed screens show this treatment: Yellow brand and selection accent.
- The reviewed screens show this treatment: Four square shortcuts for top-up, payments, history, and transfer.
- The reviewed screens show this treatment: Dark promotional banners and glossy violet benefit objects.
- The reviewed screens show this treatment: Three-tab navigation for Home, Promotions, and Profile.

# Color and surfaces

### Brand & Accent

- **Simply Yellow** ({colors.primary}) marks identity, switches, selection, and important benefit tiles.
- Violet and blue are secondary promotional accents, not default CTA colors.

### Surface

- **Canvas** ({colors.canvas}) separates wallet modules.
- **Surface 1** ({colors.surface-1}) carries cards, lists, and forms.
- **Surface 2** ({colors.surface-2}) carries shortcuts and grouped controls.
- **Dark Surface** ({colors.surface-dark}) supports installment promotion.

### Text

- **Ink** ({colors.ink}) carries balances and task labels.
- **Muted** ({colors.ink-muted}) carries benefit explanations.
- **Subtle** ({colors.ink-subtle}) is for placeholders and inactive states.

### Semantic

Use green for incoming value and success, amber for attention, and red for errors or destructive actions. Yellow remains brand selection rather than warning.

# Typography

### Font Family

Use a neutral system sans with clear numerals and compact labels.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 36pt | 700 | Wallet balance |
| `{typography.display-lg}` | 30pt | 700 | Major product title |
| `{typography.display-md}` | 25pt | 700 | Screen title |
| `{typography.headline}` | 21pt | 700 | Module heading |
| `{typography.card-title}` | 16pt | 600 | Wallet or card title |
| `{typography.body}` | 14pt | 400 | Transaction and service copy |
| `{typography.caption}` | 10pt | 400 | Benefits and navigation |

### Principles

- Keep balances and transaction amounts prominent.
- Keep shortcut labels brief.
- Separate promotional percentages from operational values.
- Use consistent finance terminology.

### Note on Font Substitutes

Use SF Pro or Inter. Preserve readable numerals and compact module labels.

# Screen composition

### Grid & Container

Home is a vertical stack of full-width cards with a four-column shortcut row. Payments and history use single-column lists; promotions use two-column benefit cards.

### Whitespace Philosophy

Use gray canvas between modules, but keep transactions and settings compact inside white groups.

# Navigation appearance

Use three bottom destinations for Home, Promotions, and Profile. Deep payment, card, and transfer tasks use a simple back title.

# Components

### Buttons

Primary actions use yellow with black text. Secondary finance actions use white or pale gray. Native controls must inherit yellow selection, radii, and typography.

Payments use a compact My Payments and History segment. Selection stays white with outline or yellow emphasis; avoid adding decorative tabs.

### Cards & Containers

Wallet cards show balance and four shortcuts. Product cards summarize the Simply card and benefit rates. Promotions pair percentage copy with one 3D object.

### Inputs & Forms

Search, recipient, card, and service-payment inputs use white or pale fields with clear labels. Keep verification and confirmation linear.

### Status & Build Page

History groups transactions by date, with green incoming amounts and black outgoing values. Receipts and modal notices use standard white system surfaces.

### Navigation

Use three bottom destinations for Home, Promotions, and Profile. Deep payment, card, and transfer tasks use a simple back title.

# Imagery and icons

Use shallow shadows and white-on-gray separation. Promotional 3D objects create depth without affecting form surfaces.

### Decorative Depth

Reserve glossy violet objects and dark banners for benefits. Keep core financial rows flat and calm.

# States

History groups transactions by date, with green incoming amounts and black outgoing values. Receipts and modal notices use standard white system surfaces.

# iOS adaptation

Keep payments, transfers, and profile single-column. Benefit cards may stack if percentage copy or art becomes cramped.

### Touch Targets

Shortcuts, benefit cards, rows, switches, and bottom navigation require at least 44pt targets.

### Collapsing Strategy

Allow benefit strips to scroll horizontally. Keep confirmation actions reachable above keyboard and safe area.

### Image Behavior

Scale 3D objects proportionally with `contain`. Do not crop away the object or obscure percentage copy.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Keep core finance surfaces neutral.
- Use yellow consistently for identity and selection.
- Separate promotions from transactions.
- Keep wallet shortcuts stable.
- Let 3D objects explain benefit categories.

### Don't

- Do not use violet as the main transaction CTA.
- Do not place promotional art in history rows.
- Do not overload Home with new card styles.
- Do not confuse yellow with warning.
- Do not expose default platform controls.

# Known gaps

The reviewed scenarios cover onboarding, home, payments, history, transfers, card, bonuses, promotions, and profile. iPad layouts, dark mode, accessibility scaling, and rare transaction failures were not visible.

</design-context>
