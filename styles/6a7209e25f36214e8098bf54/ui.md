<design-context>
---
version: 1
platform: iOS
name: ForteApp-design-analysis
description: "A broad mobile bank using a coral-to-magenta identity gradient, burgundy primary actions, white product panels, thin rose line icons, cyan informational cards, compact account tabs, dense financial rows, and a five-tab shell for chat, history, home, transfers, and payments."
colors: { primary: "#B50057", on-primary: "#FFFFFF", primary-soft: "#FBE6F0", accent: "#E86573", accent-cyan: "#4CC6D4", ink: "#17181B", ink-muted: "#747982", ink-subtle: "#ADB2B9", canvas: "#FFFFFF", surface-1: "#F6F6F8", surface-2: "#EAF8FB", hairline: "#E2E4E8", semantic-success: "#24AA62", semantic-warning: "#F3B824", semantic-danger: "#D84C58", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  product-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  service-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10 }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
---

# Overview

ForteApp combines everyday banking, marketplace services, documents, forex, products, transfers, and payments in a white modular shell under a coral identity gradient.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A broad mobile bank using a coral-to-magenta identity gradient, burgundy primary actions, white product panels, thin rose line icons, cyan informational cards.
- The source records this color relationship: Use burgundy for primary action, coral for identity, cyan for advice, and rose line icons for services.
- The recorded display style is 38 points while the body style is 14 points.
- Navigation appears as follows: Chats, History, Home, Transfers, and Payments remain in the bottom bar.
- The reviewed screens use this hierarchy: ForteApp combines everyday banking, marketplace services, documents, forex, products, transfers, and payments in a white modular shell under a coral identity gradient.

# Color and surfaces

### Brand & Accent
Use burgundy for primary action, coral for identity, cyan for advice, and rose line icons for services.

### Surface
Keep finance surfaces white, product rows pale gray, and advice panels light cyan.

### Text
Use black for balances and actions, gray for metadata, and pale gray for disabled state.

### Semantic
Use green for incoming and accepted, yellow for attention, and red for expense or destructive state.

# Typography

### Font Family
Use SF Pro Display for balances and SF Pro Text for products, transfers, and legal copy.

### Principles
Keep amount, currency, product, source, and destination explicit and align numeric columns.

### Note on Font Substitutes
Use the platform sans or Inter with tabular numerals.

# Screen composition

### Spacing System
Use a 4pt base, 16pt gutters, 12pt module gaps, and 12pt row padding.

### Whitespace Philosophy
Keep modules compact but separate product, market, advice, and transaction context.

# Navigation appearance

Chats, History, Home, Transfers, and Payments remain in the bottom bar.

# Components

### Buttons
Use full-width burgundy continue and confirm actions; secondary actions use pale gray or cyan text.

Cards, loans, deposits, and accounts use compact underline tabs; transfer types use icon grids.

### Cards & Containers
Use service tiles, product rows, advice cards, rate charts, transfer grids, history rows, and status panels.

### Inputs & Forms
Transfers and products group source, destination, amount, conditions, consents, and review.

### Status & Build Page
Show hidden balance, incoming, expense, pending, accepted, blocked, closed, favorite, and refund state explicitly.

### Navigation
Chats, History, Home, Transfers, and Payments remain in the bottom bar.

# Imagery and icons

Use white cards, colored bands, and light sheets with minimal shadow.

### Decorative Depth
Campaign photography and product-card art provide depth; finance forms remain flat.

# States

Show hidden balance, incoming, expense, pending, accepted, blocked, closed, favorite, and refund state explicitly.

# iOS adaptation

### Collapsing Strategy
Preserve balance, product, primary task, form state, and navigation; move campaigns below operations.

### Image Behavior
Crop campaign media within banners and contain product marks; never stretch charts.

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
- Keep product and currency explicit.
- Show fees and limits before confirmation.
- Separate marketing from forms.

### Don't
- Don't use the gradient behind dense data.
- Don't rely on red or green alone.
- Don't hide consent or eligibility.

</design-context>
