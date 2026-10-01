<design-context>
---
version: 1
platform: iOS
name: Revolut-design-analysis
description: "A modular finance interface that layers translucent white cards over adaptive navy, violet, blue, and aqua gradients. Bold black-and-white actions, large numeric balances, compact market data, and configurable rounded widgets create a system that can move between atmospheric account dashboards and clean task sheets without losing hierarchy."

colors:
  primary: "#5E5CE6"
  on-primary: "#FFFFFF"
  primary-soft: "#DDD8FF"
  ink: "#101014"
  ink-muted: "#6F7078"
  ink-subtle: "#A2A3AA"
  canvas: "#F5F4F7"
  surface-1: "#FFFFFF"
  surface-2: "#F0EFF2"
  surface-glass: "#FFFFFFD9"
  dark-canvas: "#0A0A0D"
  dark-surface: "#1F1F23"
  gradient-navy: "#151A38"
  gradient-violet: "#9C62E6"
  gradient-blue: "#264CF2"
  gradient-aqua: "#10A6B4"
  hairline: "#E3E2E6"
  semantic-success: "#1F9E73"
  semantic-warning: "#F0A02E"
  semantic-danger: "#D94D5A"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 40
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -1.0
  display-lg:
    fontFamily: System Sans
    fontSize: 34
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.7
  display-md:
    fontFamily: System Sans
    fontSize: 28
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4
  headline:
    fontFamily: System Sans
    fontSize: 23
    fontWeight: 650
    lineHeight: 1.16
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 550
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 30
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  glass-action:
    backgroundColor: "#FFFFFF38"
    textColor: "#FFFFFF"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 12
  widget-card:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 14
  list-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: [8, 12]
  search-field:
    backgroundColor: "#FFFFFF70"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: [10, 14]
  warning-card:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 12
  bottom-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 58
---

# Overview

Revolut uses an atmospheric shell around a highly modular finance product. The current domain sets the background gradient, while translucent white widgets hold accounts, transactions, markets, warnings, and contacts. Focused task screens switch to a calm off-white canvas with black pill actions, preserving continuity through typography and shape rather than color.

# Non-negotiable visual invariants

- The recurring color treatment uses Adaptive gradients move from navy and violet to blue and aqua.
- Use gradients to establish domain context, not to decorate every card.
- Keep widgets modular and independently scannable.
- Use black for high-commitment actions.
- Preserve account context before money movement.
- Keep warnings self-contained with one remedy.
- Home and Invest are single-column configurable feeds.
- Cards may split into two equal metric tiles or form horizontal carousels for accounts and cards.

# Color and surfaces

- **Primary Violet** ({colors.primary}) supports selected states and purple gradient families.
- Navy, violet, blue, and aqua gradient anchors change by domain or selected account.
- Black, rather than a bright brand color, carries decisive actions.

- **Canvas** ({colors.canvas}) is used for sheets, settings, transactions, and focused tasks.
- **Glass Surface** ({colors.surface-glass}) creates dashboard widgets above gradients.
- **Surface 2** ({colors.surface-2}) supports inactive chips and secondary controls.
- Dark canvas and surface tokens belong to plan, onboarding, and premium contexts.

- Use white text directly on saturated gradients.
- Use near-black ink inside glass and white cards.
- Muted gray carries labels, dates, rates, and supporting account context.

Green and red are limited to market movement and transaction outcomes. Amber identifies restrictions or information that needs corrective action.

# Typography

Use a modern system sans throughout. Amounts and screen titles rely on size and weight; data-heavy views stay compact and neutral.

- `{typography.display-xl}` — 40 points — 700 — Hero balance or investment statement
- `{typography.display-lg}` — 34 points — 700 — Amount and major metric
- `{typography.display-md}` — 28 points — 700 — Screen title
- `{typography.headline}` — 23 points — 650 — Widget group heading
- `{typography.card-title}` — 17 points — 600 — Account, asset, and plan title
- `{typography.body}` — 14 points — 400 — Default content
- `{typography.caption}` — 11 points — 400 — Rate, date, and legal copy

- Keep balances centered in atmospheric headers and left-align detailed task content.
- Use bold only for value, decision, or title hierarchy.
- Let compact captions carry dense financial qualifiers.
- Avoid decorative type effects on already colorful gradient surfaces.

Use SF Pro Display/Text on iOS or Inter elsewhere. Preserve relatively tight heading tracking and open numeric forms.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points page gutters on dashboard feeds, 8–12 points gaps between widgets, and 16 points card interiors. Focused task sheets use 16 points gutters and 24 points section separation.

Home and Invest are single-column configurable feeds. Cards may split into two equal metric tiles or form horizontal carousels for accounts and cards. Payment contacts use compact list cards; task sheets remain one column.

Atmospheric color occupies the gaps between widgets. Inside cards, keep enough white space to separate metrics and actions without oversized empty zones.

Use the gradient field, translucent cards, and a single foreground sheet to establish depth. Decorative orbs and blur belong in the background only and must not reduce financial contrast.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Four bottom tabs use a white base, dark selected icons, and muted inactive states. Search remains prominent in domain headers, while profile and contextual actions occupy compact circular controls.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use black full-width pill buttons for decisive actions, pale pills for secondary actions, and translucent circular controls on gradients. Native controls must visually inherit the active domain instead of exposing default platform blue.

Place avatar, search, analytics, and card controls at the top. Center the account label and balance, then show Accounts and four circular actions before the first widget.
Use a translucent white surface, short heading, one primary metric or list, and a single footer action. Widgets can contain transactions, spending charts, watchlists, warnings, or news.

Use a clean off-white modal page with currency chips, grouped funding methods, and one black full-width completion action near the bottom.

Show one large card with partial neighbors. Place Show details, Freeze, and Settings below, followed by transactions and an optional black wallet action.
Use white rounded cards for news, watchlists, events, and analytics. Green and red are reserved for direction; all other content remains neutral.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Photography is secondary and appears as small news thumbnails, contact avatars, or account identity. Keep crops simple and circular or softly rounded; do not introduce illustration as a parallel visual language.

News thumbnails use consistent small aspect ratios; avatars remain circular. Background gradients scale to fill without introducing visible seams or putting bright hotspots behind white text.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show one large card with partial neighbors. Place Show details, Freeze, and Settings below, followed by transactions and an optional black wallet action.
Use white rounded cards for news, watchlists, events, and analytics. Green and red are reserved for direction; all other content remains neutral.

Green and red are limited to market movement and transaction outcomes. Amber identifies restrictions or information that needs corrective action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Circular account actions, bottom tabs, chips, and sheet actions remain at least 44 points. Small market indicators are informative, not the only tappable target.
- Keep widgets full-width and card carousels partially visible. Allow transaction text to wrap before shrinking values, and preserve bottom navigation plus safe-area actions.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not place saturated gradients inside every widget.
- Do not reduce glass opacity until financial text loses contrast.
- Do not mix unrelated accent colors inside the same domain.
- Do not turn compact market data into oversized promotional typography.
- Do not use heavy shadows to create hierarchy.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
