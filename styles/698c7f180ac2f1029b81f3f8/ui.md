<design-context>
---
version: 1
platform: iOS
name: Trading-212-design-analysis
description: "A crisp finance interface combining white analytical surfaces, black typography, electric-cyan actions, compact market data, and dark atmospheric account headers. Rounded cards and restrained charts make a feature-dense trading product feel approachable."

colors:
  primary: "#12B5DD"
  on-primary: "#FFFFFF"
  primary-pressed: "#0696BD"
  ink: "#111214"
  ink-muted: "#696B70"
  ink-subtle: "#A5A7AB"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F5F6"
  surface-dark: "#101A22"
  hairline: "#E1E3E5"
  semantic-success: "#16A765"
  semantic-warning: "#F2A932"
  semantic-danger: "#D94A5B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 450, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 500, lineHeight: 1.08, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.5 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  metric-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  instrument-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  order-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58 }
---

# Overview

Trading 212 places calm white market tools over a dark account-summary backdrop. Cyan actions, compact numbers, and rounded analytical cards create clarity without making the product feel institutional.

# Non-negotiable visual invariants

- Align numeric values precisely.
- Reserve cyan for action and focus.
- Separate market direction from brand color.
- Chunk dense research into cards.
- The dashboard stacks a dark summary area over a rounded white sheet.
- Lists use aligned logo, label, sparkline, and value columns.
- Preserve open white space around key totals and order values.
- Dense research should be split into contained sections.

# Color and surfaces

Electric cyan is reserved for deposits, buy actions, selection, and chart emphasis. Dark navy supports account context and promotional headers.

Use white for research and transactions, pale gray for grouped metrics, and charcoal navy for the account header.

Near-black carries prices and titles; gray carries labels and supporting copy. White is used on dark account surfaces.

Green and red are strictly directional market colors. Amber communicates pending or caution states; cyan remains action, not profit.

# Typography

Use a clean geometric sans with tabular numerals for financial values.

Use 32–40 points account values, 20–25 points instrument prices, 14–17 points content, and 10–12 points metadata.

Keep labels compact, align numeric columns, and separate value from change. Avoid bolding every market row.

Use Inter or SF Pro with tabular figures enabled for prices, percentages, and order values.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12–16 points gutters, 8–12 points row gaps, and 20–24 points between research sections.

The dashboard stacks a dark summary area over a rounded white sheet. Lists use aligned logo, label, sparkline, and value columns.

Preserve open white space around key totals and order values. Dense research should be split into contained sections.

Allow subdued dark gradients and restrained product artwork in promotions. Keep analytical surfaces flat and crisp.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use six persistent bottom destinations for core areas. Instrument and order flows use close/back while keeping transaction actions pinned.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary Buy, Deposit, and Review actions are cyan pills. Native controls must inherit cyan selection, rounded geometry, and the same numeral styling.

Metric cards pair one label, one value, and at most one micro-chart. Research cards keep their own heading and action.

Registration uses clean underlined fields; order entry enlarges the amount and keeps keypad or slider access nearby.

Verification steps, market open state, order status, alerts, and funding progress appear in context with clear next actions.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Company logos stay circular or square at small scale. Promotional artwork may use compact dark banners; charts remain unclipped and edge-aligned.

Use `contain` for logos and promotional product art. Charts scale to available width without distorting axes or labels.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Verification steps, market open state, order status, alerts, and funding progress appear in context with clear next actions.

Green and red are strictly directional market colors. Amber communicates pending or caution states; cyan remains action, not profit.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Instrument rows, bottom navigation, order tabs, chart controls, and actions require at least 44 points targets.
- Keep price, position, and Buy/Sell visible. Collapse secondary analysis into sections or horizontal rails.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not decorate every row with shadow.
- Do not make gains cyan.
- Do not hide order type or execution timing.
- Do not expose default native styling.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

Several catalog steps are video-only, so motion and chart interaction timing are not fully inspectable. Complete flows establish registration, funding, portfolio, research, buying, social, card, and settings behavior.

</design-context>
