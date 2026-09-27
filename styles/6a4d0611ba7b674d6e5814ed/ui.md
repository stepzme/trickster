<design-context>
---
version: alpha
name: Airba-pay-design-analysis
description: "A bright loan-management interface built from white space, Airba cyan, blue-to-violet gradients, compact finance cards, and friendly glossy objects. The system keeps calculations and verification practical while using a slim header and four-item bottom navigation."
colors:
  primary: "#2EA8F2"
  on-primary: "#FFFFFF"
  primary-hover: "#168FDD"
  primary-soft: "#EAF7FF"
  accent-violet: "#665BE8"
  accent-orange: "#F06F39"
  ink: "#171923"
  ink-muted: "#747782"
  ink-subtle: "#AEB1BA"
  canvas: "#FFFFFF"
  surface-1: "#F7F8FA"
  surface-2: "#EEF1F5"
  hairline: "#E3E6EB"
  semantic-success: "#32B96B"
  semantic-danger: "#E55A48"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 13px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  loan-calculator: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  info-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 12px }
  partner-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  text-input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16px }
---

## Overview

Airba pay balances restrained finance forms with colorful product education. White is dominant; blue actions, thin cyan indicators, gradient campaign bands, and small 3D objects create hierarchy.

**Key Characteristics:**
- White canvas and low-contrast dividers.
- Cyan primary actions with violet gradient support.
- Compact calculator and partner cards.
- Persistent verification warning.
- Four-item bottom navigation.
- Glossy finance and shopping objects.

## Colors

### Brand & Accent
- **Airba Blue** ({colors.primary}): Primary actions, selection, and active navigation.
- **Violet** ({colors.accent-violet}): Gradient and brand support.
- **Orange** ({colors.accent-orange}): Verification warning and sparse attention.

### Surface
- **Canvas** ({colors.canvas}): Default screen and card surface.
- **Surface 1** ({colors.surface-1}): Grouped controls and quiet backgrounds.
- **Surface 2** ({colors.surface-2}): Disabled and nested areas.
- **Hairline** ({colors.hairline}): Dividers and input outlines.

### Text
- **Ink** ({colors.ink}): Titles, amounts, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Explanations and financial metadata.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled text.

### Semantic
- **Success** ({colors.semantic-success}): Completed verification and accepted actions.
- **Danger** ({colors.semantic-danger}): Warning and destructive exit.
- **Overlay** ({colors.semantic-overlay}): Camera and modal scrims.

## Typography

### Font Family

- **System Sans** — all screens, loan terms, support, and navigation.
- **System Mono** — amounts or codes when fixed-width alignment helps.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Campaign amount |
| `{typography.display-md}` | 26px | 700 | Screen heading |
| `{typography.headline}` | 21px | 700 | Loan total or empty state |
| `{typography.card-title}` | 16px | 600 | Card title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 10px | 400 | Tab and legal metadata |
| `{typography.button}` | 15px | 600 | Actions |

### Principles

- Make amount and monthly payment the strongest numbers.
- Keep explanatory copy light and short.
- Use sentence case throughout.
- Align financial labels and values in stable columns.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with tabular numerals.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 16px, card gaps 8–12px, and primary actions hold 14px vertical padding.

### Grid & Container

Home uses a two-column education grid followed by full-width sections. Calculator controls stay in one vertical card; partner offers stack as full-width rows.

### Whitespace Philosophy

Reserve open white space for trust and calculation. Confine gradients to campaigns or product sections rather than whole screens.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Forms and profile |
| 1 | Pale border or shadow | Info and loan cards |
| 2 | Gradient band | Product discovery |
| 3 | Dark camera surface | Verification capture |

### Decorative Depth

Use soft card shadows, gradient circles, and glossy objects. Avoid heavy glass effects.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Inputs and compact controls |
| `{rounded.sm}` | 8px | Buttons and information tiles |
| `{rounded.md}` | 12px | Calculator and partner cards |
| `{rounded.lg}` | 16px | Empty-state art |
| `{rounded.pill}` | full | Term choices and indicators |

### Photography & Illustration Geometry

Keep 3D objects centered in circles or anchored to one edge of a card. Partner imagery may use full-width campaign crops.

## Components

### Buttons

Primary actions use blue fill and white text. Disabled actions become pale lavender-gray. Secondary actions use outline or plain text.

### Pricing Tabs

Loan terms use compact equal-width choices; My loans uses a two-tab underline for Active and History.

### Cards & Containers

Information tiles pair short questions with one object. Loan calculator keeps term, slider, payment, rate, and repayment together. Partner cards preserve merchant identity.

### Inputs & Forms

Inputs use thin gray borders, labels above, and clear focus blue. Amount entry, slider, and presets remain synchronized.

### Status & Build Page

Verification warning stays near the header until resolved. Success uses a centered object, concise status, and one return action.

### Navigation

Home, My loans, New loan, and Support form the bottom bar. Header icons expose notifications and profile.

### Footer

The bottom navigation is the persistent footer. Long financial cards keep their primary action above it.

## Do's and Don'ts

### Do

- Show monthly payment and total repayment together.
- Keep verification state visible.
- Preserve merchant identity in partner offers.
- Use blue consistently for primary action.
- Give financial forms open white space.

### Don't

- Don't use gradients behind dense form text.
- Don't mix partner shopping with Airba loan status.
- Don't hide fees or repayment totals.
- Don't use 3D objects as unlabeled controls.
- Don't crowd the four-item navigation.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center content and widen calculator |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Wrap term choices and stack value rows |

### Touch Targets

Maintain at least 44px for term choices, sliders, tab items, and verification actions.

### Collapsing Strategy

Keep one-column finance forms. Wrap term choices before reducing labels; stack partner cards and keep the bottom action full width.

### Image Behavior

Contain education objects and merchant logos. Use cover only for partner campaigns; never crop product evidence or status art.

## Iteration Guide

1. Establish the header and four-tab navigation.
2. Build the loan calculator with synchronized controls.
3. Add verification and loan states.
4. Add partner cards and education tiles.
5. Apply illustration and gradient accents last.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 18-flow inventory was complete; representative full flows were inspected.
- Video-only transitions were not visually assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
