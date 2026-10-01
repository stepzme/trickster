<design-context>
---
version: 1
platform: iOS
name: Click-SuperApp-design-analysis
description: "A bright finance super-app built on an ice-blue canvas, white rounded service tiles, saturated azure actions, dense promotional banners, compact icon grids, and a persistent five-item tab bar. Financial values stay prominent while payments, transfers, mini apps, and location services remain one tap away."
colors:
  primary: "#078AF0"
  on-primary: "#FFFFFF"
  primary-soft: "#DFF2FF"
  ink: "#111318"
  ink-muted: "#737987"
  ink-subtle: "#AEB6C5"
  canvas: "#F0F3FF"
  surface-1: "#FFFFFF"
  surface-2: "#E9EEFA"
  hairline: "#DDE4F0"
  semantic-success: "#11B981"
  semantic-warning: "#FFB20B"
  semantic-danger: "#E75B4E"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4 }
  display-md: { fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 16]}
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [14, 8]}
  wallet-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  promo-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 12 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
---

# Overview

Click SuperApp combines a wallet dashboard with a service launcher. The shell is cool and airy; high-frequency finance actions sit in white cards while azure identifies active navigation and primary actions.

**Key Characteristics:**
- Ice-blue page canvas with white floating groups.
- Saturated azure for primary actions and selected navigation.
- Dense square service launchers and horizontal carousels.
- Large balance figures with optional privacy masking.
- Promotional photography stays inside bounded banners.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Ice-blue page canvas with white floating groups.
- The reviewed screens show this treatment: Saturated azure for primary actions and selected navigation.
- The reviewed screens show this treatment: Dense square service launchers and horizontal carousels.
- The reviewed screens show this treatment: Large balance figures with optional privacy masking.
- The reviewed screens show this treatment: Promotional photography stays inside bounded banners.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Main actions, active tabs, links, and finance icons.
- **Primary Soft** ({colors.primary-soft}): Low-emphasis selected backgrounds.

### Surface
- **Canvas** ({colors.canvas}): Default financial dashboard background.
- **Surface 1** ({colors.surface-1}): Wallets, services, recent recipients, and sheets.
- **Surface 2** ({colors.surface-2}): Secondary grouping and disabled areas.
- **Hairline** ({colors.hairline}): Quiet boundaries between rows.

### Text
- **Ink** ({colors.ink}): Balances, titles, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Explanations and metadata.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled copy.

### Semantic
- **Success** ({colors.semantic-success}): Positive status and benefits.
- **Warning** ({colors.semantic-warning}): Attention and expiring offers.
- **Danger** ({colors.semantic-danger}): Errors and closing a wallet.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family
- **SF Pro Display** — balances and section titles.
- **SF Pro Text** — controls, tiles, and transaction metadata.
- **SF Mono** — card, account, and reference values when fixed width helps.

### Principles
- Put the financial value before explanation.
- Keep compact launcher labels readable in two lines.
- Pair icons with text for unfamiliar actions.
- Use weight, not extra color, to separate levels.

### Note on Font Substitutes
Use the platform system sans or **Inter** with tabular numerals when SF Pro is unavailable.

# Screen composition

### Spacing System
Use a 4pt base, 12pt gaps between tiles, 16pt screen gutters, and 16pt card padding.

### Grid & Container
The home screen stacks balance, quick actions, banners, mini-app grids, and nearby services above a fixed five-tab bar.

### Whitespace Philosophy
Keep groups visibly separate but compact; empty space should clarify finance clusters rather than create a sparse editorial page.

# Navigation appearance

Keep Home, Payments, Transfers, Reports, and Mini Apps in the persistent tab bar; contextual screens use a back action and centered title.

# Components

### Buttons
Primary actions are full-width azure rectangles; secondary actions are white or text-only with an azure icon.

Use compact pills or segmented rows for switching account, report, or offer filters; selected state uses azure or a soft azure fill.

### Cards & Containers
Use wallet cards, quick-action tiles, promotional banners, mini-app icons, and recent-recipient rows as distinct modules.

### Inputs & Forms
Search and transfer fields use white fills, soft borders, clear leading icons, and inline scan or contacts actions.

### Status & Build Page
Express masked balance, document expiry, subscription monitoring, new offers, and transfer state with label plus icon or color.

### Navigation
Keep Home, Payments, Transfers, Reports, and Mini Apps in the persistent tab bar; contextual screens use a back action and centered title.

# Imagery and icons

Use surface contrast and light edge separation. Reserve stronger elevation for sheets, floating utilities, and the bottom navigation.

### Decorative Depth
Use photographs and branded campaign graphics only inside promotional banners; the operational shell remains flat.

# States

Express masked balance, document expiry, subscription monitoring, new offers, and transfer state with label plus icon or color.

# iOS adaptation

### Touch Targets
Keep tabs, service tiles, scan controls, transfer routes, and wallet actions at least 44pt.

### Collapsing Strategy
Preserve balance, primary money actions, recent activity, and the five destinations; move low-priority mini apps and campaigns below the fold.

### Image Behavior
Crop banners consistently without obscuring embedded copy; contain service marks rather than stretching them.

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
- Keep balance and account privacy controls adjacent.
- Preserve one-tap access to payments and transfers.
- Group services into clear white modules.
- Keep azure consistent for active state.

### Don't
- Don't turn promotional colors into core navigation colors.
- Don't hide transfer routes behind unlabeled icons.
- Don't crowd a tile with more than one primary task.
- Don't flatten wallet, services, and campaigns into one list.

</design-context>
