<design-context>
---
version: 1
platform: iOS
name: WB-Bank-design-analysis
description: "A dense ecosystem bank mixing Wildberries hot magenta, dark green wallet panels, pale lilac canvas, white service tiles, bold black financial typography, and glossy 3D product art. The home screen behaves like a modular marketplace dashboard, while transfers and applications simplify into bright linear forms with one charcoal confirmation action."

colors:
  primary: "#E500C8"
  on-primary: "#FFFFFF"
  primary-pressed: "#BF00A9"
  secondary: "#25302D"
  secondary-pressed: "#151A19"
  ink: "#171719"
  ink-muted: "#6E6E75"
  ink-subtle: "#A3A3AA"
  canvas: "#F2EFF8"
  surface-1: "#FFFFFF"
  surface-2: "#F7F7F9"
  wallet-green: "#078552"
  mint: "#DFF5EC"
  lavender: "#F1DFFF"
  hairline: "#E6E3EA"
  semantic-success: "#159266"
  semantic-warning: "#E7A73A"
  semantic-danger: "#D94F59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.secondary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  wallet-card: { backgroundColor: "{colors.wallet-green}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  promo-banner: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 54 }
---

# Overview

WB Bank is a colorful but structured financial dashboard. Hot magenta establishes ecosystem identity, dark green anchors money, and white modular tiles organize a very broad product catalog.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A dense ecosystem bank mixing Wildberries hot magenta, dark green wallet panels, pale lilac canvas, white service tiles, bold black financial typography, and glossy 3D product art.
- The dominant canvas token is #F2EFF8 and the primary accent token is #E500C8.
- The recorded display style is 40 points while the body style is 14 points.
- Navigation retains the five-item marketplace dock with Bank highlighted in a magenta capsule.
- The reviewed screens use this hierarchy: The home screen behaves like a modular marketplace dashboard, while transfers and applications simplify into bright linear forms with one charcoal confirmation action.

# Color and surfaces

### Brand & Accent

Use hot magenta for brand, selected Bank navigation, discount progress, and promotional highlights. Dark charcoal owns decisive financial actions; green owns wallet value.

### Surface

Use pale lilac-gray canvas, white service tiles, green wallet cards, and soft pink or blue campaign panels.

### Text

Use near-black for amounts and titles, gray for terms and product detail, and white on green, magenta, or charcoal.

### Semantic

Use green for successful transfer and available value, red for debt or failure, amber for attention, and magenta only for brand or selection.

# Typography

### Font Family

Use a modern system sans with tabular figures for balances, rates, and payment amounts.

### Principles

Keep discount, wallet balance, product rate, and next action visually distinct. Do not bold every service name equally.

### Note on Font Substitutes

Use SF Pro or Inter with 650–700 headings and tabular numeric figures.

# Screen composition

### Grid & Container

Home uses a discount/action grid, one wide wallet card, horizontal promotion rail, and two-column product tiles. Transaction screens reduce to one vertical form.

### Whitespace Philosophy

Home is intentionally dense but each tile contains one idea. Amount entry and confirmation screens should regain broad open space.

# Navigation appearance

Retain the five-item marketplace dock with Bank highlighted in a magenta capsule. Keep bank-product settings local to their detail page.

# Components

### Buttons

Primary transaction buttons are wide charcoal rounded rectangles. Promotional links may be magenta or green. Native controls must inherit this hierarchy and the WB radius system.

Card formats, plans, product modes, and rate choices use compact tabs or segmented labels with magenta or dark selected state.

### Cards & Containers

Wallet cards lead with balance and top-up. Service tiles contain one product name, one value or benefit, and at most one small icon or 3D object.

### Inputs & Forms

Transfer forms show amount first, then source, recipient, fee, comment, and quick amounts. Use pale filled rows and a persistent charcoal next action.

### Status & Build Page

Use clear discount level, wallet tier, card state, transfer result, savings rate, statement progress, unread count, and cashback status.

### Navigation

Retain the five-item marketplace dock with Bank highlighted in a magenta capsule. Keep bank-product settings local to their detail page.

# Imagery and icons

Use soft shadow and color separation for modular tiles. Forms and receipts stay mostly flat against white.

### Decorative Depth

Use glossy 3D product objects, magenta-violet gradients, and occasional spectral glow inside promotions. Keep money-entry controls undecorated.

# States

Use clear discount level, wallet tier, card state, transfer result, savings rate, statement progress, unread count, and cashback status.

# iOS adaptation

Phones show the modular dashboard and one financial task at a time. Wider screens may pair product list with detail while keeping forms narrow.

### Touch Targets

Tiles, quick actions, product cards, navigation, amount presets, selectors, and confirmation controls require at least 44pt targets.

### Collapsing Strategy

Keep amount, source, recipient, rate or fee, and next action visible. Collapse documents, explanations, and secondary benefits into details.

### Image Behavior

Use `contain` for product renders, cards, icons, and partner marks. Use `cover` only for editorial campaign photography.

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

- Anchor Home with discount and wallet value.
- Separate discovery tiles from transaction forms.
- Keep amount and fee hierarchy explicit.
- Use one product object per promotion.

### Don't

- Do not use magenta as success or error.
- Do not crowd a tile with multiple financial offers.
- Do not carry 3D art into receipts.
- Do not leave native blue controls in the interface.

</design-context>
