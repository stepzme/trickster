<design-context>
---
version: alpha
name: Emma-design-analysis
description: "A two-mode personal-finance UI: cinematic violet-on-plum onboarding and subscription screens transition into a bright, information-dense dashboard. Purple gradients carry primary actions and premium emphasis; white cards, pale gray canvas, and compact system typography organize accounts, transactions, saving, payments, investments, and credit. Luminous 3D objects make abstract financial benefits tangible without entering dense data views."

colors:
  primary: "#A92BFF"
  on-primary: "#FFFFFF"
  primary-hover: "#BF59FF"
  primary-soft: "#F4E6FF"
  primary-gradient-end: "#C65CFF"
  ink: "#111219"
  ink-muted: "#737582"
  ink-subtle: "#A1A4AF"
  canvas: "#F6F7FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF0F5"
  dark-canvas: "#160C29"
  dark-surface: "#25183A"
  dark-ink: "#FFFFFF"
  hairline: "#E7E8ED"
  accent-mint: "#21C9B1"
  accent-pink: "#F35B91"
  semantic-success: "#24B86A"
  semantic-danger: "#DD4964"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.9px
  display-lg:
    fontFamily: System Sans
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.6px
  display-md:
    fontFamily: System Sans
    fontSize: 27px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.4px
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
    fontSize: 17px
    fontWeight: 400
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
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 600
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
    rounded: "{rounded.pill}"
    padding: 14px 20px
  button-secondary:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  finance-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12px
  onboarding-choice:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: 12px 0
  status-badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 52px
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 20px 12px
---

## Overview

Emma uses contrast between two modes. Setup and premium storytelling live on a deep plum canvas with luminous purple actions and 3D hero objects. The working product shifts to a bright financial dashboard where white rounded cards, small colored icons, and stable bottom navigation prioritize numbers and tasks.

**Key Characteristics:**
- Deep plum onboarding paired with a bright in-product canvas.
- Purple-to-pink primary gradient and violet selected states.
- Compact system typography with strong numeric hierarchy.
- White rounded cards for every financial domain.
- Five persistent tabs: Feed, Save, Pay, Invest, Credit.
- Soft 3D metaphors for premium and educational moments.

## Colors

### Brand & Accent
- **Emma Purple** ({colors.primary}): Primary actions, selected tabs, links, and key figures.
- **Purple Hover** ({colors.primary-hover}) and **Gradient End** ({colors.primary-gradient-end}): CTA gradient and premium emphasis.
- **Soft Purple** ({colors.primary-soft}): Quiet callouts, selected chips, and button backgrounds.
- **Mint** ({colors.accent-mint}) and **Pink** ({colors.accent-pink}): Supporting financial categories and status icons.

### Surface
- **Canvas** ({colors.canvas}): Bright dashboard background.
- **Surface 1** ({colors.surface-1}): Finance cards, rows, and navigation.
- **Surface 2** ({colors.surface-2}): Secondary fields and disabled areas.
- **Dark Canvas** ({colors.dark-canvas}): Onboarding and subscription.
- **Dark Surface** ({colors.dark-surface}): Choice cards, testimonials, and secondary dark actions.
- **Hairline** ({colors.hairline}): Quiet dividers in dense financial groups.

### Text
- **Ink** ({colors.ink}): Amounts, headings, and primary labels on light screens.
- **Ink Muted** ({colors.ink-muted}): Explanations, timestamps, and account context.
- **Ink Subtle** ({colors.ink-subtle}): Inactive tabs and disabled metadata.
- **Dark Ink** ({colors.dark-ink}): Primary text on plum surfaces.

### Semantic
- **Success** ({colors.semantic-success}): Positive movement, confirmed actions, and connected state.
- **Danger** ({colors.semantic-danger}): Negative movement, errors, and destructive actions.
- **Overlay** ({colors.semantic-overlay}): Modal scrim where required.

## Typography

### Font Family

- **System Sans** — all display, body, controls, amounts, and navigation.
- **System Mono** — optional for account or transaction identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Hero amount or benefit |
| `{typography.display-lg}` | 32px | 700 | Onboarding statement |
| `{typography.display-md}` | 27px | 700 | Setup question |
| `{typography.headline}` | 22px | 600 | Domain heading |
| `{typography.card-title}` | 17px | 600 | Product and card title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 11px | 400 | Time, rate, and metadata |
| `{typography.button}` | 15px | 500 | Primary and secondary actions |

### Principles

- Give money values stronger size or weight than surrounding labels.
- Keep onboarding sentences short and centered only when they accompany a hero object.
- Use left alignment for financial tasks and settings.
- Reserve saturated purple text for actions and selected state, not general body copy.

### Note on Font Substitutes

Use **SF Pro Display/Text** on iOS or **Inter** cross-platform. Preserve compact regular text and slightly heavier 600–700 headings; avoid geometric display faces that make dense money screens feel promotional.

## Layout

### Spacing System

Use a 4px base. Product gutters are 10–12px, card interiors 12–16px, and section gaps 16–24px. Dark onboarding uses larger 24px outer spacing and anchors the main action near the safe-area bottom.

### Grid & Container

The product uses one mobile column, with two-column summary tiles and horizontal recommendation cards where comparison helps. Onboarding choices use a two-column grid. Bottom navigation remains fixed across all five domains.

### Whitespace Philosophy

Dark screens use generous negative space to create focus around one idea. Light product screens are denser: cards separate information into readable chunks while the pale canvas keeps domains distinct.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale or plum canvas | Base screen |
| 1 | White or dark raised card | Finance groups and onboarding choices |
| 2 | Soft tinted banner | Recommendation and product promotion |
| 3 | Luminous 3D object and glow | Premium storytelling only |

### Decorative Depth

Use restrained card shadows on light surfaces and soft ambient glow behind 3D objects on dark screens. Data cards should not inherit the promotional lighting.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Tiny badges and marks |
| `{rounded.sm}` | 10px | Chips and compact controls |
| `{rounded.md}` | 14px | Choice tiles and inputs |
| `{rounded.lg}` | 18px | Financial cards |
| `{rounded.xl}` | 24px | Hero illustration panels |
| `{rounded.xxl}` | 30px | Large modal or story cards |
| `{rounded.pill}` | full | Bottom primary actions |

### Photography & Illustration Geometry

3D objects sit centered in large dark fields or inside rounded landscape panels. Partner marks and product logos use bounded, evenly spaced tiles. No editorial photography was prominent in the inspected core flows.

## Components

### Buttons

Primary actions use a purple-to-pink gradient, white text, full width, and pill radius. Dark secondary actions use a muted plum pill. On light screens, tertiary actions may use pale-purple fills with purple labels.

### Pricing Tabs

Subscription benefit screens use a progress marker rather than a pricing toggle. In-product domain switches use compact top tabs: selected text turns purple while the background stays quiet.

### Cards & Containers

Finance cards are white, rounded, and lightly separated from the pale canvas. They can contain account totals, recommended actions, lists, or charts, but each card should express one financial idea. Dark choice cards use a thin purple selection outline.

### Inputs & Forms

Registration fields are visually open on the dark canvas with large input text and a fixed bottom Continue action. Product search uses a pale rounded field. Validation belongs inline near the field or button.

### Status & Build Page

Use small colored figures for positive and negative movements, progress rings for processing, and checkmarks for completed tasks. Every status also needs a text label or numeric context.

### Navigation

Feed, Save, Pay, Invest, and Credit persist at the bottom with small icons and labels. Selected tabs turn purple; inactive tabs remain gray. Detail screens use a simple back control and centered title.

### Footer

Long account or settings screens end with legal, privacy, or version information in muted text. Focused onboarding and transaction views do not add a footer.

## Do's and Don'ts

### Do

- Maintain the dark-to-light transition between setup and daily product use.
- Reserve purple gradient for the clearest primary action.
- Group financial facts into one-purpose white cards.
- Keep amounts tied to currency, time, and account context.
- Use 3D art for education and premium benefits, not for transaction rows.

### Don't

- Don't turn the bright dashboard into a purple-filled interface.
- Don't show recommendations with the same weight as account facts.
- Don't rely on colored numbers without a sign or label.
- Don't add multiple large gradient buttons to one screen.
- Don't introduce unrelated illustration materials or hard outlines.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center a bounded mobile product column |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Stack summary tiles and reduce illustration size |

### Touch Targets

Keep primary actions, rows, domain tabs, and bottom navigation at least 44px high. Give amount selectors and icon-only actions sufficient separation from destructive controls.

### Collapsing Strategy

Stack two-column onboarding choices and financial summary tiles when labels or amounts wrap. Preserve one dominant bottom action. Recommendation carousels may become a vertical list on narrow layouts.

### Image Behavior

3D hero objects remain fully visible with generous padding; scale them down instead of cropping. Partner marks use contain behavior. Illustration panels keep rounded corners and crop only ambient backgrounds.

## Iteration Guide

1. Establish the dark onboarding and bright product palettes as separate modes.
2. Build one finance card and one gradient action as reference components.
3. Add the five-tab navigation and domain summaries.
4. Validate amount hierarchy, signs, currencies, and statuses.
5. Introduce 3D art only after the task structure is clear.

## Known Gaps

- Exact proprietary colors, typeface names, and gradient stops were inferred visually.
- Motion, haptics, and video behavior were not available from still screens.
- Tablet and desktop layouts were not represented.
- Several secondary product flows were inventoried through Screen Gallery metadata but visually sampled at representative steps.

</design-context>

Use the design system above for all UI you generate.
