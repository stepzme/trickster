<design-context>
---
version: 1
platform: iOS
name: bunq-design-analysis
description: "A colorful modular banking interface that shifts from dark rainbow-led onboarding to white and pale-lavender finance dashboards with bold totals, blue navigation, and color-coded action pills."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F8F7FC"
  surface-secondary: "#EEEFF5"
  accent-primary: "#149FF2"
  accent-secondary: "#38D8A0"
  text-primary: "#101113"
  text-secondary: "#73777D"
  divider: "#E0E1E7"
  destructive: "#E23C62"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 29, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#149FF2", foreground: "#FFFFFF", minHeight: 52, cornerRadius: 16}
  secondary-action: {background: "#EEEFF5", foreground: "#101113", minHeight: 48, cornerRadius: 16}
  primary-card: {background: "#F8F7FC", foreground: "#101113", cornerRadius: 20, padding: 16}
  navigation: {background: "#FFFFFF", selected: "#149FF2", unselected: "#92969C"}
---

# Overview

bunq uses two sharply different but coordinated visual modes. Entry and authentication are dark, high-contrast, and rainbow-branded; authenticated banking becomes white and pale lavender with bold black totals, rounded finance modules, blue navigation, and deliberately color-coded money actions. Dense product breadth stays scannable through repeated rows, pastel icon tiles, and compact card groups.

# Non-negotiable visual invariants

- Entry screens use black or black-purple fields, white type, bright blue actions, and concentrated rainbow brand moments.
- Authenticated pages return to white with pale lavender/blue-tinted rounded modules and minimal borders.
- Major balances and money-entry amounts are large, bold, and visually isolated from metadata.
- Blue owns primary commitment and active navigation, while orange, purple, green, and pink distinguish specific financial actions.
- Account and transaction rows align icon, title, secondary text, balance or amount, and status consistently.
- Bottom navigation is white with five observed gray items and blue selected icon/label.
- Sheets use rounded white panels over dark or dimmed surroundings, with compact centered titles and iOS-style back/cancel actions.
- Financial status is never communicated by icon color alone; amount, state, or warning remains explicit in text.

# Color and surfaces

Dark charcoal and black dominate onboarding and some form screens, often with purple gradient or rainbow decoration. Day-to-day finance surfaces are white, with very pale lavender and blue-gray cards, inputs, and grouped rows.

Bright blue drives primary CTAs, selected navigation, links, send controls, and modal confirmation. Green marks positive funding, savings, and enabled toggles. Orange emphasizes pay and amount flows; purple or magenta supports request, add-money, transfer, savings, card, or crypto contexts. Near-black carries totals and titles; gray carries metadata and inactive states. Red is reserved for destructive or failed outcomes. A single universal accent would erase the observed action coding.

# Typography

Use SF Pro with tabular figures. Page titles are roughly 28–32 points and bold; section and modal titles 17–22 points; row labels 14–16 points; body and secondary data 12–15 points. Amount-entry screens use large centered bold values.

Balances, transaction amounts, and total values receive the strongest weight. Transaction amounts align right and use text plus semantic treatment for direction or failure. With Dynamic Type, supporting descriptions and benefit copy wrap before totals, account identity, status, or primary action lose hierarchy; grouped rows may grow vertically.

# Screen composition

Use about 16-point edge insets, 12-point control gaps, and 16-point module padding. Long authenticated pages scroll above a persistent tab bar.

Observed archetypes:

- Entry/auth: dark full-screen hero or form, progress line, centered title, rounded fields, bottom CTA, and native keyboard.
- Finance dashboard: large title and actions, promotional or summary card, grouped accounts and transactions, then additional finance modules.
- Amount flow: source and destination identities, large centered amount, optional description or schedule row, and bottom action.
- Product/account list: repeated rounded rows with pastel icon tile, name, balance/status, and disclosure.
- Settings/profile: sectioned white lists with pastel category icons, titles, chevrons, and secondary data.
- Transfer detail: saturated purple field with large financial icon, white detail card, selected destination strip, and share/dismiss controls.
- Support: centered empty/help art above a fixed composer and blue circular send action.
- Modal confirmation: rounded card or sheet over a dimmed background with explicit primary and secondary choices.

All bottom controls remain above the home indicator.

# Navigation appearance

Authenticated top-level screens use a white edge-integrated tab bar with five observed icon-and-label items. Active state is blue; inactive items are gray. Home headers may use a profile/avatar on the left and small actions on the right.

Sheets use blue back/cancel text or chevron on light surfaces and white controls on dark forms. Profile and support may use a close icon. App-owned sheets have rounded white geometry over dark safe-area or dimmed context. These rules define appearance only.

# Components

Primary buttons are bright-blue rounded rectangles or pills around 48–52 points high. Pressed states deepen blue; disabled controls become pale and low contrast. Color-coded action pills distinguish pay, request, and add-money rather than using one undifferentiated style.

Account rows use rounded square icons, title, balance, and optional status dot. Transaction rows add merchant/account subtitle and right-aligned amount/status. Summary cards pair net value with change and disclosure. Method lists pair icon, title, description, fee, and chevron.

Money-entry controls prioritize the amount and selected source/destination. Confirmation modals use a white rounded card with concise copy and blue primary action. Settings use pastel icon tiles and thin dividers inside broad groups. All compact rows and icon controls retain at least a 44-point target.

# Imagery and icons

Brand imagery includes rainbow stripes, bunq logo, polished card renders, and blurred symbolic campaign objects. Support empty art and simple success checks are isolated state graphics, not a stable standalone illustration system. No recurring character family was observed.

Functional imagery is dominated by pastel account/category icons, bank and payment marks, card renders, QR code, and compact tab icons. Use contain for card and account imagery and never obscure values or security controls. When these assets are compositionally present, temporary substitutes must preserve scale, crop, color weight, and surrounding negative space.

# States

Observed states include dark onboarding and account setup, keyboard entry, populated home and accounts, no-transactions placeholder, add-money methods, payment amount and confirmation, transfer details, transaction history including failed state, card selection, savings and investment availability, disabled withdraw/done actions, support empty and chat states, security-code confirmation, settings, and destructive account-closure controls.

Across states, totals and status remain text-led, blue retains primary commitment, and destructive actions use red. Empty and unavailable states stay inside the same rounded module system rather than becoming full-screen decorative scenes.

# iOS adaptation

Extend the active dark, rainbow, purple, or white field through safe areas while keeping controls inset. Use vertical scrolling for dashboard, products, history, profile, settings, and support; reserve bottom space for tab, keyboard, composer, or CTA.

Present native keyboard, share, payment, and system sheets without restyling, then restore the bunq context. VoiceOver should announce account or merchant, balance/amount, currency, status, and action in order. Dynamic Type may increase row height and wrap descriptions; totals and primary actions remain visible. Preserve the observed dark entry and light authenticated modes instead of imposing one global appearance.

# Anti-generic checklist

- Do not flatten dark rainbow onboarding and light authenticated banking into one generic palette.
- Do not recolor all financial actions blue; preserve the observed action-specific color coding.
- Do not let benefits or promotional banners outrank balances and account status.
- Do not hide fees, failed state, limits, or availability behind icon color.
- Do not replace grouped account and transaction rows with identical floating cards.
- Do not use an unstyled `TabView`, generic `Form`, or arbitrary symbol mix.
- Do not extend rainbow decoration or card renders into routine settings and transfer rows.
- Do not collapse fields, action pills, account groups, and sheets to one radius.

</design-context>
