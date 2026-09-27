<design-context>
---
version: alpha
name: Revolut-design-analysis
description: "A modular finance interface that layers translucent white cards over adaptive navy, violet, blue, and aqua gradients. Bold black-and-white actions, large numeric balances, compact market data, and configurable rounded widgets create a system that can move between atmospheric account dashboards and clean task sheets without losing hierarchy."

colors:
  primary: "#5E5CE6"
  on-primary: "#FFFFFF"
  primary-hover: "#7472F0"
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
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -1.0px
  display-lg:
    fontFamily: System Sans
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.7px
  display-md:
    fontFamily: System Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4px
  headline:
    fontFamily: System Sans
    fontSize: 23px
    fontWeight: 650
    lineHeight: 1.16
    letterSpacing: -0.2px
  card-title:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 550
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 18px
  xl: 24px
  xxl: 30px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  glass-action:
    backgroundColor: "#FFFFFF38"
    textColor: "#FFFFFF"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 12px
  widget-card:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 14px
  list-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 8px 12px
  search-field:
    backgroundColor: "#FFFFFF70"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 14px
  warning-card:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 12px
  bottom-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 58px
---

## Overview

Revolut uses an atmospheric shell around a highly modular finance product. The current domain sets the background gradient, while translucent white widgets hold accounts, transactions, markets, warnings, and contacts. Focused task screens switch to a calm off-white canvas with black pill actions, preserving continuity through typography and shape rather than color.

**Key Characteristics:**
- Adaptive gradients move from navy and violet to blue and aqua.
- Translucent white widgets create hierarchy over color.
- Large centered balances and concise circular account actions.
- Bold black pill actions on clean task sheets.
- Compact market, transaction, and status information inside roomy cards.
- User-configurable widgets and appearance options.

## Colors

### Brand & Accent

- **Primary Violet** ({colors.primary}) supports selected states and purple gradient families.
- Navy, violet, blue, and aqua gradient anchors change by domain or selected account.
- Black, rather than a bright brand color, carries decisive actions.

### Surface

- **Canvas** ({colors.canvas}) is used for sheets, settings, transactions, and focused tasks.
- **Glass Surface** ({colors.surface-glass}) creates dashboard widgets above gradients.
- **Surface 2** ({colors.surface-2}) supports inactive chips and secondary controls.
- Dark canvas and surface tokens belong to plan, onboarding, and premium contexts.

### Text

- Use white text directly on saturated gradients.
- Use near-black ink inside glass and white cards.
- Muted gray carries labels, dates, rates, and supporting account context.

### Semantic

Green and red are limited to market movement and transaction outcomes. Amber identifies restrictions or information that needs corrective action.

## Typography

### Font Family

Use a modern system sans throughout. Amounts and screen titles rely on size and weight; data-heavy views stay compact and neutral.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 700 | Hero balance or investment statement |
| `{typography.display-lg}` | 34px | 700 | Amount and major metric |
| `{typography.display-md}` | 28px | 700 | Screen title |
| `{typography.headline}` | 23px | 650 | Widget group heading |
| `{typography.card-title}` | 17px | 600 | Account, asset, and plan title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 11px | 400 | Rate, date, and legal copy |

### Principles

- Keep balances centered in atmospheric headers and left-align detailed task content.
- Use bold only for value, decision, or title hierarchy.
- Let compact captions carry dense financial qualifiers.
- Avoid decorative type effects on already colorful gradient surfaces.

### Note on Font Substitutes

Use SF Pro Display/Text on iOS or Inter elsewhere. Preserve relatively tight heading tracking and open numeric forms.

## Layout

### Spacing System

Use a 4px base, 12px page gutters on dashboard feeds, 8–12px gaps between widgets, and 16px card interiors. Focused task sheets use 16px gutters and 24px section separation.

### Grid & Container

Home and Invest are single-column configurable feeds. Cards may split into two equal metric tiles or form horizontal carousels for accounts and cards. Payment contacts use compact list cards; task sheets remain one column.

### Whitespace Philosophy

Atmospheric color occupies the gaps between widgets. Inside cards, keep enough white space to separate metrics and actions without oversized empty zones.

## Elevation & Depth

Depth comes from glass opacity, gradient shifts, and occasional soft shadow beneath sheets and bottom actions. Do not stack multiple shadows. Dark premium screens may use low-contrast dark panels rather than glass.

### Decorative Depth

Use the gradient field, translucent cards, and a single foreground sheet to establish depth. Decorative orbs and blur belong in the background only and must not reduce financial contrast.

## Shapes

### Border Radius Scale

- Dashboard widgets use 18px corners.
- Primary and secondary buttons are full pills.
- Account actions are circular and translucent.
- Search fields are pills integrated into the header.
- Cards in horizontal carousels may use 14–18px corners with tight edge spacing.

### Photography & Illustration Geometry

Photography is secondary and appears as small news thumbnails, contact avatars, or account identity. Keep crops simple and circular or softly rounded; do not introduce illustration as a parallel visual language.

## Components

### Buttons

Use black full-width pill buttons for decisive actions, pale pills for secondary actions, and translucent circular controls on gradients. Native controls must visually inherit the active domain instead of exposing default platform blue.

### Pricing Tabs

Use restrained pill or underline segments for account, asset, or analytics ranges. Selected state should use contrast or a quiet violet tint rather than another saturated gradient.

### Cards & Containers

Place avatar, search, analytics, and card controls at the top. Center the account label and balance, then show Accounts and four circular actions before the first widget.
Use a translucent white surface, short heading, one primary metric or list, and a single footer action. Widgets can contain transactions, spending charts, watchlists, warnings, or news.

### Inputs & Forms

Use a clean off-white modal page with currency chips, grouped funding methods, and one black full-width completion action near the bottom.

### Status & Build Page

Show one large card with partial neighbors. Place Show details, Freeze, and Settings below, followed by transactions and an optional black wallet action.
Use white rounded cards for news, watchlists, events, and analytics. Green and red are reserved for direction; all other content remains neutral.

### Navigation

Four bottom tabs use a white base, dark selected icons, and muted inactive states. Search remains prominent in domain headers, while profile and contextual actions occupy compact circular controls.

### Footer

Product screens do not use a marketing footer. Finish feeds with a final widget plus safe-area spacing, preserving the white bottom navigation as the visual endpoint.

## Do's and Don'ts

### Do

- Use gradients to establish domain context, not to decorate every card.
- Keep widgets modular and independently scannable.
- Use black for high-commitment actions.
- Preserve account context before money movement.
- Keep warnings self-contained with one remedy.

### Don't

- Do not place saturated gradients inside every widget.
- Do not reduce glass opacity until financial text loses contrast.
- Do not mix unrelated accent colors inside the same domain.
- Do not turn compact market data into oversized promotional typography.
- Do not use heavy shadows to create hierarchy.

## Responsive Behavior

### Breakpoints

Keep feeds and tasks one column on phones. On wider screens, use two-column metric groups selectively while preserving a single task sequence.

### Touch Targets

Circular account actions, bottom tabs, chips, and sheet actions remain at least 44px. Small market indicators are informative, not the only tappable target.

### Collapsing Strategy

Keep widgets full-width and card carousels partially visible. Allow transaction text to wrap before shrinking values, and preserve bottom navigation plus safe-area actions.

### Image Behavior

News thumbnails use consistent small aspect ratios; avatars remain circular. Background gradients scale to fill without introducing visible seams or putting bright hotspots behind white text.

## Iteration Guide

1. Build the off-white task surfaces and four-tab shell.
2. Establish account context, circular actions, and core widgets.
3. Add one gradient family per domain.
4. Tune glass opacity for reliable contrast.
5. Add configurability, plan, and appearance states after core finance tasks work.

## Known Gaps

- Exact gradient stops and blur materials were inferred from rendered screens.
- The opening onboarding screen was video-only and not evaluated frame by frame.
- Tablet, landscape, and large accessibility-text layouts were not shown.
</design-context>
