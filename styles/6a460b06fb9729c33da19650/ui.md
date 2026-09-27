<design-context>
---
version: alpha
name: Beeline-design-analysis
description: "A playful telecom super-app built from warm yellow, white bento cards, pale cool-gray backgrounds, black type, lavender plan gradients, and orange balance actions. Mobile service, products, store, protection, entertainment, AI, and history share a modular dashboard with expressive 3D objects, characters, and editorial campaign imagery."
colors:
  primary: "#FFD400"
  on-primary: "#161616"
  primary-hover: "#E8C000"
  primary-soft: "#FFF7C2"
  accent-black: "#20232A"
  accent-violet: "#8A71E8"
  accent-orange: "#FF5B16"
  ink: "#17191D"
  ink-muted: "#747981"
  ink-subtle: "#A9AFB7"
  canvas: "#F1F4F7"
  surface-1: "#FFFFFF"
  surface-2: "#E8ECF1"
  hairline: "#DCE1E6"
  semantic-success: "#26B866"
  semantic-danger: "#E64A5B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 600, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31px, fontWeight: 600, lineHeight: 1.09, letterSpacing: -0.6px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  balance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  plan-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  story-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 0 }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px }
---

## Overview

Beeline turns account management into a modular entertainment-and-services dashboard. Yellow anchors brand and primary actions while white bento cards separate balance, tariff, packages, protection, content, store, and tools.

**Key Characteristics:**
- Yellow brand and recharge actions.
- White rounded bento modules.
- Lavender tariff accents.
- Floating bottom navigation.
- Expressive characters and 3D service objects.

## Colors

### Brand & Accent
- **Beeline Yellow** ({colors.primary}): Brand, recharge, and main CTA.
- **Black** ({colors.accent-black}): Icons and high-contrast service labels.
- **Violet** ({colors.accent-violet}): Tariff enhancer and plan atmosphere.
- **Orange** ({colors.accent-orange}): Urgent balance action.

### Surface
- **Canvas** ({colors.canvas}): Dashboard background.
- **Surface 1** ({colors.surface-1}): Tariff, service, and story cards.
- **Surface 2** ({colors.surface-2}): Disabled and secondary tiles.
- **Hairline** ({colors.hairline}): List separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Allowances and service metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Connected service.
- **Danger** ({colors.semantic-danger}): Security warning or failure.
- **Overlay** ({colors.semantic-overlay}): Stories and modal focus.

## Typography

### Font Family

- **SF Pro Display** — campaign and screen headings.
- **SF Pro Text** — tariff, usage, services, and settings.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 600 | Campaign statement |
| `{typography.headline}` | 21px | 600 | Screen and module title |
| `{typography.card-title}` | 16px | 500 | Tariff or service title |
| `{typography.body}` | 14px | 400 | Usage and conditions |
| `{typography.caption}` | 10px | 400 | Story and nav label |
| `{typography.button}` | 14px | 600 | Recharge and activation |

### Principles

- Use friendly lowercase campaign voice.
- Keep allowance numbers large and direct.
- Pair service title with connection state.
- Avoid heavy uppercase utility labels.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px bento gaps, and 14–16px card padding.

### Grid & Container

Home stacks story rail, account search, status notice, balance, tariff bento, product carousel, and floating navigation. Product screens use two-column service tiles and full-width recharge.

### Whitespace Philosophy

Use pale canvas between white modules; allow campaign art to breathe inside dedicated cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale cool canvas | Dashboard base |
| 1 | White rounded card | Tariff and services |
| 2 | Lavender or yellow module | Highlighted plan/action |
| 3 | Full-screen editorial panel | Story or product promotion |

### Decorative Depth

Use soft 3D objects, photography, and character art inside authored promotional modules. Functional cards remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Tags and fields |
| `{rounded.sm}` | 12px | Story cards |
| `{rounded.md}` | 16px | Service tiles |
| `{rounded.lg}` | 22px | Tariff and balance panels |
| `{rounded.pill}` | full | CTAs and navigation |
| `{rounded.full}` | full | Account and chat controls |

### Photography & Illustration Geometry

Characters and 3D service objects are isolated in airy panels. Entertainment covers stay rectangular and readable. Do not mix art styles inside one module.

## Components

### Buttons

Yellow pills handle recharge, activation, choose, watch, and read. Orange is reserved for urgent balance relief. Secondary controls are white tiles.

### Pricing Tabs

Mobile and home internet use text tabs. Allowance, service, and history filters use compact segments and chips.

### Cards & Containers

Tariff cards expose price, discount, allowances, and settings. Service tiles show icon, title, price, and connected state. History uses large debit and top-up summaries.

### Inputs & Forms

Phone entry, autopay, eSIM, number transfer, and security use full-width fields with explicit confirmation and support access.

### Status & Build Page

Show transfer progress, balance, autopay, connected, remaining data, calls, SMS, spam protection, session, and report state explicitly.

### Navigation

Home, Services, Store, and Chat form a floating bottom cluster. Account and number switching sit above dashboard content.

### Footer

Floating navigation and recharge pill stay above the safe area; focused setup and security flows use back navigation.

## Do's and Don'ts

### Do

- Keep balance and tariff allowances visible.
- Separate products, services, store, and history.
- Use yellow consistently for primary action.
- Show service connection state.
- Confine rich art to promo modules.

### Don't

- Don't place character art behind account data.
- Don't use orange for routine actions.
- Don't hide price or renewal terms.
- Don't merge telecom security with entertainment upsell.
- Don't shrink bento tiles below touch size.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add bento columns |
| Compact | 390–767px | Default stacked dashboard |
| Small | <390px | Reduce bento columns and truncate service labels |

### Touch Targets

Keep story cards, tiles, recharge, filters, navigation, and settings at least 44px.

### Collapsing Strategy

Scroll story and service rails horizontally before shrinking. Preserve balance, tariff, and recharge above entertainment content.

### Image Behavior

Contain characters and 3D objects; preserve cover art and embedded titles. Crop only authored photographic campaign backgrounds.

## Iteration Guide

1. Establish dashboard bento and navigation.
2. Build tariff, balance, and product management.
3. Add services, history, and security.
4. Add store, entertainment, and AI.
5. Add characters and 3D promotional art last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; first launch, home, products, services, history, and settings were image-reviewed.
- eSIM handoff, video playback, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
