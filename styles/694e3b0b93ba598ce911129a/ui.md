<design-context>
---
version: alpha
name: Wise-design-analysis
description: "A confident global-finance system built from bright acid green, white or near-black canvases, bold condensed headings, calm gray account cards, and highly legible transaction detail. Playful painted 3D imagery appears selectively while money tasks remain direct and transparent."

colors:
  primary: "#9FE870"
  on-primary: "#0E0F0C"
  primary-pressed: "#7FD94B"
  ink: "#12130F"
  ink-muted: "#5D6258"
  ink-subtle: "#92978E"
  canvas: "#F7F7F5"
  surface-1: "#FFFFFF"
  surface-2: "#ECEDEA"
  surface-3: "#DFE2DD"
  hairline: "#D2D5CF"
  semantic-success: "#2F8F4E"
  semantic-warning: "#B98000"
  semantic-danger: "#C94747"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Wise Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0px }
  display-lg: { fontFamily: Wise Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7px }
  display-md: { fontFamily: Wise Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px }
  headline: { fontFamily: Wise Sans, fontSize: 22px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: Wise Sans, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Wise Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Wise Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Wise Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: Wise Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Wise Sans, fontSize: 11px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Wise Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Wise Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
---

## Overview

Wise pairs a playful global brand with unusually explicit financial information. Lime actions, oversize headings, quiet cards, and transparent fee rows make complex transfers feel understandable.

## Colors

Use lime as the sole persistent brand accent and keep monetary surfaces neutral.

### Brand & Accent

Use bright Wise green for primary actions, selected chips, focus, and key links. Text on green is near-black.

### Surface

Use warm white or near-black canvases, white or charcoal cards, and soft gray secondary surfaces.

### Text

Use near-black on light mode, warm white in dark mode, and medium gray for labels, dates, and explanatory detail.

### Semantic

Reserve green semantic tones for completion distinct from brand lime; use amber for review and red for destructive or failed states.

## Typography

Bold condensed headlines deliver brand energy while neutral body text protects numeric clarity.

### Font Family

Use Wise Sans or a compact grotesk with a condensed heavy display companion.

### Hierarchy

Use 28–40px compressed headlines, 20–24px balances, 15–17px controls, and 11–13px transaction metadata.

### Principles

Align amounts clearly, keep currency attached, and separate labels from values through weight rather than color noise.

### Note on Font Substitutes

Use Archivo Black or a condensed grotesk for headlines and Inter or SF Pro for data-rich body text.

## Layout

Compose screens from account summaries, horizontally scrollable currency cards, transaction lists, and bottom-anchored confirmation actions.

### Spacing System

Use a 4px base, 12px card padding, 16px gutters, and 24–32px between financial sections.

### Grid & Container

Home uses a horizontal balance-card row above a single transaction column; forms remain one column with full-width review rows.

### Whitespace Philosophy

Allow generous space around amounts and decision points; transaction lists can be compact but never cramped.

## Elevation & Depth

Use subtle ambient shadows for cards and navigation; hierarchy primarily comes from fill contrast.

### Decorative Depth

Use painted 3D objects, textured card artwork, and faint green glows only in brand or onboarding moments.

## Shapes

Use friendly rounded rectangles, circular financial icons, and pill actions.

### Border Radius Scale

Use 10px for fields, 14–18px for cards, 24px for promotional modules, and full pills for actions and chips.

### Photography & Illustration Geometry

Place isolated 3D objects centrally with open space. Currency flags and avatars stay circular; payment cards keep their physical ratio.

## Components

All controls should carry Wise's compact, decisive visual language even when native underneath.

### Buttons

Primary buttons are lime full-width pills with black labels. Native buttons must inherit the same fill, radius, weight, and pressed darkening.

### Pricing Tabs

Use pale segmented chips for currency, payment source, or appearance selection; the selected state is lime or dark filled.

### Cards & Containers

Balance cards show currency identity, account detail, and amount with minimal decoration. Review containers divide facts into clear labeled rows.

### Inputs & Forms

Use large numeric inputs, outlined references, and compact Change chips. Keep currency and destination visible during editing.

### Status & Build Page

Show pending tasks, transfer progress, card freeze, fee, arrival, and limit states with explicit labels rather than color alone.

### Navigation

Use a four-item floating-looking bottom bar with Home, Cards, Recipients, and Payments; active state relies on weight and a soft filled island.

### Footer

There is no footer. Legal, security, statements, limits, language, and account closure belong in Profile.

## Do's and Don'ts

Prioritize transparent money decisions over decorative density.

### Do

- Repeat amount, currency, fees, and arrival before confirmation.
- Use lime for decisive action.
- Keep financial cards calm and scannable.
- Style native controls in Wise's brand language.

### Don't

- Do not use default blue links or buttons.
- Do not hide fees behind disclosure.
- Do not use illustration inside critical review rows.
- Do not color every currency surface.

## Responsive Behavior

Preserve amount clarity and review order across widths.

### Breakpoints

Phones use one-column forms and horizontal balance cards; wider layouts may pair recipient/amount entry with a live review panel.

### Touch Targets

Currency, recipient, amount, change, confirm, card control, and navigation targets require at least 44px.

### Collapsing Strategy

Keep amount, currency, recipient, fee, arrival, and primary action visible; collapse supporting account data and education.

### Image Behavior

Use contain for 3D objects and payment cards, cover for avatars only, and never crop flags or security symbols.

## Iteration Guide

Start with Home balances, send flow, recipient selection, fee review, transactions, and Cards. Add scheduled payments, referrals, detailed controls, and dark mode afterward.

## Known Gaps

Eighty-five flow structures and representative screens across onboarding, Home, transfers, cards, recipients, and dark mode were reviewed. Exact motion and every specialized payment branch were not exhaustively inspected.

</design-context>

Use the design system above for all UI you generate.
