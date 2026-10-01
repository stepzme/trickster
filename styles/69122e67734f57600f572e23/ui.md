<design-context>
---
version: 1
platform: iOS
name: Raiffeisen-design-analysis
description: "A bright, friendly banking system built around white space, high-contrast black text, and unmistakable signal yellow. Soft gray cards structure dense finance tasks, while pastel blue, mint, peach, and lavender education cards introduce a hand-drawn illustration layer. Rounded icon tiles, short coaching bubbles, and broad yellow actions make complex flows feel approachable."

colors:
  primary: "#FFE500"
  on-primary: "#292A30"
  primary-soft: "#FFF7A8"
  ink: "#292A30"
  ink-muted: "#74757C"
  ink-subtle: "#A8A9AF"
  canvas: "#F7F7F8"
  surface-1: "#FFFFFF"
  surface-2: "#F0EFF1"
  surface-3: "#E7E6E8"
  hairline: "#E3E2E4"
  accent-blue: "#5A75F7"
  accent-blue-soft: "#CFD8FF"
  accent-mint: "#CBEFE5"
  accent-peach: "#FFD7B8"
  accent-lavender: "#E3D6FA"
  semantic-success: "#39AD79"
  semantic-danger: "#E3535C"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 36
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.8
  display-lg:
    fontFamily: System Sans
    fontSize: 31
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.5
  display-md:
    fontFamily: System Sans
    fontSize: 27
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.3
  headline:
    fontFamily: System Sans
    fontSize: 22
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.25
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
    fontWeight: 600
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: [15, 20]
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: [15, 20]
  action-tile:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: [12, 8]
  finance-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16
  education-card:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12
  coachmark:
    backgroundColor: "{colors.accent-blue}"
    textColor: "#FFFFFF"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: [10, 12]
  input-row:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: [14, 0]
  bottom-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 58
---

# Overview

Raiffeisen balances high-density banking with friendly instruction. The working surface is nearly white, amounts and labels are dark graphite, and yellow appears where a decision or active brand moment needs unmistakable priority. Pastel educational cards and illustrations add warmth between accounts and transactions without obscuring financial data.

# Non-negotiable visual invariants

- Primary screens use Bright neutral canvas with generous white card surfaces.
- Keep primary actions yellow and unambiguous.
- Use grouped shortcuts for frequent banking tasks.
- Separate education from financial data through pastel cards.
- Surface corrective actions inline with the affected content.
- Keep forms progressive and focused.
- Home uses a one-column feed with four-column shortcuts and horizontally scrolling story cards.
- History and settings use full-width grouped lists.

# Color and surfaces

- **Signal Yellow** ({colors.primary}) is used for primary actions, selected payment routes, card details, and key promotional highlights.
- **Blue** ({colors.accent-blue}) is instructional rather than primary; it belongs to coachmarks, selected transfer context, and helper messages.
- Mint, peach, lavender, and pale blue distinguish educational story cards.

- **Canvas** ({colors.canvas}) is the subtle page background.
- **Surface 1** ({colors.surface-1}) carries accounts, groups, forms, and sheets.
- **Surface 2** ({colors.surface-2}) supports shortcuts, inactive buttons, and icon wells.
- **Hairline** ({colors.hairline}) separates rows only when spacing is insufficient.

- **Ink** ({colors.ink}) is used for amounts, headings, and task labels.
- **Muted** ({colors.ink-muted}) carries explanations and account context.
- **Subtle** ({colors.ink-subtle}) is reserved for placeholders and inactive navigation.

Use success and danger for actual outcomes, not decoration. Keep educational pastels distinct from semantic confirmation and error colors.

# Typography

Use a clean system sans across finance data, forms, stories, and navigation. The system gains friendliness from illustration and shape, not a novelty typeface.

- `{typography.display-xl}` — 36 points — 700 — Major balance or onboarding statement
- `{typography.display-lg}` — 31 points — 700 — Amount entry
- `{typography.display-md}` — 27 points — 700 — Screen title
- `{typography.headline}` — 22 points — 600 — Product group heading
- `{typography.card-title}` — 17 points — 600 — Account and offer title
- `{typography.body}` — 14 points — 400 — Default content
- `{typography.caption}` — 11 points — 400 — Rate, date, and metadata

- Give amounts visual priority over account names and explanations.
- Keep action labels short enough to work in four-column shortcut groups.
- Use sentence case throughout.
- Reserve bold type for decisions, headings, and financial totals.

Use SF Pro Display/Text on iOS or Inter cross-platform. Match the compact, neutral proportions and avoid rounded display substitutes.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points screen gutters, 8–12 points gaps inside action groups, and 16–20 points between financial cards. Multi-step forms keep 20 points horizontal margins and a primary action near the safe-area bottom.

Home uses a one-column feed with four-column shortcuts and horizontally scrolling story cards. History and settings use full-width grouped lists. Amount entry may place source and destination cards side by side above a centered keypad.

Leave enough white space around financial groups to make each task obvious. Avoid enclosing the entire screen in one card; use independent groups with quiet separation.

Use overlapping illustration and foreground sheets, soft card separation, and occasional cropped artwork. Avoid glossy effects and strong floating shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Five bottom tabs use dark active icons, pale inactive icons, and a white base. Profile, notifications, and search stay in compact top controls; back navigation uses plain chevrons.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary buttons are full-width yellow with dark text. Secondary actions use soft gray. Native controls retain platform behavior but must adopt the same palette, type, spacing, and corner treatment rather than default iOS blue.

Place profile, notifications, and search above the total balance. Follow with four primary action tiles and a row of educational story cards before account details.
Use a simple monochrome icon, short label, and soft gray rounded background. A selected or featured tile may become black or yellow, but do not color every tile.

Keep source and destination in compact top cards, make the amount the largest element, and place quick-add chips above a large numeric keypad. The yellow confirmation action remains fixed near the bottom.

Use pill filters that expand inline above the transaction list. Summaries use quiet blue and mint bars; transaction detail opens as a white bottom sheet.
Use a pastel fill, one concise lesson, and a cropped hand-drawn scene. Cards should remain secondary to account balances and transactions.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Illustrations may bleed to the edges of a pastel banner or remain centered above a white sheet. Keep financial icons inside consistent rounded-square wells and never crop essential instructional objects.

Crop educational artwork around a single focal metaphor. Keep illustration banners horizontally scrollable or full-width rather than scaling text and artwork into unreadable tiles.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Use pill filters that expand inline above the transaction list. Summaries use quiet blue and mint bars; transaction detail opens as a white bottom sheet.
Use a pastel fill, one concise lesson, and a cropped hand-drawn scene. Cards should remain secondary to account balances and transactions.

Use success and danger for actual outcomes, not decoration. Keep educational pastels distinct from semantic confirmation and error colors.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Preserve at least 44 points targets for shortcut tiles, filters, bottom tabs, and form actions even when their icons are visually small.
- Shorten labels before removing the four-column shortcut group. Story cards remain horizontally scrollable; forms stay one column with full-width bottom actions.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not turn yellow into a page background outside splash or brand moments.
- Do not use illustration behind balances or transaction details.
- Do not add strong borders around every card.
- Do not mix multiple pastel colors inside one education card.
- Do not rely on icon-only actions for consequential tasks.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact typeface and production shadow values were not available.
- Some long onboarding steps were represented by video and could not be evaluated frame by frame.
- Tablet, landscape, and accessibility text-size layouts were not shown.

</design-context>
