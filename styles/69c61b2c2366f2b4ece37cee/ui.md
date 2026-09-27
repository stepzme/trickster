<design-context>
---
version: alpha
name: Alfa-Bank-design-analysis
description: "A personalized banking interface where quiet off-white finance surfaces and black controls frame an exuberant layer of colorful 3D offer cards. Five persistent destinations, dense modular content, and a recurring heart motif keep a broad financial product recognizable."
colors:
  primary: "#171619"
  on-primary: "#FFFFFF"
  primary-hover: "#2A282D"
  brand-red: "#EE1C25"
  accent-cyan: "#49D8E4"
  accent-lime: "#8EEB2E"
  accent-violet: "#9B58EE"
  accent-orange: "#FF9B3D"
  ink: "#171619"
  ink-muted: "#75757B"
  ink-subtle: "#A9A9AE"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#ECECEF"
  hairline: "#E1E1E5"
  semantic-success: "#1FB66B"
  semantic-danger: "#E8393F"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 42px, fontWeight: 800, lineHeight: 0.98, letterSpacing: -1.2px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.7px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 13px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  offer-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14px }
  payment-form: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  receipt-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 20px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 12px 16px }
---

## Overview

Alfa-Bank separates serious finance from playful discovery. Off-white screens, white modules, and black actions carry transactions; saturated 3D cards make offers, benefits, and tutorials unmistakable.

**Key Characteristics:**
- Off-white canvas with white rounded modules.
- Black primary actions and segmented controls.
- Red heart navigation motif.
- Saturated 3D offer and tutorial cards.
- Personalized avatar, cards, and quick transfers.
- Five persistent destinations.

## Colors

### Brand & Accent
- **Black** ({colors.primary}): Primary actions, selected segments, and structural emphasis.
- **Alfa Red** ({colors.brand-red}): Brand and heart emphasis.
- **Cyan, Lime, Violet, Orange**: Promotional fields and category accents.

### Surface
- **Canvas** ({colors.canvas}): Default page background.
- **Surface 1** ({colors.surface-1}): Accounts, lists, forms, and receipts.
- **Surface 2** ({colors.surface-2}): Search, input, and grouped settings.
- **Hairline** ({colors.hairline}): Sparse separators.

### Text
- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Metadata and descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled states.

### Semantic
- **Success** ({colors.semantic-success}): Positive amounts and completed actions.
- **Danger** ({colors.semantic-danger}): Errors and logout.
- **Overlay** ({colors.semantic-overlay}): Receipt and context-menu scrims.

## Typography

### Font Family

- **System Sans** — all finance, navigation, chat, and settings UI.
- **System Mono** — account fragments, codes, and aligned amounts.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 42px | 800 | Promotional numeral |
| `{typography.display-md}` | 27px | 700 | Balance or receipt amount |
| `{typography.headline}` | 22px | 700 | Screen heading |
| `{typography.card-title}` | 15px | 600 | Offer or account title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 10px | 400 | Navigation and metadata |
| `{typography.button}` | 15px | 600 | Actions |

### Principles

- Keep finance copy compact and direct.
- Let promotional art carry expressive typography.
- Align amounts and dates for fast scanning.
- Use black selection before adding color.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto**. Promotional art may use a custom heavy display face.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 12–16px, card gaps 8–12px, and dense lists use 12–14px row padding.

### Grid & Container

Home combines horizontal story cards, quick contacts, and stacked finance modules. Benefits uses one- and two-column offer grids. Transactions, chat, and settings use one column.

### Whitespace Philosophy

Keep transactional areas calm and open. Allow promotional cards to be dense internally, but separate them with generous neutral gutters.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Off-white canvas | Screen base |
| 1 | White rounded card | Finance module |
| 2 | Colored card field | Offer and tutorial |
| 3 | Dark scrim plus white receipt | Completion and context menu |

### Decorative Depth

Use shadows sparingly on chrome. Let 3D objects, cropped type, and color fields provide depth in promotional content.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Chips and small controls |
| `{rounded.sm}` | 10px | Buttons and inputs |
| `{rounded.md}` | 14px | Accounts and offers |
| `{rounded.lg}` | 20px | Receipts and large sheets |
| `{rounded.pill}` | full | Search, segments, and avatar chips |

### Photography & Illustration Geometry

Avatar and contact photos are circular. Card art may crop a dominant 3D object, while literal payment-card renders preserve their full rounded rectangle.

## Components

### Buttons

Primary actions use black fill and white text. Secondary actions sit on gray or white. Color-filled actions are reserved for promotional content.

### Pricing Tabs

Segmented controls and benefit categories use black selected pills with neutral unselected labels. They scroll horizontally rather than compressing.

### Cards & Containers

Account cards show balance and concise controls. Offer cards combine one claim with one visual. Receipt cards center amount and expose three follow-up actions.

### Inputs & Forms

Payment inputs use pale grouped fields, source/recipient selectors, amount entry, suggestions, and a keyboard-safe submit action.

### Status & Build Page

Positive amounts use green. Transaction analytics combines color and text. Tutorials use illustrated cards, while system states use plain labels.

### Navigation

Home, Payments, Benefits, History, and Chats form the bottom bar. The active destination turns black; Home may retain the red heart motif.

### Footer

The bottom navigation is the footer. Long settings and history screens retain it while content scrolls above.

## Do's and Don'ts

### Do

- Keep transaction actions black and explicit.
- Use color to distinguish content, not financial state alone.
- Preserve receipt follow-up actions.
- Keep user personalization visible.
- Let offer art be expressive inside bounded cards.

### Don't

- Don't turn every finance module into a promotional card.
- Don't use red for ordinary selection.
- Don't mix chat types without labels.
- Don't hide home customization behind drag gestures alone.
- Don't crop literal payment-card evidence.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center content and expand modular grid |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Reduce offer grid to one column |

### Touch Targets

Maintain 44px for navigation, contacts, payment rails, category pills, and settings rows.

### Collapsing Strategy

Keep finance flows single-column. Collapse offer grids before reducing artwork legibility; horizontal category lists should scroll.

### Image Behavior

Cover promotional card fields while preserving the dominant object. Contain literal card renders, merchant marks, and receipt evidence.

## Iteration Guide

1. Establish neutral surfaces and five-tab navigation.
2. Build account and payment modules.
3. Add receipt, history, and settings patterns.
4. Add chats and personalization.
5. Introduce promotional art without recoloring finance chrome.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 242-flow inventory was complete; representative leaf flows were inspected.
- Several recorded screens were video-only and motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
