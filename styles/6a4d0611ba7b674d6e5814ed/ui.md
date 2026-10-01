<design-context>
---
version: 1
platform: iOS
name: Airba-pay-design-analysis
description: "A bright loan-management interface built from white space, Airba cyan, blue-to-violet gradients, compact finance cards, and friendly glossy objects. The system keeps calculations and verification practical while using a slim header and four-item bottom navigation."
colors:
  primary: "#2EA8F2"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 13, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  loan-calculator: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  info-tile: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 12 }
  partner-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  text-input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12 }
---

# Overview

Airba pay balances restrained finance forms with colorful product education. White is dominant; blue actions, thin cyan indicators, gradient campaign bands, and small 3D objects create hierarchy.

**Key Characteristics:**
- White canvas and low-contrast dividers.
- Cyan primary actions with violet gradient support.
- Compact calculator and partner cards.
- Persistent verification warning.
- Four-item bottom navigation.
- Glossy finance and shopping objects.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White canvas and low-contrast dividers.
- The reviewed screens show this treatment: Cyan primary actions with violet gradient support.
- The reviewed screens show this treatment: Compact calculator and partner cards.
- The reviewed screens show this treatment: Persistent verification warning.
- The reviewed screens show this treatment: Four-item bottom navigation.
- The reviewed screens show this treatment: Glossy finance and shopping objects.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — all screens, loan terms, support, and navigation.
- **System Mono** — amounts or codes when fixed-width alignment helps.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38pt | 700 | Campaign amount |
| `{typography.display-md}` | 26pt | 700 | Screen heading |
| `{typography.headline}` | 21pt | 700 | Loan total or empty state |
| `{typography.card-title}` | 16pt | 600 | Card title |
| `{typography.body}` | 14pt | 400 | Default content |
| `{typography.caption}` | 10pt | 400 | Tab and legal metadata |
| `{typography.button}` | 15pt | 600 | Actions |

### Principles

- Make amount and monthly payment the strongest numbers.
- Keep explanatory copy light and short.
- Use sentence case throughout.
- Align financial labels and values in stable columns.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with tabular numerals.

# Screen composition

### Grid & Container

Home uses a two-column education grid followed by full-width sections. Calculator controls stay in one vertical card; partner offers stack as full-width rows.

### Whitespace Philosophy

Reserve open white space for trust and calculation. Confine gradients to campaigns or product sections rather than whole screens.

# Navigation appearance

Home, My loans, New loan, and Support form the bottom bar. Header icons expose notifications and profile.

# Components

### Buttons

Primary actions use blue fill and white text. Disabled actions become pale lavender-gray. Secondary actions use outline or plain text.

Loan terms use compact equal-width choices; My loans uses a two-tab underline for Active and History.

### Cards & Containers

Information tiles pair short questions with one object. Loan calculator keeps term, slider, payment, rate, and repayment together. Partner cards preserve merchant identity.

### Inputs & Forms

Inputs use thin gray borders, labels above, and clear focus blue. Amount entry, slider, and presets remain synchronized.

### Status & Build Page

Verification warning stays near the header until resolved. Success uses a centered object, concise status, and one return action.

### Navigation

Home, My loans, New loan, and Support form the bottom bar. Header icons expose notifications and profile.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Forms and profile |
| 1 | Pale border or shadow | Info and loan cards |
| 2 | Gradient band | Product discovery |
| 3 | Dark camera surface | Verification capture |

### Decorative Depth

Use soft card shadows, gradient circles, and glossy objects. Avoid heavy glass effects.

# States

Verification warning stays near the header until resolved. Success uses a centered object, concise status, and one return action.

# iOS adaptation

| Wide | 768pt+ | Center content and widen calculator |
| Small | <390pt | Wrap term choices and stack value rows |

### Touch Targets

Maintain at least 44pt for term choices, sliders, tab items, and verification actions.

### Collapsing Strategy

Keep one-column finance forms. Wrap term choices before reducing labels; stack partner cards and keep the bottom action full width.

### Image Behavior

Contain education objects and merchant logos. Use cover only for partner campaigns; never crop product evidence or status art.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
