<design-context>
---
version: 1
platform: iOS
name: BakAi-design-analysis
description: "A broad mobile-banking dashboard built from white rounded surfaces, bright azure actions, deep navy payment cards, and soft blue atmospheric backdrops. Product tabs, card carousels, widgets, transfer sheets, services, profile, and statements form a dense but modular home; glossy 3D financial objects give products a recognizable visual identity."
colors:
  primary: "#0A8CFF"
  on-primary: "#FFFFFF"
  primary-soft: "#E5F3FF"
  accent-navy: "#001A5C"
  accent-gold: "#D5A437"
  accent-green: "#22B573"
  ink: "#0E1B2E"
  ink-muted: "#737B87"
  ink-subtle: "#A8AFB8"
  canvas: "#F7F8FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF1F5"
  hairline: "#DFE4EA"
  semantic-success: "#22B573"
  semantic-danger: "#E54557"
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
rounded: { xs: 8, sm: 12, md: 16, lg: 22, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  bank-card: { backgroundColor: "{colors.accent-navy}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  product-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  transfer-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  service-icon: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 10 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

BakAi organizes a large banking product set through cards, product tabs, widget sections, and contextual sheets. Azure carries action and selection, navy anchors card products, and small 3D objects make deposits, savings, appointments, and services recognizable.

# Non-negotiable visual invariants

- Navigation or control chrome uses Product tabs and horizontal card carousel.
- Keep balances and product identity clear.
- Separate transfer rails before asking for details.
- Show rates, limits, and statement periods explicitly.
- Use 3D art only for product discovery.
- Keep receipts and history downloadable.
- Home stacks product tabs, card carousel, new-product action, campaign banner, frequent payments, widgets, news, and rates.
- Details use a card header over a rounded statement sheet.

# Color and surfaces

- **BakAi Azure** ({colors.primary}): Selection, actions, icons, and bottom navigation.
- **Card Navy** ({colors.accent-navy}): Premium card surfaces and detail atmosphere.
- **Gold** ({colors.accent-gold}): Premium card world map and card status.
- **Green** ({colors.accent-green}): Incoming funds and verified success.

- **Canvas** ({colors.canvas}): Dashboard and profile background.
- **Surface 1** ({colors.surface-1}): Widgets, sheets, and product tiles.
- **Surface 2** ({colors.surface-2}): Secondary and disabled fields.
- **Hairline** ({colors.hairline}): List separation.

- **Ink** ({colors.ink}): Balance, product, and action labels.
- **Ink Muted** ({colors.ink-muted}): Rates, dates, and supporting copy.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

- **Success** ({colors.semantic-success}): Incoming transfers and verified identity.
- **Danger** ({colors.semantic-danger}): Blocking, failure, and destructive closure.
- **Overlay** ({colors.semantic-overlay}): Bottom sheets and confirmation.

# Typography

- **SF Pro Display** — screen and product headings.
- **SF Pro Text** — balances, transfers, widgets, and settings.
- **SF Mono** — card and account identifiers.

- `{typography.display-xl}` — 36 points — 700 — Product campaign heading
- `{typography.headline}` — 21 points — 700 — Screen or sheet heading
- `{typography.card-title}` — 16 points — 600 — Product and balance label
- `{typography.body}` — 14 points — 400 — Transaction and form copy
- `{typography.caption}` — 10 points — 400 — Tab and widget metadata
- `{typography.button}` — 14 points — 600 — Primary action

- Make balances and product names dominant.
- Keep rates and conditions readable but secondary.
- Use blue labels for actionable navigation.
- Align transaction amounts consistently.

Use **Inter** or the platform system sans when SF Pro is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 10–12 points gutters, 12 points widget gaps, and 14–16 points card padding.

Home stacks product tabs, card carousel, new-product action, campaign banner, frequent payments, widgets, news, and rates. Details use a card header over a rounded statement sheet.

Keep each banking domain inside a white module; avoid one continuous dense ledger on the home screen.

Use gradients and glossy 3D product objects for discovery. Ledgers and forms remain flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Payments, BakAi Chat, Services, and History form the bottom bar. Profile, notifications, support, and bonus sit in the header.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Azure full-width actions progress login and forms. Icon-led card actions handle top-up, transfer, card, and limits. Destructive actions require confirmation.

Bank cards expose masked number, expiry, type, balance, and favorite. Product tiles pair title, rate summary, and one 3D object. Statements use aligned amount rows.

Forms use white rounded fields with visible labels. Transfers begin in a sheet that separates own account, client, card, requisites, services, Visa+, and QR.

Show verified identity, card status, Visa+ state, favorites, limits, application state, deposit state, and incoming/outgoing amount explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Payment cards use a fixed landscape ratio. Product art uses isolated glossy 3D objects centered within white tiles; campaign photography stays within rounded banners.

Contain 3D objects and preserve card ratio. Crop campaign photography within bounded banners only; do not distort product art.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show verified identity, card status, Visa+ state, favorites, limits, application state, deposit state, and incoming/outgoing amount explicitly.

- **Success** ({colors.semantic-success}): Incoming transfers and verified identity.
- **Danger** ({colors.semantic-danger}): Blocking, failure, and destructive closure.
- **Overlay** ({colors.semantic-overlay}): Bottom sheets and confirmation.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep tabs, card actions, transfer rows, service icons, settings, and bottom navigation at least 44 points.
- Allow product and frequent-payment carousels to scroll. Keep balances, primary card, and new-product action before campaign widgets.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not place promotional art inside ledgers.
- Do not merge cards, accounts, deposits, and loans into one ambiguous list.
- Do not hide fees or currency.
- Do not use navy for ordinary forms.
- Do not signal transaction direction by color alone.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; sign-in, home, card detail, transfer, new product, and profile flows were image-reviewed.
- Hardware wallets, Apple Pay handoff, charts, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>
