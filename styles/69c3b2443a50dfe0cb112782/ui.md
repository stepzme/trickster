<design-context>
---
version: 1
platform: iOS
name: Kaspi-design-analysis
description: "A pragmatic white financial super-app defined by vivid Kaspi red outline icons, compact service grids, pale gray banking groups, full-width blue transaction actions, and commerce banners embedded directly into utility flows. The visual system favors recognition, density, and directness over decorative hierarchy."
colors:
  primary: "#F14645"
  on-primary: "#FFFFFF"
  primary-focus: "#CE3837"
  ink: "#222224"
  ink-muted: "#68686D"
  ink-subtle: "#A0A0A6"
  ink-tertiary: "#C0C0C5"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#F0F0F1"
  surface-3: "#E6E6E8"
  surface-4: "#DADADD"
  hairline: "#E8E8EA"
  hairline-strong: "#D2D2D5"
  hairline-tertiary: "#B7B7BC"
  inverse-canvas: "#222224"
  inverse-surface-1: "#343438"
  inverse-surface-2: "#47474D"
  inverse-ink: "#FFFFFF"
  brand-secure: "#1188D7"
  semantic-success: "#08B92C"
  semantic-overlay: "#222224"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.9}
  display-lg: {fontFamily: SF Pro Display, fontSize: 29, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 3
  sm: 6
  md: 10
  lg: 14
  xl: 18
  xxl: 24
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "#0874BA", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  service-tile: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 4}
  account-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  transaction-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  status-badge: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 3 6}
  navigation-bar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 50}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Kaspi is a dense service hub where red outline iconography provides identity and fast recognition. Banking screens shift to pale grouped forms with blue transactional actions.

# Non-negotiable visual invariants

- Primary screens use White canvas and compact four-column service grids.
- Keep service icons consistent and recognizable.
- Distinguish financial actions from discovery content.
- Put amount and recipient before optional message.
- Show clear transaction outcomes.
- Restyle native controls to match the UI.
- Core services use four equal columns.
- Banking details and transfers switch to one stacked column.

# Color and surfaces

- Kaspi red identifies services, tabs, labels, and marketplace emphasis.
- Blue is reserved for committed financial actions and linked account operations.

- White dominates home and services.
- Pale gray creates form fields, transfer groups, and bank background sections.

- Dark gray carries services, amounts, and headings.
- Mid gray supports explanations and unavailable content.

- Green confirms transfer success and positive repayment progress.
- Red notification dots remain small and distinct from service icons.

# Typography

Use SF Pro throughout. Identity comes from iconography and color rather than expressive type.

- display-lg — 29 points — 700 — Transaction outcome
- display-md — 24 points — 700 — Amount or authorization step
- headline — 20 points — 700 — Page heading
- card-title — 16 points — 600 — Account or product title
- body — 13 points — 400 — Form and service copy
- caption — 9 points — 400 — Bottom navigation

- Keep amounts and operation names prominent.
- Use compact labels under service icons.
- Keep explanatory copy short and operational.

Any neutral system sans must preserve numeric clarity and compact Cyrillic metrics.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points service spacing, and 12 points screen gutters on dense home surfaces.

Core services use four equal columns. Banking details and transfers switch to one stacked column.

Favor operational density on Home; add more space around confirmation, amount entry, and account state.

Use slight tonal grouping and minimal shadow. Promotional imagery may be richer but stays inside banners.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep Home, QR, Messages, and Services fixed. Active state uses red; inactive icons and labels stay light gray.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Financial confirmation uses wide blue rectangles. Red is usually icon or label emphasis rather than the transaction button fill.

Home services often sit directly on white. Bank accounts and loans use white rounded cards on a pale gray canvas.

Use filled pale-gray rows for recipient, amount, and message. Native controls must inherit Kaspi's compact radius, spacing, and clear blue action hierarchy.

Success centers a green check and operation summary, followed by receipt and save options. Progress uses thin green bars within loan rows.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Product and partner photography use compact rectangular banners or cards. No expressive illustration language was observed.

Use aspect-fill for campaign imagery and aspect-fit for product cutouts. Preserve embedded price and offer text safe areas.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Success centers a green check and operation summary, followed by receipt and save options. Progress uses thin green bars within loan rows.

- Green confirms transfer success and positive repayment progress.
- Red notification dots remain small and distinct from service icons.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Service tiles, account rows, QR access, and bottom navigation retain at least 44 points hit areas.
- Product rails scroll horizontally. Financial forms scroll vertically while the main action remains above the safe area.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not turn every home module into a card.
- Do not use red and blue interchangeably.
- Do not hide critical totals inside banners.
- Do not add decorative illustration to banking flows.
- Do not leave default iOS form styling unchanged.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
