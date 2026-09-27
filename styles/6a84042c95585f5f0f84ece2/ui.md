<design-context>
---
version: alpha
name: Click-SuperApp-design-analysis
description: "A bright finance super-app built on an ice-blue canvas, white rounded service tiles, saturated azure actions, dense promotional banners, compact icon grids, and a persistent five-item tab bar. Financial values stay prominent while payments, transfers, mini apps, and location services remain one tap away."
colors:
  primary: "#078AF0"
  on-primary: "#FFFFFF"
  primary-hover: "#0076D4"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px }
  display-md: { fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 16px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 14px 8px }
  wallet-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  promo-banner: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 12px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Click SuperApp combines a wallet dashboard with a service launcher. The shell is cool and airy; high-frequency finance actions sit in white cards while azure identifies active navigation and primary actions.

**Key Characteristics:**
- Ice-blue page canvas with white floating groups.
- Saturated azure for primary actions and selected navigation.
- Dense square service launchers and horizontal carousels.
- Large balance figures with optional privacy masking.
- Promotional photography stays inside bounded banners.

## Colors

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

## Typography

### Font Family
- **SF Pro Display** — balances and section titles.
- **SF Pro Text** — controls, tiles, and transaction metadata.
- **SF Mono** — card, account, and reference values when fixed width helps.

### Hierarchy
Use 34px bold for key balances, 20px bold for major screen sections, 16px semibold for cards, 14px regular for body, and 10–12px for tab and service labels.

### Principles
- Put the financial value before explanation.
- Keep compact launcher labels readable in two lines.
- Pair icons with text for unfamiliar actions.
- Use weight, not extra color, to separate levels.

### Note on Font Substitutes
Use the platform system sans or **Inter** with tabular numerals when SF Pro is unavailable.

## Layout

### Spacing System
Use a 4px base, 12px gaps between tiles, 16px screen gutters, and 16px card padding.

### Grid & Container
The home screen stacks balance, quick actions, banners, mini-app grids, and nearby services above a fixed five-tab bar.

### Whitespace Philosophy
Keep groups visibly separate but compact; empty space should clarify finance clusters rather than create a sparse editorial page.

## Elevation & Depth
Use surface contrast and light edge separation. Reserve stronger elevation for sheets, floating utilities, and the bottom navigation.

### Decorative Depth
Use photographs and branded campaign graphics only inside promotional banners; the operational shell remains flat.

## Shapes

### Border Radius Scale
Use 10px for fields, 14px for service tiles and banners, 18px for wallet cards, and full circles for icon controls.

### Photography & Illustration Geometry
Crop promotional media to wide rounded rectangles. Keep service symbols simple and centered in consistent icon frames.

## Components

### Buttons
Primary actions are full-width azure rectangles; secondary actions are white or text-only with an azure icon.

### Pricing Tabs
Use compact pills or segmented rows for switching account, report, or offer filters; selected state uses azure or a soft azure fill.

### Cards & Containers
Use wallet cards, quick-action tiles, promotional banners, mini-app icons, and recent-recipient rows as distinct modules.

### Inputs & Forms
Search and transfer fields use white fills, soft borders, clear leading icons, and inline scan or contacts actions.

### Status & Build Page
Express masked balance, document expiry, subscription monitoring, new offers, and transfer state with label plus icon or color.

### Navigation
Keep Home, Payments, Transfers, Reports, and Mini Apps in the persistent tab bar; contextual screens use a back action and centered title.

### Footer
The safe-area tab bar is the footer and keeps its five destinations stable across dashboard screens.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints
Use the reference single-column layout up to 767px, a centered 560–680px phone canvas on tablet, and a wider two-column dashboard only above 1024px.

### Touch Targets
Keep tabs, service tiles, scan controls, transfer routes, and wallet actions at least 44px.

### Collapsing Strategy
Preserve balance, primary money actions, recent activity, and the five destinations; move low-priority mini apps and campaigns below the fold.

### Image Behavior
Crop banners consistently without obscuring embedded copy; contain service marks rather than stretching them.

## Iteration Guide
1. Build balance, privacy, and wallet actions.
2. Add payment and transfer launchers.
3. Add recent activity and reports.
4. Add mini apps and configurable home sections.
5. Add promotional banners last.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 76 flow names were inventoried; Home, Wallet, and Transfers were image-reviewed.
- Motion inside promotional media and the complete customization flow were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
