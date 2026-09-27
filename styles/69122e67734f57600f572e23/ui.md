<design-context>
---
version: alpha
name: Raiffeisen-design-analysis
description: "A bright, friendly banking system built around white space, high-contrast black text, and unmistakable signal yellow. Soft gray cards structure dense finance tasks, while pastel blue, mint, peach, and lavender education cards introduce a hand-drawn illustration layer. Rounded icon tiles, short coaching bubbles, and broad yellow actions make complex flows feel approachable."

colors:
  primary: "#FFE500"
  on-primary: "#292A30"
  primary-hover: "#FFEB4D"
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
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.8px
  display-lg:
    fontFamily: System Sans
    fontSize: 31px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.5px
  display-md:
    fontFamily: System Sans
    fontSize: 27px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.3px
  headline:
    fontFamily: System Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.2px
  card-title:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.25
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
    fontWeight: 600
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 15px 20px
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 15px 20px
  action-tile:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px 8px
  finance-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  education-card:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px
  coachmark:
    backgroundColor: "{colors.accent-blue}"
    textColor: "#FFFFFF"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  input-row:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 14px 0
  bottom-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 58px
---

## Overview

Raiffeisen balances high-density banking with friendly instruction. The working surface is nearly white, amounts and labels are dark graphite, and yellow appears where a decision or active brand moment needs unmistakable priority. Pastel educational cards and illustrations add warmth between accounts and transactions without obscuring financial data.

**Key Characteristics:**
- Bright neutral canvas with generous white card surfaces.
- Signal-yellow actions and selected details.
- Rounded shortcut tiles arranged in four-column groups.
- Pastel education cards with loose editorial illustrations.
- Small blue coaching bubbles for contextual guidance.
- Dense product and payment groups separated by whitespace, not heavy borders.

## Colors

### Brand & Accent

- **Signal Yellow** ({colors.primary}) is used for primary actions, selected payment routes, card details, and key promotional highlights.
- **Blue** ({colors.accent-blue}) is instructional rather than primary; it belongs to coachmarks, selected transfer context, and helper messages.
- Mint, peach, lavender, and pale blue distinguish educational story cards.

### Surface

- **Canvas** ({colors.canvas}) is the subtle page background.
- **Surface 1** ({colors.surface-1}) carries accounts, groups, forms, and sheets.
- **Surface 2** ({colors.surface-2}) supports shortcuts, inactive buttons, and icon wells.
- **Hairline** ({colors.hairline}) separates rows only when spacing is insufficient.

### Text

- **Ink** ({colors.ink}) is used for amounts, headings, and task labels.
- **Muted** ({colors.ink-muted}) carries explanations and account context.
- **Subtle** ({colors.ink-subtle}) is reserved for placeholders and inactive navigation.

### Semantic

Use success and danger for actual outcomes, not decoration. Keep educational pastels distinct from semantic confirmation and error colors.

## Typography

### Font Family

Use a clean system sans across finance data, forms, stories, and navigation. The system gains friendliness from illustration and shape, not a novelty typeface.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Major balance or onboarding statement |
| `{typography.display-lg}` | 31px | 700 | Amount entry |
| `{typography.display-md}` | 27px | 700 | Screen title |
| `{typography.headline}` | 22px | 600 | Product group heading |
| `{typography.card-title}` | 17px | 600 | Account and offer title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 11px | 400 | Rate, date, and metadata |

### Principles

- Give amounts visual priority over account names and explanations.
- Keep action labels short enough to work in four-column shortcut groups.
- Use sentence case throughout.
- Reserve bold type for decisions, headings, and financial totals.

### Note on Font Substitutes

Use SF Pro Display/Text on iOS or Inter cross-platform. Match the compact, neutral proportions and avoid rounded display substitutes.

## Layout

### Spacing System

Use a 4px base, 16px screen gutters, 8–12px gaps inside action groups, and 16–20px between financial cards. Multi-step forms keep 20px horizontal margins and a primary action near the safe-area bottom.

### Grid & Container

Home uses a one-column feed with four-column shortcuts and horizontally scrolling story cards. History and settings use full-width grouped lists. Amount entry may place source and destination cards side by side above a centered keypad.

### Whitespace Philosophy

Leave enough white space around financial groups to make each task obvious. Avoid enclosing the entire screen in one card; use independent groups with quiet separation.

## Elevation & Depth

Depth is soft and restrained. White sheets and cards separate from the pale canvas through slight tonal contrast or a very faint shadow. Illustrations may extend behind a foreground sheet, but financial controls remain on clean surfaces.

### Decorative Depth

Use overlapping illustration and foreground sheets, soft card separation, and occasional cropped artwork. Avoid glossy effects and strong floating shadows.

## Shapes

### Border Radius Scale

- Shortcut tiles and fields use 12–14px corners.
- Large financial groups use 18px corners.
- Coachmarks use 10px corners with a small directional tail when needed.
- Profile artwork and feature banners can use 24px top corners.
- Empty-state icons sit in small rounded-square wells.

### Photography & Illustration Geometry

Illustrations may bleed to the edges of a pastel banner or remain centered above a white sheet. Keep financial icons inside consistent rounded-square wells and never crop essential instructional objects.

## Components

### Buttons

Primary buttons are full-width yellow with dark text. Secondary actions use soft gray. Native controls retain platform behavior but must adopt the same palette, type, spacing, and corner treatment rather than default iOS blue.

### Pricing Tabs

Use pill segments only for compact category or history filters. The active option gains a subtle tinted fill; avoid large promotional tab bars.

### Cards & Containers

Place profile, notifications, and search above the total balance. Follow with four primary action tiles and a row of educational story cards before account details.
Use a simple monochrome icon, short label, and soft gray rounded background. A selected or featured tile may become black or yellow, but do not color every tile.

### Inputs & Forms

Keep source and destination in compact top cards, make the amount the largest element, and place quick-add chips above a large numeric keypad. The yellow confirmation action remains fixed near the bottom.

### Status & Build Page

Use pill filters that expand inline above the transaction list. Summaries use quiet blue and mint bars; transaction detail opens as a white bottom sheet.
Use a pastel fill, one concise lesson, and a cropped hand-drawn scene. Cards should remain secondary to account balances and transactions.

### Navigation

Five bottom tabs use dark active icons, pale inactive icons, and a white base. Profile, notifications, and search stay in compact top controls; back navigation uses plain chevrons.

### Footer

There is no content footer in the reviewed mobile product. End long screens with sufficient safe-area space and keep the bottom navigation visually separate from the final card.

## Do's and Don'ts

### Do

- Keep primary actions yellow and unambiguous.
- Use grouped shortcuts for frequent banking tasks.
- Separate education from financial data through pastel cards.
- Surface corrective actions inline with the affected content.
- Keep forms progressive and focused.

### Don't

- Do not turn yellow into a page background outside splash or brand moments.
- Do not use illustration behind balances or transaction details.
- Do not add strong borders around every card.
- Do not mix multiple pastel colors inside one education card.
- Do not rely on icon-only actions for consequential tasks.

## Responsive Behavior

### Breakpoints

Maintain one mobile column at compact and regular phone widths. Wider layouts may increase gutters and card width while retaining the same grouped task hierarchy.

### Touch Targets

Preserve at least 44px targets for shortcut tiles, filters, bottom tabs, and form actions even when their icons are visually small.

### Collapsing Strategy

Shorten labels before removing the four-column shortcut group. Story cards remain horizontally scrollable; forms stay one column with full-width bottom actions.

### Image Behavior

Crop educational artwork around a single focal metaphor. Keep illustration banners horizontally scrollable or full-width rather than scaling text and artwork into unreadable tiles.

## Iteration Guide

1. Build the neutral shell, bottom navigation, and account hierarchy.
2. Establish action tiles, list groups, amount entry, and forms.
3. Apply signal yellow to the smallest necessary set of actions.
4. Add coachmarks for unfamiliar controls.
5. Introduce pastel editorial cards and illustrations only after core tasks scan correctly.

## Known Gaps

- Exact typeface and production shadow values were not available.
- Some long onboarding steps were represented by video and could not be evaluated frame by frame.
- Tablet, landscape, and accessibility text-size layouts were not shown.
</design-context>
