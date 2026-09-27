<design-context>
---
version: alpha
name: Bereke-design-analysis
description: "A bright retail-banking interface that combines clean white cards, pale cool-gray canvases, saturated green actions, and electric-blue highlights. Dense money tasks stay legible through large totals, compact shortcuts, and rounded grouped lists, while polished 3D objects distinguish promotional products."
colors:
  primary: "#10A95B"
  on-primary: "#FFFFFF"
  primary-hover: "#078D49"
  primary-soft: "#EAF8F0"
  accent-blue: "#1268E8"
  accent-cyan: "#DFF5FF"
  ink: "#17191C"
  ink-muted: "#777C84"
  ink-subtle: "#A9ADB3"
  canvas: "#F3F5F6"
  surface-1: "#FFFFFF"
  surface-2: "#E9ECEF"
  hairline: "#E1E4E7"
  semantic-success: "#10A95B"
  semantic-danger: "#E5484D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Bereke presents everyday banking as a sequence of clear white modules over a cool-gray canvas. Green commits actions, blue adds product emphasis, and 3D campaign objects are reserved for discovery.

**Key Characteristics:**
- Bright white grouped surfaces.
- Green transactional actions.
- Blue secondary product accents.
- Large balances with compact shortcuts.
- Glossy 3D promotional objects.

## Colors

### Brand & Accent
- **Bereke Green** ({colors.primary}): Primary actions, active state, and success.
- **Electric Blue** ({colors.accent-blue}): Product emphasis and selected utilities.
- **Soft Cyan** ({colors.accent-cyan}): Supporting promotional fields.

### Surface
- **Canvas** ({colors.canvas}): Main page background.
- **Surface 1** ({colors.surface-1}): Cards, forms, and grouped lists.
- **Surface 2** ({colors.surface-2}): Secondary controls and inactive fields.
- **Hairline** ({colors.hairline}): Row separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Details, dates, and conditions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and unavailable state.

### Semantic
- **Success** ({colors.semantic-success}): Completed operation and positive state.
- **Danger** ({colors.semantic-danger}): Errors and destructive controls.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **SF Pro Display** — balances and screen headings.
- **SF Pro Text** — transactions, controls, and forms.
- **SF Mono** — card suffixes and codes.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Total balance |
| `{typography.headline}` | 22px | 700 | Screen heading |
| `{typography.card-title}` | 16px | 600 | Product or payment row |
| `{typography.body}` | 14px | 400 | Details and forms |
| `{typography.caption}` | 10px | 400 | Navigation and metadata |
| `{typography.button}` | 15px | 600 | Main action |

### Principles

- Put amount and recipient ahead of secondary details.
- Keep row labels short and scannable.
- Use strong weight for totals and section titles only.
- Keep authored campaign lettering inside imagery.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px side gutters, 12px gaps, and 16px card padding.

### Grid & Container

Home stacks balance and product cards above shortcuts and activity. Transfers, payments, and services move from compact category grids into one-column forms.

### Whitespace Philosophy

Separate task groups with canvas space; keep information dense within a clearly bounded card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Cool-gray canvas | Screen base |
| 1 | White rounded group | Accounts and directories |
| 2 | Colored campaign card | Product discovery |
| 3 | Sheet over dimmed content | Confirmation |

### Decorative Depth

Use soft shadows sparingly. Reserve reflective volume and directional light for promotional 3D objects.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Tags and small controls |
| `{rounded.sm}` | 12px | Icons and inputs |
| `{rounded.md}` | 16px | Action tiles |
| `{rounded.lg}` | 20px | Product cards and lists |
| `{rounded.pill}` | full | Filters and chips |
| `{rounded.full}` | full | Avatar and service icon |

### Photography & Illustration Geometry

Product art uses an isolated 3D object within a rounded campaign panel. Functional banking screens avoid decorative imagery.

## Components

### Buttons

Green filled buttons commit transfers, payments, and applications. Secondary actions use white or soft-gray rows; destructive actions remain red.

### Pricing Tabs

Products and payment categories use compact tabs or chips with a green active state.

### Cards & Containers

Account cards show balance, card identity, and shortcuts. Grouped lists handle beneficiaries, payment categories, services, and settings.

### Inputs & Forms

Use large single-column amount and recipient fields, contextual numeric keyboards, and a review step before confirmation.

### Status & Build Page

Expose available balance, card state, transfer fee, limit, processing, success, and failure as text plus semantic color.

### Navigation

Persistent bottom navigation anchors the main areas. Deep money tasks switch to a focused top bar and back action.

### Footer

Keep bottom navigation above the safe area. Focused forms replace it with a full-width continuation action.

## Do's and Don'ts

### Do

- Keep balances and fees explicit.
- Use green for committed progress.
- Group dense directories by task.
- Preserve generous separation between modules.
- Restrict 3D art to product discovery.

### Don't

- Don't hide the transfer review step.
- Don't place campaign art behind financial data.
- Don't use blue and green as competing primary actions.
- Don't compress touch rows below comfortable height.
- Don't rely on icon color alone for status.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add two-column dashboard groups |
| Compact | 390–767px | Default single-column mobile layout |
| Small | <390px | Stack shortcuts and shorten labels |

### Touch Targets

Keep navigation, service cells, list rows, chips, and form actions at least 44px.

### Collapsing Strategy

Stack shortcut groups before reducing type. Keep current balance, primary account, and next action above campaigns.

### Image Behavior

Contain 3D objects with clear copy-safe space. Never crop account identifiers, QR codes, or transaction evidence.

## Iteration Guide

1. Build the balance, account, and navigation shell.
2. Add transfer and payment directories.
3. Add one-column forms and review states.
4. Add card controls and services.
5. Add product campaigns last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 90 available flow names were inventoried; first launch, main, debit card, transfers, payments, and services were image-reviewed.
- Motion, accessibility settings, and biometric transitions were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
